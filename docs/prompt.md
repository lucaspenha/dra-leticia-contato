# Prompt: Recriar o site Dra. Letícia Contato

> Prompt de referência único, combinando o levantamento da **stack tecnológica**, da **identidade visual/design system** e do **conteúdo** do site atual da Dra. Letícia Contato. Use este documento como especificação completa para reconstruir, migrar ou replicar o site — a ordem abaixo (stack → design system → conteúdo) segue o caminho natural de construção: primeiro a fundação técnica, depois o sistema visual, depois o conteúdo que preenche tudo.

---

## 1. Stack tecnológica

> O que existe hoje no repositório (`package.json`, arquivos de configuração, estrutura de pastas e integrações no código).

### Linguagem principal

- **TypeScript** (estrito) — todo o código de aplicação (`src/**/*.ts`, `*.tsx`).
- `tsconfig.json`: `"strict": true`, `"noUncheckedIndexedAccess": true`, target `ES2017`, module resolution `bundler`.
- Alias de import configurado: `@/*` → `./src/*`.

### Framework / biblioteca principal

- **Next.js 16.3.1** — App Router (`src/app/`), Server Components por padrão (`"use client"` só em componentes com estado/interatividade).
- **React 19.2.8** / **React DOM 19.2.8**.

### Gerenciador de pacotes

- **npm** (`package-lock.json` presente).

### Estilização

- **Tailwind CSS v4** (`tailwindcss: ^4`, `@tailwindcss/postcss: ^4`), configurado via `@config` em `globals.css` + `tailwind.config.ts` (tokens customizados de cor, tipografia, radius, sombra, breakpoints — ver seção 2).
- **PostCSS** apenas como pipeline do plugin do Tailwind, sem plugins adicionais.
- **`clsx`** para composição condicional de classes.
- **`prettier-plugin-tailwindcss`** para ordenação automática de classes no Prettier.

### Gerenciamento de estado

- Não há biblioteca de gerenciamento de estado global (Redux, Zustand, Context API estruturado, etc.).
- Estado local pontual via `useState`/`useRef`/`useEffect` do React em componentes client (aba ativa do seletor de unidade, animação de entrada por scroll, carrossel de depoimentos).

### Roteamento

- **App Router** do Next.js. O site é uma landing page one-page (uma única rota `/`, navegação interna por âncoras `#id`) — não há rotas adicionais, além de páginas de estado especial (404 e erro).

### Backend / API

- Não há API Routes, backend próprio ou servidor Node/Express separado.
- Não há chamadas a API externas em runtime além de scripts de terceiros carregados no client (Google Tag Manager/GA4, Meta Pixel) e o iframe do Google Maps.
- Toda a "ação" de contato do site é um link direto `wa.me` (WhatsApp Click-to-Chat).

### Banco de dados

- Não há banco de dados. Não aplicável.

### CMS / Fonte de conteúdo

- Conteúdo **hardcoded** em arquivos TypeScript tipados dentro de `src/content/` (um arquivo por seção: hero, sobre, processo, procedimentos, galeria, depoimentos, FAQ, localização, CTA final, rodapé).
- Sem headless CMS, Markdown ou integração com planilha/API externa para conteúdo (inclusive os depoimentos são fixos no código, sem integração com a API do Google Places).

### Autenticação

- Não há autenticação/login no site. Não aplicável.

### Hospedagem / Deploy

- **Vercel**, via integração Git — deploy de produção a partir de push na branch principal. Não há `vercel.json` no repositório (configuração via dashboard/defaults da Vercel).
- Não há `Dockerfile`, `netlify.toml` ou workflows de CI/CD.

### Testes

- Não há framework de testes configurado (sem Jest, Vitest, Cypress, Playwright ou Testing Library).

### Ferramentas de qualidade de código

- **ESLint 9** (flat config), estendendo `eslint-config-next/core-web-vitals` e `eslint-config-next/typescript`.
- **Prettier 3**, com plugin de ordenação de classes Tailwind.
- **Husky 9** — hook `pre-commit`.
- **lint-staged 17** — roda `eslint --fix` em `*.{ts,tsx}` e `prettier --write` em `*.{ts,tsx,css,md,json}` no pre-commit.
- TypeScript em modo estrito.

### Build e bundler

- Build/dev server nativos do **Next.js** (`next dev`, `next build`, `next start`) — sem configuração explícita de Webpack/Turbopack customizada além do padrão do Next 16.

