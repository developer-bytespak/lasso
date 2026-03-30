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
      className="relative py-28 md:py-36 bg-charcoal overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* ── Contact Info ─────────────────────────── */}
          <div>
            <AnimatedSection>
              <p className="text-xs font-bold tracking-[0.25em] uppercase mb-3" style={{ color: "#2596be" }}>
                Get in Touch
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="font-display text-3xl md:text-5xl lg:text-[3.25rem] text-off-white font-extrabold leading-tight tracking-tight mb-10">
                Start the Conversation
              </h2>
            </AnimatedSection>

            <div className="space-y-7">
              {contactInfo.map((item, i) => (
                <AnimatedSection key={item.label} delay={0.12 * (i + 1)} animation="fade-right">
                  <div className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm" style={{ background: "linear-gradient(135deg, #2596be15, #1e8ab015)", border: "1px solid #2596be20" }}>
                      <span className="w-2 h-2 rounded-full inline-block" style={{ background: "#2596be" }} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-1" style={{ color: "#2596be" }}>
                        {item.label}
                      </h4>
                      <p className="text-muted text-sm leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            {/* Social links */}
            <AnimatedSection delay={0.55}>
              <div className="pt-8 mt-8 border-t border-gray-200">
                <p className="text-xs font-bold tracking-[0.2em] uppercase mb-4" style={{ color: "#2596be" }}>
                  Follow Us
                </p>
                <div className="flex gap-4">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="text-muted text-sm font-medium hover:text-gold transition-colors duration-250"
                    >
                      {s.name}
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* ── Contact Form ──────────────────────────── */}
          <AnimatedSection animation="fade-left" delay={0.2}>
            <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h3 className="text-xl font-bold text-off-white mb-6">Send us a message</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs font-semibold text-muted mb-1.5 tracking-wide">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full bg-charcoal border border-gray-200 rounded-lg px-4 py-3 text-sm text-off-white placeholder-muted focus:border-gold focus:ring-2 focus:ring-gold/10 focus:outline-none transition-all duration-250 font-body"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted mb-1.5 tracking-wide">Email</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full bg-charcoal border border-gray-200 rounded-lg px-4 py-3 text-sm text-off-white placeholder-muted focus:border-gold focus:ring-2 focus:ring-gold/10 focus:outline-none transition-all duration-250 font-body"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted mb-1.5 tracking-wide">Brand Interest</label>
                  <select
                    defaultValue=""
                    className="w-full bg-charcoal border border-gray-200 rounded-lg px-4 py-3 text-sm text-off-white focus:border-gold focus:ring-2 focus:ring-gold/10 focus:outline-none transition-all duration-250 font-body appearance-none"
                  >
                    <option value="" disabled>Select a brand</option>
                    <option value="nike">Nike</option>
                    <option value="puma">Puma</option>
                    <option value="jordan">Jordan</option>
                    <option value="lasso">Lasso Originals</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted mb-1.5 tracking-wide">Message</label>
                  <textarea
                    placeholder="How can we help?"
                    rows={4}
                    className="w-full bg-charcoal border border-gray-200 rounded-lg px-4 py-3 text-sm text-off-white placeholder-muted focus:border-gold focus:ring-2 focus:ring-gold/10 focus:outline-none transition-all duration-250 resize-none font-body"
                  />
                </div>

                <button
                  type="submit"
                  className="glass-hover group relative w-full inline-flex items-center justify-center px-8 py-4 rounded-xl font-body text-sm font-bold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-lg"
                  style={{ background: "#2EE6A6", color: "#1F2937" }}
                >
                  <span className="relative z-10">Send Message →</span>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl" style={{ background: "#50EDBA" }} />
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
