const partners = [
  { name: "Beautiful Lips", image: "/images/produkte/beautiful-lips.jpg" },
  { name: "Body Detox", image: "/images/produkte/body-detox.jpg" },
  { name: "BTL-Lifting", image: "/images/produkte/btl.jpg" },
  { name: "Cos-Medico", image: "/images/produkte/cos-medico.jpg" },
  { name: "EpilaDerm", image: "/images/produkte/epiladerm.jpg" },
  { name: "Purebeau", image: "/images/produkte/purebeau.jpg" },
  { name: "TopLite", image: "/images/produkte/toplite.jpg" },
  { name: "Verlocke", image: "/images/produkte/verlocke.jpg" },
  { name: "Mimose Hundesalon", image: "/images/produkte/mimose.jpg" },
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
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
