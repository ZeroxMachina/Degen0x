'use client';

import { useState, useMemo } from 'react';
import { ChevronDown, Calendar, TrendingUp, CheckCircle, AlertCircle, Zap } from 'lucide-react';

type Chain = 'Ethereum' | 'Arbitrum' | 'Polygon' | 'Optimism' | 'Base' | 'Solana';
type Status = 'Confirmed' | 'Rumored' | 'Live' | 'Ended';

interface Airdrop {
  id: string;
  name: string;
  chain: Chain;
  ticker: string;
  estimatedValue: string;
  eligibility: string[];
  snapshotDate: string;
  endDate: string;
  status: Status;
  month: number;
  description: string;
}

const chainIcons: Record<Chain, string> = {
  Ethereum: '⟠',
  Arbitrum: '♦',
  Polygon: '⬡',
  Optimism: '🔴',
  Base: '🔵',
  Solana: '◎',
};

const statusColors: Record<Status, { bg: string; text: string; border: string }> = {
  Confirmed: { bg: 'bg-emerald-900/20', text: 'text-emerald-400', border: 'border-emerald-500/30' },
  Rumored: { bg: 'bg-amber-900/20', text: 'text-amber-400', border: 'border-amber-500/30' },
  Live: { bg: 'bg-blue-900/20', text: 'text-blue-400', border: 'border-blue-500/30' },
  Ended: { bg: 'bg-gray-800/20', text: 'text-gray-400', border: 'border-gray-500/30' },
};

