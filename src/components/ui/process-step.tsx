type ProcessStepProps = {
  number: number;
  title: string;
  description: string;
};

/** Etapa numerada do processo (ver `.pstep` na seção 4). */
export function ProcessStep({ number, title, description }: ProcessStepProps) {
  return (
    <li className="flex gap-5">
      <span className="bg-green-grad font-display text-cream-50 shadow-soft flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-xl font-semibold">
        {number}
      </span>
      <div>
        <h3 className="font-display text-forest-900 text-xl font-semibold">{title}</h3>
        <p className="text-ink-500 mt-1">{description}</p>
      </div>
    </li>
  );
}
