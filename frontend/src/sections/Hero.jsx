import React from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { HERO_IMAGE } from "../data/site";

const Hero = () => {
  const scrollToNext = () => {
    const el = document.querySelector("#next-section");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Background — property front */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt="Rivelle Boutique Stays — the property at dusk"
          className="w-full h-full object-cover ken-burns"
          style={{ objectPosition: "center 30%" }}
        />
        {/* Cinematic warm overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/25 to-ink/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-ink/50" />
      </div>

      {/* Decorative R */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
        <span className="font-display text-[240px] leading-none text-cream/[0.04] select-none">R</span>
      </div>

      {/* Address chip — top right */}
      <div className="hidden md:flex absolute top-24 right-10 z-10 items-center gap-2 text-cream/70 text-[10px] tracking-widest-3">
        <span className="w-1.5 h-1.5 rounded-full bg-gerua-glow animate-pulse" />
        GOPALBARI · JAIPUR
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-end pb-24 md:pb-28 px-6 text-center">
        <div className="animate-fade-in max-w-4xl">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="h-px w-8 bg-gerua-glow/80" />
            <span className="text-[10px] md:text-[11px] tracking-widest-3 text-gerua-glow font-light">
              HERITAGE · BOUTIQUE · JAIPUR
            </span>
            <span className="h-px w-8 bg-gerua-glow/80" />
          </div>

          <h1 className="font-display text-cream text-[56px] sm:text-[80px] md:text-[110px] lg:text-[140px] leading-[0.95] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.55)]">
            RIVELLE
          </h1>

          <div className="mt-2 md:mt-3 font-display text-gerua-glow text-xl sm:text-2xl md:text-4xl tracking-[0.3em] md:tracking-[0.45em] font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            BOUTIQUE STAYS
          </div>

          <div className="mt-4 md:mt-6 font-display italic text-cream/95 text-xl md:text-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.55)]">
            Stay Beautifully in the Pink City
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/rooms"
              className="btn-rose inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[11px] tracking-widest-2 font-medium"
            >
              EXPLORE OUR ROOMS <ArrowRight size={14} />
            </Link>
            <Link
              to="/about"
              className="btn-outline-cream inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[11px] tracking-widest-2"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors"
        aria-label="Scroll to discover"
      >
        <span className="text-[10px] tracking-widest-3">SCROLL TO DISCOVER</span>
        <ChevronDown size={18} className="animate-scroll-bounce" />
      </button>
    </section>
  );
};

export default Hero;
