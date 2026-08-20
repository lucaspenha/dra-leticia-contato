"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

import { TestimonialCard } from "@/components/ui/testimonial-card";

type Testimonial = {
  name: string;
  reviewCount: string;
  timeAgo: string;
  text: string;
};

/**
 * Carrossel infinito de depoimentos (Embla + autoplay), com dots, setas e
 * suporte a drag/touch nativo do Embla. Pausa o autoplay ao interagir.
 */
export function TestimonialsCarousel({ testimonials }: { testimonials: Testimonial[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4800, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // Sincroniza o dot ativo com o snap inicial do Embla (padrão recomendado da lib).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-4 flex">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name + testimonial.text.slice(0, 12)}
              className="min-w-0 shrink-0 grow-0 basis-full pl-4 sm:basis-1/2 md:basis-1/3"
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Depoimento anterior"
        onClick={() => emblaApi?.scrollPrev()}
        className="border-cream-200 bg-cream-50 shadow-soft absolute top-1/2 left-0 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border p-2 transition-transform hover:-translate-x-5 sm:flex"
      >
        <ChevronLeft className="text-forest-700 h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Próximo depoimento"
        onClick={() => emblaApi?.scrollNext()}
        className="border-cream-200 bg-cream-50 shadow-soft absolute top-1/2 right-0 hidden translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border p-2 transition-transform hover:translate-x-5 sm:flex"
      >
        <ChevronRight className="text-forest-700 h-5 w-5" />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.name + "-dot"}
            type="button"
            aria-label={`Ir para o depoimento ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
            className={
              "ease-brand h-2 rounded-full transition-all duration-300 " +
              (index === selectedIndex ? "bg-gold-600 w-6" : "bg-cream-200 w-2")
            }
          />
        ))}
      </div>
    </div>
  );
}
