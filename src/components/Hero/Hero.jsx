import React, { useState, useEffect } from 'react';
import {
  ArrowRight,
  Send,
  Download,
  Copy,
  Check,
  Play,
  Terminal,
  MapPin,
  GraduationCap,
  Layers,
  ChevronRight,
  GitBranch,
  Sparkles,
  RefreshCw,
  Eye,
  EyeOff
} from 'lucide-react';
import { PERSONAL_INFO, CODE_SNIPPETS } from '../../data/portfolioData';
import { useToast } from '../UI/Toast';
import './Hero.css';

const ROLES = [
  'Software Developer',
  'Full-Stack Web Engineer',
  'Java & Spring Boot Specialist',
  'React & Next.js Builder',
  'Database & REST API Architect'
];

const EXECUTION_OUTPUTS = {
  java: [
    { type: 'info', text: '  .   ____          _            __ _ _' },
    { type: 'info', text: ' /\\\\ / ___ \'_ __ _ _(_)_ __  __ _ \\ \\ \\ \\' },
    { type: 'info', text: ' [Spring] :: Spring Boot :: (v3.2.0)' },
    { type: 'log', text: '[INFO] REST controller initialized on port 8080' },
    { type: 'success', text: '[HTTP GET] /api/v1/developer/profile -> 200 OK (11ms)' },
    {
      type: 'json',
      text: JSON.stringify(
        {
          developer: "Rohit Kumar",
          role: "Software Developer",
          location: "Delhi, India",
          stack: ["React", "Next.js", "Java", "Spring Boot", "MySQL", "C#"],
          status: "Ready to Build & Scale"
        },
        null,
        2
      )
    }
  ],
  react: [
    { type: 'info', text: '[VITE v5.4.2] ready in 142 ms' },
    { type: 'log', text: '➜ Local: http://localhost:3000/' },
    { type: 'success', text: '✓ <DeveloperDashboard engineer="Rohit Kumar" /> mounted' },
    { type: 'log', text: '✓ Dynamic stack synchronized: React, Next.js, Spring Boot, MySQL' },
    { type: 'success', text: '✓ Zero layout shifts • 60 FPS interactive rendering' }
  ],
  sql: [
    { type: 'log', text: 'mysql> EXPLAIN ANALYZE SELECT * FROM developers WHERE name = "Rohit Kumar";' },
    { type: 'info', text: '-> Index lookup on developers using idx_developer_name (cost=0.25 rows=1)' },
    { type: 'success', text: '1 row returned in 0.003 sec [Engine: InnoDB | Connection: 8.0.35]' },
    {
      type: 'table',
      text: `+---------------+-----------------------------+------------------------------------+
| name          | specialization              | core_technologies                  |
+---------------+-----------------------------+------------------------------------+
| Rohit Kumar   | Full-Stack & Backend System | React, Java, Spring Boot, MySQL, C#|
+---------------+-----------------------------+------------------------------------+`
    }
  ]
};

