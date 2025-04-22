'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import Navbar from '../../../components/Navbar/Navbar';
import Footer from '../../../components/Footer/Footer';
import ThemeProvider from '../../../components/ThemeToggle/ThemeProvider';
import './project-details.css';

// This would come from Supabase in a real application
const projectsData = [
  {
    id: 1,
    title: 'SENTINEL SHIELD',
    description: 'Passport verification system using face recognition technology for enhanced security and authentication.',
    fullDescription: `
      Sentinel Shield is a passport verification system that uses face recognition technology to enhance security and authentication processes at border control and security checkpoints.
      
      Key features include:
      - Facial recognition for identity verification
      - Real-time passport data validation
      - Secure database of passenger information
      - Admin dashboard for monitoring and reporting
      - Integration with existing security systems
    `,
    image: '/images/Sentinel Main.png',
    technologies: ['Python', 'Flask', 'Face-Recognition ML', 'MySQL'],
    github: 'https://github.com/addu10/Sentinel-Shield',
    live: 'https://sentinelshield-demo.example.com',
    contributions: `As Team Leader & Lead Backend Developer, I led the development of the core facial recognition system, designed the database architecture, and implemented the Flask backend API. I also coordinated the team's efforts and ensured timely delivery of project milestones.`,
    screenshots: [
      '/images/Sentinel Main.png',
      '/images/Sentinel Login.png',
      '/images/Sentinel - Face Scanning.png',
      '/images/Sentinel - Verification.png',
      '/images/Sentinel Verified.png',
      '/images/Sentinel What we do.png',
    ]
  },
  {
    id: 2,
    title: 'HIPUS',
    description: 'Notes sharing platform for CUSAT students, enabling easy access to academic resources.',
    fullDescription: `
      HIPUS is a notes sharing platform specifically designed for CUSAT (Cochin University of Science and Technology) students to access and share academic resources.
      
      Key features include:
      - Centralized repository for course notes
      - Telegram integration for easy sharing
      - User authentication and profile management
      - Search functionality for finding specific notes
      - Mobile-responsive design for access on any device
    `,
    image: '/images/Hipus Main.png',
    technologies: ['Flask', 'Telethon', 'NextJS'],
    github: 'https://github.com/AazimAnish/CUSAT-notes',
    contributions: `As Backend Developer, I implemented the Flask backend API and integrated Telethon for automated Telegram interactions.`,
    screenshots: [
      '/images/Hipus Main.png',
      '/images/Hipus Upload.png',
    ]
  },
  {
    id: 3,
    title: 'OUR RUPEE',
    description: 'Blockchain-based donation platform to prevent donation fraud using smart contracts.',
    fullDescription: `
      Our Rupee is a blockchain-based donation platform that uses smart contracts to ensure transparency and prevent donation fraud in charitable giving.
      
      Key features include:
      - Ethereum-based smart contracts for transparent transactions
      - User authentication via Auth0
      - Donation tracking and verification
      - Public ledger of all transactions
      - Campaign creation and management
    `,
    image: '/images/Our Rupee Main.png',
    technologies: ['HTML/CSS/JS', 'Ethereum', 'Solidity', 'Auth0', 'Flask'],
    github: 'https://github.com/addu10/OurRupee',
    live: 'https://our-rupee-demo.example.com',
    contributions: `As Lead Backend Developer, I integrated Auth0 for authentication, and developed the Flask backend.`,
    screenshots: [
      '/images/Our Rupee Main.png',
      '/images/Our Rupee Donation.png',
      '/images/Our Rupee Collections.png',
    ]
  },
  {
    id: 4,
    title: 'CMEX',
    description: 'Android app for CUSAT students to buy, sell, and rent goods within the campus community.',
    fullDescription: `
      CMEX is a marketplace Android application designed for CUSAT students to buy, sell, and rent goods within the campus community. It provides a platform for students to exchange textbooks, electronics, and other items.
      
      Key features include:
      - User profiles and authentication
      - Product listing and search functionality
      - In-app messaging for buyers and sellers
      - Category filtering and sorting options
      - Image uploads for product listings
    `,
    image: '/images/CMEX MAIN.jpg',
    technologies: ['React Native', 'Supabase'],
    github: 'https://github.com/addu10/CMEX',
    contributions: `As Team Leader & Backend Developer, I led the project development, implemented the Supabase backend, and created the database schema. I also coordinated the team's efforts and developed key features of the React Native application.`,
    screenshots: [
      '/images/CMEX MAIN.jpg',
      '/images/CMEX PRODUCTS.jpg',
      '/images/CMEX LISTING.jpg',
      '/images/CMEX CHATTING.jpg',
      '/images/CMEX PROFILE.jpg',
      '/images/CMEX CHAT.jpg',
      '/images/CMEX MYLISTINGS.jpg',
      '/images/CMEX LOGIN.jpg',
      '/images/CMEX WISHLIST.jpg',
    ]
  },
  {
    id: 5,
    title: 'CRIMINAL VERIFICATION SYSTEM',
    description: 'Decentralized verification system for criminal records developed for Kochi City Police.',
    fullDescription: `
      The Criminal Verification System is a decentralized platform developed for Kochi City Police to securely store and verify criminal records using blockchain technology.
      
      Key features include:
      - Blockchain-based record storage for immutability
      - Secure verification process with multiple authentication layers
      - Mobile application for field verification
      - Administrative dashboard for record management
      - Audit trail for all verification attempts
    `,
    image: '/images/Crime Verification Main.png',
    technologies: ['Ethereum', 'Solidity', 'React Native', 'Python'],
    github: 'https://github.com/addu10/criminal-verification',
    contributions: `This project was created to be presented in a ideathon for Kochi City Police. I developed the Python backend services, and integrated the facial recognition with the React Native mobile application. `,
    screenshots: [
      '/images/Crime Verification Main.png',
      '/images/Crime Verification Details.png',
      '/images/Crime Verification Face.png',
    ]
  },
  {
    id: 6,
    title: 'CAREER-BRIDGE',
    description: 'AI-powered jobs & internship portal for CUSAT students to find career opportunities.',
    fullDescription: `
      Career-Bridge is an AI-powered jobs and internship portal designed specifically for CUSAT students to connect with potential employers and find career opportunities.
      
      Key features include:
      - AI-powered job matching algorithm
      - Resume parsing and analysis
      - Company profiles and job listings
      - Application tracking system
      - Interview scheduling and feedback collection
    `,
    image: '/images/CareerBridge Main.png',
    technologies: ['NextJS', 'Supabase', 'Python Django'],
    github: 'https://github.com/addu10/CareerBridge',
    live: 'https://career-bridge-demo.example.com',
    contributions: `As Backend Developer, I developed the Django backend API, implemented the database schema in Supabase, and created the job matching algorithm. I also integrated the backend with the NextJS frontend and developed the user authentication system.`,
    screenshots: [
      '/images/CareerBridge Main.png',
      '/images/CareerBridge Jobs.png',
      '/images/CareerBridge Candidates.png',
      '/images/CareerBridge Profile.png',
      '/images/CareerBridge Resume.png',
      '/images/CareerBridge Roadmap.png',
    ]
  }
];

