"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

/* ─── Color Scheme ────────────────────────────────────────────────── */
const S = {
  bg: "#0d1117",
  surface: "#161b22",
  surface2: "#1c2330",
  border: "#30363d",
  text: "#e6edf3",
  text2: "#8b949e",
  blue: "#58a6ff",
  green: "#3fb950",
  orange: "#f0883e",
  yellow: "#d29922",
  purple: "#bc8cff",
  cyan: "#06b6d4",
};

/* ─── Types ────────────────────────────────────────────────────────── */
interface Token {
  id: string;
  symbol: string;
  name: string;
  chain: "ETH" | "SOL" | "Base";
  amount: number;
  price: number;
  change24h: number;
  icon: string;
}

interface Wallet {
  id: string;
  address: string;
  chain: "ETH" | "SOL";
  name: string;
}

interface LPPosition {
  id: string;
  pair: string;
  liquidity: number;
  apy: number;
  protocol: string;
}

interface StakingPosition {
  id: string;
  asset: string;
  amount: number;
  apr: number;
  rewards: number;
}

interface PortfolioDataPoint {
  date: string;
  value: number;
}

/* ─── Mock Data ────────────────────────────────────────────────────── */
const MOCK_TOKENS: Token[] = [
  { id: "eth", symbol: "ETH", name: "Ethereum", chain: "ETH", amount: 12.5, price: 3780, change24h: 5.2, icon: "Ξ" },
  { id: "btc", symbol: "BTC", name: "Bitcoin", chain: "ETH", amount: 0.35, price: 82450, change24h: 3.8, icon: "₿" },
  { id: "sol", symbol: "SOL", name: "Solana", chain: "SOL", amount: 48, price: 183, change24h: 8.4, icon: "◎" },
  { id: "usdc", symbol: "USDC", name: "USD Coin", chain: "ETH", amount: 25000, price: 1.0, change24h: 0.1, icon: "$" },
  { id: "usdt", symbol: "USDT", name: "Tether", chain: "SOL", amount: 18000, price: 1.0, change24h: 0.0, icon: "$" },
  { id: "arb", symbol: "ARB", name: "Arbitrum", chain: "ETH", amount: 2400, price: 1.24, change24h: 12.3, icon: "🔵" },
  { id: "op", symbol: "OP", name: "Optimism", chain: "ETH", amount: 1200, price: 2.15, change24h: 9.1, icon: "🔴" },
  { id: "link", symbol: "LINK", name: "Chainlink", chain: "ETH", amount: 180, price: 16.8, change24h: 6.7, icon: "🔗" },
  { id: "jito", symbol: "JITO", name: "Jito", chain: "SOL", amount: 850, price: 4.25, change24h: -2.3, icon: "🌀" },
  { id: "orca", symbol: "ORCA", name: "Orca", chain: "SOL", amount: 2100, price: 0.88, change24h: 4.5, icon: "🐋" },
  { id: "usdc-base", symbol: "USDC", name: "USD Coin", chain: "Base", amount: 8500, price: 1.0, change24h: 0.1, icon: "$" },
  { id: "degen", symbol: "DEGEN", name: "Degen", chain: "Base", amount: 50000, price: 0.045, change24h: 15.2, icon: "🎲" },
  { id: "aerodrome", symbol: "AERO", name: "Aerodrome", chain: "Base", amount: 3200, price: 1.92, change24h: 11.8, icon: "✈️" },
  { id: "uniswap", symbol: "UNI", name: "Uniswap", chain: "ETH", amount: 95, price: 12.45, change24h: 7.3, icon: "🦄" },
  { id: "aave", symbol: "AAVE", name: "Aave", chain: "ETH", amount: 18, price: 425.0, change24h: 8.9, icon: "👻" },
];

const MOCK_LP_POSITIONS: LPPosition[] = [
  { id: "lp-1", pair: "ETH/USDC", liquidity: 45000, apy: 18.5, protocol: "Uniswap V3" },
  { id: "lp-2", pair: "SOL/USDC", liquidity: 32000, apy: 25.3, protocol: "Orca" },
  { id: "lp-3", pair: "ARB/ETH", liquidity: 18500, apy: 22.1, protocol: "Uniswap V3" },
];

