import { siteImages } from "@/lib/siteImages";

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteImages.productVideos.map((video) => (
            <figure
              key={video.title}
              className="group bg-white p-3 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                <video
                  src={video.src}
                  poster={video.poster}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label={video.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/45 via-transparent to-transparent opacity-80" />
                <figcaption className="absolute bottom-4 left-4 right-4 font-heading text-lg text-white">
                  {video.title}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
