import React, { useEffect, useRef, useState } from 'react';
import './Interests.css';

const Interests = () => {
  const interestsSectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Sample interests data - replace with your actual interests and icons/images
  const interests = [
    { name: 'Reading', icon: '📚' },
    { name: 'Hiking', icon: '🌳' },
    { name: 'Gaming', icon: '🎮' },
    { name: 'Photography', icon: '📷' },
    { name: 'Music', icon: '🎶' },
    { name: 'Cooking', icon: '🍳' },
  ];

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

    if (interestsSectionRef.current) {
      observer.observe(interestsSectionRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (interestsSectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(interestsSectionRef.current);
      }
    };
  }, []); // Empty dependency array ensures observer is set up once

  return (
    <section className={`interests-section ${isVisible ? 'is-visible' : ''}`} id="interests" ref={interestsSectionRef}>
      <h2 className="section-title">Interests & Hobbies</h2>
      <div className="interests-container">
        {interests.map((interest, index) => (
          <div key={index} className="interest-item">
            <div className="interest-icon">{interest.icon}</div>
            <span className="interest-name">{interest.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Interests; 