import React, { useState, useEffect } from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarqueeTicker from './MarqueeTicker';
import './AboutHero.css';

import bgImg1 from '../assets/floorsheet.jpeg';
import bgImg2 from '../assets/Construction.jpeg';
import bgImg3 from '../assets/packaging.jpeg';
import bgImg4 from '../assets/multipurpose.jpeg';

export default function AboutHero() {
  const images = [bgImg1, bgImg2, bgImg3, bgImg4];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="about-hero-wrapper">
      
      {/* 1. Top Image Banner */}
      <div className="about-hero-bg-wrapper">
        {images.map((img, index) => (
          <div
            key={index}
            className={`about-hero-bg-slide ${
              index === currentImgIndex ? 'is-active' : ''
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="about-hero-overlay"></div>
      </div>

      {/* 2. Marquee Ticker directly below image */}
      <div className="about-bottom-ticker-layer">
        <MarqueeTicker />
      </div>

      {/* 3. Absolute Overlay Card - Locked to the bottom edge of Marquee */}
      <div className="about-hero-container">
        <div className="about-hero-card">
          
          <div className="about-card-top">
            <div className="about-card-line"></div>
            <span className="about-company-tag">Savaj Polytech</span>
          </div>

          <h1 className="about-card-title">ABOUT</h1>

          <p className="about-card-desc">
            We are a leading PP corrugated sheet manufacturer engineered for continuous growth, industrial durability, and packaging innovation.
          </p>

          <div className="about-breadcrumb-pill">
            <Link to="/" className="breadcrumb-home-link">
              <Home size={15} />
            </Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">About</span>
          </div>

        </div>
      </div>

    </section>
  );
}