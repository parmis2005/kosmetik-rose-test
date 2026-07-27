import Link from "next/link";

export default function CTABanner() {
  return (
    <section id="termin" className="relative py-24 px-6 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/images/services/plasma-pen.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/70 to-charcoal/50" />

      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <p className="text-xs tracking-[5px] uppercase text-rose/90 mb-5">
          Ihr nächster Schritt
        </p>
        <h2 className="font-heading text-4xl md:text-6xl font-light italic mb-6">
          Verwöhnen Sie sich
        </h2>
        <p className="text-white/80 text-base leading-relaxed mb-10 max-w-lg mx-auto">
          Gönnen Sie Ihrer Haut die Behandlung, die sie verdient. Buchen Sie
          jetzt Ihren persönlichen Termin bei Kosmetik Rose auf der
          Kaiserstraße in Dortmund.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/#termin-buchen" className="btn-primary">
            Jetzt online buchen
          </Link>
          <a href="mailto:info@kosmetik-rose.de" className="btn-outline">
            Termin per E-Mail anfragen
          </a>
        </div>

        <p className="text-white/50 text-xs mt-8 tracking-wide">
          Tel: 0231-138 78 00 · Mobil: 01525-1 34 12 12 · info@kosmetik-rose.de
        </p>
      </div>
    </section>
  );
}
