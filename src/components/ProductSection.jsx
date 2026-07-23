import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ProductSection.css";

// Importing Product Images from Assets
import floorsheetImg from "../assets/floorsheet.jpeg";
import constructionImg from "../assets/Construction.jpeg";
import packagingImg from "../assets/packaging.jpeg";
import multipurposeImg from "../assets/multipurpose.jpeg";
import saperatorImg from "../assets/saperator.jpeg";
import storageImg from "../assets/storage.jpeg";

gsap.registerPlugin(ScrollTrigger);

const cardData = [
  {
    id: 1,
    bgColor: "#0b3b60", // Deep Navy Blue
    slashColor: "#0072ce", // Savaj Accent Blue
    textColor: "#FFFFFF",
    image: floorsheetImg,
    productName: "Floor Protection Sheet",
    productTag: "Heavy-Duty Shield",
    description: "Protect floors during construction and painting. Savaj Polytech PP sheets shield against scratches, spills, and heavy debris easily. Reusable and waterproof.",
  },
  {
    id: 2,
    bgColor: "#0f172a", // Dark Slate Blue
    slashColor: "#38bdf8", // Sky Accent
    textColor: "#FFFFFF",
    image: constructionImg,
    productName: "Construction Protection Sheet",
    productTag: "High-Impact Guard",
    description: "Safeguard doors, windows, and walls during building work. High-grade Savaj Polytech corrugated boards resist impact, dust, paint, and harsh site conditions.",
  },
  {
    id: 3,
    bgColor: "#0072ce", // Corporate Blue
    slashColor: "#ffffff", // Pure White
    textColor: "#FFFFFF",
    image: packagingImg,
    productName: "Industrial Packaging Sheets",
    productTag: "Eco-Friendly Logistics",
    description: "Eco-friendly, shock-absorbing packaging for safe logistics. Savaj Polytech PP sheets protect custom crates and boxes against transit damage and moisture effectively.",
  },
  {
    id: 4,
    bgColor: "#1e293b", // Premium Steel Dark
    slashColor: "#0072ce", // Vibrant Blue
    textColor: "#FFFFFF",
    image: multipurposeImg,
    productName: "Multipurpose Plastic Sheets",
    productTag: "Versatile PP Solution",
    description: "Versatile, lightweight, and durable PP sheets for DIY projects, partitions, and custom installations. Savaj Polytech delivers quick, smart plastic solutions.",
  },
  {
    id: 5,
    bgColor: "#0369a1", // Deep Sky Blue
    slashColor: "#bae6fd", // Soft Blue Light
    textColor: "#FFFFFF",
    image: saperatorImg,
    productName: "PP Separator Sheets",
    productTag: "Layer Pad Protection",
    description: "Ideal layer pads for stacking bottles, tiles, and glass during transit. Savaj Polytech reusable separators prevent breakage and streamline supply chain storage.",
  },
  {
    id: 6,
    bgColor: "#0f2b48", // Midnight Blue
    slashColor: "#38bdf8", // Cyan Accent
    textColor: "#FFFFFF",
    image: storageImg,
    productName: "Storage Organizing Sheets",
    productTag: "Warehouse Management",
    description: "Transform Savaj Polytech PP sheets into waterproof, chemical-resistant bins and dividers. Keep your warehouse, shop, or facility perfectly organized every day.",
  },
];

// Double the array elements to maintain continuous carousel loop
const infiniteCards = [...cardData, ...cardData];

export default function ProductSection() {
  const headerRef = useRef(null);
  const trackRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    // Header Scroll Trigger Reveal
    const revealElements = headerRef.current.querySelectorAll(".reveal-item");
    
    gsap.fromTo(
      revealElements,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Infinite GSAP Motion Track
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    tweenRef.current = gsap.to(track, {
      x: `-=${totalWidth}px`,
      duration: 30, // Smooth continuous velocity
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (tweenRef.current) tweenRef.current.timeScale(0.2); // Slow down on hover
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) tweenRef.current.timeScale(1); // Normal speed
  };

  return (
    <section className="portfolio-section">
      <div className="section-divider"></div>

      <div className="portfolio-container">
        {/* Header Section */}
        <div className="section-header" ref={headerRef}>
          <span className="section-subtitle-badge reveal-item">OUR PRODUCTS</span>
          <h2 className="section-title-animated reveal-item">PP Corrugated Solutions</h2>
          <p className="section-description reveal-item">
            Engineered for high-durability packaging, construction protection, and modern industrial logistics.
          </p>
        </div>

        {/* GSAP Continuous Carousel */}
        <div 
          className="rg-carousel-wrapper"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="rg-card-track" ref={trackRef}>
            {infiniteCards.map((card, index) => (
              <div 
                key={`${card.id}-${index}`} 
                className="rg-card" 
                style={{ backgroundColor: card.bgColor }}
              >
                <div className="rg-top-container">
                  <div className="rg-image-frame">
                    <img src={card.image} alt={card.productName} className="rg-card-img" />
                  </div>
                </div>

                <div className="rg-slash-container">
                  <div 
                    className="rg-slash-line line-long" 
                    style={{ backgroundColor: card.slashColor }}
                  ></div>
                  <div 
                    className="rg-slash-line line-short" 
                    style={{ backgroundColor: card.slashColor }}
                  ></div>
                </div>

                <div className="rg-bottom-content">
                  <div className="rg-brand-header">
                    <h3 className="rg-brand-name" style={{ color: card.textColor }}>
                      {card.productName}
                    </h3>
                    <span className="rg-product-line" style={{ color: card.textColor }}>
                      {card.productTag}
                    </span>
                  </div>

                  <p className="rg-card-description" style={{ color: card.textColor }}>
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}