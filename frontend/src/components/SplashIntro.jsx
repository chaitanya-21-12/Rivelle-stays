import React, { useEffect, useState } from "react";

const SplashIntro = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  // 0 = title fade in, 1 = doors open, 2 = fade out, 3 = done

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 1800);   // start opening doors
    const t2 = setTimeout(() => setStage(2), 4000);   // start fade out
    const t3 = setTimeout(() => {
      setStage(3);
      if (onComplete) onComplete();
    }, 5000);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  const skip = () => {
    setStage(2);
    setTimeout(() => {
      setStage(3);
      if (onComplete) onComplete();
    }, 500);
  };

  if (stage === 3) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] overflow-hidden pointer-events-auto transition-opacity duration-700 ${
        stage === 2 ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden={stage === 2}
    >
      {/* Property image behind doors */}
      <div className="absolute inset-0 bg-ink">
        <img
          src="/photos/property_front.webp"
          alt="Rivelle Boutique Stays entrance"
          className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
            stage >= 1 ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-transparent to-ink/70" />
      </div>

      {/* Left door */}
      <div
        className={`splash-door splash-door-left absolute top-0 bottom-0 left-0 w-1/2 will-change-transform transition-transform duration-[2200ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          stage >= 1 ? "-translate-x-full" : "translate-x-0"
        }`}
      />
      <div
        className={`splash-door splash-door-right absolute top-0 bottom-0 right-0 w-1/2 will-change-transform transition-transform duration-[2200ms] ease-[cubic-bezier(0.65,0,0.35,1)] ${
          stage >= 1 ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {/* Central Rivelle Emblem (visible when doors closed) */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-[2] pointer-events-none transition-opacity duration-700 ${
          stage >= 1 ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="text-center">
          <div className="relative inline-block">
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full bg-ink border-2 border-gerua-glow/50 flex items-center justify-center shadow-[0_0_60px_-5px_rgba(240,163,94,0.4)]">
              <div className="text-center">
                <div className="font-display text-gerua-glow text-4xl md:text-5xl italic mb-1">R</div>
                <div className="text-[9px] tracking-widest-3 text-cream/90">RIVELLE</div>
              </div>
            </div>
            {/* Rays */}
            <div className="absolute inset-0 rounded-full animate-pulse" style={{ boxShadow: "0 0 40px 5px rgba(240,163,94,0.15)" }} />
          </div>
          <h1 className="font-display text-cream text-4xl md:text-6xl mt-8 tracking-widest animate-fade-in">RIVELLE</h1>
          <div className="font-display italic text-gerua-glow text-lg md:text-2xl mt-2 tracking-[0.35em] animate-fade-in" style={{ animationDelay: "0.3s" }}>
            BOUTIQUE STAYS
          </div>
          <div className="mt-8 text-[10px] tracking-widest-3 text-cream/60 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            — WELCOME —
          </div>
        </div>
      </div>

      {/* Text once doors are open */}
      <div
        className={`absolute inset-0 flex items-center justify-center z-[3] pointer-events-none transition-opacity duration-1000 ${
          stage >= 1 ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: stage >= 1 ? "1400ms" : "0ms" }}
      >
        <div className="text-center">
          <div className="font-display italic text-cream/90 text-2xl md:text-3xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Please, step inside.
          </div>
        </div>
      </div>

      {/* Skip button */}
      <button
        onClick={skip}
        className="absolute bottom-6 right-6 z-[5] text-cream/70 hover:text-cream text-[10px] tracking-widest-3 px-4 py-2 border border-cream/25 rounded-full backdrop-blur-md hover:bg-cream/10 transition-colors"
      >
        SKIP INTRO
      </button>
    </div>
  );
};

export default SplashIntro;
