'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { ChevronRight, TrendingDown, Zap, Shield, Route, BarChart3, Network, Check, X, Award, Target } from 'lucide-react';

type Chain = 'Ethereum' | 'Solana' | 'BSC' | 'Arbitrum' | 'Base' | 'Optimism' | 'Polygon' | 'Avalanche';
type Tab = 'simulator' | 'comparison' | 'routes' | 'features' | 'gas' | 'matrix' | 'calculator';

const TOKENS = ['ETH', 'BTC', 'SOL', 'USDC', 'USDT', 'ARB', 'OP', 'MATIC', 'AVAX', 'LINK'];
const CHAINS: Chain[] = ['Ethereum', 'Solana', 'BSC', 'Arbitrum', 'Base', 'Optimism', 'Polygon', 'Avalanche'];

const AGGREGATORS = [
  { name: '1inch', logo: '📊', chains: ['Ethereum', 'BSC', 'Arbitrum', 'Polygon', 'Optimism', 'Base', 'Avalanche'] },
  { name: 'Jupiter', logo: '⚡', chains: ['Solana'] },
  { name: 'Paraswap', logo: '🔄', chains: ['Ethereum', 'BSC', 'Arbitrum', 'Polygon', 'Optimism', 'Avalanche'] },
  { name: '0x/Matcha', logo: '🔵', chains: ['Ethereum', 'BSC', 'Arbitrum', 'Polygon', 'Optimism', 'Base', 'Avalanche'] },
  { name: 'CowSwap', logo: '🐄', chains: ['Ethereum', 'Gnosis'] },
  { name: 'Odos', logo: '🎯', chains: ['Ethereum', 'Arbitrum', 'Optimism', 'Polygon', 'Avalanche', 'Base'] },
  { name: 'KyberSwap', logo: '⛩️', chains: ['Ethereum', 'BSC', 'Arbitrum', 'Polygon', 'Optimism', 'Avalanche', 'Base'] },
  { name: 'OpenOcean', logo: '🌊', chains: ['Ethereum', 'BSC', 'Arbitrum', 'Polygon', 'Optimism', 'Avalanche'] }
];

const FEATURES = [
  { name: 'Limit Orders', aggregators: { '1inch': true, 'Jupiter': true, 'Paraswap': true, '0x/Matcha': true, 'CowSwap': true, 'Odos': false, 'KyberSwap': true, 'OpenOcean': false } },
  { name: 'Gasless Swaps', aggregators: { '1inch': false, 'Jupiter': true, 'Paraswap': false, '0x/Matcha': false, 'CowSwap': true, 'Odos': false, 'KyberSwap': false, 'OpenOcean': false } },
  { name: 'Cross-Chain', aggregators: { '1inch': true, 'Jupiter': false, 'Paraswap': true, '0x/Matcha': true, 'CowSwap': false, 'Odos': true, 'KyberSwap': true, 'OpenOcean': true } },
  { name: 'MEV Protection', aggregators: { '1inch': true, 'Jupiter': false, 'Paraswap': true, '0x/Matcha': true, 'CowSwap': true, 'Odos': true, 'KyberSwap': false, 'OpenOcean': false } },
  { name: 'Multi-Hop Routing', aggregators: { '1inch': true, 'Jupiter': true, 'Paraswap': true, '0x/Matcha': true, 'CowSwap': false, 'Odos': true, 'KyberSwap': true, 'OpenOcean': true } },
  { name: 'Fee Sharing', aggregators: { '1inch': true, 'Jupiter': true, 'Paraswap': false, '0x/Matcha': false, 'CowSwap': false, 'Odos': true, 'KyberSwap': false, 'OpenOcean': false } },
  { name: 'Governance Token', aggregators: { '1inch': true, 'Jupiter': true, 'Paraswap': true, '0x/Matcha': false, 'CowSwap': false, 'Odos': false, 'KyberSwap': true, 'OpenOcean': true } },
  { name: 'Mobile App', aggregators: { '1inch': true, 'Jupiter': true, 'Paraswap': false, '0x/Matcha': false, 'CowSwap': false, 'Odos': false, 'KyberSwap': false, 'OpenOcean': false } }
];

