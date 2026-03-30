"use client";

import AnimatedSection from "./AnimatedSection";

const contactInfo = [
  { label: "Email", value: "hello@lassobrand.com", icon: "✉" },
  { label: "Phone", value: "+1 (555) 987-6543", icon: "☎" },
  { label: "Location", value: "Los Angeles, CA", icon: "◉" },
];

const socials = [
  { name: "Instagram", href: "#" },
  { name: "Twitter/X", href: "#" },
  { name: "YouTube", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative py-32 md:py-40 bg-charcoal overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-px gold-line" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-gold/[0.03] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* ── Contact Info (Left) ───────────────────── */}
          <div>
            <AnimatedSection>
              <p className="text-gold tracking-[0.3em] uppercase text-xs md:text-sm font-body mb-5">
                Get in Touch
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-off-white leading-tight mb-10">
                Start the Conversation
              </h2>
            </AnimatedSection>

            <div className="space-y-8">
              {contactInfo.map((item, i) => (
                <AnimatedSection
                  key={item.label}
                  delay={0.15 * (i + 1)}
                  animation="fade-right"
                >
                  <div className="flex items-start gap-5 group">
                    <span className="text-xl w-10 h-10 flex items-center justify-center text-gold flex-shrink-0">
                      <span className="w-2.5 h-2.5 rounded-full bg-gold inline-block" />
                    </span>
                    <div>
                      <h4 className="text-gold text-xs tracking-[0.2em] uppercase mb-2 font-body">
                        {item.label}
                      </h4>
                      <p className="text-off-white/60 text-sm leading-relaxed whitespace-pre-line">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Social links */}
            <AnimatedSection delay={0.6}>
              <div className="pt-8 mt-8 border-t border-white/5">
                <p className="text-gold text-xs tracking-[0.2em] uppercase mb-4 font-body">
                  Follow Us
                </p>
                <div className="flex gap-5">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="text-off-white/40 text-sm hover:text-gold transition-colors duration-300 font-body"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Contact Form (Right) ──────────────────── */}
          <AnimatedSection animation="fade-left" delay={0.2}>
            <div className="relative bg-base-black border border-gold/20 p-10 md:p-14">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gold/40" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gold/40" />

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-sm text-off-white placeholder-off-white/30 focus:border-gold/50 focus:outline-none transition-colors duration-500 font-body"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-sm text-off-white placeholder-off-white/30 focus:border-gold/50 focus:outline-none transition-colors duration-500 font-body"
                  />
                </div>
                <div>
                  <select
                    defaultValue=""
                    className="w-full bg-base-black border-b border-white/10 px-0 py-3 text-sm text-off-white/30 focus:border-gold/50 focus:outline-none transition-colors duration-500 appearance-none font-body"
                  >
                    <option value="" disabled>
                      Brand Interest
                    </option>
                    <option value="nike">Nike</option>
                    <option value="puma">Puma</option>
                    <option value="jordan">Jordan</option>
                    <option value="lasso">Lasso Originals</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-transparent border-b border-white/10 px-0 py-3 text-sm text-off-white placeholder-off-white/30 focus:border-gold/50 focus:outline-none transition-colors duration-500 resize-none font-body"
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full inline-flex items-center justify-center px-10 py-4 bg-gold text-base-black font-body text-xs md:text-sm tracking-[0.2em] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/20"
                >
                  <span className="relative z-10">Send Message →</span>
                  <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
