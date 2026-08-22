import { ProcessStep } from "@/components/ui/process-step";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { comoFuncionaSection, processSteps } from "@/content/process";

export function ComoFunciona() {
  return (
    <Section id="como-funciona" className="bg-cream-50">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
        <SectionTitle center emphasis={comoFuncionaSection.titleEmphasis}>
          {comoFuncionaSection.title}
        </SectionTitle>
        <p className="text-ink-500 max-w-xl text-lg">{comoFuncionaSection.lead}</p>
      </div>

      <Reveal>
        <ol className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {processSteps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </ol>
      </Reveal>

      <Reveal className="mt-12 flex justify-center">
        <WhatsAppButton
          context={comoFuncionaSection.whatsappContext}
          location="como-funciona"
          variant="forest"
        >
          {comoFuncionaSection.ctaLabel}
        </WhatsAppButton>
      </Reveal>
    </Section>
  );
}
