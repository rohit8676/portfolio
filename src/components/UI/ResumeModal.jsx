import React from 'react';
import { X, Download, Mail, Phone, MapPin, GraduationCap, Code2, Check, ExternalLink, Printer } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA } from '../../data/portfolioData';
import { useToast } from './Toast';
import './ResumeModal.css';

export const ResumeModal = ({ isOpen, onClose }) => {
  const { addToast } = useToast();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
    addToast('Opening print/PDF dialogue...', 'info');
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    addToast('Email copied to clipboard!');
  };

  return (
    <div className="resume-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="resume-modal-content glass-card" onClick={(e) => e.stopPropagation()}>
        <div className="resume-modal-header">
          <div>
            <span className="badge badge-tech">Professional Resume</span>
            <h2 className="resume-modal-title">{PERSONAL_INFO.name}</h2>
            <p className="resume-modal-subtitle">{PERSONAL_INFO.title} • {PERSONAL_INFO.location}</p>
          </div>
          <div className="resume-header-actions">
            <button className="btn btn-secondary btn-sm" onClick={handlePrint} title="Print or Save as PDF">
              <Printer size={16} /> Print / Save PDF
            </button>
            <button className="resume-close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        <div className="resume-modal-body print-area">
          {/* Header Info */}
          <div className="resume-section">
            <div className="resume-contact-row">
              <span className="resume-contact-item">
                <Mail size={14} /> {PERSONAL_INFO.email}
              </span>
              <span className="resume-contact-item">
                <Phone size={14} /> {PERSONAL_INFO.phone}
              </span>
              <span className="resume-contact-item">
                <MapPin size={14} /> {PERSONAL_INFO.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="resume-section">
            <h3 className="resume-section-title">Professional Summary</h3>
            <p className="resume-text">{PERSONAL_INFO.about.lead}</p>
            <p className="resume-text">{PERSONAL_INFO.about.paragraphs[0]}</p>
          </div>

          {/* Core Technical Stack */}
          <div className="resume-section">
            <h3 className="resume-section-title">Technical Expertise</h3>
            <div className="resume-skills-grid">
              <div className="resume-skill-col">
                <span className="resume-skill-label">Frontend:</span>
                <span className="resume-skill-val">React, Next.js, JavaScript, HTML5/CSS3</span>
              </div>
              <div className="resume-skill-col">
                <span className="resume-skill-label">Backend:</span>
                <span className="resume-skill-val">Java, Spring Boot, .NET, Node.js, C#, REST APIs</span>
              </div>
              <div className="resume-skill-col">
                <span className="resume-skill-label">Databases:</span>
                <span className="resume-skill-val">SQL, MySQL</span>
              </div>
              <div className="resume-skill-col">
                <span className="resume-skill-label">Tools & VCS:</span>
                <span className="resume-skill-val">Android Studio, Git, GitHub, VS Code</span>
              </div>
            </div>
          </div>

          {/* Academic Qualification */}
          <div className="resume-section">
            <h3 className="resume-section-title">Education</h3>
            <div className="resume-edu-card">
              <div className="resume-edu-header">
                <div>
                  <h4 className="resume-degree">{EDUCATION_DATA.degree}</h4>
                  <span className="resume-degree-sub">Bachelor Degree in Computer Applications</span>
                </div>
                <span className="badge badge-accent">Delhi, India</span>
              </div>
              <p className="resume-edu-desc">{EDUCATION_DATA.summary}</p>
              <div className="resume-coursework">
                {EDUCATION_DATA.keyAreas.map((area, i) => (
                  <span key={i} className="course-tag">• {area}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Project */}
          <div className="resume-section">
            <h3 className="resume-section-title">Featured Project</h3>
            <div className="resume-project-card">
              <div className="resume-project-header">
                <strong>Raushani Sudha & Bakery</strong>
                <a href="https://raushani-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="resume-live-link">
                  raushani-six.vercel.app <ExternalLink size={12} />
                </a>
              </div>
              <p className="resume-text">
                Modern bakery web application featuring dynamic product catalog browsing, responsive mobile ordering interface, and clean UX.
              </p>
              <div className="resume-project-tags">
                <span>React</span>
                <span>JavaScript</span>
                <span>Responsive CSS</span>
                <span>Vercel</span>
              </div>
            </div>
          </div>
        </div>

        <div className="resume-modal-footer">
          <button className="btn btn-outline btn-sm" onClick={handleCopyEmail}>
            <Mail size={16} /> Copy Email
          </button>
          <a href={`mailto:${PERSONAL_INFO.email}?subject=Opportunity%20Discussion`} className="btn btn-primary btn-sm">
            Contact Directly
          </a>
        </div>
      </div>
    </div>
  );
};
