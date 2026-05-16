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
import Experience from '../components/Experience/Experience';
import ScrollProgress from '../components/ScrollProgress/ScrollProgress';
import CustomCursor from '../components/CustomCursor/CustomCursor';
import Loader from '../components/Loader/Loader';
import Terminal from '../components/Terminal/Terminal';

export default function Home() {
  return (
    <ThemeProvider>
      <Loader />
      <CustomCursor />
      <main>
        <ScrollProgress />
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Terminal />
        <Projects />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </ThemeProvider>
  );
}