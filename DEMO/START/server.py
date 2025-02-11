from flask import Flask, request, jsonify
import requests
import os

app = Flask(__name__)

#  !!!  重要安全提示  !!!
#  API 密钥和 API URL 应该从环境变量或更安全的方式读取，
#  绝 *不* 应该直接硬编码在代码中！！！
API_KEY = os.environ.get("CHAT_API_KEY")  # 从环境变量中读取 API 密钥
API_URL = os.environ.get("CHAT_API_URL")  # 从环境变量中读取 API URL
MODEL_NAME = "gpt-3.5-turbo" # 模型名称，也可以设置为环境变量

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
        "stream": False, #  先设置为 False，后续可以根据需要修改为 True 实现流式响应
        "messages": [{"role": "user", "content": user_message}]
    }

    try:
        response = requests.post(API_URL, headers=headers, json=data)
        response.raise_for_status()  # 检查 HTTP 错误

        ai_reply = response.json() #  假设 API 返回 JSON 格式
        return jsonify(ai_reply)

    except requests.exceptions.RequestException as e:
        print(f"API 请求错误: {e}") #  更详细的错误日志
        return jsonify({"error": "API 请求出错", "details": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=False, port=5000) #  debug=True 仅用于开发环境，生产环境应设置为 False