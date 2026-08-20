import { clsx } from "clsx";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
};

/** Wrapper padrão de seção: container central 1180px + padding fluido (ver seção 3.3). */
export function Section({ id, children, className, containerClassName }: SectionProps) {
  return (
    <section
      id={id}
      className={clsx("py-[clamp(56px,8.5vw,108px)] md:py-[clamp(64px,6.5vw,88px)]", className)}
    >
      <div className={clsx("mx-auto max-w-295 px-[clamp(20px,5vw,48px)]", containerClassName)}>
        {children}
      </div>
    </section>
  );
}
