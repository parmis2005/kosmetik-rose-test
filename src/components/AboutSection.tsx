import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="ueber-uns" className="bg-cream py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] relative overflow-hidden rounded-sm">
            <img
              src="/images/services/gesicht-komplett.jpg"
              alt="Gesichtsbehandlung bei Kosmetik Rose"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-rose/30 rounded-sm -z-10" />
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-champagne rounded-sm -z-10" />
          <div className="absolute bottom-8 -right-4 bg-white shadow-lg px-6 py-5 text-center">
            <span className="block font-heading text-2xl font-light text-rose-dark">
              Rüya Isildak
            </span>
            <span className="block text-xs tracking-[2px] uppercase text-charcoal-light mt-1">
              Inhaberin
            </span>
          </div>
        </div>

        <div>
          <p className="text-xs tracking-[4px] uppercase text-rose mb-4">Über Uns</p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal leading-tight mb-6">
            Schönheit, die von
            <span className="block italic font-normal text-rose-dark">
              innen heraus leuchtet
            </span>
          </h2>
          <div className="section-divider mb-8 ml-0" />

          <p className="text-charcoal-light leading-relaxed mb-6">
            Willkommen im Schönheitssalon und Elektroepilationsstudio Kosmetik Rose
            auf der Kaiserstraße in Dortmund. Als spezialisiertes Kosmetikstudio
            für moderne Hautpflege und Naturkosmetik bieten wir Ihnen apparative
            ästhetische Behandlungen sowie professionelle Elektroepilation und
            Nadelepilation.
          </p>
          <p className="text-charcoal-light leading-relaxed mb-10">
            Ob Fältchen, Altersflecken, Couperose, unreine Haut oder Narben –
            Inhaberin Rüya Isildak und ihr Team beraten Sie individuell und
            finden die passende Behandlung für Ihr Hautbild, ganz ohne
            Lasertechnologie.
          </p>

          <div className="grid grid-cols-2 gap-6 mb-10">
            {[
              "Elektroepilation & Nadelepilation",
              "Apparative Kosmetik ohne Laser",
              "Permanent Make-up & Microblading",
              "Individuelle Hautanalyse",
            ].map((label) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-rose rounded-full flex-shrink-0" />
                <span className="text-sm text-charcoal-light">{label}</span>
              </div>
            ))}
          </div>

          <Link href="/#termin-buchen" className="btn-primary">
            Termin anfragen
          </Link>
        </div>
      </div>
    </section>
  );
}
