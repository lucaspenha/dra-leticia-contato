# Prompt Mestre — Extração de Design e Estrutura (Site Dra. Letícia Contato)

> **Como usar este arquivo:** cole o conteúdo abaixo (ou o arquivo inteiro) como prompt inicial em uma IA de código (Copilot, Claude, ChatGPT etc.) para gerar o **novo projeto** já com o mesmo padrão visual e de estrutura, pronto para receber melhorias. Tudo o que está documentado aqui foi extraído do HTML/CSS/JS da landing page atual e adaptado para a stack definida do novo projeto: **Next.js + TypeScript + Tailwind CSS**.

---

## 1. Objetivo do novo projeto

Recriar/evoluir a landing page one-page da **Dra. Letícia Contato** (Odontologia & Harmonização Facial, com unidades em **Araxá–MG, Perdizes–MG e Ribeirão Preto–SP**) como um **projeto novo em Next.js**, mantendo a identidade visual (verde-floresta + dourado, tipografia editorial) e a estrutura de conteúdo do site atual, mas com uma base de código moderna, tipada e componentizada — pronta para receber melhorias (performance, SEO, CMS, animações, novos formulários, etc.).

Site atual (referência de design/conteúdo): uma **landing page única (one-page)**, mobile-first, focada em geração de contato via **WhatsApp**, em HTML/CSS/JS puro, sem backend.

---

## 2. Stack do novo projeto (definida)

| Camada                 | Tecnologia                                                                                                  |
| ---------------------- | ----------------------------------------------------------------------------------------------------------- |
| Framework              | **Next.js** (App Router, versão atual estável)                                                              |
| Linguagem              | **TypeScript** (modo estrito)                                                                               |
| Estilos                | **Tailwind CSS** (design tokens do site atual migrados para `tailwind.config.ts`)                           |
| Componentização        | Componentes React por seção/bloco (ver seção 4), Client Components apenas onde há interatividade            |
| Fontes                 | `next/font/google` para **Cormorant Garamond** e **Manrope** (troca do `@font-face` manual do site atual)   |
| Imagens                | `next/image` para todas as fotos/galeria (troca das tags `<img>` do site atual)                             |
| Ícones SVG             | Componentes React (`.tsx`) ou biblioteca de ícones (ex.: `lucide-react`), no lugar dos SVGs inline copiados |
| Mapa                   | `iframe` do Google Maps embutido em um Client Component (sem chave de API, igual ao original)               |
| Gerenciador de pacotes | **npm** (commitar `package-lock.json`)                                                                      |
| Deploy                 | **Vercel** (confirmado)                                                                                     |

> A stack observada no site atual (HTML estático + CSS puro com custom properties + JS vanilla IIFE) é **apenas referência de design/comportamento** — o novo projeto **não deve replicar essa stack**, e sim recriar o mesmo resultado visual/funcional usando Next.js, TypeScript e Tailwind.

- CTA principal continua sendo um link `https://wa.me/<numero>?text=<mensagem>` (WhatsApp Click-to-Chat) — sem SDK, apenas link.
- Sem backend/API própria nesta primeira versão (site estático/SSG via Next.js), a menos que seja pedido depois (ex.: formulário com envio server-side, CMS headless).

---

## 3. Design Tokens (Design System)

### 3.1 Paleta de cores

| Token           | Valor                                                         | Uso                                                    |
| --------------- | ------------------------------------------------------------- | ------------------------------------------------------ |
| `--forest-900`  | `#04241A`                                                     | Fundo hero, footer, CTA final (verde bem escuro)       |
| `--forest-800`  | `#06301F`                                                     | Variação escura                                        |
| `--forest-700`  | `#03422F`                                                     | Cor de marca principal (títulos, botão ghost)          |
| `--forest-600`  | `#054D37`                                                     | Gradientes, hover                                      |
| `--forest-line` | `rgba(211,171,132,0.22)`                                      | Linhas divisórias sutis (dourado translúcido)          |
| `--green-300`   | `#8FDCC0`                                                     | Acento claro                                           |
| `--green-400`   | `#4FC79A`                                                     | Gradiente                                              |
| `--green-500`   | `#02A56D`                                                     | Verde de marca vivo                                    |
| `--green-600`   | `#028C5C`                                                     | Hover/links                                            |
| `--green-grad`  | `linear-gradient(135deg,#03422F 0%,#02A56D 55%,#4FC79A 100%)` | Botão`.btn--forest`, números do processo               |
| `--gold-200`    | `#F2E3D2`                                                     | Texto sobre fundo escuro                               |
| `--gold-300`    | `#E7CBAE`                                                     | Itálicos em títulos escuros, eyebrow claro             |
| `--gold-500`    | `#D3AB84`                                                     | Acento premium                                         |
| `--gold-600`    | `#BE9066`                                                     | Eyebrow, itálico em títulos claros                     |
| `--gold-700`    | `#A97A50`                                                     | Hover em textos dourados                               |
| `--gold-grad`   | `linear-gradient(135deg,#A97A50 0%,#D3AB84 55%,#F2E3D2 100%)` | Botão`.btn--gold`                                      |
| `--cream-50`    | `#FBF8F3`                                                     | Fundo geral (claro, quente)                            |
| `--cream-100`   | `#F4EDE2`                                                     | Fundo alternado de seções                              |
| `--cream-200`   | `#E9DFCF`                                                     | Bordas de cards                                        |
| `--ink-900`     | `#191D1A`                                                     | Texto principal                                        |
| `--ink-700`     | `#3A423C`                                                     | Texto secundário                                       |
| `--ink-500`     | `#6B756E`                                                     | Texto de apoio (leads, parágrafos)                     |
| `--wa-green`    | `#25D366`                                                     | Verde oficial do WhatsApp (CTA final, botão flutuante) |
| `--wa-green-d`  | `#1ebe5a`                                                     | Hover do verde WhatsApp                                |

