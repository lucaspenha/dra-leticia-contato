import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { LocationMap } from "@/components/location-map";
import { localizacaoSection } from "@/content/location";
import { siteConfig } from "@/lib/site-config";

export function Localizacao() {
  return (
    <Section id="localizacao" className="bg-cream-100">
      <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
        <SectionTitle emphasis={localizacaoSection.titleEmphasis}>
          {localizacaoSection.title}
        </SectionTitle>
      </div>

      <Reveal className="mt-10">
        <LocationMap locations={siteConfig.locations} />
      </Reveal>

      <div className="mt-8 flex justify-center md:justify-start">
        <WhatsAppButton
          context={localizacaoSection.whatsappContext}
          location="localizacao"
          variant="forest"
        >
          {localizacaoSection.ctaLabel}
        </WhatsAppButton>
      </div>
    </Section>
  );
}
