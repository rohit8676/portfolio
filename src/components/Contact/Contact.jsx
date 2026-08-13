import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, MessageSquare, AlertCircle, CheckCircle2, User, HelpCircle } from 'lucide-react';
import { useToast } from '../UI/Toast';
import confetti from 'canvas-confetti';
import './Contact.css';

export const Contact = () => {
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Job Opportunity / Role Discussion',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    addToast(`Copied ${field} to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name.';
    } else if (formData.name.trim().length < 2) {
      errs.name = 'Name must be at least 2 characters.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please enter a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }

    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      addToast('Please correct the errors in the form.', 'error');
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable form submission / API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      addToast('Thank you! Your message has been recorded.', 'success');

      // Trigger celebratory confetti
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.8 }
        });
      } catch (err) {
        // silent fallback
      }

      setFormData({
        name: '',
        email: '',
        subject: 'Job Opportunity / Role Discussion',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="section-wrapper contact-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <span className="dot" />
            <span>Get In Touch</span>
          </div>
          <h2 className="section-title">Let's Build Something Great Together.</h2>
          <p className="section-description">
            Have a project, idea, or opportunity in mind? Feel free to get in touch. I am always open to discussing new software development challenges and roles.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          {/* Left Column: Direct Contact Info & Quick Reach */}
          <div className="contact-info-col">
            <div className="contact-card glass-card">
              <h3 className="contact-card-title">Direct Contact Information</h3>
              <p className="contact-card-subtitle">
                Feel free to email, call, or drop a note anytime. You will get a prompt response.
              </p>

              <div className="contact-methods">
                {/* Email Item */}
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <Mail size={20} className="text-cyan" />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Email Address</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="method-value">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'Email')}
                    className="copy-btn"
                    title="Copy Email"
                    aria-label="Copy Email"
                  >
                    {copiedField === 'Email' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <Phone size={20} className="text-cyan" />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Phone & WhatsApp</span>
                    <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="method-value">
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'Phone')}
                    className="copy-btn"
                    title="Copy Phone"
                    aria-label="Copy Phone"
                  >
                    {copiedField === 'Phone' ? <Check size={16} className="text-emerald" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="contact-method-item">
                  <div className="method-icon-box">
                    <MapPin size={20} className="text-cyan" />
                  </div>
                  <div className="method-details">
                    <span className="method-label">Primary Location</span>
                    <span className="method-value-static">{PERSONAL_INFO.location}</span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="contact-availability-box">
                <span className="availability-dot" />
                <div className="availability-text">
                  <strong>Open for Opportunities</strong>
                  <span>Software Developer • Full-Stack • Backend</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="contact-form-col">
            <div className="contact-form-card glass-card">
              <h3 className="form-title">Send a Message</h3>
              <p className="form-subtitle">Fill out the details below to initiate a conversation.</p>

              {submittedSuccess && (
                <div className="form-success-banner">
                  <CheckCircle2 size={20} className="text-emerald" />
                  <div>
                    <strong>Message Sent Successfully!</strong>
                    <p>Thank you for reaching out. I look forward to connecting with you soon.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form" noValidate>
                {/* Name Field */}
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="req-star">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Alex Smith"
                    className={`form-input ${errors.name ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                {/* Email Field */}
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address <span className="req-star">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. alex@company.com"
                    className={`form-input ${errors.email ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                {/* Subject Selection */}
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject / Topic
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                    disabled={isSubmitting}
                  >
                    <option value="Job Opportunity / Role Discussion">Job Opportunity / Role Discussion</option>
                    <option value="Software Development Project">Software Development Project</option>
                    <option value="Full-Stack / Backend Engineering">Full-Stack / Backend Engineering</option>
                    <option value="General Technical Inquiry">General Technical Inquiry</option>
                  </select>
                </div>

                {/* Message Field */}
                <div className="form-group">
                  <div className="label-count-row">
                    <label htmlFor="message" className="form-label">
                      Message <span className="req-star">*</span>
                    </label>
                    <span className="char-count">{formData.message.length} chars</span>
                  </div>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project, role, or ideas..."
                    className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                    disabled={isSubmitting}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn btn-primary btn-lg submit-btn"
                >
                  {isSubmitting ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