const ProjectDetailsPage = () => {
  const params = useParams();
  const projectId = parseInt(params.id as string);
  
  // State for image modal
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Find the project in our mock data
  const project = projectsData.find(p => p.id === projectId);
  
  // Function to open modal with specific image
  const openImageModal = (imageUrl: string, index: number) => {
    setCurrentImage(imageUrl);
    setCurrentIndex(index);
    setModalOpen(true);
    // Prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Function to close modal
  const closeImageModal = () => {
    setModalOpen(false);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };
  
  // Functions for image navigation with touch support
  const showPrevImage = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    if (!project?.screenshots) return;
    
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = project.screenshots.length - 1;
    
    setCurrentImage(project.screenshots[newIndex]);
    setCurrentIndex(newIndex);
  };
  
  const showNextImage = (e: React.MouseEvent | React.TouchEvent) => {
    e.stopPropagation();
    if (!project?.screenshots) return;
    
    let newIndex = currentIndex + 1;
    if (newIndex >= project.screenshots.length) newIndex = 0;
    
    setCurrentImage(project.screenshots[newIndex]);
    setCurrentIndex(newIndex);
  };
  
  // If project not found, show error
  if (!project) {
    return (
      <ThemeProvider>
        <>
          <Navbar />
          <main className="project-details-page">
            <div className="container">
              <div className="project-not-found">
                <h1>Project Not Found</h1>
                <p>The project you&apos;re looking for doesn&apos;t exist or has been removed.</p>
                <Link href="/#projects" className="btn btn-primary">
                  Back to Projects
                </Link>
              </div>
            </div>
          </main>
          <Footer />
        </>
      </ThemeProvider>
    );
  }
  
  return (
    <ThemeProvider>
      <>
        <Navbar />
        <main className="project-details-page">
          <div className="container">
            <div className="project-details-container">
              <div className="project-details-header">
                <Link href="/#projects" className="back-button">
                  ← Back to Projects
                </Link>
                <h1 className="project-title">{project.title}</h1>
              </div>
              
              {/* Main project image */}
              <div 
                className={`project-main-image project-id-${project.id}`} 
                onClick={() => openImageModal(project.image, 0)}
              >
                <Image 
                  src={project.image}
                  alt={project.title}
                  width={1200}
                  height={600}
                  className="featured-image"
                />
              </div>
              
              <div className="project-details-content">
                <div className="project-info">
                  <h2>Project Overview</h2>
                  <p className="project-description">{project.fullDescription}</p>
                  
                  <h2>Technologies Used</h2>
                  <div className="project-tech">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  
                  <h2>My Contributions</h2>
                  <p>{project.contributions}</p>
                  
                  {/* Project screenshots gallery */}
                  {project.screenshots && project.screenshots.length > 1 && (
                    <>
                      <h2>Project Gallery</h2>
                      <div className="project-gallery">
                        {project.screenshots.slice(1).map((screenshot, index) => {
                          // Check if this is a mobile app project (CMEX or Criminal Verification)
                          const isMobileApp = project.id === 4 || project.id === 5;
                          return (
                            <div 
                              key={index} 
                              className={`gallery-item ${isMobileApp ? 'mobile-app' : ''}`}
                              onClick={() => openImageModal(screenshot, index + 1)}
                            >
                              <Image 
                                src={screenshot}
                                alt={`${project.title} screenshot ${index + 1}`}
                                width={350}
                                height={200}
                                className={`gallery-image ${isMobileApp ? 'mobile-app-image' : ''}`}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                  
                  <div className="project-links-container">
                    {project.github && (
                      <a href={project.github} className="project-link github" target="_blank" rel="noopener noreferrer">
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Image Modal */}
          <div 
            className={`image-modal-overlay ${modalOpen ? 'active' : ''}`} 
            onClick={closeImageModal}
          >
            <div className="modal-image-container" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={closeImageModal}>&times;</button>
              
              {currentImage && (
                <Image 
                  src={currentImage} 
                  alt="Enlarged view" 
                  width={1200}
                  height={800}
                  className="modal-image"
                  priority
                />
              )}
              
              {project.screenshots && project.screenshots.length > 1 && (
                <div className="modal-navigation">
                  <button 
                    className="modal-nav-button" 
                    onClick={showPrevImage}
                    onTouchEnd={showPrevImage} 
                  >
                    &lt;
                  </button>
                  <button 
                    className="modal-nav-button" 
                    onClick={showNextImage}
                    onTouchEnd={showNextImage}
                  >
                    &gt;
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default ProjectDetailsPage; 