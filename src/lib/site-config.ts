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
  whatsappNumber: "5516997939679", // número único, compartilhado pelas 3 unidades
  defaultMessage: "Olá! Vim pelo site da Dra. Letícia Contato e gostaria de mais informações.",
  socials: {
    // TODO: pendente — confirmar usuário do Instagram com a cliente antes de publicar.
    instagram: "https://instagram.com/",
  },
  locations: [
    {
      id: "araxa",
      label: "Araxá – MG",
      address: "Av. Antônio Carlos, 286 — Centro, Araxá – MG · 38183-083",
      mapsQuery: "Av. Antônio Carlos, 286 - Centro, Araxá - MG, 38183-083",
      phone: "(16) 99793-9679",
    },
    {
      id: "perdizes",
      label: "Perdizes – MG",
      // TODO: pendente — CEP e telefone ainda não informados pela cliente.
      address: "Rua Antônio Tomé de Resende, 276",
      mapsQuery: "Rua Antônio Tomé de Resende, 276, Perdizes - MG",
    },
    {
      id: "ribeirao-preto",
      label: "Ribeirão Preto – SP",
      // TODO: pendente — número, CEP e telefone ainda não informados pela cliente.
      address: "Av. Antônio Diederichsen — Metropolitan Business Center",
      mapsQuery: "Av. Antônio Diederichsen, Metropolitan Business Center, Ribeirão Preto - SP",
    },
  ] satisfies Location[],
} as const;
