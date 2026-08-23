import { MoveRight } from "lucide-react";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { introSection } from "@/content/intro";

export function Abordagem() {
  return (
    <Section id="abordagem" className="bg-cream-50">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
        <Reveal>
          <p className="text-gold-600 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
            {introSection.eyebrow}
          </p>
          <div className="bg-gold-500 mt-5 h-px w-16" />
          <p className="font-display text-forest-700 mt-8 text-3xl leading-tight lg:text-4xl">
            {introSection.statement}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-display text-forest-700 text-[clamp(2.1rem,4vw,3.7rem)] leading-[1.08] tracking-[-0.035em]">
            {introSection.title}
          </p>
          <p className="text-ink-500 mt-8 max-w-[550px] text-sm leading-7">
            {introSection.paragraph}
          </p>
          <a
            href="#dra-leticia"
            className="ease-brand border-gold-600 text-forest-700 mt-8 flex w-fit items-center gap-3 border-b pb-2 text-[.67rem] font-bold tracking-[0.17em] uppercase transition-all hover:gap-5"
          >
            {introSection.ctaLabel} <MoveRight size={15} />
          </a>
        </Reveal>
      </div>
    </Section>
  );
}
