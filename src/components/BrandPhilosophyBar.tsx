"use client";

const marqueeText = "DESIGNED FOR CULTURE · BUILT FOR MOVEMENT · WORN BY CHAMPIONS · ";

export default function BrandPhilosophyBar() {
  return (
    <section className="relative h-[100px] bg-charcoal flex items-center overflow-hidden border-y border-gold/10">
      <div className="marquee-track">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="font-display text-gold text-lg md:text-xl tracking-[0.3em] whitespace-nowrap mx-4"
          >
            {marqueeText}
          </span>
        ))}
      </div>
    </section>
  );
}
