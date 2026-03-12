'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

// Metadata comment since this is a 'use client' component
// Title: Token Vesting & Unlock Tracker
// Description: Track token vesting schedules, unlock events, and calculate price impact of major crypto token releases

interface VestingSchedule {
  token: string;
  symbol: string;
  icon: string;
  totalSupply: number;
  cliff: number;
  linearVesting: number;
  unlockDates: Array<{ date: string; amount: number; percent: number }>;
  nextUnlock: string;
  nextUnlockAmount: number;
  currentUnlocked: number;
  type: 'cliff' | 'linear' | 'milestone';
  inflationRate: number;
}

interface Alert {
  id: string;
  token: string;
  type: 'big-unlock' | 'milestone-approaching' | 'custom-date';
  triggerValue: number;
  enabled: boolean;
  daysUntil: number;
}

const VESTING_DATA: VestingSchedule[] = [
  {
    token: 'Arbitrum',
    symbol: 'ARB',
    icon: '⚙️',
    totalSupply: 10000,
    cliff: 0,
    linearVesting: 4,
    unlockDates: [
      { date: '2023-03-16', amount: 62500000, percent: 62.5 },
      { date: '2024-04-16', amount: 12500000, percent: 12.5 },
      { date: '2025-04-16', amount: 12500000, percent: 12.5 },
      { date: '2026-04-16', amount: 12500000, percent: 12.5 },
    ],
    nextUnlock: '2024-06-15',
    nextUnlockAmount: 3125000,
    currentUnlocked: 75,
    type: 'linear',
    inflationRate: 3.2,
  },
  {
    token: 'Optimism',
    symbol: 'OP',
    icon: '🔴',
    totalSupply: 4294967296,
    cliff: 0,
    linearVesting: 2,
    unlockDates: [
      { date: '2022-05-31', amount: 2147483648, percent: 50 },
      { date: '2024-05-31', amount: 1073741824, percent: 25 },
      { date: '2025-05-31', amount: 537870912, percent: 12.5 },
      { date: '2026-05-31', amount: 537870912, percent: 12.5 },
    ],
    nextUnlock: '2024-08-10',
    nextUnlockAmount: 268435456,
    currentUnlocked: 87.5,
    type: 'linear',
    inflationRate: 2.8,
  },
  {
    token: 'Aptos',
    symbol: 'APT',
    icon: '⭐',
    totalSupply: 1000000000,
    cliff: 12,
    linearVesting: 48,
    unlockDates: [
      { date: '2022-10-12', amount: 0, percent: 0 },
      { date: '2023-10-12', amount: 125000000, percent: 12.5 },
      { date: '2024-10-12', amount: 125000000, percent: 12.5 },
      { date: '2025-10-12', amount: 125000000, percent: 12.5 },
      { date: '2026-10-12', amount: 625000000, percent: 62.5 },
    ],
    nextUnlock: '2024-07-20',
    nextUnlockAmount: 20833333,
    currentUnlocked: 37.5,
    type: 'cliff',
    inflationRate: 4.1,
  },
  {
    token: 'Sui',
    symbol: 'SUI',
    icon: '🌊',
    totalSupply: 10000000000,
    cliff: 12,
    linearVesting: 36,
    unlockDates: [
      { date: '2023-05-03', amount: 0, percent: 0 },
      { date: '2024-05-03', amount: 3000000000, percent: 30 },
      { date: '2025-05-03', amount: 3500000000, percent: 35 },
      { date: '2026-05-03', amount: 3500000000, percent: 35 },
    ],
    nextUnlock: '2024-07-25',
    nextUnlockAmount: 83333333,
    currentUnlocked: 30,
    type: 'cliff',
    inflationRate: 3.7,
  },
  {
    token: 'Sei',
    symbol: 'SEI',
    icon: '🔷',
    totalSupply: 10000000000,
    cliff: 6,
    linearVesting: 24,
    unlockDates: [
      { date: '2023-08-15', amount: 1500000000, percent: 15 },
      { date: '2024-08-15', amount: 2000000000, percent: 20 },
      { date: '2025-02-15', amount: 3000000000, percent: 30 },
      { date: '2025-08-15', amount: 3500000000, percent: 35 },
    ],
    nextUnlock: '2024-06-20',
    nextUnlockAmount: 166666667,
    currentUnlocked: 35,
    type: 'linear',
    inflationRate: 5.2,
  },
  {
    token: 'Starknet',
    symbol: 'STRK',
    icon: '⚡',
    totalSupply: 10000000000,
    cliff: 1,
    linearVesting: 48,
    unlockDates: [
      { date: '2024-02-20', amount: 1500000000, percent: 15 },
      { date: '2024-11-20', amount: 2000000000, percent: 20 },
      { date: '2025-11-20', amount: 3000000000, percent: 30 },
      { date: '2026-11-20', amount: 3500000000, percent: 35 },
    ],
    nextUnlock: '2024-07-10',
    nextUnlockAmount: 41666667,
    currentUnlocked: 15,
    type: 'linear',
    inflationRate: 6.4,
  },
  {
    token: 'Jupiter',
    symbol: 'JUP',
    icon: '🪐',
    totalSupply: 10000000000,
    cliff: 0,
    linearVesting: 24,
    unlockDates: [
      { date: '2024-01-31', amount: 2000000000, percent: 20 },
      { date: '2025-01-31', amount: 2500000000, percent: 25 },
      { date: '2026-01-31', amount: 2750000000, percent: 27.5 },
      { date: '2027-01-31', amount: 2750000000, percent: 27.5 },
    ],
    nextUnlock: '2024-08-05',
    nextUnlockAmount: 208333333,
    currentUnlocked: 20,
    type: 'linear',
    inflationRate: 3.9,
  },
  {
    token: 'Worldcoin',
    symbol: 'WLD',
    icon: '🌍',
    totalSupply: 1000000000,
    cliff: 2,
    linearVesting: 60,
    unlockDates: [
      { date: '2023-07-24', amount: 100000000, percent: 10 },
      { date: '2024-07-24', amount: 150000000, percent: 15 },
      { date: '2025-07-24', amount: 250000000, percent: 25 },
      { date: '2026-07-24', amount: 500000000, percent: 50 },
    ],
    nextUnlock: '2024-09-15',
    nextUnlockAmount: 12500000,
    currentUnlocked: 25,
    type: 'cliff',
    inflationRate: 4.6,
  },
  {
    token: 'Celestia',
    symbol: 'TIA',
    icon: '🌟',
    totalSupply: 1000000000,
    cliff: 12,
    linearVesting: 36,
    unlockDates: [
      { date: '2023-10-31', amount: 50000000, percent: 5 },
      { date: '2024-10-31', amount: 150000000, percent: 15 },
      { date: '2025-10-31', amount: 300000000, percent: 30 },
      { date: '2026-10-31', amount: 500000000, percent: 50 },
    ],
    nextUnlock: '2024-07-30',
    nextUnlockAmount: 25000000,
    currentUnlocked: 20,
    type: 'cliff',
    inflationRate: 3.3,
  },
  {
    token: 'Pyth Network',
    symbol: 'PYTH',
    icon: '📊',
    totalSupply: 1000000000,
    cliff: 0,
    linearVesting: 36,
    unlockDates: [
      { date: '2023-12-08', amount: 100000000, percent: 10 },
      { date: '2024-12-08', amount: 200000000, percent: 20 },
      { date: '2025-12-08', amount: 300000000, percent: 30 },
      { date: '2026-12-08', amount: 400000000, percent: 40 },
    ],
    nextUnlock: '2024-08-20',
    nextUnlockAmount: 16666667,
    currentUnlocked: 10,
    type: 'linear',
    inflationRate: 5.8,
  },
  {
    token: 'Jito',
    symbol: 'JTO',
    icon: '⚙️',
    totalSupply: 1000000000,
    cliff: 3,
    linearVesting: 24,
    unlockDates: [
      { date: '2024-01-15', amount: 150000000, percent: 15 },
      { date: '2024-12-15', amount: 200000000, percent: 20 },
      { date: '2025-12-15', amount: 250000000, percent: 25 },
      { date: '2026-12-15', amount: 400000000, percent: 40 },
    ],
    nextUnlock: '2024-07-28',
    nextUnlockAmount: 33333333,
    currentUnlocked: 15,
    type: 'linear',
    inflationRate: 4.2,
  },
  {
    token: 'ZRO Token',
    symbol: 'ZRO',
    icon: '0️⃣',
    totalSupply: 500000000,
    cliff: 6,
    linearVesting: 36,
    unlockDates: [
      { date: '2025-06-15', amount: 25000000, percent: 5 },
      { date: '2026-06-15', amount: 75000000, percent: 15 },
      { date: '2027-06-15', amount: 150000000, percent: 30 },
      { date: '2028-06-15', amount: 250000000, percent: 50 },
    ],
    nextUnlock: '2024-09-10',
    nextUnlockAmount: 5000000,
    currentUnlocked: 0,
    type: 'cliff',
    inflationRate: 7.2,
  },
];

