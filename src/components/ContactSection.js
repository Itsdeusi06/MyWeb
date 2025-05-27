import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/contact.css';

function ContactSection({ handleSubmit }) {
  const { t } = useTranslation();

  return (
    <section id="contact" className="contactSection">
      <div className="contactHeader">
        <h2 className="contactTitle">{t('contact.title')}</h2>
        <p className="contactDescription">
          {t('contact.description')}
        </p>
      </div>

      <div className="contactFormWrapper">
        <form onSubmit={handleSubmit} className="contactForm">
          <div>
            <label htmlFor="name" className="contactLabel">{t('contact.name')}</label>
            <input type="text" id="name" name="name" required className="contactInput" />
          </div>
          <div>
            <label htmlFor="email" className="contactLabel">{t('contact.email')}</label>
            <input type="email" id="email" name="email" required className="contactInput" />
          </div>
          <div>
            <label htmlFor="subject" className="contactLabel">{t('contact.subject')}</label>
            <input type="text" id="subject" name="subject" required className="contactInput" />
          </div>
          <div>
            <label htmlFor="message" className="contactLabel">{t('contact.message')}</label>
            <textarea id="message" name="message" rows="5" required className="contactInput"></textarea>
          </div>
          <div>
            <button type="submit" className="contactButton">
              {t('contact.send')}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
