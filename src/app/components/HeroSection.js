import Image from "next/image";

export default function HeroSection({ onOpenModal }) {
  return (
    <section className="figma-hero" id="hero">
      {/* Exact Extracted Figma Background Image [Node 241:22] */}
      <Image
        src="/images/figma/hero-bg.png"
        alt="Crafting Timeless Interiors"
        fill
        priority
        className="figma-hero-bg"
      />
      <div className="figma-hero-overlay"></div>

      <div className="figma-hero-inner">
        <div className="figma-hero-content">
          <h1 className="figma-hero-h1">
            Crafting Timeless Interiors<br />That Feel Like Home.
          </h1>

          <p className="figma-hero-sub">
            We design premium residential interiors that blend elegant
            craftsmanship, thoughtful functionality, and personalized details to
            create beautiful spaces that truly feel like home.
          </p>

          <div className="figma-hero-buttons">
            <button
              onClick={onOpenModal}
              className="figma-hero-btn-brown"
              id="hero-book-btn"
            >
              Book Free Consultation
            </button>

            <a
              href="#projects"
              className="figma-hero-btn-glass"
              id="hero-explore-btn"
            >
              Explore Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
