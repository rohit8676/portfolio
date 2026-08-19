import React, { useState } from 'react';
import { SKILLS_DATA } from '../../data/portfolioData';
import { TechLogo } from './TechLogos';
import './Skills.css';

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { categories, grouped } = SKILLS_DATA;

  // Flatten all skills
  const allSkills = Object.values(grouped).flatMap((group) => group.skills);

  // Filter skills based on selected category
  const displayedSkills =
    selectedCategory === 'all'
      ? allSkills
      : grouped[selectedCategory]?.skills || [];

  // Helper to get count per category
  const getCategoryCount = (catId) => {
    if (catId === 'all') return allSkills.length;
    return grouped[catId]?.skills.length || 0;
  };

  // Split all skills for mobile dual-row slow marquee
  const midIndex = Math.ceil(allSkills.length / 2);
  const row1Skills = allSkills.slice(0, midIndex);
  const row2Skills = allSkills.slice(midIndex);

  // Duplicate arrays for seamless infinite looping
  const marqueeRow1 = [...row1Skills, ...row1Skills, ...row1Skills];
  const marqueeRow2 = [...row2Skills, ...row2Skills, ...row2Skills];

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
            A comprehensive, modern technology stack spanning frontend development, backend engineering, relational databases, mobile app development, and industry-standard developer tooling.
          </p>
        </div>

        {/* Category Filters (Desktop only) */}
        <div className="skills-filter-wrap">
          <div className="skills-tabs" role="tablist" aria-label="Technology categories">
            {categories.map((cat) => {
              const count = getCategoryCount(cat.id);
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`skill-tab-btn ${isActive ? 'active' : ''}`}
                  role="tab"
                  aria-selected={isActive}
                >
                  <span className="tab-label">{cat.name}</span>
                  <span className="tab-count-pill">{count}</span>
                  {isActive && <span className="tab-indicator" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop Minimalist Grid */}
        <div className="skills-minimal-grid">
          {displayedSkills.map((skill) => (
            <div
              key={skill.id || skill.name}
              className="skill-icon-card glass-card"
              style={{
                '--brand-color': skill.brandColor || 'var(--accent-primary)',
                '--brand-glow': `${skill.brandColor}25` || 'rgba(99, 102, 241, 0.2)'
              }}
            >
              {/* Ambient Brand Aura on Hover */}
              <div className="skill-card-glow" />

              {/* Rounded Real Brand Logo Holder */}
              <div className="skill-rounded-icon" title={skill.name}>
                {skill.iconUrl ? (
                  <img
                    src={skill.iconUrl}
                    alt={`${skill.name} logo`}
                    className="tech-logo-img"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                ) : (
                  <TechLogo
                    iconKey={skill.iconKey || skill.name}
                    size={44}
                    className="tech-logo-svg"
                  />
                )}
              </div>

              {/* Technology Name */}
              <span className="skill-item-name">{skill.name}</span>
            </div>
          ))}
        </div>

        {/* Mobile View: Continuous Infinite Right-to-Left Slider */}
        <div className="skills-mobile-marquee-wrap">
          {/* Row 1: Frontend & Backend */}
          <div className="skills-marquee-row">
            <div className="skills-marquee-track skills-marquee-track-1">
              {marqueeRow1.map((skill, idx) => (
                <div
                  key={`m1-${skill.id || skill.name}-${idx}`}
                  className="skill-marquee-card glass-card"
                  style={{
                    '--brand-color': skill.brandColor || 'var(--accent-primary)',
                    '--brand-glow': `${skill.brandColor}25` || 'rgba(99, 102, 241, 0.2)'
                  }}
                >
                  <div className="skill-rounded-icon" title={skill.name}>
                    <img
                      src={skill.iconUrl}
                      alt={`${skill.name} logo`}
                      className="tech-logo-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="skill-item-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Database & Tools */}
          <div className="skills-marquee-row">
            <div className="skills-marquee-track skills-marquee-track-2">
              {marqueeRow2.map((skill, idx) => (
                <div
                  key={`m2-${skill.id || skill.name}-${idx}`}
                  className="skill-marquee-card glass-card"
                  style={{
                    '--brand-color': skill.brandColor || 'var(--accent-primary)',
                    '--brand-glow': `${skill.brandColor}25` || 'rgba(99, 102, 241, 0.2)'
                  }}
                >
                  <div className="skill-rounded-icon" title={skill.name}>
                    <img
                      src={skill.iconUrl}
                      alt={`${skill.name} logo`}
                      className="tech-logo-img"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <span className="skill-item-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


