import Image from "next/image";

import { WhatsAppButton } from "@/components/whatsapp-button";
import { Eyebrow } from "@/components/ui/eyebrow";
import { hero } from "@/content/hero";

export function Hero() {
  return (
    <section id="inicio" className="bg-forest-900 text-cream-50 relative isolate overflow-hidden">
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-40"
      />
      <div className="from-forest-900 via-forest-900/85 to-forest-900/40 absolute inset-0 bg-gradient-to-t" />

      <div className="relative mx-auto flex max-w-[1180px] flex-col items-center gap-8 px-[clamp(20px,5vw,48px)] py-[clamp(96px,14vw,160px)] text-center">
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

        <ul className="text-cream-100/85 mt-4 flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:justify-center sm:gap-8">
          {hero.trustList.map((item) => (
            <li key={item} className="flex items-center gap-2">
              <span aria-hidden className="bg-gold-300 h-1.5 w-1.5 shrink-0 rounded-full" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
