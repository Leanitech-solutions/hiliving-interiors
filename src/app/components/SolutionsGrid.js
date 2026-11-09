"use client";

import Image from "next/image";

export default function SolutionsGrid({ onOpenModal }) {
  const solutions = [
    { title: "TV Unit", icon: "/images/figma/icon-tv.png" },
    { title: "Modular Kitchen", icon: "/images/figma/icon-kitchen.png" },
    { title: "Bedroom", icon: "/images/figma/icon-bedroom.png" },
    { title: "Wardrobes", icon: "/images/figma/icon-wardrobe.png" },
    { title: "Dining Area", icon: "/images/figma/icon-dining.png" },
    { title: "False Ceiling", icon: "/images/figma/icon-ceiling.png" },
    { title: "Living Room", icon: "/images/figma/icon-living.png" },
    { title: "Wall Paint", icon: "/images/figma/icon-paint.png" },
    { title: "Space Planning", icon: "/images/figma/icon-space.png" },
    { title: "Vanity Unit", icon: "/images/figma/icon-vanity.png" },
    { title: "Pooja Unit", icon: "/images/figma/icon-pooja.png" },
    { title: "Workspace", icon: "/images/figma/icon-workspace.png" },
  ];

  return (
    <section className="figma-solutions-section" id="solutions">
      <div className="content-container">
        <h2 className="figma-section-title">End-to-end Interior Solutions</h2>

        <p className="figma-section-subtitle">
          From individual spaces to complete home interiors, we create tailored
          design solutions that bring together functionality, aesthetics, and
          your unique lifestyle.
        </p>

        {/* Exact Figma 6x2 Grid with Extracted Figma Icons */}
        <div className="figma-solutions-grid">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className="figma-sol-item"
              onClick={onOpenModal}
              role="button"
              tabIndex={0}
            >
              <div className="figma-sol-icon-box">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={50}
                  height={50}
                  style={{ objectFit: "contain", width: "auto", height: "46px" }}
                />
              </div>
              <span className="figma-sol-title">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
