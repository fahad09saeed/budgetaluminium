import React from "react";
import Chatbot from "./components/Chatbotss.js";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PatioCovers from "./components/Sections/PatioCovers.jsx"
import Sunrooms from "./components/Sections/Sunrooms.jsx";
import Rallings from "./components/Sections/Rallings.jsx";
import Sleekfence from "./components/Sections/Sleekfence.jsx";
import HomeRenovation from "./components/Sections/HomeRenovation.jsx";
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
        <Route path="/sun-rooms" element={<Sunrooms />} />
        <Route path="/rallings-fence-gates" element={<Rallings />} />
        <Route path="/sleek-fence" element={<Sleekfence />} />
        <Route path="/home-renovation" element={<HomeRenovation />} />
      </Routes>
    </Router>
      <div>
            <Chatbot />
        </div>
    </>
  );
}


