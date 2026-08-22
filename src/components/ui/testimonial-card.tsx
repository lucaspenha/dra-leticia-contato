import { Star } from "lucide-react";

type TestimonialCardProps = {
  name: string;
  reviewCount: string;
  timeAgo: string;
  text: string;
};

/** Depoimento em formato editorial: aspas grandes + citação + assinatura. */
export function TestimonialCard({ name, reviewCount, timeAgo, text }: TestimonialCardProps) {
  return (
    <article className="border-cream-200 bg-cream-50 border-t-gold-500/60 flex h-full flex-col gap-5 rounded-none border-t-2 p-7">
      <span className="font-display text-gold-500/70 text-6xl leading-none italic" aria-hidden>
        &ldquo;
      </span>
      <p className="text-ink-700 flex-1 text-lg leading-relaxed italic">{text}</p>
      <div className="border-cream-200 flex items-center justify-between border-t pt-4">
        <div>
          <p className="font-display text-forest-900 font-semibold">{name}</p>
          <p className="text-ink-500 text-xs">
            {reviewCount} · {timeAgo}
          </p>
        </div>
        <div className="text-gold-500 flex gap-0.5" aria-hidden>
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-current" />
          ))}
        </div>
      </div>
    </article>
  );
}
