"use client";

import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const contactInfo = [
  {
    label: "Location",
    value: "123 Beauty Lane, Suite 4\nLos Angeles, CA 90001",
    icon: "📍",
  },
  { label: "Phone", value: "+1 (555) 123-4567", icon: "📞" },
  { label: "Email", value: "hello@elushbeautybar.com", icon: "✉" },
  {
    label: "Hours",
    value: "Mon – Sat: 9 am – 7 pm\nSunday: By Appointment",
    icon: "🕐",
  },
];

const socials = ["Instagram", "Facebook", "TikTok", "Pinterest"];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 bg-charcoal overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px gold-line" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-gold/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <SectionHeading
          subtitle="Get in Touch"
          title="Begin Your Transformation"
          description="Ready to experience luxury styling? Reach out to book your appointment or learn more about our services."
        />

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* ── Contact Info ──────────────────────────── */}
          <div className="space-y-8">
            {contactInfo.map((item, i) => (
              <AnimatedSection
                key={item.label}
                delay={0.1 * i}
                animation="fade-right"
              >
                <div className="flex items-start gap-5 group">
                  <span className="text-xl w-10 h-10 flex items-center justify-center bg-gold/10 text-gold flex-shrink-0 group-hover:bg-gold/20 transition-colors duration-500">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                      {item.label}
                    </h4>
                    <p className="text-cream/60 text-sm leading-relaxed whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* Social links */}
            <AnimatedSection delay={0.5}>
              <div className="pt-8 border-t border-white/5">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
                  Follow Us
                </p>
                <div className="flex gap-5">
                  {socials.map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-cream/40 text-sm hover:text-gold transition-colors duration-300"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Booking Card ──────────────────────────── */}
          <AnimatedSection animation="fade-left" delay={0.2}>
            <div className="relative bg-deep-black border border-gold/20 p-10 md:p-14">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40" />

              <h3 className="font-serif text-2xl md:text-3xl text-cream mb-4">
                Ready to Book?
              </h3>
              <p className="text-cream/40 text-sm leading-relaxed mb-8">
                Schedule your appointment today and let us create something
                beautiful. Walk-ins welcome based on availability, but we
                recommend booking in advance to secure your preferred time.
              </p>

              {/* Quick form placeholder */}
              <div className="space-y-4 mb-8">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-transparent border border-white/10 px-5 py-3 text-sm text-cream placeholder-cream/30 focus:border-gold/50 focus:outline-none transition-colors duration-500"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border border-white/10 px-5 py-3 text-sm text-cream placeholder-cream/30 focus:border-gold/50 focus:outline-none transition-colors duration-500"
                />
                <select
                  defaultValue=""
                  className="w-full bg-deep-black border border-white/10 px-5 py-3 text-sm text-cream/30 focus:border-gold/50 focus:outline-none transition-colors duration-500 appearance-none"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  <option value="braiding">Braiding</option>
                  <option value="weave">Weave Install</option>
                  <option value="locs">Loc Styling</option>
                  <option value="wash">Wash &amp; Blow Dry</option>
                  <option value="custom">Custom Styling</option>
                </select>
              </div>

              <button
                type="button"
                className="group relative w-full inline-flex items-center justify-center px-10 py-4 bg-gold text-deep-black font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/20"
              >
                <span className="relative z-10">Book Appointment</span>
                <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>

              <p className="text-center text-cream/20 text-xs mt-4">
                Or call us directly at +1&nbsp;(555)&nbsp;123-4567
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
