import React from 'react';
import './about.css';

const About: React.FC = () => {
  return (
    <section className="about section" id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a passionate and dedicated Information Technology student currently in my 3rd year of BTech at College. 
              My current focus is on Python development, and I&apos;ve been actively building my skills in this area through various projects and courses.
            </p>
            <p>
              My technical journey began with learning programming fundamentals, and I&apos;ve since expanded my knowledge into web development, 
              data analysis, and application development. I&apos;m particularly interested in creating efficient and user-friendly solutions 
              that solve real-world problems.
            </p>
            <p>
              Beyond technical skills, I value collaboration, continuous learning, and effective communication. 
              I&apos;m seeking opportunities to apply my skills in a professional environment and contribute to meaningful projects.
            </p>
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 