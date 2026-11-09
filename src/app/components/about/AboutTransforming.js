"use client";

import Image from "next/image";

export default function AboutTransforming() {
  return (
    <section className="about-transforming">
      <div className="about-transforming-inner">
        {/* Left: Image with decorative brown blocks */}
        <div className="about-transforming-img-wrap">
          <div className="about-transforming-brown about-transforming-brown-left"></div>
          <div className="about-transforming-brown about-transforming-brown-right"></div>
          <div className="about-transforming-img-mask">
            <Image
              src="/images/figma/about-transforming.png"
              alt="Transforming Spaces Since 2010"
              width={605}
              height={584}
              className="about-transforming-img"
            />
          </div>
        </div>

        {/* Right: Text content */}
        <div className="about-transforming-text">
          <h2 className="about-transforming-heading">
            Transforming Spaces Since 2010
          </h2>
          <p className="about-transforming-script">
            We transform residential and commercial spaces into elegant,
            functional interiors.
          </p>
          <div className="about-gold-divider"></div>
          <p className="about-transforming-body">
            With 900+ completed projects, we create innovative spaces that blend
            style, comfort, and practicality. From concept to completion, we
            deliver personalized interior solutions with quality craftsmanship
            and attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
}

