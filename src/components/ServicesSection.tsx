"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const brands = [
  {
    name: "NIKE",
    tagline: "Innovation that moves the world forward",
    gradient: "linear-gradient(135deg, #0d0d0d 0%, #1a1510 50%, #111114 100%)",
  },
  {
    name: "PUMA",
    tagline: "Forever faster. Forever fearless.",
    gradient: "linear-gradient(135deg, #111114 0%, #161618 50%, #111114 100%)",
  },
  {
    name: "JORDAN",
    tagline: "A legacy forged in greatness",
    gradient: "linear-gradient(135deg, #150d0d 0%, #1a1114 50%, #111114 100%)",
  },
];

export default function BrandShowcaseSection() {
  return (
    <section
      id="brands"
      className="relative py-32 md:py-40 bg-charcoal overflow-hidden"
    >
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px gold-line" />
      <div className="absolute bottom-0 left-0 w-full h-px gold-line" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Partner Brands"
          title="Icons We Move With"
        />

        {/* Brand panels */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 h-auto lg:h-[500px]">
          {brands.map((brand, i) => (
            <AnimatedSection
              key={brand.name}
              delay={0.2 * i}
              animation="fade-up"
              className="flex-1"
            >
              <div
                className="brand-panel group relative h-[300px] lg:h-full cursor-pointer border border-white/5 hover:border-gold/20"
                style={{ background: brand.gradient }}
              >
                {/* Massive brand name */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                  <span className="font-display text-5xl md:text-7xl lg:text-8xl text-off-white/[0.04] tracking-[0.1em] select-none group-hover:text-off-white/[0.08] transition-all duration-700">
                    {brand.name}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="font-display text-2xl md:text-3xl text-off-white tracking-[0.15em] mb-2">
                    {brand.name}
                  </h3>
                  <div className="brand-text-reveal">
                    <p className="text-off-white/50 text-sm font-body mb-3">
                      {brand.tagline}
                    </p>
                    <div className="w-12 h-px bg-gold" />
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-gold/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
