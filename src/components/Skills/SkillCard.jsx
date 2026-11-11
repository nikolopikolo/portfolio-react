import React from 'react';
import {
  Code,
  FileCode,
  Layout,
  Palette,
  Cpu,
  Terminal,
  Smartphone,
  Watch,
  GitBranch,
  Laptop,
  Zap,
  CheckCircle,
} from 'lucide-react';
import { GithubIcon } from '../common/Icons';
import './SkillCard.css';

const skillIcons = {
  Code,
  FileCode,
  Layout,
  Palette,
  Cpu,
  Terminal,
  Smartphone,
  Watch,
  GitBranch,
  Github: GithubIcon,
  Laptop,
  Zap,
};

const SkillCard = ({ name, level, icon, highlight }) => {
  const IconComponent = skillIcons[icon] || Code;

  return (
    <div className="skill-card">
      <div className="skill-card-top">
        <div className="skill-icon-wrapper">
          <IconComponent size={20} className="skill-icon" />
        </div>
        <span className="skill-level-badge">{level}</span>
      </div>

      <div className="skill-card-body">
        <h3 className="skill-name">{name}</h3>
        {highlight && (
          <p className="skill-highlight">
            <span className="skill-highlight-dot" />
            {highlight}
          </p>
        )}
      </div>
    </div>
  );
};

export default SkillCard;
