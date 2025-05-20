import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import '../styles/about.css';
import pfp from '../assets/valorant-player-pigs-may-fly-card-avatar.png';

function AboutSection() {
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
          <h2 className="aboutTitle">About Me</h2>
          <p className="aboutParagraph">
            I'm a first-year student in Multiplatform App Development (DAM), specializing in digital entertainment and video games. I'm passionate about programming, especially in the context of game development and creative technology.
          </p>
          <p className="aboutParagraph">
            Right now, I'm focused on learning Unity and game development while building small projects to strengthen my skills. I enjoy working with game engines like Unity.
          </p>
          <p className="aboutParagraph aboutParagraphLast">
            I love solving problems, learning how systems work under the hood, and bringing ideas to life through code. I'm currently looking for opportunities to collaborate on projects, learn from real-world challenges, and grow as a developer.
          </p>
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