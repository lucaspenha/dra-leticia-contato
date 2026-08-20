import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FaqAccordion } from "@/components/faq-item";
import { faqItems, faqSection } from "@/content/faq";

export function Faq() {
  return (
    <Section id="faq" className="bg-cream-50">
      <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
        <Eyebrow center>{faqSection.eyebrow}</Eyebrow>
        <SectionTitle emphasis={faqSection.titleEmphasis}>{faqSection.title}</SectionTitle>
      </div>

      <Reveal className="mx-auto mt-10 max-w-3xl">
        <FaqAccordion items={[...faqItems]} />
      </Reveal>

      <div className="mt-10 flex flex-col items-center gap-4 text-center">
        <p className="text-ink-700 text-lg">{faqSection.ctaText}</p>
        <WhatsAppButton context={faqSection.whatsappContext} location="faq" variant="gold">
          {faqSection.ctaLabel}
        </WhatsAppButton>
      </div>
    </Section>
  );
}
