import json  #  !!!  首先，确保导入 json 库 !!!
from flask import Flask, request, jsonify, stream_with_context, Response
import requests
import os
import numpy as np # 导入 NumPy
from sentence_transformers import SentenceTransformer # 导入 SentenceTransformer
import faiss # 导入 FAISS
import csv # 确保 csv 库已导入 

app = Flask(__name__)
# 加载 Sentence-BERT 模型
model_path = '/www/wwwroot/moyuan/DEMO/all-MiniLM-L6-v2'  # 本地模型路径
model = SentenceTransformer(model_path)

# 加载知识向量和 FAISS 索引
knowledge_vectors = []
vector_array = None # 初始化 vector_array
index = None # 初始化 index

KNOWLEDGE_FILE = '../algebra_knowledge.csv' # 知识库 CSV 文件路径 (请根据你的实际文件路径修改)

def load_knowledge_base():
    global knowledge_vectors, vector_array, index # 声明要修改全局变量

    knowledge_data = []
    with open(KNOWLEDGE_FILE, mode='r', encoding='utf-8') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            knowledge_data.append(row)

    for item in knowledge_data:
        description = item['描述']
        if description:
            vector = sentence_model.encode(description)
            knowledge_vectors.append({
                '类别': item['类别'],
                '名称': item['名称'],
                '描述': description,
                '公式': item['公式'],
                '向量': vector.tolist()
            })

    vector_array = np.array([item['向量'] for item in knowledge_vectors]).astype('float32')
    dimension = vector_array.shape[1]
    index = faiss.IndexFlatL2(dimension)
    index.add(vector_array)

# 在应用启动时加载知识库
load_knowledge_base()
print("知识库加载完成！") #  可选的打印信息，用于确认知识库是否加载成功

# 知识库搜索函数 (如果你还没有添加到代码中，需要添加)
def search_knowledge_faiss(query_text, top_k=3): # top_k 参数可以根据需要调整
    global knowledge_vectors, vector_array, index # 声明使用全局变量
    query_vector = sentence_model.encode(query_text).reshape(1, -1).astype('float32')
    distances, indices = index.search(query_vector, top_k)
    results = []
    for i in range(len(indices[0])):
        result_index = indices[0][i]
        if result_index != -1:
            results.append({
                '名称': knowledge_vectors[result_index]['名称'],
                '描述': knowledge_vectors[result_index]['描述'],
                '公式': knowledge_vectors[result_index]['公式'],
                '距离': distances[0][i]
            })
    return results

API_KEY = os.environ.get("CHAT_API_KEY")
API_URL = os.environ.get("CHAT_API_URL")
MODEL_NAME = os.environ.get("CHAT_MODEL")

if not API_KEY or not API_URL:
    raise ValueError("API_KEY 或 API_URL 环境变量未设置！")

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({"error": "message 参数缺失"}), 400

    # 1. 知识库检索
    knowledge_results = search_knowledge_faiss(user_message, top_k=3) # 检索 top 3 相关知识条目

    # 2. 构建 RAG Prompt
    context_knowledge = ""
    if knowledge_results: # 只有当检索到知识时才添加到 Prompt 中
        context_knowledge += "以下是一些可能相关的代数或通用知识，请参考它们来更好地回答用户的问题，但请注意你的回答仍然需要流畅自然，不要直接照搬知识库内容：\n" # Prompt 指示
        for result in knowledge_results:
            context_knowledge += f"知识名称: {result['名称']}\n知识描述: {result['描述']}\n---\n" # 拼接知识条目信息
    rag_prompt = f"{context_knowledge}用户问题：{user_message}\n答案：" # 构建完整的 RAG Prompt

    # 3. 构建 API 请求数据 (使用 RAG Prompt 替换 user_message)
    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "model": MODEL_NAME,
        "stream": True,
        "messages": [{"role": "user", "content": rag_prompt}] # 使用 rag_prompt
    }

    def generate():
        try:
            with requests.post(API_URL, headers=headers, json=data, stream=True) as response:
                response.raise_for_status()
                for line in response.iter_lines():
                    if line:
                        decoded_line = line.decode('utf-8')
                        yield f"data: {decoded_line}\n\n"
        except requests.exceptions.RequestException as e:
            error_message = {"error": "API请求出错", "details": str(e)}
            yield f"data: {json.dumps(error_message)}\n\n"

    return Response(stream_with_context(generate()), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True, port=5000)
