import React from "react";

const PageHeader = ({ eyebrow, title, subtitle, image }) => {
  return (
    <section
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden bg-blush"
    >
      {image && (
        <>
          <div className="absolute inset-0">
            <img src={image} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-rose-dark/50 to-blush" />
          </div>
        </>
      )}
      <div className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
        {eyebrow && (
          <div className="ornament-line text-[11px] tracking-widest-3 mb-6 max-w-xs mx-auto">
            <span className={image ? "text-gerua-glow" : "text-rose"}>{eyebrow}</span>
          </div>
        )}
        <h1
          className={`font-display text-4xl md:text-6xl lg:text-7xl leading-[1.02] ${
            image ? "text-cream" : "text-ink"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className={`mt-6 max-w-2xl mx-auto text-base md:text-lg font-light ${
              image ? "text-cream/80" : "text-ink/70"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHeader;
