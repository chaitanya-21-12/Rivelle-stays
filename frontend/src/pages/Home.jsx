import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Bed, Maximize2, Star } from "lucide-react";
import Hero from "../sections/Hero";
import { ROOMS, PHOTOS, PROPERTY } from "../data/site";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* Intro / About teaser */}
      <section id="next-section" className="py-24 md:py-32 bg-blush">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div className="reveal">
            <div className="ornament-line text-[11px] tracking-widest-3 text-rose mb-6 max-w-[220px]">
              <span>OUR STORY</span>
            </div>
            <h2 className="font-display text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
              A quiet retreat,
              <br />
              <span className="italic text-rose">steeped in Pink City warmth.</span>
            </h2>
            <div className="space-y-5 text-ink/75 leading-relaxed">
              <p>
                Rivelle Boutique Stays is an intimate homestay in the heart of Jaipur — where
                hand-block textiles, framed miniature art and warm hospitality come together.
                Every corner is composed to feel personal.
              </p>
              <p>
                Whether you’re here for a slow weekend, a family celebration or a long stay,
                our small team is on hand to make it feel like home — only warmer.
              </p>
            </div>
            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <Link
                to="/about"
                className="btn-outline-rose inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] tracking-widest-2 font-medium"
              >
                READ OUR STORY <ArrowRight size={14} />
              </Link>

            </div>
          </div>

          <div className="reveal relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-25px_rgba(109,30,25,0.35)]">
              <img
                src="/photos/property_front.webp"
                alt="Rivelle Boutique Stays"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 border border-rose/40" />
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 border border-rose/40" />
          </div>
        </div>
      </section>

      {/* Rooms teaser */}
      <section className="py-24 md:py-32 bg-blushSoft">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <div className="ornament-line text-[11px] tracking-widest-3 text-rose mb-6 max-w-xs mx-auto">
              <span>ROOMS & SUITES</span>
            </div>
            <h2 className="font-display text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-5">
              Three ways to <span className="italic text-rose">stay a while.</span>
            </h2>
            <p className="text-ink/70">
              Each room styled around the same warm gerua palette — you’re choosing how much
              space, view and quiet you want.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {ROOMS.map((r) => (
              <Link
                key={r.slug}
                to={`/rooms/${r.slug}`}
                className="reveal group bg-cream/70 rounded-sm overflow-hidden shadow-[0_18px_40px_-25px_rgba(109,30,25,0.3)] hover:shadow-[0_30px_60px_-25px_rgba(109,30,25,0.4)] transition-shadow"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={r.hero}
                    alt={r.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.4s]"
                  />
                  <div className="absolute top-4 left-4 bg-ink/70 backdrop-blur text-cream text-[10px] tracking-widest-3 px-3 py-1.5 rounded-full">
                    {r.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl md:text-3xl text-ink mb-2">{r.name}</h3>
                  <p className="text-ink/65 text-sm leading-relaxed mb-5 line-clamp-2">{r.shortDesc}</p>
                  <div className="grid grid-cols-3 gap-2 pb-5 mb-5 border-b border-rose/15">
                    <IconStat icon={<Maximize2 size={12} />} value={r.size} />
                    <IconStat icon={<Bed size={12} />} value={r.bed} />
                    <IconStat icon={<Users size={12} />} value={r.occupancy} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-[10px] tracking-widest-3 text-ink/50 mb-0.5">STARTING FROM</div>
                      <div className="font-display text-lg text-rose">{r.priceLabel}</div>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] tracking-widest-2 text-rose group-hover:gap-2 transition-all">
                      EXPLORE <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery teaser */}
      <section className="py-24 md:py-32 bg-blush">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-12 reveal">
            <div className="ornament-line text-[11px] tracking-widest-3 text-rose mb-6 max-w-xs mx-auto">
              <span>MOMENTS</span>
            </div>
            <h2 className="font-display text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
              A closer look, <span className="italic text-rose">quietly composed.</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-3 md:gap-4">
            {/* Big photo — spans 2 rows on left */}
            <div className="col-span-2 row-span-2 overflow-hidden rounded-sm gallery-item">
              <img src={PHOTOS.superDeluxe101[0]} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            {/* Top right */}
            <div className="aspect-[4/3] overflow-hidden rounded-sm gallery-item">
              <img src={PHOTOS.deluxe103[0]} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            {/* Bottom right */}
            <div className="aspect-[4/3] overflow-hidden rounded-sm gallery-item">
              <img src={PHOTOS.deluxe104[0]} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            {/* Bottom row — 3 equal */}
            <div className="aspect-[4/3] overflow-hidden rounded-sm gallery-item">
              <img src={PHOTOS.superDeluxe102[0]} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm gallery-item">
              <img src={PHOTOS.hall[0]} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-sm gallery-item">
              <img src={PHOTOS.suite201[0]} alt="" loading="lazy" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/gallery"
              className="btn-outline-rose inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] tracking-widest-2 font-medium"
            >
              VIEW FULL GALLERY <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const IconStat = ({ icon, value }) => (
  <div className="flex items-center gap-1.5 text-ink/70 text-[11px]">
    <span className="text-rose">{icon}</span>
    <span className="truncate">{value}</span>
  </div>
);

export default Home;
