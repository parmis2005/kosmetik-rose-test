import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

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

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Musterstra%C3%9Fe%2012%2C%2012345%20Musterstadt";

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
              Musterstraße 12
              <br />
              12345 Musterstadt
            </p>
            <a
              href={mapsUrl}
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
                <a href="tel:+490000000000" className="text-white/60 text-sm hover:text-white transition-colors">
                  0000 000 000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-rose/60" />
                <a href="tel:+490000000001" className="text-white/60 text-sm hover:text-white transition-colors">
                  0000 000 001
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-rose/60" />
                <a href="mailto:kontakt@rosenblick.example" className="text-white/60 text-sm hover:text-white transition-colors">
                  kontakt@rosenblick.example
                </a>
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              <a
                href="https://example.com/social"
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

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kosmetik Atelier Rosenblick in Google Maps öffnen"
          className="group mt-16 block min-h-72 overflow-hidden border border-white/10 bg-[#d8d2c8] relative"
        >
          <div className="absolute inset-0 opacity-80">
            <div className="absolute -left-16 top-1/4 h-9 w-[120%] rotate-[-8deg] bg-white/65 shadow-sm" />
            <div className="absolute -right-10 top-2/3 h-8 w-[115%] rotate-[6deg] bg-white/55 shadow-sm" />
            <div className="absolute left-1/4 -top-12 h-[140%] w-8 rotate-[14deg] bg-white/50 shadow-sm" />
            <div className="absolute right-1/4 -top-8 h-[130%] w-7 rotate-[-18deg] bg-white/45 shadow-sm" />
            <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(90deg,rgba(45,35,30,0.08)_1px,transparent_1px),linear-gradient(0deg,rgba(45,35,30,0.08)_1px,transparent_1px)] bg-[size:72px_72px]" />
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-charcoal/25" />

          <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
              <MapPin size={30} />
            </div>
            <div className="bg-charcoal/90 px-6 py-4 text-white shadow-lg">
              <p className="font-heading text-xl">Kosmetik Atelier Rosenblick</p>
              <p className="mt-1 text-sm text-white/65">Musterstraße 12 · 12345 Musterstadt</p>
            </div>
          </div>

          <div className="absolute bottom-5 right-5 inline-flex items-center gap-2 bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[2px] text-charcoal shadow-sm transition-colors group-hover:bg-rose group-hover:text-white">
            Google Maps öffnen
            <ExternalLink size={14} />
          </div>
        </a>
      </div>
    </section>
  );
}
