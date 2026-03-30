"use client";

import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

type Category = "All" | "Sneakers" | "Apparel" | "Accessories";

const categories: Category[] = ["All", "Sneakers", "Apparel", "Accessories"];

const products = [
  {
    name: "Air Max 270",
    brand: "NIKE",
    category: "Sneakers" as Category,
    gradient: "linear-gradient(135deg, #1a1510 0%, #111114 50%, #1a1015 100%)",
  },
  {
    name: "Jordan Retro 1",
    brand: "JORDAN",
    category: "Sneakers" as Category,
    gradient: "linear-gradient(135deg, #201515 0%, #111114 50%, #1a1510 100%)",
  },
  {
    name: "RS-X Reinvention",
    brand: "PUMA",
    category: "Sneakers" as Category,
    gradient: "linear-gradient(135deg, #151a1a 0%, #111114 50%, #1a1a15 100%)",
  },
  {
    name: "Lasso Original Tee",
    brand: "LASSO",
    category: "Apparel" as Category,
    gradient: "linear-gradient(135deg, #1a1a20 0%, #111114 50%, #20151a 100%)",
  },
  {
    name: "Tech Fleece Hoodie",
    brand: "NIKE",
    category: "Apparel" as Category,
    gradient: "linear-gradient(135deg, #1a1015 0%, #111114 50%, #15101a 100%)",
  },
  {
    name: "Crossbody Bag",
    brand: "LASSO",
    category: "Accessories" as Category,
    gradient: "linear-gradient(135deg, #151010 0%, #111114 50%, #201a1a 100%)",
  },
];

export default function FeaturedProductsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section
      id="collection"
      className="relative py-32 md:py-40 bg-base-black overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-gold/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="The Collection"
          title="Curated for the Bold"
        />

        {/* Filter tabs */}
        <AnimatedSection>
          <div className="flex justify-center gap-6 md:gap-8 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative text-[11px] tracking-[0.2em] uppercase font-body transition-colors duration-300 pb-2 ${
                  activeFilter === cat
                    ? "text-gold"
                    : "text-off-white/40 hover:text-off-white/70"
                }`}
              >
                {cat}
                <span
                  className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-500 ${
                    activeFilter === cat ? "w-full" : "w-0"
                  }`}
                />
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((product, i) => (
            <AnimatedSection
              key={product.name}
              delay={0.1 * i}
              animation="fade-up"
            >
              <div className="product-card group cursor-pointer bg-charcoal border border-white/5 hover:border-gold/30 transition-all duration-700">
                {/* SVG border trace */}
                <svg className="border-trace absolute inset-0 w-full h-full pointer-events-none z-20">
                  <rect
                    x="0.5"
                    y="0.5"
                    width="calc(100% - 1px)"
                    height="calc(100% - 1px)"
                    fill="none"
                    stroke="#C8A96E"
                    strokeWidth="1"
                    rx="0"
                  />
                </svg>

                {/* Product image area (65%) */}
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <div
                    className="card-image absolute inset-0"
                    style={{ background: product.gradient }}
                  />
                  {/* Brand badge */}
                  <div className="absolute top-4 left-4 z-10 bg-base-black/70 px-3 py-1 backdrop-blur-sm">
                    <span className="font-display text-xs text-gold tracking-[0.15em]">
                      {product.brand}
                    </span>
                  </div>
                  {/* Hover overlay */}
                  <div className="card-overlay" />
                  {/* CTA on hover */}
                  <div className="card-cta absolute bottom-4 left-4 right-4 z-10">
                    <span className="inline-block px-6 py-2 border border-gold text-gold text-[10px] tracking-[0.2em] uppercase hover:bg-gold hover:text-base-black transition-all duration-300">
                      View Look
                    </span>
                  </div>
                </div>

                {/* Product info */}
                <div className="p-6">
                  <span className="text-gold text-[9px] tracking-[0.25em] uppercase font-body">
                    {product.category}
                  </span>
                  <h3 className="font-serif text-xl text-off-white mt-2 italic group-hover:text-gold transition-colors duration-500">
                    {product.name}
                  </h3>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
