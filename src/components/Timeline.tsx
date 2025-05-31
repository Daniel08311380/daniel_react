import React, { useEffect, useRef, useState } from 'react';
import './Timeline.css';

interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  description: string;
  side: 'left' | 'right';
}

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, institution, description, side }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <div className={`timeline-item ${side} ${isVisible ? 'is-visible' : ''}`} ref={itemRef}>
      <div className="timeline-content">
        <span className="year">{year}</span>
        <h3>{title}</h3>
        <p className="institution">{institution}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Timeline = () => {
  // Replace with your actual education and experience data
  const timelineData = [
    {
      year: '2022-Present',
      title: 'Software Developer',
      institution: 'Tech Company X',
      description: 'Worked on developing web applications using React and Node.js.',
      side: 'left',
    },
    {
      year: '2020-2022',
      title: 'Bachelor\'s Degree in Computer Science',
      institution: 'University Y',
      description: 'Completed a degree focusing on algorithms and data structures.',
      side: 'right',
    },
    {
      year: '2018-2020',
      title: 'Web Development Intern',
      institution: 'Startup Z',
      description: 'Assisted in building and maintaining company website.',
      side: 'left',
    },
  ];

  return (
    <section className="timeline-section" id="experience">
      <h2 className="section-title">Education & Experience</h2>
      <div className="timeline-container">
        {timelineData.map((item, index) => (
          <TimelineItem key={index} {...item} side={index % 2 === 0 ? 'left' : 'right'} />
        ))}
        <div className="timeline-line"></div> {/* This will be the vertical line */}
      </div>
    </section>
  );
};

export default Timeline; 