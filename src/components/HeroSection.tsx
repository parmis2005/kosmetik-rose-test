"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { siteImages } from "@/lib/siteImages";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-charcoal">
      {!videoFailed && (
        <video
          className="absolute inset-0 h-full w-full object-cover md:scale-90"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={siteImages.heroPoster}
          aria-hidden="true"
          onError={() => setVideoFailed(true)}
        >
          <source src="/videos/hero-background-v3.mp4" type="video/mp4" />
        </video>
      )}

      {videoFailed && (
        <>
          <div
            className="hero-moving-background absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${siteImages.heroFallbackPrimary}')` }}
          />
          <div
            className="hero-moving-background hero-moving-background--delayed absolute inset-0 bg-cover bg-center bg-no-repeat opacity-45"
            style={{ backgroundImage: `url('${siteImages.heroFallbackSecondary}')` }}
          />
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/65 via-charcoal/45 to-charcoal/75" />
      <div className="absolute inset-0 bg-gradient-to-br from-rose/10 via-transparent to-charcoal/20" />

      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <p
          className={`text-xs tracking-[5px] uppercase text-rose/90 mb-6 transition-all duration-1000 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Willkommen bei Kosmetik Atelier Rosenblick
        </p>

        <h1
          className={`font-heading text-3xl md:text-5xl font-light italic text-white leading-tight mb-6 transition-all duration-1000 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Ihr kompetentes Kosmetikstudio in Musterstadt
        </h1>

        <div
          className={`w-16 h-px bg-rose/70 mx-auto mb-6 transition-all duration-1000 delay-300 ${
            visible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
          }`}
        />

        <p
          className={`text-base md:text-lg text-white/85 font-light leading-relaxed max-w-xl mx-auto mb-10 transition-all duration-1000 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Apparative Kosmetik & Elektroepilation auf der Musterstraße – bei
          Fältchen, Pigmentflecken, Couperose und unreiner Haut.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <Link href="/#termin-buchen" className="btn-primary">
            Online Termin buchen
          </Link>
          <a href="#leistungen" className="btn-outline">
            Unsere Leistungen
          </a>
        </div>
      </div>

      <a
        href="#usp"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Nach unten scrollen"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
