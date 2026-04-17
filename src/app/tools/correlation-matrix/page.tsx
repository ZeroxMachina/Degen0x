'use client';

import { useState } from 'react';
import RelatedContent from '@/components/RelatedContent';

interface CryptoCorrelation {
  symbol: string;
  name: string;
}

const CRYPTO_ASSETS: CryptoCorrelation[] = [
  { symbol: 'BTC', name: 'Bitcoin' },
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'BNB', name: 'Binance Coin' },
  { symbol: 'XRP', name: 'Ripple' },
  { symbol: 'ADA', name: 'Cardano' },
  { symbol: 'AVAX', name: 'Avalanche' },
  { symbol: 'DOT', name: 'Polkadot' },
  { symbol: 'LINK', name: 'Chainlink' },
  { symbol: 'MATIC', name: 'Polygon' },
];

const CORRELATION_DATA = [
  [1.0, 0.85, 0.72, 0.78, 0.65, 0.68, 0.75, 0.62, 0.71, 0.79],
  [0.85, 1.0, 0.68, 0.74, 0.62, 0.64, 0.71, 0.59, 0.68, 0.76],
  [0.72, 0.68, 1.0, 0.66, 0.58, 0.61, 0.69, 0.55, 0.63, 0.67],
  [0.78, 0.74, 0.66, 1.0, 0.61, 0.63, 0.72, 0.58, 0.66, 0.74],
  [0.65, 0.62, 0.58, 0.61, 1.0, 0.72, 0.59, 0.68, 0.54, 0.63],
  [0.68, 0.64, 0.61, 0.63, 0.72, 1.0, 0.62, 0.71, 0.57, 0.66],
  [0.75, 0.71, 0.69, 0.72, 0.59, 0.62, 1.0, 0.61, 0.65, 0.73],
  [0.62, 0.59, 0.55, 0.58, 0.68, 0.71, 0.61, 1.0, 0.52, 0.60],
  [0.71, 0.68, 0.63, 0.66, 0.54, 0.57, 0.65, 0.52, 1.0, 0.69],
  [0.79, 0.76, 0.67, 0.74, 0.63, 0.66, 0.73, 0.60, 0.69, 1.0],
];

const getCorrelationColor = (value: number): string => {
  if (value < -0.5) return 'bg-blue-900';
  if (value < -0.25) return 'bg-blue-700';
  if (value < 0.25) return 'bg-slate-700';
  if (value < 0.5) return 'bg-red-700';
  if (value < 0.75) return 'bg-red-800';
  return 'bg-red-950';
};

const calculateStats = () => {
  let sum = 0;
  let count = 0;
  let minCorr = 1;
  let maxCorr = -1;
  let minPair = { i: 0, j: 0 };
  let maxPair = { i: 0, j: 0 };

  for (let i = 0; i < CRYPTO_ASSETS.length; i++) {
    for (let j = i + 1; j < CRYPTO_ASSETS.length; j++) {
      const corr = CORRELATION_DATA[i][j];
      sum += corr;
      count++;

      if (corr < minCorr) {
        minCorr = corr;
        minPair = { i, j };
      }
      if (corr > maxCorr) {
        maxCorr = corr;
        maxPair = { i, j };
      }
    }
  };

  const avgCorr = count > 0 ? sum / count : 0;
  const diversificationScore = Math.max(0, 100 - (avgCorr * 100));

  return {
    avgCorrelation: avgCorr,
    mostCorrelatedPair: {
      name: `${CRYPTO_ASSETS[maxPair.i].symbol}/${CRYPTO_ASSETS[maxPair.j].symbol}`,
      value: maxCorr,
    },
    leastCorrelatedPair: {
      name: `${CRYPTO_ASSETS[minPair.i].symbol}/${CRYPTO_ASSETS[minPair.j].symbol}`,
      value: minCorr,
    },
    diversificationScore,
  };
};

const stats = calculateStats();

