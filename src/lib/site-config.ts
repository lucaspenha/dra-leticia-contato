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
      address: "Rua Santos Dumont, 35, salas 1, 2 e 3",
      mapsQuery: "Rua Santos Dumont, 35, Araxá - MG",
    },
    {
      id: "perdizes",
      label: "Perdizes",
      address: "Rua Antônio Tomé de Resende, 276",
      mapsQuery: "Rua Antônio Tomé de Resende, 276, Perdizes, São Paulo - SP",
    },
    {
      id: "ribeirao-preto",
      label: "Ribeirão Preto",
      address: "Av. Antônio Diederichsen, 400",
      mapsQuery: "Av. Antônio Diederichsen, 400, Ribeirão Preto - SP",
    },
  ] satisfies Location[],
} as const;
