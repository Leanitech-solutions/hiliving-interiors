"use client";

import Image from "next/image";

export default function AboutCommitment() {
  return (
    <section className="about-commitment">
      <div className="about-commitment-banner">
        {/* Left: Heart icon + title */}
        <div className="about-commitment-left">
          <div className="about-commitment-heart-circle">
            <Image
              src="/images/figma/about-heart-icon.png"
              alt="Our Commitment"
              width={84}
              height={84}
              className="about-commitment-heart"
            />
          </div>
          <h2 className="about-commitment-title">Our Commitment</h2>
        </div>

        {/* Vertical gold divider */}
        <div className="about-commitment-divider"></div>

        {/* Right: Quote text */}
        <div className="about-commitment-right">
          <p className="about-commitment-quote">
            &ldquo;At Hiliving Interiors, we believe great design goes beyond
            aesthetics—it enhances the way you live and experience your space.
            Our commitment is to deliver interiors that are timeless, functional,
            and uniquely&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}

