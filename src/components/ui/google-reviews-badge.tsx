import { Star } from "lucide-react";

/** Pill "Avaliações 5 estrelas no Google" com ícone "G" — ver `.greviews`. */
export function GoogleReviewsBadge({ href }: { href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="border-cream-200 bg-cream-50 text-ink-900 shadow-soft ease-brand inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-semibold transition-transform duration-300 hover:-translate-y-0.5"
    >
      <span className="font-display text-lg font-bold text-[#4285F4]">G</span>
      <span className="text-gold-500 flex gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-3.5 w-3.5 fill-current" />
        ))}
      </span>
      Avaliações 5 estrelas no Google
    </a>
  );
}
