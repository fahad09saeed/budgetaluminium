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

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', appointment_date: '', message: ''
  });
  const [response, setResponse] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/inquiry', formData);
      setResponse(res.data.message);
    } catch (error) {
      console.error('Error:', error);
    }
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
          <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Phone" onChange={handleChange} required />
        <input type="text" name="service" placeholder="Service Needed" onChange={handleChange} required />
        <input type="date" name="appointment_date" onChange={handleChange} />
        <textarea name="message" placeholder="Ask a question..." onChange={handleChange}></textarea>
        <button type="submit">Submit</button>
      </form>
      {response && <p><strong>AI Response:</strong> {response}</p>}
            {/* <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>
              <FaPaperPlane />
            </button> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
