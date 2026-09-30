import React, { useState } from "react";
import { FaCommentDots, FaPaperPlane, FaTimes } from "react-icons/fa";
import axios from "axios";
import "./Chatbot.css"; // Import styles

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you?", sender: "bot" },
  ]);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    appointment: "",
  });

  const [botResponse, setBotResponse] = useState("");

  const questions = [
    { key: "name", text: "What is your name?" },
    { key: "email", text: "What is your email?" },
    { key: "phone", text: "What is your phone number?" },
    { key: "service", text: "What service do you need?" },
    { key: "message", text: "Any specific message or requirements?" },
    { key: "appointment", text: "When would you like to book an appointment?" },
  ];

  

  const handleResponse = (event) => {
    setFormData({ ...formData, [questions[step].key]: event.target.value });
  };

  const nextStep = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      submitInquiry();
    }
  };


  const submitInquiry = async () => {
    try {
      await axios.post("http://localhost:5000/api/inquiry", formData);
      alert("Inquiry submitted! Check your email for confirmation.");
    } catch (error) {
      console.error("Error submitting inquiry:", error);
    }
  };

  const askAI = async (userMessage) => {
    try {
      const response = await axios.post("http://localhost:5000/api/ai-response", { userMessage });
      setBotResponse(response.data.reply);
    } catch (error) {
      console.error("AI Response Error:", error);
    }
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
          <p>{questions[step].text}</p>
      <input type="text" value={formData[questions[step].key]} onChange={handleResponse} />
      <button onClick={nextStep}>Next</button>

      <p>Any information you need?</p>
      <input type="text" className="messagebox" placeholder="Ask anything..." onBlur={(e) => askAI(e.target.value)} />
      {botResponse && <p><strong>AI:</strong> {botResponse}</p>}
          </div>
          <div className="chat-footer">
         
      
      <div>
     
    </div>
        
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
