import { Eyebrow } from "@/components/ui/eyebrow";
import { ProcedureCard } from "@/components/ui/procedure-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { procedimentosSection, procedures } from "@/content/procedures";

export function Procedimentos() {
  return (
    <Section id="procedimentos" className="bg-cream-50">
      <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
        <Eyebrow center>{procedimentosSection.eyebrow}</Eyebrow>
        <SectionTitle emphasis={procedimentosSection.titleEmphasis}>
          {procedimentosSection.title}
        </SectionTitle>
        <p className="text-ink-500 max-w-2xl text-lg">{procedimentosSection.lead}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {procedures.map((procedure, index) => (
          <Reveal
            key={procedure.id}
            delay={index * 60}
            className={procedure.featured ? "md:col-span-2" : undefined}
          >
            <ProcedureCard
              title={procedure.title}
              description={procedure.description}
              whatsappContext={procedure.whatsappContext}
              featured={procedure.featured}
            />
          </Reveal>
        ))}

        <Reveal delay={procedures.length * 60}>
          <div className="rounded-brand-sm border-gold-500/40 bg-gold-500/10 flex h-full flex-col items-start gap-4 border p-7">
            <h3 className="font-display text-forest-900 text-2xl font-semibold">
              Não sabe qual procedimento é ideal?
            </h3>
            <p className="text-ink-500 flex-1">
              Fale com a Dra. Letícia e receba uma orientação personalizada para o seu caso.
            </p>
            <WhatsAppButton
              context="procedimentos:falar-com-a-dra-leticia"
              location="procedimentos-cta"
              variant="forest"
              size="sm"
            >
              Falar com a Dra. Letícia
            </WhatsAppButton>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
