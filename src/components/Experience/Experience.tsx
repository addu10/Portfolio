'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './experience.css';

const experiences = [
  {
    id: 1,
    title: 'Student',
    organization: 'Cochin University',
    period: '2022 - Present',
    description:
      'Pursuing BTech in Information Technology, focusing on software development, data analysis, and real-world problem solving.',
    icon: '/images/cusat.png',
    skills: ['Software Development', 'Data Analysis', 'Problem Solving'],
  },
  {
    id: 2,
    title: 'AI Intern',
    organization: 'Bayzat UAE',
    period: 'May 2025 - June 2025',
    description:
      'Led LinkedIn profile data extraction project using Playwright and Nodriver. Created AI automation workflows with n8n and Clay AI for marketing backlinks. Assisted colleagues in setting up n8n workflows.',
    icon: '/images/bayzat.gif',
    skills: ['n8n', 'Playwright', 'Nodriver', 'Clay AI', 'Web Scraping'],
  },
  {
    id: 3,
    title: 'AI Automation Specialist',
    organization: 'Bayzat UAE',
    period: 'July 2025 - Present',
    description:
      'Design and implement end-to-end AI-driven automations to streamline Marketing and Customer Success campaigns. Build scalable workflows using n8n and Clay AI to fully automate campaign execution, monitoring, and reporting.',
    icon: '/images/bayzat.gif',
    skills: ['n8n', 'Clay AI', 'AI Automations', 'Campaign Automation', 'Customer IO'],
  },
];

const Experience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.exp-timeline-item').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-description">
          My professional journey and educational background.
        </p>

        <div className="exp-timeline">
          {/* Glowing timeline line */}
          <div className="exp-timeline-line" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            const isVisible = visibleItems.has(`exp-${exp.id}`);

            return (
              <motion.div
                key={exp.id}
                id={`exp-${exp.id}`}
                className={`exp-timeline-item ${isLeft ? 'exp-left' : 'exp-right'}`}
                initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                animate={isVisible ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Card */}
                <div className="exp-card glass-card glow-border">
                  <div className="exp-card-header">
                    <div className="exp-card-icon">
                      <img src={exp.icon} alt={exp.organization} />
                    </div>
                    <div>
                      <h3 className="exp-card-title">{exp.title}</h3>
                      <span className="exp-card-org">@ {exp.organization}</span>
                    </div>
                  </div>
                  <span className="exp-card-period">{exp.period}</span>
                  <p className="exp-card-desc">{exp.description}</p>
                  <div className="exp-card-skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="exp-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="exp-timeline-dot">
                  <div className="exp-dot-inner" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;