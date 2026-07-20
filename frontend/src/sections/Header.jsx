import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "../data/site";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // On home page: transparent until scrolled. On all other pages: always solid.
  const isHome = pathname === "/";
  const solid = !isHome || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);


  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${solid
          ? "bg-blush/95 backdrop-blur-md py-3 shadow-[0_2px_20px_-8px_rgba(109,30,25,0.25)] border-b border-rose/10"
          : "bg-transparent py-5"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center leading-none gap-1">
          <span
            className={`font-display text-xl md:text-2xl tracking-[0.25em] font-light ${
              solid ? "text-rose" : "text-cream drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]"
            }`}
          >
            RIVELLE
          </span>
          <span
            className={`flex items-center gap-1.5 text-[9px] md:text-[10px] tracking-[0.3em] font-light ${
              solid ? "text-rose/70" : "text-cream/80"
            }`}
          >
            <span>—</span>
            <span>BOUTIQUE STAYS</span>
            <span>—</span>
          </span>
        </Link>

        {/* Desktop nav — centered absolutely */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-5 xl:gap-8">
          {NAV_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `nav-link text-[11px] tracking-widest-2 transition-colors whitespace-nowrap ${isActive ? "active" : ""
                } ${solid
                  ? "text-ink/80 hover:text-rose"
                  : "text-cream/85 hover:text-cream"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            aria-label="Toggle menu"
            className={`lg:hidden p-2 ${solid ? "text-ink" : "text-cream"}`}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className="lg:hidden bg-blush border-t border-rose/15 shadow-lg">
          <nav className="px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `text-[12px] tracking-widest-2 py-1.5 ${isActive ? "text-rose font-semibold" : "text-ink/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
