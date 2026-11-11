import React from 'react';
import { personalInfo } from '../../data/portfolioData';
import Button from '../common/Button';
import CodeWindow from './CodeWindow';
import { ArrowDown, FolderGit2, Mail, Sparkles, Terminal } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Text & Call to Action */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-pulse" />
            <Sparkles size={14} className="hero-badge-icon" />
            <span>Aspiring Software Developer</span>
          </div>

          <h1 className="hero-title">
            Hey, I'm <span className="hero-title-name">{personalInfo.name}</span>.
          </h1>

          <p className="hero-subtitle">
            Passionate about programming, technology, and building thoughtful software.
          </p>

          <p className="hero-description">
            I enjoy transforming curiosity into functional applications—focusing on clean code,
            intuitive interfaces, and practical software engineering across web and Android.
          </p>

          {/* Call to action buttons */}
          <div className="hero-actions">
            <Button
              href="#projects"
              variant="primary"
              size="lg"
              icon={FolderGit2}
              iconPosition="left"
            >
              View My Projects
            </Button>

            <Button
              href="#contact"
              variant="secondary"
              size="lg"
              icon={Mail}
              iconPosition="left"
            >
              Contact Me
            </Button>
          </div>

          {/* Quick tech highlights */}
          <div className="hero-tech-pills">
            <span className="tech-pills-label">Core toolkit:</span>
            <div className="tech-pills-list">
              <span className="tech-pill">React</span>
              <span className="tech-pill">Kotlin</span>
              <span className="tech-pill">Android</span>
              <span className="tech-pill">JavaScript</span>
              <span className="tech-pill">Git</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Code Window / Graphic */}
        <div className="hero-graphic">
          <CodeWindow />
        </div>
      </div>

      {/* Subtle Scroll Indicator */}
      <a
        href="#about"
        className="hero-scroll-indicator"
        onClick={scrollToAbout}
        aria-label="Scroll to About section"
      >
        <div className="mouse-wheel">
          <span className="wheel-dot" />
        </div>
        <span className="scroll-text">Scroll Down</span>
        <ArrowDown size={14} className="scroll-arrow" />
      </a>
    </section>
  );
};

export default Hero;

