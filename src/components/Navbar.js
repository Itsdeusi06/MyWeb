// Navbar.js
import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const { isDarkMode, toggleTheme } = useTheme();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setMobileMenuOpen(false);
  };

  const currentLang = i18n.language;

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="logo">Pau Deusedes</a>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>{t('nav.home')}</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t('nav.projects')}</a>
          <a href="#skills" onClick={() => setMobileMenuOpen(false)}>{t('nav.skills')}</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t('nav.about')}</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t('nav.contact')}</a>

          <div className="lang-select">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_United_Kingdom_%283-2%29.svg"
              alt="English"
              onClick={() => changeLanguage('en')}
              className={currentLang === 'en' ? 'active-flag' : ''}
              title="English"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
              alt="Español"
              onClick={() => changeLanguage('es')}
              className={currentLang === 'es' ? 'active-flag' : ''}
              title="Español"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Catalonia.svg/1920px-Flag_of_Catalonia.svg.png"
              alt="Català"
              onClick={() => changeLanguage('ca')}
              className={currentLang === 'ca' ? 'active-flag' : ''}
              title="Català"
            />
          </div>
        </div>

        <div className="nav-actions">
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Dark Mode">
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <FaBars />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
