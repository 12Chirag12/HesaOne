"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            className={`border rounded-xl transition-all duration-200 overflow-hidden ${
              isOpen
                ? "bg-white border-sky-400 shadow-sm ring-1 ring-sky-200/50"
                : "bg-white border-slate-200 hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 transition-colors"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3.5">
                <span className="font-mono text-xs font-bold text-sky-600 shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-semibold text-sm sm:text-base text-slate-900 leading-snug">
                  {item.q}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-sky-600" : ""
                }`}
              />
            </button>
            {isOpen && (
              <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
