import React from "react";
import Chatbot from "./components/Chatbot";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatioCovers from "./components/Sections/PatioCovers.jsx"
// Screens
import Landing from "./screens/Landing.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>

      <Routes>
      <Route path="/" element={<Landing />} />
        <Route path="/patio-covers" element={<PatioCovers />} />
      </Routes>
    </Router>
      <div>
            <h1>Welcome to Budget Aluminium</h1>
            <Chatbot />
        </div>
    </>
  );
}


