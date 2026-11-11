import React from 'react';
import { GraduationCap, Code2, Layers, Sparkles } from 'lucide-react';
import './InfoCard.css';

const iconMap = {
  GraduationCap,
  Code2,
  Layers,
  Sparkles,
};

const InfoCard = ({ title, description, icon, tag }) => {
  const IconComponent = iconMap[icon] || Sparkles;

  return (
    <div className="info-card">
      <div className="info-card-top">
        <div className="info-card-icon-wrap">
          <IconComponent size={20} className="info-card-icon" />
        </div>
        {tag && <span className="info-card-tag">{tag}</span>}
      </div>

      <h3 className="info-card-title">{title}</h3>
      <p className="info-card-desc">{description}</p>
    </div>
  );
};

export default InfoCard;

