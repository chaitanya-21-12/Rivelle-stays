import React, { useState } from "react";
import { Users, Bed, Maximize2, ArrowRight } from "lucide-react";
import { ROOMS } from "../data/site";
import { useToast } from "../hooks/use-toast";

const Rooms = () => {
  const { toast } = useToast();
  const [active, setActive] = useState(0);

  const handleEnquire = (roomName) => {
    toast({ title: `Enquiry for ${roomName}`, description: "We'll get in touch shortly." });
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="rooms" className="relative py-24 md:py-36 bg-muted/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal">
          <div className="flex items-center gap-3 justify-center mb-6">
            <span className="h-px w-8 bg-gerua/70" />
            <span className="text-[11px] tracking-widest-3 text-gerua font-medium">ROOMS & SUITES</span>
            <span className="h-px w-8 bg-gerua/70" />
          </div>
          <h2 className="font-display text-ink text-4xl md:text-5xl lg:text-6xl leading-[1.05] mb-6">
            Three ways to <span className="italic text-gerua-dark">stay a while.</span>
          </h2>
          <p className="text-ink/70">
            Each room is styled around the same warm gerua palette — you're only choosing how much
            space, view and quiet you want.
          </p>
        </div>

        {/* Rooms grid */}
        <div className="grid gap-10 lg:gap-14">
          {ROOMS.map((room, i) => (
            <div
              key={room.id}
              className={`reveal grid lg:grid-cols-2 gap-8 lg:gap-14 items-stretch bg-background rounded-sm overflow-hidden shadow-[0_20px_50px_-25px_rgba(28,21,18,0.25)] ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
              onMouseEnter={() => setActive(i)}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] lg:aspect-auto overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[1.2s]"
                />
                <div className="absolute top-4 left-4 bg-ink/70 backdrop-blur text-cream text-[10px] tracking-widest-3 px-3 py-1.5 rounded-full">
                  {room.tag}
                </div>
              </div>

              {/* Details */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col">
                <h3 className="font-display text-3xl md:text-4xl text-ink mb-3">{room.name}</h3>
                <p className="text-ink/70 leading-relaxed mb-6">{room.description}</p>

                {/* Room quick specs */}
                <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-ink/10">
                  <Spec icon={<Maximize2 size={14} />} label="SIZE" value={room.size} />
                  <Spec icon={<Bed size={14} />} label="BED" value={room.bed} />
                  <Spec icon={<Users size={14} />} label="OCCUPANCY" value={room.occupancy} />
                </div>

                {/* Feature list */}
                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {room.features.map((f) => (
                    <li key={f} className="text-[13px] text-ink/75 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-gerua" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-end justify-between gap-4 flex-wrap">
                  <div>
                    <div className="text-[10px] tracking-widest-3 text-ink/50 mb-1">FROM</div>
                    <div className="font-display text-2xl text-gerua-dark">{room.price}</div>
                  </div>
                  <button
                    onClick={() => handleEnquire(room.name)}
                    className="btn-gerua inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] tracking-widest-2 font-medium"
                  >
                    ENQUIRE NOW
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Spec = ({ icon, label, value }) => (
  <div>
    <div className="flex items-center gap-1.5 text-gerua-dark mb-1">
      {icon}
      <span className="text-[9px] tracking-widest-3 text-ink/50">{label}</span>
    </div>
    <div className="text-[12px] text-ink/85 font-medium">{value}</div>
  </div>
);

export default Rooms;
