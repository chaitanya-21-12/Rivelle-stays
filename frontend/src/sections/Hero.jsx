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
      {/* Layer 1 — blurred backdrop of same image so the sides are never empty */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover scale-110"
          style={{ filter: "blur(28px) brightness(0.55) saturate(1.1)" }}
        />
        <div className="absolute inset-0 bg-ink/45" />
      </div>

      {/* Layer 2 — actual property image, centered at natural aspect, never stretched */}
      <div className="relative z-[1] min-h-[100svh] flex items-center justify-center">
        <div className="relative w-full max-w-[720px] h-[100svh] flex items-center justify-center px-4">
          <img
            src={HERO_IMAGE}
            alt="Rivelle Boutique Stays — the property at dusk"
            className="max-h-[92vh] w-auto h-auto object-contain shadow-[0_30px_80px_-20px_rgba(0,0,0,0.6)] rounded-sm"
          />
          {/* Soft glow around image */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink/40 rounded-sm" />
        </div>
      </div>

      {/* Overlay top gradient for header contrast */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-ink/70 via-ink/25 to-transparent z-[2] pointer-events-none" />

      {/* Overlay bottom gradient for text content */}
      <div className="absolute bottom-0 inset-x-0 h-[55%] bg-gradient-to-t from-ink/85 via-ink/50 to-transparent z-[2] pointer-events-none" />

      {/* Decorative R on the far right */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none z-[2]">
        <span className="font-display text-[240px] leading-none text-cream/[0.05] select-none">R</span>
      </div>

      {/* Address chip — top right */}
      <div className="hidden md:flex absolute top-24 right-10 z-10 items-center gap-2 text-cream/70 text-[10px] tracking-widest-3">
        <span className="w-1.5 h-1.5 rounded-full bg-gerua-glow animate-pulse" />
        GOPALBARI · JAIPUR
      </div>

      {/* Content — anchored to bottom */}
      <div className="relative z-10 -mt-[100svh] min-h-[100svh] flex flex-col items-center justify-end pb-16 md:pb-24 px-6 text-center pointer-events-none">
        <div className="animate-fade-in max-w-4xl pointer-events-auto">
          <div className="flex items-center gap-3 justify-center mb-5">
            <span className="h-px w-8 bg-gerua-glow/80" />
            <span className="text-[10px] md:text-[11px] tracking-widest-3 text-gerua-glow font-light">
              HERITAGE · BOUTIQUE · JAIPUR
            </span>
            <span className="h-px w-8 bg-gerua-glow/80" />
          </div>

          <h1 className="font-display text-cream text-[52px] sm:text-[76px] md:text-[100px] lg:text-[128px] leading-[0.95] tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.75)]">
            RIVELLE
          </h1>

          <div className="mt-1 md:mt-2 font-display text-gerua-glow text-lg sm:text-2xl md:text-3xl tracking-[0.3em] md:tracking-[0.45em] font-light drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            BOUTIQUE STAYS
          </div>

          <div className="mt-3 md:mt-4 font-display italic text-cream/95 text-lg md:text-xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
            Stay Beautifully in the Pink City
          </div>

          <div className="mt-7 flex items-center justify-center gap-3 flex-wrap">
            <Link
              to="/rooms"
              className="btn-rose inline-flex items-center gap-2 rounded-full px-7 py-3 text-[11px] tracking-widest-2 font-medium"
            >
              EXPLORE OUR ROOMS <ArrowRight size={14} />
            </Link>
            <Link
              to="/about"
              className="btn-outline-cream inline-flex items-center gap-2 rounded-full px-7 py-3 text-[11px] tracking-widest-2"
            >
              OUR STORY
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors"
        aria-label="Scroll to discover"
      >
        <span className="text-[10px] tracking-widest-3">SCROLL TO DISCOVER</span>
        <ChevronDown size={18} className="animate-scroll-bounce" />
      </button>
    </section>
  );
};

export default Hero;
