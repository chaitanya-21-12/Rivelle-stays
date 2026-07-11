import React, { useState, useEffect } from "react";
import { Link, useParams, Navigate } from "react-router-dom";
import { Users, Bed, Maximize2, ArrowLeft, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { ROOMS } from "../data/site";
import BookingForm from "../components/BookingForm";

const RoomDetail = () => {
  const { slug } = useParams();
  const room = ROOMS.find((r) => r.slug === slug);
  const [active, setActive] = useState(0);

  useEffect(() => setActive(0), [slug]);

  if (!room) return <Navigate to="/rooms" replace />;

  const photos = room.photos;
  const next = () => setActive((i) => (i + 1) % photos.length);
  const prev = () => setActive((i) => (i - 1 + photos.length) % photos.length);

  return (
    <div className="bg-blush min-h-screen">
      {/* Breadcrumb / back */}
      <div className="pt-28 md:pt-32 pb-4">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <Link
            to="/rooms"
            className="inline-flex items-center gap-2 text-[11px] tracking-widest-2 text-rose hover:text-rose-dark transition-colors"
          >
            <ArrowLeft size={13} /> BACK TO ALL ROOMS
          </Link>
        </div>
      </div>

      {/* Main layout */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Left: gallery + info */}
          <div className="lg:col-span-3">
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-[0_20px_50px_-25px_rgba(109,30,25,0.35)] mb-4">
              <img
                key={active}
                src={photos[active]}
                alt={`${room.name} — view ${active + 1}`}
                className="w-full h-full object-cover animate-fade-in"
              />
              <div className="absolute top-4 left-4 bg-ink/70 backdrop-blur text-cream text-[10px] tracking-widest-3 px-3 py-1.5 rounded-full">
                {room.tag}
              </div>

              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/85 text-rose flex items-center justify-center hover:bg-cream transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-cream/85 text-rose flex items-center justify-center hover:bg-cream transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
              <div className="absolute bottom-4 right-4 bg-ink/70 backdrop-blur text-cream text-[10px] tracking-widest-2 px-3 py-1.5 rounded-full">
                {active + 1} / {photos.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-6 gap-2">
              {photos.slice(0, 6).map((p, i) => (
                <button
                  key={p}
                  onClick={() => setActive(i)}
                  className={`aspect-[4/3] rounded-sm overflow-hidden transition-all ${
                    active === i
                      ? "ring-2 ring-rose ring-offset-2 ring-offset-blush"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <img src={p} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Room info */}
            <div className="mt-10 reveal">
              <div className="text-[10px] tracking-widest-3 text-rose mb-3">{room.tag}</div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-ink leading-[1.05] mb-6">
                {room.name}
              </h1>
              <p className="text-ink/75 leading-relaxed text-lg mb-8">{room.longDesc}</p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 py-5 border-y border-rose/15 mb-8">
                <Spec icon={<Maximize2 size={14} />} label="SIZE" value={room.size} />
                <Spec icon={<Bed size={14} />} label="BED" value={room.bed} />
                <Spec icon={<Users size={14} />} label="OCCUPANCY" value={room.occupancy} />
              </div>

              {/* Features */}
              <h2 className="font-display text-2xl text-ink mb-5">In this room</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {room.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-ink/80 text-sm">
                    <Check size={15} className="text-rose mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: sticky booking */}
          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-24">
              <BookingForm room={room} />
            </div>
          </aside>
        </div>
      </section>

      {/* Other rooms */}
      <section className="py-16 md:py-24 bg-blushSoft">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-8 flex-wrap gap-4">
            <h2 className="font-display text-3xl md:text-4xl text-ink">
              Also on the property
            </h2>
            <Link to="/rooms" className="text-[11px] tracking-widest-2 text-rose hover:text-rose-dark">
              VIEW ALL ROOMS →
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {ROOMS.filter((r) => r.slug !== slug).map((r) => (
              <Link
                key={r.slug}
                to={`/rooms/${r.slug}`}
                className="group relative aspect-[16/10] rounded-sm overflow-hidden"
              >
                <img src={r.hero} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.2s]" />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="text-[10px] tracking-widest-3 text-gerua-glow mb-2">{r.tag}</div>
                  <h3 className="font-display text-2xl md:text-3xl text-cream">{r.name}</h3>
                </div>
              </Link>
            ))}
          </div>
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
    <div className="text-[13px] text-ink/85 font-medium">{value}</div>
  </div>
);

export default RoomDetail;
