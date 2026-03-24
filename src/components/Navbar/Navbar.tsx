import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import './navbar.css';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        <Link href="/" className="navbar-logo">
          <span className="logo-bracket">&lt;</span>
          AS
          <span className="logo-bracket">/&gt;</span>
        </Link>

        <button
          className="navbar-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href} className="navbar-item">
              {isHomePage && link.href === '#home' ? (
                <a
                  href="#"
                  onClick={scrollToTop}
                  className={`navbar-link ${activeSection === 'home' ? 'active' : ''}`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  href={isHomePage ? `/${link.href}` : `/${link.href}`}
                  className={`navbar-link ${activeSection === link.href.replace('#', '') ? 'active' : ''}`}
                  onClick={handleNavClick}
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
          <li className="navbar-item">
            <Link href="/resume" className="navbar-link navbar-resume-btn" onClick={handleNavClick}>
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