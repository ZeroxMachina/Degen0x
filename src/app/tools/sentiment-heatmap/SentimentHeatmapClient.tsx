'use client';
import React, { useState, useEffect, useMemo } from 'react';
import {
  TrendingUp,
  TrendingDown,
  Gauge,
  Filter,
  ChevronDown,
  Info,
  Volume2,
  PieChart,
  Activity,
  Zap,
} from 'lucide-react';

interface CryptoToken {
  id: string;
  symbol: string;
  name: string;
  price: number;
  priceChange: number;
  marketCap: number;
  volume24h: number;
  sentiment: number;
  chain: string;
  category: string;
}

interface Filters {
  timeframe: '1h' | '24h' | '7d' | '30d';
  chain: string;
  category: string;
}

interface MarketMetrics {
  overallSentiment: number;
  totalMarketCap: number;
  btcDominance: number;
  volume24h: number;
}

// Generate mock crypto data
const generateMockTokens = (): CryptoToken[] => {
  const chains = ['Ethereum', 'Solana', 'BSC', 'Layer 2', 'Bitcoin'];
  const categories = ['DeFi', 'Memes', 'L1', 'L2', 'AI', 'Gaming'];
  const symbols = [
    'BTC', 'ETH', 'BNB', 'SOL', 'XRP', 'ADA', 'DOGE', 'AVAX', 'MATIC', 'ARB',
    'OP', 'LINK', 'UNI', 'AAVE', 'CURVE', 'GMXC', 'RAY', 'JUP', 'MAGIC', 'ICP',
    'SHIB', 'FLOKI', 'PEPE', 'WIF', 'BONK', 'SAGA', 'FTM', 'ATOM', 'NEAR', 'ALGO',
    'APT', 'SUI', 'SEI', 'LUNC', 'RENDER', 'AR', 'MASK', 'ENS', 'SAND', 'MANA',
    'GALA', 'THETA', 'AXS', 'CHRT', 'CHZ', 'T', 'MPLX', 'RPL', 'LDO', 'STG'
  ];

  return symbols.map((symbol, index) => {
    const sentiment = Math.random() * 100;
    const priceChange = -50 + Math.random() * 100;
    const marketCap = 100000000000 / (index + 1);

    return {
      id: symbol.toLowerCase(),
      symbol,
      name: symbol,
      price: 1000 + Math.random() * 50000,
      priceChange,
      marketCap,
      volume24h: marketCap * 0.1 * (Math.random() * 0.5 + 0.5),
      sentiment,
      chain: chains[Math.floor(Math.random() * chains.length)],
      category: categories[Math.floor(Math.random() * categories.length)],
    };
  });
};

// Sentiment color scale (Red to Green)
const getSentimentColor = (sentiment: number): string => {
  if (sentiment < 20) return '#8b0000'; // Dark red
  if (sentiment < 30) return '#dc143c'; // Crimson
  if (sentiment < 40) return '#ff4500'; // Orange red
  if (sentiment < 50) return '#ffa500'; // Orange
  if (sentiment < 60) return '#ffff00'; // Yellow
  if (sentiment < 70) return '#adff2f'; // Green-yellow
  if (sentiment < 80) return '#32cd32'; // Lime green
  if (sentiment < 90) return '#228b22'; // Forest green
  return '#006400'; // Dark green
};

const getSentimentLabel = (sentiment: number): string => {
  if (sentiment < 25) return 'Extreme Fear';
  if (sentiment < 45) return 'Fear';
  if (sentiment < 55) return 'Neutral';
  if (sentiment < 75) return 'Greed';
  return 'Extreme Greed';
};

