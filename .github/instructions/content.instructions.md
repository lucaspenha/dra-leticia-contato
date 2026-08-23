---
description: "Use when writing or editing page copy/content files (content/*.ts) for the Dra. Letícia landing page — section order, required copy, and CTAs."
applyTo: "src/content/**"
---

# Conteúdo das seções — Dra. Letícia Contato

Conteúdo migrado do app de referência `github.com/lucaspenha/dra-leticia-contato-replit`
(pasta `artifacts/dra-leticia-contato`), em 2026-08-23 — substituição total e deliberada do
conteúdo anterior (ver `docs/prompt-novo-projeto.md`, hoje desatualizado para fins de conteúdo).
Isso inclui depoimentos, endereços e fotos de demonstração — não são dados reais da cliente.

## Ordem das seções (não reordenar)

1. Hero (`#inicio`) — `content/hero.ts`
2. Abordagem (`#abordagem`) — `content/intro.ts`
3. Tratamentos (`#tratamentos`) — `content/treatments.ts`, lista numerada de 5 itens
4. A Dra. Letícia (`#dra-leticia`) — `content/doctor.ts`
5. Resultados (`#resultados`) — `content/results.ts`, showcase único (não é galeria)
6. Depoimentos (`#depoimentos`) — `content/reviews.ts`, carrossel com 3 avaliações
7. Localização (`#localizacao`) — `content/locations.ts` + unidades em `lib/site-config.ts`
8. FAQ (`#faq`) — `content/faq.ts`, 4 perguntas em acordeão
9. Footer — `content/footer.ts`

Não existem mais seções "Como funciona" nem um CTA final separado — o Footer acumula o
CTA final (botão "Agendar conversa" abre o `BookingModal`).

## Regras de conteúdo

- Todo CTA de WhatsApp direto usa `buildWhatsappLink(context)` (`lib/whatsapp.ts`) via
  `WhatsAppLink` (link de texto) ou o botão "+" do `MenuItem` — nunca montar o link manualmente.
- Botões "Agendar conversa" (Header, Hero, Footer) usam `ScheduleButton`, que abre o
  `BookingModal` (captura nome + unidade antes de redirecionar ao WhatsApp).
- `site-config.ts` (endereços/telefone/WhatsApp) contém dados de demonstração migrados do
  repo de referência — **substituir por dados reais da cliente antes de publicar em produção**.
- Depoimentos em `content/reviews.ts` são fictícios (do app de referência) — não são avaliações
  reais de pacientes.
