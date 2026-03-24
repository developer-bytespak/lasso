"use client";

import { useEffect, useState } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden bg-deep-black"
    >
      {/* ── Background Video ──────────────────────────── */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[3s] ${
            loaded ? "scale-100" : "scale-110"
          }`}
        >
          {/* Replace src with your hero video */}
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Animated gradient fallback (visible when no video) */}
        <div
          className="absolute inset-0 animate-gradient bg-[length:400%_400%]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 20%, #1a1510 40%, #0a0a0a 60%, #151015 80%, #0a0a0a 100%)",
          }}
        />
      </div>

      {/* ── Overlays ──────────────────────────────────── */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-deep-black/20 to-deep-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-black/60 via-transparent to-transparent" />

      {/* ── Ambient glow orbs ─────────────────────────── */}
      <div className="absolute top-[20%] right-[22%] w-[500px] h-[500px] rounded-full bg-gold/5 blur-[120px] animate-float pointer-events-none" />
      <div className="absolute bottom-[25%] left-[10%] w-80 h-80 rounded-full bg-gold/[0.03] blur-[100px] animate-float-slow pointer-events-none" />

      {/* ── Content ───────────────────────────────────── */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Gold accent line */}
            <div
              className={`h-px bg-gold transition-all duration-1000 ease-out ${
                loaded ? "w-20 opacity-100" : "w-0 opacity-0"
              }`}
              style={{ transitionDelay: "0.4s" }}
            />

            {/* Subtitle */}
            <p
              className={`mt-8 text-gold tracking-[0.4em] uppercase text-xs md:text-sm transition-all duration-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "0.6s" }}
            >
              Premium Hair Styling Experience
            </p>

            {/* Main heading */}
            <h1
              className={`mt-6 font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-cream leading-[1.05] transition-all duration-1000 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "0.8s" }}
            >
              Where Beauty
              <br />
              Becomes <em className="text-gold not-italic">Art</em>
            </h1>

            {/* Description */}
            <p
              className={`mt-8 text-cream/50 text-lg md:text-xl leading-relaxed max-w-lg transition-all duration-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "1.1s" }}
            >
              Transformative braids, weaves, and styling crafted with precision,
              passion, and an eye for timeless beauty.
            </p>

            {/* CTAs */}
            <div
              className={`mt-10 flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
                loaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "1.4s" }}
            >
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center px-10 py-4 bg-gold text-deep-black font-sans text-xs md:text-sm tracking-[0.2em] uppercase font-medium overflow-hidden transition-all duration-500 hover:shadow-lg hover:shadow-gold/20"
              >
                <span className="relative z-10">Book Your Session</span>
                <div className="absolute inset-0 bg-gold-light translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
              <a
                href="#styles"
                className="inline-flex items-center justify-center px-10 py-4 border border-cream/20 text-cream/80 text-xs md:text-sm tracking-[0.2em] uppercase hover:border-gold/60 hover:text-gold transition-all duration-500"
              >
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ──────────────────────────── */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "1.8s" }}
      >
        <span className="text-cream/30 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <div className="w-px h-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gold to-transparent animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
