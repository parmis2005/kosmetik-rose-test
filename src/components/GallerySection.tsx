import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteImages } from "@/lib/siteImages";

const galleries = [
  {
    href: "/galerie/frauen",
    title: "Bildergalerie Frauen",
    image: siteImages.galleryWomenHeader,
    count: siteImages.womenGallery.length,
  },
  {
    href: "/galerie/maenner",
    title: "Bildergalerie Männer",
    image: siteImages.galleryMenHeader,
    count: siteImages.menGallery.length,
  },
];

export default function GallerySection() {
  return (
    <section id="galerie" className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-rose mb-4">Galerie</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
            Ergebnisse, die für sich <span className="italic text-rose-dark">sprechen</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {galleries.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="group relative block aspect-[16/10] overflow-hidden"
            >
              <img
                src={g.image}
                alt={g.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="font-heading text-2xl mb-1">{g.title}</h3>
                <p className="text-white/70 text-sm mb-3">{g.count} Bilder</p>
                <span className="inline-flex items-center gap-2 text-xs tracking-[2px] uppercase text-rose/90 group-hover:text-white transition-colors">
                  Galerie ansehen <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
