import React from "react";
import { ChevronDown } from "lucide-react";
import { IMAGES } from "../data/site";

const Hero = () => {
  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Rivelle Boutique Stays courtyard at golden hour"
          className="w-full h-full object-cover ken-burns"
        />
        {/* Dark warm overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(28,21,18,0.55)_75%)]" />
      </div>

      {/* Vertical decorative R */}
      <div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 hidden md:block pointer-events-none">
        <span className="font-display text-[240px] leading-none text-cream/[0.06] select-none">R</span>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[100svh] flex flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center gap-3 justify-center mb-8">
            <span className="h-px w-8 bg-gerua-glow/70" />
            <span className="text-[10px] md:text-[11px] tracking-widest-3 text-gerua-glow font-light">
              HERITAGE · BOUTIQUE · HOMESTAY
            </span>
            <span className="h-px w-8 bg-gerua-glow/70" />
          </div>

          <h1 className="font-display text-cream text-[64px] sm:text-[90px] md:text-[130px] lg:text-[160px] leading-[0.95] tracking-tight">
            RIVELLE
          </h1>

          <div className="mt-2 md:mt-4 font-display text-gerua-glow text-2xl sm:text-3xl md:text-5xl tracking-[0.3em] md:tracking-[0.45em] font-light">
            BOUTIQUE STAYS
          </div>

          <div className="mt-6 md:mt-8 font-display italic text-cream/90 text-2xl md:text-3xl">
            Stay Beautifully
          </div>

          <p className="mt-8 max-w-xl mx-auto text-cream/75 text-sm md:text-base font-light italic">
            “A boutique retreat wrapped in gerua warmth and heritage calm.”
          </p>

          <div className="mt-10">
            <a
              href="#about"
              onClick={(e) => { e.preventDefault(); scrollToAbout(); }}
              className="btn-outline-cream inline-flex items-center gap-3 rounded-full px-8 py-3.5 text-[11px] tracking-widest-2"
            >
              ENTER THE HERITAGE EXPERIENCE
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/60 hover:text-cream transition-colors"
        aria-label="Scroll to discover"
      >
        <span className="text-[10px] tracking-widest-3">SCROLL TO DISCOVER</span>
        <ChevronDown size={18} className="animate-scroll-bounce" />
      </button>
    </section>
  );
};

export default Hero;
