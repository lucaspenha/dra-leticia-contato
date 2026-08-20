// Conteúdo da seção Como funciona (`#como-funciona`) — 4 etapas (seção 5.1).
export const comoFuncionaSection = {
  eyebrow: "Como funciona",
  title: "Um caminho pensado",
  titleEmphasis: "para você se sentir segura.",
  lead: "Um bom papo, um plano claro e nenhuma pressa — para você entender tudo o que será feito.",
  ctaLabel: "Quero avaliar o meu caso",
  whatsappContext: "como-funciona:avaliar-meu-caso",
};

export type ProcessStepItem = {
  number: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStepItem[] = [
  {
    number: 1,
    title: "Conversa & escuta ativa",
    description:
      "Entendemos suas vontades, expectativas e o que te incomoda — sem pressa, no seu tempo.",
  },
  {
    number: 2,
    title: "Avaliação facial detalhada",
    description:
      "Uma análise técnica do seu rosto, identificando o que realmente vai valorizar sua beleza natural.",
  },
  {
    number: 3,
    title: "Plano sob medida",
    description:
      "Um plano de tratamento individualizado, explicado com clareza antes de qualquer procedimento.",
  },
  {
    number: 4,
    title: "Acompanhamento contínuo",
    description:
      "Retornos e ajustes ao longo do processo, garantindo que o resultado continue natural e seguro.",
  },
];
