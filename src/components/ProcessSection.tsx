"use client";

import AnimatedSection from "./AnimatedSection";

const trendingItems = [
  { tag: "Trending Now", brand: "NIKE", name: "Air Max 270", placeholder: "linear-gradient(135deg, #e0f4f9 0%, #f5fbfd 100%)", accent: "#2596be" },
  { tag: "Top Picks", brand: "JORDAN", name: "1 High OG", placeholder: "linear-gradient(135deg, #e8f7fb 0%, #f0fafe 100%)", accent: "#1e8ab0" },
  { tag: "Editor's Choice", brand: "PUMA", name: "Suede Classic", placeholder: "linear-gradient(135deg, #dff2f8 0%, #eef8fc 100%)", accent: "#3ab0d4" },
  { tag: "New Arrival", brand: "LASSO", name: "Original Drop", placeholder: "linear-gradient(135deg, #e5f5fb 0%, #f8fdff 100%)", accent: "#2596be" },
  { tag: "Most Loved", brand: "NIKE", name: "React Infinity", placeholder: "linear-gradient(135deg, #e0f4f9 0%, #f0fafe 100%)", accent: "#1e8ab0" },
];

export default function TrendingScrollSection() {
  return (
    <section className="relative bg-charcoal overflow-hidden">
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 lg:pt-8 mb-10">
          <AnimatedSection>
            <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "#2596be" }}>
              What&apos;s Hot
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-3xl md:text-5xl lg:text-[3.5rem] text-off-white font-extrabold leading-tight tracking-tight">
              Trending Now
            </h2>
          </AnimatedSection>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 px-6 lg:px-8 lg:overflow-x-auto lg:pb-4 scrollbar-hide">
          {trendingItems.map((item) => (
            <div
              key={item.name}
              className="h-scroll-card shrink-0 w-full lg:w-105 xl:w-120 relative group cursor-pointer"
            >
              <div
                className="relative h-87.5 lg:h-[55vh] border border-gray-100 group-hover:border-gold/40 transition-all duration-350 overflow-hidden rounded-xl shadow-sm group-hover:shadow-lg"
                style={{ background: item.placeholder }}
              >
                {/* Tag pill */}
                <div
                  className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[10px] font-bold tracking-wide shadow-sm bg-white"
                  style={{ color: item.accent, border: `1px solid ${item.accent}30` }}
                >
                  {item.tag}
                </div>

                {/* Brand watermark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="font-display text-[5rem] lg:text-[7rem] font-black select-none"
                    style={{ color: `${item.accent}12` }}
                  >
                    {item.brand}
                  </span>
                </div>

                {/* Bottom content — light card footer */}
                <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-white/80 backdrop-blur-sm border-t border-gray-100">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: item.accent }}>
                    {item.brand}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl text-off-white font-bold mt-0.5 leading-tight">
                    {item.name}
                  </h3>
                  <p className="text-muted text-xs mt-1.5 font-medium group-hover:text-gold transition-colors duration-250">
                    Explore Collection →
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