interface QuoteResult {
  aggregator: string;
  outputAmount: number;
  priceImpact: number;
  gasCost: number;
  hops: number;
  executionTime: number;
  mevProtection: boolean;
  rating: number;
}

export default function DexAggregator() {
  const [activeTab, setActiveTab] = useState<Tab>('simulator');
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('USDC');
  const [amount, setAmount] = useState('1.0');
  const [selectedChain, setSelectedChain] = useState<Chain>('Ethereum');
  const [quotes, setQuotes] = useState<QuoteResult[]>([]);
  const [simulated, setSimulated] = useState(false);

  const generateQuotes = () => {
    const baseOutput = parseFloat(amount) * (Math.random() * 500 + 1500);
    const newQuotes: QuoteResult[] = AGGREGATORS
      .filter(agg => agg.chains.includes(selectedChain))
      .map(agg => ({
        aggregator: agg.name,
        outputAmount: baseOutput * (0.95 + Math.random() * 0.04),
        priceImpact: Math.random() * 1.2,
        gasCost: selectedChain === 'Solana' ? Math.random() * 0.01 : Math.random() * 2.5 + 0.5,
        hops: Math.floor(Math.random() * 4) + 1,
        executionTime: Math.floor(Math.random() * 45) + 5,
        mevProtection: Math.random() > 0.5,
        rating: Math.random() * 0.3 + 4.5
      }))
      .sort((a, b) => b.outputAmount - a.outputAmount);
    setQuotes(newQuotes);
    setSimulated(true);
  };

  const availableToTokens = TOKENS.filter(t => t !== fromToken);
  const totalDexes = AGGREGATORS.length;
  const chainsSupported = new Set(AGGREGATORS.flatMap(a => a.chains)).size;
  const avgSavings = simulated ? (Math.random() * 0.5 + 0.15).toFixed(2) : '0.23';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-[var(--color-text)] p-6">
      <div className="max-w-7xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Tools', href: '/tools' },
            { label: 'DEX Aggregator Comparison' }
          ]}
        />

        <div className="mt-8 mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            DEX Aggregator Comparison
          </h1>
          <p className="text-slate-400">Compare swap quotes across multiple DEX aggregators and find the best routes</p>
        </div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-3 mb-8">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-lg p-4 hover:border-blue-500/50 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400 text-xs font-medium uppercase">Total DEXes</p>
              <BarChart3 className="w-4 h-4 text-blue-400" />
            </div>
            <p className="text-2xl font-bold text-blue-400">{totalDexes}</p>
            <p className="text-xs text-slate-500 mt-1">Major aggregators</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-lg p-4 hover:border-purple-500/50 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400 text-xs font-medium uppercase">Chains</p>
              <Network className="w-4 h-4 text-purple-400" />
            </div>
            <p className="text-2xl font-bold text-purple-400">{chainsSupported}</p>
            <p className="text-xs text-slate-500 mt-1">Networks supported</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-lg p-4 hover:border-green-500/50 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400 text-xs font-medium uppercase">Avg Savings</p>
              <TrendingDown className="w-4 h-4 text-green-400" />
            </div>
            <p className="text-2xl font-bold text-green-400">{avgSavings}%</p>
            <p className="text-xs text-slate-500 mt-1">vs direct swap</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-lg p-4 hover:border-yellow-500/50 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400 text-xs font-medium uppercase">Volume</p>
              <Award className="w-4 h-4 text-yellow-400" />
            </div>
            <p className="text-2xl font-bold text-yellow-400">$847B</p>
            <p className="text-xs text-slate-500 mt-1">processed all-time</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400 text-xs font-medium uppercase">MEV Routes</p>
              <Shield className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-2xl font-bold text-cyan-400">5/8</p>
            <p className="text-xs text-slate-500 mt-1">aggregators support</p>
          </div>
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-800/40 border border-slate-700 rounded-lg p-4 hover:border-pink-500/50 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-slate-400 text-xs font-medium uppercase">Uptime</p>
              <Target className="w-4 h-4 text-pink-400" />
            </div>
            <p className="text-2xl font-bold text-pink-400">99.9%</p>
            <p className="text-xs text-slate-500 mt-1">avg reliability</p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-slate-700 overflow-x-auto">
          {(['simulator', 'comparison', 'routes', 'features', 'matrix', 'calculator', 'gas'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 font-medium transition whitespace-nowrap text-sm ${
                activeTab === tab
                  ? 'text-blue-400 border-b-2 border-blue-400'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              {tab === 'simulator' && 'Swap Simulator'}
              {tab === 'comparison' && 'Comparison'}
              {tab === 'routes' && 'Routes'}
              {tab === 'features' && 'Features'}
              {tab === 'matrix' && 'Feature Matrix'}
              {tab === 'calculator' && 'Gas Calculator'}
              {tab === 'gas' && 'Gas Savings'}
            </button>
          ))}
        </div>

        {/* Simulator Tab */}
        {activeTab === 'simulator' && (
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium mb-2">From Token</label>
                <select
                  value={fromToken}
                  onChange={e => setFromToken(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-[var(--color-text)]"
                >
                  {TOKENS.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">To Token</label>
                <select
                  value={toToken}
                  onChange={e => setToToken(e.target.value)}
                >
                  {availableToTokens.map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Amount</label>
                <input
                  type="number"
                  value={amount}
                  onChange={e => setAmount(e.target.value)}
                  placeholder="1.0"
                  step="0.01"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Chain</label>
                <select
                  value={selectedChain}
                  onChange={e => setSelectedChain(e.target.value as Chain)}
                >
                  {CHAINS.map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>
            <button
              onClick={generateQuotes}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 font-semibold py-2 rounded-lg transition"
            >
              Get Quotes
            </button>

            {simulated && quotes.length > 0 && (
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-4">Quote Results</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-slate-600">
                        <th className="px-4 py-2 text-left text-slate-400">Aggregator</th>
                        <th className="px-4 py-2 text-right text-slate-400">{toToken} Output</th>
                        <th className="px-4 py-2 text-right text-slate-400">Price Impact</th>
                        <th className="px-4 py-2 text-right text-slate-400">Gas Cost</th>
                        <th className="px-4 py-2 text-right text-slate-400">Hops</th>
                        <th className="px-4 py-2 text-right text-slate-400">Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {quotes.map((q, i) => (
                        <tr key={i} className={`border-b border-slate-700 hover:bg-slate-700/20 ${i === 0 ? 'bg-green-900/10' : ''}`}>
                          <td className="px-4 py-3 font-medium">{q.aggregator}</td>
                          <td className="px-4 py-3 text-right text-green-400">{q.outputAmount.toFixed(2)}</td>
                          <td className="px-4 py-3 text-right text-orange-400">{q.priceImpact.toFixed(3)}%</td>
                          <td className="px-4 py-3 text-right">${q.gasCost.toFixed(2)}</td>
                          <td className="px-4 py-3 text-right">{q.hops}</td>
                          <td className="px-4 py-3 text-right">{q.executionTime}s</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Comparison Tab */}
        {activeTab === 'comparison' && (
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="px-4 py-3 text-left text-slate-400">Aggregator</th>
                  <th className="px-4 py-3 text-right text-slate-400">Output (USDC)</th>
                  <th className="px-4 py-3 text-right text-slate-400">Price Impact</th>
                  <th className="px-4 py-3 text-right text-slate-400">Gas Cost</th>
                  <th className="px-4 py-3 text-right text-slate-400">Hops</th>
                  <th className="px-4 py-3 text-right text-slate-400">Exec Time</th>
                  <th className="px-4 py-3 text-center text-slate-400">MEV</th>
                  <th className="px-4 py-3 text-right text-slate-400">Rating</th>
                </tr>
              </thead>
              <tbody>
                {AGGREGATORS.map((agg, i) => (
                  <tr key={i} className="border-b border-slate-700 hover:bg-slate-700/20">
                    <td className="px-4 py-3 font-medium">{agg.logo} {agg.name}</td>
                    <td className="px-4 py-3 text-right text-green-400">1,543.21</td>
                    <td className="px-4 py-3 text-right text-orange-400">0.34%</td>
                    <td className="px-4 py-3 text-right">$1.23</td>
                    <td className="px-4 py-3 text-right">2</td>
                    <td className="px-4 py-3 text-right">12ms</td>
                    <td className="px-4 py-3 text-center text-blue-400">{Math.random() > 0.5 ? '✓' : '—'}</td>
                    <td className="px-4 py-3 text-right font-medium">{(Math.random() * 0.5 + 4.3).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Routes Tab */}
        {activeTab === 'routes' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {AGGREGATORS.slice(0, 4).map((agg, i) => (
              <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-lg p-4">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Route className="w-4 h-4" />
                  {agg.logo} {agg.name} Route
                </h3>
                <div className="space-y-3">
                  {[
                    { token: 'ETH', label: 'Input' },
                    { token: 'WETH', label: 'Wrapped' },
                    { token: 'USDC', label: 'Pool Swap' },
                    { token: 'USDT', label: 'Output' }
                  ].map((step, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-600/30 flex items-center justify-center text-xs font-semibold">
                        {j + 1}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium">{step.token}</p>
                        <p className="text-xs text-slate-400">{step.label}</p>
                      </div>
                      {j < 3 && <ChevronRight className="w-4 h-4 text-slate-500" />}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Features Tab */}
        {activeTab === 'features' && (
          <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-600">
                  <th className="px-4 py-3 text-left text-slate-400">Feature</th>
                  {AGGREGATORS.map(agg => (
                    <th key={agg.name} className="px-4 py-3 text-center text-slate-400 whitespace-nowrap">{agg.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((feature, i) => (
                  <tr key={i} className="border-b border-slate-700 hover:bg-slate-700/20">
                    <td className="px-4 py-3 font-medium">{feature.name}</td>
                    {AGGREGATORS.map(agg => (
                      <td key={agg.name} className="px-4 py-3 text-center">
                        {(feature.aggregators as Record<string, boolean>)[agg.name] ? (
                          <span className="text-green-400 font-bold">✓</span>
                        ) : (
                          <span className="text-slate-500">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Feature Comparison Matrix Tab */}
        {activeTab === 'matrix' && (
          <div className="space-y-6">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 overflow-x-auto">
              <h3 className="font-semibold mb-6 flex items-center gap-2 text-lg">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                Complete Feature Comparison Matrix
              </h3>
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-slate-600">
                    <th className="px-3 py-3 text-left text-slate-400 font-semibold sticky left-0 bg-slate-900/50">Feature</th>
                    {AGGREGATORS.map(agg => (
                      <th key={agg.name} className="px-3 py-3 text-center text-slate-400 font-semibold whitespace-nowrap">
                        <div className="font-bold text-sm">{agg.logo}</div>
                        <div className="text-xs">{agg.name}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FEATURES.map((feature, i) => (
                    <tr key={i} className={`border-b border-slate-700/50 hover:bg-slate-700/20 ${i % 2 === 0 ? 'bg-slate-800/10' : ''}`}>
                      <td className="px-3 py-3 font-semibold text-slate-200 sticky left-0 bg-slate-900/50">{feature.name}</td>
                      {AGGREGATORS.map(agg => (
                        <td key={agg.name} className="px-3 py-3 text-center">
                          {(feature.aggregators as Record<string, boolean>)[agg.name] ? (
                            <div className="flex justify-center">
                              <div className="w-5 h-5 bg-green-500/20 border border-green-500/50 rounded flex items-center justify-center">
                                <Check className="w-3 h-3 text-green-400" />
                              </div>
                            </div>
                          ) : (
                            <div className="flex justify-center">
                              <div className="w-5 h-5 bg-slate-600/20 border border-slate-600/50 rounded flex items-center justify-center">
                                <X className="w-3 h-3 text-slate-500" />
                              </div>
                            </div>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-900/10 border border-blue-700/30 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-400 mb-2 flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Features Summary
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>✓ Limit Orders: 6/8 aggregators support</li>
                    <li>✓ Gasless Swaps: 2/8 aggregators support</li>
                    <li>✓ Cross-Chain: 6/8 aggregators support</li>
                    <li>✓ MEV Protection: 5/8 aggregators support</li>
                  </ul>
                </div>
                <div className="bg-purple-900/10 border border-purple-700/30 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-400 mb-2 flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Top Performers
                  </h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    <li>🥇 1inch: 7/8 features</li>
                    <li>🥈 Paraswap: 5/8 features</li>
                    <li>🥉 KyberSwap: 5/8 features</li>
                    <li>📊 Odos: 4/8 features (specialist)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gas Savings Calculator Tab */}
        {activeTab === 'calculator' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Input Section */}
              <div className="lg:col-span-1">
                <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 sticky top-6">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-400" />
                    Calculator Inputs
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Swap Amount (USD)</label>
                      <input
                        defaultValue="1000"
                        className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-[var(--color-text)] text-sm"
                        placeholder="1000"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Network</label>
                      <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-[var(--color-text)] text-sm">
                        <option>Ethereum</option>
                        <option>Arbitrum</option>
                        <option>Optimism</option>
                        <option>Polygon</option>
                        <option>BSC</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Gas Price (Gwei)</label>
                      <input
                        defaultValue="45"
                        placeholder="45"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Section */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
                  <h3 className="font-semibold mb-4 text-lg">Gas Cost Across Aggregators</h3>
                  <div className="space-y-4">
                    {[
                      { name: '1inch', gas: 45, savings: 52, color: 'from-green-600 to-emerald-600' },
                      { name: 'Paraswap', gas: 58, savings: 40, color: 'from-blue-600 to-cyan-600' },
                      { name: '0x/Matcha', gas: 52, savings: 45, color: 'from-indigo-600 to-blue-600' },
                      { name: 'KyberSwap', gas: 62, savings: 34, color: 'from-purple-600 to-pink-600' },
                      { name: 'Odos', gas: 55, savings: 42, color: 'from-orange-600 to-red-600' },
                      { name: 'Direct DEX', gas: 95, savings: 0, color: 'from-slate-600 to-slate-700' }
                    ].map((item, i) => (
                      <div key={i} className="p-4 bg-slate-700/30 rounded-lg border border-slate-600/30 hover:border-slate-500/50 transition">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-xs text-slate-400">Estimated cost</p>
                          </div>
                          <div className="text-right">
                            <p className="text-lg font-bold text-green-400">${item.gas.toFixed(2)}</p>
                            {item.savings > 0 && <p className="text-xs text-green-400">Save {item.savings}%</p>}
                          </div>
                        </div>
                        <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full bg-gradient-to-r ${item.color} transition-all`}
                            style={{ width: `${(item.gas / 95) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">Cheapest Option</p>
                    <p className="text-2xl font-bold text-green-400">1inch</p>
                    <p className="text-xs text-slate-400 mt-1">$45.00 (52% savings)</p>
                  </div>
                  <div className="bg-yellow-900/20 border border-yellow-700/30 rounded-lg p-4">
                    <p className="text-slate-400 text-sm mb-1">Total Savings vs Direct</p>
                    <p className="text-2xl font-bold text-yellow-400">$50.00</p>
                    <p className="text-xs text-slate-400 mt-1">Using best aggregator</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Route Visualization Cards Tab */}
        {activeTab === 'routes' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {AGGREGATORS.slice(0, 4).map((agg, i) => (
                <div key={i} className="bg-slate-800/30 border border-slate-700 rounded-lg p-6 hover:border-blue-500/50 transition">
                  <h3 className="font-semibold mb-4 flex items-center gap-2 text-lg">
                    <Route className="w-5 h-5 text-blue-400" />
                    {agg.logo} {agg.name} Route
                  </h3>
                  <div className="space-y-3 mb-4">
                    {[
                      { token: 'ETH', label: 'Input', usd: '$1,850.00' },
                      { token: 'WETH', label: 'Wrapped', usd: '$1,849.50' },
                      { token: 'USDC', label: 'Pool Swap', usd: '$1,848.25' },
                      { token: 'USDT', label: 'Output', usd: '$1,847.80' }
                    ].map((step, j) => (
                      <div key={j}>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 flex items-center justify-center text-xs font-semibold border border-blue-500/30">
                            {j + 1}
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-[var(--color-text)]">{step.token}</p>
                            <p className="text-xs text-slate-400">{step.label}</p>
                          </div>
                          <p className="text-sm font-semibold text-green-400">{step.usd}</p>
                          {j < 3 && <ChevronRight className="w-4 h-4 text-slate-500" />}
                        </div>
                        {j < 3 && <div className="h-px bg-gradient-to-r from-slate-700/0 via-slate-700/50 to-slate-700/0 ml-12" />}
                      </div>
                    ))}
                  </div>
                  <div className="bg-slate-700/30 border border-slate-600/30 rounded p-3">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div>
                        <p className="text-slate-400">Hops</p>
                        <p className="font-semibold">3</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Price Impact</p>
                        <p className="font-semibold text-orange-400">0.08%</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Gas Cost</p>
                        <p className="font-semibold">$1.23</p>
                      </div>
                      <div>
                        <p className="text-slate-400">Time</p>
                        <p className="font-semibold">~15s</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Route Optimization Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-700/20 border border-slate-600/20 rounded p-4">
                  <h4 className="font-semibold mb-2 text-cyan-300">Minimize Hops</h4>
                  <p className="text-sm text-slate-300">Fewer intermediate swaps reduce slippage and gas costs. Aim for 2-3 hop routes.</p>
                </div>
                <div className="bg-slate-700/20 border border-slate-600/20 rounded p-4">
                  <h4 className="font-semibold mb-2 text-cyan-300">Pool Liquidity</h4>
                  <p className="text-sm text-slate-300">Choose routes with deep liquidity to minimize price impact on your swap.</p>
                </div>
                <div className="bg-slate-700/20 border border-slate-600/20 rounded p-4">
                  <h4 className="font-semibold mb-2 text-cyan-300">MEV Protection</h4>
                  <p className="text-sm text-slate-300">Enable MEV protection when available to prevent sandwich attacks on larger swaps.</p>
                </div>
                <div className="bg-slate-700/20 border border-slate-600/20 rounded p-4">
                  <h4 className="font-semibold mb-2 text-cyan-300">Timing Matters</h4>
                  <p className="text-sm text-slate-300">Execute during low gas price periods for better overall costs on swaps.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Gas Savings Tab */}
        {activeTab === 'gas' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-4 h-4 text-yellow-400" />
                Gas Cost Comparison (1 ETH Swap)
              </h3>
              <div className="space-y-3">
                {[
                  { name: '1inch', gas: 1.23, savings: 45 },
                  { name: 'Paraswap', gas: 1.45, savings: 38 },
                  { name: 'KyberSwap', gas: 1.67, savings: 28 },
                  { name: 'Direct DEX', gas: 2.34, savings: 0 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-sm text-green-400">${item.gas.toFixed(2)} {item.savings > 0 && `(-${item.savings}%)`}</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${item.savings > 0 ? 'bg-green-500' : 'bg-slate-500'}`}
                        style={{ width: `${(item.gas / 2.34) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 border border-slate-700 rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-blue-400" />
                Savings by Chain
              </h3>
              <div className="space-y-3">
                {[
                  { chain: 'Ethereum', savings: 34 },
                  { chain: 'Arbitrum', savings: 52 },
                  { chain: 'Optimism', savings: 48 },
                  { chain: 'Polygon', savings: 67 },
                  { chain: 'BSC', savings: 41 }
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-medium">{item.chain}</span>
                      <span className="text-sm text-green-400">{item.savings}% avg</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-purple-500"
                        style={{ width: `${item.savings}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
