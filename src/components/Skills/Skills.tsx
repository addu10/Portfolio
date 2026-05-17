'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SkillOrb from './SkillOrb';
import './skills.css';

const skillsData = {
  programming: [
    { name: 'Python', proficiency: 75 },
    { name: 'JavaScript', proficiency: 60 },
    { name: 'C/C++', proficiency: 70 },
    { name: 'HTML/CSS', proficiency: 85 },
  ],
  frameworks: [
    { name: 'Flask', proficiency: 80 },
    { name: 'Django', proficiency: 60 },
    { name: 'React-Native', proficiency: 70 },
    { name: 'Next.js', proficiency: 65 },
  ],
  tools: [
    { name: 'Git', proficiency: 80 },
    { name: 'Supabase', proficiency: 65 },
    { name: 'SQL', proficiency: 75 },
    { name: 'Face-Recognition', proficiency: 60 },
  ],
  aiAutomation: [
    { name: 'n8n', proficiency: 80 },
    { name: 'Clay AI', proficiency: 75 },
    { name: 'Customer IO', proficiency: 70 },
    { name: 'Open AI APIs', proficiency: 65 },
  ],
};

type Category = keyof typeof skillsData;

const categoryLabels: Record<Category, string> = {
  programming: 'Languages',
  frameworks: 'Frameworks',
  tools: 'Tools & Libraries',
  aiAutomation: 'AI & Automation',
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('programming');

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">My Skills</h2>
          <p className="section-description">
            Technologies and tools I work with to build intelligent solutions.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="skills-tabs"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          {(Object.keys(skillsData) as Category[]).map((cat) => (
            <button
              key={cat}
              className={`skills-tab ${activeCategory === cat ? 'skills-tab-active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="skills-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {skillsData[activeCategory].map((skill, index) => (
              <SkillOrb
                key={`${activeCategory}-${skill.name}`}
                name={skill.name}
                proficiency={skill.proficiency}
                index={index}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Infinite marquee ticker */}
        <div className="skills-marquee-wrapper">
          <div className="skills-marquee-track">
            {[...Object.values(skillsData).flat(), ...Object.values(skillsData).flat()].map((skill, i) => (
              <span key={i} className="skill-marquee-pill">
                {skill.name}
                <span className="skill-marquee-dot" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;