const MOCK_STAKING: StakingPosition[] = [
  { id: "stake-1", asset: "ETH", amount: 5.2, apr: 3.2, rewards: 0.38 },
  { id: "stake-2", asset: "SOL", amount: 25, apr: 4.5, rewards: 1.2 },
  { id: "stake-3", asset: "LINK", amount: 120, apr: 5.8, rewards: 8.5 },
];

/* ─── Generate 30-day performance data ─────────────────────────────── */
function generatePerformanceData(): PortfolioDataPoint[] {
  const data: PortfolioDataPoint[] = [];
  const baseValue = 245000;
  let value = baseValue * 0.85;

  for (let i = 0; i < 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (29 - i));
    data.push({
      date: date.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      value: Math.round(value),
    });
    value = value * (1 + (Math.random() - 0.48) * 0.05);
  }

  return data;
}

/* ─── Simple Line Chart ───────────────────────────────────────────── */
function PerformanceChart({ data }: { data: PortfolioDataPoint[] }) {
  const min = Math.min(...data.map(d => d.value));
  const max = Math.max(...data.map(d => d.value));
  const range = max - min || 1;
  const padding = 40;
  const w = 600;
  const h = 300;
  const chartW = w - padding * 2;
  const chartH = h - padding * 2;

  const points = data.map((d, i) => {
    const x = (i / (data.length - 1)) * chartW + padding;
    const y = h - padding - ((d.value - min) / range) * chartH;
    return { x, y, value: d.value };
  });

  const polyline = points.map(p => `${p.x},${p.y}`).join(" ");
  const area = `${padding},${h - padding} ${polyline} ${w - padding},${h - padding}`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ background: S.surface2, borderRadius: "8px", width: "100%", height: "auto" }} preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="chart-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={S.blue} stopOpacity="0.2" />
          <stop offset="100%" stopColor={S.blue} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={area} fill="url(#chart-grad)" />
      <polyline points={polyline} fill="none" stroke={S.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r="2" fill={S.blue} opacity={i === points.length - 1 ? 1 : 0.3} />
      ))}
    </svg>
  );
}

