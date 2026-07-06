import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How much does a website cost?",
    a: "Most projects fall between $2,500 and $4,500, depending on the number of pages and complexity. A standard 5–6 page service business site is typically around $3,000. You'll get a specific, fixed quote before any work starts — never a vague estimate that balloons later.",
  },
  {
    q: "How long does it take from start to finish?",
    a: "Most sites launch within 3–4 weeks from our first conversation. The biggest variable is how quickly you can provide content and feedback. I've launched sites in two weeks when clients were responsive, and I'll always give you a realistic timeline up front.",
  },
  {
    q: "What if I need changes after the site launches?",
    a: "Your project includes 30 days of post-launch support for tweaks and adjustments at no extra cost. After that, I'm available for updates at an hourly rate. You also get a simple documentation guide so you can make basic text and image updates yourself.",
  },
  {
    q: "Do I need to know anything technical?",
    a: "No. I handle everything — design, development, SEO setup, hosting configuration, and analytics. You just need to tell me about your business and your customers. If you can send an email, you have all the technical skill required.",
  },
  {
    q: "Do I own the website and the code?",
    a: "Yes, 100%. Once the project is complete, you own the design, the code, and all content. There are no licensing fees, no monthly platform costs, and no lock-in. You can host it anywhere and hire anyone to work on it in the future.",
  },
  {
    q: "What about hosting? Where does the site live?",
    a: "I'll help you set up hosting on a reliable provider. Typical cost is $5–$15 per month — far less than the $20–$45/month website builders charge, and you get better performance. I'll walk you through the setup and make sure everything's connected properly.",
  },
  {
    q: "Can you redesign my existing website instead of building from scratch?",
    a: "Absolutely. If your current site has content worth keeping, we can restructure and redesign it rather than starting from zero. I'll audit what's working and what isn't, and we'll decide together what to keep and what to rebuild.",
  },
  {
    q: "What if I'm not happy with the design?",
    a: "You see and approve the complete design before a single line of code is written. Every project includes two rounds of revisions on the design phase and two on the development phase. If the direction isn't right, we course-correct before building — not after.",
  },
  {
    q: "Why shouldn't I just use Wix or Squarespace?",
    a: "Those tools work fine for personal blogs or hobby projects. For a service business that depends on local search traffic and phone leads, they have real limitations: slower load times (which Google penalizes), generic SEO structures, and monthly fees that add up to $500–$1,600+ over three years. A custom build costs more up front but performs better and costs nothing per month.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="py-24 lg:py-40 bg-slate-50 border-y border-slate-100">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          {/* Left header */}
          <div>
            <span className="font-mono text-[13px] text-blue-600 tracking-wide block mb-4">
              // 07 — faq
            </span>
            <h2
              id="faq-heading"
              className="font-heading font-bold text-3xl lg:text-4xl text-slate-900 tracking-tight mb-6"
            >
              Questions you probably&nbsp;have.
            </h2>
            <p className="text-slate-500 leading-relaxed">
              If yours isn't here, ask it directly — I reply within 24 hours.
            </p>
          </div>

          {/* Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`faq-${i}`}
                  className="bg-white border border-slate-200 rounded-md px-5 lg:px-6 data-[state=open]:border-slate-300"
                >
                  <AccordionTrigger className="text-left font-heading font-medium text-[15px] text-slate-900 py-4 hover:no-underline focus-ring rounded-sm">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-500 text-[15px] leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