### Bibliotecas de terceiros relevantes

- **`@radix-ui/react-accordion`** — primitivo acessível sem estilo, usado no acordeão de FAQ.
- **`embla-carousel-react`** + **`embla-carousel-autoplay`** — carrossel de depoimentos.
- **`lucide-react`** — ícones (estrelas, seta, "+", etc.).
- Fontes via **`next/font/google`** — Playfair Display (display) + Manrope (corpo).
- Imagens via **`next/image`** (sem imagens remotas permitidas — só assets locais em `public/`).

### Integrações externas

- **Google Analytics 4** — via `gtag.js`, carregado condicionalmente se `NEXT_PUBLIC_GA_ID` estiver definida.
- **Meta Pixel** — via snippet `fbevents.js`, carregado condicionalmente se `NEXT_PUBLIC_META_PIXEL_ID` estiver definida.
- **WhatsApp (Click-to-Chat via `wa.me`)** — canal único de conversão do site, número fixo em config central.
- **Google Maps** — embutido via `<iframe>` (sem SDK/API key), um por unidade de atendimento.
- **Google Reviews** — apenas link estático para `google.com/maps` (badge/pill), sem integração via API.
- Rede social referenciada: Instagram (link estático).

### Versão de runtime

- **Node.js ≥ 22**.

### Variáveis de ambiente (nomes, sem valores)

- `NEXT_PUBLIC_GA_ID`
- `NEXT_PUBLIC_META_PIXEL_ID`
- `NEXT_PUBLIC_SITE_URL`

### Resumo da stack

**Arquitetura geral:** JAMstack/SSG-SSR híbrido moderno: Next.js App Router com Server Components por padrão, sem backend ou banco de dados próprios — uma landing page estática de conteúdo hardcoded, hospedada na Vercel, com interatividade client-side pontual (carrossel, acordeão, mapa por abas, animações de scroll) isolada em componentes `"use client"`.

**Atualização:** versões recentes das principais dependências (Next.js 16, React 19, Tailwind v4, ESLint 9, TypeScript 5, Node ≥ 22), sem sinais de dependências descontinuadas.

**Redundâncias:** nenhuma aparente — lista de dependências enxuta, cada uma com uso identificável.

**Complexidade:** simples — sem banco de dados, autenticação, API própria ou gerenciamento de estado global.

**Pontos de atenção para migração/reescrita:**

- Conteúdo hardcoded no código-fonte (sem CMS) — qualquer atualização exige alterar TypeScript e novo deploy.
- Lock-in leve de hospedagem: deploy depende da integração Git da Vercel, sem `vercel.json`/`Dockerfile` versionado.
- Ausência de testes automatizados e CI/CD — validação depende de rodar `npm run lint && npm run build` manualmente.
- Dependência de IDs de analytics externos (GA4, Meta Pixel) via variável de ambiente, sem fallback.
- CSP com `'unsafe-inline'` em `script-src` (necessário para os snippets de GA4/Meta Pixel) — migrar para CSP baseada em nonce é uma melhoria futura pendente.

---

## 2. Identidade visual / Design system

> O que existe hoje no código (Tailwind config, CSS global, componentes de UI e documentação de design).

### Cores

Todas as cores são registradas como tokens Tailwind em `theme.extend.colors` — não há CSS custom properties de cor além de `--background`/`--foreground` (usadas só para o `body` base).

#### Primária — Forest (verde-floresta)

| Token         | Valor                    | Uso                                                                       |
| ------------- | ------------------------ | ------------------------------------------------------------------------- |
| `forest.900`  | `#04241A`                | fundo escuro mais profundo (hero, gradiente)                              |
| `forest.800`  | `#06301F`                | fundo escuro intermediário (gradiente do hero)                            |
| `forest.700`  | `#03422F`                | cor de marca principal — fundos escuros de seção, títulos, botão "forest" |
| `forest.600`  | `#054D37`                | variação de fundo escuro (gradiente do hero)                              |
| `forest.line` | `rgba(211,171,132,0.22)` | divisor sutil sobre fundo escuro (usado no FAQ)                           |

#### Acento — Gold (dourado)

