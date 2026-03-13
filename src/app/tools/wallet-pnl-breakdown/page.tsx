'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

/* ──────────────── Types ──────────────── */
interface Transaction {
  id: string;
  date: string;
  type: 'buy' | 'sell' | 'swap' | 'airdrop' | 'stake_reward';
  asset: string;
  symbol: string;
  amount: number;
  priceAtTime: number;
  currentPrice: number;
  network: string;
}

interface AssetSummary {
  symbol: string;
  name: string;
  icon: string;
  totalCost: number;
  currentValue: number;
  pnl: number;
  pnlPercent: number;
  holdings: number;
  avgBuyPrice: number;
  currentPrice: number;
  txCount: number;
  realized: number;
  unrealized: number;
}

type ViewMode = 'summary' | 'timeline' | 'breakdown';
type SortBy = 'pnl' | 'value' | 'pnlPercent' | 'name';

/* ──────────────── Seed RNG ──────────────── */
function seed(s: number): () => number {
  let x = s;
  return () => { x = (x * 16807 + 0) % 2147483647; return (x - 1) / 2147483646; };
}

/* ──────────────── Mock Data ──────────────── */
function generateTransactions(): Transaction[] {
  const rng = seed(42);
  const r = (min: number, max: number) => min + rng() * (max - min);

  const assets = [
    { name: 'Bitcoin', symbol: 'BTC', currentPrice: 87250, basePrice: 42000, network: 'Bitcoin' },
    { name: 'Ethereum', symbol: 'ETH', currentPrice: 3520, basePrice: 1800, network: 'Ethereum' },
    { name: 'Solana', symbol: 'SOL', currentPrice: 196, basePrice: 25, network: 'Solana' },
    { name: 'Arbitrum', symbol: 'ARB', currentPrice: 1.35, basePrice: 1.15, network: 'Arbitrum' },
    { name: 'Chainlink', symbol: 'LINK', currentPrice: 24.80, basePrice: 7.50, network: 'Ethereum' },
    { name: 'Aave', symbol: 'AAVE', currentPrice: 392, basePrice: 85, network: 'Ethereum' },
    { name: 'Dogecoin', symbol: 'DOGE', currentPrice: 0.198, basePrice: 0.065, network: 'Dogecoin' },
    { name: 'Render', symbol: 'RENDER', currentPrice: 10.20, basePrice: 1.80, network: 'Solana' },
  ];

  const txs: Transaction[] = [];
  const types: Transaction['type'][] = ['buy', 'buy', 'buy', 'sell', 'swap', 'airdrop', 'stake_reward'];

  let id = 0;
  assets.forEach(asset => {
    const numTxs = Math.floor(r(3, 12));
    for (let i = 0; i < numTxs; i++) {
      const type = types[Math.floor(r(0, types.length))];
      const monthOffset = Math.floor(r(0, 18));
      const d = new Date(2025, 0 + monthOffset, Math.floor(r(1, 28)));
      const priceMult = r(0.5, 1.5);
      const priceAtTime = asset.basePrice * priceMult;
      const amount = type === 'airdrop' ? r(10, 500) / asset.basePrice : type === 'stake_reward' ? r(1, 50) / asset.basePrice : r(100, 5000) / priceAtTime;

      txs.push({
        id: `tx-${id++}`,
        date: d.toISOString().split('T')[0],
        type,
        asset: asset.name,
        symbol: asset.symbol,
        amount: Math.round(amount * 10000) / 10000,
        priceAtTime: Math.round(priceAtTime * 100) / 100,
        currentPrice: asset.currentPrice,
        network: asset.network,
      });
    }
  });

  return txs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

const TRANSACTIONS = generateTransactions();

const ASSET_ICONS: Record<string, string> = {
  BTC: '₿', ETH: 'Ξ', SOL: '◎', ARB: '🔵', LINK: '⬡', AAVE: '👻', DOGE: '🐕', RENDER: '🎨',
};

/* ──────────────── Component ──────────────── */
export default function WalletPnLPage() {
  const [view, setView] = useState<ViewMode>('summary');
  const [sortBy, setSortBy] = useState<SortBy>('pnl');
  const [selectedSymbol, setSelectedSymbol] = useState<string | null>(null);
  const [walletAddress, setWalletAddress] = useState('0x7a3f...8e2d');

  /* Compute asset summaries */
  const summaries = useMemo((): AssetSummary[] => {
    const map = new Map<string, { buyCost: number; buyAmount: number; sellRevenue: number; sellAmount: number; currentPrice: number; name: string; txCount: number }>();

    TRANSACTIONS.forEach(tx => {
      if (!map.has(tx.symbol)) {
        map.set(tx.symbol, { buyCost: 0, buyAmount: 0, sellRevenue: 0, sellAmount: 0, currentPrice: tx.currentPrice, name: tx.asset, txCount: 0 });
      }
      const entry = map.get(tx.symbol)!;
      entry.txCount++;

      if (tx.type === 'buy' || tx.type === 'airdrop' || tx.type === 'stake_reward' || tx.type === 'swap') {
        entry.buyCost += tx.amount * tx.priceAtTime;
        entry.buyAmount += tx.amount;
      } else {
        entry.sellRevenue += tx.amount * tx.priceAtTime;
        entry.sellAmount += tx.amount;
      }
    });

    return Array.from(map.entries()).map(([symbol, data]) => {
      const holdings = data.buyAmount - data.sellAmount;
      const totalCost = data.buyCost;
      const currentValue = holdings * data.currentPrice;
      const realized = data.sellRevenue - (data.sellAmount * (data.buyCost / data.buyAmount));
      const unrealized = currentValue - (holdings * (data.buyCost / data.buyAmount));
      const pnl = realized + unrealized;
      const pnlPercent = totalCost > 0 ? (pnl / totalCost) * 100 : 0;
      const avgBuyPrice = data.buyAmount > 0 ? data.buyCost / data.buyAmount : 0;

      return {
        symbol, name: data.name, icon: ASSET_ICONS[symbol] || '?',
        totalCost, currentValue, pnl, pnlPercent, holdings,
        avgBuyPrice, currentPrice: data.currentPrice, txCount: data.txCount,
        realized, unrealized,
      };
    });
  }, []);

  const sorted = useMemo(() => {
    const s = [...summaries];
    switch (sortBy) {
      case 'pnl': return s.sort((a, b) => b.pnl - a.pnl);
      case 'value': return s.sort((a, b) => b.currentValue - a.currentValue);
      case 'pnlPercent': return s.sort((a, b) => b.pnlPercent - a.pnlPercent);
      case 'name': return s.sort((a, b) => a.name.localeCompare(b.name));
    }
  }, [summaries, sortBy]);

  const totals = useMemo(() => {
    const totalInvested = summaries.reduce((s, a) => s + a.totalCost, 0);
    const totalValue = summaries.reduce((s, a) => s + a.currentValue, 0);
    const totalPnl = summaries.reduce((s, a) => s + a.pnl, 0);
    const totalRealized = summaries.reduce((s, a) => s + a.realized, 0);
    const totalUnrealized = summaries.reduce((s, a) => s + a.unrealized, 0);
    const totalPnlPct = totalInvested > 0 ? (totalPnl / totalInvested) * 100 : 0;
    return { totalInvested, totalValue, totalPnl, totalRealized, totalUnrealized, totalPnlPct };
  }, [summaries]);

  /* Monthly PnL timeline */
  const monthlyPnl = useMemo(() => {
    const months = new Map<string, number>();
    TRANSACTIONS.forEach(tx => {
      const month = tx.date.substring(0, 7);
      const pnl = tx.type === 'sell' ? (tx.currentPrice - tx.priceAtTime) * tx.amount : (tx.currentPrice - tx.priceAtTime) * tx.amount;
      months.set(month, (months.get(month) || 0) + pnl);
    });
    return Array.from(months.entries()).sort((a, b) => a[0].localeCompare(b[0]));
  }, []);

  const maxPnl = Math.max(...monthlyPnl.map(m => Math.abs(m[1])), 1);

  const fmt = (n: number) => {
    if (Math.abs(n) >= 1000000) return `$${(n / 1000000).toFixed(2)}M`;
    if (Math.abs(n) >= 1000) return `$${(n / 1000).toFixed(1)}K`;
    return `$${n.toFixed(2)}`;
  };

  const sty = {
    page: { maxWidth: 1280, margin: '0 auto', padding: '24px 16px' } as React.CSSProperties,
    title: { fontSize: 32, fontWeight: 800, marginBottom: 8, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' } as React.CSSProperties,
    subtitle: { fontSize: 15, color: 'var(--color-text-secondary, #8b949e)', marginBottom: 24 } as React.CSSProperties,
    controls: { display: 'flex', gap: 8, flexWrap: 'wrap' as const, marginBottom: 20 } as React.CSSProperties,
    btn: (active: boolean) => ({ padding: '8px 16px', borderRadius: 8, border: '1px solid var(--color-border, #30363d)', background: active ? '#6366f1' : 'var(--color-surface, #161b22)', color: active ? '#fff' : 'var(--color-text, #e6edf3)', fontWeight: 600, fontSize: 13, cursor: 'pointer' }) as React.CSSProperties,
    card: { background: 'var(--color-surface, #161b22)', border: '1px solid var(--color-border, #30363d)', borderRadius: 12, padding: 20, marginBottom: 20 } as React.CSSProperties,
    statLabel: { fontSize: 11, color: 'var(--color-text-secondary, #8b949e)', textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: 4 } as React.CSSProperties,
    statVal: { fontSize: 24, fontWeight: 800 } as React.CSSProperties,
    sectionTitle: { fontSize: 18, fontWeight: 700, marginBottom: 16, color: 'var(--color-text, #e6edf3)' } as React.CSSProperties,
  };

  return (
    <div style={sty.page}>
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools' },
        { label: 'Wallet P&L Breakdown' },
      ]} />

      <h1 style={sty.title}>Wallet P&L Breakdown</h1>
      <p style={sty.subtitle}>
        Analyze your wallet&apos;s profit and loss across all assets with realized/unrealized gains, cost basis tracking, and monthly performance.
      </p>

      {/* Wallet Input */}
      <div style={{ ...sty.card, display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text, #e6edf3)' }}>Wallet:</div>
        <input
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          style={{
            flex: 1, minWidth: 200, padding: '10px 14px', borderRadius: 8,
            background: 'var(--color-bg, #0d1117)', border: '1px solid var(--color-border, #30363d)',
            color: 'var(--color-text, #e6edf3)', fontSize: 14, fontFamily: 'monospace',
          }}
          placeholder="Enter wallet address..."
        />
        <div style={{ padding: '6px 12px', borderRadius: 8, background: '#22c55e20', color: '#22c55e', fontSize: 12, fontWeight: 700, border: '1px solid #22c55e40' }}>
          Connected
        </div>
      </div>

      {/* Stats Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 24 }}>
        <div style={{ ...sty.card, marginBottom: 0 }}>
          <div style={sty.statLabel}>Portfolio Value</div>
          <div style={{ ...sty.statVal, color: '#6366f1' }}>{fmt(totals.totalValue)}</div>
        </div>
        <div style={{ ...sty.card, marginBottom: 0 }}>
          <div style={sty.statLabel}>Total P&L</div>
          <div style={{ ...sty.statVal, color: totals.totalPnl >= 0 ? '#22c55e' : '#ef4444' }}>
            {totals.totalPnl >= 0 ? '+' : ''}{fmt(totals.totalPnl)}
          </div>
          <div style={{ fontSize: 12, color: totals.totalPnlPct >= 0 ? '#22c55e' : '#ef4444', fontWeight: 600 }}>
            {totals.totalPnlPct >= 0 ? '+' : ''}{totals.totalPnlPct.toFixed(1)}%
          </div>
        </div>
        <div style={{ ...sty.card, marginBottom: 0 }}>
          <div style={sty.statLabel}>Realized Gains</div>
          <div style={{ ...sty.statVal, color: totals.totalRealized >= 0 ? '#22c55e' : '#ef4444' }}>
            {fmt(totals.totalRealized)}
          </div>
        </div>
        <div style={{ ...sty.card, marginBottom: 0 }}>
          <div style={sty.statLabel}>Unrealized Gains</div>
          <div style={{ ...sty.statVal, color: totals.totalUnrealized >= 0 ? '#22c55e' : '#ef4444' }}>
            {fmt(totals.totalUnrealized)}
          </div>
        </div>
        <div style={{ ...sty.card, marginBottom: 0 }}>
          <div style={sty.statLabel}>Total Invested</div>
          <div style={{ ...sty.statVal, color: 'var(--color-text, #e6edf3)' }}>{fmt(totals.totalInvested)}</div>
        </div>
        <div style={{ ...sty.card, marginBottom: 0 }}>
          <div style={sty.statLabel}>Assets Held</div>
          <div style={{ ...sty.statVal, color: '#06b6d4' }}>{summaries.length}</div>
        </div>
      </div>

      {/* View Controls */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12, marginBottom: 20 }}>
        <div style={sty.controls}>
          {(['summary', 'timeline', 'breakdown'] as ViewMode[]).map(v => (
            <button key={v} style={sty.btn(view === v)} onClick={() => setView(v)}>
              {v === 'summary' ? 'P&L Summary' : v === 'timeline' ? 'Monthly Timeline' : 'Per-Asset Breakdown'}
            </button>
          ))}
        </div>
        {view === 'summary' && (
          <div style={sty.controls}>
            <span style={{ fontSize: 12, color: 'var(--color-text-secondary, #8b949e)', padding: '8px 0' }}>Sort:</span>
            {(['pnl', 'value', 'pnlPercent', 'name'] as SortBy[]).map(s => (
              <button key={s} style={sty.btn(sortBy === s)} onClick={() => setSortBy(s)}>
                {s === 'pnl' ? 'P&L $' : s === 'value' ? 'Value' : s === 'pnlPercent' ? 'P&L %' : 'Name'}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Summary View */}
      {view === 'summary' && (
        <div style={sty.card}>
          <div style={sty.sectionTitle}>Asset P&L Summary</div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--color-border, #30363d)' }}>
                  {['Asset', 'Holdings', 'Avg Buy', 'Current', 'Value', 'P&L', 'P&L %', 'Realized', 'Unrealized'].map(h => (
                    <th key={h} style={{ padding: '10px 8px', textAlign: h === 'Asset' ? 'left' : 'right', color: 'var(--color-text-secondary, #8b949e)', fontWeight: 700, fontSize: 11, textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sorted.map(asset => (
                  <tr key={asset.symbol} onClick={() => setSelectedSymbol(asset.symbol === selectedSymbol ? null : asset.symbol)} style={{ borderBottom: '1px solid var(--color-border, #30363d)', cursor: 'pointer', background: selectedSymbol === asset.symbol ? 'rgba(99,102,241,0.1)' : 'transparent' }}>
                    <td style={{ padding: '10px 8px', fontWeight: 600, color: 'var(--color-text, #e6edf3)' }}>
                      <span style={{ marginRight: 8 }}>{asset.icon}</span>{asset.name}
                    </td>
                    <td style={{ padding: '10px 8px', textAlign: 'right', fontFamily: 'monospace', color: 'var(--color-text, #e6edf3)' }}>{asset.holdings.toFixed(4)}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'right', color: 'var(--color-text-secondary, #8b949e)' }}>{fmt(asset.avgBuyPrice)}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'right', color: 'var(--color-text, #e6edf3)', fontWeight: 600 }}>{fmt(asset.currentPrice)}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 700, color: '#6366f1' }}>{fmt(asset.currentValue)}</td>
                    <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 700, color: asset.pnl >= 0 ? '#22c55e' : '#ef4444' }}>
                      {asset.pnl >= 0 ? '+' : ''}{fmt(asset.pnl)}
                    </td>
                    <td style={{ padding: '10px 8px', textAlign: 'right', fontWeight: 600, color: asset.pnlPercent >= 0 ? '#22c55e' : '#ef4444' }}>
                      {asset.pnlPercent >= 0 ? '+' : ''}{asset.pnlPercent.toFixed(1)}%
                    </td>
                    <td style={{ padding: '10px 8px', textAlign: 'right', color: asset.realized >= 0 ? '#4ade80' : '#f87171', fontSize: 12 }}>
                      {fmt(asset.realized)}
                    </td>
                    <td style={{ padding: '10px 8px', textAlign: 'right', color: asset.unrealized >= 0 ? '#4ade80' : '#f87171', fontSize: 12 }}>
                      {fmt(asset.unrealized)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Timeline View */}
      {view === 'timeline' && (
        <div style={sty.card}>
          <div style={sty.sectionTitle}>Monthly P&L Timeline</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {monthlyPnl.map(([month, pnl]) => {
              const width = (Math.abs(pnl) / maxPnl) * 50;
              const isPositive = pnl >= 0;
              return (
                <div key={month} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 70, fontSize: 12, color: 'var(--color-text-secondary, #8b949e)', fontFamily: 'monospace', textAlign: 'right' }}>{month}</div>
                  <div style={{ flex: 1, display: 'flex', alignItems: 'center', height: 28 }}>
                    <div style={{ width: '50%', display: 'flex', justifyContent: 'flex-end' }}>
                      {!isPositive && (
                        <div style={{ width: `${width}%`, height: 20, background: '#ef4444', borderRadius: '4px 0 0 4px', transition: 'width 0.3s' }} />
                      )}
                    </div>
                    <div style={{ width: 1, height: 28, background: 'var(--color-border, #30363d)' }} />
                    <div style={{ width: '50%' }}>
                      {isPositive && (
                        <div style={{ width: `${width}%`, height: 20, background: '#22c55e', borderRadius: '0 4px 4px 0', transition: 'width 0.3s' }} />
                      )}
                    </div>
                  </div>
                  <div style={{ width: 80, fontSize: 12, fontWeight: 600, color: isPositive ? '#22c55e' : '#ef4444', textAlign: 'right' }}>
                    {isPositive ? '+' : ''}{fmt(pnl)}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Breakdown View */}
      {view === 'breakdown' && (
        <div style={sty.card}>
          <div style={sty.sectionTitle}>Per-Asset Allocation Breakdown</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {sorted.map(asset => {
              const pctOfPortfolio = totals.totalValue > 0 ? (asset.currentValue / totals.totalValue) * 100 : 0;
              return (
                <div key={asset.symbol} style={{ padding: 16, background: 'var(--color-bg, #0d1117)', borderRadius: 8, border: '1px solid var(--color-border, #30363d)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 20 }}>{asset.icon}</span>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text, #e6edf3)' }}>{asset.name}</div>
                        <div style={{ fontSize: 11, color: 'var(--color-text-secondary, #8b949e)' }}>{asset.txCount} transactions</div>
                      </div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: 16, fontWeight: 700, color: asset.pnl >= 0 ? '#22c55e' : '#ef4444' }}>
                        {asset.pnl >= 0 ? '+' : ''}{fmt(asset.pnl)}
                      </div>
                      <div style={{ fontSize: 12, color: asset.pnlPercent >= 0 ? '#22c55e' : '#ef4444' }}>
                        {asset.pnlPercent >= 0 ? '+' : ''}{asset.pnlPercent.toFixed(1)}%
                      </div>
                    </div>
                  </div>
                  {/* Allocation bar */}
                  <div style={{ height: 6, background: 'var(--color-border, #30363d)', borderRadius: 3, overflow: 'hidden', marginBottom: 8 }}>
                    <div style={{ height: '100%', width: `${pctOfPortfolio}%`, background: asset.pnl >= 0 ? '#6366f1' : '#f97316', borderRadius: 3, transition: 'width 0.3s' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--color-text-secondary, #8b949e)' }}>
                    <span>{pctOfPortfolio.toFixed(1)}% of portfolio</span>
                    <span>Value: {fmt(asset.currentValue)}</span>
                    <span>Cost: {fmt(asset.totalCost)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Educational Section */}
      <div style={sty.card}>
        <div style={sty.sectionTitle}>Understanding Your P&L</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
          {[
            { title: 'Realized vs Unrealized', desc: 'Realized gains come from completed sales. Unrealized gains reflect the current value of holdings you still own — they can change until you sell.' },
            { title: 'Cost Basis Tracking', desc: 'Your average buy price determines your cost basis. This is critical for calculating accurate P&L and for tax reporting purposes.' },
            { title: 'Portfolio Concentration', desc: 'If one asset dominates your portfolio, a sharp drop in that asset could wipe out gains from others. Monitor allocation percentages regularly.' },
            { title: 'Tax Implications', desc: 'In most jurisdictions, realized gains are taxable events. Track your realized gains carefully and consider tax-loss harvesting strategies.' },
          ].map((card, i) => (
            <div key={i} style={{ padding: 16, background: 'var(--color-bg, #0d1117)', borderRadius: 8, border: '1px solid var(--color-border, #30363d)' }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#6366f1', marginBottom: 8 }}>{card.title}</div>
              <div style={{ fontSize: 13, color: 'var(--color-text-secondary, #8b949e)', lineHeight: 1.6 }}>{card.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
