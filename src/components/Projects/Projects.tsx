import React from 'react';
import ProjectCard from './ProjectCard';
import './projects.css';

// Project data (static)
const projectsData = [
  {
    id: 1,
    title: 'SENTINEL SHIELD',
    description: 'Passport verification system using face recognition technology for enhanced security and authentication.',
    image: '/images/Sentinel Main.png',
    technologies: ['Python', 'Flask', 'Face-Recognition ML', 'MySQL'],
    github: 'https://github.com/addu10/Sentinel-Shield'
  },
  {
    id: 2,
    title: 'HIPUS',
    description: 'Notes sharing platform for CUSAT students, enabling easy access to academic resources.',
    image: '/images/Hipus Main.png',
    technologies: ['Flask', 'Telethon', 'NextJS'],
    github: 'https://github.com/AazimAnish/CUSAT-notes'
  },
  {
    id: 3,
    title: 'OUR RUPEE',
    description: 'Blockchain-based donation platform to prevent donation fraud using smart contracts.',
    image: '/images/Our Rupee Main.png',
    technologies: ['HTML/CSS/JS', 'Ethereum', 'Solidity', 'Auth0', 'Flask'],
    github: 'https://github.com/addu10/OurRupee'
  },
  {
    id: 4,
    title: 'CMEX',
    description: 'Android app for CUSAT students to buy, sell, and rent goods within the campus community.',
    image: '/images/CMEX logo.png',
    technologies: ['React Native', 'Supabase'],
    github: 'https://github.com/addu10/CMEX'
  },
  {
    id: 5,
    title: 'CRIMINAL VERIFICATION SYSTEM',
    description: 'Decentralized verification system for criminal records developed for Kochi City Police.',
    image: '/images/Crime Verification Main.png',
    technologies: ['Ethereum', 'Solidity', 'React Native', 'Python'],
    github: 'https://github.com/addu10/criminal-verification'
  },
  {
    id: 6,
    title: 'CAREER-BRIDGE',
    description: 'AI-powered jobs & internship portal for CUSAT students to find career opportunities.',
    image: '/images/CareerBridge Main.png',
    technologies: ['NextJS', 'Supabase', 'Python Django'],
    github: 'https://github.com/addu10/CareerBridge'
  }
];

const Projects: React.FC = () => {
  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-description">
          Here are some of the projects I&apos;ve worked on. Each project showcases my skills and experience in different technologies.
        </p>
        
        <div className="projects-grid">
          {projectsData.map(project => (
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              github={project.github}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;