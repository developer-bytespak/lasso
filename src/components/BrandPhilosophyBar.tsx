"use client";

const marqueeText = "DESIGNED FOR CULTURE · BUILT FOR MOVEMENT · WORN BY CHAMPIONS · ";

export default function BrandPhilosophyBar() {
  return (
    <section className="relative h-18 bg-charcoal flex items-center overflow-hidden border-y border-gray-100">
      <div className="marquee-track">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="font-body text-sm font-semibold tracking-[0.25em] whitespace-nowrap mx-4"
            style={{ color: "#2596be" }}
          >
            {marqueeText}
          </span>
        ))}
      </div>
    </section>
  );
}
