"use client";

import { useEffect, useState } from "react";

const brandTicker = ["NIKE", "PUMA", "JORDAN", "LASSO"];

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  const headlineLines = [
    { text: "WHERE STYLE", delay: 0.8 },
    { text: "MEETS", delay: 1.0 },
    { text: "PERFORMANCE", delay: 1.2 },
  ];

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden"
      style={{ background: "linear-gradient(135deg, #1a7498 0%, #2596be 40%, #3ab0d4 70%, #1e8ab0 100%)" }}
    >
      {/* Ken Burns zoom layer */}
      <div className="absolute inset-0 animate-ken-burns" />

      {/* Soft light overlays — no black */}
      <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse at 65% 35%, rgba(255,255,255,0.18) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse at 15% 75%, rgba(46,230,166,0.15) 0%, transparent 50%)" }} />

      {/* Grid lines — white, very subtle */}
      <div className="absolute inset-0 z-[2] pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.07]" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="40%" y1="0" x2="40%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="60%" y1="0" x2="60%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="white" strokeWidth="1" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="white" strokeWidth="1" />
          <line x1="0" y1="65%" x2="100%" y2="65%" stroke="white" strokeWidth="1" />
        </svg>
      </div>

      {/* Ambient glow orbs — lighter tones of the theme */}
      <div className="absolute z-[2] top-[10%] right-[18%] w-150 h-150 rounded-full blur-[120px] animate-float pointer-events-none" style={{ background: "rgba(255,255,255,0.12)" }} />
      <div className="absolute z-[2] bottom-[15%] left-[5%] w-96 h-96 rounded-full blur-[90px] animate-float-slow pointer-events-none" style={{ background: "rgba(46,230,166,0.15)" }} />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Accent bar */}
            <div
              className={`h-1 rounded-full transition-all duration-1000 ease-out bg-white/60 ${loaded ? "w-16 opacity-100" : "w-0 opacity-0"}`}
              style={{ transitionDelay: "0.4s" }}
            />

            {/* Main heading */}
            <div className="mt-6 space-y-0">
              {headlineLines.map((line) => (
                <div key={line.text} className="overflow-hidden">
                  <h1
                    className={`font-display text-[clamp(2.8rem,9vw,6rem)] text-white font-extrabold leading-[1.0] tracking-tight transition-all duration-1000 ${
                      loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full"
                    }`}
                    style={{ transitionDelay: `${line.delay}s`, textShadow: "0 2px 20px rgba(0,0,0,0.15)" }}
                  >
                    {line.text}
                  </h1>
                </div>
              ))}
            </div>

            {/* Sub-tagline */}
            <p
              className={`mt-6 font-body text-lg md:text-xl text-white/80 font-medium tracking-wide transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "1.5s" }}
            >
              Culture. Movement. Identity.
            </p>

            {/* CTAs */}
            <div
              className={`mt-8 flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "1.8s" }}
            >
              {/* Primary — white filled */}
              <a
                href="#collection"
                className="glass-hover group relative inline-flex items-center justify-center px-10 py-4 rounded-xl font-body text-sm font-bold tracking-wide overflow-hidden transition-all duration-300 hover:shadow-2xl animate-pulse-gold bg-white"
                style={{ color: "#2596be" }}
              >
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-xl bg-white/90" />
              </a>
              {/* Secondary — white outlined */}
              <a
                href="#about"
                className="glass-hover inline-flex items-center justify-center px-10 py-4 rounded-xl border-2 border-white/50 text-white text-sm font-semibold tracking-wide hover:bg-white/15 hover:border-white/80 transition-all duration-300"
              >
                Our Story
              </a>
            </div>

            {/* Brand trust row */}
            <div
              className={`mt-10 flex items-center gap-2 transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
              style={{ transitionDelay: "2.0s" }}
            >
              <span className="text-white/50 text-xs font-medium mr-2">Featuring</span>
              {["Nike", "Puma", "Jordan"].map((brand) => (
                <span key={brand} className="px-3 py-1 rounded-full text-[11px] font-bold tracking-widest text-white/70 border border-white/20">
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Brand ticker */}
      <div
        className={`absolute bottom-16 left-0 right-0 z-10 overflow-hidden transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "2.2s" }}
      >
        <div className="marquee-track">
          {[...Array(8)].map((_, setIdx) =>
            brandTicker.map((brand, i) => (
              <span
                key={`${setIdx}-${i}`}
                className="text-white/15 font-display text-xl md:text-2xl font-black tracking-[0.3em] mx-8 md:mx-12 whitespace-nowrap"
              >
                {brand} ·
              </span>
            ))
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 transition-all duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
        style={{ transitionDelay: "2.5s" }}
      >
        <span className="text-white/50 text-[10px] tracking-[0.3em] uppercase font-body">Scroll</span>
        <div className="w-px h-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-white/60 to-transparent animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