| Token      | Valor     | Uso                                                                               |
| ---------- | --------- | --------------------------------------------------------------------------------- |
| `gold.200` | `#F2E3D2` | ponta clara do `gold-grad`                                                        |
| `gold.300` | `#E7CBAE` | itálico de destaque em títulos sobre fundo escuro; labels do rodapé               |
| `gold.500` | `#D3AB84` | itálico de destaque em títulos sobre fundo claro; anel de foco (`:focus-visible`) |
| `gold.600` | `#BE9066` | numerais serifados, ícone "+" do FAQ, link "Saiba mais" (hover)                   |
| `gold.700` | `#A97A50` | ponta escura do `gold-grad`                                                       |

#### Secundária — Green (verde de marca, distinto do verde do WhatsApp)

| Token       | Valor     | Uso                                                      |
| ----------- | --------- | -------------------------------------------------------- |
| `green.300` | `#8FDCC0` | ponta clara do `green-grad`                              |
| `green.400` | `#4FC79A` | ponta final do `green-grad`                              |
| `green.500` | `#02A56D` | cor de marca secundária, meio do `green-grad`            |
| `green.600` | `#028C5C` | ponta escura do `green-grad`; hover do link "Saiba mais" |

#### Neutra — Cream (fundos) e Ink (texto)

| Token       | Valor     | Uso                                     |
| ----------- | --------- | --------------------------------------- |
| `cream.50`  | `#FBF8F3` | fundo padrão da página (`--background`) |
| `cream.100` | `#F4EDE2` | fundo alternado de seção                |
| `cream.200` | `#E9DFCF` | bordas/divisores sobre fundo claro      |
| `ink.900`   | `#191D1A` | texto principal (`--foreground`)        |
| `ink.700`   | `#3A423C` | texto de maior ênfase sobre cream       |
| `ink.500`   | `#6B756E` | texto secundário (leads, descrições)    |

#### Cor de estado / função única — WhatsApp

| Token        | Valor     | Uso                                                                |
| ------------ | --------- | ------------------------------------------------------------------ |
| `wa.green`   | `#25D366` | botão de contato via WhatsApp (variante "green" e botão flutuante) |
| `wa.green-d` | `#1ebe5a` | hover do botão WhatsApp                                            |

> Não há tokens de sucesso/erro/alerta/informação — o site não tem formulários ou fluxos com feedback de validação.

#### Gradientes

- `green-grad`: `linear-gradient(135deg,#03422F 0%,#02A56D 55%,#4FC79A 100%)` — botão "forest" e card de procedimento em destaque.
- `gold-grad`: `linear-gradient(135deg,#A97A50 0%,#D3AB84 55%,#F2E3D2 100%)` — botão "gold" (CTA de maior prioridade).

### Tipografia

- **Display/serifada:** variável CSS `--font-display`, carregada via `next/font/google` → **Playfair Display** (fallback `Georgia, serif`).
- **Corpo:** variável `--font-body` → **Manrope** (fallback `system-ui, -apple-system, sans-serif`).

#### Escala de tamanhos (por uso, extraída dos componentes)

| Nível                                                                              | Fonte            | Tamanho                              | Peso           | Line-height | Letter-spacing |
| ---------------------------------------------------------------------------------- | ---------------- | ------------------------------------ | -------------- | ----------- | -------------- |
| Display (hero `<h1>`)                                                              | Playfair Display | `clamp(2.5rem, 6vw, 4rem)`           | 600 (semibold) | 1.08        | `-0.01em`      |
| Headline (título de seção)                                                         | Playfair Display | `clamp(2rem, 5.4vw, 3.1rem)`         | 600            | 1.1         | `-0.01em`      |
| Title (títulos de componente: etapa de processo, item de menu, nome no depoimento) | Playfair Display | `text-xl` a `text-2xl` (1.25–1.5rem) | 600            | 1.2         | —              |
| Body (parágrafos, leads)                                                           | Manrope          | `text-lg`/`text-base`                | 400            | 1.6         | —              |
| Label (rodapé, uppercase)                                                          | Manrope          | `text-xs`                            | 600            | —           | `0.2em`        |

- Ênfase recorrente: todo título de seção fecha com um trecho em `<em>` itálico na cor gold (`gold-600` em fundo claro, `gold-300` em fundo escuro).
- Numerais serifados itálicos em gold (`01`, `02`…) usados nas etapas do processo e nos itens do menu de tratamentos, para conteúdo genuinamente sequencial.

### Espaçamento e Grid

