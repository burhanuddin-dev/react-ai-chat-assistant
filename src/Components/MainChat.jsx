import { GoPlus } from "react-icons/go";
import { IoMicOutline } from "react-icons/io5";
import { PiWaveformBold } from "react-icons/pi";
import { useState } from "react";
import GetResponseFromAPI from "../../api/server.js";

function MainChat({ messages, setMessages }) {

  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  function handleInput(e) {
    if (e.key === "Enter") {
      handleData();
    }
  }

  async function handleData() {
    if (!inputValue.trim()) return;

    const userMessage = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);

    setInputValue("");
    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const reply = await GetResponseFromAPI(inputValue);

    const assistantMessage = { role: "assistant", content: reply.content };
    setMessages((prev) => [...prev, assistantMessage]);

    setIsLoading(false);
  }

  function formatMessageContent(content) {
    let formatted = content
      .replace(/\n/g, "<br>")
      .replace(/(\d+)\./g, "<b>$1.</b>")
      .replace(/([A-Za-z ]+):/g, "<b>$1:</b>")
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/\*(.*?)\*/g, "<b>$1</b>");

    return formatted;
  }

  return (
    <div className="chat-container">
      <div className="message-container">
        {messages.map((message, index) => {
          return (
            <div
              key={index}
              className={
                message.role === "user" ? "user-message" : "gpt-message"
              }
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: formatMessageContent(message.content),
                }}
              ></p>
            </div>
          );
        })}

        {isLoading && (
    <div className="gpt-message thinking">
      <p>Thinking...</p>
    </div>
  )}
      </div>

      <div className="search-container">
        <div className="search-bar">
          <button>
            <GoPlus className="search-icon" />
          </button>
          <input
            type="text"
            placeholder="Ask anything"
            className="search-input"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            onKeyDown={handleInput}
          />
          <button>
            <IoMicOutline className="search-icon" />
          </button>
          <button>
            <PiWaveformBold className="search-icon" />
          </button>
        </div>
      </div>
      <span className="error-message">
        ChatGPT can make mistakes. Check important info.
      </span>
    </div>
  );
}

export default MainChat;

