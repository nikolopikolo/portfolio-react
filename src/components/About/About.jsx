import React from 'react';
import SectionHeader from '../common/SectionHeader';
import InfoCard from './InfoCard';
import { aboutData, personalInfo } from '../../data/portfolioData';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    'Clean, readable code with practical patterns',
    'Focus on offline-first & local network utilities',
    'Continuous learner with documented experimentation',
    'Strong foundation in Android SDK & Modern React',
  ];

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <SectionHeader
          eyebrow="01 // About Me"
          title="Curiosity driven. Craft oriented."
          subtitle="A glimpse into what drives my coding journey and how I approach building software."
        />

        <div className="about-grid">
          {/* Main story / philosophy card */}
          <div className="about-story-card">
            <div className="about-story-header">
              <span className="about-story-badge">
                <Sparkles size={14} /> My Approach
              </span>
              <span className="about-location-pill">📍 {personalInfo.location}</span>
            </div>

            <div className="about-paragraphs">
              {aboutData.paragraphs.map((p, index) => (
                <p key={index} className="about-text">
                  {p}
                </p>
              ))}
            </div>

            <div className="about-core-values">
              <h4 className="values-title">Development Principles</h4>
              <ul className="values-list">
                {highlights.map((item, index) => (
                  <li key={index} className="value-item">
                    <CheckCircle2 size={16} className="value-icon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Stats / Info Cards Column */}
          <div className="about-cards-column">
            {aboutData.cards.map((card) => (
              <InfoCard
                key={card.id}
                title={card.title}
                description={card.description}
                icon={card.icon}
                tag={card.tag}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

