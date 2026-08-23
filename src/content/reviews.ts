// Conteúdo da seção Depoimentos (`#depoimentos`) — migrado do app de referência (Replit).
export const reviewsSection = {
  eyebrow: "Quem já passou por aqui",
  title: "Palavras que",
  titleEmphasis: "ficam.",
  googleReviewsHref: "https://www.google.com/search?q=Dra+Leticia+Contato+Arax%C3%A1",
} as const;

export type Review = {
  name: string;
  text: string;
};

export const reviews: Review[] = [
  {
    name: "Mariana A.",
    text: "A consulta foi uma experiência muito acolhedora. A Dra. Letícia me ouviu de verdade e o resultado ficou exatamente como eu imaginei: sutil e lindo.",
  },
  {
    name: "Camila R.",
    text: "Saí me sentindo mais confiante, sem perder quem eu sou. O cuidado em cada detalhe faz toda a diferença.",
  },
  {
    name: "Juliana M.",
    text: "Profissional maravilhosa, mãos delicadas e um olhar muito atento. Já indiquei para as minhas amigas.",
  },
];
