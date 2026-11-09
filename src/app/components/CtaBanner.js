"use client";

import Image from "next/image";

export default function CtaBanner({ onOpenModal }) {
  return (
    <section className="figma-dream-space-section" id="dream-space">
      <Image
        src="/images/figma/dream-space-bg.png"
        alt="Ready To Design Your Dream Space"
        fill
        sizes="100vw"
        className="figma-dream-space-bg"
        priority
      />
      <div className="figma-dream-space-overlay"></div>

      <div className="figma-dream-content">
        <h2 className="figma-dream-h2">Ready To Design Your Dream Space</h2>

        <p className="figma-dream-sub">
          Let’s create a space that reflects your style and personality.
        </p>

        <button
          onClick={onOpenModal}
          className="figma-dream-btn"
          id="dream-space-book-btn"
        >
          <span>Book A Free Consultation</span>
        </button>
      </div>
    </section>
  );
}
