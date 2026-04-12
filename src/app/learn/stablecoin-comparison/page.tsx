'use client';

import React, { useState } from 'react';
import { ArrowUpDown, TrendingUp, Shield, AlertCircle, Check } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';

interface Stablecoin {
  name: string;
  ticker: string;
  issuer: string;
  backingType: 'Fiat-Backed' | 'Crypto-Collateralized' | 'Algorithmic' | 'Delta-Neutral' | 'Hybrid (Fractional)';
  marketCap: string;
  chains: string[];
  currentYield: string;
  riskRating: number;
  pegStability: number;
  description: string;
}

const stablecoins: Stablecoin[] = [
  {
    name: 'Tether',
    ticker: 'USDT',
    issuer: 'Tether Limited',
    backingType: 'Fiat-Backed',
    marketCap: '$118.2B',
    chains: ['Ethereum', 'Tron', 'Polygon', 'Solana', 'Arbitrum'],
    currentYield: '0-3%',
    riskRating: 3,
    pegStability: 98,
    description: 'Most widely used stablecoin, backed by US dollar reserves. Offers good liquidity but has regulatory scrutiny concerns.',
  },
  {
    name: 'USD Coin',
    ticker: 'USDC',
    issuer: 'Circle',
    backingType: 'Fiat-Backed',
    marketCap: '$34.8B',
    chains: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'Solana'],
    currentYield: '0.5-2%',
    riskRating: 2,
    pegStability: 99.2,
    description: 'Regulated stablecoin with monthly attestations and Circle integration. Gaining institutional adoption.',
  },
  {
    name: 'Dai',
    ticker: 'DAI',
    issuer: 'MakerDAO',
    backingType: 'Crypto-Collateralized',
    marketCap: '$8.5B',
    chains: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism', 'Solana'],
    currentYield: '1-4%',
    riskRating: 3,
    pegStability: 98.5,
    description: 'Decentralized stablecoin backed by crypto collateral. Offers governance through MKR token.',
  },
  {
    name: 'USDe',
    ticker: 'USDe',
    issuer: 'Ethena',
    backingType: 'Delta-Neutral',
    marketCap: '$3.2B',
    chains: ['Ethereum', 'Arbitrum'],
    currentYield: '3-6%',
    riskRating: 4,
    pegStability: 97.8,
    description: 'Novel delta-neutral synthetic dollar. Unique yield from basis trading hedged positions. Higher complexity.',
  },
  {
    name: 'PayPal USD',
    ticker: 'PYUSD',
    issuer: 'PayPal',
    backingType: 'Fiat-Backed',
    marketCap: '$1.5B',
    chains: ['Ethereum', 'Solana'],
    currentYield: '0-1.5%',
    riskRating: 2,
    pegStability: 99.3,
    description: 'Backed by institutional reserves. Integrated with PayPal ecosystem. Strong regulatory compliance.',
  },
  {
    name: 'Frax',
    ticker: 'FRAX',
    issuer: 'Frax Finance',
    backingType: 'Hybrid (Fractional)',
    marketCap: '$2.1B',
    chains: ['Ethereum', 'Polygon', 'Arbitrum', 'Optimism'],
    currentYield: '2-5%',
    riskRating: 4,
    pegStability: 97.5,
    description: 'Hybrid model with varying collateralization. Offers flexibility and governance token incentives.',
  },
  {
    name: 'Aave GHO',
    ticker: 'GHO',
    issuer: 'Aave',
    backingType: 'Crypto-Collateralized',
    marketCap: '$0.8B',
    chains: ['Ethereum', 'Arbitrum', 'Polygon'],
    currentYield: '1-3%',
    riskRating: 3,
    pegStability: 98.2,
    description: 'Minted on Aave protocol by depositing collateral. Newest major player with growing ecosystem.',
  },
  {
    name: 'Curve USD',
    ticker: 'crvUSD',
    issuer: 'Curve Finance',
    backingType: 'Crypto-Collateralized',
    marketCap: '$1.2B',
    chains: ['Ethereum', 'Arbitrum', 'Polygon'],
    currentYield: '0.5-2%',
    riskRating: 3,
    pegStability: 98.7,
    description: 'Minted via Curve lending market. Efficient AMM integration for decentralized ecosystem.',
  },
];

