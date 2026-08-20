"use client";

import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

import { trackWhatsappClick } from "@/lib/analytics";
import { buildWhatsappLink } from "@/lib/whatsapp";

type ProcedureCardProps = {
  title: string;
  description: string;
  whatsappContext: string;
  featured?: boolean;
};

/** Card de procedimento (ver `.card` / `.card--feature` na seção 4). */
export function ProcedureCard({
  title,
  description,
  whatsappContext,
  featured,
}: ProcedureCardProps) {
  return (
    <div
      className={clsx(
        "rounded-brand-sm flex h-full flex-col gap-4 border p-7",
        featured
          ? "bg-green-grad text-cream-50 shadow-soft border-transparent"
          : "border-cream-200 bg-cream-50 text-ink-900",
      )}
    >
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      <p
        className={clsx(
          "flex-1 text-base leading-relaxed",
          featured ? "text-cream-100/90" : "text-ink-500",
        )}
      >
        {description}
      </p>
      <a
        href={buildWhatsappLink(whatsappContext)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsappClick({ location: "procedimentos", context: whatsappContext })}
        className={clsx(
          "inline-flex items-center gap-1.5 text-sm font-semibold transition-colors",
          featured ? "text-gold-200 hover:text-gold-300" : "text-forest-700 hover:text-green-600",
        )}
      >
        Quero saber mais
        <ArrowRight className="h-4 w-4" aria-hidden />
      </a>
    </div>
  );
}
