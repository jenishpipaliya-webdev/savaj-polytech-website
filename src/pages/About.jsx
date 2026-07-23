import React from 'react';
import AboutHero from '../components/AboutHero';
import AboutOverview from '../components/AboutOverview';
import AboutValues from '../components/AboutValues';
import StatsCounter from '../components/StatsCounter';
import AboutWhyChooseUs from '../components/AboutWhyChooseUs';

export default function About() {
  return (
    <main>
      <AboutHero />
      {/* Rest of About page sections */}
      <AboutOverview/>
      <AboutValues/>
      <StatsCounter/>
      <AboutWhyChooseUs/>
    </main>
  );
}   