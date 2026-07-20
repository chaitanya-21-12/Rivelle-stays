import React, { useState } from "react";
import { Coffee, UtensilsCrossed, Leaf, ChevronLeft, ChevronRight, X } from "lucide-react";
import PageHeader from "../components/PageHeader";

const CAFE_PHOTOS = [
  "/photos/rest_1.webp",
  "/photos/rest_2.webp",
  "/photos/rest_3.webp",
  "/photos/rest_4.webp",
  "/photos/rest_5.webp",
  "/photos/rest_6.webp",
  "/photos/rest_7.webp",
  "/photos/rest_8.webp",
];

const MENU_HIGHLIGHTS = [
  {
    category: "Breakfast",
    icon: Coffee,
    items: ["Aloo Paratha with Butter & Curd", "Masala Omelette & Toast", "Poha / Upma", "Fresh Fruit Platter", "Chai & Filter Coffee"],
  },
  {
    category: "Lunch & Dinner",
    icon: UtensilsCrossed,
    items: ["Dal Tadka & Jeera Rice", "Paneer Butter Masala", "Mix Veg Curry", "Roti / Paratha Basket", "Seasonal Home-Style Specials"],
  },
  {
    category: "Drinks & Snacks",
    icon: Leaf,
    items: ["Masala Chai", "Cold Coffee", "Fresh Lime Soda", "Samosa & Pakora", "Seasonal Shakes"],
  },
];

const CafePage = () => {
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setLightbox((i) => (i - 1 + CAFE_PHOTOS.length) % CAFE_PHOTOS.length);
  const next = () => setLightbox((i) => (i + 1) % CAFE_PHOTOS.length);

  return (
    <div className="bg-blush min-h-screen">
      <PageHeader
        eyebrow="RIVELLE KITCHEN"
        title={<>Home-cooked warmth, <span className="italic text-rose">served daily.</span></>}
        subtitle="Simple, honest Indian food — made fresh every morning and served through the day."
      />

      {/* Intro section */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">

            {/* Text */}
            <div className="reveal">
              <div className="ornament-line text-[11px] tracking-widest-3 text-rose mb-6 max-w-[220px]">
                <span>IN-HOUSE CAFÉ</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl text-ink mb-6 leading-[1.05]">
                A quiet corner for <br />
                <span className="italic text-rose">every meal.</span>
              </h2>
              <div className="space-y-4 text-ink/75 leading-relaxed mb-8">
                <p>
                  Rivelle Kitchen is our in-house café, serving home-style Indian food that feels like it was cooked just for you.
                  From a warm breakfast to comfort meals through the day — everything is made fresh, with care.
                </p>
                <p>
                  Whether you're planning your day over chai or winding down with a quiet dinner, our kitchen is always nearby.
                </p>
              </div>

              {/* Timings */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-rose/15">
                {[
                  { label: "Breakfast", time: "7:30 – 10:30 AM" },
                  { label: "Lunch", time: "12:30 – 3:00 PM" },
                  { label: "Dinner", time: "7:30 – 10:30 PM" },
                ].map((t) => (
                  <div key={t.label} className="text-center">
                    <div className="text-[10px] tracking-widest-3 text-ink/40 mb-1">{t.label.toUpperCase()}</div>
                    <div className="text-ink/80 text-sm font-medium">{t.time}</div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-ink/50 italic mt-4">
                * Room service available during limited hours. Ask at reception.
              </p>
            </div>

            {/* Hero photo */}
            <div className="reveal relative cursor-pointer" onClick={() => setLightbox(0)}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-25px_rgba(109,30,25,0.35)]">
                <img
                  src={CAFE_PHOTOS[0]}
                  alt="Rivelle Kitchen café"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
                <div className="absolute bottom-4 right-4 bg-cream/90 rounded-full px-3 py-1.5 text-[10px] tracking-widest-2 text-ink/70">
                  VIEW GALLERY
                </div>
              </div>
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 border border-rose/40" />
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 border border-rose/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="py-16 md:py-20 bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="ornament-line text-[11px] tracking-widest-3 text-rose mb-10 max-w-[180px]">
            <span>THE SPACE</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {CAFE_PHOTOS.map((src, i) => (
              <div
                key={i}
                className="reveal aspect-square overflow-hidden rounded-sm cursor-pointer group"
                onClick={() => setLightbox(i)}
              >
                <img
                  src={src}
                  alt={"Rivelle Kitchen " + (i + 1)}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu highlights */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-14 reveal">
            <div className="ornament-line text-[11px] tracking-widest-3 text-rose mb-6 max-w-[200px] mx-auto">
              <span>ON THE MENU</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-tight">
              Simple food, <span className="italic text-rose">made with love.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {MENU_HIGHLIGHTS.map(({ category, icon: Icon, items }) => (
              <div key={category} className="reveal bg-cream/70 rounded-sm p-8 border border-rose/10 hover:bg-cream transition-colors">
                <div className="w-12 h-12 rounded-full bg-rose/10 text-rose flex items-center justify-center mb-5">
                  <Icon size={20} strokeWidth={1.6} />
                </div>
                <h3 className="font-display text-2xl text-ink mb-4">{category}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="text-ink/70 text-sm leading-relaxed flex items-start gap-2">
                      <span className="text-rose/60 mt-1.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-center text-ink/45 text-xs italic mt-10">
            Menu may vary by season and availability. Vegetarian options always available.
          </p>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 bg-ink/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 text-cream/80 hover:text-cream"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-cream/80 hover:text-cream bg-ink/40 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={28} />
          </button>
          <img
            src={CAFE_PHOTOS[lightbox]}
            alt={"Cafe " + (lightbox + 1)}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-cream/80 hover:text-cream bg-ink/40 rounded-full p-2"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={28} />
          </button>
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-cream/50 text-xs tracking-widest-2">
            {lightbox + 1} / {CAFE_PHOTOS.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default CafePage;
