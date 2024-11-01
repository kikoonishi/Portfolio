import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Publications from './pages/Publications';
import Header from './components/Header';
import Footer from './components/Footer'; 
import './App.css';




function App() {

  return (
    <Router>
      <div className="App">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/publication">Publicatioin</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/publication" element={<Publications />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;


