"use client";

import { useState, ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  title: string;
  content: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  variant?: "light" | "dark";
}

export default function Accordion({ items, allowMultiple = false, variant = "light" }: AccordionProps) {
  const isDark = variant === "dark";
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set());

  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        if (!allowMultiple) next.clear();
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={`divide-y ${isDark ? "divide-cream/20" : "divide-sand"}`}>
      {items.map((item, index) => {
        const isOpen = openIndices.has(index);
        return (
          <div key={index}>
            <button
              onClick={() => toggle(index)}
              className={`w-full flex items-center justify-between py-5 text-left font-sans font-semibold text-lg transition-colors ${isDark ? "text-cream hover:text-copper-light" : "text-charcoal hover:text-river"}`}
              aria-expanded={isOpen}
            >
              <span>{item.title}</span>
              <ChevronDown
                size={20}
                className={`${isDark ? "text-cream/60" : "text-sage"} shrink-0 ml-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-in-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <div className={`pb-6 font-sans leading-relaxed ${isDark ? "text-cream/80" : "text-charcoal/80"}`}>
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
