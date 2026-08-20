// Conteúdo da seção Galeria/Resultados (`#resultados`) — 6 cards (seção 5.1).
export const resultadosSection = {
  eyebrow: "Antes & Depois",
  title: "Resultados que respeitam",
  titleEmphasis: "quem você é.",
  lead: "Uma amostra de procedimentos realizados no consultório — sempre com sutileza e naturalidade.",
  footnote: "Resultados variam de pessoa para pessoa e são avaliados individualmente em consulta.",
};

export type GalleryItem = {
  id: string;
  title: string;
  label: string;
  image: { src: string; alt: string };
  pair?: { src: string; alt: string };
};

export const galleryItems: GalleryItem[] = [
  {
    id: "preenchimento-labial",
    title: "Preenchimento Labial",
    label: "Antes & depois",
    image: {
      src: "/images/resultado-preenchimento-labial.png",
      alt: "Resultado de preenchimento labial",
    },
  },
  {
    id: "harmonizacao-perfil",
    title: "Harmonização de Perfil",
    label: "Antes & depois",
    image: {
      src: "/images/resultado-harmonizacao-perfil.png",
      alt: "Resultado de harmonização de perfil",
    },
  },
  {
    id: "lipo-papada",
    title: "Lipo de Papada Enzimática",
    label: "Antes & depois",
    image: {
      src: "/images/resultado-lipo-papada-antes.png",
      alt: "Antes da lipo de papada enzimática",
    },
    pair: {
      src: "/images/resultado-lipo-papada-depois.png",
      alt: "Depois da lipo de papada enzimática",
    },
  },
  {
    id: "nariz-labios",
    title: "Harmonização Nariz & Lábios",
    label: "Antes & depois",
    image: {
      src: "/images/resultado-nariz-labios.png",
      alt: "Resultado de harmonização de nariz e lábios",
    },
  },
  {
    id: "contorno-mandibular",
    title: "Contorno Mandibular",
    label: "Antes & depois",
    image: {
      src: "/images/resultado-contorno-mandibular.png",
      alt: "Resultado de contorno mandibular",
    },
  },
  {
    id: "botox-testa",
    title: "Botox — Rugas de Expressão",
    label: "Antes & depois",
    image: {
      src: "/images/resultado-botox-testa.png",
      alt: "Resultado de botox em rugas de expressão",
    },
  },
];