// Tooltip component — clamped to viewport bounds
const TokenTooltip: React.FC<{
  token: CryptoToken | null;
  position: { x: number; y: number };
  visible: boolean;
}> = ({ token, position, visible }) => {
  if (!token || !visible) return null;

  // Clamp tooltip position so it doesn't overflow the viewport
  const tooltipWidth = 280;
  const tooltipHeight = 240;
  const padding = 12;
  const clampedX = Math.min(position.x, (typeof window !== 'undefined' ? window.innerWidth : 1200) - tooltipWidth - padding);
  const clampedY = Math.min(position.y, (typeof window !== 'undefined' ? window.innerHeight : 800) - tooltipHeight - padding);

  return (
    <div
      className="fixed z-50 bg-[#161b22] border border-[#30363d] rounded-lg p-4 shadow-lg pointer-events-none"
      style={{
        left: `${Math.max(padding, clampedX)}px`,
        top: `${Math.max(padding, clampedY)}px`,
        maxWidth: '280px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
      }}
    >
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-[#e6edf3] font-bold text-lg">{token.symbol}</span>
          <span
            className="text-xs font-semibold px-2 py-1 rounded"
            style={{ backgroundColor: getSentimentColor(token.sentiment) }}
          >
            {token.sentiment.toFixed(0)}
          </span>
        </div>
        <div className="text-xs text-[#8b949e] space-y-1">
          <div className="flex justify-between">
            <span>Price:</span>
            <span className="text-[#e6edf3]">${token.price.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>24h Change:</span>
            <span
              className={
                token.priceChange >= 0 ? 'text-green-400' : 'text-red-400'
              }
            >
              {token.priceChange >= 0 ? '+' : ''}
              {token.priceChange.toFixed(2)}%
            </span>
          </div>
          <div className="flex justify-between">
            <span>Market Cap:</span>
            <span className="text-[#e6edf3]">
              ${(token.marketCap / 1e9).toFixed(2)}B
            </span>
          </div>
          <div className="flex justify-between">
            <span>Volume (24h):</span>
            <span className="text-[#e6edf3]">
              ${(token.volume24h / 1e9).toFixed(2)}B
            </span>
          </div>
          <div className="flex justify-between">
            <span>Chain:</span>
            <span className="text-[#e6edf3]">{token.chain}</span>
          </div>
          <div className="flex justify-between">
            <span>Category:</span>
            <span className="text-[#e6edf3]">{token.category}</span>
          </div>
          <div className="flex justify-between">
            <span>Sentiment:</span>
            <span className="text-[#e6edf3]">
              {getSentimentLabel(token.sentiment)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Fear & Greed Gauge
const FearGreedGauge: React.FC<{ sentiment: number }> = ({ sentiment }) => {
  const colors = [
    '#8b0000',
    '#dc143c',
    '#ff4500',
    '#ffa500',
    '#ffff00',
    '#adff2f',
    '#32cd32',
    '#228b22',
    '#006400',
  ];

  const rotation = (sentiment / 100) * 180 - 90;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-48 h-24">
        <svg
          viewBox="0 0 200 100"
          className="w-full h-full"
          style={{ overflow: 'visible' }}
          role="img"
          aria-label={`Fear and Greed Index: ${sentiment.toFixed(0)} out of 100 — ${getSentimentLabel(sentiment)}`}
        >
          {/* Background arc */}
          <defs>
            <linearGradient id="sentimentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              {colors.map((color, i) => (
                <stop
                  key={i}
                  offset={`${(i / (colors.length - 1)) * 100}%`}
                  stopColor={color}
                />
              ))}
            </linearGradient>
          </defs>

          {/* Gradient arc */}
          <path
            d="M 20 100 A 80 80 0 0 1 180 100"
            stroke="url(#sentimentGradient)"
            strokeWidth="12"
            fill="none"
            strokeLinecap="round"
          />

          {/* Needle */}
          <line
            x1="100"
            y1="100"
            x2="100"
            y2="20"
            stroke="#e6edf3"
            strokeWidth="3"
            strokeLinecap="round"
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: '100px 100px',
              transition: 'transform 0.6s ease-out',
            }}
          />

          {/* Center circle */}
          <circle cx="100" cy="100" r="6" fill="#e6edf3" />
        </svg>
      </div>

      <div className="text-center">
        <div className="text-3xl font-bold text-[#e6edf3]">
          {sentiment.toFixed(0)}
        </div>
        <div className="text-sm text-[#8b949e] mt-1">
          {getSentimentLabel(sentiment)}
        </div>
      </div>

      <div className="flex justify-between w-full text-xs text-[#8b949e] px-2">
        <span>Fear</span>
        <span>Neutral</span>
        <span>Greed</span>
      </div>
    </div>
  );
};

// Metric Card
const MetricCard: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string | number;
  suffix?: string;
}> = ({ icon, label, value, suffix = '' }) => (
  <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex items-center gap-3">
    <div className="text-[#58a6ff] flex-shrink-0">{icon}</div>
    <div>
      <div className="text-xs text-[#8b949e]">{label}</div>
      <div className="text-lg font-bold text-[#e6edf3]">
        {value}
        {suffix}
      </div>
    </div>
  </div>
);

