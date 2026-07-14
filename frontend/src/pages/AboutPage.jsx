import React from "react";
import { Link } from "react-router-dom";
import { Star, ArrowRight, Heart, Home, Coffee } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { PROPERTY, PHOTOS } from "../data/site";

const VALUES = [
  { icon: Heart, title: "Personal, never chain", desc: "A small property, a small team, and a real relationship with every guest who walks through the door." },
  { icon: Home, title: "Rooted in Jaipur", desc: "Every detail — the block prints, the framed miniatures, the warm lamp glow — draws from the Pink City’s craft heritage." },
  { icon: Coffee, title: "Slow by design", desc: "Rivelle is built for slow mornings, unhurried tea, and evenings that let the day unwind gently." },
];

const AboutPage = () => {
  return (
    <div className="bg-blush min-h-screen">
      <PageHeader
        eyebrow="OUR STORY"
        title={<>Steeped in <span className="italic text-rose">gerua warmth.</span></>}
        subtitle="An intimate boutique homestay in the heart of Jaipur — hand-picked interiors, warm hospitality, and a distinctly Indian sense of place."
      />

      {/* Story */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div className="reveal">
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-6 leading-tight">
              Where <span className="italic text-rose">Jaipur’s craft heritage</span> meets a
              modern homestay.
            </h2>
            <div className="space-y-5 text-ink/75 leading-relaxed">
              <p>
                Rivelle Boutique Stays was born from a simple idea — that great hospitality
                is quiet, personal, and rooted in the place it lives in. Set in the heart of
                Jaipur’s Gopalbari, we’re a short walk from the Pink City’s heritage core, yet
                far enough removed to feel like a private retreat.
              </p>
              <p>
                Every room is composed around a warm gerua palette — hand-block textiles,
                framed miniature art, carved wood, and generous natural light. Nothing is
                accidental. Nothing feels like a chain hotel.
              </p>
              <p>
                Our small in-house team — led by our host <span className="font-medium text-rose">{PROPERTY.hostedBy}</span>{" "}
                — is on hand to make your stay feel personal from the moment you arrive.
              </p>
            </div>


          </div>

          <div className="reveal relative">
            <div className="grid grid-cols-2 gap-3">
              <div className="aspect-[3/4] overflow-hidden rounded-sm">
                <img src={PHOTOS.hall[0]} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
              <div className="aspect-[3/4] overflow-hidden rounded-sm mt-10">
                <img src={PHOTOS.superDeluxe101[0]} alt="" loading="lazy" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 md:py-32 bg-blushSoft">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-14 reveal">
            <div className="ornament-line text-[11px] tracking-widest-3 text-rose mb-6 max-w-xs mx-auto">
              <span>WHAT MAKES RIVELLE</span>
            </div>
            <h2 className="font-display text-ink text-4xl md:text-5xl leading-[1.05]">
              Small choices, <span className="italic text-rose">carefully made.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {VALUES.map((v) => (
              <div key={v.title} className="reveal bg-cream/80 rounded-sm p-8 border border-rose/10">
                <div className="w-12 h-12 rounded-full bg-rose/10 text-rose flex items-center justify-center mb-5">
                  <v.icon size={20} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-ink mb-3">{v.title}</h3>
                <p className="text-ink/70 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-blush">
        <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <div className="reveal">
            <h2 className="font-display text-ink text-4xl md:text-5xl mb-6">
              Come <span className="italic text-rose">stay beautifully.</span>
            </h2>
            <p className="text-ink/70 mb-10 max-w-xl mx-auto">
              Whether you’re here for a weekend or a longer stay, we’d love to help you
              plan something quietly memorable.
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <Link to="/rooms" className="btn-rose inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[11px] tracking-widest-2 font-medium">
                EXPLORE ROOMS <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn-outline-rose inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-[11px] tracking-widest-2 font-medium">
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
