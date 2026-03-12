'use client'

import { useState, useMemo, useCallback } from 'react'
import Breadcrumb from '@/components/Breadcrumb'

interface UnlockEvent {
  id: string
  date: Date
  amount: number
  percentageOfSupply: number
  description: string
}

interface Token {
  id: string
  symbol: string
  name: string
  currentPrice: number
  circulatingSupply: number
  totalSupply: number
  marketCap: number
  percentUnlocked: number
  upcomingUnlocks: UnlockEvent[]
  nextUnlockDate: Date
  nextUnlockAmount: number
  color: string
}

const TOKEN_DATA: Token[] = [
  {
    id: 'arbitrum',
    symbol: 'ARB',
    name: 'Arbitrum',
    currentPrice: 1.28,
    circulatingSupply: 2100000000,
    totalSupply: 10000000000,
    marketCap: 2688000000,
    percentUnlocked: 21,
    color: '#28A0F0',
    nextUnlockDate: new Date('2026-03-15'),
    nextUnlockAmount: 150000000,
    upcomingUnlocks: [
      { id: 'arb-1', date: new Date('2026-03-15'), amount: 150000000, percentageOfSupply: 1.5, description: 'Q1 2026 Unlock' },
      { id: 'arb-2', date: new Date('2026-04-15'), amount: 120000000, percentageOfSupply: 1.2, description: 'Foundation Release' },
      { id: 'arb-3', date: new Date('2026-06-15'), amount: 175000000, percentageOfSupply: 1.75, description: 'Strategic Partners' },
      { id: 'arb-4', date: new Date('2026-09-15'), amount: 200000000, percentageOfSupply: 2.0, description: 'Ecosystem Fund' },
    ],
  },
  {
    id: 'optimism',
    symbol: 'OP',
    name: 'Optimism',
    currentPrice: 2.45,
    circulatingSupply: 850000000,
    totalSupply: 4294967296,
    marketCap: 2082500000,
    percentUnlocked: 19.8,
    color: '#FF0420',
    nextUnlockDate: new Date('2026-03-20'),
    nextUnlockAmount: 85000000,
    upcomingUnlocks: [
      { id: 'op-1', date: new Date('2026-03-20'), amount: 85000000, percentageOfSupply: 1.98, description: 'Investor Release' },
      { id: 'op-2', date: new Date('2026-05-20'), amount: 110000000, percentageOfSupply: 2.56, description: 'Team Vesting' },
      { id: 'op-3', date: new Date('2026-08-20'), amount: 95000000, percentageOfSupply: 2.21, description: 'Treasury Release' },
    ],
  },
  {
    id: 'aptos',
    symbol: 'APT',
    name: 'Aptos',
    currentPrice: 18.50,
    circulatingSupply: 110000000,
    totalSupply: 1000000000,
    marketCap: 2035000000,
    percentUnlocked: 11,
    color: '#000000',
    nextUnlockDate: new Date('2026-03-25'),
    nextUnlockAmount: 15000000,
    upcomingUnlocks: [
      { id: 'apt-1', date: new Date('2026-03-25'), amount: 15000000, percentageOfSupply: 1.5, description: 'Core Team Unlock' },
      { id: 'apt-2', date: new Date('2026-05-25'), amount: 20000000, percentageOfSupply: 2.0, description: 'Foundation Release' },
      { id: 'apt-3', date: new Date('2026-07-25'), amount: 18000000, percentageOfSupply: 1.8, description: 'Validator Rewards' },
      { id: 'apt-4', date: new Date('2026-10-25'), amount: 22000000, percentageOfSupply: 2.2, description: 'Ecosystem Partners' },
    ],
  },
  {
    id: 'sui',
    symbol: 'SUI',
    name: 'Sui',
    currentPrice: 3.75,
    circulatingSupply: 380000000,
    totalSupply: 10000000000,
    marketCap: 1425000000,
    percentUnlocked: 3.8,
    color: '#6FBCFF',
    nextUnlockDate: new Date('2026-04-01'),
    nextUnlockAmount: 125000000,
    upcomingUnlocks: [
      { id: 'sui-1', date: new Date('2026-04-01'), amount: 125000000, percentageOfSupply: 1.25, description: 'Team Unlock' },
      { id: 'sui-2', date: new Date('2026-06-01'), amount: 150000000, percentageOfSupply: 1.5, description: 'Investor Tranche' },
      { id: 'sui-3', date: new Date('2026-08-01'), amount: 140000000, percentageOfSupply: 1.4, description: 'Foundation Release' },
      { id: 'sui-4', date: new Date('2026-11-01'), amount: 160000000, percentageOfSupply: 1.6, description: 'Validator Incentives' },
    ],
  },
  {
    id: 'sei',
    symbol: 'SEI',
    name: 'Sei',
    currentPrice: 0.85,
    circulatingSupply: 850000000,
    totalSupply: 20000000000,
    marketCap: 722500000,
    percentUnlocked: 4.25,
    color: '#00D4FF',
    nextUnlockDate: new Date('2026-04-10'),
    nextUnlockAmount: 200000000,
    upcomingUnlocks: [
      { id: 'sei-1', date: new Date('2026-04-10'), amount: 200000000, percentageOfSupply: 1.0, description: 'Strategic Release' },
      { id: 'sei-2', date: new Date('2026-06-10'), amount: 250000000, percentageOfSupply: 1.25, description: 'Team Vesting' },
      { id: 'sei-3', date: new Date('2026-09-10'), amount: 225000000, percentageOfSupply: 1.125, description: 'Ecosystem Fund' },
    ],
  },
  {
    id: 'starknet',
    symbol: 'STRK',
    name: 'Starknet',
    currentPrice: 0.95,
    circulatingSupply: 450000000,
    totalSupply: 10000000000,
    marketCap: 427500000,
    percentUnlocked: 4.5,
    color: '#EC796B',
    nextUnlockDate: new Date('2026-03-28'),
    nextUnlockAmount: 180000000,
    upcomingUnlocks: [
      { id: 'strk-1', date: new Date('2026-03-28'), amount: 180000000, percentageOfSupply: 1.8, description: 'Early Contributors' },
      { id: 'strk-2', date: new Date('2026-05-28'), amount: 165000000, percentageOfSupply: 1.65, description: 'Core Team' },
      { id: 'strk-3', date: new Date('2026-08-28'), amount: 200000000, percentageOfSupply: 2.0, description: 'Staking Rewards' },
    ],
  },
  {
    id: 'jito',
    symbol: 'JTO',
    name: 'Jito',
    currentPrice: 5.20,
    circulatingSupply: 150000000,
    totalSupply: 1000000000,
    marketCap: 780000000,
    percentUnlocked: 15,
    color: '#14F195',
    nextUnlockDate: new Date('2026-03-22'),
    nextUnlockAmount: 35000000,
    upcomingUnlocks: [
      { id: 'jto-1', date: new Date('2026-03-22'), amount: 35000000, percentageOfSupply: 3.5, description: 'Foundation Release' },
      { id: 'jto-2', date: new Date('2026-06-22'), amount: 42000000, percentageOfSupply: 4.2, description: 'Team Vesting' },
      { id: 'jto-3', date: new Date('2026-09-22'), amount: 38000000, percentageOfSupply: 3.8, description: 'Community Rewards' },
    ],
  },
  {
    id: 'celestia',
    symbol: 'TIA',
    name: 'Celestia',
    currentPrice: 12.80,
    circulatingSupply: 65000000,
    totalSupply: 1000000000,
    marketCap: 832000000,
    percentUnlocked: 6.5,
    color: '#00D084',
    nextUnlockDate: new Date('2026-04-15'),
    nextUnlockAmount: 12000000,
    upcomingUnlocks: [
      { id: 'tia-1', date: new Date('2026-04-15'), amount: 12000000, percentageOfSupply: 1.2, description: 'Strategic Partners' },
      { id: 'tia-2', date: new Date('2026-07-15'), amount: 15000000, percentageOfSupply: 1.5, description: 'Core Dev Team' },
      { id: 'tia-3', date: new Date('2026-10-15'), amount: 14000000, percentageOfSupply: 1.4, description: 'Research Grants' },
    ],
  },
  {
    id: 'pyth',
    symbol: 'PYTH',
    name: 'Pyth Network',
    currentPrice: 0.65,
    circulatingSupply: 280000000,
    totalSupply: 10000000000,
    marketCap: 182000000,
    percentUnlocked: 2.8,
    color: '#5B3FED',
    nextUnlockDate: new Date('2026-05-01'),
    nextUnlockAmount: 250000000,
    upcomingUnlocks: [
      { id: 'pyth-1', date: new Date('2026-05-01'), amount: 250000000, percentageOfSupply: 2.5, description: 'Foundation Unlock' },
      { id: 'pyth-2', date: new Date('2026-08-01'), amount: 280000000, percentageOfSupply: 2.8, description: 'Team Unlock' },
    ],
  },
  {
    id: 'worldcoin',
    symbol: 'WLD',
    name: 'Worldcoin',
    currentPrice: 4.50,
    circulatingSupply: 150000000,
    totalSupply: 600000000,
    marketCap: 675000000,
    percentUnlocked: 25,
    color: '#00D1FF',
    nextUnlockDate: new Date('2026-04-05'),
    nextUnlockAmount: 28000000,
    upcomingUnlocks: [
      { id: 'wld-1', date: new Date('2026-04-05'), amount: 28000000, percentageOfSupply: 4.67, description: 'Orb Operator Rewards' },
      { id: 'wld-2', date: new Date('2026-07-05'), amount: 32000000, percentageOfSupply: 5.33, description: 'User Rewards' },
    ],
  },
  {
    id: 'jupiter',
    symbol: 'JUP',
    name: 'Jupiter',
    currentPrice: 0.95,
    circulatingSupply: 1000000000,
    totalSupply: 10000000000,
    marketCap: 950000000,
    percentUnlocked: 10,
    color: '#00C2FF',
    nextUnlockDate: new Date('2026-03-30'),
    nextUnlockAmount: 300000000,
    upcomingUnlocks: [
      { id: 'jup-1', date: new Date('2026-03-30'), amount: 300000000, percentageOfSupply: 3.0, description: 'DAO Treasury Release' },
      { id: 'jup-2', date: new Date('2026-06-30'), amount: 350000000, percentageOfSupply: 3.5, description: 'Team Cliff End' },
      { id: 'jup-3', date: new Date('2026-10-30'), amount: 280000000, percentageOfSupply: 2.8, description: 'Community Allocation' },
    ],
  },
  {
    id: 'wormhole',
    symbol: 'W',
    name: 'Wormhole',
    currentPrice: 3.20,
    circulatingSupply: 75000000,
    totalSupply: 1000000000,
    marketCap: 240000000,
    percentUnlocked: 7.5,
    color: '#0084FF',
    nextUnlockDate: new Date('2026-05-10'),
    nextUnlockAmount: 45000000,
    upcomingUnlocks: [
      { id: 'w-1', date: new Date('2026-05-10'), amount: 45000000, percentageOfSupply: 4.5, description: 'Guardian Network Unlock' },
      { id: 'w-2', date: new Date('2026-08-10'), amount: 52000000, percentageOfSupply: 5.2, description: 'Bridge Operators Release' },
    ],
  },
  {
    id: 'ena',
    symbol: 'ENA',
    name: 'Ethena',
    currentPrice: 0.95,
    circulatingSupply: 1500000000,
    totalSupply: 15000000000,
    marketCap: 1425000000,
    percentUnlocked: 10,
    color: '#FDB022',
    nextUnlockDate: new Date('2026-04-12'),
    nextUnlockAmount: 500000000,
    upcomingUnlocks: [
      { id: 'ena-1', date: new Date('2026-04-12'), amount: 500000000, percentageOfSupply: 3.33, description: 'Community Release' },
      { id: 'ena-2', date: new Date('2026-07-12'), amount: 480000000, percentageOfSupply: 3.2, description: 'Liquidity Provider Rewards' },
    ],
  },
  {
    id: 'ethfi',
    symbol: 'ETHFI',
    name: 'ether.fi',
    currentPrice: 22.50,
    circulatingSupply: 20000000,
    totalSupply: 100000000,
    marketCap: 450000000,
    percentUnlocked: 20,
    color: '#6B5FFF',
    nextUnlockDate: new Date('2026-03-18'),
    nextUnlockAmount: 3000000,
    upcomingUnlocks: [
      { id: 'ethfi-1', date: new Date('2026-03-18'), amount: 3000000, percentageOfSupply: 3.0, description: 'Founding Team Cliff' },
      { id: 'ethfi-2', date: new Date('2026-06-18'), amount: 3500000, percentageOfSupply: 3.5, description: 'Advisor Unlock' },
      { id: 'ethfi-3', date: new Date('2026-09-18'), amount: 2800000, percentageOfSupply: 2.8, description: 'Employee Grant Vesting' },
    ],
  },
  {
    id: 'alt',
    symbol: 'ALT',
    name: 'Altlayer',
    currentPrice: 2.10,
    circulatingSupply: 280000000,
    totalSupply: 2000000000,
    marketCap: 588000000,
    percentUnlocked: 14,
    color: '#FF6B35',
    nextUnlockDate: new Date('2026-04-20'),
    nextUnlockAmount: 125000000,
    upcomingUnlocks: [
      { id: 'alt-1', date: new Date('2026-04-20'), amount: 125000000, percentageOfSupply: 6.25, description: 'Core Team Vesting' },
      { id: 'alt-2', date: new Date('2026-07-20'), amount: 140000000, percentageOfSupply: 7.0, description: 'Investor Tranches' },
    ],
  },
  {
    id: 'manta',
    symbol: 'MANTA',
    name: 'Manta Network',
    currentPrice: 1.85,
    circulatingSupply: 220000000,
    totalSupply: 1000000000,
    marketCap: 407000000,
    percentUnlocked: 22,
    color: '#00E5B8',
    nextUnlockDate: new Date('2026-03-26'),
    nextUnlockAmount: 85000000,
    upcomingUnlocks: [
      { id: 'manta-1', date: new Date('2026-03-26'), amount: 85000000, percentageOfSupply: 8.5, description: 'Privacy Pioneer Rewards' },
      { id: 'manta-2', date: new Date('2026-06-26'), amount: 95000000, percentageOfSupply: 9.5, description: 'Foundation Release' },
    ],
  },
  {
    id: 'dymension',
    symbol: 'DYM',
    name: 'Dymension',
    currentPrice: 3.25,
    circulatingSupply: 65000000,
    totalSupply: 1000000000,
    marketCap: 211250000,
    percentUnlocked: 6.5,
    color: '#FF0000',
    nextUnlockDate: new Date('2026-05-05'),
    nextUnlockAmount: 52000000,
    upcomingUnlocks: [
      { id: 'dym-1', date: new Date('2026-05-05'), amount: 52000000, percentageOfSupply: 5.2, description: 'Rollup Incentive Unlock' },
      { id: 'dym-2', date: new Date('2026-08-05'), amount: 60000000, percentageOfSupply: 6.0, description: 'Validator Rewards' },
    ],
  },
  {
    id: 'ondo',
    symbol: 'ONDO',
    name: 'Ondo Finance',
    currentPrice: 1.15,
    circulatingSupply: 400000000,
    totalSupply: 1000000000,
    marketCap: 460000000,
    percentUnlocked: 40,
    color: '#5D4FFF',
    nextUnlockDate: new Date('2026-04-08'),
    nextUnlockAmount: 85000000,
    upcomingUnlocks: [
      { id: 'ondo-1', date: new Date('2026-04-08'), amount: 85000000, percentageOfSupply: 8.5, description: 'Treasury Bond Rewards' },
      { id: 'ondo-2', date: new Date('2026-07-08'), amount: 92000000, percentageOfSupply: 9.2, description: 'Staking Incentives' },
    ],
  },
  {
    id: 'zero',
    symbol: 'ZRO',
    name: 'LayerZero',
    currentPrice: 2.80,
    circulatingSupply: 500000000,
    totalSupply: 1000000000,
    marketCap: 1400000000,
    percentUnlocked: 50,
    color: '#00F0FF',
    nextUnlockDate: new Date('2026-04-25'),
    nextUnlockAmount: 125000000,
    upcomingUnlocks: [
      { id: 'zro-1', date: new Date('2026-04-25'), amount: 125000000, percentageOfSupply: 12.5, description: 'Protocol Incentives' },
      { id: 'zro-2', date: new Date('2026-07-25'), amount: 110000000, percentageOfSupply: 11.0, description: 'Core Team Unlock' },
    ],
  },
  {
    id: 'eigenayer',
    symbol: 'EIGEN',
    name: 'EigenLayer',
    currentPrice: 4.15,
    circulatingSupply: 45000000,
    totalSupply: 1000000000,
    marketCap: 186750000,
    percentUnlocked: 4.5,
    color: '#FF006E',
    nextUnlockDate: new Date('2026-05-20'),
    nextUnlockAmount: 65000000,
    upcomingUnlocks: [
      { id: 'eigen-1', date: new Date('2026-05-20'), amount: 65000000, percentageOfSupply: 6.5, description: 'AVS Operator Release' },
      { id: 'eigen-2', date: new Date('2026-08-20'), amount: 72000000, percentageOfSupply: 7.2, description: 'Community Incentives' },
    ],
  },
]

