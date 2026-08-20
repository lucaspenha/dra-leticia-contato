import { GalleryCard } from "@/components/ui/gallery-card";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { galleryItems, resultadosSection } from "@/content/gallery";

export function Resultados() {
  return (
    <Section id="resultados" className="bg-cream-100">
      <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
        <Eyebrow center>{resultadosSection.eyebrow}</Eyebrow>
        <SectionTitle emphasis={resultadosSection.titleEmphasis}>
          {resultadosSection.title}
        </SectionTitle>
        <p className="text-ink-500 max-w-2xl text-lg">{resultadosSection.lead}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <Reveal key={item.id} delay={index * 60}>
            <GalleryCard
              title={item.title}
              label={item.label}
              image={item.image}
              pair={item.pair}
            />
          </Reveal>
        ))}
      </div>

      <p className="text-ink-500 mt-8 text-center text-sm md:text-left">
        {resultadosSection.footnote}
      </p>
    </Section>
  );
}
