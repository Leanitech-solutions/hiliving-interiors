"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import AboutHero from "../components/about/AboutHero";
import AboutTransforming from "../components/about/AboutTransforming";
import AboutCommitment from "../components/about/AboutCommitment";
import AboutPhilosophy from "../components/about/AboutPhilosophy";
import AboutWhatWeDo from "../components/about/AboutWhatWeDo";
import AboutWhyChoose from "../components/about/AboutWhyChoose";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";
import ConsultationModal from "../components/ConsultationModal";

export default function AboutPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="site-wrap">
      {/* 1. First Viewport: Navigation + About Hero */}
      <div className="about-hero-viewport">
        <Navbar onOpenModal={() => setModalOpen(true)} />
        <AboutHero />
      </div>

      {/* 2. Second Viewport: Transforming Spaces Since 2010 */}
      <div className="about-transforming-viewport">
        <AboutTransforming />
      </div>

      {/* 3. Our Commitment Banner */}
      <AboutCommitment />

      {/* 4. Our Philosophy */}
      <AboutPhilosophy />

      {/* 5. What We Do */}
      <AboutWhatWeDo />

      {/* 6. Why Choose Hiliving? */}
      <AboutWhyChoose />

      {/* 7. CTA Banner */}
      <CtaBanner onOpenModal={() => setModalOpen(true)} />

      {/* 8. Footer */}
      <Footer onOpenModal={() => setModalOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}

