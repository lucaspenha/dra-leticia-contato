"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

type FaqItemData = {
  question: string;
  answer: string;
};

/**
 * FAQ como uma sequência de trocas reais: cada pergunta abre como bolha de
 * mensagem recebida; a resposta aparece como a réplica da Dra. Letícia logo abaixo.
 */
export function FaqAccordion({ items }: { items: FaqItemData[] }) {
  return (
    <Accordion.Root type="single" collapsible className="flex flex-col gap-3">
      {items.map((item, index) => (
        <Accordion.Item
          key={item.question}
          value={`item-${index}`}
          className="border-cream-200 bg-cream-50 rounded-brand-sm border"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group font-display text-forest-900 hover:text-forest-700 flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-lg font-semibold transition-colors">
              {item.question}
              <Plus
                aria-hidden
                className="text-gold-600 ease-brand h-5 w-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="text-ink-500 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
            <div className="border-cream-200 mx-4 mb-4 rounded-[14px] rounded-tl-sm border-t px-5 pt-4">
              <p className="leading-relaxed">{item.answer}</p>
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
