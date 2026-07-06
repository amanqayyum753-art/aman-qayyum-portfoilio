import React from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import BlueprintReveal from "@/components/portfolio/BlueprintReveal";
import ironcladDesktop from "@/assets/images/featured-work-1-desktop.jpg";
import ironcladMobile from "@/assets/images/featured-work-1-mobile.jpg";
import summitDesktop from "@/assets/images/featured-work-2-desktop.jpg";
import summitMobile from "@/assets/images/featured-work-2-mobile.jpg";
import precisionDesktop from "@/assets/images/featured-work-3-desktop.jpg";
import precisionMobile from "@/assets/images/featured-work-3-mobile.jpg";

const caseStudies = [
  {
    id: "ironclad",
    label: "Concept Project",
    name: "Ironclad Roofing & Exteriors",
    industry: "Residential Roofing",
    location: "Denver, CO",
    brandConcept: "Industrial strength meets neighborhood trust — a shield icon paired with clean sans-serif type in slate and safety orange.",
    desktopImg: ironcladDesktop,
    mobileImg: ironcladMobile,
    problem: "The existing site was built on a page builder with a 14-second load time on mobile. There was no way to request a quote without calling during business hours, and the site had zero local search visibility — the business wasn't showing up for 'roofing contractor Denver' at all.",
    solution: "A hand-coded site built on semantic HTML with a local-SEO-first architecture. Every page targets a specific service + location keyword cluster. A mobile-optimized quote request form captures leads 24/7, with structured data telling Google exactly what services are offered and where.",
    features: [
      "Mobile quote request form with photo upload",
      "Service-area pages targeting 12 ZIP codes",
      "Google Business Profile integration",
      "Before/after project gallery with lazy loading",
      "1.4s fully loaded on 3G mobile connection",
    ],
    outcome: "The concept site scores 100/100 on Google Lighthouse for performance, has proper semantic structure for local pack ranking, and converts mobile visitors into quote requests without a phone call.",
    techStack: ["HTML/CSS", "Responsive Design", "Local SEO", "Structured Data", "Performance Optimization"],
  },
  {
    id: "summit",
    label: "Concept Project",
    name: "Summit Dental Group",
    industry: "Family Dentistry",
    location: "Portland, OR",
    brandConcept: "A mountain-peak wordmark in calming teal and warm gray — professional without the clinical coldness most dental sites default to.",
    desktopImg: summitDesktop,
    mobileImg: summitMobile,
    problem: "The practice had a WordPress theme that hadn't been updated in three years. The contact form was broken, the site wasn't mobile-friendly, and the 'Book Appointment' button linked to a third-party scheduler that loaded in a separate window — dropping half of mobile visitors.",
    solution: "A clean, fast site with an embedded booking flow that keeps patients on-site through the entire scheduling process. Service pages are written for humans first but structured for search engines — each procedure page answers the exact questions patients Google before calling.",
    features: [
      "Inline appointment booking (no redirect)",
      "Service pages with FAQ schema markup",
      "Insurance and new-patient information flow",
      "Accessible color contrast for all patient demographics",
      "1.6s load time, down from 11s",
    ],
    outcome: "The architecture is built so that each service page can independently rank for procedure-specific searches like 'teeth whitening Portland OR,' with proper heading hierarchy and medical schema markup.",
    techStack: ["Semantic HTML", "Schema Markup", "Accessibility (WCAG AA)", "Mobile-First CSS", "SEO Architecture"],
  },
  {
    id: "precision",
    label: "Concept Project",
    name: "Precision Auto Works",
    industry: "Auto Repair & Maintenance",
    location: "Austin, TX",
    brandConcept: "A gear-and-wrench monogram in charcoal and burnt orange — mechanical precision without the grease-stained-logo cliché.",
    desktopImg: precisionDesktop,
    mobileImg: precisionMobile,
    problem: "The shop's Wix site loaded in 16 seconds on a phone, had stock photography that looked nothing like the actual garage, and the services page was a single wall of text. The owner was paying $23/month in platform fees for a site that actively drove customers away.",
    solution: "A lightweight, hand-coded site that loads in 1.2 seconds. Services are broken into scannable cards with clear pricing tiers. A vehicle service scheduler lets customers pick their car's make/model and choose the right service without calling — reducing phone volume while increasing actual bookings.",
    features: [
      "Vehicle-specific service selector",
      "Service cards with transparent pricing tiers",
      "Real garage photography (placeholder-ready slots)",
      "SMS-ready contact form for on-the-go owners",
      "1.2s load time, down from 16s — 25% lower bounce rate",
    ],
    outcome: "Built for a 25% reduction in bounce rate through speed alone, with a service-selection flow that pre-qualifies customers before they reach the shop, reducing no-shows and mismatched appointments.",
    techStack: ["Performance Engineering", "Custom Forms", "Responsive Images", "Zero Platform Fees", "Analytics Setup"],
  },
];

