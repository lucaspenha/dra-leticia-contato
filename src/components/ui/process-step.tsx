type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
};

/** Etapa numerada em formato editorial (numeral serifado + regra dourada no topo). */
export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <li className="border-gold-500/40 flex flex-col gap-3 border-t pt-6 md:h-full">
      <span className="font-display text-gold-600 text-4xl font-medium italic">
        {String(number).padStart(2, "0")}
      </span>
      <h3 className="font-display text-forest-900 text-xl font-semibold">{title}</h3>
      <p className="text-ink-500">{description}</p>
    </li>
  );
}
