import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./App.css";

function Home() {
  return (
    <>
      <Helmet>
        <title>Home - My Website</title>
        <meta
          name="description"
          content="Welcome to the Home Page of My Website"
        />
        <meta name="keywords" content="Home, Website, React" />
      </Helmet>
      <h1>Welcome to Home Page</h1>
    </>
  );
}

function About() {
  return (
    <>
      <Helmet>
        <title>About Us - My Website</title>
        <meta
          name="description"
          content="Learn more about us on the About Page"
        />
        <meta name="keywords" content="About, Us, Website, React" />
      </Helmet>
      <h1>About Us</h1>
    </>
  );
}

function Services() {
  return (
    <>
      <Helmet>
        <title>Services - My Website</title>
        <meta
          name="description"
          content="Discover the services we offer on the Services Page"
        />
        <meta name="keywords" content="Services, Website, React" />
      </Helmet>
      <h1>Our Services</h1>
    </>
  );
}

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