/* ─── Chain Breakdown Bar ──────────────────────────────────────────── */
function ChainBreakdown({ tokens }: { tokens: Token[] }) {
  const chainValues: Record<string, number> = { ETH: 0, SOL: 0, Base: 0 };

  tokens.forEach(t => {
    chainValues[t.chain] += t.amount * t.price;
  });

  const total = Object.values(chainValues).reduce((a, b) => a + b, 0);
  const chains = [
    { name: "Ethereum", key: "ETH", value: chainValues.ETH, color: S.blue, pct: (chainValues.ETH / total) * 100 },
    { name: "Solana", key: "SOL", value: chainValues.SOL, color: "#9945ff", pct: (chainValues.SOL / total) * 100 },
    { name: "Base", key: "Base", value: chainValues.Base, color: S.blue, pct: (chainValues.Base / total) * 100 },
  ];

  return (
    <div style={{ background: S.surface, borderRadius: "12px", padding: "20px", border: `1px solid ${S.border}` }}>
      <h3 style={{ color: S.text, fontSize: "14px", fontWeight: "600", marginBottom: "16px" }}>CHAIN BREAKDOWN</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {chains.filter(c => c.value > 0).map(chain => (
          <div key={chain.key}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
              <span style={{ color: S.text, fontSize: "12px", fontWeight: "500" }}>{chain.name}</span>
              <span style={{ color: S.text, fontSize: "12px", fontWeight: "500" }}>
                ${(chain.value / 1000).toFixed(1)}K ({chain.pct.toFixed(1)}%)
              </span>
            </div>
            <div style={{ background: S.surface2, height: "8px", borderRadius: "4px", overflow: "hidden" }}>
              <div
                style={{
                  background: chain.color,
                  height: "100%",
                  width: `${chain.pct}%`,
                  borderRadius: "4px",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Share Portfolio Card Preview ─────────────────────────────────── */
function ShareCard({ totalValue, totalPnL, totalPnLPct }: { totalValue: number; totalPnL: number; totalPnLPct: number }) {
  return (
    <div
      style={{
        background: `linear-gradient(135deg, ${S.surface2} 0%, ${S.surface} 100%)`,
        borderRadius: "16px",
        padding: "32px",
        border: `1px solid ${S.border}`,
        textAlign: "center",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <div style={{ color: S.text2, fontSize: "12px", fontWeight: "500", marginBottom: "12px", textTransform: "uppercase", letterSpacing: "1px" }}>
        My Portfolio
      </div>
      <div style={{ color: S.text, fontSize: "36px", fontWeight: "700", marginBottom: "16px" }}>
        ${(totalValue / 1000).toFixed(1)}K
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <span style={{ color: totalPnL >= 0 ? S.green : "#f85149", fontSize: "16px", fontWeight: "600" }}>
          {totalPnL >= 0 ? "+" : "-"}${Math.abs(totalPnL / 1000).toFixed(1)}K
        </span>
        <span style={{ color: totalPnL >= 0 ? S.green : "#f85149", fontSize: "13px", fontWeight: "500" }}>
          ({totalPnLPct >= 0 ? "+" : ""}{totalPnLPct.toFixed(1)}%)
        </span>
      </div>
      <div style={{ color: S.text2, fontSize: "11px", marginBottom: "16px" }}>
        Tracked on degen0x • {new Date().toLocaleDateString()}
      </div>
      <div
        style={{
          background: S.blue,
          color: S.bg,
          padding: "10px 16px",
          borderRadius: "6px",
          fontSize: "12px",
          fontWeight: "600",
          cursor: "pointer",
          textAlign: "center",
        }}
      >
        Share Portfolio
      </div>
    </div>
  );
}

/* ─── Main Component ──────────────────────────────────────────────── */
export default function PortfolioTrackerPage() {
  const [wallets, setWallets] = useState<Wallet[]>([
    { id: "w1", address: "0x742d35Cc6634C0532925a3b844Bc9e7595f48...", chain: "ETH", name: "Main Wallet" },
  ]);
  const [selectedChain, setSelectedChain] = useState<"All" | "ETH" | "SOL" | "Base">("All");
  const [sortBy, setSortBy] = useState<"value" | "change">("value");
  const [showAddWallet, setShowAddWallet] = useState(false);
  const [showShareCard, setShowShareCard] = useState(false);
  const [newWalletAddress, setNewWalletAddress] = useState("");
  const [newWalletChain, setNewWalletChain] = useState<"ETH" | "SOL">("ETH");
  const [xpGained, setXpGained] = useState(200);

  const performanceData = generatePerformanceData();

  const filteredTokens = selectedChain === "All"
    ? MOCK_TOKENS
    : MOCK_TOKENS.filter(t => t.chain === selectedChain);

  const sortedTokens = [...filteredTokens].sort((a, b) => {
    if (sortBy === "value") {
      return (b.amount * b.price) - (a.amount * a.price);
    }
    return b.change24h - a.change24h;
  });

  const totalValue = MOCK_TOKENS.reduce((sum, t) => sum + (t.amount * t.price), 0);
  const totalCost = totalValue * 0.78; // Mock: assume 22% gain
  const totalPnL = totalValue - totalCost;
  const totalPnLPct = (totalPnL / totalCost) * 100;
  const lpTotal = MOCK_LP_POSITIONS.reduce((sum, lp) => sum + lp.liquidity, 0);
  const stakingTotal = MOCK_STAKING.reduce((sum, s) => sum + (s.amount * ((MOCK_TOKENS.find(t => t.symbol === s.asset)?.price) || 0)), 0);

  const handleAddWallet = () => {
    if (!newWalletAddress.trim()) return;
    const newWallet: Wallet = {
      id: `w${wallets.length + 1}`,
      address: newWalletAddress.substring(0, 16) + "...",
      chain: newWalletChain,
      name: `${newWalletChain} Wallet`,
    };
    setWallets([...wallets, newWallet]);
    setNewWalletAddress("");
    setShowAddWallet(false);
    setXpGained(xpGained + 200);
  };

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: "100vh", paddingBottom: "60px" }}>
      {/* ─── Header with Navigation ─────────────────────────────────── */}
      <div style={{ background: S.surface, borderBottom: `1px solid ${S.border}`, position: "sticky", top: 0, zIndex: 40 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "16px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div style={{ fontSize: "12px", color: S.text2, marginBottom: "4px" }}>
              <Link href="/" style={{ color: S.blue, textDecoration: "none" }}>Home</Link>
              {" / "}
              <span>Portfolio Tracker</span>
            </div>
            <h1 style={{ fontSize: "24px", fontWeight: "700", margin: 0 }}>Multi-Wallet Portfolio</h1>
          </div>
          <div style={{ textAlign: "right" }}>
            <div style={{ color: S.text2, fontSize: "11px", marginBottom: "4px" }}>XP Earned</div>
            <div style={{ fontSize: "18px", fontWeight: "700", color: S.yellow }}>+{xpGained} XP</div>
          </div>
        </div>
      </div>

      {/* ─── Main Content ──────────────────────────────────────────── */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "32px 20px", display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>

        {/* ─── Top Portfolio Stats ────────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px" }}>
          <div style={{ background: S.surface, borderRadius: "12px", padding: "20px", border: `1px solid ${S.border}` }}>
            <div style={{ color: S.text2, fontSize: "11px", fontWeight: "500", marginBottom: "8px", textTransform: "uppercase" }}>Total Portfolio</div>
            <div style={{ fontSize: "28px", fontWeight: "700", color: S.text, marginBottom: "4px" }}>
              ${(totalValue / 1000).toFixed(1)}K
            </div>
            <div style={{ color: totalPnL >= 0 ? S.green : "#f85149", fontSize: "13px", fontWeight: "500" }}>
              {totalPnL >= 0 ? "+" : ""}{totalPnLPct.toFixed(2)}% ({totalPnL >= 0 ? "+" : "-"}${Math.abs(totalPnL / 1000).toFixed(1)}K)
            </div>
          </div>

          <div style={{ background: S.surface, borderRadius: "12px", padding: "20px", border: `1px solid ${S.border}` }}>
            <div style={{ color: S.text2, fontSize: "11px", fontWeight: "500", marginBottom: "8px", textTransform: "uppercase" }}>Wallets Connected</div>
            <div style={{ fontSize: "28px", fontWeight: "700", color: S.text, marginBottom: "4px" }}>
              {wallets.length}
            </div>
            <div style={{ color: S.text2, fontSize: "13px", fontWeight: "500" }}>
              {wallets.length < 5 ? `${5 - wallets.length} slots available` : "Maximum wallets"}
            </div>
          </div>

          <div style={{ background: S.surface, borderRadius: "12px", padding: "20px", border: `1px solid ${S.border}` }}>
            <div style={{ color: S.text2, fontSize: "11px", fontWeight: "500", marginBottom: "8px", textTransform: "uppercase" }}>DeFi Positions</div>
            <div style={{ fontSize: "28px", fontWeight: "700", color: S.text, marginBottom: "4px" }}>
              ${(lpTotal / 1000).toFixed(1)}K
            </div>
            <div style={{ color: S.text2, fontSize: "13px", fontWeight: "500" }}>
              {MOCK_LP_POSITIONS.length} LP positions
            </div>
          </div>
        </div>

        {/* ─── Wallet Management ──────────────────────────────────────── */}
        <div style={{ background: S.surface, borderRadius: "12px", padding: "20px", border: `1px solid ${S.border}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h2 style={{ fontSize: "14px", fontWeight: "600", margin: 0, textTransform: "uppercase", color: S.text }}>Connected Wallets</h2>
            {wallets.length < 5 && (
              <button
                onClick={() => setShowAddWallet(!showAddWallet)}
                style={{
                  background: S.blue,
                  color: S.bg,
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                + Add Wallet
              </button>
            )}
          </div>

          {showAddWallet && (
            <div style={{ background: S.surface2, padding: "16px", borderRadius: "8px", marginBottom: "16px", border: `1px solid ${S.border}` }}>
              <input
                type="text"
                placeholder="Enter wallet address (0x...)"
                value={newWalletAddress}
                onChange={(e) => setNewWalletAddress(e.target.value)}
                style={{
                  background: S.bg,
                  color: S.text,
                  border: `1px solid ${S.border}`,
                  padding: "8px 12px",
                  borderRadius: "6px",
                  width: "100%",
                  marginBottom: "10px",
                  fontSize: "13px",
                }}
              />
              <select
                value={newWalletChain}
                onChange={(e) => setNewWalletChain(e.target.value as "ETH" | "SOL")}
                style={{
                  background: S.bg,
                  color: S.text,
                  border: `1px solid ${S.border}`,
                  padding: "8px 12px",
                  borderRadius: "6px",
                  width: "100%",
                  marginBottom: "10px",
                  fontSize: "13px",
                }}
              >
                <option value="ETH">Ethereum</option>
                <option value="SOL">Solana</option>
              </select>
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={handleAddWallet}
                  style={{
                    background: S.green,
                    color: S.bg,
                    border: "none",
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "600",
                    cursor: "pointer",
                    flex: 1,
                  }}
                >
                  Connect
                </button>
                <button
                  onClick={() => setShowAddWallet(false)}
                  style={{
                    background: S.surface2,
                    color: S.text,
                    border: `1px solid ${S.border}`,
                    padding: "8px 16px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "600",
                    cursor: "pointer",
                    flex: 1,
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {wallets.map((wallet) => (
              <div
                key={wallet.id}
                style={{
                  background: S.surface2,
                  padding: "12px",
                  borderRadius: "8px",
                  border: `1px solid ${S.border}`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>
                  <div style={{ fontSize: "12px", fontWeight: "600", color: S.text }}>{wallet.name}</div>
                  <div style={{ fontSize: "11px", color: S.text2, fontFamily: "monospace" }}>{wallet.address}</div>
                </div>
                <div style={{ fontSize: "11px", color: S.text2, background: S.bg, padding: "4px 8px", borderRadius: "4px" }}>
                  {wallet.chain}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── Performance Chart ──────────────────────────────────────── */}
        <div style={{ background: S.surface, borderRadius: "12px", padding: "20px", border: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 16px 0", textTransform: "uppercase", color: S.text }}>
            30-Day Performance
          </h2>
          <PerformanceChart data={performanceData} />
        </div>

        {/* ─── Chain Breakdown ────────────────────────────────────────── */}
        <ChainBreakdown tokens={MOCK_TOKENS} />

        {/* ─── Portfolio Filters ──────────────────────────────────────── */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
            <span style={{ fontSize: "12px", color: S.text2, fontWeight: "500" }}>Filter:</span>
            {(["All", "ETH", "SOL", "Base"] as const).map((chain) => (
              <button
                key={chain}
                onClick={() => setSelectedChain(chain)}
                style={{
                  background: selectedChain === chain ? S.blue : S.surface,
                  color: selectedChain === chain ? S.bg : S.text,
                  border: `1px solid ${selectedChain === chain ? S.blue : S.border}`,
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                {chain}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", gap: "8px", alignItems: "center", marginLeft: "auto" }}>
            <span style={{ fontSize: "12px", color: S.text2, fontWeight: "500" }}>Sort:</span>
            {(["value", "change"] as const).map((sort) => (
              <button
                key={sort}
                onClick={() => setSortBy(sort)}
                style={{
                  background: sortBy === sort ? S.blue : S.surface,
                  color: sortBy === sort ? S.bg : S.text,
                  border: `1px solid ${sortBy === sort ? S.blue : S.border}`,
                  padding: "6px 12px",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "500",
                  cursor: "pointer",
                }}
              >
                {sort === "value" ? "Value" : "24h Change"}
              </button>
            ))}
          </div>
        </div>

        {/* ─── Token Holdings ─────────────────────────────────────────── */}
        <div style={{ background: S.surface, borderRadius: "12px", padding: "20px", border: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 16px 0", textTransform: "uppercase", color: S.text }}>
            Holdings ({sortedTokens.length})
          </h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <th style={{ padding: "12px", textAlign: "left", color: S.text2, fontWeight: "500" }}>Asset</th>
                  <th style={{ padding: "12px", textAlign: "right", color: S.text2, fontWeight: "500" }}>Amount</th>
                  <th style={{ padding: "12px", textAlign: "right", color: S.text2, fontWeight: "500" }}>Price</th>
                  <th style={{ padding: "12px", textAlign: "right", color: S.text2, fontWeight: "500" }}>Value</th>
                  <th style={{ padding: "12px", textAlign: "right", color: S.text2, fontWeight: "500" }}>24h Change</th>
                </tr>
              </thead>
              <tbody>
                {sortedTokens.map((token) => (
                  <tr key={token.id} style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: "12px", textAlign: "left" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontSize: "16px" }}>{token.icon}</span>
                        <div>
                          <div style={{ fontWeight: "600", color: S.text }}>{token.symbol}</div>
                          <div style={{ fontSize: "11px", color: S.text2 }}>{token.name}</div>
                        </div>
                        <span style={{ fontSize: "10px", background: S.surface2, padding: "2px 6px", borderRadius: "3px", color: S.text2, marginLeft: "8px" }}>
                          {token.chain}
                        </span>
                      </div>
                    </td>
                    <td style={{ padding: "12px", textAlign: "right", color: S.text }}>
                      {token.amount.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: "12px", textAlign: "right", color: S.text }}>
                      ${token.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}
                    </td>
                    <td style={{ padding: "12px", textAlign: "right", color: S.text, fontWeight: "600" }}>
                      ${(token.amount * token.price).toLocaleString(undefined, { maximumFractionDigits: 0 })}
                    </td>
                    <td
                      style={{
                        padding: "12px",
                        textAlign: "right",
                        color: token.change24h >= 0 ? S.green : "#f85149",
                        fontWeight: "600",
                      }}
                    >
                      {token.change24h >= 0 ? "+" : ""}{token.change24h.toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ─── DeFi Positions ─────────────────────────────────────────── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "16px" }}>
          <div style={{ background: S.surface, borderRadius: "12px", padding: "20px", border: `1px solid ${S.border}` }}>
            <h2 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 16px 0", textTransform: "uppercase", color: S.text }}>
              LP Positions ({MOCK_LP_POSITIONS.length})
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {MOCK_LP_POSITIONS.map((lp) => (
                <div key={lp.id} style={{ background: S.surface2, padding: "12px", borderRadius: "8px", border: `1px solid ${S.border}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <div style={{ fontWeight: "600", color: S.text }}>{lp.pair}</div>
                    <div style={{ color: S.green, fontWeight: "600" }}>{lp.apy.toFixed(1)}% APY</div>
                  </div>
                  <div style={{ fontSize: "12px", color: S.text2, marginBottom: "6px" }}>{lp.protocol}</div>
                  <div style={{ fontSize: "12px", color: S.text }}>
                    Liquidity: <span style={{ fontWeight: "600" }}>${(lp.liquidity / 1000).toFixed(1)}K</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: S.surface, borderRadius: "12px", padding: "20px", border: `1px solid ${S.border}` }}>
            <h2 style={{ fontSize: "14px", fontWeight: "600", margin: "0 0 16px 0", textTransform: "uppercase", color: S.text }}>
              Staking Positions ({MOCK_STAKING.length})
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {MOCK_STAKING.map((stake) => (
                <div key={stake.id} style={{ background: S.surface2, padding: "12px", borderRadius: "8px", border: `1px solid ${S.border}` }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
                    <div style={{ fontWeight: "600", color: S.text }}>{stake.asset}</div>
                    <div style={{ color: S.green, fontWeight: "600" }}>{stake.apr.toFixed(1)}% APR</div>
                  </div>
                  <div style={{ fontSize: "12px", color: S.text2, marginBottom: "6px" }}>
                    Staked: {stake.amount.toFixed(2)} {stake.asset}
                  </div>
                  <div style={{ fontSize: "12px", color: S.text }}>
                    Rewards: <span style={{ fontWeight: "600", color: S.green }}>+{stake.rewards.toFixed(2)}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── Share Portfolio Card ───────────────────────────────────── */}
        <div style={{ background: S.surface, borderRadius: "12px", padding: "20px", border: `1px solid ${S.border}` }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
            <h2 style={{ fontSize: "14px", fontWeight: "600", margin: 0, textTransform: "uppercase", color: S.text }}>Share Your Portfolio</h2>
            <button
              onClick={() => setShowShareCard(!showShareCard)}
              style={{
                background: S.purple,
                color: S.bg,
                border: "none",
                padding: "6px 12px",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              {showShareCard ? "Hide" : "Preview"}
            </button>
          </div>
          {showShareCard && (
            <div style={{ paddingTop: "16px" }}>
              <ShareCard totalValue={totalValue} totalPnL={totalPnL} totalPnLPct={totalPnLPct} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
