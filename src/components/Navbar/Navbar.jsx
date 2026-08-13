import React, { useState, useEffect } from 'react';
import { Menu, X, Send } from 'lucide-react';
import { ThemeToggle } from '../UI/ThemeToggle';
import './Navbar.css';

export const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Left balance spacer */}
        <div className="nav-spacer-left" />

        {/* Desktop Navigation Links (Dead Center) */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="nav-item">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {isActive && <span className="active-dot" />}
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right CTA Actions */}
        <div className="nav-actions">
          {/* Light / Dark Mode Toggle */}
          <ThemeToggle />

          <button
            onClick={() => handleNavClick('contact')}
            className="btn btn-primary btn-sm nav-cta-btn"
          >
            <span>Let's Talk</span>
            <Send size={14} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-toggle-btn"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-content">
          <div className="mobile-theme-row">
            <span className="mobile-theme-label">Theme Mode</span>
            <ThemeToggle showLabel={true} />
          </div>

          <ul className="mobile-nav-list">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <li key={link.id} className="mobile-nav-item">
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    <span>{link.label}</span>
                    {isActive && <span className="mobile-active-tag">Active</span>}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="mobile-drawer-actions">
            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-primary btn-sm w-full"
            >
              <Send size={16} /> Let's Talk / Contact Me
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
