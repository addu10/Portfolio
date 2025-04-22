import React from 'react';
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
  github
}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        {/* Using the actual project image */}
        <Image 
          src={image} 
          alt={title}
          width={350}
          height={200}
          className="project-img"
        />
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{title}</h3>
        
        <p className="project-description">
          {description.length > 150 
            ? `${description.substring(0, 150)}...` 
            : description
          }
        </p>
        
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        
        <div className="project-links">
          {github && (
            <a href={github} className="project-link github" target="_blank" rel="noopener noreferrer">
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