"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Braiding",
    description:
      "From classic cornrows to intricate patterns, our braiding artistry transforms your look with precision and care.",
    price: "From $80",
  },
  {
    title: "Weave Install",
    description:
      "Flawless weave installations that blend seamlessly with your natural hair for a stunning, voluminous finish.",
    price: "From $120",
  },
  {
    title: "Braid Takedown",
    description:
      "Gentle and careful removal that protects your natural hair integrity while preparing you for your next style.",
    price: "From $40",
  },
  {
    title: "Wash & Blow Dry",
    description:
      "A luxurious cleansing and styling experience that leaves your hair refreshed, nourished, and beautifully finished.",
    price: "From $50",
  },
  {
    title: "Loc Styling",
    description:
      "Expert loc maintenance and creative styling that celebrates the beauty and versatility of your locs.",
    price: "From $90",
  },
  {
    title: "Custom Styling",
    description:
      "Personalized styling consultations to create a unique look tailored to your face shape, lifestyle, and personality.",
    price: "Consultation",
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-32 md:py-40 bg-charcoal overflow-hidden"
    >
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px gold-line" />
      <div className="absolute bottom-0 left-0 w-full h-px gold-line" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Our Services"
          title="Luxury Styling Services"
          description="Each service is delivered with meticulous attention to detail, premium products, and an unwavering commitment to your satisfaction."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <AnimatedSection
              key={service.title}
              delay={0.1 * i}
              animation="fade-up"
            >
              <div className="group relative bg-deep-black/60 border border-white/5 p-8 md:p-10 hover:border-gold/30 transition-all duration-700 h-full">
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10">
                  {/* Icon */}
                  <span className="text-gold text-2xl mb-6 block group-hover:scale-110 transition-transform duration-500 origin-left">
                    ✦
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-xl md:text-2xl text-cream mb-3 group-hover:text-gold transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-cream/40 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Price & link */}
                  <div className="flex items-center justify-between">
                    <span className="text-gold/80 text-sm tracking-wider">
                      {service.price}
                    </span>
                    <span className="text-cream/20 text-xs tracking-[0.15em] uppercase group-hover:text-gold/60 transition-colors duration-500">
                      Learn More →
                    </span>
                  </div>
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
