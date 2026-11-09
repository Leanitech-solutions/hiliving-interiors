"use client";

import { useState } from "react";
import Image from "next/image";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: 1,
      title: "Initial Consultation",
      desc: "We begin by understanding your vision, lifestyle, budget, and design goals to create a personalized interior solution.",
      img: "/images/figma/process-img.png",
    },
    {
      num: 2,
      title: "Site Analysis",
      desc: "We assess the layout, lighting, dimensions, and architectural details to create functional and aesthetically balanced spaces.",
      img: "/images/figma/card-kitchen.png",
    },
    {
      num: 3,
      title: "Concept Development",
      desc: "We transform your ideas into personalized design concepts with curated mood boards, color palettes, and layout plans.",
      img: "/images/figma/card-tv.png",
    },
    {
      num: 4,
      title: "Space & Layout Design",
      desc: "We create practical layouts that maximize space, ensure smooth movement, and balance functionality with aesthetics.",
      img: "/images/figma/card-bedroom.png",
    },
    {
      num: 5,
      title: "Material & Finish Selection",
      desc: "We choose premium materials, finishes, and furnishings that enhance the design while ensuring quality and durability.",
      img: "/images/figma/transformation-img.png",
    },
    {
      num: 6,
      title: "Project Execution",
      desc: "Our experienced team manages execution, coordinating with contractors and vendors to ensure quality workmanship and timely delivery.",
      img: "/images/figma/hero-bg.png",
    },
  ];

  const handlePrev = () => {
    setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1));
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0));
  };

  const current = steps[activeStep];

  return (
    <section className="figma-process-section" id="process">
      <div className="content-container">
        <h2 className="figma-section-title">Our Design Approach and Process</h2>

        <p className="figma-section-subtitle">
          We follow a thoughtful six-step process that takes your ideas from
          initial consultation to a beautifully finished space.
        </p>
      </div>

      {/* 6-Step Stepper Bar with Black Lines - Full Screen Width */}
      <div className="figma-process-stepper-wrap">
        <div className="figma-process-stepper">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className={`figma-stepper-item ${idx === steps.length - 1 ? "figma-stepper-item-last" : ""}`}
            >
              <div
                className={`figma-step-bubble ${activeStep === idx ? "active" : ""}`}
                onClick={() => setActiveStep(idx)}
                id={`step-bubble-${idx + 1}`}
                role="button"
                tabIndex={0}
                aria-label={`Step ${s.num}: ${s.title}`}
              >
                {s.num}
              </div>

              {idx < steps.length - 1 && <div className="figma-step-line"></div>}
            </div>
          ))}
        </div>
      </div>

      <div className="content-container">
        {/* Active Step Display Box [Figma Node 52:61, 52:60, 51:27, 244:79] */}
        <div className="figma-process-card-display">
          <button
            onClick={handlePrev}
            className="figma-proc-arrow-btn figma-proc-arrow-prev"
            id="proc-prev-btn"
            aria-label="Previous step"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#522504"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="14.5 17 9.5 12 14.5 7"></polyline>
            </svg>
          </button>

          <div className="figma-proc-text-col">
            <h3 className="figma-proc-title">{current.title}</h3>
            <p className="figma-proc-desc">{current.desc}</p>
          </div>

          <div className="figma-proc-img-col">
            <div className="figma-proc-img-frame">
              <Image
                src={current.img}
                alt={current.title}
                fill
                sizes="(max-width: 768px) 100vw, 420px"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          <button
            onClick={handleNext}
            className="figma-proc-arrow-btn figma-proc-arrow-next"
            id="proc-next-btn"
            aria-label="Next step"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#522504"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="9.5 7 14.5 12 9.5 17"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
