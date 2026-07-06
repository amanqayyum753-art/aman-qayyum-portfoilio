import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer role="contentinfo" className="border-t border-slate-100 py-10 lg:py-14">
      <div className="max-w-content mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          {/* Logo */}
          <div>
            <a
              href="#"
              className="font-heading font-bold text-lg tracking-tight text-slate-900 focus-ring rounded-sm"
              aria-label="Aman Qayyum — Back to top"
            >
              aman<span className="text-blue-600">.</span>qayyum
            </a>
            <p className="text-sm text-slate-400 mt-1">
              Custom web design for local service businesses.
            </p>
          </div>

          {/* Links */}
          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-6">
            <a
              href="#work"
              className="font-mono text-[12px] uppercase tracking-wider text-slate-400 hover:text-slate-700 transition-colors focus-ring rounded-sm"
            >
              Work
            </a>
            <a
              href="#services"
              className="font-mono text-[12px] uppercase tracking-wider text-slate-400 hover:text-slate-700 transition-colors focus-ring rounded-sm"
            >
              Services
            </a>
            <a
              href="#contact"
              className="font-mono text-[12px] uppercase tracking-wider text-slate-400 hover:text-slate-700 transition-colors focus-ring rounded-sm"
            >
              Contact
            </a>
            <a
              href="mailto:amanqayyum753@gmail.com"
              className="font-mono text-[12px] uppercase tracking-wider text-slate-400 hover:text-slate-700 transition-colors focus-ring rounded-sm"
            >
              Email
            </a>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[11px] text-slate-400">
            © {year} Aman Qayyum. All rights reserved.
          </p>
          <p className="font-mono text-[11px] text-slate-300">
            Hand-coded. No templates. No page builders.
          </p>
        </div>
      </div>
    </footer>
  );
}