- **Container central:** 1180px, padding horizontal fluido `clamp(20px, 5vw, 48px)`.
- **Padding vertical de seção:** fluido, `clamp(56px, 8.5vw, 108px)` (mais compacto em `md+`: `clamp(64px, 6.5vw, 88px)`).
- Não há uma escala de espaçamento numérica customizada (tipo `4px/8px/16px`) declarada em tokens — os componentes usam a escala padrão do Tailwind combinada com valores fluidos (`clamp`) pontuais.

#### Breakpoints (customizados — não usar os defaults do Tailwind)

```ts
screens: { sm: "600px", md: "900px", lg: "1024px", xl: "1280px" }
```

#### Grids por seção (não há grid genérico reutilizável — cada seção define o próprio layout)

- Hero: split `1.05fr` (texto) / `1fr` (foto) em `md+`, empilhado no mobile.
- Resultados/galeria: grid de `sm:2` / `md:3` colunas, com itens de tamanho variável (não uniforme).
- Sobre: split de duas colunas (texto/retrato), ordem invertida no mobile.
- Procedimentos: card em destaque de largura total + lista de uma coluna (formato "menu editorial", não grid de cards).

### Bordas e Sombras

#### Border-radius

| Token              | Valor | Uso                                                                  |
| ------------------ | ----- | -------------------------------------------------------------------- |
| `rounded-brand`    | 22px  | containers de foto (galeria, retrato da seção "Sobre")               |
| `rounded-brand-sm` | 14px  | badges/legendas "glass" sobre fotos                                  |
| `rounded-full`     | pill  | todos os botões, badges, pill do Google Reviews, abas de localização |
| `rounded-none`     | 0px   | cartão de depoimento (propositalmente sem arredondamento)            |

#### Box-shadow

| Token         | Valor                                      | Uso                                          |
| ------------- | ------------------------------------------ | -------------------------------------------- |
| `shadow-soft` | `0 20px 55px -22px rgba(4,36,26,0.5)`      | containers de foto e botão variante "forest" |
| `shadow-gold` | `0 14px 40px -14px rgba(190,144,102,0.55)` | botão variante "gold"                        |

- Cartões de texto puro (ex.: depoimento) não recebem sombra — usam uma borda superior de 2px em gold (`border-t-gold-500/60`) como alternativa visual.

### Componentes visuais padronizados

#### Botões

Formato: pill (`rounded-full`), 4 variantes:

- **`gold`** (primário): fundo `gold-grad`, texto `forest-900`, `shadow-gold`.
- **`forest`** (secundário, padrão): fundo `green-grad`, texto `cream-50`, `shadow-soft`.
- **`green`** (terciário/WhatsApp): fundo sólido `wa-green`, texto branco, hover `wa-green-d`.
- **`ghost`**: transparente, borda `forest-700/25`, texto `forest-700`.
- Tamanhos: `sm`, `lg` (padrão), `xl`.
- Interação: eleva no hover (`-translate-y-0.5`), comprime no clique (`active:scale-[0.97]`), easing customizado `ease-brand`; `motion-reduce` desativa a transformação.
- Não há estado visual de `disabled` definido (o botão é sempre um link, não um `<button>` desabilitável).

#### Inputs / formulários

- **Não há inputs ou formulários no site** (nenhum campo de texto, select, checkbox). Todo contato é feito via link direto para WhatsApp — logo não existem estados de foco/erro de formulário a documentar, além do anel de foco genérico (`:focus-visible`, outline gold `#D3AB84`, 2px, offset 2px).

#### Cards

- **Card de galeria**: foto (ou par de fotos lado a lado) com legenda "glass" (fundo `forest-900/55` + `backdrop-blur-md`) sobreposta no rodapé; `rounded-brand` + `shadow-soft`.
- **Foto/badge da seção "Sobre"**: mesmo padrão de foto + badge glass.
- **Card de depoimento**: aspas grandes decorativas, texto em itálico, borda superior gold, sem sombra, cantos retos.
- Card de procedimento em destaque (dentro da seção Procedimentos): preenchimento `green-grad` de largura total, `rounded-brand`, `shadow-soft`.

#### Listagem editorial ("menu de tratamentos")

- **Item de menu**: linha de tabela (índice em numeral itálico gold · título serifado · descrição · link "Saiba mais" com ícone de seta), separada por borda inferior `cream-200` — usada na seção de Procedimentos.
- **Etapa de processo**: mesmo padrão de numeral, usado nas 4 etapas de "Como funciona".

#### Badges / pills

