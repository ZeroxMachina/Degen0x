'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { useRouter } from 'next/navigation';

interface CommandItem {
  id: string;
  label: string;
  href: string;
  category: string;
  keywords: string[];
  icon: string;
}

const COMMANDS: CommandItem[] = [
  // Tools
  { id: 'dca', label: 'DCA Calculator', href: '/tools/dca-calculator', category: 'Tools', keywords: ['dollar cost average', 'invest'], icon: '📊' },
  { id: 'pnl', label: 'PnL Calculator', href: '/tools/pnl-calculator', category: 'Tools', keywords: ['profit', 'loss'], icon: '💰' },
  { id: 'gas', label: 'Gas Tracker', href: '/tools/gas-tracker', category: 'Tools', keywords: ['ethereum', 'fees', 'gwei'], icon: '⛽' },
  { id: 'whale', label: 'Whale Tracker', href: '/tools/whale-tracker', category: 'Tools', keywords: ['big', 'transactions'], icon: '🐋' },
  { id: 'fear', label: 'Fear & Greed Timeline', href: '/tools/fear-greed-timeline', category: 'Tools', keywords: ['sentiment', 'market'], icon: '😱' },
  { id: 'staking', label: 'Staking APY', href: '/tools/staking-apy', category: 'Tools', keywords: ['yield', 'rewards'], icon: '🥩' },
  { id: 'tax', label: 'Tax Calculator', href: '/tools/tax-calculator', category: 'Tools', keywords: ['irs', 'tax'], icon: '🧾' },
  { id: 'il', label: 'Impermanent Loss', href: '/tools/impermanent-loss', category: 'Tools', keywords: ['defi', 'liquidity'], icon: '📉' },
  { id: 'portfolio', label: 'Portfolio Tracker', href: '/tools/portfolio-tracker', category: 'Tools', keywords: ['holdings', 'balance'], icon: '📈' },
  { id: 'converter', label: 'Crypto Converter', href: '/tools/converter', category: 'Tools', keywords: ['swap', 'convert', 'exchange'], icon: '🔄' },
  { id: 'screener', label: 'Token Screener', href: '/tools/token-screener', category: 'Tools', keywords: ['filter', 'find', 'scan'], icon: '🔍' },
  { id: 'heatmap', label: 'Market Heatmap', href: '/tools/market-heatmap', category: 'Tools', keywords: ['overview', 'visual'], icon: '🗺️' },
  { id: 'alerts', label: 'Price Alerts', href: '/tools/price-alerts', category: 'Tools', keywords: ['notification', 'target'], icon: '🔔' },
  { id: 'liq', label: 'Liquidation Heatmap', href: '/tools/liquidation-heatmap', category: 'Tools', keywords: ['leverage', 'margin'], icon: '🔥' },
  { id: 'backtest', label: 'Backtesting Engine', href: '/tools/backtesting-engine', category: 'Tools', keywords: ['strategy', 'simulate'], icon: '⏪' },
  { id: 'robo', label: 'Robo Advisor', href: '/tools/robo-advisor', category: 'Tools', keywords: ['auto', 'advice'], icon: '🤖' },
  { id: 'retire', label: 'Retirement Calculator', href: '/tools/retirement-calculator', category: 'Tools', keywords: ['future', 'savings'], icon: '🏖️' },
  { id: 'degen', label: 'Degen Score', href: '/tools/degen-score', category: 'Tools', keywords: ['risk', 'profile'], icon: '🎰' },
  // Pages
  { id: 'home', label: 'Homepage', href: '/', category: 'Pages', keywords: ['main', 'start'], icon: '🏠' },
  { id: 'exchanges', label: 'Compare Exchanges', href: '/exchanges', category: 'Pages', keywords: ['binance', 'coinbase', 'trade'], icon: '💱' },
  { id: 'wallets', label: 'Compare Wallets', href: '/wallets', category: 'Pages', keywords: ['ledger', 'trezor', 'metamask'], icon: '👛' },
  { id: 'defi', label: 'DeFi Lending', href: '/defi-lending', category: 'Pages', keywords: ['aave', 'compound', 'borrow'], icon: '🏦' },
  { id: 'prices', label: 'Live Prices', href: '/prices', category: 'Pages', keywords: ['bitcoin', 'price', 'market'], icon: '💲' },
  { id: 'invest', label: 'Investing', href: '/investing', category: 'Pages', keywords: ['buy', 'hold', 'best'], icon: '📊' },
  { id: 'taxes', label: 'Crypto Taxes', href: '/taxes', category: 'Pages', keywords: ['tax', 'irs', 'report'], icon: '🏛️' },
  // Learn
  { id: 'beginners', label: 'Crypto for Beginners', href: '/learn/crypto-for-beginners', category: 'Learn', keywords: ['start', 'new', 'basic'], icon: '📚' },
  { id: 'zk', label: 'Zero Knowledge Proofs', href: '/learn/zero-knowledge-proofs', category: 'Learn', keywords: ['privacy', 'zkp'], icon: '🔐' },
  { id: 'l2', label: 'Layer 2 Scaling', href: '/learn/layer-2-scaling-guide', category: 'Learn', keywords: ['rollup', 'optimism', 'arbitrum'], icon: '⚡' },
  { id: 'rwa', label: 'RWA Tokenization', href: '/learn/rwa-tokenization-guide-2026', category: 'Learn', keywords: ['real world', 'assets'], icon: '🏗️' },
  { id: 'meme', label: 'Memecoin Trading', href: '/learn/memecoin-trading-strategy', category: 'Learn', keywords: ['doge', 'shib', 'pepe'], icon: '🐸' },
  { id: 'airdrops', label: 'Crypto Airdrops 2026', href: '/learn/crypto-airdrops-2026', category: 'Learn', keywords: ['free', 'claim'], icon: '🪂' },
  { id: 'glossary', label: 'Crypto Glossary', href: '/learn/crypto-glossary', category: 'Learn', keywords: ['terms', 'definitions'], icon: '📖' },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filtered = query.length === 0
    ? COMMANDS
    : COMMANDS.filter((cmd) => {
        const q = query.toLowerCase();
        return (
          cmd.label.toLowerCase().includes(q) ||
          cmd.category.toLowerCase().includes(q) ||
          cmd.keywords.some((k) => k.includes(q))
        );
      });

  // Group by category
  const grouped = filtered.reduce<Record<string, CommandItem[]>>((acc, cmd) => {
    if (!acc[cmd.category]) acc[cmd.category] = [];
    acc[cmd.category].push(cmd);
    return acc;
  }, {});

  const flatFiltered = Object.values(grouped).flat();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to toggle
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setOpen((prev) => !prev);
        setQuery('');
        setSelectedIndex(0);
      }
      // Escape to close
      if (e.key === 'Escape' && open) {
        setOpen(false);
      }
    },
    [open]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const navigate = (href: string) => {
    setOpen(false);
    setQuery('');
    router.push(href);
  };

  const handlePaletteKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.min(prev + 1, flatFiltered.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === 'Enter' && flatFiltered[selectedIndex]) {
      navigate(flatFiltered[selectedIndex].href);
    }
  };

  // Scroll selected item into view
  useEffect(() => {
    if (listRef.current) {
      const selected = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (selected) {
        selected.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  if (!open) return null;

  let flatIndex = -1;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[15vh]"
      onClick={() => setOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Palette */}
      <div
        className="relative w-full max-w-xl mx-4 rounded-xl overflow-hidden shadow-2xl"
        style={{
          background: '#161b22',
          border: '1px solid #30363d',
        }}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handlePaletteKeyDown}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-[#30363d]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#8b949e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search tools, pages, guides..."
            className="flex-1 bg-transparent text-[#e6edf3] text-base placeholder-[#484f58] outline-none"
          />
          <kbd className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#21262d] text-[#8b949e] border border-[#30363d]">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[400px] overflow-y-auto py-2">
          {flatFiltered.length === 0 ? (
            <div className="px-4 py-8 text-center text-[#484f58] text-sm">
              No results for &quot;{query}&quot;
            </div>
          ) : (
            Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <div className="px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#484f58]">
                  {category}
                </div>
                {items.map((item) => {
                  flatIndex++;
                  const idx = flatIndex;
                  return (
                    <button
                      key={item.id}
                      data-index={idx}
                      onClick={() => navigate(item.href)}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors"
                      style={{
                        background: idx === selectedIndex ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                        color: idx === selectedIndex ? '#e6edf3' : '#8b949e',
                      }}
                    >
                      <span className="text-lg w-6 text-center">{item.icon}</span>
                      <span className="flex-1 text-sm font-medium">{item.label}</span>
                      {idx === selectedIndex && (
                        <span className="text-[10px] text-[#484f58]">Enter ↵</span>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div className="flex items-center gap-4 px-4 py-2 border-t border-[#30363d] text-[10px] text-[#484f58]">
          <span>↑↓ Navigate</span>
          <span>↵ Open</span>
          <span>esc Close</span>
        </div>
      </div>
    </div>
  );
}
