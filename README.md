# Dra. Letícia Contato — Landing Page

Landing page one-page para a Dra. Letícia Contato (Odontologia & Harmonização Facial), com unidades em
Araxá–MG, Perdizes–MG e Ribeirão Preto–SP.

Especificação completa (design system, conteúdo, comportamento, checklist técnico):
[docs/prompt-novo-projeto.md](docs/prompt-novo-projeto.md).

## Stack

- Next.js (App Router) + TypeScript estrito + Tailwind CSS
- npm como gerenciador de pacotes

## Desenvolvimento

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000)

## Checagens antes de cada commit/push

```bash
npm run lint && npm run build
```

## Variáveis de ambiente

Ver [.env.example](.env.example). Copie para `.env.local` e preencha os IDs de analytics (GA4, Meta Pixel).

## Deploy

Vercel, via integração Git (push na branch principal = deploy de produção).
