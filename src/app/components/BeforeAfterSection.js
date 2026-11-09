"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfterSection() {
  const [viewState, setViewState] = useState("after"); // 'before' | 'after'

  return (
    <section className="figma-transformation-section" id="transformation">
      <div className="figma-transformation-inner">
        <div className="figma-transformation-header">
          <h2 className="figma-transformation-title">
            Transforming Empty Spaces Into Timeless Living
          </h2>

          <p className="figma-transformation-sub">
            From an empty canvas to a thoughtfully designed home, we transform
            spaces with purposeful layouts, elegant details, and a timeless design
            language.
          </p>
        </div>

        {/* Exact Figma Pill Toggle Switch (Rectangle 28: 296x61px) */}
        <div
          className={`figma-toggle-switch ${viewState === "after" ? "after-active" : ""}`}
          onClick={() => setViewState(viewState === "before" ? "after" : "before")}
          id="figma-toggle-switch"
        >
          <div className="figma-toggle-indicator"></div>
          <button
            type="button"
            className="figma-toggle-btn btn-before"
            onClick={(e) => {
              e.stopPropagation();
              setViewState("before");
            }}
          >
            Before
          </button>
          <button
            type="button"
            className="figma-toggle-btn btn-after"
            onClick={(e) => {
              e.stopPropagation();
              setViewState("after");
            }}
          >
            After
          </button>
        </div>

        {/* Display Frame [Figma Node 986:104 / 986:105, cornerRadius: 41] */}
        <div className="figma-trans-display">
          <Image
            src={
              viewState === "after"
                ? "/images/figma/transformation-img.png"
                : "/images/figma/transformation-before.jpg"
            }
            alt={viewState === "after" ? "After Handover" : "Before Raw Shell"}
            fill
            sizes="(max-width: 1280px) 100vw, 1255px"
            priority
            style={{ objectFit: "cover", transition: "all 0.4s ease" }}
          />
        </div>
      </div>
    </section>
  );
}
