import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutOverview.css';

import mainImg from '../assets/multipurpose.jpeg';
import overlayImg from '../assets/hero1.jpg';

gsap.registerPlugin(ScrollTrigger);

export default function AboutOverview() {
  const sectionRef = useRef(null);
  const mainImgRef = useRef(null);
  const overlayImgRef = useRef(null);
  const textContentRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Main Image Entrance (Triggers when section enters viewport)
      gsap.fromTo(
        mainImgRef.current,
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%', // Section me pahunchne par hi start hoga
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 2. Overlapping Image Entrance (Lagged Delay for Depth Effect)
      gsap.fromTo(
        overlayImgRef.current,
        { y: 90, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          delay: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 3. Blue Accent Line Expansion
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left center' },
        {
          scaleX: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // 4. Staggered Text Paragraphs & Features Reveal
      gsap.fromTo(
        textContentRef.current.children,
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="about-overview-section">
      <div className="about-overview-container">
        
        {/* Left Column: Overlapping Image Stack */}
        <div className="about-img-collage-wrapper">
          
          {/* Main Background Image */}
          <div ref={mainImgRef} className="about-main-img-frame">
            <img 
              src={mainImg} 
              alt="Savaj Polytech Manufacturing Facility" 
              className="about-collage-img" 
            />
          </div>

          {/* Overlapping Secondary Floating Image */}
          <div ref={overlayImgRef} className="about-overlay-img-frame">
            <img 
              src={overlayImg} 
              alt="Savaj Polytech PP Corrugated Sheets" 
              className="about-collage-img" 
            />
            <div className="about-overlay-badge">
              <span className="badge-number">100%</span>
              <span className="badge-text">Virgin Grade Quality</span>
            </div>
          </div>

        </div>

        {/* Right Column: Corporate Content */}
        <div ref={textContentRef} className="about-overview-content">
          
          <span className="about-overview-badge">WHO WE ARE</span>
          
          <h2 className="about-overview-heading">
            Engineering High-Performance <span className="highlight">Polypropylene Solutions</span>
          </h2>
          
          <div ref={lineRef} className="about-heading-line"></div>

          <p className="about-paragraph highlight-lead">
            Welcome to <strong>Savaj Polytech</strong>, a premier manufacturer of extruded twin-wall PP corrugated sheets and custom packaging structures in Gujarat, India. Engineered for high impact, weather durability, and lightweight versatility, our solutions serve demanding modern industries.
          </p>

          <p className="about-paragraph">
            With a relentless focus on material precision and technological innovation, we produce a comprehensive lineup including <strong>PP Corrugated Sheets, Floor & Tile Protection Sheets, Sunpack Advertising Boards, PP Hollow Flute Sheets, Layer Pads, and Custom Plastic Partitions & Boxes</strong>.
          </p>

          <p className="about-paragraph">
            From protecting high-end surfaces on construction sites to providing eco-friendly, shock-absorbing logistics crates, Savaj Polytech delivers high-density Polypropylene solutions built to perform efficiently across packaging, advertising, construction, and global supply chain sectors.
          </p>

          {/* Key Advantage Points */}
          <div className="about-features-mini-grid">
            <div className="feature-mini-item">
              <div className="feature-dot"></div>
              <span>Moisture & Chemical Resistant</span>
            </div>
            <div className="feature-mini-item">
              <div className="feature-dot"></div>
              <span>100% Recyclable & Eco-Friendly</span>
            </div>
            <div className="feature-mini-item">
              <div className="feature-dot"></div>
              <span>Corona Treated for High Printing</span>
            </div>
            <div className="feature-mini-item">
              <div className="feature-dot"></div>
              <span>Tailored GSM & Custom Dimensions</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}