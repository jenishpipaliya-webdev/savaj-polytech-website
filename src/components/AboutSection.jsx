import React from 'react';
import { ShieldCheck, Sliders, Handshake, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './AboutSection.css';
import aboutImg from '../assets/about-sheet.jpg';

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        
        {/* Top Split Layout: Text Content + Main Image */}
        <div className="about-top-grid">
          {/* Left Column: Story Block */}
          <div className="about-text-content">
            <span className="about-tagline">WHO WE ARE</span>
            <h2 className="about-main-title">
              About <span className="highlight-text">Savaj Polytech</span>
            </h2>
            <p className="about-paragraph">
              Based in Gujarat, India, SAVAJ POLYTECH PRIVATE LIMITED is a premier manufacturer of high-performance Polypropylene (PP) Corrugated Sheets. We specialize in producing lightweight, high-impact twin-wall fluted plastic structures engineered for maximum durability, weather resistance, and cost efficiency.
            </p>
            <p className="about-paragraph">
              Our state-of-the-art extrusion technology allows us to deliver a comprehensive product range including PP Flute Boards, Floor Protection Sheets, Layer Pads, Custom Corrugated Boxes, and Sunpack Sheets. Crafted from premium polypropylene copolymer, our sheets offer superior moisture resistance and 100% recyclability across industrial packaging, construction, signage, and agriculture.
            </p>
          </div>

          {/* Right Column: Visual Asset */}
          <div className="about-image-wrapper">
            <img 
              src={aboutImg} 
              alt="Savaj Polytech Polypropylene Corrugated Sheet Manufacturing" 
              className="about-image"
            />
          </div>
        </div>

        {/* Bottom Section: 3 Feature Cards */}
        <div className="about-cards-grid">
          
          {/* Card 1 */}
          <div className="about-card">
            <div className="card-icon-wrapper">
              <ShieldCheck className="card-icon" size={28} />
            </div>
            <div className="card-content">
              <h3 className="card-title">Premium Quality</h3>
              <p className="card-desc">
                Engineered using advanced extrusion lines to ensure consistent sheet thickness, high crush strength, and uncompromised durability every time.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="about-card">
            <div className="card-icon-wrapper">
              <Sliders className="card-icon" size={28} />
            </div>
            <div className="card-content">
              <h3 className="card-title">Custom Precision</h3>
              <p className="card-desc">
                Tailored solutions in custom GSM, thickness (2mm–12mm), and colors (Blue, White, Clear) to perfectly match your industrial specifications.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="about-card">
            <div className="card-icon-wrapper">
              <Handshake className="card-icon" size={28} />
            </div>
            <div className="card-content">
              <h3 className="card-title">Trusted Reliability</h3>
              <p className="card-desc">
                A dependable B2B partner providing cost-effective, eco-friendly, and moisture-proof plastic sheet solutions with seamless delivery.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom CTA Button */}
        <div className="about-cta-wrapper">
          <Link to="/about" className="about-cta-btn">
            <span>Learn More</span>
            <div className="btn-arrow-circle">
              <ArrowRight size={18} />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}