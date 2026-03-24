'use client';

import React, { Suspense, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './hero.css';

const ParticleField = React.lazy(() => import('./ParticleField'));

const TITLES = ['AI Automation Specialist', 'Full-Stack Developer', 'Aspiring AI Engineer'];

const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < currentTitle.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length + 1));
      }, 80);
    } else if (!isDeleting && displayText.length === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentTitle.slice(0, displayText.length - 1));
      }, 40);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section className="hero" id="home">
      {/* 3D Background */}
      <Suspense fallback={null}>
        <ParticleField className="hero-particles" />
      </Suspense>

      {/* Gradient overlay */}
      <div className="hero-gradient-overlay" />

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hello, I&apos;m
          </motion.p>

          <motion.h1 className="hero-title" variants={itemVariants}>
            <span className="gradient-text">Adnan Sameer</span>
          </motion.h1>

          <motion.div className="hero-subtitle-wrapper" variants={itemVariants}>
            <h2 className="hero-subtitle">
              {displayText}
              <span className="typing-cursor">|</span>
            </h2>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            A passionate Engineering student building AI-powered solutions
            and automation systems. Currently crafting intelligent workflows at Bayzat UAE.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link href="/#contact" className="btn btn-primary">
              Get in Touch
            </Link>
            <Link href="/resume" className="btn btn-secondary">
              View Resume
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="profile-image-wrapper">
            <div className="profile-glow" />
            <Image
              src="/images/adnan_new.jpg"
              alt="Adnan Sameer"
              width={300}
              height={300}
              className="profile-image"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;