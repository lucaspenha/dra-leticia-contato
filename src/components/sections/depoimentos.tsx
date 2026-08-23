import { GoogleReviewsBadge } from "@/components/ui/google-reviews-badge";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { TestimonialsCarousel } from "@/components/testimonials-carousel";
import { reviews, reviewsSection } from "@/content/reviews";

export function Depoimentos() {
  return (
    <Section id="depoimentos" className="bg-cream-50">
      <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
        <div>
          <p className="text-gold-600 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
            {reviewsSection.eyebrow}
          </p>
          <h2 className="font-display text-forest-700 mt-5 text-[clamp(2.8rem,5vw,4.7rem)] leading-none tracking-[-0.05em]">
            {reviewsSection.title}
            <br />
            <em className="italic">{reviewsSection.titleEmphasis}</em>
          </h2>
        </div>
        <GoogleReviewsBadge href={reviewsSection.googleReviewsHref} />
      </div>

      <Reveal className="mt-12">
        <TestimonialsCarousel testimonials={reviews} />
      </Reveal>
    </Section>
  );
}
