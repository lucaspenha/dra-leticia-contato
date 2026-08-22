import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";

import { AnalyticsScripts } from "@/components/analytics-scripts";
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
  themeColor: "#03422F",
  viewportFit: "cover",
};

// Contrato de direção do redesign (seed a2c1b031) — precisa sobreviver como
// comentário HTML real no markup emitido (JSX {/* */} é apagado no build).
const DIRECTION_CONTRACT_HTML = `<!--
  THESIS: every section reads like a page from a boutique atelier's lookbook — large
  image-led moments and an editorial treatment menu, refusing the centered-hero-plus-
  icon-grid template the category defaults to.
  OWN-WORLD: forest/gold/cream palette and logo unchanged; Playfair Display headlines
  (replacing Cormorant Garamond) + Manrope body; boutique menu rules, asymmetric
  image-led grids, thin gold dividers, editorial numerals.
  STORY: a prospective patient reads the practice as a considered atelier, understands
  the treatment menu at a glance, and books an avaliação on WhatsApp.
  FIRST VIEWPORT: asymmetric split hero — a large bleed portrait of Dra. Letícia on one
  side, eyebrow/title/subtitle/CTAs on the other, no card shell.
  FORM: Atelier lookbook — dealt card (index 5) of 7 grounded structural candidates,
  seed a2c1b031, chosen over the rolled lead (agenda ledger) and garden path.
  FINISH: unreviewed and undocumented is unfinished; this build ends with the finish
  review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
-->`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${manrope.variable} h-full antialiased`}>
      <body className="bg-cream-50 font-body text-ink-900 flex min-h-full flex-col">
        <div dangerouslySetInnerHTML={{ __html: DIRECTION_CONTRACT_HTML }} />
        {children}
        <FloatingWhatsApp />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
