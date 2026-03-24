"use client";

import { useState, useEffect, useCallback } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const testimonials = [
  {
    quote:
      "An absolutely transformative experience. My knotless braids were flawless and the attention to detail was incredible. I've never felt more confident.",
    name: "Sarah M.",
    service: "Knotless Braids",
    rating: 5,
  },
  {
    quote:
      "The most luxurious salon experience I've ever had. The atmosphere, the skill, the final result — everything was beyond my expectations.",
    name: "Amara J.",
    service: "Faux Locs",
    rating: 5,
  },
  {
    quote:
      "I've been to many stylists but none compare to the level of care and artistry here. My passion twists looked absolutely stunning.",
    name: "Destiny K.",
    service: "Passion Twist",
    rating: 5,
  },
  {
    quote:
      "From the consultation to the final result, every moment was thoughtful and professional. This is luxury hair styling at its finest.",
    name: "Nicole R.",
    service: "Boho Braids",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (fading) return;
      setFading(true);
      setTimeout(() => {
        setActive(index);
        setFading(false);
      }, 400);
    },
    [fading]
  );

  /* Auto-advance */
  useEffect(() => {
    const id = setInterval(() => {
      goTo((active + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, [active, goTo]);

  const t = testimonials[active];

  return (
    <section
      id="reviews"
      className="relative py-32 md:py-40 bg-deep-black overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="Client Stories"
          title="Words of Confidence"
          description="Hear from the incredible women who trusted us with their beauty journey."
        />

        {/* ── Testimonial Carousel ────────────────────── */}
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="relative text-center min-h-[280px] md:min-h-[260px] flex items-center justify-center">
              {/* Large decorative quote */}
              <span className="absolute top-0 left-1/2 -translate-x-1/2 font-serif text-[120px] md:text-[180px] text-gold/[0.06] leading-none select-none pointer-events-none">
                &ldquo;
              </span>

              <div
                className={`transition-all duration-500 ${
                  fading
                    ? "opacity-0 translate-y-4"
                    : "opacity-100 translate-y-0"
                }`}
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-gold text-sm">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="font-serif text-xl md:text-2xl lg:text-3xl text-cream/80 leading-relaxed italic px-4">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Divider */}
                <div className="mt-8 mx-auto w-10 h-px bg-gold/50" />

                {/* Author */}
                <div className="mt-6">
                  <p className="text-cream text-sm font-sans tracking-wider">
                    {t.name}
                  </p>
                  <p className="text-gold/60 text-xs tracking-[0.2em] uppercase mt-1">
                    {t.service}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`h-[2px] transition-all duration-500 ${
                  i === active
                    ? "w-8 bg-gold"
                    : "w-4 bg-cream/20 hover:bg-cream/40"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
