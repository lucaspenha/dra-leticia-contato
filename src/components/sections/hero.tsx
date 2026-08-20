import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { hero } from "@/content/hero";

export function Hero() {
  return (
    <section
      id="inicio"
      className="from-forest-700 via-forest-800 to-forest-900 text-cream-50 relative isolate overflow-hidden bg-linear-to-t"
    >
      <div className="relative mx-auto flex max-w-295 flex-col items-center gap-8 px-[clamp(20px,5vw,48px)] py-[clamp(50px,5vw,160px)] text-center">
        <a href="#inicio" aria-label="Dra. Letícia Contato — página inicial">
          <Image
            src="/images/logo.png"
            alt="Dra. Letícia Contato — Odontologia & Harmonização Facial"
            width={834}
            height={343}
            className="h-24 w-auto sm:h-28"
          />
        </a>
        <Eyebrow center light>
          {hero.eyebrow}
        </Eyebrow>

        <h1 className="font-display text-[clamp(2.6rem,7vw,4.4rem)] leading-[1.05] font-semibold tracking-[-0.01em]">
          {hero.title} <em className="text-gold-300 font-medium italic">{hero.titleEmphasis}</em>
        </h1>

        <p className="text-cream-100/90 max-w-2xl text-lg">{hero.subtitle}</p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <WhatsAppButton context="hero:agendar-avaliacao" location="hero" variant="gold" size="xl">
            Agendar avaliação
          </WhatsAppButton>
          <a
            href="#procedimentos"
            className="border-cream-50/30 text-cream-50 hover:bg-cream-50/10 inline-flex items-center justify-center rounded-full border px-8 py-4 text-lg font-semibold transition-colors"
          >
            Ver procedimentos
          </a>
        </div>
      </div>
    </section>
  );
}
