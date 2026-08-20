import { clsx } from "clsx";
import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  center?: boolean;
  light?: boolean;
  className?: string;
};

/** Rótulo uppercase com linhas decorativas antes/depois (ver seção 4). */
export function Eyebrow({ children, center, light, className }: EyebrowProps) {
  const lineColor = light ? "bg-gold-300/50" : "bg-gold-600/45";
  const textColor = light ? "text-gold-300" : "text-gold-600";

  return (
    <p
      className={clsx(
        "flex items-center gap-3 text-xs font-semibold tracking-[0.26em] uppercase",
        textColor,
        center && "justify-center",
        className,
      )}
    >
      <span aria-hidden className={clsx("h-px w-8 shrink-0", lineColor)} />
      <span>{children}</span>
      <span aria-hidden className={clsx("h-px w-8 shrink-0", lineColor)} />
    </p>
  );
}
