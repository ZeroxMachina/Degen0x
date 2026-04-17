// AutoTOC — scans the current page for h2/h3 elements and builds a
// sticky table of contents. Auto-ids missing headings. Zero-config drop-in.
//
// Phase 3 ramp-to-8 — improves readability & intent-match signal.

'use client';

import { useEffect, useState } from 'react';

interface Heading {
  id: string;
  text: string;
  level: number;
}

function slugify(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80);
}

export default function AutoTOC() {
  const [items, setItems] = useState<Heading[]>([]);

  useEffect(() => {
    const scope =
      document.querySelector('article') ||
      document.querySelector('main') ||
      document.body;
    if (!scope) return;

    const headings: Heading[] = [];
    const nodes = scope.querySelectorAll('h2, h3');
    const seen = new Set<string>();
    nodes.forEach((n) => {
      const tag = n.tagName.toLowerCase();
      const level = tag === 'h2' ? 2 : 3;
      const text = (n.textContent || '').trim();
      if (!text) return;
      let id = n.id || slugify(text);
      let unique = id;
      let i = 2;
      while (seen.has(unique)) {
        unique = `${id}-${i++}`;
      }
      seen.add(unique);
      if (!n.id) n.setAttribute('id', unique);
      headings.push({ id: unique, text, level });
    });

    if (headings.length >= 3) setItems(headings);
  }, []);

  if (items.length < 3) return null;

  return (
    <nav
      aria-label="Table of contents"
      style={{
        margin: '20px 0 28px',
        padding: '14px 18px',
        background: '#0d1117',
        border: '1px solid #30363d',
        borderRadius: 10,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Inter, sans-serif',
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: '#8b949e',
          marginBottom: 8,
        }}
      >
        On this page
      </div>
      <ol style={{ margin: 0, paddingLeft: '1.1rem', lineHeight: 1.65 }}>
        {items.map((h) => (
          <li
            key={h.id}
            style={{
              marginBottom: 4,
              marginLeft: h.level === 3 ? 14 : 0,
              listStyleType: h.level === 3 ? 'circle' : 'decimal',
            }}
          >
            <a
              href={`#${h.id}`}
              style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 14 }}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
