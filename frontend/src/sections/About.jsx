import React from "react";
import { IMAGES } from "../data/site";

const About = () => {
  return (
    <section id="about" className="relative py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
        <div className="reveal">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-gerua/70" />
            <span className="text-[11px] tracking-widest-3 text-gerua font-medium">OUR STORY</span>
          </div>
          <h2 className="font-display text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-8">
            A quiet retreat,
            <br />
            <span className="italic text-gerua-dark">steeped in gerua warmth.</span>
          </h2>
          <div className="space-y-5 text-ink/75 leading-relaxed">
            <p>
              Rivelle Boutique Stays is an intimate homestay-style property where hand-picked interiors,
              warm hospitality and a distinctly Indian sense of place come together. Every corner is
              composed to feel personal — never like a chain hotel.
            </p>
            <p>
              Whether you're here for a slow weekend, a family celebration or a long stay away from
              the city, our small team is on hand to make it feel like home — only warmer.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            <Stat number="3" label="ROOM CATEGORIES" />
            <Stat number="24×7" label="FRONT DESK" />
            <Stat number="5.0★" label="9 GOOGLE REVIEWS" />
          </div>
        </div>

        <div className="reveal relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-25px_rgba(28,21,18,0.4)]">
            <img src={IMAGES.about} alt="Entrance archway of Rivelle Boutique Stays" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
          </div>
          {/* Corner accent */}
          <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 border border-gerua/40" />
          <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 border border-gerua/40" />
        </div>
      </div>
    </section>
  );
};

const Stat = ({ number, label }) => (
  <div>
    <div className="font-display text-3xl md:text-4xl text-gerua-dark">{number}</div>
    <div className="text-[10px] tracking-widest-3 text-ink/55 mt-2">{label}</div>
  </div>
);

export default About;
