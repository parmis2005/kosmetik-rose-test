import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-heading text-lg text-white/80">Kosmetik Atelier Rosenblick</p>
          <p className="text-white/30 text-xs mt-1">
            © {new Date().getFullYear()} · Alle Rechte vorbehalten
          </p>
        </div>

        <div className="flex gap-8">
          <Link href="/impressum" className="text-white/30 text-xs tracking-[1px] uppercase hover:text-white/60 transition-colors">
            Impressum
          </Link>
          <Link href="/datenschutz" className="text-white/30 text-xs tracking-[1px] uppercase hover:text-white/60 transition-colors">
            Datenschutz
          </Link>
          <a href="#kontakt" className="text-white/30 text-xs tracking-[1px] uppercase hover:text-white/60 transition-colors">
            Kontakt
          </a>
        </div>

        <p className="text-white/20 text-xs">Musterstraße 12 · Musterstadt</p>
      </div>
    </footer>
  );
}
