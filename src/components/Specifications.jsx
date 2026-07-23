import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Ruler, 
  Maximize2, 
  Scale, 
  Palette, 
  Printer, 
  Recycle, 
  Flame, 
  Sun, 
  Zap 
} from 'lucide-react';
import './Specifications.css';

gsap.registerPlugin(ScrollTrigger);

export default function Specifications() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const tagRef = useRef(null);
  const mainHeadingRef = useRef(null);
  const subHeadingRef = useRef(null);
  const gridLinesRef = useRef(null);
  const headerBlockRef = useRef(null);
  const topDividerRef = useRef(null);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const specsData = [
    {
      title: "Thickness Range",
      metric: "2mm to 12mm",
      desc: "Customized sheet thickness manufactured to meet your exact structural strength and impact resistance requirements.",
      icon: <Ruler size={24} />
    },
    {
      title: "Sheet Size & Dimensions",
      metric: "Up to 2400mm Width",
      desc: "Available in standard and custom-cut lengths. Maximum width up to 240 cm with zero compromises on edge finishing.",
      icon: <Maximize2 size={24} />
    },
    {
      title: "Density / Weight (GSM)",
      metric: "250 – 3000 GSM",
      desc: "Flexible GSM options balancing lightness and heavy-duty load capacity for diverse industrial applications.",
      icon: <Scale size={24} />
    },
    {
      title: "Custom Color Palette",
      metric: "Full Spectrum",
      desc: "Tailored color matching available. Match your brand identity or color-code your logistics seamlessly.",
      icon: <Palette size={24} />
    },
    {
      title: "Custom Brand Printing",
      metric: "Screen & Digital Print",
      desc: "High-precision Corona-treated surface for sharp, long-lasting logo printing and custom promotional graphics.",
      icon: <Printer size={24} />
    },
    {
      title: "Virgin & Recycled Grade",
      metric: "Eco-Friendly Options",
      desc: "Choose between 100% Virgin Polypropylene for high purity or eco-conscious recycled blends for budget efficiency.",
      icon: <Recycle size={24} />
    },
    {
      title: "Fire-Retardant Grade",
      metric: "Flame Resistant",
      desc: "Optional fire-retardant additives engineered to meet international safety and building compliance standards.",
      icon: <Flame size={24} />
    },
    {
      title: "UV Weather Protection",
      metric: "Outdoor Durable",
      desc: "Integrated UV-stabilizer layer that guards against sun damage, fading, and outdoor weathering.",
      icon: <Sun size={24} />
    },
    {
      title: "Surface Corona Treatment",
      metric: "High Ink Adhesion",
      desc: "Pre-treated surface dyne levels ensuring superior ink retention for high-speed industrial printing.",
      icon: <Zap size={24} />
    }
  ];

  useEffect(() => {
    // 0. Top Section Line Scale Animation
    gsap.fromTo(topDividerRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%"
        }
      }
    );

    // 1. Header Text Sequence Entrance
    const headerTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 85%", 
        toggleActions: "play none none none"
      }
    });

    headerTimeline
      .fromTo(tagRef.current, 
        { y: "100%", opacity: 0 }, 
        { y: "0%", opacity: 1, duration: 0.6, ease: "power3.out" }
      )
      .fromTo(mainHeadingRef.current, 
        { y: "100%" }, 
        { y: "0%", duration: 0.8, ease: "power4.out" }, 
        "-=0.45"
      )
      .fromTo(subHeadingRef.current, 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" }, 
        "-=0.5"
      );

    // 2. SVG Grid Line Drawing Animation
    if (gridLinesRef.current) {
      const paths = gridLinesRef.current.querySelectorAll('.spec-svg-line');
      paths.forEach((path) => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      });

      gsap.to(paths, {
        strokeDashoffset: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%" 
        }
      });
    }

    // 3. Staggered Inner Card Entrance
    const contentNodes = containerRef.current.querySelectorAll('.spec-inner-node');
    gsap.fromTo(contentNodes,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.06,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      }
    );

    // 4. Bounded Dynamic Mouse Spotlight Tracking
    const gridItems = containerRef.current.querySelectorAll('.spec-grid-item');
    gridItems.forEach((item) => {
      const handleMouseMove = (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        item.style.setProperty('--spec-mouse-x', `${x}px`);
        item.style.setProperty('--spec-mouse-y', `${y}px`);
      };
      item.addEventListener('mousemove', handleMouseMove);
      return () => item.removeEventListener('mousemove', handleMouseMove);
    });

  }, []);

  return (
    <section ref={sectionRef} className="spec-section">
      <div ref={topDividerRef} className="spec-top-divider"></div>

      <div className="spec-content-wrapper">
        
        {/* Header Block */}
        <div ref={headerBlockRef} className="spec-header-block">
          <div className="spec-mask-window">
            <span ref={tagRef} className="spec-tag-accent">TECHNICAL MASTERY</span>
          </div>
          <div className="spec-mask-window large-heading-mask">
            <h2 ref={mainHeadingRef} className="spec-main-heading">
              Product <span className="spec-heading-gradient">Specifications & Capabilities</span>
            </h2>
          </div>
          <p ref={subHeadingRef} className="spec-sub-heading">
            Tailor-engineered polypropylene parameters optimized for maximum structural integrity, industrial longevity, and custom B2B printing needs.
          </p>
        </div>

        {/* Master Interactive 3x3 Grid Canvas */}
        <div className="spec-grid-canvas">
          
          <svg 
            ref={gridLinesRef}
            className="spec-grid-lines-svg"
            viewBox="0 0 1200 1200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            {/* Outer Frame */}
            <path className="spec-svg-line" d="M0 0 H 1200 V 1200 H 0 Z" stroke="#e2e8f0" strokeWidth="2" />
            {/* Vertical Inner Dividers */}
            <path className="spec-svg-line" d="M400 0 V 1200" stroke="#e2e8f0" strokeWidth="1.5" />
            <path className="spec-svg-line" d="M800 0 V 1200" stroke="#e2e8f0" strokeWidth="1.5" />
            {/* Horizontal Inner Dividers */}
            <path className="spec-svg-line" d="M0 400 H 1200" stroke="#e2e8f0" strokeWidth="1.5" />
            <path className="spec-svg-line" d="M0 800 H 1200" stroke="#e2e8f0" strokeWidth="1.5" />
          </svg>

          <div ref={containerRef} className="spec-cards-matrix-grid">
            {specsData.map((item, index) => (
              <div 
                key={index}
                className="spec-grid-item-wrapper"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`spec-grid-item ${hoveredIndex !== null && hoveredIndex !== index ? 'spec-blur-contrast' : ''}`}>
                  <div className="spec-inner-node">
                    
                    {/* Corner Kinetic Arrow Vector */}
                    <div className="spec-kinetic-arrow">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </div>

                    {/* Icon Container */}
                    <div className="spec-icon-box">{item.icon}</div>

                    {/* Metric Badge Pill */}
                    <span className="spec-metric-badge">{item.metric}</span>

                    {/* Text Details */}
                    <h3 className="spec-item-title">{item.title}</h3>
                    <p className="spec-item-desc">{item.desc}</p>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}