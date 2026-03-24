"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const highlights = [
  {
    number: "01",
    title: "Expert Stylists",
    description:
      "Our team brings years of experience and passion for creating looks that define your unique style.",
  },
  {
    number: "02",
    title: "Personalized Approach",
    description:
      "Every consultation is tailored to understand your vision and deliver a result that exceeds expectations.",
  },
  {
    number: "03",
    title: "Premium Quality",
    description:
      "We use only the finest products and techniques, ensuring your hair is treated with the care it deserves.",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-32 md:py-40 bg-deep-black overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* ── Image Side ────────────────────────────── */}
          <AnimatedSection animation="fade-right" className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <img
                src="/content/Image-1.png"
                alt="About Elush Beauty Bar"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Gold frame accents */}
              <div className="absolute -top-3 -left-3 w-2/3 h-2/3 border border-gold/20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-2/3 h-2/3 border border-gold/20 pointer-events-none" />
            </div>
            {/* Experience badge */}
            <div className="absolute -bottom-6 right-4 md:right-8 bg-gold text-deep-black px-8 py-6 text-center z-10">
              <span className="block font-serif text-3xl md:text-4xl">10+</span>
              <span className="block text-xs tracking-[0.2em] uppercase mt-1">
                Years Experience
              </span>
            </div>
          </AnimatedSection>

          {/* ── Text Side ─────────────────────────────── */}
          <div>
            <SectionHeading
              subtitle="About Us"
              title="Crafting Confidence Through Style"
              description="We believe every client deserves a transformative experience. Our salon blends modern techniques with timeless artistry to create styles that make you feel extraordinary."
              align="left"
            />

            <div className="space-y-8 mt-4">
              {highlights.map((item, i) => (
                <AnimatedSection key={item.number} delay={0.15 * (i + 1)}>
                  <div className="flex gap-6 group">
                    <span className="text-gold/40 font-serif text-2xl group-hover:text-gold transition-colors duration-500 flex-shrink-0">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-cream mb-2">
                        {item.title}
                      </h3>
                      <p className="text-cream/40 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
