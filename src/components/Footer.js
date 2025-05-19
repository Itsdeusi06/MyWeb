import { FaGithub, FaLinkedin, FaTwitter, FaItchIo } from 'react-icons/fa';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        <div className="footerMain">
          <div className="footerBrand">
            <span className="footerName">Pau Deusedes Domenech</span>
            <p className="footerRole">Unity Game Developer</p>
          </div>
          <div className="footerLinks">
            <a href="https://github.com/Itsdeusi06" className="footerLink">
              <FaGithub className="footerIcon" />
            </a>
            <a href="https://www.linkedin.com/in/pau-deusedes-domenech-4795a5347/" className="footerLink">
              <FaLinkedin className="footerIcon" />
            </a>
            <a href="https://x.com/itsdeusi06" className="footerLink">
              <FaTwitter className="footerIcon" />
            </a>
            <a href="#" className="footerLink">
              <FaItchIo className="footerIcon" />
            </a>
          </div>
        </div>
        <div className="footerBottom">
          <p>&copy; 2023 Pau Deusedes Domenech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;