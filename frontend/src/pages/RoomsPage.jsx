import React from "react";
import { Link } from "react-router-dom";
import { Users, Bed, Maximize2, ArrowRight } from "lucide-react";
import { ROOMS } from "../data/site";
import PageHeader from "../components/PageHeader";

const RoomsPage = () => {
  return (
    <div className="bg-blush min-h-screen">
      <PageHeader
        eyebrow="ROOMS & SUITES"
        title={<>Choose your <span className="italic text-rose">quiet corner.</span></>}
        subtitle="Each room styled around the same warm gerua palette — you’re only choosing how much space, view and quiet you want."
      />

      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid gap-10 lg:gap-14">
          {ROOMS.map((r, i) => (
            <article
              key={r.slug}
              className={`reveal grid lg:grid-cols-2 gap-8 lg:gap-14 items-stretch bg-cream/80 rounded-sm overflow-hidden shadow-[0_20px_50px_-25px_rgba(109,30,25,0.25)] ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <Link to={`/rooms/${r.slug}`} className="relative aspect-[4/3] lg:aspect-auto overflow-hidden group">
                <img
                  src={r.hero}
                  alt={r.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.4s]"
                />
                <div className="absolute top-4 left-4 bg-ink/70 backdrop-blur text-cream text-[10px] tracking-widest-3 px-3 py-1.5 rounded-full">
                  {r.tag}
                </div>

              </Link>

              {/* Details */}
              <div className="p-8 md:p-10 lg:p-12 flex flex-col">
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-ink mb-3">{r.name}</h3>
                <p className="text-ink/70 leading-relaxed mb-6">{r.shortDesc}</p>

                <div className="grid grid-cols-3 gap-3 mb-6 pb-6 border-b border-rose/15">
                  <Spec icon={<Maximize2 size={14} />} label="SIZE" value={r.size} />
                  <Spec icon={<Bed size={14} />} label="BED" value={r.bed} />
                  <Spec icon={<Users size={14} />} label="OCCUPANCY" value={r.occupancy} />
                </div>

                <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {r.features.slice(0, 6).map((f) => (
                    <li key={f} className="text-[13px] text-ink/75 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-rose" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-end justify-between gap-4 flex-wrap">
                  <div>
                    <div className="text-[10px] tracking-widest-3 text-ink/50 mb-1">STARTING FROM</div>
                    <div className="font-display text-2xl text-rose">{r.priceLabel}</div>
                  </div>
                  <Link
                    to={`/rooms/${r.slug}`}
                    className="btn-rose inline-flex items-center gap-2 rounded-full px-6 py-3 text-[11px] tracking-widest-2 font-medium"
                  >
                    VIEW & ENQUIRE <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

const Spec = ({ icon, label, value }) => (
  <div>
    <div className="flex items-center gap-1.5 text-rose mb-1">
      {icon}
      <span className="text-[9px] tracking-widest-3 text-ink/50">{label}</span>
    </div>
    <div className="text-[12px] text-ink/85 font-medium">{value}</div>
  </div>
);

export default RoomsPage;