- **Selo de avaliações do Google**: pill com borda `cream-200`, fundo `cream-50`, sombra `shadow-soft`, ícone "G" (azul `#4285F4`) + 5 estrelas (cor `gold-500`).
- Abas de unidade em "Localização": pill ativo com fundo `forest-700`/texto `cream-50`; inativo com borda `cream-200` e fundo `cream-50`.

#### FAQ

- **Acordeão acessível** (Radix UI Accordion): divisores `forest-line`, ícone "+" que gira 45° (vira "×") ao abrir, com animação de altura customizada (0.3s, easing `ease-brand`).

#### Ícones

- Biblioteca principal: **`lucide-react`** (estilo outline/stroke) — usada para estrela, seta, "+".
- Ícones de marca customizados (SVG inline próprios, não da lib): WhatsApp (estilo filled/glifo oficial) e Instagram.

### Logotipo e imagens de marca

- **Logo principal:** usado no cabeçalho do hero (dimensões de referência 834×343px).
- **Ícone/app icon:** 256×256 e 180×180 — convenção de metadata do Next.js App Router (gera `/icon.png` e `/apple-icon.png` automaticamente).
- **Ícone PWA:** 512×512, referenciado no manifest.
- **Imagem de Open Graph** dedicada.
- **Foto institucional recorrente:** usada tanto no hero quanto na seção "Sobre".
- **Imagens de resultado (antes/depois):** 7 arquivos, usadas exclusivamente na seção "Resultados".
- **Cores do manifest (PWA):** `background_color: #FBF8F3` (cream-50), `theme_color: #03422F` (forest-700) — mesmo valor do `viewport.themeColor`.

### Animações e transições

| Token/uso                                                                       | Duração                             | Easing                           |
| ------------------------------------------------------------------------------- | ----------------------------------- | -------------------------------- |
| `ease-brand` (transição padrão de hover/transform em botões, reveal, accordion) | variável por componente (0.3s–0.7s) | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Reveal (fade + slide-up ao entrar na viewport)                                  | 700ms                               | `ease-brand`                     |
| Pulso do botão flutuante do WhatsApp                                            | 2.4s, infinito                      | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Abrir/fechar do FAQ (Radix)                                                     | 0.3s                                | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Hover de botão (`-translate-y-0.5`, `active:scale-[0.97]`)                      | 300ms                               | `ease-brand`                     |

- Todas as animações respeitam `prefers-reduced-motion: reduce` — há uma regra global que zera durações/transições, e o hook de reveal retorna "visível" imediatamente quando a preferência está ativa.

### Resumo de identidade visual

**Estilo visual predominante:** Editorial/boutique — um "lookbook de atelier". Combina uma paleta natural e sóbria (verde-floresta, dourado, cream) com tipografia serifada de destaque (Playfair Display) e composições assimétricas de foto, em vez do padrão genérico de clínica (hero centralizado + grid de ícones).

**Consistência dos tokens:** Alta. Praticamente todas as cores, radius, sombras e espaçamentos usados nos componentes remetem a tokens nomeados (`forest`, `gold`, `green`, `cream`, `ink`, `wa`, `brand`, `soft`/`gold`, `ease-brand`). Desvio notado: uso de classes utilitárias arbitrárias do Tailwind (`clamp(...)`, `aspect-[16/10]` etc.) para valores fluidos/pontuais que não viraram tokens formais.

**Framework/lib de design system:** Tailwind CSS (v4) com tokens customizados. Não há biblioteca de componentes de terceiros como Material UI ou Chakra — os únicos pacotes de UI externos são Radix UI (accordion sem estilo) e lucide-react (ícones). Não há Storybook ou catálogo de componentes isolado.

**Nível de maturidade do design system:** Parcial a bem estruturado para o escopo do projeto (landing page one-page): existem tokens nomeados, uma paleta e tipografia documentadas formalmente, e componentes de UI reutilizáveis (botão, título de seção, card de galeria, etapa de processo, item de menu, card de depoimento, acordeão de FAQ). Não há, porém, uma escala de espaçamento numérica dedicada, nem estados de erro/formulário (não aplicável ao site), nem um catálogo/Storybook separado do código de produção.

---

## 3. Conteúdo do site

> Site institucional de página única (one-page), navegado por âncoras. Não há páginas separadas — apenas seções na Home.

### Home (página única)

#### 1. Cabeçalho / Logo

- Logo: **"Dra. Letícia Contato — Odontologia & Harmonização Facial"** (link para o topo da página).

#### 2. Hero (`#inicio`)

