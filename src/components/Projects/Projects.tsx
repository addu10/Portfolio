'use client';

import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import './projects.css';

// Project data (static)
const projectsData = [
  {
    id: 1,
    title: 'CAREER-BRIDGE',
    description: 'AI-powered jobs & internship portal for CUSAT students to find career opportunities.',
    image: '/images/CareerBridge Main.png',
    technologies: ['NextJS', 'Supabase', 'Python Django'],
    github: 'https://github.com/addu10/CareerBridge',
    highlights: ['AI-matched job recommendations', 'Real-time application tracking', 'Built for 5,000+ CUSAT students'],
  },
  {
    id: 2,
    title: 'SENTINEL SHIELD',
    description: 'Passport verification system using face recognition technology for enhanced security and authentication.',
    image: '/images/Sentinel Main.png',
    technologies: ['Python', 'Flask', 'Face-Recognition ML', 'MySQL'],
    github: 'https://github.com/addu10/Sentinel-Shield',
    highlights: ['Face recognition with 95%+ accuracy', 'Passport OCR + liveness detection', 'Real-time verification pipeline'],
  },
  {
    id: 3,
    title: 'CMEX',
    description: 'Android app for CUSAT students to buy, sell, and rent goods within the campus community.',
    image: '/images/CMEX logo.png',
    technologies: ['React Native', 'Supabase'],
    github: 'https://github.com/addu10/CMEX',
    highlights: ['In-app messaging between buyers/sellers', 'Image upload & product listing', 'Campus-scoped marketplace'],
  },
  {
    id: 4,
    title: 'OUR RUPEE',
    description: 'Blockchain-based donation platform to prevent donation fraud using smart contracts.',
    image: '/images/Our Rupee Main.png',
    technologies: ['HTML/CSS/JS', 'Ethereum', 'Solidity', 'Auth0', 'Flask'],
    github: 'https://github.com/addu10/OurRupee',
    highlights: ['Immutable on-chain donation records', 'Auth0 identity verification', 'Won Best Auth0 Implementation — Make-a-Ton 7.0'],
  },
  {
    id: 5,
    title: 'CRIMINAL VERIFICATION SYSTEM',
    description: 'Decentralized verification system for criminal records developed for Kochi City Police.',
    image: '/images/Crime Verification Main.png',
    technologies: ['Ethereum', 'Solidity', 'React Native', 'Python'],
    github: 'https://github.com/addu10/criminal-verification',
    highlights: ['Tamper-proof decentralized records', 'Built for Kochi City Police', 'Cross-platform mobile interface'],
  },
  {
    id: 6,
    title: 'HIPUS',
    description: 'Notes sharing platform for CUSAT students, enabling easy access to academic resources.',
    image: '/images/Hipus Main.png',
    technologies: ['Flask', 'Telethon', 'NextJS'],
    github: 'https://github.com/AazimAnish/CUSAT-notes',
    highlights: ['Telegram-integrated notes pipeline', 'Searchable academic resource library', 'Used by CUSAT student community'],
  },
];

const gridVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const Projects: React.FC = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-description">
            Here are some of the projects I&apos;ve worked on. Each project showcases my skills and experience in different technologies.
          </p>
        </motion.div>

        <motion.div
          className="projects-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projectsData.map(project => (
            <motion.div key={project.id} variants={cardVariants}>
              <ProjectCard
                id={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                github={project.github}
                highlights={project.highlights}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;