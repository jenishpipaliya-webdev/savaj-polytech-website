import React, { useState, useEffect } from 'react';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MarqueeTicker from './MarqueeTicker';
import './ProductHero.css';

export default function ProductHero() {
  // Public folder background image paths (Vercel-proof)
  const images = [
    '/productpageimage/floorprotectionsheet1.jpg',
    '/productpageimage/constructionprotectionsheet1.jpg',
    '/productpageimage/industrialpackagingsheets1.jpg',
    '/productpageimage/multipurposeplasticsheets1.jpg'
  ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="product-hero-wrapper">
      
      {/* 1. Top Image Banner Area */}
      <div className="product-hero-bg-wrapper">
        {images.map((img, index) => (
          <div
            key={index}
            className={`product-hero-bg-slide ${
              index === currentImgIndex ? 'is-active' : ''
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="product-hero-overlay"></div>
      </div>

      {/* 2. Absolute Floating Card */}
      <div className="product-hero-container">
        <div className="product-hero-card">
          
          <div className="product-card-top">
            <div className="product-card-line"></div>
            <span className="product-company-tag">Savaj Polytech</span>
          </div>

          <h1 className="product-card-title">PRODUCTS</h1>

          <p className="product-card-desc">
            Explore our high-performance PP corrugated sheets, floor protection rolls, and innovative polymer solutions built for industrial strength and reliability.
          </p>

          <div className="product-breadcrumb-pill">
            <Link to="/" className="breadcrumb-home-link">
              <Home size={15} />
            </Link>
            <ChevronRight size={14} className="breadcrumb-arrow" />
            <span className="breadcrumb-current">Products</span>
          </div>

        </div>
      </div>

      {/* 3. Marquee Ticker directly below image */}
      <div className="product-bottom-ticker-layer">
        <MarqueeTicker />
      </div>

    </section>
  );
}