**Resumo conceitual:** verde-floresta premium transmitindo elegância/natureza/saúde + dourado como acento de luxo + creme/marfim como fundo quente (evita branco puro/clínico).

### 3.2 Tipografia

- **Display/serif:** `"Cormorant Garamond", "Fraunces", Georgia, serif` — usada em títulos (`h1`, `.section__title`, citações, wordmark). Uso frequente em **itálico** para dar sofisticação (`<em>`).
- **Corpo:** `"Manrope", system-ui, -apple-system, sans-serif` — usada em parágrafos, botões, labels, eyebrows.
- Tamanho base do body: `17px` (mobile) → `18px` a partir de `900px`.
- Títulos de seção usam `clamp()` para responsividade fluida, ex.: `font-size: clamp(2rem, 5.4vw, 3.1rem)`.
- Letter-spacing negativo sutil em títulos (`-0.01em`) e positivo/expandido em "eyebrows" (`0.26em`, uppercase).

### 3.3 Layout & espaçamento

- Container central: `max-width: 1180px`, padding lateral fluido `clamp(20px, 5vw, 48px)`.
- Espaçamento vertical de seção: `padding-block: clamp(56px, 8.5vw, 108px)` (menor em telas grandes: `clamp(64px, 6.5vw, 88px)`).
- Grid mobile-first: 1 coluna → 2 colunas (`600px`) → 3 colunas (`900px`) conforme a seção.
- Bordas arredondadas: `--radius: 22px` (blocos grandes/imagens), `--radius-sm: 14px` (cards).
- Botões sempre com `border-radius: 100px` (pill/rounded-full).

### 3.4 Sombras e efeitos

- `--shadow-soft: 0 20px 55px -22px rgba(4,36,26,0.5)` — sombra suave verde-escura em imagens/mídias.
- `--shadow-gold: 0 14px 40px -14px rgba(190,144,102,0.55)` — sombra dourada em botões CTA.
- Easing padrão de transições: `--ease: cubic-bezier(0.22, 1, 0.36, 1)` (easing suave tipo "ease-out-expo").
- Glassmorphism leve: `backdrop-filter: blur(6-8px)` em badges sobre imagens (`.gcard__label`, `.about__badge`).
- Pontilhado decorativo no CTA final: `radial-gradient` repetido em grade 28x28px, mascarado com `mask-image` radial.

### 3.5 Acessibilidade & motion

- Respeita `prefers-reduced-motion: reduce` (desativa scroll suave, animações e reveal).
- Foco visível customizado (`:focus-visible`) com outline dourado (`--gold-500`).
- Uso extensivo de `aria-label`, `aria-expanded`, `aria-controls`, `role="tablist"/"tab"/"region"`.

### 3.6 Migração dos tokens para Tailwind

- Registrar todas as cores da seção 3.1 em `tailwind.config.ts` → `theme.extend.colors` (ex.: `forest.900`, `gold.500`, `cream.50`, `ink.900`, `wa.green`), preservando os mesmos valores hexadecimais.
- Gradientes (`--green-grad`, `--gold-grad`) viram utilitários customizados (`backgroundImage` em `theme.extend`) ou classes `bg-gradient-to-br` com as cores correspondentes.
- `--radius` / `--radius-sm` → `theme.extend.borderRadius` (ex.: `rounded-brand` = 22px, `rounded-brand-sm` = 14px).
- `--shadow-soft` / `--shadow-gold` → `theme.extend.boxShadow`.
- `--ease` (cubic-bezier) → `theme.extend.transitionTimingFunction`.
- Fontes (`--font-display`, `--font-body`) → configuradas via `next/font/google` e mapeadas em `theme.extend.fontFamily` (`font-display`, `font-body`), evitando o `@font-face` manual do site atual.
- Manter os mesmos breakpoints funcionais (600px/900px) — ver seção 7 para detalhes de como tratar isso no Tailwind (que usa 640px/768px por padrão).

---

## 4. Componentes reutilizáveis

| Componente                     | Classe raiz                                                                                          | Descrição                                                                                              |
| ------------------------------ | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| Botão                          | `.btn` + modificador (`--gold`, `--green`, `--forest`, `--ghost`) + tamanho (`--sm`, `--lg`, `--xl`) | Pill button, ícone opcional (WhatsApp), efeito hover`translateY(-2px)` + sombra, `active: scale(0.97)` |
| Eyebrow (rótulo)               | `.eyebrow` (+ `--center`, `--light`)                                                                 | Pequeno rótulo uppercase com linhas horizontais decorativas (`.eyebrow__line`) antes/depois do texto   |
| Título de seção                | `.section__title` (+ `<em>` colorido em dourado)                                                     | Serifada, itálico em destaque                                                                          |
| Card de serviço                | `.card` (+ `--feature` destaque escuro, `--cta` destaque dourado)                                    | Título + texto + link "Quero saber mais →"                                                             |
| Card de galeria (antes/depois) | `.gcard` (+ `.gcard__pair` para 2 imagens lado a lado)                                               | Imagem com selo/label flutuante (glass) no rodapé                                                      |
| Etapa do processo              | `.pstep`                                                                                             | Número circular com gradiente + título + texto, lista ordenada                                         |
| Badge sobre foto               | `.about__badge`                                                                                      | Nome + especialidade sobre a foto, glass                                                               |
| Card de depoimento             | `.testi`                                                                                             | Avatar com iniciais (sem foto real), nome, estrelas, citação                                           |
| Carrossel de depoimentos       | `.testi-carousel`, `.testi-track`, `.testi-dots`, `.testi-arrow`                                     | Loop infinito por clonagem de itens, autoplay, drag/touch, dots + setas                                |
| Avaliações do Google           | `.greviews`                                                                                          | Pill com ícone "G" colorido + estrelas + texto "Avaliações 5 estrelas no Google"                       |
| Acordeão de FAQ                | `.faq__item`, `.faq__q`, `.faq__a`, `.faq__ico`                                                      | Abre/fecha via`grid-template-rows: 0fr → 1fr`, ícone "+" que vira "×"                                  |
| Botão flutuante WhatsApp       | `.wa-float`                                                                                          | Fixo no canto inferior direito, com pulso animado (`@keyframes pulse`)                                 |
| Reveal on scroll               | `[data-reveal]` / `.is-visible`                                                                      | Fade + slide-up ao entrar na viewport (via`IntersectionObserver`)                                      |

