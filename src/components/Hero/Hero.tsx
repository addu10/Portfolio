'use client';

import React, { Suspense, useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import './hero.css';

const ParticleField = React.lazy(() => import('./ParticleField'));

const TITLES = ['AI Automation Specialist', 'Full-Stack Developer', 'Aspiring AI Engineer'];

const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const btn1Ref = useRef<HTMLAnchorElement>(null);
  const btn2Ref = useRef<HTMLAnchorElement>(null);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 40]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const makeMagnetic = useCallback((ref: React.RefObject<HTMLAnchorElement | null>) => {
    const el = ref.current;
    if (!el) return () => { };
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${dx * 0.3}px, ${dy * 0.3}px)`;
    };
    const onLeave = () => { el.style.transform = ''; };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  useEffect(() => {
    const cleanups = [makeMagnetic(btn1Ref), makeMagnetic(btn2Ref)];
    return () => cleanups.forEach(fn => fn());
  }, [makeMagnetic]);

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
    <section className="hero" id="home" ref={heroRef}>
      {/* 3D Background */}
      <Suspense fallback={null}>
        <ParticleField className="hero-particles" />
      </Suspense>

      {/* Gradient overlay */}
      <div className="hero-gradient-overlay" />

      <div className="container hero-container">
        <motion.div style={{ y: contentY, opacity: contentOpacity }}>
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p className="hero-greeting" variants={itemVariants}>
            Hello, I&apos;m
          </motion.p>

          <motion.h1 className="hero-title glitch-wrapper" variants={itemVariants}>
            <span className="gradient-text-animated" data-text="Adnan Sameer">Adnan Sameer</span>
          </motion.h1>

          <motion.div className="hero-subtitle-wrapper" variants={itemVariants}>
            <h2 className="hero-subtitle">
              {displayText}
              <span className="typing-cursor">|</span>
            </h2>
          </motion.div>

          <motion.p className="hero-description" variants={itemVariants}>
            A passionate Engineer building AI-powered solutions
            and automation systems. Currently crafting intelligent workflows at Bayzat UAE.
          </motion.p>

          <motion.div className="hero-buttons" variants={itemVariants}>
            <Link ref={btn1Ref} href="/#contact" className="btn btn-primary magnetic-btn">
              Get in Touch
            </Link>
            <Link ref={btn2Ref} href="/resume" className="btn btn-secondary magnetic-btn">
              View Resume
            </Link>
          </motion.div>
        </motion.div>
        </motion.div>

        <motion.div style={{ y: imageY, opacity: imageOpacity }}>
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="profile-image-wrapper">
            <div className="profile-glow" />
            <Image
              src="/images/adnan_new.jpeg"
              alt="Adnan Sameer"
              width={300}
              height={300}
              className="profile-image"
              priority
            />
          </div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;