function getAlertLevel(percentageOfSupply: number): { level: string; color: string; bgColor: string } {
  if (percentageOfSupply > 5) return { level: 'Critical', color: '#EF4444', bgColor: 'bg-red-900/20' }
  if (percentageOfSupply > 2) return { level: 'High', color: '#F59E0B', bgColor: 'bg-yellow-900/20' }
  return { level: 'Low', color: '#10B981', bgColor: 'bg-green-900/20' }
}

function formatNumber(num: number): string {
  if (num >= 1000000000) return `$${(num / 1000000000).toFixed(2)}B`
  if (num >= 1000000) return `$${(num / 1000000).toFixed(2)}M`
  if (num >= 1000) return `$${(num / 1000).toFixed(2)}K`
  return `$${num.toFixed(2)}`
}

function formatSupply(num: number): string {
  if (num >= 1000000000) return `${(num / 1000000000).toFixed(2)}B`
  if (num >= 1000000) return `${(num / 1000000).toFixed(2)}M`
  return `${(num / 1000).toFixed(0)}K`
}

function DonutChart({ percentUnlocked, color }: { percentUnlocked: number; color: string }) {
  const circumference = 2 * Math.PI * 45
  const offset = circumference - (percentUnlocked / 100) * circumference

  return (
    <div className="flex items-center justify-center">
      <svg width="140" height="140" viewBox="0 0 120 120" className="transform -rotate-90">
        <circle cx="60" cy="60" r="45" fill="none" stroke="#374151" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        />
        <text x="60" y="65" textAnchor="middle" className="fill-white text-lg font-bold" fontSize="16">
          {percentUnlocked}%
        </text>
      </svg>
    </div>
  )
}

