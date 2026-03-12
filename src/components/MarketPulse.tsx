'use client';

import React, { useState, useEffect } from 'react';

interface Mover {
  symbol: string;
  name: string;
  change: number;
  price: number;
}

interface TrendingToken {
  symbol: string;
  name: string;
  rank: number;
}

interface GasPrice {
  level: string;
  gwei: number;
  color: string;
}

interface MarketData {
  topGainers: Mover[];
  topLosers: Mover[];
  bullishRatio: number;
  volume24h: number;
  trending: TrendingToken[];
  gasPrices: GasPrice[];
  btcDominance: number;
}

const generateMockData = (): MarketData => {
  const generateMovers = (isGainer: boolean): Mover[] => {
    const tokens = [
      { symbol: 'SHIB', name: 'Shiba Inu', basePrice: 0.0000145 },
      { symbol: 'DOGE', name: 'Dogecoin', basePrice: 0.38 },
      { symbol: 'PEPE', name: 'Pepe', basePrice: 0.0000089 },
      { symbol: 'FLOKI', name: 'Floki', basePrice: 0.000082 },
      { symbol: 'BONK', name: 'Bonk', basePrice: 0.000028 },
      { symbol: 'WIF', name: 'dogwifhat', basePrice: 1.25 },
    ];

    return tokens.slice(0, 3).map((token) => ({
      symbol: token.symbol,
      name: token.name,
      change: isGainer ? Math.random() * 45 + 5 : -(Math.random() * 35 + 2),
      price: token.basePrice * (1 + (Math.random() - 0.5) * 0.1),
    }));
  };

  const generateTrending = (): TrendingToken[] => {
    const trendingTokens = [
      { symbol: 'SOL', name: 'Solana', rank: 1 },
      { symbol: 'ARB', name: 'Arbitrum', rank: 2 },
      { symbol: 'OP', name: 'Optimism', rank: 3 },
      { symbol: 'AVAX', name: 'Avalanche', rank: 4 },
      { symbol: 'BLAST', name: 'Blast', rank: 5 },
    ];
    return trendingTokens;
  };

  const generateGasPrices = (): GasPrice[] => [
    {
      level: 'Low',
      gwei: Math.floor(Math.random() * 20 + 15),
      color: '#3fb950',
    },
    {
      level: 'Standard',
      gwei: Math.floor(Math.random() * 35 + 20),
      color: '#d29922',
    },
    {
      level: 'Fast',
      gwei: Math.floor(Math.random() * 50 + 35),
      color: '#f85149',
    },
  ];

  return {
    topGainers: generateMovers(true),
    topLosers: generateMovers(false),
    bullishRatio: Math.random() * 30 + 45,
    volume24h: Math.floor(Math.random() * 50 + 70),
    trending: generateTrending(),
    gasPrices: generateGasPrices(),
    btcDominance: Math.random() * 10 + 45,
  };
};