---

## 5. Estrutura da página (ordem das seções)

1. **Hero** (`#inicio`)
2. **Procedimentos** (`#procedimentos`)
3. **Galeria/Resultados — Antes & Depois** (`#resultados`)
4. **Como funciona / Processo** (`#como-funciona`)
5. **Sobre / Quem é a Dra. Letícia** (`#sobre`)
6. **Depoimentos** (`#depoimentos`)
7. **Localização/Mapa** (`#localizacao`)
8. **FAQ** (`#faq`)
9. **CTA final** (`#contato`)
10. **Footer**
11. **Botão flutuante do WhatsApp** (global, fixo)

Não há header/nav fixo no topo — a navegação principal ocorre pelo rodapé (âncoras) e pelos CTAs de cada seção.

### 5.1 Conteúdo completo por seção

#### Hero (`#inicio`)

- Eyebrow: "Harmonização Facial & Odontologia Estética"
- H1: "Sua beleza natural, _elevada com sutileza._"
- Subtítulo: "Botox, preenchimentos, bioestimuladores de colágeno e skinbooster pensados para a sua individualidade. Aqui você entende tudo o que será feito, com calma — e um cafézinho esperando por você."
- CTAs: `Agendar avaliação` (botão dourado, ícone WhatsApp) + `Ver procedimentos` (âncora ghost para `#procedimentos`)
- Foto de fundo com fade para verde escuro.

#### Procedimentos (`#procedimentos`)

- Eyebrow: "Procedimentos"
- H2: "Cada rosto é único — _o seu tratamento também é._"
- Lead: "Uma combinação de técnicas pensada para valorizar a sua individualidade, com resultados sutis e naturais."
- Grid de 7 cards:
  1. **Card destaque** "Especialidade" — Harmonização Facial Personalizada
  2. Toxina Botulínica (Botox)
  3. Preenchimento com Ácido Hialurônico
  4. Bioestimuladores de Colágeno
  5. Lipo de Papada Enzimática
  6. Skinbooster
  7. **Card CTA** — "Não sabe qual procedimento é ideal?" → botão "Falar com a Dra. Letícia"
- Cada card (exceto o CTA) termina em link "Quero saber mais →" que abre o WhatsApp com mensagem contextual pré-preenchida citando o procedimento.

#### Galeria / Resultados (`#resultados`)

- Eyebrow: "Antes & Depois"
- H2: "Resultados que respeitam _quem você é._"
- Lead: "Uma amostra de procedimentos realizados no consultório — sempre com sutileza e naturalidade."
- 6 cards de galeria: Preenchimento Labial · Harmonização de Perfil · Lipo de Papada Enzimática (par antes/depois lado a lado) · Harmonização Nariz & Lábios · Contorno Mandibular · Botox — Rugas de Expressão.
- Nota de rodapé: "Resultados variam de pessoa para pessoa e são avaliados individualmente em consulta."

#### Como funciona (`#como-funciona`)

- Eyebrow: "Como funciona"
- H2: "Um caminho pensado _para você se sentir segura._"
- Lead: "Um bom papo, um plano claro e nenhuma pressa — para você entender tudo o que será feito."
- 4 etapas numeradas:
  1. Conversa & escuta ativa
  2. Avaliação facial detalhada
  3. Plano sob medida
  4. Acompanhamento contínuo
- CTA: "Quero avaliar o meu caso"

#### Sobre (`#sobre`)

- Eyebrow: "Quem cuida da sua harmonização"
- H2: "Sutileza para revelar _a melhor versão de você._"
- Texto: especialista em harmonizar faces de acordo com individualidade/vontades/personalidade; procedimentos citados: Botox, preenchimentos, bioestimuladores de colágeno, fios, skinbooster, PDRN.
- Citação/quote: "Você não precisa de harmonização facial — você _MERECE_."
- Lista de diferenciais (check ✓): Especialista em Harmonização Facial · Atendimento individualizado, sem pressa · Explicação clara de cada etapa do tratamento.
- CTA: "Agendar minha avaliação"
- Foto com badge "Dra. Letícia Contato — Odontologia & Harmonização Facial"

#### Depoimentos (`#depoimentos`)

- Eyebrow: "Avaliações no Google"
- H2: "Histórias de quem _já viveu essa transformação._"
- Link para avaliações no Google Maps com ícone "G", estrelas e texto "Avaliações 5 estrelas no Google".
- Carrossel com 7 depoimentos reais (nome, nº de avaliações, tempo, 5 estrelas, texto). Nomes: Letícia Maria, Smart Canal, Carol Gladstone, Lais Bartalini, Aline Silva, Alessandra Diniz, João Vitor Martins.

#### Localização (`#localizacao`)

- Eyebrow: "Onde atendemos"
- H2: sugestão de ajuste para múltiplas unidades, ex.: "Onde você encontra _a Dra. Letícia._" (o H2 original "No Centro de Araxá – MG." era específico para um único endereço e deve ser generalizado agora que há 3 unidades).
- **Unidades de atendimento (3 endereços):**
  1. **Araxá – MG** (unidade original) — Av. Antônio Carlos, 286 — Centro, Araxá – MG · CEP 38183-083 · Telefone (16) 99793-9679.
  2. **Perdizes – MG** — Rua Antônio Tomé de Resende, 276.
  3. **Ribeirão Preto – SP** — Av. Antônio Diederichsen — Metropolitan Business Center.
