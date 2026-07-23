import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './AboutValues.css';

gsap.registerPlugin(ScrollTrigger);

export default function AboutValues() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  const valuesData = [
    {
      title: "Vision",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      desc: "To be a globally trusted leader in high-performance PP corrugated sheet manufacturing, setting new benchmarks in sustainable packaging and industrial innovation."
    },
    {
      title: "Mission",
      image: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=800&q=80",
      desc: "To deliver precision-engineered polypropylene solutions through continuous technological advancements, rigorous quality control, and exceptional client-first service."
    },
    {
      title: "Core Values",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      desc: "Integrity in every partnership, uncompromised material quality, customer-centric customization, and a commitment to eco-friendly 100% recyclable production."
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.querySelectorAll('.value-card');

      gsap.fromTo(
        cards,
        { y: 60, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.18,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="values-section">
      
      {/* BACKGROUND VECTOR GRAPHICS (MATCHING SCREENSHOT) */}
      
      {/* Left Sunburst Circular Rays */}
      <div className="bg-element sunburst-burst">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="45" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="6 6" />
          <circle cx="100" cy="100" r="65" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4 8" />
          <circle cx="100" cy="100" r="85" stroke="#e2e8f0" strokeWidth="1.5" strokeDasharray="3 10" />
        </svg>
      </div>

      {/* Right Top Circle Ring */}
      <div className="bg-element right-circle-ring">
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="40" stroke="#0072ce" strokeWidth="6" opacity="0.15" />
        </svg>
      </div>

      {/* Right Floating Plus/Cross Marks */}
      <div className="bg-element right-cross-marks">
        <span>+</span>
        <span>+</span>
        <span>+</span>
      </div>

      {/* Right Wavy Pattern Box */}
      <div className="bg-element right-wavy-pattern">
        <svg width="120" height="120" viewBox="0 0 100 100" fill="none">
          <path d="M0 20 Q 25 5, 50 20 T 100 20" stroke="#cbd5e1" strokeWidth="3" fill="none" opacity="0.4"/>
          <path d="M0 40 Q 25 25, 50 40 T 100 40" stroke="#cbd5e1" strokeWidth="3" fill="none" opacity="0.4"/>
          <path d="M0 60 Q 25 45, 50 60 T 100 60" stroke="#cbd5e1" strokeWidth="3" fill="none" opacity="0.4"/>
          <path d="M0 80 Q 25 65, 50 80 T 100 80" stroke="#cbd5e1" strokeWidth="3" fill="none" opacity="0.4"/>
        </svg>
      </div>

      {/* MAIN CARDS MATRIX */}
      <div className="values-container">
        <div ref={cardsRef} className="values-grid">
          {valuesData.map((item, index) => (
            <div key={index} className="value-card">
              
              {/* Image Frame */}
              <div className="value-img-frame">
                <img src={item.image} alt={item.title} className="value-card-img" />
              </div>

              {/* Card Body */}
              <div className="value-card-body">
                <h3 className="value-card-title">{item.title}</h3>
                <p className="value-card-desc">{item.desc}</p>
              </div>

              {/* Bottom Action Arrow */}
              <div className="value-card-footer">
                <button className="value-arrow-btn" aria-label={`Explore ${item.title}`}>
                  <ArrowRight size={18} className="arrow-icon" />
                </button>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}