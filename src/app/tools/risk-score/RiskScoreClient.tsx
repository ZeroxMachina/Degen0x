'use client';

import { useState, useMemo } from 'react';
import {
  Shield,
  AlertTriangle,
  TrendingUp,
  PieChart,
  Plus,
  Trash2,
  RefreshCw,
  Info,
  ChevronDown,
  Zap,
  Target,
  BarChart3,
} from 'lucide-react';

interface PortfolioToken {
  symbol: string;
  allocation: number;
}

interface RiskMetrics {
  volatilityRisk: number;
  concentrationRisk: number;
  correlationRisk: number;
  liquidityRisk: number;
  smartContractRisk: number;
  overallRisk: number;
  maxDrawdown: number;
  var95: number;
  suggestions: string[];
}

const TOKEN_LIST = [
  { symbol: 'BTC', sector: 'Layer 1', volatility: 45 },
  { symbol: 'ETH', sector: 'Smart Contracts', volatility: 55 },
  { symbol: 'SOL', sector: 'Layer 1', volatility: 65 },
  { symbol: 'DOGE', sector: 'Meme', volatility: 75 },
  { symbol: 'AVAX', sector: 'Layer 1', volatility: 70 },
  { symbol: 'LINK', sector: 'Oracle', volatility: 50 },
  { symbol: 'UNI', sector: 'DEX', volatility: 60 },
  { symbol: 'AAVE', sector: 'Lending', volatility: 65 },
  { symbol: 'ARB', sector: 'Layer 2', volatility: 72 },
  { symbol: 'OP', sector: 'Layer 2', volatility: 68 },
  { symbol: 'MATIC', sector: 'Layer 2', volatility: 70 },
  { symbol: 'ADA', sector: 'Smart Contracts', volatility: 58 },
  { symbol: 'DOT', sector: 'Interoperability', volatility: 62 },
  { symbol: 'ATOM', sector: 'Interoperability', volatility: 64 },
  { symbol: 'USDC', sector: 'Stablecoin', volatility: 2 },
  { symbol: 'USDT', sector: 'Stablecoin', volatility: 2 },
];

const PORTFOLIO_TEMPLATES = {
  Conservative: {
    BTC: 40,
    ETH: 30,
    LINK: 15,
    USDC: 15,
  },
  Balanced: {
    BTC: 30,
    ETH: 25,
    SOL: 15,
    LINK: 10,
    UNI: 10,
    USDC: 10,
  },
  Aggressive: {
    ETH: 25,
    SOL: 20,
    AVAX: 15,
    ARB: 15,
    LINK: 15,
    UNI: 10,
  },
  'Full Degen': {
    DOGE: 25,
    SOL: 20,
    AVAX: 15,
    ARB: 15,
    OP: 10,
    ATOM: 10,
    ADA: 5,
  },
};

