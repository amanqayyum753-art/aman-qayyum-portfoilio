import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function AvailabilitySection() {
  const currentMonth = new Date().toLocaleString("en-US", { month: "long" });
  const currentYear = new Date().getFullYear();

  return (
    <section aria-labelledby="availability-heading" className="py-24 lg:py-32 bg-slate-900 text-white">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-[640px] mx-auto"
        >
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" aria-hidden="true" />
            <span className="font-mono text-[13px] text-emerald-400 uppercase tracking-wider">
              Currently accepting projects
            </span>
          </div>

          <h2
            id="availability-heading"
            className="font-heading font-bold text-3xl lg:text-4xl tracking-tight mb-6"
          >
            Taking on two new projects per&nbsp;month.
          </h2>

          <p className="text-slate-400 leading-relaxed mb-8">
            Each site gets my full attention for 3–4 weeks, which means I limit
            my workload to two concurrent builds. If you're planning a project
            for the coming weeks, reach out now to secure a spot in the queue.
          </p>

          <div className="inline-flex items-center gap-3 bg-slate-800 border border-slate-700 rounded-md px-5 py-3 mb-10">
            <Calendar size={16} className="text-blue-400" aria-hidden="true" />
            <span className="font-mono text-sm text-slate-300">
              {currentMonth} {currentYear} — 1 spot remaining
            </span>
          </div>

          <div>
            <a
              href="#contact"
              className="inline-flex items-center px-7 py-3.5 bg-blue-600 text-white font-heading font-medium rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors duration-150 focus-ring text-base"
            >
              Claim your spot
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
