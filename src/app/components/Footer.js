"use client";

import Image from "next/image";

export default function Footer({ onOpenModal }) {
  return (
    <footer className="figma-footer" id="footer">
      <div className="figma-footer-inner">
        {/* Top 4 Columns */}
        <div className="figma-footer-grid">
          {/* Col 1 - Brand, Description, Socials, 3 Subsidiary Logos */}
          <div className="figma-footer-col-1">
            <div className="figma-footer-logo-wrap">
              <Image
                src="/images/figma/footer-logo-interiors.png"
                alt="HiLiving Interiors"
                width={719}
                height={599}
                className="figma-footer-logo-main"
              />
            </div>
            <p className="figma-footer-desc">
              Award-winning interior design firm based in Bangalore. Designing spaces that inspire since 2010.
            </p>
            <div className="figma-footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="figma-social-icon" aria-label="Facebook">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="figma-social-icon" aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="figma-social-icon" aria-label="YouTube">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.58 7.19a2.5 2.5 0 0 0-1.76-1.77C18.26 5 12 5 12 5s-6.26 0-7.82.42A2.5 2.5 0 0 0 2.42 7.19 26.07 26.07 0 0 0 2 12a26.07 26.07 0 0 0 .42 4.81 2.5 2.5 0 0 0 1.76 1.77C5.74 19 12 19 12 19s6.26 0 7.82-.42a2.5 2.5 0 0 0 1.76-1.77A26.07 26.07 0 0 0 22 12a26.07 26.07 0 0 0-.42-4.81zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="figma-social-icon" aria-label="Instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
            {/* 3 Subsidiary Logos in Row */}
            <div className="figma-footer-subsidiaries">
              <div className="figma-footer-subsid-item figma-subsid-homes">
                <Image
                  src="/images/figma/footer-logo-homes.png"
                  alt="HiLiving Homes"
                  width={612}
                  height={550}
                  className="figma-footer-subsid-img"
                />
              </div>
              <div className="figma-footer-subsid-item figma-subsid-estates">
                <Image
                  src="/images/figma/footer-logo-estates.png"
                  alt="HiLiving Estates"
                  width={1057}
                  height={493}
                  className="figma-footer-subsid-img"
                />
              </div>
              <div className="figma-footer-subsid-item figma-subsid-constructions">
                <Image
                  src="/images/figma/footer-logo-constructions.png"
                  alt="HiLiving Constructions"
                  width={833}
                  height={837}
                  className="figma-footer-subsid-img"
                />
              </div>
            </div>
          </div>

          {/* Col 2 - Services */}
          <div className="figma-footer-col">
            <h4 className="figma-footer-heading">Services</h4>
            <ul className="figma-footer-list">
              <li><a href="#solutions">Residential Design</a></li>
              <li><a href="#solutions">End-to-end</a></li>
              <li><a href="#process">Process</a></li>
              <li><a href="#solutions">Guides</a></li>
            </ul>
          </div>

          {/* Col 3 - Quick Links */}
          <div className="figma-footer-col">
            <h4 className="figma-footer-heading">Quick Links</h4>
            <ul className="figma-footer-list">
              <li><a href="#about">About</a></li>
              <li><a href="#solutions">Services</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
              <li><a href="#footer">Contact</a></li>
            </ul>
          </div>

          {/* Col 4 - Contact */}
          <div className="figma-footer-col figma-footer-col-contact">
            <h4 className="figma-footer-heading">Contact</h4>
            <div className="figma-footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E3B45C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 21c-4-4.5-8-8.5-8-12a8 8 0 1 1 16 0c0 3.5-4 7.5-8 12z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <span>
                4th Floor, No.47/1, Kothnur Dinne Main Rd, opp. to Vishal Mega Mart, Kothnur, Nayak Layout, Classic Orchards Layout, J. P. Nagar, Bengaluru, Karnataka 560076
              </span>
            </div>

            <div className="figma-footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E3B45C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>+91 9844777145, 9964777145</span>
            </div>

            <div className="figma-footer-contact-item">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E3B45C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span>hello@hilivinginteriors.in</span>
            </div>

            <button
              onClick={onOpenModal}
              className="figma-footer-book-btn"
              id="footer-book-btn"
            >
              <span>Book Consultation</span>
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="figma-footer-divider"></div>

        <div className="figma-footer-bottom">
          <span>© 2026 Hi Living Interiors. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