- **Eyebrow:** Harmonização Facial & Odontologia Estética
- **Título:** Sua beleza natural, _elevada com sutileza._
- **Texto principal:** "Botox, preenchimentos, bioestimuladores de colágeno e skinbooster pensados para a sua individualidade. Aqui você entende tudo o que será feito, com calma — e um cafézinho esperando por você."
- **Botões/CTAs:**
  - "Agendar avaliação" (abre WhatsApp)
  - "Ver procedimentos" (âncora para seção de procedimentos)
- **Imagem de conteúdo:** foto da Dra. Letícia Contato.

#### 3. Sobre / Quem é a dentista (`#sobre`)

- **Eyebrow:** Quem cuida da sua harmonização
- **Título:** Sutileza para revelar _a melhor versão de você._
- **Texto principal:**
  - "A Dra. Letícia Contato é especialista em harmonizar faces de acordo com a individualidade, as vontades e a personalidade de cada paciente."
  - "Trabalha com Botox, preenchimentos, bioestimuladores de colágeno, fios, skinbooster e PDRN, sempre combinando técnicas de forma personalizada para resultados naturais."
- **Citação em destaque:** "Você não precisa de harmonização facial — você MERECE."
- **Lista de diferenciais:**
  - Especialista em Harmonização Facial
  - Atendimento individualizado, sem pressa
  - Explicação clara de cada etapa do tratamento
- **CTA:** "Agendar minha avaliação"
- **Imagem de conteúdo:** foto da Dra. Letícia Contato no consultório, com selo/legenda "Dra. Letícia Contato — Odontologia & Harmonização Facial".

#### 4. Como funciona (`#como-funciona`)

- **Eyebrow:** Como funciona
- **Título:** Um caminho pensado _para você se sentir segura._
- **Texto de apoio:** "Um bom papo, um plano claro e nenhuma pressa — para você entender tudo o que será feito."
- **Lista de etapas:**
  1. **Conversa & escuta ativa** — Entendemos suas vontades, expectativas e o que te incomoda — sem pressa, no seu tempo.
  2. **Avaliação facial detalhada** — Uma análise técnica do seu rosto, identificando o que realmente vai valorizar sua beleza natural.
  3. **Plano sob medida** — Um plano de tratamento individualizado, explicado com clareza antes de qualquer procedimento.
  4. **Acompanhamento contínuo** — Retornos e ajustes ao longo do processo, garantindo que o resultado continue natural e seguro.
- **CTA:** "Quero avaliar o meu caso"

#### 5. Procedimentos (`#procedimentos`)

- **Eyebrow:** Procedimentos
- **Título:** Cada rosto é único — _o seu tratamento também é._
- **Texto de apoio:** "Uma combinação de técnicas pensada para valorizar a sua individualidade, com resultados sutis e naturais."
- **Lista de procedimentos (serviços):**
  1. **Harmonização Facial Personalizada** (destaque) — "Um plano de tratamento único, combinando as técnicas certas para valorizar suas características — sem exageros."
  2. **Toxina Botulínica (Botox)** — "Suaviza rugas de expressão e previne novas marcas, mantendo a naturalidade dos movimentos do rosto."
  3. **Preenchimento com Ácido Hialurônico** — "Devolve volume e contorno em lábios, olheiras e outras regiões, com resultado natural e reversível."
  4. **Bioestimuladores de Colágeno** — "Estimulam a produção natural de colágeno, melhorando firmeza e qualidade da pele ao longo do tempo."
  5. **Lipo de Papada Enzimática** — "Reduz a gordura localizada na papada de forma não cirúrgica, definindo melhor o contorno mandibular."
  6. **Skinbooster** — "Hidratação profunda da pele, melhorando viço, textura e luminosidade de dentro para fora."

#### 6. Resultados / Antes & Depois (`#resultados`)

- **Eyebrow:** Antes & Depois
- **Título:** Resultados que respeitam _quem você é._
- **Texto de apoio:** "Uma amostra de procedimentos realizados no consultório — sempre com sutileza e naturalidade."
- **Rodapé/observação:** "Resultados variam de pessoa para pessoa e são avaliados individualmente em consulta."
- **Imagens de conteúdo (todas rotuladas "Antes & depois"):**
  1. Preenchimento Labial — resultado de preenchimento labial.
  2. Harmonização de Perfil — resultado de harmonização de perfil.
  3. Lipo de Papada Enzimática — foto de antes e foto de depois do procedimento.
  4. Harmonização Nariz & Lábios — resultado de harmonização de nariz e lábios.
  5. Contorno Mandibular — resultado de contorno mandibular.
  6. Botox — Rugas de Expressão — resultado de botox em rugas de expressão.

