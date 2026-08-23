import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { LocationMap } from "@/components/location-map";
import { WhatsAppLink } from "@/components/whatsapp-link";
import { locationsSection } from "@/content/locations";
import { siteConfig } from "@/lib/site-config";

export function Localizacao() {
  return (
    <Section id="localizacao" className="bg-cream-100">
      <div className="grid gap-9 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="text-gold-600 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
            {locationsSection.eyebrow}
          </p>
          <h2 className="font-display text-forest-700 mt-5 text-5xl leading-[.95] tracking-[-0.04em]">
            {locationsSection.title}
            <br />
            <em className="italic">{locationsSection.titleEmphasis}</em>
          </h2>
        </div>
        <p className="text-ink-500 max-w-[400px] self-end text-[13px] leading-6">
          {locationsSection.lead}
        </p>
      </div>

      <Reveal className="border-forest-700/20 mt-14 grid border-t lg:grid-cols-3">
        {siteConfig.locations.map((location, index) => (
          <div
            key={location.id}
            className="border-forest-700/20 border-b py-7 lg:border-r lg:border-b-0 lg:px-7 lg:first:pl-0 lg:last:border-r-0"
          >
            <span className="text-gold-600 font-mono text-[10px]">0{index + 1}</span>
            <h3 className="font-display text-forest-700 mt-5 text-3xl">{location.label}</h3>
            <p className="text-ink-500 mt-3 max-w-[200px] text-[12px] leading-5">
              {location.address}
            </p>
            <WhatsAppLink
              context={`localizacao:${location.id}`}
              location="localizacao"
              underline={false}
              className="text-forest-700 mt-6 text-[10px] tracking-[0.14em]"
            >
              {locationsSection.ctaLabel}
            </WhatsAppLink>
          </div>
        ))}
      </Reveal>

      <Reveal delay={80} className="mt-12">
        <LocationMap locations={siteConfig.locations} />
      </Reveal>
    </Section>
  );
}
