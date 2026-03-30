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
    <section className="relative h-screen flex items-center justify-center bg-base-black overflow-hidden">
      {/* Animated noise / particle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03] animate-gradient bg-[length:400%_400%]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C8A96E 0%, transparent 50%), radial-gradient(circle at 80% 50%, #C8A96E 0%, transparent 50%)",
          }}
        />
      </div>

      {/* Oversized watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display text-[8rem] md:text-[14rem] lg:text-[20rem] text-off-white/[0.02] tracking-[0.1em] select-none leading-none">
          LASSO
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* Top gold line */}
        <AnimatedSection>
          <div className="h-px w-24 bg-gold mx-auto mb-12" />
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-off-white leading-[0.95] tracking-[0.04em]">
            YOUR STYLE
            <br />
            STARTS HERE
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-8 font-serif text-xl md:text-2xl text-off-white/50 italic">
            Join the movement. Wear the culture.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <div className="mt-12">
            <button
              onClick={handleRipple}
              className="ripple-btn group relative inline-flex items-center justify-center px-14 py-5 bg-gold text-base-black font-body text-sm md:text-base tracking-[0.2em] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/30 animate-glow-pulse"
            >
              <span className="relative z-10">Connect With Us</span>
              <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </div>
        </AnimatedSection>

        {/* Bottom gold line */}
        <AnimatedSection delay={0.6}>
          <div className="h-px w-24 bg-gold mx-auto mt-12" />
        </AnimatedSection>
      </div>
    </section>
  );
}
