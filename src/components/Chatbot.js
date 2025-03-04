import React, { useState } from "react";
import { FaCommentDots, FaPaperPlane, FaTimes } from "react-icons/fa";
import axios from "axios";
import "./Chatbot.css"; // Import styles

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim() === "") return;
    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post("http://localhost:5000/api/chat", {
        message: input,
      });
      const botMessage = { text: response.data.reply, sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching response:", error);
    }

    setInput("");
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-icon" onClick={toggleChat}>
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </div>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <h3>Live Chat</h3>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-footer">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
