import React from "react";
import { motion } from "framer-motion";
import { Code, Search, Gauge, Wrench } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Custom Website Design & Build",
    description:
      "A website built from scratch for your specific business — not a template with your logo swapped in. You get a site designed around how your customers actually find and contact you, with every page structured to rank in local search results.",
    includes: [
      "Custom responsive design (mobile, tablet, desktop)",
      "Up to 8 pages tailored to your services and service area",
      "Contact and lead capture forms that deliver to your inbox",
      "Content written for your industry and location",
      "Browser-tested across Chrome, Safari, Firefox, and Edge",
    ],
    price: "$2,500 – $4,500",
  },
  {
    icon: Search,
    title: "Local SEO Foundation",
    description:
      "Your site is built so Google understands exactly what you do and where you do it. This isn't a monthly retainer for vague 'SEO services' — it's the structural work baked into the build itself.",
    includes: [
      "Title tags, meta descriptions, and heading hierarchy per page",
      "Schema markup (LocalBusiness, Service, FAQ)",
      "Google Business Profile optimization guidance",
      "Service-area pages targeting your specific ZIP codes",
      "Image optimization and proper alt text throughout",
    ],
    price: "Included in every build",
  },
  {
    icon: Gauge,
    title: "Performance Engineering",
    description:
      "Every site ships with a sub-2-second load time and a 90+ Google Lighthouse score. No bloated page builders, no render-blocking scripts, no mystery slowdowns six months later.",
    includes: [
      "Hand-optimized, minimal code — no page builder overhead",
      "Image compression and lazy loading",
      "Core Web Vitals optimization (LCP, FID, CLS)",
      "Mobile-first architecture for 60%+ mobile traffic",
      "No monthly platform fees — you own the code",
    ],
    price: "Included in every build",
  },
  {
    icon: Wrench,
    title: "Post-Launch Support",
    description:
      "After your site goes live, you're not left guessing. I provide 30 days of included support for tweaks and adjustments, plus clear documentation so you or anyone else can make text and image updates without calling a developer.",
    includes: [
      "30 days of post-launch revisions",
      "Plain-language update documentation",
      "Hosting setup guidance (typical cost: $5–$15/month)",
      "Analytics installation (Google Analytics, Search Console)",
      "Priority booking for future updates at hourly rates",
    ],
    price: "Included in every build",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-24 lg:py-40 bg-slate-50 border-y border-slate-100">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 lg:mb-24">
          <span className="font-mono text-[13px] text-blue-600 tracking-wide block mb-4">
            // 02 — services
          </span>
          <h2
            id="services-heading"
            className="font-heading font-bold text-3xl lg:text-5xl text-slate-900 tracking-tight max-w-[650px]"
          >
            What you get — and what it actually&nbsp;costs.
          </h2>
          <p className="mt-6 text-slate-500 max-w-[520px] leading-relaxed">
            No hidden fees, no monthly "platform" charges, no surprise invoices.
            You pay once for the build. You own everything.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="bg-white border border-slate-200 rounded-md p-6 lg:p-8 flex flex-col"
            >
              {/* Icon */}
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-slate-900 text-white mb-5">
                <service.icon size={18} strokeWidth={1.5} aria-hidden="true" />
              </div>

              <h3 className="font-heading font-semibold text-xl text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Includes */}
              <ul className="space-y-2.5 mb-6 flex-1" aria-label={`${service.title} includes`}>
                {service.includes.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-blue-600 flex-shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Price annotation */}
              <div className="pt-5 border-t border-slate-100">
                <span className="font-mono text-sm text-slate-900 font-medium">
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
