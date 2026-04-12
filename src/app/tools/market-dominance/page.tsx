'use client';

import React, { useState, useMemo } from 'react';

interface DominanceData {
  btc: number;
  eth: number;
  altcoins: number;
}

interface HistoricalPoint {
  day: number;
  btc: number;
  eth: number;
}

interface SectorShift {
  sector: string;
  change: number;
  status: 'up' | 'down';
};

const MarketDominancePage = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'7d' | '30d' | '90d'>('30d');
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  // Simulated current dominance data
  const dominanceData: DominanceData = useMemo(
    () => ({
      btc: 57.2,
      eth: 13.8,
      altcoins: 29.0,
    }),
    []
  );

  // Simulated historical data (last 30 days)
  const historicalData: HistoricalPoint[] = useMemo(
    () => [
      { day: 1, btc: 55.2, eth: 14.1 },
      { day: 2, btc: 55.8, eth: 13.9 },
      { day: 3, btc: 56.1, eth: 13.8 },
      { day: 4, btc: 56.3, eth: 13.7 },
      { day: 5, btc: 56.8, eth: 13.5 },
      { day: 6, btc: 57.0, eth: 13.6 },
      { day: 7, btc: 56.9, eth: 13.7 },
      { day: 8, btc: 57.2, eth: 13.6 },
      { day: 9, btc: 57.4, eth: 13.4 },
      { day: 10, btc: 57.1, eth: 13.5 },
      { day: 11, btc: 56.8, eth: 13.8 },
      { day: 12, btc: 56.5, eth: 14.0 },
      { day: 13, btc: 56.7, eth: 13.9 },
      { day: 14, btc: 57.0, eth: 13.7 },
      { day: 15, btc: 57.3, eth: 13.5 },
      { day: 16, btc: 57.5, eth: 13.3 },
      { day: 17, btc: 57.6, eth: 13.2 },
      { day: 18, btc: 57.4, eth: 13.4 },
      { day: 19, btc: 57.1, eth: 13.6 },
      { day: 20, btc: 56.9, eth: 13.8 },
      { day: 21, btc: 56.7, eth: 14.0 },
      { day: 22, btc: 56.9, eth: 13.9 },
      { day: 23, btc: 57.1, eth: 13.7 },
      { day: 24, btc: 57.2, eth: 13.6 },
      { day: 25, btc: 57.3, eth: 13.5 },
      { day: 26, btc: 57.4, eth: 13.4 },
      { day: 27, btc: 57.3, eth: 13.5 },
      { day: 28, btc: 57.2, eth: 13.6 },
      { day: 29, btc: 57.1, eth: 13.7 },
      { day: 30, btc: 57.2, eth: 13.8 },
    ],
    []
  );

  const sectorShifts: SectorShift[] = useMemo(
    () => [
      { sector: 'Layer 1', change: 2.3, status: 'up' },
      { sector: 'DeFi', change: -1.8, status: 'down' },
      { sector: 'AI/ML Tokens', change: 5.7, status: 'up' },
      { sector: 'Gaming', change: -0.9, status: 'down' },
      { sector: 'Stablecoins', change: 1.2, status: 'up' },
    ],
    []
  );

  // Chart dimensions
  const chartWidth = 400;
  const chartHeight = 300;
  const donutRadius = 80;
  const donutInnerRadius = 55;

  // Calculate pie segments
  const btcAngle = (dominanceData.btc / 100) * 360;
  const ethAngle = (dominanceData.eth / 100) * 360;
  const altcoinsAngle = (dominanceData.altcoins / 100) * 360;

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const createArcPath = (
    centerX: number,
    centerY: number,
    startAngle: number,
    endAngle: number,
    outerRadius: number,
    innerRadius: number
  ) => {
    const start = polarToCartesian(centerX, centerY, outerRadius, endAngle);
    const end = polarToCartesian(centerX, centerY, outerRadius, startAngle);
    const innerStart = polarToCartesian(centerX, centerY, innerRadius, endAngle);
    const innerEnd = polarToCartesian(centerX, centerY, innerRadius, startAngle);

    const largeArc = endAngle - startAngle <= 180 ? '0' : '1';

    return [
      `M ${start.x} ${start.y}`,
      `A ${outerRadius} ${outerRadius} 0 ${largeArc} 0 ${end.x} ${end.y}`,
      `L ${innerEnd.x} ${innerEnd.y}`,
      `A ${innerRadius} ${innerRadius} 0 ${largeArc} 1 ${innerStart.x} ${innerStart.y}`,
      'Z',
    ].join(' ');
  };

  const btcPath = createArcPath(
    chartWidth / 2,
    chartHeight / 2,
    0,
    btcAngle,
    donutRadius,
    donutInnerRadius
  );
  const ethPath = createArcPath(
    chartWidth / 2,
    chartHeight / 2,
    btcAngle,
    btcAngle + ethAngle,
    donutRadius,
    donutInnerRadius
  );
  const altcoinsPath = createArcPath(
    chartWidth / 2,
    chartHeight / 2,
    btcAngle + ethAngle,
    360,
    donutRadius,
    donutInnerRadius
  );

  // Line chart data
  const lineChartWidth = 600;
  const lineChartHeight = 250;
  const padding = 40;

  const xScale = (day: number) =>
    padding + ((day - 1) / (historicalData.length - 1)) * (lineChartWidth - padding * 2);
  const yScale = (value: number) =>
    lineChartHeight -
    padding -
    ((value - 50) / (60 - 50)) * (lineChartHeight - padding * 2);

  const btcLine = historicalData
    .map((d) => `${xScale(d.day)},${yScale(d.btc)}`)
    .join('L');
  const ethLine = historicalData
    .map((d) => `${xScale(d.day)},${yScale(d.eth)}`)
    .join('L');

  const totalMarketCap = '$2.84T';
  const btcDom = dominanceData.btc.toFixed(2);
  const ethDom = dominanceData.eth.toFixed(2);
  const altseasonIndex = (
    ((dominanceData.altcoins - 20) / (40 - 20)) * 100
  ).toFixed(0);

  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: 'var(--color-text)' }}
          >
            Market Dominance Tracker
          </h1>
          <p style={{ color: 'var(--color-text-secondary)' }}>
            Monitor cryptocurrency market dominance and sector trends
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Market Cap', value: totalMarketCap, change: '+8.3%' },
            { label: 'BTC Dominance', value: `${btcDom}%`, change: '+1.2%' },
            { label: 'ETH Dominance', value: `${ethDom}%`, change: '-0.3%' },
            { label: 'Altseason Index', value: `${altseasonIndex}`, change: '-2.1%' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg backdrop-blur-md border transition-all hover:border-opacity-100"
              style={{
                backgroundColor: 'var(--glass-bg)',
                borderColor: 'var(--color-border)',
              }}
            >
              <p
                className="text-sm font-medium mb-2"
                style={{ color: 'var(--color-text-secondary)' }}
              >
                {stat.label}
              </p>
              <div className="flex items-baseline gap-2">
                <span
                  className="text-3xl font-bold"
                  style={{ color: 'var(--color-text)' }}
                >
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-green-400">
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Donut Chart */}
          <div
            className="p-8 rounded-lg backdrop-blur-md border"
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h2
              className="text-2xl font-bold mb-6"
              style={{ color: 'var(--color-text)' }}
            >
              Current Dominance
            </h2>
            <div className="flex flex-col items-center">
              <svg width={chartWidth} height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`}>
                {/* BTC Segment */}
                <path
                  d={btcPath}
                  fill={hoveredSegment === 'btc' ? '#F7931A' : '#F59E0B'}
                  stroke="var(--color-bg)"
                  strokeWidth="2"
                  className="cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredSegment('btc')}
                  onMouseLeave={() => setHoveredSegment(null)}
                  style={{
                    filter:
                      hoveredSegment === 'btc' ? 'drop-shadow(0 0 12px #F7931A)' : 'none',
                  }}
                />
                {/* ETH Segment */}
                <path
                  d={ethPath}
                  fill={hoveredSegment === 'eth' ? '#627EEA' : '#5B6BEF'}
                  onMouseEnter={() => setHoveredSegment('eth')}
                  onMouseLeave={() => setHoveredSegment(null)}
                  style={{
                    filter:
                      hoveredSegment === 'eth' ? 'drop-shadow(0 0 12px #627EEA)' : 'none',
                  }}
                />
                {/* Altcoins Segment */}
                <path
                  d={altcoinsPath}
                  fill={hoveredSegment === 'altcoins' ? '#10B981' : '#059669'}
                  onMouseEnter={() => setHoveredSegment('altcoins')}
                  onMouseLeave={() => setHoveredSegment(null)}
                  style={{
                    filter:
                      hoveredSegment === 'altcoins'
                        ? 'drop-shadow(0 0 12px #10B981)'
                        : 'none',
                  }}
                />
                {/* Center Text */}
                <text
                  x={chartWidth / 2}
                  y={chartHeight / 2 - 10}
                  textAnchor="middle"
                  className="text-xl font-bold"
                  fill="var(--color-text)"
                >
                  Market
                </text>
                <text
                  x={chartWidth / 2}
                  y={chartHeight / 2 + 15}
                  className="text-lg"
                  fill="var(--color-text-secondary)"
                >
                  Dominance
                </text>
              </svg>

              {/* Legend */}
              <div className="mt-8 space-y-3 w-full">
                {[
                  { label: 'Bitcoin', value: dominanceData.btc, color: '#F59E0B' },
                  { label: 'Ethereum', value: dominanceData.eth, color: '#5B6BEF' },
                  { label: 'Altcoins', value: dominanceData.altcoins, color: '#059669' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span
                      className="text-sm font-medium flex-1"
                      style={{ color: 'var(--color-text-secondary)' }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-sm font-bold"
                      style={{ color: 'var(--color-text)' }}
                    >
                      {item.value.toFixed(1)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Historical Trend */}
          <div
            style={{
              backgroundColor: 'var(--glass-bg)',
              borderColor: 'var(--color-border)',
            }}
          >
            <h2
              style={{ color: 'var(--color-text)' }}
            >
              30-Day Trend
            </h2>
            <svg width="100%" height={lineChartHeight} viewBox={`0 0 ${lineChartWidth} ${lineChartHeight}`}>
              {/* Grid */}
              {[50, 55, 60].map((y) => (
                <line
                  key={y}
                  x1={padding}
                  y1={yScale(y)}
                  x2={lineChartWidth - padding}
                  y2={yScale(y)}
                  stroke="var(--color-border)"
                  strokeDasharray="4 4"
                  strokeWidth="1"
                />
              ))}

              {/* BTC Line */}
              <polyline
                points={btcLine}
                fill="none"
                stroke="#F59E0B"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* ETH Line */}
              <polyline
                points={ethLine}
                stroke="#5B6BEF"
              />

              {/* Y-axis labels */}
              {[50, 55, 60].map((y) => (
                <text
                  key={`label-${y}`}
                  x={padding - 10}
                  y={yScale(y) + 5}
                  textAnchor="end"
                  fontSize="12"
                >
                  {y}%
                </text>
              ))}
            </svg>
            <div className="mt-4 flex gap-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-500" />
                <span style={{ color: 'var(--color-text-secondary)' }}>BTC</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-500" />
                <span style={{ color: 'var(--color-text-secondary)' }}>ETH</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dominance Shifts */}
        <div
          className="p-8 rounded-lg backdrop-blur-md border mb-8"
          style={{
            backgroundColor: 'var(--glass-bg)',
            borderColor: 'var(--color-border)',
          }}
        >
          <h2
            style={{ color: 'var(--color-text)' }}
          >
            Dominance Shifts (24h)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {sectorShifts.map((shift) => (
              <div
                key={shift.sector}
                className="p-4 rounded-lg border transition-all hover:scale-105"
                style={{
                  backgroundColor:
                    shift.status === 'up'
                      ? 'rgba(16, 185, 129, 0.1)'
                      : 'rgba(239, 68, 68, 0.1)',
                  borderColor:
                      ? 'rgba(16, 185, 129, 0.3)'
                      : 'rgba(239, 68, 68, 0.3)',
                }}
              >
                <p
                  style={{ color: 'var(--color-text-secondary)' }}
                >
                  {shift.sector}
                </p>
                <div className="flex items-baseline gap-2">
                  <span
                    className="text-2xl font-bold"
                    style={{
                      color: shift.status === 'up' ? '#10B981' : '#EF4444',
                    }}
                  >
                    {shift.status === 'up' ? '+' : ''}
                    {shift.change}%
                  </span>
                  <span
                    className="text-xs font-bold"
                    style={{
                      color: shift.status === 'up' ? '#10B981' : '#EF4444',
                    }}
                  >
                    {shift.status === 'up' ? '↑' : '↓'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Section */}
        <div
          style={{
            backgroundColor: 'var(--glass-bg)',
            borderColor: 'var(--color-border)',
          }}
        >
          <h2
            className="text-2xl font-bold mb-4"
            style={{ color: 'var(--color-text)' }}
          >
            What is Market Dominance?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3
                className="text-lg font-semibold mb-2"
                style={{ color: 'var(--color-primary)' }}
              >
                Definition
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                Market dominance refers to the percentage of total cryptocurrency market capitalization held by a specific asset or group of assets. It shows which cryptocurrencies or sectors control the largest share of the market.
              </p>
            </div>
            <div>
              <h3
                style={{ color: 'var(--color-primary)' }}
              >
                Why It Matters
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                High BTC dominance suggests a risk-averse market focused on the largest asset. Rising altcoin dominance ("altseason") indicates increased risk appetite and capital flowing into alternative projects.
              </p>
            </div>
            <div>
              <h3
                style={{ color: 'var(--color-primary)' }}
              >
                Altseason Index
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                The Altseason Index measures the proportion of altcoins in the total market. Values 0-30 indicate bear markets, 30-60 normal conditions, and 60+ altseason when alternatives outperform Bitcoin.
              </p>
            </div>
            <div>
              <h3
                style={{ color: 'var(--color-primary)' }}
              >
                Trading Strategy
              </h3>
              <p style={{ color: 'var(--color-text-secondary)' }} className="leading-relaxed">
                Use dominance trends to inform allocation decisions. Buy altcoins when dominance is rising and BTC dominance is stable or declining. Rotate back to BTC when altcoin season ends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketDominancePage;
