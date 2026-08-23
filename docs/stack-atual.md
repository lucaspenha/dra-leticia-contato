# Stack tecnológica atual — Dra. Letícia Contato

> Levantamento do que **existe hoje** no repositório (`package.json`, arquivos de configuração, estrutura de pastas e integrações no código). Sem propor mudanças ou julgar decisões técnicas.

Fontes analisadas: [package.json](package.json), [next.config.ts](next.config.ts), [tsconfig.json](tsconfig.json), [eslint.config.mjs](eslint.config.mjs), [postcss.config.mjs](postcss.config.mjs), [.nvmrc](.nvmrc), [.env.example](.env.example), [README.md](README.md), `.husky/`, e código-fonte em `src/`.

---

## Linguagem principal

- **TypeScript** (estrito) — todo o código de aplicação (`src/**/*.ts`, `*.tsx`).
- `tsconfig.json`: `"strict": true`, `"noUncheckedIndexedAccess": true`, target `ES2017`, module resolution `bundler`.
- Alias de import configurado: `@/*` → `./src/*`.

## Framework / biblioteca principal

- **Next.js 16.3.1** — App Router (`src/app/`), Server Components por padrão (`"use client"` só em componentes com estado/interatividade).
- **React 19.2.8** / **React DOM 19.2.8**.

## Gerenciador de pacotes

- **npm** (`package-lock.json` presente; `README.md` e `copilot-instructions.md` confirmam npm como padrão do projeto).

## Estilização

- **Tailwind CSS v4** (`tailwindcss: ^4`, `@tailwindcss/postcss: ^4`), configurado via `@config` em `globals.css` + `tailwind.config.ts` (tokens customizados de cor, tipografia, radius, sombra, breakpoints — ver levantamento de design system).
- **PostCSS** apenas como pipeline do plugin do Tailwind (`postcss.config.mjs`), sem plugins adicionais (sem autoprefixer explícito — incluído pelo próprio `@tailwindcss/postcss`).
- **`clsx`** para composição condicional de classes.
- **`prettier-plugin-tailwindcss`** para ordenação automática de classes no Prettier.

## Gerenciamento de estado

- Não há biblioteca de gerenciamento de estado global (Redux, Zustand, Context API estruturado, etc.).
- Estado local pontual via `useState`/`useRef`/`useEffect` do React em componentes client (`LocationMap` para a aba ativa, `useReveal` para animação de entrada, `TestimonialsCarousel` via Embla).

## Roteamento

- **App Router** do Next.js. O site é uma landing page one-page (uma única rota `/`, navegação interna por âncoras `#id`) — não há rotas adicionais, `not-found.tsx` e `error.tsx` cobrem os estados especiais.

## Backend / API

- Não há API Routes, backend próprio ou servidor Node/Express separado.
- Não há chamadas a API externas em runtime além de scripts de terceiros carregados no client (Google Tag Manager/GA4, Meta Pixel) e o iframe do Google Maps.
- Toda a "ação" de contato do site é um link direto `wa.me` (WhatsApp Click-to-Chat), montado em [src/lib/whatsapp.ts](src/lib/whatsapp.ts).

## Banco de dados

- Não há banco de dados. Não aplicável.

## CMS / Fonte de conteúdo

- Conteúdo **hardcoded** em arquivos TypeScript tipados dentro de `src/content/` (`hero.ts`, `about.ts`, `procedures.ts`, `testimonials.ts`, `faq.ts`, `location.ts`, `cta-final.ts`, `footer.ts`, `gallery.ts`, `process.ts`).
- Sem headless CMS, Markdown ou integração com planilha/API externa para conteúdo (inclusive os depoimentos são fixos no código, sem integração com a API do Google Places — decisão registrada nas instruções do projeto).

## Autenticação

- Não há autenticação/login no site. Não aplicável.

## Hospedagem / Deploy

- **Vercel**, via integração Git — deploy de produção a partir de push na branch principal (conforme `README.md`). Não há `vercel.json` no repositório (configuração via dashboard/defaults da Vercel).
- Não há `Dockerfile`, `netlify.toml` ou workflows de CI/CD em `.github/workflows/` (a pasta `.github/` contém apenas instruções, prompts, skills e agentes para assistentes de IA — nenhuma automação de build/deploy/teste).

## Testes

- Não há framework de testes configurado (sem Jest, Vitest, Cypress, Playwright ou Testing Library no `package.json`). Explicitamente fora de escopo no momento, segundo `copilot-instructions.md`.

## Ferramentas de qualidade de código

- **ESLint 9** (flat config, `eslint.config.mjs`), estendendo `eslint-config-next/core-web-vitals` e `eslint-config-next/typescript`.
- **Prettier 3** (`.prettierrc.json`, `.prettierignore`), com plugin de ordenação de classes Tailwind.
- **Husky 9** — hook `pre-commit` configurado em `.husky/pre-commit`.
- **lint-staged 17** — roda `eslint --fix` em `*.{ts,tsx}` e `prettier --write` em `*.{ts,tsx,css,md,json}` no pre-commit.
- TypeScript em modo estrito (ver seção de linguagem).

