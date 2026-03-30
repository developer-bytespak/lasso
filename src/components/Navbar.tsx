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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl py-3 shadow-sm border-b border-gray-100"
          : "bg-transparent py-5 md:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className={`font-display text-2xl md:text-3xl tracking-widest font-bold transition-all duration-500 hover:opacity-80 ${
            scrolled ? "text-gold" : "text-white"
          } ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
        >
          LASSO
        </a>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium tracking-wide transition-all duration-300
                after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:rounded-full after:transition-all after:duration-300 hover:after:w-full
                ${scrolled
                  ? "text-muted hover:text-off-white after:bg-gold"
                  : "text-white/80 hover:text-white after:bg-white"
                }
                ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              style={{ transitionDelay: `${0.3 + i * 0.06}s` }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#collection"
          className={`glass-hover hidden lg:inline-flex items-center justify-center px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-all duration-300 ${
            scrolled
              ? "bg-teal text-off-white hover:bg-teal/90 shadow-sm"
              : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
          } ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
          style={{ transitionDelay: "0.6s" }}
        >
          Explore Collection
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-8 h-8 relative flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-off-white" : "bg-white"
            } ${mobileOpen ? "rotate-45 translate-y-[5px]" : ""}`}
          />
          <span
            className={`block w-4 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-off-white" : "bg-white"
            } ${mobileOpen ? "opacity-0 w-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? "bg-off-white" : "bg-white"
            } ${mobileOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-400 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-6 right-6 w-8 h-8 flex flex-col justify-center items-center"
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-off-white rounded-full rotate-45 translate-y-px" />
          <span className="block w-6 h-0.5 bg-off-white rounded-full -rotate-45 -translate-y-px" />
        </button>

        {/* Logo in mobile */}
        <div className="absolute top-5 left-6 font-display text-2xl text-gold font-bold tracking-widest">
          LASSO
        </div>

        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-off-white hover:text-gold font-display text-2xl font-bold tracking-wide transition-all duration-400 ${
                mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: mobileOpen ? `${0.05 + i * 0.06}s` : "0s" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#collection"
            onClick={() => setMobileOpen(false)}
            className={`glass-hover mt-4 px-10 py-3 rounded-xl bg-teal text-off-white text-sm font-semibold tracking-wide transition-all duration-400 hover:bg-teal/90 ${
              mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: mobileOpen ? "0.35s" : "0s" }}
          >
            Explore Collection
          </a>
        </div>
      </div>
    </nav>
  );
}
