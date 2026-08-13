import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { ArrowUp, Mail, Phone, MapPin, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../UI/Icons';
import './Footer.css';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#education', label: 'Education' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="footer-top">
          {/* Brand Info */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-bracket">&lt;</span>
              <span className="logo-initials">RK</span>
              <span className="logo-bracket">/&gt;</span>
              <span className="footer-name">{PERSONAL_INFO.name}</span>
            </div>
            <p className="footer-bio">
              Software Developer based in {PERSONAL_INFO.location}. Crafting scalable web applications, backend APIs, and reliable database architectures.
            </p>
            <div className="footer-socials">
              <a
                href={PERSONAL_INFO.socialPlaceholders.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
                title="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={PERSONAL_INFO.socialPlaceholders.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={PERSONAL_INFO.socialPlaceholders.email}
                className="social-icon-btn"
                aria-label="Send Email"
                title="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href={PERSONAL_INFO.socialPlaceholders.phone}
                className="social-icon-btn"
                aria-label="Phone"
                title="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-nav-list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-nav-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core Technologies */}
          <div className="footer-tech-col">
            <h4 className="footer-col-title">Primary Stack</h4>
            <div className="footer-tech-list">
              <span className="footer-pill">React</span>
              <span className="footer-pill">Next.js</span>
              <span className="footer-pill">JavaScript</span>
              <span className="footer-pill">Java</span>
              <span className="footer-pill">Spring Boot</span>
              <span className="footer-pill">C#</span>
              <span className="footer-pill">SQL</span>
              <span className="footer-pill">MySQL</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © 2026 {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <p className="built-text">
            Built with <strong>React</strong> & <strong>Modern Web Standards</strong>
          </p>

          <button
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top of page"
            title="Scroll to Top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
