"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Brands", href: "#brands" },
  { label: "Collection", href: "#collection" },
  { label: "Campaign", href: "#campaign" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      clearTimeout(t);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-base-black/90 backdrop-blur-xl py-3 shadow-2xl shadow-black/30"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className={`font-display text-3xl md:text-4xl text-gold tracking-[0.15em] transition-all duration-700 hover:opacity-80 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
        >
          LASSO
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-off-white/60 hover:text-gold text-[11px] tracking-[0.2em] uppercase font-body transition-all duration-300 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-px after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
              style={{ transitionDelay: `${0.3 + i * 0.08}s` }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#collection"
          className={`hidden lg:inline-block px-7 py-2.5 border border-gold/80 text-gold text-[11px] tracking-[0.2em] uppercase font-body hover:bg-gold hover:text-base-black transition-all duration-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
          }`}
          style={{ transitionDelay: "0.7s" }}
        >
          Explore Collection
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-off-white w-8 h-8 relative flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-[1px] bg-off-white transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-4 h-[1px] bg-off-white transition-all duration-300 ${
              mobileOpen ? "opacity-0 w-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-[1px] bg-off-white transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile fullscreen overlay menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-base-black/98 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 text-off-white w-8 h-8 flex flex-col justify-center items-center"
          aria-label="Close menu"
        >
          <span className="block w-6 h-[1px] bg-off-white rotate-45 translate-y-[0.5px]" />
          <span className="block w-6 h-[1px] bg-off-white -rotate-45 -translate-y-[0.5px]" />
        </button>

        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-off-white/80 hover:text-gold font-display text-3xl tracking-[0.2em] uppercase transition-all duration-500 ${
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: mobileOpen ? `${0.1 + i * 0.08}s` : "0s" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#collection"
            onClick={() => setMobileOpen(false)}
            className={`mt-4 px-10 py-3 border border-gold text-gold text-sm tracking-[0.2em] uppercase hover:bg-gold hover:text-base-black transition-all duration-500 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "0.6s" : "0s" }}
          >
            Explore Collection
          </a>
        </div>
      </div>
    </nav>
  );
}
