import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { FaqAccordion } from "@/components/faq-item";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { faqItems, faqSection } from "@/content/faq";

export function Faq() {
  return (
    <Section id="faq" className="bg-cream-50">
      <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="text-gold-600 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
            {faqSection.eyebrow}
          </p>
          <h2 className="font-display text-forest-700 mt-5 text-5xl leading-[.98] tracking-[-0.04em]">
            {faqSection.title}
            <br />
            <em className="italic">{faqSection.titleEmphasis}</em>
          </h2>
          <p className="text-ink-500 mt-7 max-w-[260px] text-[13px] leading-6">{faqSection.lead}</p>
          <WhatsAppLink
            context={faqSection.whatsappContext}
            location="faq"
            className="text-forest-700 mt-7"
          >
            {faqSection.ctaLabel}
          </WhatsAppLink>
        </div>

        <Reveal delay={80} className="border-forest-700/20 border-t">
          <FaqAccordion items={[...faqItems]} />
        </Reveal>
      </div>
    </Section>
  );
}
