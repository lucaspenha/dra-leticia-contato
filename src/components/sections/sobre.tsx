import { Check } from "lucide-react";

import { AboutPhoto } from "@/components/ui/about-badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { sobreSection } from "@/content/about";

export function Sobre() {
  return (
    <Section id="sobre" className="bg-cream-100">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <Reveal className="order-2 md:order-1">
          <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
            <SectionTitle emphasis={sobreSection.titleEmphasis}>{sobreSection.title}</SectionTitle>

            {sobreSection.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-ink-500 text-lg">
                {paragraph}
              </p>
            ))}

            <blockquote className="font-display text-forest-700 text-2xl font-medium italic">
              &ldquo;{sobreSection.quote}&rdquo;
            </blockquote>

            <ul className="flex flex-col gap-2 text-left">
              {sobreSection.differentiators.map((item) => (
                <li key={item} className="text-ink-700 flex items-center gap-2">
                  <Check className="h-5 w-5 shrink-0 text-green-600" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <WhatsAppButton
              context={sobreSection.whatsappContext}
              location="sobre"
              variant="gold"
              className="mt-2"
            >
              {sobreSection.ctaLabel}
            </WhatsAppButton>
          </div>
        </Reveal>

        <Reveal className="order-1 md:order-2">
          <AboutPhoto
            src={sobreSection.photo.src}
            alt={sobreSection.photo.alt}
            badge={sobreSection.photo.badge}
          />
        </Reveal>
      </div>
    </Section>
  );
}
