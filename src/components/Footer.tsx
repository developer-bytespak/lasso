"use client";

import AnimatedSection from "./AnimatedSection";

const footerLinks: Record<string, string[]> = {
  Navigate: ["About", "Brands", "Collection", "Campaign", "Contact"],
  Brands: ["Nike", "Puma", "Jordan", "Lasso"],
  Connect: ["Instagram", "Twitter/X", "YouTube", "LinkedIn"],
};

export default function Footer() {
  return (
    <footer className="relative bg-charcoal pt-16 pb-8 overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <AnimatedSection>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-14">
            {/* Brand column */}
            <div className="col-span-2 md:col-span-1 mb-4 md:mb-0">
              <a
                href="#home"
                className="font-display text-2xl font-bold tracking-widest inline-block mb-3"
                style={{ color: "#2596be" }}
              >
                LASSO
              </a>
              <p className="text-muted text-sm leading-relaxed max-w-xs font-body">
                Culture. Movement. Identity. Premium brand marketing for the bold.
              </p>
              <div className="flex gap-3 mt-5">
                {["IG", "X", "YT", "LI"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold text-muted hover:text-gold hover:bg-gold/10 transition-all duration-250 border border-gray-200"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-xs font-bold tracking-[0.2em] uppercase mb-4 text-off-white">
                  {title}
                </h4>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted text-sm hover:text-off-white transition-colors duration-250 font-body"
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
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-muted text-xs font-body">
            © {new Date().getFullYear()} LASSO. All rights reserved.
          </p>
          <p className="text-muted text-xs font-body">
            Crafted for culture
          </p>
        </div>
      </div>
    </footer>
  );
}
