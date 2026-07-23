import React from 'react';
import { Link } from 'react-router-dom';
import savajLogoSvg from '../assets/savajlogoorange5.svg';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="custom-footer">
      
      {/* MAIN FOOTER CONTENT */}
      <div className="footer-main-container">
        
        {/* COLUMN 1: BRAND LOGO & BRIEF */}
        <div className="footer-col footer-brand-col">
          <Link to="/" className="footer-brand-logo-link">
            <img 
              src={savajLogoSvg} 
              alt="Savaj Polytech Logo" 
              className="footer-logo-svg" 
            />
          </Link>

          <p className="footer-brand-desc">
            Savaj Polytech Private Limited is Gujarat's premier manufacturer of high-performance Polypropylene (PP) Corrugated Sheets engineered for superior durability and 100% recyclability.
          </p>
        </div>

        {/* COLUMN 2: QUICK LINKS */}
        <div className="footer-col">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul className="footer-links-list">
            <li>
              <Link to="/">
                <svg className="link-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about">
                <svg className="link-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                <span>About</span>
              </Link>
            </li>
            <li>
              <Link to="/products">
                <svg className="link-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                <span>Products</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <svg className="link-arrow-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                <span>Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>

        {/* COLUMN 3: WORKING DAYS */}
        <div className="footer-col">
          <h3 className="footer-col-title">Working Days</h3>
          <div className="working-hours-wrapper">
            <div className="working-day-item">
              <span className="days-label">Thursday – Tuesday</span>
              <div className="time-row">
                <svg className="time-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                <span>09 am to 06 pm</span>
              </div>
            </div>

            <div className="working-day-item">
              <span className="days-label">Wednesday</span>
              <div className="time-row holiday">
                <svg className="time-arrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                <span>Holiday</span>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMN 4: LET'S TALK */}
        <div className="footer-col">
          <h3 className="footer-col-title">Let's Talk</h3>
          <ul className="contact-details-list">
            <li>
              <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <a href="tel:+919904743343">+91 99047 43343</a>
            </li>
            <li>
              <svg className="contact-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:savajpolytechpvtltd@gmail.com">savajpolytechpvtltd@gmail.com</a>
            </li>
            <li>
              <svg className="contact-icon address-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <span>
                Plot No. 54, Survey No. 300/P1, R. K. Industrial Zone - 15, Kuvadva Wankaner Road, Village - Jhiyana, Rajkot, Gujarat - 360023.
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* BOTTOM COPYRIGHT & SOCIAL MEDIA BAR */}
      <div className="footer-bottom-bar">
        <div className="footer-bottom-container">
          
          <div className="copyright-text">
            Copyright © {new Date().getFullYear()} Savaj Polytech Pvt. Ltd. All Rights Reserved.
          </div>

          {/* ZERO DEPENDENCY INLINE SOCIAL MEDIA ICONS */}
          <div className="social-media-links">
            {/* Instagram */}
            <a href="#instagram" aria-label="Instagram" className="social-icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#linkedin" aria-label="LinkedIn" className="social-icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>

            {/* YouTube */}
            <a href="#youtube" aria-label="YouTube" className="social-icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            
            {/* Facebook */}
            <a href="#facebook" aria-label="Facebook" className="social-icon-btn">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            {/* Twitter / X */}
            <a href="#twitter" aria-label="Twitter" className="social-icon-btn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
              </svg>
            </a>
          </div>

          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="dot-divider">•</span>
            <a href="#terms">Terms & Conditions</a>
          </div>

        </div>
      </div>

    </footer>
  );
}