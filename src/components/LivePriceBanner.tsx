"use client";

import { useState, useEffect, useRef, useCallback } from "react";

/**
 * LivePriceBanner — Sprint 49
 * WebSocket-powered scrolling price ticker banner.
 * Integrates Binance multi-stream; falls back to simulated data on error.
 * Designed as a sticky top strip above/below the main header.
 */

interface Coin {
  symbol: string;
  name: string;
  pair: string;
  price: number;
  prev: number;
  change24h: number;
  flash: "up" | "down" | null;
}

const COINS: Omit<Coin, "price" | "prev" | "change24h" | "flash">[] = [
  { symbol: "BTC",  name: "Bitcoin",   pair: "btcusdt"  },
  { symbol: "ETH",  name: "Ethereum",  pair: "ethusdt"  },
  { symbol: "SOL",  name: "Solana",    pair: "solusdt"  },
  { symbol: "BNB",  name: "BNB",       pair: "bnbusdt"  },
  { symbol: "XRP",  name: "XRP",       pair: "xrpusdt"  },
  { symbol: "ADA",  name: "Cardano",   pair: "adausdt"  },
  { symbol: "AVAX", name: "Avalanche", pair: "avaxusdt" },
  { symbol: "DOGE", name: "Dogecoin",  pair: "dogeusdt" },
  { symbol: "LINK", name: "Chainlink", pair: "linkusdt" },
  { symbol: "DOT",  name: "Polkadot",  pair: "dotusdt"  },
  { symbol: "UNI",  name: "Uniswap",   pair: "uniusdt"  },
  { symbol: "MATIC",name: "Polygon",   pair: "maticusdt"},
];

const SEED: Record<string, number> = {
  btcusdt: 87250, ethusdt: 4120, solusdt: 178, bnbusdt: 645,
  xrpusdt: 2.65,  adausdt: 0.82, avaxusdt: 42.5, dogeusdt: 0.18,
  linkusdt: 32.5, dotusdt: 8.9, maticusdt: 0.58, uniusdt: 14.2,
};

const CHANGE_SEED: Record<string, number> = {
  btcusdt: 2.34, ethusdt: -1.18, solusdt: 4.72, bnbusdt: 0.95,
  xrpusdt: 6.41, adausdt: -0.62, avaxusdt: 3.14, dogeusdt: -2.07,
  linkusdt: 1.89, dotusdt: -0.44, maticusdt: 0.71, uniusdt: 2.56,
};

function fmt(price: number): string {
  if (price >= 1000) return "$" + price.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  if (price >= 1)    return "$" + price.toFixed(2);
  return "$" + price.toFixed(4);
}

function initCoins(): Coin[] {
  return COINS.map((c) => ({
    ...c,
    price:     SEED[c.pair] ?? 1,
    prev:      SEED[c.pair] ?? 1,
    change24h: CHANGE_SEED[c.pair] ?? 0,
    flash:     null,
  }));
}

