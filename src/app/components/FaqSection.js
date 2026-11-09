"use client";

import { useState } from "react";

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(null);

  const faqs = [
    {
      q: "How long does an interior project take?",
      a: "Our typical full home interior execution takes 45 working days from final 3D design approval and material sign-off. Since all carpentry is prefabricated in our Bangalore factory, on-site assembly is fast and predictable.",
    },
    {
      q: "Can I customize the design according to my preferences?",
      a: "Yes, 100%! Every cabinet, wardrobe partition, lighting layout, and finish is customized to your exact floor plan, lifestyle preferences, and storage requirements.",
    },
    {
      q: "Do you provide 3D designs before execution?",
      a: "Yes. You will receive photorealistic 3D renders and virtual walkthroughs of every room. You can review materials, finishes, and colors, and make revisions before factory production begins.",
    },
    {
      q: "How is the project pricing calculated?",
      a: "Our pricing is transparent and itemized based on exact surface area, core materials (Century/Greenply BWP ply, HDHMR), finishes (acrylic, laminate, PU, veneer), and hardware fittings (Hettich, Hafele, Blum) with zero hidden costs.",
    },
  ];

  return (
    <section className="figma-faq-section" id="faq">
      <div className="content-container">
        <h2 className="figma-section-title">
          Frequently Asked Questions
        </h2>

        <div className="figma-faq-container">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`figma-faq-item ${isOpen ? "open" : ""}`}
                onClick={() => setOpenIdx(isOpen ? -1 : i)}
                id={`figma-faq-${i}`}
              >
                <div className="figma-faq-header">
                  <span className="figma-faq-q">{f.q}</span>
                  <div className="figma-faq-plus">+</div>
                </div>

                {isOpen && <p className="figma-faq-a">{f.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
