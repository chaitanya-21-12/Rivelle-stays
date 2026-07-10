import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/site";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-ink/90 backdrop-blur-md py-3 shadow-[0_2px_20px_-8px_rgba(0,0,0,0.4)]" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" onClick={(e) => handleNav(e, "#home")} className="flex items-baseline gap-3">
          <span className="font-display italic text-3xl md:text-4xl text-cream leading-none">Rivelle</span>
          <span className="hidden sm:inline text-[10px] md:text-[11px] tracking-widest-3 text-cream/70 font-light">
            BOUTIQUE STAYS
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNav(e, l.href)}
              className="nav-link text-[11px] tracking-widest-2 text-cream/85 hover:text-cream transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => handleNav(e, "#contact")}
            className="btn-gerua hidden sm:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[11px] tracking-widest-2 font-medium"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cream/90" />
            BOOK NOW
          </a>

          <button
            aria-label="Toggle menu"
            className="lg:hidden text-cream p-2"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-ink/95 backdrop-blur-md border-t border-cream/10">
          <nav className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => handleNav(e, l.href)}
                className="text-[12px] tracking-widest-2 text-cream/85 py-1.5"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleNav(e, "#contact")}
              className="btn-gerua rounded-full px-5 py-3 text-center text-[11px] tracking-widest-2 font-medium mt-2"
            >
              BOOK NOW
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
