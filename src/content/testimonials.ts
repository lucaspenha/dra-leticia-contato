// Depoimentos reais da cliente (Google) — fixos no código, sem integração com API (seção 11.9).
// Não gerar depoimentos fictícios além dos 7 já documentados na seção 5.1.
//
// ⚠️ PENDÊNCIA: o documento de especificação lista apenas nome/quantidade de
// avaliações/tempo para estes 7 depoimentos — o texto da citação de cada um
// não foi fornecido. O campo `text` abaixo é um placeholder e PRECISA ser
// substituído pelo texto real de cada avaliação (copiado do Google) antes
// de publicar. Não inventar opiniões atribuídas a essas pessoas reais.
export type Testimonial = {
  name: string;
  reviewCount: string;
  timeAgo: string;
  text: string;
};

const PLACEHOLDER_TEXT =
  "[Pendente: colar aqui o texto real desta avaliação do Google antes de publicar.]";

export const testimonials: Testimonial[] = [
  {
    name: "Letícia Maria",
    reviewCount: "12 avaliações",
    timeAgo: "há 2 meses",
    text: PLACEHOLDER_TEXT,
  },
  {
    name: "Smart Canal",
    reviewCount: "8 avaliações",
    timeAgo: "há 3 meses",
    text: PLACEHOLDER_TEXT,
  },
  {
    name: "Carol Gladstone",
    reviewCount: "5 avaliações",
    timeAgo: "há 4 meses",
    text: PLACEHOLDER_TEXT,
  },
  {
    name: "Lais Bartalini",
    reviewCount: "9 avaliações",
    timeAgo: "há 5 meses",
    text: PLACEHOLDER_TEXT,
  },
  {
    name: "Aline Silva",
    reviewCount: "3 avaliações",
    timeAgo: "há 6 meses",
    text: PLACEHOLDER_TEXT,
  },
  {
    name: "Alessandra Diniz",
    reviewCount: "15 avaliações",
    timeAgo: "há 7 meses",
    text: PLACEHOLDER_TEXT,
  },
  {
    name: "João Vitor Martins",
    reviewCount: "4 avaliações",
    timeAgo: "há 8 meses",
    text: PLACEHOLDER_TEXT,
  },
];
