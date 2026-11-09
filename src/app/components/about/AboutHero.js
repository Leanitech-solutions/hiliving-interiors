"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-content">
        {/* Left: Text content */}
        <div className="about-hero-text">
          <h1 className="about-hero-label">About Us</h1>
          <h2 className="about-hero-heading">
            Award-Winning Interior Designer{" "}
            <br />Firm in Bangalore
          </h2>
          <p className="about-hero-script">
            Crafting Elegant Spaces That Feel Like Home
          </p>
          <div className="about-hero-divider"></div>
          <p className="about-hero-desc">
            Welcome to Hiliving Interiors, a trusted name in premium interior
            design services in Bangalore.
          </p>
        </div>

        {/* Right: Masked portrait image with decorative brown blocks */}
        <div className="about-hero-image-wrap">
          <div className="about-hero-brown-block about-hero-brown-top"></div>
          <div className="about-hero-brown-block about-hero-brown-bottom"></div>
          <div className="about-hero-mask">
            <Image
              src="/images/figma/about-hero-mask.png"
              alt="HiLiving Award-Winning Trophy"
              width={611}
              height={675}
              className="about-hero-portrait"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
