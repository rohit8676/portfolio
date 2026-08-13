import React, { useState } from 'react';
import { SKILLS_DATA } from '../../data/portfolioData';
import {
  Code2,
  Globe,
  FileCode,
  Cpu,
  Server,
  Terminal,
  Database,
  Layers,
  GitBranch,
  GitPullRequest,
  Laptop,
  CheckCircle,
  Sparkles
} from 'lucide-react';
import './Skills.css';

// Icon resolver helper
const iconMap = {
  Code2: <Code2 size={24} />,
  Globe: <Globe size={24} />,
  FileCode: <FileCode size={24} />,
  Cpu: <Cpu size={24} />,
  Server: <Server size={24} />,
  Terminal: <Terminal size={24} />,
  Database: <Database size={24} />,
  Layers: <Layers size={24} />,
  GitBranch: <GitBranch size={24} />,
  GitPullRequest: <GitPullRequest size={24} />,
  Laptop: <Laptop size={24} />
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { categories, grouped } = SKILLS_DATA;

  // Flatten or filter skills based on category selection
  const allSkills = Object.values(grouped).flatMap((group) => group.skills);

  const displayedSkills =
    selectedCategory === 'all'
      ? allSkills
      : grouped[selectedCategory]?.skills || [];

  return (
    <section id="skills" className="section-wrapper skills-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="section-title">Core Technologies & Tools</h2>
          <p className="section-description">
            A comprehensive, modern technology stack spanning frontend development, backend engineering, relational databases, and industry-standard developer tooling.
          </p>
        </div>

        {/* Category Filters */}
        <div className="skills-filter-wrap">
          <div className="skills-tabs" role="tablist" aria-label="Technology categories">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`skill-tab-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                role="tab"
                aria-selected={selectedCategory === cat.id}
              >
                <span>{cat.name}</span>
                {selectedCategory === cat.id && <span className="tab-indicator" />}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="skills-grid">
          {displayedSkills.map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="skill-card glass-card">
              <div className="skill-card-top">
                <div className="skill-icon-wrap">
                  {iconMap[skill.iconName] || <Code2 size={24} />}
                </div>
                <span className="badge badge-tech">{skill.badge}</span>
              </div>

              <div className="skill-card-body">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-highlight">{skill.highlight}</p>
              </div>

              <div className="skill-card-footer">
                <span className="skill-category-tag">
                  <span className="cat-dot" />
                  {skill.category.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Structured Category Breakdown Cards */}
        <div className="category-overview-grid">
          {Object.entries(grouped).map(([key, group]) => (
            <div key={key} className="category-card glass-card">
              <div className="cat-card-header">
                <div className="cat-bullet" />
                <h4 className="cat-group-title">{group.title}</h4>
              </div>
              <p className="cat-group-desc">{group.description}</p>
              <div className="cat-chips">
                {group.skills.map((s) => (
                  <span key={s.name} className="cat-tech-chip">
                    {s.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
