import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ShieldCheck, 
  Cpu, 
  Coins, 
  Sliders, 
  Truck, 
  Headphones 
} from 'lucide-react';
import './WhyChooseUs.css';

gsap.registerPlugin(ScrollTrigger);

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const svgLinesRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    {
      id: "01",
      icon: <ShieldCheck size={28} />,
      title: "Premium Quality Materials",
      desc: "We use 100% virgin-grade polypropylene to manufacture durable, weather-resistant, and high-impact sheets."
    },
    {
      id: "02",
      icon: <Cpu size={28} />,
      title: "Advanced Manufacturing",
      desc: "State-of-the-art production technology ensures precise thickness, uniform density, and superior finish."
    },
    {
      id: "03",
      icon: <Coins size={28} />,
      title: "Cost-Effective Pricing",
      desc: "Direct manufacturer pricing that offers maximum value for your investment without compromising quality."
    },
    {
      id: "04",
      icon: <Sliders size={28} />,
      title: "Custom Solutions & Sizes",
      desc: "Tailor-made dimensions, colors, and GSM options designed specifically to meet your project needs."
    },
    {
      id: "05",
      icon: <Truck size={28} />,
      title: "Reliable Logistics & Timely Delivery",
      desc: "A robust supply chain network guaranteeing fast, safe, and hassle-free domestic and bulk delivery."
    },
    {
      id: "06",
      icon: <Headphones size={28} />,
      title: "Customer-Centric Support",
      desc: "Dedicated technical support and guidance to help you choose the ideal products for your business."
    }
  ];

  useEffect(() => {
    // Flowing SVG Lines Sequence
    if (svgLinesRef.current && gridRef.current) {
      const pulsePaths = svgLinesRef.current.querySelectorAll('.why-pulse-path');

      pulsePaths.forEach((pulse) => {
        const length = pulse.getTotalLength();
        pulse.style.strokeDasharray = `${length}`;
        pulse.style.strokeDashoffset = `${length}`;
        pulse.style.opacity = '1';
      });

      const flowTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
        },
      });

      pulsePaths.forEach((pulsePath, index) => {
        flowTimeline.to(
          pulsePath,
          {
            strokeDashoffset: 0,
            duration: 0.6,
            ease: 'power2.inOut',
          },
          index === 0 ? 0 : '-=0.15'
        );
      });

      flowTimeline.to(
        pulsePaths,
        {
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => {
            pulsePaths.forEach((pulse) => {
              pulse.style.strokeDasharray = '';
              pulse.style.strokeDashoffset = '';
              pulse.style.opacity = '';
            });
          },
        },
        '+=0.3'
      );
    }

    // 3D Tilt Effect
    if (gridRef.current) {
      const cards = gridRef.current.querySelectorAll('.why-card');

      cards.forEach((card) => {
        const handleMouseMove = (e) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);

          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = -((y - centerY) / centerY) * 3.5;
          const rotateY = ((x - centerX) / centerX) * 3.5;

          gsap.to(card, {
            rotateX: rotateX,
            rotateY: rotateY,
            transformPerspective: 1000,
            duration: 0.3,
            ease: 'power1.out',
            overwrite: 'auto',
          });
        };

        const handleMouseLeave = () => {
          gsap.to(card, {
            rotateX: 0,
            rotateY: 0,
            duration: 0.5,
            ease: 'power3.out',
            overwrite: 'auto',
          });
        };

        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="why-section">
      <div className="why-container">
        
        {/* Top Header Block */}
        <div className="why-header">
          <span className="why-badge">THE SAVAJ ADVANTAGE</span>
          <h2 className="why-title">
            Why Choose <span className="highlight-text">Savaj Polytech</span>
          </h2>
          <p className="why-tagline">
            Delivering high-performance PP corrugated solutions engineered for strength, durability, and unmatched quality.
          </p>
        </div>

        {/* Outer Grid Canvas Container */}
        <div className="why-canvas-wrapper">
          
          {/* Responsive SVG Connector Layer */}
          <svg 
            ref={svgLinesRef} 
            className="why-flowchart-svg-canvas" 
            viewBox="0 0 1200 600" 
            preserveAspectRatio="none"
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* BASE GRAY DASHED PIPELINES */}
            <path className="why-base-path" d="M 370 140 H 430" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="6 4" strokeLinecap="round" />
            <path className="why-base-path" d="M 770 140 H 830" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="6 4" strokeLinecap="round" />
            <path className="why-base-path" d="M 1170 140 C 1200 140, 1200 310, 600 310 C 20 310, 20 480, 50 480" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="6 4" strokeLinecap="round" />
            <path className="why-base-path" d="M 370 480 H 430" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="6 4" strokeLinecap="round" />
            <path className="why-base-path" d="M 770 480 H 830" stroke="#cbd5e1" strokeWidth="2.5" strokeDasharray="6 4" strokeLinecap="round" />

            {/* GLOWING NEON BLUE PULSE PIPELINES */}
            <path className={`why-pulse-path ${hoveredIndex !== null && hoveredIndex >= 1 ? 'is-hover-neon' : ''}`} d="M 370 140 H 430" stroke="#0072ce" strokeWidth="4.5" strokeLinecap="round" />
            <path className={`why-pulse-path ${hoveredIndex !== null && hoveredIndex >= 2 ? 'is-hover-neon' : ''}`} d="M 770 140 H 830" stroke="#0072ce" strokeWidth="4.5" strokeLinecap="round" />
            <path className={`why-pulse-path ${hoveredIndex !== null && hoveredIndex >= 3 ? 'is-hover-neon' : ''}`} d="M 1170 140 C 1200 140, 1200 310, 600 310 C 20 310, 20 480, 50 480" stroke="#0072ce" strokeWidth="4.5" strokeLinecap="round" />
            <path className={`why-pulse-path ${hoveredIndex !== null && hoveredIndex >= 4 ? 'is-hover-neon' : ''}`} d="M 370 480 H 430" stroke="#0072ce" strokeWidth="4.5" strokeLinecap="round" />
            <path className={`why-pulse-path ${hoveredIndex !== null && hoveredIndex >= 5 ? 'is-hover-neon' : ''}`} d="M 770 480 H 830" stroke="#0072ce" strokeWidth="4.5" strokeLinecap="round" />
          </svg>

          {/* Cards 3x2 Grid */}
          <div ref={gridRef} className="why-grid">
            {features.map((item, index) => (
              <div 
                key={item.id} 
                className="why-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="why-card-top">
                  <div className="why-icon-wrapper">
                    {item.icon}
                  </div>
                  <span className="why-number">{item.id}</span>
                </div>

                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-desc">{item.desc}</p>
                
                <div className="why-card-bar"></div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}