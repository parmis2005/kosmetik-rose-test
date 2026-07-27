import { ChevronDown } from "lucide-react";

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
    image: "/images/services/gesicht-komplett.jpg",
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
    image: "/images/services/nadelepilation.jpg",
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
    image: "/images/services/hand-fuss.jpg",
    description:
      "Body Detox Elektrolyse Hand- und Fußbad, Nagelmodelage, Nagelauffüllung, Paraffinbad, Maniküre und Pediküre.",
    priceGroups: [{ rows: [{ label: "Hand- und/oder Fußpflege", price: "ab 10 €" }] }],
  },
  {
    id: "bio-lifting",
    tag: "Anti-Aging",
    title: "Bio-Lifting",
    subtitle: "Ultraschall-Liposuktion & BTL Biolifting",
    image: "/images/services/ultraschall.jpg",
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
    image: "/images/services/oxyjet.jpg",
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
    image: "/images/services/permanent-make-up.jpg",
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
    image: "/images/services/permanent-makeup-sw.jpg",
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
    image: "/images/services/beautiful-lips.jpg",
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

export default function ServicesSection() {
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
            Make-up – alle Preise auf einen Blick.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              id={cat.id}
              className="group relative overflow-hidden bg-cream scroll-mt-24"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                <span className="text-xs tracking-[1px] uppercase text-rose-dark font-semibold">
                  {cat.tag}
                </span>
              </div>

              <div className="p-6">
                <p className="text-xs tracking-[2px] uppercase text-rose mb-1">
                  {cat.subtitle}
                </p>
                <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                  {cat.title}
                </h3>
                <p className="text-charcoal-light text-sm leading-relaxed mb-4">
                  {cat.description}
                </p>

                {cat.priceGroups.length > 0 ? (
                  <details className="group/details">
                    <summary className="flex items-center justify-between cursor-pointer text-xs tracking-[2px] uppercase text-rose-dark font-semibold py-2 border-t border-rose/20">
                      Preise ansehen
                      <ChevronDown
                        size={16}
                        className="transition-transform group-open/details:rotate-180"
                      />
                    </summary>
                    <div className="pt-2 pb-1 space-y-4">
                      {cat.priceGroups.map((g, i) => (
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
                  </details>
                ) : (
                  <p className="text-xs italic text-charcoal-light pt-2 border-t border-rose/20">
                    {cat.note}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#kontakt" className="btn-primary">
            Behandlung reservieren
          </a>
        </div>
      </div>
    </section>
  );
}
