import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
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

  return (
    <div>
      <h2>Chatbot Inquiry</h2>
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
    </div>
  );
};

export default Chatbot;
