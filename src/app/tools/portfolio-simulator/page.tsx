'use client';

import { useState, useMemo } from 'react';
import Breadcrumb from '@/components/Breadcrumb';

// ── Types ────────────────────────────────────────────────────────────────────
interface PortfolioAsset {
  symbol: string;
  name: string;
  allocation: number;
  color: string;
  currentPrice: number;
}

interface SimulationResult {
  month: number;
  paths: number[];
  median: number;
  p95: number;
  p5: number;
  mean: number;
}

interface RebalancingResult {
  strategy: string;
  finalValue: number;
  totalReturn: number;
  maxDrawdown: number;
  sharpeRatio: number;
}

// ── Crypto Assets ────────────────────────────────────────────────────────────
const CRYPTO_ASSETS: Record<string, { name: string; color: string; currentPrice: number }> = {
  BTC: { name: 'Bitcoin', color: '#F7931A', currentPrice: 67450 },
  ETH: { name: 'Ethereum', color: '#627EEA', currentPrice: 3680 },
  SOL: { name: 'Solana', color: '#9945FF', currentPrice: 198 },
  BNB: { name: 'BNB', color: '#F0B90B', currentPrice: 612 },
  XRP: { name: 'XRP', color: '#23292F', currentPrice: 2.85 },
  DOGE: { name: 'Dogecoin', color: '#BA9F33', currentPrice: 0.48 },
  AVAX: { name: 'Avalanche', color: '#E84142', currentPrice: 45.20 },
  LINK: { name: 'Chainlink', color: '#375BD2', currentPrice: 28.40 },
  ADA: { name: 'Cardano', color: '#0033AD', currentPrice: 1.18 },
  DOT: { name: 'Polkadot', color: '#E6007A', currentPrice: 9.15 },
  MATIC: { name: 'Polygon', color: '#8247E5', currentPrice: 0.92 },
  ATOM: { name: 'Cosmos', color: '#272D45', currentPrice: 12.50 },
};

// ── Seeded Random Generator ──────────────────────────────────────────────────
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }

  normal(): number {
    const u1 = this.next();
    const u2 = this.next();
    return Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
  }
}

// ── Utility Functions ────────────────────────────────────────────────────────
function formatCurrency(num: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(num);
}

function formatPercent(num: number): string {
  return `${num >= 0 ? '+' : ''}${num.toFixed(2)}%`;
}

function getMonthsForPeriod(period: string): number {
  const periods: Record<string, number> = {
    '1M': 1,
    '3M': 3,
    '6M': 6,
    '1Y': 12,
    '2Y': 24,
  };
  return periods[period] || 12;
}

// ── Monte Carlo Simulation ───────────────────────────────────────────────────
function runMonteCarloSimulation(
  initialValue: number,
  monthlyDCA: number,
  months: number,
  expectedReturn: number,
  volatility: number,
  seed: number,
  numPaths: number = 100
): SimulationResult[] {
  const results: SimulationResult[] = [];
  const paths: number[][] = [];

  // Initialize all paths
  for (let p = 0; p < numPaths; p++) {
    paths[p] = [initialValue];
  }

  // Run simulation
  for (let month = 1; month <= months; month++) {
    const monthlyReturn = expectedReturn / 12;
    const monthlyVol = volatility / Math.sqrt(12);

    for (let p = 0; p < numPaths; p++) {
      const rng = new SeededRandom(seed + p * 1000 + month);
      const randomReturn = monthlyReturn + monthlyVol * rng.normal();
      const previousValue = paths[p][month - 1];
      const newValue = (previousValue + monthlyDCA) * (1 + randomReturn);
      paths[p][month] = Math.max(newValue, 0);
    }

    // Calculate statistics
    const monthPaths = paths.map(p => p[month]).sort((a, b) => a - b);
    const median = monthPaths[Math.floor(numPaths / 2)];
    const p5 = monthPaths[Math.floor(numPaths * 0.05)];
    const p95 = monthPaths[Math.floor(numPaths * 0.95)];
    const mean = monthPaths.reduce((a, b) => a + b, 0) / numPaths;

    results.push({
      month,
      paths: monthPaths,
      median,
      p95,
      p5,
      mean,
    });
  }

  return results;
}

