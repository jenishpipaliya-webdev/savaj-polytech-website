import React, { useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import "./AboutWhyChooseUs.css";

const AboutWhyChooseUs = () => {
  const sectionRef = useRef(null);

  const points = [
    {
      title: "Unmatched Quality",
      desc: "Our PP corrugated sheets are manufactured using high-grade polymers and modern technology, ensuring exceptional durability, impact resistance, and long service life."
    },
    {
      title: "Customized Solutions",
      desc: "We work closely with you to provide tailored sheet dimensions, custom GSM, colors, and specialized cuts that perfectly match your industry requirements."
    },
    {
      title: "Cost-Effective Pricing",
      desc: "By optimizing our manufacturing processes, we offer highly competitive factory pricing without compromising on material strength or quality."
    },
    {
      title: "Sustainable Practices",
      desc: "We are committed to eco-friendly manufacturing, producing 100% recyclable, reusable, and moisture-resistant polypropylene products to minimize environmental impact."
    },
    {
      title: "On-Time Delivery",
      desc: "We understand the critical nature of supply chain timelines and ensure fast, reliable packaging and dispatch for both small and bulk orders."
    },
    {
      title: "Expert Team",
      desc: "Backed by rich industry experience, our skilled technicians and specialists are dedicated to delivering precision and excellence in every batch."
    },
    {
      title: "Exceptional Support",
      desc: "Our customer support team is always ready to assist you with technical queries, quick quotes, and hassle-free order tracking."
    }
  ];

  // Re-trigger Animation on Every Scroll Intersection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            // Screen se bahar jaane par reset, taaki wapas aane par re-trigger ho
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="about-why-choose-section" ref={sectionRef}>
      {/* Background Geometric & Decorative Elements */}
      <div className="bg-sunburst-ring" />
      <div className="bg-polyhedron" />
      <div className="about-bg-glow-1" />
      <div className="about-bg-glow-2" />
      <div className="about-bg-pattern" />

      <div className="about-why-choose-container">
        {/* Left Column: Heading & Points */}
        <div className="about-left-column">
          <div className="animate-on-scroll">
            <span className="about-section-subtitle">Savaj Polytech</span>
            <h2 className="about-section-title">Why Choose Us ?</h2>
          </div>

          <div className="about-points-list">
            {points.map((point, index) => (
              <div
                key={index}
                className="about-point-item animate-on-scroll"
                style={{ transitionDelay: `${(index + 1) * 0.08}s` }}
              >
                <div className="about-check-icon">✓</div>
                <p className="about-point-text">
                  <strong className="about-point-title">{point.title}: </strong>
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Call Card + Pill CTA */}
        <div className="about-right-column">
          {/* Call Us Card Box */}
          <div
            className="about-phone-card animate-on-scroll"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="about-phone-icon-box">
              <svg
                className="about-phone-icon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <div>
              <p className="about-phone-label">CALL US NOW</p>
              <a href="tel:+919904743373" className="about-phone-number">
                +91 99047 43373
              </a>
            </div>
          </div>

          {/* Contact Us CTA Button */}
          <div
            className="about-cta-wrapper animate-on-scroll"
            style={{ transitionDelay: "0.35s" }}
          >
           {/* Naya Code */}
            <Link to="/Contact" className="about-navbar-cta">
                 <span>Contact Us</span>
                 <span className="about-cta-arrow">→</span>
           </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;