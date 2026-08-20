import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Dra. Letícia Contato — Odontologia e Harmonização Facial",
  description:
    "Botox, preenchimentos, bioestimuladores de colágeno e skinbooster com a Dra. Letícia Contato, em Araxá – MG, Perdizes – MG e Ribeirão Preto – SP.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${manrope.variable} h-full antialiased`}>
      <body className="bg-cream-50 font-body text-ink-900 flex min-h-full flex-col">
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
