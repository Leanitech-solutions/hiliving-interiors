"use client";

import StatsSection from "./StatsSection";

export default function AboutSection() {
  return (
    <section className="figma-about-section" id="about">
      <div className="figma-about-container">
        {/* Key Statistics Bar: 15+ Years, 900+ Projects, 92% Satisfaction */}
        <StatsSection />

        {/* Section Title */}
        <h2 className="figma-section-title gold">
          About HiLiving Interiors
        </h2>

        {/* Quote Banner */}
        <div className="figma-about-banner">
          <blockquote className="figma-about-quote">
            “At HiLiving Interiors, we create thoughtfully designed residential
            spaces that reflect your personality, lifestyle, and aspirations.
            From a single room to a complete home, we combine timeless aesthetics,
            functional planning, and refined craftsmanship to turn your vision into
            a space you’ll love living in.”
          </blockquote>

          <div className="figma-about-accent-line"></div>

          <p className="figma-about-tagline">
            Designed Around You. Crafted for Life.
          </p>
        </div>
      </div>
    </section>
  );
}
