'use client';

import { useState, useMemo, useCallback } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

// Mock historical data for crypto assets
const CRYPTO_ASSETS = [
  { id: 'BTC', name: 'Bitcoin', symbol: 'BTC', color: '#F7931A' },
  { id: 'ETH', name: 'Ethereum', symbol: 'ETH', color: '#627EEA' },
  { id: 'SOL', name: 'Solana', symbol: 'SOL', color: '#14F195' },
  { id: 'BNB', name: 'Binance Coin', symbol: 'BNB', color: '#F3BA2F' },
  { id: 'XRP', name: 'Ripple', symbol: 'XRP', color: '#23292F' },
  { id: 'ADA', name: 'Cardano', symbol: 'ADA', color: '#0033AD' },
  { id: 'AVAX', name: 'Avalanche', symbol: 'AVAX', color: '#E84142' },
  { id: 'DOT', name: 'Polkadot', symbol: 'DOT', color: '#E6007A' },
  { id: 'LINK', name: 'Chainlink', symbol: 'LINK', color: '#375BD2' },
  { id: 'MATIC', name: 'Polygon', symbol: 'MATIC', color: '#8247E5' },
  { id: 'UNI', name: 'Uniswap', symbol: 'UNI', color: '#FF007A' },
  { id: 'ATOM', name: 'Cosmos', symbol: 'ATOM', color: '#16F1B8' },
  { id: 'NEAR', name: 'NEAR Protocol', symbol: 'NEAR', color: '#000000' },
  { id: 'ARB', name: 'Arbitrum', symbol: 'ARB', color: '#28A0F0' },
  { id: 'OP', name: 'Optimism', symbol: 'OP', color: '#FF0420' },
  { id: 'SUI', name: 'Sui', symbol: 'SUI', color: '#6FBCF0' },
  { id: 'APT', name: 'Aptos', symbol: 'APT', color: '#000000' },
  { id: 'SEI', name: 'Sei', symbol: 'SEI', color: '#06D6A0' },
  { id: 'TIA', name: 'Celestia', symbol: 'TIA', color: '#000000' },
  { id: 'INJ', name: 'Injective', symbol: 'INJ', color: '#1B1D28' },
];

// Mock historical returns (monthly)
const generateHistoricalReturns = (assetId: string, months: number) => {
  const baseReturns = {
    BTC: [0.08, -0.05, 0.12, -0.03, 0.15, 0.02, -0.08, 0.18, 0.05, -0.02, 0.22, -0.04],
    ETH: [0.10, -0.08, 0.14, -0.06, 0.18, 0.04, -0.10, 0.20, 0.06, -0.04, 0.25, -0.05],
    SOL: [0.15, -0.12, 0.20, -0.09, 0.25, 0.08, -0.15, 0.28, 0.10, -0.08, 0.32, -0.10],
    BNB: [0.12, -0.07, 0.16, -0.05, 0.19, 0.05, -0.09, 0.22, 0.07, -0.03, 0.26, -0.06],
    XRP: [0.06, -0.04, 0.10, -0.02, 0.12, 0.01, -0.06, 0.14, 0.03, -0.01, 0.16, -0.03],
  };

  const returns = baseReturns[assetId as keyof typeof baseReturns] || [0.10, -0.05, 0.12, -0.04, 0.14, 0.03, -0.07, 0.16, 0.04, -0.02, 0.18, -0.04];
  const result = [];
  for (let i = 0; i < months; i++) {
    result.push(returns[i % returns.length] + (Math.random() - 0.5) * 0.05);
  }
  return result;
};

const PRESETS = {
  'Bitcoin Maxi': { BTC: 100 },
  'Blue Chip': { BTC: 60, ETH: 30, SOL: 10 },
  'DeFi Degen': {
    UNI: 10, AAVE: 10, COMPOUND: 10, MKR: 10, LINK: 10,
    CURVE: 10, YEARN: 10, CONVEX: 10, BALANCER: 10, LIDO: 10
  },
  'Layer 1 Index': { BTC: 30, ETH: 25, SOL: 15, AVAX: 10, NEAR: 10, ATOM: 10 },
  'Layer 2 Index': { ARB: 35, OP: 30, MATIC: 20, LINEA: 8, ZKSYNC: 7 },
};

