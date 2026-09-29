"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ResultCase = {
  image: { src: string; alt: string };
  caseLabel: string;
  caseTitle: string;
};

/** Carrossel de casos antes/depois (Embla + autoplay), mesmo padrão do TestimonialsCarousel. */
export function ResultsCarousel({ cases, badge }: { cases: readonly ResultCase[]; badge: string }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 5200, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative min-w-0">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {cases.map((item) => (
            <div key={item.image.src} className="min-w-0 shrink-0 grow-0 basis-full">
              <div className="rounded-brand bg-forest-900 relative min-h-[380px] overflow-hidden">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-contain"
                />
                <div
                  aria-hidden
                  className="from-forest-900/60 absolute inset-0 bg-linear-to-t to-transparent"
                />
                <div className="bg-cream-50/85 text-forest-700 absolute bottom-5 left-5 px-4 py-3">
                  <span className="text-gold-600 text-[.67rem] font-semibold tracking-[0.22em] uppercase">
                    {item.caseLabel}
                  </span>
                  <p className="mt-1 text-[11px]">{item.caseTitle}</p>
                </div>
                <div className="border-cream-50/30 text-cream-50 absolute top-5 right-5 rounded-full border px-3 py-2 text-[9px] tracking-[0.12em] uppercase">
                  {badge}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Caso anterior"
        onClick={() => emblaApi?.scrollPrev()}
        className="border-cream-50/30 bg-forest-900/80 shadow-soft absolute top-1/2 left-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border transition-transform hover:-translate-x-1"
      >
        <ChevronLeft className="text-cream-50 h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Próximo caso"
        onClick={() => emblaApi?.scrollNext()}
        className="border-cream-50/30 bg-forest-900/80 shadow-soft absolute top-1/2 right-3 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border transition-transform hover:translate-x-1"
      >
        <ChevronRight className="text-cream-50 h-5 w-5" />
      </button>

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {cases.map((item, index) => (
          <button
            key={item.image.src + "-dot"}
            type="button"
            aria-label={`Ir para o caso ${index + 1}`}
            onClick={() => emblaApi?.scrollTo(index)}
            className="flex h-11 w-11 items-center justify-center"
          >
            <span
              aria-hidden
              className={
                "ease-brand h-2 rounded-full transition-all duration-300 " +
                (index === selectedIndex ? "bg-gold-300 w-6" : "bg-cream-50/30 w-2")
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}
