import json  #  !!!  首先，确保导入 json 库 !!!
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
        "stream": True,
        "messages": [{"role": "user", "content": user_message}]
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
            #  !!!  修改为使用 json.dumps() 生成 JSON 字符串 !!!
            error_message = {"error": "API请求出错", "details": str(e)} #  构建 Python 字典
            yield f"data: {json.dumps(error_message)}\n\n" #  使用 json.dumps() 将字典转换为 JSON 字符串

    return Response(stream_with_context(generate()), mimetype='text/event-stream')

if __name__ == '__main__':
    app.run(debug=True, port=5000)