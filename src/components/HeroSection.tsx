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
      className="relative h-screen w-full overflow-hidden bg-base-black"
    >
      {/* ── Background with Ken Burns ─────────────────── */}
      <div
        className="absolute inset-0 animate-ken-burns bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(135deg, #111114 0%, #060608 20%, #1a1510 40%, #060608 60%, #0d0d10 80%, #060608 100%)",
        }}
      />

      {/* ── Overlays ──────────────────────────────────── */}
      <div className="absolute inset-0 z-[2] bg-black/60" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-t from-base-black via-base-black/20 to-base-black/40" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-base-black/60 via-transparent to-transparent" />

      {/* ── Animated geometric gold grid lines ─────────── */}
      <div className="absolute inset-0 z-[3] pointer-events-none overflow-hidden">
        <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
          <line x1="20%" y1="0" x2="20%" y2="100%" stroke="#C8A96E" strokeWidth="1" />
          <line x1="40%" y1="0" x2="40%" y2="100%" stroke="#C8A96E" strokeWidth="1" />
          <line x1="60%" y1="0" x2="60%" y2="100%" stroke="#C8A96E" strokeWidth="1" />
          <line x1="80%" y1="0" x2="80%" y2="100%" stroke="#C8A96E" strokeWidth="1" />
          <line x1="0" y1="30%" x2="100%" y2="30%" stroke="#C8A96E" strokeWidth="1" />
          <line x1="0" y1="60%" x2="100%" y2="60%" stroke="#C8A96E" strokeWidth="1" />
        </svg>
      </div>

      {/* ── Ambient glow orbs ─────────────────────────── */}
      <div className="absolute z-[3] top-[20%] right-[22%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] animate-float pointer-events-none" />
      <div className="absolute z-[3] bottom-[25%] left-[10%] w-80 h-80 rounded-full bg-gold/[0.03] blur-[100px] animate-float-slow pointer-events-none" />

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Gold accent line */}
            <div
              className={`h-px bg-gold transition-all duration-1000 ease-out ${
                loaded ? "w-20 opacity-100" : "w-0 opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            />

            {/* Main heading — word by word stagger */}
            <div className="mt-8 space-y-0">
              {headlineLines.map((line) => (
                <div key={line.text} className="overflow-hidden">
                  <h1
                    className={`font-display text-[clamp(2.5rem,8vw,5.5rem)] text-off-white leading-[1.05] tracking-[0.04em] transition-all duration-1000 ${
                      loaded
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-full"
                    }`}
                    style={{ transitionDelay: `${line.delay}s` }}
                  >
                    {line.text}
                  </h1>
                </div>
              ))}
            </div>

            {/* Sub-tagline */}
            <p
              className={`mt-8 font-serif text-xl md:text-2xl text-gold/80 italic transition-all duration-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "1.5s" }}
            >
              Culture. Movement. Identity.
            </p>

            {/* CTAs */}
            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "1.8s" }}
            >
              <a
                href="#collection"
                className="group relative inline-flex items-center justify-center px-10 py-4 bg-gold text-base-black font-body text-xs md:text-sm tracking-[0.2em] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/20 animate-pulse-gold"
              >
                <span className="relative z-10">Explore Collection</span>
                <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center px-10 py-4 border border-off-white/20 text-off-white/80 text-xs md:text-sm tracking-[0.2em] uppercase hover:border-gold/60 hover:text-gold transition-all duration-500"
              >
                Our Story
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Brand ticker at bottom ────────────────────── */}
      <div
        className={`absolute bottom-16 left-0 right-0 z-10 overflow-hidden transition-all duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "2.1s" }}
      >
        <div className="marquee-track">
          {[...Array(8)].map((_, setIdx) =>
            brandTicker.map((brand, i) => (
              <span
                key={`${setIdx}-${i}`}
                className="text-off-white/10 font-display text-xl md:text-2xl tracking-[0.3em] mx-8 md:mx-12 whitespace-nowrap"
              >
                {brand} ·
              </span>
            ))
          )}
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <div
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 transition-all duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "2.4s" }}
      >
        <span className="text-off-white/30 text-[10px] tracking-[0.3em] uppercase font-body">
          Scroll
        </span>
        <div className="w-px h-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gold to-transparent animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
