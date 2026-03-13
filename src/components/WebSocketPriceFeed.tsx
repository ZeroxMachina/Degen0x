'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

/**
 * WebSocketPriceFeed — Sprint 19
 * Real-time crypto prices via Binance WebSocket streams.
 * Falls back to simulated data if WS connection fails.
 */

interface WsCoin {
  symbol: string;
  name: string;
  pair: string;   // Binance pair e.g. "btcusdt"
  price: number;
  prevPrice: number;
  change24h: number;
  high24h: number;
  low24h: number;
  volume24h: number;
  sparkline: number[];
  lastUpdate: number;
}

const COIN_CONFIG = [
  { symbol: 'BTC', name: 'Bitcoin', pair: 'btcusdt' },
  { symbol: 'ETH', name: 'Ethereum', pair: 'ethusdt' },
  { symbol: 'SOL', name: 'Solana', pair: 'solusdt' },
  { symbol: 'BNB', name: 'BNB', pair: 'bnbusdt' },
  { symbol: 'XRP', name: 'XRP', pair: 'xrpusdt' },
  { symbol: 'ADA', name: 'Cardano', pair: 'adausdt' },
  { symbol: 'AVAX', name: 'Avalanche', pair: 'avaxusdt' },
  { symbol: 'DOGE', name: 'Dogecoin', pair: 'dogeusdt' },
  { symbol: 'LINK', name: 'Chainlink', pair: 'linkusdt' },
  { symbol: 'DOT', name: 'Polkadot', pair: 'dotusdt' },
  { symbol: 'MATIC', name: 'Polygon', pair: 'maticusdt' },
  { symbol: 'UNI', name: 'Uniswap', pair: 'uniusdt' },
];

const FALLBACK_PRICES: Record<string, number> = {
  btcusdt: 87250, ethusdt: 4120, solusdt: 178, bnbusdt: 645,
  xrpusdt: 2.65, adausdt: 0.82, avaxusdt: 42.5, dogeusdt: 0.18,
  linkusdt: 32.5, dotusdt: 8.9, maticusdt: 0.58, uniusdt: 14.2,
};

type ConnectionStatus = 'connecting' | 'connected' | 'fallback';

function formatPrice(price: number): string {
  if (price >= 1000) return price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (price >= 1) return price.toFixed(2);
  return price.toFixed(4);
}

function formatVolume(vol: number): string {
  if (vol >= 1e9) return `$${(vol / 1e9).toFixed(1)}B`;
  if (vol >= 1e6) return `$${(vol / 1e6).toFixed(1)}M`;
  if (vol >= 1e3) return `$${(vol / 1e3).toFixed(0)}K`;
  return `$${vol.toFixed(0)}`;
}

