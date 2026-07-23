import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  const bannerRef = useRef(null);
  const textRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    if (!bannerRef.current) return;

    // Entrance Animation on Scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bannerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    tl.fromTo(
      bannerRef.current,
      { y: 40, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }
    )
      .fromTo(
        textRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: 'power2.out' },
        '-=0.4'
      )
      .fromTo(
        btnRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' },
        '-=0.3'
      );
  }, []);

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div ref={bannerRef} className="cta-banner">
          
          {/* Animated Background Mesh Blobs */}
          <div className="cta-ambient-glow blob-1"></div>
          <div className="cta-ambient-glow blob-2"></div>

          {/* Left Text Area */}
          <div ref={textRef} className="cta-text-content">
            <span className="cta-badge">TAKE THE NEXT STEP</span>
            <h2 className="cta-title">Ready to upgrade your industrial packaging?</h2>
            <p className="cta-description">
              Get in touch with our technical team today for custom quotes, material specifications, and samples.
            </p>
          </div>

          {/* Right Action Button */}
          <div ref={btnRef} className="cta-action">
            <Link to="/contact" className="cta-btn">
              <span>Request a Quote</span>
              <div className="cta-btn-arrow">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}