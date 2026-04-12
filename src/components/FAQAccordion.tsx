'use client';

import { useState } from 'react';

// ── Interfaces ──────────────────────────────────────────
interface FAQItem {
  id?: string;
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQItem[];
  /** Heading text above the FAQ list */
  heading?: string;
}

// ── Component ───────────────────────────────────────────
export default function FAQAccordion({ faqs, heading = 'Frequently Asked Questions' }: FAQAccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="space-y-4">
      <h2 className="text-3xl font-bold text-[#e6edf3]">{heading}</h2>

      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <div
            key={faq.id ?? idx}
            className="bg-[#161b22] border border-[#30363d] rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setExpandedIndex(expandedIndex === idx ? null : idx)}
              className="w-full text-left px-6 py-4 hover:bg-[#0d1117] transition-colors flex items-center justify-between"
              aria-expanded={expandedIndex === idx}
            >
              <span className="font-semibold text-[#e6edf3]">{faq.question}</span>
              <span
                className="text-[#58a6ff] transition-transform"
                style={{
                  transform: expandedIndex === idx ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
                aria-hidden="true"
              >
                ▼
              </span>
            </button>

            {expandedIndex === idx && (
              <div className="px-6 py-4 border-t border-[#30363d] bg-[#0d1117]">
                <p className="text-[#c9d1d9] leading-relaxed text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
