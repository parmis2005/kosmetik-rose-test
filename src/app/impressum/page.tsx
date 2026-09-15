import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Impressum – Kosmetik Atelier Rosenblick Musterstadt",
  description: "Impressum von Kosmetik Atelier Rosenblick, Musterstraße 12, 12345 Musterstadt.",
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
                Kosmetik Atelier Rosenblick
                <br />
                Inh. Mira Beispiel
                <br />
                Musterstraße 12
                <br />
                12345 Musterstadt
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">Kontakt</h2>
              <p>
                Telefon: 0000 000 000
                <br />
                Mobil: 0000 000 001
                <br />
                E-Mail: kontakt@rosenblick.example
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                Umsatzsteuer
              </h2>
              <p>Steuernummer: 000/0000/0000</p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p>
                Mira Beispiel
                <br />
                Musterstraße 12
                <br />
                12345 Musterstadt
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
