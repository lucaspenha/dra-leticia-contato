## Objetivo

Migrar o conteúdo em React do repositório `https://github.com/lucaspenha/dra-leticia-contato-replit.git`, especificamente a pasta `artifacts/dra-leticia-contato`, para este projeto Next.js que já existe na raiz deste repositório, substituindo o conteúdo atual pelo novo.

## Contexto importante

- Já estou em uma branch nova criada para esta tarefa.
- **Todo o conteúdo atual do projeto (na raiz) pode ser descartado/sobrescrito** para dar lugar à nova implementação baseada no repositório de origem. Não é necessário preservar componentes, páginas ou estilos existentes, a menos que sejam arquivos de configuração essenciais do projeto (ex.: `next.config.js`, `tsconfig.json`, `package.json` base) que devem ser adaptados em vez de removidos.
- Não é necessário abrir Pull Request — as alterações serão commitadas e revisadas localmente.

## Passos esperados

1. Clonar/baixar o conteúdo do repositório `lucaspenha/dra-leticia-contato-replit`.
2. Localizar a pasta `artifacts/dra-leticia-contato` dentro dele.
3. Analisar a estrutura do projeto React (componentes, estilos, assets, rotas, dependências no `package.json`, etc.).
4. Remover/limpar o conteúdo atual do projeto Next.js que será substituído (páginas, componentes, estilos antigos), mantendo apenas arquivos de configuração essenciais do projeto quando fizer sentido reaproveitá-los.
5. Adaptar todo o conteúdo migrado para as convenções do Next.js:
   - Converter componentes React soltos para o padrão de páginas/rotas do Next.js (`app/` ou `pages/`, conforme a estrutura já usada no projeto).
   - Ajustar imports, roteamento (ex.: `react-router-dom` -> `next/link` / `next/navigation`).
   - Adaptar chamadas de assets estáticos (imagens, fontes, CSS) para o padrão do Next.js (`public/`, `next/image`, etc.).
   - Unificar/instalar as dependências necessárias no `package.json` do projeto atual, evitando duplicidade com dependências já existentes.
   - Ajustar variáveis de ambiente, se houver.
6. Garantir que o build (`next build`) funcione sem erros após a migração.
7. Não trazer arquivos de configuração específicos do Replit que não fazem sentido no novo projeto (ex.: `.replit`, `replit.nix`).

## Observações

- Priorizar a estrutura de pastas e convenções já usadas no projeto Next.js atual.
- Preservar o design/funcionalidade original do conteúdo migrado o máximo possível.
- Não abrir Pull Request — as alterações ficarão na branch local já criada.
