'use client';

import React, { useState, useMemo } from 'react';
import { TrendingUp, TrendingDown, Filter } from 'lucide-react';

interface TokenData {
  ticker: string;
  name: string;
  sector: 'L1' | 'L2' | 'DeFi' | 'NFT/Gaming' | 'Meme';
  price: number;
  marketCap: number;
  volume24h: number;
  change24h: number;
  change7d: number;
}

type TimeRange = '1h' | '24h' | '7d' | '30d';
type SortBy = 'Market Cap' | 'Volume' | 'Change%';
type Sector = 'All' | 'L1' | 'L2' | 'DeFi' | 'NFT/Gaming' | 'Meme';

const mockTokens: TokenData[] = [
  // L1
  { ticker: 'BTC', name: 'Bitcoin', sector: 'L1', price: 42350, marketCap: 830000000000, volume24h: 28000000000, change24h: 2.4, change7d: 5.2 },
  { ticker: 'ETH', name: 'Ethereum', sector: 'L1', price: 2280, marketCap: 274000000000, volume24h: 12500000000, change24h: 1.8, change7d: 3.1 },
  { ticker: 'SOL', name: 'Solana', sector: 'L1', price: 178, marketCap: 76000000000, volume24h: 2800000000, change24h: -1.2, change7d: -2.5 },
  { ticker: 'AVAX', name: 'Avalanche', sector: 'L1', price: 38.5, marketCap: 14200000000, volume24h: 450000000, change24h: -0.8, change7d: 1.3 },
  { ticker: 'ADA', name: 'Cardano', sector: 'L1', price: 0.98, marketCap: 35500000000, volume24h: 680000000, change24h: 0.5, change7d: -1.2 },
  { ticker: 'DOT', name: 'Polkadot', sector: 'L1', price: 8.42, marketCap: 12300000000, volume24h: 380000000, change24h: -2.1, change7d: -4.3 },
  { ticker: 'ATOM', name: 'Cosmos', sector: 'L1', price: 9.15, marketCap: 8900000000, volume24h: 320000000, change24h: 1.5, change7d: 2.8 },
  { ticker: 'NEAR', name: 'NEAR Protocol', sector: 'L1', price: 7.85, marketCap: 8200000000, volume24h: 280000000, change24h: -3.2, change7d: -6.1 },
  { ticker: 'SUI', name: 'Sui', sector: 'L1', price: 3.45, marketCap: 9800000000, volume24h: 420000000, change24h: 4.7, change7d: 8.2 },
  { ticker: 'APT', name: 'Aptos', sector: 'L1', price: 8.92, marketCap: 9100000000, volume24h: 350000000, change24h: 2.1, change7d: 3.5 },
  // L2
  { ticker: 'ARB', name: 'Arbitrum', sector: 'L2', price: 1.24, marketCap: 5800000000, volume24h: 450000000, change24h: -2.8, change7d: -5.2 },
  { ticker: 'OP', name: 'Optimism', sector: 'L2', price: 2.85, marketCap: 2100000000, volume24h: 180000000, change24h: 1.2, change7d: 2.4 },
  { ticker: 'MATIC', name: 'Polygon', sector: 'L2', price: 0.62, marketCap: 6900000000, volume24h: 520000000, change24h: -0.9, change7d: 0.3 },
  { ticker: 'BASE', name: 'Base', sector: 'L2', price: 0.48, marketCap: 2300000000, volume24h: 145000000, change24h: 5.3, change7d: 11.2 },
  { ticker: 'MANTA', name: 'Manta Network', sector: 'L2', price: 1.65, marketCap: 495000000, volume24h: 95000000, change24h: -4.5, change7d: -8.1 },
  { ticker: 'BLAST', name: 'Blast', sector: 'L2', price: 0.195, marketCap: 1850000000, volume24h: 125000000, change24h: 3.2, change7d: 6.8 },
  // DeFi
  { ticker: 'UNI', name: 'Uniswap', sector: 'DeFi', price: 9.45, marketCap: 8400000000, volume24h: 520000000, change24h: 0.8, change7d: 2.1 },
  { ticker: 'AAVE', name: 'Aave', sector: 'DeFi', price: 645, marketCap: 9200000000, volume24h: 480000000, change24h: 3.2, change7d: 5.8 },
  { ticker: 'MKR', name: 'Maker', sector: 'DeFi', price: 2850, marketCap: 2950000000, volume24h: 185000000, change24h: -1.5, change7d: -2.3 },
  { ticker: 'LDO', name: 'Lido', sector: 'DeFi', price: 3.85, marketCap: 4100000000, volume24h: 285000000, change24h: 2.9, change7d: 4.2 },
  { ticker: 'CRV', name: 'Curve', sector: 'DeFi', price: 0.825, marketCap: 2850000000, volume24h: 195000000, change24h: -3.1, change7d: -5.7 },
  { ticker: 'SNX', name: 'Synthetix', sector: 'DeFi', price: 3.2, marketCap: 950000000, volume24h: 75000000, change24h: 1.4, change7d: 3.6 },
  // NFT/Gaming
  { ticker: 'AXS', name: 'Axie Infinity', sector: 'NFT/Gaming', price: 8.25, marketCap: 2800000000, volume24h: 145000000, change24h: -5.2, change7d: -9.8 },
  { ticker: 'SAND', name: 'The Sandbox', sector: 'NFT/Gaming', price: 0.65, marketCap: 2100000000, volume24h: 105000000, change24h: -2.1, change7d: -3.5 },
  { ticker: 'MANA', name: 'Decentraland', sector: 'NFT/Gaming', price: 0.52, marketCap: 1050000000, volume24h: 58000000, change24h: -4.3, change7d: -7.2 },
  { ticker: 'IMX', name: 'Immutable', sector: 'NFT/Gaming', price: 2.15, marketCap: 650000000, volume24h: 38000000, change24h: 3.5, change7d: 6.1 },
  { ticker: 'GALA', name: 'Gala', sector: 'NFT/Gaming', price: 0.08, marketCap: 725000000, volume24h: 42000000, change24h: -6.8, change7d: -12.3 },
  { ticker: 'ENJ', name: 'Enjin', sector: 'NFT/Gaming', price: 0.32, marketCap: 350000000, volume24h: 22000000, change24h: 1.2, change7d: 2.8 },
  // Meme
  { ticker: 'DOGE', name: 'Dogecoin', sector: 'Meme', price: 0.38, marketCap: 56000000000, volume24h: 3200000000, change24h: 7.2, change7d: 12.5 },
  { ticker: 'SHIB', name: 'Shiba Inu', sector: 'Meme', price: 0.0000289, marketCap: 17500000000, volume24h: 980000000, change24h: -8.5, change7d: -15.2 },
];

