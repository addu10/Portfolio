import React from 'react';
import { FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content centered">
          <div className="footer-section">
            <h3 className="footer-title">Connect</h3>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/adnan-sameer-b8050024a/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/addduu._/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
              <a href="https://github.com/addu10" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://wa.me/918089708574" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Adnan Sameer.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 