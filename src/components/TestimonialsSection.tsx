"use client";

import AnimatedSection from "./AnimatedSection";

export default function CampaignSection() {
  return (
    <section id="campaign" className="relative py-28 md:py-36 bg-base-black overflow-hidden">
      {/* Background blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-150 rounded-full blur-[160px] pointer-events-none" style={{ background: "rgba(37,150,190,0.06)" }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3 text-center" style={{ color: "#2596be" }}>
            The Campaign
          </p>
        </AnimatedSection>
        <AnimatedSection delay={0.1}>
          <h2 className="text-outline font-display text-5xl md:text-7xl lg:text-8xl text-center font-black leading-tight tracking-tight mb-14">
            THE CAMPAIGN
          </h2>
        </AnimatedSection>

        {/* Video placeholder — light themed */}
        <AnimatedSection delay={0.2}>
          <div
            className="relative max-w-5xl mx-auto aspect-16/10 border border-gray-100 mb-12 group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-350"
            style={{ background: "linear-gradient(135deg, #e0f4f9 0%, #f5fbfd 40%, #dff2f8 80%, #f0fafe 100%)" }}
          >
            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div
                className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg"
                style={{ background: "#2596be" }}
              >
                <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
            {/* Duration badge */}
            <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/80 shadow-sm" style={{ color: "#2596be" }}>
              2:34
            </div>
            {/* Subtle watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <span className="font-display text-[10rem] font-black select-none" style={{ color: "rgba(37,150,190,0.05)" }}>
                LASSO
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Campaign photo grid — light placeholders */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5">
          {[
            { gradient: "linear-gradient(135deg, #e0f4f9 0%, #f5fbfd 100%)", label: "Street Culture", accent: "#2596be" },
            { gradient: "linear-gradient(135deg, #e8f7fb 0%, #f0fafe 100%)", label: "Movement & Sport", accent: "#1e8ab0" },
            { gradient: "linear-gradient(135deg, #dff2f8 0%, #eef8fc 100%)", label: "Urban Identity", accent: "#3ab0d4" },
          ].map((item, i) => (
            <AnimatedSection key={i} delay={0.1 * (i + 1)} animation="fade-up">
              <div
                className="relative aspect-16/10 overflow-hidden group rounded-xl shadow-sm hover:shadow-md border border-gray-100 transition-all duration-300"
                style={{ background: item.gradient }}
              >
                {/* Subtle transition on hover */}
                <div className="absolute inset-0 transition-opacity duration-350 opacity-0 group-hover:opacity-100 rounded-xl" style={{ background: `${item.accent}08` }} />
                {/* Photo label */}
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ background: item.accent }} />
                  <span className="text-xs font-medium" style={{ color: item.accent }}>{item.label}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
