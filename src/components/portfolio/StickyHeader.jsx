import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export default function StickyHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_#E2E8F0]"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Primary navigation"
        className="max-w-content mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18"
      >
        {/* Logo */}
        <a
          href="#"
          className="font-heading font-bold text-lg tracking-tight text-slate-900 focus-ring rounded-sm"
          aria-label="Aman Qayyum — Home"
        >
          aman<span className="text-blue-600">.</span>qayyum
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-[13px] uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors duration-200 focus-ring rounded-sm"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-blue-600 text-white text-sm font-heading font-medium rounded-md hover:bg-blue-700 active:bg-blue-800 transition-colors duration-150 focus-ring"
          >
            Start a project
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-slate-900 focus-ring rounded-sm"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden fixed inset-0 top-16 bg-white z-40"
          role="dialog"
          aria-modal="true"
        >
          <ul className="flex flex-col items-start px-8 pt-8 gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading text-2xl font-semibold text-slate-900 hover:text-blue-600 transition-colors focus-ring rounded-sm"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-4 w-full">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="inline-flex items-center justify-center w-full px-6 py-3.5 bg-blue-600 text-white text-base font-heading font-medium rounded-md hover:bg-blue-700 transition-colors focus-ring"
              >
                Start a project
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
