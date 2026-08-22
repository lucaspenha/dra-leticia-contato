// Conteúdo da seção Como funciona (`#como-funciona`) — capítulo 04 da trilha narrativa.
export const comoFuncionaSection = {
  title: "Da primeira mensagem",
  titleEmphasis: "ao resultado que é só seu.",
  lead: "Quatro etapas, sempre nessa ordem, sempre no seu tempo — para você chegar ao consultório já sabendo exatamente o que esperar.",
  ctaLabel: "Começar pelo capítulo 1",
  whatsappContext: "como-funciona:comecar-avaliacao",
};

export type ProcessStepItem = {
  number: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStepItem[] = [
  {
    number: 1,
    title: "Você chama no WhatsApp",
    description:
      "Conta o que te incomoda e o que gostaria de mudar — a Dra. Letícia responde pessoalmente, sem roteiro pronto.",
  },
  {
    number: 2,
    title: "Avaliação presencial",
    description:
      "Um exame detalhado do seu rosto, ouvindo suas referências antes de sugerir qualquer técnica.",
  },
  {
    number: 3,
    title: "Plano explicado em detalhe",
    description:
      "Você entende cada procedimento sugerido, o porquê dele e o que esperar — antes de decidir seguir.",
  },
  {
    number: 4,
    title: "Resultado acompanhado",
    description:
      "Retornos combinados com você para ajustar o que for preciso, mantendo a naturalidade a cada etapa.",
  },
];
