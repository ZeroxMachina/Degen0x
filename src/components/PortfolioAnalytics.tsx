'use client';

import { useState, useMemo } from 'react';
import {
  TrendingUp,
  TrendingDown,
  AlertCircle,
  Target,
  BarChart3,
  Activity,
} from 'lucide-react';

interface SummaryStatProps {
  label: string;
  value: string;
  change?: string;
  isPositive?: boolean;
  subLabel?: string;
}

interface PortfolioToken {
  symbol: string;
  allocation: number;
  color: string;
}

interface DailyPnL {
  date: string;
  pnl: number;
  return: number;
}

interface TaxData {
  category: string;
  gains: number;
  cost: number;
  quantity: number;
}

interface RiskMetric {
  label: string;
  value: string;
  benchmark?: string;
}

const PortfolioAnalytics = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'7d' | '30d' | 'all'>('7d');

  // Mock portfolio data
  const mockPortfolioTokens: PortfolioToken[] = [
    { symbol: 'BTC', allocation: 45, color: 'bg-orange-500' },
    { symbol: 'ETH', allocation: 28, color: 'bg-purple-500' },
    { symbol: 'SOL', allocation: 12, color: 'bg-green-500' },
    { symbol: 'DEGEN', allocation: 10, color: 'bg-pink-500' },
    { symbol: 'Other', allocation: 5, color: 'bg-slate-500' },
  ];

  const mockDailyPnL: DailyPnL[] = [
    { date: 'Mar 6', pnl: 2450, return: 3.2 },
    { date: 'Mar 7', pnl: -890, return: -1.1 },
    { date: 'Mar 8', pnl: 5120, return: 6.7 },
    { date: 'Mar 9', pnl: 1230, return: 1.6 },
    { date: 'Mar 10', pnl: -340, return: -0.4 },
    { date: 'Mar 11', pnl: 3890, return: 5.1 },
    { date: 'Mar 12', pnl: 4560, return: 5.9 },
  ];

  const mockTaxData: TaxData[] = [
    { category: 'Long-term (>1yr)', gains: 12450, cost: 8900, quantity: 0.5 },
    { category: 'Short-term (<1yr)', gains: 8920, cost: 6750, quantity: 2.3 },
    { category: 'Unrealized', gains: 15680, cost: 9200, quantity: 5.8 },
  ];

  // Calculated values
  const totalValue = 245680;
  const change24h = 4.2;
  const change7d = 12.8;
  const change30d = 28.5;
  const allTimeProfit = 89450;
  const bestPerformer = 'SOL';
  const worstPerformer = 'ETH';

  const riskMetrics: RiskMetric[] = [
    { label: 'Sharpe Ratio', value: '1.85', benchmark: 'vs 1.2 S&P500' },
    { label: 'Max Drawdown', value: '-18.3%', benchmark: 'Peak to trough' },
    { label: 'Beta vs BTC', value: '0.92', benchmark: 'Lower volatility' },
    { label: 'Volatility Score', value: '62', benchmark: 'out of 100' },
  ];

  const diversificationScore = useMemo(() => {
    const herfindahl = mockPortfolioTokens.reduce((sum, token) => {
      const weight = token.allocation / 100;
      return sum + weight * weight;
    }, 0);
    const maxTokens = mockPortfolioTokens.length;
    return Math.round((1 - herfindahl) / (1 - 1 / maxTokens) * 10);
  }, []);

  const diversificationRecommendations = [
    diversificationScore < 6 && 'Increase position diversity',
    diversificationScore < 8 && 'Consider allocating to emerging projects',
    'Rebalance quarterly to maintain targets',
  ].filter(Boolean);

  const SummaryStatCard = ({
    label,
    value,
    change,
    isPositive,
    subLabel,
  }: SummaryStatProps) => (
    <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 p-4 hover:border-slate-600 transition-all">
      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
        {label}
      </div>
      <div className="text-2xl font-bold text-white mb-2">{value}</div>
      {change && (
        <div
          className={`flex items-center gap-1 text-sm font-semibold ${
            isPositive ? 'text-green-400' : 'text-red-400'
          }`}
        >
          {isPositive ? (
            <TrendingUp className="w-4 h-4" />
          ) : (
            <TrendingDown className="w-4 h-4" />
          )}
          {change}
        </div>
      )}
      {subLabel && (
        <div className="text-xs text-slate-500 mt-1">{subLabel}</div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
            Portfolio Analytics
          </h1>
          <p className="text-slate-400">Real-time portfolio insights for degen0x</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <SummaryStatCard
            label="Total Value"
            value={`$${(totalValue / 1000).toFixed(1)}k`}
          />
          <SummaryStatCard
            label="24h Change"
            value={`${change24h}%`}
            change={`+$${Math.abs(change24h * 1000).toFixed(0)}`}
            isPositive={change24h > 0}
          />
          <SummaryStatCard
            label="7d Change"
            value={`${change7d}%`}
            change={`+$${(change7d * 1000).toFixed(0)}`}
            isPositive={change7d > 0}
          />
          <SummaryStatCard
            label="30d Change"
            value={`${change30d}%`}
            change={`+$${(change30d * 1000).toFixed(0)}`}
            isPositive={change30d > 0}
          />
          <SummaryStatCard
            label="All-time P&L"
            value={`$${(allTimeProfit / 1000).toFixed(1)}k`}
            change="+36.5%"
            isPositive={true}
            subLabel="Realized & Unrealized"
          />
          <SummaryStatCard
            label="Best Performer"
            value={bestPerformer}
            change="+89.2%"
            isPositive={true}
            subLabel="Last 30 days"
          />
          <SummaryStatCard
            label="Worst Performer"
            value={worstPerformer}
            change="-12.4%"
            isPositive={false}
            subLabel="Last 30 days"
          />
          <SummaryStatCard
            label="Win Rate"
            value="62%"
            change="4 of 7 trades"
            isPositive={true}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Portfolio Allocation */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 p-6 h-full">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold">Portfolio Allocation</h2>
              </div>

              <div className="space-y-4">
                {mockPortfolioTokens.map((token) => (
                  <div key={token.symbol}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-semibold text-slate-300">
                        {token.symbol}
                      </span>
                      <span className="text-sm font-bold text-white">
                        {token.allocation}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full ${token.color} rounded-full transition-all`}
                        style={{ width: `${token.allocation}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-700">
                <div className="text-xs text-slate-400 mb-3">Holdings by Value</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">BTC</span>
                    <span className="font-semibold">$110.6k</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">ETH</span>
                    <span className="font-semibold">$68.8k</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">SOL</span>
                    <span className="font-semibold">$29.5k</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* P&L Timeline and Risk Metrics */}
          <div className="lg:col-span-2 space-y-8">
            {/* P&L Timeline */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 p-6">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-green-400" />
                  <h2 className="text-xl font-bold">P&L Timeline (7 Days)</h2>
                </div>
                <div className="text-sm text-slate-400">
                  Total: <span className="text-green-400 font-bold">+$16,850</span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-700">
                      <th className="text-left py-3 px-3 font-semibold text-slate-300">
                        Date
                      </th>
                      <th className="text-right py-3 px-3 font-semibold text-slate-300">
                        P&L
                      </th>
                      <th className="text-right py-3 px-3 font-semibold text-slate-300">
                        Return %
                      </th>
                      <th className="text-left py-3 px-3 font-semibold text-slate-300">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockDailyPnL.map((day) => (
                      <tr
                        key={day.date}
                        className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors"
                      >
                        <td className="py-3 px-3 text-slate-300">{day.date}</td>
                        <td
                          className={`py-3 px-3 text-right font-semibold ${
                            day.pnl >= 0
                              ? 'text-green-400'
                              : 'text-red-400'
                          }`}
                        >
                          ${day.pnl >= 0 ? '+' : ''}{day.pnl.toLocaleString()}
                        </td>
                        <td
                          className={`py-3 px-3 text-right font-semibold ${
                            day.return >= 0
                              ? 'text-green-400'
                              : 'text-red-400'
                          }`}
                        >
                          {day.return >= 0 ? '+' : ''}{day.return}%
                        </td>
                        <td className="py-3 px-3">
                          <div
                            className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold ${
                              day.pnl >= 0
                                ? 'bg-green-500/20 text-green-400'
                                : 'bg-red-500/20 text-red-400'
                            }`}
                          >
                            {day.pnl >= 0 ? (
                              <TrendingUp className="w-3 h-3" />
                            ) : (
                              <TrendingDown className="w-3 h-3" />
                            )}
                            {day.pnl >= 0 ? 'Gain' : 'Loss'}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Risk Metrics */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 p-6">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="w-5 h-5 text-yellow-400" />
                <h2 className="text-xl font-bold">Risk Metrics</h2>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {riskMetrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      {metric.label}
                    </div>
                    <div className="text-2xl font-bold text-white mb-2">
                      {metric.value}
                    </div>
                    {metric.benchmark && (
                      <div className="text-xs text-slate-500">{metric.benchmark}</div>
                    )}
                    <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                        style={{
                          width: `${Math.random() * 70 + 30}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tax Estimation and Diversification */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
          {/* Tax Estimation */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Target className="w-5 h-5 text-purple-400" />
              <h2 className="text-xl font-bold">Tax Estimation</h2>
            </div>

            <div className="space-y-4">
              {mockTaxData.map((tax) => (
                <div
                  key={tax.category}
                  className="bg-slate-700/40 rounded-lg p-4 border border-slate-700"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-slate-300">
                      {tax.category}
                    </span>
                    <span className="text-green-400 font-bold">
                      +${tax.gains.toLocaleString()}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <div>
                      <div className="text-xs text-slate-400 mb-1">
                        Cost Basis
                      </div>
                      <div className="font-semibold text-slate-300">
                        ${tax.cost.toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">
                        Capital Gain
                      </div>
                      <div className="font-semibold text-green-400">
                        ${(tax.gains - tax.cost).toLocaleString()}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 mb-1">
                        Quantity
                      </div>
                      <div className="font-semibold text-slate-300">
                        {tax.quantity.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-slate-700">
              <div className="flex justify-between items-center">
                <span className="text-slate-300 font-semibold">
                  Estimated Tax Liability
                </span>
                <span className="text-lg font-bold text-orange-400">
                  $8,920
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-2">
                Based on 25% marginal tax rate
              </p>
            </div>
          </div>

          {/* Diversification Score */}
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg border border-slate-700 p-6">
            <h2 className="text-xl font-bold mb-6">Diversification Score</h2>

            <div className="flex items-center gap-6 mb-8">
              <div className="flex-1">
                <div className="text-6xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text">
                  {diversificationScore}
                </div>
                <p className="text-slate-400 text-sm mt-2">out of 10</p>
              </div>

              <div className="flex-1">
                <div className="space-y-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="h-2 bg-slate-700 rounded-full overflow-hidden"
                    >
                      <div
                        className={`h-full ${
                          i < Math.floor(diversificationScore / 2)
                            ? 'bg-gradient-to-r from-cyan-400 to-purple-500'
                            : ''
                        }`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider">
                Recommendations
              </h3>
              {diversificationRecommendations.length > 0 ? (
                <ul className="space-y-2">
                  {diversificationRecommendations.map((rec, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-sm text-slate-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-400">
                  Your portfolio is well diversified. Maintain current allocation.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioAnalytics;
