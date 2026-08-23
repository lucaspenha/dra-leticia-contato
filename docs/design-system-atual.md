# Identidade visual / Design system atual — Dra. Letícia Contato

> Levantamento do que **existe hoje** no código (Tailwind config, `globals.css`, componentes de UI e `DESIGN.md`). Sem juízo de qualidade ou sugestões de mudança.

Fontes analisadas: [tailwind.config.ts](tailwind.config.ts), [src/app/globals.css](src/app/globals.css), [DESIGN.md](DESIGN.md), [.github/instructions/design-system.instructions.md](.github/instructions/design-system.instructions.md), componentes em `src/components/ui/` e `src/components/icons/`, `src/hooks/use-reveal.ts`, `src/app/manifest.ts`, e assets em `public/images/` e `src/app/`.

---

## Cores

Todas as cores são registradas como tokens Tailwind em `theme.extend.colors` ([tailwind.config.ts](tailwind.config.ts)) — não há CSS custom properties de cor além de `--background`/`--foreground` (usadas só para o `body` base).

### Primária — Forest (verde-floresta)

| Token         | Valor                    | Uso                                                                       |
| ------------- | ------------------------ | ------------------------------------------------------------------------- |
| `forest.900`  | `#04241A`                | fundo escuro mais profundo (hero, gradiente)                              |
| `forest.800`  | `#06301F`                | fundo escuro intermediário (gradiente do hero)                            |
| `forest.700`  | `#03422F`                | cor de marca principal — fundos escuros de seção, títulos, botão "forest" |
| `forest.600`  | `#054D37`                | variação de fundo escuro (gradiente do hero)                              |
| `forest.line` | `rgba(211,171,132,0.22)` | divisor sutil sobre fundo escuro (usado no FAQ)                           |

### Acento — Gold (dourado)

| Token      | Valor     | Uso                                                                               |
| ---------- | --------- | --------------------------------------------------------------------------------- |
| `gold.200` | `#F2E3D2` | ponta clara do `gold-grad`                                                        |
| `gold.300` | `#E7CBAE` | itálico de destaque em títulos sobre fundo escuro; labels do rodapé               |
| `gold.500` | `#D3AB84` | itálico de destaque em títulos sobre fundo claro; anel de foco (`:focus-visible`) |
| `gold.600` | `#BE9066` | numerais serifados, ícone "+" do FAQ, link "Saiba mais" (hover)                   |
| `gold.700` | `#A97A50` | ponta escura do `gold-grad`                                                       |

### Secundária — Green (verde de marca, distinto do verde do WhatsApp)

| Token       | Valor     | Uso                                                      |
| ----------- | --------- | -------------------------------------------------------- |
| `green.300` | `#8FDCC0` | ponta clara do `green-grad`                              |
| `green.400` | `#4FC79A` | ponta final do `green-grad`                              |
| `green.500` | `#02A56D` | cor de marca secundária, meio do `green-grad`            |
| `green.600` | `#028C5C` | ponta escura do `green-grad`; hover do link "Saiba mais" |

### Neutra — Cream (fundos) e Ink (texto)

| Token       | Valor     | Uso                                     |
| ----------- | --------- | --------------------------------------- |
| `cream.50`  | `#FBF8F3` | fundo padrão da página (`--background`) |
| `cream.100` | `#F4EDE2` | fundo alternado de seção                |
| `cream.200` | `#E9DFCF` | bordas/divisores sobre fundo claro      |
| `ink.900`   | `#191D1A` | texto principal (`--foreground`)        |
| `ink.700`   | `#3A423C` | texto de maior ênfase sobre cream       |
| `ink.500`   | `#6B756E` | texto secundário (leads, descrições)    |

### Cor de estado / função única — WhatsApp

| Token        | Valor     | Uso                                                                |
| ------------ | --------- | ------------------------------------------------------------------ |
| `wa.green`   | `#25D366` | botão de contato via WhatsApp (variante "green" e botão flutuante) |
| `wa.green-d` | `#1ebe5a` | hover do botão WhatsApp                                            |

> Não há tokens de sucesso/erro/alerta/informação — o site não tem formulários ou fluxos com feedback de validação, então esses estados não existem no sistema atual.

### Gradientes

