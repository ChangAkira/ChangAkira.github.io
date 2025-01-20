let controller = null; // 用于存储 AbortController 实例

document.getElementById("chatForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    await sendMessage(); // 调用发送消息的函数
});

// 监听 textarea 的 keydown 事件
document.getElementById("demo-message").addEventListener("keydown", async (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault(); // 阻止默认的换行行为
        await sendMessage(); // 调用发送消息的函数
    }
});

// 发送消息的函数
async function sendMessage() {
    const userMessage = document.getElementById("demo-message").value;
    const responseContainer = document.getElementById("response-container");
    const apiUrl = "https://api.deepseek.com/chat/completions";
    const apiKey = "sk-2bb1b37a7bcb4485bf791fd570095461"; // 替换为你的 API Key
    const sendButton = document.getElementById("send-button");
    const textarea = document.getElementById("demo-message");

    // 禁用 submit 按钮和 textarea
    sendButton.disabled = true;
    textarea.disabled = true;

    // 显示用户输入的消息
    responseContainer.innerHTML += `<p><strong>User:</strong> ${escapeHTML(userMessage)}</p>`;
    const replyContainer = document.createElement("p");
    replyContainer.innerHTML = `<strong>AI:</strong> `;
    responseContainer.appendChild(replyContainer);

    // 创建 AbortController 实例
    controller = new AbortController();

    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "deepseek-chat",
                stream: true, // 开启流式返回
                messages: [{ role: "user", content: userMessage }]
            }),
            signal: controller.signal // 绑定 AbortController 的信号
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 使用流式解析
        const reader = response.body.getReader();
        const decoder = new TextDecoder("utf-8");
        let done = false;
        let accumulatedText = ""; // 用于存储完整的回复内容

        while (!done) {
            const { value, done: readerDone } = await reader.read();
            done = readerDone;

            if (value) {
                const chunk = decoder.decode(value, { stream: true });
                const lines = chunk.split("\n").filter(line => line.trim() !== "");

                for (const line of lines) {
                    if (line.startsWith("data: ")) {
                        const parsedData = JSON.parse(line.slice(6)); // 去除 "data: " 前缀

                        // 如果有 delta.content，则拼接到 accumulatedText
                        if (parsedData?.choices?.[0]?.delta?.content) {
                            accumulatedText += parsedData.choices[0].delta.content;
                            replyContainer.innerHTML = `<strong>AI:</strong> ${accumulatedText}<span class="typing-cursor">|</span>`;
                            
                            // 添加滚动跟随
                            responseContainer.scrollTop = responseContainer.scrollHeight;
                        }

                        // 如果接收到 finish_reason，则结束解析
                        if (parsedData?.choices?.[0]?.finish_reason === "stop") {
                            done = true;
                            break;
                        }
                    }
                }
            }
        }

        // 流式返回完成后，移除打字光标
        replyContainer.innerHTML = `<strong>AI:</strong> ${accumulatedText}`;
    } catch (error) {
        if (error.name === "AbortError") {
            replyContainer.innerHTML = `<strong>AI:</strong> ${accumulatedText}`;
        } else {
            replyContainer.innerHTML = `<strong>Error:</strong> ${error.message}`;
        }
    } finally {
        // 在 finally 块中统一渲染公式和 Markdown
        MathJax.typesetPromise([responseContainer]).catch((err) => console.error(err.message));
        renderMarkdown(replyContainer);

        // 清空输入框并重新启用 textarea 和 submit 按钮
        document.getElementById("demo-message").value = "";
        textarea.disabled = false;
        sendButton.disabled = false;

        // 重置 AbortController
        controller = null;

        responseContainer.scrollTop = responseContainer.scrollHeight;
    }
}

// 添加 STOP 按钮的点击事件
document.getElementById("stop-button").addEventListener("click", () => {
    if (controller) {
        controller.abort(); // 中断 fetch 请求

        // 重新启用 submit 按钮和 textarea
        const sendButton = document.getElementById("send-button");
        const textarea = document.getElementById("demo-message");
        sendButton.disabled = false;
        textarea.disabled = false;
    }
});

// 用于解析 SSE 数据的辅助函数
function parseStreamData(data) {
    try {
        // 按行分隔并尝试解析 JSON
        const lines = data.split("\n").filter(line => line.trim() !== "");
        for (const line of lines) {
            if (line.startsWith("data: ")) {
                return JSON.parse(line.slice(6)); // 去除 "data: " 前缀
            }
        }
    } catch (error) {
        console.error("解析流数据时出错：", error);
    }
    return null;
}

// 转义 HTML 特殊字符（排除 Markdown 语法中的特殊字符）
function escapeHTML(str) {
    const markdownChars = ['#', '-', '*', '|', '`', '_', '[', ']', '(', ')', '!'];
    const div = document.createElement("div");
    div.innerText = str;
    let escapedText = div.innerHTML;

    // 恢复 Markdown 特殊字符
    markdownChars.forEach(char => {
        escapedText = escapedText.replace(new RegExp(`&${char.charCodeAt(0).toString()};`, 'g'), char);
    });

    return escapedText;
}

// 手动触发 Markdown 渲染
function renderMarkdown(container) {
    const markdownContent = container.innerHTML;
    container.innerHTML = marked.parse(markdownContent); // 使用 marked.js 渲染 Markdown
}