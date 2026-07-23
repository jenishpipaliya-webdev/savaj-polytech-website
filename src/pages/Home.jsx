import React from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import MarqueeTicker from '../components/MarqueeTicker';
import ProductSection from '../components/ProductSection';
import Specifications from '../components/Specifications';
import WhyChooseUs from '../components/WhyChooseUs';
import StatsCounter from'../components/StatsCounter';
import CallToAction from '../components/CallToAction';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <MarqueeTicker/>
      <ProductSection/>
      <Specifications/>
      <WhyChooseUs/>
      <StatsCounter/>
      <CallToAction/>
    </main>
  );
}