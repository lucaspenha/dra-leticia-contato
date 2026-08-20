import { siteConfig } from "@/lib/site-config";

/**
 * Remove caracteres de controle e limita o tamanho de um texto de contexto
 * antes de embuti-lo na mensagem do WhatsApp (defesa em profundidade — os
 * contextos hoje só vêm de conteúdo estático, nunca de input do usuário).
 */
function sanitizeContext(context: string): string {
  return context
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .trim()
    .slice(0, 160);
}

/**
 * Monta o link `wa.me` (WhatsApp Click-to-Chat) com mensagem pré-preenchida.
 * `context` é um texto opcional (ex.: "procedimentos:botox") anexado à
 * mensagem padrão para indicar de onde veio o clique.
 */
export function buildWhatsappLink(context?: string): string {
  const message = context
    ? `${siteConfig.defaultMessage} (${sanitizeContext(context)})`
    : siteConfig.defaultMessage;

  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${siteConfig.whatsappNumber}?${params.toString()}`;
}
