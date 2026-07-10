import React from "react";
import { Clock, Wifi, UtensilsCrossed, Sparkles, Car, Plane, BatteryCharging, ShieldCheck } from "lucide-react";
import { AMENITIES } from "../data/site";

const ICONS = { Clock, Wifi, UtensilsCrossed, Sparkles, Car, Plane, BatteryCharging, ShieldCheck };

const Amenities = () => {
  return (
    <section id="amenities" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="h-px w-8 bg-gerua/70" />
            <span className="text-[11px] tracking-widest-3 text-gerua font-medium">THE PROPERTY</span>
            <span className="h-px w-8 bg-gerua/70" />
          </div>
          <h2 className="font-display text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Thoughtful things, <span className="italic text-gerua-dark">quietly handled.</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 rounded-sm overflow-hidden reveal">
          {AMENITIES.map((a) => {
            const Icon = ICONS[a.icon] || Sparkles;
            return (
              <div
                key={a.name}
                className="group bg-background p-6 md:p-8 flex flex-col items-start gap-3 hover:bg-muted/40 transition-colors"
              >
                <div className="w-11 h-11 rounded-full bg-gerua/10 flex items-center justify-center text-gerua-dark group-hover:bg-gerua/20 transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl md:text-2xl text-ink">{a.name}</h3>
                <div className="text-[10px] tracking-widest-3 text-ink/55">{a.note}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
