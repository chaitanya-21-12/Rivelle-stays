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
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          <div className="reveal">
            <div className="ornament-line text-[11px] tracking-widest-3 text-rose mb-6 max-w-[220px]">
              <span>IN-HOUSE DINING</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink mb-6 leading-[1.05]">
              Home-style Indian,
              <br />
              <span className="italic text-rose">served warm.</span>
            </h2>
            <div className="space-y-4 text-ink/75 leading-relaxed mb-8">
              <p>
                Our dining room serves a home-style Indian breakfast and an à la carte menu of comfort favourites throughout the day.
              </p>
              <p>
                Ask us about local recommendations — our team knows Jaipur’s best places for chai, dinner and everything in between.
              </p>
            </div>
            <div className="inline-flex flex-col gap-1.5 pt-6 border-t border-rose/15">
              <div className="text-[10px] tracking-widest-3 text-ink/50">TIMINGS</div>
              <p className="text-ink/80 text-sm font-medium">Breakfast · Lunch · Dinner</p>
              <p className="text-ink/60 text-xs italic">Room service available during limited hours</p>
            </div>
          </div>
          
          <div className="reveal relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-[0_30px_60px_-25px_rgba(109,30,25,0.35)]">
              <img 
                src="/photos/rest_1.webp" 
                alt="Rivelle in-house dining" 
                loading="lazy" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
            </div>
            <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-24 h-24 border border-rose/40" />
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 border border-rose/40" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AmenitiesPage;
