import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <p>Feel free to reach out to me via email or connect with me on social media.</p>
        <div className="contact-info">
          <a href="mailto:danielebrahimi.work@gmail.com" className="contact-link">danielebrahimi.work@gmail.com</a>
          <a href="tg://resolve?domain=ebrahimi_daniel" className="contact-link">Telegram: @ebrahimi_daniel</a>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-linkedin"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;