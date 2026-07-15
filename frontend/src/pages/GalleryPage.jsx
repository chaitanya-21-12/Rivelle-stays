import React, { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { GALLERY_ALL } from "../data/site";

const FILTERS = [
  { label: "All", key: "all" },
  { label: "Rooms", key: "ROOM" },
  { label: "Common Areas", key: "COMMON" },
  { label: "In-House Café", key: "CAFÉ" },
];

const GalleryPage = () => {
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    filter === "all"
      ? GALLERY_ALL
      : GALLERY_ALL.filter((g) => g.caption.includes(filter));

  const openAt = (idx) => setLightbox(idx);
  const close = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightbox((i) => (i + 1) % filtered.length);

  return (
    <div className="bg-blush min-h-screen">
      <PageHeader
        eyebrow="GALLERY"
        title={<>Moments from <span className="italic text-rose">the property.</span></>}
        subtitle="A closer look at the corners, textures and craft that make Rivelle feel like Rivelle."
      />

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-10">
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`px-5 py-2 rounded-full text-[11px] tracking-widest-2 font-medium transition-all border ${
                filter === f.key
                  ? "bg-rose text-cream border-rose"
                  : "bg-cream/50 text-ink/70 border-rose/20 hover:bg-cream"
              }`}
            >
              {f.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {filtered.map((g, i) => (
              <button
                key={i}
                onClick={() => openAt(i)}
                className="gallery-item relative overflow-hidden rounded-sm group w-full break-inside-avoid block"
              >
                <img 
                  src={g.src} 
                  alt={g.caption} 
                  loading="lazy" 
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-[1.5s]" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-[9px] tracking-widest-3 text-cream">{g.caption}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && filtered[lightbox] && (
        <div className="fixed inset-0 z-[80] bg-ink/95 flex items-center justify-center p-6 animate-fade-in">
          <button
            onClick={close}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center"
            aria-label="Close"
          >
            <X size={20} />
          </button>
          <button
            onClick={prev}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center"
            aria-label="Previous"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={next}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-cream/10 text-cream hover:bg-cream/20 flex items-center justify-center"
            aria-label="Next"
          >
            <ChevronRight size={22} />
          </button>
          <div className="max-w-5xl w-full">
            <img
              src={filtered[lightbox].src}
              alt={filtered[lightbox].caption}
              className="w-full max-h-[80vh] object-contain"
            />
            <div className="text-center mt-5 text-cream/70 text-[10px] tracking-widest-3">
              {filtered[lightbox].caption} · {lightbox + 1} / {filtered.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
