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
    placeholder: "linear-gradient(135deg, #e0f4f9 0%, #f5fbfd 100%)",
    accent: "#2596be",
    icon: "👟",
  },
  {
    name: "Jordan Retro 1",
    brand: "JORDAN",
    category: "Sneakers" as Category,
    placeholder: "linear-gradient(135deg, #e8f7fb 0%, #f0fafe 100%)",
    accent: "#1e8ab0",
    icon: "👟",
  },
  {
    name: "RS-X Reinvention",
    brand: "PUMA",
    category: "Sneakers" as Category,
    placeholder: "linear-gradient(135deg, #dff2f8 0%, #eef8fc 100%)",
    accent: "#3ab0d4",
    icon: "👟",
  },
  {
    name: "Lasso Original Tee",
    brand: "LASSO",
    category: "Apparel" as Category,
    placeholder: "linear-gradient(135deg, #e5f5fb 0%, #f8fdff 100%)",
    accent: "#2596be",
    icon: "👕",
  },
  {
    name: "Tech Fleece Hoodie",
    brand: "NIKE",
    category: "Apparel" as Category,
    placeholder: "linear-gradient(135deg, #e0f4f9 0%, #f5fbfd 100%)",
    accent: "#1e8ab0",
    icon: "🧥",
  },
  {
    name: "Crossbody Bag",
    brand: "LASSO",
    category: "Accessories" as Category,
    placeholder: "linear-gradient(135deg, #dff2f8 0%, #f0fafe 100%)",
    accent: "#3ab0d4",
    icon: "👜",
  },
];

export default function FeaturedProductsSection() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered =
    activeFilter === "All"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <section id="collection" className="relative py-28 md:py-36 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="The Collection"
          title="Curated for the Bold"
          description="Handpicked pieces from the world's most iconic brands, styled for every generation."
        />

        {/* Filter pills */}
        <AnimatedSection>
          <div className="flex justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`glass-hover px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-250 ${
                  activeFilter === cat
                    ? "text-white shadow-sm"
                    : "text-muted hover:text-off-white bg-white hover:bg-gray-50 border border-gray-200"
                }`}
                style={activeFilter === cat ? { background: "#2596be" } : {}}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filtered.map((product, i) => (
            <AnimatedSection key={product.name} delay={0.07 * i} animation="fade-up">
              <div className="product-card group cursor-pointer bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-350">
                {/* Image placeholder — light theme colors */}
                <div className="relative h-52 md:h-60 overflow-hidden rounded-t-xl" style={{ background: product.placeholder }}>
                  {/* Brand badge */}
                  <div className="absolute top-3 left-3 z-10 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-white/60 shadow-sm">
                    <span className="text-[10px] font-bold tracking-widest" style={{ color: product.accent }}>
                      {product.brand}
                    </span>
                  </div>
                  {/* Accent dot */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full" style={{ background: product.accent }} />
                  {/* Centered icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl opacity-25 select-none">{product.icon}</span>
                  </div>
                  {/* Hover overlay (theme-colored, not black) */}
                  <div className="card-overlay rounded-t-xl" />
                  {/* CTA on hover */}
                  <div className="card-cta absolute bottom-4 left-4 right-4 z-10">
                    <span className="inline-flex items-center justify-center w-full py-2 rounded-lg text-xs font-bold tracking-wide text-white" style={{ background: product.accent }}>
                      View Look →
                    </span>
                  </div>
                </div>

                {/* Card info */}
                <div className="p-5">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase" style={{ color: product.accent }}>
                    {product.category}
                  </span>
                  <h3 className="font-display text-lg font-bold text-off-white mt-1 group-hover:text-gold transition-colors duration-300">
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
