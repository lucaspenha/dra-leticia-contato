import { GalleryCard } from "@/components/ui/gallery-card";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { galleryItems, resultadosSection } from "@/content/gallery";

// Vitrine assimétrica: o primeiro item vira destaque em largura total; o par
// antes/depois ganha o dobro do espaço para cada foto respirar.
const spanClassName: Record<string, string> = {
  "harmonizacao-perfil": "sm:col-span-2 md:col-span-3",
  "lipo-papada": "sm:col-span-2",
};

const aspectClassName: Record<string, string> = {
  "harmonizacao-perfil": "aspect-[16/10]",
};

export function Resultados() {
  return (
    <Section id="resultados" className="bg-cream-100">
      <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
        <SectionTitle emphasis={resultadosSection.titleEmphasis}>
          {resultadosSection.title}
        </SectionTitle>
        <p className="text-ink-500 max-w-2xl text-lg">{resultadosSection.lead}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {galleryItems.map((item, index) => (
          <Reveal key={item.id} delay={index * 60} className={spanClassName[item.id]}>
            <GalleryCard
              title={item.title}
              label={item.label}
              image={item.image}
              pair={item.pair}
              aspectClassName={aspectClassName[item.id]}
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
