import React, { useState, useEffect } from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarqueeTicker from './MarqueeTicker';
import './ContactHero.css';

import bgImg1 from '../assets/floorsheet.jpeg';
import bgImg2 from '../assets/Construction.jpeg';
import bgImg3 from '../assets/packaging.jpeg';
import bgImg4 from '../assets/multipurpose.jpeg';

export default function ContactHero() {
  const images = [bgImg1, bgImg2, bgImg3, bgImg4];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="contact-hero-wrapper">
      
      {/* 1. Top Image Banner */}
      <div className="contact-hero-bg-wrapper">
        {images.map((img, index) => (
          <div
            key={index}
            className={`contact-hero-bg-slide ${
              index === currentImgIndex ? 'is-active' : ''
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="contact-hero-overlay"></div>
      </div>

      {/* 2. Absolute Card - Overlaps Image Banner & Marquee Ticker */}
      <div className="contact-hero-container">
        <div className="contact-hero-card">
          
          <div className="contact-card-top">
            <div className="contact-card-line"></div>
            <span className="contact-company-tag">Savaj Polytech</span>
          </div>

          <h1 className="contact-card-title">CONTACT</h1>

          <p className="contact-card-desc">
            We are Gujarat's premier PP corrugated sheet manufacturer engineered for continuous growth, industrial durability, and packaging innovation.
          </p>

          <div className="contact-breadcrumb-pill">
            <Link to="/" className="breadcrumb-home-link">
              <Home size={15} />
            </Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">Contact</span>
          </div>

        </div>
      </div>

      {/* 3. Marquee Ticker Layer Directly Below (Text runs under the overlapping card) */}
      <div className="contact-bottom-ticker-layer">
        <MarqueeTicker />
      </div>

    </section>
  );
}