- `green-grad`: `linear-gradient(135deg,#03422F 0%,#02A56D 55%,#4FC79A 100%)` — botão "forest" e card de procedimento em destaque.
- `gold-grad`: `linear-gradient(135deg,#A97A50 0%,#D3AB84 55%,#F2E3D2 100%)` — botão "gold" (CTA de maior prioridade).

---

## Tipografia

- **Display/serifada:** variável CSS `--font-display`, carregada via `next/font/google`.
  - **Config do Tailwind e código-fonte atual ([layout.tsx](src/app/layout.tsx)):** `Playfair Display` (fallback `Georgia, serif`).
  - **Divergência encontrada:** as instruções do projeto ([design-system.instructions.md](.github/instructions/design-system.instructions.md) e `copilot-instructions.md`) ainda referenciam `Cormorant Garamond` como fonte display — o código já foi migrado para Playfair Display, mas a documentação de instruções não foi atualizada.
- **Corpo:** variável `--font-body` → `Manrope` (fallback `system-ui, -apple-system, sans-serif`).

### Escala de tamanhos (por uso, extraída dos componentes)

| Nível                                                                        | Fonte            | Tamanho                              | Peso           | Line-height | Letter-spacing |
| ---------------------------------------------------------------------------- | ---------------- | ------------------------------------ | -------------- | ----------- | -------------- |
| Display (hero `<h1>`)                                                        | Playfair Display | `clamp(2.5rem, 6vw, 4rem)`           | 600 (semibold) | 1.08        | `-0.01em`      |
| Headline (`SectionTitle`)                                                    | Playfair Display | `clamp(2rem, 5.4vw, 3.1rem)`         | 600            | 1.1         | `-0.01em`      |
| Title (títulos de componente: `ProcessStep`, `MenuItem`, nome no depoimento) | Playfair Display | `text-xl` a `text-2xl` (1.25–1.5rem) | 600            | 1.2         | —              |
| Body (parágrafos, leads)                                                     | Manrope          | `text-lg`/`text-base`                | 400            | 1.6         | —              |
| Label (rodapé, uppercase)                                                    | Manrope          | `text-xs`                            | 600            | —           | `0.2em`        |

- Ênfase recorrente: todo `SectionTitle` fecha com um trecho em `<em>` itálico na cor gold (`gold-600` em fundo claro, `gold-300` em fundo escuro).
- Numerais serifados itálicos em gold (`01`, `02`…) usados em `ProcessStep` e `MenuItem` para conteúdo genuinamente sequencial.

---

## Espaçamento e Grid

- **Container central:** `max-w-295` (1180px), padding horizontal fluido `clamp(20px, 5vw, 48px)` — definido no componente `Section` ([section.tsx](src/components/ui/section.tsx)).
- **Padding vertical de seção:** fluido, `clamp(56px, 8.5vw, 108px)` (mais compacto em `md+`: `clamp(64px, 6.5vw, 88px)`).
- Não há uma escala de espaçamento numérica customizada (tipo `4px/8px/16px`) declarada em tokens — os componentes usam a escala padrão do Tailwind (`gap-2`, `gap-4`, `gap-5`, `py-7`, etc.) combinada com valores fluidos (`clamp`) pontuais para hero e seções.

### Breakpoints (customizados — não usar os defaults do Tailwind)

```ts
screens: { sm: "600px", md: "900px", lg: "1024px", xl: "1280px" }
```

### Grids por seção (não há grid genérico reutilizável — cada seção define o próprio layout)

- Hero: split `1.05fr` (texto) / `1fr` (foto) em `md+`, empilhado no mobile.
- Resultados/galeria: grid de `sm:2` / `md:3` colunas, com itens de tamanho variável (não uniforme).
- Sobre: split de duas colunas (texto/retrato), ordem invertida no mobile.
- Procedimentos: card em destaque de largura total + lista de uma coluna (formato "menu editorial", não grid de cards).

---

## Bordas e Sombras

### Border-radius

| Token              | Valor | Uso                                                                          |
| ------------------ | ----- | ---------------------------------------------------------------------------- |
| `rounded-brand`    | 22px  | containers de foto (`GalleryCard`, `AboutPhoto`)                             |
| `rounded-brand-sm` | 14px  | badges/legendas "glass" sobre fotos                                          |
| `rounded-full`     | pill  | todos os botões, badges, pill do Google Reviews, abas de localização         |
| `rounded-none`     | 0px   | `TestimonialCard` (cartão de depoimento, propositalmente sem arredondamento) |

### Box-shadow

