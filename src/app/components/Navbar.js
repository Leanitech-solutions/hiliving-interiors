"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ onOpenModal }) {
  const pathname = usePathname();
  const isAbout = pathname === "/about";
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const projectCreations = [
    { title: "Living Room Creations", href: isAbout ? "/#projects" : "#projects" },
    { title: "Kitchen Creations", href: isAbout ? "/#projects" : "#projects" },
    { title: "Bedroom Creations", href: isAbout ? "/#projects" : "#projects" },
    { title: "Tv Unit Creations", href: isAbout ? "/#projects" : "#projects" },
    { title: "Dinning Room Creations", href: isAbout ? "/#projects" : "#projects" },
    { title: "Pooja Unit Creations", href: isAbout ? "/#projects" : "#projects" },
    { title: "Bathroom Creations", href: isAbout ? "/#projects" : "#projects" },
    { title: "Vanity Unit Creations", href: isAbout ? "/#projects" : "#projects" },
    { title: "Workspace Creations", href: isAbout ? "/#projects" : "#projects" },
    { title: "Study Room Creations", href: isAbout ? "/#projects" : "#projects" },
    { title: "False Ceiling", href: isAbout ? "/#projects" : "#projects" },
    { title: "Wardrobe Creations", href: isAbout ? "/#projects" : "#projects" },
  ];

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleItemClick = (e, href) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    if (!isAbout && href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="figma-navbar">
      <div className="figma-nav-inner">
        {/* Exact Extracted Figma Logo [Node 3:3 / imageRef 47bf1667] */}
        <Link href="/" className="figma-brand" id="figma-nav-logo">
          <div className="figma-nav-logo-wrap">
            <Image
              src="/images/figma/navbar-logo.png"
              alt="HiLiving Interiors"
              width={140}
              height={70}
              priority
            />
          </div>
        </Link>

        {/* Exact Menu Items from Figma Node [1:976] (Desktop) */}
        <nav className="figma-nav-links-wrap">
          <ul className="figma-nav-menu">
            <li>
              <Link
                href="/about"
                className={isAbout ? "figma-nav-link-active" : ""}
              >
                About
              </Link>
            </li>
            <li>
              <Link href={isAbout ? "/#solutions" : "#solutions"}>
                Services
              </Link>
            </li>
            <li
              className={`figma-nav-dropdown-item ${dropdownOpen ? "is-open" : ""}`}
              ref={dropdownRef}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <Link
                href={isAbout ? "/#projects" : "#projects"}
                className="figma-nav-dropdown-trigger"
                onClick={(e) => {
                  if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    setDropdownOpen((prev) => !prev);
                  }
                }}
              >
                Projects
              </Link>

              <div className="figma-nav-dropdown-menu">
                <ul className="figma-nav-dropdown-list">
                  {projectCreations.map((item, idx) => (
                    <li key={idx} className="figma-nav-dropdown-li">
                      <Link
                        href={item.href}
                        className="figma-nav-dropdown-link"
                        onClick={(e) => handleItemClick(e, item.href)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li>
              <Link href={isAbout ? "/#testimonials" : "#testimonials"}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link href={isAbout ? "/#footer" : "#footer"}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Action Button: Book Consultation (Desktop) */}
        <div className="figma-nav-btn-wrap">
          <button
            onClick={onOpenModal}
            className="figma-nav-btn"
            id="nav-consultation-btn"
          >
            Book Consultation
          </button>
        </div>

        {/* Mobile 3-Bar Hamburger Button */}
        <button
          type="button"
          className={`figma-hamburger-btn ${mobileMenuOpen ? "is-active" : ""}`}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          <span className="figma-hamburger-bar"></span>
          <span className="figma-hamburger-bar"></span>
          <span className="figma-hamburger-bar"></span>
        </button>
      </div>

      {/* Mobile Navigation Sheet Backdrop */}
      <div
        className={`figma-mobile-backdrop ${mobileMenuOpen ? "is-open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Navigation Sheet Drawer */}
      <aside
        className={`figma-mobile-sheet ${mobileMenuOpen ? "is-open" : ""}`}
        aria-label="Mobile Navigation"
      >
        <div className="figma-mobile-sheet-header">
          <Link
            href="/"
            className="figma-mobile-sheet-logo"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Image
              src="/images/figma/navbar-logo.png"
              alt="HiLiving Interiors"
              width={832}
              height={684}
              priority
            />
          </Link>
          <button
            type="button"
            className="figma-mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <div className="figma-mobile-sheet-content">
          <ul className="figma-mobile-menu">
            <li>
              <Link
                href="/about"
                className={`figma-mobile-link ${isAbout ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href={isAbout ? "/#solutions" : "#solutions"}
                className="figma-mobile-link"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleItemClick(e, isAbout ? "/#solutions" : "#solutions");
                }}
              >
                Services
              </Link>
            </li>
            <li className="figma-mobile-has-sub">
              <button
                type="button"
                className="figma-mobile-link figma-mobile-accordion-toggle"
                onClick={() => setMobileProjectsOpen((prev) => !prev)}
                aria-expanded={mobileProjectsOpen}
              >
                <span>Projects</span>
                <svg
                  className={`figma-mobile-chevron ${mobileProjectsOpen ? "is-open" : ""}`}
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </button>
              <div
                className={`figma-mobile-sublist ${mobileProjectsOpen ? "is-open" : ""}`}
              >
                {projectCreations.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    className="figma-mobile-sublink"
                    onClick={(e) => {
                      setMobileMenuOpen(false);
                      handleItemClick(e, item.href);
                    }}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </li>
            <li>
              <Link
                href={isAbout ? "/#testimonials" : "#testimonials"}
                className="figma-mobile-link"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleItemClick(e, isAbout ? "/#testimonials" : "#testimonials");
                }}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href={isAbout ? "/#footer" : "#footer"}
                className="figma-mobile-link"
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleItemClick(e, isAbout ? "/#footer" : "#footer");
                }}
              >
                Contact
              </Link>
            </li>
          </ul>

          <div className="figma-mobile-action">
            <button
              type="button"
              className="figma-mobile-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenModal) onOpenModal();
              }}
            >
              Book Consultation
            </button>
          </div>
        </div>
      </aside>
    </header>
  );
}
