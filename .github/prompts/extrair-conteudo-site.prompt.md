# Prompt: Extração de conteúdo do site

Percorra todo o projeto e extraia **apenas o conteúdo** apresentado ao
usuário final em cada página do site (ignore código, lógica, estilos e
configurações — foque no que é lido/visto por quem visita o site).

## O que extrair, por página/seção

- **Nome/identificação da página** (ex: Home, Sobre, Contato, Serviços)
- **Títulos e subtítulos**
- **Textos principais** (parágrafos, descrições, chamadas)
- **Botões e CTAs** (texto exibido)
- **Listas** (benefícios, diferenciais, serviços, etc.)
- **Depoimentos/testemunhos**, se houver
- **Perguntas frequentes (FAQ)**, se houver
- **Textos de formulários** (labels, placeholders, mensagens)
- **Rodapé** (textos institucionais, contatos, links de navegação)
- **Imagens usadas como conteúdo** (apenas descrição do que mostram, não o arquivo técnico)

## O que NÃO incluir

- Código, componentes, arquivos técnicos, nomes de variáveis
- Estilos, layout, cores, estrutura de pastas
- Configurações de build/SEO técnico (a menos que seja texto visível ao usuário)

## Análise do foco do conteúdo

Depois de levantar o conteúdo de todas as páginas, analise o material como um
todo e escreva um resumo respondendo:

- **Qual o objetivo principal do site?** (ex: vender um serviço, gerar leads, institucional, portfólio, e-commerce)
- **Quem parece ser o público-alvo?** (com base no tom de voz e nos temas abordados)
- **Qual a mensagem/proposta de valor central** que se repete ou é destacada?
- **Quais são os principais temas/tópicos** abordados no conteúdo (ex: preço, confiança, urgência, autoridade, suporte)
- **Qual o tom de voz predominante?** (formal, casual, técnico, comercial, institucional)
- **Quais CTAs se destacam** e para onde elas direcionam o usuário (ex: contato, compra, cadastro)
- **Lacunas ou inconsistências percebidas** (conteúdo desatualizado, repetitivo, sem foco claro, etc.)

## Formato de saída

Gere um arquivo `conteudo-site.md` assim:
