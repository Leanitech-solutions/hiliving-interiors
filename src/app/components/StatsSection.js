"use client";

export default function StatsSection() {
  return (
    <div className="figma-stats-wrapper" id="stats-section">
      <div className="figma-stats-card">
        {/* Stat 1: 15+ Years of Experience */}
        <div className="figma-stat-item">
          <div className="figma-stat-top">
            <span className="figma-stat-icon">
              <svg
                width="46"
                height="46"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E3B45C"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
                <path d="M11 12 5.12 2.2" />
                <path d="m13 12 5.88-9.8" />
                <circle cx="12" cy="17" r="5" />
              </svg>
            </span>
            <span className="figma-stat-number">15+</span>
          </div>
          <span className="figma-stat-label">Years of Experience</span>
        </div>

        {/* Stat 2: 900+ Projects Delivered */}
        <div className="figma-stat-item">
          <div className="figma-stat-top">
            <span className="figma-stat-icon">
              <svg
                width="46"
                height="46"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E3B45C"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </span>
            <span className="figma-stat-number">900+</span>
          </div>
          <span className="figma-stat-label">Projects Delivered</span>
        </div>

        {/* Stat 3: 92% Client Satisfaction */}
        <div className="figma-stat-item">
          <div className="figma-stat-top">
            <span className="figma-stat-icon">
              <svg
                width="46"
                height="46"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#E3B45C"
                strokeWidth="2.3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <span className="figma-stat-number">92%</span>
          </div>
          <span className="figma-stat-label">Client Satisfaction</span>
        </div>
      </div>
    </div>
  );
}
