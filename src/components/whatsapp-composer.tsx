"use client";

import { Send } from "lucide-react";

import { trackWhatsappClick } from "@/lib/analytics";
import { buildWhatsappLink } from "@/lib/whatsapp";

type WhatsappComposerProps = {
  placeholder: string;
  ariaLabel: string;
  context?: string;
  location: string;
};

/** CTA final estilizado como barra de composição do WhatsApp — o "send" é o link real. */
export function WhatsappComposer({
  placeholder,
  ariaLabel,
  context,
  location,
}: WhatsappComposerProps) {
  return (
    <a
      href={buildWhatsappLink(context)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => trackWhatsappClick({ location, context })}
      className="bg-cream-50 shadow-soft ease-brand group flex w-full max-w-md items-center gap-3 rounded-full py-2 pr-2 pl-6 text-left transition-transform duration-300 hover:-translate-y-0.5"
    >
      <span className="text-ink-500/70 flex-1 truncate text-base">{placeholder}</span>
      <span className="bg-wa-green group-hover:bg-wa-green-d ease-brand flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-colors duration-300">
        <Send className="h-5 w-5 -translate-x-px" aria-hidden />
      </span>
    </a>
  );
}
