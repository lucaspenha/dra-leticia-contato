// Conteúdo da seção Procedimentos (`#procedimentos`) — 7 cards (seção 5.1).
export const procedimentosSection = {
  eyebrow: "Procedimentos",
  title: "Cada rosto é único —",
  titleEmphasis: "o seu tratamento também é.",
  lead: "Uma combinação de técnicas pensada para valorizar a sua individualidade, com resultados sutis e naturais.",
};

export type Procedure = {
  id: string;
  title: string;
  description: string;
  whatsappContext: string;
  featured?: boolean;
};

export const procedures: Procedure[] = [
  {
    id: "harmonizacao-facial",
    title: "Harmonização Facial Personalizada",
    description:
      "Um plano de tratamento único, combinando as técnicas certas para valorizar suas características — sem exageros.",
    whatsappContext: "procedimentos:harmonizacao-facial-personalizada",
    featured: true,
  },
  {
    id: "botox",
    title: "Toxina Botulínica (Botox)",
    description:
      "Suaviza rugas de expressão e previne novas marcas, mantendo a naturalidade dos movimentos do rosto.",
    whatsappContext: "procedimentos:botox",
  },
  {
    id: "preenchimento",
    title: "Preenchimento com Ácido Hialurônico",
    description:
      "Devolve volume e contorno em lábios, olheiras e outras regiões, com resultado natural e reversível.",
    whatsappContext: "procedimentos:preenchimento-acido-hialuronico",
  },
  {
    id: "bioestimuladores",
    title: "Bioestimuladores de Colágeno",
    description:
      "Estimulam a produção natural de colágeno, melhorando firmeza e qualidade da pele ao longo do tempo.",
    whatsappContext: "procedimentos:bioestimuladores-de-colageno",
  },
  {
    id: "lipo-papada",
    title: "Lipo de Papada Enzimática",
    description:
      "Reduz a gordura localizada na papada de forma não cirúrgica, definindo melhor o contorno mandibular.",
    whatsappContext: "procedimentos:lipo-de-papada-enzimatica",
  },
  {
    id: "skinbooster",
    title: "Skinbooster",
    description:
      "Hidratação profunda da pele, melhorando viço, textura e luminosidade de dentro para fora.",
    whatsappContext: "procedimentos:skinbooster",
  },
];
