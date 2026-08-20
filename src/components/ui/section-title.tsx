import { clsx } from "clsx";
import type { ReactNode } from "react";

type SectionTitleProps = {
  children: ReactNode;
  emphasis: ReactNode;
  as?: "h1" | "h2";
  center?: boolean;
  light?: boolean;
  className?: string;
};

/**
 * Título de seção serifado, com o trecho de destaque (`emphasis`) em itálico
 * dourado — recria o padrão `.section__title` + `<em>` do site atual.
 */
export function SectionTitle({
  children,
  emphasis,
  as: Tag = "h2",
  center,
  light,
  className,
}: SectionTitleProps) {
  return (
    <Tag
      className={clsx(
        "font-display text-[clamp(2rem,5.4vw,3.1rem)] leading-[1.1] font-semibold tracking-[-0.01em]",
        light ? "text-cream-50" : "text-forest-900",
        center ? "text-center" : "text-center md:text-left",
        className,
      )}
    >
      {children}{" "}
      <em className={clsx("font-medium italic", light ? "text-gold-300" : "text-gold-600")}>
        {emphasis}
      </em>
    </Tag>
  );
}