const getColorClass = (change: number): string => {
  if (change <= -10) return 'bg-red-950 hover:bg-red-900';
  if (change < -5) return 'bg-red-900 hover:bg-red-800';
  if (change < -2) return 'bg-red-700 hover:bg-red-600';
  if (change <= 2 && change >= -2) return 'bg-gray-700 hover:bg-gray-600';
  if (change < 5) return 'bg-green-700 hover:bg-green-600';
  if (change < 10) return 'bg-green-600 hover:bg-green-500';
  return 'bg-green-700 hover:bg-green-600';
};

const getMarketCapSpan = (marketCap: number, maxCap: number): number => {
  const ratio = marketCap / maxCap;
  if (ratio > 0.15) return 2;
  if (ratio > 0.08) return 2;
  return 1;
};

const MarketHeatmap: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('24h');
  const [selectedSector, setSelectedSector] = useState<Sector>('All');
  const [sortBy, setSortBy] = useState<SortBy>('Market Cap');
  const [expandedToken, setExpandedToken] = useState<string | null>(null);

  const filteredTokens = useMemo(() => {
    let filtered = mockTokens;
    if (selectedSector !== 'All') {
      filtered = filtered.filter(t => t.sector === selectedSector);
    }

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'Market Cap':
          return b.marketCap - a.marketCap;
        case 'Volume':
          return b.volume24h - a.volume24h;
        case 'Change%':
          return b.change24h - a.change24h;
        default:
          return 0;
      }
    });
  }, [selectedSector, sortBy]);

  const maxMarketCap = Math.max(...filteredTokens.map(t => t.marketCap));
  const btcDominance = (mockTokens[0].marketCap / mockTokens.reduce((sum, t) => sum + t.marketCap, 0)) * 100;
  const totalMarketCap = mockTokens.reduce((sum, t) => sum + t.marketCap, 0);
  const total24hVolume = mockTokens.reduce((sum, t) => sum + t.volume24h, 0);
  const gainers = mockTokens.filter(t => t.change24h > 0).length;
  const losers = mockTokens.filter(t => t.change24h < 0).length;

  const getChange = (token: TokenData): number => {
    if (timeRange === '1h') return token.change24h * 0.25;
    if (timeRange === '24h') return token.change24h;
    if (timeRange === '7d') return token.change7d;
    return token.change7d * 1.2;
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-950 text-white p-6 rounded-lg">
      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-gray-400 text-sm">BTC Dominance</p>
          <p className="text-2xl font-bold">{btcDominance.toFixed(1)}%</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Total Market Cap</p>
          <p className="text-2xl font-bold">${(totalMarketCap / 1000000000000).toFixed(2)}T</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-gray-400 text-sm">24h Volume</p>
          <p className="text-2xl font-bold">${(total24hVolume / 1000000000).toFixed(1)}B</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4">
          <p className="text-gray-400 text-sm">Gainers / Losers</p>
          <p className="text-2xl font-bold"><span className="text-green-400">{gainers}</span> / <span className="text-red-400">{losers}</span></p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-6 mb-6 flex-wrap">
        <div className="flex gap-2">
          <span className="text-sm text-gray-400 self-center">Time Range:</span>
          {(['1h', '24h', '7d', '30d'] as TimeRange[]).map(range => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                timeRange === range
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {range}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <Filter className="w-4 h-4 self-center text-gray-400" />
          <span className="text-sm text-gray-400 self-center">Sector:</span>
          {(['All', 'L1', 'L2', 'DeFi', 'NFT/Gaming', 'Meme'] as Sector[]).map(sector => (
            <button
              key={sector}
              onClick={() => setSelectedSector(sector)}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                selectedSector === sector
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {sector}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <span className="text-sm text-gray-400 self-center">Sort by:</span>
          {(['Market Cap', 'Volume', 'Change%'] as SortBy[]).map(sort => (
            <button
              key={sort}
              onClick={() => setSortBy(sort)}
              className={`px-3 py-1 rounded text-sm font-medium transition ${
                sortBy === sort
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {sort}
            </button>
          ))}
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="grid grid-cols-8 gap-2 bg-gray-800 p-4 rounded-lg max-h-[600px] overflow-y-auto">
        {filteredTokens.map(token => {
          const change = getChange(token);
          const span = getMarketCapSpan(token.marketCap, maxMarketCap);
          const isExpanded = expandedToken === token.ticker;

          return (
            <div
              key={token.ticker}
              className={`${getColorClass(change)} rounded-lg p-3 cursor-pointer transition-all duration-200 border border-gray-600 hover:border-gray-400 ${
                span > 1 ? `col-span-${span}` : ''
              } ${isExpanded ? 'ring-2 ring-yellow-400' : ''}`}
              onClick={() => setExpandedToken(isExpanded ? null : token.ticker)}
              style={{
                gridColumn: span > 1 ? `span ${span}` : 'auto',
                minHeight: '80px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                <p className="font-bold text-sm">{token.ticker}</p>
                <p className="text-xs text-gray-200">${token.price.toFixed(4)}</p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">{change > 0 ? '+' : ''}{change.toFixed(1)}%</span>
                {change > 0 ? (
                  <TrendingUp className="w-3 h-3 text-green-300" />
                ) : (
                  <TrendingDown className="w-3 h-3 text-red-300" />
                )}
              </div>

              {/* Detail Tooltip */}
              {isExpanded && (
                <div className="absolute z-50 bg-gray-900 border border-gray-600 rounded-lg p-4 shadow-lg mt-2 text-xs min-w-max">
                  <p className="font-bold mb-2">{token.name} ({token.ticker})</p>
                  <p className="text-gray-300">Market Cap: ${(token.marketCap / 1000000000).toFixed(2)}B</p>
                  <p className="text-gray-300">24h Volume: ${(token.volume24h / 1000000000).toFixed(2)}B</p>
                  <p className="text-gray-300">24h Change: {token.change24h > 0 ? '+' : ''}{token.change24h.toFixed(2)}%</p>
                  <p className="text-gray-300">7d Change: {token.change7d > 0 ? '+' : ''}{token.change7d.toFixed(2)}%</p>
                  <p className="text-gray-300 mt-2">Sector: {token.sector}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MarketHeatmap;
