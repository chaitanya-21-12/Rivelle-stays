import React from "react";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { NAV_LINKS } from "../data/site";

const Footer = () => {
  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-ink text-cream/80">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
          {/* Brand */}
          <div>
            <div className="flex items-baseline gap-3 mb-5">
              <span className="font-display italic text-4xl text-cream">Rivelle</span>
              <span className="text-[10px] tracking-widest-3 text-cream/60">BOUTIQUE STAYS</span>
            </div>
            <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
              A boutique retreat wrapped in gerua warmth — a small property that feels quietly
              personal, wherever your journey has taken you.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <SocialBtn icon={<Instagram size={15} />} />
              <SocialBtn icon={<Facebook size={15} />} />
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="text-[10px] tracking-widest-3 text-gerua-glow mb-5">EXPLORE</div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => scrollTo(e, l.href)}
                    className="text-sm text-cream/70 hover:text-gerua-glow transition-colors"
                  >
                    {l.label.charAt(0) + l.label.slice(1).toLowerCase()}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Reach us */}
          <div>
            <div className="text-[10px] tracking-widest-3 text-gerua-glow mb-5">REACH US</div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-cream/70">
                <MapPin size={14} className="text-gerua-glow mt-0.5 flex-shrink-0" />
                <span>[TO CONFIRM — full street address from Google listing]</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Phone size={14} className="text-gerua-glow flex-shrink-0" />
                <span>[TO CONFIRM]</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Mail size={14} className="text-gerua-glow flex-shrink-0" />
                <span>[OWNER_EMAIL]</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex items-center justify-between flex-wrap gap-3">
          <div className="text-[11px] tracking-widest-2 text-cream/50">
            © 2026 Rivelle Boutique Stays. All rights reserved.
          </div>
          <div className="text-[10px] tracking-widest-3 text-cream/40">CRAFTED WITH CARE</div>
        </div>
      </div>
    </footer>
  );
};

const SocialBtn = ({ icon }) => (
  <a
    href="#s"
    onClick={(e) => e.preventDefault()}
    className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-cream hover:border-gerua-glow hover:bg-gerua/10 transition-all"
  >
    {icon}
  </a>
);

export default Footer;