export default function LivePriceBanner() {
  const [coins, setCoins] = useState<Coin[]>(initCoins);
  const [wsStatus, setWsStatus] = useState<"connecting" | "live" | "simulated">("connecting");
  const wsRef = useRef<WebSocket | null>(null);
  const flashTimers = useRef<Record<string, ReturnType<typeof setTimeout>>>({});
  const pausedRef = useRef(false);

  // Connect to Binance WebSocket
  const connect = useCallback(() => {
    const streams = COINS.map((c) => `${c.pair}@ticker`).join("/");
    const url = `wss://stream.binance.com:9443/stream?streams=${streams}`;
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.onopen = () => setWsStatus("live");

    ws.onmessage = (e) => {
      if (pausedRef.current) return;
      try {
        const msg = JSON.parse(e.data);
        if (!msg?.data?.s) return;
        const pair = msg.data.s.toLowerCase();
        const price = parseFloat(msg.data.c);
        const ch24 = parseFloat(msg.data.P);
        if (isNaN(price) || isNaN(ch24)) return;

        setCoins((prev) =>
          prev.map((coin) => {
            if (coin.pair !== pair) return coin;
            const dir = price > coin.price ? "up" : price < coin.price ? "down" : null;

            // Clear existing flash timer
            if (flashTimers.current[pair]) clearTimeout(flashTimers.current[pair]);
            if (dir) {
              flashTimers.current[pair] = setTimeout(() => {
                setCoins((p) => p.map((c) => c.pair === pair ? { ...c, flash: null } : c));
              }, 600);
            }

            return { ...coin, prev: coin.price, price, change24h: ch24, flash: dir };
          })
        );
      } catch {}
    };

    ws.onerror = () => {
      setWsStatus("simulated");
      ws.close();
    };

    ws.onclose = () => {
      // Fall through to simulation
      if (wsStatus !== "live") setWsStatus("simulated");
    };
  }, [wsStatus]);

  // Simulation fallback
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (wsStatus === "simulated") {
      interval = setInterval(() => {
        if (pausedRef.current) return;
        setCoins((prev) =>
          prev.map((coin) => {
            const drift = (Math.random() - 0.499) * coin.price * 0.0008;
            const newPrice = Math.max(coin.price + drift, 0.0001);
            const dir = newPrice > coin.price ? "up" : "down";

            clearTimeout(flashTimers.current[coin.pair]);
            flashTimers.current[coin.pair] = setTimeout(() => {
              setCoins((p) => p.map((c) => c.pair === coin.pair ? { ...c, flash: null } : c));
            }, 500);

            return { ...coin, prev: coin.price, price: newPrice, flash: dir };
          })
        );
      }, 1200);
    }
    return () => clearInterval(interval);
  }, [wsStatus]);

  // Boot
  useEffect(() => {
    const timeout = setTimeout(() => {
      try {
        connect();
      } catch {
        setWsStatus("simulated");
      }
    }, 300);
    return () => {
      clearTimeout(timeout);
      wsRef.current?.close();
      Object.values(flashTimers.current).forEach(clearTimeout);
    };
  }, []); // eslint-disable-line

  // Duplicate coins so the marquee loops seamlessly
  const items = [...coins, ...coins];

  return (
    <div
      className="relative w-full overflow-hidden select-none"
      style={{
        background: "linear-gradient(90deg, #0d1117 0%, #161b22 50%, #0d1117 100%)",
        borderBottom: "1px solid var(--color-border, #30363d)",
        height: "32px",
      }}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16"
        style={{ background: "linear-gradient(90deg, #0d1117, transparent)" }} />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16"
        style={{ background: "linear-gradient(270deg, #0d1117, transparent)" }} />

      {/* Status dot */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 z-20 flex items-center gap-1">
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{
            background: wsStatus === "live" ? "#3fb950" : wsStatus === "connecting" ? "#f59e0b" : "#8b949e",
            boxShadow: wsStatus === "live" ? "0 0 4px #3fb950" : "none",
          }}
        />
        <span className="text-[9px] font-semibold" style={{ color: wsStatus === "live" ? "#3fb950" : "#8b949e" }}>
          {wsStatus === "live" ? "LIVE" : wsStatus === "connecting" ? "..." : "SIM"}
        </span>
      </div>

      {/* Scrolling ticker */}
      <div
        className="flex items-center gap-8 whitespace-nowrap"
        style={{
          animation: "ticker-scroll 60s linear infinite",
          paddingLeft: "100px",
          height: "32px",
        }}
      >
        {items.map((coin, i) => {
          const isUp = coin.change24h >= 0;
          const flashColor =
            coin.flash === "up"   ? "rgba(63,185,80,0.25)" :
            coin.flash === "down" ? "rgba(248,81,73,0.2)"  : "transparent";

          return (
            <div
              key={`${coin.symbol}-${i}`}
              className="flex items-center gap-1.5 px-2 rounded-md transition-colors duration-300"
              style={{
                fontSize: "11px",
                background: flashColor,
              }}
            >
              <span className="font-bold" style={{ color: "#e6edf3" }}>{coin.symbol}</span>
              <span
                className="font-mono font-semibold transition-colors duration-300"
                style={{
                  color: coin.flash === "up" ? "#3fb950" : coin.flash === "down" ? "#f85149" : "#e6edf3",
                }}
              >
                {fmt(coin.price)}
              </span>
              <span
                className="text-[10px] font-semibold"
                style={{ color: isUp ? "#3fb950" : "#f85149" }}
              >
                {isUp ? "▲" : "▼"}{Math.abs(coin.change24h).toFixed(2)}%
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes ticker-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
