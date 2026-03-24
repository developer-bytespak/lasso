"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Begin with a personalized consultation where we discuss your vision, assess your hair, and plan the perfect style.",
  },
  {
    number: "02",
    title: "Preparation",
    description:
      "Arrive with clean, detangled hair. Avoid heavy oils or conditioners. We'll handle the rest with premium products.",
  },
  {
    number: "03",
    title: "The Experience",
    description:
      "Relax and enjoy the transformation. Our stylists work with precision and care to bring your vision to life.",
  },
  {
    number: "04",
    title: "Aftercare",
    description:
      "Receive personalized aftercare instructions to maintain your style's beauty and protect your natural hair.",
  },
];

const guidelines = [
  "Please arrive on time — late arrivals may result in rescheduling",
  "Hair should be freshly washed and detangled before your appointment",
  "A non-refundable deposit is required to secure your booking",
  "Cancellations must be made at least 24 hours in advance",
  "Children under 12 must be accompanied by a guardian",
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="relative py-32 md:py-40 bg-charcoal overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px gold-line" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          subtitle="Your Journey"
          title="The Experience"
          description="From your first consultation to aftercare, every step is designed to be seamless, comfortable, and luxurious."
        />

        {/* ── Steps ───────────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 mb-24 md:mb-32">
          {steps.map((step, i) => (
            <AnimatedSection key={step.number} delay={0.15 * i}>
              <div className="relative group">
                {/* Connecting line (desktop) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-gold/30 to-transparent z-0" />
                )}

                <div className="relative z-10">
                  <span className="font-serif text-5xl md:text-6xl text-gold/10 group-hover:text-gold/20 transition-colors duration-700 block leading-none">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-xl text-cream mt-4 mb-3 group-hover:text-gold transition-colors duration-500">
                    {step.title}
                  </h3>
                  <p className="text-cream/40 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* ── Guidelines ──────────────────────────────── */}
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <h3 className="font-serif text-2xl md:text-3xl text-center text-cream mb-10">
              Appointment Guidelines
            </h3>
          </AnimatedSection>

          <div className="space-y-0">
            {guidelines.map((guideline, i) => (
              <AnimatedSection key={i} delay={0.1 * i}>
                <div className="flex items-start gap-4 py-5 border-b border-white/5 group">
                  <span className="text-gold text-sm mt-0.5 flex-shrink-0">
                    ✦
                  </span>
                  <p className="text-cream/50 text-sm md:text-base leading-relaxed group-hover:text-cream/70 transition-colors duration-500">
                    {guideline}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