#### 7. Depoimentos (`#depoimentos`)

- **Eyebrow:** Avaliações no Google
- **Título:** Histórias de quem _já viveu essa transformação._
- **Selo de destaque:** "Avaliações 5 estrelas no Google" (com 5 estrelas e logo do Google).
- **Depoimentos/testemunhos** (nome, quantidade de avaliações e tempo, extraídos do Google — 7 no total):
  1. Letícia Maria — 12 avaliações — há 2 meses
  2. Smart Canal — 8 avaliações — há 3 meses
  3. Carol Gladstone — 5 avaliações — há 4 meses
  4. Lais Bartalini — 9 avaliações — há 5 meses
  5. Aline Silva — 3 avaliações — há 6 meses
  6. Alessandra Diniz — 15 avaliações — há 7 meses
  7. João Vitor Martins — 4 avaliações — há 8 meses

  > ⚠️ **Nota do próprio código-fonte:** o texto de cada avaliação é um placeholder ("[Pendente: colar aqui o texto real desta avaliação do Google antes de publicar.]") e ainda não foi preenchido com o conteúdo real das avaliações. Não há textos de depoimento publicados no momento.

#### 8. FAQ (`#faq`)

- **Eyebrow:** Antes de decidir
- **Título:** As dúvidas que _todo mundo tem._
- **Perguntas frequentes:**
  1. **Existe idade certa para começar a harmonização facial?**
     Não existe uma idade fixa — cada avaliação é individual. O que importa é entender o que te incomoda e se o procedimento faz sentido para o seu momento e objetivo.
  2. **O resultado fica natural ou muda muito o meu rosto?**
     O objetivo é sempre valorizar suas características, nunca mudar quem você é. Os procedimentos são pensados para resultados sutis e naturais.
  3. **Qual a diferença entre Botox, preenchimento e bioestimulador?**
     O Botox suaviza rugas de expressão relaxando a musculatura. O preenchimento devolve volume com ácido hialurônico. Já o bioestimulador estimula a produção natural de colágeno ao longo do tempo. Na consulta, avaliamos juntas qual combinação faz sentido para você.
  4. **Quero entender o valor antes de decidir.**
     Os valores variam de acordo com o plano de tratamento individualizado. Fale com a Dra. Letícia pelo WhatsApp para receber informações claras sobre o seu caso, sem compromisso.
- **Texto de apoio final:** "Ficou com outra dúvida? Fale direto com a Dra. Letícia."
- **CTA:** "Tirar minha dúvida no WhatsApp"

#### 9. Localização (`#localizacao`)

- **Título:** Onde você encontra _a Dra. Letícia._
- **Seletor de unidades (abas) + endereços:**
  1. **Araxá – MG** — Av. Antônio Carlos, 286 — Centro, Araxá – MG · 38183-083 · (16) 99793-9679
  2. **Perdizes – MG** — Rua Antônio Tomé de Resende, 276
  3. **Ribeirão Preto – SP** — Av. Antônio Diederichsen — Metropolitan Business Center
- **Mapa incorporado** por unidade (Google Maps).
- **CTA:** "Agendar minha visita"

#### 10. CTA final / Contato (`#contato`)

- **Eyebrow:** Dê o primeiro passo
- **Título:** Você não precisa — _você merece._
- **Texto:** "Fale agora com a Dra. Letícia pelo WhatsApp e receba um plano claro para o seu caso. Sem compromisso."
- **Botão:** "Chamar no WhatsApp"
- **Microtexto abaixo do botão:** "Resposta rápida em horário comercial"

#### 11. Rodapé (Footer)

- **Nome/marca:** Dra. Letícia Contato
- **Assinatura/tagline:** Odontologia & Harmonização Facial
- **Frase institucional:** "Sua beleza natural, elevada com sutileza."
- **Links de navegação:** Procedimentos · Resultados · Como funciona · A dentista · Depoimentos · Localização · Dúvidas
- **CTA:** "Falar no WhatsApp"

#### 12. Botão flutuante de WhatsApp (presente em toda a página)

- Ícone com rótulo acessível "Falar no WhatsApp" (sem texto visível, apenas ícone).
- Mensagem padrão enviada ao abrir o WhatsApp: "Olá! Vim pelo site da Dra. Letícia Contato e gostaria de mais informações."

