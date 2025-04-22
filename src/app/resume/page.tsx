'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ThemeProvider from '../../components/ThemeToggle/ThemeProvider';
import './resume.css';

const ResumePage = () => {
  return (
    <ThemeProvider>
      <>
        <Navbar />
        <main className="resume-page">
          <div className="container">
            <div className="resume-container">
              <div className="resume-header">
                <Link href="/" className="back-button">
                  ← Back to Home
                </Link>
                <h1 className="resume-title">My Resume</h1>
                <a 
                  href="/Resume - Adnan Sameer.pdf" 
                  download="Adnan_Sameer_Resume.pdf" 
                  className="download-button"
                >
                  Download PDF
                </a>
              </div>
              
              <div className="resume-content">
                {/* Education Section */}
                <section className="resume-section">
                  <h2 className="section-title">Education</h2>
                  <div className="education-item">
                    <div className="education-header">
                      <h3 className="institution">Cochin University of Science and Technology (CUSAT), Kerala, India</h3>
                      <span className="year">Expected May 2026</span>
                    </div>
                    <p className="degree">Bachelor of Technology in Information Technology</p>
                    <p className="grade">CGPA: 9.618/10.0</p>
                  </div>
                  
                  <div className="education-item">
                    <div className="education-header">
                      <h3 className="institution">Benchmark International School, Kerala, India</h3>
                      <span className="year">June 2020 - July 2022</span>
                    </div>
                    <p className="degree">Higher Secondary Schooling, 12th CBSE</p>
                    <p className="grade">Percentage: 91.2%</p>
                  </div>
                  
                  <div className="education-item">
                    <div className="education-header">
                      <h3 className="institution">Al Ain Juniors School, Al Ain, UAE</h3>
                      <span className="year">Mar 2019 - Mar 2020</span>
                    </div>
                    <p className="degree">Secondary Schooling, 10th CBSE</p>
                    <p className="grade">Percentage: 91%</p>
                  </div>
                </section>
                
                {/* Projects Section */}
                <section className="resume-section">
                  <h2 className="section-title">Projects</h2>
                  
                  <div className="experience-item">
                    <div className="experience-header">
                      <h3 className="company">Sentinel Shield – Passport Verification System</h3>
                      <span className="year">Feb 2024</span>
                    </div>
                    <p className="position">Team Leader & Lead Backend Developer</p>
                    <ul className="responsibilities">
                      <li>Led backend implementation using Flask and face-recognition ML to verify identities in real-time.</li>
                      <li>Streamlined passport verification to reduce wait times and enhance passenger experience.</li>
                      <li>Tech Stack – Python (Flask Framework, Face-Recognition ML) and Basic Front-End, MySQL.</li>
                    </ul>
                  </div>
                  
                  <div className="experience-item">
                    <div className="experience-header">
                      <h3 className="company">HIPUS – CUSAT Notes Sharing Platform</h3>
                      <span className="year">Mar 2024</span>
                    </div>
                    <p className="position">Backend Developer</p>
                    <ul className="responsibilities">
                      <li>Built backend APIs using Flask and Telegram&apos;s Telethon library to store and fetch notes via Telegram cloud.</li>
                      <li>Facilitated seamless resource sharing among CUSAT students by building a centralized academic content platform.</li>
                      <li>Tech Stack - Flask Framework, Telethon for Telegram, acting as the cloud storage, NextJS.</li>
                    </ul>
                  </div>
                  
                  <div className="experience-item">
                    <div className="experience-header">
                      <h3 className="company">Our Rupee – Blockchain Based Donation Platform</h3>
                      <span className="year">Nov 2024</span>
                    </div>
                    <p className="position">Lead Backend Developer</p>
                    <ul className="responsibilities">
                      <li>Engineered a secure donation platform using Ethereum and smart contracts to ensure transparent transactions.</li>
                      <li>Designed to prevent donation fraud by verifying claims and enabling secure, transparent blockchain-based transactions.</li>
                      <li>Tech Stack - HTML CSS JS, Ethereum, Ganache, Metamask, Solidity, Auth0, Flask Framework.</li>
                    </ul>
                  </div>
                  
                  <div className="experience-item">
                    <div className="experience-header">
                      <h3 className="company">CMEX – CUSAT Marketplace Android App</h3>
                      <span className="year">Jan 2025</span>
                    </div>
                    <p className="position">Team Leader & Backend Developer</p>
                    <ul className="responsibilities">
                      <li>Led a team to develop an Android app for CUSAT students to buy, sell, and rent goods.</li>
                      <li>Developed to connect CUSAT students for buying, selling, and renting goods through an intuitive marketplace interface.</li>
                      <li>Tech Stack – React Native, Supabase.</li>
                    </ul>
                  </div>
                  
                  <div className="experience-item">
                    <div className="experience-header">
                      <h3 className="company">Criminal Verification System for Kochi City Police</h3>
                      <span className="year">Feb 2025</span>
                    </div>
                    <p className="position">Backend Developer</p>
                    <ul className="responsibilities">
                      <li>Developed a decentralized verification system using Ethereum, OpenCV, and IPFS.</li>
                      <li>Collaborated on a React Native app to interface with the backend for real-world deployment.</li>
                      <li>Enables real-time criminal record verification while ensuring data integrity and reducing the risk of forgery or corruption.</li>
                      <li>Tech Stack – Basic Front-End, Metamask, Ethereum, Ganache, Solidity, React Native for App, Python.</li>
                    </ul>
                  </div>
                  
                  <div className="experience-item">
                    <div className="experience-header">
                      <h3 className="company">Career-Bridge – AI Powered Jobs & Internship Portal</h3>
                      <span className="year">Mar 2025</span>
                    </div>
                    <p className="position">Backend Developer</p>
                    <ul className="responsibilities">
                      <li>A product designed for the students in CUSAT to connect and achieve opportunities from several companies for jobs.</li>
                      <li>Integrates AI-driven resume analysis, career roadmap generation, and smart filtering to connect students with recruiters.</li>
                      <li>Tech Stack – NextJS, Supabase, Python Django.</li>
                    </ul>
                  </div>
                </section>
                
                {/* Achievements Section */}
                <section className="resume-section">
                  <h2 className="section-title">Achievements</h2>
                  
                  <ul className="achievements-list">
                    <li>Best Product in Hack to the Future, Conducted By IEEE Manipal University, Jaipur.</li>
                    <li>Best Implementation of Auth0 in Make-a-Ton 7.0, Conducted By CITTIC, CUSAT, Kerala.</li>
                    <li>Finalists in the Idea Pitching For Kochi City Police.</li>
                    <li>Winners of the Hack-Europa, Conducted By CITTIC & IT Dept, CUSAT.</li>
                  </ul>
                </section>
                
                {/* Skills Section */}
                <section className="resume-section">
                  <h2 className="section-title">Technical Skills</h2>
                  
                  <div className="skills-container">
                    <div className="skill-category">
                      <h3 className="category-title">Technical Skills</h3>
                      <div className="skills-list">
                        <span className="skill-tag">Python</span>
                        <span className="skill-tag">Flask Framework</span>
                        <span className="skill-tag">Django</span>
                        <span className="skill-tag">Face-Recognition</span>
                        <span className="skill-tag">React Native</span>
                        <span className="skill-tag">Supabase</span>
                        <span className="skill-tag">MySQL</span>
                        <span className="skill-tag">C & C++</span>
                      </div>
                    </div>
                    
                    <div className="skill-category">
                      <h3 className="category-title">Languages</h3>
                      <div className="skills-list">
                        <span className="skill-tag">English (Fluent)</span>
                        <span className="skill-tag">Malayalam (Fluent)</span>
                        <span className="skill-tag">Arabic (Basic)</span>
                        <span className="skill-tag">Hindi (Basic)</span>
                      </div>
                    </div>
                    
                    <div className="skill-category">
                      <h3 className="category-title">Non-Technical Skills</h3>
                      <div className="skills-list">
                        <span className="skill-tag">Problem Solving</span>
                        <span className="skill-tag">Team Collaboration</span>
                        <span className="skill-tag">Leadership</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default ResumePage; 