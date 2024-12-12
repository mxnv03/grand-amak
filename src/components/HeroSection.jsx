import React from 'react';
import './HeroSection.css';

const HeroSection = ({ title, subtitle, image }) => (
  <section className="hero-section" style={{ backgroundImage: `url(${image})` }}>
    <div className="hero-content">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  </section>
);

export default HeroSection;
