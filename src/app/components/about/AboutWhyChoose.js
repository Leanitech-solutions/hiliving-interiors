"use client";

const features = [
  {
    title: "Customized Designs",
    desc: "Every space is tailored to match your lifestyle, preferences, and vision.",
  },
  {
    title: "Functional Planning",
    desc: "Smart layouts that maximize comfort, storage, and everyday usability.",
  },
  {
    title: "Premium Materials",
    desc: "High-quality finishes and durable materials for long-lasting elegance.",
  },
  {
    title: "Transparent Pricing",
    desc: "Clear quotations, honest communication, and no hidden surprises.",
  },
  {
    title: "Dedicated Support",
    desc: "Guidance and assistance throughout your design journey from concept to completion.",
  },
];

export default function AboutWhyChoose() {
  return (
    <section className="about-whychoose">
      <div className="about-whychoose-inner">
        {/* Left: Title + subtitle */}
        <div className="about-whychoose-left">
          <h2 className="about-whychoose-heading">
            Why Choose{" "}
            <br />Hiliving?
          </h2>
          <p className="about-whychoose-subtitle">
            We don&rsquo;t just design interiors, we create spaces that feel like home.
          </p>
          <div className="about-gold-divider"></div>
        </div>

        {/* Right: Feature list with timeline */}
        <div className="about-whychoose-right">
          <div className="about-whychoose-timeline-bar"></div>
          {features.map((f, i) => (
            <div className="about-whychoose-feature" key={i}>
              <div className="about-whychoose-dot-wrap">
                <span className="about-whychoose-dot"></span>
              </div>
              <div className="about-whychoose-feature-text">
                <h3 className="about-whychoose-feature-title">{f.title}</h3>
                <p className="about-whychoose-feature-desc">{f.desc}</p>
              </div>
              {i < features.length - 1 && (
                <div className="about-whychoose-separator"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

