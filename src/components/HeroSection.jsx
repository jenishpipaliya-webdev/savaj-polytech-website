import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

// Importing 4 hero images from assets
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import hero4 from '../assets/hero4.jpg';

const images = [hero1, hero2, hero3, hero4];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background Image auto slider (change every 5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-container">
      {/* Dynamic Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg-slide ${index === currentImageIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Dark Overlay for Text Readability */}
      <div className="hero-overlay" />

      {/* Main Content Area */}
      <div className="hero-content-wrapper">
        <div className="hero-left-content">
          <h1 className="hero-headline">
            REDEFINING INNOVATION IN <span className="highlight-text">PP SHEETS</span>
          </h1>

          <p className="hero-subheadline">
            Savaj Polytech Private Limited is Gujarat’s premier manufacturer of high-performance Polypropylene (PP) Corrugated Sheets. Engineered for superior durability, weather resistance, and 100% recyclability.
          </p>

          <Link to="/products" className="hero-cta-btn">
            <span>Learn More</span>
            <div className="btn-arrow-circle">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>

        {/* Right Floating Stats Card */}
        <div className="hero-stats-card">
          <div className="stats-tag">Proud Milestones</div>

          <div className="stat-item">
            <h2 className="stat-number">3+ Years</h2>
            <p className="stat-label">Continuous Manufacturing Expertise</p>
          </div>

          <div className="stat-item">
            <h2 className="stat-number">06</h2>
            <p className="stat-label">Industries Served Globally with PP Solutions</p>
          </div>

          <div className="stat-item">
            <h2 className="stat-number">50+</h2>
            <p className="stat-label">Clients Partnered in Growth & Success</p>
          </div>
        </div>
      </div>
    </section>
  );
}