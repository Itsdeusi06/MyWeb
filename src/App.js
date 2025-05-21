import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Projects from './components/ProjectsSection';
import Skills from './components/SkillsSection';
import About from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/main.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/projects.css';
import './styles/skills.css';
import './styles/about.css';
import './styles/contact.css';
import './styles/footer.css';



function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="app">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero scrollToSection={scrollToSection} />
      <Projects />
      <Skills />
      <About />
    </div>
  );
}

export default App;