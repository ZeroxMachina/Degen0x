'use client';

import { useState, useEffect, useMemo } from 'react';

interface CoinPulse {
  id: string;
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  sparkline: number[];
}

const FALLBACK_DATA: CoinPulse[] = [
  { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', price: 84250, change24h: 2.4, sparkline: [80000,81000,82500,81800,83000,84000,84250] },
  { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', price: 3920, change24h: 3.1, sparkline: [3700,3750,3800,3780,3850,3900,3920] },
  { id: 'solana', symbol: 'SOL', name: 'Solana', price: 168, change24h: -1.2, sparkline: [175,172,170,168,167,169,168] },
  { id: 'cardano', symbol: 'ADA', name: 'Cardano', price: 0.78, change24h: 4.5, sparkline: [0.72,0.73,0.74,0.75,0.76,0.77,0.78] },
];

function MiniSparkline({ data, positive }: { data: number[]; positive: boolean }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const h = 32;
  const w = 80;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * h}`)
    .join(' ');

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <defs>
        <linearGradient id={`grad-${positive ? 'up' : 'down'}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={positive ? '#3fb950' : '#f85149'} stopOpacity="0.3" />
          <stop offset="100%" stopColor={positive ? '#3fb950' : '#f85149'} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke={positive ? '#3fb950' : '#f85149'}
        strokeWidth="1.5"
        points={points}
        strokeLinejoin="round"
      />
      <polygon
        fill={`url(#grad-${positive ? 'up' : 'down'})`}
        points={`0,${h} ${points} ${w},${h}`}
      />
    </svg>
  );
}

export default function MarketPulseHero() {
  const [coins, setCoins] = useState<CoinPulse[]>(FALLBACK_DATA);
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    async function fetchPrices() {
      try {
        const res = await fetch('/api/prices?ids=bitcoin,ethereum,solana,cardano&vs_currencies=usd&include_24hr_change=true&include_sparkline=true', {
          next: { revalidate: 120 },
        });
        if (res.ok) {
          const data = await res.json();
          if (data.bitcoin) {
            setCoins([
              { id: 'bitcoin', symbol: 'BTC', name: 'Bitcoin', price: data.bitcoin.usd, change24h: data.bitcoin.usd_24h_change || 0, sparkline: data.bitcoin.sparkline_in_7d?.price?.slice(-7) || FALLBACK_DATA[0].sparkline },
              { id: 'ethereum', symbol: 'ETH', name: 'Ethereum', price: data.ethereum.usd, change24h: data.ethereum.usd_24h_change || 0, sparkline: data.ethereum.sparkline_in_7d?.price?.slice(-7) || FALLBACK_DATA[1].sparkline },
              { id: 'solana', symbol: 'SOL', name: 'Solana', price: data.solana.usd, change24h: data.solana.usd_24h_change || 0, sparkline: data.solana.sparkline_in_7d?.price?.slice(-7) || FALLBACK_DATA[2].sparkline },
              { id: 'cardano', symbol: 'ADA', name: 'Cardano', price: data.cardano.usd, change24h: data.cardano.usd_24h_change || 0, sparkline: data.cardano.sparkline_in_7d?.price?.slice(-7) || FALLBACK_DATA[3].sparkline },
            ]);
          }
        }
      } catch {
        // Keep fallback data
      }
    }
    fetchPrices();
  }, []);

  const totalMarketChange = useMemo(() => {
    const avg = coins.reduce((sum, c) => sum + c.change24h, 0) / coins.length;
    return avg;
  }, [coins]);

  const sentiment = totalMarketChange > 1 ? 'Bullish' : totalMarketChange < -1 ? 'Bearish' : 'Neutral';
  const sentimentColor = totalMarketChange > 1 ? '#3fb950' : totalMarketChange < -1 ? '#f85149' : '#d29922';

  return (
    <div className="w-full rounded-xl overflow-hidden" style={{ background: '#0d1117', border: '1px solid #1c2330' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-[#1c2330]">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#3fb950' }} />
          <span className="text-xs font-semibold text-[#8b949e] uppercase tracking-wider">Market Pulse</span>
        </div>
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-bold px-2 py-0.5 rounded"
            style={{ background: `${sentimentColor}15`, color: sentimentColor, border: `1px solid ${sentimentColor}30` }}
          >
            {sentiment}
          </span>
          <span className="text-xs text-[#484f58] font-mono">{currentTime}</span>
        </div>
      </div>

      {/* Coin Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1c2330]">
        {coins.map((coin) => (
          <div key={coin.id} className="p-3 hover:bg-[#161b2215] transition-colors">
            <div className="flex items-center justify-between mb-1">
              <div>
                <span className="text-sm font-bold text-[#e6edf3]">{coin.symbol}</span>
                <span className="text-[10px] text-[#484f58] ml-1.5">{coin.name}</span>
              </div>
              <span
                className="text-xs font-semibold"
                style={{ color: coin.change24h >= 0 ? '#3fb950' : '#f85149' }}
              >
                {coin.change24h >= 0 ? '+' : ''}{coin.change24h.toFixed(1)}%
              </span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-lg font-bold text-[#e6edf3]">
                ${coin.price >= 1 ? coin.price.toLocaleString(undefined, { maximumFractionDigits: 0 }) : coin.price.toFixed(2)}
              </span>
              <MiniSparkline data={coin.sparkline} positive={coin.change24h >= 0} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
