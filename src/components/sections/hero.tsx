import Image from "next/image";
import { ArrowDown } from "lucide-react";

import { ScheduleButton } from "@/components/booking/schedule-button";
import { Header } from "@/components/header";
import { hero } from "@/content/hero";

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-forest-900 text-cream-50 relative isolate min-h-[760px] overflow-hidden lg:min-h-[830px]"
    >
      <Image
        src={hero.image.src}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-35"
        style={{ objectPosition: "75% center" }}
      />
      <div
        aria-hidden
        className="from-forest-900 via-forest-900/72 absolute inset-0 bg-linear-to-r to-transparent"
      />
      <div
        aria-hidden
        className="bg-gold-300/30 absolute top-[30%] right-[8%] hidden h-[420px] w-px lg:block"
      />

      <Header />

      <div className="relative mx-auto flex min-h-[760px] max-w-295 items-end px-6 pt-36 pb-20 lg:min-h-[830px] lg:px-10">
        <div className="max-w-[700px]">
          <div className="text-gold-300 mb-8 flex items-center gap-3">
            <span className="bg-gold-300 h-px w-12" />
            <p className="text-[.67rem] font-semibold tracking-[0.22em] uppercase">
              {hero.eyebrow}
            </p>
          </div>

          <h1 className="font-display text-cream-50 max-w-[660px] text-[clamp(2.9rem,6.4vw,5.7rem)] leading-[0.92] tracking-[-0.055em]">
            {hero.title}
            <br />
            <em className="text-gold-300 font-medium italic">{hero.titleEmphasis}</em>
          </h1>

          <p className="text-cream-100/80 mt-8 max-w-[420px] text-[15px] leading-7 font-light">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <ScheduleButton className="bg-gold-500 hover:bg-gold-300 rounded-brand-sm text-forest-900 px-6 py-4 text-[10px] tracking-[0.16em] uppercase">
              {hero.primaryCta}
            </ScheduleButton>
            <a
              href="#abordagem"
              className="ease-brand text-cream-100/80 hover:text-gold-300 flex items-center gap-3 text-[11px] font-medium tracking-[0.08em] transition-colors"
            >
              <ArrowDown size={15} /> {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div className="absolute right-6 bottom-8 hidden text-right lg:block">
          <div className="text-gold-300 mb-2 text-[10px] tracking-[0.18em]">01 — 06</div>
          <div className="bg-gold-300 h-px w-20" />
        </div>
      </div>
    </section>
  );
}
