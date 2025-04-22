import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './achievements.css';

const Achievements: React.FC = () => {
  // Data for hackathon achievements
  const achievements = [
    {
      id: 1,
      title: 'Best Product Award in Hack to the Future',
      organizer: 'IEEE Manipal University, Jaipur',
      project: 'EcoCommute',
      description: 'Awarded for developing EcoCommute, an innovative solution for sustainable transportation and reducing carbon footprint.',
      role: 'Frontend Developer',
      image: '/images/Hack to the Future.png',
      alt: 'Hack to the Future Certificate'
    },
    {
      id: 2,
      title: 'Best Implementation of Auth0',
      organizer: 'Make-a-Ton 7.0, CITTIC, CUSAT, Kerala',
      project: 'Our Rupee',
      description: 'Recognized for excellent implementation of Auth0 authentication in the Our Rupee blockchain donation platform, ensuring secure user verification.',
      role: 'Lead Backend Developer',
      image: '/images/Make-A-Ton.jpg',
      alt: 'Make-A-Ton Certificate',
      projectLink: '/projects/3'
    },
    {
      id: 3,
      title: 'Winners of Hack-Europa',
      organizer: 'CITTIC & IT Department, CUSAT',
      project: 'CareerBridge',
      description: 'First place in Hack-Europa for creating CareerBridge, an AI-powered jobs and internship portal designed for CUSAT students.',
      role: 'Lead Backend Developer',
      image: '/images/HackEuropa.jpg',
      alt: 'HackEuropa Certificate',
      projectLink: '/projects/6'
    }
  ];

  return (
    <section className="achievements section" id="achievements">
      <div className="container">
        <h2 className="section-title">Hackathon Achievements</h2>
        <p className="section-description">
          Awards and recognitions from various hackathons and competitions that showcase my problem-solving abilities and technical skills.
        </p>
        
        <div className="achievements-container">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="achievement-card">
              <div className="achievement-image-container">
                <Image 
                  src={achievement.image}
                  alt={achievement.alt}
                  width={600}
                  height={400}
                  className="achievement-image"
                />
              </div>
              
              <div className="achievement-content">
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-organizer">{achievement.organizer}</p>
                
                <div className="achievement-details">
                  <div className="achievement-detail">
                    <span className="detail-label">Project:</span>
                    <span className="detail-value">
                      {achievement.projectLink ? (
                        <Link href={achievement.projectLink} className="project-link">
                          {achievement.project}
                        </Link>
                      ) : (
                        achievement.project
                      )}
                    </span>
                  </div>
                  
                  <div className="achievement-detail">
                    <span className="detail-label">Role:</span>
                    <span className="detail-value">{achievement.role}</span>
                  </div>
                </div>
                
                <p className="achievement-description">{achievement.description}</p>
                
                {achievement.projectLink && (
                  <Link href={achievement.projectLink} className="view-project-btn">
                    View Project Details
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements; 