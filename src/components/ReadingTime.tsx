// ReadingTime — scans the closest <article> or <main> and estimates
// reading time in minutes (225 wpm). Zero-config: just drop it at the
// top of a content page.
//
// Phase 3 ramp-to-8. Satisfies the "intent match + readability" signal.

'use client';

import { useEffect, useState } from 'react';

interface ReadingTimeProps {
  /** Words per minute for estimation. Default 225. */
  wpm?: number;
}

export default function ReadingTime({ wpm = 225 }: ReadingTimeProps) {
  const [mins, setMins] = useState<number | null>(null);
  const [words, setWords] = useState<number>(0);

  useEffect(() => {
    // Find the nearest content container.
    const el =
      document.querySelector('article') ||
      document.querySelector('main') ||
      document.body;
    if (!el) return;
    const text = el.textContent || '';
    const count = text.trim().split(/\s+/).filter(Boolean).length;
    setWords(count);
    setMins(Math.max(1, Math.round(count / wpm)));
  }, [wpm]);

  if (!mins) return null;

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        margin: '6px 0 12px',
        padding: '4px 10px',
        background: 'transparent',
        color: '#8b949e',
        fontSize: 13,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Inter, sans-serif',
      }}
      aria-label={`Estimated reading time: ${mins} minutes, about ${words} words.`}
    >
      <span>📖</span>
      <span>
        {mins} min read · ~{words.toLocaleString()} words
      </span>
    </div>
  );
}
