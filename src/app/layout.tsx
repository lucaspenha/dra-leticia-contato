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

// Contrato de direção do rebuild "A Conversa" (seed c2a1d399) — precisa
// sobreviver como comentário HTML real no markup emitido (JSX {/* */} é apagado no build).
const DIRECTION_CONTRACT_HTML = `<!--
  THESIS: the page reads as one live WhatsApp exchange with the practice, not a
  chaptered consultation spine — every section opens on the question a patient
  would actually send before the answer, refusing the atelier's editorial-menu
  template in favor of the product's real channel: fast, direct reply.
  OWN-WORLD: forest/gold/cream palette, logo, and real photography unchanged from
  DESIGN.md; Playfair Display + Manrope unchanged; the rail keeps the Meaningful
  Numeral convention but reframes its 8 stops as a read conversation thread with
  gold check marks, topped by an "online now" status strip; wa-green stays
  exclusive to real WhatsApp CTAs, never the status dot or bubbles.
  STORY: a prospective patient sees her own likely question answered immediately
  in every section, feels the practice is already mid-conversation with her, and
  ends at a compose bar built to look like she is one tap from sending it for real.
  FIRST VIEWPORT: hero is staged as the opening message bubble over the forest
  gradient/portrait split, "Dra. Letícia · online agora" status pill visible at
  rest, rail's first stop already checked off.
  FORM: A Conversa (WhatsApp-first) — dealt card (index 3) of 7 grounded structural
  candidates, seed c2a1d399, chosen over the dealt gallery-first and
  cardápio-boutique alternates; six catalog challengers (BBS terminal, VU-meter
  bridge, silk canopy, glaze shelf, airport wayfinding, wood-type manifesto)
  declined on audience identification.
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
