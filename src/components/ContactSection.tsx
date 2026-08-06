import { MapPin, Phone, Mail, Clock } from "lucide-react";

function FacebookIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const hours = [
  { day: "Montag", time: "Geschlossen" },
  { day: "Dienstag – Freitag", time: "12:00 – 18:00 Uhr" },
  { day: "Samstag", time: "9:00 – 14:00 Uhr" },
];

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-charcoal py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-rose mb-4">
            Kontakt & Anfahrt
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-white mb-4">
            Wir freuen uns <span className="italic text-rose/80">auf Sie</span>
          </h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <MapPin size={18} className="text-rose flex-shrink-0" />
              <h3 className="font-heading text-lg text-white">Adresse</h3>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Kaiserstraße 75
              <br />
              44135 Dortmund
            </p>
            <a
              href="https://maps.google.com/?q=Kaiserstra%C3%9Fe+75,+44135+Dortmund"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-xs tracking-[2px] uppercase text-rose hover:text-rose/70 transition-colors border-b border-rose/40 pb-0.5"
            >
              Route planen
            </a>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Phone size={18} className="text-rose flex-shrink-0" />
              <h3 className="font-heading text-lg text-white">Kontakt</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-rose/60" />
                <a href="tel:+492311387800" className="text-white/60 text-sm hover:text-white transition-colors">
                  0231-138 78 00
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-rose/60" />
                <a href="tel:+4915251341212" className="text-white/60 text-sm hover:text-white transition-colors">
                  01525-1 34 12 12
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-rose/60" />
                <a href="mailto:info@kosmetik-rose.de" className="text-white/60 text-sm hover:text-white transition-colors">
                  info@kosmetik-rose.de
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://www.facebook.com/Sch%C3%B6nheitssalon-ROSE-192643807419405/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/20 flex items-center justify-center text-white/50 hover:border-rose hover:text-rose transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={15} />
              </a>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <Clock size={18} className="text-rose flex-shrink-0" />
              <h3 className="font-heading text-lg text-white">Öffnungszeiten</h3>
            </div>
            <div className="space-y-3">
              {hours.map(({ day, time }) => (
                <div key={day} className="flex justify-between gap-4">
                  <span className="text-white/50 text-sm">{day}</span>
                  <span className="text-white/80 text-sm text-right">{time}</span>
                </div>
              ))}
            </div>
            <p className="text-white/40 text-xs mt-4 italic">
              Termine auch außerhalb der Öffnungszeiten (18:00 – 22:00 Uhr) nach
              Absprache möglich. Bitte sagen Sie Ihren Termin mind. 24 Stunden
              vorher ab.
            </p>
          </div>
        </div>

        <div className="mt-16 aspect-[16/5] bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
          <iframe
            src="https://www.google.com/maps?q=Kaiserstra%C3%9Fe+75,+44135+Dortmund&output=embed"
            className="w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Kosmetik Rose Standort"
          />
        </div>
      </div>
    </section>
  );
}
