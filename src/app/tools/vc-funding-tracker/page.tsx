'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

/* ────────────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────────────── */
interface FundingRound {
  id: string;
  project: string;
  logo: string;
  category: string;
  round: string;
  amount: number;
  valuation?: number;
  leadInvestor: string;
  investors: string[];
  date: string;
  chain: string;
  description: string;
}

/* ────────────────────────────────────────────────────────────
   Mock Data — Simulated VC deals (Q1 2026)
──────────────────────────────────────────────────────────── */
const FUNDING_DATA: FundingRound[] = [
  {
    id: '1', project: 'MegaETH', logo: '⚡', category: 'Layer 2',
    round: 'Series A', amount: 52_000_000, valuation: 520_000_000,
    leadInvestor: 'Paradigm', investors: ['a16z Crypto', 'Coinbase Ventures', 'Dragonfly'],
    date: '2026-03-10', chain: 'Ethereum', description: 'Real-time Ethereum L2 with sub-millisecond block times.'
  },
  {
    id: '2', project: 'Monad', logo: '🟣', category: 'Layer 1',
    round: 'Series B', amount: 225_000_000, valuation: 3_000_000_000,
    leadInvestor: 'Paradigm', investors: ['Electric Capital', 'Greenoaks'],
    date: '2026-03-05', chain: 'Monad', description: 'High-performance EVM-compatible L1 with parallel execution.'
  },
  {
    id: '3', project: 'EigenLayer', logo: '🔄', category: 'Restaking',
    round: 'Series B', amount: 100_000_000, valuation: 1_500_000_000,
    leadInvestor: 'a16z Crypto', investors: ['Blockchain Capital', 'Polychain Capital'],
    date: '2026-02-28', chain: 'Ethereum', description: 'Restaking protocol enabling shared security for AVS.'
  },
  {
    id: '4', project: 'Berachain', logo: '🐻', category: 'Layer 1',
    round: 'Series B', amount: 100_000_000, valuation: 1_500_000_000,
    leadInvestor: 'Framework Ventures', investors: ['Polychain Capital', 'Hack VC', 'OKX Ventures'],
    date: '2026-02-20', chain: 'Berachain', description: 'Proof of Liquidity consensus chain with native DeFi.'
  },
  {
    id: '5', project: 'Story Protocol', logo: '📖', category: 'IP / RWA',
    round: 'Series B', amount: 80_000_000, valuation: 2_250_000_000,
    leadInvestor: 'a16z Crypto', investors: ['Polychain Capital', 'Samsung Next'],
    date: '2026-02-15', chain: 'Story', description: 'Programmable IP blockchain for on-chain intellectual property.'
  },
  {
    id: '6', project: 'Espresso Systems', logo: '☕', category: 'Infrastructure',
    round: 'Series B', amount: 28_000_000,
    leadInvestor: 'a16z Crypto', investors: ['Sequoia', 'Polychain Capital', 'Electric Capital'],
    date: '2026-02-10', chain: 'Multi-chain', description: 'Shared sequencer network for L2 interoperability.'
  },
  {
    id: '7', project: 'Ritual', logo: '🧠', category: 'AI x Crypto',
    round: 'Series A', amount: 25_000_000, valuation: 300_000_000,
    leadInvestor: 'Archetype', investors: ['Polychain Capital', 'Robot Ventures', 'Coinbase Ventures'],
    date: '2026-02-05', chain: 'Ethereum', description: 'AI inference network with crypto-economic security guarantees.'
  },
  {
    id: '8', project: 'Initia', logo: '🌀', category: 'App Chains',
    round: 'Series A', amount: 14_000_000, valuation: 350_000_000,
    leadInvestor: 'Binance Labs', investors: ['Delphi Ventures', 'Hack VC', 'Figment Capital'],
    date: '2026-01-28', chain: 'Cosmos', description: 'Interwoven rollup platform for modular app chains.'
  },
  {
    id: '9', project: 'Nillion', logo: '🔐', category: 'Privacy',
    round: 'Seed+', amount: 20_000_000,
    leadInvestor: 'Distributed Global', investors: ['GSR', 'Big Brain Holdings', 'Chapter One'],
    date: '2026-01-20', chain: 'Nillion', description: 'Blind compute network for privacy-preserving computation.'
  },
  {
    id: '10', project: 'Hyperlane', logo: '🌐', category: 'Interoperability',
    round: 'Series A', amount: 18_500_000,
    leadInvestor: 'Variant Fund', investors: ['Galaxy Digital', 'CoinFund', 'Circle Ventures'],
    date: '2026-01-15', chain: 'Multi-chain', description: 'Permissionless interoperability protocol for modular blockchains.'
  },
  {
    id: '11', project: 'Caldera', logo: '🌋', category: 'Rollup-as-a-Service',
    round: 'Series A', amount: 15_000_000, valuation: 250_000_000,
    leadInvestor: 'Founders Fund', investors: ['Sequoia', 'Dragonfly', 'Lattice Fund'],
    date: '2026-01-10', chain: 'Ethereum', description: 'No-code rollup deployment platform with shared sequencing.'
  },
  {
    id: '12', project: 'Zeta Markets', logo: '⚡', category: 'DeFi',
    round: 'Series A', amount: 10_000_000,
    leadInvestor: 'Jump Crypto', investors: ['Solana Ventures', 'Race Capital', 'DACM'],
    date: '2026-01-05', chain: 'Solana', description: 'Under-collateralized options and futures DEX on Solana.'
  },
];

