import React from "react";
import { MapPin } from "lucide-react";
import { LOCATION_STATS, PROPERTY } from "../data/site";

const Location = () => {
  return (
    <section id="location" className="py-24 md:py-36 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="h-px w-8 bg-gerua/70" />
            <span className="text-[11px] tracking-widest-3 text-gerua font-medium">LOCATION</span>
            <span className="h-px w-8 bg-gerua/70" />
          </div>
          <h2 className="font-display text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Well placed, and <span className="italic text-gerua-dark">easy to find.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Address card */}
          <div className="reveal bg-muted/50 p-8 md:p-12 rounded-sm border border-ink/5">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-11 h-11 rounded-full bg-gerua/15 flex items-center justify-center text-gerua-dark flex-shrink-0">
                <MapPin size={18} strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[10px] tracking-widest-3 text-ink/50 mb-2">ADDRESS</div>
                <p className="text-ink/85 font-display text-xl leading-snug">
                  {PROPERTY.address}
                </p>
                <p className="text-ink/60 text-sm mt-1">{PROPERTY.city}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-ink/10">
              {LOCATION_STATS.map((s) => (
                <div key={s.label}>
                  <div className="text-[10px] tracking-widest-3 text-ink/50 mb-1">{s.label}</div>
                  <div className="font-display text-xl text-gerua-dark">{s.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="reveal relative aspect-[4/3] bg-ink/5 rounded-sm overflow-hidden border border-ink/10">
            <iframe
              title="Rivelle Boutique Stays location"
              src="https://www.google.com/maps?q=Rivelle+Boutique+Stays+Jaipur,+15+A+Ajmer+Rd+Shiv+Marg+Gopalbari+Jaipur&output=embed"
              className="absolute inset-0 w-full h-full grayscale-[0.15]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
