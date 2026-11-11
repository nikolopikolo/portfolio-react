import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import SkillCard from './SkillCard';
import { skillCategories } from '../../data/portfolioData';
import { Layers, ShieldCheck } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = [
    { id: 'all', label: 'All Technologies' },
    ...skillCategories.map((c) => ({ id: c.id, label: c.name })),
  ];

  const displayedCategories =
    selectedFilter === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.id === selectedFilter);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <SectionHeader
          eyebrow="02 // Skills & Technologies"
          title="Tools I use to build ideas into reality."
          subtitle="Honest overview of the languages, frameworks, and developer workflows I actively work with."
        />

        {/* Category Filters */}
        <div className="skills-filters">
          {filterOptions.map((filter) => (
            <button
              key={filter.id}
              type="button"
              className={`skills-filter-btn ${
                selectedFilter === filter.id ? 'skills-filter-btn--active' : ''
              }`}
              onClick={() => setSelectedFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Category Groups */}
        <div className="skills-categories-container">
          {displayedCategories.map((category) => (
            <div key={category.id} className="skills-category-group">
              <div className="category-header">
                <div className="category-header-title">
                  <h3 className="category-name">{category.name}</h3>
                  <p className="category-description">{category.description}</p>
                </div>
                <span className="category-count">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="skills-grid">
                {category.skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    highlight={skill.highlight}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Honest skill note banner */}
        <div className="skills-note-banner">
          <div className="skills-note-icon">
            <ShieldCheck size={18} />
          </div>
          <p className="skills-note-text">
            <strong>Honest Craftsmanship:</strong> Skill levels reflect hands-on project experience,
            documentation deep-dives, and active personal development—never exaggerated claims.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

