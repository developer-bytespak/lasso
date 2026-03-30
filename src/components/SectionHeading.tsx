"use client";

import AnimatedSection from "./AnimatedSection";

interface Props {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  light = false,
}: Props) {
  const centered = align === "center";

  return (
    <div className={`mb-14 md:mb-20 ${centered ? "text-center" : ""}`}>
      {subtitle && (
        <AnimatedSection>
          <p
            className="text-xs font-bold tracking-[0.25em] uppercase mb-3"
            style={{ color: "#2596be" }}
          >
            {subtitle}
          </p>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.1}>
        <h2
          className={`font-display text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold leading-tight tracking-tight ${
            light ? "text-white" : "text-off-white"
          }`}
        >
          {title}
        </h2>
      </AnimatedSection>
      {description && (
        <AnimatedSection delay={0.25}>
          <p
            className={`mt-4 text-base md:text-lg leading-relaxed max-w-2xl font-body ${
              centered ? "mx-auto" : ""
            } ${light ? "text-white/70" : "text-muted"}`}
          >
            {description}
          </p>
        </AnimatedSection>
      )}
      <AnimatedSection delay={0.35}>
        <div
          className={`mt-6 h-1 w-12 rounded-full ${centered ? "mx-auto" : ""}`}
          style={{ background: "linear-gradient(90deg, #2596be, #1e8ab0)" }}
        />
      </AnimatedSection>
    </div>
  );
}
