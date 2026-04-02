'use client';

import { useState, useCallback } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = useCallback((index: number) => {
    setExpandedFaq(prev => prev === index ? null : index);
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} role="list">
      {items.map((item, index) => (
        <div
          key={index}
          role="listitem"
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            overflow: 'hidden',
            transition: 'border-color 0.2s',
          }}
        >
          <button
            onClick={() => toggleFaq(index)}
            aria-expanded={expandedFaq === index}
            aria-controls={`faq-answer-${index}`}
            id={`faq-question-${index}`}
            style={{
              width: '100%',
              padding: '1.25rem',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              outline: 'none',
              borderRadius: '8px',
            }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = '0 0 0 2px #6366f1';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'none';
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: '#e6edf3',
                margin: 0,
                paddingRight: '1rem',
              }}
            >
              {item.question}
            </h3>
            <span
              style={{
                color: '#58a6ff',
                fontSize: '1.25rem',
                flexShrink: 0,
                transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
              aria-hidden="true"
            >
              ▼
            </span>
          </button>

          {expandedFaq === index && (
            <div
              id={`faq-answer-${index}`}
              role="region"
              aria-labelledby={`faq-question-${index}`}
              style={{
                padding: '0 1.25rem 1.25rem',
                borderTop: '1px solid #30363d',
              }}
            >
              <p
                style={{
                  color: '#8b949e',
                  lineHeight: 1.8,
                  margin: '1rem 0 0',
                }}
              >
                {item.answer}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
