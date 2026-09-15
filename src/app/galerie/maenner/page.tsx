import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { siteImages } from "@/lib/siteImages";

export const metadata: Metadata = {
  title: "Bildergalerie Männer – Kosmetik Atelier Rosenblick Musterstadt",
  description:
    "Vorher-Nachher Bilder unserer Behandlungen für Männer: Plasma Pen, Gesichtsbehandlung, Mikrodermabrasion, Micro Needling und mehr.",
};

const captions: Record<number, string> = {
  3: "Plasma Pen",
  4: "Plasma Pen",
  5: "Gesichtsbehandlung",
  6: "Gesichtsbehandlung",
  7: "Mikrodermabrasion",
  9: "Micro Needling",
};

const images = siteImages.menGallery.map((src, index) => ({
  id: index + 1,
  src,
}));

export default function MaennerGaleriePage() {
  return (
    <>
      <Navigation />
      <main>
        <section className="relative h-[45vh] min-h-[320px] flex items-end overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${siteImages.galleryMenHeader}')` }}
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
              Bildergalerie Männer
            </h1>
          </div>
        </section>

        <section className="bg-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <a
                key={image.id}
                href={image.src}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-square overflow-hidden bg-cream"
              >
                <img
                  src={image.src}
                  alt={captions[image.id] ?? "Behandlung"}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <span className="text-white text-xs">{captions[image.id] ?? "Behandlung"}</span>
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
