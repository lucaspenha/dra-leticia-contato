import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  reviewCount: string;
  timeAgo: string;
  text: string;
};

function initials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

/** Card de depoimento (avatar com iniciais, estrelas, citação) — ver `.testi`. */
export function TestimonialCard({ name, reviewCount, timeAgo, text }: TestimonialCardProps) {
  return (
    <article className="rounded-brand-sm border-cream-200 bg-cream-50 flex h-full flex-col gap-4 border p-7">
      <div className="flex items-center gap-3">
        <span className="bg-green-grad font-display text-cream-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-semibold">
          {initials(name)}
        </span>
        <div>
          <p className="text-ink-900 font-semibold">{name}</p>
          <p className="text-ink-500 text-xs">
            {reviewCount} · {timeAgo}
          </p>
        </div>
      </div>
      <div className="text-gold-500 flex gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <p className="text-ink-700 flex-1 italic">&ldquo;{text}&rdquo;</p>
    </article>
  );
}
