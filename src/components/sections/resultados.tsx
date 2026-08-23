import { Check, Star } from "lucide-react";
import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { resultsSection } from "@/content/results";

export function Resultados() {
  return (
    <Section id="resultados" className="bg-forest-700 text-cream-50">
      <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div>
          <p className="text-gold-300 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
            {resultsSection.eyebrow}
          </p>
          <h2 className="font-display mt-5 max-w-[600px] text-[clamp(2.8rem,5vw,5.2rem)] leading-[.95] tracking-[-0.05em]">
            {resultsSection.title}
            <br />
            <em className="text-gold-300 italic">{resultsSection.titleEmphasis}</em>
          </h2>
        </div>
        <div className="text-gold-300 flex items-center gap-3">
          <Star size={14} fill="currentColor" />
          <span className="text-[11px] tracking-[0.16em] uppercase">{resultsSection.tagline}</span>
        </div>
      </div>

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.15fr_.85fr]">
        <Reveal className="rounded-brand relative min-h-[380px] overflow-hidden">
          <Image
            src={resultsSection.showcase.image.src}
            alt={resultsSection.showcase.image.alt}
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
          <div
            aria-hidden
            className="from-forest-900/70 absolute inset-0 bg-linear-to-t to-transparent"
          />
          <div className="bg-cream-50/85 text-forest-700 absolute bottom-5 left-5 px-4 py-3">
            <span className="text-gold-600 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
              {resultsSection.showcase.caseLabel}
            </span>
            <p className="mt-1 text-[11px]">{resultsSection.showcase.caseTitle}</p>
          </div>
          <div className="border-cream-50/30 text-cream-50 absolute top-5 right-5 rounded-full border px-3 py-2 text-[9px] tracking-[0.12em] uppercase">
            {resultsSection.showcase.badge}
          </div>
        </Reveal>

        <Reveal
          delay={80}
          className="border-gold-300/25 flex flex-col justify-between border p-7 lg:p-10"
        >
          <div>
            <div className="text-gold-300 flex items-center gap-2">
              <Check size={16} />
              <span className="text-[.67rem] font-semibold tracking-[0.22em] uppercase">
                {resultsSection.quoteLabel}
              </span>
            </div>
            <p className="font-display mt-8 text-3xl leading-tight lg:text-4xl">
              &ldquo;{resultsSection.quote}&rdquo;
            </p>
            <p className="text-cream-100/70 mt-6 text-[13px] leading-6">
              {resultsSection.quoteText}
            </p>
          </div>
          <WhatsAppLink
            context={resultsSection.whatsappContext}
            location="resultados"
            className="border-gold-300 text-gold-300 mt-10 self-start"
          >
            {resultsSection.ctaLabel}
          </WhatsAppLink>
        </Reveal>
      </div>
    </Section>
  );
}
