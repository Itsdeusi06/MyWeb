import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../styles/projects.css';
import projects from '../data/projects.js';

const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">{t('projects.title')}</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image} alt={t(`projects.${project.key}.title`)} className="project-image" />
              <div className="project-content">
                <h3 className="project-title">{t(`projects.${project.key}.title`)}</h3>
                <p className="project-description">{t(`projects.${project.key}.description`)}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub /> {t('projects.code')}
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt /> {t('projects.demo')}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
