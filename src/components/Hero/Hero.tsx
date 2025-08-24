import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" id="home">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Hi, I&apos;m <span className="highlight">Adnan Sameer</span></h1>
          <h2 className="hero-subtitle">Aspiring AI Engineer</h2>
          <p className="hero-description">
            A passionate Engineering student with a focus on AI and Software development.
            Currently in my 4th year of BTech in Information Technology.
          </p>
          <div className="hero-buttons">
            <Link href="/#contact" className="btn btn-primary">
              Contact Me
            </Link>
            <Link href="/resume" className="btn btn-secondary">
              View Resume
            </Link>
          </div>
        </div>
        <div className="hero-image-container">
          <div className="profile-image-wrapper">
          <Image
  src="/images/adnan_new.jpg"
  alt="Adnan Sameer"
  width={300}
  height={300}
  className="profile-image"
  priority
/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 