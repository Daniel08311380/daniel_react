import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';

interface HeroProps {
  isLoading: boolean;
}

const Hero: React.FC<HeroProps> = ({ isLoading }) => {
  const heroRef = useRef<HTMLElement>(null);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroElement = heroRef.current;
        const rect = heroElement.getBoundingClientRect();
        // Start fading when the bottom of the hero section is 20% of the viewport height from the top
        const fadeThreshold = window.innerHeight * 0.2;
        const shouldFade = rect.bottom <= fadeThreshold;

        setIsFading(shouldFade);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Call initially in case the user loads the page already scrolled down
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className={`hero-content ${isLoading ? 'hidden' : ''} ${isFading ? 'fade-out' : ''}`}>
        <h1 className="hero-title">
          Welcome to My Portfolio
        </h1>
        <p className="hero-subtitle">
          I'm a passionate developer crafting digital experiences
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View My Work</a>
          <a href="#contact" className="btn secondary">Contact Me</a>
        </div>
      </div>
      <div className={`hero-scroll-indicator ${isLoading ? 'hidden' : ''} ${isFading ? 'fade-out' : ''}`}>
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Hero; 