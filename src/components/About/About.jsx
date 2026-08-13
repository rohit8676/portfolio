import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { User, Code2, Server, Database, ShieldCheck, ArrowUpRight } from 'lucide-react';
import './About.css';

export const About = ({ onOpenResume }) => {
  const { about } = PERSONAL_INFO;

  const pillarIcons = [
    <Code2 size={24} className="pillar-icon" />,
    <Server size={24} className="pillar-icon" />,
    <Database size={24} className="pillar-icon" />,
    <ShieldCheck size={24} className="pillar-icon" />
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>About Me</span>
          </div>
          <h2 className="section-title">Dedicated to Building Reliable & Scalable Software</h2>
          <p className="section-description">
            A software developer with a practical mindset, turning complex business workflows into clean, maintainable, and high-performance digital products.
          </p>
        </div>

        {/* Content Layout: Left Bio Narrative + Right Capability Pillars */}
        <div className="about-grid">
          {/* Main Narrative Card */}
          <div className="about-bio-card glass-card">
            <div className="bio-header">
              <div className="bio-avatar-badge">
                <User size={22} className="text-cyan" />
              </div>
              <div>
                <h3 className="bio-title">Software Developer Profile</h3>
                <span className="bio-location">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <p className="bio-lead">{about.lead}</p>

            <div className="bio-paragraphs">
              {about.paragraphs.map((p, index) => (
                <p key={index} className="bio-text">
                  {p}
                </p>
              ))}
            </div>

            {/* Quick Factual Summary Row */}
            <div className="bio-stats-grid">
              {about.quickStats.map((item, idx) => (
                <div key={idx} className="bio-stat-box">
                  <span className="bio-stat-label">{item.label}</span>
                  <strong className="bio-stat-val">{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="bio-action-row">
              <button onClick={onOpenResume} className="btn btn-secondary btn-sm">
                <span>Review Complete Credentials</span>
                <ArrowUpRight size={15} />
              </button>
            </div>
          </div>

          {/* Core Technical Capabilities & Pillars */}
          <div className="about-pillars">
            {about.highlights.map((pillar, idx) => (
              <div key={idx} className="pillar-card glass-card">
                <div className="pillar-header">
                  <div className="pillar-icon-box">
                    {pillarIcons[idx]}
                  </div>
                  <h4 className="pillar-title">{pillar.title}</h4>
                </div>
                <p className="pillar-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
