import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Home, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";

const VALUES = [
  { icon: Users, title: "Personal, never chain", desc: "A small property, a small team, and a real relationship with every guest who walks through the door." },
  { icon: Home, title: "Rooted in Jaipur", desc: "Every detail — the warm tones, the handcrafted touches, the natural light — draws from the Pink City's timeless craft heritage." },
  { icon: Heart, title: "Intentionally small", desc: "Rivelle is small by choice. That's what lets us know our guests, recommend our favourite corners of Jaipur, and make every stay feel personal." },
];

const AboutPage = () => {
  return (
    <div className="bg-blush min-h-screen">
      <PageHeader
        eyebrow="OUR STORY"
        title={<>Where Jaipur's heritage meets <span className="italic text-rose">heartfelt hospitality.</span></>}
        subtitle="Rivelle began with a simple belief — that the most memorable stays aren't defined by the number of rooms, but by the care behind every one of them."
      />

      {/* Story */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div className="reveal">
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-8 leading-tight">
              Built with our own hands, <span className="italic text-rose">and a lot of late nights.</span>
            </h2>
            <div className="space-y-5 text-ink/75 leading-relaxed">
              <p>
                We're <span className="font-medium text-rose">Jai and Pragya</span>, a husband-and-wife team who built Rivelle
                with our own hands, countless late nights, and an unwavering attention to detail. From choosing every colour
                palette and piece of furniture to curating the guest experience, every decision was made with one question in mind:
              </p>
              <p className="font-medium text-ink italic text-lg border-l-2 border-rose/40 pl-4">
                "Would we love staying here ourselves?"
              </p>
              <p>
                Nestled in the heart of Jaipur, Rivelle blends the city's timeless craftsmanship with contemporary comfort.
                Warm earthy tones, handcrafted details, natural light, and thoughtfully designed spaces come together to create
                a stay that feels elegant, intimate, and unmistakably personal.
              </p>
              <p>
                Unlike a large hotel, Rivelle is intentionally small. That allows us to know our guests, recommend our favourite
                corners of Jaipur, and make every stay feel less like checking into a hotel and more like being welcomed into a
                thoughtfully curated home.
              </p>
              <p>
                Whether you're here to explore the Pink City, celebrate a special occasion, or simply slow down for a few days,
                we hope Rivelle becomes a place you'll always look forward to returning to.
              </p>
              <div className="pt-5 border-t border-rose/15">
                <p className="italic text-ink/80">We can't wait to welcome you.</p>
                <p className="font-display tracking-widest text-rose mt-1 text-lg">— JAI &amp; PRAGYA</p>
              </div>
            </div>
          </div>

          <div className="reveal relative">
            <div className="flex flex-col gap-4">
              <div className="overflow-hidden rounded-sm">
                <img
                  src="/photos/jai_pragya.jpg"
                  alt="Jai and Pragya — founders of Rivelle Boutique Stays"
                  loading="lazy"
                  className="w-full object-cover object-top"
                  style={{ maxHeight: "520px" }}
                />
              </div>
              <p className="text-center text-[11px] tracking-widest-2 text-ink/40 italic">
                Jai &amp; Pragya — Rivelle Boutique Stays
              </p>
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
              Whether you're here for a weekend or a longer stay, we'd love to help you
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