export const Hero = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState('java');
  const [copied, setCopied] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showConsole, setShowConsole] = useState(true);
  const [hasExecuted, setHasExecuted] = useState(true);

  const { addToast } = useToast();

  // Typing effect for rotating titles
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleCopyCode = () => {
    const snippet = CODE_SNIPPETS[activeTab];
    if (snippet) {
      navigator.clipboard.writeText(snippet.code);
      setCopied(true);
      addToast(`Copied ${snippet.language} code to clipboard!`);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleRunCode = () => {
    setIsRunning(true);
    setShowConsole(true);
    setTimeout(() => {
      setIsRunning(false);
      setHasExecuted(true);
      addToast(`Executed ${CODE_SNIPPETS[activeTab].language} successfully!`, 'success');
    }, 450);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const currentSnippet = CODE_SNIPPETS[activeTab];
  const currentOutput = EXECUTION_OUTPUTS[activeTab] || [];

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        {/* Left Column: Circular Photo Frame + Intro + Actions */}
        <div className="hero-content">
          {/* Header Profile Row */}
          <div className="hero-profile-row animate-fade-in">
            <div className="hero-circular-avatar-frame">
              <div className="avatar-ambient-aura" />
              <div className="avatar-inner-ring">
                <img
                  src="/rohit-profile.jpg"
                  alt="Rohit Kumar"
                  className="hero-circular-avatar-img"
                />
              </div>
            </div>

            <div className="hero-profile-meta">
              <h2 className="hero-greeting">
                {PERSONAL_INFO.greeting}
              </h2>
              <span className="hero-location-text">
                Software Developer • Delhi, India
              </span>
            </div>
          </div>

          <h1 className="hero-heading animate-fade-in">
            Building Modern <span className="text-highlight">Digital Solutions</span> & High-Performance Systems.
          </h1>

          <div className="hero-typing-wrap animate-fade-in">
            <span className="typing-prefix">Specializing in:</span>
            <span className="typing-text">{displayText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-subtext animate-fade-in">
            {PERSONAL_INFO.heroSubheading}
          </p>

          {/* Action Buttons */}
          <div className="hero-cta-group animate-fade-in">
            <button
              onClick={() => scrollToSection('projects')}
              className="btn btn-primary btn-lg hero-btn"
            >
              <span>View My Work</span>
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="btn btn-secondary btn-lg hero-btn"
            >
              <span>Let's Connect</span>
              <Send size={16} />
            </button>

            <button
              onClick={onOpenResume}
              className="btn btn-outline btn-lg hero-btn resume-cta"
              title="View or Print Resume"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>
        </div>

        {/* Right Column: Ultra-Modern Interactive Developer IDE */}
        <div className="hero-visual">
          <div className="enhanced-ide-window glass-card animate-float">
            {/* Window Top Navigation / Tabs Bar */}
            <div className="ide-header-bar">
              <div className="ide-window-controls">
                <span className="mac-dot dot-red" />
                <span className="mac-dot dot-yellow" />
                <span className="mac-dot dot-green" />
              </div>

              {/* Language Switcher Tabs */}
              <div className="ide-file-tabs">
                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('java');
                  }}
                  className={`ide-tab ${activeTab === 'java' ? 'active' : ''}`}
                >
                  <span className="tab-tech-icon">☕</span>
                  <span className="tab-file-title">Controller.java</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('react');
                  }}
                  className={`ide-tab ${activeTab === 'react' ? 'active' : ''}`}
                >
                  <span className="tab-tech-icon">⚛️</span>
                  <span className="tab-file-title">Architect.jsx</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setActiveTab('sql');
                  }}
                  className={`ide-tab ${activeTab === 'sql' ? 'active' : ''}`}
                >
                  <span className="tab-tech-icon">🗄️</span>
                  <span className="tab-file-title">Queries.sql</span>
                </button>
              </div>

              {/* Window Header Action Icons */}
              <div className="ide-header-actions">
                <button
                  type="button"
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="ide-action-btn ide-run-btn"
                  title="Run / Execute Code"
                >
                  <Play size={13} className={isRunning ? 'animate-spin' : ''} />
                  <span>Run</span>
                </button>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="ide-action-btn"
                  title="Copy Code Snippet"
                >
                  {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Breadcrumb Path & Git Status */}
            <div className="ide-sub-toolbar">
              <div className="ide-path-wrap">
                <span className="path-segment">src</span>
                <ChevronRight size={12} className="path-arrow" />
                <span className="path-segment">main</span>
                <ChevronRight size={12} className="path-arrow" />
                <span className="path-filename">{currentSnippet.filename}</span>
              </div>

              <div className="ide-git-tag">
                <GitBranch size={12} />
                <span>main</span>
                <span className="ide-lang-pill">{currentSnippet.language}</span>
              </div>
            </div>

            {/* Code Body Area */}
            <div className="ide-code-container">
              <pre className="ide-code-block">
                <code>
                  {currentSnippet.code.split('\n').map((line, index) => (
                    <div key={index} className="ide-code-row">
                      <span className="ide-line-index">{index + 1}</span>
                      <span className="ide-line-content">{renderSyntaxTokens(line)}</span>
                    </div>
                  ))}
                </code>
              </pre>
            </div>

            {/* Interactive Output Console / Terminal Drawer */}
            {showConsole && (
              <div className="ide-output-drawer">
                <div className="ide-drawer-header">
                  <div className="drawer-title-wrap">
                    <Terminal size={13} className="text-cyan" />
                    <span className="drawer-title">Debug Console Output</span>
                    <span className="console-status-badge">● Active</span>
                  </div>

                  <div className="drawer-actions">
                    <button
                      type="button"
                      onClick={handleRunCode}
                      className="console-rerun-btn"
                      title="Re-run simulation"
                    >
                      <RefreshCw size={12} className={isRunning ? 'animate-spin' : ''} />
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowConsole(false)}
                      className="console-toggle-btn"
                      title="Hide console"
                    >
                      <EyeOff size={13} />
                    </button>
                  </div>
                </div>

                <div className="ide-console-body">
                  {currentOutput.map((item, idx) => (
                    <div key={idx} className={`console-line line-${item.type}`}>
                      {item.type === 'json' || item.type === 'table' ? (
                        <pre className="output-raw">{item.text}</pre>
                      ) : (
                        <span>{item.text}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Window Status Footer */}
            <div className="ide-status-footer">
              <div className="ide-footer-left">
                {!showConsole && (
                  <button
                    type="button"
                    onClick={() => setShowConsole(true)}
                    className="open-console-link"
                  >
                    <Terminal size={12} />
                    <span>Show Terminal</span>
                  </button>
                )}
                <span className="ide-live-indicator" />
                <span>JDK 17 • React 18 • MySQL 8.0</span>
              </div>

              <div className="ide-footer-right">
                <span className="ide-tag">UTF-8</span>
                <span className="ide-tag">LF</span>
                <span className="ide-tag-accent">0 Errors</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Rich syntax highlighter token parser
function renderSyntaxTokens(line) {
  if (!line.trim()) return <span>&nbsp;</span>;

  const tokens = line.split(
    /(\b(?:public|class|private|final|return|import|from|const|let|var|function|SELECT|FROM|JOIN|WHERE|GROUP BY|ORDER BY|new|package|interface|extends|implements|export|default|null|true|false)\b|@[A-Za-z0-9_]+|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\/\/.+|--.+|[{}()[\];.,=><+\-*\/!])/g
  );

  return tokens.map((token, i) => {
    if (!token) return null;
    if (/^(\/\/|--)/.test(token)) {
      return (
        <span key={i} className="tok-comment">
          {token}
        </span>
      );
    }
    if (/^@/.test(token)) {
      return (
        <span key={i} className="tok-annotation">
          {token}
        </span>
      );
    }
    if (/^["']/.test(token)) {
      return (
        <span key={i} className="tok-string">
          {token}
        </span>
      );
    }
    if (
      /^(public|class|private|final|return|import|from|const|let|var|function|SELECT|FROM|JOIN|WHERE|GROUP BY|ORDER BY|new|package|interface|extends|implements|export|default)$/.test(
        token
      )
    ) {
      return (
        <span key={i} className="tok-keyword">
          {token}
        </span>
      );
    }
    if (/^[{}()[\];.,=><+\-*\/!]$/.test(token)) {
      return (
        <span key={i} className="tok-punct">
          {token}
        </span>
      );
    }
    return (
      <span key={i} className="tok-identifier">
        {token}
      </span>
    );
  });
}
