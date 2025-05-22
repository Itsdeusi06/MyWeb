import React from 'react';
import '../styles/hero.css';

function HeroSection({ scrollToSection }) {
  return (
    <section id="home" className="heroSection">
      <div className="heroContainer">
        <div className="heroText">
          <h1 className="heroTitle">
            Hi, I'm <span className="heroHighlight">Pau Deusedes Domenech</span>
          </h1>
          <h2 className="heroSubtitle">Game Developer / Programmer</h2>
          <p className="heroDescription">
            I'm currently studying Multiplatform App Development (DAM) with a focus on games and digital entertainment. I’m learning Unity, programming fundamentals, and game design, and I love building small projects to sharpen my skills. Passionate about turning ideas into interactive experiences.
          </p>
          <div className="heroButtons">
            <button onClick={() => scrollToSection('projects')} className="primaryButton">
              View My Work
            </button>
            <button onClick={() => scrollToSection('contact')} className="secondaryButton">
              Contact Me
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
              alt="Game Development"
              className="heroImage floating"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;