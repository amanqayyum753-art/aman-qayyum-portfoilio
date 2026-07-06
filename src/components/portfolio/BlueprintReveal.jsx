import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export default function BlueprintReveal({ desktopImg, mobileImg, alt }) {
  const containerRef = useRef(null);
  const prefersReduced = useReducedMotion();
  const [containerWidth, setContainerWidth] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // The scanning line moves from 15% to 100% as user scrolls through
  const clipPercent = useTransform(scrollYProgress, [0.1, 0.6], [15, 100]);
  const clipPath = useTransform(clipPercent, (v) => `inset(0 ${100 - v}% 0 0)`);
  const lineLeft = useTransform(clipPercent, (v) => `${v}%`);
  const labelOpacity = useTransform(clipPercent, [15, 40], [0, 1]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  if (prefersReduced) {
    // Reduced motion: simple side-by-side
    return (
      <div ref={containerRef} className="grid md:grid-cols-2 gap-4">
        <div className="relative rounded-md overflow-hidden border border-slate-200 bg-slate-100">
          <div className="absolute top-3 left-3 font-mono text-[11px] text-slate-400 bg-white/80 px-2 py-0.5 rounded">
            WIREFRAME
          </div>
          <img
            src={desktopImg}
            alt={`${alt} — wireframe view`}
            className="w-full h-auto grayscale brightness-125 contrast-75 opacity-40"
            loading="lazy"
          />
        </div>
        <div className="relative rounded-md overflow-hidden border border-slate-200">
          <div className="absolute top-3 left-3 font-mono text-[11px] text-blue-600 bg-white/80 px-2 py-0.5 rounded">
            FINAL BUILD
          </div>
          <img src={desktopImg} alt={`${alt} — final design`} className="w-full h-auto" loading="lazy" />
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative rounded-md overflow-hidden border border-slate-200 bg-slate-50">
      {/* Wireframe layer (base) — always visible behind */}
      <img
        src={desktopImg}
        alt=""
        aria-hidden="true"
        className="w-full h-auto grayscale brightness-125 contrast-75 opacity-30"
        loading="lazy"
      />

      {/* Rendered layer (clips from left) */}
      <motion.div
        className="absolute inset-0"
        style={{ clipPath }}
      >
        <img
          src={desktopImg}
          alt={alt}
          className="w-full h-auto"
          loading="lazy"
        />
      </motion.div>

      {/* Scanning line */}
      <motion.div
        className="absolute top-0 bottom-0 w-[2px] bg-blue-600 z-10"
        style={{ left: lineLeft }}
        aria-hidden="true"
      >
        <div className="absolute -top-1 -left-[5px] w-3 h-3 rounded-full bg-blue-600 border-2 border-white" />
        <div className="absolute -bottom-1 -left-[5px] w-3 h-3 rounded-full bg-blue-600 border-2 border-white" />
      </motion.div>

      {/* Labels */}
      <div className="absolute top-4 left-4 font-mono text-[11px] text-slate-400 bg-white/90 px-2 py-0.5 rounded">
        WIREFRAME
      </div>
      <motion.div
        className="absolute top-4 right-4 font-mono text-[11px] text-blue-600 bg-white/90 px-2 py-0.5 rounded"
        style={{ opacity: labelOpacity }}
      >
        FINAL BUILD
      </motion.div>
    </div>
  );
}
