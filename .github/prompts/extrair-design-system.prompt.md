# Prompt: Extração da Identidade Visual / Design System

Percorra todo o projeto e extraia as informações que compõem a identidade
visual e o design system (design tokens) atual do site. O objetivo é
documentar **o que existe hoje**, sem julgar qualidade ou propor mudanças.

## O que procurar

Analise arquivos de estilo, temas, configurações de UI e componentes para
identificar:

- **Cores**
  - Paleta primária, secundária e neutra
  - Cores de estado (sucesso, erro, alerta, informação)
  - Cores de fundo, texto, bordas
  - Valores em hex/rgb/hsl e nome/variável usada (ex: `--color-primary`, `$brand-blue`)

- **Tipografia**
  - Famílias de fonte usadas (headings, corpo, botões)
  - Pesos (regular, medium, bold, etc.)
  - Escala de tamanhos (ex: h1, h2, body, small)
  - Line-height e letter-spacing, se definidos

- **Espaçamento e Grid**
  - Escala de espaçamento (ex: 4px, 8px, 16px, 24px...)
  - Sistema de grid/colunas
  - Breakpoints responsivos definidos

- **Bordas e Sombras**
  - Border-radius usados
  - Box-shadows / elevações definidas

- **Componentes visuais padronizados**
  - Botões (variações: primário, secundário, outline, disabled)
  - Inputs e formulários (estados: normal, foco, erro)
  - Cards, badges, tags, tooltips
  - Ícones (biblioteca usada, estilo — outline/filled)

- **Logotipo e imagens de marca**
  - Caminho dos arquivos de logo (variações: colorido, mono, ícone)
  - Uso de favicon, imagens institucionais recorrentes

- **Animações e transições**
  - Durações e easings padronizados, se existirem

## Onde procurar

- Arquivos de tema/tokens (ex: `theme.js`, `tokens.json`, `tailwind.config.js`, `variables.css`, `_variables.scss`)
- Bibliotecas de componentes (ex: `components/ui/`, `design-system/`, Storybook configs)
- Arquivos globais de estilo (ex: `globals.css`, `styles/`)
- Configurações de frameworks de UI (Material UI, Chakra, Tailwind, Bootstrap customizado, etc.)
- Pasta de assets de marca (ex: `public/logo`, `assets/brand`)

## O que NÃO incluir

- Lógica de componentes (funções, hooks, estado)
- Conteúdo textual do site (isso é tratado em outro levantamento)
- Configurações de build não relacionadas a estilo

## Resumo de identidade visual

Após levantar os tokens, escreva um resumo respondendo:

- **Qual estilo visual predominante?** (minimalista, corporativo, vibrante, tech, etc.)
- **Existe consistência entre os tokens usados**, ou há valores soltos/hardcoded fora do sistema?
- **O projeto usa algum framework/lib de design system** (Tailwind, Material UI, Chakra, design tokens customizados)?
- **Nível de maturidade do design system** (inexistente, parcial, bem estruturado)

## Formato de saída

Gere um arquivo `design-system-atual.md` assim:
