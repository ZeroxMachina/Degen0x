'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

/* ────────────────────────────────────────────────────────────
   Types & Data
──────────────────────────────────────────────────────────── */
interface Chain {
  name: string;
  logo: string;
  ticker: string;
  type: string;
  consensus: string;
  tps: string;
  finality: string;
  gasAvg: string;
  tvl: string;
  tvlNum: number;
  marketCap: string;
  mcNum: number;
  dapps: number;
  evm: boolean;
  launched: number;
  staking: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
}

const CHAINS: Chain[] = [
  {
    name: 'Ethereum', logo: '⟠', ticker: 'ETH', type: 'Layer 1',
    consensus: 'Proof of Stake', tps: '~30', finality: '~12 min',
    gasAvg: '$1.50 - $8.00', tvl: '$62.5B', tvlNum: 62_500,
    marketCap: '$310B', mcNum: 310_000, dapps: 4500, evm: true,
    launched: 2015, staking: '3.5%',
    description: 'The original smart contract platform. Dominates DeFi, NFTs, and institutional adoption.',
    strengths: ['Largest ecosystem', 'Most battle-tested', 'Institutional adoption', 'L2 scaling roadmap'],
    weaknesses: ['Higher gas fees', 'Slower finality', 'Complex UX for beginners'],
  },
  {
    name: 'Solana', logo: '◎', ticker: 'SOL', type: 'Layer 1',
    consensus: 'Proof of History + PoS', tps: '~4,000', finality: '~0.4s',
    gasAvg: '$0.00025', tvl: '$8.2B', tvlNum: 8_200,
    marketCap: '$88B', mcNum: 88_000, dapps: 1200, evm: false,
    launched: 2020, staking: '6.8%',
    description: 'High-performance L1 known for speed and low fees. Dominates in memecoins and consumer apps.',
    strengths: ['Ultra-low fees', 'Sub-second finality', 'Great mobile UX', 'Firedancer validator client'],
    weaknesses: ['Past outages', 'Not EVM-compatible', 'Centralization concerns'],
  },
  {
    name: 'Arbitrum', logo: '🔵', ticker: 'ARB', type: 'Layer 2 (Optimistic)',
    consensus: 'Optimistic Rollup', tps: '~4,000', finality: '~1 min (L2)',
    gasAvg: '$0.10 - $0.50', tvl: '$14.8B', tvlNum: 14_800,
    marketCap: '$3.5B', mcNum: 3_500, dapps: 600, evm: true,
    launched: 2021, staking: 'N/A',
    description: 'The largest Ethereum L2 by TVL. Home to GMX, Aave, and the Arbitrum DAO.',
    strengths: ['Largest L2 TVL', 'Full EVM equivalence', 'Orbit chain framework', 'Strong DeFi ecosystem'],
    weaknesses: ['7-day withdrawal delay', 'Sequencer centralization', 'ARB token utility limited'],
  },
  {
    name: 'Base', logo: '🔷', ticker: '—', type: 'Layer 2 (Optimistic)',
    consensus: 'Optimistic Rollup (OP Stack)', tps: '~2,000', finality: '~2s (L2)',
    gasAvg: '$0.01 - $0.05', tvl: '$9.1B', tvlNum: 9_100,
    marketCap: 'No token', mcNum: 0, dapps: 400, evm: true,
    launched: 2023, staking: 'N/A',
    description: 'Coinbase-incubated L2 on the OP Stack. Fastest growing chain in 2025-2026.',
    strengths: ['Coinbase onramp', 'Ultra-low fees', 'OP Stack superchain', 'No token = no inflation'],
    weaknesses: ['No governance token', 'Coinbase dependency', 'Sequencer centralization'],
  },
  {
    name: 'Avalanche', logo: '🔺', ticker: 'AVAX', type: 'Layer 1',
    consensus: 'Avalanche Consensus', tps: '~4,500', finality: '~1s',
    gasAvg: '$0.02 - $0.10', tvl: '$1.6B', tvlNum: 1_600,
    marketCap: '$12B', mcNum: 12_000, dapps: 350, evm: true,
    launched: 2020, staking: '8.2%',
    description: 'Subnet architecture enables custom blockchains. Strong in gaming and institutional use.',
    strengths: ['Sub-second finality', 'Subnet customization', 'Institutional partnerships', 'EVM compatible'],
    weaknesses: ['Fragmented liquidity', 'Lower DeFi TVL', 'Complex subnet UX'],
  },
  {
    name: 'Polygon', logo: '🟣', ticker: 'POL', type: 'Layer 2 (ZK)',
    consensus: 'Polygon CDK (ZK)', tps: '~7,000', finality: '~2s',
    gasAvg: '$0.001 - $0.01', tvl: '$1.2B', tvlNum: 1_200,
    marketCap: '$4.8B', mcNum: 4_800, dapps: 800, evm: true,
    launched: 2020, staking: '5.1%',
    description: 'ZK-powered aggregated blockchain network. Strong enterprise partnerships with Starbucks, Nike.',
    strengths: ['Enterprise adoption', 'ZK proving system', 'Aggregation layer', 'Massive dApp ecosystem'],
    weaknesses: ['Complex migration to CDK', 'POL tokenomics changes', 'Competition from other ZK L2s'],
  },
  {
    name: 'BNB Chain', logo: '🟡', ticker: 'BNB', type: 'Layer 1',
    consensus: 'Proof of Staked Authority', tps: '~2,200', finality: '~3s',
    gasAvg: '$0.03 - $0.08', tvl: '$5.4B', tvlNum: 5_400,
    marketCap: '$95B', mcNum: 95_000, dapps: 1500, evm: true,
    launched: 2020, staking: '2.8%',
    description: 'Binance-backed chain. Largest user base in emerging markets.',
    strengths: ['Huge user base', 'Low fees', 'Binance ecosystem', 'EVM compatible'],
    weaknesses: ['Centralization', 'Regulatory risk', 'Less developer innovation'],
  },
  {
    name: 'Sui', logo: '💧', ticker: 'SUI', type: 'Layer 1',
    consensus: 'Narwhal/Bullshark', tps: '~10,000', finality: '~0.5s',
    gasAvg: '$0.001', tvl: '$1.8B', tvlNum: 1_800,
    marketCap: '$11B', mcNum: 11_000, dapps: 200, evm: false,
    launched: 2023, staking: '3.2%',
    description: 'Move-based L1 from ex-Meta engineers. Object-centric model enables new UX patterns.',
    strengths: ['Novel object model', 'Sub-second finality', 'zkLogin for walletless UX', 'Growing DeFi'],
    weaknesses: ['Not EVM compatible', 'Smaller ecosystem', 'Token unlock concerns'],
  },
];

