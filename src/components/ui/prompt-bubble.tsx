import { clsx } from "clsx";
import type { ReactNode } from "react";

type PromptBubbleProps = {
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
};

/**
 * Bolha de mensagem que abre cada troca da conversa com a pergunta que a
 * paciente traria — a resposta é o próprio título + conteúdo da seção logo abaixo.
 */
export function PromptBubble({ children, align = "left", className }: PromptBubbleProps) {
  return (
    <p
      className={clsx(
        "bg-cream-200 text-ink-700 rounded-brand-sm inline-flex max-w-md px-5 py-3 text-base leading-snug font-medium",
        align === "left" ? "rounded-bl-sm" : "rounded-br-sm",
        className,
      )}
    >
      {children}
    </p>
  );
}
