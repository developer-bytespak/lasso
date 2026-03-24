"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const styles = [
  { name: "Knotless Braids", category: "Braids" },
  { name: "Faux Locs", category: "Locs" },
  { name: "Passion Twist", category: "Twists" },
  { name: "Boho Braids", category: "Braids" },
  { name: "Marley Twist", category: "Twists" },
  { name: "Goddess Locs", category: "Locs" },
  { name: "Box Braids", category: "Braids" },
  { name: "Senegalese Twist", category: "Twists" },
];

/* Warm gradient placeholders — replace divs with real <img> later */
const gradients = [
  "linear-gradient(135deg, #2a1f1a 0%, #1a1510 50%, #2a2015 100%)",
  "linear-gradient(135deg, #1a1520 0%, #251520 50%, #1a1015 100%)",
  "linear-gradient(135deg, #201a15 0%, #151010 50%, #201510 100%)",
  "linear-gradient(135deg, #1a1a20 0%, #151520 50%, #20151a 100%)",
  "linear-gradient(135deg, #201515 0%, #1a1510 50%, #251a15 100%)",
  "linear-gradient(135deg, #151a1a 0%, #101515 50%, #1a2020 100%)",
  "linear-gradient(135deg, #1a1015 0%, #201520 50%, #15101a 100%)",
  "linear-gradient(135deg, #151010 0%, #1a1515 50%, #201a1a 100%)",
];

/*
  Grid layout pattern (4 cols on lg):
  [0: span-2 × row-2]  [1]  [2]
                        [3]  [4]  ← 4 overflows to new row
  [5]  [6: span-2 × row-2]  [7]  ← but we just let it auto-flow
*/
const sizeClasses: Record<number, string> = {
  0: "col-span-2 row-span-2",
  5: "col-span-2 row-span-2",
};

export default function PortfolioSection() {
  return (
    <section
      id="styles"
      className="relative py-32 md:py-40 bg-deep-black overflow-hidden"
    >
      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gold/[0.02] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="Our Portfolio"
          title="Signature Styles"
          description="Explore our collection of handcrafted styles — each one a testament to artistry, precision, and the celebration of natural beauty."
        />

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] lg:auto-rows-[240px] gap-3 md:gap-4">
          {styles.map((style, i) => (
            <AnimatedSection
              key={style.name}
              delay={0.08 * i}
              animation="fade-scale"
              className={sizeClasses[i] ?? ""}
            >
              <div className="portfolio-card group cursor-pointer w-full h-full">
                {/* Image placeholder */}
                <div
                  className="card-image absolute inset-0"
                  style={{ background: gradients[i] }}
                />

                {/* Overlay */}
                <div className="card-overlay" />

                {/* Hover content */}
                <div className="card-content">
                  <span className="text-gold text-xs tracking-[0.2em] uppercase">
                    {style.category}
                  </span>
                  <h3 className="font-serif text-lg md:text-2xl text-cream mt-1">
                    {style.name}
                  </h3>
                  <div className="mt-3 h-px w-8 bg-gold/50" />
                </div>

                {/* Subtle border on hover */}
                <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/20 transition-all duration-700 pointer-events-none" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
