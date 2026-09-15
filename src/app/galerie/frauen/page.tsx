import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bildergalerie Frauen – Kosmetik Atelier Rosenblick Musterstadt",
  description:
    "Vorher-Nachher Bilder unserer Behandlungen für Frauen: Gesichtsbehandlung, Permanent Make-up, Micro Needling, Haarentfernung und mehr.",
};

const captions: Record<number, string> = {
  1: "Komplette Gesichtsbehandlung",
  2: "Komplette Gesichtsbehandlung",
  3: "Komplette Gesichtsbehandlung",
  4: "Micro Needling",
  5: "Permanent Make Up",
  6: "Permanent Make Up",
  7: "Permanent Make Up",
  8: "Microblading",
  9: "Juvéderm Ultra",
  10: "Juvéderm Ultra",
  11: "Plasma Pen",
  12: "Plasma Pen",
  13: "Diamant Mikrodermabrasion",
  14: "Radiowellen Hochfrequenz",
  15: "Radiowellen Hochfrequenz",
  16: "Nadelfreie Mesotherapie",
  17: "Nadelfreie Mesotherapie",
  18: "Beautiful Lips",
  19: "Beautiful Lips",
  20: "Kalt- und Warmwachs Haarentfernung",
  21: "Kalt- und Warmwachs Haarentfernung",
  22: "IPL-Behandlung",
  23: "IPL-Behandlung",
  24: "OXYJET-Sauerstoff-Behandlung",
  25: "OXYJET-Sauerstoff-Behandlung",
  26: "Kosmetische- und medizinische Fußpflege",
  27: "Kosmetische- und medizinische Fußpflege",
  28: "Pedi- und Maniküre",
};

const images = Array.from({ length: 28 }, (_, i) => i + 1);

export default function FrauenGaleriePage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/galerie/frauen/header.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/60" />
          <div className="relative z-10 max-w-6xl mx-auto px-6 pb-12 w-full">
            <Link
              href="/#galerie"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-xs tracking-[2px] uppercase mb-4 transition-colors"
            >
              <ArrowLeft size={14} /> Zurück
            </Link>
            <h1 className="font-heading text-4xl md:text-6xl font-light italic text-white">
              Bildergalerie Frauen
            </h1>
          </div>
        </section>

        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((n) => (
              <a
                key={n}
                href={`/images/galerie/frauen/${n}.jpg`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden bg-cream"
              >
                <img
                  src={`/images/galerie/frauen/${n}.jpg`}
                  alt={captions[n] ?? "Behandlung"}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs">{captions[n] ?? "Behandlung"}</span>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
