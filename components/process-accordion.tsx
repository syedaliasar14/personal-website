"use client";

import { useState } from "react";
import { ChevronDown, type LucideIcon } from "lucide-react";

type ProcessAccordionItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

type ProcessAccordionProps = {
  items: ProcessAccordionItem[];
  dark?: boolean;
};

export default function ProcessAccordion({ items, dark }: ProcessAccordionProps) {
  const [openItems, setOpenItems] = useState<number[]>([]);

  function toggleItem(index: number) {
    setOpenItems((currentItems) =>
      currentItems.includes(index)
        ? currentItems.filter((itemIndex) => itemIndex !== index)
        : [...currentItems, index]
    );
  }

  return (
    <div className={`mt-8 grid border border-slate-300 rounded-[1.75rem] ${dark ? "bg-slate-900 text-foreground" : "bg-gray-100/50 text-background"}`}>
      {items.map((item, index) => {
        const isOpen = openItems.includes(index);
        const ItemIcon = item.icon;

        return (
          <article key={item.title}
            className={`overflow-hidden border ${dark ? "border-slate-700 hover:border-green-300/40" : "border-slate-200/80 hover:border-green-500/70"} transition-colors duration-300 first:rounded-t-[1.75rem] last:rounded-b-[1.75rem]`}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left md:px-7"
              aria-expanded={isOpen}
            >
              <div className="flex flex-col items-start">
                <p className={`text-sm uppercase tracking-[0.24em] flex ${dark ? "text-green-300" : "text-green-600"} items-center gap-3`}>
                  {ItemIcon && (
                    <ItemIcon size={20} strokeWidth={1.75} className="flex-shrink-0" />
                  )}
                  Step {index + 1}</p>
                <h3 className="mt-3 text-2xl font-semibold md:text-3xl">
                  {item.title}</h3>
              </div>
              <ChevronDown
                size={20}
                strokeWidth={1.75}
                className={`shrink-0 ${dark ? "text-green-300" : "text-green-600"} transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
              />
            </button>

            <div className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <div className={`px-6 py-5 transition-opacity duration-200 md:px-7 ${dark ? "bg-slate-950" : "bg-gray-200/50"} ${isOpen ? "opacity-100" : "opacity-0"}`}>
                  <p className="leading-7">{item.description}</p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}