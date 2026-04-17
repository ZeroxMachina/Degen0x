'use client';

import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Grid3x3, List, Calendar } from 'lucide-react';
import RelatedContent from '@/components/RelatedContent';

interface CryptoEvent {
  id: string;
  title: string;
  date: string;
  category: 'unlock' | 'launch' | 'upgrade' | 'airdrop' | 'conference' | 'governance';
  description: string;
  impactLevel: 'high' | 'medium' | 'low';
  tokens: string[];
  details?: string;
}

const EVENTS: CryptoEvent[] = [
  { id: '1', title: 'Bitcoin Halving Event', date: '2026-04-15', category: 'upgrade', description: 'Block reward reduction from 3.125 to 1.5625 BTC', impactLevel: 'high', tokens: ['BTC'], details: 'Major market catalyst expected' },
  { id: '2', title: 'Ethereum Shanghai 2.0', date: '2026-03-28', category: 'upgrade', description: 'Protocol upgrade with MEV improvements', impactLevel: 'high', tokens: ['ETH'], details: 'Staking rewards optimization' },
  { id: '3', title: 'Solana Token Unlock', date: '2026-03-20', category: 'unlock', description: '50M SOL tokens unlock from vesting schedule', impactLevel: 'medium', tokens: ['SOL'], details: 'Quarterly vesting event' },
  { id: '4', title: 'Polygon ZK Mainnet', date: '2026-04-10', category: 'launch', description: 'Polygon zkEVM mainnet official launch', impactLevel: 'high', tokens: ['MATIC'], details: 'Zero-knowledge proof implementation' },
  { id: '5', title: 'Arbitrum Governance Vote', date: '2026-03-25', category: 'governance', description: 'Vote on treasury allocation and fee structure', impactLevel: 'medium', tokens: ['ARB'], details: 'Community voting period' },
  { id: '6', title: 'Optimism Spring Airdrop', date: '2026-04-05', category: 'airdrop', description: 'Second round airdrop for active users', impactLevel: 'low', tokens: ['OP'], details: 'Retroactive distribution' },
  { id: '7', title: 'Web3 Summit 2026', date: '2026-05-12', category: 'conference', description: 'Global Web3 conference with major speakers', impactLevel: 'medium', tokens: ['VARIOUS'], details: 'San Francisco, CA' },
  { id: '8', title: 'Uniswap V4 Launch', date: '2026-05-01', category: 'launch', description: 'Uniswap V4 with hooks and concentrated liquidity', impactLevel: 'high', tokens: ['UNI'], details: 'Enhanced trading experience' },
  { id: '9', title: 'Chainlink CCIP Expansion', date: '2026-03-30', category: 'upgrade', description: 'Cross-chain interoperability expansion to 15 chains', impactLevel: 'medium', tokens: ['LINK'], details: 'Enhanced connectivity' },
  { id: '10', title: 'Aave V4 Governance', date: '2026-04-20', category: 'governance', description: 'Vote on risk parameters and new collateral assets', impactLevel: 'medium', tokens: ['AAVE'], details: 'Risk management update' },
  { id: '11', title: 'Lido Token Unlock', date: '2026-04-08', category: 'unlock', description: '25M LDO vesting unlock milestone', impactLevel: 'low', tokens: ['LDO'], details: 'Monthly vesting' },
  { id: '12', title: 'Crypto Expo Denver', date: '2026-06-15', category: 'conference', description: 'North American crypto expo and networking event', impactLevel: 'low', tokens: ['VARIOUS'], details: 'Denver Convention Center' },
  { id: '13', title: 'Curve DAO Upgrade', date: '2026-05-10', category: 'upgrade', description: 'Governance token enhancement and fee structure changes', impactLevel: 'medium', tokens: ['CRV'], details: 'Stablecoin optimization' },
  { id: '14', title: 'Cosmos Interchain Security', date: '2026-05-25', category: 'launch', description: 'Full launch of Cosmos interchain security protocol', impactLevel: 'high', tokens: ['ATOM'], details: 'Enhanced network security' },
  { id: '15', title: 'Yearn Finance Airdrop', date: '2026-06-01', category: 'airdrop', description: 'Governance participation rewards airdrop', impactLevel: 'low', tokens: ['YFI'], details: 'Active user incentives' },
  { id: '16', title: 'Immutable X Mainnet V2', date: '2026-04-18', category: 'launch', description: 'Gaming-focused Layer 2 mainnet V2 release', impactLevel: 'medium', tokens: ['IMX'], details: 'Performance improvements' },
  { id: '17', title: 'Maker DAO Peg Stabilization', date: '2026-03-22', category: 'governance', description: 'DAI peg maintenance governance vote', impactLevel: 'high', tokens: ['MKR'], details: 'Critical stability decision' },
  { id: '18', title: 'Aptos Token Unlock', date: '2026-05-05', category: 'unlock', description: '100M APT vesting unlock from foundation', impactLevel: 'medium', tokens: ['APT'], details: 'Major unlock event' },
  { id: '19', title: 'Sui Network Conference', date: '2026-05-20', category: 'conference', description: 'Developer summit and ecosystem showcase', impactLevel: 'low', tokens: ['SUI'], details: 'Palo Alto, CA' },
  { id: '20', title: 'Balancer V3 Launch', date: '2026-06-10', category: 'launch', description: 'Next-generation AMM with advanced features', impactLevel: 'high', tokens: ['BAL'], details: 'Liquidity protocol upgrade' },
  { id: '21', title: 'dYdX V4 Mainnet', date: '2026-04-25', category: 'launch', description: 'dYdX trading protocol V4 mainnet launch', impactLevel: 'high', tokens: ['DYDX'], details: 'Perpetual trading upgrade' },
  { id: '22', title: 'Compound Governance Vote', date: '2026-06-05', category: 'governance', description: 'Vote on new collateral listings and risk adjustments', impactLevel: 'medium', tokens: ['COMP'], details: 'Protocol governance' },
  { id: '23', title: 'Filecoin Virtual Event', date: '2026-05-30', category: 'conference', description: 'Storage network developer conference', impactLevel: 'low', tokens: ['FIL'], details: 'Online event' },
  { id: '24', title: 'Arbitrum USDC Airdrop', date: '2026-06-12', category: 'airdrop', description: 'USDC bridging incentive airdrop', impactLevel: 'low', tokens: ['USDC'], details: 'Liquidity incentives' },
  { id: '25', title: 'Starknet Deployment', date: '2026-05-15', category: 'launch', description: 'Cairo smart contracts major deployment', impactLevel: 'high', tokens: ['STRK'], details: 'ZK-STARK implementation' },
  { id: '26', title: 'Uniswap Governance Forum', date: '2026-06-20', category: 'conference', description: 'Community governance discussion event', impactLevel: 'medium', tokens: ['UNI'], details: 'Protocol development' },
  { id: '27', title: 'Compound Token Unlock', date: '2026-06-08', category: 'unlock', description: '10M COMP unlock from vesting schedule', impactLevel: 'low', tokens: ['COMP'], details: 'Monthly distribution' },
  { id: '28', title: 'MATIC Polygon 2.0 Upgrade', date: '2026-04-30', category: 'upgrade', description: 'Polygon 2.0 major upgrade with enhanced features', impactLevel: 'high', tokens: ['MATIC'], details: 'Ecosystem expansion' },
  { id: '29', title: 'Lido DAO Governance Summit', date: '2026-05-28', category: 'conference', description: 'Staking protocol governance and strategy meeting', impactLevel: 'medium', tokens: ['LDO'], details: 'Virtual summit' },
  { id: '30', title: 'Moonbeam Network Expansion', date: '2026-06-18', category: 'upgrade', description: 'Polkadot parachain network expansion', impactLevel: 'medium', tokens: ['GLMR'], details: 'Cross-chain capabilities' },
  { id: '31', title: 'Aave Governance Multi-chain', date: '2026-06-25', category: 'governance', description: 'Multi-chain governance implementation vote', impactLevel: 'high', tokens: ['AAVE'], details: 'Protocol expansion' },
  { id: '32', title: 'Curve Finance Spring Summit', date: '2026-06-02', category: 'conference', description: 'Stablecoin and AMM community gathering', impactLevel: 'low', tokens: ['CRV'], details: 'Istanbul, Turkey' },
];

const CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  unlock: { bg: '#8b5cf6', text: '#ede9fe', border: '#a78bfa' },
  launch: { bg: '#ec4899', text: '#fce7f3', border: '#f472b6' },
  upgrade: { bg: '#06b6d4', text: '#ecf0f1', border: '#22d3ee' },
  airdrop: { bg: '#10b981', text: '#d1fae5', border: '#6ee7b7' },
  conference: { bg: '#f59e0b', text: '#fef3c7', border: '#fbbf24' },
  governance: { bg: '#ef4444', text: '#fee2e2', border: '#f87171' },
};

const IMPACT_COLORS: Record<string, string> = {
  high: 'text-red-400',
  medium: 'text-yellow-400',
  low: 'text-green-400',
};

type ViewType = 'month' | 'week' | 'list';

export default function CryptoCalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 2)); // March 2026
  const [view, setView] = useState<ViewType>('month');
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['unlock', 'launch', 'upgrade', 'airdrop', 'conference', 'governance']);

  const filteredEvents = useMemo(() => {
    return EVENTS.filter(event => selectedCategories.includes(event.category));
  }, [selectedCategories]);

  const monthEvents = useMemo(() => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    return filteredEvents.filter(event => {
      const [eventYear, eventMonth] = event.date.split('-').slice(0, 2).map(Number);
      return eventYear === year && eventMonth === month + 1;
    });
  }, [currentDate, filteredEvents]);

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117]">
      {/* Header */}
      <div className="border-b border-[#30363d] bg-black/40 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Crypto Events Calendar
              </h1>
              <p className="text-[#8b949e] mt-2">Track token unlocks, launches, airdrops, and more</p>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setView('month')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                view === 'month'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400'
                  : 'bg-[#30363d] text-[#8b949e] hover:bg-[#3d444d]'
              }`}
            >
              <Grid3x3 size={18} />
              Month
            </button>
            <button
              onClick={() => setView('week')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                view === 'week'
              }`}
            >
              <Calendar size={18} />
              Week
            </button>
            <button
              onClick={() => setView('list')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                view === 'list'
              }`}
            >
              <List size={18} />
              List
            </button>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {Object.entries(CATEGORY_COLORS).map(([category, colors]) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategories.includes(category)
                    ? `bg-[${colors.bg}] text-[${colors.text}] border border-[${colors.border}]`
                    : 'bg-[#30363d] text-[#8b949e] border border-[#30363d]'
                }`}
                style={
                  selectedCategories.includes(category)
                    ? { backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }
                    : {}
                }
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === 'month' && (
          <div>
            {/* Month Navigation */}
            <div className="flex items-center justify-between mb-6 bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                className="p-2 hover:bg-[#30363d] rounded-lg transition-colors"
              >
                <ChevronLeft className="text-cyan-400" size={24} />
              </button>
              <h2 className="text-2xl font-bold text-[#e6edf3] min-w-48 text-center">{monthName}</h2>
              <button
                onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
              >
                <ChevronRight className="text-cyan-400" size={24} />
              </button>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {monthEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>

            {monthEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#8b949e] text-lg">No events match your filters for {monthName}</p>
              </div>
            )}
          </div>
        )}

        {view === 'list' && (
          <div>
            <div className="space-y-3">
              {filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map(event => (
                <EventListItem key={event.id} event={event} />
              ))}
            </div>
            {filteredEvents.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#8b949e] text-lg">No events match your filters</p>
              </div>
            )}
          </div>
        )}

        {view === 'week' && (
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <p className="text-[#8b949e]">Week view - Showing upcoming events</p>
            <div className="mt-4 space-y-2">
              {filteredEvents
                .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                .slice(0, 10)
                .map(event => (
                  <EventListItem key={event.id} event={event} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function EventCard({ event }: { event: CryptoEvent }) {
  const colors = CATEGORY_COLORS[event.category];
  const date = new Date(event.date);
  const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className="group relative bg-gradient-to-br from-[#161b22] to-[#0d1117] border border-[#30363d] rounded-lg p-4 hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/10">
      {/* Category Tag */}
      <div
        className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
        style={{ backgroundColor: colors.bg, color: colors.text, borderColor: colors.border }}
      >
        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#e6edf3] mb-2 group-hover:text-cyan-300 transition-colors">
        {event.title}
      </h3>

      {/* Date */}
      <p className="text-sm text-[#8b949e] mb-2">{dateStr}</p>

      {/* Description */}
      <p className="text-sm text-[#c9d1d9] mb-3">{event.description}</p>

      {/* Tokens */}
      <div className="flex flex-wrap gap-2 mb-3">
        {event.tokens.map(token => (
          <span key={token} className="px-2 py-1 bg-[#30363d] text-cyan-300 text-xs rounded border border-cyan-400/30">
            {token}
          </span>
        ))}
      </div>

      {/* Impact Level */}
      <div className="flex items-center justify-between">
        <span className={`text-xs font-semibold ${IMPACT_COLORS[event.impactLevel]}`}>
          {event.impactLevel.charAt(0).toUpperCase() + event.impactLevel.slice(1)} Impact
        </span>
        {event.details && <span className="text-xs text-[#8b949e]">{event.details}</span>}
      </div>
    </div>
  );
}

function EventListItem({ event }: { event: CryptoEvent }) {
  const colors = CATEGORY_COLORS[event.category];
  const date = new Date(event.date);
  const dateStr = date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 hover:border-cyan-400/50 transition-all flex items-start gap-4">
      <div
        className="px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap"
        style={{ backgroundColor: colors.bg, color: colors.text }}
      >
        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-4 mb-1">
          <h3 className="text-[#e6edf3] font-bold">{event.title}</h3>
          <span className="text-sm text-[#8b949e] whitespace-nowrap">{dateStr}</span>
        </div>
        <p className="text-sm text-[#c9d1d9] mb-2">{event.description}</p>
        <div className="flex flex-wrap gap-2 items-center">
          {event.tokens.map(token => (
            <span key={token} className="px-2 py-0.5 bg-[#30363d] text-cyan-300 text-xs rounded">
              {token}
            </span>
          ))}
          <span className={`text-xs font-semibold ml-auto ${IMPACT_COLORS[event.impactLevel]}`}>
            {event.impactLevel.charAt(0).toUpperCase() + event.impactLevel.slice(1)}
          </span>
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/tools/crypto-calendar" />
    </div>
  );
}
