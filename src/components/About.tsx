import React, { useEffect, useRef, useState } from 'react';
import './About.css';
import profileImage from '../assets/profile.jpg';

const About = () => {
  const aboutRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Optional: reset animation if element scrolls out of view
            // setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (aboutRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(aboutRef.current);
      }
    };
  }, []); // Empty dependency array ensures observer is set up once

  return (
    <section className={`about-section ${isVisible ? 'is-visible' : ''}`} id="about" ref={aboutRef}>
      <div className="about-container">
        <div className="about-image">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              I am a passionate and dedicated developer with a strong focus on creating innovative digital solutions. 
              My journey in the world of technology has been driven by a constant desire to learn and grow.
            </p>
            <p>
              With expertise in modern web technologies, I strive to build applications that not only look beautiful 
              but also provide exceptional user experiences. My commitment to clean code and best practices ensures 
              that every project I work on is maintainable and scalable.
            </p>
            <div className="skills">
              <h3>Technical Skills</h3>
              <div className="skill-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>CSS/SASS</span>
                <span>Git</span>
                <span>UI/UX</span>
              </div>
            </div>
            <div className="experience">
              <h3>Experience</h3>
              <ul>
                <li>Developed responsive web applications</li>
                <li>Implemented modern UI/UX designs</li>
                <li>Collaborated with cross-functional teams</li>
                <li>Optimized application performance</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 