### Páginas de sistema (estados especiais)

#### Página 404 (não encontrada)

- **Rótulo:** 404
- **Título:** Página não encontrada.
- **Texto:** "O endereço que você tentou acessar não existe ou foi movido. Volte para a página inicial."
- **Botão:** "Voltar para o início"

#### Página de erro

- **Título:** Algo deu errado.
- **Texto:** "Não foi possível carregar esta página. Tente novamente em instantes."
- **Botão:** "Tentar novamente"

#### Tela de carregamento

- Indicador visual de carregamento com rótulo acessível "Carregando" (sem texto visível na tela).

### Textos de metadados visíveis (aba do navegador / resultados de busca)

- **Título da página (aba/SEO):** "Dra. Letícia Contato — Odontologia e Harmonização Facial | Araxá, Perdizes e Ribeirão Preto"
- **Descrição (resultados de busca/compartilhamento):** "Botox, preenchimentos, bioestimuladores de colágeno, skinbooster e lipo de papada enzimática com a Dra. Letícia Contato, em Araxá – MG, Perdizes – MG e Ribeirão Preto – SP. Harmonização facial individualizada, com atendimento humanizado. Agende sua avaliação pelo WhatsApp."

### Análise do foco do conteúdo

**Objetivo principal do site:** Gerar leads/agendamentos para uma clínica de odontologia e harmonização facial, direcionando o visitante para uma conversa no WhatsApp (não há e-commerce, carrinho ou formulário de contato — o único "conversor" do site é o WhatsApp).

**Público-alvo:** Mulheres adultas interessadas em procedimentos estéticos faciais não cirúrgicos (Botox, preenchimento, bioestimuladores, skinbooster), que valorizam um atendimento acolhedor, sem julgamento e sem pressa — o tom sugere um público que busca segurança emocional tanto quanto resultado estético, possivelmente pacientes de primeira vez ou receosas com exageros ("resultado natural").

**Mensagem/proposta de valor central:** Harmonização facial individualizada e sutil ("Sua beleza natural, elevada com sutileza") com acolhimento e clareza no processo — repetida nas frases "você não precisa, você merece", "resultado natural, nunca exagerado" e "sem pressa".

**Principais temas/tópicos abordados:**

- Naturalidade / resultado sutil (tema mais recorrente, aparece em quase toda seção)
- Individualização do tratamento ("cada rosto é único", "plano sob medida")
- Acolhimento e ausência de pressão/julgamento ("sem pressa", "escuta ativa")
- Autoridade/confiança (prova social via avaliações do Google, explicação técnica no FAQ)
- Transparência sobre valores e processo (seção "Como funciona" e FAQ sobre preço)
- Conveniência (WhatsApp como canal único de contato, três unidades de atendimento)

**Tom de voz predominante:** Comercial-institucional com toque pessoal e caloroso — frases curtas, em segunda pessoa ("você"), evitando jargão técnico excessivo; mistura autoridade clínica com acolhimento informal (ex.: "um cafézinho esperando por você").

**CTAs que se destacam:** Todos direcionam para o WhatsApp (não há formulário de contato no site): "Agendar avaliação", "Agendar minha avaliação", "Quero avaliar o meu caso", "Tirar minha dúvida no WhatsApp", "Agendar minha visita", "Chamar no WhatsApp", "Falar no WhatsApp" — variações do mesmo objetivo de conversão, adaptadas ao contexto de cada seção.

**Lacunas ou inconsistências percebidas:**

- Os 7 depoimentos exibidos têm apenas nome, quantidade de avaliações e tempo — o texto real de cada avaliação do Google ainda **não foi preenchido** (placeholder pendente no código), ou seja, a seção de prova social está incompleta/sem conteúdo real publicável.
- O link do selo "Avaliações 5 estrelas no Google" e o link de Instagram no rodapé/redes sociais ainda não têm destino definitivo confirmado (pendências marcadas no código-fonte).
- As unidades de Perdizes e Ribeirão Preto têm endereço incompleto (sem número/CEP/telefone), diferente da unidade de Araxá, que está completa — isso pode passar uma sensação de menor maturidade dessas unidades.
- A seção de procedimentos lista 6 itens, embora um comentário interno do código mencione "7 cards", sugerindo que um procedimento pode estar planejado mas ainda não publicado.
