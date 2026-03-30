"use client";

import AnimatedSection from "./AnimatedSection";

interface Props {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
}: Props) {
  const centered = align === "center";

  return (
    <div className={`mb-16 md:mb-24 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <AnimatedSection>
          <p className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-body mb-5">
            {subtitle}
          </p>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-off-white leading-tight">
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.25}>
          <p
            className={`mt-6 text-base md:text-lg text-off-white/50 leading-relaxed max-w-2xl font-body ${
              centered ? "mx-auto" : ""
            }`}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.35}>
        <div
          className={`mt-8 h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent ${
            centered ? "mx-auto" : ""
          }`}
        />
      </AnimatedSection>
    </div>
  );
}
