"use client";

import { useEffect, useState } from "react";
import { X, ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { siteImages } from "@/lib/siteImages";

const featuredIds = ["gesichtsbehandlung", "haarentfernung", "haut-und-faltenbehandlung"];

type PriceRow = { label: string; price: string };
type PriceGroup = { group?: string; rows: PriceRow[] };

type ServiceCategory = {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  priceGroups: PriceGroup[];
  note?: string;
};

const categories: ServiceCategory[] = [
  {
    id: "gesichtsbehandlung",
    tag: "Beliebt",
    title: "Gesichtsbehandlung",
    subtitle: "Komplette Gesichtspflege",
    image: siteImages.services.facial,
    description:
      "Gönnen Sie Ihrem Gesicht eine Auszeit vom Alltag und seinen negativen Umwelteinflüssen – mit Peeling, Maske und entspannender Massage.",
    priceGroups: [
      {
        rows: [
          {
            label:
              "Komplette Gesichtsbehandlung (Peeling, Maske, Massage, Augenbrauen zupfen & färben, Wimpern färben)",
            price: "60 €",
          },
          { label: "Wimpernlifting + Färben", price: "55 €" },
          { label: "Augenbrauen färben", price: "15 €" },
          { label: "Augenbrauen zupfen (Threading)", price: "15 €" },
          { label: "Wimpern färben", price: "15 €" },
        ],
      },
    ],
  },
  {
    id: "haarentfernung",
    tag: "Klassiker",
    title: "Elektrolyse & Haarentfernung",
    subtitle: "Dauerhafte Haarreduktion",
    image: siteImages.services.hairRemoval,
    description:
      "Für eine dauerhafte Haarentfernung bzw. Haarwuchsreduktion bieten wir IPL, EpilaDerm-Zuckerpaste, Elektro-/Nadelepilation und klassisches Wachsen an.",
    priceGroups: [
      {
        group: "IPL Haarentfernung",
        rows: [
          { label: "Gesicht komplett", price: "60 €" },
          { label: "Beine komplett", price: "90 €" },
          { label: "Oberschenkel", price: "70 €" },
          { label: "Po", price: "70 €" },
          { label: "Intimbereich", price: "80 €" },
          { label: "Bauch", price: "45 €" },
        ],
      },
      {
        group: "EpilaDerm® Zuckerpaste",
        rows: [
          { label: "Gesicht komplett", price: "30 €" },
          { label: "Beine komplett", price: "50 €" },
          { label: "Oberschenkel", price: "50 €" },
          { label: "Po", price: "35 €" },
          { label: "Intimbereich", price: "40 €" },
          { label: "Bauch", price: "35 €" },
        ],
      },
      {
        group: "Elektroepilation / Nadelepilation",
        rows: [{ label: "30 Minuten", price: "50 – 70 €" }],
      },
      {
        group: "Haarentfernung mit Wachs",
        rows: [
          { label: "Gesicht komplett", price: "15 €" },
          { label: "Beine komplett", price: "25 €" },
          { label: "Oberschenkel", price: "25 €" },
          { label: "Po", price: "20 €" },
          { label: "Intimbereich", price: "30 €" },
          { label: "Bauch", price: "25 €" },
        ],
      },
    ],
  },
  {
    id: "hand-fuss",
    tag: "Pflege",
    title: "Hand & Fuß",
    subtitle: "Kosmetische & medizinische Fußpflege",
    image: siteImages.services.handFoot,
    description:
      "Body Detox Elektrolyse Hand- und Fußbad, Nagelmodelage, Nagelauffüllung, Paraffinbad, Maniküre und Pediküre.",
    priceGroups: [{ rows: [{ label: "Hand- und/oder Fußpflege", price: "ab 10 €" }] }],
  },
  {
    id: "bio-lifting",
    tag: "Anti-Aging",
    title: "Bio-Lifting",
    subtitle: "Ultraschall-Liposuktion & BTL Biolifting",
    image: siteImages.services.bioLifting,
    description:
      "Sofortige Effekte mit Langzeitwirkung: Körpermodellierung und Straffung von Problemzonen – als schonende Alternative ohne Nebenwirkungen. BTL Biolifting eignet sich besonders für empfindliche, allergieanfällige Haut.",
    priceGroups: [
      {
        group: "Ultraschall Liposuktion",
        rows: [
          { label: "Oberschenkel (120 Min.)", price: "150 €" },
          { label: "Po (60 Min.)", price: "120 €" },
          { label: "Bauch (60 Min.)", price: "120 €" },
        ],
      },
      {
        group: "BTL Biolifting",
        rows: [
          { label: "Faltenprävention", price: "45 €" },
          { label: "Hautrevitalisierung", price: "45 €" },
          { label: "Elastizitätssteigerung", price: "45 €" },
          { label: "Wirkstoff-Infusion", price: "40 €" },
        ],
      },
    ],
  },
  {
    id: "haut-und-faltenbehandlung",
    tag: "Anti-Aging",
    title: "Haut- & Faltenbehandlung",
    subtitle: "Gegen Falten, Pigmentflecken & Couperose",
    image: siteImages.services.skinTreatment,
    description:
      "Moderne, apparative Verfahren gegen Fältchen, Altersflecken, Couperose, unreine Haut und Narben – von Sauerstofftherapie über Mikrodermabrasion bis Micro Needling.",
    priceGroups: [
      {
        rows: [
          { label: "OXYjet Sauerstoffbehandlung", price: "70 €" },
          { label: "Diamant Mikrodermabrasion", price: "ab 50 €" },
          { label: "Nadelfreie Mesotherapie", price: "ab 50 €" },
          { label: "Radiowellen Hochfrequenz", price: "ab 60 €" },
          { label: "Micro Needling", price: "120 €" },
          { label: "Plasma Pen", price: "ab 100 €" },
        ],
      },
    ],
  },
  {
    id: "permanent-make-up",
    tag: "PMU",
    title: "Permanent Make-up",
    subtitle: "Permanent Make-up & Microblading",
    image: siteImages.services.permanentMakeup,
    description:
      "Dauerhaftes Make-up für Augenbrauen, Lidstrich und Lippen. Beim Microblading werden Farbpigmente mit einem feinen Klingenstift statt einer Maschine in die Haut eingearbeitet.",
    priceGroups: [
      {
        rows: [
          { label: "Augenbrauen mit Nachbehandlung", price: "300 €" },
          { label: "Ober-/Unterlid mit Nachbehandlung", price: "250 €" },
          { label: "Lippenkontur mit Nachbehandlung", price: "300 €" },
          { label: "Lippen komplett mit Nachbehandlung", price: "450 €" },
          { label: "Microblading (Augenbrauen/Lippen)", price: "250 €" },
        ],
      },
    ],
  },
  {
    id: "pigmentoff-remover",
    tag: "Entfernung",
    title: "PigmentOff Remover",
    subtitle: "Laserfreie Pigmententfernung",
    image: siteImages.services.pigmentRemoval,
    description:
      "Laserfreie Entfernung von Permanent Make-up und Tattoo-Pigmenten – für alle Farben und Pigmentarten, inklusive acrylbasierter Microblading-Pigmente. Vollständige Entfernung ist meist über mehrere Behandlungen möglich.",
    priceGroups: [],
    note: "Preis nach individueller Beratung und Hautanalyse.",
  },
  {
    id: "lippenbehandlung",
    tag: "Lippen",
    title: "Lippenbehandlung",
    subtitle: "Beautiful Lips & Juvéderm® ULTRA",
    image: siteImages.services.lips,
    description:
      "Die sanfte 'Beautiful Lips'-Behandlung lässt Lippen voller wirken und die Kontur deutlicher hervortreten. Juvéderm® ULTRA ist ein biologisch abbaubares Hyaluronsäure-Gel gegen feine Linien und für mehr Lippenvolumen.",
    priceGroups: [
      {
        rows: [
          { label: "Beautiful Lips Behandlung", price: "25 €" },
          { label: "Juvéderm® ULTRA", price: "ab 100 €" },
        ],
      },
    ],
  },
];

function ServiceModal({
  category,
  onClose,
}: {
  category: ServiceCategory;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/70 backdrop-blur-sm px-4 py-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${category.id}-modal-title`}
    >
      <div
        className="relative w-full max-w-2xl max-h-full overflow-y-auto bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Schließen"
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-white/90 backdrop-blur-sm text-charcoal hover:text-rose-dark transition-colors"
        >
          <X size={20} />
        </button>

        <div className="aspect-[16/9] overflow-hidden">
          <img
            src={category.image}
            alt={category.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <span className="inline-block text-xs tracking-[1px] uppercase text-rose-dark font-semibold bg-blush px-3 py-1 mb-4">
            {category.tag}
          </span>

          <p className="text-xs tracking-[2px] uppercase text-rose mb-1">
            {category.subtitle}
          </p>
          <h3
            id={`${category.id}-modal-title`}
            className="font-heading text-2xl md:text-3xl font-semibold text-charcoal mb-4"
          >
            {category.title}
          </h3>
          <p className="text-charcoal-light text-sm leading-relaxed mb-6">
            {category.description}
          </p>

          {category.priceGroups.length > 0 ? (
            <div className="space-y-5 pt-4 border-t border-rose/20">
              {category.priceGroups.map((g, i) => (
                <div key={i}>
                  {g.group && (
                    <p className="text-xs font-semibold uppercase tracking-[1px] text-charcoal mb-2">
                      {g.group}
                    </p>
                  )}
                  <ul className="space-y-1.5">
                    {g.rows.map((row) => (
                      <li
                        key={row.label}
                        className="flex justify-between gap-4 text-sm text-charcoal-light"
                      >
                        <span>{row.label}</span>
                        <span className="text-rose-dark font-semibold whitespace-nowrap">
                          {row.price}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-xs italic text-charcoal-light pt-4 border-t border-rose/20">
              {category.note}
            </p>
          )}

          <Link
            href="/#termin-buchen"
            onClick={onClose}
            className="btn-primary mt-8 inline-block"
          >
            Behandlung reservieren
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);
  const active = categories.find((c) => c.id === activeId) ?? null;

  const featured = categories.filter((c) => featuredIds.includes(c.id));
  const rest = categories.filter((c) => !featuredIds.includes(c.id));

  return (
    <section id="leistungen" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-rose mb-4">
            Unsere Leistungen
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
            Behandlungen, die <span className="italic text-rose-dark">wirken</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-charcoal-light max-w-xl mx-auto text-sm leading-relaxed">
            Von Gesichtspflege über dauerhafte Haarentfernung bis Permanent
            Make-up. Auf eine Leistung klicken für Details & Preise.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((cat) => (
            <button
              key={cat.id}
              id={cat.id}
              onClick={() => setActiveId(cat.id)}
              className="group text-left bg-cream scroll-mt-24"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                  <span className="text-xs tracking-[1px] uppercase text-rose-dark font-semibold">
                    {cat.tag}
                  </span>
                </div>
              </div>
              <div className="p-5">
                <p className="text-xs tracking-[2px] uppercase text-charcoal-light mb-1">
                  {cat.subtitle}
                </p>
                <h3 className="font-heading text-xl font-semibold text-charcoal">
                  {cat.title}
                </h3>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 px-9 py-3.5 bg-charcoal text-white text-xs font-semibold tracking-[2px] uppercase hover:bg-rose-dark transition-colors cursor-pointer"
          >
            {showAll ? "Weniger anzeigen" : "Alle Behandlungen ansehen"}
            <ChevronDown
              size={16}
              className={`transition-transform ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>

        {showAll && (
          <div className="divide-y divide-rose/15 border-t border-b border-rose/15 mt-10">
            {rest.map((cat) => (
              <button
                key={cat.id}
                id={cat.id}
                onClick={() => setActiveId(cat.id)}
                className="group w-full flex items-center gap-5 py-4 text-left scroll-mt-24 hover:bg-cream transition-colors"
              >
                <div className="w-20 h-20 shrink-0 overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-[11px] tracking-[2px] uppercase text-rose mb-1">
                    {cat.tag} · {cat.subtitle}
                  </p>
                  <h3 className="font-heading text-lg md:text-xl font-semibold text-charcoal truncate">
                    {cat.title}
                  </h3>
                </div>

                <ArrowRight
                  size={18}
                  className="shrink-0 text-rose-dark opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                />
              </button>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Link href="/#termin-buchen" className="btn-primary">
            Behandlung reservieren
          </Link>
        </div>
      </div>

      {active && (
        <ServiceModal category={active} onClose={() => setActiveId(null)} />
      )}
    </section>
  );
}
