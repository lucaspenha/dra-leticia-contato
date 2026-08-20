import { Eyebrow } from "@/components/ui/eyebrow";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/ui/reveal";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { ctaFinalSection } from "@/content/cta-final";

export function CtaFinal() {
  return (
    <section
      id="contato"
      className="bg-forest-900 text-cream-50 relative overflow-hidden py-[clamp(64px,8.5vw,108px)]"
    >
      <div
        aria-hidden
        className="absolute inset-0 [background-image:radial-gradient(circle,rgba(211,171,132,0.6)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] [background-size:28px_28px] opacity-[0.15]"
      />
      <div className="relative mx-auto max-w-[1180px] px-[clamp(20px,5vw,48px)]">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <Eyebrow center light>
            {ctaFinalSection.eyebrow}
          </Eyebrow>
          <SectionTitle center light emphasis={ctaFinalSection.titleEmphasis}>
            {ctaFinalSection.title}
          </SectionTitle>
          <p className="text-cream-100/90 text-lg">{ctaFinalSection.text}</p>
          <WhatsAppButton
            context={ctaFinalSection.whatsappContext}
            location="cta-final"
            variant="green"
            size="xl"
          >
            {ctaFinalSection.buttonLabel}
          </WhatsAppButton>
          <p className="text-cream-100/70 text-sm">{ctaFinalSection.microtext}</p>
        </Reveal>
      </div>
    </section>
  );
}
