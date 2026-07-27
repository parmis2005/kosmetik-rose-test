import { Zap, Leaf, Users } from "lucide-react";

const usps = [
  {
    icon: Zap,
    title: "Elektroepilation-Expertise",
    text: "Die einzige international anerkannte Methode zur dauerhaften Haarentfernung – für alle Haartypen und Hautfarben, ganz ohne Laser.",
  },
  {
    icon: Leaf,
    title: "Ohne Laser, apparativ & sanft",
    text: "Von IPL über Diamant-Mikrodermabrasion bis Radiowellen-Hochfrequenz: moderne, schonende Verfahren gegen Falten, Pigmentflecken und Couperose.",
  },
  {
    icon: Users,
    title: "Persönlich & individuell",
    text: "Inhaberin Rüya Isildak und ihr Team nehmen sich Zeit für eine Behandlung, die genau auf Ihre Haut abgestimmt ist.",
  },
];

export default function USPSection() {
  return (
    <section id="usp" className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {usps.map(({ icon: Icon, title, text }) => (
            <div key={title} className="text-center group">
              <div className="w-16 h-16 rounded-full bg-blush flex items-center justify-center mx-auto mb-6 group-hover:bg-rose/20 transition-colors">
                <Icon size={24} className="text-rose-dark" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-charcoal mb-3">
                {title}
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
