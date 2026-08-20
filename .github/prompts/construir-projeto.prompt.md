---
description: "Constrói do zero o novo projeto Next.js da landing page da Dra. Letícia Contato, seguindo o design system e o checklist técnico documentados."
agent: "agent"
---
Leia o arquivo [docs/prompt-novo-projeto.md](../../docs/prompt-novo-projeto.md) inteiro (seções 1 a 13: objetivo, stack, design tokens, componentes, estrutura da página, comportamento/interatividade, responsividade, SEO, assets, checklist técnico e skill Impeccable).

Atue como um agente autônomo e execute o projeto INTEIRO seguindo exatamente esta ordem, sem pular etapas e sem esperar confirmação manual entre elas (só pare se um erro de build/lint não for resolvido automaticamente após tentativas razoáveis):

1. Scaffold do projeto Next.js (App Router) + TypeScript + Tailwind CSS, usando npm (seção 2).
2. Configurar `tailwind.config.ts` com os design tokens da seção 3 (cores, radius, shadows, breakpoints customizados 600px/900px, fontes via next/font).
3. Criar os componentes de UI reutilizáveis da seção 4 (botão, card, eyebrow, badge, carrossel, FAQ, etc.).
4. Montar todas as seções da página (seção 5), com o conteúdo completo já documentado (não usar texto placeholder tipo "lorem ipsum" — usar os textos reais do documento).
5. Implementar o comportamento/interatividade da seção 6 (config central multi-unidade, links de WhatsApp, reveal on scroll, carrossel infinito de depoimentos, acordeão de FAQ, mapa com seletor de unidade).
6. Aplicar o checklist técnico da seção 11 (rotas robots/sitemap/manifest, next.config com headers de segurança, rel="noopener noreferrer", performance/Core Web Vitals, GA4 + Meta Pixel via variáveis de ambiente).
7. Instalar e configurar a skill Impeccable (seção 13):
   a. Rodar `npx impeccable install --providers=github` no terminal do projeto.
   b. Ler o arquivo gerado `.github/skills/impeccable/SKILL.md` e seguir por conta própria o fluxo de "init" descrito nele, respondendo que a superfície é **"brand"** (marketing/landing) — sem esperar o usuário digitar um slash command manualmente.
   c. Repetir a leitura/execução das instruções de `critique` (após o passo 4), `audit` (após o passo 6) e `polish` (como última etapa, antes de considerar o projeto pronto), sempre a partir do que estiver documentado no SKILL.md instalado.
8. Ao final de CADA etapa (1 a 7): rodar `npm run lint && npm run build` e, se o CLI do Impeccable já estiver instalado, também `npx impeccable detect --json .`, como guard-rail automático. Só avançar para a próxima etapa se tudo passar; se falhar, corrigir antes de continuar. Fazer um commit git ao final de cada etapa concluída com sucesso, com mensagem descrevendo a etapa (padrão "Ralph loop": qualquer nova sessão deve conseguir olhar o histórico de commits/estado do repositório e continuar de onde parou, sem depender da memória desta conversa).
9. Ao terminar, rodar `git log --oneline` e apresentar um resumo do que foi feito em cada etapa, junto com os pontos que ficaram pendentes (seção 10 do documento: dados de Perdizes/Ribeirão Preto, usuário do Instagram, fotos a substituir, decisão sobre banner de cookies/LGPD).