- ⚠️ CEP e telefone de Perdizes e Ribeirão Preto **não foram informados** — completar antes de publicar (necessário para o link do mapa e para o rodapé).
- Layout: com 3 unidades, o card único de mapa do site atual deixa de ser suficiente. Sugestão: um seletor (tabs/abas ou accordion) por unidade, cada um trocando o endereço exibido e o `iframe` do mapa correspondente — ver componente `<LocationMap />` na seção 6.
- Mapa incorporado (iframe Google Maps, um por unidade selecionada).
- CTA: "Agendar minha visita" (mantém o link de WhatsApp único; a IA/atendente confirma a unidade na conversa).

#### FAQ (`#faq`)

- Eyebrow: "Antes de decidir"
- H2: "As dúvidas que _todo mundo tem._"
- 4 perguntas (acordeão):
  1. Existe idade certa para começar a harmonização facial?
  2. O resultado fica natural ou muda muito o meu rosto?
  3. Qual a diferença entre Botox, preenchimento e bioestimulador?
  4. Quero entender o valor antes de decidir.
- CTA final: "Ficou com outra dúvida? Fale direto com a Dra. Letícia." → "Tirar minha dúvida no WhatsApp"

#### CTA final (`#contato`)

- Eyebrow: "Dê o primeiro passo"
- H2: "Você não precisa — _você merece._"
- Texto: "Fale agora com a Dra. Letícia pelo WhatsApp e receba um plano claro para o seu caso. Sem compromisso."
- Botão grande verde WhatsApp: "Chamar no WhatsApp"
- Microtexto: "Resposta rápida em horário comercial"

#### Footer

- Wordmark: "Dra. Letícia Contato" + tagline "Odontologia & Harmonização Facial" + frase "Sua beleza natural, elevada com sutileza."
- Navegação (âncoras): Procedimentos, Resultados, Como funciona, A dentista, Depoimentos, Localização, Dúvidas.
- Bloco de contato: agora com **3 endereços** (Araxá – MG, Perdizes – MG e Ribeirão Preto – SP) listados um abaixo do outro, mantendo o WhatsApp (16) 99793-9679 como contato único (mesmo número para as 3 unidades), + botão "Falar no WhatsApp". O footer original do site atual só tinha uma linha de endereço (`.footer__line`) — no novo projeto, repetir o bloco de endereço uma vez por unidade.
- **Ícone/link do Instagram** (novo, não existia no site atual) — adicionar ao lado do bloco de contato ou logo abaixo da navegação, usando `siteConfig.socials.instagram` (usuário ainda pendente de confirmação).
- Linha final: "© {ano dinâmico} Dra. Letícia Contato · Todos os direitos reservados."

---

## 6. Comportamento / Interatividade (adaptado para Next.js + TypeScript)

No site atual toda a lógica está em um único `script.js` vanilla (IIFE). No novo projeto, o mesmo comportamento deve ser **recriado em React/Next.js**, dividido em hooks e componentes client-side pequenos e tipados. Regra geral: **Server Components por padrão**; adicionar `"use client"` apenas nos componentes que realmente precisam de interatividade/estado no navegador.

1. **Config central** → `lib/site-config.ts`, um objeto **tipado**, exportado e importado onde necessário. Agora com **múltiplas unidades** (Araxá, Perdizes e Ribeirão Preto):

   ```ts
   export type Location = {
     id: string;
     label: string;
     address: string;
     mapsQuery: string;
     phone?: string;
   };

   export const siteConfig = {
     whatsappNumber: "5516997939679", // número único, compartilhado pelas 3 unidades
     defaultMessage: "Olá! Vim pelo site da Dra. Letícia Contato e gostaria de mais informações.",
     socials: {
       instagram: "https://instagram.com/<definir_usuario>", // pendente: usuário do Instagram
     },
     locations: [
       {
         id: "araxa",
         label: "Araxá – MG",
         address: "Av. Antônio Carlos, 286 — Centro, Araxá – MG · 38183-083",
         mapsQuery: "Av. Antônio Carlos, 286 - Centro, Araxá - MG, 38183-083",
         phone: "(16) 99793-9679",
       },
       {
         id: "perdizes",
         label: "Perdizes – MG",
         address: "Rua Antônio Tomé de Resende, 276", // CEP pendente
         mapsQuery: "Rua Antônio Tomé de Resende, 276, Perdizes - MG",
       },
       {
         id: "ribeirao-preto",
         label: "Ribeirão Preto – SP",
         address: "Av. Antônio Diederichsen — Metropolitan Business Center", // número/CEP pendente
         mapsQuery: "Av. Antônio Diederichsen, Metropolitan Business Center, Ribeirão Preto - SP",
       },
     ] satisfies Location[],
   } as const;
   ```

   > Endereços de Perdizes e Ribeirão Preto ainda estão incompletos (sem número/CEP/telefone confirmados) — ajustar assim que os dados definitivos forem enviados. Confirmado com a cliente: **as 3 unidades usam o mesmo WhatsApp** `5516997939679`; não há telefone fixo separado por unidade além do já cadastrado em Araxá.

