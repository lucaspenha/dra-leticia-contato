// Capítulos da trilha narrativa (rail fixa / barra de progresso mobile) —
// espelham a ordem real das seções da página, do início ao FAQ.
export type Chapter = {
  number: string;
  id: string;
  label: string;
};

export const chapters: Chapter[] = [
  { number: "01", id: "inicio", label: "Início" },
  { number: "02", id: "procedimentos", label: "Procedimentos" },
  { number: "03", id: "resultados", label: "Resultados" },
  { number: "04", id: "como-funciona", label: "Como funciona" },
  { number: "05", id: "sobre", label: "A Dra. Letícia" },
  { number: "06", id: "depoimentos", label: "Depoimentos" },
  { number: "07", id: "localizacao", label: "Unidades" },
  { number: "08", id: "faq", label: "Dúvidas" },
];
