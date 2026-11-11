import React from 'react';
import { ExternalLink, ArrowUpRight, Wifi, Watch } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import Badge from '../common/Badge';
import './ProjectCard.css';

// Custom visual previews for each project
const ProjectPreviewBanner = ({ id, title, accentGlow }) => {
  if (id === 'pixelgallery') {
    return (
      <div className="project-banner project-banner--gallery">
        <div className="banner-mesh-glow" style={{ background: accentGlow }} />
        <div className="banner-graphic-mockup">
          {/* Phone Frame */}
          <div className="mockup-device mockup-phone">
            <div className="mockup-notch" />
            <div className="mockup-screen">
              <div className="mockup-gallery-header">
                <Wifi size={12} className="mockup-accent-icon" />
                <span>Wi-Fi Direct</span>
              </div>
              <div className="mockup-photo-grid">
                <div className="mockup-tile mockup-tile--active">
                  <span className="tile-glow" />
                </div>
                <div className="mockup-tile" />
                <div className="mockup-tile" />
                <div className="mockup-tile" />
              </div>
            </div>
          </div>

          {/* Wear OS Watch Frame */}
          <div className="mockup-device mockup-watch">
            <div className="mockup-watch-screen">
              <Watch size={13} className="mockup-accent-icon" />
              <div className="mockup-watch-tile" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fundory (Budget & Cart Calculator)
  return (
    <div className="project-banner project-banner--fundory">
      <div className="banner-mesh-glow" style={{ background: accentGlow }} />
      <div className="banner-graphic-mockup">
        <div className="mockup-budget-card">
          <div className="budget-top">
            <span className="budget-tag">CART TOTAL</span>
            <span className="budget-saved">-15% Applied</span>
          </div>
          <div className="budget-amount">$142.50</div>
          <div className="budget-progress-track">
            <div className="budget-progress-bar" />
          </div>
          <div className="budget-meta">
            <span>Budget: $200.00</span>
            <span className="budget-status">Within limit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  const {
    id,
    title,
    badge,
    category,
    description,
    features,
    technologies,
    githubUrl,
    status,
    statusColor,
    accentGlow,
  } = project;

  return (
    <article className="project-card">
      {/* Visual Preview Banner */}
      <ProjectPreviewBanner id={id} title={title} accentGlow={accentGlow} />

      <div className="project-card-content">
        {/* Top meta */}
        <div className="project-meta-row">
          <Badge variant={statusColor === 'green' ? 'accent' : statusColor === 'blue' ? 'blue' : 'amber'}>
            {badge}
          </Badge>
          <span className="project-category">{category}</span>
        </div>

        {/* Title & Description */}
        <h3 className="project-title">
          <span>{title}</span>
        </h3>
        <p className="project-description">{description}</p>

        {/* Highlight features list */}
        {features && (
          <ul className="project-features-list">
            {features.map((feat, index) => (
              <li key={index} className="project-feature-item">
                <span className="feature-bullet">›</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Technologies Pills */}
        <div className="project-tech-row">
          {technologies.map((tech) => (
            <span key={tech} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>

        {/* Card Footer / Links */}
        <div className="project-card-footer">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn"
            aria-label={`View ${title} source on GitHub`}
          >
            <GithubIcon size={16} />
            <span>GitHub Repository</span>
            <ArrowUpRight size={14} className="link-arrow" />
          </a>

          <span className="project-status-indicator">
            <span className={`status-dot status-dot--${statusColor}`} />
            <span>{status}</span>
          </span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