2. **Links de WhatsApp dinâmicos** → função utilitária pura em `lib/whatsapp.ts` (`buildWhatsappLink(context?: string): string`), usada por um componente reutilizável `<WhatsAppButton context="..." />` (substitui o padrão `.js-wa` + `data-context`). Não precisa de `"use client"` — o `href` é calculado em tempo de build/servidor (é apenas concatenação de string).
3. **Ano dinâmico no footer** → calculado no próprio Server Component com `new Date().getFullYear()` (não precisa de JS no cliente, diferente do site atual que usa `document.getElementById('year')`).
4. **Mapa (iframe do Google, sem API key)** → componente `<LocationMap />` que recebe a lista `siteConfig.locations` e monta um `iframe` por unidade selecionada (`src` a partir do `mapsQuery` da unidade ativa). Com 3 endereços, precisa de um seletor de unidade (tabs, `<select>` ou accordion); o seletor em si exige estado (`"use client"`), mas cada `iframe` continua estático.
5. **Reveal on scroll** → hook customizado `useReveal()` (Client Component) usando `IntersectionObserver`, aplicado via `ref` + classe condicional, animado com classes Tailwind (`opacity-0 translate-y-6` → `opacity-100 translate-y-0`, com `transition` + `duration`). Alternativa aceitável: `framer-motion`/`motion` com `whileInView` para o mesmo efeito. Respeitar `prefers-reduced-motion` via `matchMedia` no hook ou pela media query `motion-reduce:` do Tailwind.
6. **Carrossel de depoimentos "infinito"** → componente `<TestimonialsCarousel />` (Client Component). Duas abordagens possíveis:

   - Reimplementar a lógica original em TS (clonagem de itens, `translate3d`, drag via Pointer Events, autoplay com `setInterval`, `normalize()` ao fim da transição) dentro de um hook `useInfiniteCarousel()`; ou
   - Usar uma lib madura como **Embla Carousel** (`embla-carousel-react`) com plugin de autoplay e loop nativo — **recomendado** para reduzir bugs de manutenção, mantendo a mesma UX (dots, setas, drag, pausa no hover, autoplay ~4.8s).

7. **FAQ acordeão** → componente `<FaqItem />` com `useState<boolean>` para `isOpen`, ou usar **Radix UI Accordion** (`@radix-ui/react-accordion`) para acessibilidade pronta (`aria-expanded`, `aria-controls`, animação de altura). Estilizar com Tailwind mantendo o efeito visual do ícone "+" → "×".
8. **Botão flutuante do WhatsApp** (`<FloatingWhatsApp />`) → Server Component simples (só precisa do link), com a animação de pulso feita via `keyframes` no `tailwind.config.ts` (`animate-wa-pulse`).

### Estrutura de pastas sugerida

```
src/
  app/
    layout.tsx          # fontes (next/font), metadata, providers
    page.tsx            # monta as seções na ordem da seção 5
  components/
    sections/            # Hero, Procedimentos, Galeria, ComoFunciona, Sobre, Depoimentos, Localizacao, Faq, CtaFinal, Footer
    ui/                  # Button, Eyebrow, Card, Badge etc. (componentes de design system)
    whatsapp-button.tsx
    floating-whatsapp.tsx
    testimonials-carousel.tsx
    faq-item.tsx
    location-map.tsx
  hooks/
    use-reveal.ts
    use-infinite-carousel.ts  # se não usar Embla
  lib/
    site-config.ts
    whatsapp.ts
  content/                # textos das seções em .ts, separados do componente visual
```

---

## 7. Responsividade (breakpoints)

O site atual usa breakpoints customizados em **600px** e **900px**, que não coincidem com os padrões do Tailwind (`sm: 640px`, `md: 768px`, `lg: 1024px`). Para preservar o comportamento exato, registrar breakpoints customizados em `tailwind.config.ts`:

```ts
screens: {
  sm: "600px", // equivalente ao breakpoint "tablet" do site atual
  md: "900px", // equivalente ao breakpoint "desktop" do site atual
  lg: "1024px",
  xl: "1280px",
},
```

Comportamento a replicar com essas classes:

- **Mobile (padrão, < 600px):** 1 coluna em todos os grids.
- **`sm:` (≥ 600px):** trust list e cards de serviço em 2 colunas; galeria em 2 colunas; footer em 3 colunas; setas do carrossel aparecem (`hidden sm:flex`).
- **`md:` (≥ 900px):** corpo com `text-lg` (18px); serviços em 3 colunas (card destaque ocupa `md:col-span-2`, card CTA ocupa `md:col-span-1`); galeria em 3 colunas; seções "processo", "sobre" e "localização" passam a `grid-cols-2` lado a lado (texto + mídia); textos alinhados à esquerda (`md:text-left`) em vez de centralizados.
- **Touch (`hover: none`):** usar variante `no-hover:` customizada (ou `@media (hover: none)` via plugin) para desativar efeitos de `hover` (elevação de cards/botões) em telas touch.

---

## 8. SEO / Meta tags (via Next.js Metadata API)

No App Router, todas as tags abaixo devem ser definidas com o objeto `Metadata` exportado de `app/layout.tsx` (ou `generateMetadata()`), em vez de tags `<meta>` manuais:

```ts
export const metadata: Metadata = {
  title:
    "Dra. Letícia Contato — Odontologia e Harmonização Facial | Araxá, Perdizes e Ribeirão Preto",
  description:
    "Botox, preenchimentos, bioestimuladores de colágeno, skinbooster e lipo de papada enzimática com a Dra. Letícia Contato, em Araxá – MG, Perdizes – MG e Ribeirão Preto – SP. Harmonização facial individualizada, com atendimento humanizado. Agende sua avaliação pelo WhatsApp.",
  openGraph: {
    type: "website",
    title: "Dra. Letícia Contato — Odontologia e Harmonização Facial",
    description:
      "Harmonização facial sob medida para a sua individualidade — Botox, preenchimentos, bioestimuladores e mais. Atendimento em Araxá, Perdizes e Ribeirão Preto.",
    images: ["/og-image.png"], // ver nota sobre imagem faltante na seção 9
  },
  themeColor: "#03422F",
};
```

- `lang="pt-BR"` deve ir em `app/layout.tsx` na tag `<html lang="pt-BR">`.
- Viewport com `viewport-fit=cover` (suporte a notch/safe-area) configurado via `export const viewport: Viewport = { viewportFit: "cover" }`.

> ⚠️ Nota: o HTML capturado contém também um script de terceiros injetado por ferramenta de monitoramento/tag manager (`dataslayerLaunchMonitors`) que **não faz parte do site original** — é ruído da captura da página e **não deve ser replicado** no novo projeto.

---

## 9. Assets necessários

