# Prompt: Extração da Stack Tecnológica do Projeto

Percorra todo o projeto e identifique as tecnologias, ferramentas e
dependências utilizadas na construção do site. O objetivo é documentar
**o que existe hoje**, sem propor mudanças ou julgar decisões técnicas.

## O que procurar

- **Linguagem(ns) principal(is)**
  - Ex: JavaScript, TypeScript, PHP, Python, etc.

- **Framework/Biblioteca principal**
  - Ex: Next.js, React, Vue, Nuxt, Angular, WordPress, Laravel, etc.
  - Versão utilizada (verificar `package.json`, `composer.json`, etc.)

- **Gerenciador de pacotes**
  - Ex: npm, yarn, pnpm, composer

- **Estilização**
  - Ex: Tailwind CSS, Styled Components, SASS/SCSS, CSS Modules, Bootstrap

- **Gerenciamento de estado** (se houver)
  - Ex: Redux, Zustand, Context API, Pinia

- **Roteamento**
  - Ex: App Router, Pages Router, React Router, Vue Router

- **Backend / API**
  - Ex: API Routes, Node/Express, headless CMS (Strapi, Contentful, Sanity, WordPress), REST, GraphQL

- **Banco de dados** (se aplicável)
  - Ex: PostgreSQL, MySQL, MongoDB, SQLite, Firebase

- **CMS / Fonte de conteúdo**
  - Ex: conteúdo hardcoded, Markdown local, headless CMS, planilha, JSON estático

- **Autenticação** (se houver)
  - Ex: NextAuth, Auth0, Firebase Auth, JWT customizado

- **Hospedagem / Deploy**
  - Ex: Vercel, Netlify, GitHub Pages, servidor próprio (verificar configs como `vercel.json`, `netlify.toml`, workflows de CI/CD)

- **Testes**
  - Ex: Jest, Vitest, Cypress, Playwright, Testing Library

- **Ferramentas de qualidade de código**
  - Ex: ESLint, Prettier, Husky, lint-staged, TypeScript strict mode

- **Build e bundler**
  - Ex: Webpack, Vite, Turbopack, esbuild

- **Bibliotecas de terceiros relevantes**
  - Ex: animações (Framer Motion, GSAP), formulários (React Hook Form, Formik), ícones (Lucide, Font Awesome), analytics (Google Analytics, Plausible)

- **Integrações externas**
  - Ex: pagamento, e-mail (SendGrid, Resend), chat, mapas, redes sociais

- **Versão do Node/runtime** (se especificada, ex: `.nvmrc`, `engines` no `package.json`)

## Onde procurar

- `package.json`, `package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`
- `composer.json` (se PHP)
- Arquivos de configuração na raiz (`next.config.js`, `vite.config.ts`, `tailwind.config.js`, `tsconfig.json`, etc.)
- Pasta `.github/workflows/` (CI/CD)
- Arquivos de deploy (`vercel.json`, `netlify.toml`, `Dockerfile`)
- Estrutura de pastas do projeto (indica padrões de arquitetura, ex: `app/`, `pages/`, `src/`)
- Arquivos `.env.example` (indicam integrações/serviços usados, sem expor valores sensíveis)

## O que NÃO incluir

- Conteúdo textual do site
- Identidade visual/design tokens (tratados em outro levantamento)
- Valores reais de variáveis de ambiente/segredos — apenas os **nomes** das chaves, se ajudar a identificar integrações

## Resumo da stack

Após o levantamento, escreva um resumo respondendo:

- **Qual a arquitetura geral do projeto?** (ex: SPA, SSR, SSG, JAMstack, monolito)
- **A stack está atualizada?** (versões desatualizadas, dependências descontinuadas)
- **Há dependências não utilizadas ou redundantes** aparentes?
- **Nível de complexidade da stack** (simples, moderada, complexa)
- **Pontos de atenção** para uma futura migração ou reescrita (ex: dependência de CMS proprietário, lock-in de hospedagem)

## Formato de saída

Gere um arquivo `stack-atual.md` assim:
