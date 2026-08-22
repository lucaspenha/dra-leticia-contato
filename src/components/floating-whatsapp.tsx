"use client";

import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { trackWhatsappClick } from "@/lib/analytics";
import { buildWhatsappLink } from "@/lib/whatsapp";

/** Botão flutuante fixo do WhatsApp, com pulso animado (`animate-wa-pulse`). */
export function FloatingWhatsApp() {
  return (
    <a
      href={buildWhatsappLink("botao-flutuante")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      onClick={() => trackWhatsappClick({ location: "floating-whatsapp" })}
      className="bg-wa-green shadow-soft ease-brand hover:bg-wa-green-d animate-wa-pulse fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full text-white transition-transform duration-300 hover:-translate-y-0.5 active:scale-95 motion-reduce:animate-none motion-reduce:transition-none md:hidden"
    >
      <WhatsappIcon className="h-7 w-7" />
    </a>
  );
}
