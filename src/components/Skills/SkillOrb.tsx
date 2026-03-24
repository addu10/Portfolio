'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface SkillOrbProps {
  name: string;
  proficiency: number;
  index: number;
}

const SkillOrb: React.FC<SkillOrbProps> = ({ name, proficiency, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (circumference * (isVisible ? proficiency : 0)) / 100;

  return (
    <motion.div
      ref={ref}
      className={`skill-orb ${isHovered ? 'skill-orb-hovered' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="skill-orb-ring">
        <svg viewBox="0 0 90 90" className="skill-svg">
          {/* Background ring */}
          <circle
            cx="45"
            cy="45"
            r={radius}
            fill="none"
            stroke="var(--border)"
            strokeWidth="4"
          />
          {/* Progress ring */}
          <circle
            cx="45"
            cy="45"
            r={radius}
            fill="none"
            stroke="url(#skillGradient)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{
              transition: 'stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
              transform: 'rotate(-90deg)',
              transformOrigin: '50% 50%',
            }}
          />
          <defs>
            <linearGradient id="skillGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--emerald-400)" />
              <stop offset="100%" stopColor="var(--cyan-400)" />
            </linearGradient>
          </defs>
        </svg>
        <span className="skill-orb-percent">{isVisible ? proficiency : 0}%</span>
      </div>
      <span className="skill-orb-name">{name}</span>
    </motion.div>
  );
};

export default SkillOrb;
