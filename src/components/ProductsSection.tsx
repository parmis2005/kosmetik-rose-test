import { siteImages } from "@/lib/siteImages";

const partners = [
  { name: "Beautiful Lips", image: siteImages.products[0] },
  { name: "Body Detox", image: siteImages.products[1] },
  { name: "BTL-Lifting", image: siteImages.products[2] },
  { name: "Cos-Medico", image: siteImages.products[3] },
  { name: "EpilaDerm", image: siteImages.products[4] },
  { name: "Purebeau", image: siteImages.products[5] },
  { name: "TopLite", image: siteImages.products[6] },
  { name: "Verlocke", image: siteImages.products[7] },
  { name: "Mimose Hundesalon", image: siteImages.products[8] },
  { name: "Dermalogica", image: siteImages.products[9] },
];

export default function ProductsSection() {
  return (
    <section id="produkte" className="bg-blush/40 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[4px] uppercase text-rose mb-4">
            Produkte & Partner
          </p>
          <h2 className="font-heading text-4xl md:text-5xl font-light text-charcoal mb-6">
            Marken, denen wir <span className="italic text-rose-dark">vertrauen</span>
          </h2>
          <div className="section-divider mb-6" />
          <p className="text-charcoal-light max-w-xl mx-auto text-sm leading-relaxed">
            Für unsere Behandlungen arbeiten wir mit renommierten Produkt- und
            Technologiepartnern zusammen.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {partners.map((p) => (
            <div
              key={p.name}
              className="bg-white p-4 flex items-center justify-center aspect-square shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
