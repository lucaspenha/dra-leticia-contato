"use client";

import { useEffect, useState } from "react";

/**
 * Rastreia qual seção (por `id`) está mais visível no viewport, para
 * sincronizar a trilha narrativa (rail/progress bar) com o scroll.
 * Sem `prefers-reduced-motion` especial: é apenas leitura de estado, não anima.
 */
export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const ratios = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratios.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        }
        let bestId = activeId;
        let bestRatio = 0;
        for (const id of ids) {
          const ratio = ratios.get(id) ?? 0;
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        }
        if (bestRatio > 0) setActiveId(bestId);
      },
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-15% 0px -55% 0px" },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join(",")]);

  return activeId;
}