const airdrops: Airdrop[] = [
  {
    id: '1',
    name: 'Ethena (ENA)',
    chain: 'Ethereum',
    ticker: 'ENA',
    estimatedValue: '$100-500',
    eligibility: ['Traded synthetic USD', 'Staked ENA tokens', 'Early protocol users'],
    snapshotDate: '2026-03-15',
    endDate: '2026-04-15',
    status: 'Live',
    month: 3,
    description: 'Synthetic USD protocol airdrop',
  },
  {
    id: '2',
    name: 'Uniswap V4 (UNI)',
    chain: 'Ethereum',
    ticker: 'UNI',
    estimatedValue: '$500-2000',
    eligibility: ['Swapped on Uniswap', '$100+ trading volume', 'Provided liquidity'],
    snapshotDate: '2026-03-20',
    endDate: '2026-05-20',
    status: 'Confirmed',
    month: 3,
    description: 'Uniswap V4 launch governance tokens',
  },
  {
    id: '3',
    name: 'Blur (BLUR)',
    chain: 'Ethereum',
    ticker: 'BLUR',
    estimatedValue: '$200-1000',
    eligibility: ['NFT marketplace volume', 'Collection owners', 'Platform traders'],
    snapshotDate: '2026-03-25',
    endDate: '2026-04-30',
    status: 'Confirmed',
    month: 3,
    description: 'NFT trading platform governance',
  },
  {
    id: '4',
    name: 'Arbitrum Nova (ARB)',
    chain: 'Arbitrum',
    ticker: 'ARB',
    estimatedValue: '$50-300',
    eligibility: ['Bridged to Arbitrum', 'Gas fees paid on chain', 'Contract interactions'],
    snapshotDate: '2026-04-01',
    endDate: '2026-05-15',
    status: 'Confirmed',
    month: 4,
    description: 'Arbitrum ecosystem expansion',
  },
  {
    id: '5',
    name: 'Vertex Protocol (VRTX)',
    chain: 'Arbitrum',
    ticker: 'VRTX',
    estimatedValue: '$150-600',
    eligibility: ['Perpetual trading volume', 'Beta testers', 'Protocol governance'],
    snapshotDate: '2026-04-10',
    endDate: '2026-06-10',
    status: 'Rumored',
    month: 4,
    description: 'Decentralized perpetuals protocol',
  },
  {
    id: '6',
    name: 'Polygon 2.0 (POL)',
    chain: 'Polygon',
    ticker: 'POL',
    estimatedValue: '$75-400',
    eligibility: ['Staked MATIC', 'Network usage', 'Ecosystem builders'],
    snapshotDate: '2026-04-15',
    endDate: '2026-05-31',
    status: 'Confirmed',
    month: 4,
    description: 'Polygon upgrade token distribution',
  },
  {
    id: '7',
    name: 'Optimism Retro PGF (OP)',
    chain: 'Optimism',
    ticker: 'OP',
    estimatedValue: '$200-800',
    eligibility: ['Retroactive PGF voters', 'Early adopters', 'Ecosystem contributors'],
    snapshotDate: '2026-04-20',
    endDate: '2026-06-01',
    status: 'Confirmed',
    month: 4,
    description: 'Optimism public goods funding',
  },
  {
    id: '8',
    name: 'Base Summer Campaign (BASE)',
    chain: 'Base',
    ticker: 'BASE',
    estimatedValue: '$100-500',
    eligibility: ['Bridge to Base', 'DEX swaps on Base', 'Contract deployments'],
    snapshotDate: '2026-05-01',
    endDate: '2026-07-01',
    status: 'Rumored',
    month: 5,
    description: 'Base ecosystem summer airdrop',
  },
  {
    id: '9',
    name: 'Lido V2 Rewards (LDO)',
    chain: 'Ethereum',
    ticker: 'LDO',
    estimatedValue: '$300-1200',
    eligibility: ['Staked ETH via Lido', 'DAO voting', 'Protocol participation'],
    snapshotDate: '2026-05-05',
    endDate: '2026-06-30',
    status: 'Confirmed',
    month: 5,
    description: 'Liquid staking platform rewards',
  },
  {
    id: '10',
    name: 'Curve Wars (CRV)',
    chain: 'Ethereum',
    ticker: 'CRV',
    estimatedValue: '$75-350',
    eligibility: ['Provided liquidity', 'Voted in gauges', 'Lock holders'],
    snapshotDate: '2026-05-10',
    endDate: '2026-07-10',
    status: 'Confirmed',
    month: 5,
    description: 'Curve governance incentives',
  },
  {
    id: '11',
    name: 'Solana Summer (SOL)',
    chain: 'Solana',
    ticker: 'SOL',
    estimatedValue: '$200-900',
    eligibility: ['Solana network usage', 'Program interactions', 'Ecosystem adoption'],
    snapshotDate: '2026-05-15',
    endDate: '2026-08-15',
    status: 'Rumored',
    month: 5,
    description: 'Solana ecosystem initiative',
  },
  {
    id: '12',
    name: 'Aave ProtoGov (AAVE)',
    chain: 'Ethereum',
    ticker: 'AAVE',
    estimatedValue: '$250-1500',
    eligibility: ['Supplied to Aave', 'Proposed governance', 'Safety module stakers'],
    snapshotDate: '2026-06-01',
    endDate: '2026-08-01',
    status: 'Rumored',
    month: 6,
    description: 'Aave governance participation',
  },
  {
    id: '13',
    name: 'Balancer Amplification (BAL)',
    chain: 'Ethereum',
    ticker: 'BAL',
    estimatedValue: '$100-600',
    eligibility: ['Liquidity providers', 'Vote-escrowed holders', 'Yield farmers'],
    snapshotDate: '2026-06-05',
    endDate: '2026-08-05',
    status: 'Confirmed',
    month: 6,
    description: 'Balancer liquidity incentives',
  },
  {
    id: '14',
    name: 'Yearn Finance V3 (YFI)',
    chain: 'Ethereum',
    ticker: 'YFI',
    estimatedValue: '$150-800',
    eligibility: ['Deposited in vaults', 'Governance participation', 'Early users'],
    snapshotDate: '2026-06-10',
    endDate: '2026-08-31',
    status: 'Confirmed',
    month: 6,
    description: 'Yearn yield optimization',
  },
  {
    id: '15',
    name: 'Governance Collective (GOV)',
    chain: 'Polygon',
    ticker: 'GOV',
    estimatedValue: '$50-250',
    eligibility: ['Governance participation', 'Protocol interaction', 'Community contributions'],
    snapshotDate: '2026-06-15',
    endDate: '2026-08-31',
    status: 'Rumored',
    month: 6,
    description: 'Polygon governance initiative',
  },
];