| Arquivo (nome original) | Uso                                                                               | Local no novo projeto                                     |
| ----------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `img-11`                | Foto principal da Dra. Letícia (hero, seção "como funciona", "sobre")             | `/public/images/dra-leticia.png`                          |
| `img-3`                 | Antes/depois — Preenchimento labial                                               | `/public/images/resultado-preenchimento-labial.png`       |
| `img-4`                 | Antes/depois — Harmonização de perfil                                             | `/public/images/resultado-harmonizacao-perfil.png`        |
| `img-5` / `img-6`       | Antes / Depois — Lipo de papada enzimática (par)                                  | `/public/images/resultado-lipo-papada-{antes,depois}.png` |
| `img-7`                 | Antes/depois — Harmonização nariz & lábios                                        | `/public/images/resultado-nariz-labios.png`               |
| `img-8`                 | Antes/depois — Contorno mandibular                                                | `/public/images/resultado-contorno-mandibular.png`        |
| `img-9`                 | Antes/depois — Botox (rugas de expressão)                                         | `/public/images/resultado-botox-testa.png`                |
| `img-2` (og:image)      | Imagem para compartilhamento em redes sociais —**faltando**, precisa ser recriada | `/public/og-image.png`                                    |

- **Status das fotos:** confirmado com a cliente que as fotos atuais (foto da Dra. e os pares antes/depois) são reais e autorizadas — porém **algumas serão substituídas** por novas fotos antes do lançamento (ainda não definido quais). Ao iniciar o desenvolvimento, usar as fotos atuais como placeholder de layout e deixar os componentes de imagem fáceis de trocar (`next/image` com caminho centralizado em `content/`), já que a troca é esperada.
- Todas as imagens devem ser renderizadas com `next/image` (`<Image />`), definindo `width`/`height` ou `fill` + `sizes`, para otimização automática (lazy loading, formatos modernos).
- Fontes: **Cormorant Garamond** e **Manrope**, carregadas via `next/font/google` (elimina a necessidade do `@font-face` manual/`css2.css` do site atual):
  ```ts
  import { Cormorant_Garamond, Manrope } from "next/font/google";

  const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    style: ["italic", "normal"],
    variable: "--font-display",
  });
  const manrope = Manrope({ subsets: ["latin"], variable: "--font-body" });
  ```

---

## 10. Sugestões de melhoria para o novo projeto (opcional)

- Adicionar um **header/nav fixo** com âncoras para as seções (o site atual não tem).
- Extrair conteúdo textual de cada seção para `content/*.ts` tipado (título, lead, itens), separando dado de apresentação — facilita reuso para outros clientes/odontologistas e futura migração para um CMS headless.
- Usar `next/image` com formatos modernos (AVIF/WebP automáticos) para as fotos reais.
- Testes de acessibilidade (contraste do dourado sobre creme, foco em todos os elementos interativos), reforçados com Radix UI onde fizer sentido (Accordion, Dialog etc.).
- **Não replicar** o script de terceiros (`dataslayerLaunchMonitors`) — presente apenas por ser uma página capturada/exportada, não faz parte do site original.
- Gerar a imagem `og-image.png` (compartilhamento social) que está faltando.
- Configurar ESLint + Prettier + `strict: true` no `tsconfig.json` desde o início do projeto.
- Avaliar `next/dynamic` para o carrossel/mapa se necessário reduzir JS enviado ao cliente na primeira carga.
- Com 3 unidades (Araxá, Perdizes, Ribeirão Preto), avaliar se o WhatsApp também deve perguntar/confirmar a unidade de preferência na mensagem inicial (ex.: contexto por botão "Agendar em Araxá" / "Agendar em Perdizes" / "Agendar em Ribeirão Preto").
- Confirmar com a cliente número/CEP/telefone completos das unidades de Perdizes e Ribeirão Preto antes de publicar (dados ainda incompletos nesta documentação) — **pendente, cliente vai enviar depois**.
- Confirmar o usuário do Instagram para preencher `siteConfig.socials.instagram` — **pendente**.
- Adicionar dados estruturados (JSON-LD `Dentist`/`LocalBusiness`, um por unidade) para reforçar SEO local nas 3 cidades.
- Definir, antes do lançamento, quais fotos atuais serão substituídas por novas (cliente confirmou que troca parte do material, mas não especificou quais itens).
- Horário de atendimento: cliente confirmou que **não é necessário** exibir horário fixo no site — manter apenas o microtexto genérico "Resposta rápida em horário comercial" no CTA final, sem criar seção de horários.
- **Pendência legal (LGPD)**: como o site vai usar GA4 + Meta Pixel (decidido na seção 11.8), definir com a cliente se entra também um banner de consentimento de cookies e uma página de Política de Privacidade linkada no footer antes do lançamento.
- Testes automatizados e pipeline de CI/CD foram adiados para uma fase futura (ver seção 11.6/11.7) — revisar quando o projeto crescer ou tiver mais de um desenvolvedor contribuindo.

---

## 11. Checklist técnico — qualidade, performance, segurança e DevOps

Itens de engenharia que não existiam no site atual (HTML/CSS/JS puro) e que devem ser definidos/criados desde o início do projeto Next.js, mesmo que a implementação completa venha depois:

### 11.1 Base do projeto

- **Gerenciador de pacotes**: **npm** (decidido), commitando `package-lock.json` no repositório.
- **Node.js**: fixar a versão em `.nvmrc`/`engines` no `package.json` (LTS atual).
- **TypeScript**: `strict: true`, `noUncheckedIndexedAccess: true`, path alias `@/*` apontando para `src/*` no `tsconfig.json`.
- **ESLint + Prettier**: `eslint-config-next` + regras de acessibilidade (`eslint-plugin-jsx-a11y`) + Prettier integrado; **Husky + lint-staged** para rodar lint/format no pre-commit.

### 11.2 Rotas técnicas do App Router (inexistentes no site atual)

