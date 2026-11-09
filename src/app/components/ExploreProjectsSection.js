"use client";

import Image from "next/image";

export default function ExploreProjectsSection({ onOpenModal }) {
  const projects = [
    {
      title: "Urban Haven Residence",
      location: "Whitefield, Bangalore",
      img: "/images/figma/project-serenity-villa.png",
      alt: "Urban Haven Residence luxury kitchen and dining interior in Whitefield Bangalore",
    },
    {
      title: "Serenity Villa",
      location: "Sarjapur Road, Bangalore",
      img: "/images/figma/project-urban-haven.png",
      alt: "Serenity Villa modern living room interior on Sarjapur Road Bangalore",
    },
  ];

  return (
    <section className="figma-projects-section" id="projects">
      <div className="content-container">
        <h2 className="figma-section-title">
          Explore Our Projects
        </h2>

        <p className="figma-section-subtitle">
          Take a closer look at our completed interiors, where thoughtful layouts,
          sophisticated aesthetics, and personalized details come together to
          create spaces that feel distinctly yours.
        </p>

        {/* 2 Big Project Cards [Figma Node 246:16 - 246:32] */}
        <div className="figma-projects-grid">
          {projects.map((p, idx) => (
            <div
              key={idx}
              className="figma-project-card"
              onClick={onOpenModal}
              role="button"
              tabIndex={0}
            >
              <div className="figma-proj-img-wrap">
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 624px"
                  style={{ objectFit: "cover" }}
                  priority={idx === 0}
                />
              </div>

              <div className="figma-proj-banner">
                <h3 className="figma-proj-title">{p.title}</h3>
                <div className="figma-proj-loc">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{p.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Exact Figma "View All Projects" Button [Node 246:33] */}
        <div className="figma-proj-btn-wrap">
          <button
            onClick={onOpenModal}
            className="figma-view-all-projects-btn"
            id="projects-explore-more-btn"
          >
            <span>View All Projects</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
