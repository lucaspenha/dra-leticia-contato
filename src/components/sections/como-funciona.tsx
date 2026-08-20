import Image from "next/image";

import { Eyebrow } from "@/components/ui/eyebrow";
import { ProcessStep } from "@/components/ui/process-step";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { comoFuncionaSection, processSteps } from "@/content/process";
import { hero } from "@/content/hero";

export function ComoFunciona() {
  return (
    <Section id="como-funciona" className="bg-cream-50">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <Reveal>
          <div className="rounded-brand shadow-soft relative aspect-4/5 overflow-hidden">
            <Image
              src={hero.image.src}
              alt=""
              aria-hidden
              fill
              sizes="(min-width: 900px) 45vw, 100vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <Eyebrow center={false}>{comoFuncionaSection.eyebrow}</Eyebrow>
            <SectionTitle emphasis={comoFuncionaSection.titleEmphasis} center={false}>
              {comoFuncionaSection.title}
            </SectionTitle>
            <p className="text-ink-500 max-w-xl text-lg">{comoFuncionaSection.lead}</p>

            <ol className="mt-4 flex flex-col gap-6 text-left">
              {processSteps.map((step) => (
                <ProcessStep key={step.number} {...step} />
              ))}
            </ol>

            <WhatsAppButton
              context={comoFuncionaSection.whatsappContext}
              location="como-funciona"
              variant="forest"
              className="mt-4"
            >
              {comoFuncionaSection.ctaLabel}
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
