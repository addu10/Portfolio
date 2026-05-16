'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import './experience.css';

const experiences = [
  {
    id: 1,
    title: 'AI Automation Specialist',
    organization: 'Bayzat UAE',
    period: 'Jul 2025 – Present',
    shortPeriod: 'JUL 2025',
    description:
      'Design and implement end-to-end AI-driven automations to streamline Marketing and Customer Success campaigns. Build scalable workflows using n8n and Clay AI to fully automate campaign execution, monitoring, and reporting.',
    icon: '/images/bayzat.gif',
    skills: ['n8n', 'Clay AI', 'AI Automations', 'Campaign Automation', 'Customer IO'],
  },
  {
    id: 2,
    title: 'AI Intern',
    organization: 'Bayzat UAE',
    period: 'May – Jun 2025',
    shortPeriod: 'MAY 2025',
    description:
      'Led LinkedIn profile data extraction project using Playwright and Nodriver. Created AI automation workflows with n8n and Clay AI for marketing backlinks. Assisted colleagues in setting up n8n workflows.',
    icon: '/images/bayzat.gif',
    skills: ['n8n', 'Playwright', 'Nodriver', 'Clay AI', 'Web Scraping'],
  },
];

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.18 },
  }),
};

const Experience: React.FC = () => {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <p className="section-description">
          Building real-world AI automation systems at scale.
        </p>

        <div className="exp-track">
          {/* Vertical glowing line */}
          <div className="exp-line" />

          {experiences.map((exp, i) => (
            <React.Fragment key={exp.id}>
              <motion.div
                className="exp-row"
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
              >
                {/* Period badge left of line */}
                <div className="exp-period-col">
                  <span className="exp-period-badge">{exp.shortPeriod}</span>
                </div>

                {/* Dot on the line */}
                <div className="exp-dot-col">
                  <div className="exp-dot">
                    <div className="exp-dot-inner" />
                  </div>
                </div>

                {/* Card */}
                <div className="exp-card glass-card">
                  <div className="exp-card-top">
                    <div className="exp-org-row">
                      <div className="exp-org-icon">
                        <Image src={exp.icon} alt={exp.organization} width={36} height={36} unoptimized />
                      </div>
                      <div>
                        <span className="exp-org-name">{exp.organization}</span>
                        <span className="exp-period-full">{exp.period}</span>
                      </div>
                    </div>
                    <h3 className="exp-role gradient-text">{exp.title}</h3>
                  </div>
                  <p className="exp-desc">{exp.description}</p>
                  <div className="exp-skills">
                    {exp.skills.map(skill => (
                      <span key={skill} className="exp-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Promotion connector between cards */}
              {i < experiences.length - 1 && (
                <motion.div
                  className="exp-promotion-connector"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                >
                  <span>↓ Started as intern · Promoted after 2 months</span>
                </motion.div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
