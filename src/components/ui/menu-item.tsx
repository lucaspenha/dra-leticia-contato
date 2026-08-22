import { ArrowUpRight } from "lucide-react";

import { buildWhatsappLink } from "@/lib/whatsapp";

type MenuItemProps = {
  index: string;
  title: string;
  description: string;
  whatsappContext: string;
};

/** Linha de menu editorial (índice · título · descrição · link) para o cardápio de tratamentos. */
export function MenuItem({ index, title, description, whatsappContext }: MenuItemProps) {
  return (
    <li className="border-cream-200 group grid grid-cols-[2.5rem_1fr] items-baseline gap-x-5 gap-y-2 border-b py-7 sm:grid-cols-[3rem_1fr_auto]">
      <span className="font-display text-gold-600 text-lg italic">{index}</span>

      <h3 className="font-display text-forest-900 text-2xl font-semibold sm:col-start-2">
        {title}
      </h3>

      <p className="text-ink-500 col-span-2 text-base leading-relaxed sm:col-span-1 sm:col-start-2 sm:max-w-lg">
        {description}
      </p>

      <a
        href={buildWhatsappLink(whatsappContext)}
        target="_blank"
        rel="noopener noreferrer"
        className="text-forest-700 col-span-2 inline-flex items-center gap-1.5 text-sm font-semibold whitespace-nowrap transition-colors group-hover:text-green-600 sm:col-span-1 sm:col-start-3 sm:row-span-2 sm:row-start-1 sm:self-center sm:justify-self-end"
      >
        Saiba mais
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden
        />
      </a>
    </li>
  );
}
