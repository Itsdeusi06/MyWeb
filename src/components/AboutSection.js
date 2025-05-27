import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/about.css';
import pfp from '../assets/valorant-player-pigs-may-fly-card-avatar.png';

function AboutSection() {
  const { t } = useTranslation();

  return (
    <section id="about" className="aboutSection">
      <div className="aboutContainer">
        <div className="aboutImageWrapper">
          <img
            src={pfp}
            alt="Pau Deusedes Domenech"
            className="aboutImage"
          />
        </div>
        <div className="aboutText">
          <h2 className="aboutTitle">{t('about.title')}</h2>
          <p className="aboutParagraph">{t('about.paragraph1')}</p>
          <p className="aboutParagraph">{t('about.paragraph2')}</p>
          <p className="aboutParagraph aboutParagraphLast">{t('about.paragraph3')}</p>
          <div className="aboutLinks">
            <a href="https://github.com/Itsdeusi06" className="aboutLink">
              <FaGithub className="aboutIcon" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/pau-deusedes-domenech-4795a5347/" className="aboutLink">
              <FaLinkedin className="aboutIcon" /> LinkedIn
            </a>
            <a href="https://x.com/itsdeusi06" className="aboutLink">
              <FontAwesomeIcon icon={faXTwitter} className="aboutIcon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
