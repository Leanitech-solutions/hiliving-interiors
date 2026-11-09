"use client";

import Image from "next/image";

const philosophyCards = [
  {
    icon: "/images/figma/about-icon-thoughtful.png",
    title: "Thoughtful Design",
    description:
      "Every space is designed around your lifestyle, ensuring comfort, functionality, and lasting appeal.",
  },
  {
    icon: "/images/figma/about-icon-quality.png",
    title: "Timeless Quality",
    description:
      "Premium materials and expert craftsmanship create interiors that stand the test of time.",
  },
  {
    icon: "/images/figma/about-icon-individuality.png",
    title: "Individuality",
    description:
      "Every project is uniquely tailored to reflect your personality, preferences, and vision.",
  },
];

export default function AboutPhilosophy() {
  return (
    <section className="about-philosophy">
      <div className="about-philosophy-inner">
        <h2 className="about-philosophy-title">Our Philosophy</h2>
        <p className="about-philosophy-subtitle">
          At HiLiving Interiors, we believe exceptional interiors are built on
          thoughtful design, purposeful functionality, and timeless
          aesthetics—three foundations that shape every space we create.
        </p>
        <div className="about-gold-divider about-gold-divider-center"></div>

        <div className="about-philosophy-cards">
          {philosophyCards.map((card, i) => (
            <div className="about-philosophy-card" key={i}>
              <div className="about-philosophy-icon-wrap">
                <Image
                  src={card.icon}
                  alt={card.title}
                  width={176}
                  height={176}
                  className="about-philosophy-icon-img"
                />
              </div>
              <h3 className="about-philosophy-card-title">{card.title}</h3>
              <p className="about-philosophy-card-desc">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
