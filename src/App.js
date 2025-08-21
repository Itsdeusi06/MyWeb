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
import { db } from './firebase';
import { ref, push, get, child, update } from "firebase/database";
import './components/languages'; 
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider } from './context/ThemeContext';

// Generate or get existing visitorId
function getVisitorId() {
  let id = localStorage.getItem("visitorId");
  if (!id) {
    id = uuidv4();
    localStorage.setItem("visitorId", id);
  }
  return id;
}

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const visitorId = getVisitorId();

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // Attach visitorId
    data.visitorId = visitorId;

    try {
      await push(ref(db, "contacts"), data);
      console.log('Message sent successfully');
      e.target.reset();
    } catch (error) {
      alert('Error sending message');
      console.error(error);
    }
  }

  useEffect(() => {
    // Dark mode
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }

    const visitsRef = ref(db, 'visits/' + visitorId);
    const start = Date.now();

    // Check if visitor exists
    get(visitsRef).then(snapshot => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        update(visitsRef, {
          visitCount: (data.visitCount || 0) + 1,
          lastVisit: new Date().toISOString(),
        });
      } else {
        // New visitor
        update(visitsRef, {
          visitorId,
          visitCount: 1,
          firstVisit: new Date().toISOString(),
          lastVisit: new Date().toISOString(),
          userAgent: navigator.userAgent,
          language: navigator.language,
          totalDuration: 0,
        });
      }
    });

    // Update duration every 1.5 seconds
    const interval = setInterval(async () => {
      const duration = Date.now() - start;
      try {
        const snap = await get(visitsRef);
        const oldData = snap.exists() ? snap.val() : {};
        await update(visitsRef, {
          lastDuration: duration,
          totalDuration: (oldData.totalDuration || 0) + duration,
        });
      } catch (err) {
        console.error("Failed to update duration:", err);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, [visitorId]);



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
    <ThemeProvider>
      <div className="app">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Hero scrollToSection={scrollToSection} />
        <Projects />
        <Skills />
        <About />
        <ContactSection handleSubmit={handleSubmit} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
