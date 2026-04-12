'use client';

import React, { useState, useEffect } from 'react';
import {
  Gift,
  CheckCircle,
  XCircle,
  Clock,
  Flame,
  Search,
  Filter,
  Wallet,
  ArrowRight,
  ExternalLink,
  Copy,
  Check,
} from 'lucide-react';

interface Requirement {
  text: string;
  met?: boolean;
}

interface Airdrop {
  id: string;
  projectName: string;
  chain: string;
  estimatedValue: number;
  status: 'Eligible' | 'Not Eligible' | 'Pending' | 'Claimed';
  requirements: Requirement[];
  category: 'DeFi' | 'Layer 2' | 'NFT' | 'Gaming' | 'Infrastructure';
  isFeatured: boolean;
  claimDate: string;
  description: string;
}

const MOCK_AIRDROPS: Airdrop[] = [
  {
    id: '1',
    projectName: 'Arbitrum Extended',
    chain: 'Arbitrum',
    estimatedValue: 2500,
    status: 'Eligible',
    category: 'Layer 2',
    isFeatured: true,
    claimDate: '2026-04-15',
    description: 'Major ARB governance airdrop',
    requirements: [
      { text: 'Bridge $100+ to Arbitrum', met: true },
      { text: '5+ transactions on Arbitrum', met: true },
      { text: 'Held ARB for 30+ days', met: false },
    ],
  },
  {
    id: '2',
    projectName: 'Optimism OP Rewards',
    chain: 'Optimism',
    estimatedValue: 1800,
    status: 'Eligible',
    category: 'Layer 2',
    isFeatured: true,
    claimDate: '2026-04-20',
    description: 'Optimism governance token distribution',
    requirements: [
      { text: 'Bridge funds to Optimism', met: true },
      { text: 'Use Uniswap or other DEX', met: true },
      { text: 'Governance participation', met: false },
    ],
  },
  {
    id: '3',
    projectName: 'Lido Ecosystem Grant',
    chain: 'Ethereum',
    estimatedValue: 3200,
    status: 'Eligible',
    category: 'DeFi',
    isFeatured: true,
    claimDate: '2026-05-01',
    description: 'Lido ecosystem participation rewards',
    requirements: [
      { text: 'Stake $500+ ETH as stETH', met: true },
      { text: '60+ days staking period', met: true },
      { text: 'No governance votes against', met: true },
    ],
  },
  {
    id: '4',
    projectName: 'Uniswap V4 Launch',
    chain: 'Ethereum',
    estimatedValue: 2200,
    status: 'Pending',
    category: 'DeFi',
    isFeatured: false,
    claimDate: '2026-05-10',
    description: 'Uniswap V4 early adopter rewards',
    requirements: [
      { text: 'Trade $1000+ on Uniswap V3', met: true },
      { text: 'Provide liquidity', met: false },
      { text: 'Account age 90+ days', met: true },
    ],
  },
  {
    id: '5',
    projectName: 'Base Rewards Program',
    chain: 'Base',
    estimatedValue: 1500,
    status: 'Eligible',
    category: 'Layer 2',
    isFeatured: false,
    claimDate: '2026-04-25',
    description: 'Base ecosystem early user rewards',
    requirements: [
      { text: 'Deploy contract on Base', met: false },
      { text: '10+ Base transactions', met: true },
      { text: 'Active in Base community', met: false },
    ],
  },
  {
    id: '6',
    projectName: 'Blur Airdrop Round 2',
    chain: 'Ethereum',
    estimatedValue: 1200,
    status: 'Not Eligible',
    category: 'NFT',
    isFeatured: false,
    claimDate: '2026-05-05',
    description: 'Blur NFT marketplace distribution',
    requirements: [
      { text: 'Trade NFTs on Blur', met: false },
      { text: 'Hold NFT for 30 days', met: false },
      { text: 'Referral signups 5+', met: false },
    ],
  },
  {
    id: '7',
    projectName: 'Polygon Ecosystem Fund',
    chain: 'Polygon',
    estimatedValue: 1600,
    status: 'Eligible',
    category: 'Infrastructure',
    isFeatured: true,
    claimDate: '2026-04-30',
    description: 'Polygon protocol ecosystem grants',
    requirements: [
      { text: 'Interact with Polygon dApps', met: true },
      { text: 'Hold MATIC 100+', met: true },
      { text: 'Governance vote participation', met: false },
    ],
  },
  {
    id: '8',
    projectName: 'Axie Infinity Scholar Fund',
    chain: 'Ronin',
    estimatedValue: 800,
    status: 'Pending',
    category: 'Gaming',
    isFeatured: false,
    claimDate: '2026-05-15',
    description: 'Play-to-earn gaming rewards',
    requirements: [
      { text: 'Play 100+ hours on Axie', met: false },
      { text: 'Maintain 45% win rate', met: false },
      { text: 'Daily login 30+ days', met: true },
    ],
  },
  {
    id: '9',
    projectName: 'Aave Governance Rights',
    chain: 'Ethereum',
    estimatedValue: 2800,
    status: 'Eligible',
    category: 'DeFi',
    isFeatured: false,
    claimDate: '2026-05-08',
    description: 'Aave protocol governance tokens',
    requirements: [
      { text: 'Deposit $1000+ to Aave', met: true },
      { text: 'Hold for 60+ days', met: true },
      { text: 'No liquidation history', met: true },
    ],
  },
  {
    id: '10',
    projectName: 'zkSync Era Rewards',
    chain: 'zkSync',
    estimatedValue: 1400,
    status: 'Eligible',
    category: 'Layer 2',
    isFeatured: false,
    claimDate: '2026-04-28',
    description: 'zkSync Era network incentives',
    requirements: [
      { text: 'Bridge to zkSync Era', met: true },
      { text: 'Complete 3+ swaps', met: true },
      { text: 'Referral bonus eligible', met: false },
    ],
  },
  {
    id: '11',
    projectName: 'Immutable X Gaming',
    chain: 'Immutable X',
    estimatedValue: 950,
    status: 'Not Eligible',
    category: 'Gaming',
    isFeatured: false,
    claimDate: '2026-05-12',
    description: 'Immutable X gaming ecosystem',
    requirements: [
      { text: 'Trade gaming NFTs on IMX', met: false },
      { text: 'Play supported game 20+ hours', met: false },
      { text: 'IMX holder 100+', met: false },
    ],
  },
  {
    id: '12',
    projectName: 'Starknet Ecosystem Round 3',
    chain: 'Starknet',
    estimatedValue: 2100,
    status: 'Pending',
    category: 'Infrastructure',
    isFeatured: true,
    claimDate: '2026-05-18',
    description: 'Starknet infrastructure development rewards',
    requirements: [
      { text: 'Deploy Cairo contract', met: false },
      { text: 'Transaction count 50+', met: true },
      { text: 'GitHub contributions', met: false },
    ],
  },
  {
    id: '13',
    projectName: 'Linea Early Adopter',
    chain: 'Linea',
    estimatedValue: 1300,
    status: 'Eligible',
    category: 'Layer 2',
    isFeatured: false,
    claimDate: '2026-05-02',
    description: 'Linea layer 2 early user rewards',
    requirements: [
      { text: 'Complete onchain activity', met: true },
      { text: 'Bridge minimum amount', met: true },
      { text: 'Participate in testnet', met: false },
    ],
  },
];

