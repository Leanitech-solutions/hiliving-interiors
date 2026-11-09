"use client";

import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import FeaturedSpaces from "./components/FeaturedSpaces";
import SolutionsGrid from "./components/SolutionsGrid";
import ProcessSection from "./components/ProcessSection";
import ExploreProjectsSection from "./components/ExploreProjectsSection";
import ReviewsSection from "./components/ReviewsSection";
import GuaranteesSection from "./components/GuaranteesSection";
import FaqSection from "./components/FaqSection";
import CtaBanner from "./components/CtaBanner";
import Footer from "./components/Footer";
import ConsultationModal from "./components/ConsultationModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="site-wrap">
      {/* 1. Hero Viewport: Navigation + Hero */}
      <div className="figma-hero-viewport" id="hero">
        <Navbar onOpenModal={() => setModalOpen(true)} />
        <HeroSection onOpenModal={() => setModalOpen(true)} />
      </div>

      {/* 2. About HiLiving Interiors Section (With Key Statistics) */}
      <AboutSection />

      {/* 3. Transforming Empty Spaces (Before & After Pill Switch) */}
      <BeforeAfterSection />

      {/* 4. Featured Interior Spaces (3 Space Cards) */}
      <FeaturedSpaces onOpenModal={() => setModalOpen(true)} />

      {/* 5. End-to-End Interior Solutions (6x2 Matrix) */}
      <SolutionsGrid onOpenModal={() => setModalOpen(true)} />

      {/* 6. Our Design Approach and Process (6-Step Stepper) */}
      <ProcessSection />

      {/* 7. Explore Our Projects (2 Big Project Cards) */}
      <ExploreProjectsSection onOpenModal={() => setModalOpen(true)} />

      {/* 8. What Our Client Say (Testimonials & Google Ratings) */}
      <ReviewsSection onOpenModal={() => setModalOpen(true)} />

      {/* 9. Guarantees & Frequently Asked Questions Combined Viewport */}
      <div className="figma-faq-viewport" id="faq">
        <GuaranteesSection />
        <FaqSection />
      </div>

      {/* 10. Ready To Design Your Dream Space (Dark CTA) */}
      <CtaBanner onOpenModal={() => setModalOpen(true)} />

      {/* 11. Footer (Espresso Brown) */}
      <Footer onOpenModal={() => setModalOpen(true)} />

      {/* Interactive Consultation Modal */}
      <ConsultationModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
