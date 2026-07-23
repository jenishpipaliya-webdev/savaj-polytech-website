import React from 'react';
import './MarqueeTicker.css';

export default function MarqueeTicker() {
  const tickerItems = [
    "SAVAJ POLYTECH",
    "HIGH CRUSH RESISTANCE",
    "HEAVY-DUTY PACKAGING BOXES",
    "100% MOISTURE PROOF",
    "SURFACE & FLOOR PROTECTION",
    "WEATHERPROOF PRINTABLE SIGNAGE",
    "100% RECYCLABLE PP SHEETS",
    "AGRICULTURE HARVEST CRATES",
    "CUSTOM GSM & THICKNESS (2mm–12mm)"
  ];

  // Continuous seamless loop ke liye array double kiya
  const doubledItems = [...tickerItems, ...tickerItems];

  return (
    <section className="nxt-ticker-wrapper">
      <div className="nxt-ticker-container">
        <div className="nxt-ticker-track">
          {doubledItems.map((item, index) => (
            <div key={index} className="nxt-ticker-item-node">
              <span className="nxt-ticker-text">{item}</span>
              {/* Blue geometric dot separator */}
              <span className="nxt-ticker-separator">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}