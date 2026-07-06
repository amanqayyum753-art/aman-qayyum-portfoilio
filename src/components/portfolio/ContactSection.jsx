import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, ArrowLeft } from "lucide-react";

const industries = [
  "HVAC / Plumbing",
  "Dental / Medical",
  "Roofing / Exteriors",
  "Auto Repair",
  "Restaurant / Food",
  "Salon / Beauty",
  "Cleaning / Janitorial",
  "Other Home Services",
];

const problems = [
  "Slow or broken website",
  "Not showing up on Google",
  "No online booking or lead forms",
  "Site looks outdated or unprofessional",
  "Other",
];

export default function ContactSection() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    industry: "",
    biggest_problem: "",
    name: "",
    email: "",
    phone: "",
    business_name: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!formData.name || !formData.email) {
      setError("Please fill in your name and email.");
      return;
    }
    setError("");
    setSubmitting(true);
    try {
      // No backend server here — this is a standalone static build, so instead
      // of saving to a database, we open the visitor's email client with
      // everything pre-filled. This still gets the message to you directly.
      const subject = `New project inquiry from ${formData.name}`;
      const bodyLines = [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        formData.phone ? `Phone: ${formData.phone}` : null,
        formData.business_name ? `Business: ${formData.business_name}` : null,
        formData.industry ? `Industry: ${formData.industry}` : null,
        formData.biggest_problem ? `Biggest problem: ${formData.biggest_problem}` : null,
        formData.message ? `\nMessage:\n${formData.message}` : null,
      ].filter(Boolean);
      const mailtoUrl = `mailto:amanqayyum753@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
      window.location.href = mailtoUrl;
      setSubmitted(true);
    } catch (e) {
      setError("Something went wrong. Please email directly instead.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 lg:py-40">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div>
            <span className="font-mono text-[13px] text-blue-600 tracking-wide block mb-4">
              // 08 — start a project
            </span>
            <h2
              id="contact-heading"
              className="font-heading font-bold text-3xl lg:text-4xl text-slate-900 tracking-tight mb-6"
            >
              Tell me about your&nbsp;business.
            </h2>
            <p className="text-slate-500 leading-relaxed mb-8">
              Three quick questions so I can understand what you need. I'll reply
              within 24 hours with next steps and a ballpark scope — no pressure,
              no sales pitch.
            </p>

            {/* Alternative contact */}
            <div className="p-5 bg-slate-50 border border-slate-100 rounded-md">
              <p className="font-mono text-[13px] text-slate-400 uppercase tracking-wider mb-2">
                Prefer email?
              </p>
              <a
                href="mailto:amanqayyum753@gmail.com"
                className="text-blue-600 hover:text-blue-700 font-heading font-medium text-base focus-ring rounded-sm transition-colors"
              >
                amanqayyum753@gmail.com
              </a>
            </div>
          </div>

          {/* Right column — form */}
          <div className="bg-white border border-slate-200 rounded-md p-6 lg:p-8">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-12 text-center"
              >
                <CheckCircle size={40} className="text-emerald-500 mb-4" aria-hidden="true" />
                <h3 className="font-heading font-semibold text-xl text-slate-900 mb-2">
                  Message received.
                </h3>
                <p className="text-slate-500 max-w-[320px]">
                  I'll review your details and reply within 24 hours with a
                  clear next step.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Progress indicator */}
                <div className="flex items-center gap-2 mb-8" aria-label={`Step ${step} of 3`}>
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                        s <= step ? "bg-blue-600" : "bg-slate-200"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                  <span className="font-mono text-[11px] text-slate-400 ml-2">
                    {step}/3
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                        What's your industry?
                      </h3>
                      <p className="text-sm text-slate-500 mb-5">
                        This helps me tailor the conversation to your business.
                      </p>
                      <div className="grid grid-cols-2 gap-2.5" role="radiogroup" aria-label="Select your industry">
                        {industries.map((ind) => (
                          <button
                            key={ind}
                            type="button"
                            onClick={() => {
                              setFormData((p) => ({ ...p, industry: ind }));
                              setStep(2);
                            }}
                            className={`text-left text-sm px-4 py-3 border rounded-md transition-all duration-150 focus-ring ${
                              formData.industry === ind
                                ? "border-blue-600 bg-blue-50 text-blue-700"
                                : "border-slate-200 text-slate-700 hover:border-slate-400"
                            }`}
                            role="radio"
                            aria-checked={formData.industry === ind}
                          >
                            {ind}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 className="font-heading font-semibold text-lg text-slate-900 mb-2">
                        What's your biggest headache right now?
                      </h3>
                      <p className="text-sm text-slate-500 mb-5">
                        Pick the one that costs you the most business.
                      </p>
                      <div className="space-y-2.5" role="radiogroup" aria-label="Select your biggest problem">
                        {problems.map((prob) => (
                          <button
                            key={prob}
                            type="button"
                            onClick={() => {
                              setFormData((p) => ({ ...p, biggest_problem: prob }));
                              setStep(3);
                            }}
                            className={`w-full text-left text-sm px-4 py-3 border rounded-md transition-all duration-150 focus-ring ${
                              formData.biggest_problem === prob
                                ? "border-blue-600 bg-blue-50 text-blue-700"
                                : "border-slate-200 text-slate-700 hover:border-slate-400"
                            }`}
                            role="radio"
                            aria-checked={formData.biggest_problem === prob}
                          >
                            {prob}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => setStep(1)}
                        className="mt-4 flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors focus-ring rounded-sm"
                      >
                        <ArrowLeft size={14} /> Back
                      </button>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      <h3 className="font-heading font-semibold text-lg text-slate-900 mb-5">
                        How can I reach you?
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="contact-name" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Your name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData((p) => ({ ...p, name: e.target.value }))}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-[3px] focus:ring-blue-600/20 outline-none transition-all"
                            placeholder="Jane Smith"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-email" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Email address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-[3px] focus:ring-blue-600/20 outline-none transition-all"
                            placeholder="jane@business.com"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-business" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Business name
                          </label>
                          <input
                            id="contact-business"
                            type="text"
                            value={formData.business_name}
                            onChange={(e) => setFormData((p) => ({ ...p, business_name: e.target.value }))}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-[3px] focus:ring-blue-600/20 outline-none transition-all"
                            placeholder="Smith's HVAC"
                          />
                        </div>
                        <div>
                          <label htmlFor="contact-message" className="block text-sm font-medium text-slate-700 mb-1.5">
                            Anything else to share?
                          </label>
                          <textarea
                            id="contact-message"
                            value={formData.message}
                            onChange={(e) => setFormData((p) => ({ ...p, message: e.target.value }))}
                            rows={3}
                            className="w-full px-4 py-2.5 border border-slate-200 rounded-md text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:ring-[3px] focus:ring-blue-600/20 outline-none transition-all resize-none"
                            placeholder="Current site URL, timeline needs, budget range — whatever's helpful."
                          />
                        </div>

                        {error && (
                          <p className="text-sm text-red-600" role="alert">{error}</p>
                        )}

                        <button
                          type="button"
                          onClick={handleSubmit}
                          disabled={submitting}
                          className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-heading font-medium rounded-md hover:bg-blue-700 active:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-150 focus-ring text-base"
                        >
                          {submitting ? (
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          ) : (
                            <>
                              Send inquiry <Send size={16} />
                            </>
                          )}
                        </button>
                      </div>

                      <button
                        onClick={() => setStep(2)}
                        className="mt-4 flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-600 transition-colors focus-ring rounded-sm"
                      >
                        <ArrowLeft size={14} /> Back
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
