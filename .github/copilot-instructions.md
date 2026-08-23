# Projeto: Dra. Letícia Contato — Landing Page (Next.js)

Especificação completa (design system, estrutura de conteúdo, comportamento, checklist técnico): ver [docs/prompt-novo-projeto.md](../docs/prompt-novo-projeto.md). Consulte esse arquivo antes de qualquer tarefa de design/conteúdo/estrutura — não duplique o conteúdo dele aqui.

## Stack (fixa, não trocar)

- Next.js (App Router) + TypeScript estrito + Tailwind CSS + npm.
- Server Components por padrão; `"use client"` só em componentes com estado/interatividade no navegador.
- Fontes via `next/font/google` (Playfair Display + Manrope); imagens via `next/image`.

## Convenções do projeto

- Config central única em `lib/site-config.ts` (WhatsApp, unidades/endereços, redes sociais) — nunca hardcodear esses dados em componentes.
- Links `target="_blank"` sempre com `rel="noopener noreferrer"`.
- IDs/Measurement IDs de analytics (GA4, Meta Pixel) sempre via variável de ambiente, nunca hardcoded.
- Breakpoints customizados do Tailwind: `sm: 600px`, `md: 900px` (não usar os defaults do Tailwind).

## Build e lint

- `npm run dev` — ambiente local.
- `npm run lint && npm run build` — rodar antes de considerar qualquer etapa concluída.

## Fora de escopo (por enquanto)

- Testes automatizados e pipeline de CI/CD (adiados — ver seção 11.6/11.7 do documento).
- Integração com API do Google Places (depoimentos ficam fixos em `content/reviews.ts`).

## Migração de conteúdo (2026-08-23)

Conteúdo/design atuais foram migrados integralmente do app de referência
`github.com/lucaspenha/dra-leticia-contato-replit` (decisão explícita do usuário, substituição
total). `docs/prompt-novo-projeto.md` reflete a versão ANTERIOR do site e está desatualizado
para conteúdo/paleta — use `.github/instructions/content.instructions.md` e
`design-system.instructions.md` como fonte atual. Dados em `lib/site-config.ts` (endereços,
WhatsApp) e `content/reviews.ts` (depoimentos) são de demonstração, não da cliente real.
