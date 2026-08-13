import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/portfolioData';
import { ExternalLink, Layers, CheckCircle2, ArrowUpRight, Sparkles, Eye, Code } from 'lucide-react';
import { GithubIcon } from '../UI/Icons';
import './Projects.css';

export const Projects = () => {
  const [filter, setFilter] = useState('all');

  const filteredProjects =
    filter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category.toLowerCase().includes(filter));

  return (
    <section id="projects" className="section-wrapper projects-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Featured Work</span>
          </div>
          <h2 className="section-title">Real-World Projects & Applications</h2>
          <p className="section-description">
            Showcasing production-ready digital solutions engineered with clean component architectures, responsive user interfaces, and dependable software standards.
          </p>
        </div>

        {/* Project Showcase List */}
        <div className="projects-showcase">
          {filteredProjects.map((project) => (
            <div key={project.id} className="featured-project-card glass-card">
              {/* Media Preview Column */}
              <div className="project-media-col">
                <div className="project-image-wrapper">
                  <img
                    src="/raushani-preview.png"
                    alt={project.title}
                    className="project-image"
                    loading="lazy"
                    onError={(e) => {
                      // Graceful fallback if image path needs fallback
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800&auto=format&fit=crop';
                    }}
                  />
                  <div className="project-overlay">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-sm overlay-btn"
                    >
                      <span>Visit Live Demo</span>
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>

                <div className="project-badge-bar">
                  <span className="badge badge-accent">Featured Project</span>
                  <span className="badge">{project.category}</span>
                </div>
              </div>

              {/* Information Column */}
              <div className="project-info-col">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-tagline">{project.tagline}</p>
                </div>

                <p className="project-desc">{project.description}</p>

                {/* Key Project Highlights */}
                <div className="project-highlights-list">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="project-highlight-item">
                      <CheckCircle2 size={16} className="highlight-icon" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies used */}
                <div className="project-tech-stack">
                  <span className="tech-stack-title">Tech Stack:</span>
                  <div className="tech-stack-chips">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="project-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-btn"
                  >
                    <span>Explore Live Website</span>
                    <ExternalLink size={16} />
                  </a>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary project-btn"
                    >
                      <GithubIcon size={16} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Expandability Placeholder Note */}
        <div className="future-projects-banner glass-card">
          <div className="future-banner-content">
            <div className="future-icon-wrap">
              <Sparkles size={20} className="text-cyan" />
            </div>
            <div>
              <h4 className="future-banner-title">More Solutions in Active Development</h4>
              <p className="future-banner-desc">
                Currently architecting additional full-stack web applications and backend microservices using Spring Boot, React, and MySQL. Stay tuned for upcoming updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