- `app/robots.ts` e `app/sitemap.ts` — gerados via Metadata API do Next.js (o HTML estático atual não tem nenhum dos dois).
- `app/manifest.ts` (ou `manifest.json`) + favicons/`apple-icon` em vários tamanhos — o site atual não define favicon/PWA icons.
- `app/not-found.tsx` — página 404 customizada (mantendo o design system).
- `app/error.tsx` — error boundary da rota, para falhas inesperadas em produção.
- `app/loading.tsx` ou `<Suspense>` pontual — estado de carregamento (ex.: enquanto o `iframe` do mapa carrega).

### 11.3 `next.config.ts`

- `images.remotePatterns` (caso alguma imagem venha de URL externa/CDN).
- `headers()` com cabeçalhos de segurança: `Content-Security-Policy` (liberando `frame-src` para `https://www.google.com` por causa do `iframe` do Maps), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy`.
- `redirects()`/`rewrites()` se o domínio antigo tiver URLs a preservar por SEO.

### 11.4 Segurança (correção de um ponto do site atual)

- O site atual usa `rel="noopener"` nos links `target="_blank"` do WhatsApp — **trocar para `rel="noopener noreferrer"`** no novo projeto (mitiga reverse tabnabbing, prática recomendada da OWASP).
- Sanitizar qualquer texto vindo de `data-context`/parâmetros de URL antes de montar a mensagem do WhatsApp (evitar injeção via query string, mesmo sendo baixo risco aqui).
- Nenhum dado sensível de paciente deve trafegar por parâmetro de URL (os textos pré-preenchidos do WhatsApp já são genéricos — manter assim).

### 11.5 Performance / Core Web Vitals

- Marcar a imagem do Hero com `priority` no `next/image` (é o LCP da página) e definir `width`/`height` (ou `fill` com `sizes` correto) em **todas** as imagens para evitar CLS.
- `next/font` já resolve `font-display: swap` e elimina o FOUT do `@font-face` manual do site atual.
- Considerar `next/dynamic` (com `ssr: false`) para o carrossel de depoimentos e/ou o `iframe` do mapa, adiando JS não crítico.
- Meta de referência: **LCP < 2.5s, CLS < 0.1, INP < 200ms** (Core Web Vitals "bons"), validado com Lighthouse/PageSpeed Insights antes do lançamento.

### 11.6 Testes automatizados — **adiado (backlog), fora do escopo inicial**

- Decisão: nesta primeira versão o foco é entregar o site; testes automatizados (Vitest + React Testing Library para componentes, Playwright para e2e, `@axe-core/playwright` para acessibilidade) ficam registrados como **melhoria futura** (ver seção 10), não bloqueiam o lançamento.
- Mesmo sem testes automatizados agora, manter `lib/whatsapp.ts` como função pura e os componentes bem isolados facilita adicionar testes depois sem refatorar.

### 11.7 CI/CD — **adiado, deploy manual via Vercel**

- Decisão: sem pipeline de CI (GitHub Actions) por enquanto. Deploy direto pela integração Git da Vercel (push na branch principal = deploy automático de produção; PRs geram preview deploy automaticamente, isso já vem de graça pela própria Vercel, sem precisar configurar Actions).
- Rodar `npm run lint` e `npm run build` localmente antes de cada push como checagem manual mínima.
- Registrado como melhoria futura: adicionar GitHub Actions com lint/typecheck/build quando o time crescer ou a cadência de deploys aumentar.

### 11.8 Analytics / Tracking — **GA4 + Meta Pixel (decidido)**

- **Google Analytics 4**: incluir via `next/script` (`strategy="afterInteractive"`) em `app/layout.tsx`, com o Measurement ID em variável de ambiente (`NEXT_PUBLIC_GA_ID`) — nunca hardcoded no componente.
- **Meta Pixel**: mesmo padrão, `NEXT_PUBLIC_META_PIXEL_ID` em variável de ambiente, script carregado uma única vez no layout.
- **Evento de conversão principal**: disparar evento customizado (`whatsapp_click` no GA4 / `Contact` ou `Lead` no Meta Pixel) dentro do `<WhatsAppButton>` a cada clique, incluindo a unidade e o contexto (ex.: `procedimentos:botox`) como parâmetros — permite medir qual seção/unidade converte mais.
- **Variáveis de ambiente**: criar `.env.local` (não versionado) + `.env.example` (versionado, com chaves vazias) documentando `NEXT_PUBLIC_GA_ID` e `NEXT_PUBLIC_META_PIXEL_ID`.
- ⚠️ **Requisito legal (LGPD)**: como GA4 e Meta Pixel usam cookies/identificadores para rastreamento, será necessário um **banner de consentimento de cookies** (aceitar/recusar) antes de carregar os scripts de terceiros, além de uma página de Política de Privacidade linkada no footer. Isso ainda não está no escopo confirmado — **fica como pendência a decidir** com a cliente (ver seção 10).

### 11.9 Conteúdo dinâmico

- **Depoimentos do Google**: decisão confirmada — continuam **fixos no código** (hardcoded), como no site atual, sem integração com a API do Google Places nesta versão. Simplifica o projeto (sem custo de API key, sem rate limit); a lista fica em `content/testimonials.ts`, fácil de atualizar manualmente quando houver novos depoimentos.

---

## 12. Prompt pronto para colar em uma IA (bloco final)

```
Crie um novo projeto de landing page one-page em Next.js (App Router) + TypeScript (modo estrito) + Tailwind CSS,
mobile-first, replicando o design system e a estrutura abaixo, para uma clínica de odontologia e harmonização
facial. Use exatamente estas cores, tipografia, componentes e conteúdo como base, podendo ajustar/melhorar
onde eu indicar depois.

[Colar aqui as seções 2 a 13 deste documento: Stack, Design Tokens, Componentes, Estrutura da página,
Comportamento/Interatividade, Responsividade, SEO, Assets necessários, Checklist técnico e Skill Impeccable]

