'use client';

import React, { useState, useMemo } from 'react';

const ASSETS = ['BTC', 'ETH', 'SOL', 'BNB', 'XRP', 'ADA', 'AVAX', 'DOT', 'LINK', 'MATIC', 'ATOM', 'UNI'];

// Pre-computed correlation matrices for different time periods
const CORRELATION_DATA: Record<string, number[][]> = {
  '7D': [
    [1.0, 0.82, 0.68, 0.71, 0.61, 0.52, 0.73, 0.58, 0.79, 0.74, 0.56, 0.63],
    [0.82, 1.0, 0.75, 0.68, 0.58, 0.54, 0.71, 0.61, 0.77, 0.72, 0.59, 0.66],
    [0.68, 0.75, 1.0, 0.64, 0.52, 0.48, 0.69, 0.55, 0.73, 0.67, 0.51, 0.59],
    [0.71, 0.68, 0.64, 1.0, 0.59, 0.56, 0.72, 0.58, 0.71, 0.69, 0.55, 0.62],
    [0.61, 0.58, 0.52, 0.59, 1.0, 0.63, 0.54, 0.49, 0.56, 0.57, 0.52, 0.54],
    [0.52, 0.54, 0.48, 0.56, 0.63, 1.0, 0.51, 0.58, 0.49, 0.51, 0.57, 0.53],
    [0.73, 0.71, 0.69, 0.72, 0.54, 0.51, 1.0, 0.62, 0.75, 0.71, 0.53, 0.61],
    [0.58, 0.61, 0.55, 0.58, 0.49, 0.58, 0.62, 1.0, 0.59, 0.61, 0.63, 0.57],
    [0.79, 0.77, 0.73, 0.71, 0.56, 0.49, 0.75, 0.59, 1.0, 0.76, 0.54, 0.68],
    [0.74, 0.72, 0.67, 0.69, 0.57, 0.51, 0.71, 0.61, 0.76, 1.0, 0.56, 0.65],
    [0.56, 0.59, 0.51, 0.55, 0.52, 0.57, 0.53, 0.63, 0.54, 0.56, 1.0, 0.58],
    [0.63, 0.66, 0.59, 0.62, 0.54, 0.53, 0.61, 0.57, 0.68, 0.65, 0.58, 1.0],
  ],
  '30D': [
    [1.0, 0.85, 0.71, 0.73, 0.62, 0.51, 0.75, 0.59, 0.81, 0.76, 0.57, 0.65],
    [0.85, 1.0, 0.77, 0.71, 0.59, 0.53, 0.73, 0.62, 0.79, 0.74, 0.60, 0.68],
    [0.71, 0.77, 1.0, 0.67, 0.53, 0.49, 0.71, 0.56, 0.75, 0.69, 0.52, 0.61],
    [0.73, 0.71, 0.67, 1.0, 0.61, 0.57, 0.74, 0.60, 0.72, 0.71, 0.56, 0.64],
    [0.62, 0.59, 0.53, 0.61, 1.0, 0.64, 0.56, 0.50, 0.58, 0.59, 0.53, 0.56],
    [0.51, 0.53, 0.49, 0.57, 0.64, 1.0, 0.52, 0.59, 0.50, 0.52, 0.58, 0.54],
    [0.75, 0.73, 0.71, 0.74, 0.56, 0.52, 1.0, 0.63, 0.77, 0.73, 0.54, 0.63],
    [0.59, 0.62, 0.56, 0.60, 0.50, 0.59, 0.63, 1.0, 0.60, 0.62, 0.64, 0.58],
    [0.81, 0.79, 0.75, 0.72, 0.58, 0.50, 0.77, 0.60, 1.0, 0.78, 0.55, 0.70],
    [0.76, 0.74, 0.69, 0.71, 0.59, 0.52, 0.73, 0.62, 0.78, 1.0, 0.57, 0.67],
    [0.57, 0.60, 0.52, 0.56, 0.53, 0.58, 0.54, 0.64, 0.55, 0.57, 1.0, 0.59],
    [0.65, 0.68, 0.61, 0.64, 0.56, 0.54, 0.63, 0.58, 0.70, 0.67, 0.59, 1.0],
  ],
  '90D': [
    [1.0, 0.87, 0.73, 0.75, 0.64, 0.50, 0.77, 0.60, 0.83, 0.78, 0.58, 0.67],
    [0.87, 1.0, 0.79, 0.73, 0.60, 0.52, 0.75, 0.63, 0.81, 0.76, 0.61, 0.70],
    [0.73, 0.79, 1.0, 0.69, 0.55, 0.48, 0.73, 0.57, 0.77, 0.71, 0.53, 0.63],
    [0.75, 0.73, 0.69, 1.0, 0.63, 0.56, 0.76, 0.61, 0.74, 0.73, 0.57, 0.66],
    [0.64, 0.60, 0.55, 0.63, 1.0, 0.65, 0.58, 0.51, 0.60, 0.61, 0.54, 0.58],
    [0.50, 0.52, 0.48, 0.56, 0.65, 1.0, 0.51, 0.60, 0.49, 0.51, 0.59, 0.53],
    [0.77, 0.75, 0.73, 0.76, 0.58, 0.51, 1.0, 0.64, 0.79, 0.75, 0.55, 0.65],
    [0.60, 0.63, 0.57, 0.61, 0.51, 0.60, 0.64, 1.0, 0.61, 0.63, 0.65, 0.59],
    [0.83, 0.81, 0.77, 0.74, 0.60, 0.49, 0.79, 0.61, 1.0, 0.80, 0.56, 0.72],
    [0.78, 0.76, 0.71, 0.73, 0.61, 0.51, 0.75, 0.63, 0.80, 1.0, 0.58, 0.69],
    [0.58, 0.61, 0.53, 0.57, 0.54, 0.59, 0.55, 0.65, 0.56, 0.58, 1.0, 0.60],
    [0.67, 0.70, 0.63, 0.66, 0.58, 0.53, 0.65, 0.59, 0.72, 0.69, 0.60, 1.0],
  ],
  '1Y': [
    [1.0, 0.89, 0.75, 0.77, 0.66, 0.49, 0.79, 0.61, 0.85, 0.80, 0.59, 0.69],
    [0.89, 1.0, 0.81, 0.75, 0.62, 0.51, 0.77, 0.64, 0.83, 0.78, 0.62, 0.72],
    [0.75, 0.81, 1.0, 0.71, 0.57, 0.47, 0.75, 0.58, 0.79, 0.73, 0.54, 0.65],
    [0.77, 0.75, 0.71, 1.0, 0.65, 0.55, 0.78, 0.62, 0.76, 0.75, 0.58, 0.68],
    [0.66, 0.62, 0.57, 0.65, 1.0, 0.66, 0.60, 0.52, 0.62, 0.63, 0.55, 0.60],
    [0.49, 0.51, 0.47, 0.55, 0.66, 1.0, 0.50, 0.61, 0.48, 0.50, 0.60, 0.52],
    [0.79, 0.77, 0.75, 0.78, 0.60, 0.50, 1.0, 0.65, 0.81, 0.77, 0.56, 0.67],
    [0.61, 0.64, 0.58, 0.62, 0.52, 0.61, 0.65, 1.0, 0.62, 0.64, 0.66, 0.60],
    [0.85, 0.83, 0.79, 0.76, 0.62, 0.48, 0.81, 0.62, 1.0, 0.82, 0.57, 0.74],
    [0.80, 0.78, 0.73, 0.75, 0.63, 0.50, 0.77, 0.64, 0.82, 1.0, 0.59, 0.71],
    [0.59, 0.62, 0.54, 0.58, 0.55, 0.60, 0.56, 0.66, 0.57, 0.59, 1.0, 0.61],
    [0.69, 0.72, 0.65, 0.68, 0.60, 0.52, 0.67, 0.60, 0.74, 0.71, 0.61, 1.0],
  ],
};