export default function StablecoinComparison() {
  const [sortBy, setSortBy] = useState<keyof Stablecoin>('marketCap');
  const [filterByType, setFilterByType] = useState<string>('All');

  const backingTypes = ['All', ...new Set(stablecoins.map((sc) => sc.backingType))];

  const filteredCoins = stablecoins.filter(
    (coin) => filterByType === 'All' || coin.backingType === filterByType
  );

  const sortedCoins = [...filteredCoins].sort((a, b) => {
    if (sortBy === 'marketCap') {
      return parseFloat(b.marketCap) - parseFloat(a.marketCap);
    }
    if (sortBy === 'riskRating') {
      return a.riskRating - b.riskRating;
    }
    if (sortBy === 'pegStability') {
      return b.pegStability - a.pegStability;
    }
    return 0;
  });

  const getRiskColor = (rating: number) => {
    if (rating === 1) return 'bg-green-900 text-green-100';
    if (rating === 2) return 'bg-blue-900 text-blue-100';
    if (rating === 3) return 'bg-yellow-900 text-yellow-100';
    if (rating === 4) return 'bg-orange-900 text-orange-100';
    return 'bg-red-900 text-red-100';
  };

  const getBackingColor = (type: string) => {
    const colors: Record<string, string> = {
      'Fiat-Backed': 'bg-blue-900/30 border-blue-700 text-blue-100',
      'Crypto-Collateralized': 'bg-purple-900/30 border-purple-700 text-purple-100',
      'Delta-Neutral': 'bg-cyan-900/30 border-cyan-700 text-cyan-100',
      'Hybrid (Fractional)': 'bg-indigo-900/30 border-indigo-700 text-indigo-100',
      'Algorithmic': 'bg-pink-900/30 border-pink-700 text-pink-100',
    };
    return colors[type] || 'bg-gray-900/30 border-gray-700 text-gray-100';
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <Breadcrumb />

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Stablecoin Comparison Guide 2026</h1>
          <p className="text-lg text-gray-400 mb-6">
            Explore and compare the major stablecoins available in the crypto ecosystem. Understand their backing mechanisms,
            risk profiles, and yield opportunities to make informed decisions.
          </p>
        </div>

        {/* Introduction Section */}
        <section className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Check className="w-6 h-6 text-green-400" />
            What Are Stablecoins?
          </h2>
          <p className="text-gray-300 mb-4">
            Stablecoins are cryptocurrencies designed to maintain a stable value, typically pegged to a reference asset like
            the US Dollar. They combine the benefits of blockchain technology with price stability, making them ideal for
            trading, lending, and everyday transactions.
          </p>
          <p className="text-gray-300">
            Each stablecoin achieves stability through different mechanisms—from fiat reserves to cryptocurrency collateral to
            sophisticated algorithmic designs. The choice depends on your risk tolerance, yield goals, and desired blockchain ecosystem.
          </p>
        </section>

        {/* Types of Stablecoins */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-400" />
            Types of Stablecoins
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#161b22] border border-blue-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-blue-200">Fiat-Backed</h3>
              <p className="text-sm text-gray-400">
                Reserves held in traditional banks. Example: USDT, USDC. Highest stability but centralized.
              </p>
            </div>
            <div className="bg-[#161b22] border border-purple-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-purple-200">Crypto-Collateralized</h3>
              <p className="text-sm text-gray-400">
                Backed by cryptocurrency collateral. Example: DAI, GHO. Decentralized but requires overcollateralization.
              </p>
            </div>
            <div className="bg-[#161b22] border border-cyan-700 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-2 text-cyan-200">Delta-Neutral</h3>
              <p className="text-sm text-gray-400">
                Uses hedging strategies for stability. Example: USDe. Complex mechanisms with unique yield structures.
              </p>
            </div>
          </div>
        </section>

        {/* Interactive Comparison Table */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6 items-start md:items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-green-400" />
              Detailed Comparison
            </h2>
            <div className="flex flex-wrap gap-2">
              <label className="text-sm text-gray-400">Filter by type:</label>
              <select
                value={filterByType}
                onChange={(e) => setFilterByType(e.target.value)}
                className="bg-[#161b22] border border-[#30363d] text-[#e6edf3] px-3 py-1 rounded text-sm cursor-pointer"
              >
                {backingTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="overflow-x-auto border border-[#30363d] rounded-lg">
            <table className="w-full">
              <thead className="bg-[#161b22] border-b border-[#30363d]">
                <tr>
                  <th className="px-4 py-3 text-left">Stablecoin</th>
                  <th className="px-4 py-3 text-left">Issuer</th>
                  <th className="px-4 py-3 text-left">Backing</th>
                  <th
                    className="px-4 py-3 text-left cursor-pointer hover:bg-[#0d1117]"
                    onClick={() => setSortBy('marketCap')}
                  >
                    <div className="flex items-center gap-2">
                      Market Cap <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left">Chains</th>
                  <th className="px-4 py-3 text-left">Current Yield</th>
                  <th
                    onClick={() => setSortBy('riskRating')}
                  >
                    <div className="flex items-center gap-2">
                      Risk <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                  <th
                    onClick={() => setSortBy('pegStability')}
                  >
                    <div className="flex items-center gap-2">
                      Peg Stability <ArrowUpDown className="w-4 h-4" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedCoins.map((coin) => (
                  <tr key={coin.ticker} className="border-b border-[#30363d] hover:bg-[#161b22]">
                    <td className="px-4 py-4 font-bold text-[#58a6ff]">{coin.ticker}</td>
                    <td className="px-4 py-4 text-sm">{coin.issuer}</td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium border ${getBackingColor(coin.backingType)}`}>
                        {coin.backingType}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm">{coin.marketCap}</td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1">
                        {coin.chains.slice(0, 2).map((chain) => (
                          <span key={chain} className="bg-gray-900 text-gray-300 px-2 py-1 rounded text-xs">
                            {chain}
                          </span>
                        ))}
                        {coin.chains.length > 2 && (
                          <span className="bg-gray-900 text-gray-300 px-2 py-1 rounded text-xs">+{coin.chains.length - 2}</span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm font-semibold text-green-400">{coin.currentYield}</td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${getRiskColor(coin.riskRating)}`}>
                        {coin.riskRating}/5
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-green-500 h-2 rounded-full"
                            style={{ width: `${coin.pegStability}%` }}
                          ></div>
                        </div>
                        <span className="text-sm">{coin.pegStability}%</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Comparison Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Stablecoin Profiles</h2>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedCoins.map((coin) => (
              <div
                key={coin.ticker}
                className={`bg-[#161b22] border-2 rounded-lg p-6 hover:shadow-lg transition border-[#30363d]`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[#58a6ff]">{coin.name}</h3>
                    <p className="text-sm text-gray-400">{coin.ticker}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${getRiskColor(coin.riskRating)}`}>
                    Risk {coin.riskRating}/5
                  </span>
                </div>

                <p className="text-sm text-gray-300 mb-4">{coin.description}</p>

                <div className="space-y-3 mb-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Issuer:</span>
                    <span className="font-semibold">{coin.issuer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Market Cap:</span>
                    <span className="font-semibold text-green-400">{coin.marketCap}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Current Yield:</span>
                    <span className="font-semibold text-yellow-400">{coin.currentYield}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Peg Stability:</span>
                    <span className="font-semibold">{coin.pegStability}%</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {coin.chains.map((chain) => (
                    <span key={chain} className="bg-gray-900 text-gray-300 px-2 py-1 rounded text-xs">
                      {chain}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Analysis */}
        <section className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertCircle className="w-6 h-6 text-orange-400" />
            Risk Analysis
          </h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-4">Risk Rating Scale</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <span className="inline-block w-20 font-semibold text-green-400">1/5 - Minimal:</span> Highly established, widely adopted, minimal risk.
                </p>
                <p>
                  <span className="inline-block w-20 font-semibold text-blue-400">2/5 - Low:</span> Strong backing, good liquidity, established players.
                </p>
                <p>
                  <span className="inline-block w-20 font-semibold text-yellow-400">3/5 - Medium:</span> Solid fundamentals but newer or more complex.
                </p>
                <p>
                  <span className="inline-block w-20 font-semibold text-orange-400">4/5 - High:</span> Innovative mechanisms or smaller market cap.
                </p>
                <p>
                  <span className="inline-block w-20 font-semibold text-red-400">5/5 - Critical:</span> Experimental or unproven mechanisms.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Key Risk Factors by Type</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="font-semibold text-blue-300 mb-1">Fiat-Backed Stablecoins</p>
                  <p className="text-sm text-gray-400">Centralization risk, regulatory changes, reserve verification concerns.</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-purple-300 mb-1">Crypto-Collateralized Stablecoins</p>
                  <p className="text-sm text-gray-400">Collateral volatility, liquidation cascades, smart contract risk.</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="font-semibold text-cyan-300 mb-1">Delta-Neutral Stablecoins</p>
                  <p className="text-sm text-gray-400">Basis trading risk, funding rate changes, operational complexity.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Yield Opportunities */}
        <section className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-6 h-6 text-green-400" />
            Yield Opportunities
          </h2>
          <p className="text-gray-300 mb-6">
            Stablecoins can generate yield through various mechanisms:
          </p>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong>Lending Markets:</strong> Supply stablecoins on platforms like Aave, Compound, or Curve for interest.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong>Liquidity Pools:</strong> Provide liquidity on DEXes and earn trading fees.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong>Staking Rewards:</strong> Some protocols offer native stablecoin staking programs.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 font-bold">•</span>
              <span><strong>Basis Trading:</strong> Advanced strategy using stablecoin futures and spot arbitrage.</span>
            </li>
          </ul>
        </section>

        {/* How to Choose */}
        <section className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-6">How to Choose the Right Stablecoin</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2 text-[#58a6ff]">For Maximum Stability</h3>
              <p className="text-gray-300 text-sm">
                Choose USDC or USDT. Both are the most widely used and have proven track records with high peg stability.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-[#58a6ff]">For Decentralization</h3>
              <p className="text-gray-300 text-sm">
                Consider DAI or GHO. These are governed by token holders and backed by transparent smart contracts.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-[#58a6ff]">For Yield Generation</h3>
              <p className="text-gray-300 text-sm">
                USDe offers competitive yields, but requires understanding delta-neutral mechanisms. FRAX offers hybrid benefits.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-[#58a6ff]">For Institutional Use</h3>
              <p className="text-gray-300 text-sm">
                USDC (Circle integration) and PYUSD (PayPal ecosystem) are designed for regulated financial institutions.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2 text-[#58a6ff]">For Specific Blockchains</h3>
              <p className="text-gray-300 text-sm">
                Check which stablecoins are available on your preferred chain. Liquidity and availability vary significantly.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <details className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 cursor-pointer">
              <summary className="font-bold flex justify-between items-center hover:text-[#58a6ff]">
                Why do stablecoins lose their peg?
                <span className="text-gray-400">+</span>
              </summary>
              <p className="text-gray-300 text-sm mt-4">
                Peg deviations occur due to market imbalances, low liquidity, or loss of confidence in backing. Most stablecoins quickly revert to
                their peg through arbitrage mechanisms. Significant and sustained deviations indicate fundamental issues.
              </p>
            </details>

            <details className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 cursor-pointer">
              <summary className="font-bold flex justify-between items-center hover:text-[#58a6ff]">
                Are stablecoins regulated?
                <span className="text-gray-400">+</span>
              </summary>
              <p className="text-gray-300 text-sm mt-4">
                Regulation varies by jurisdiction. Fiat-backed stablecoins like USDC face increasing regulatory scrutiny and are subject to
                MiCA in Europe. Crypto-collateralized stablecoins have different regulatory treatment. Check local regulations before using.
              </p>
            </details>

            <details className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 cursor-pointer">
              <summary className="font-bold flex justify-between items-center hover:text-[#58a6ff]">
                Can I use stablecoins across different blockchains?
                <span className="text-gray-400">+</span>
              </summary>
              <p className="text-gray-300 text-sm mt-4">
                Most major stablecoins are available on multiple chains (Ethereum, Solana, Polygon, etc.). Use bridging protocols like Stargate
                or Across to move stablecoins between chains, but be aware of gas costs and bridge risks.
              </p>
            </details>

            <details className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 cursor-pointer">
              <summary className="font-bold flex justify-between items-center hover:text-[#58a6ff]">
                What is overcollateralization in crypto-backed stablecoins?
                <span className="text-gray-400">+</span>
              </summary>
              <p className="text-gray-300 text-sm mt-4">
                Overcollateralization means you must deposit more crypto value than the stablecoins you mint. For example, to mint $100 DAI,
                you might deposit $150+ worth of ETH. This protects the system during collateral price drops and ensures stability.
              </p>
            </details>
          </div>
        </section>

        {/* Regulatory Landscape */}
        <section className="bg-[#161b22] border border-[#30363d] rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-6">Regulatory Landscape</h2>
          <div className="space-y-4 text-sm text-gray-300">
            <p>
              <strong className="text-[#58a6ff]">MiCA (EU):</strong> The Markets in Crypto-Assets Regulation imposes strict requirements on
              stablecoin issuers operating in Europe. Significant restrictions on high-risk stablecoins.
            </p>
            <p>
              <strong className="text-[#58a6ff]">USA:</strong> Regulatory framework is fragmented across SEC, CFTC, and state regulators.
              Stablecoin bills have been proposed but not universally adopted.
            </p>
            <p>
              <strong className="text-[#58a6ff]">Key Trend:</strong> Global regulators favor fiat-backed stablecoins with clear backing and
              regular attestations. Crypto-collateralized and algorithmic models face more scrutiny.
            </p>
            <p>
              <strong className="text-[#58a6ff]">Best Practice:</strong> Always verify the regulatory status of any stablecoin before holding
              significant amounts, especially for business use.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