function MiniChart({ data, positive }: { data: number[]; positive: boolean }) {
  if (data.length < 2) return null;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const h = 36;
  const w = 100;
  const points = data
    .map((v, i) => `${(i / (data.length - 1)) * w},${h - ((v - min) / range) * (h - 4) - 2}`)
    .join(' ');

  const color = positive ? '#3fb950' : '#f85149';

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id={`ws-grad-${positive ? 'up' : 'dn'}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.25" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        fill={`url(#ws-grad-${positive ? 'up' : 'dn'})`}
        points={`0,${h} ${points} ${w},${h}`}
      />
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        points={points}
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function WebSocketPriceFeed() {
  const [coins, setCoins] = useState<Map<string, WsCoin>>(new Map());
  const [status, setStatus] = useState<ConnectionStatus>('connecting');
  const [flashMap, setFlashMap] = useState<Map<string, 'up' | 'down'>>(new Map());
  const wsRef = useRef<WebSocket | null>(null);
  const reconnectRef = useRef<NodeJS.Timeout | null>(null);
  const fallbackRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize coins
  useEffect(() => {
    const initial = new Map<string, WsCoin>();
    COIN_CONFIG.forEach(c => {
      const basePrice = FALLBACK_PRICES[c.pair] || 100;
      initial.set(c.pair, {
        symbol: c.symbol,
        name: c.name,
        pair: c.pair,
        price: basePrice,
        prevPrice: basePrice,
        change24h: 0,
        high24h: basePrice * 1.02,
        low24h: basePrice * 0.98,
        volume24h: 0,
        sparkline: Array(20).fill(basePrice),
        lastUpdate: Date.now(),
      });
    });
    setCoins(initial);
  }, []);

  const updateCoin = useCallback((pair: string, newPrice: number, change24h?: number, high?: number, low?: number, vol?: number) => {
    setCoins(prev => {
      const newMap = new Map(prev);
      const existing = newMap.get(pair);
      if (!existing) return prev;

      const direction: 'up' | 'down' = newPrice >= existing.price ? 'up' : 'down';

      setFlashMap(fm => {
        const newFm = new Map(fm);
        newFm.set(pair, direction);
        return newFm;
      });

      newMap.set(pair, {
        ...existing,
        prevPrice: existing.price,
        price: newPrice,
        change24h: change24h ?? existing.change24h,
        high24h: high ?? existing.high24h,
        low24h: low ?? existing.low24h,
        volume24h: vol ?? existing.volume24h,
        sparkline: [...existing.sparkline.slice(1), newPrice],
        lastUpdate: Date.now(),
      });
      return newMap;
    });

    // Clear flash after animation
    setTimeout(() => {
      setFlashMap(fm => {
        const newFm = new Map(fm);
        newFm.delete(pair);
        return newFm;
      });
    }, 600);
  }, []);

  // WebSocket connection
  useEffect(() => {
    const streams = COIN_CONFIG.map(c => `${c.pair}@ticker`).join('/');
    const wsUrl = `wss://stream.binance.com:9443/ws/${streams}`;

    let reconnectAttempts = 0;
    const maxReconnects = 3;

    function connect() {
      try {
        const ws = new WebSocket(wsUrl);
        wsRef.current = ws;

        ws.onopen = () => {
          setStatus('connected');
          reconnectAttempts = 0;
        };

        ws.onmessage = (event) => {
          try {
            const data = JSON.parse(event.data);
            if (data.s && data.c) {
              const pair = data.s.toLowerCase();
              const price = parseFloat(data.c);
              const change = parseFloat(data.P || '0');
              const high = parseFloat(data.h || '0');
              const low = parseFloat(data.l || '0');
              const vol = parseFloat(data.q || '0'); // quote volume
              updateCoin(pair, price, change, high, low, vol);
            }
          } catch {
            // ignore parse errors
          }
        };

        ws.onerror = () => {
          ws.close();
        };

        ws.onclose = () => {
          if (reconnectAttempts < maxReconnects) {
            reconnectAttempts++;
            reconnectRef.current = setTimeout(connect, 2000 * reconnectAttempts);
          } else {
            setStatus('fallback');
            startFallbackSimulation();
          }
        };
      } catch {
        setStatus('fallback');
        startFallbackSimulation();
      }
    }

    function startFallbackSimulation() {
      fallbackRef.current = setInterval(() => {
        COIN_CONFIG.forEach(c => {
          const base = FALLBACK_PRICES[c.pair] || 100;
          const volatility = c.symbol === 'BTC' ? 0.001 : c.symbol === 'ETH' ? 0.0015 : 0.002;
          const change = (Math.random() - 0.48) * volatility * base;
          setCoins(prev => {
            const existing = prev.get(c.pair);
            if (!existing) return prev;
            const newPrice = Math.max(existing.price + change, base * 0.9);
            updateCoin(c.pair, parseFloat(newPrice.toFixed(existing.price < 1 ? 5 : 2)));
            return prev;
          });
        });
      }, 2500);
    }

    connect();

    return () => {
      if (wsRef.current) wsRef.current.close();
      if (reconnectRef.current) clearTimeout(reconnectRef.current);
      if (fallbackRef.current) clearInterval(fallbackRef.current);
    };
  }, [updateCoin]);

  const coinList = Array.from(coins.values());

  return (
    <section style={{ width: '100%' }}>
      {/* Status indicator */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: '16px', padding: '0 4px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{
            fontSize: '16px', fontWeight: '700', color: '#e6edf3',
          }}>
            Live Prices
          </span>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '4px',
            fontSize: '11px', fontWeight: '600',
            padding: '2px 8px', borderRadius: '4px',
            background: status === 'connected' ? '#3fb95020' : status === 'connecting' ? '#d2992220' : '#f0883e20',
            color: status === 'connected' ? '#3fb950' : status === 'connecting' ? '#d29922' : '#f0883e',
          }}>
            <span style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: status === 'connected' ? '#3fb950' : status === 'connecting' ? '#d29922' : '#f0883e',
              animation: status === 'connecting' ? 'pulse 1.5s infinite' : 'none',
            }} />
            {status === 'connected' ? 'LIVE' : status === 'connecting' ? 'CONNECTING' : 'SIMULATED'}
          </span>
        </div>
        <span style={{ fontSize: '11px', color: '#8b949e' }}>
          Powered by Binance Stream
        </span>
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @keyframes flashUp { 0%{background:#3fb95025} 100%{background:transparent} }
        @keyframes flashDown { 0%{background:#f8514925} 100%{background:transparent} }
      `}</style>

      {/* Price Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
        gap: '12px',
      }}>
        {coinList.map((coin) => {
          const isPositive = coin.change24h >= 0;
          const flash = flashMap.get(coin.pair);

          return (
            <div key={coin.pair} style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '10px',
              padding: '16px',
              transition: 'border-color 0.2s',
              animation: flash ? (flash === 'up' ? 'flashUp 0.6s ease-out' : 'flashDown 0.6s ease-out') : 'none',
              cursor: 'pointer',
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#6366f180'; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLDivElement).style.borderColor = '#30363d'; }}
            >
              {/* Top row: symbol + change */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{
                    fontSize: '15px', fontWeight: '700', color: '#e6edf3',
                  }}>{coin.symbol}</span>
                  <span style={{ fontSize: '12px', color: '#8b949e' }}>{coin.name}</span>
                </div>
                <span style={{
                  fontSize: '12px', fontWeight: '700',
                  color: isPositive ? '#3fb950' : '#f85149',
                  display: 'flex', alignItems: 'center', gap: '2px',
                }}>
                  {isPositive ? '▲' : '▼'} {Math.abs(coin.change24h).toFixed(2)}%
                </span>
              </div>

              {/* Price */}
              <div style={{
                fontSize: '22px', fontWeight: '800', color: '#e6edf3',
                fontFamily: "'JetBrains Mono', monospace",
                marginBottom: '10px',
                transition: 'color 0.2s',
                ...(flash ? { color: flash === 'up' ? '#3fb950' : '#f85149' } : {}),
              }}>
                ${formatPrice(coin.price)}
              </div>

              {/* Sparkline */}
              <div style={{ marginBottom: '8px' }}>
                <MiniChart data={coin.sparkline} positive={isPositive} />
              </div>

              {/* Bottom stats */}
              <div style={{
                display: 'flex', justifyContent: 'space-between',
                fontSize: '10px', color: '#8b949e',
                borderTop: '1px solid #30363d20', paddingTop: '8px',
              }}>
                <span>H: ${formatPrice(coin.high24h)}</span>
                <span>L: ${formatPrice(coin.low24h)}</span>
                {coin.volume24h > 0 && <span>Vol: {formatVolume(coin.volume24h)}</span>}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
