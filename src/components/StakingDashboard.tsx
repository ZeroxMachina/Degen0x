'use client';

import { useState, useMemo } from 'react';
import { ArrowUpRight, TrendingUp, Shield, DollarSign, Calculator } from 'lucide-react';

// Types
interface StakingProtocol {
  id: string;
  name: string;
  chain: 'Ethereum' | 'Solana' | 'Cosmos' | 'Polkadot';
  token: string;
  apy: number;
  tvl: string;
  minStake: string;
  riskLevel: 'Low' | 'Medium' | 'High';
}

// Staking Protocol Data
const STAKING_PROTOCOLS: StakingProtocol[] = [
  // Ethereum
  {
    id: 'lido-eth',
    name: 'Lido',
    chain: 'Ethereum',
    token: 'stETH',
    apy: 3.8,
    tvl: '$35.2B',
    minStake: '0.01 ETH',
    riskLevel: 'Low',
  },
  {
    id: 'rocket-pool-eth',
    name: 'Rocket Pool',
    chain: 'Ethereum',
    token: 'rETH',
    apy: 3.9,
    tvl: '$2.4B',
    minStake: '0.01 ETH',
    riskLevel: 'Low',
  },
  {
    id: 'stakewise-eth',
    name: 'Stake.Wise',
    chain: 'Ethereum',
    token: 'swETH',
    apy: 4.1,
    tvl: '$562M',
    minStake: '0.01 ETH',
    riskLevel: 'Medium',
  },
  {
    id: 'frax-eth',
    name: 'Frax',
    chain: 'Ethereum',
    token: 'sfrxETH',
    apy: 4.3,
    tvl: '$1.6B',
    minStake: '0.01 ETH',
    riskLevel: 'Low',
  },

  // Solana
  {
    id: 'marinade-sol',
    name: 'Marinade',
    chain: 'Solana',
    token: 'mSOL',
    apy: 7.2,
    tvl: '$4.8B',
    minStake: '0.01 SOL',
    riskLevel: 'Low',
  },
  {
    id: 'jito-sol',
    name: 'Jito',
    chain: 'Solana',
    token: 'JitoSOL',
    apy: 8.1,
    tvl: '$1.2B',
    minStake: '1 SOL',
    riskLevel: 'Medium',
  },
  {
    id: 'sanctum-sol',
    name: 'Sanctum',
    chain: 'Solana',
    token: 'sSOL',
    apy: 7.5,
    tvl: '$380M',
    minStake: '0.01 SOL',
    riskLevel: 'Medium',
  },
  {
    id: 'blaze-sol',
    name: 'Blaze',
    chain: 'Solana',
    token: 'blazeSOL',
    apy: 7.8,
    tvl: '$290M',
    minStake: '0.01 SOL',
    riskLevel: 'Medium',
  },

  // Cosmos
  {
    id: 'cosmos-hub',
    name: 'Cosmos Hub',
    chain: 'Cosmos',
    token: 'ATOM',
    apy: 12.5,
    tvl: '$8.2B',
    minStake: '0.000001 ATOM',
    riskLevel: 'Low',
  },
  {
    id: 'osmosis-cosmos',
    name: 'Osmosis',
    chain: 'Cosmos',
    token: 'OSMO',
    apy: 14.3,
    tvl: '$2.1B',
    minStake: '0.000001 OSMO',
    riskLevel: 'Medium',
  },
  {
    id: 'juno-cosmos',
    name: 'Juno',
    chain: 'Cosmos',
    token: 'JUNO',
    apy: 16.8,
    tvl: '$420M',
    minStake: '0.000001 JUNO',
    riskLevel: 'Medium',
  },
  {
    id: 'stride-cosmos',
    name: 'Stride',
    chain: 'Cosmos',
    token: 'STRD',
    apy: 18.2,
    tvl: '$180M',
    minStake: '0.000001 STRD',
    riskLevel: 'High',
  },

  // Polkadot
  {
    id: 'polkadot-native',
    name: 'Polkadot',
    chain: 'Polkadot',
    token: 'DOT',
    apy: 10.2,
    tvl: '$5.8B',
    minStake: '1 DOT',
    riskLevel: 'Low',
  },
  {
    id: 'lido-polkadot',
    name: 'Lido (Polkadot)',
    chain: 'Polkadot',
    token: 'stDOT',
    apy: 10.1,
    tvl: '$620M',
    minStake: '0.01 DOT',
    riskLevel: 'Low',
  },
  {
    id: 'acala-polkadot',
    name: 'Acala',
    chain: 'Polkadot',
    token: 'LDOT',
    apy: 11.5,
    tvl: '$280M',
    minStake: '0.01 DOT',
    riskLevel: 'Medium',
  },
  {
    id: 'taiga-polkadot',
    name: 'Taiga',
    chain: 'Polkadot',
    token: 'tDOT',
    apy: 12.3,
    tvl: '$95M',
    minStake: '0.01 DOT',
    riskLevel: 'Medium',
  },
];

