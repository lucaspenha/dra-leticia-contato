import Image from "next/image";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { hero } from "@/content/hero";

export function Hero() {
  return (
    <section
      id="inicio"
      className="from-forest-600 via-forest-800 to-forest-900 text-cream-50 relative isolate overflow-hidden bg-linear-to-b"
    >
      <div className="relative mx-auto grid max-w-295 grid-cols-1 md:grid-cols-[1.05fr_1fr] md:items-stretch">
        <div className="flex flex-col items-center gap-8 px-[clamp(20px,5vw,48px)] py-[clamp(48px,6vw,96px)] text-center md:items-start md:py-[clamp(64px,8vw,140px)] md:text-left">
          <a
            href="#inicio"
            aria-label="Dra. Letícia Contato — página inicial"
            className="md:hidden"
          >
            <Image
              src="/images/logo.png"
              alt="Dra. Letícia Contato — Odontologia & Harmonização Facial"
              width={834}
              height={343}
              priority
              unoptimized
              className="h-20 w-auto sm:h-24"
            />
          </a>

          <h1 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.08] font-semibold tracking-[-0.01em]">
            {hero.title} <em className="text-gold-300 font-medium italic">{hero.titleEmphasis}</em>
          </h1>

          <p className="text-cream-100/90 max-w-lg text-lg">{hero.subtitle}</p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap md:justify-start">
            <WhatsAppButton
              context="hero:comecar-avaliacao"
              location="hero"
              variant="gold"
              size="lg"
            >
              {hero.ctaLabel}
            </WhatsAppButton>
            <a
              href="#procedimentos"
              className="border-cream-50/30 text-cream-50 hover:bg-cream-50/10 inline-flex items-center justify-center rounded-full border px-6 py-3.5 text-base font-semibold whitespace-nowrap transition-colors"
            >
              {hero.secondaryLabel}
            </a>
          </div>
        </div>

        <div className="relative min-h-[52vh] md:min-h-full">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            fill
            priority
            sizes="(min-width: 900px) 48vw, 100vw"
            className="object-cover object-top"
          />
          <div
            aria-hidden
            className="from-forest-900/70 md:from-forest-900/55 absolute inset-0 bg-linear-to-t via-transparent to-transparent md:bg-linear-to-r md:via-transparent"
          />
          <div
            aria-hidden
            className="bg-gold-500/90 absolute bottom-8 left-8 hidden h-px w-16 md:block"
          />
          <p className="text-cream-50/90 font-display absolute bottom-8 left-8 hidden text-sm font-medium tracking-[0.08em] italic md:block">
            Dra. Letícia Contato
          </p>
        </div>
      </div>
    </section>
  );
}
