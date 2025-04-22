import React, { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from './ThemeProvider';
import './theme-toggle.css';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDarkMode = theme === 'dark';

  // Only show the toggle after mounting to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions to avoid layout shift
    return <div className="theme-toggle-placeholder" />;
  }

  return (
    <button 
      className="theme-toggle-btn" 
      onClick={toggleTheme}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDarkMode ? <FaSun className="theme-icon sun" /> : <FaMoon className="theme-icon moon" />}
    </button>
  );
};

export default ThemeToggle; 