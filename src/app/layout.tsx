import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { AnalyticsScripts } from "@/components/analytics-scripts";
import { BookingProvider } from "@/components/booking/booking-context";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["italic", "normal"],
  variable: "--font-display",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
});

const title =
  "Dra. Letícia Contato — Odontologia e Harmonização Facial | Araxá, Perdizes e Ribeirão Preto";
const description =
  "Botox, preenchimentos, bioestimuladores de colágeno, skinbooster e lipo de papada enzimática com a Dra. Letícia Contato, em Araxá – MG, Perdizes – MG e Ribeirão Preto – SP. Harmonização facial individualizada, com atendimento humanizado. Agende sua avaliação pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    type: "website",
    title: "Dra. Letícia Contato — Odontologia e Harmonização Facial",
    description:
      "Harmonização facial sob medida para a sua individualidade — Botox, preenchimentos, bioestimuladores e mais. Atendimento em Araxá, Perdizes e Ribeirão Preto.",
    images: ["/og-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#183b2b",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${manrope.variable} h-full antialiased`}>
      <body className="bg-cream-50 font-body text-ink-900 flex min-h-full flex-col">
        <BookingProvider>{children}</BookingProvider>
        <FloatingWhatsApp />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
