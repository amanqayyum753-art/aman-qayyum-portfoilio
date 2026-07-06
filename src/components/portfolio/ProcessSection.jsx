import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Inquiry & Discovery",
    duration: "Day 1 – 3",
    description:
      "You fill out the project form. I reply within 24 hours with a few questions about your business, your customers, and what's not working with your current site. This is a conversation, not a sales pitch — if I'm not the right fit, I'll tell you.",
    deliverable: "A clear scope document with exactly what I'll build, for exactly what price, on exactly what timeline.",
  },
  {
    number: "02",
    title: "Design & Content",
    duration: "Week 1 – 2",
    description:
      "I create wireframes showing the structure of every page, then a full visual design in your brand colors with real copy — not placeholder text. You review, give feedback, and we revise until you're satisfied. Nothing gets coded until you approve the design.",
    deliverable: "Complete page designs (desktop + mobile) for your sign-off, plus all written content.",
  },
  {
    number: "03",
    title: "Development & Testing",
    duration: "Week 2 – 3",
    description:
      "The approved design gets hand-coded into a fast, search-engine-friendly site. I test across Chrome, Safari, Firefox, and Edge on both desktop and mobile. Every form, every link, and every page gets checked before you see it.",
    deliverable: "A staging link where you can click through the entire site on your own phone and computer.",
  },
  {
    number: "04",
    title: "Revisions & Refinement",
    duration: "Week 3 – 4",
    description:
      "You review the staging site and send back a list of changes. Text edits, color tweaks, layout adjustments — this is your chance to fine-tune. Two rounds of revisions are built into every project, and most clients only need one.",
    deliverable: "A revised site with all your requested changes applied and re-tested.",
  },
  {
    number: "05",
    title: "Launch & Handoff",
    duration: "Week 4",
    description:
      "I connect your domain, set up Google Analytics and Search Console, submit your sitemap to Google, and run a final speed and SEO audit. You get a plain-English guide covering how to request future updates. The site is yours — the code, the design, everything.",
    deliverable: "Your live website, analytics dashboards, and a documentation guide for ongoing management.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" aria-labelledby="process-heading" className="py-24 lg:py-40">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="font-mono text-[13px] text-blue-600 tracking-wide block mb-4">
            // 03 — process
          </span>
          <h2
            id="process-heading"
            className="font-heading font-bold text-3xl lg:text-5xl text-slate-900 tracking-tight max-w-[600px]"
          >
            From first message to live&nbsp;site in four&nbsp;weeks.
          </h2>
          <p className="mt-6 text-slate-500 max-w-[520px] leading-relaxed">
            No disappearing acts, no scope creep, no surprises. Here's exactly
            what happens after you reach out.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[19px] lg:left-[23px] top-0 bottom-0 w-px bg-slate-200"
            aria-hidden="true"
          />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative pl-14 lg:pl-16"
              >
                {/* Step number circle */}
                <div
                  className="absolute left-0 top-0 w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-mono text-sm font-medium z-10"
                  aria-hidden="true"
                >
                  {step.number}
                </div>

                <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-4 mb-2">
                  <h3 className="font-heading font-semibold text-xl text-slate-900">
                    {step.title}
                  </h3>
                  <span className="font-mono text-[13px] text-blue-600 tracking-wide">
                    {step.duration}
                  </span>
                </div>
                <p className="text-slate-500 leading-relaxed mb-4 max-w-[640px]">
                  {step.description}
                </p>
                <div className="inline-flex items-start gap-2 text-sm text-slate-700 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-md">
                  <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mt-0.5">
                    Deliverable:
                  </span>
                  <span>{step.deliverable}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