interface MonthlyUnlock {
  month: string;
  amount: number;
  percentage: number;
}

export default function TokenVestingPage() {
  const [selectedToken, setSelectedToken] = useState<string>('ARB');
  const [tokenAmount, setTokenAmount] = useState<number>(1000000);
  const [vestingType, setVestingType] = useState<'cliff' | 'linear' | 'milestone'>('linear');
  const [monthsToVest, setMonthsToVest] = useState<number>(24);
  const [sortBy, setSortBy] = useState<'unlock-percent' | 'next-unlock' | 'inflation'>('unlock-percent');
  const [alerts, setAlerts] = useState<Alert[]>([
    {
      id: '1',
      token: 'ARB',
      type: 'big-unlock',
      triggerValue: 5000000,
      enabled: true,
      daysUntil: 126,
    },
    {
      id: '2',
      token: 'APT',
      type: 'milestone-approaching',
      triggerValue: 50,
      enabled: true,
      daysUntil: 87,
    },
  ]);

  const current = VESTING_DATA.find((v) => v.symbol === selectedToken) || VESTING_DATA[0];

  // Calculate monthly unlock schedule
  const monthlyUnlocks = useMemo<MonthlyUnlock[]>(() => {
    const months: MonthlyUnlock[] = [];
    const vestingMonths = monthsToVest;

    if (vestingType === 'cliff') {
      const cliffMonths = Math.ceil(vestingMonths * 0.25);
      for (let i = 0; i < cliffMonths; i++) {
        months.push({ month: `M${i + 1}`, amount: 0, percentage: 0 });
      }
      const remainingMonths = vestingMonths - cliffMonths;
      const monthlyAmount = tokenAmount / remainingMonths;
      for (let i = cliffMonths; i < vestingMonths; i++) {
        months.push({
          month: `M${i + 1}`,
          amount: monthlyAmount,
          percentage: (monthlyAmount / tokenAmount) * 100,
        });
      }
    } else if (vestingType === 'linear') {
      const monthlyAmount = tokenAmount / vestingMonths;
      for (let i = 0; i < vestingMonths; i++) {
        months.push({
          month: `M${i + 1}`,
          amount: monthlyAmount,
          percentage: (monthlyAmount / tokenAmount) * 100,
        });
      }
    } else {
      // Milestone-based
      const milestone1 = (tokenAmount * 25) / 100;
      const milestone2 = (tokenAmount * 35) / 100;
      const milestone3 = (tokenAmount * 40) / 100;
      months.push({ month: 'M1-3', amount: milestone1, percentage: 25 });
      months.push({ month: 'M4-6', amount: 0, percentage: 0 });
      months.push({ month: 'M7-9', amount: milestone2, percentage: 35 });
      months.push({ month: 'M10-12', amount: milestone3, percentage: 40 });
    }

    return months;
  }, [tokenAmount, vestingType, monthsToVest]);

  const sortedTokens = useMemo(() => {
    const sorted = [...VESTING_DATA];
    if (sortBy === 'unlock-percent') {
      return sorted.sort((a, b) => b.currentUnlocked - a.currentUnlocked);
    } else if (sortBy === 'next-unlock') {
      return sorted.sort((a, b) => new Date(a.nextUnlock).getTime() - new Date(b.nextUnlock).getTime());
    } else {
      return sorted.sort((a, b) => b.inflationRate - a.inflationRate);
    }
  }, [sortBy]);

  const maxMonthlyAmount = Math.max(...monthlyUnlocks.map((m) => m.amount));

  const addAlert = () => {
    const newAlert: Alert = {
      id: Date.now().toString(),
      token: 'ARB',
      type: 'big-unlock',
      triggerValue: 1000000,
      enabled: true,
      daysUntil: 30,
    };
    setAlerts([...alerts, newAlert]);
  };

  const toggleAlert = (id: string) => {
    setAlerts(alerts.map((a) => (a.id === id ? { ...a, enabled: !a.enabled } : a)));
  };

  const removeAlert = (id: string) => {
    setAlerts(alerts.filter((a) => a.id !== id));
  };

  return (
    <div className="min-h-screen bg-[#0d1117]">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Tools', href: '/tools' },
            { label: 'Token Vesting Tracker', href: '/tools/token-vesting' },
          ]}
        />

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-black text-[var(--color-text)] mb-3 gradient-text">Token Vesting & Unlock Tracker</h1>
          <p className="text-lg text-gray-400 max-w-3xl">
            Monitor token vesting schedules, unlock events, and calculate the price impact of major cryptocurrency releases.
            Track 12+ major tokens with cliff, linear, and milestone-based vesting schedules.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="glass rounded-xl p-4 border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Current Unlocked</div>
            <div className="text-2xl font-bold text-[var(--color-text)]">{current.currentUnlocked}%</div>
            <div className="text-xs text-green-400 mt-1">On track</div>
          </div>
          <div className="glass rounded-xl p-4 border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Next Unlock</div>
            <div className="text-sm font-bold text-[var(--color-text)]">{current.nextUnlock}</div>
            <div className="text-xs text-blue-400 mt-1">
              {(current.nextUnlockAmount / 1000000).toFixed(1)}M tokens
            </div>
          </div>
          <div className="glass rounded-xl p-4 border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Inflation Rate</div>
            <div className="text-2xl font-bold text-[var(--color-text)]">{current.inflationRate}%</div>
            <div className="text-xs text-orange-400 mt-1">Per unlock</div>
          </div>
          <div className="glass rounded-xl p-4 border border-gray-700">
            <div className="text-xs text-gray-400 mb-1">Total Supply</div>
            <div className="text-sm font-bold text-[var(--color-text)]">{(current.totalSupply / 1000000000).toFixed(2)}B</div>
            <div className="text-xs text-purple-400 mt-1">Tokens</div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Token Selector & Info */}
          <div className="glass rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-4 flex items-center gap-2">
              <span className="text-2xl">{current.icon}</span>
              Token Selection
            </h2>
            <div className="space-y-3">
              {VESTING_DATA.slice(0, 6).map((token) => (
                <button
                  key={token.symbol}
                  onClick={() => setSelectedToken(token.symbol)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedToken === token.symbol
                      ? 'bg-indigo-500/20 border border-indigo-500 text-[var(--color-text)]'
                      : 'bg-gray-800/30 border border-gray-700 text-gray-400 hover:border-gray-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">
                      {token.icon} {token.symbol}
                    </span>
                    <span className="text-xs">{token.currentUnlocked}%</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{token.nextUnlock}</div>
                </button>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <p className="text-xs text-gray-500 mb-3">More tokens:</p>
              <div className="grid grid-cols-2 gap-2">
                {VESTING_DATA.slice(6).map((token) => (
                  <button
                    key={token.symbol}
                    onClick={() => setSelectedToken(token.symbol)}
                    className={`p-2 rounded text-xs font-medium transition-all ${
                      selectedToken === token.symbol
                        ? 'bg-indigo-500/20 border border-indigo-500 text-[var(--color-text)]'
                        : 'bg-gray-800/30 border border-gray-700 text-gray-400 hover:border-gray-600'
                    }`}
                  >
                    {token.icon} {token.symbol}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Vesting Schedule Timeline */}
          <div className="lg:col-span-2 glass rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
              <span>📅</span>
              Vesting Schedule Timeline
            </h2>
            <div className="space-y-4">
              {current.unlockDates.map((unlock, index) => {
                const daysUntil = Math.ceil(
                  (new Date(unlock.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24)
                );
                const isPast = daysUntil < 0;
                return (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            isPast ? 'bg-green-500' : daysUntil < 90 ? 'bg-orange-500' : 'bg-blue-500'
                          }`}
                        />
                        <div>
                          <div className="text-sm font-semibold text-[var(--color-text)]">{unlock.date}</div>
                          <div className="text-xs text-gray-400">
                            {unlock.amount > 0 ? `${(unlock.amount / 1000000).toFixed(1)}M` : 'Cliff Period'} tokens
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-[var(--color-text)]">{unlock.percent}%</div>
                        <div className={`text-xs ${isPast ? 'text-green-400' : 'text-gray-400'}`}>
                          {isPast ? 'Unlocked' : `${daysUntil}d`}
                        </div>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          isPast
                            ? 'bg-green-500'
                            : daysUntil < 90
                              ? 'bg-orange-500'
                              : 'bg-indigo-500'
                        }`}
                        style={{ width: `${unlock.percent}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Vesting Type Badge */}
            <div className="mt-6 pt-6 border-t border-gray-700">
              <p className="text-xs text-gray-500 mb-2">Vesting Type</p>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full">
                <span className="text-xs font-semibold text-blue-400">
                  {current.type === 'cliff' ? '⏸️ Cliff' : current.type === 'linear' ? '📈 Linear' : '🎯 Milestone'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Vesting Impact Calculator */}
        <div className="glass rounded-xl p-6 border border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
            <span>🧮</span>
            Vesting Impact Calculator
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Token Amount</label>
              <input
                type="number"
                value={tokenAmount}
                onChange={(e) => setTokenAmount(Number(e.target.value))}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-[var(--color-text)] placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                placeholder="Enter amount"
              />
              <div className="text-xs text-gray-500 mt-1">
                ${(tokenAmount * 2.45).toLocaleString('en-US', { maximumFractionDigits: 0 })}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Vesting Type</label>
              <select
                value={vestingType}
                onChange={(e) => setVestingType(e.target.value as 'cliff' | 'linear' | 'milestone')}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-[var(--color-text)] focus:outline-none focus:border-indigo-500"
              >
                <option value="linear">📈 Linear</option>
                <option value="cliff">⏸️ Cliff</option>
                <option value="milestone">🎯 Milestone</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--color-text)] mb-2">Vesting Period (Months)</label>
              <input
                type="number"
                value={monthsToVest}
                onChange={(e) => setMonthsToVest(Number(e.target.value))}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-[var(--color-text)] placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                min="1"
                max="60"
              />
            </div>
          </div>

          {/* Monthly Unlock Chart */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">Monthly Unlock Schedule (12 Months)</h3>
            <div className="space-y-3">
              {monthlyUnlocks.slice(0, 12).map((month, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-300 w-12">{month.month}</span>
                    <div className="flex-1 mx-4 bg-gray-700 rounded-full h-6 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all"
                        style={{
                          width: `${(month.amount / maxMonthlyAmount) * 100}%`,
                        }}
                      />
                    </div>
                    <div className="text-right text-sm font-semibold text-[var(--color-text)] w-24">
                      {(month.amount / 1000000).toFixed(1)}M
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Price Impact Analysis */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-700">
            <div className="bg-gray-800/30 rounded-lg p-4">
              <div className="text-xs text-gray-400 mb-1">Maximum Monthly Unlock</div>
              <div className="text-2xl font-bold text-[var(--color-text)]">
                {(maxMonthlyAmount / 1000000).toFixed(1)}M
              </div>
              <div className="text-xs text-orange-400 mt-2">
                ~{((maxMonthlyAmount / tokenAmount) * 100).toFixed(1)}% per month
              </div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-4">
              <div className="text-xs text-gray-400 mb-1">Potential Price Pressure</div>
              <div className="text-2xl font-bold text-red-400">
                -{((maxMonthlyAmount / tokenAmount) * 0.35).toFixed(1)}%
              </div>
              <div className="text-xs text-gray-400 mt-2">Conservative estimate</div>
            </div>
            <div className="bg-gray-800/30 rounded-lg p-4">
              <div className="text-xs text-gray-400 mb-1">Remaining Vested</div>
              <div className="text-2xl font-bold text-indigo-400">
                {(
                  ((tokenAmount - monthlyUnlocks.reduce((sum, m) => sum + m.amount, 0)) / tokenAmount) *
                  100
                ).toFixed(1)}
                %
              </div>
              <div className="text-xs text-gray-400 mt-2">Still locked</div>
            </div>
          </div>
        </div>

        {/* Token Comparison Table */}
        <div className="glass rounded-xl p-6 border border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
            <span>📊</span>
            Token Comparison Table
          </h2>

          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setSortBy('unlock-percent')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                sortBy === 'unlock-percent'
                  ? 'bg-indigo-500 text-[var(--color-text)]'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Sort by % Unlocked
            </button>
            <button
              onClick={() => setSortBy('next-unlock')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                sortBy === 'next-unlock'
                  ? 'bg-indigo-500 text-[var(--color-text)]'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Next Unlock Date
            </button>
            <button
              onClick={() => setSortBy('inflation')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                sortBy === 'inflation'
                  ? 'bg-indigo-500 text-[var(--color-text)]'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              Inflation Rate
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Token</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">% Unlocked</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Next Unlock</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Amount</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Inflation</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-semibold">Type</th>
                </tr>
              </thead>
              <tbody>
                {sortedTokens.map((token) => (
                  <tr
                    key={token.symbol}
                    className="border-b border-gray-700/50 hover:bg-gray-800/30 transition-colors cursor-pointer"
                    onClick={() => setSelectedToken(token.symbol)}
                  >
                    <td className="py-3 px-4 font-semibold text-[var(--color-text)]">
                      <span className="text-lg mr-2">{token.icon}</span>
                      {token.symbol}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="w-20 bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-green-500 to-blue-500"
                            style={{ width: `${token.currentUnlocked}%` }}
                          />
                        </div>
                        <span className="text-[var(--color-text)] font-medium text-xs">{token.currentUnlocked}%</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-gray-400">{token.nextUnlock}</td>
                    <td className="py-3 px-4 text-gray-400">{(token.nextUnlockAmount / 1000000).toFixed(1)}M</td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-2 py-1 rounded text-xs font-semibold ${
                          token.inflationRate > 5
                            ? 'bg-red-500/20 text-red-400'
                            : token.inflationRate > 3
                              ? 'bg-orange-500/20 text-orange-400'
                              : 'bg-green-500/20 text-green-400'
                        }`}
                      >
                        {token.inflationRate}%
                      </span>
                    </td>
                    <td className="py-3 px-4 text-gray-400 text-xs">
                      {token.type === 'cliff' ? '⏸️ Cliff' : token.type === 'linear' ? '📈 Linear' : '🎯 Milestone'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Vesting Schedule Types Explainer */}
        <div className="glass rounded-xl p-6 border border-gray-700 mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
            <span>📚</span>
            Vesting Schedule Types
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20 rounded-lg p-5">
              <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                <span>📈</span>
                Linear Vesting
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Tokens unlock at a constant rate over the vesting period. Predictable and straightforward.
              </p>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Consistent monthly unlocks</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Predictable price pressure</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">✓</span>
                  <span>Examples: ARB, OP, JUP</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20 rounded-lg p-5">
              <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                <span>⏸️</span>
                Cliff Vesting
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                No tokens unlock for an initial period, then a percentage unlocks suddenly on the cliff date.
              </p>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Sudden large unlock events</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>High price volatility risk</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">✓</span>
                  <span>Examples: APT, SUI, STRK</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20 rounded-lg p-5">
              <h3 className="text-lg font-bold text-orange-400 mb-3 flex items-center gap-2">
                <span>🎯</span>
                Milestone-Based
              </h3>
              <p className="text-sm text-gray-300 mb-4">
                Tokens unlock based on achieving specific milestones or events, not purely on time.
              </p>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Tied to protocol achievements</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Unpredictable unlock timing</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-orange-400">✓</span>
                  <span>Retroactive distributions</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700 bg-gray-800/30 rounded-lg p-4">
            <h4 className="font-semibold text-[var(--color-text)] mb-3 flex items-center gap-2">
              <span>💡</span>
              Pro Tips
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <span className="text-indigo-400">•</span> Watch for cliff dates on tokens with high lock periods — they
                often cause sharp price movements
              </li>
              <li>
                <span className="text-indigo-400">•</span> Linear vesting tokens are generally more stable but still
                impact price depending on unlock amounts
              </li>
              <li>
                <span className="text-indigo-400">•</span> Set alerts for major vesting events to stay ahead of market
                sentiment
              </li>
              <li>
                <span className="text-indigo-400">•</span> Factor vesting into long-term token economics analysis
              </li>
            </ul>
          </div>
        </div>

        {/* Alert Simulation Panel */}
        <div className="glass rounded-xl p-6 border border-gray-700">
          <h2 className="text-2xl font-bold text-[var(--color-text)] mb-6 flex items-center gap-2">
            <span>🔔</span>
            Alert Simulation Panel
          </h2>

          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-[var(--color-text)]">Your Alerts ({alerts.length})</h3>
              <button
                onClick={addAlert}
                className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-[var(--color-text)] rounded-lg text-sm font-medium transition-colors"
              >
                + Add Alert
              </button>
            </div>

            <div className="space-y-3">
              {alerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <input
                      type="checkbox"
                      checked={alert.enabled}
                      onChange={() => toggleAlert(alert.id)}
                      className="w-5 h-5 accent-indigo-500 cursor-pointer"
                    />
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[var(--color-text)] font-semibold">{alert.token}</span>
                        <span className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded">
                          {alert.type === 'big-unlock'
                            ? '📈 Big Unlock'
                            : alert.type === 'milestone-approaching'
                              ? '🎯 Milestone'
                              : '📅 Date'}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        {alert.type === 'big-unlock' && `When unlock exceeds ${(alert.triggerValue / 1000000).toFixed(1)}M`}
                        {alert.type === 'milestone-approaching' && `When ${alert.triggerValue}% unlocks`}
                        {alert.type === 'custom-date' && `In ${alert.daysUntil} days`}
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeAlert(alert.id)}
                    className="px-3 py-1 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded transition-colors text-sm"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Alert Settings */}
          <div className="pt-6 border-t border-gray-700">
            <h3 className="text-lg font-semibold text-[var(--color-text)] mb-4">Alert Preferences</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                <div>
                  <div className="text-sm font-medium text-[var(--color-text)]">Email Notifications</div>
                  <div className="text-xs text-gray-400">Get notified via email</div>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-indigo-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                <div>
                  <div className="text-sm font-medium text-[var(--color-text)]">Push Notifications</div>
                  <div className="text-xs text-gray-400">Browser push alerts (real-time)</div>
                </div>
                <input type="checkbox" defaultChecked className="w-5 h-5 accent-indigo-500" />
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg border border-gray-700">
                <div>
                  <div className="text-sm font-medium text-[var(--color-text)]">Discord Webhook</div>
                  <div className="text-xs text-gray-400">Send alerts to your Discord server</div>
                </div>
                <input type="checkbox" className="w-5 h-5 accent-indigo-500" />
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
            <p className="text-sm text-blue-300 flex items-start gap-2">
              <span className="text-lg mt-0.5">ℹ️</span>
              <span>
                Alerts are simulated for demonstration. In production, these would integrate with your wallet and send
                real-time notifications for upcoming vesting events.
              </span>
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-400">
            <div>
              <h4 className="font-semibold text-[var(--color-text)] mb-2">Data Sources</h4>
              <p>Token vesting data aggregated from official project documentation and blockchain records.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-text)] mb-2">Important Note</h4>
              <p>This tool is for educational purposes. Price impact estimates are approximate and not financial advice.</p>
            </div>
            <div>
              <h4 className="font-semibold text-[var(--color-text)] mb-2">Last Updated</h4>
              <p>March 2026. Vesting schedules change; verify with official sources before trading.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
