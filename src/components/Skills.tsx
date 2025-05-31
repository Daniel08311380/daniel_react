import React, { useEffect, useRef, useState } from 'react';
import './Skills.css';

const Skills = () => {
  const skillsSectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Define your skills data here
  const skills = [
    { name: 'React', level: 90 },
    { name: 'TypeScript', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'CSS/SASS', level: 95 },
    { name: 'Git', level: 90 },
    { name: 'UI/UX Design', level: 75 },
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

    if (skillsSectionRef.current) {
      observer.observe(skillsSectionRef.current);
    }

    // Clean up the observer on component unmount
    return () => {
      if (skillsSectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(skillsSectionRef.current);
      }
    };
  }, []); // Empty dependency array ensures observer is set up once

  return (
    <section className={`skills-section ${isVisible ? 'is-visible' : ''}`} id="skills" ref={skillsSectionRef}>
      <h2 className="section-title">My Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <span className="skill-name">{skill.name}</span>
            <div className="skill-bar">
              {/* Set the width using a CSS variable when visible */}
              <div 
                className="skill-level"
                style={isVisible ? { width: `${skill.level}%` } : {}} 
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 