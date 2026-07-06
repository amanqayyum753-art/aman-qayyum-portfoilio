import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/images/hero-bg.jpg";

const HERO_BG = heroBg;

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative min-h-[100svh] flex flex-col justify-end pb-16 lg:pb-24 overflow-hidden"
    >
      {/* Background image — subtle, overlaid */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-[0.06]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-line pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="relative max-w-content mx-auto px-6 lg:px-8 w-full">
        {/* Technical annotation */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="font-mono text-[13px] text-slate-400 tracking-wide">
            // web design &amp; development for local businesses
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          id="hero-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading font-bold text-[clamp(2rem,5.5vw,4.5rem)] leading-[1.05] tracking-tight text-slate-900 max-w-[820px]"
        >
          I build websites that generate calls for service contractors who are done losing customers to slow,
          generic&nbsp;templates.
        </motion.h1>

        {/* Sub-text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-lg text-slate-500 max-w-[560px] leading-relaxed"
        >
          Hand-coded performance. SEO-first architecture. Zero monthly "platform"
          fees. Built for HVAC, dental, roofing, and home service operators who
          need a site that actually works as hard as they&nbsp;do.
        </motion.p>

        {/* CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-start gap-4"
        >
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3.5 bg-blue-600 text-white font-heading font-medium rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors duration-150 focus-ring text-base"
          >
            Start a project
          </a>
          <a
            href="#work"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-slate-200 text-slate-700 font-heading font-medium rounded-md hover:border-slate-400 hover:text-slate-900 transition-colors duration-150 focus-ring text-base bg-white/60"
          >
            See the work
          </a>
        </motion.div>

        {/* Metrics strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 lg:mt-24 flex flex-wrap gap-x-10 gap-y-4 border-t border-slate-100 pt-8"
        >
          {[
            { value: "<2s", label: "Avg. load time" },
            { value: "100", label: "Lighthouse score" },
            { value: "$0/mo", label: "Platform fees" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-2.5">
              <span className="font-mono text-2xl font-medium text-slate-900">
                {stat.value}
              </span>
              <span className="font-mono text-[13px] text-slate-400 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <ArrowDown size={18} className="text-slate-300 animate-bounce" />
      </motion.div>
    </section>
  );
}
