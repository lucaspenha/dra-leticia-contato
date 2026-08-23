// Config central do site — única fonte de verdade para WhatsApp, unidades e redes sociais.
// Não hardcodear esses dados em componentes; sempre importar deste arquivo.

export type Location = {
  id: string;
  label: string;
  address: string;
  mapsQuery: string;
  phone?: string;
};

export const siteConfig = {
  // TODO: dados de demonstração migrados do repo de referência (Replit) —
  // substituir por número/mensagem reais da cliente antes de publicar.
  whatsappNumber: "5516999998877",
  defaultMessage: "Olá, gostaria de agendar uma consulta com a Dra. Letícia.",
  socials: {
    instagram: "https://instagram.com/",
  },
  locations: [
    {
      id: "araxa",
      label: "Araxá",
      address: "Rua Presidente Olegário Maciel, 198",
      mapsQuery: "Rua Presidente Olegário Maciel, 198, Araxá - MG",
    },
    {
      id: "perdizes",
      label: "Perdizes",
      address: "Rua Cardoso de Almeida, 1.620",
      mapsQuery: "Rua Cardoso de Almeida, 1620, Perdizes, São Paulo - SP",
    },
    {
      id: "ribeirao-preto",
      label: "Ribeirão Preto",
      address: "Av. Independência, 2.890",
      mapsQuery: "Av. Independência, 2890, Ribeirão Preto - SP",
    },
  ] satisfies Location[],
} as const;