function TimelineChart({ tokens }: { tokens: Token[] }) {
  const next12Months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(2026, new Date().getMonth() + i, 1)
    return date
  })

  const monthlyTotals = next12Months.map((monthDate) => {
    return tokens.reduce((total, token) => {
      const monthUnlocks = token.upcomingUnlocks
        .filter((unlock) => {
          return unlock.date.getMonth() === monthDate.getMonth() && unlock.date.getFullYear() === monthDate.getFullYear()
        })
        .reduce((sum, unlock) => sum + unlock.amount * token.currentPrice, 0)
      return total + monthUnlocks
    }, 0)
  })

  const maxValue = Math.max(...monthlyTotals)
  const scale = 150 / maxValue

  return (
    <div className="w-full h-64 flex flex-col">
      <div className="flex-1 flex items-flex-end gap-1 pb-4">
        {monthlyTotals.map((value, i) => (
          <div key={i} className="flex-1 flex flex-col items-center group">
            <div
              className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm transition-all hover:from-blue-400 hover:to-blue-300 cursor-pointer"
              style={{ height: `${Math.max(5, value * scale)}px` }}
              title={`${next12Months[i].toLocaleString('en-US', { month: 'short', year: 'numeric' })}: ${formatNumber(value)}`}
            />
            <span className="text-xs text-gray-400 mt-2">{next12Months[i].toLocaleString('en-US', { month: 'short' })}</span>
          </div>
        ))}
      </div>
      <div className="text-xs text-gray-500 text-center">Unlock Volume (USD) - Next 12 Months</div>
    </div>
  )
}

