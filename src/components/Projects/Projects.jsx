import React from 'react';
import SectionHeader from '../common/SectionHeader';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/portfolioData';
import { FolderGit2 } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionHeader
          eyebrow="03 // Featured Projects"
          title="Practical apps & experimental builds."
          subtitle="A showcase of native Android applications, interactive systems, and game prototypes I'm actively developing."
        />

        <div className="projects-grid">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

