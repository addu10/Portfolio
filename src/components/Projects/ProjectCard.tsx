'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './projects.css';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  title,
  description,
  image,
  technologies,
  github,
}) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({
      x: (y - 0.5) * -10,
      y: (x - 0.5) * 10,
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setTilt({ x: 0, y: 0 });
  }, []);

  return (
    <div
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
      }}
    >
      <div className="project-image">
        <Image
          src={image}
          alt={title}
          width={400}
          height={220}
          className="project-img"
        />
        <div className="project-image-overlay" />
      </div>

      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">
          {description.length > 120 ? `${description.substring(0, 120)}...` : description}
        </p>

        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-links">
          {github && (
            <a
              href={github}
              className="project-link github"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          <Link href={`/projects/${id}`} className="project-link details">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;