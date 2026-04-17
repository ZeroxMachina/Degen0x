'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import RelatedContent from '@/components/RelatedContent';

interface Holding {
  id: string;
  name: string;
  amount: number;
  buyPrice: number;
}

interface PriceData {
  [key: string]: number;
}

interface HistoricalData {
  [key: string]: number[];
}

const INITIAL_PRICES: PriceData = {
  Bitcoin: 42500,
  Ethereum: 2350,
  'Solana': 105,
  'Cardano': 0.95,
  'Polkadot': 7.2,
};

const SAMPLE_HOLDINGS: Holding[] = [
  { id: '1', name: 'Bitcoin', amount: 0.5, buyPrice: 35000 },
  { id: '2', name: 'Ethereum', amount: 5, buyPrice: 1800 },
  { id: '3', name: 'Solana', amount: 50, buyPrice: 85 },
];

export default function PortfolioTracker() {
  const [holdings, setHoldings] = useState<Holding[]>(SAMPLE_HOLDINGS);
  const [prices, setPrices] = useState<PriceData>(INITIAL_PRICES);
  const [historicalData, setHistoricalData] = useState<HistoricalData>({});
  const [newHolding, setNewHolding] = useState({ name: 'Bitcoin', amount: '', buyPrice: '' });
  const [mounted, setMounted] = useState(false);

  // Initialize historical data
  useEffect(() => {
    setMounted(true);
    const initialHistory: HistoricalData = {};
    Object.keys(INITIAL_PRICES).forEach(coin => {
      initialHistory[coin] = [INITIAL_PRICES[coin]];
    });
    setHistoricalData(initialHistory);
  }, []);

  // Simulate live price updates with random fluctuations
  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setPrices(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(coin => {
          const change = (Math.random() - 0.5) * 0.04; // ±2% change
          updated[coin] = Math.max(0.01, prev[coin] * (1 + change));
        });
        return updated;
      });

      setHistoricalData(prev => {
        const updated = { ...prev };
        Object.keys(updated).forEach(coin => {
          if (updated[coin].length >= 24) {
            updated[coin] = updated[coin].slice(1);
          }
          updated[coin] = [...updated[coin], prices[coin]];
        });
        return updated;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [mounted, prices]);

  const addHolding = () => {
    if (!newHolding.name || !newHolding.amount || !newHolding.buyPrice) return;

    const holding: Holding = {
      id: Date.now().toString(),
      name: newHolding.name,
      amount: parseFloat(newHolding.amount),
      buyPrice: parseFloat(newHolding.buyPrice),
    };

    setHoldings([...holdings, holding]);
    setNewHolding({ name: 'Bitcoin', amount: '', buyPrice: '' });
  };

  const removeHolding = (id: string) => {
    setHoldings(holdings.filter(h => h.id !== id));
  };

  const calculatePortfolioMetrics = () => {
    let totalValue = 0;
    let totalCost = 0;

    holdings.forEach(holding => {
      const currentPrice = prices[holding.name] || 0;
      totalValue += holding.amount * currentPrice;
      totalCost += holding.amount * holding.buyPrice;
    });

    const totalPnL = totalValue - totalCost;
    const pnlPercent = totalCost > 0 ? (totalPnL / totalCost) * 100 : 0;

    return { totalValue, totalCost, totalPnL, pnlPercent };
  };

  const { totalValue, totalCost, totalPnL, pnlPercent } = calculatePortfolioMetrics();

  const getPerformerStats = () => {
    if (holdings.length === 0) return { best: null, worst: null };

    const performers = holdings.map(h => {
      const currentPrice = prices[h.name] || 0;
      const gain = ((currentPrice - h.buyPrice) / h.buyPrice) * 100;
      return { name: h.name, gain };
    });

    performers.sort((a, b) => b.gain - a.gain);
    return { best: performers[0], worst: performers[performers.length - 1] };
  };

  const { best, worst } = getPerformerStats();

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0d1117] via-[#161b22] to-[#0d1117] text-[#e6edf3] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Portfolio Tracker
          </h1>
          <p className="text-[#8b949e]">Monitor your crypto holdings with real-time performance metrics</p>
        </div>

        {/* Portfolio Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#484f58] transition">
            <div className="text-[#8b949e] text-sm mb-2">Total Value</div>
            <div className="text-3xl font-bold text-blue-400">${totalValue.toFixed(2)}</div>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#484f58] transition">
            <div className="text-[#8b949e] text-sm mb-2">Total P&L</div>
            <div className={`text-3xl font-bold ${totalPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
              ${totalPnL.toFixed(2)}
            </div>
            <div className={`text-sm mt-1 ${totalPnL >= 0 ? 'text-green-300' : 'text-red-300'}`}>
              {pnlPercent >= 0 ? '+' : ''}{pnlPercent.toFixed(2)}%
            </div>
          </div>

          {best && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#484f58] transition">
              <div className="text-[#8b949e] text-sm mb-2">Best Performer</div>
              <div className="text-xl font-bold text-green-400">{best.name}</div>
              <div className="text-sm text-green-300 mt-1">+{best.gain.toFixed(2)}%</div>
            </div>
          )}

          {worst && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 hover:border-[#484f58] transition">
              <div className="text-[#8b949e] text-sm mb-2">Worst Performer</div>
              <div className="text-xl font-bold text-red-400">{worst.name}</div>
              <div className="text-sm text-red-300 mt-1">{worst.gain.toFixed(2)}%</div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Allocation Pie Chart */}
          <div className="lg:col-span-1">
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-[var(--color-text)]">Allocation</h2>

              {holdings.length > 0 ? (
                <div className="flex flex-col items-center">
                  <svg viewBox="0 0 100 100" className="w-48 h-48 mb-6">
                    {holdings.reduce((acc, holding, idx) => {
                      const currentPrice = prices[holding.name] || 0;
                      const value = holding.amount * currentPrice;
                      const percent = totalValue > 0 ? (value / totalValue) * 100 : 0;
                      const startAngle = acc.angle;
                      const endAngle = startAngle + (percent / 100) * 360;

                      const colors = [
                        '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981',
                        '#06b6d4', '#ef4444', '#6366f1'
                      ];

                      const startRad = (startAngle * Math.PI) / 180;
                      const endRad = (endAngle * Math.PI) / 180;

                      const x1 = 50 + 40 * Math.cos(startRad);
                      const y1 = 50 + 40 * Math.sin(startRad);
                      const x2 = 50 + 40 * Math.cos(endRad);
                      const y2 = 50 + 40 * Math.sin(endRad);

                      const largeArc = percent > 50 ? 1 : 0;

                      const path = `M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`;

                      acc.elements.push(
                        <path key={idx} d={path} fill={colors[idx % colors.length]} opacity="0.8" />
                      );

                      return { angle: endAngle, elements: acc.elements };
                    }, { angle: 0, elements: [] as React.ReactElement[] }).elements}
                  </svg>

                  <div className="w-full space-y-2">
                    {holdings.map((holding, idx) => {
                      const currentPrice = prices[holding.name] || 0;
                      const value = holding.amount * currentPrice;
                      const percent = totalValue > 0 ? (value / totalValue) * 100 : 0;
                      const colors = ['blue', 'purple', 'pink', 'amber', 'emerald', 'cyan', 'red', 'indigo'];

                      return (
                        <div key={holding.id} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full bg-${colors[idx % colors.length]}-400`}></div>
                            <span className="text-[#8b949e]">{holding.name}</span>
                          </div>
                          <span className="font-semibold text-[var(--color-text)]">{percent.toFixed(1)}%</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div className="text-center text-[#8b949e] py-8">No holdings yet</div>
              )}
            </div>
          </div>

          {/* Holdings Table */}
          <div className="lg:col-span-2">
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-6 text-[var(--color-text)]">Holdings</h2>

              {holdings.length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[#30363d]">
                        <th className="text-left py-3 px-2 text-[#8b949e] font-semibold">Coin</th>
                        <th className="text-right py-3 px-2 text-[#8b949e] font-semibold">Amount</th>
                        <th className="text-right py-3 px-2 text-[#8b949e] font-semibold">Avg Buy</th>
                        <th className="text-right py-3 px-2 text-[#8b949e] font-semibold">Current</th>
                        <th className="text-right py-3 px-2 text-[#8b949e] font-semibold">P&L</th>
                        <th className="text-right py-3 px-2 text-[#8b949e] font-semibold">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {holdings.map(holding => {
                        const currentPrice = prices[holding.name] || 0;
                        const holdingValue = holding.amount * currentPrice;
                        const holdingCost = holding.amount * holding.buyPrice;
                        const holdingPnL = holdingValue - holdingCost;
                        const holdingPnLPercent = (holdingPnL / holdingCost) * 100;

                        return (
                          <tr key={holding.id} className="border-b border-[#30363d] hover:bg-[#0d1117] transition">
                            <td className="py-3 px-2 font-semibold text-[var(--color-text)]">{holding.name}</td>
                            <td className="text-right py-3 px-2 text-[#e6edf3]">{holding.amount.toFixed(4)}</td>
                            <td className="text-right py-3 px-2 text-[#e6edf3]">${holding.buyPrice.toFixed(2)}</td>
                            <td className="text-right py-3 px-2 text-blue-400 font-semibold">${currentPrice.toFixed(2)}</td>
                            <td className={`text-right py-3 px-2 font-semibold ${holdingPnL >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                              {holdingPnL >= 0 ? '+' : ''}{holdingPnLPercent.toFixed(1)}%
                            </td>
                            <td className="text-right py-3 px-2">
                              <button
                                onClick={() => removeHolding(holding.id)}
                                className="text-red-400 hover:text-red-300 transition font-semibold"
                              >
                                Remove
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              ) : (
                <div className="text-center text-[#8b949e] py-8">No holdings added yet</div>
              )}
            </div>
          </div>
        </div>

        {/* Add Holding Form */}
        <div className="mt-8 bg-[#161b22] border border-[#30363d] rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 text-[var(--color-text)]">Add New Holding</h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <label className="block text-sm text-[#8b949e] mb-2">Coin</label>
              <select
                value={newHolding.name}
                onChange={e => setNewHolding({ ...newHolding, name: e.target.value })}
                className="w-full bg-[#0d1117] border border-[#30363d] rounded px-3 py-2 text-[var(--color-text)] focus:outline-none focus:border-blue-500 transition"
              >
                {Object.keys(INITIAL_PRICES).map(coin => (
                  <option key={coin} value={coin}>{coin}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm text-[#8b949e] mb-2">Amount</label>
              <input
                type="number"
                step="0.0001"
                value={newHolding.amount}
                onChange={e => setNewHolding({ ...newHolding, amount: e.target.value })}
                placeholder="0.5"
                className="w-full bg-[#0d1117] border border-[#30363d] rounded px-3 py-2 text-[var(--color-text)] placeholder-[#6e7681] focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm text-[#8b949e] mb-2">Buy Price</label>
              <input
                step="0.01"
                value={newHolding.buyPrice}
                onChange={e => setNewHolding({ ...newHolding, buyPrice: e.target.value })}
                placeholder="35000"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={addHolding}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-[var(--color-text)] font-semibold py-2 px-4 rounded transition"
              >
                Add Holding
              </button>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setHoldings([]);
                  setHoldings(SAMPLE_HOLDINGS);
                }}
                className="w-full bg-[#30363d] hover:bg-[#484f58] text-[var(--color-text)] font-semibold py-2 px-4 rounded transition"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-[#6e7681] text-sm">
          <p>Prices update every 2 seconds with simulated market fluctuations</p>
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/tools/portfolio-tracker" />
    </div>
  );
}
