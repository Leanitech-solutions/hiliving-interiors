"use client";

import Image from "next/image";

export default function FeaturedSpaces({ onOpenModal }) {
  const cards = [
    {
      title: "Kitchen",
      img: "/images/figma/sections/figma-featured-card1.png",
      alt: "Kitchen interior design with modern glossy cabinetry and warm lighting",
    },
    {
      title: "Tv Unit",
      img: "/images/figma/sections/figma-featured-card2.png",
      alt: "Minimalist modern TV entertainment unit with ambient wall lighting",
    },
    {
      title: "Bedroom",
      img: "/images/figma/sections/figma-featured-card3.png",
      alt: "Luxury master bedroom with fluted wall panel and plush platform bed",
    },
  ];

  return (
    <section className="figma-featured-section" id="featured">
      <div className="content-container">
        <h2 className="figma-section-title">Featured Interior Spaces</h2>

        <p className="figma-section-subtitle">
          Explore thoughtfully designed spaces where aesthetics, functionality,
          and personal style come together to create interiors made for
          everyday living.
        </p>

        {/* Exact 3 Figma Cards */}
        <div className="figma-cards-row">
          {cards.map((c, i) => (
            <div
              key={i}
              className="figma-space-card"
              onClick={onOpenModal}
              role="button"
              tabIndex={0}
            >
              <Image
                src={c.img}
                alt={c.alt}
                width={415}
                height={514}
                style={{ width: "100%", height: "auto", display: "block", borderRadius: "38px 38px 16px 16px" }}
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        {/* Exact Figma Centered "View All" Button [Node 5:12] */}
        <div className="figma-featured-btn-wrap">
          <button
            onClick={onOpenModal}
            className="figma-view-all-btn"
            id="featured-view-all-btn"
          >
            <span>View All</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
