import React from "react";
import { Clock, Wifi, UtensilsCrossed, Sparkles, Car, Plane, BatteryCharging, ShieldCheck, MapPin, Thermometer, Tv, BedDouble, ShowerHead, Coffee, ArrowUpDown, Droplets, Package, Wind, Zap, GlassWater, Laptop, Navigation, Bath } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { AMENITIES, LOCATION_STATS, PROPERTY, PHOTOS } from "../data/site";

const ICONS = { Clock, Wifi, UtensilsCrossed, Sparkles, Car, Plane, BatteryCharging, ShieldCheck, MapPin, Thermometer, Tv, BedDouble, ShowerHead, Coffee, ArrowUpDown, Droplets, Package, Wind, Zap, GlassWater, Laptop, Navigation, Bath };

const AmenitiesPage = () => {
  return (
    <div className="bg-blush min-h-screen">
      <PageHeader
        eyebrow="THE PROPERTY"
        title={<>Thoughtful things, <span className="italic text-rose">quietly handled.</span></>}
        subtitle="Small comforts and considered service, so you can settle in and let Jaipur unfold at your own pace."
      />

      {/* Amenities grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AMENITIES.map((a) => {
              const Icon = ICONS[a.icon] || Sparkles;
              return (
                <div key={a.name} className="reveal bg-cream/70 rounded-sm p-7 hover:bg-cream/95 transition-colors border border-rose/10">
                  <div className="w-12 h-12 rounded-full bg-rose/10 text-rose flex items-center justify-center mb-5">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-2">{a.name}</h3>
                  <div className="text-[10px] tracking-widest-3 text-rose/70 mb-3">{a.note}</div>
                  <p className="text-ink/70 text-sm leading-relaxed">{a.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>



      {/* Dining teaser */}
      <section className="py-24 md:py-32 bg-blush">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 items-center">
          <div className="reveal">
            <div className="text-[11px] tracking-widest-3 text-rose mb-4">IN-HOUSE DINING</div>
            <h2 className="font-display text-4xl md:text-5xl text-ink mb-5">Home-style Indian, <span className="italic text-rose">served warm.</span></h2>
            <p className="text-ink/75 leading-relaxed mb-5">
              Our dining hall serves a home-style Indian breakfast and an à la carte menu of
              comfort favourites throughout the day. Ask us about local recommendations —
              our team knows Jaipur’s best places for chai, dinner and everything in between.
            </p>
            <p className="text-ink/60 text-sm">Breakfast · Lunch · Dinner · Room service (limited hours)</p>
          </div>
          <div className="reveal grid grid-cols-2 gap-3">
            {PHOTOS.hall.slice(0, 4).map((src, i) => (
              <div key={i} className={`overflow-hidden rounded-sm ${i === 0 ? "col-span-2 aspect-[16/10]" : "aspect-square"}`}>
                <img src={src} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;
