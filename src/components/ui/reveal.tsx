"use client";

import { clsx } from "clsx";
import type { ElementType, ReactNode } from "react";

import { useReveal } from "@/hooks/use-reveal";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
};

/** Envolve o conteúdo com o efeito fade + slide-up ao entrar na viewport. */
export function Reveal({ children, as: Tag = "div", className, delay = 0 }: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <Tag
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={clsx(
        "ease-brand transition-all duration-700 motion-reduce:transition-none",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
