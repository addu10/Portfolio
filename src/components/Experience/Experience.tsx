import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './experience.css';

const experiences = [
  {
    id: 1,
    title: 'Student',
    organization: 'Cochin University',
    period: '2022 - Present',
    description: 'Pursuing BTech in Information Technology, focusing on software development, data analysis, and real-world problem solving.',
    icon: '/images/cusat.png',
    skills: ['Software Development', 'Data Analysis', 'Problem Solving'],
  },
  {
    id: 2,
    title: 'AI Intern',
    organization: 'Bayzat UAE',
    period: 'May 2025 - June 2025',
    description: 'Led LinkedIn profile data extraction project using Playwright and Nodriver. Created AI automation workflows with n8n and Clay AI for marketing backlinks. Assisted colleagues in setting up n8n workflows.',
    icon: '/images/bayzat.gif',
    skills: ['n8n', 'Playwright', 'Nodriver', 'Clay AI', 'Web Scraping'],
  },
  {
    id: 3,
    title: 'AI Automation Specialist',
    organization: 'Bayzat UAE',
    period: 'July 2025 - Present',
    description: 'Design and implement end-to-end AI-driven automations to streamline Marketing and Customer Success campaigns. Build scalable workflows using n8n and Clay AI to fully automate campaign execution, monitoring, and reporting.',
    icon: '/images/bayzat.gif',
    skills: ['n8n', 'Clay AI', 'AI Automations', 'Campaign Automation', 'Customer IO'],
  },
  
];

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.timeline-item').forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="timeline-vertical-container">
          {/* Vertical Line */}
          <div className="timeline-vertical-line" />
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              id={`exp-${exp.id}`}
              className={`timeline-item timeline-alt ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{
                opacity: isVisible[`exp-${exp.id}`] ? 1 : 0,
                y: isVisible[`exp-${exp.id}`] ? 0 : 50,
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Left column (card if left-aligned) */}
              {index % 2 === 0 ? (
                <div className={`timeline-card`}> 
                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title} <span className="timeline-org">@ {exp.organization}</span></h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="timeline-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ width: '100%' }} />
              )}
              {/* Center column (logo) */}
              <div className="timeline-point">
                <span className="timeline-icon-border">
                  <img src={exp.icon} alt={exp.title} className="timeline-icon" />
                </span>
              </div>
              {/* Right column (card if right-aligned) */}
              {index % 2 === 1 ? (
                <div className={`timeline-card`}> 
                  <div className="timeline-header">
                    <h3 className="timeline-title">{exp.title} <span className="timeline-org">@ {exp.organization}</span></h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-skills">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="timeline-skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              ) : (
                <div style={{ width: '100%' }} />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 