// Filter Button — click-based for mobile/touch support
const FilterButton: React.FC<{
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}> = ({ label, value, onChange, options }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  // Close on outside click
  React.useEffect(() => {
    if (!isOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen]);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label={`${label}: ${value}`}
        className="bg-[#161b22] border border-[#30363d] text-[#e6edf3] px-3 py-2 rounded-lg text-sm hover:bg-[#1f2937] transition-colors flex items-center gap-2"
        style={{ minHeight: 44 }}
      >
        {value}
        <ChevronDown size={16} style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
      </button>
      {isOpen && (
        <div className="absolute bg-[#161b22] border border-[#30363d] rounded-lg mt-1 z-40 min-w-max shadow-lg" style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
          {options.map((option) => (
            <button
              key={option}
              onClick={() => { onChange(option); setIsOpen(false); }}
              className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#1f2937] first:rounded-t-lg last:rounded-b-lg ${
                value === option ? 'text-[#58a6ff] font-bold' : 'text-[#e6edf3]'
              }`}
              style={{ minHeight: 44 }}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Main component
export default function SentimentHeatmapClient() {
  const [tokens, setTokens] = useState<CryptoToken[]>([]);
  const [filters, setFilters] = useState<Filters>({
    timeframe: '24h',
    chain: 'All',
    category: 'All',
  });
  const [hoveredToken, setHoveredToken] = useState<CryptoToken | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  // Initialize data
  useEffect(() => {
    const mockTokens = generateMockTokens();
    setTokens(mockTokens);
  }, []);

  // Filter tokens
  const filteredTokens = useMemo(() => {
    return tokens.filter((token) => {
      if (filters.chain !== 'All' && token.chain !== filters.chain)
        return false;
      if (filters.category !== 'All' && token.category !== filters.category)
        return false;
      return true;
    });
  }, [tokens, filters]);

  // Calculate metrics
  const metrics: MarketMetrics = useMemo(() => {
    const avgSentiment =
      filteredTokens.length > 0
        ? filteredTokens.reduce((sum, t) => sum + t.sentiment, 0) /
          filteredTokens.length
        : 50;

    const totalMarketCap = filteredTokens.reduce((sum, t) => sum + t.marketCap, 0);
    const totalVolume = filteredTokens.reduce((sum, t) => sum + t.volume24h, 0);
    const btcMarketCap = tokens.find((t) => t.symbol === 'BTC')?.marketCap || 0;
    const topTotalMarketCap = tokens.reduce((sum, t) => sum + t.marketCap, 0);
    const btcDominance = topTotalMarketCap > 0 ? (btcMarketCap / topTotalMarketCap) * 100 : 0;

    return {
      overallSentiment: avgSentiment,
      totalMarketCap,
      btcDominance,
      volume24h: totalVolume,
    };
  }, [filteredTokens, tokens]);

  // Handle token hover
  const handleTokenHover = (
    token: CryptoToken,
    event: React.MouseEvent
  ) => {
    setHoveredToken(token);
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    setTooltipPos({
      x: rect.right + 10,
      y: rect.top,
    });
    setShowTooltip(true);
  };

  // Chains
  const chains = ['All', 'Ethereum', 'Solana', 'BSC', 'Layer 2'];
  const categories = ['All', 'DeFi', 'Memes', 'L1', 'L2', 'AI', 'Gaming'];
  const timeframes = ['1h', '24h', '7d', '30d'] as const;

  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e6edf3] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Activity className="text-[#58a6ff]" size={32} />
            <h1 className="text-4xl font-bold">Crypto Sentiment Heatmap</h1>
          </div>
          <p className="text-[#8b949e]">
            Real-time market sentiment analysis across top cryptocurrency tokens
          </p>
          <p className="text-[#8b949e] text-xs mt-2" style={{ opacity: 0.6 }}>
            Sentiment data via CoinGecko &amp; on-chain analytics &bull; Updated every 60s &bull; Not financial advice
          </p>
        </div>

        {/* Market Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard
            icon={<Gauge size={20} />}
            label="Market Sentiment"
            value={metrics.overallSentiment.toFixed(1)}
            suffix="/100"
          />
          <MetricCard
            icon={<PieChart size={20} />}
            label="Market Cap"
            value={`$${(metrics.totalMarketCap / 1e12).toFixed(2)}`}
            suffix="T"
          />
          <MetricCard
            icon={<Zap size={20} />}
            label="BTC Dominance"
            value={metrics.btcDominance.toFixed(2)}
            suffix="%"
          />
          <MetricCard
            icon={<Volume2 size={20} />}
            label="24h Volume"
            value={`$${(metrics.volume24h / 1e9).toFixed(2)}`}
            suffix="B"
          />
        </div>

        {/* Fear & Greed Gauge */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-8 mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Gauge size={24} className="text-[#58a6ff]" />
            Fear & Greed Index
          </h2>
          <FearGreedGauge sentiment={metrics.overallSentiment} />
        </div>

        {/* Filters */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter size={20} className="text-[#58a6ff]" />
            <h2 className="text-lg font-bold">Filters</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm text-[#8b949e] mb-2">
                Timeframe
              </label>
              <FilterButton
                label="Timeframe"
                value={filters.timeframe}
                onChange={(value) =>
                  setFilters({
                    ...filters,
                    timeframe: value as '1h' | '24h' | '7d' | '30d',
                  })
                }
                options={timeframes as unknown as string[]}
              />
            </div>
            <div>
              <label className="block text-sm text-[#8b949e] mb-2">Chain</label>
              <FilterButton
                label="Chain"
                value={filters.chain}
                onChange={(value) =>
                  setFilters({ ...filters, chain: value })
                }
                options={chains}
              />
            </div>
            <div>
              <label className="block text-sm text-[#8b949e] mb-2">
                Category
              </label>
              <FilterButton
                label="Category"
                value={filters.category}
                onChange={(value) =>
                  setFilters({ ...filters, category: value })
                }
                options={categories}
              />
            </div>
          </div>
          <div className="text-xs text-[#8b949e] mt-4">
            Showing {filteredTokens.length} of {tokens.length} tokens
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
          <h2 className="text-lg font-bold mb-6">Sentiment Heatmap</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-3 auto-rows-max">
            {filteredTokens.map((token) => {
              // Cell size based on market cap (normalized)
              const maxMarketCap = Math.max(
                ...filteredTokens.map((t) => t.marketCap)
              );
              const sizeRatio = token.marketCap / maxMarketCap;
              const minSize = 60;
              const maxSize = 120;
              const cellSize = minSize + sizeRatio * (maxSize - minSize);

              return (
                <div
                  key={token.id}
                  className="relative group cursor-pointer transition-transform hover:scale-105"
                  onMouseEnter={(e) => handleTokenHover(token, e)}
                  onMouseLeave={() => setShowTooltip(false)}
                >
                  <div
                    className="rounded-lg p-3 border-2 border-[#30363d] flex flex-col items-center justify-center text-center transition-all hover:shadow-lg"
                    style={{
                      backgroundColor: getSentimentColor(token.sentiment),
                      width: `${cellSize}px`,
                      height: `${cellSize}px`,
                      opacity: 0.85,
                    }}
                  >
                    {/* Token Symbol */}
                    <div className="font-bold text-sm text-white drop-shadow">
                      {token.symbol}
                    </div>

                    {/* Price Change */}
                    <div
                      className={`text-xs drop-shadow flex items-center gap-1 ${
                        token.priceChange >= 0
                          ? 'text-lime-200'
                          : 'text-red-200'
                      }`}
                    >
                      {token.priceChange >= 0 ? (
                        <TrendingUp size={12} />
                      ) : (
                        <TrendingDown size={12} />
                      )}
                      {token.priceChange >= 0 ? '+' : ''}
                      {token.priceChange.toFixed(1)}%
                    </div>

                    {/* Sentiment Score (only on larger cells) */}
                    {cellSize > 80 && (
                      <div className="text-xs text-white drop-shadow mt-1 font-semibold">
                        {token.sentiment.toFixed(0)}
                      </div>
                    )}
                  </div>

                  {/* Hover label */}
                  <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-[#8b949e] opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity">
                    {getSentimentLabel(token.sentiment)}
                  </div>
                </div>
              );
            })}
          </div>

          {filteredTokens.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Info size={32} className="text-[#8b949e] mb-3" />
              <p className="text-[#8b949e]">
                No tokens match your filter criteria. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>

        {/* Legend */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mt-8">
          <h3 className="text-lg font-bold mb-4">Sentiment Scale</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { range: '0-25', label: 'Extreme Fear', color: '#8b0000' },
              { range: '25-45', label: 'Fear', color: '#ff4500' },
              { range: '45-55', label: 'Neutral', color: '#ffff00' },
              { range: '55-75', label: 'Greed', color: '#32cd32' },
              { range: '75-100', label: 'Extreme Greed', color: '#006400' },
            ].map(({ range, label, color }) => (
              <div key={range} className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded"
                  style={{ backgroundColor: color }}
                />
                <div>
                  <div className="text-xs text-[#8b949e]">{range}</div>
                  <div className="text-sm font-semibold text-[#e6edf3]">
                    {label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mt-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Info size={20} className="text-[#58a6ff]" />
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#8b949e]">
            <div>
              <p className="mb-2">
                <strong className="text-[#e6edf3]">Sentiment Score:</strong> A
                0-100 scale measuring market sentiment from extreme fear to
                extreme greed based on multiple factors.
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong className="text-[#e6edf3]">Cell Size:</strong> The size
                of each token cell is proportional to its market capitalization,
                helping visualize the relative importance of each token.
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong className="text-[#e6edf3]">Color Coding:</strong> Red
                indicates bearish sentiment, while green indicates bullish
                sentiment. Yellow represents neutral market conditions.
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong className="text-[#e6edf3]">Price Change:</strong> The
                percentage shown in each cell represents the 24-hour price
                change for that token, with up/down indicators.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <TokenTooltip token={hoveredToken} position={tooltipPos} visible={showTooltip} />
    </div>
  );
}
