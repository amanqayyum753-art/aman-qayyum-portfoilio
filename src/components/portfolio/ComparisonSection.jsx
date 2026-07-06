import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  {
    metric: "Page load time",
    template: "8 – 16 seconds",
    custom: "Under 2 seconds",
  },
  {
    metric: "Google Lighthouse score",
    template: "30 – 60 / 100",
    custom: "90 – 100 / 100",
  },
  {
    metric: "Monthly platform fee",
    template: "$14 – $45/month, forever",
    custom: "$0 — you own the code",
  },
  {
    metric: "Mobile experience",
    template: "Responsive template (same layout, smaller)",
    custom: "Mobile-first (designed for thumb navigation)",
  },
  {
    metric: "SEO structure",
    template: "Generic meta tags, no schema markup",
    custom: "Per-page keyword targeting + structured data",
  },
  {
    metric: "Customization",
    template: "Limited to template drag-and-drop options",
    custom: "Every pixel, every interaction, no limits",
  },
  {
    metric: "Code ownership",
    template: "Locked to their platform",
    custom: "You own everything, host anywhere",
  },
  {
    metric: "Long-term cost (3 years)",
    template: "$500 – $1,600+ in platform fees alone",
    custom: "$0 in platform fees after one-time build",
  },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" aria-labelledby="comparison-heading" className="py-24 lg:py-40">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 lg:mb-24">
          <span className="font-mono text-[13px] text-blue-600 tracking-wide block mb-4">
            // 05 — the performance audit
          </span>
          <h2
            id="comparison-heading"
            className="font-heading font-bold text-3xl lg:text-5xl text-slate-900 tracking-tight max-w-[650px]"
          >
            Template builder vs. custom&nbsp;build — the numbers.
          </h2>
          <p className="mt-6 text-slate-500 max-w-[520px] leading-relaxed">
            This isn't an opinion. These are measurable differences between
            a drag-and-drop website builder and a hand-coded site built for
            search engines and mobile&nbsp;users.
          </p>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="border border-slate-200 rounded-md overflow-hidden"
          role="table"
          aria-label="Custom build vs template comparison"
        >
          {/* Header row */}
          <div className="grid grid-cols-3 bg-slate-900 text-white" role="row">
            <div className="p-4 lg:p-5 font-mono text-[13px] uppercase tracking-wider" role="columnheader">
              Metric
            </div>
            <div className="p-4 lg:p-5 font-mono text-[13px] uppercase tracking-wider text-slate-400 border-l border-slate-700" role="columnheader">
              Template Builder
            </div>
            <div className="p-4 lg:p-5 font-mono text-[13px] uppercase tracking-wider text-blue-400 border-l border-slate-700" role="columnheader">
              Custom Build
            </div>
          </div>

          {/* Data rows */}
          {rows.map((row, i) => (
            <div
              key={row.metric}
              className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} border-t border-slate-100`}
              role="row"
            >
              <div className="p-4 lg:p-5 font-heading font-medium text-sm text-slate-900" role="cell">
                {row.metric}
              </div>
              <div className="p-4 lg:p-5 text-sm text-slate-500 border-l border-slate-100 flex items-start gap-2" role="cell">
                <X size={14} className="mt-0.5 text-red-400 flex-shrink-0" aria-hidden="true" />
                <span>{row.template}</span>
              </div>
              <div className="p-4 lg:p-5 text-sm text-slate-700 border-l border-slate-100 flex items-start gap-2" role="cell">
                <Check size={14} className="mt-0.5 text-blue-600 flex-shrink-0" aria-hidden="true" />
                <span>{row.custom}</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom annotation */}
        <div className="mt-6 flex items-start gap-2">
          <span className="font-mono text-[11px] text-slate-400 mt-0.5">NOTE:</span>
          <p className="font-mono text-[12px] text-slate-400 leading-relaxed max-w-[600px]">
            Template builder metrics based on publicly available Lighthouse audits of
            sites built with Wix, Squarespace, and GoDaddy Website Builder. Custom build
            metrics reflect targets for sites built using this process.
          </p>
        </div>
      </div>
    </section>
  );
}