Atue como um agente autônomo (Agent mode) e execute o projeto INTEIRO seguindo exatamente esta ordem,
sem pular etapas e sem esperar confirmação manual entre elas (só pare se um erro de build/lint não for
resolvido automaticamente após tentativas razoáveis):

1. Scaffold do projeto Next.js (App Router) + TypeScript + Tailwind CSS, usando npm (ver seção 2).
2. Configurar `tailwind.config.ts` com os design tokens da seção 3 (cores, radius, shadows, breakpoints
   customizados 600px/900px, fontes via next/font).
3. Criar os componentes de UI reutilizáveis da seção 4 (botão, card, eyebrow, badge, carrossel, FAQ, etc.).
4. Montar todas as seções da página (seção 5), com o conteúdo completo já documentado (não usar texto
   placeholder tipo "lorem ipsum" — usar os textos reais do documento).
5. Implementar o comportamento/interatividade da seção 6 (config central multi-unidade, links de WhatsApp,
   reveal on scroll, carrossel infinito de depoimentos, acordeão de FAQ, mapa com seletor de unidade).
6. Aplicar o checklist técnico da seção 11 (rotas robots/sitemap/manifest, next.config com headers de
   segurança, rel="noopener noreferrer", performance/Core Web Vitals, GA4 + Meta Pixel via variáveis de
   ambiente).
7. Instalar e configurar a skill Impeccable (seção 13):
   a. Rodar `npx impeccable install --providers=github` no terminal do projeto.
   b. Ler o arquivo gerado `.github/skills/impeccable/SKILL.md` e seguir por conta própria o fluxo de
      "init" descrito nele, respondendo que a superfície é **"brand"** (marketing/landing) — sem esperar
      o usuário digitar um slash command manualmente.
   c. Repetir a leitura/execução das instruções de `critique` (após o passo 4), `audit` (após o passo 6)
      e `polish` (como última etapa, antes de considerar o projeto pronto), sempre a partir do que estiver
      documentado no SKILL.md instalado.
8. Ao final de CADA etapa (1 a 7): rodar `npm run lint && npm run build` e, se o CLI do Impeccable já
   estiver instalado, também `npx impeccable detect --json .`, como guard-rail automático. Só avançar para
   a próxima etapa se tudo passar; se falhar, corrigir antes de continuar. Fazer um commit git ao final de
   cada etapa concluída com sucesso, com mensagem descrevendo a etapa (padrão "Ralph loop": qualquer nova
   sessão deve conseguir olhar o histórico de commits/estado do repositório e continuar de onde parou, sem
   depender da memória desta conversa).
9. Ao terminar, rodar `git log --oneline` e apresentar um resumo do que foi feito em cada etapa, junto com
   os pontos que ficaram pendentes (ver seção 10: dados de Perdizes/Ribeirão Preto, usuário do Instagram,
   fotos a substituir, decisão sobre banner de cookies/LGPD).

Regras gerais:
- Next.js App Router + TypeScript estrito + Tailwind CSS (sem outras stacks). Gerenciador de pacotes: npm.
- Server Components por padrão; "use client" só nos componentes com estado/interatividade no navegador.
- Mobile-first, com breakpoints customizados em 600px e 900px (ver seção 7).
- CTA principal sempre é um link para WhatsApp (wa.me) com mensagem contextual por seção, construído por uma
  função utilitária tipada a partir de um config central (lib/site-config.ts), com rel="noopener noreferrer".
- Fontes via next/font/google (Cormorant Garamond + Manrope); imagens via next/image com priority no Hero.
- Respeitar prefers-reduced-motion e acessibilidade (aria-*, foco visível, uso de Radix UI onde fizer sentido).
- Incluir robots.ts, sitemap.ts, manifest, favicons, not-found.tsx e error.tsx desde o início.
- Configurar ESLint + Prettier + Husky (lint/format no pre-commit). Testes automatizados e CI/CD ficam para
  uma fase futura — não são obrigatórios nesta primeira entrega.
- Incluir Google Analytics 4 e Meta Pixel via next/script, com IDs em variáveis de ambiente (nunca hardcoded),
  disparando evento de conversão a cada clique em um botão de WhatsApp.
- Depoimentos continuam fixos no código (content/testimonials.ts), sem integração com API do Google Places.
- Estrutura de pastas componentizada (app/, components/sections, components/ui, hooks/, lib/, content/).
- Deixar um único ponto de configuração (nome, WhatsApp, endereços, textos) fácil de editar.
```

---

## 13. Skill Impeccable (design QA para agentes de IA)

Ferramenta complementar (não substitui nada deste documento): [github.com/pbakaus/impeccable](https://github.com/pbakaus/impeccable). Audita/poli o código gerado por IA contra "cara de site feito por IA" (fontes genéricas, gradiente roxo-azul, cards dentro de cards, contraste ruim, etc.).

### Instalação (dentro do novo projeto Next.js)

```bash
npx impeccable install --providers=github
```

Isso instala `.github/skills/impeccable/` + o hook `.github/hooks/impeccable.json` para o GitHub Copilot.

### Setup inicial

No chat do Copilot (Agent mode), rodar:

```
/impeccable init
```

Quando perguntar o tipo de superfície, responder **"brand"** (marketing/landing) — não "product" — já que é uma landing page, não um app/dashboard. Isso grava `PRODUCT.md`/`DESIGN.md` no projeto.

### Uso ao longo do desenvolvimento

- `/impeccable critique` — revisão de UX (hierarquia, clareza) depois de montar as seções (seção 5 deste documento).
- `/impeccable audit` — checagem técnica (acessibilidade, performance, responsivo) depois da seção 6/7.
- `/impeccable polish` — passada final antes de publicar, alinhando tudo ao design system.
- `npx impeccable detect --json .` — versão **determinística e sem LLM** dos mesmos checks; pode ser rodada como um guard-rail automático a cada etapa do Ralph loop (junto com `npm run lint`/`npm run build`), sem custo de API.

---
