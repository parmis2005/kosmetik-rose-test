"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/#ueber-uns", label: "Über Uns" },
  { href: "/#leistungen", label: "Leistungen" },
  { href: "/#galerie", label: "Galerie" },
  { href: "/#bewertungen", label: "Bewertungen" },
  { href: "/#kontakt", label: "Kontakt" },
];

export default function Navigation({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isScrolled = solid || scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none -ml-4 md:-ml-6">
          <span
            className={`font-heading text-2xl font-semibold tracking-wide transition-colors ${
              isScrolled ? "text-charcoal" : "text-white"
            }`}
          >
            Kosmetik Rose
          </span>
          <span
            className={`text-xs tracking-[3px] uppercase mt-0.5 transition-colors ${
              isScrolled ? "text-rose" : "text-rose/90"
            }`}
          >
            Dortmund · Kaiserstraße
          </span>
        </Link>

        <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs font-body tracking-[2px] uppercase transition-colors hover:text-rose ${
                isScrolled ? "text-charcoal-light" : "text-white/90"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/#termin-buchen"
          className="hidden lg:inline-block btn-primary text-xs -mr-6"
        >
          Termin buchen
        </Link>

        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menü öffnen"
        >
          {menuOpen ? (
            <X className={isScrolled ? "text-charcoal" : "text-white"} size={24} />
          ) : (
            <Menu className={isScrolled ? "text-charcoal" : "text-white"} size={24} />
          )}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl py-8 px-6">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-xs tracking-[2px] uppercase text-charcoal-light hover:text-rose transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#termin-buchen"
              onClick={() => setMenuOpen(false)}
              className="btn-primary text-center text-xs mt-2"
            >
              Termin buchen
            </Link>
            <div className="flex items-center gap-2 text-charcoal-light pt-2 border-t border-gray-100">
              <Phone size={14} className="text-rose" />
              <a href="tel:+492311387800" className="text-sm hover:text-rose transition-colors">
                0231-138 78 00
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