function CountdownTimer({ endDate }: { endDate: string }) {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useState(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date(endDate).getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        return 'Ended';
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      if (days > 0) {
        return `${days}d ${hours}h`;
      }
      return `${hours}h`;
    };

    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000);

    return () => clearInterval(timer);
  }, [endDate]);

  return <span className="font-mono text-sm text-amber-400">{timeLeft}</span>;
}

function HotAirdropCard({ airdrop }: { airdrop: Airdrop }) {
  const colors = statusColors[airdrop.status];

  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 p-6 transition-all hover:border-gray-700 hover:shadow-lg hover:shadow-cyan-500/10">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-lg font-bold text-white">{airdrop.name}</h3>
            <p className="text-sm text-gray-400">{airdrop.description}</p>
          </div>
          <div
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${colors.bg} ${colors.text} ${colors.border}`}
          >
            {airdrop.status}
          </div>
        </div>

        <div className="mb-4 flex items-center gap-3 text-sm">
          <span className="text-xl">{chainIcons[airdrop.chain]}</span>
          <span className="text-gray-300">{airdrop.chain}</span>
          <span className="text-gray-600">•</span>
          <span className="font-mono text-cyan-400">${airdrop.ticker}</span>
        </div>

        <div className="mb-4 rounded-lg bg-black/30 p-3">
          <p className="text-xs text-gray-400">Estimated Value</p>
          <p className="text-lg font-bold text-green-400">{airdrop.estimatedValue}</p>
        </div>

        <div className="mb-4">
          <p className="mb-2 text-xs font-semibold text-gray-300">Eligibility Requirements</p>
          <ul className="space-y-1">
            {airdrop.eligibility.map((req, idx) => (
              <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-cyan-500" />
                {req}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between border-t border-gray-700/50 pt-4">
          <div>
            <p className="text-xs text-gray-500">Snapshot</p>
            <p className="text-sm font-mono text-gray-300">{airdrop.snapshotDate}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">Time Left</p>
            <CountdownTimer endDate={airdrop.endDate} />
          </div>
        </div>
      </div>
    </div>
  );
}

function AirdropTimelineEntry({ airdrop }: { airdrop: Airdrop }) {
  const colors = statusColors[airdrop.status];

  return (
    <div
      className={`rounded-lg border ${colors.border} ${colors.bg} p-4 transition-all hover:border-gray-600`}
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-2">
            <h4 className="font-bold text-white">{airdrop.name}</h4>
            <span className={`rounded px-2 py-1 text-xs font-semibold ${colors.text}`}>
              {airdrop.status}
            </span>
          </div>
          <p className="mb-3 text-sm text-gray-400">{airdrop.description}</p>

          <div className="mb-3 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 text-xs text-gray-300">
              {chainIcons[airdrop.chain]} {airdrop.chain}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 text-xs font-mono text-cyan-400">
              ${airdrop.ticker}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-gray-800 px-3 py-1 text-xs text-green-400">
              {airdrop.estimatedValue}
            </span>
          </div>

          <details className="cursor-pointer">
            <summary className="text-xs font-semibold text-gray-400 hover:text-gray-300">
              View Eligibility →
            </summary>
            <ul className="mt-2 space-y-1 bg-black/20 rounded p-2">
              {airdrop.eligibility.map((req, idx) => (
                <li key={idx} className="text-xs text-gray-400 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-cyan-500" />
                  {req}
                </li>
              ))}
            </ul>
          </details>
        </div>
        <div className="ml-4 flex-shrink-0 text-right">
          <p className="text-xs text-gray-500">Snapshot</p>
          <p className="text-sm font-mono text-gray-300">{airdrop.snapshotDate}</p>
        </div>
      </div>
    </div>
  );
}

export default function AirdropsPage() {
  const [selectedChain, setSelectedChain] = useState<Chain | 'All'>('All');
  const [selectedStatus, setSelectedStatus] = useState<Status | 'All'>('All');
  const [selectedMonth, setSelectedMonth] = useState<number | 'All'>('All');

  const chains = ['All', 'Ethereum', 'Arbitrum', 'Polygon', 'Optimism', 'Base', 'Solana'] as const;
  const statuses = ['All', 'Confirmed', 'Rumored', 'Live', 'Ended'] as const;
  const months = ['All', 3, 4, 5, 6] as const;
  const monthNames: Record<number, string> = {
    3: 'March 2026',
    4: 'April 2026',
    5: 'May 2026',
    6: 'June 2026',
  };

  const hotAirdrops = airdrops.filter((a) => a.status === 'Live' || a.status === 'Confirmed').slice(0, 5);

  const filteredAirdrops = useMemo(() => {
    return airdrops.filter((airdrop) => {
      if (selectedChain !== 'All' && airdrop.chain !== selectedChain) return false;
      if (selectedStatus !== 'All' && airdrop.status !== selectedStatus) return false;
      if (selectedMonth !== 'All' && airdrop.month !== selectedMonth) return false;
      return true;
    });
  }, [selectedChain, selectedStatus, selectedMonth]);

  const groupedByMonth = useMemo(() => {
    const groups: Record<number, Airdrop[]> = {};
    filteredAirdrops.forEach((airdrop) => {
      if (!groups[airdrop.month]) {
        groups[airdrop.month] = [];
      }
      groups[airdrop.month].push(airdrop);
    });
    return groups;
  }, [filteredAirdrops]);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-gray-800 bg-gradient-to-b from-gray-900 to-gray-950 px-4 py-20 sm:px-6 lg:px-8">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5" />
          <div className="absolute top-20 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Airdrop Calendar
            </span>
            <span className="block text-white">&</span>
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Tracker
            </span>
          </h1>
          <p className="text-lg text-gray-400 sm:text-xl">
            Never miss free crypto again. Track, plan, and maximize your airdrop eligibility with real-time updates
            and detailed requirements.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hot Airdrops Section */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Zap className="h-6 w-6 text-amber-400" />
            <h2 className="text-2xl font-bold text-white">Hot Airdrops</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {hotAirdrops.map((airdrop) => (
              <HotAirdropCard key={airdrop.id} airdrop={airdrop} />
            ))}
          </div>
        </section>

        {/* Filters Section */}
        <section className="mb-12 rounded-lg border border-gray-800 bg-gray-900/50 p-6">
          <h3 className="mb-6 text-lg font-bold text-white">Filter Airdrops</h3>
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Chain Filter */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-300">Blockchain</label>
              <div className="space-y-2">
                {chains.map((chain) => (
                  <label key={chain} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="chain"
                      value={chain}
                      checked={selectedChain === chain}
                      onChange={(e) => setSelectedChain(e.target.value as Chain | 'All')}
                      className="h-4 w-4 rounded border-gray-600 bg-gray-800 accent-cyan-500"
                    />
                    <span className="text-sm text-gray-300">{chain}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-300">Status</label>
              <div className="space-y-2">
                {statuses.map((status) => (
                  <label key={status} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="status"
                      value={status}
                      checked={selectedStatus === status}
                      onChange={(e) => setSelectedStatus(e.target.value as Status | 'All')}
                      className="h-4 w-4 rounded border-gray-600 bg-gray-800 accent-cyan-500"
                    />
                    <span className="text-sm text-gray-300">{status}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Month Filter */}
            <div>
              <label className="mb-3 block text-sm font-semibold text-gray-300">Month</label>
              <div className="space-y-2">
                {months.map((month) => (
                  <label key={month} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="month"
                      value={month}
                      checked={selectedMonth === month}
                      onChange={(e) => setSelectedMonth(e.target.value === 'All' ? 'All' : parseInt(e.target.value))}
                      className="h-4 w-4 rounded border-gray-600 bg-gray-800 accent-cyan-500"
                    />
                    <span className="text-sm text-gray-300">
                      {month === 'All' ? 'All Months' : monthNames[month]}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="mb-16">
          <div className="mb-8 flex items-center gap-3">
            <Calendar className="h-6 w-6 text-cyan-400" />
            <h2 className="text-2xl font-bold text-white">Airdrop Timeline</h2>
          </div>

          {Object.keys(groupedByMonth).length === 0 ? (
            <div className="rounded-lg border border-gray-800 bg-gray-900/30 p-8 text-center">
              <p className="text-gray-400">No airdrops match your filters. Try adjusting your selections.</p>
            </div>
          ) : (
            <div className="space-y-12">
              {(selectedMonth === 'All' ? [3, 4, 5, 6] : [selectedMonth as number])
                .filter((month) => groupedByMonth[month])
                .map((month) => (
                  <div key={month}>
                    <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                      <span className="inline-block h-1 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                      {monthNames[month]}
                    </h3>
                    <div className="space-y-4">
                      {groupedByMonth[month].map((airdrop) => (
                        <AirdropTimelineEntry key={airdrop.id} airdrop={airdrop} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </section>

        {/* Strategy Guide Section */}
        <section className="rounded-lg border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-8">
          <div className="mb-8 flex items-center gap-3">
            <TrendingUp className="h-6 w-6 text-green-400" />
            <h2 className="text-2xl font-bold text-white">Airdrop Strategy Guide</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Understand Eligibility',
                description:
                  'Read requirements carefully before participating. Common criteria include trading volume, holdings, and early adoption.',
              },
              {
                title: 'Record Snapshots',
                description:
                  'Mark snapshot dates on your calendar. Missing a snapshot means missing that airdrop. Set reminders 48 hours before.',
              },
              {
                title: 'Diversify Chains',
                description:
                  'Participate across multiple blockchains to increase airdrop opportunities. Each ecosystem rewards early users.',
              },
              {
                title: 'Track Wallets',
                description:
                  'Use separate wallets for different strategies. Document which address participated where for claim verification.',
              },
              {
                title: 'Verify Sources',
                description:
                  'Only interact with official contracts and websites. Scammers impersonate projects to steal funds and data.',
              },
              {
                title: 'Calculate Gas Costs',
                description:
                  'Factor in gas fees when evaluating small airdrops. Sometimes the cost exceeds the airdrop value on expensive networks.',
              },
            ].map((guide, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-gray-800 bg-black/30 p-5 transition-all hover:border-gray-700"
              >
                <h3 className="mb-2 font-bold text-cyan-400">{guide.title}</h3>
                <p className="text-sm text-gray-400">{guide.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border-l-4 border-cyan-500 bg-cyan-500/5 p-5">
            <p className="text-sm text-gray-300">
              <span className="font-bold text-cyan-400">Pro Tip:</span> Join Discord communities and follow project
              Twitter accounts for airdrop announcements. Many projects announce airdrops ahead of schedule to reward
              early community members.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16 grid gap-6 sm:grid-cols-4">
          {[
            { label: 'Total Airdrops', value: airdrops.length },
            { label: 'Confirmed', value: airdrops.filter((a) => a.status === 'Confirmed').length },
            { label: 'Live Now', value: airdrops.filter((a) => a.status === 'Live').length },
            {
              label: 'Potential Value',
              value: '$8,500+',
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-800 bg-gray-900/50 p-6 text-center transition-all hover:border-cyan-500/30"
            >
              <p className="text-sm text-gray-400">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-cyan-400">{stat.value}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export const metadata = {
  title: 'Airdrop Calendar & Tracker | degen0x - Never Miss Free Crypto',
  description:
    'Track upcoming cryptocurrency airdrops with real-time countdowns, eligibility requirements, and strategy guides. Never miss free crypto again.',
  keywords: 'crypto airdrops, airdrop tracker, free crypto, ethereum airdrops, defi airdrops, blockchain',
  openGraph: {
    title: 'Airdrop Calendar & Tracker | degen0x',
    description: 'Never miss free crypto again. Track and maximize your airdrop eligibility.',
  },
};
