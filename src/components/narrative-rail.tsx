"use client";

import Image from "next/image";
import { clsx } from "clsx";

import { WhatsAppButton } from "@/components/whatsapp-button";
import { chapters } from "@/content/chapters";
import { useActiveSection } from "@/hooks/use-active-section";

const chapterIds = chapters.map((chapter) => chapter.id);

/** Trilha fixa da consulta (desktop): capítulos numerados + WhatsApp sempre à mão. */
export function NarrativeRail() {
  const activeId = useActiveSection(chapterIds);

  return (
    <nav
      aria-label="Trilha da consulta"
      className="border-forest-line bg-forest-900 fixed inset-y-0 left-0 z-40 hidden w-64 flex-col justify-between border-r px-6 py-8 md:flex lg:w-72 lg:px-8"
    >
      <div>
        <a href="#inicio" aria-label="Dra. Letícia Contato — página inicial" className="block">
          <Image
            src="/images/logo.png"
            alt="Dra. Letícia Contato"
            width={834}
            height={343}
            unoptimized
            className="h-12 w-auto"
          />
        </a>

        <ol className="mt-10 flex flex-col gap-1">
          {chapters.map((chapter) => {
            const isActive = chapter.id === activeId;
            return (
              <li key={chapter.id}>
                <a
                  href={`#${chapter.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={clsx(
                    "ease-brand group rounded-brand-sm flex items-baseline gap-3 px-4 py-2.5 text-sm transition-colors duration-300",
                    isActive
                      ? "bg-cream-50/8 text-cream-50"
                      : "text-cream-100/55 hover:text-cream-100/85",
                  )}
                >
                  <span
                    className={clsx(
                      "font-display text-base italic",
                      isActive ? "text-gold-300" : "text-gold-500/50",
                    )}
                  >
                    {chapter.number}
                  </span>
                  <span className="font-semibold">{chapter.label}</span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>

      <WhatsAppButton
        context="rail:falar-no-whatsapp"
        location="rail"
        variant="gold"
        size="sm"
        className="w-full"
      >
        Falar no WhatsApp
      </WhatsAppButton>
    </nav>
  );
}

/** Barra de progresso da consulta (mobile): capítulo atual + trecho percorrido. */
export function MobileChapterBar() {
  const activeId = useActiveSection(chapterIds);
  const activeIndex = Math.max(
    0,
    chapters.findIndex((chapter) => chapter.id === activeId),
  );
  const active = chapters[activeIndex] ?? chapters[0]!;
  const progress = ((activeIndex + 1) / chapters.length) * 100;

  return (
    <div className="bg-forest-900/95 sticky top-0 z-40 flex items-center gap-3 px-4 py-3 backdrop-blur-md md:hidden">
      <span className="font-display text-gold-300 shrink-0 text-sm italic">{active.number}</span>
      <span className="text-cream-50 flex-1 truncate text-sm font-semibold">{active.label}</span>
      <div className="bg-cream-50/15 h-1 w-16 shrink-0 overflow-hidden rounded-full" aria-hidden>
        <div
          className="bg-gold-500 ease-brand h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