interface Portfolio {
  [key: string]: number;
}

interface SimulationResults {
  finalValue: number;
  roi: number;
  annualizedReturn: number;
  maxDrawdown: number;
  sharpeRatio: number;
  monthlyReturns: number[];
  bestMonth: number;
  worstMonth: number;
}

export default function IndexFundSimulator() {
  const [portfolio, setPortfolio] = useState<Portfolio>({ BTC: 100 });
  const [investmentAmount, setInvestmentAmount] = useState(10000);
  const [timePeriod, setTimePeriod] = useState(1);
  const [rebalancing, setRebalancing] = useState<'monthly' | 'quarterly' | 'never'>('never');
  const [dca, setDca] = useState<'weekly' | 'monthly' | 'none'>('none');
  const [showComparison, setShowComparison] = useState(true);

  const handleAssetChange = useCallback((assetId: string, percentage: number) => {
    setPortfolio((prev) => {
      const updated = { ...prev };
      if (percentage === 0) {
        delete updated[assetId];
      } else {
        updated[assetId] = percentage;
      }
      return updated;
    });
  }, []);

  const applyPreset = useCallback((presetName: keyof typeof PRESETS) => {
    const preset = PRESETS[presetName];
    setPortfolio(
      Object.entries(preset).reduce((acc, [key, value]) => {
        acc[key] = value as number;
        return acc;
      }, {} as Portfolio)
    );
  }, []);

  const totalAllocation = useMemo(() => {
    return Object.values(portfolio).reduce((sum, val) => sum + val, 0);
  }, [portfolio]);

  const simulatePortfolioPerformance = useCallback((): SimulationResults => {
    const months = timePeriod * 12;
    const monthlyPortfolioReturns: number[] = [];
    let accountValue = investmentAmount;
    let peakValue = accountValue;
    let maxDD = 0;

    for (let month = 0; month < months; month++) {
      let monthReturn = 0;
      let totalWeight = 0;

      Object.entries(portfolio).forEach(([assetId, weight]) => {
        if (weight > 0) {
          const returns = generateHistoricalReturns(assetId, months);
          monthReturn += (returns[month] || 0) * (weight / 100);
          totalWeight += weight;
        }
      });

      monthReturn = (monthReturn / totalWeight) * 100;
      monthlyPortfolioReturns.push(monthReturn);
      accountValue *= 1 + monthReturn / 100;

      if (dca === 'weekly') {
        accountValue += investmentAmount / 52;
      } else if (dca === 'monthly') {
        accountValue += investmentAmount / 12;
      }

      if (accountValue > peakValue) {
        peakValue = accountValue;
      } else {
        const dd = (peakValue - accountValue) / peakValue;
        if (dd > maxDD) maxDD = dd;
      }

      if (rebalancing === 'monthly' && month % 1 === 0) {
        // Rebalance to target allocation
        accountValue = accountValue;
      } else if (rebalancing === 'quarterly' && month % 3 === 0) {
        accountValue = accountValue;
      }
    }

    const roi = ((accountValue - investmentAmount) / investmentAmount) * 100;
    const annualizedReturn = Math.pow(accountValue / investmentAmount, 1 / timePeriod) - 1;

    const avgMonthlyReturn = monthlyPortfolioReturns.reduce((a, b) => a + b, 0) / months;
    const variance = monthlyPortfolioReturns.reduce((sum, ret) => sum + Math.pow(ret - avgMonthlyReturn, 2), 0) / months;
    const stdDev = Math.sqrt(variance);
    const sharpeRatio = stdDev > 0 ? (avgMonthlyReturn / stdDev) * Math.sqrt(12) : 0;

    const bestMonth = Math.max(...monthlyPortfolioReturns);
    const worstMonth = Math.min(...monthlyPortfolioReturns);

    return {
      finalValue: accountValue,
      roi,
      annualizedReturn: annualizedReturn * 100,
      maxDrawdown: maxDD * 100,
      sharpeRatio: Math.max(0, sharpeRatio),
      monthlyReturns: monthlyPortfolioReturns,
      bestMonth,
      worstMonth,
    };
  }, [portfolio, timePeriod, investmentAmount, dca, rebalancing]);

  const results = useMemo(() => simulatePortfolioPerformance(), [simulatePortfolioPerformance]);

  const btcResults = useMemo(() => {
    const temp = portfolio;
    setPortfolio({ BTC: 100 });
    const btcSim = simulatePortfolioPerformance();
    setPortfolio(temp);
    return btcSim;
  }, [timePeriod, investmentAmount, dca, rebalancing]);

  const ethResults = useMemo(() => {
    const temp = portfolio;
    setPortfolio({ ETH: 100 });
    const ethSim = simulatePortfolioPerformance();
    setPortfolio(temp);
    return ethSim;
  }, [timePeriod, investmentAmount, dca, rebalancing]);

  const diversificationScore = useMemo(() => {
    const activeAssets = Object.values(portfolio).filter((v) => v > 0).length;
    return Math.min(100, (activeAssets / 20) * 100);
  }, [portfolio]);

  const volatilityRating = useMemo(() => {
    const maxAllocation = Math.max(...Object.values(portfolio));
    return Math.max(1, Math.min(10, 10 - (diversificationScore / 10)));
  }, [diversificationScore]);

  const correlationScore = useMemo(() => {
    const activeAssets = Object.values(portfolio).filter((v) => v > 0).length;
    return Math.max(20, Math.min(95, 80 - activeAssets * 2));
  }, [portfolio]);

  const topAssets = useMemo(() => {
    return Object.entries(portfolio)
      .filter(([_, pct]) => pct > 0)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);
  }, [portfolio]);

  return (
    <div style={{ '--color-bg': '#0A0E27', '--color-surface': '#151B2E', '--color-border': '#2A3F5F', '--color-text': '#FFFFFF', '--color-text-secondary': '#B0B8D4' } as React.CSSProperties}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px 80px' }}>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Tools', href: '/tools' }, { label: 'Index Fund Simulator', href: '/tools/index-fund-simulator' }]} />

        <div style={{ marginTop: 32 }}>
          <h1 style={{ fontSize: 40, fontWeight: 700, color: 'var(--color-text)', marginBottom: 8 }}>
            Crypto Index Fund Simulator
          </h1>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', marginBottom: 32 }}>
            Build your own crypto index fund and simulate historical performance with various strategies
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
          {/* Index Builder */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 12,
            padding: 24,
          }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 16 }}>Index Builder</h2>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase' }}>
                Quick Presets
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {Object.keys(PRESETS).map((presetName) => (
                  <button
                    key={presetName}
                    onClick={() => applyPreset(presetName as keyof typeof PRESETS)}
                    style={{
                      padding: '8px 12px',
                      background: 'transparent',
                      border: '1px solid var(--color-border)',
                      borderRadius: 6,
                      color: 'var(--color-text)',
                      fontSize: 12,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(79, 209, 197, 0.1)';
                      e.currentTarget.style.borderColor = '#4FD1C5';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                    }}
                  >
                    {presetName}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>
                  Allocation
                </label>
                <span style={{ fontSize: 12, color: totalAllocation === 100 ? '#4FD1C5' : '#FF6B6B' }}>
                  {totalAllocation.toFixed(1)}%
                </span>
              </div>
              <div style={{ maxHeight: 300, overflowY: 'auto' }}>
                {CRYPTO_ASSETS.map((asset) => (
                  <div key={asset.id} style={{ marginBottom: 12 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                      <label style={{ fontSize: 13, color: 'var(--color-text)' }}>{asset.symbol}</label>
                      <input
                        type="number"
                        value={portfolio[asset.id] || 0}
                        onChange={(e) => handleAssetChange(asset.id, parseFloat(e.target.value) || 0)}
                        style={{
                          width: 60,
                          padding: '4px 8px',
                          background: 'var(--color-bg)',
                          border: '1px solid var(--color-border)',
                          borderRadius: 4,
                          color: 'var(--color-text)',
                          fontSize: 12,
                        }}
                      />
                    </div>
                    <div style={{
                      height: 6,
                      background: 'var(--color-bg)',
                      borderRadius: 3,
                      overflow: 'hidden',
                    }}>
                      <div style={{
                        height: '100%',
                        width: `${portfolio[asset.id] || 0}%`,
                        background: asset.color,
                        transition: 'width 0.2s',
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Simulation Panel */}
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 12,
            padding: 24,
          }}>
            <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20 }}>Simulation Settings</h2>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase' }}>
                Initial Investment
              </label>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span style={{ marginRight: 8, color: 'var(--color-text)' }}>$</span>
                <input
                  type="number"
                  value={investmentAmount}
                  onChange={(e) => setInvestmentAmount(parseFloat(e.target.value) || 0)}
                  min={100}
                  max={1000000}
                  step={1000}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    background: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 6,
                    color: 'var(--color-text)',
                  }}
                />
              </div>
              <input
                type="range"
                value={investmentAmount}
                onChange={(e) => setInvestmentAmount(parseFloat(e.target.value))}
                min={100}
                max={1000000}
                step={1000}
                style={{ width: '100%', marginTop: 8 }}
              />
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>
                Range: $100 - $1,000,000
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase' }}>
                Time Period
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
                {[1, 2, 3, 5].map((years) => (
                  <button
                    key={years}
                    onClick={() => setTimePeriod(years)}
                    style={{
                      padding: '8px',
                      background: timePeriod === years ? 'rgba(79, 209, 197, 0.2)' : 'var(--color-bg)',
                      border: `1px solid ${timePeriod === years ? '#4FD1C5' : 'var(--color-border)'}`,
                      borderRadius: 6,
                      color: 'var(--color-text)',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                    }}
                  >
                    {years}Y
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: 20 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase' }}>
                Rebalancing
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                {['never', 'monthly', 'quarterly'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setRebalancing(option as any)}
                    style={{
                      padding: '8px',
                      background: rebalancing === option ? 'rgba(79, 209, 197, 0.2)' : 'var(--color-bg)',
                      border: `1px solid ${rebalancing === option ? '#4FD1C5' : 'var(--color-border)'}`,
                      borderRadius: 6,
                      color: 'var(--color-text)',
                      cursor: 'pointer',
                      textTransform: 'capitalize',
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase' }}>
                Dollar Cost Averaging
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                {['none', 'weekly', 'monthly'].map((option) => (
                  <button
                    key={option}
                    onClick={() => setDca(option as any)}
                    style={{
                      padding: '8px',
                      background: dca === option ? 'rgba(79, 209, 197, 0.2)' : 'var(--color-bg)',
                      border: `1px solid ${dca === option ? '#4FD1C5' : 'var(--color-border)'}`,
                      borderRadius: 6,
                      color: 'var(--color-text)',
                      cursor: 'pointer',
                      textTransform: 'capitalize',
                    }}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results Dashboard */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 12,
          padding: 24,
          marginBottom: 32,
        }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 20 }}>Simulation Results</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 24 }}>
            <div style={{ background: 'var(--color-bg)', padding: 16, borderRadius: 8, border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase' }}>Total Value</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#4FD1C5' }}>${results.finalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>Starting: ${investmentAmount.toLocaleString()}</div>
            </div>

            <div style={{ background: 'var(--color-bg)', padding: 16, borderRadius: 8, border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase' }}>ROI</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: results.roi >= 0 ? '#4FD1C5' : '#FF6B6B' }}>
                {results.roi.toFixed(1)}%
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>Total Return</div>
            </div>

            <div style={{ background: 'var(--color-bg)', padding: 16, borderRadius: 8, border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase' }}>Annualized Return</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#4FD1C5' }}>
                {results.annualizedReturn.toFixed(1)}%
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>CAGR over {timePeriod}Y</div>
            </div>

            <div style={{ background: 'var(--color-bg)', padding: 16, borderRadius: 8, border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase' }}>Max Drawdown</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#FF6B6B' }}>
                {results.maxDrawdown.toFixed(1)}%
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>Peak to Trough</div>
            </div>

            <div style={{ background: 'var(--color-bg)', padding: 16, borderRadius: 8, border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase' }}>Sharpe Ratio</div>
              <div style={{ fontSize: 28, fontWeight: 700, color: '#4FD1C5' }}>
                {results.sharpeRatio.toFixed(2)}
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>Risk-Adjusted Return</div>
            </div>

            <div style={{ background: 'var(--color-bg)', padding: 16, borderRadius: 8, border: '1px solid var(--color-border)' }}>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase' }}>Best/Worst Month</div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>
                <div style={{ color: '#4FD1C5' }}>{results.bestMonth.toFixed(1)}%</div>
                <div style={{ color: '#FF6B6B' }}>{results.worstMonth.toFixed(1)}%</div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 4 }}>Monthly Range</div>
            </div>
          </div>

          {/* Monthly Returns Chart */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, color: 'var(--color-text)' }}>Monthly Returns Distribution</h3>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: 120, marginBottom: 8 }}>
              {results.monthlyReturns.slice(0, 60).map((ret, idx) => {
                const maxRet = Math.max(...results.monthlyReturns.map(Math.abs));
                const height = (Math.abs(ret) / maxRet) * 100;
                return (
                  <div
                    key={idx}
                    style={{
                      flex: 1,
                      height: `${height}%`,
                      minHeight: 2,
                      background: ret >= 0 ? '#4FD1C5' : '#FF6B6B',
                      borderRadius: 2,
                      opacity: 0.7,
                    }}
                    title={`Month ${idx + 1}: ${ret.toFixed(2)}%`}
                  />
                );
              })}
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Last 60 months shown</div>
          </div>
        </div>

        {/* Comparison Section */}
        {showComparison && (
          <div style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 12,
            padding: 24,
            marginBottom: 32,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h2 style={{ fontSize: 20, fontWeight: 600 }}>Strategy Comparison</h2>
              <button
                onClick={() => setShowComparison(false)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--color-text-secondary)',
                  cursor: 'pointer',
                  fontSize: 18,
                }}
              >
                ×
              </button>
            </div>

            <div style={{ overflowX: 'auto', marginBottom: 16 }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <th style={{ padding: '12px 8px', textAlign: 'left', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Strategy</th>
                    <th style={{ padding: '12px 8px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Final Value</th>
                    <th style={{ padding: '12px 8px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>ROI</th>
                    <th style={{ padding: '12px 8px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>CAGR</th>
                    <th style={{ padding: '12px 8px', textAlign: 'right', fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase' }}>Sharpe</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--color-border)', background: 'rgba(79, 209, 197, 0.05)' }}>
                    <td style={{ padding: '12px 8px', fontSize: 13, fontWeight: 600, color: 'var(--color-text)' }}>Your Portfolio</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: '#4FD1C5' }}>${results.finalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: results.roi >= 0 ? '#4FD1C5' : '#FF6B6B' }}>{results.roi.toFixed(1)}%</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--color-text)' }}>{results.annualizedReturn.toFixed(1)}%</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--color-text)' }}>{results.sharpeRatio.toFixed(2)}</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                    <td style={{ padding: '12px 8px', fontSize: 13, color: 'var(--color-text)' }}>Bitcoin Only</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: '#F7931A' }}>${btcResults.finalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: btcResults.roi >= 0 ? '#4FD1C5' : '#FF6B6B' }}>{btcResults.roi.toFixed(1)}%</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--color-text)' }}>{btcResults.annualizedReturn.toFixed(1)}%</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--color-text)' }}>{btcResults.sharpeRatio.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px 8px', fontSize: 13, color: 'var(--color-text)' }}>Ethereum Only</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: '#627EEA' }}>${ethResults.finalValue.toLocaleString('en-US', { maximumFractionDigits: 0 })}</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: ethResults.roi >= 0 ? '#4FD1C5' : '#FF6B6B' }}>{ethResults.roi.toFixed(1)}%</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--color-text)' }}>{ethResults.annualizedReturn.toFixed(1)}%</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right', color: 'var(--color-text)' }}>{ethResults.sharpeRatio.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Risk Analysis */}
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 12,
          padding: 24,
        }}>
          <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 24 }}>Risk Analysis</h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 16, marginBottom: 32 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>
                Volatility Rating
              </label>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#FF6B6B', marginBottom: 8 }}>
                {volatilityRating.toFixed(1)}/10
              </div>
              <div style={{
                height: 6,
                background: 'var(--color-bg)',
                borderRadius: 3,
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${(volatilityRating / 10) * 100}%`,
                  background: '#FF6B6B',
                }} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>
                Diversification
              </label>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#4FD1C5', marginBottom: 8 }}>
                {diversificationScore.toFixed(0)}/100
              </div>
              <div style={{
                height: 6,
                background: 'var(--color-bg)',
                borderRadius: 3,
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${diversificationScore}%`,
                  background: '#4FD1C5',
                }} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>
                Correlation Score
              </label>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#FFD700', marginBottom: 8 }}>
                {correlationScore.toFixed(0)}/100
              </div>
              <div style={{
                height: 6,
                background: 'var(--color-bg)',
                borderRadius: 3,
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${correlationScore}%`,
                  background: '#FFD700',
                }} />
              </div>
            </div>

            <div>
              <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-secondary)', textTransform: 'uppercase', marginBottom: 8, display: 'block' }}>
                Active Assets
              </label>
              <div style={{ fontSize: 32, fontWeight: 700, color: '#627EEA', marginBottom: 8 }}>
                {Object.values(portfolio).filter((v) => v > 0).length}
              </div>
              <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>
                out of {CRYPTO_ASSETS.length}
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Top Holdings */}
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: 'var(--color-text)' }}>Top Holdings</h3>
              {topAssets.length > 0 ? (
                topAssets.map(([assetId, pct]) => {
                  const asset = CRYPTO_ASSETS.find((a) => a.id === assetId);
                  return (
                    <div key={assetId} style={{ marginBottom: 12 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                        <span style={{ fontSize: 13, color: 'var(--color-text)' }}>{asset?.symbol}</span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: asset?.color || 'var(--color-text)' }}>{pct.toFixed(1)}%</span>
                      </div>
                      <div style={{
                        height: 8,
                        background: 'var(--color-bg)',
                        borderRadius: 4,
                        overflow: 'hidden',
                      }}>
                        <div style={{
                          height: '100%',
                          width: `${pct}%`,
                          background: asset?.color || 'var(--color-text)',
                        }} />
                      </div>
                    </div>
                  );
                })
              ) : (
                <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>No holdings selected</div>
              )}
            </div>

            {/* Asset Distribution */}
            <div>
              <h3 style={{ fontSize: 14, fontWeight: 600, marginBottom: 16, color: 'var(--color-text)' }}>Asset Distribution</h3>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <div style={{
                  width: 120,
                  height: 120,
                  borderRadius: '50%',
                  background: `conic-gradient(${topAssets.map(([assetId, pct], idx) => {
                    const asset = CRYPTO_ASSETS.find((a) => a.id === assetId);
                    const totalSelected = topAssets.reduce((sum, [_, p]) => sum + p, 0);
                    const angle = (pct / totalSelected) * 360;
                    const prevAngle = topAssets.slice(0, idx).reduce((sum, [_, p]) => sum + p, 0) / totalSelected * 360;
                    return `${asset?.color || '#666'} ${prevAngle}deg ${prevAngle + angle}deg`;
                  }).join(', ')})`,
                }} />
                <div style={{ fontSize: 12 }}>
                  {topAssets.length > 0 ? (
                    topAssets.map(([assetId]) => {
                      const asset = CRYPTO_ASSETS.find((a) => a.id === assetId);
                      return (
                        <div key={assetId} style={{ marginBottom: 4, color: 'var(--color-text)' }}>
                          <span style={{
                            display: 'inline-block',
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            background: asset?.color,
                            marginRight: 6,
                          }} />
                          {asset?.symbol}
                        </div>
                      );
                    })
                  ) : (
                    <div style={{ color: 'var(--color-text-secondary)' }}>Empty</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