function calculateRiskMetrics(portfolio: PortfolioToken[]): RiskMetrics {
  if (portfolio.length === 0) {
    return {
      volatilityRisk: 0,
      concentrationRisk: 0,
      correlationRisk: 0,
      liquidityRisk: 0,
      smartContractRisk: 0,
      overallRisk: 0,
      maxDrawdown: 0,
      var95: 0,
      suggestions: [],
    };
  }

  const tokenData = new Map(TOKEN_LIST.map((t) => [t.symbol, t]));

  // Volatility Risk (weighted average of token volatilities)
  let volatilityRisk = 0;
  portfolio.forEach((token) => {
    const data = tokenData.get(token.symbol);
    if (data) {
      volatilityRisk += (data.volatility * token.allocation) / 100;
    }
  });

  // Concentration Risk (Herfindahl index)
  let herfindahl = 0;
  portfolio.forEach((token) => {
    herfindahl += (token.allocation / 100) ** 2;
  });
  const concentrationRisk = Math.min(100, (herfindahl - 1 / portfolio.length) * 100 * portfolio.length);

  // Correlation Risk (estimated based on sector diversity)
  const sectors = new Set<string>();
  portfolio.forEach((token) => {
    const data = tokenData.get(token.symbol);
    if (data) sectors.add(data.sector);
  });
  const correlationRisk = Math.max(20, 100 - sectors.size * 15);

  // Liquidity Risk (based on token popularity)
  const illiquidTokens = portfolio.filter((t) => ['ARB', 'OP', 'ATOM'].includes(t.symbol));
  const liquidityRisk = illiquidTokens.reduce((sum, t) => sum + t.allocation, 0) * 0.5;

  // Smart Contract Risk
  const riskTokens = portfolio.filter((t) => ['DOGE', 'ADA', 'AVAX', 'SOL'].includes(t.symbol));
  const smartContractRisk = riskTokens.reduce((sum, t) => sum + t.allocation, 0) * 0.4;

  // Overall Risk (weighted average)
  const overallRisk =
    volatilityRisk * 0.3 +
    concentrationRisk * 0.25 +
    correlationRisk * 0.2 +
    liquidityRisk * 0.15 +
    smartContractRisk * 0.1;

  // Max Drawdown simulation
  const maxDrawdown = Math.min(90, 20 + overallRisk * 0.5);

  // Value at Risk (95% confidence)
  const var95 = Math.min(85, overallRisk * 0.8);

  // Generate suggestions
  const suggestions: string[] = [];
  if (volatilityRisk > 70) suggestions.push('High volatility detected. Consider adding stablecoins.');
  if (concentrationRisk > 60) suggestions.push('Portfolio is too concentrated. Diversify across more tokens.');
  if (correlationRisk > 70) suggestions.push('Low sector diversity. Add tokens from different sectors.');
  if (liquidityRisk > 40) suggestions.push('Some low-liquidity tokens detected. Consider more established assets.');
  if (smartContractRisk > 50) suggestions.push('Smart contract risk is elevated. Review audited projects.');
  if (portfolio.length < 5) suggestions.push('Add more tokens to improve diversification.');
  if (suggestions.length === 0) suggestions.push('Portfolio appears well-balanced.');

  return {
    volatilityRisk: Math.min(100, volatilityRisk),
    concentrationRisk: Math.min(100, concentrationRisk),
    correlationRisk: Math.min(100, correlationRisk),
    liquidityRisk: Math.min(100, liquidityRisk),
    smartContractRisk: Math.min(100, smartContractRisk),
    overallRisk: Math.min(100, overallRisk),
    maxDrawdown,
    var95,
    suggestions,
  };
}

function getRiskColor(score: number): string {
  if (score <= 30) return '#3fb950'; // green
  if (score <= 60) return '#d29922'; // yellow
  if (score <= 80) return '#fb8500'; // orange
  return '#f85149'; // red
}

function getRiskLevel(score: number): string {
  if (score <= 30) return 'Low';
  if (score <= 60) return 'Moderate';
  if (score <= 80) return 'High';
  return 'Extreme';
}