| Token         | Valor                                      | Uso                                          |
| ------------- | ------------------------------------------ | -------------------------------------------- |
| `shadow-soft` | `0 20px 55px -22px rgba(4,36,26,0.5)`      | containers de foto e botão variante "forest" |
| `shadow-gold` | `0 14px 40px -14px rgba(190,144,102,0.55)` | botão variante "gold"                        |

- Cartões de texto puro (ex.: depoimento) não recebem sombra — usam uma borda superior de 2px em gold (`border-t-gold-500/60`) como alternativa visual.

---

## Componentes visuais padronizados

### Botões (`Button` / `WhatsAppButton` em `src/components/ui/button.tsx` e `src/components/whatsapp-button.tsx`)

Formato: pill (`rounded-full`), 4 variantes:

- **`gold`** (primário): fundo `gold-grad`, texto `forest-900`, `shadow-gold`.
- **`forest`** (secundário, padrão): fundo `green-grad`, texto `cream-50`, `shadow-soft`.
- **`green`** (terciário/WhatsApp): fundo sólido `wa-green`, texto branco, hover `wa-green-d`.
- **`ghost`**: transparente, borda `forest-700/25`, texto `forest-700`.
- Tamanhos: `sm`, `lg` (padrão), `xl`.
- Interação: eleva no hover (`-translate-y-0.5`), comprime no clique (`active:scale-[0.97]`), easing customizado `ease-brand`; `motion-reduce` desativa a transformação.
- Não há estado visual de `disabled` definido (o botão é sempre um link `<a>`, não um `<button>` desabilitável).

### Inputs / formulários

- **Não há inputs ou formulários no site** (nenhum campo de texto, select, checkbox). Todo contato é feito via link direto para WhatsApp — logo não existem estados de foco/erro de formulário a documentar, além do anel de foco genérico (`:focus-visible`, outline gold `#D3AB84`, 2px, offset 2px) definido em `globals.css`.

### Cards

- **`GalleryCard`**: foto (ou par de fotos lado a lado) com legenda "glass" (fundo `forest-900/55` + `backdrop-blur-md`) sobreposta no rodapé; `rounded-brand` + `shadow-soft`.
- **`AboutPhoto`/`AboutBadge`**: mesmo padrão de foto + badge glass, usado no retrato da seção "Sobre".
- **`TestimonialCard`**: cartão de citação — aspas grandes decorativas, texto em itálico, borda superior gold, sem sombra, cantos retos.
- Card de procedimento em destaque (dentro da seção Procedimentos): preenchimento `green-grad` de largura total, `rounded-brand`, `shadow-soft`.

### Listagem editorial ("menu de tratamentos")

- **`MenuItem`**: linha de tabela (índice em numeral itálico gold · título serifado · descrição · link "Saiba mais" com ícone de seta), separada por borda inferior `cream-200` — usada na seção de Procedimentos.
- **`ProcessStep`**: mesmo padrão de numeral, usado nas 4 etapas de "Como funciona".

### Badges / pills

- **`GoogleReviewsBadge`**: pill com borda `cream-200`, fundo `cream-50`, sombra `shadow-soft`, ícone "G" (azul `#4285F4`) + 5 estrelas (`lucide-react`, cor `gold-500`).
- Abas de unidade em "Localização" (`LocationMap`): pill ativo com fundo `forest-700`/texto `cream-50`; inativo com borda `cream-200` e fundo `cream-50`.

### FAQ

- **`FaqAccordion`** (Radix UI Accordion): divisores `forest-line`, ícone "+" (`lucide-react`) que gira 45° (vira "×") ao abrir, com animação de altura customizada (`accordion-down`/`accordion-up`, 0.3s, easing `ease-brand`).

### Ícones

- Biblioteca principal: **`lucide-react`** (estilo outline/stroke) — usada para `Star`, `ArrowUpRight`, `Plus`.
- Ícones de marca customizados (SVG inline próprios, não da lib): `WhatsappIcon` (`src/components/icons/whatsapp-icon.tsx`, estilo filled/glifo oficial do WhatsApp) e `InstagramIcon` (`src/components/icons/instagram-icon.tsx`).

---

## Logotipo e imagens de marca