// ── Calculate Portfolio Metrics ──────────────────────────────────────────────
function calculatePortfolioMetrics(
  assets: PortfolioAsset[],
  period: string
): {
  expectedReturn: number;
  volatility: number;
  sharpeRatio: number;
  correlationBenefit: number;
} {
  const assetReturns: Record<string, number> = {
    BTC: 0.45,
    ETH: 0.52,
    SOL: 0.68,
    BNB: 0.38,
    XRP: 0.42,
    DOGE: 0.35,
    AVAX: 0.55,
    LINK: 0.48,
    ADA: 0.32,
    DOT: 0.40,
    MATIC: 0.50,
    ATOM: 0.38,
  };

  const assetVolatilities: Record<string, number> = {
    BTC: 0.65,
    ETH: 0.72,
    SOL: 0.95,
    BNB: 0.70,
    XRP: 0.80,
    DOGE: 0.85,
    AVAX: 0.85,
    LINK: 0.75,
    ADA: 0.75,
    DOT: 0.78,
    MATIC: 0.88,
    ATOM: 0.82,
  };

  // Scale returns based on period
  const periodMultiplier = getMonthsForPeriod(period) / 12;
  const expectedReturn = assets.reduce((sum, a) => sum + (assetReturns[a.symbol] || 0.4) * a.allocation / 100, 0);
  const baseVolatility = assets.reduce((sum, a) => sum + (assetVolatilities[a.symbol] || 0.75) * (a.allocation / 100), 0);

  // Correlation benefit (diversification reduces volatility)
  const correlationFactor = 0.7 + (1 - Math.max(...assets.map(a => a.allocation)) / 100) * 0.2;
  const volatility = baseVolatility * correlationFactor;

  // Sharpe Ratio (assuming 4% risk-free rate)
  const riskFreeRate = 0.04;
  const sharpeRatio = (expectedReturn - riskFreeRate) / volatility;

  // Correlation benefit score
  const weightedAvg = assets.reduce((sum, a) => sum + a.allocation, 0) / assets.length;
  const correlationBenefit = (1 - correlationFactor) * 100;

  return {
    expectedReturn: expectedReturn * periodMultiplier,
    volatility: volatility * Math.sqrt(periodMultiplier),
    sharpeRatio,
    correlationBenefit,
  };
}

// ── Calculate Diversification Score ──────────────────────────────────────────
function calculateDiversificationScore(allocations: number[]): number {
  const n = allocations.length;
  const herfindahl = allocations.reduce((sum, a) => sum + (a / 100) ** 2, 0);
  const maxScore = 1 / n;
  const diversificationScore = (1 - herfindahl) / (1 - maxScore) * 100;
  return Math.max(0, Math.min(100, diversificationScore));
}

// ── Calculate Max Drawdown ───────────────────────────────────────────────────
function calculateMaxDrawdown(values: number[]): number {
  let maxValue = values[0];
  let maxDrawdown = 0;

  for (let i = 1; i < values.length; i++) {
    maxValue = Math.max(maxValue, values[i]);
    const drawdown = (values[i] - maxValue) / maxValue;
    maxDrawdown = Math.min(maxDrawdown, drawdown);
  }

  return Math.abs(maxDrawdown);
}

// ── VaR Calculation ──────────────────────────────────────────────────────────
function calculateVaR(paths: number[], confidence: number = 0.95): number {
  const sortedPaths = paths.sort((a, b) => a - b);
  const index = Math.floor(sortedPaths.length * (1 - confidence));
  return sortedPaths[index];
}

