// src/app/layout.tsx
import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Fuentes más elegantes
import "./globals.css";
import Navbar from "@/components/Navbar";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Te Hago La Pata | Catering Artesanal & Eventos",
  description:
    "El mejor servicio de pernil y pata de cerdo a domicilio en Buenos Aires. Calidad artesanal para tus eventos y cumpleaños.",
  keywords: [
    "pata de cerdo",
    "pernil a domicilio",
    "catering buenos aires",
    "Te Hago La Pata",
    "THLP",
    "cumpleaños",
    "eventos corporativos",
    "mesa dulce",
    "catering artesanal",
  ],
  openGraph: {
    title: "Te Hago La Pata | Catering Artesanal",
    description: "Perniles, tablas y el mejor servicio para tu evento.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${serif.variable} ${sans.variable} antialiased scroll-smooth`}
    >
      <body className="flex flex-col font-sans bg-brand-white text-brand-black overflow-x-hidden">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