const CATEGORIES = ['All', 'Layer 1', 'Layer 2', 'DeFi', 'AI x Crypto', 'Infrastructure', 'Restaking', 'IP / RWA', 'Privacy', 'Interoperability', 'App Chains', 'Rollup-as-a-Service'];
const ROUNDS = ['All', 'Seed', 'Seed+', 'Series A', 'Series B', 'Series C'];

function formatUsd(n: number) {
  if (n >= 1_000_000_000) return `$${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(0)}M`;
  return `$${(n / 1_000).toFixed(0)}K`;
}

/* ────────────────────────────────────────────────────────────
   Component
──────────────────────────────────────────────────────────── */
export default function VCFundingTracker() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [roundFilter, setRoundFilter] = useState('All');
  const [sortBy, setSortBy] = useState<'date' | 'amount'>('date');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    let data = [...FUNDING_DATA];
    if (categoryFilter !== 'All') data = data.filter(d => d.category === categoryFilter);
    if (roundFilter !== 'All') data = data.filter(d => d.round === roundFilter);
    data.sort((a, b) => sortBy === 'date'
      ? new Date(b.date).getTime() - new Date(a.date).getTime()
      : b.amount - a.amount
    );
    return data;
  }, [categoryFilter, roundFilter, sortBy]);

  const totalRaised = FUNDING_DATA.reduce((s, d) => s + d.amount, 0);
  const avgRound = totalRaised / FUNDING_DATA.length;
  const topCategory = Object.entries(
    FUNDING_DATA.reduce<Record<string, number>>((acc, d) => {
      acc[d.category] = (acc[d.category] || 0) + d.amount;
      return acc;
    }, {})
  ).sort((a, b) => b[1] - a[1])[0];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools' },
        { label: 'VC Funding Tracker' },
      ]} />

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">
          Crypto VC Funding Tracker
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          Track the latest venture capital funding rounds in crypto. See which projects are raising,
          who&apos;s investing, and where the smart money is flowing in Q1 2026.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="glass p-4 text-center">
          <div className="text-2xl font-bold text-[var(--color-primary)]">{formatUsd(totalRaised)}</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Total Raised (Q1 2026)</div>
        </div>
        <div className="glass p-4 text-center">
          <div className="text-2xl font-bold text-green-400">{FUNDING_DATA.length}</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Funding Rounds</div>
        </div>
        <div className="glass p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">{formatUsd(avgRound)}</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Avg Round Size</div>
        </div>
        <div className="glass p-4 text-center">
          <div className="text-2xl font-bold text-purple-400">{topCategory?.[0]}</div>
          <div className="text-xs text-[var(--color-text-secondary)]">Hottest Category</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="glass px-3 py-2 text-sm text-[var(--color-text)] bg-transparent rounded-lg border border-[var(--glass-border)]"
        >
          {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select
          value={roundFilter}
          onChange={(e) => setRoundFilter(e.target.value)}
        >
          {ROUNDS.map(r => <option key={r} value={r}>{r}</option>)}
        </select>
        <div className="flex gap-1 ml-auto">
          <button
            onClick={() => setSortBy('date')}
            className={`px-3 py-2 text-xs rounded-lg ${sortBy === 'date' ? 'bg-[var(--color-primary)] text-white' : 'glass text-[var(--color-text-secondary)]'}`}
          >
            Latest
          </button>
          <button
            onClick={() => setSortBy('amount')}
            className={`px-3 py-2 text-xs rounded-lg ${sortBy === 'amount' ? 'bg-[var(--color-primary)] text-white' : 'glass text-[var(--color-text-secondary)]'}`}
          >
            Largest
          </button>
        </div>
      </div>

      {/* Deals List */}
      <div className="space-y-3">
        {filtered.map((deal) => (
          <div
            key={deal.id}
            className="glass p-4 hover:border-[var(--color-primary)] transition-colors cursor-pointer"
            onClick={() => setExpandedId(expandedId === deal.id ? null : deal.id)}
          >
            <div className="flex items-center gap-4">
              <div className="text-3xl">{deal.logo}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="font-bold text-[var(--color-text)]">{deal.project}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">{deal.round}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400">{deal.category}</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] mt-1">{deal.description}</p>
              </div>
              <div className="text-right shrink-0">
                <div className="text-xl font-bold text-green-400">{formatUsd(deal.amount)}</div>
                {deal.valuation && (
                  <div className="text-xs text-[var(--color-text-secondary)]">@ {formatUsd(deal.valuation)} val.</div>
                )}
                <div className="text-xs text-[var(--color-text-secondary)] mt-1">{deal.date}</div>
              </div>
            </div>

            {expandedId === deal.id && (
              <div className="mt-4 pt-4 border-t border-[var(--glass-border)]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-xs text-[var(--color-text-secondary)] mb-1">Lead Investor</div>
                    <div className="font-semibold text-[var(--color-text)]">{deal.leadInvestor}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-secondary)] mb-1">Chain</div>
                    <div className="font-semibold text-[var(--color-text)]">{deal.chain}</div>
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-secondary)] mb-1">Other Investors</div>
                    <div className="flex flex-wrap gap-1">
                      {deal.investors.map(inv => (
                        <span key={inv} className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-primary)]/5 text-[var(--color-text-secondary)]">{inv}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="glass p-12 text-center">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-[var(--color-text-secondary)]">No funding rounds match your filters.</p>
        </div>
      )}

      {/* Investor Leaderboard */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-[var(--color-text)] mb-4">Top Investors (Q1 2026)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(() => {
            const investorMap: Record<string, { deals: number; totalUsd: number }> = {};
            FUNDING_DATA.forEach(d => {
              [d.leadInvestor, ...d.investors].forEach(inv => {
                if (!investorMap[inv]) investorMap[inv] = { deals: 0, totalUsd: 0 };
                investorMap[inv].deals++;
                investorMap[inv].totalUsd += d.amount;
              });
            });
            return Object.entries(investorMap)
              .sort((a, b) => b[1].deals - a[1].deals)
              .slice(0, 8)
              .map(([name, data], i) => (
                <div key={name} className="glass p-4 flex items-center gap-3">
                  <div className="text-lg font-bold text-[var(--color-text-secondary)] w-6">#{i + 1}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-[var(--color-text)]">{name}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">{data.deals} deals</div>
                  </div>
                  <div className="text-sm font-bold text-green-400">{formatUsd(data.totalUsd)}</div>
                </div>
              ));
          })()}
        </div>
      </div>

      {/* SEO Content */}
      <section className="mt-12 glass p-8">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">About the Crypto VC Funding Tracker</h2>
        <div className="text-sm text-[var(--color-text-secondary)] space-y-3 leading-relaxed">
          <p>
            Track where venture capital is flowing in the cryptocurrency and blockchain ecosystem.
            Our VC Funding Tracker aggregates the latest funding rounds from top crypto startups,
            giving you insights into which sectors are attracting the most investment capital.
          </p>
          <p>
            Understanding VC funding trends can help you identify emerging narratives before they
            hit mainstream markets. When major firms like a16z, Paradigm, and Polychain Capital
            deploy capital into specific sectors, it often signals where the next wave of innovation
            — and potential token launches — will come from.
          </p>
          <p>
            Use the filters to drill down by category, funding round type, or sort by deal size
            to find the most significant raises. Click on any deal to see the full investor lineup
            and project details.
          </p>
        </div>
      </section>
    </div>
  );
}
