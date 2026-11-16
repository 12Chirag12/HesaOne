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
    <div className="faq-accordion-container">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={item.q}
            className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
          >
            <button
              type="button"
              className="faq-question-btn"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
            >
              <span className="faq-question-text">
                <span className="faq-num">0{index + 1}</span>
                {item.q}
              </span>
              <ChevronDown
                size={18}
                className={`faq-arrow ${isOpen ? "rotated" : ""}`}
              />
            </button>
            {isOpen && (
              <div className="faq-answer-panel">
                <p>{item.a}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
