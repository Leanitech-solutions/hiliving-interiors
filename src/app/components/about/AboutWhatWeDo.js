"use client";

import Image from "next/image";

const whatWeDoCards = [
  {
    num: "01",
    image: "/images/figma/about-card-what-01.png",
    title: "Modular Kitchen Design",
    desc: "Modern modular kitchens with smart storage and premium finishes.",
    badgePos: "left",
  },
  {
    num: "02",
    image: "/images/figma/about-card-what-02.png",
    title: "Bedroom Interior Design",
    desc: "Cozy and personalized interiors designed for comfort and relaxation.",
    badgePos: "left",
  },
  {
    num: "03",
    image: "/images/figma/about-card-what-03.png",
    title: "Dining Area & TV Unit",
    desc: "Custom dining spaces and TV units that elevate your home's aesthetics.",
    badgePos: "right",
  },
  {
    num: "04",
    image: "/images/figma/about-card-what-04.png",
    title: "Wardrobe & Storage",
    desc: "Smart storage solutions with customized wardrobes and cabinets.",
    badgePos: "right",
  },
];

export default function AboutWhatWeDo() {
  return (
    <section className="about-whatwedo">
      <div className="about-whatwedo-inner">
        <h2 className="about-whatwedo-title">What We Do</h2>
        <p className="about-whatwedo-subtitle">
          We craft interiors that go beyond aesthetics, thoughtfully shaping
          every space around your lifestyle, comfort, personality, and the way
          you truly want to live.
        </p>
        <div className="about-gold-divider about-gold-divider-center"></div>

        <div className="about-whatwedo-grid">
          {whatWeDoCards.map((card, i) => (
            <div
              className={`about-whatwedo-item about-whatwedo-badge-${card.badgePos}`}
              key={i}
            >
              {/* Floating White Card Badge */}
              <div className="about-whatwedo-badge">
                <span className="about-whatwedo-badge-num">{card.num}</span>
                <div className="about-whatwedo-badge-line"></div>
                <h3 className="about-whatwedo-badge-title">{card.title}</h3>
                <p className="about-whatwedo-badge-desc">{card.desc}</p>
              </div>

              {/* Background Photo Frame */}
              <div className="about-whatwedo-photo-frame">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 560px"
                  className="about-whatwedo-photo"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