const CATEGORIES: (Airdrop['category'])[] = [
  'DeFi',
  'Layer 2',
  'NFT',
  'Gaming',
  'Infrastructure',
];
const CHAINS = ['All', 'Ethereum', 'Arbitrum', 'Optimism', 'Polygon', 'Base', 'zkSync', 'Linea', 'Starknet', 'Ronin', 'Immutable X'];

export default function AirdropEligibilityChecker() {
  const [walletAddress, setWalletAddress] = useState('');
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [checking, setChecking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<Airdrop['category'] | 'All'>('All');
  const [selectedChain, setSelectedChain] = useState('All');
  const [sortBy, setSortBy] = useState<'value' | 'status' | 'chain'>('value');

  const handleCheckEligibility = async () => {
    if (!walletAddress.trim()) {
      alert('Please enter a wallet address');
      return;
    }

    setChecking(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) {
          clearInterval(interval);
          return prev;
        }
        return prev + Math.random() * 30;
      });
    }, 200);

    await new Promise((resolve) => setTimeout(resolve, 2500));
    clearInterval(interval);
    setProgress(100);

    setTimeout(() => {
      setChecking(false);
      setProgress(0);
    }, 500);
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handlePasteAddress = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setWalletAddress(text);
    } catch (error) {
      alert('Failed to paste from clipboard');
    }
  };

  let filteredAirdrops = MOCK_AIRDROPS.filter((airdrop) => {
    const categoryMatch =
      selectedCategory === 'All' || airdrop.category === selectedCategory;
    const chainMatch =
      selectedChain === 'All' || airdrop.chain === selectedChain;
    return categoryMatch && chainMatch;
  });

  if (sortBy === 'value') {
    filteredAirdrops.sort((a, b) => b.estimatedValue - a.estimatedValue);
  } else if (sortBy === 'status') {
    const statusOrder = { Eligible: 0, Pending: 1, Claimed: 2, 'Not Eligible': 3 };
    filteredAirdrops.sort(
      (a, b) => statusOrder[a.status] - statusOrder[b.status]
    );
  } else if (sortBy === 'chain') {
    filteredAirdrops.sort((a, b) => a.chain.localeCompare(b.chain));
  };

  const totalValue = filteredAirdrops.reduce((sum, a) => sum + a.estimatedValue, 0);
  const eligibleValue = filteredAirdrops
    .filter((a) => a.status === 'Eligible')
    .reduce((sum, a) => sum + a.estimatedValue, 0);

  const statusConfig = {
    Eligible: { color: 'text-green-400', bg: 'bg-green-500/10', icon: CheckCircle },
    'Not Eligible': { color: 'text-red-400', bg: 'bg-red-500/10', icon: XCircle },
    Pending: { color: 'text-yellow-400', bg: 'bg-yellow-500/10', icon: Clock },
    Claimed: { color: 'text-blue-400', bg: 'bg-blue-500/10', icon: CheckCircle },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <div className="border-b border-slate-700/50 bg-slate-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center gap-3 mb-2">
            <Gift className="w-8 h-8 text-amber-400" />
            <h1 className="text-3xl font-bold">Airdrop Eligibility Checker</h1>
          </div>
          <p className="text-slate-400 text-lg">
            Check your wallet for upcoming and active airdrops across multiple blockchains
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Wallet Input Section */}
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700/50 p-8">
          <div className="flex items-center gap-2 mb-4">
            <Wallet className="w-5 h-5 text-blue-400" />
            <label className="text-lg font-semibold">Enter Your Wallet Address</label>
          </div>

          <div className="flex gap-3 mb-4">
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="0x742d35Cc6634C0532925a3b844Bc5e8aeD8f8bD9"
              className="flex-1 bg-slate-700/50 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50"
            />
            <button
              onClick={handlePasteAddress}
              className="px-4 py-3 bg-slate-700 hover:bg-slate-600 border border-slate-600 rounded-lg transition-colors flex items-center gap-2"
            >
              <Copy className="w-4 h-4" />
              Paste
            </button>
            {walletAddress && (
              <button
                onClick={handleCopyAddress}
              >
                {copiedAddress ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy
                  </>
                )}
              </button>
            )}
          </div>

          <button
            onClick={handleCheckEligibility}
            disabled={checking}
            className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all ${
              checking
                ? 'bg-slate-600 text-slate-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white'
            }`}
          >
            {checking ? (
              <>
                <div className="w-5 h-5 border-2 border-slate-400 border-t-slate-200 rounded-full animate-spin" />
                Checking Eligibility...
              </>
            ) : (
              <>
                <Search className="w-5 h-5" />
                Check Eligibility
              </>
            )}
          </button>

          {checking && (
            <div className="mt-4">
              <div className="flex justify-between text-sm text-slate-400 mb-2">
                <span>Scanning blockchain...</span>
                <span>{Math.round(progress)}%</span>
              </div>
              <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-6">
            <div className="text-sm text-green-400 mb-1">Total Potential Value</div>
            <div className="text-3xl font-bold text-green-300">
              ${totalValue.toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 mt-2">
              Across {filteredAirdrops.length} airdrops
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-lg p-6">
            <div className="text-sm text-blue-400 mb-1">Eligible Value</div>
            <div className="text-3xl font-bold text-blue-300">${eligibleValue.toLocaleString()}</div>
            <div className="text-xs text-slate-400 mt-2">
              {filteredAirdrops.filter((a) => a.status === 'Eligible').length} eligible
              airdrops
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 border border-amber-500/30 rounded-lg p-6">
            <div className="text-sm text-amber-400 mb-1">Pending Claims</div>
            <div className="text-3xl font-bold text-amber-300">
              ${filteredAirdrops
                .filter((a) => a.status === 'Pending')
                .reduce((sum, a) => sum + a.estimatedValue, 0)
                .toLocaleString()}
            </div>
            <div className="text-xs text-slate-400 mt-2">
              {filteredAirdrops.filter((a) => a.status === 'Pending').length} pending
              airdrops
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-slate-400" />
            <h2 className="font-semibold">Filter & Sort</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Category Filter */}
            <div>
              <label className="block text-sm text-slate-400 mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) =>
                  setSelectedCategory(e.target.value as Airdrop['category'] | 'All')
                }
                className="w-full bg-slate-700/50 border border-slate-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Chain Filter */}
            <div>
              <label className="block text-sm text-slate-400 mb-2">Chain</label>
              <select
                value={selectedChain}
                onChange={(e) => setSelectedChain(e.target.value)}
              >
                {CHAINS.map((chain) => (
                  <option key={chain} value={chain}>
                    {chain}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <div>
              <label className="block text-sm text-slate-400 mb-2">Sort By</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'value' | 'status' | 'chain')}
              >
                <option value="value">Value (Highest)</option>
                <option value="status">Status</option>
                <option value="chain">Chain</option>
              </select>
            </div>

            {/* Results */}
            <div className="flex items-end">
              <div className="w-full text-center">
                <div className="text-2xl font-bold text-slate-200">
                  {filteredAirdrops.length}
                </div>
                <div className="text-xs text-slate-400">Results</div>
              </div>
            </div>
          </div>
        </div>

        {/* Airdrops Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredAirdrops.map((airdrop) => {
            const StatusIcon = statusConfig[airdrop.status].icon;
            const metRequirements = airdrop.requirements.filter(
              (r) => r.met
            ).length;

            return (
              <div
                key={airdrop.id}
                className={`rounded-lg border transition-all hover:border-slate-500 ${
                  airdrop.isFeatured
                    ? 'bg-gradient-to-br from-slate-700 to-slate-800 border-amber-500/30 ring-1 ring-amber-500/20'
                    : 'bg-slate-800/50 border-slate-700/50 hover:bg-slate-800/70'
                }`}
              >
                {/* Card Header */}
                <div className="p-6 pb-4 border-b border-slate-700/30">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-bold">{airdrop.projectName}</h3>
                        {airdrop.isFeatured && (
                          <Flame className="w-4 h-4 text-orange-400" fill="currentColor" />
                        )}
                      </div>
                      <p className="text-sm text-slate-400">{airdrop.description}</p>
                    </div>
                  </div>

                  {/* Value and Chain */}
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">
                        ${airdrop.estimatedValue.toLocaleString()}
                      </div>
                      <div className="text-xs text-slate-500">Estimated Value</div>
                    </div>
                    <div className="text-right">
                      <div className="inline-block px-3 py-1 bg-slate-700 rounded-full text-xs font-medium text-slate-300">
                        {airdrop.chain}
                      </div>
                      <div className="inline-block ml-2 px-3 py-1 bg-slate-700 rounded-full text-xs font-medium text-slate-300">
                        {airdrop.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Status */}
                <div className="px-6 py-4 border-b border-slate-700/30">
                  <div
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg ${
                      statusConfig[airdrop.status].bg
                    }`}
                  >
                    <StatusIcon className={`w-4 h-4 ${statusConfig[airdrop.status].color}`} />
                    <span className={`font-medium ${statusConfig[airdrop.status].color}`}>
                      {airdrop.status}
                    </span>
                    <span className="ml-auto text-xs text-slate-400">
                      Claim by {airdrop.claimDate}
                    </span>
                  </div>
                </div>

                {/* Requirements Checklist */}
                <div className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-sm">Requirements</h4>
                      <span className="text-xs text-slate-400">
                        {metRequirements}/{airdrop.requirements.length}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {airdrop.requirements.map((req, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-2 rounded hover:bg-slate-700/20"
                        >
                          <input
                            type="checkbox"
                            checked={req.met || false}
                            disabled
                            className="mt-1 w-4 h-4 rounded border-slate-600 bg-slate-700 accent-green-500 cursor-default"
                          />
                          <span
                            className={`text-sm ${
                              req.met ? 'text-slate-400' : 'text-slate-400'
                            }`}
                          >
                            {req.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button
                    className={`w-full py-2 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                      airdrop.status === 'Eligible'
                        ? 'bg-green-600/20 border border-green-500/50 text-green-400 hover:bg-green-600/30'
                        : airdrop.status === 'Claimed'
                          ? 'bg-blue-600/20 border border-blue-500/50 text-blue-400'
                          : airdrop.status === 'Pending'
                            ? 'bg-yellow-600/20 border border-yellow-500/50 text-yellow-400 hover:bg-yellow-600/30'
                            : 'bg-red-600/20 border border-red-500/50 text-red-400'
                    }`}
                  >
                    {airdrop.status === 'Claimed' ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Claimed
                      </>
                    ) : (
                      <>
                        <ExternalLink className="w-4 h-4" />
                        {airdrop.status === 'Eligible' ? 'Claim Now' : 'View Details'}
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredAirdrops.length === 0 && (
          <div className="text-center py-16">
            <Search className="w-12 h-12 text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-300 mb-2">No Airdrops Found</h3>
            <p className="text-slate-400">
              Try adjusting your filters to see more airdrops
            </p>
          </div>
        )}

        {/* Footer Info */}
        <div className="bg-blue-600/10 border border-blue-500/30 rounded-lg p-6 text-center">
          <p className="text-sm text-slate-300 mb-2">
            This tool shows simulated airdrop data for demonstration purposes.
          </p>
          <p className="text-xs text-slate-500">
            Always verify eligibility requirements directly on official project websites before claiming.
            Never share your private keys or seed phrases.
          </p>
        </div>
      </div>
    </div>
  );
}
