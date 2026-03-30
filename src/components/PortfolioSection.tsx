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
    <span ref={ref} className="font-display text-4xl md:text-5xl font-extrabold" style={{ color: "#2596be" }}>
      {count}{suffix}
    </span>
  );
}

export default function BrandStorySection() {
  return (
    <section id="about" className="relative py-28 md:py-36 bg-base-black overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-1/4 right-0 w-125 h-125 rounded-full blur-[160px] pointer-events-none" style={{ background: "rgba(37,150,190,0.07)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Image placeholder — light themed ─────── */}
          <AnimatedSection animation="fade-right" className="relative">
            <div className="relative aspect-3/4 overflow-hidden rounded-2xl shadow-lg border border-gray-100">
              {/* Light teal gradient placeholder */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(160deg, #e0f4f9 0%, #f5fbfd 40%, #dff2f8 70%, #eaf6fb 100%)" }}
              />
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(37,150,190,0.12)" }}>
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="#2596be" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <p className="text-xs font-medium" style={{ color: "#2596be" }}>Brand Story</p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute top-5 left-5 px-3 py-1.5 rounded-full text-[11px] font-bold bg-white shadow-sm" style={{ color: "#2596be" }}>
                Est. 2014
              </div>
            </div>
            {/* Decorative outline box */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl border-2 pointer-events-none" style={{ borderColor: "rgba(37,150,190,0.2)" }} />
          </AnimatedSection>

          {/* ── Text side ─────────────────────────── */}
          <div>
            <AnimatedSection>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "#2596be" }}>
                Our Story
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] text-off-white font-extrabold leading-tight tracking-tight">
                Born from the streets. Built for everywhere.
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.25}>
              <p className="mt-5 text-base md:text-lg text-muted leading-relaxed max-w-lg">
                Lasso was born from a simple belief: style has no age, no boundary, no limit.
                We curate the best of Nike, Puma, and Jordan — alongside our own originals —
                to build a brand experience that speaks to every generation.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <blockquote className="mt-8 pl-5 border-l-4 rounded-sm" style={{ borderColor: "#2596be" }}>
                <p className="text-lg md:text-xl text-off-white font-medium leading-relaxed">&ldquo;We don&apos;t sell products. We tell the stories that make them legendary.&rdquo;</p>
              </blockquote>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="mt-8 h-px w-full bg-linear-to-r from-gold/25 via-blue/15 to-transparent" />
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    {stat.isText ? (
                      <span className="font-display text-4xl md:text-5xl font-extrabold" style={{ color: "#2596be" }}>∞</span>
                    ) : (
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    )}
                    <p className="text-muted text-xs tracking-[0.15em] uppercase mt-2 font-body font-medium">
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
