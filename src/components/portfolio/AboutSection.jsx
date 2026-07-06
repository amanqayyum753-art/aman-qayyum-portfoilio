import React from "react";
import { motion } from "framer-motion";
import processImg from "@/assets/images/process-diagram.jpg";

const PROCESS_IMG = processImg;

export default function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 lg:py-40 bg-slate-50 border-y border-slate-100">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-2 lg:order-1"
          >
            <div className="rounded-md overflow-hidden border border-slate-200">
              <img
                src={PROCESS_IMG}
                alt="Architectural glass corner of a modern building — representing precision engineering and structural integrity in web design"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2"
          >
            <span className="font-mono text-[13px] text-blue-600 tracking-wide block mb-4">
              // 04 — about
            </span>
            <h2
              id="about-heading"
              className="font-heading font-bold text-3xl lg:text-4xl text-slate-900 tracking-tight mb-8"
            >
              Your customers judge your business by your&nbsp;website.
            </h2>

            <div className="space-y-5 text-slate-500 leading-relaxed">
              <p>
                When a homeowner Googles "plumber near me" and lands on two
                sites — one loads in 2 seconds with a clear "Call Now" button,
                the other takes 12 seconds and has a stock photo of a wrench —
                you already know which one gets the call.
              </p>
              <p>
                I build the first kind. Every site I produce is hand-coded,
                meaning there's no page-builder bloat slowing it down, no
                monthly "platform" fee eating into your margins, and no locked-in
                ecosystem you can't leave. You own the code, the design, and the
                domain outright.
              </p>
              <p>
                Template sites sell you a layout. I build you a system — one
                that's architected from the ground up around how your specific
                customers search, what questions they have, and what makes them
                pick up the phone or fill out a form. That's the difference
                between a website and a lead-generation tool.
              </p>
            </div>

            {/* Technical callouts */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { metric: "100%", label: "Code ownership" },
                { metric: "$0/mo", label: "Platform fees" },
                { metric: "<2s", label: "Load time target" },
                { metric: "4 wks", label: "Avg. delivery" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-slate-200 rounded-md px-4 py-3"
                >
                  <div className="font-mono text-xl font-medium text-slate-900">
                    {stat.metric}
                  </div>
                  <div className="font-mono text-[11px] text-slate-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
