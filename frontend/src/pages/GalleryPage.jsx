import React, { useState, useRef } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { GALLERY_ALL } from "../data/site";

const FILTERS = [
  { label: "All", key: "all" },
  { label: "Rooms", key: "ROOM" },
  { label: "Common Areas", key: "COMMON" },
  { label: "In-House Café", key: "CAFÉ" },
];

/* ── 3-D Tilt Card ────────────────────────────────────────────── */
const TiltCard = ({ src, alt, caption, onClick, className = "" }) => {
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    el.style.transform = `perspective(700px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.04)`;
  };

  const onLeave = () => {
    if (ref.current)
      ref.current.style.transform =
        "perspective(700px) rotateY(0deg) rotateX(0deg) scale(1)";
  };

  return (
    <div
      ref={ref}
      onClick={onClick}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transition: "transform 0.25s ease", willChange: "transform" }}
      className={`relative overflow-hidden rounded-sm cursor-pointer group
        shadow-[0_6px_24px_-10px_rgba(109,30,25,0.25)]
        hover:shadow-[0_24px_50px_-15px_rgba(109,30,25,0.45)]
        transition-shadow duration-500 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="w-full h-full object-cover"
      />
      {/* dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {/* zoom icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-12 h-12 rounded-full bg-cream/20 backdrop-blur-sm flex items-center justify-center border border-cream/30">
          <ZoomIn size={20} className="text-cream" />
        </div>
      </div>
      {/* caption */}
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-[9px] tracking-widest-3 text-cream/90">{caption}</div>
      </div>
    </div>
  );
};

/* ── Bento Row ───────────────────────────────────────────────── */
/*  Even rows: [BIG left] [2×2 right]
    Odd rows:  [2×2 left] [BIG right]            */
const BentoRow = ({ group, startIdx, reversed, onOpen }) => {
  const big   = group[0];
  const smArr = group.slice(1, 5); // up to 4 smalls

  const BigCard = (
    <TiltCard
      key="big"
      src={big.src}
      alt={big.caption}
      caption={big.caption}
      onClick={() => onOpen(startIdx)}
      className="h-full min-h-[260px] md:min-h-[440px]"
    />
  );

  const SmallGrid = (
    <div key="smalls" className="grid grid-cols-2 gap-4 h-full">
      {smArr.map((g, si) => (
        <TiltCard
          key={si}
          src={g.src}
          alt={g.caption}
          caption={g.caption}
          onClick={() => onOpen(startIdx + si + 1)}
          className="aspect-[4/3]"
        />
      ))}
    </div>
  );

  return (
    <div className="grid md:grid-cols-3 gap-4 items-stretch">
      {/* On mobile always stack; on md+ split 1-col big + 2-col smalls */}
      {reversed ? (
        <>
          <div className="md:col-span-2">{SmallGrid}</div>
          <div className="md:col-span-1">{BigCard}</div>
        </>
      ) : (
        <>
          <div className="md:col-span-1">{BigCard}</div>
          <div className="md:col-span-2">{SmallGrid}</div>
        </>
      )}
    </div>
  );
};

/* ── Page ────────────────────────────────────────────────────── */
const GalleryPage = () => {
  const [filter, setFilter]   = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    filter === "all"
      ? GALLERY_ALL
      : GALLERY_ALL.filter((g) => g.caption.includes(filter));

  const close = () => setLightbox(null);
  const prev  = () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
  const next  = () => setLightbox((i) => (i + 1) % filtered.length);

  // chunk into groups of 5 for bento rows
  const groups = [];
  for (let i = 0; i < filtered.length; i += 5) {
    groups.push({ items: filtered.slice(i, i + 5), start: i });
  }

  return (
    <div className="bg-blush min-h-screen">
      <PageHeader
        eyebrow="GALLERY"
        title={<>Moments from <span className="italic text-rose">the property.</span></>}
        subtitle="A closer look at the corners, textures and craft that make Rivelle feel like Rivelle."
      />

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-12">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-6 py-2.5 rounded-full text-[11px] tracking-widest-2 font-medium transition-all border ${
                filter === f.key
                  ? "bg-rose text-cream border-rose shadow-[0_4px_14px_-4px_rgba(109,30,25,0.45)]"
                  : "bg-cream/50 text-ink/70 border-rose/20 hover:bg-cream hover:border-rose/40"
              }`}
            >
              {f.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Gallery */}
      <section className="pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-10 space-y-8">
          {groups.map(({ items, start }, gi) => (
            <BentoRow
              key={gi}
              group={items}
              startIdx={start}
              reversed={gi % 2 !== 0}
              onOpen={setLightbox}
            />
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div
          className="fixed inset-0 z-[80] bg-ink/96 backdrop-blur-md flex items-center justify-center p-6 animate-fade-in"
          onClick={close}
        >
          {/* close */}
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-5 right-5 w-11 h-11 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center transition-colors border border-cream/10"
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center transition-colors border border-cream/10"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>

          {/* next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center transition-colors border border-cream/10"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>

          {/* image */}
          <div
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              className="w-full max-h-[80vh] object-contain rounded-sm"
            />
            <div className="text-center mt-5 flex items-center justify-center gap-3">
              <span className="text-cream/50 text-[10px] tracking-widest-3">
                {filtered[lightbox].caption}
              </span>
              <span className="text-cream/30">·</span>
              <span className="text-cream/50 text-[10px] tracking-widest-3 font-num">
                {lightbox + 1} / {filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
