"use client";

import { useCallback } from "react";
import AnimatedSection from "./AnimatedSection";

export default function FinalCTASection() {
  const handleRipple = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "ripple-effect";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    ripple.style.width = ripple.style.height = "20px";
    btn.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  }, []);

  return (
    <section
      className="relative py-40 md:py-56 flex items-center justify-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a7498 0%, #2596be 45%, #3ab0d4 80%, #1e8ab0 100%)" }}
    >
      {/* Soft light overlays — no black */}
      <div
        className="absolute inset-0 pointer-events-none animate-gradient bg-size-[400%_400%]"
        style={{ backgroundImage: "radial-gradient(ellipse at 25% 50%, rgba(255,255,255,0.12) 0%, transparent 55%), radial-gradient(ellipse at 75% 50%, rgba(46,230,166,0.15) 0%, transparent 55%)" }}
      />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[8rem] md:text-[14rem] lg:text-[20rem] text-white/5 font-black tracking-widest select-none leading-none">
          LASSO
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <AnimatedSection>
          <div className="h-1 w-16 rounded-full bg-white/40 mx-auto mb-12" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-black leading-tight tracking-tight">
            YOUR STYLE
            <br />
            STARTS HERE
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-6 font-body text-lg md:text-xl text-white/75 font-medium">
            Join the movement. Wear the culture.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Primary — white filled */}
            <button
              onClick={handleRipple}
              className="glass-hover ripple-btn group relative inline-flex items-center justify-center px-14 py-5 rounded-xl font-body text-sm md:text-base font-bold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl animate-glow-pulse bg-white"
              style={{ color: "#2596be" }}
            >
              <span className="relative z-10">Connect With Us</span>
              <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl bg-white/90" />
            </button>
            <a
              href="#about"
              className="glass-hover inline-flex items-center justify-center px-10 py-5 rounded-xl border-2 border-white/40 text-white/85 text-sm font-semibold tracking-wide hover:bg-white/12 hover:border-white/70 hover:text-white transition-all duration-300"
            >
              Learn More →
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <div className="h-1 w-16 rounded-full bg-white/40 mx-auto mt-12" />
        </AnimatedSection>
      </div>
    </section>
  );
}
