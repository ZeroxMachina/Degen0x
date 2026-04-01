'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      {items.map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => toggleFaq(index)}
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
            }}
          >
            <h3
              style={{
                fontSize: '1.05rem',
                fontWeight: 600,
                color: '#e6edf3',
                margin: 0,
              }}
            >
              {item.question}
            </h3>
            <span
              style={{
                color: '#58a6ff',
                fontSize: '1.25rem',
                transform: expandedFaq === index ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.2s',
              }}
            >
              ▼
            </span>
          </button>

          {expandedFaq === index && (
            <div
              style={{
                padding: '0 1.25rem 1.25rem',
                borderTop: '1px solid #30363d',
              }}
            >
              <p
                style={{
                  color: '#8b949e',
                  lineHeight: 1.8,
                  margin: 0,
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
