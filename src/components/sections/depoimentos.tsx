import { Eyebrow } from "@/components/ui/eyebrow";
import { GoogleReviewsBadge } from "@/components/ui/google-reviews-badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { SectionTitle } from "@/components/ui/section-title";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { testimonials } from "@/content/testimonials";

const depoimentosSection = {
  eyebrow: "Avaliações no Google",
  title: "Histórias de quem",
  titleEmphasis: "já viveu essa transformação.",
  googleReviewsHref: "https://www.google.com/maps",
};

export function Depoimentos() {
  return (
    <Section id="depoimentos" className="bg-cream-50">
      <div className="flex flex-col items-center gap-4 text-center">
        <Eyebrow center>{depoimentosSection.eyebrow}</Eyebrow>
        <SectionTitle center emphasis={depoimentosSection.titleEmphasis}>
          {depoimentosSection.title}
        </SectionTitle>
        <GoogleReviewsBadge href={depoimentosSection.googleReviewsHref} />
      </div>

      <Reveal className="mt-12">
        <TestimonialsCarousel testimonials={testimonials} />
      </Reveal>
    </Section>
  );
}
