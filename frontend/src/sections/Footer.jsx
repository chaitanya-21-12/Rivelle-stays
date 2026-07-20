import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { NAV_LINKS, PROPERTY } from "../data/site";

const Footer = () => {
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
              A boutique retreat wrapped in Jaipur’s heritage warmth — a small property that
              feels quietly personal, wherever your journey has taken you.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <SocialBtn href={PROPERTY.instagram} icon={<Instagram size={15} />} />
              <SocialBtn href={PROPERTY.facebook} icon={<Facebook size={15} />} />
              <SocialBtn href={PROPERTY.tripAdvisor} icon={
                <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 3.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 2a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 1.75a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 0 1 0-5.5zm0 1.25a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM6.5 7.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm11 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
              } />
            </div>
          </div>

          {/* Explore */}
          <div>
            <div className="text-[10px] tracking-widest-3 text-gerua-glow mb-5">EXPLORE</div>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-cream/70 hover:text-gerua-glow transition-colors"
                  >
                    {l.label.charAt(0) + l.label.slice(1).toLowerCase()}
                  </Link>
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
                <span>{PROPERTY.address}, {PROPERTY.city}</span>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Phone size={14} className="text-gerua-glow flex-shrink-0" />
                <a href={`tel:${PROPERTY.phoneRaw}`} className="hover:text-gerua-glow transition-colors">{PROPERTY.phone}</a>
              </li>
              <li className="flex items-center gap-3 text-cream/70">
                <Mail size={14} className="text-gerua-glow flex-shrink-0" />
                <a href={`mailto:${PROPERTY.email}`} className="hover:text-gerua-glow transition-colors">{PROPERTY.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex items-center justify-between flex-wrap gap-3">
          <div className="text-[11px] tracking-widest-2 text-cream/50">
            © {new Date().getFullYear()} Rivelle Boutique Stays. All rights reserved.
          </div>
          <div className="text-[10px] tracking-widest-3 text-cream/40">CRAFTED WITH CARE · JAIPUR</div>
        </div>
      </div>
    </footer>
  );
};

const SocialBtn = ({ icon, href = "#" }) => (
  <a
    href={href}
    target={href !== "#" ? "_blank" : undefined}
    rel="noopener noreferrer"
    onClick={href === "#" ? (e) => e.preventDefault() : undefined}
    className="w-9 h-9 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-cream hover:border-gerua-glow hover:bg-gerua/10 transition-all"
  >
    {icon}
  </a>
);

export default Footer;
