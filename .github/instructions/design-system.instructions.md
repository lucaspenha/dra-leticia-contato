---
description: "Use when creating or editing UI components, Tailwind config, or styles for the Dra. Letícia landing page — design tokens (colors, typography, radius, shadows) and reusable component patterns."
applyTo: "**/*.{ts,tsx,css}"
---

# Design system — Dra. Letícia Contato

Paleta e estrutura migradas do app de referência `github.com/lucaspenha/dra-leticia-contato-replit`
em 2026-08-23 (ver `tailwind.config.ts`). `docs/prompt-novo-projeto.md` está desatualizado quanto
a tokens/seções — não usar como fonte para paleta/conteúdo novo.

## Paleta (`tailwind.config.ts` → `theme.extend.colors`)

- `forest.900 #183b2b` — verde-floresta escuro (header/hero/footer/CTA de resultados).
- `forest.700 #28503d` — verde médio (headings, texto sobre fundo claro, seção Resultados).
- `gold.500 #cfb777` — dourado principal (botões, "Agendar conversa").
- `gold.600 #a3884b` — dourado escuro (eyebrows, labels, índices numerados).
- `gold.300 #d8bf83` — dourado claro (itálicos de destaque sobre fundo escuro).
- `cream.50 #f5efdf` / `cream.100 #e9e2d1` — fundos claros alternados entre seções.
- `wa.green #278b4e` — WhatsApp (CTA flutuante, submit do `BookingModal`).

## Tipografia

- Display/serif (títulos, itálico): **Playfair Display** via `next/font/google` (substituiu
  Cormorant Garamond numa iteração anterior — não reverter).
- Corpo: **Manrope** via `next/font/google`.

## Breakpoints customizados (não usar defaults do Tailwind)

```ts
screens: { sm: "600px", md: "900px", lg: "1024px", xl: "1280px" }
```

## Componentes já definidos (não recriar do zero)

`Section`, `Reveal` (+ hook `useReveal`), `MenuItem` (linha de tratamento com botão "+"),
`DoctorPhoto` (retrato emoldurado), `TestimonialCard` + `TestimonialsCarousel`,
`GoogleReviewsBadge`, `FaqAccordion`, `LocationMap`, `Header` (client, menu mobile),
`ScheduleButton` + `BookingModal` + `BookingProvider` (`components/booking/*`, abre modal de
agendamento), `WhatsAppLink` (link de texto com seta para CTAs de WhatsApp diretos),
`FloatingWhatsApp`.

Não existe mais um componente `Button`/`WhatsAppButton` genérico nem `Eyebrow` — cada CTA usa
o componente específico acima. Labels tipo "eyebrow" são texto simples (`text-[.67rem]
font-semibold tracking-[0.22em] uppercase text-gold-600`), sem componente dedicado.

## Regras

- Radius de cards/imagens grandes = 22px (`rounded-brand`); a maioria dos botões novos é
  retangular (sem `rounded-full` por padrão) — siga o componente que estiver estilizando.
- Respeitar `prefers-reduced-motion` em qualquer animação nova.
- Links `target="_blank"` sempre com `rel="noopener noreferrer"`.