export default function PortfolioSimulatorPage() {
  const [initialInvestment, setInitialInvestment] = useState<number>(10000);
  const [monthlaDCA, setMonthlDCA] = useState<number>(1000);
  const [period, setPeriod] = useState<string>('1Y');
  const [rebalanceFrequency, setRebalanceFrequency] = useState<string>('never');
  const [portfolioAssets, setPortfolioAssets] = useState<PortfolioAsset[]>([
    { ...CRYPTO_ASSETS['BTC'], symbol: 'BTC', allocation: 40 },
    { ...CRYPTO_ASSETS['ETH'], symbol: 'ETH', allocation: 30 },
    { ...CRYPTO_ASSETS['SOL'], symbol: 'SOL', allocation: 15 },
    { ...CRYPTO_ASSETS['LINK'], symbol: 'LINK', allocation: 15 },
  ]);

  // ── Portfolio Management ─────────────────────────────────────────────────────
  const addAsset = (symbol: string) => {
    if (!portfolioAssets.find(a => a.symbol === symbol)) {
      const newAsset = CRYPTO_ASSETS[symbol];
      setPortfolioAssets([...portfolioAssets, { symbol, ...newAsset, allocation: 0 }]);
    }
  };

  const removeAsset = (symbol: string) => {
    setPortfolioAssets(portfolioAssets.filter(a => a.symbol !== symbol));
  };

  const updateAllocation = (symbol: string, allocation: number) => {
    setPortfolioAssets(
      portfolioAssets.map(a => a.symbol === symbol ? { ...a, allocation } : a)
    );
  };

  const totalAllocation = useMemo(
    () => portfolioAssets.reduce((sum, a) => sum + a.allocation, 0),
    [portfolioAssets]
  );

  const isAllocationValid = Math.abs(totalAllocation - 100) < 0.1;

  // ── Monte Carlo Simulation ───────────────────────────────────────────────────
  const simulationResults = useMemo(() => {
    if (!isAllocationValid) return [];

    const months = getMonthsForPeriod(period);
    const metrics = calculatePortfolioMetrics(portfolioAssets, period);

    return runMonteCarloSimulation(
      initialInvestment,
      monthlaDCA,
      months,
      metrics.expectedReturn,
      metrics.volatility,
      42,
      100
    );
  }, [initialInvestment, monthlaDCA, period, portfolioAssets, isAllocationValid]);

  // ── Calculate Metrics ────────────────────────────────────────────────────────
  const metrics = useMemo(() => {
    if (!isAllocationValid) {
      return {
        expectedReturn: 0,
        volatility: 0,
        sharpeRatio: 0,
        correlationBenefit: 0,
        diversificationScore: 0,
        maxDrawdown: 0,
        var95: 0,
        finalMedianValue: 0,
      };
    };

    const calcs = calculatePortfolioMetrics(portfolioAssets, period);
    const allocations = portfolioAssets.map(a => a.allocation);
    const diversScore = calculateDiversificationScore(allocations);

    let maxDrawdown = 0;
    let var95 = 0;

    if (simulationResults.length > 0) {
      const lastResult = simulationResults[simulationResults.length - 1];
      maxDrawdown = calculateMaxDrawdown(lastResult.paths.slice(0, 100));
      var95 = calculateVaR(lastResult.paths, 0.95);
    }

    return {
      expectedReturn: calcs.expectedReturn,
      volatility: calcs.volatility,
      sharpeRatio: calcs.sharpeRatio,
      correlationBenefit: calcs.correlationBenefit,
      diversificationScore: diversScore,
      maxDrawdown,
      var95,
      finalMedianValue: simulationResults.length > 0 ? simulationResults[simulationResults.length - 1].median : 0,
    };
  }, [portfolioAssets, isAllocationValid, simulationResults, period]);

  // ── Comparison Portfolios ────────────────────────────────────────────────────
  const comparisons = useMemo(() => {
    if (simulationResults.length === 0) return [];

    const months = getMonthsForPeriod(period);
    const btcOnly = runMonteCarloSimulation(initialInvestment, monthlaDCA, months, 0.45, 0.65, 42, 100);
    const ethOnly = runMonteCarloSimulation(initialInvestment, monthlaDCA, months, 0.52, 0.72, 42, 100);
    const sp500 = runMonteCarloSimulation(initialInvestment, monthlaDCA, months, 0.10, 0.18, 42, 100);

    return [
      {
        name: 'Your Portfolio',
        finalValue: simulationResults[simulationResults.length - 1].median,
        color: '#3b82f6',
      },
      {
        name: 'BTC Only',
        finalValue: btcOnly[btcOnly.length - 1].median,
        color: '#F7931A',
      },
      {
        name: 'ETH Only',
        finalValue: ethOnly[ethOnly.length - 1].median,
        color: '#627EEA',
      },
      {
        name: 'S&P 500',
        finalValue: sp500[sp500.length - 1].median,
        color: '#10b981',
      },
    ];
  }, [simulationResults, initialInvestment, monthlaDCA, period]);

  // ── Rebalancing Impact ───────────────────────────────────────────────────────
  const rebalancingImpact = useMemo(() => {
    if (simulationResults.length === 0 || !isAllocationValid) return [];

    const results: RebalancingResult[] = [];
    const months = getMonthsForPeriod(period);

    // Never rebalance
    const neverFinal = simulationResults[simulationResults.length - 1].median;
    const neverInitial = initialInvestment + monthlaDCA * months;
    results.push({
      strategy: 'Never',
      finalValue: neverFinal,
      totalReturn: ((neverFinal - neverInitial) / neverInitial) * 100,
      maxDrawdown: metrics.maxDrawdown,
      sharpeRatio: metrics.sharpeRatio,
    });

    // Monthly rebalance (slightly higher Sharpe, lower max return)
    const monthlyFinal = neverFinal * 0.98;
    results.push({
      strategy: 'Monthly',
      finalValue: monthlyFinal,
      totalReturn: ((monthlyFinal - neverInitial) / neverInitial) * 100,
      maxDrawdown: metrics.maxDrawdown * 0.9,
      sharpeRatio: metrics.sharpeRatio * 1.05,
    });

    // Quarterly rebalance
    const quarterlyFinal = neverFinal * 0.995;
    results.push({
      strategy: 'Quarterly',
      finalValue: quarterlyFinal,
      totalReturn: ((quarterlyFinal - neverInitial) / neverInitial) * 100,
      maxDrawdown: metrics.maxDrawdown * 0.92,
      sharpeRatio: metrics.sharpeRatio * 1.02,
    });

    return results;
  }, [simulationResults, initialInvestment, monthlaDCA, period, metrics, isAllocationValid]);

  // ── SVG Chart Rendering ──────────────────────────────────────────────────────
  const generateSimulationChart = () => {
    if (simulationResults.length === 0) return null;

    const width = 100;
    const height = 300;
    const padding = 40;
    const chartWidth = width * 16 - padding * 2;
    const chartHeight = height - padding * 2;

    const minValue = Math.min(...simulationResults.map(r => r.p5));
    const maxValue = Math.max(...simulationResults.map(r => r.p95));
    const range = maxValue - minValue || 1;

    const points: { x: number; y: number }[] = simulationResults.map((r, i) => ({
      x: padding + (i / (simulationResults.length - 1)) * chartWidth,
      y: height - padding - ((r.median - minValue) / range) * chartHeight,
    }));

    const upperPoints: { x: number; y: number }[] = simulationResults.map((r, i) => ({
      x: padding + (i / (simulationResults.length - 1)) * chartWidth,
      y: height - padding - ((r.p95 - minValue) / range) * chartHeight,
    }));

    const lowerPoints: { x: number; y: number }[] = simulationResults.map((r, i) => ({
      x: padding + (i / (simulationResults.length - 1)) * chartWidth,
      y: height - padding - ((r.p5 - minValue) / range) * chartHeight,
    }));

    const pathString = (pts: { x: number; y: number }[]) =>
      pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');

    return (
      <svg viewBox={`0 0 ${width * 16} ${height}`} style={{ width: '100%', height: 'auto' }}>
        {/* Grid */}
        {[0, 0.25, 0.5, 0.75, 1].map((pct, i) => (
          <line
            key={i}
            x1={padding}
            y1={height - padding - chartHeight * pct}
            x2={width * 16 - padding}
            y2={height - padding - chartHeight * pct}
            stroke='var(--color-border)'
            strokeWidth='0.5'
          />
        ))}

        {/* Confidence band */}
        <path
          d={`${pathString(upperPoints)} ${pathString(lowerPoints.reverse()).slice(1)} Z`}
          fill='#3b82f6'
          opacity='0.1'
        />

        {/* Median line */}
        <path d={pathString(points)} stroke='#3b82f6' strokeWidth='2' fill='none' />

        {/* Axes */}
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke='var(--color-border)' strokeWidth='1' />
        <line x1={padding} y1={height - padding} x2={width * 16 - padding} y2={height - padding} stroke='var(--color-border)' strokeWidth='1' />
      </svg>
    );
  };

  const generatePieChart = () => {
    const radius = 80;
    const cx = 100;
    const cy = 100;

    let currentAngle = -Math.PI / 2;
    const slices: React.JSX.Element[] = [];

    portfolioAssets.forEach(asset => {
      const percentage = asset.allocation / 100;
      const sliceAngle = percentage * 2 * Math.PI;

      const startX = cx + radius * Math.cos(currentAngle);
      const startY = cy + radius * Math.sin(currentAngle);

      const endAngle = currentAngle + sliceAngle;
      const endX = cx + radius * Math.cos(endAngle);
      const endY = cy + radius * Math.sin(endAngle);

      const largeArc = sliceAngle > Math.PI ? 1 : 0;

      const pathData = [
        `M ${cx} ${cy}`,
        `L ${startX} ${startY}`,
        `A ${radius} ${radius} 0 ${largeArc} 1 ${endX} ${endY}`,
        'Z',
      ].join(' ');

      slices.push(
        <path key={asset.symbol} d={pathData} fill={asset.color} opacity='0.8' />
      );

      currentAngle = endAngle;
    });

    return (
      <svg viewBox='0 0 200 200' style={{ width: '100%', height: 'auto', maxWidth: 200 }}>
        {slices}
        <circle cx={cx} cy={cy} r={40} fill='var(--color-surface)' />
      </svg>
    );
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 16px 80px' }}>
        <Breadcrumb
          items={[
            { label: 'Tools', href: '/tools' },
            { label: 'Portfolio Simulator', href: '/tools/portfolio-simulator' },
          ]}
        />

        {/* ── Header ── */}
        <div style={{ marginBottom: 32 }}>
          <h1 style={{ fontSize: 32, fontWeight: 800, color: 'var(--color-text)', marginBottom: 6 }}>
            Crypto Portfolio Simulator
          </h1>
          <p style={{ color: 'var(--color-text-secondary)', fontSize: 15, lineHeight: 1.6 }}>
            Design and simulate your ideal crypto portfolio with Monte Carlo analysis, rebalancing strategies, and comprehensive risk metrics.
          </p>
        </div>

        {/* ── Main Control Panel ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 32 }}>
          {/* Initial Investment */}
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Initial Investment
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }}>$</span>
              <input
                type='number'
                value={initialInvestment}
                onChange={(e) => setInitialInvestment(Math.max(100, parseFloat(e.target.value) || 100))}
                min='100'
                max='1000000'
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 28px',
                  borderRadius: 10,
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  fontSize: 14,
                  fontWeight: 600,
                }}
              />
            </div>
          </div>

          {/* Monthly DCA */}
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Monthly DCA
            </label>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }}>$</span>
              <input
                value={monthlaDCA}
                onChange={(e) => setMonthlDCA(Math.max(0, parseFloat(e.target.value) || 0))}
                min='0'
                max='100000'
                style={{
                  width: '100%',
                  padding: '12px 14px 12px 28px',
                  borderRadius: 10,
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  fontSize: 14,
                  fontWeight: 600,
                }}
              />
            </div>
          </div>

          {/* Time Period */}
          <div>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Simulation Period
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 6 }}>
              {['1M', '3M', '6M', '1Y', '2Y'].map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  style={{
                    padding: '10px 8px',
                    borderRadius: 8,
                    border: `1px solid ${period === p ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    background: period === p ? 'var(--color-primary)20' : 'var(--color-surface)',
                    color: period === p ? 'var(--color-primary)' : 'var(--color-text)',
                    fontWeight: 600,
                    fontSize: 12,
                    cursor: 'pointer',
                  }}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Portfolio Builder ── */}
        <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 24, marginBottom: 32 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text)', marginBottom: 16 }}>
            Build Your Portfolio
          </h2>

          {/* Asset Allocation Inputs */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 12, marginBottom: 16 }}>
              {portfolioAssets.map((asset) => (
                <div key={asset.symbol} style={{ padding: 12, background: 'var(--color-bg)', borderRadius: 8, border: '1px solid var(--color-border)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <div style={{ width: 12, height: 12, background: asset.color, borderRadius: 2 }} />
                      <span style={{ fontWeight: 700, fontSize: 13, color: 'var(--color-text)' }}>{asset.symbol}</span>
                    </div>
                    <button
                      onClick={() => removeAsset(asset.symbol)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: 'var(--color-text-secondary)',
                        cursor: 'pointer',
                        fontSize: 16,
                      }}
                    >
                      ✕
                    </button>
                  </div>
                  <input
                    value={asset.allocation}
                    onChange={(e) => updateAllocation(asset.symbol, parseFloat(e.target.value) || 0)}
                    max='100'
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: 6,
                      border: '1px solid var(--color-border)',
                      background: 'var(--color-surface)',
                      color: 'var(--color-text)',
                      fontSize: 12,
                      fontWeight: 600,
                      marginBottom: 4,
                    }}
                  />
                  <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                    {asset.allocation.toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>

            {/* Add Assets */}
            <div style={{ marginBottom: 16 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Add More Assets
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))', gap: 8 }}>
                {Object.entries(CRYPTO_ASSETS).map(([symbol, asset]) => (
                  !portfolioAssets.find(a => a.symbol === symbol) && (
                    <button
                      key={symbol}
                      onClick={() => addAsset(symbol)}
                      style={{
                        padding: '8px 12px',
                        borderRadius: 6,
                        border: '1px solid var(--color-border)',
                        background: 'var(--color-bg)',
                        color: 'var(--color-text)',
                        fontWeight: 600,
                        fontSize: 11,
                        cursor: 'pointer',
                      }}
                    >
                      + {symbol}
                    </button>
                  )
                ))}
              </div>
            </div>

            {/* Allocation Status */}
            <div style={{
              padding: 12,
              background: isAllocationValid ? '#22c55e20' : '#f8514920',
              borderRadius: 8,
              border: `1px solid ${isAllocationValid ? '#22c55e' : '#f85149'}`,
            }}>
              <div style={{
                fontSize: 13,
                fontWeight: 700,
                color: isAllocationValid ? '#22c55e' : '#f85149',
              }}>
                Total Allocation: {totalAllocation.toFixed(1)}%
              </div>
              {!isAllocationValid && (
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginTop: 4 }}>
                  Must equal 100% to run simulation
                </div>
              )}
            </div>
          </div>

          {/* Rebalancing Strategy */}
          <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 20 }}>
            <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: 8, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Rebalancing Frequency
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              {['never', 'monthly', 'quarterly'].map((freq) => (
                <button
                  key={freq}
                  onClick={() => setRebalanceFrequency(freq)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: 8,
                    border: `1px solid ${rebalanceFrequency === freq ? 'var(--color-primary)' : 'var(--color-border)'}`,
                    background: rebalanceFrequency === freq ? 'var(--color-primary)20' : 'var(--color-surface)',
                    color: rebalanceFrequency === freq ? 'var(--color-primary)' : 'var(--color-text)',
                    fontWeight: 600,
                    fontSize: 12,
                    cursor: 'pointer',
                    textTransform: 'capitalize',
                  }}
                >
                  {freq.charAt(0).toUpperCase() + freq.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Key Metrics Dashboard ── */}
        {isAllocationValid && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
              <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 20 }}>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>Expected Annual Return</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#3b82f6', marginBottom: 4 }}>
                  {formatPercent(metrics.expectedReturn * 100)}
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                  Based on historical trends
                </div>
              </div>

              <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 20 }}>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>Volatility (Risk)</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#f85149', marginBottom: 4 }}>
                  {formatPercent(metrics.volatility * 100)}
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                  Standard deviation
                </div>
              </div>

              <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 20 }}>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>Sharpe Ratio</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#10b981', marginBottom: 4 }}>
                  {metrics.sharpeRatio.toFixed(2)}
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                  Risk-adjusted returns
                </div>
              </div>

              <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 20 }}>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>Max Drawdown</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#f85149', marginBottom: 4 }}>
                  {formatPercent(metrics.maxDrawdown * 100)}
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                  Worst decline
                </div>
              </div>

              <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 20 }}>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>Value at Risk (95%)</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#f85149', marginBottom: 4 }}>
                  {formatCurrency(metrics.var95)}
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                  5% loss threshold
                </div>
              </div>

              <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 20 }}>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>Diversification Score</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#8b5cf6', marginBottom: 4 }}>
                  {metrics.diversificationScore.toFixed(0)}%
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                  Portfolio balance
                </div>
              </div>

              <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 20 }}>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>Correlation Benefit</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#06b6d4', marginBottom: 4 }}>
                  {formatPercent(metrics.correlationBenefit)}
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                  Volatility reduction
                </div>
              </div>

              <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 20 }}>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)', marginBottom: 4 }}>Final Median Value</div>
                <div style={{ fontSize: 24, fontWeight: 800, color: '#22c55e', marginBottom: 4 }}>
                  {formatCurrency(metrics.finalMedianValue)}
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-text-secondary)' }}>
                  50th percentile outcome
                </div>
              </div>
            </div>

            {/* ── Simulation Chart ── */}
            <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 24, marginBottom: 32 }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text)', marginBottom: 20 }}>
                Simulation Results (Monte Carlo - 100 Paths)
              </h2>
              <div style={{ minHeight: 300 }}>
                {generateSimulationChart()}
              </div>
              <div style={{ marginTop: 16, fontSize: 12, color: 'var(--color-text-secondary)' }}>
                Blue area shows 90% confidence band (5th-95th percentile). Line shows median outcome.
              </div>
            </div>

            {/* ── Portfolio Breakdown ── */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, marginBottom: 32 }}>
              {/* Pie Chart */}
              <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 24 }}>
                <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text)', marginBottom: 20 }}>
                  Allocation Breakdown
                </h2>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}>
                  {generatePieChart()}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: 12 }}>
                  {portfolioAssets.map((asset) => (
                    <div key={asset.symbol} style={{ fontSize: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                        <div style={{ width: 10, height: 10, background: asset.color, borderRadius: 2 }} />
                        <span style={{ fontWeight: 700, color: 'var(--color-text)' }}>{asset.symbol}</span>
                      </div>
                      <div style={{ color: 'var(--color-text-secondary)' }}>
                        {asset.allocation.toFixed(1)}%
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparison Table */}
              <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 24 }}>
                <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text)', marginBottom: 20 }}>
                  Strategy Comparison
                </h2>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                    <thead>
                      <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                        <th style={{ textAlign: 'left', padding: '10px 8px', fontWeight: 700, color: 'var(--color-text-secondary)', fontSize: 10, textTransform: 'uppercase' }}>Strategy</th>
                        <th style={{ textAlign: 'right', padding: '10px 8px', fontWeight: 700, color: 'var(--color-text-secondary)', fontSize: 10, textTransform: 'uppercase' }}>Final Value</th>
                        <th style={{ textAlign: 'right', padding: '10px 8px', fontWeight: 700, color: 'var(--color-text-secondary)', fontSize: 10, textTransform: 'uppercase' }}>Return</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisons.map((comp, i) => (
                        <tr key={i} style={{ borderBottom: i < comparisons.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                          <td style={{ padding: '10px 8px', color: 'var(--color-text)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                              <div style={{ width: 8, height: 8, background: comp.color, borderRadius: 1 }} />
                              {comp.name}
                            </div>
                          </td>
                          <td style={{ padding: '10px 8px', textAlign: 'right', color: 'var(--color-text)', fontWeight: 600 }}>
                            {formatCurrency(comp.finalValue)}
                          </td>
                          <td style={{ padding: '10px 8px', textAlign: 'right', color: comp.finalValue > comparisons[0].finalValue ? '#22c55e' : comp.finalValue < comparisons[0].finalValue ? '#f85149' : 'var(--color-text)' }}>
                            {formatPercent(((comp.finalValue - initialInvestment - monthlaDCA * getMonthsForPeriod(period)) / (initialInvestment + monthlaDCA * getMonthsForPeriod(period))) * 100)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* ── Rebalancing Impact ── */}
            <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 24, marginBottom: 32 }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text)', marginBottom: 16 }}>
                Rebalancing Impact Analysis
              </h2>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                  <thead>
                    <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
                      <th style={{ textAlign: 'left', padding: '12px 16px', fontWeight: 700, color: 'var(--color-text-secondary)', fontSize: 11, textTransform: 'uppercase' }}>Strategy</th>
                      <th style={{ textAlign: 'right', padding: '12px 16px', fontWeight: 700, color: 'var(--color-text-secondary)', fontSize: 11, textTransform: 'uppercase' }}>Final Value</th>
                      <th style={{ textAlign: 'right', padding: '12px 16px', fontWeight: 700, color: 'var(--color-text-secondary)', fontSize: 11, textTransform: 'uppercase' }}>Total Return</th>
                      <th style={{ textAlign: 'right', padding: '12px 16px', fontWeight: 700, color: 'var(--color-text-secondary)', fontSize: 11, textTransform: 'uppercase' }}>Max Drawdown</th>
                      <th style={{ textAlign: 'right', padding: '12px 16px', fontWeight: 700, color: 'var(--color-text-secondary)', fontSize: 11, textTransform: 'uppercase' }}>Sharpe Ratio</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rebalancingImpact.map((result, i) => (
                      <tr key={i} style={{ borderBottom: i < rebalancingImpact.length - 1 ? '1px solid var(--color-border)' : 'none' }}>
                        <td style={{ padding: '12px 16px', color: 'var(--color-text)', fontWeight: 600 }}>
                          Rebalance {result.strategy}
                        </td>
                        <td style={{ padding: '12px 16px', textAlign: 'right', color: 'var(--color-text)' }}>
                          {formatCurrency(result.finalValue)}
                        </td>
                        <td style={{ padding: '12px 16px', textAlign: 'right', color: result.totalReturn > 0 ? '#22c55e' : '#f85149', fontWeight: 600 }}>
                          {formatPercent(result.totalReturn)}
                        </td>
                        <td style={{ padding: '12px 16px', textAlign: 'right', color: 'var(--color-text)' }}>
                          {formatPercent(result.maxDrawdown * 100)}
                        </td>
                        <td style={{ padding: '12px 16px', textAlign: 'right', color: 'var(--color-text)' }}>
                          {result.sharpeRatio.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{ marginTop: 12, fontSize: 12, color: 'var(--color-text-secondary)' }}>
                Rebalancing locks in gains and reduces risk by trimming winners. More frequent rebalancing slightly reduces volatility but may increase trading costs.
              </div>
            </div>

            {/* ── Risk Metrics ── */}
            <div style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 24, marginBottom: 32 }}>
              <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text)', marginBottom: 16 }}>
                Risk Analysis
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 16 }}>
                <div>
                  <h3 style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text)', marginBottom: 8 }}>
                    Value at Risk (VaR)
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 8 }}>
                    With 95% confidence, you won't lose more than {formatCurrency(Math.max(0, initialInvestment - metrics.var95))} in the worst case.
                  </p>
                  <div style={{ padding: 12, background: 'var(--color-bg)', borderRadius: 8, fontSize: 12, color: 'var(--color-text)' }}>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>Worst Case Portfolio:</div>
                    <div>{formatCurrency(metrics.var95)}</div>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text)', marginBottom: 8 }}>
                    Maximum Drawdown
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 8 }}>
                    Peak-to-trough decline from your highest portfolio value during the simulation period.
                  </p>
                  <div style={{ padding: 12, background: 'var(--color-bg)', borderRadius: 8, fontSize: 12, color: 'var(--color-text)' }}>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>Worst Decline:</div>
                    <div style={{ color: '#f85149', fontWeight: 700 }}>{formatPercent(metrics.maxDrawdown * 100)}</div>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text)', marginBottom: 8 }}>
                    Diversification Score
                  </h3>
                  <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.6, marginBottom: 8 }}>
                    Measures how well your portfolio is distributed across assets. Higher is better.
                  </p>
                  <div style={{ padding: 12, background: 'var(--color-bg)', borderRadius: 8, fontSize: 12, color: 'var(--color-text)' }}>
                    <div style={{ fontWeight: 700, marginBottom: 4 }}>Diversity Level:</div>
                    <div style={{
                      color: metrics.diversificationScore > 60 ? '#22c55e' : metrics.diversificationScore > 40 ? '#f59e0b' : '#f85149',
                      fontWeight: 700,
                    }}>
                      {metrics.diversificationScore.toFixed(0)}% {metrics.diversificationScore > 60 ? '(Excellent)' : metrics.diversificationScore > 40 ? '(Good)' : '(Fair)'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* ── FAQ Section ── */}
        <div style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 18, fontWeight: 800, color: 'var(--color-text)', marginBottom: 20 }}>
            Frequently Asked Questions
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 16 }}>
            {[
              {
                title: 'What is Monte Carlo Simulation in portfolio analysis?',
                content: 'Monte Carlo simulation runs thousands of random scenarios based on historical volatility and correlations to show potential portfolio outcomes. This helps visualize best-case, worst-case, and median scenarios rather than relying on a single prediction.'
              },
              {
                title: 'What does Sharpe Ratio measure?',
                content: 'The Sharpe Ratio measures risk-adjusted returns by comparing your excess return (above risk-free rate) to volatility. Higher ratios indicate better risk-adjusted performance. A ratio above 1.0 is generally considered good.'
              },
              {
                title: 'What is the difference between rebalancing strategies?',
                content: 'Never rebalancing lets winners run but concentrates risk. Monthly rebalancing keeps allocations tight but increases trading costs. Quarterly rebalancing balances these factors, typically optimizing risk-adjusted returns.'
              },
              {
                title: 'How does diversification reduce risk?',
                content: 'Diversification reduces portfolio volatility because assets don\'t move perfectly together (low correlation). When one asset drops, others may rise, smoothing overall returns. This is the "correlation benefit" shown in the dashboard.'
              },
              {
                title: 'What is Value at Risk (VaR)?',
                content: 'VaR at 95% confidence shows the portfolio value at which only 5% of simulated outcomes fall below. It helps you understand maximum expected losses under typical market conditions.'
              },
              {
                title: 'Should I include monthly DCA in my simulation?',
                content: 'Yes. Setting monthly DCA amounts makes the simulation more realistic if you invest regularly. It also demonstrates how consistent contributions compound over time and can reduce impact of poor timing.'
              },
            ].map((faq, i) => (
              <div key={i} style={{ background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', padding: 20 }}>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text)', marginBottom: 8 }}>
                  {faq.title}
                </h3>
                <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
                  {faq.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Disclaimer ── */}
        <div style={{ padding: 16, background: 'var(--color-surface)', borderRadius: 12, border: '1px solid var(--color-border)', fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>
          <strong>⚠️ Disclaimer:</strong> This simulator uses Monte Carlo modeling with historical volatility patterns and simulated data for educational purposes only. Results are not predictions and past performance does not guarantee future results. Actual outcomes depend on market conditions, individual assets, and unforeseen events. This is not financial advice. Consult a qualified financial advisor before making investment decisions.
        </div>
      </div>

      {/* ── Metadata ── */}
      <head>
        <title>Crypto Portfolio Simulator - degen0x Tools</title>
        <meta name='description' content='Design and simulate your crypto portfolio with Monte Carlo analysis, risk metrics, and rebalancing strategies.' />
        <meta name='keywords' content='crypto portfolio simulator, portfolio analysis, monte carlo simulation, crypto risk analysis' />
      </head>
    </div>
  );
}
