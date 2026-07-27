import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Kosmetik Rose – Schönheitssalon & Elektroepilationsstudio Dortmund",
  description:
    "Kosmetik Rose auf der Kaiserstraße in Dortmund: Ihr kompetentes Kosmetikstudio für Gesichtsbehandlungen, dauerhafte Haarentfernung, Permanent Make-up, Bio-Lifting und mehr. Termine bei Inhaberin Rüya Isildak.",
  keywords:
    "Kosmetikstudio Dortmund, Kosmetik Rose, Elektroepilation, Haarentfernung Dortmund, Permanent Make Up Dortmund, Gesichtsbehandlung Kaiserstraße",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" data-scroll-behavior="smooth" className={`${playfair.variable} ${lato.variable}`}>
      <body>{children}</body>
    </html>
  );
}
