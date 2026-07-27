import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – Kosmetik Rose Dortmund",
  description: "Impressum von Kosmetik Rose, Kaiserstraße 75, 44135 Dortmund.",
};

export default function ImpressumPage() {
  return (
    <>
      <Navigation solid />
      <main className="bg-cream min-h-screen pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[4px] uppercase text-rose mb-4">Rechtliches</p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-8">
            Impressum
          </h1>
          <div className="section-divider mb-10 ml-0" />

          <div className="prose-none space-y-8 text-charcoal-light text-sm leading-relaxed">
            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                Angaben gemäß § 5 DDG
              </h2>
              <p>
                Schönheitssalon Rose
                <br />
                Inh. Rüya Isildak
                <br />
                Kaiserstraße 75
                <br />
                44135 Dortmund
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">Kontakt</h2>
              <p>
                Telefon: 0231-1 38 78 00
                <br />
                Mobil: 01525-1 34 12 12
                <br />
                E-Mail: info@kosmetik-rose.de
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                Umsatzsteuer
              </h2>
              <p>Steuernummer: 317/5085/8923</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Rüya Isildak
                <br />
                Kaiserstraße 75
                <br />
                44135 Dortmund
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                Haftungsausschluss
              </h2>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
                Haftung für die Inhalte externer Links. Für den Inhalt der
                verlinkten Seiten sind ausschließlich deren Betreiber
                verantwortlich.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
