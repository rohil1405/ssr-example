import React from "react";
import { Routes, Route } from "react-router-dom";

function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

function About() {
  return <h1>About Us</h1>;
}

function Services() {
  return <h1>Our Services</h1>;
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
    </Routes>
  );
}

export default App;