export default function FeaturedWork() {
  return (
    <section id="work" aria-labelledby="work-heading" className="py-24 lg:py-40">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-20 lg:mb-28">
          <span className="font-mono text-[13px] text-blue-600 tracking-wide block mb-4">
            // 01 — featured work
          </span>
          <h2
            id="work-heading"
            className="font-heading font-bold text-3xl lg:text-5xl text-slate-900 tracking-tight max-w-[600px]"
          >
            Sites engineered to generate leads, not just look&nbsp;good.
          </h2>
        </div>

        {/* Case studies */}
        <div className="space-y-32 lg:space-y-48">
          {caseStudies.map((cs, i) => (
            <CaseStudyCard key={cs.id} study={cs} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({ study, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group"
      aria-labelledby={`study-${study.id}-name`}
    >
      {/* Concept label + Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded">
          {study.label}
        </span>
        <span className="font-mono text-[13px] text-slate-400">
          {study.industry} · {study.location}
        </span>
      </div>

      {/* Title */}
      <h3
        id={`study-${study.id}-name`}
        className="font-heading font-bold text-2xl lg:text-4xl text-slate-900 tracking-tight mb-3"
      >
        {study.name}
      </h3>
      <p className="text-sm text-slate-500 italic mb-10 max-w-[600px]">
        Brand concept: {study.brandConcept}
      </p>

      {/* Blueprint Reveal — Desktop */}
      <div className="mb-8">
        <BlueprintReveal
          desktopImg={study.desktopImg}
          mobileImg={study.mobileImg}
          alt={`${study.name} — desktop website preview (concept project)`}
        />
      </div>

      {/* Mobile preview */}
      <div className="flex justify-center mb-12">
        <div className="w-[200px] lg:w-[240px] rounded-2xl border-[6px] border-slate-900 bg-slate-900 overflow-hidden shadow-xl">
          <div className="w-full h-2 bg-slate-900 flex items-center justify-center">
            <div className="w-12 h-1 bg-slate-700 rounded-full" />
          </div>
          <img
            src={study.mobileImg}
            alt={`${study.name} — mobile website preview (concept project)`}
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>

      {/* Narrative grid */}
      <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
        {/* Problem */}
        <div>
          <h4 className="font-mono text-[13px] text-slate-400 uppercase tracking-wider mb-3">
            The Problem
          </h4>
          <p className="text-slate-600 leading-relaxed">{study.problem}</p>
        </div>
        {/* Solution */}
        <div>
          <h4 className="font-mono text-[13px] text-slate-400 uppercase tracking-wider mb-3">
            The Approach
          </h4>
          <p className="text-slate-600 leading-relaxed">{study.solution}</p>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10 p-6 lg:p-8 bg-slate-50 border border-slate-100 rounded-md">
        <h4 className="font-mono text-[13px] text-blue-600 uppercase tracking-wider mb-5">
          Key Features
        </h4>
        <ul className="grid sm:grid-cols-2 gap-3">
          {study.features.map((feat) => (
            <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-700">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* Outcome */}
      <div className="mt-8">
        <h4 className="font-mono text-[13px] text-slate-400 uppercase tracking-wider mb-3">
          Projected Outcome
        </h4>
        <p className="text-slate-600 leading-relaxed">{study.outcome}</p>
      </div>

      {/* Tech stack tags */}
      <div className="mt-6 flex flex-wrap gap-2">
        {study.techStack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-[11px] px-2.5 py-1 bg-white border border-slate-200 text-slate-500 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