export default function RiskScoreClient() {
  const [portfolio, setPortfolio] = useState<PortfolioToken[]>([]);
  const [selectedToken, setSelectedToken] = useState('BTC');
  const [allocationInput, setAllocationInput] = useState('');
  const [showAnalysis, setShowAnalysis] = useState(false);

  const riskMetrics = useMemo(() => calculateRiskMetrics(portfolio), [portfolio]);

  const handleAddToken = () => {
    const allocation = parseFloat(allocationInput) || 0;
    if (allocation <= 0 || !selectedToken) return;

    const existing = portfolio.findIndex((t) => t.symbol === selectedToken);
    if (existing >= 0) {
      const updated = [...portfolio];
      updated[existing].allocation += allocation;
      setPortfolio(updated);
    } else {
      setPortfolio([...portfolio, { symbol: selectedToken, allocation }]);
    }
    setAllocationInput('');
  };

  const handleRemoveToken = (symbol: string) => {
    setPortfolio(portfolio.filter((t) => t.symbol !== symbol));
  };

  const handleApplyTemplate = (template: keyof typeof PORTFOLIO_TEMPLATES) => {
    const tokens = Object.entries(PORTFOLIO_TEMPLATES[template]).map(([symbol, allocation]) => ({
      symbol,
      allocation,
    }));
    setPortfolio(tokens);
  };

  const totalAllocation = portfolio.reduce((sum, t) => sum + t.allocation, 0);
  const isPortfolioValid = totalAllocation === 100 && portfolio.length > 0;

  return (
    <div style={{ backgroundColor: '#0d1117', color: '#e6edf3', minHeight: '100vh' }}>
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield style={{ color: '#58a6ff' }} size={32} />
            <h1 className="text-3xl md:text-4xl font-bold">Portfolio Risk Scorer</h1>
          </div>
          <p style={{ color: '#8b949e' }} className="text-lg">
            Analyze your crypto portfolio with comprehensive risk metrics
          </p>
          <p style={{ color: '#8b949e', opacity: 0.6 }} className="text-xs mt-2">
            Risk model uses volatility, concentration (Herfindahl index), sector correlation &amp; liquidity estimates &bull; Not financial advice
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Portfolio Builder - Left */}
          <div className="lg:col-span-2">
            <div
              style={{
                backgroundColor: '#161b22',
                borderColor: '#30363d',
                borderWidth: '1px',
                borderRadius: '8px',
              }}
              className="p-6"
            >
              <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <PieChart size={20} style={{ color: '#bc8cff' }} />
                Build Portfolio
              </h2>

              {/* Templates */}
              <div className="mb-6">
                <p style={{ color: '#8b949e' }} className="text-sm mb-3 font-medium">
                  Quick Templates
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {(Object.keys(PORTFOLIO_TEMPLATES) as Array<keyof typeof PORTFOLIO_TEMPLATES>).map(
                    (template) => (
                      <button
                        key={template}
                        onClick={() => handleApplyTemplate(template)}
                        style={{ backgroundColor: '#30363d', borderColor: '#58a6ff' }}
                        className="border px-3 py-2 rounded text-sm font-medium hover:bg-opacity-80 transition"
                      >
                        {template}
                      </button>
                    )
                  )}
                </div>
              </div>

              {/* Token Input */}
              <div className="mb-6 pb-6" style={{ borderBottomColor: '#30363d', borderBottomWidth: '1px' }}>
                <label style={{ color: '#8b949e' }} className="block text-sm font-medium mb-2">
                  Select Token
                </label>
                <select
                  value={selectedToken}
                  onChange={(e) => setSelectedToken(e.target.value)}
                  style={{
                    backgroundColor: '#0d1117',
                    borderColor: '#30363d',
                    color: '#e6edf3',
                  }}
                  className="w-full border rounded px-3 py-2 mb-3 text-sm"
                >
                  {TOKEN_LIST.map((token) => (
                    <option key={token.symbol} value={token.symbol}>
                      {token.symbol} - {token.sector}
                    </option>
                  ))}
                </select>

                <label style={{ color: '#8b949e' }} className="block text-sm font-medium mb-2">
                  Allocation %
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    value={allocationInput}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === '' || (parseFloat(val) >= 0 && parseFloat(val) <= 100)) {
                        setAllocationInput(val);
                      }
                    }}
                    placeholder="e.g., 25"
                    min="1"
                    max="100"
                    aria-label="Token allocation percentage"
                    style={{
                      backgroundColor: '#0d1117',
                      borderColor: '#30363d',
                      color: '#e6edf3',
                    }}
                    className="flex-1 border rounded px-3 py-2 text-sm"
                  />
                  <button
                    onClick={handleAddToken}
                    style={{ backgroundColor: '#58a6ff', color: '#0d1117' }}
                    className="px-4 py-2 rounded font-medium flex items-center gap-2 hover:opacity-90 transition text-sm"
                  >
                    <Plus size={16} />
                    Add
                  </button>
                </div>
              </div>

              {/* Allocation Bar */}
              {portfolio.length > 0 && (
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span style={{ color: '#8b949e' }} className="text-sm">
                      Total Allocation
                    </span>
                    <span
                      style={{
                        color: totalAllocation === 100 ? '#3fb950' : '#d29922',
                      }}
                      className="font-bold"
                    >
                      {totalAllocation}%
                    </span>
                  </div>
                  <div
                    style={{ backgroundColor: '#0d1117', borderColor: '#30363d', borderWidth: '1px' }}
                    className="h-2 rounded overflow-hidden"
                  >
                    <div
                      style={{
                        backgroundColor: totalAllocation === 100 ? '#3fb950' : '#d29922',
                        width: `${Math.min(totalAllocation, 100)}%`,
                      }}
                      className="h-full transition-all"
                    />
                  </div>
                </div>
              )}

              {/* Portfolio Tokens */}
              <div className="space-y-2">
                {portfolio.map((token) => (
                  <div
                    key={token.symbol}
                    style={{ backgroundColor: '#0d1117', borderColor: '#30363d', borderWidth: '1px' }}
                    className="flex items-center justify-between p-3 rounded"
                  >
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{token.symbol}</div>
                      <div style={{ color: '#8b949e' }} className="text-xs">
                        {token.allocation}%
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveToken(token.symbol)}
                      style={{ color: '#f85149' }}
                      className="p-1 hover:opacity-70 transition"
                      aria-label={`Remove ${token.symbol} from portfolio`}
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>

              {portfolio.length === 0 && (
                <div style={{ color: '#8b949e' }} className="text-center py-8 text-sm">
                  No tokens added yet. Use templates or add manually.
                </div>
              )}

              {/* Analyze Button */}
              {isPortfolioValid && (
                <button
                  onClick={() => setShowAnalysis(true)}
                  style={{ backgroundColor: '#3fb950', color: '#0d1117' }}
                  className="w-full mt-6 py-3 rounded font-bold flex items-center justify-center gap-2 hover:opacity-90 transition"
                >
                  <Zap size={18} />
                  Analyze Risk
                </button>
              )}
              {!isPortfolioValid && portfolio.length > 0 && (
                <div
                  style={{
                    backgroundColor: '#0d1117',
                    borderColor: '#d29922',
                    borderWidth: '1px',
                    color: '#d29922',
                  }}
                  className="w-full mt-6 py-3 rounded text-center text-sm flex items-center justify-center gap-2"
                >
                  <AlertTriangle size={16} />
                  Allocations must total 100%
                </div>
              )}
            </div>
          </div>

          {/* Risk Analysis - Right */}
          {showAnalysis && isPortfolioValid && (
            <div className="lg:col-span-3 space-y-6">
              {/* Overall Risk Gauge */}
              <div
                style={{
                  backgroundColor: '#161b22',
                  borderColor: '#30363d',
                  borderWidth: '1px',
                  borderRadius: '8px',
                }}
                className="p-6"
              >
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                  <Target size={20} style={{ color: '#bc8cff' }} />
                  Overall Risk Score
                </h2>

                <div className="flex items-center justify-center mb-6">
                  <svg width="180" height="180" viewBox="0 0 180 180" role="img" aria-label={`Overall risk score: ${Math.round(riskMetrics.overallRisk)} out of 100 — ${getRiskLevel(riskMetrics.overallRisk)} risk`}>
                    {/* Background circle */}
                    <circle cx="90" cy="90" r="80" fill="none" stroke="#30363d" strokeWidth="12" />
                    {/* Progress circle */}
                    <circle
                      cx="90"
                      cy="90"
                      r="80"
                      fill="none"
                      stroke={getRiskColor(riskMetrics.overallRisk)}
                      strokeWidth="12"
                      strokeDasharray={`${(riskMetrics.overallRisk / 100) * 502.65} 502.65`}
                      style={{ transition: 'stroke-dasharray 0.5s ease' }}
                      strokeLinecap="round"
                      transform="rotate(-90 90 90)"
                    />
                    {/* Center text */}
                    <text
                      x="90"
                      y="85"
                      textAnchor="middle"
                      style={{ fontSize: '32px', fontWeight: 'bold', fill: '#e6edf3' }}
                    >
                      {Math.round(riskMetrics.overallRisk)}
                    </text>
                    <text
                      x="90"
                      y="110"
                      textAnchor="middle"
                      style={{ fontSize: '14px', fill: '#8b949e' }}
                    >
                      {getRiskLevel(riskMetrics.overallRisk)}
                    </text>
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div
                    style={{
                      backgroundColor: '#0d1117',
                      borderColor: '#30363d',
                      borderWidth: '1px',
                    }}
                    className="p-3 rounded"
                  >
                    <div style={{ color: '#8b949e' }}>Max Drawdown</div>
                    <div className="font-bold text-lg">{Math.round(riskMetrics.maxDrawdown)}%</div>
                  </div>
                  <div
                    style={{
                      backgroundColor: '#0d1117',
                      borderColor: '#30363d',
                      borderWidth: '1px',
                    }}
                    className="p-3 rounded"
                  >
                    <div style={{ color: '#8b949e' }}>VaR 95%</div>
                    <div className="font-bold text-lg">{Math.round(riskMetrics.var95)}%</div>
                  </div>
                </div>
              </div>

              {/* Risk Breakdown */}
              <div
                style={{
                  backgroundColor: '#161b22',
                  borderColor: '#30363d',
                  borderWidth: '1px',
                  borderRadius: '8px',
                }}
                className="p-6"
              >
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 size={20} style={{ color: '#bc8cff' }} />
                  Risk Breakdown
                </h2>

                {[
                  { label: 'Volatility Risk', value: riskMetrics.volatilityRisk },
                  { label: 'Concentration Risk', value: riskMetrics.concentrationRisk },
                  { label: 'Correlation Risk', value: riskMetrics.correlationRisk },
                  { label: 'Liquidity Risk', value: riskMetrics.liquidityRisk },
                  { label: 'Smart Contract Risk', value: riskMetrics.smartContractRisk },
                ].map((risk) => (
                  <div key={risk.label} className="mb-4">
                    <div className="flex justify-between items-center mb-1 text-sm">
                      <span>{risk.label}</span>
                      <span
                        style={{
                          color: getRiskColor(risk.value),
                          fontWeight: 'bold',
                        }}
                      >
                        {Math.round(risk.value)}
                      </span>
                    </div>
                    <div
                      style={{
                        backgroundColor: '#0d1117',
                        borderColor: '#30363d',
                        borderWidth: '1px',
                      }}
                      className="h-2 rounded overflow-hidden"
                    >
                      <div
                        style={{
                          backgroundColor: getRiskColor(risk.value),
                          width: `${risk.value}%`,
                        }}
                        className="h-full transition-all"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggestions */}
              <div
                style={{
                  backgroundColor: '#161b22',
                  borderColor: '#30363d',
                  borderWidth: '1px',
                  borderRadius: '8px',
                }}
                className="p-6"
              >
                <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <AlertTriangle size={20} style={{ color: '#d29922' }} />
                  Recommendations
                </h2>

                <ul className="space-y-2">
                  {riskMetrics.suggestions.map((suggestion, idx) => (
                    <li key={idx} style={{ color: '#8b949e' }} className="flex gap-3 text-sm">
                      <span style={{ color: '#bc8cff', flexShrink: 0 }}>•</span>
                      <span>{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Reset Button */}
              <button
                onClick={() => {
                  setPortfolio([]);
                  setShowAnalysis(false);
                }}
                style={{
                  backgroundColor: '#30363d',
                  borderColor: '#30363d',
                  borderWidth: '1px',
                  color: '#e6edf3',
                }}
                className="w-full py-2 rounded font-medium flex items-center justify-center gap-2 hover:opacity-80 transition"
              >
                <RefreshCw size={16} />
                Reset Portfolio
              </button>
            </div>
          )}

          {/* Empty State */}
          {!showAnalysis && portfolio.length > 0 && !isPortfolioValid && (
            <div className="lg:col-span-3">
              <div
                style={{
                  backgroundColor: '#161b22',
                  borderColor: '#30363d',
                  borderWidth: '1px',
                  borderRadius: '8px',
                }}
                className="p-12 text-center"
              >
                <Info size={32} style={{ color: '#8b949e', margin: '0 auto 16px' }} />
                <p style={{ color: '#8b949e' }} className="text-lg">
                  Adjust allocations to reach 100% total
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
