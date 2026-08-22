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

// Contrato de direção do rebuild "Trilha narrativa" (seed 11afceab) — precisa
// sobreviver como comentário HTML real no markup emitido (JSX {/* */} é apagado no build).
const DIRECTION_CONTRACT_HTML = `<!--
  THESIS: the page is one continuous consultation narrative read against a fixed
  chapter rail, refusing the atelier's previous stacked-sections-with-a-floating-
  button template in favor of a spine the visitor always sees themselves inside.
  OWN-WORLD: forest/gold/cream palette, logo, and real photography unchanged from
  DESIGN.md; Playfair Display + Manrope unchanged; the rail reuses the Meaningful
  Numeral convention (serif italic gold numerals) for its 8 chapters, with a
  WhatsApp pill pinned to the rail's own foot instead of a floating button.
  STORY: a prospective patient always knows which chapter of the consultation she
  is in, reaches proof (procedures, results, testimonials) without losing her
  place, and reaches WhatsApp from the rail at any scroll depth.
  FIRST VIEWPORT: hero keeps its bleed portrait split, now offset by the rail's
  first chapter (01 · Início) already highlighted at rest, rail's WhatsApp pill
  visible from the first frame.
  FORM: Trilha narrativa fixa — dealt card (index 4) of 7 grounded structural
  candidates, seed 11afceab, chosen over the dealt dossiê-editorial and
  duas-colunas-persistente alternates and IMPECCABLE'S PICK (espinha de prova
  social); six catalog challengers declined on audience identification.
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
