"use client";

import Image from "next/image";

export default function ReviewsSection({ onOpenModal }) {
  return (
    <section className="figma-testimonials-section" id="testimonials">
      <div className="content-container">
        <h2 className="figma-section-title">What Our Client Say</h2>

        <p className="figma-section-subtitle">
          Discover what our clients have to say about their experience of
          creating a home with HiLiving Interiors.
        </p>

        {/* 3 Review Boxes [Figma Nodes 249:42, 250:54, 250:61] */}
        <div className="figma-reviews-row">
          {/* Review 1 */}
          <div className="figma-review-box">
            <div>
              <blockquote className="figma-review-quote">
                “Working with Hi Living was seamless. They understood our vision
                from day one and elevated it in ways we hadn&apos;t imagined.”
              </blockquote>

              <div style={{ marginBottom: "20px" }}>
                <Image
                  src="/images/figma/rating-stars.png"
                  alt="5 Stars Rating"
                  width={133}
                  height={24}
                  style={{ width: "133px", height: "auto" }}
                />
              </div>
            </div>

            <div className="figma-review-client">
              <div className="figma-client-avatar">AK</div>
              <div>
                <div className="figma-client-name">Ananya Krishnan</div>
                <div className="figma-client-sub">Homeowner, Indiranagar</div>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="figma-review-box">
            <div>
              <blockquote className="figma-review-quote">
                “Working with Hi Living was seamless. They understood our vision
                from day one and elevated it in ways we hadn&apos;t imagined.”
              </blockquote>

              <div style={{ marginBottom: "20px" }}>
                <Image
                  src="/images/figma/rating-stars.png"
                  alt="5 Stars Rating"
                  width={133}
                  height={24}
                  style={{ width: "133px", height: "auto" }}
                />
              </div>
            </div>

            <div className="figma-review-client">
              <div className="figma-client-avatar">AK</div>
              <div>
                <div className="figma-client-name">Ananya Krishnan</div>
                <div className="figma-client-sub">Homeowner, Indiranagar</div>
              </div>
            </div>
          </div>

          {/* Google Ratings Box [Node 250:61] */}
          <div className="figma-google-box">
            <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "16px" }}>
              <Image
                src="/images/figma/google-search-icon.png"
                alt="Google Search"
                width={64}
                height={64}
                style={{ width: "54px", height: "54px", objectFit: "contain" }}
              />
              <span className="figma-google-title">
                Google Ratings
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "baseline", gap: "14px", marginBottom: "10px" }}>
              <span className="figma-google-score">
                4.9
              </span>
              <span className="figma-google-projects">
                900+ Projects
              </span>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <Image
                src="/images/figma/rating-stars.png"
                alt="4.9 Stars Rating"
                width={133}
                height={24}
                style={{ width: "133px", height: "auto" }}
              />
            </div>

            <button
              onClick={onOpenModal}
              className="figma-view-all-reviews-btn"
              id="google-view-reviews-btn"
            >
              <span>View All Reviews</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
