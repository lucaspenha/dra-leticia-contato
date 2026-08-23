// Conteúdo da seção Tratamentos (`#tratamentos`) — migrado do app de referência (Replit).
export const treatmentsSection = {
  eyebrow: "Tratamentos",
  title: "A beleza dos detalhes",
  titleEmphasis: "bem cuidados.",
  lead: "Cada indicação parte do seu rosto, da sua rotina e do resultado que você deseja sentir — não de uma fórmula pronta.",
};

export type Treatment = {
  number: string;
  title: string;
  description: string;
  whatsappContext: string;
};

export const treatments: Treatment[] = [
  {
    number: "01",
    title: "Botox",
    description: "Suavidade e leveza para a expressão, preservando cada movimento que é seu.",
    whatsappContext: "tratamentos:botox",
  },
  {
    number: "02",
    title: "Preenchimentos",
    description: "Contornos delicados e proporções equilibradas, sem excessos.",
    whatsappContext: "tratamentos:preenchimentos",
  },
  {
    number: "03",
    title: "Bioestimuladores de colágeno",
    description: "Um estímulo gradual para a pele recuperar firmeza e viço.",
    whatsappContext: "tratamentos:bioestimuladores-de-colageno",
  },
  {
    number: "04",
    title: "Lipo enzimática de papada",
    description: "Redefinição do contorno facial com cuidado e naturalidade.",
    whatsappContext: "tratamentos:lipo-enzimatica-de-papada",
  },
  {
    number: "05",
    title: "Skinbooster",
    description: "Hidratação profunda para uma pele luminosa, macia e saudável.",
    whatsappContext: "tratamentos:skinbooster",
  },
];
