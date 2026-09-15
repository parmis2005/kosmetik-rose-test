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
  title: "Kosmetik Atelier Rosenblick – Schönheitssalon & Elektroepilationsstudio Musterstadt",
  description:
    "Kosmetik Atelier Rosenblick auf der Musterstraße in Musterstadt: Ihr fiktives Kosmetikstudio für Gesichtsbehandlungen, dauerhafte Haarentfernung, Permanent Make-up, Bio-Lifting und mehr. Termine bei Inhaberin Mira Beispiel.",
  keywords:
    "Kosmetikstudio Musterstadt, Kosmetik Atelier Rosenblick, Elektroepilation, Haarentfernung Musterstadt, Permanent Make Up Musterstadt, Gesichtsbehandlung Musterstraße",
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
