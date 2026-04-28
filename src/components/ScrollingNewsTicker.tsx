'use client';

import { useState, useEffect, useRef } from 'react';

interface TickerItem {
  id: string;
  text: string;
  type: 'tip' | 'update' | 'feature';
}

const TICKER_ITEMS: TickerItem[] = [
  { id: '1', text: 'Compare 50+ crypto exchanges side by side', type: 'feature' },
  { id: '2', text: 'New: Prediction Markets guide now available', type: 'update' },
  { id: '3', text: '92+ free tools with no signup required', type: 'feature' },
  { id: '4', text: 'DCA Calculator: plan your investment strategy', type: 'tip' },
  { id: '5', text: 'Hardware wallet reviews updated for 2026', type: 'update' },
  { id: '6', text: 'Track funding rates across all perp exchanges', type: 'feature' },
  { id: '7', text: 'Fear & Greed Index with full historical data', type: 'tip' },
  { id: '8', text: 'New: AI Crypto Agents guide published', type: 'update' },
  { id: '9', text: 'Portfolio Rebalancer: detect drift automatically', type: 'feature' },
  { id: '10', text: 'Tax Loss Harvester: optimize your tax strategy', type: 'tip' },
];

const TYPE_COLORS: Record<TickerItem['type'], { bg: string; text: string; label: string }> = {
  tip: { bg: '#22c55e20', text: '#22c55e', label: 'TIP' },
  update: { bg: '#6366f120', text: '#818cf8', label: 'NEW' },
  feature: { bg: '#06b6d420', text: '#06b6d4', label: 'TOOL' },
};

export default function ScrollingNewsTicker() {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused || !scrollRef.current) return;
    const el = scrollRef.current;
    let animationId: number;
    let pos = 0;

    const scroll = () => {
      pos += 0.5;
      if (pos >= el.scrollWidth / 2) pos = 0;
      el.scrollLeft = pos;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationId);
  }, [isPaused]);

  return (
    <div
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{
        background: 'var(--color-surface, #161b22)',
        borderBottom: '1px solid var(--color-border, #30363d)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        ref={scrollRef}
        style={{
          display: 'flex', gap: 32, alignItems: 'center',
          whiteSpace: 'nowrap', overflow: 'hidden',
          padding: '8px 20px',
        }}
      >
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => {
          const colors = TYPE_COLORS[item.type];
          return (
            <div key={`${item.id}-${idx}`} style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
              <span style={{
                fontSize: 9, fontWeight: 700, padding: '1px 5px',
                borderRadius: 3, background: colors.bg, color: colors.text,
                letterSpacing: '0.04em',
              }}>
                {colors.label}
              </span>
              <span style={{ fontSize: 12, color: 'var(--color-text, #e6edf3)', fontWeight: 500 }}>
                {item.text}
              </span>
              <span style={{ color: 'var(--color-border, #30363d)', fontSize: 10 }}>|</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
