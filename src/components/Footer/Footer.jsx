import React from 'react';
import { personalInfo, navLinks } from '../../data/portfolioData';
import { ArrowUp, Mail, Terminal, Heart } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Top footer row: Brand, Nav links, Back to top */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <div className="footer-brand-logo">
              <Terminal size={18} className="footer-brand-icon" />
              <span className="footer-brand-name">
                {personalInfo.name}
                <span className="brand-accent">.dev</span>
              </span>
            </div>
            <p className="footer-brand-tagline">
              Aspiring Software Developer • Focused on clean code & thoughtful software.
            </p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="footer-nav-link"
                    onClick={(e) => handleLinkClick(e, link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="footer-back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            title="Back to top"
          >
            <span>Top</span>
            <ArrowUp size={16} />
          </button>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom footer row: Copyright & socials */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © {currentYear} {personalInfo.name}. Designed & built with React + Vite.
          </p>

          <div className="footer-social-links">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-btn"
              aria-label="GitHub profile"
            >
              <GithubIcon size={16} />
              <span>GitHub</span>
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="footer-social-btn"
              aria-label="Send email"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
