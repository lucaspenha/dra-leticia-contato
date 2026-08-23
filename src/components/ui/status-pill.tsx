import { clsx } from "clsx";

type StatusPillProps = {
  label: string;
  light?: boolean;
  className?: string;
};

/** Indicador "online agora" — ponto dourado pulsante + texto, nunca o verde do WhatsApp. */
export function StatusPill({ label, light, className }: StatusPillProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold",
        light ? "bg-cream-50/10 text-cream-50" : "bg-forest-700/8 text-forest-700",
        className,
      )}
    >
      <span className="relative flex h-2 w-2" aria-hidden>
        <span className="bg-gold-500 absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 motion-reduce:animate-none" />
        <span className="bg-gold-500 relative inline-flex h-2 w-2 rounded-full" />
      </span>
      {label}
    </span>
  );
}
