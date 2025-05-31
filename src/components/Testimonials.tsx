import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  // Sample testimonials data
  const testimonials = [
    {
      quote: 'John is a dedicated developer and a great team player. He quickly grasps new concepts and delivers high-quality work.',
      author: 'Jane Doe',
      title: 'Project Manager, Company A',
    },
    {
      quote: 'I was impressed by John\'s ability to solve complex problems and his attention to detail. A valuable asset to any team.',
      author: 'Richard Roe',
      title: 'Senior Developer, Company B',
    },
    // Add more testimonials here
  ];

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">"{testimonial.quote}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
            <p className="testimonial-title">{testimonial.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials; 