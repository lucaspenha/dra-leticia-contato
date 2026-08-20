# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router) + TypeScript estrito + Tailwind CSS + npm. Decisão do usuário, documentada em
docs/prompt-novo-projeto.md seção 2 (não delegada, não é uma inferência).

## Users

Pessoas (majoritariamente mulheres) interessadas em odontologia estética e harmonização facial,
buscando um atendimento individualizado e sutil — não um resultado "artificial" ou padronizado.
Moram ou circulam por Araxá–MG, Perdizes–MG ou Ribeirão Preto–SP e decidem se agendam uma avaliação
com a Dra. Letícia Contato.

## Product Purpose

Landing page one-page para gerar contato (agendamento de avaliação) via WhatsApp com a Dra. Letícia
Contato, apresentando procedimentos, resultados antes/depois, processo de atendimento, a profissional,
depoimentos, unidades de atendimento e FAQ.

## Positioning

Harmonização facial pensada para a individualidade de cada paciente — resultados sutis e naturais,
com atendimento sem pressa e explicação clara de cada etapa, em vez de procedimentos padronizados
em série.

## Operating Context

Atendimento presencial por agendamento em 3 unidades (Araxá–MG, Perdizes–MG, Ribeirão Preto–SP),
com contato inicial e agendamento feitos via WhatsApp (link `wa.me` com mensagem pré-preenchida
por contexto/seção). Site estático (sem login, sem backend próprio nesta versão).

## Capabilities and Constraints

- Site estático (SSG via Next.js), sem backend/API própria nesta versão.
- CTA principal sempre é um link WhatsApp; não há formulário de contato.
- Depoimentos ficam fixos no código (`content/testimonials.ts`), sem integração com API do Google
  Places.
- Múltiplas unidades de atendimento compartilham o mesmo número de WhatsApp.
- Em aberto / não confirmado ainda: CEP e telefone das unidades de Perdizes e Ribeirão Preto,
  usuário do Instagram, decisão sobre banner de cookies/LGPD, domínio definitivo de produção.

## Brand Commitments

- Nome: "Dra. Letícia Contato" — tagline "Odontologia & Harmonização Facial".
- Paleta verde-floresta (`forest`) + dourado (`gold`) + creme (`cream`), tipografia Cormorant
  Garamond (serifada, títulos/itálico) + Manrope (corpo). Constraint visual vinda do site atual,
  documentada em docs/prompt-novo-projeto.md seção 3 — tratada como vínculo confirmado, não como
  direção a redesenhar.
- CTA de WhatsApp com verde oficial (`#25D366`).

## Evidence on Hand

- 7 depoimentos reais do Google (nome, nº de avaliações, tempo) em `content/testimonials.ts` — o
  texto de cada avaliação ainda não foi fornecido e está marcado como pendente no código (não foi
  inventado).
- Fotos (foto da Dra. Letícia + pares antes/depois) ainda não fornecidas nesta sessão — usando
  placeholders gerados localmente (`scripts/generate-placeholder-images.py`) até a cliente enviar
  as fotos reais definitivas.

## Product Principles

- Sutileza e naturalidade acima de transformação agressiva.
- Individualização: nenhum procedimento é apresentado como "padrão" para todos.
- Transparência: cada etapa do atendimento é explicada antes de acontecer.
- Confiança e segurança: tom acolhedor, sem pressa, sem venda agressiva.
- Resposta rápida ao contato (WhatsApp) como diferencial competitivo.

## Accessibility & Inclusion

Respeitar `prefers-reduced-motion`, foco visível (`:focus-visible`) com contraste adequado sobre a
paleta dourado/creme, `aria-*` em componentes interativos (accordion, tabs, carrossel), conforme
docs/prompt-novo-projeto.md seção 3.5.

---

> **Nota de proveniência:** este PRODUCT.md foi escrito de forma autônoma a partir de
> docs/prompt-novo-projeto.md (seções 1–13), conforme instrução explícita do usuário para executar
> o plano da seção 12 sem pausar para confirmação manual entre etapas. Nenhum dado de negócio foi
> inventado além do que já estava documentado; lacunas conhecidas (endereços incompletos, textos de
> depoimentos, Instagram, domínio) estão listadas acima como pendências, não como fatos.
