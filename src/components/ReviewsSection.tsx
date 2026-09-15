import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Kundin A.",
    rating: 5,
    text: "Tolle, glatte Haut - danke für die angenehme Behandlung!",
  },
  {
    name: "Kunde B.",
    rating: 5,
    text: "Meine Frau hat mir Kosmetik Atelier Rosenblick empfohlen, da auch ich mal meine Haut pflegen sollte. Etwas ungewohnt für mich, aber im Endeffekt schon super.",
  },
  {
    name: "Kundin C.",
    rating: 5,
    text: "Danke für die entspannende und reinigende Gesichtsbehandlung!",
  },
  {
    name: "Kundin D.",
    rating: 5,
    text: "Das Team gibt sich große Mühe bei allen Behandlungen.",
  },
];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? "fill-rose text-rose" : "text-rose/20"}
        />
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section id="bewertungen" className="bg-blush/40 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-rose mb-4">
            Kundenstimmen
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-4">
            Was unsere Kundinnen <span className="italic text-rose-dark">sagen</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <Stars rating={5} />
            <span className="text-charcoal font-semibold text-sm">5,0 / 5</span>
          </div>
          <p className="text-charcoal-light text-xs">
            Fiktive Beispielbewertungen
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white p-6 shadow-sm flex flex-col">
              <Quote size={22} className="text-rose/30 mb-3" />
              <p className="text-charcoal-light text-sm leading-relaxed mb-4 flex-1">
                &ldquo;{r.text}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-rose/10">
                <span className="font-heading text-charcoal">{r.name}</span>
                <Stars rating={r.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
