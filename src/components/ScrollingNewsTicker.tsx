'use client';

import { useState, useEffect, useRef } from 'react';

interface NewsItem {
  id: string;
  text: string;
  type: 'bullish' | 'bearish' | 'neutral' | 'breaking';
  timestamp: string;
}

const TICKER_ITEMS: NewsItem[] = [
  { id: '1', text: 'BTC breaks $87K resistance — new ATH territory', type: 'bullish', timestamp: '2m ago' },
  { id: '2', text: 'ETH gas fees drop to 3 gwei post-Dencun', type: 'bullish', timestamp: '8m ago' },
  { id: '3', text: 'SEC approves 3 new spot crypto ETFs for 2026', type: 'breaking', timestamp: '15m ago' },
  { id: '4', text: 'Solana TVL hits $12B — new protocol record', type: 'bullish', timestamp: '22m ago' },
  { id: '5', text: 'Fed signals potential rate pause in Q2 2026', type: 'neutral', timestamp: '35m ago' },
  { id: '6', text: 'Arbitrum surpasses Ethereum L1 in daily tx count', type: 'bullish', timestamp: '42m ago' },
  { id: '7', text: 'Tether reserves audit shows $118B backing', type: 'neutral', timestamp: '1h ago' },
  { id: '8', text: 'MiCA regulations fully enforced across EU', type: 'neutral', timestamp: '1h ago' },
  { id: '9', text: 'Whale alert: 5,000 BTC moved from exchange to cold storage', type: 'bullish', timestamp: '1h ago' },
  { id: '10', text: 'Base L2 daily active users exceed 2M', type: 'bullish', timestamp: '2h ago' },
];

const TYPE_COLORS: Record<NewsItem['type'], { bg: string; text: string; label: string }> = {
  bullish: { bg: '#22c55e20', text: '#22c55e', label: 'BULLISH' },
  bearish: { bg: '#ef444420', text: '#ef4444', label: 'BEARISH' },
  neutral: { bg: '#6366f120', text: '#818cf8', label: 'INFO' },
  breaking: { bg: '#f59e0b20', text: '#f59e0b', label: 'BREAKING' },
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
      <div style={{
        display: 'flex', alignItems: 'center', padding: '0 12px',
        position: 'absolute', left: 0, top: 0, bottom: 0, zIndex: 2,
        background: 'linear-gradient(90deg, var(--color-surface, #161b22) 80%, transparent)',
        paddingRight: 20,
      }}>
        <span style={{
          fontSize: 10, fontWeight: 800, color: '#f59e0b',
          padding: '2px 8px', background: '#f59e0b15',
          border: '1px solid #f59e0b30', borderRadius: 4,
          letterSpacing: '0.08em',
        }}>
          LIVE
        </span>
      </div>

      <div
        ref={scrollRef}
        style={{
          display: 'flex', gap: 32, alignItems: 'center',
          whiteSpace: 'nowrap', overflow: 'hidden',
          padding: '8px 60px',
        }}
      >
        {/* Duplicate items for seamless scrolling */}
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
              <span style={{ fontSize: 10, color: 'var(--color-text-secondary, #8b949e)' }}>
                {item.timestamp}
              </span>
              <span style={{ color: 'var(--color-border, #30363d)', fontSize: 10 }}>|</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