function getRiskColor(risk: 'Low' | 'Medium' | 'High'): string {
  switch (risk) {
    case 'Low':
      return 'bg-green-500/20 text-green-400 border-green-500/30';
    case 'Medium':
      return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    case 'High':
      return 'bg-red-500/20 text-red-400 border-red-500/30';
  }
}

function getRiskDot(risk: 'Low' | 'Medium' | 'High'): string {
  switch (risk) {
    case 'Low':
      return 'bg-green-400';
    case 'Medium':
      return 'bg-yellow-400';
    case 'High':
      return 'bg-red-400';
  }
}

function getChainColor(chain: string): string {
  switch (chain) {
    case 'Ethereum':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    case 'Solana':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    case 'Cosmos':
      return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
    case 'Polkadot':
      return 'bg-rose-500/20 text-rose-300 border-rose-500/30';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  }
}

// Staking Calculator Component
function StakingCalculator() {
  const [amount, setAmount] = useState<string>('1');
  const [selectedProtocol, setSelectedProtocol] = useState<string>('lido-eth');
  const [period, setPeriod] = useState<'daily' | 'monthly' | 'yearly'>('yearly');

  const protocol = STAKING_PROTOCOLS.find((p) => p.id === selectedProtocol);

  const calculateEarnings = () => {
    if (!protocol || !amount) return { daily: 0, monthly: 0, yearly: 0 };

    const principal = parseFloat(amount);
    const apy = protocol.apy / 100;

    return {
      daily: (principal * apy) / 365,
      monthly: (principal * apy) / 12,
      yearly: principal * apy,
    };
  };

  const earnings = calculateEarnings();

  const getPeriodValue = () => {
    switch (period) {
      case 'daily':
        return earnings.daily;
      case 'monthly':
        return earnings.monthly;
      case 'yearly':
        return earnings.yearly;
    }
  };

  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="w-5 h-5 text-blue-400" />
        <h3 className="text-lg font-semibold text-white">Staking Calculator</h3>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Stake Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Protocol Select */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Protocol</label>
          <select
            value={selectedProtocol}
            onChange={(e) => setSelectedProtocol(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
          >
            {STAKING_PROTOCOLS.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.chain}) - {p.apy}%
              </option>
            ))}
          </select>
        </div>

        {/* Period Select */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Period</label>
          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value as 'daily' | 'monthly' | 'yearly')}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
          >
            <option value="daily">Daily</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      {/* Earnings Display */}
      {protocol && amount && (
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-lg p-4">
          <div className="flex items-baseline justify-between">
            <div>
              <p className="text-sm text-gray-300 mb-1">Projected Earnings ({period})</p>
              <p className="text-3xl font-bold text-white">
                {getPeriodValue().toFixed(6)} {protocol.token}
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400 mb-1">APY</p>
              <p className="text-2xl font-bold text-green-400">{protocol.apy}%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Filter Controls Component
function FilterControls({
  chainFilter,
  sortBy,
  onChainChange,
  onSortChange,
}: {
  chainFilter: string;
  sortBy: string;
  onChainChange: (value: string) => void;
  onSortChange: (value: string) => void;
}) {
  return (
    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-white mb-4">Filter & Sort</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Chain Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Blockchain</label>
          <select
            value={chainFilter}
            onChange={(e) => onChainChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500"
          >
            <option value="">All Blockchains</option>
            <option value="Ethereum">Ethereum</option>
            <option value="Solana">Solana</option>
            <option value="Cosmos">Cosmos</option>
            <option value="Polkadot">Polkadot</option>
          </select>
        </div>

        {/* Sort Options */}
        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full px-3 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white text-sm focus:outline-none focus:border-blue-500"
          >
            <option value="apy-desc">APY (High to Low)</option>
            <option value="apy-asc">APY (Low to High)</option>
            <option value="tvl-desc">TVL (High to Low)</option>
            <option value="name">Name (A-Z)</option>
          </select>
        </div>
      </div>
    </div>
  );
}

// Protocol Table Component
function ProtocolTable({ protocols }: { protocols: StakingProtocol[] }) {
  if (protocols.length === 0) {
    return (
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-12 text-center">
        <p className="text-gray-400">No protocols match your filters. Try adjusting your criteria.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-800 border-b border-gray-700">
            <th className="text-left px-4 py-3 text-gray-400 font-semibold">Protocol</th>
            <th className="text-left px-4 py-3 text-gray-400 font-semibold hidden sm:table-cell">Blockchain</th>
            <th className="text-left px-4 py-3 text-gray-400 font-semibold hidden md:table-cell">Token</th>
            <th className="text-right px-4 py-3 text-gray-400 font-semibold">APY</th>
            <th className="text-right px-4 py-3 text-gray-400 font-semibold hidden lg:table-cell">TVL</th>
            <th className="text-left px-4 py-3 text-gray-400 font-semibold hidden lg:table-cell">Min Stake</th>
            <th className="text-center px-4 py-3 text-gray-400 font-semibold">Risk</th>
          </tr>
        </thead>
        <tbody>
          {protocols.map((protocol) => (
            <tr key={protocol.id} className="border-b border-gray-700 hover:bg-gray-700/30 transition-colors">
              {/* Protocol Name */}
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-xs font-bold text-white shrink-0">
                    {protocol.name.charAt(0)}
                  </div>
                  <span className="font-semibold text-white">{protocol.name}</span>
                </div>
              </td>

              {/* Blockchain */}
              <td className="px-4 py-3 hidden sm:table-cell">
                <span className={`text-xs px-2 py-1 rounded-full border font-medium ${getChainColor(protocol.chain)}`}>
                  {protocol.chain}
                </span>
              </td>

              {/* Token */}
              <td className="px-4 py-3 hidden md:table-cell text-gray-300">{protocol.token}</td>

              {/* APY */}
              <td className="px-4 py-3 text-right">
                <div className="flex items-center justify-end gap-1">
                  <ArrowUpRight className="w-4 h-4 text-green-400" />
                  <span className="font-bold text-lg text-green-400">{protocol.apy.toFixed(1)}%</span>
                </div>
              </td>

              {/* TVL */}
              <td className="px-4 py-3 text-right hidden lg:table-cell text-white">{protocol.tvl}</td>

              {/* Min Stake */}
              <td className="px-4 py-3 hidden lg:table-cell text-gray-300 text-xs">{protocol.minStake}</td>

              {/* Risk Level */}
              <td className="px-4 py-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${getRiskDot(protocol.riskLevel)}`} />
                  <span className={`text-xs font-semibold px-2 py-1 rounded border ${getRiskColor(protocol.riskLevel)}`}>
                    {protocol.riskLevel}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Statistics Cards Component
function StatisticsCards({ protocols }: { protocols: StakingProtocol[] }) {
  const stats = {
    totalProtocols: STAKING_PROTOCOLS.length,
    avgAPY: (STAKING_PROTOCOLS.reduce((a, b) => a + b.apy, 0) / STAKING_PROTOCOLS.length).toFixed(1),
    highestAPY: Math.max(...STAKING_PROTOCOLS.map((p) => p.apy)).toFixed(1),
    totalTVL: '$51B+',
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
        <div className="text-xl mb-2">🏛️</div>
        <div className="text-xs text-gray-400 mb-1">Total Protocols</div>
        <div className="text-2xl font-bold text-white">{stats.totalProtocols}</div>
      </div>
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
        <div className="text-xl mb-2">📊</div>
        <div className="text-xs text-gray-400 mb-1">Average APY</div>
        <div className="text-2xl font-bold text-green-400">{stats.avgAPY}%</div>
      </div>
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
        <div className="text-xl mb-2">🚀</div>
        <div className="text-xs text-gray-400 mb-1">Highest APY</div>
        <div className="text-2xl font-bold text-yellow-400">{stats.highestAPY}%</div>
      </div>
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4">
        <div className="text-xl mb-2">💰</div>
        <div className="text-xs text-gray-400 mb-1">Combined TVL</div>
        <div className="text-2xl font-bold text-white">{stats.totalTVL}</div>
      </div>
    </div>
  );
}

// Top Staking Opportunities Component
function TopStakingOpportunities() {
  const topThree = [...STAKING_PROTOCOLS].sort((a, b) => b.apy - a.apy).slice(0, 3);

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <TrendingUp className="w-6 h-6 text-yellow-400" />
        Top Staking Opportunities
      </h2>
      <div className="grid md:grid-cols-3 gap-4">
        {topThree.map((protocol, idx) => (
          <div
            key={protocol.id}
            className="bg-gradient-to-br from-yellow-500/20 to-orange-500/10 border border-yellow-500/30 rounded-xl p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="text-sm text-gray-300 mb-1">#{idx + 1} Highest APY</div>
                <h3 className="text-lg font-bold text-white">{protocol.name}</h3>
              </div>
              <span className="text-2xl font-bold text-yellow-400">{protocol.apy}%</span>
            </div>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Token:</span>
                <span className="font-medium text-white">{protocol.token}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Chain:</span>
                <span className="font-medium text-white">{protocol.chain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">TVL:</span>
                <span className="font-medium text-white">{protocol.tvl}</span>
              </div>
              <div className="flex justify-between items-center pt-2 border-t border-gray-700">
                <span className="text-gray-400">Risk:</span>
                <span className={`text-xs font-semibold px-2 py-1 rounded border ${getRiskColor(protocol.riskLevel)}`}>
                  {protocol.riskLevel}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Main StakingDashboard Component
export default function StakingDashboard() {
  const [chainFilter, setChainFilter] = useState('');
  const [sortBy, setSortBy] = useState('apy-desc');

  // Filter and sort protocols
  const filteredAndSortedProtocols = useMemo(() => {
    let filtered = [...STAKING_PROTOCOLS];

    if (chainFilter) {
      filtered = filtered.filter((p) => p.chain === chainFilter);
    }

    switch (sortBy) {
      case 'apy-asc':
        filtered.sort((a, b) => a.apy - b.apy);
        break;
      case 'apy-desc':
        filtered.sort((a, b) => b.apy - a.apy);
        break;
      case 'tvl-desc': {
        const tvlOrder: Record<string, number> = {
          '$35.2B': 35200,
          '$8.2B': 8200,
          '$5.8B': 5800,
          '$4.8B': 4800,
          '$2.4B': 2400,
          '$2.1B': 2100,
          '$1.6B': 1600,
          '$1.2B': 1200,
          '$620M': 620,
          '$562M': 562,
          '$420M': 420,
          '$380M': 380,
          '$290M': 290,
          '$280M': 280,
          '$180M': 180,
          '$95M': 95,
        };
        filtered.sort((a, b) => (tvlOrder[b.tvl] || 0) - (tvlOrder[a.tvl] || 0));
        break;
      }
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return filtered;
  }, [chainFilter, sortBy]);

  return (
    <div className="space-y-8">
      {/* Top Staking Opportunities */}
      <TopStakingOpportunities />

      {/* Statistics Cards */}
      <StatisticsCards protocols={filteredAndSortedProtocols} />

      {/* Staking Calculator */}
      <StakingCalculator />

      {/* Filter Controls */}
      <FilterControls
        chainFilter={chainFilter}
        sortBy={sortBy}
        onChainChange={setChainFilter}
        onSortChange={setSortBy}
      />

      {/* Results Info */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-400">
          Showing <span className="font-semibold text-white">{filteredAndSortedProtocols.length}</span> of{' '}
          <span className="font-semibold text-white">{STAKING_PROTOCOLS.length}</span> protocols
        </p>
        {chainFilter && (
          <button
            onClick={() => setChainFilter('')}
            className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
          >
            Clear filters
          </button>
        )}
      </div>

      {/* Protocol Table */}
      <section>
        <ProtocolTable protocols={filteredAndSortedProtocols} />
        <p className="text-xs text-gray-500 mt-3">
          Data is for informational purposes and updated regularly. Always verify current rates before staking.
        </p>
      </section>

      {/* Risk Warning */}
      <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
        <h3 className="font-semibold text-red-400 mb-2 flex items-center gap-2">
          <Shield className="w-5 h-5" />
          Important Risk Disclaimer
        </h3>
        <p className="text-sm text-gray-300">
          Staking involves risks including validator penalties, smart contract vulnerabilities, market volatility, and
          potential loss of funds. While lower-risk protocols like Lido have large TVLs, all staking carries some
          degree of risk. Never stake more than you can afford to lose. Conduct thorough research before committing
          funds to any protocol.
        </p>
      </div>

      {/* Educational Info */}
      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-green-400" />
          How Staking Works
        </h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-white mb-2">Proof of Stake (PoS)</h4>
            <p className="text-sm text-gray-300">
              Blockchains using PoS allow you to lock up your tokens to help validate transactions and secure the
              network. In return, you earn staking rewards (APY). Unlike Proof of Work, PoS is energy-efficient.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Liquid Staking</h4>
            <p className="text-sm text-gray-300">
              Protocols like Lido and Rocket Pool allow you to stake without locking your tokens. You receive derivative
              tokens (stETH, rETH) that you can trade or use in DeFi, while still earning staking rewards.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Slashing Risk</h4>
            <p className="text-sm text-gray-300">
              Validators who behave maliciously or go offline can have a portion of their stake "slashed." This is why
              liquid staking tokens spread risk across many validators.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Lock-up Periods</h4>
            <p className="text-sm text-gray-300">
              Some protocols require minimum lock-up periods before you can unstake. Liquid staking solutions remove
              this friction by offering derivative tokens.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
