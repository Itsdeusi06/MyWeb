import React from 'react';
import '../styles/contact.css';

function ContactSection({ handleSubmit }) {
  return (
    <section id="contact" className="contactSection">
      <div className="contactHeader">
        <h2 className="contactTitle">Get In Touch</h2>
        <p className="contactDescription">
          Any questions? Feel free to reach out! I would love to hear from you.
        </p>
      </div>
      
      <div className="contactFormWrapper">
        <form onSubmit={handleSubmit} className="contactForm">
          <div>
            <label htmlFor="name" className="contactLabel">Name</label>
            <input type="text" id="name" name="name" required className="contactInput" />
          </div>
          <div>
            <label htmlFor="email" className="contactLabel">Email</label>
            <input type="email" id="email" name="email" required className="contactInput" />
          </div>
          <div>
            <label htmlFor="subject" className="contactLabel">Subject</label>
            <input type="text" id="subject" name="subject" required className="contactInput" />
          </div>
          <div>
            <label htmlFor="message" className="contactLabel">Message</label>
            <textarea id="message" name="message" rows="5" required className="contactInput"></textarea>
          </div>
          <div>
            <button type="submit" className="contactButton">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;