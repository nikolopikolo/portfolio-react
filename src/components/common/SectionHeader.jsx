import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ eyebrow, title, subtitle, centered = false }) => {
  return (
    <div className={`section-header ${centered ? 'section-header--centered' : ''}`}>
      {eyebrow && (
        <div className="section-eyebrow">
          <span className="section-eyebrow-dot"></span>
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;