- **Logo principal:** [public/images/logo.png](public/images/logo.png) — usado no cabeçalho do hero (dimensões de referência 834×343px).
- **Ícone/app icon:** `src/app/icon.png` (256×256) e `src/app/apple-icon.png` (180×180) — convenção de metadata do Next.js App Router (gera `/icon.png` e `/apple-icon.png` automaticamente).
- **Ícone PWA:** [public/images/icon-512.png](public/images/icon-512.png) (512×512), referenciado no `manifest.ts`.
- **Imagem de Open Graph:** `public/og-image.png`.
- **Foto institucional recorrente:** [public/images/dra-leticia.png](public/images/dra-leticia.png) — usada tanto no hero quanto na seção "Sobre".
- **Imagens de resultado (antes/depois):** `public/images/resultado-*.png` (7 arquivos), usadas exclusivamente na seção "Resultados".
- **Cores do manifest (PWA):** `background_color: #FBF8F3` (cream-50), `theme_color: #03422F` (forest-700) — mesmo valor do `viewport.themeColor` definido em `layout.tsx`.

---

## Animações e transições

| Token/uso                                                                       | Duração                             | Easing                           |
| ------------------------------------------------------------------------------- | ----------------------------------- | -------------------------------- |
| `ease-brand` (transição padrão de hover/transform em botões, reveal, accordion) | variável por componente (0.3s–0.7s) | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `Reveal` (fade + slide-up ao entrar na viewport, via `useReveal`)               | 700ms                               | `ease-brand`                     |
| `wa-pulse` (pulso do botão flutuante do WhatsApp)                               | 2.4s, infinito                      | `cubic-bezier(0.22, 1, 0.36, 1)` |
| `accordion-down`/`accordion-up` (FAQ, Radix)                                    | 0.3s                                | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Hover de botão (`-translate-y-0.5`, `active:scale-[0.97]`)                      | 300ms                               | `ease-brand`                     |

- Todas as animações respeitam `prefers-reduced-motion: reduce` — há uma regra global em `globals.css` que zera durações/transições, e o hook `useReveal` retorna `isVisible = true` imediatamente quando a preferência está ativa.

---

## Resumo de identidade visual

**Estilo visual predominante:**
Editorial/boutique — um "lookbook de atelier", segundo a própria documentação (`DESIGN.md`). Combina uma paleta natural e sóbria (verde-floresta, dourado, cream) com tipografia serifada de destaque (Playfair Display) e composições assimétricas de foto, em vez do padrão genérico de clínica (hero centralizado + grid de ícones).

**Consistência dos tokens:**
Alta. Praticamente todas as cores, radius, sombras e espaçamentos usados nos componentes remetem a tokens nomeados no `tailwind.config.ts` (`forest`, `gold`, `green`, `cream`, `ink`, `wa`, `brand`, `soft`/`gold`, `ease-brand`). Os principais desvios encontrados:

- Uso de classes utilitárias arbitrárias do Tailwind (`clamp(...)`, `text-6xl`, `aspect-[16/10]` etc.) para valores fluidos/pontuais que não viraram tokens formais — funcional, mas fora do sistema nomeado.
- A documentação de instruções (`design-system.instructions.md`, `copilot-instructions.md`) está **desatualizada** quanto à fonte display: menciona "Cormorant Garamond", enquanto o código (`tailwind.config.ts`, `layout.tsx`, `DESIGN.md`) já usa **Playfair Display**.

**Framework/lib de design system:**
Tailwind CSS (v4, via `@import "tailwindcss"` + `@config`) com tokens customizados em `tailwind.config.ts`. Não há biblioteca de componentes de terceiros como Material UI ou Chakra — os únicos pacotes de UI externos são **Radix UI** (primitivo `Accordion`, sem estilos, para o FAQ) e **lucide-react** (ícones). Não há Storybook ou catálogo de componentes isolado.

**Nível de maturidade do design system:**
Parcial a bem estruturado para o escopo do projeto (landing page one-page): existem tokens nomeados, uma paleta e tipografia documentadas formalmente em `DESIGN.md` (incluindo regras nomeadas como "The Gold-Is-Rare Rule" e "The Two Silhouettes Rule"), e componentes de UI reutilizáveis (`Button`, `Section`, `SectionTitle`, `GalleryCard`, `ProcessStep`, `MenuItem`, `TestimonialCard`, `FaqAccordion`). Não há, porém, uma escala de espaçamento numérica dedicada, nem estados de erro/formulário (não aplicável ao site), nem um catálogo/Storybook separado do código de produção.
