"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const guidelines = [
  {
    icon: "✦",
    title: "Hair Preparation",
    description: "Clean, detangled, blow-dried hair required before your visit",
  },
  {
    icon: "✦",
    title: "Secure Your Spot",
    description: "A deposit is required to confirm your booking",
  },
  {
    icon: "✦",
    title: "Changes & Cancellations",
    description: "Cancel or update appointments in advance to avoid deposit loss",
  },
  {
    icon: "✦",
    title: "Be On Time",
    description: "Late arrivals may result in rescheduling or cancellation",
  },
  {
    icon: "✦",
    title: "Guest Policy",
    description: "Guests are not allowed unless approved prior to your appointment",
  },
  {
    icon: "✦",
    title: "How to Book",
    description: "Consultations via DMs, bookings are made through Square",
  },
];

export default function GuidelinesSection() {
  return (
    <section
      id="process"
      className="relative py-32 md:py-44 bg-charcoal overflow-hidden"
    >
      {/* Top gold line */}
      <div className="absolute top-0 left-0 w-full h-px gold-line" />
      <div className="absolute bottom-0 left-0 w-full h-px gold-line" />

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Before Your Visit"
          title="Booking & Appointment Guidelines"
        />

        {/* ── Intro paragraph in styled box ───────────── */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-20 relative">
            <div className="relative border border-gold/15 bg-deep-black/40 px-8 md:px-14 py-10 md:py-12">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-gold/40" />
              <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-gold/40" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-gold/40" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-gold/40" />

              <p className="text-cream/55 text-base md:text-lg leading-[1.9] text-center font-sans">
                Arrive on time and come with clean, detangled, blow-dried hair.
                A deposit is required to secure your appointment, and
                cancellations or style changes should be made in advance. Guests
                are not allowed unless approved, and late arrivals may lead to
                cancellation or deposit loss. Consultations are handled through
                DMs, while bookings are made through Square.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* ── Guideline Cards Grid ────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {guidelines.map((item, i) => (
            <AnimatedSection key={i} delay={0.1 * i} animation="fade-up">
              <div className="group relative bg-deep-black/50 border border-white/5 p-7 md:p-8 hover:border-gold/25 transition-all duration-700 h-full">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10">
                  {/* Number + Icon row */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="flex items-center justify-center w-9 h-9 border border-gold/20 text-gold text-xs group-hover:bg-gold/10 transition-all duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-gradient-to-r from-gold/20 to-transparent" />
                  </div>

                  {/* Title */}
                  <h4 className="font-serif text-lg text-cream mb-2 group-hover:text-gold transition-colors duration-500">
                    {item.title}
                  </h4>

                  {/* Description */}
                  <p className="text-cream/40 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-700" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