## Build e bundler

- Build/dev server nativos do **Next.js** (`next dev`, `next build`, `next start`) — não há configuração explícita de Webpack/Turbopack customizada além do padrão do Next 16.

## Bibliotecas de terceiros relevantes

- **`@radix-ui/react-accordion`** — primitivo acessível sem estilo, usado no acordeão de FAQ.
- **`embla-carousel-react`** + **`embla-carousel-autoplay`** — carrossel de depoimentos (`TestimonialsCarousel`).
- **`lucide-react`** — ícones (estrelas, seta, "+", etc.).
- Fontes via **`next/font/google`** — Playfair Display (display) + Manrope (corpo).
- Imagens via **`next/image`** (componente nativo do Next, com `remotePatterns: []` configurado em `next.config.ts`, ou seja, sem imagens remotas permitidas — só assets locais em `public/`).

## Integrações externas

- **Google Analytics 4** — via `gtag.js`, carregado condicionalmente se `NEXT_PUBLIC_GA_ID` estiver definida (`src/components/analytics-scripts.tsx`).
- **Meta Pixel** — via snippet `fbevents.js`, carregado condicionalmente se `NEXT_PUBLIC_META_PIXEL_ID` estiver definida.
- **WhatsApp (Click-to-Chat via `wa.me`)** — canal único de conversão do site, número fixo em `src/lib/site-config.ts`.
- **Google Maps** — embutido via `<iframe>` (sem SDK/API key), um por unidade de atendimento.
- **Google Reviews** — apenas link estático para `google.com/maps` (badge/pill), sem integração via API.
- Rede social referenciada: Instagram (link estático, pendente de confirmação do usuário real, conforme `site-config.ts`).

## Versão de runtime

- **Node.js ≥ 22** — `"engines": { "node": ">=22" }` em `package.json` e `.nvmrc` com `22`.

---

## Variáveis de ambiente (nomes, sem valores)

Definidas em [.env.example](.env.example):

- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_SITE_URL`

---

## Resumo da stack

**Arquitetura geral:**
JAMstack/SSG-SSR híbrido moderno: Next.js App Router com Server Components por padrão, sem backend ou banco de dados próprios — uma landing page estática de conteúdo hardcoded, hospedada na Vercel, com interatividade client-side pontual (carrossel, acordeão, mapa por abas, animações de scroll) isolada em componentes `"use client"`. É, na prática, um site institucional/monolito front-end simples, não uma aplicação com estado de servidor.

**A stack está atualizada?**
Sim — versões recentes/atuais das principais dependências: Next.js 16.3.1, React 19.2.8, Tailwind CSS v4, ESLint 9, TypeScript 5, Node ≥ 22. Não há dependências descontinuadas ou com sinais de abandono aparentes no `package.json`.

**Dependências não utilizadas ou redundantes aparentes:**
Nenhuma redundância aparente — a lista de dependências é enxuta (7 dependencies, 10 devDependencies) e cada uma tem um uso identificável no código (accordion, carrossel, ícones, clsx para classes condicionais, tooling de lint/format/git hooks). Não foram encontradas bibliotecas concorrentes para a mesma finalidade (ex.: não há duas libs de ícones, dois gerenciadores de estado, etc.).

**Nível de complexidade da stack:**
Simples. Poucas dependências, sem banco de dados, sem autenticação, sem API própria, sem gerenciamento de estado global — a complexidade está concentrada em detalhes de front-end (design tokens, animações, acessibilidade) e não na arquitetura de sistema.

**Pontos de atenção para uma futura migração ou reescrita:**

- **Conteúdo hardcoded no código-fonte:** qualquer atualização de texto (inclusive os depoimentos, hoje com placeholder pendente) exige alterar arquivos TypeScript e novo deploy — não há CMS ou fonte de conteúdo editável por não-desenvolvedores.
- **Lock-in leve de hospedagem:** deploy depende da integração Git da Vercel; não há `vercel.json`/`Dockerfile` documentando a configuração, então parte do comportamento de deploy (redirects, env vars de produção) vive apenas no dashboard da Vercel, fora do controle de versão.
- **Ausência de testes automatizados e CI/CD:** não há pipeline de verificação automática (lint/build/test) rodando em PRs — a validação depende de rodar `npm run lint && npm run build` manualmente antes de cada commit/push (reforçado por Husky + lint-staged apenas no pre-commit local).
- **Dependência de IDs de analytics externos:** GA4 e Meta Pixel são carregados condicionalmente via variável de ambiente; se essas contas/IDs mudarem de dono ou expirarem, é necessário atualizar variáveis de ambiente na Vercel (não há fallback nem verificação de validade do ID).
- **CSP com `'unsafe-inline'`:** o `next.config.ts` documenta explicitamente que a Content-Security-Policy usa `'unsafe-inline'` em `script-src` para os snippets de GA4/Meta Pixel, com uma nota de que migrar para CSP baseada em nonce é uma melhoria futura pendente — relevante para quem for endurecer a segurança do build.
