import React from 'react';
import './skills.css';

// Mock skills data
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
  
};

const Skills: React.FC = () => {
  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-container">
          <div className="skills-category">
            <h3 className="category-title">Programming Languages</h3>
            <div className="skills-list">
              {skillsData.programming.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">Frameworks</h3>
            <div className="skills-list">
              {skillsData.frameworks.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="skills-category">
            <h3 className="category-title">Tools & Libraries</h3>
            <div className="skills-list">
              {skillsData.tools.map((skill, index) => (
                <div className="skill-item" key={index}>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          
        </div>
      </div>
    </section>
  );
};

export default Skills; 