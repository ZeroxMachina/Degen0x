"use client";

import { useState, useEffect, useRef } from "react";

interface WhaleTransaction {
  id: string;
  type: "transfer" | "mint" | "burn";
  asset: string;
  amount: string;
  usdValue: string;
  from: string;
  to: string;
  timestamp: number;
  chain: string;
}

// Simulated whale transaction data — in production, connect to Whale Alert API
function generateMockTransaction(): WhaleTransaction {
  const assets = [
    { name: "BTC", chains: ["Bitcoin"] },
    { name: "ETH", chains: ["Ethereum"] },
    { name: "USDT", chains: ["Ethereum", "Tron"] },
    { name: "USDC", chains: ["Ethereum", "Solana"] },
    { name: "SOL", chains: ["Solana"] },
    { name: "XRP", chains: ["XRP Ledger"] },
  ];

  const types: WhaleTransaction["type"][] = ["transfer", "transfer", "transfer", "mint", "burn"];
  const entities = [
    "Binance", "Coinbase", "Kraken", "Unknown Wallet", "Unknown Wallet",
    "Bitfinex", "OKX", "Bybit", "Whale 0x7a..f3", "Whale 0x3d..a1",
    "Treasury", "Foundation", "DEX Router", "Bridge",
  ];

  const asset = assets[Math.floor(Math.random() * assets.length)];
  const type = types[Math.floor(Math.random() * types.length)];

  const amountRanges: Record<string, [number, number]> = {
    BTC: [50, 5000],
    ETH: [500, 50000],
    USDT: [1000000, 200000000],
    USDC: [500000, 150000000],
    SOL: [10000, 500000],
    XRP: [5000000, 200000000],
  };

  const range = amountRanges[asset.name];
  const rawAmount = Math.floor(Math.random() * (range[1] - range[0]) + range[0]);

  const prices: Record<string, number> = {
    BTC: 67500, ETH: 3450, USDT: 1, USDC: 1, SOL: 148, XRP: 0.52,
  };

  const usdVal = rawAmount * prices[asset.name];

  const formatAmount = (n: number) => {
    if (n >= 1e9) return `${(n / 1e9).toFixed(1)}B`;
    if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
    if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
    return n.toLocaleString();
  };

  return {
    id: Math.random().toString(36).slice(2, 10),
    type,
    asset: asset.name,
    amount: formatAmount(rawAmount),
    usdValue: formatAmount(usdVal),
    from: type === "mint" ? "Mint" : entities[Math.floor(Math.random() * entities.length)],
    to: type === "burn" ? "Burn Address" : entities[Math.floor(Math.random() * entities.length)],
    timestamp: Date.now() - Math.floor(Math.random() * 3600000),
    chain: asset.chains[Math.floor(Math.random() * asset.chains.length)],
  };
}

const TYPE_ICONS: Record<WhaleTransaction["type"], string> = {
  transfer: "\u{1F4E8}",
  mint: "\u{1F7E2}",
  burn: "\u{1F525}",
};

const TYPE_LABELS: Record<WhaleTransaction["type"], string> = {
  transfer: "Transfer",
  mint: "Minted",
  burn: "Burned",
};

export default function WhaleAlertFeed() {
  const [transactions, setTransactions] = useState<WhaleTransaction[]>([]);
  const [isLive, setIsLive] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // Generate initial batch
    const initial = Array.from({ length: 8 }, () => generateMockTransaction());
    setTransactions(initial);
  }, []);

  useEffect(() => {
    if (isLive) {
      intervalRef.current = setInterval(() => {
        const newTx = generateMockTransaction();
        newTx.timestamp = Date.now();
        setTransactions(prev => [newTx, ...prev.slice(0, 19)]);
      }, 4000 + Math.random() * 3000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isLive]);

  const formatTime = (ts: number) => {
    const diff = Math.floor((Date.now() - ts) / 1000);
    if (diff < 60) return `${diff}s ago`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
    return `${Math.floor(diff / 3600)}h ago`;
  };

  return (
    <div className="glass rounded-2xl overflow-hidden">
      <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">{"\u{1F433}"}</span>
          <h3 className="font-bold text-[var(--color-text)]">Whale Alert Feed</h3>
          {isLive && (
            <span className="flex items-center gap-1 text-xs text-green-400">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              LIVE
            </span>
          )}
        </div>
        <button
          onClick={() => setIsLive(!isLive)}
          className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
            isLive ? "bg-red-500/20 text-red-400 hover:bg-red-500/30" : "bg-green-500/20 text-green-400 hover:bg-green-500/30"
          }`}
        >
          {isLive ? "Pause" : "Resume"}
        </button>
      </div>

      <div className="max-h-[400px] overflow-y-auto">
        {transactions.map((tx, i) => (
          <div
            key={tx.id}
            className={`p-3 border-b border-[var(--color-border)]/30 flex items-center gap-3 hover:bg-[var(--glass-bg)] transition-all ${
              i === 0 ? "bg-[var(--color-accent)]/5" : ""
            }`}
          >
            <span className="text-lg flex-shrink-0">{TYPE_ICONS[tx.type]}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-semibold text-sm text-[var(--color-text)]">
                  {tx.amount} {tx.asset}
                </span>
                <span className="text-xs text-[var(--color-text-secondary)]">
                  (${tx.usdValue})
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded bg-[var(--glass-bg)] text-[var(--color-text-secondary)]">
                  {TYPE_LABELS[tx.type]}
                </span>
              </div>
              <div className="text-xs text-[var(--color-text-secondary)] truncate mt-0.5">
                {tx.from} → {tx.to}
                <span className="ml-2 opacity-60">{tx.chain}</span>
              </div>
            </div>
            <span className="text-xs text-[var(--color-text-secondary)] flex-shrink-0">
              {formatTime(tx.timestamp)}
            </span>
          </div>
        ))}
      </div>

      <div className="p-3 text-center border-t border-[var(--color-border)]">
        <p className="text-xs text-[var(--color-text-secondary)]">
          Showing simulated whale activity. Connect to Whale Alert API for live data.
        </p>
      </div>
    </div>
  );
}
