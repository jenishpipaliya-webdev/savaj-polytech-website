import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Users, ShieldCheck, Globe } from 'lucide-react';
import './StatsCounter.css';

gsap.registerPlugin(ScrollTrigger);

export default function StatsCounter() {
  const sectionRef = useRef(null);
  
  // State for smooth number count animation
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const statsData = [
    {
      id: 1,
      targetNum: 3,
      suffix: "+",
      label: "Years Experience",
      icon: <Award size={36} />
    },
    {
      id: 2,
      targetNum: 50,
      suffix: "+",
      label: "Satisfied Customers",
      icon: <Users size={36} />
    },
    {
      id: 3,
      targetNum: 100,
      suffix: "%",
      label: "Quality Assurance",
      icon: <ShieldCheck size={36} />
    },
    {
      id: 4,
      targetNum: 10,
      suffix: "+",
      label: "Countries Exported",
      icon: <Globe size={36} />
    }
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const proxyObj = { n0: 0, n1: 0, n2: 0, n3: 0 };

    // Guaranteed GSAP Counter Trigger
    const animation = gsap.to(proxyObj, {
      n0: statsData[0].targetNum,
      n1: statsData[1].targetNum,
      n2: statsData[2].targetNum,
      n3: statsData[3].targetNum,
      duration: 2.2,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      onUpdate: () => {
        setCounts([
          Math.floor(proxyObj.n0),
          Math.floor(proxyObj.n1),
          Math.floor(proxyObj.n2),
          Math.floor(proxyObj.n3)
        ]);
      }
    });

    return () => {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="stats-section">
      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={stat.id} className="stat-card">
            
            {/* Top Icon Centered */}
            <div className="stat-icon-wrapper">
              {stat.icon}
            </div>

            {/* Perfect Pixel-Aligned Number & Sign Box */}
            <div className="stat-number-box">
              <span className="stat-num">{counts[index]}</span>
              <span className="stat-suffix">{stat.suffix}</span>
            </div>

            {/* Label Subtitle */}
            <p className="stat-label">{stat.label}</p>
            
          </div>
        ))}
      </div>
    </section>
  );
}