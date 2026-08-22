import { MenuItem } from "@/components/ui/menu-item";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { procedimentosSection, procedures } from "@/content/procedures";

export function Procedimentos() {
  const featured = procedures.find((procedure) => procedure.featured);
  const rest = procedures.filter((procedure) => !procedure.featured);

  return (
    <Section id="procedimentos" className="bg-cream-50">
      <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
        <SectionTitle emphasis={procedimentosSection.titleEmphasis}>
          {procedimentosSection.title}
        </SectionTitle>
        <p className="text-ink-500 max-w-2xl text-lg">{procedimentosSection.lead}</p>
      </div>

      {featured ? (
        <Reveal>
          <div className="rounded-brand bg-green-grad text-cream-50 shadow-soft mt-12 flex flex-col gap-4 p-8 sm:flex-row sm:items-end sm:justify-between md:p-10">
            <div>
              <h3 className="font-display text-3xl font-semibold md:text-4xl">{featured.title}</h3>
              <p className="text-cream-100/90 mt-3 max-w-xl text-lg">{featured.description}</p>
            </div>
            <WhatsAppButton
              context={featured.whatsappContext}
              location="procedimentos-destaque"
              variant="gold"
              className="shrink-0"
            >
              Quero saber mais
            </WhatsAppButton>
          </div>
        </Reveal>
      ) : null}

      <Reveal delay={80}>
        <ol className="mt-4">
          {rest.map((procedure, index) => (
            <MenuItem
              key={procedure.id}
              index={String(index + 1).padStart(2, "0")}
              title={procedure.title}
              description={procedure.description}
              whatsappContext={procedure.whatsappContext}
            />
          ))}
        </ol>
      </Reveal>

      <Reveal delay={rest.length * 40}>
        <div className="border-gold-500/40 bg-gold-500/10 rounded-brand-sm mt-8 flex flex-col items-center gap-4 border p-7 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h3 className="font-display text-forest-900 text-xl font-semibold">
              Não sabe qual procedimento é ideal?
            </h3>
            <p className="text-ink-500 mt-1">
              Fale com a Dra. Letícia e receba uma orientação personalizada para o seu caso.
            </p>
          </div>
          <WhatsAppButton
            context="procedimentos:falar-com-a-dra-leticia"
            location="procedimentos-cta"
            variant="forest"
            size="sm"
            className="shrink-0"
          >
            Falar com a Dra. Letícia
          </WhatsAppButton>
        </div>
      </Reveal>
    </Section>
  );
}