const TopMovers: React.FC<{ gainers: Mover[]; losers: Mover[] }> = ({
  gainers,
  losers,
}) => (
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <div className="rounded-lg border border-[#30363d] bg-[#1c2330] p-4">
      <h3 className="text-sm font-semibold text-[#e6edf3] mb-3 flex items-center gap-2">
        <span className="text-lg">📈</span> Top Gainers
      </h3>
      <div className="space-y-2">
        {gainers.map((token) => (
          <div
            key={token.symbol}
            className="flex items-center justify-between p-2 rounded hover:bg-[#161b22] transition-colors"
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-[#e6edf3]">
                {token.symbol}
              </span>
              <span className="text-xs text-[#8b949e]">{token.name}</span>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              <span className="text-xs text-[#8b949e]">${token.price.toFixed(6)}</span>
              <span className="text-sm font-semibold text-[#3fb950]">
                +{token.change.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="rounded-lg border border-[#30363d] bg-[#1c2330] p-4">
      <h3 className="text-sm font-semibold text-[#e6edf3] mb-3 flex items-center gap-2">
        <span className="text-lg">📉</span> Top Losers
      </h3>
      <div className="space-y-2">
        {losers.map((token) => (
          <div
            key={token.symbol}
            className="flex items-center justify-between p-2 rounded hover:bg-[#161b22] transition-colors"
          >
            <div className="flex flex-col gap-1">
              <span className="text-sm font-medium text-[#e6edf3]">
                {token.symbol}
              </span>
              <span className="text-xs text-[#8b949e]">{token.name}</span>
            </div>
            <div className="text-right flex flex-col items-end gap-1">
              <span className="text-xs text-[#8b949e]">${token.price.toFixed(6)}</span>
              <span className="text-sm font-semibold text-[#f85149]">
                {token.change.toFixed(2)}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const MarketSentiment: React.FC<{ bullishRatio: number }> = ({
  bullishRatio,
}) => {
  const bearishRatio = 100 - bullishRatio;

  return (
    <div className="rounded-lg border border-[#30363d] bg-[#1c2330] p-4">
      <h3 className="text-sm font-semibold text-[#e6edf3] mb-4 flex items-center gap-2">
        <span className="text-lg">📊</span> Market Sentiment
      </h3>
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs text-[#8b949e] min-w-fit">Bearish</span>
        <div className="flex-1 h-3 rounded-full overflow-hidden bg-[#161b22] relative">
          <div
            className="h-full bg-gradient-to-r from-[#3fb950] to-[#d29922] transition-all duration-500"
            style={{ width: `${bullishRatio}%` }}
          />
        </div>
        <span className="text-xs text-[#8b949e] min-w-fit">Bullish</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-center flex-1">
          <div className="text-xs text-[#8b949e] mb-1">Bearish</div>
          <div className="text-sm font-bold text-[#f85149]">
            {bearishRatio.toFixed(1)}%
          </div>
        </div>
        <div className="w-px h-6 bg-[#30363d]" />
        <div className="text-center flex-1">
          <div className="text-xs text-[#8b949e] mb-1">Bullish</div>
          <div className="text-sm font-bold text-[#3fb950]">
            {bullishRatio.toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
};

const Volume24h: React.FC<{ volume: number }> = ({ volume }) => {
  const bars = Array.from({ length: 12 }, () => Math.random() * 100);
  const maxBar = Math.max(...bars);

  return (
    <div className="rounded-lg border border-[#30363d] bg-[#1c2330] p-4">
      <h3 className="text-sm font-semibold text-[#e6edf3] mb-3 flex items-center gap-2">
        <span className="text-lg">📈</span> 24h Volume
      </h3>
      <div className="text-2xl font-bold text-[#58a6ff] mb-4">
        ${volume.toFixed(0)}B
      </div>
      <div className="flex items-end gap-1 h-12">
        {bars.map((bar, idx) => (
          <div
            key={idx}
            className="flex-1 bg-gradient-to-t from-[#58a6ff] to-[#79c0ff] rounded-t opacity-70 hover:opacity-100 transition-opacity"
            style={{
              height: `${(bar / maxBar) * 100}%`,
              animation: `pulse 2s ease-in-out infinite`,
              animationDelay: `${idx * 0.1}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Trending: React.FC<{ tokens: TrendingToken[] }> = ({ tokens }) => (
  <div className="rounded-lg border border-[#30363d] bg-[#1c2330] p-4">
    <h3 className="text-sm font-semibold text-[#e6edf3] mb-3 flex items-center gap-2">
      <span className="text-lg">🔥</span> Trending Now
    </h3>
    <div className="space-y-2">
      {tokens.map((token) => (
        <div
          key={token.symbol}
          className="flex items-center gap-3 p-2 rounded hover:bg-[#161b22] transition-colors"
        >
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gradient-to-br from-[#58a6ff] to-[#d29922] text-white text-xs font-bold">
            {token.rank}
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium text-[#e6edf3]">
              {token.symbol}
            </div>
            <div className="text-xs text-[#8b949e]">{token.name}</div>
          </div>
          <span className="text-lg">🔥</span>
        </div>
      ))}
    </div>
  </div>
);

const GasPrices: React.FC<{ prices: GasPrice[] }> = ({ prices }) => (
  <div className="rounded-lg border border-[#30363d] bg-[#1c2330] p-4">
    <h3 className="text-sm font-semibold text-[#e6edf3] mb-3 flex items-center gap-2">
      <span className="text-lg">⛽</span> ETH Gas
    </h3>
    <div className="space-y-2">
      {prices.map((price) => (
        <div
          key={price.level}
          className="flex items-center justify-between p-2 rounded hover:bg-[#161b22] transition-colors"
        >
          <span className="text-sm text-[#8b949e]">{price.level}</span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: price.color }} />
            <span className="text-sm font-semibold text-[#e6edf3]">
              {price.gwei} Gwei
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const BTCDominance: React.FC<{ dominance: number }> = ({ dominance }) => {
  const bgAngle = (dominance / 100) * 360;
  const complementary = 100 - dominance;

  return (
    <div className="rounded-lg border border-[#30363d] bg-[#1c2330] p-4">
      <h3 className="text-sm font-semibold text-[#e6edf3] mb-4 flex items-center gap-2">
        <span className="text-lg">₿</span> BTC Dominance
      </h3>
      <div className="flex items-center gap-4">
        <div className="relative w-24 h-24">
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full transform -rotate-90"
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#30363d"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#f85149"
              strokeWidth="8"
              strokeDasharray={`${(dominance / 100) * 282.7} 282.7`}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-lg font-bold text-[#e6edf3]">
                {dominance.toFixed(1)}%
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <div className="mb-3">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-[#f85149]" />
              <span className="text-xs text-[#8b949e]">Bitcoin</span>
            </div>
            <div className="text-sm font-semibold text-[#e6edf3]">
              {dominance.toFixed(1)}%
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-[#58a6ff]" />
              <span className="text-xs text-[#8b949e]">Altcoins</span>
            </div>
            <div className="text-sm font-semibold text-[#e6edf3]">
              {complementary.toFixed(1)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function MarketPulse() {
  const [data, setData] = useState<MarketData>(generateMockData());

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateMockData());
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#161b22] p-4 md:p-6">
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-[#e6edf3] flex items-center gap-2">
            <span className="text-4xl">📡</span> Market Pulse
          </h1>
          <p className="text-sm text-[#8b949e] mt-2">
            Real-time crypto market insights • Updates every 30s
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <div className="lg:col-span-2">
            <TopMovers gainers={data.topGainers} losers={data.topLosers} />
          </div>
          <div>
            <MarketSentiment bullishRatio={data.bullishRatio} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <Volume24h volume={data.volume24h} />
          <Trending tokens={data.trending} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <GasPrices prices={data.gasPrices} />
          <BTCDominance dominance={data.btcDominance} />
        </div>
      </div>
    </div>
  );
}
