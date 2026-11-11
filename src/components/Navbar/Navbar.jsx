import React, { useState, useEffect } from 'react';
import { navLinks, personalInfo } from '../../data/portfolioData';
import { Menu, X, Terminal, ArrowUpRight, Search } from 'lucide-react';
import './Navbar.css';

const Navbar = ({ onOpenPalette }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position to add glass background and highlight active section
  useEffect(() => {
    const handleScroll = () => {
      // Toggle sticky background shadow
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((link) => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const top = section.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="navbar-brand"
          onClick={(e) => handleLinkClick(e, 'hero')}
          aria-label="Back to top"
        >
          <div className="brand-icon">
            <Terminal size={17} />
          </div>
          <span className="brand-text">
            {personalInfo.name}
            <span className="brand-accent">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="nav-item">
                  <a
                    href={`#${link.id}`}
                    className={`nav-link ${isActive ? 'nav-link--active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                  >
                    {link.label}
                    {isActive && <span className="nav-link-indicator" />}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Quick Action Button & Mobile Hamburger */}
        <div className="navbar-actions">
          {onOpenPalette && (
            <button
              type="button"
              className="navbar-search-btn"
              onClick={onOpenPalette}
              aria-label="Search commands"
              title="Quick Search & Commands (Ctrl+K)"
            >
              <Search size={14} className="navbar-search-icon" />
              <span className="navbar-search-text">Search</span>
              <kbd className="navbar-search-kbd">⌘K</kbd>
            </button>
          )}

          <a
            href="#contact"
            className="navbar-cta-btn"
            onClick={(e) => handleLinkClick(e, 'contact')}
          >
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'mobile-menu--open' : ''}`}>
        <div className="mobile-menu-backdrop" onClick={() => setMobileMenuOpen(false)} />
        <div className="mobile-menu-content">
          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="mobile-nav-item">
                  <a
                    href={`#${link.id}`}
                    className={`mobile-nav-link ${isActive ? 'mobile-nav-link--active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link.id)}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="mobile-active-dot" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mobile-menu-footer">
            <a
              href="#contact"
              className="btn btn--primary btn--md mobile-contact-cta"
              onClick={(e) => handleLinkClick(e, 'contact')}
            >
              Contact Me
            </a>
            <p className="mobile-footer-text">
              Status: <span className="status-indicator-dot" /> {personalInfo.role}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