export default function CorrelationMatrixPage() {
  const [hoveredCell, setHoveredCell] = useState<{
    i: number;
    j: number;
  } | null>(null);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      {/* Header */}
      <div
        className="border-b"
        style={{
          borderColor: 'var(--color-border)',
          backgroundColor: 'var(--color-surface)',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--color-text)' }}>
            Crypto Correlation Matrix
          </h1>
          <p
            style={{ color: 'var(--color-text-secondary)' }}
            className="text-lg"
          >
            Analyze asset correlations to optimize portfolio diversification
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          <div
            className="p-6 rounded-lg"
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <p
              style={{ color: 'var(--color-text-secondary)' }}
              className="text-sm font-medium mb-2"
            >
              Avg Portfolio Correlation
            </p>
            <p className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              {stats.avgCorrelation.toFixed(2)}
            </p>
          </div>

          <div
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <p
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Most Correlated Pair
            </p>
            <p className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
              {stats.mostCorrelatedPair.name}
            </p>
            <p style={{ color: 'var(--color-primary)' }} className="text-sm mt-1">
              {stats.mostCorrelatedPair.value.toFixed(2)}
            </p>
          </div>

          <div
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <p
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Least Correlated Pair
            </p>
            <p className="text-2xl font-bold" style={{ color: 'var(--color-text)' }}>
              {stats.leastCorrelatedPair.name}
            </p>
            <p style={{ color: 'var(--color-primary)' }} className="text-sm mt-1">
              {stats.leastCorrelatedPair.value.toFixed(2)}
            </p>
          </div>

          <div
            style={{ backgroundColor: 'var(--color-surface)' }}
          >
            <p
              style={{ color: 'var(--color-text-secondary)' }}
            >
              Diversification Score
            </p>
            <p className="text-3xl font-bold" style={{ color: 'var(--color-primary)' }}>
              {stats.diversificationScore.toFixed(0)}
            </p>
            <p style={{ color: 'var(--color-text-secondary)' }} className="text-xs mt-1">
              {stats.diversificationScore > 70
                ? 'Excellent'
                : stats.diversificationScore > 50
                  ? 'Good'
                  : 'Moderate'}
            </p>
          </div>
        </div>

        {/* Correlation Matrix */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
            Correlation Heatmap
          </h2>

          {/* Legend */}
          <div className="mb-6 flex items-center gap-4 text-sm flex-wrap">
            <span style={{ color: 'var(--color-text-secondary)' }}>Legend:</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-blue-900"></div>
              <span style={{ color: 'var(--color-text-secondary)' }}>Inverse (-1)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-slate-700"></div>
              <span style={{ color: 'var(--color-text-secondary)' }}>No Corr (0)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-red-950"></div>
              <span style={{ color: 'var(--color-text-secondary)' }}>Perfect (+1)</span>
            </div>
          </div>

          {/* Matrix Table */}
          <div
            className="overflow-x-auto rounded-lg border"
            style={{ borderColor: 'var(--color-border)' }}
          >
            <div className="inline-block min-w-full">
              <table className="w-full text-sm">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-surface)' }}>
                    <th
                      className="px-4 py-3 text-left text-sm font-semibold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      Asset
                    </th>
                    {CRYPTO_ASSETS.map((crypto) => (
                      <th
                        key={crypto.symbol}
                        className="px-3 py-3 text-center text-xs font-semibold w-14"
                        style={{ color: 'var(--color-text-secondary)' }}
                      >
                        {crypto.symbol}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {CRYPTO_ASSETS.map((cryptoRow, i) => (
                    <tr
                      key={cryptoRow.symbol}
                      style={{ borderColor: 'var(--color-border)' }}
                      className="border-t"
                    >
                      <td
                        className="px-4 py-3 text-sm font-semibold whitespace-nowrap"
                        style={{
                          color: 'var(--color-text)',
                          backgroundColor: 'var(--color-surface)',
                        }}
                      >
                        {cryptoRow.symbol}
                      </td>
                      {CRYPTO_ASSETS.map((cryptoCol, j) => {
                        const corrValue = CORRELATION_DATA[i][j];
                        const isHovered =
                          hoveredCell?.i === i && hoveredCell?.j === j;

                        return (
                          <td
                            key={`${i}-${j}`}
                            className={`px-3 py-3 text-center relative cursor-pointer transition-all duration-200 h-14 flex items-center justify-center ${getCorrelationColor(
                              corrValue,
                            )} ${isHovered ? 'ring-2' : ''}`}
                            style={{
                              color: 'white',
                            }}
                            onMouseEnter={() => setHoveredCell({ i, j })}
                            onMouseLeave={() => setHoveredCell(null)}
                          >
                            <span className="text-xs font-semibold">
                              {corrValue.toFixed(2)}
                            </span>

                            {isHovered && (
                              <div
                                className="absolute z-20 bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 rounded text-xs whitespace-nowrap"
                                style={{
                                  backgroundColor: 'var(--color-surface)',
                                  border: '1px solid var(--color-border)',
                                  color: 'var(--color-text)',
                                }}
                              >
                                {CRYPTO_ASSETS[i].symbol}/{CRYPTO_ASSETS[j].symbol}: {corrValue.toFixed(3)}
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Explanation Section */}
        <div
          className="mb-12 p-8 rounded-lg"
          style={{
            backgroundColor: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
          }}
        >
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Understanding Correlation & Portfolio Diversification
          </h2>
          <div className="space-y-4">
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--color-primary)' }}
              >
                What is Correlation?
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Correlation measures how two assets move together. Values range
                from -1 (perfect inverse relationship) to +1 (perfect positive
                relationship). A correlation near 0 means assets move
                independently.
              </p>
            </div>
            <div>
              <h3
                style={{ color: 'var(--color-primary)' }}
              >
                Why Low Correlation Matters
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                Assets with low correlation provide better portfolio
                diversification. When one asset declines, others may hold their
                value or increase, reducing overall portfolio volatility. Mix
                highly correlated assets (like BTC/ETH) with lower correlation
                pairs for optimal risk management.
              </p>
            </div>
            <div>
              <h3
                style={{ color: 'var(--color-primary)' }}
              >
                Your Diversification Score
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }}>
                A score of {stats.diversificationScore.toFixed(0)} indicates{' '}
                {stats.diversificationScore > 70
                  ? 'excellent'
                  : stats.diversificationScore > 50
                    ? 'good'
                    : 'moderate'}{' '}
                potential for diversification. Aim to combine assets with
                correlation values below 0.70 for a well-balanced portfolio.
              </p>
            </div>
          </div>
        </div>

        {/* Suggested Portfolios */}
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text)' }}>
            Suggested Diversified Portfolios
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Portfolio 1 - Conservative */}
            <div
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                Conservative Mix
              </h3>
              <p
                style={{ color: 'var(--color-text-secondary)' }}
                className="text-sm mb-4"
              >
                Low correlation focus
              </p>
              <ul className="space-y-2 mb-4">
                {['BTC 30%', 'XRP 25%', 'DOT 20%', 'LINK 15%', 'ADA 10%'].map(
                  (item) => (
                    <li
                      key={item}
                      style={{ color: 'var(--color-text)' }}
                      className="text-sm"
                    >
                      • {item}
                    </li>
                  ),
                )}
              </ul>
              <p className="text-xs" style={{ color: 'var(--color-primary)' }}>
                Avg Correlation: 0.61
              </p>
            </div>

            {/* Portfolio 2 - Balanced */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                Balanced Growth
              </h3>
              <p
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Mixed correlation strategy
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'BTC 25%',
                  'ETH 20%',
                  'SOL 20%',
                  'AVAX 15%',
                  'LINK 10%',
                  'XRP 10%',
                ].map((item) => (
                  <li
                    key={item}
                    style={{ color: 'var(--color-text)' }}
                  >
                    • {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs" style={{ color: 'var(--color-primary)' }}>
                Avg Correlation: 0.70
              </p>
            </div>

            {/* Portfolio 3 - Aggressive */}
            <div
              style={{
                backgroundColor: 'var(--color-surface)',
                borderColor: 'var(--color-border)',
              }}
            >
              <h3 className="text-lg font-bold mb-2" style={{ color: 'var(--color-text)' }}>
                Aggressive Diversification
              </h3>
              <p
                style={{ color: 'var(--color-text-secondary)' }}
              >
                Maximum variety approach
              </p>
              <ul className="space-y-2 mb-4">
                {[
                  'BTC 20%',
                  'SOL 20%',
                  'LINK 20%',
                  'DOT 15%',
                  'XRP 15%',
                  'MATIC 10%',
                ].map((item) => (
                  <li
                    key={item}
                    style={{ color: 'var(--color-text)' }}
                  >
                    • {item}
                  </li>
                ))}
              </ul>
              <p className="text-xs" style={{ color: 'var(--color-primary)' }}>
                Avg Correlation: 0.64
              </p>
            </div>
          </div>
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/tools/correlation-matrix" />
    </div>
  );
}
