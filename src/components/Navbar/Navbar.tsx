import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './navbar.css';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo">
          Adnan Sameer
        </Link>

        {/* Mobile menu button */}
        <button 
          className="navbar-toggle" 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        {/* Navigation menu */}
        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="navbar-item">
            {isHomePage ? (
              <a href="#" onClick={scrollToTop} className="navbar-link">
                Home
              </a>
            ) : (
              <Link href="/" className="navbar-link">
                Home
              </Link>
            )}
          </li>
          <li className="navbar-item">
            <Link href={isHomePage ? "/#about" : "/#about"} className="navbar-link">
              About
            </Link>
          </li>
          <li className="navbar-item">
            <Link href={isHomePage ? "/#skills" : "/#skills"} className="navbar-link">
              Skills
            </Link>
          </li>
          <li className="navbar-item">
            <Link href={isHomePage ? "/#projects" : "/#projects"} className="navbar-link">
              Projects
            </Link>
          </li>
          <li className="navbar-item">
            <Link href={isHomePage ? "/#achievements" : "/#achievements"} className="navbar-link">
              Achievements
            </Link>
          </li>
          <li className="navbar-item">
            <Link href={isHomePage ? "/#contact" : "/#contact"} className="navbar-link">
              Contact
            </Link>
          </li>
          <li className="navbar-item">
            <Link href="/resume" className="navbar-link btn-outline navbar-button">
              Resume
            </Link>
          </li>
          <li className="navbar-item theme-toggle-container">
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 