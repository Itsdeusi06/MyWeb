import React from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/hero.css';

function HeroSection({ scrollToSection }) {
  const { t } = useTranslation();

  return (
    <section id="home" className="heroSection">
      <div className="heroContainer">
        <div className="heroText">
          <h1 className="heroTitle">
            {t('hero.greeting')} <span className="heroHighlight">{t('hero.name')}</span>
          </h1>
          <h2 className="heroSubtitle">{t('hero.subtitle')}</h2>
          <p className="heroDescription">{t('hero.description')}</p>
          <div className="heroButtons">
            <button onClick={() => scrollToSection('projects')} className="primaryButton">
              {t('hero.viewWork')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="secondaryButton">
              {t('hero.contactMe')}
            </button>
          </div>
        </div>
        <div className="heroImageWrapper">
          <div className="heroImageContainer">
            <div className="heroCircle heroCircle1"></div>
            <div className="heroCircle heroCircle2"></div>
            <div className="heroCircle heroCircle3"></div>
            <img
              src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt={t('hero.imageAlt')}
              className="heroImage floating"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
