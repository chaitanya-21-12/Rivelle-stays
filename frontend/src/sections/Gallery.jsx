import React from "react";
import { GALLERY } from "../data/site";

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 md:py-36 bg-ink text-cream">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="h-px w-8 bg-gerua-glow/70" />
            <span className="text-[11px] tracking-widest-3 text-gerua-glow font-medium">GALLERY</span>
            <span className="h-px w-8 bg-gerua-glow/70" />
          </div>
          <h2 className="font-display text-cream text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Moments from the <span className="italic text-gerua-glow">property.</span>
          </h2>
          <p className="text-cream/70">
            A closer look at the courtyards, corners and craft that make Rivelle feel like Rivelle.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {GALLERY.map((g, i) => (
            <div
              key={i}
              className={`gallery-item relative group overflow-hidden rounded-sm reveal ${
                i === 0 ? "md:row-span-2 md:col-span-2" : ""
              }`}
            >
              <div className={`${i === 0 ? "aspect-[16/11]" : "aspect-[4/5]"} w-full`}>
                <img
                  src={g.image}
                  alt={g.caption}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <div className="text-[9px] md:text-[10px] tracking-widest-3 text-cream/90">{g.caption}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
