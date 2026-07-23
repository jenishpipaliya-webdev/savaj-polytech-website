import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';
import savajLogoSvg from '../assets/savajlogoorange5.svg'; // SVG File Import
import './Navbar.css';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="custom-navbar">
      <div className="navbar-container">
        
        {/* Brand Logo using SVG */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img 
            src={savajLogoSvg} 
            alt="Savaj Lion Logo" 
            className="brand-logo-svg" 
          />
          {/*<span className="brand-title">
            SAVAJ <span className="brand-title-accent">POLYTECH</span>
          </span>*/}
        </Link>

        {/* Desktop Nav Menu */}
        <nav className="desktop-nav">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link 
                to="/products" 
                className={`nav-link ${location.pathname === '/products' ? 'active' : ''}`}
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="contact-btn">
                <span>Contact Us</span>
                <div className="btn-arrow-circle">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle Button */}
        <button 
          className="mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            <li>
              <Link 
                to="/" 
                className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`mobile-nav-link ${location.pathname === '/about' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={`mobile-nav-link ${location.pathname === '/products' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="mobile-contact-btn" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}