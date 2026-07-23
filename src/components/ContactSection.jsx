import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight, Loader2, CheckCircle } from 'lucide-react';
import './ContactSection.css';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false
  });

  // 🔗 GOOGLE APPS SCRIPT WEB APP URL HERE
  const GOOGLE_SHEET_WEB_APP_URL = "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false });

    const formPayload = new FormData();
    formPayload.append('Name', formData.name);
    formPayload.append('Email', formData.email);
    formPayload.append('Phone', formData.phone);
    formPayload.append('Message', formData.message);
    formPayload.append('Timestamp', new Date().toLocaleString());

    try {
      if (GOOGLE_SHEET_WEB_APP_URL !== "YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE") {
        await fetch(GOOGLE_SHEET_WEB_APP_URL, {
          method: 'POST',
          body: formPayload,
          mode: 'no-cors',
        });
      } else {
        await new Promise((res) => setTimeout(res, 1200));
      }

      setStatus({ loading: false, success: true, error: false });
      setFormData({ name: '', email: '', phone: '', message: '' });

      setTimeout(() => {
        setStatus((prev) => ({ ...prev, success: false }));
      }, 5000);
    } catch (err) {
      console.error("Submission Error:", err);
      setStatus({ loading: false, success: false, error: true });
    }
  };

  return (
    <section className="contact-main-section">
      <div className="contact-section-container">
        
        {/* LEFT COLUMN: FORM */}
        <div className="contact-form-wrapper">
          <h2 className="contact-form-title">Send Us A Message!</h2>
          <p className="contact-form-subtitle">
            Interested in working with us? Send us your thoughts and we will get back as soon as we can.
          </p>

          <form className="contact-form-element" onSubmit={handleSubmit}>
            <div className="form-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Name*" 
                value={formData.name}
                onChange={handleChange}
                required 
                className="form-input-field"
              />
            </div>

            <div className="form-group">
              <input 
                type="email" 
                name="email" 
                placeholder="E-mail Address" 
                value={formData.email}
                onChange={handleChange}
                className="form-input-field"
              />
            </div>

            <div className="form-group">
              <input 
                type="tel" 
                name="phone" 
                placeholder="Phone with Country code* eg. +91 99999 00000" 
                value={formData.phone}
                onChange={handleChange}
                required 
                className="form-input-field"
              />
            </div>

            <div className="form-group">
              <textarea 
                name="message" 
                rows="4" 
                placeholder="How can we help you? Get in Touch." 
                value={formData.message}
                onChange={handleChange}
                required 
                className="form-input-field textarea-field"
              ></textarea>
            </div>

            {/* Savaj Polytech Theme Button */}
            <button 
              type="submit" 
              className="form-submit-btn" 
              disabled={status.loading}
            >
              <span>{status.loading ? "Sending..." : "Send Message"}</span>
              <div className="btn-circle-arrow">
                {status.loading ? (
                  <Loader2 className="spinner-icon" size={18} />
                ) : (
                  <ArrowRight size={18} />
                )}
              </div>
            </button>

            {/* Success Alert */}
            {status.success && (
              <div className="form-alert-success">
                <CheckCircle size={18} />
                <span>Thank you! Your inquiry has been recorded successfully.</span>
              </div>
            )}
          </form>
        </div>

        {/* RIGHT COLUMN: BRANDED CONTACT INFO CARD */}
        <div className="contact-info-card">
          
          {/* Call Us */}
          <div className="info-item-box">
            <div className="info-icon-circle">
              <Phone size={22} className="info-icon" />
            </div>
            <div className="info-text-details">
              <span className="info-label">Call Us Now</span>
              <p className="info-content">
                Talk to us and see how we can work together (
                <a href="tel:+919904743343" className="info-highlight-link">+91 99047 43343</a>)
              </p>
            </div>
          </div>

          {/* Email Address */}
          <div className="info-item-box">
            <div className="info-icon-circle">
              <Mail size={22} className="info-icon" />
            </div>
            <div className="info-text-details">
              <span className="info-label">Email Address</span>
              <p className="info-content">
                We're usually replying within 24 hours (
                <a href="mailto:savajpolytechpvtltd@gmail.com" className="info-highlight-link">
                  savajpolytechpvtltd@gmail.com
                </a>)
              </p>
            </div>
          </div>

          {/* Our Location */}
          <div className="info-item-box">
            <div className="info-icon-circle">
              <MapPin size={22} className="info-icon" />
            </div>
            <div className="info-text-details">
              <span className="info-label">Our Location</span>
              <p className="info-content address-text">
                Plot No. 54, Survey No. 300/P1, R. K. Industrial Zone - 15, Kuvadva Wankaner Road, B/h Hotel The Jiyana Village, Village - Jhiyana, Rajkot, Gujarat - 360023.
              </p>
            </div>
          </div>

          {/* Working Hours */}
          <div className="info-item-box">
            <div className="info-icon-circle">
              <Clock size={22} className="info-icon" />
            </div>
            <div className="info-text-details">
              <span className="info-label">Working Hours</span>
              <p className="info-content">
                Thursday – Tuesday: <span className="info-time-highlight">09 am to 06 pm</span><br/>
                Wednesday: <span className="info-holiday-highlight">Holiday</span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}