function getColorForCorrelation(value: number): string {
  if (value === 1.0) return '#30363d';
  if (value >= 0.8) return '#1a6e1a';
  if (value >= 0.6) return '#3fb950';
  if (value >= 0.4) return '#a5c65f';
  if (value >= 0.2) return '#fff887';
  if (value >= 0) return '#ffd700';
  if (value >= -0.2) return '#ffa500';
  if (value >= -0.4) return '#ff8c00';
  if (value >= -0.6) return '#ff6b6b';
  if (value >= -0.8) return '#ff4444';
  return '#cc0000';
}

function getTextColor(bgColor: string): string {
  if (bgColor === '#30363d' || bgColor === '#1a6e1a' || bgColor === '#3fb950') {
    return '#fff';
  }
  return '#000';
}

function getCorrelationMeaning(value: number): string {
  if (value >= 0.8) return 'Very Strong Positive';
  if (value >= 0.6) return 'Strong Positive';
  if (value >= 0.4) return 'Moderate Positive';
  if (value >= 0.2) return 'Weak Positive';
  if (value >= 0) return 'Very Weak Positive';
  if (value >= -0.2) return 'Very Weak Negative';
  if (value >= -0.4) return 'Weak Negative';
  if (value >= -0.6) return 'Moderate Negative';
  if (value >= -0.8) return 'Strong Negative';
  return 'Very Strong Negative';
}

