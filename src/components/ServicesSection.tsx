"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const brands = [
  {
    name: "NIKE",
    tagline: "Innovation that moves the world forward",
    placeholder: "linear-gradient(160deg, #e0f4f9 0%, #f5fbfd 50%, #dff2f8 100%)",
    accent: "#2596be",
    stat: "40+ Styles",
  },
  {
    name: "PUMA",
    tagline: "Forever faster. Forever fearless.",
    placeholder: "linear-gradient(160deg, #e8f7fb 0%, #f8fdff 50%, #e0f4f9 100%)",
    accent: "#1e8ab0",
    stat: "25+ Styles",
  },
  {
    name: "JORDAN",
    tagline: "A legacy forged in greatness",
    placeholder: "linear-gradient(160deg, #dff2f8 0%, #f0fafe 50%, #e5f6fc 100%)",
    accent: "#3ab0d4",
    stat: "30+ Styles",
  },
];

export default function BrandShowcaseSection() {
  return (
    <section id="brands" className="relative py-28 md:py-36 bg-base-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Partner Brands"
          title="Icons We Move With"
          description="We partner with the world's most iconic sportswear brands to bring you the best."
        />

        <div className="flex flex-col lg:flex-row gap-5 h-auto lg:h-125">
          {brands.map((brand, i) => (
            <AnimatedSection key={brand.name} delay={0.15 * i} animation="fade-up" className="flex-1">
              <div
                className="brand-panel group relative h-75 lg:h-full cursor-pointer border border-gray-100 hover:border-gold/40 overflow-hidden shadow-md hover:shadow-xl transition-all duration-400"
                style={{ background: brand.placeholder }}
              >
                {/* Watermark brand name */}
                <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
                  <span
                    className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-widest select-none transition-all duration-600"
                    style={{ color: `${brand.accent}12` }}
                  >
                    {brand.name}
                  </span>
                </div>

                {/* Stat badge */}
                <div
                  className="absolute top-5 right-5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide bg-white shadow-sm"
                  style={{ color: brand.accent, border: `1px solid ${brand.accent}30` }}
                >
                  {brand.stat}
                </div>

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="w-10 h-1 rounded-full mb-4" style={{ background: brand.accent }} />
                  <h3
                    className="font-display text-2xl md:text-3xl font-bold tracking-tight mb-2"
                    style={{ color: brand.accent }}
                  >
                    {brand.name}
                  </h3>
                  <div className="brand-text-reveal">
                    <p className="text-muted text-sm font-body leading-relaxed">
                      {brand.tagline}
                    </p>
                    <span
                      className="inline-flex items-center mt-3 text-xs font-bold tracking-wide"
                      style={{ color: brand.accent }}
                    >
                      Explore →
                    </span>
                  </div>
                </div>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                  style={{ background: `radial-gradient(ellipse at bottom, ${brand.accent}10 0%, transparent 65%)` }}
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
