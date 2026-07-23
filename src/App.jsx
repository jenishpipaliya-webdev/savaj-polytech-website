import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
 // Naye Home component ko import kiya
import './App.css';
import About from './pages/About';
import ProductsPage from './pages/ProductsPage';
import ScrollToTop from './components/ScrollToTop';

// Placeholders for future pages


const Contact = () => <div style={{ paddingTop: '100px', textAlign: 'center' }}><h1>Contact Us Page</h1></div>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <ScrollToTop/>
        <Navbar />

        <Routes>
          {/* Path '/' par ab naya HeroSection wala Home render hoga */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;