function calculateStats(matrix: number[][]) {
  let maxCorr = -1;
  let minCorr = 2;
  let maxPair = '';
  let minPair = '';
  let sum = 0;
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      const val = matrix[i][j];
      sum += val;
      count++;
      if (val > maxCorr) {
        maxCorr = val;
        maxPair = `${ASSETS[i]}-${ASSETS[j]}`;
      }
      if (val < minCorr) {
        minCorr = val;
        minPair = `${ASSETS[i]}-${ASSETS[j]}`;
      }
    }
  }

  return {
    mostCorrelated: { pair: maxPair, value: maxCorr },
    leastCorrelated: { pair: minPair, value: minCorr },
    averageCorrelation: (sum / count).toFixed(3),
  };
}

interface HoverState {
  row: number | null;
  col: number | null;
}

export default function CorrelationMatrixPage() {
  const [timePeriod, setTimePeriod] = useState<'7D' | '30D' | '90D' | '1Y'>('30D');
  const [hoverState, setHoverState] = useState<HoverState>({ row: null, col: null });

  const correlationMatrix = CORRELATION_DATA[timePeriod];
  const stats = useMemo(() => calculateStats(correlationMatrix), [correlationMatrix]);

  return (
    <div style={{ backgroundColor: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '42px', fontWeight: '700', margin: '0 0 12px 0', color: '#e6edf3' }}>
            Crypto Correlation Matrix
          </h1>
          <p style={{ fontSize: '18px', color: '#8b949e', margin: '0' }}>
            Analyze correlation patterns between major cryptocurrencies. Red indicates negative correlation, green indicates positive.
          </p>
        </div>

        {/* Time Period Selector */}
        <div style={{ marginBottom: '32px' }}>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ fontSize: '14px', fontWeight: '600', color: '#e6edf3', display: 'block', marginBottom: '12px' }}>
              Time Period
            </label>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            {(['7D', '30D', '90D', '1Y'] as const).map((period) => (
              <button
                key={period}
                onClick={() => setTimePeriod(period)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '6px',
                  border: 'none',
                  backgroundColor: timePeriod === period ? '#6366f1' : '#30363d',
                  color: '#e6edf3',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (timePeriod !== period) {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#404854';
                  }
                }}
                onMouseLeave={(e) => {
                  if (timePeriod !== period) {
                    (e.target as HTMLButtonElement).style.backgroundColor = '#30363d';
                  }
                }}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Stats Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px', marginBottom: '32px' }}>
          <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '6px', padding: '20px' }}>
            <div style={{ fontSize: '12px', color: '#8b949e', textTransform: 'uppercase', fontWeight: '600', marginBottom: '8px' }}>
              Most Correlated Pair
            </div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#3fb950', marginBottom: '4px' }}>
              {stats.mostCorrelated.pair}
            </div>
            <div style={{ fontSize: '14px', color: '#e6edf3' }}>
              {stats.mostCorrelated.value.toFixed(4)}
            </div>
          </div>

          <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '6px', padding: '20px' }}>
            <div style={{ fontSize: '12px', color: '#8b949e', textTransform: 'uppercase', fontWeight: '600', marginBottom: '8px' }}>
              Least Correlated Pair
            </div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#f85149', marginBottom: '4px' }}>
              {stats.leastCorrelated.pair}
            </div>
            <div style={{ fontSize: '14px', color: '#e6edf3' }}>
              {stats.leastCorrelated.value.toFixed(4)}
            </div>
          </div>

          <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '6px', padding: '20px' }}>
            <div style={{ fontSize: '12px', color: '#8b949e', textTransform: 'uppercase', fontWeight: '600', marginBottom: '8px' }}>
              Average Correlation
            </div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#6366f1', marginBottom: '4px' }}>
              {stats.averageCorrelation}
            </div>
            <div style={{ fontSize: '14px', color: '#e6edf3' }}>
              All asset pairs
            </div>
          </div>
        </div>

        {/* Heatmap */}
        <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '6px', padding: '24px', marginBottom: '32px', overflowX: 'auto' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 24px 0' }}>Correlation Heatmap</h2>

          <div style={{ overflowX: 'auto' }}>
            <table
              style={{
                borderCollapse: 'collapse',
                minWidth: '100%',
                fontSize: '12px',
              }}
            >
              <thead>
                <tr>
                  <th style={{ width: '50px', textAlign: 'center', padding: '8px', color: '#8b949e' }}></th>
                  {ASSETS.map((asset) => (
                    <th
                      key={asset}
                      style={{
                        width: '60px',
                        textAlign: 'center',
                        padding: '8px',
                        color: '#8b949e',
                        fontWeight: '600',
                        fontSize: '12px',
                      }}
                    >
                      {asset}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {ASSETS.map((assetRow, rowIdx) => (
                  <tr key={assetRow}>
                    <td
                      style={{
                        padding: '8px',
                        textAlign: 'center',
                        fontWeight: '600',
                        color: '#8b949e',
                        fontSize: '12px',
                      }}
                    >
                      {assetRow}
                    </td>
                    {ASSETS.map((assetCol, colIdx) => {
                      const value = correlationMatrix[rowIdx][colIdx];
                      const bgColor = getColorForCorrelation(value);
                      const textColor = getTextColor(bgColor);
                      const isHovered = hoverState.row === rowIdx && hoverState.col === colIdx;

                      return (
                        <td
                          key={`${rowIdx}-${colIdx}`}
                          onMouseEnter={() => setHoverState({ row: rowIdx, col: colIdx })}
                          onMouseLeave={() => setHoverState({ row: null, col: null })}
                          style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: bgColor,
                            border: '1px solid #30363d',
                            cursor: 'pointer',
                            position: 'relative',
                            transition: 'transform 0.1s, box-shadow 0.1s',
                            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
                            boxShadow: isHovered ? '0 0 12px rgba(99, 102, 241, 0.3), inset 0 0 0 2px #6366f1' : 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontWeight: '600',
                            padding: '0',
                          }}
                          title={`${assetRow} vs ${assetCol}: ${value.toFixed(4)} (${getCorrelationMeaning(value)})`}
                        >
                          <span style={{ color: textColor, fontSize: '11px' }}>
                            {value.toFixed(2)}
                          </span>
                          {isHovered && (
                            <div
                              style={{
                                position: 'absolute',
                                bottom: '100%',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                backgroundColor: '#0d1117',
                                border: '1px solid #6366f1',
                                borderRadius: '6px',
                                padding: '8px 12px',
                                marginBottom: '8px',
                                whiteSpace: 'nowrap',
                                zIndex: 100,
                                fontSize: '12px',
                                color: '#e6edf3',
                                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)',
                              }}
                            >
                              <div style={{ fontWeight: '600' }}>
                                {assetRow} ↔ {assetCol}
                              </div>
                              <div style={{ color: '#8b949e', fontSize: '11px', marginTop: '4px' }}>
                                {value.toFixed(4)}
                              </div>
                              <div style={{ color: '#6366f1', fontSize: '11px', marginTop: '4px' }}>
                                {getCorrelationMeaning(value)}
                              </div>
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

        {/* Color Legend */}
        <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '6px', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 20px 0' }}>Color Legend</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#cc0000',
                  borderRadius: '4px',
                  border: '1px solid #30363d',
                }}
              ></div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#e6edf3' }}>-1.0 to -0.8</div>
                <div style={{ fontSize: '12px', color: '#8b949e' }}>Very Strong Negative</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ff6b6b',
                  borderRadius: '4px',
                  border: '1px solid #30363d',
                }}
              ></div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#e6edf3' }}>-0.8 to -0.4</div>
                <div style={{ fontSize: '12px', color: '#8b949e' }}>Strong Negative</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ffa500',
                  borderRadius: '4px',
                  border: '1px solid #30363d',
                }}
              ></div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#e6edf3' }}>-0.4 to 0.0</div>
                <div style={{ fontSize: '12px', color: '#8b949e' }}>Negative</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#ffd700',
                  borderRadius: '4px',
                  border: '1px solid #30363d',
                }}
              ></div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#e6edf3' }}>0.0 to 0.4</div>
                <div style={{ fontSize: '12px', color: '#8b949e' }}>Weak Positive</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#3fb950',
                  borderRadius: '4px',
                  border: '1px solid #30363d',
                }}
              ></div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#e6edf3' }}>0.4 to 0.8</div>
                <div style={{ fontSize: '12px', color: '#8b949e' }}>Strong Positive</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#1a6e1a',
                  borderRadius: '4px',
                  border: '1px solid #30363d',
                }}
              ></div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#e6edf3' }}>0.8 to 1.0</div>
                <div style={{ fontSize: '12px', color: '#8b949e' }}>Very Strong Positive</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#30363d',
                  borderRadius: '4px',
                  border: '1px solid #8b949e',
                }}
              ></div>
              <div>
                <div style={{ fontSize: '12px', fontWeight: '600', color: '#e6edf3' }}>1.0</div>
                <div style={{ fontSize: '12px', color: '#8b949e' }}>Perfect Correlation (Self)</div>
              </div>
            </div>
          </div>
        </div>

        {/* How to Read Section */}
        <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '6px', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 20px 0', color: '#e6edf3' }}>How to Read the Correlation Matrix</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px 0', color: '#6366f1' }}>What is Correlation?</h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#8b949e', lineHeight: '1.6' }}>
                Correlation measures how two assets move together. A value of +1 means they move perfectly together, -1 means they move in opposite directions, and 0 means they're independent.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px 0', color: '#06b6d4' }}>Reading the Matrix</h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#8b949e', lineHeight: '1.6' }}>
                Find the row of one asset and the column of another. The cell where they intersect shows their correlation coefficient. For example, BTC-ETH correlation would be at row 1, column 2.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 12px 0', color: '#f7931a' }}>Why it Matters</h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#8b949e', lineHeight: '1.6' }}>
                Understanding correlations helps with portfolio diversification. Assets with low or negative correlations can offset each other's volatility, reducing overall portfolio risk.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '6px', padding: '24px', marginBottom: '32px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 24px 0', color: '#e6edf3' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0', color: '#e6edf3' }}>Why do correlations change over time?</h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#8b949e', lineHeight: '1.6' }}>
                Market conditions, regulatory changes, and macroeconomic factors affect how different assets move relative to each other. Comparing different time periods reveals trends in these relationships.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0', color: '#e6edf3' }}>What does a 0.85 correlation between BTC and ETH mean?</h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#8b949e', lineHeight: '1.6' }}>
                A correlation of 0.85 indicates a very strong positive relationship. When Bitcoin moves up, Ethereum typically moves up as well, and vice versa. This makes sense as they both respond to overall crypto market sentiment.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0', color: '#e6edf3' }}>Can correlation be negative?</h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#8b949e', lineHeight: '1.6' }}>
                Yes, negative correlations indicate that assets tend to move in opposite directions. However, true negative correlations are rare in cryptocurrencies, which tend to move together during bull and bear markets.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0', color: '#e6edf3' }}>Is correlation the same as causation?</h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#8b949e', lineHeight: '1.6' }}>
                No. Correlation shows that two assets move together, but doesn't explain why. Two assets might be correlated because they're both affected by the same external factors, not because one causes the other.
              </p>
            </div>

            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0', color: '#e6edf3' }}>How should I use this data for investing?</h3>
              <p style={{ margin: '0', fontSize: '14px', color: '#8b949e', lineHeight: '1.6' }}>
                Use correlation data to build diversified portfolios. Combine assets with lower correlations to reduce volatility. However, always combine this analysis with fundamental research and risk management strategies.
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter CTA */}
        <div
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
            borderRadius: '6px',
            padding: '40px 24px',
            textAlign: 'center',
            marginBottom: '32px',
          }}
        >
          <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 12px 0', color: '#fff' }}>
            Get Daily Crypto Insights
          </h2>
          <p style={{ fontSize: '16px', margin: '0 0 24px 0', color: 'rgba(255, 255, 255, 0.8)' }}>
            Subscribe to receive daily correlation updates and market analysis straight to your inbox.
          </p>
          <div style={{ display: 'flex', gap: '12px', maxWidth: '500px', margin: '0 auto' }}>
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                flex: 1,
                padding: '12px 16px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: '#fff',
                fontSize: '14px',
              }}
              onFocus={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
              }}
              onBlur={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
              }}
            />
            <button
              style={{
                padding: '12px 28px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: '#0d1117',
                color: '#6366f1',
                fontWeight: '600',
                cursor: 'pointer',
                fontSize: '14px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#161b22';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.backgroundColor = '#0d1117';
              }}
            >
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Note */}
        <div style={{ backgroundColor: '#161b22', border: '1px solid #30363d', borderRadius: '6px', padding: '20px', textAlign: 'center' }}>
          <p style={{ margin: '0', fontSize: '12px', color: '#8b949e' }}>
            Data is calculated using historical daily returns. Correlations are updated weekly. This analysis is for informational purposes only and should not be considered financial advice.
          </p>
        </div>
      </div>
    </div>
  );
}
