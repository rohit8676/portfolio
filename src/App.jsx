import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/UI/ThemeContext';
import { ToastProvider } from './components/UI/Toast';
import { ResumeModal } from './components/UI/ResumeModal';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import { Education } from './components/Education/Education';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sec) => observer.observe(sec));

    return () => {
      sections.forEach((sec) => observer.unobserve(sec));
    };
  }, []);

  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="app-container">
          {/* Ambient Top & Bottom Gradients */}
          <div className="ambient-glow-top" aria-hidden="true" />
          <div className="ambient-glow-bottom" aria-hidden="true" />

          {/* Global Navigation Header */}
          <Navbar
            activeSection={activeSection}
            onOpenResume={() => setIsResumeOpen(true)}
          />

          {/* Main Content Sections */}
          <main>
            <Hero onOpenResume={() => setIsResumeOpen(true)} />
            <About onOpenResume={() => setIsResumeOpen(true)} />
            <Skills />
            <Projects />
            <Education />
            <Contact />
          </main>

          {/* Global Footer */}
          <Footer />

          {/* Professional Resume Modal */}
          <ResumeModal
            isOpen={isResumeOpen}
            onClose={() => setIsResumeOpen(false)}
          />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;
