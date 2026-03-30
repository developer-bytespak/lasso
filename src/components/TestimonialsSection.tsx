"use client";

import AnimatedSection from "./AnimatedSection";

export default function CampaignSection() {
  return (
    <section
      id="campaign"
      className="relative py-32 md:py-40 bg-base-black overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Massive outlined heading */}
        <AnimatedSection>
          <h2 className="text-outline font-display text-5xl md:text-7xl lg:text-8xl text-center leading-[0.9] tracking-[0.05em] mb-16">
            THE CAMPAIGN
          </h2>
        </AnimatedSection>

        {/* Video embed placeholder */}
        <AnimatedSection delay={0.2}>
          <div className="relative max-w-5xl mx-auto aspect-video bg-charcoal border border-white/5 mb-16 group cursor-pointer overflow-hidden">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-40"
              style={{
                background:
                  "linear-gradient(135deg, #111114 0%, #1a1510 30%, #111114 60%, #0d0d10 100%)",
              }}
            />
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-gold/60 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold transition-all duration-500">
                <svg
                  className="w-8 h-8 text-gold ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Lifestyle image grid — 3 horizontal campaign photos */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-6">
          {[
            "linear-gradient(135deg, #1a1510 0%, #0d0d10 100%)",
            "linear-gradient(135deg, #111114 0%, #201515 100%)",
            "linear-gradient(135deg, #151a1a 0%, #111114 100%)",
          ].map((gradient, i) => (
            <AnimatedSection key={i} delay={0.1 * (i + 1)} animation="fade-up">
              <div className="relative aspect-[16/10] overflow-hidden group">
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: gradient }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base-black/40 to-transparent" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Diagonal clip-path transition element */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-charcoal"
        style={{
          clipPath: "polygon(0 60%, 100% 0, 100% 100%, 0 100%)",
        }}
      />
    </section>
  );
}
