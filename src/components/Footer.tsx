"use client";

import AnimatedSection from "./AnimatedSection";

const footerLinks: Record<string, string[]> = {
  Services: [
    "Braiding",
    "Weave Install",
    "Loc Styling",
    "Wash & Blow Dry",
    "Custom Styling",
  ],
  Company: ["About Us", "Our Process", "Gallery", "Testimonials", "Contact"],
  Legal: ["Privacy Policy", "Terms of Service", "Cancellation Policy"],
};

const socials = ["Instagram", "Facebook", "TikTok", "Pinterest"];

export default function Footer() {
  return (
    <footer className="relative bg-deep-black pt-20 pb-8 overflow-hidden">
      {/* ── Final CTA Band ────────────────────────────── */}
      <AnimatedSection>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-20">
          <div className="relative border border-gold/20 py-16 md:py-20 px-8 text-center overflow-hidden">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/[0.03] to-transparent pointer-events-none" />

            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-cream mb-4 relative z-10">
              Your Transformation Awaits
            </h3>
            <p className="text-cream/40 text-base md:text-lg max-w-lg mx-auto mb-8 relative z-10">
              Book your luxury styling session today and discover the art of
              true beauty.
            </p>
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center px-12 py-4 bg-gold text-deep-black font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/20"
            >
              <span className="relative z-10">Book Now</span>
              <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* ── Footer Content ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 mb-4 lg:mb-0">
            <a
              href="#home"
              className="font-serif text-2xl text-cream tracking-wider inline-block mb-4"
            >
              LUXE<span className="text-gold">.</span>
            </a>
            <p className="text-cream/30 text-sm leading-relaxed max-w-xs">
              Where beauty becomes art. Premium hair styling crafted with
              precision, passion, and an unwavering commitment to excellence.
            </p>
            <div className="flex gap-4 mt-6">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="text-cream/30 text-xs tracking-wider hover:text-gold transition-colors duration-300"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-gold text-xs tracking-[0.2em] uppercase mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cream/30 text-sm hover:text-cream/60 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/20 text-xs tracking-wider">
            © {new Date().getFullYear()} LUXE Salon. All rights reserved.
          </p>
          <p className="text-cream/20 text-xs tracking-wider">
            Crafted with passion for beauty
          </p>
        </div>
      </div>
    </footer>
  );
}
