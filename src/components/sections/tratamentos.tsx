import { MenuItem } from "@/components/ui/menu-item";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { treatments, treatmentsSection } from "@/content/treatments";

export function Tratamentos() {
  return (
    <Section id="tratamentos" className="bg-cream-100">
      <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
        <div>
          <p className="text-gold-600 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
            {treatmentsSection.eyebrow}
          </p>
          <h2 className="font-display text-forest-700 mt-5 max-w-[620px] text-[clamp(2.6rem,5vw,5rem)] leading-[.98] tracking-[-0.05em]">
            {treatmentsSection.title}
            <br />
            <em className="italic">{treatmentsSection.titleEmphasis}</em>
          </h2>
        </div>
        <p className="text-ink-500 max-w-[285px] text-[13px] leading-6">{treatmentsSection.lead}</p>
      </div>

      <Reveal delay={80}>
        <ol className="border-forest-700/20 mt-16 border-t">
          {treatments.map((treatment) => (
            <MenuItem
              key={treatment.number}
              index={treatment.number}
              title={treatment.title}
              description={treatment.description}
              whatsappContext={treatment.whatsappContext}
            />
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
