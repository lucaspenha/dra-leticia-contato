---
description: "Use when writing or editing page copy/content files (content/*.ts) for the Dra. Letícia landing page — section order, required copy, and CTAs."
applyTo: "src/content/**"
---
# Conteúdo das seções — Dra. Létícia Contato

Fonte completa (textos exatos de cada seção): [docs/prompt-novo-projeto.md](../../docs/prompt-novo-projeto.md), seção 5. Não parafrasear nem usar texto placeholder — copiar os textos reais do documento.

## Ordem das seções (não reordenar)
1. Hero (`#inicio`)
2. Procedimentos (`#procedimentos`) — 7 cards (1 destaque + 5 procedimentos + 1 CTA)
3. Galeria/Resultados (`#resultados`) — 6 cards antes/depois
4. Como funciona (`#como-funciona`) — 4 etapas numeradas
5. Sobre (`#sobre`) — bio + citação + diferenciais
6. Depoimentos (`#depoimentos`) — carrossel com 7 depoimentos fixos (`content/testimonials.ts`)
7. Localização (`#localizacao`) — 3 unidades: Araxá–MG, Perdizes–MG, Ribeirão Preto–SP
8. FAQ (`#faq`) — 4 perguntas em acordeão
9. CTA final (`#contato`)
10. Footer

## Regras de conteúdo
- Todo CTA de WhatsApp usa `buildWhatsappLink(context)` de `lib/whatsapp.ts` — nunca montar o link manualmente no componente.
- As 3 unidades usam o mesmo WhatsApp (`5516997939679`); endereços de Perdizes e Ribeirão Preto ainda têm CEP/telefone pendentes — não inventar esses dados.
- Depoimentos e citações são conteúdo real da cliente — não gerar depoimentos fictícios além dos 7 já documentados.
