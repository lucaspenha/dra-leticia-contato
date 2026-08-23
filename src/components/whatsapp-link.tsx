"use client";

import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { trackWhatsappClick } from "@/lib/analytics";
import { buildWhatsappLink } from "@/lib/whatsapp";
import { clsx } from "clsx";

type WhatsAppLinkProps = {
  context?: string;
  location: string;
  children: ReactNode;
  className?: string;
  underline?: boolean;
};

/** Link de texto com seta (não é um botão pill) para CTAs discretos de WhatsApp. */
export function WhatsAppLink({
  context,
  location,
  children,
  className,
  underline = true,
}: WhatsAppLinkProps) {
  return (
    <a
      href={buildWhatsappLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsappClick({ location, context })}
      className={clsx(
        "ease-brand flex w-fit items-center gap-2 text-[.67rem] font-bold tracking-[0.16em] uppercase transition-all hover:gap-4",
        underline && "border-b pb-2",
        className,
      )}
    >
      {children} <ArrowRight size={15} />
    </a>
  );
}
