'use client';

import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Projects from '../components/Projects/Projects';
import Achievements from '../components/Achievements/Achievements';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ThemeProvider from '../components/ThemeToggle/ThemeProvider';

export default function Home() {
  return (
    <ThemeProvider>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
} 