export default function TokenUnlocksPage() {
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)
  const [sortBy, setSortBy] = useState<'date' | 'size' | 'impact' | 'name'>('date')
  const [filterRisk, setFilterRisk] = useState<'all' | 'critical' | 'high' | 'low'>('all')

  const now = new Date()
  const next7Days = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000)
  const next30Days = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000)

  const dashboardMetrics = useMemo(() => {
    const next7 = TOKEN_DATA.reduce((total, token) => {
      return (
        total +
        token.upcomingUnlocks
          .filter((u) => u.date >= now && u.date <= next7Days)
          .reduce((sum, unlock) => sum + unlock.amount * token.currentPrice, 0)
      )
    }, 0)

    const next30 = TOKEN_DATA.reduce((total, token) => {
      return (
        total +
        token.upcomingUnlocks
          .filter((u) => u.date >= now && u.date <= next30Days)
          .reduce((sum, unlock) => sum + unlock.amount * token.currentPrice, 0)
      )
    }, 0)

    const allUpcoming = TOKEN_DATA.flatMap((token) =>
      token.upcomingUnlocks.map((unlock) => ({
        ...unlock,
        token,
        value: unlock.amount * token.currentPrice,
      })),
    ).sort((a, b) => b.value - a.value)

    return {
      next7,
      next30,
      biggest: allUpcoming[0],
    }
  }, [])

  const sortedTokens = useMemo(() => {
    let filtered = TOKEN_DATA.filter((token) => {
      if (filterRisk === 'all') return true
      const alert = getAlertLevel(token.nextUnlockAmount / token.totalSupply * 100)
      return alert.level.toLowerCase() === filterRisk
    })

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'date':
          return a.nextUnlockDate.getTime() - b.nextUnlockDate.getTime()
        case 'size':
          return (b.nextUnlockAmount / b.totalSupply) - (a.nextUnlockAmount / a.totalSupply)
        case 'impact':
          return (b.nextUnlockAmount * b.currentPrice) - (a.nextUnlockAmount * a.currentPrice)
        case 'name':
          return a.symbol.localeCompare(b.symbol)
        default:
          return 0
      }
    })
  }, [sortBy, filterRisk])

  return (
    <div className="min-h-screen bg-gray-900 text-[var(--color-text)] p-6">
      <Breadcrumb items={[{ label: 'Tools', href: '/tools' }, { label: 'Token Unlocks', href: '/tools/token-unlocks' }]} />

      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Token Unlock & Vesting Tracker</h1>
          <p className="text-gray-400">Monitor upcoming token unlocks, vesting schedules, and market impact across 20+ crypto projects</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-sm text-gray-400 mb-2">Next 7 Days Unlocks</div>
            <div className="text-3xl font-bold text-blue-400">{formatNumber(dashboardMetrics.next7)}</div>
            <div className="text-xs text-gray-500 mt-2">Total unlock value in USD</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-sm text-gray-400 mb-2">Next 30 Days Unlocks</div>
            <div className="text-3xl font-bold text-purple-400">{formatNumber(dashboardMetrics.next30)}</div>
            <div className="text-xs text-gray-500 mt-2">Total unlock value in USD</div>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <div className="text-sm text-gray-400 mb-2">Biggest Upcoming Unlock</div>
            <div className="text-lg font-bold">
              {dashboardMetrics.biggest ? `${dashboardMetrics.biggest.token.symbol}` : 'N/A'}
            </div>
            {dashboardMetrics.biggest && (
              <>
                <div className="text-sm text-gray-400 mt-1">{formatNumber(dashboardMetrics.biggest.value)}</div>
                <div className="text-xs text-gray-500">
                  {dashboardMetrics.biggest.date.toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
          <h2 className="text-xl font-bold mb-4">Unlock Timeline - Next 12 Months</h2>
          <TimelineChart tokens={TOKEN_DATA} />
        </div>

        {selectedToken && (
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1">{selectedToken.name}</h2>
                <p className="text-gray-400">{selectedToken.symbol} - Market Cap: {formatNumber(selectedToken.marketCap)}</p>
              </div>
              <button
                onClick={() => setSelectedToken(null)}
                className="text-gray-400 hover:text-[var(--color-text)] transition-colors text-2xl"
              >
                ×
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Tokenomics</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current Price</span>
                    <span className="font-semibold">${selectedToken.currentPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Circulating Supply</span>
                    <span className="font-semibold">{formatSupply(selectedToken.circulatingSupply)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Supply</span>
                    <span className="font-semibold">{formatSupply(selectedToken.totalSupply)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Unlocked %</span>
                    <span className="font-semibold text-green-400">{selectedToken.percentUnlocked}%</span>
                  </div>
                  <div className="pt-3 border-t border-gray-700 flex justify-between">
                    <span className="text-gray-400">Locked Tokens</span>
                    <span className="font-semibold">{formatSupply(selectedToken.totalSupply - selectedToken.circulatingSupply)}</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center">
                <h3 className="text-lg font-bold mb-4">Supply Distribution</h3>
                <DonutChart percentUnlocked={selectedToken.percentUnlocked} color={selectedToken.color} />
                <div className="mt-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: selectedToken.color }} />
                    <span>Unlocked: {selectedToken.percentUnlocked}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-gray-600" />
                    <span>Locked: {(100 - selectedToken.percentUnlocked).toFixed(1)}%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-gray-700 pt-6">
              <h3 className="text-lg font-bold mb-4">Upcoming Unlock Schedule</h3>
              <div className="space-y-3">
                {selectedToken.upcomingUnlocks.map((unlock) => {
                  const alert = getAlertLevel(unlock.percentageOfSupply)
                  return (
                    <div
                      key={unlock.id}
                      className={`${alert.bgColor} border border-gray-700 rounded p-4 flex justify-between items-center`}
                    >
                      <div>
                        <div className="font-semibold">{unlock.description}</div>
                        <div className="text-sm text-gray-400">
                          {unlock.date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">{formatSupply(unlock.amount)}</div>
                        <div className="text-sm" style={{ color: alert.color }}>
                          {unlock.percentageOfSupply.toFixed(2)}% of supply
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        )}

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div>
              <label className="text-sm text-gray-400 block mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-gray-700 text-[var(--color-text)] rounded px-3 py-2 border border-gray-600 text-sm"
              >
                <option value="date">Next Unlock Date</option>
                <option value="size">% of Supply</option>
                <option value="impact">USD Value</option>
                <option value="name">Token Name</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400 block mb-2">Filter Risk Level</label>
              <select
                value={filterRisk}
                onChange={(e) => setFilterRisk(e.target.value as any)}
                className="bg-gray-700 text-[var(--color-text)] rounded px-3 py-2 border border-gray-600 text-sm"
              >
                <option value="all">All Risk Levels</option>
                <option value="critical">Critical (&gt;5%)</option>
                <option value="high">High (2-5%)</option>
                <option value="low">Low (&lt;2%)</option>
              </select>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4">Token Monitor - {sortedTokens.length} Assets</h2>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {sortedTokens.map((token) => {
              const nextUnlockPercentage = (token.nextUnlockAmount / token.totalSupply) * 100
              const alert = getAlertLevel(nextUnlockPercentage)
              const daysUntilUnlock = Math.ceil((token.nextUnlockDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))
              const unlockValue = token.nextUnlockAmount * token.currentPrice

              return (
                <button
                  key={token.id}
                  onClick={() => setSelectedToken(token)}
                  className={`w-full text-left ${alert.bgColor} border border-gray-700 rounded p-4 hover:border-gray-500 transition-all cursor-pointer`}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-lg">{token.symbol}</span>
                        <span
                          className="text-xs px-2 py-1 rounded font-semibold"
                          style={{ color: alert.color, backgroundColor: alert.color + '20' }}
                        >
                          {alert.level}
                        </span>
                      </div>
                      <div className="text-sm text-gray-400">{token.name}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-lg">{formatNumber(unlockValue)}</div>
                      <div className="text-xs text-gray-400">Next unlock value</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Unlock Date</span>
                      <div className="font-semibold">
                        {token.nextUnlockDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} ({daysUntilUnlock}d)
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Supply Impact</span>
                      <div className="font-semibold" style={{ color: alert.color }}>
                        {nextUnlockPercentage.toFixed(2)}%
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-400">Current Price</span>
                      <div className="font-semibold">${token.currentPrice.toFixed(2)}</div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg p-6 border border-blue-700/30 mb-8">
          <h2 className="text-xl font-bold mb-4">Understanding Token Vesting</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2 text-blue-400">Cliff Vesting</h3>
              <p className="text-sm text-gray-300">
                A period where NO tokens unlock, followed by a large release. Common for investor rounds. Creates sharp price pressure at unlock date.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-purple-400">Linear Vesting</h3>
              <p className="text-sm text-gray-300">
                Tokens unlock gradually over time at regular intervals. Reduces supply shock and provides more predictable price impact. Preferred by markets.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-green-400">Strategic Planning</h3>
              <p className="text-sm text-gray-300">
                Use this tracker to plan holdings, identify high-risk unlock periods, and anticipate market movements based on supply inflation.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-bold mb-4">Impact Estimator</h2>
          <p className="text-gray-400 mb-4">
            Supply inflation from token unlocks can significantly impact price. Monitor these events to make informed trading decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 rounded p-4">
              <div className="text-sm text-gray-400 mb-2">Largest Single Unlock</div>
              {TOKEN_DATA.reduce((max, token) => {
                const largest = token.upcomingUnlocks.reduce((prev, curr) =>
                  curr.percentageOfSupply > prev.percentageOfSupply ? curr : prev,
                )
                return largest.percentageOfSupply > max.percentage
                  ? { token, largest, percentage: largest.percentageOfSupply }
                  : max
              }, { token: TOKEN_DATA[0], largest: TOKEN_DATA[0].upcomingUnlocks[0], percentage: 0 }).token && (
                <div>
                  <div className="font-bold">
                    {TOKEN_DATA.reduce((max, token) => {
                      const largest = token.upcomingUnlocks.reduce((prev, curr) =>
                        curr.percentageOfSupply > prev.percentageOfSupply ? curr : prev,
                      )
                      return largest.percentageOfSupply > max.percentage
                        ? { token, largest, percentage: largest.percentageOfSupply }
                        : max
                    }, { token: TOKEN_DATA[0], largest: TOKEN_DATA[0].upcomingUnlocks[0], percentage: 0 }).token.symbol}
                  </div>
                  <div className="text-xs text-gray-400">
                    {TOKEN_DATA.reduce((max, token) => {
                      const largest = token.upcomingUnlocks.reduce((prev, curr) =>
                        curr.percentageOfSupply > prev.percentageOfSupply ? curr : prev,
                      )
                      return largest.percentageOfSupply > max.percentage
                        ? { token, largest, percentage: largest.percentageOfSupply }
                        : max
                    }, { token: TOKEN_DATA[0], largest: TOKEN_DATA[0].upcomingUnlocks[0], percentage: 0 }).largest.percentageOfSupply.toFixed(2)}
                    % of supply
                  </div>
                </div>
              )}
            </div>
            <div className="bg-gray-700 rounded p-4">
              <div className="text-sm text-gray-400 mb-2">Total Unlocks (Next 30 Days)</div>
              <div className="font-bold">{formatNumber(dashboardMetrics.next30)}</div>
              <div className="text-xs text-gray-400">Cumulative market cap impact potential</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        <p>Data updated: {new Date().toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</p>
        <p className="mt-2">
          Disclaimer: This tool is for informational purposes. Vesting schedules and unlock dates are subject to change. Not financial advice.
        </p>
      </div>
    </div>
  )
}
