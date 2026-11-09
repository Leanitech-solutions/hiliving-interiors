"use client";

import { useState } from "react";

export default function ConsultationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
    propertyType: "",
    propertySize: "",
    propertyStage: "",
    projectNotes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3500);
  };

  const propertyTypes = [
    {
      id: "House",
      label: "House",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5 12 3l9 7.5v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M9 21v-6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v6" />
        </svg>
      ),
    },
    {
      id: "Apartment",
      label: "Apartment",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="3" width="14" height="18" rx="2" />
          <path d="M8 6h2v2H8zM14 6h2v2h-2zM8 11h2v2H8zM14 11h2v2h-2zM8 16h2v2H8zM14 16h2v2h-2z" strokeWidth="1.2" />
        </svg>
      ),
    },
    {
      id: "Commercial",
      label: "Commercial",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
          <path d="M3 21V9a2 2 0 0 1 2-2h2v14" />
          <path d="M17 7h2a2 2 0 0 1 2 2v12" />
          <path d="M10 21v-4a2 2 0 0 1 4 0v4" />
          <line x1="10" y1="7" x2="14" y2="7" />
          <line x1="10" y1="11" x2="14" y2="11" />
        </svg>
      ),
    },
    {
      id: "Villa",
      label: "Villa",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 9.5 12 4l10 5.5H2z" />
          <line x1="3" y1="20" x2="21" y2="20" />
          <line x1="6" y1="9.5" x2="6" y2="20" />
          <line x1="10" y1="9.5" x2="10" y2="20" />
          <line x1="14" y1="9.5" x2="14" y2="20" />
          <line x1="18" y1="9.5" x2="18" y2="20" />
        </svg>
      ),
    },
  ];

  const propertyStages = [
    {
      id: "New Home",
      label: "New Home",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 10.5 12 3l9 7.5v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M12 16.5c-1.8-1.4-3.2-2.6-3.2-3.8 0-1 .8-1.7 1.8-1.7.7 0 1.1.4 1.4.8.3-.4.7-.8 1.4-.8 1 0 1.8.7 1.8 1.7 0 1.2-1.4 2.4-3.2 3.8z" />
        </svg>
      ),
    },
    {
      id: "Renovation",
      label: "Renovation",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9" />
          <path d="m18 15 4-4" />
          <path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5" />
        </svg>
      ),
    },
    {
      id: "Ready to Move",
      label: "Ready to Move",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
        </svg>
      ),
    },
    {
      id: "Under Construction",
      label: "Under Construction",
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="6" width="20" height="8" rx="1" />
          <path d="M17 14v7" />
          <path d="M7 14v7" />
          <path d="M17 3v3" />
          <path d="M7 3v3" />
          <path d="M10 14 2.3 6.3" />
          <path d="m14 6 7.7 7.7" />
          <path d="m8 6 8 8" />
        </svg>
      ),
    },
  ];

  return (
    <div className="figma-modal-overlay" onClick={onClose} id="consultation-modal-overlay">
      <div
        className="figma-modal-box"
        onClick={(e) => e.stopPropagation()}
        id="consultation-modal-box"
      >
        <button className="figma-modal-close" onClick={onClose} aria-label="Close modal">
          ✕
        </button>

        <div className="figma-modal-scroll">
          {submitted ? (
          <div style={{ textAlign: "center", padding: "40px 10px" }}>
            <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🎉</div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 800, color: "#522504", marginBottom: "10px" }}>
              Consultation Scheduled!
            </h3>
            <p style={{ color: "#554A40", fontSize: "0.98rem", lineHeight: 1.6, maxWidth: "420px", margin: "0 auto 20px" }}>
              Thank you, <strong>{formData.name}</strong>. Our senior interior designer will get in touch with you shortly at{" "}
              <strong>{formData.phone}</strong> to discuss your <strong>{formData.propertyType}</strong> project.
            </p>
            <button
              type="button"
              className="figma-modal-submit-btn"
              style={{ maxWidth: "220px", margin: "0 auto" }}
              onClick={onClose}
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            {/* Header with Calendar Badge and Title */}
            <div className="figma-modal-header">
              <div className="figma-modal-cal-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#522504" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="3" ry="3" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h2 className="figma-modal-title">Book a Free Consultation</h2>
            </div>

            <form onSubmit={handleSubmit} id="consultation-form">
              {/* 2x2 Contact Details Grid with icons */}
              <div className="figma-modal-contact-grid">
                {/* Full Name */}
                <div className="figma-modal-input-wrap">
                  <div className="figma-modal-input-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    className="figma-modal-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                {/* Mobile Number */}
                <div className="figma-modal-input-wrap">
                  <div className="figma-modal-input-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <input
                    type="tel"
                    required
                    placeholder="Enter your mobile number"
                    className="figma-modal-input"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                {/* Email Address */}
                <div className="figma-modal-input-wrap">
                  <div className="figma-modal-input-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="figma-modal-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                {/* City or Locality */}
                <div className="figma-modal-input-wrap">
                  <div className="figma-modal-input-icon">
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 21c-4-4.5-8-8.5-8-12a8 8 0 1 1 16 0c0 3.5-4 7.5-8 12z" />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="City or locality"
                    className="figma-modal-input"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              {/* Property Type Selector */}
              <div style={{ marginBottom: "16px" }}>
                <label className="figma-modal-label">Property Type</label>
                <div className="figma-modal-cards-grid">
                  {propertyTypes.map((pt) => {
                    const isSelected = formData.propertyType === pt.id;
                    return (
                      <button
                        type="button"
                        key={pt.id}
                        className={`figma-modal-card-btn ${isSelected ? "active" : ""}`}
                        onClick={() => setFormData({ ...formData, propertyType: pt.id })}
                      >
                        <div className="figma-modal-card-icon">{pt.icon}</div>
                        <span className="figma-modal-card-name">{pt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Property Size (Sq. Ft.) */}
              <div style={{ marginBottom: "16px" }}>
                <label className="figma-modal-label">Property Size (Sq. Ft.)</label>
                <input
                  type="text"
                  placeholder="Property Size (Sq. Ft.)"
                  className="figma-modal-size-input"
                  value={formData.propertySize}
                  onChange={(e) => setFormData({ ...formData, propertySize: e.target.value })}
                />
              </div>

              {/* Property Stage Selector */}
              <div style={{ marginBottom: "16px" }}>
                <label className="figma-modal-label">Property Stage</label>
                <div className="figma-modal-cards-grid">
                  {propertyStages.map((ps) => {
                    const isSelected = formData.propertyStage === ps.id;
                    return (
                      <button
                        type="button"
                        key={ps.id}
                        className={`figma-modal-card-btn ${isSelected ? "active" : ""}`}
                        onClick={() => setFormData({ ...formData, propertyStage: ps.id })}
                      >
                        <div className="figma-modal-card-icon">{ps.icon}</div>
                        <span className="figma-modal-card-name">{ps.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tell Us About Your Project */}
              <div style={{ marginBottom: "18px" }}>
                <textarea
                  rows="3"
                  placeholder="Tell Us About Your Project"
                  className="figma-modal-textarea"
                  value={formData.projectNotes}
                  onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                />
              </div>

              {/* CTA Submit Button */}
              <button type="submit" className="figma-modal-submit-btn" id="modal-submit-btn">
                Book Free Consultation
              </button>

              {/* Security Note */}
              <div className="figma-modal-security">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#CCA56B" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span>Your information is secure and will only be used to assist with your interior design consultation.</span>
              </div>
            </form>
          </div>
        )}
        </div>
      </div>
    </div>
  );
}
