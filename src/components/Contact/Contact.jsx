import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import Button from '../common/Button';
import { personalInfo } from '../../data/portfolioData';
import { Mail, Copy, Check, Send, Sparkles, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Simulate friendly successful submission
    setFormStatus({
      submitted: true,
      message: `Thanks ${formData.name}! Your message has been noted. You can also reach me directly at ${personalInfo.email}.`,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionHeader
          eyebrow="04 // Get In Touch"
          title="Let's build something great together."
          subtitle="Whether you have an internship or junior developer role, an open-source idea, or just want to chat about tech—my inbox is open."
        />

        <div className="contact-grid">
          {/* Left Column: Direct Links & Info */}
          <div className="contact-info-panel">
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-badge">
                  <span className="contact-pulse" />
                  <span>Always Open to Opportunities</span>
                </div>
                <h3 className="contact-card-title">Direct Channels</h3>
                <p className="contact-card-desc">
                  Feel free to send a message or copy my email address. I usually respond within 24–48 hours.
                </p>
              </div>

              {/* Email Card with Copy button */}
              <div className="contact-channel-item">
                <div className="channel-icon-wrap">
                  <Mail size={18} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">EMAIL ADDRESS</span>
                  <a href={`mailto:${personalInfo.email}`} className="channel-value">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  type="button"
                  className="channel-action-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copied ? <Check size={16} className="copied-check" /> : <Copy size={16} />}
                </button>
              </div>

              {/* GitHub Card */}
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel-item contact-channel-item--link"
              >
                <div className="channel-icon-wrap">
                  <GithubIcon size={18} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">GITHUB PROFILE</span>
                  <span className="channel-value">github.com/nikolopikolo</span>
                </div>
                <div className="channel-action-btn">
                  <ArrowUpRight size={16} />
                </div>
              </a>

              {/* Status Note */}
              <div className="contact-status-note">
                <Sparkles size={16} className="status-note-icon" />
                <p>
                  <strong>Current Status:</strong> {personalInfo.status}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="contact-form-panel">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3 className="form-title">Send a Quick Message</h3>
              <p className="form-subtitle">Fill in the fields below and say hello!</p>

              {formStatus.submitted && (
                <div className="form-success-alert">
                  <Check size={18} className="success-icon" />
                  <span>{formStatus.message}</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="e.g. Alex Smith"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="e.g. alex@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Hi! I came across your portfolio and wanted to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input form-textarea"
                />
              </div>

              <Button
                type="submit"
                variant="primary"
                size="md"
                icon={Send}
                iconPosition="right"
                className="form-submit-btn"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
