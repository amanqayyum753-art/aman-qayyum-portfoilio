import React from "react";
import StickyHeader from "@/components/portfolio/StickyHeader";
import HeroSection from "@/components/portfolio/HeroSection";
import FeaturedWork from "@/components/portfolio/FeaturedWork";
import ServicesSection from "@/components/portfolio/ServicesSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ComparisonSection from "@/components/portfolio/ComparisonSection";
import AvailabilitySection from "@/components/portfolio/AvailabilitySection";
import FAQSection from "@/components/portfolio/FAQSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";

export default function Home() {
  return (
    <>
      <StickyHeader />
      <main id="main-content">
        <HeroSection />
        <FeaturedWork />
        <ServicesSection />
        <ProcessSection />
        <AboutSection />
        <ComparisonSection />
        <AvailabilitySection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
