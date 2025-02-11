from flask import Flask, request, jsonify, stream_with_context, Response
import requests
import os

app = Flask(__name__)

API_KEY = os.environ.get("CHAT_API_KEY")
API_URL = os.environ.get("CHAT_API_URL")
MODEL_NAME = "gpt-3.5-turbo"

if not API_KEY or not API_URL:
    raise ValueError("API_KEY 或 API_URL 环境变量未设置！")

@app.route('/api/chat', methods=['POST'])
def chat():
    user_message = request.json.get('message')
    if not user_message:
        return jsonify({"error": "message 参数缺失"}), 400

    headers = {
        "Authorization": f"Bearer {API_KEY}",
        "Content-Type": "application/json"
    }
    data = {
        "model": MODEL_NAME,
        "stream": True,  #  !!!  设置为 True 开启流模式 !!!
        "messages": [{"role": "user", "content": user_message}]
    }

    def generate():  #  !!!  定义生成器函数 !!!
        try:
            with requests.post(API_URL, headers=headers, json=data, stream=True) as response: #  !!!  requests 也设置 stream=True !!!
                response.raise_for_status()
                for line in response.iter_lines(): #  !!!  逐行迭代流式响应 !!!
                    if line:
                        decoded_line = line.decode('utf-8') # 解码
                        #  !!!  假设 API 返回的是 Server-Sent Events 格式，或者类似的 JSON 结构，需要根据实际API格式解析 !!!
                        #  !!!  这里只是一个简单的示例，假设每行就是一个 JSON 字符串 !!!
                        yield f"data: {decoded_line}\n\n" #  !!!  SSE 格式 !!!
        except requests.exceptions.RequestException as e:
            yield f"data: {\"error\": \"API 请求出错\", \"details\": \"{str(e)}\"}\n\n" #  !!! 流式返回错误信息 !!!

    return Response(stream_with_context(generate()), mimetype='text/event-stream') #  !!!  使用 Response 和 stream_with_context 返回流式响应 !!!