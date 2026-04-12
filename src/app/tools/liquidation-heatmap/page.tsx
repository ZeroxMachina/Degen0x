'use client';

import React, { useState, useMemo } from 'react';

interface LiquidationLevel {
  priceLevel: number;
  btc: number;
  eth: number;
  sol: number;
  xrp: number;
  bnb: number;
}

interface LiquidationEvent {
  id: string;
  asset: string;
  price: number;
  amount: number;
  direction: 'long' | 'short';
  timestamp: string;
  liquidationSize: number;
}

const Page: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<string | null>(null);

  // Simulated liquidation data for BTC price range $95K-$110K
  const liquidationLevels: LiquidationLevel[] = useMemo(
    () => [
      {
        priceLevel: 110000,
        btc: 2400,
        eth: 1800,
        sol: 650,
        xrp: 420,
        bnb: 890,
      },
      {
        priceLevel: 108500,
        btc: 3100,
        eth: 2200,
        sol: 520,
        xrp: 380,
        bnb: 1050,
      },
      {
        priceLevel: 107000,
        btc: 1900,
        eth: 1400,
        sol: 780,
        xrp: 510,
        bnb: 720,
      },
      {
        priceLevel: 105500,
        btc: 4200,
        eth: 3100,
        sol: 920,
        xrp: 640,
        bnb: 1380,
      },
      {
        priceLevel: 104000,
        btc: 2800,
        eth: 2100,
        sol: 680,
        xrp: 450,
        bnb: 950,
      },
      {
        priceLevel: 102500,
        btc: 3600,
        eth: 2700,
        sol: 810,
        xrp: 560,
        bnb: 1120,
      },
      {
        priceLevel: 101000,
        btc: 2200,
        eth: 1600,
        sol: 590,
        xrp: 390,
        bnb: 780,
      },
      {
        priceLevel: 99500,
        btc: 3900,
        eth: 2900,
        sol: 1050,
        xrp: 720,
        bnb: 1290,
      },
      {
        priceLevel: 98000,
        btc: 2600,
        eth: 1900,
        sol: 740,
        xrp: 480,
        bnb: 860,
      },
      {
        priceLevel: 96500,
        btc: 3300,
        eth: 2500,
        sol: 900,
        xrp: 620,
        bnb: 1010,
      },
      {
        priceLevel: 95000,
        btc: 4800,
        eth: 3600,
        sol: 1200,
        xrp: 850,
        bnb: 1650,
      },
    ],
    []
  );

  const recentLiquidations: LiquidationEvent[] = useMemo(
    () => [
      {
        id: '1',
        asset: 'BTC',
        price: 102340,
        amount: 2.45,
        direction: 'long',
        timestamp: '2 minutes ago',
        liquidationSize: 248500,
      },
      {
        id: '2',
        asset: 'ETH',
        price: 3285,
        amount: 125.8,
        direction: 'short',
        timestamp: '8 minutes ago',
        liquidationSize: 412650,
      },
      {
        id: '3',
        asset: 'SOL',
        price: 198.42,
        amount: 5420,
        direction: 'long',
        timestamp: '15 minutes ago',
        liquidationSize: 1074328,
      },
      {
        id: '4',
        asset: 'BTC',
        price: 99850,
        amount: 1.82,
        direction: 'short',
        timestamp: '24 minutes ago',
        liquidationSize: 181867,
      },
      {
        id: '5',
        asset: 'ETH',
        price: 3142,
        amount: 89.3,
        direction: 'long',
        timestamp: '31 minutes ago',
        liquidationSize: 280364,
      },
      {
        id: '6',
        asset: 'BNB',
        price: 612.5,
        amount: 420,
        direction: 'short',
        timestamp: '45 minutes ago',
        liquidationSize: 257250,
      },
    ],
    []
  );

  const getHeatmapColor = (value: number, max: number): string => {
    const ratio = value / max;
    if (ratio < 0.25) return 'rgba(34, 197, 94, 0.7)'; // Green
    if (ratio < 0.5) return 'rgba(250, 204, 21, 0.7)'; // Yellow
    if (ratio < 0.75) return 'rgba(251, 146, 60, 0.7)'; // Orange
    return 'rgba(239, 68, 68, 0.8)'; // Red
  };

  const getHeatmapBorder = (value: number, max: number): string => {
    const ratio = value / max;
    if (ratio < 0.25) return 'border-green-500/40';
    if (ratio < 0.5) return 'border-yellow-500/40';
    if (ratio < 0.75) return 'border-orange-500/40';
    return 'border-red-500/40';
  };

  const assets = ['BTC', 'ETH', 'SOL', 'XRP', 'BNB'];
  const maxLiquidation = Math.max(...liquidationLevels.flatMap((l) => [l.btc, l.eth, l.sol, l.xrp, l.bnb]));

  const totalOpenInterest = liquidationLevels.reduce((sum, level) => sum + level.btc + level.eth + level.sol + level.xrp + level.bnb, 0);
  const largestPool = Math.max(...liquidationLevels.map((l) => l.btc + l.eth + l.sol + l.xrp + l.bnb));
  const mostVulnerableLevel = liquidationLevels.find((l) => l.btc + l.eth + l.sol + l.xrp + l.bnb === largestPool);
  const longRatio = 1.35;
  const shortRatio = 1 / longRatio;

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white"
      style={{
        '--color-text': 'rgb(241, 245, 250)',
        '--color-text-secondary': 'rgb(148, 163, 184)',
        '--color-primary': 'rgb(59, 130, 246)',
        '--color-bg': 'rgb(15, 23, 42)',
        '--color-surface': 'rgb(30, 41, 59)',
        '--color-border': 'rgb(71, 85, 105)',
        '--glass-bg': 'rgba(30, 41, 59, 0.7)',
      } as React.CSSProperties}
    >
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center font-bold">
              L
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Liquidation Heatmap
            </h1>
          </div>
          <p style={{ color: 'var(--color-text-secondary)' }} className="text-base">
            Track liquidation levels across major crypto assets in real-time
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          <StatCard
            label="Total Open Interest"
            value={`$${(totalOpenInterest / 1000).toFixed(1)}M`}
            change="+12.5%"
            icon="📊"
          />
          <StatCard
            label="Largest Liquidation Pool"
            value={`$${(largestPool / 1000).toFixed(1)}M`}
            change="At $105,500"
            icon="⚡"
          />
          <StatCard
            label="Most Vulnerable Level"
            value={`$${mostVulnerableLevel?.priceLevel.toLocaleString()}`}
            change={`$${(largestPool / 1000).toFixed(1)}M at stake`}
            icon="🎯"
          />
          <StatCard
            label="Long/Short Ratio"
            value={`${longRatio.toFixed(2)} : 1`}
            change="More longs"
            icon="⚖️"
          />
        </div>

        {/* Heatmap */}
        <div className="mb-12 rounded-xl border p-6" style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}>
          <h2 className="text-2xl font-bold mb-6">Liquidation Heatmap</h2>

          {/* Heatmap Legend */}
          <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(34, 197, 94, 0.7)' }}></div>
              <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Low</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(250, 204, 21, 0.7)' }}></div>
              <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Medium</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(251, 146, 60, 0.7)' }}></div>
              <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>High</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: 'rgba(239, 68, 68, 0.8)' }}></div>
              <span className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>Critical</span>
            </div>
          </div>

          {/* Heatmap Grid */}
          <div className="overflow-x-auto">
            <div className="inline-block min-w-full">
              {/* Header Row */}
              <div className="flex gap-2 mb-2">
                <div className="w-28 flex-shrink-0"></div>
                {assets.map((asset) => (
                  <div
                    key={asset}
                    className="w-24 flex-shrink-0 text-center font-semibold text-sm text-cyan-400"
                  >
                    {asset}
                  </div>
                ))}
              </div>

              {/* Price Level Rows */}
              {liquidationLevels.map((level) => (
                <div key={level.priceLevel} className="flex gap-2 mb-2">
                  <div
                    className="w-28 flex-shrink-0 text-right pr-2 text-sm font-medium flex items-center justify-end rounded-lg px-3 py-2"
                    style={{
                      backgroundColor: 'rgba(59, 130, 246, 0.1)',
                      color: 'var(--color-primary)',
                    }}
                  >
                    ${level.priceLevel.toLocaleString()}
                  </div>

                  {[level.btc, level.eth, level.sol, level.xrp, level.bnb].map((value, idx) => {
                    const cellKey = `${level.priceLevel}-${assets[idx]}`;
                    const isHovered = hoveredCell === cellKey;

                    return (
                      <div
                        key={cellKey}
                        className="w-24 flex-shrink-0 h-12 rounded-lg border cursor-pointer relative transition-all duration-200 flex items-center justify-center font-semibold text-xs text-white"
                        style={{
                          backgroundColor: getHeatmapColor(value, maxLiquidation),
                          borderColor: 'var(--color-border)',
                          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                          boxShadow: isHovered ? '0 0 12px rgba(59, 130, 246, 0.6)' : 'none',
                          zIndex: isHovered ? 10 : 0,
                        }}
                        onMouseEnter={() => setHoveredCell(cellKey)}
                        onMouseLeave={() => setHoveredCell(null)}
                      >
                        <div className="text-center">
                          <div className="font-bold">${(value / 1000).toFixed(1)}K</div>
                          {isHovered && (
                            <div
                              className="text-xs mt-1"
                              style={{ color: 'var(--color-text-secondary)' }}
                            >
                              {value.toLocaleString()} BTC
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Liquidations */}
        <div className="mb-12 rounded-xl border p-6" style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}>
          <h2 className="text-2xl font-bold mb-6">Recent Large Liquidations</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderColor: 'var(--color-border)' }} className="border-b">
                  <th className="text-left py-4 px-4 font-semibold">Asset</th>
                  <th className="text-left py-4 px-4 font-semibold">Price</th>
                  <th className="text-left py-4 px-4 font-semibold">Amount</th>
                  <th className="text-left py-4 px-4 font-semibold">Direction</th>
                  <th className="text-left py-4 px-4 font-semibold">Liquidation Size</th>
                  <th className="text-left py-4 px-4 font-semibold">Time</th>
                </tr>
              </thead>
              <tbody>
                {recentLiquidations.map((liq) => (
                  <tr
                    key={liq.id}
                    style={{
                      borderColor: 'var(--color-border)',
                      backgroundColor: 'rgba(59, 130, 246, 0.03)',
                    }}
                    className="border-b hover:bg-opacity-20 transition-colors duration-150 last:border-b-0"
                  >
                    <td className="py-4 px-4">
                      <span className="font-bold text-cyan-400">{liq.asset}</span>
                    </td>
                    <td className="py-4 px-4">${liq.price.toLocaleString()}</td>
                    <td className="py-4 px-4">{liq.amount.toLocaleString()}</td>
                    <td className="py-4 px-4">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{
                          backgroundColor:
                            liq.direction === 'long'
                              ? 'rgba(239, 68, 68, 0.2)'
                              : 'rgba(34, 197, 94, 0.2)',
                          color:
                              ? 'rgb(248, 113, 113)'
                              : 'rgb(74, 222, 128)',
                        }}
                      >
                        {liq.direction === 'long' ? '📈 LONG' : '📉 SHORT'}
                      </span>
                    </td>
                    <td className="py-4 px-4 font-semibold text-red-400">
                      ${liq.liquidationSize.toLocaleString()}
                    </td>
                    <td className="py-4 px-4" style={{ color: 'var(--color-text-secondary)' }}>
                      {liq.timestamp}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Educational Section */}
        <div className="rounded-xl border overflow-hidden" style={{
          backgroundColor: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }}>
          <div className="p-6 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-b" style={{ borderColor: 'var(--color-border)' }}>
            <h2 className="text-2xl font-bold mb-2">📚 Understanding Liquidations</h2>
            <p style={{ color: 'var(--color-text-secondary)' }}>
              Learn how to interpret liquidation data to identify market vulnerabilities
            </p>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold mb-3 text-cyan-400">What Are Liquidations?</h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                A liquidation occurs when a trader's leveraged position is forcibly closed due to insufficient margin to maintain the position. When the price moves against a trader's position, their collateral becomes insufficient, and the exchange automatically sells their assets.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Reading the Heatmap</h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                The colored cells represent liquidation volume at each price level. Green indicates low liquidation risk, while red shows critical concentration. Larger cells suggest high market sensitivity at that price point.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Trading Strategy Tips</h3>
              <ul style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed space-y-2">
                <li>✓ Identify price levels with high liquidation concentration</li>
                <li>✓ Watch for potential cascade liquidations</li>
                <li>✓ Use long/short ratio to gauge market sentiment</li>
                <li>✓ Monitor vulnerability levels closely during volatility</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-3 text-cyan-400">Risk Management</h3>
              <ul style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed space-y-2">
                <li>✓ Place stop losses above liquidation clusters</li>
                <li>✓ Reduce leverage during high vulnerability periods</li>
                <li>✓ Diversify across price levels and assets</li>
                <li>✓ Stay updated with liquidation event feeds</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 p-4 rounded-lg" style={{
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          borderLeft: '4px solid rgb(239, 68, 68)',
        }}>
          <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm">
            ⚠️ Disclaimer: This data is simulated for educational purposes. Always conduct your own research and consult with financial advisors before making trading decisions.
          </p>
        </div>
      </div>
    </div>
  );
};

interface StatCardProps {
  label: string;
  value: string;
  change: string;
  icon: string;
}

function StatCard({ label, value, change, icon }: StatCardProps) {
  return (
    <div
      className="rounded-lg p-4 border transition-all duration-200 hover:border-cyan-500/50 hover:shadow-lg"
      style={{
        backgroundColor: 'var(--color-surface)',
        borderColor: 'var(--color-border)',
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <p style={{ color: 'var(--color-text-secondary)' }} className="text-sm font-medium">
            {label}
          </p>
          <p className="text-2xl font-bold mt-1 text-cyan-400">{value}</p>
        </div>
        <span className="text-2xl">{icon}</span>
      </div>
      <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs">
        {change}
      </p>
    </div>
  );
}

export default Page;
