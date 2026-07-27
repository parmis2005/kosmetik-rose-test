import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Datenschutz – Kosmetik Rose Dortmund",
  description: "Datenschutzerklärung von Kosmetik Rose, Dortmund.",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navigation solid />
      <main className="bg-cream min-h-screen pt-40 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs tracking-[4px] uppercase text-rose mb-4">Rechtliches</p>
          <h1 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-8">
            Datenschutzerklärung
          </h1>
          <div className="section-divider mb-10 ml-0" />

          <div className="space-y-8 text-charcoal-light text-sm leading-relaxed">
            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                1. Datenschutz auf einen Blick
              </h2>
              <p>
                Personenbezogene Daten sind alle Daten, mit denen Sie
                persönlich identifiziert werden können. Die folgenden Hinweise
                geben einen Überblick darüber, wie wir Ihre personenbezogenen
                Daten erheben – sowohl durch Angaben, die Sie uns mitteilen,
                als auch automatisch beim Besuch unserer Website.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                2. Allgemeine Hinweise und Pflichtinformationen
              </h2>
              <p className="mb-3">
                Verantwortlich für die Datenverarbeitung auf dieser Website
                ist:
              </p>
              <p className="mb-3">
                Rüya Isildak
                <br />
                Kaiserstraße 75
                <br />
                44135 Dortmund
                <br />
                E-Mail: info@kosmetik-rose.de
              </p>
              <p className="mb-3">
                Sie haben jederzeit das Recht, erteilte Einwilligungen zu
                widerrufen. Ihnen stehen zudem folgende Rechte zu:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Recht auf Auskunft über die gespeicherten Daten</li>
                <li>Recht auf Berichtigung, Sperrung oder Löschung</li>
                <li>Recht auf Datenübertragbarkeit</li>
                <li>Recht auf Einschränkung der Verarbeitung</li>
                <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
              </ul>
              <p className="mt-3">
                Diese Website nutzt zum Schutz übertragener Daten
                SSL-/TLS-Verschlüsselung.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                3. Datenerfassung auf unserer Website
              </h2>
              <p className="mb-3">
                <strong className="text-charcoal">Cookies:</strong> Unsere
                Website verwendet Sitzungs- und dauerhafte Cookies. Sie können
                Ihren Browser so einstellen, dass Sie über das Setzen von
                Cookies informiert werden und Cookies nur im Einzelfall
                erlauben.
              </p>
              <p className="mb-3">
                <strong className="text-charcoal">Server-Log-Dateien:</strong>{" "}
                Der Provider der Website erhebt und speichert automatisch
                Informationen in Server-Log-Dateien, die Ihr Browser
                automatisch übermittelt (Browsertyp, Betriebssystem,
                Referrer-URL, IP-Adresse).
              </p>
              <p>
                <strong className="text-charcoal">Kontaktformular:</strong>{" "}
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben zur Bearbeitung der Anfrage sowie für
                Anschlussfragen bei uns gespeichert.
              </p>
            </div>

            <div>
              <h2 className="font-heading text-xl text-charcoal mb-3">
                4. Plugins und Tools
              </h2>
              <p>
                Unsere Website kann Karten des Dienstes Google Maps sowie
                weitere externe Inhalte einbinden. Beim Aufruf solcher
                Inhalte können Daten an die jeweiligen Anbieter übermittelt
                werden. Weitere Informationen finden Sie in den
                Datenschutzhinweisen der jeweiligen Anbieter.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
