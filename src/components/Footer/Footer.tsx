import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa';
import './footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          
          
          <div className="footer-links">
            <div className="footer-section">
              <h3 className="footer-title">Navigation</h3>
              <ul className="footer-menu">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#about">About</Link></li>
                <li><Link href="/#skills">Skills</Link></li>
                <li><Link href="/#projects">Projects</Link></li>
                <li><Link href="/#contact">Contact</Link></li>
              </ul>
            </div>
            
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
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">
            &copy; {currentYear} Adnan Sameer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 