"use client";

import AnimatedSection from "./AnimatedSection";

const trendingItems = [
  { tag: "Trending Now", brand: "NIKE", name: "Air Max 270", gradient: "linear-gradient(135deg, #2a2010 0%, #181818 100%)" },
  { tag: "Top Picks", brand: "JORDAN", name: "1 High OG", gradient: "linear-gradient(135deg, #301818 0%, #181818 100%)" },
  { tag: "Editor's Choice", brand: "PUMA", name: "Suede Classic", gradient: "linear-gradient(135deg, #182a2a 0%, #181818 100%)" },
  { tag: "New Arrival", brand: "LASSO", name: "Original Drop", gradient: "linear-gradient(135deg, #222230 0%, #181818 100%)" },
  { tag: "Most Loved", brand: "NIKE", name: "React Infinity", gradient: "linear-gradient(135deg, #2a1820 0%, #181818 100%)" },
];

export default function TrendingScrollSection() {
  return (
    <section
      className="relative bg-charcoal overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px gold-line" />

      <div className="py-20">
        {/* Title */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 lg:pt-8 mb-10">
          <AnimatedSection>
            <p className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-body mb-5">
              What&apos;s Hot
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-off-white leading-tight">
              Trending Now
            </h2>
          </AnimatedSection>
        </div>

        {/* Cards — horizontal on desktop, vertical on mobile */}
        <div
          className="flex flex-col lg:flex-row gap-6 px-6 lg:px-8 lg:gap-8 lg:overflow-x-auto lg:pb-6 scrollbar-hide"
        >
          {trendingItems.map((item) => (
            <div
              key={item.name}
              className="h-scroll-card flex-shrink-0 w-full lg:w-[420px] xl:w-[480px] relative group cursor-pointer"
            >
              <div
                className="relative h-[350px] lg:h-[55vh] border border-white/10 group-hover:border-gold/30 transition-all duration-500 overflow-hidden rounded-sm"
                style={{ background: item.gradient }}
              >
                {/* Tag */}
                <div className="absolute top-4 left-4 z-10 bg-gold px-3 py-1">
                  <span className="font-display text-xs text-base-black tracking-[0.15em] font-bold">
                    {item.tag}
                  </span>
                </div>

                {/* Shoe silhouette placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-[6rem] lg:text-[8rem] text-white/[0.03] select-none">
                    {item.brand}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-base-black/90 via-base-black/50 to-transparent">
                  <span className="font-display text-sm text-gold tracking-[0.15em]">
                    {item.brand}
                  </span>
                  <h3 className="font-condensed text-2xl md:text-3xl text-off-white font-bold mt-1">
                    {item.name}
                  </h3>
                  <p className="text-off-white/40 text-sm mt-2 font-body">Explore Collection &rarr;</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px gold-line" />
    </section>
  );
}
