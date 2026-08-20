// Helpers tipados para disparar eventos de conversão no GA4 e no Meta Pixel.
// Os scripts em si são carregados via next/script em app/layout.tsx (ver seção 11.8).

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

type WhatsappClickParams = {
  location: string;
  context?: string;
};

/**
 * Dispara o evento de clique no WhatsApp no GA4 (`whatsapp_click`) e no Meta
 * Pixel (`Contact`), incluindo unidade/contexto para medir conversão por seção.
 * Não faz nada em SSR nem se os scripts ainda não carregaram (`window.gtag`/
 * `window.fbq` ausentes).
 */
export function trackWhatsappClick({ location, context }: WhatsappClickParams): void {
  if (typeof window === "undefined") return;

  window.gtag?.("event", "whatsapp_click", {
    location,
    context,
  });

  window.fbq?.("track", "Contact", {
    content_name: context ?? location,
  });
}
