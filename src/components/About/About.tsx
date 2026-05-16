'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import './about.css';

const stats = [
  { label: 'Projects Built', value: 6, suffix: '+' },
  { label: 'Hackathon Wins', value: 3, suffix: '' },
  { label: 'Years Experience', value: 1, suffix: '+' },
  { label: 'Technologies', value: 16, suffix: '+' },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 1500;
          const stepTime = duration / target;
          const timer = setInterval(() => {
            start++;
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, stepTime);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="stat-value gradient-text">
      {count}
      {suffix}
    </span>
  );
}

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <motion.div
            className="about-text glass-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="about-accent-line" />
            <p>
              I am a passionate and dedicated AI Automation Specialist currently working at Bayzat.
              My focus revolves around AI models, intelligent automations, and web scraping —
              areas I have been actively developing through hands-on projects, internships, and
              real-world production experience.
            </p>
            <p>
              My technical journey began with mastering programming fundamentals, which laid the
              groundwork for expanding into web development, data analysis, and application
              development. Over time, I gravitated toward AI and automation — drawn by the
              challenge of building systems that think, adapt, and scale. This shift allowed me
              to take on more complex and impactful work, ultimately leading to the design and
              deployment of multiple production-grade workflows at Bayzat that streamline
              day-to-day operations, reduce manual effort, and significantly improve overall
              efficiency.
            </p>
            <p>
              Beyond technical skills, I value collaboration, continuous learning, and effective
              communication. I believe the best solutions are built not just with strong code,
              but with clear thinking and the ability to work well with others. I am always
              looking to grow — whether that means exploring a new tool, contributing to
              meaningful projects, or finding smarter ways to solve problems that actually matter.
            </p>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          className="about-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;