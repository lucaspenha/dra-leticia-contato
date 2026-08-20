---
description: "Use when creating or editing UI components, Tailwind config, or styles for the Dra. Letícia landing page — design tokens (colors, typography, radius, shadows) and reusable component patterns."
applyTo: "**/*.{ts,tsx,css}"
---
# Design system — Dra. Letícia Contato

Fonte completa: [docs/prompt-novo-projeto.md](../../docs/prompt-novo-projeto.md), seções 3 (Design Tokens) e 4 (Componentes). Resumo abaixo só para referência rápida — não invente valores fora do documento.

## Paleta (registrar em `tailwind.config.ts` → `theme.extend.colors`)
- `forest.900 #04241A`, `forest.700 #03422F` — verde-floresta (marca principal, fundos escuros).
- `gold.500 #D3AB84`, `gold.300 #E7CBAE` — dourado (acento premium, itálicos em títulos).
- `cream.50 #FBF8F3`, `cream.200 #E9DFCF` — fundo claro/bordas.
- `ink.900 #191D1A`, `ink.500 #6B756E` — texto principal/secundário.
- `wa.green #25D366` — verde oficial do WhatsApp (CTA final, botão flutuante).

## Tipografia
- Display/serif (títulos, itálico): **Cormorant Garamond** via `next/font/google`.
- Corpo (parágrafos, botões): **Manrope** via `next/font/google`.

## Breakpoints customizados (não usar defaults do Tailwind)
```ts
screens: { sm: "600px", md: "900px", lg: "1024px", xl: "1280px" }
```

## Componentes já definidos (não recriar do zero — ver seção 4 do documento)
`Button` (variantes gold/green/forest/ghost), `Eyebrow`, `Card` (feature/cta), `GalleryCard`, `ProcessStep`, `TestimonialCard` + `TestimonialsCarousel`, `FaqItem`, `FloatingWhatsApp`, hook `useReveal`.

## Regras
- Pill buttons (`rounded-full`), radius de cards = 14px, radius de blocos grandes = 22px.
- Respeitar `prefers-reduced-motion` em qualquer animação nova.
- Links `target="_blank"` sempre com `rel="noopener noreferrer"`.