const METRICS = ['tvl', 'tps', 'dapps', 'gasAvg', 'finality', 'staking'] as const;
type Metric = typeof METRICS[number];
const METRIC_LABELS: Record<Metric, string> = {
  tvl: 'TVL', tps: 'TPS', dapps: 'dApps', gasAvg: 'Avg Gas', finality: 'Finality', staking: 'Staking APR'
};

/* ────────────────────────────────────────────────────────────
   Component
──────────────────────────────────────────────────────────── */
export default function ChainComparison() {
  const [selected, setSelected] = useState<string[]>(['Ethereum', 'Solana', 'Arbitrum']);
  const [sortMetric, setSortMetric] = useState<'tvlNum' | 'dapps' | 'mcNum'>('tvlNum');
  const [showAll, setShowAll] = useState(false);

  const toggle = (name: string) => {
    setSelected(prev =>
      prev.includes(name) ? prev.filter(n => n !== name) : [...prev, name]
    );
  };

  const comparedChains = useMemo(() => {
    return CHAINS.filter(c => selected.includes(c.name));
  }, [selected]);

  const sorted = useMemo(() => {
    return [...CHAINS].sort((a, b) => (b[sortMetric] as number) - (a[sortMetric] as number));
  }, [sortMetric]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb items={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools' },
        { label: 'Chain Comparison' },
      ]} />

      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">
          Blockchain Comparison Tool
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
          Compare Layer 1 and Layer 2 blockchains side-by-side. Analyze TPS, fees, TVL, finality,
          and ecosystem size to find the right chain for your needs.
        </p>
      </div>

      {/* Chain Selector */}
      <div className="mb-8">
        <div className="text-sm text-[var(--color-text-secondary)] mb-3">Select chains to compare:</div>
        <div className="flex flex-wrap gap-2">
          {CHAINS.map(chain => (
            <button
              key={chain.name}
              onClick={() => toggle(chain.name)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                selected.includes(chain.name)
                  ? 'bg-[var(--color-primary)] text-white shadow-lg'
                  : 'glass text-[var(--color-text-secondary)] hover:text-[var(--color-text)]'
              }`}
            >
              {chain.logo} {chain.name}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Grid */}
      {comparedChains.length > 0 && (
        <div className="overflow-x-auto mb-12">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-[var(--glass-border)]">
                <th className="text-left p-3 text-[var(--color-text-secondary)] font-medium">Metric</th>
                {comparedChains.map(c => (
                  <th key={c.name} className="p-3 text-center">
                    <div className="text-2xl mb-1">{c.logo}</div>
                    <div className="font-bold text-[var(--color-text)]">{c.name}</div>
                    <div className="text-xs text-[var(--color-text-secondary)]">{c.ticker}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {([
                ['Type', 'type'],
                ['Consensus', 'consensus'],
                ['TPS', 'tps'],
                ['Finality', 'finality'],
                ['Avg Gas Fee', 'gasAvg'],
                ['TVL', 'tvl'],
                ['Market Cap', 'marketCap'],
                ['dApps', 'dapps'],
                ['EVM Compatible', 'evm'],
                ['Launched', 'launched'],
                ['Staking APR', 'staking'],
              ] as const).map(([label, key]) => (
                <tr key={key} className="border-b border-[var(--glass-border)] hover:bg-[var(--glass-bg)]">
                  <td className="p-3 font-medium text-[var(--color-text)]">{label}</td>
                  {comparedChains.map(c => (
                    <td key={c.name} className="p-3 text-center text-[var(--color-text-secondary)]">
                      {key === 'evm' ? (
                        <span className={c.evm ? 'text-green-400' : 'text-red-400'}>{c.evm ? '✓ Yes' : '✗ No'}</span>
                      ) : key === 'dapps' ? (
                        c.dapps.toLocaleString() + '+'
                      ) : (
                        String(c[key])
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Strengths & Weaknesses */}
      {comparedChains.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {comparedChains.map(chain => (
            <div key={chain.name} className="glass p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-2xl">{chain.logo}</span>
                <h3 className="font-bold text-[var(--color-text)]">{chain.name}</h3>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] mb-4">{chain.description}</p>
              <div className="mb-3">
                <div className="text-xs font-semibold text-green-400 mb-1">Strengths</div>
                {chain.strengths.map(s => (
                  <div key={s} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1 mb-1">
                    <span className="text-green-400 mt-0.5">+</span> {s}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-xs font-semibold text-red-400 mb-1">Weaknesses</div>
                {chain.weaknesses.map(w => (
                  <div key={w} className="text-xs text-[var(--color-text-secondary)] flex items-start gap-1 mb-1">
                    <span className="text-red-400 mt-0.5">-</span> {w}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Leaderboard */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-[var(--color-text)]">Chain Leaderboard</h2>
          <div className="flex gap-1">
            {(['tvlNum', 'dapps', 'mcNum'] as const).map(m => (
              <button
                key={m}
                onClick={() => setSortMetric(m)}
                className={`px-3 py-1.5 text-xs rounded-lg ${sortMetric === m ? 'bg-[var(--color-primary)] text-white' : 'glass text-[var(--color-text-secondary)]'}`}
              >
                {m === 'tvlNum' ? 'TVL' : m === 'dapps' ? 'dApps' : 'Market Cap'}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {sorted.map((chain, i) => {
            const maxVal = sorted[0][sortMetric] as number || 1;
            const val = chain[sortMetric] as number;
            const pct = Math.max(5, (val / maxVal) * 100);
            return (
              <div key={chain.name} className="glass p-3 flex items-center gap-3">
                <span className="text-sm font-bold text-[var(--color-text-secondary)] w-6">#{i + 1}</span>
                <span className="text-xl">{chain.logo}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-[var(--color-text)] text-sm">{chain.name}</span>
                    <span className="text-sm font-bold text-[var(--color-primary)]">
                      {sortMetric === 'tvlNum' ? chain.tvl : sortMetric === 'dapps' ? `${chain.dapps.toLocaleString()}+` : chain.marketCap}
                    </span>
                  </div>
                  <div className="h-1.5 bg-[var(--glass-bg)] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--color-primary)] to-cyan-400"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* SEO Content */}
      <section className="mt-12 glass p-8">
        <h2 className="text-xl font-bold text-[var(--color-text)] mb-4">How to Choose the Right Blockchain</h2>
        <div className="text-sm text-[var(--color-text-secondary)] space-y-3 leading-relaxed">
          <p>
            Choosing the right blockchain depends on your use case. For maximum DeFi liquidity and
            security, Ethereum and its L2s like Arbitrum and Base offer the deepest markets. For
            high-frequency trading or consumer apps, Solana&apos;s sub-second finality and negligible
            fees make it compelling.
          </p>
          <p>
            Consider factors like EVM compatibility (if you need to port existing smart contracts),
            transaction throughput for your application&apos;s needs, and the existing ecosystem of
            protocols and users that can bootstrap your project&apos;s growth.
          </p>
        </div>
      </section>
    </div>
  );
}
