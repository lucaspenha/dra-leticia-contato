"use client";

import * as Accordion from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

type FaqItemData = {
  question: string;
  answer: string;
};

/** Acordeão de FAQ acessível (Radix), com ícone "+" que gira para "×". */
export function FaqAccordion({ items }: { items: FaqItemData[] }) {
  return (
    <Accordion.Root type="single" collapsible className="divide-forest-line flex flex-col divide-y">
      {items.map((item, index) => (
        <Accordion.Item key={item.question} value={`item-${index}`} className="py-2">
          <Accordion.Header>
            <Accordion.Trigger className="group font-display text-forest-900 hover:text-forest-700 flex w-full items-center justify-between gap-4 py-4 text-left text-lg font-semibold transition-colors">
              {item.question}
              <Plus
                aria-hidden
                className="text-gold-600 ease-brand h-5 w-5 shrink-0 transition-transform duration-300 group-data-[state=open]:rotate-45"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="text-ink-500 data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden">
            <p className="pb-4 leading-relaxed">{item.answer}</p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
