"use client";

import AnimatedSection from "./AnimatedSection";

const footerLinks: Record<string, string[]> = {
  Navigate: ["About", "Brands", "Collection", "Campaign", "Contact"],
  Brands: ["Nike", "Puma", "Jordan", "Lasso"],
  Connect: ["Instagram", "Twitter/X", "YouTube", "LinkedIn"],
};

export default function Footer() {
  return (
    <footer className="relative bg-charcoal pt-20 pb-8 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px gold-line" />

      {/* ── Footer Content ────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
              <a
                href="#home"
                className="font-display text-3xl text-gold tracking-[0.15em] inline-block mb-4"
              >
                LASSO
              </a>
              <p className="text-off-white/30 text-sm leading-relaxed max-w-xs font-body">
                Culture. Movement. Identity. Premium brand marketing for the bold.
              </p>
              <div className="flex gap-4 mt-6">
                {["Instagram", "Twitter/X", "YouTube", "LinkedIn"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="text-off-white/30 text-xs tracking-wider hover:text-gold transition-colors duration-300 font-body"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-gold text-xs tracking-[0.2em] uppercase mb-4 font-body">
                  {title}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-off-white/30 text-sm hover:text-off-white/60 transition-colors duration-300 font-body"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-off-white/20 text-xs tracking-wider font-body">
            © {new Date().getFullYear()} LASSO. All rights reserved.
          </p>
          <p className="text-off-white/20 text-xs tracking-wider font-body">
            Crafted for culture
          </p>
        </div>
      </div>
    </footer>
  );
}
