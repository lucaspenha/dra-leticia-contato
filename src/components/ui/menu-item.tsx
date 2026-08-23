import { Plus } from "lucide-react";

import { buildWhatsappLink } from "@/lib/whatsapp";

type MenuItemProps = {
  index: string;
  title: string;
  description: string;
  whatsappContext: string;
};

/** Linha de menu editorial (índice · título · descrição · botão "+") para o cardápio de tratamentos. */
export function MenuItem({ index, title, description, whatsappContext }: MenuItemProps) {
  return (
    <li className="border-forest-700/20 grid grid-cols-[2.5rem_1fr] items-center gap-x-5 gap-y-2 border-b py-7 sm:grid-cols-[3rem_1fr_1fr_auto]">
      <span className="text-gold-600 font-mono text-[11px]">{index}</span>

      <h3 className="font-display text-forest-900 text-2xl font-semibold sm:col-start-2 sm:text-[42px]">
        {title}
      </h3>

      <p className="text-ink-500 col-span-2 max-w-[310px] text-[13px] leading-6 sm:col-span-1 sm:col-start-3">
        {description}
      </p>

      <a
        href={buildWhatsappLink(whatsappContext)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Saber mais sobre ${title}`}
        className="border-forest-700/25 text-forest-700 hover:border-forest-900 hover:bg-forest-900 hover:text-cream-50 ease-brand col-span-2 flex h-11 w-11 items-center justify-center justify-self-end rounded-full border transition-colors duration-300 sm:col-span-1 sm:col-start-4"
      >
        <Plus size={18} />
      </a>
    </li>
  );
}
