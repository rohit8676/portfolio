import React from 'react';
import { EDUCATION_DATA, PERSONAL_INFO } from '../../data/portfolioData';
import { GraduationCap, BookOpen, Award, CheckCircle2, MapPin, Calendar, Layers } from 'lucide-react';
import './Education.css';

export const Education = () => {
  return (
    <section id="education" className="section-wrapper education-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">Education & Academic Foundation</h2>
          <p className="section-description">
            Strong theoretical grounding in computer applications, programming paradigms, and relational database systems.
          </p>
        </div>

        {/* Education Timeline / Showcase Card */}
        <div className="education-container">
          <div className="edu-card glass-card">
            <div className="edu-card-grid">
              {/* Left Column: Icon & Primary Title */}
              <div className="edu-primary-col">
                <div className="edu-icon-badge">
                  <GraduationCap size={32} className="edu-cap-icon" />
                </div>

                <div className="edu-main-info">
                  <span className="badge badge-accent edu-badge">Academic Degree</span>
                  <h3 className="edu-degree-title">{EDUCATION_DATA.degree}</h3>
                  <p className="edu-sub">{EDUCATION_DATA.level}</p>

                  <div className="edu-meta-items">
                    <span className="edu-meta-item">
                      <MapPin size={15} />
                      <span>{PERSONAL_INFO.location}</span>
                    </span>
                    <span className="edu-meta-item">
                      <Layers size={15} />
                      <span>Computer Science & Application</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Column: Academic Focus & Curriculum Pillars */}
              <div className="edu-details-col">
                <h4 className="edu-details-heading">
                  <BookOpen size={18} className="text-cyan" />
                  <span>Core Academic Areas of Study</span>
                </h4>

                <p className="edu-summary-text">{EDUCATION_DATA.summary}</p>

                <div className="edu-areas-grid">
                  {EDUCATION_DATA.keyAreas.map((area, index) => (
                    <div key={index} className="edu-area-chip">
                      <CheckCircle2 size={16} className="text-emerald" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
