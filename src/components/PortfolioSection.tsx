"use client";

import { useEffect, useRef, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { label: "Years", value: 10, suffix: "+" },
  { label: "Brands", value: 3, suffix: "" },
  { label: "Monthly Reach", value: 50, suffix: "K" },
  { label: "All Ages", value: 0, suffix: "", isText: true },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl text-gold">
      {count}
      {suffix}
    </span>
  );
}

export default function BrandStorySection() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-40 bg-base-black overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Image Side (parallax placeholder) ─────── */}
          <AnimatedSection animation="fade-right" className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  background:
                    "linear-gradient(135deg, #1a1510 0%, #111114 40%, #0d0d10 100%)",
                }}
              />
              {/* Gold frame accents */}
              <div className="absolute -top-3 -left-3 w-2/3 h-2/3 border border-gold/20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 border border-gold/20 pointer-events-none" />
            </div>
          </AnimatedSection>

          {/* ── Text Side ─────────────────────────────── */}
          <div>
            <AnimatedSection>
              <p className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-body mb-5">
                Our Story
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-off-white leading-tight italic">
                Born from the streets. Built for everywhere.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <p className="mt-6 text-base md:text-lg text-off-white/50 leading-relaxed max-w-lg">
                Lasso was born from a simple belief: style has no age, no boundary, no limit. 
                We curate the best of Nike, Puma, and Jordan — alongside our own originals — 
                to build a brand experience that speaks to every generation. Audience-first, 
                culture-driven, and built to last.
              </p>
            </AnimatedSection>

            {/* Pull quote */}
            <AnimatedSection delay={0.4}>
              <blockquote className="mt-10 pl-6 border-l-2 border-gold/50">
                <p className="font-serif text-xl md:text-2xl text-gold/80 italic leading-relaxed">
                  We don&apos;t sell products. We tell the stories that make them legendary.
                </p>
              </blockquote>
            </AnimatedSection>

            {/* Gold divider */}
            <AnimatedSection delay={0.5}>
              <div className="mt-10 h-px w-full bg-gradient-to-r from-gold/40 via-gold/20 to-transparent" />
            </AnimatedSection>

            {/* Stats row */}
            <AnimatedSection delay={0.6}>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    {stat.isText ? (
                      <span className="font-display text-4xl md:text-5xl text-gold">
                        ∞
                      </span>
                    ) : (
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    )}
                    <p className="text-off-white/40 text-xs tracking-[0.2em] uppercase mt-2 font-body">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
