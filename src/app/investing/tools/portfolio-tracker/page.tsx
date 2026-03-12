'use client';

"use client";

import { useState, useEffect, useCallback } from "react";
import Breadcrumb from "@/components/Breadcrumb";

interface Coin {
  id: string;
  name: string;
  symbol: string;
  color: string;
}

interface Holding {
  id: string;
  coinId: string;
  amount: number;
  buyPrice: number;
}

interface PriceData {
  [key: string]: { usd: number; usd_24h_change?: number };
}

const SUPPORTED_COINS: Coin[] = [
  { id: "bitcoin", name: "Bitcoin", symbol: "BTC", color: "#F7931A" },
  { id: "ethereum", name: "Ethereum", symbol: "ETH", color: "#627EEA" },
  { id: "solana", name: "Solana", symbol: "SOL", color: "#9945FF" },
  { id: "binancecoin", name: "BNB", symbol: "BNB", color: "#F0B90B" },
  { id: "ripple", name: "XRP", symbol: "XRP", color: "#00AAE4" },
  { id: "cardano", name: "Cardano", symbol: "ADA", color: "#0033AD" },
  { id: "avalanche-2", name: "Avalanche", symbol: "AVAX", color: "#E84142" },
  { id: "dogecoin", name: "Dogecoin", symbol: "DOGE", color: "#C2A633" },
  { id: "polkadot", name: "Polkadot", symbol: "DOT", color: "#E6007A" },
  { id: "matic-network", name: "Polygon", symbol: "MATIC", color: "#8247E5" },
  { id: "chainlink", name: "Chainlink", symbol: "LINK", color: "#375BD2" },
  { id: "uniswap", name: "Uniswap", symbol: "UNI", color: "#FF007A" },
];

const FALLBACK_PRICES: PriceData = {
  bitcoin: { usd: 67850, usd_24h_change: 2.4 },
  ethereum: { usd: 3420, usd_24h_change: 1.8 },
  solana: { usd: 195, usd_24h_change: 3.2 },
  binancecoin: { usd: 612, usd_24h_change: 0.9 },
  ripple: { usd: 2.45, usd_24h_change: -1.2 },
  cardano: { usd: 0.98, usd_24h_change: -0.5 },
  "avalanche-2": { usd: 38.5, usd_24h_change: 2.1 },
  dogecoin: { usd: 0.38, usd_24h_change: 5.6 },
  polkadot: { usd: 8.2, usd_24h_change: -0.8 },
  "matic-network": { usd: 0.58, usd_24h_change: 1.4 },
  chainlink: { usd: 15.8, usd_24h_change: 0.7 },
  uniswap: { usd: 9.4, usd_24h_change: -1.1 },
};

function formatCurrency(val: number): string {
  if (val >= 1_000_000) return `$${(val / 1_000_000).toFixed(2)}M`;
  if (val >= 1_000) return `$${val.toLocaleString("en-US", { maximumFractionDigits: 2 })}`;
  return `$${val.toFixed(2)}`;
}

function generateId(): string {
  return Math.random().toString(36).slice(2, 10);
}

// Simple SVG donut chart
function DonutChart({ slices }: { slices: { label: string; value: number; color: string }[] }) {
  const total = slices.reduce((s, x) => s + x.value, 0);
  if (total === 0) return null;

  const R = 80;
  const cx = 100;
  const cy = 100;
  let cumAngle = -Math.PI / 2;

  const paths = slices.map((slice) => {
    const fraction = slice.value / total;
    const angle = fraction * 2 * Math.PI;
    const startX = cx + R * Math.cos(cumAngle);
    const startY = cy + R * Math.sin(cumAngle);
    cumAngle += angle;
    const endX = cx + R * Math.cos(cumAngle);
    const endY = cy + R * Math.sin(cumAngle);
    const largeArc = angle > Math.PI ? 1 : 0;
    const d = `M ${cx} ${cy} L ${startX} ${startY} A ${R} ${R} 0 ${largeArc} 1 ${endX} ${endY} Z`;
    return { d, color: slice.color, label: slice.label, pct: (fraction * 100).toFixed(1) };
  });

  return (
    <svg viewBox="0 0 200 200" width="180" height="180">
      {paths.map((p, i) => (
        <path key={i} d={p.d} fill={p.color} opacity={0.9} stroke="#0d1117" strokeWidth={2} />
      ))}
      {/* Donut hole */}
      <circle cx={cx} cy={cy} r={45} fill="#0d1117" />
      <text x={cx} y={cy - 6} textAnchor="middle" fill="#e6edf3" fontSize={10} fontWeight="700">
        Portfolio
      </text>
      <text x={cx} y={cy + 10} textAnchor="middle" fill="#8b949e" fontSize={9}>
        {slices.length} assets
      </text>
    </svg>
  );
}

export default function PortfolioTrackerPage() {
  const [holdings, setHoldings] = useState<Holding[]>([]);
  const [prices, setPrices] = useState<PriceData>(FALLBACK_PRICES);
  const [priceLoading, setPriceLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");
  const [priceError, setPriceError] = useState("");

  // Add-holding form state
  const [formCoin, setFormCoin] = useState("bitcoin");
  const [formAmount, setFormAmount] = useState("");
  const [formBuyPrice, setFormBuyPrice] = useState("");
  const [formError, setFormError] = useState("");

  // Fetch prices
  const fetchPrices = useCallback(async () => {
    try {
      setPriceLoading(true);
      setPriceError("");
      const ids = SUPPORTED_COINS.map((c) => c.id).join(",");
      const res = await fetch(
        `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_24hr_change=true`
      );
      if (!res.ok) throw new Error("API unavailable");
      const data = await res.json();
      setPrices(data);
      setLastUpdated(new Date().toLocaleTimeString());
    } catch {
      setPriceError("Using cached prices — live data unavailable");
      setPrices(FALLBACK_PRICES);
      setLastUpdated(new Date().toLocaleTimeString());
    } finally {
      setPriceLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrices();
    const interval = setInterval(fetchPrices, 120_000);
    return () => clearInterval(interval);
  }, [fetchPrices]);

  // Auto-fill buy price with current price when coin changes
  useEffect(() => {
    if (prices[formCoin]) {
      setFormBuyPrice(prices[formCoin].usd.toString());
    }
  }, [formCoin, prices]);

  const addHolding = () => {
    const amount = parseFloat(formAmount);
    const buyPrice = parseFloat(formBuyPrice);
    if (!amount || amount <= 0) { setFormError("Enter a valid amount"); return; }
    if (!buyPrice || buyPrice <= 0) { setFormError("Enter a valid buy price"); return; }
    setFormError("");
    setHoldings((prev) => [
      ...prev,
      { id: generateId(), coinId: formCoin, amount, buyPrice },
    ]);
    setFormAmount("");
    setFormBuyPrice(prices[formCoin]?.usd?.toString() || "");
  };

  const removeHolding = (id: string) => {
    setHoldings((prev) => prev.filter((h) => h.id !== id));
  };

  // Computed portfolio metrics
  const enriched = holdings.map((h) => {
    const coin = SUPPORTED_COINS.find((c) => c.id === h.coinId)!;
    const currentPrice = prices[h.coinId]?.usd ?? 0;
    const change24h = prices[h.coinId]?.usd_24h_change ?? 0;
    const currentValue = h.amount * currentPrice;
    const costBasis = h.amount * h.buyPrice;
    const pnl = currentValue - costBasis;
    const pnlPct = costBasis > 0 ? (pnl / costBasis) * 100 : 0;
    return { ...h, coin, currentPrice, change24h, currentValue, costBasis, pnl, pnlPct };
  });

  const totalValue = enriched.reduce((s, h) => s + h.currentValue, 0);
  const totalCost = enriched.reduce((s, h) => s + h.costBasis, 0);
  const totalPnL = totalValue - totalCost;
  const totalPnLPct = totalCost > 0 ? (totalPnL / totalCost) * 100 : 0;

  const donutSlices = enriched.map((h) => ({
    label: h.coin.symbol,
    value: h.currentValue,
    color: h.coin.color,
  }));

  const cardStyle = {
    background: "rgba(22,27,34,0.9)",
    border: "1px solid #30363d",
    borderRadius: "12px",
    padding: "1.5rem",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", padding: "2rem 1rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Investing", href: "/investing" },
            { label: "Tools", href: "/investing/tools" },
            { label: "Portfolio Tracker" },
          ]}
        />

        {/* Header */}
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e6edf3", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
            💼 Crypto Portfolio Tracker
          </h1>
          <p style={{ color: "#8b949e", fontSize: "1.1rem" }}>
            Track your holdings, monitor live P&amp;L, and visualize your allocation. No signup required — runs entirely in your browser.
          </p>
          <div style={{ marginTop: "0.75rem", display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            {priceLoading ? (
              <span style={{ color: "#d29922", fontSize: "0.8rem" }}>⟳ Fetching live prices…</span>
            ) : (
              <span style={{ color: "#3fb950", fontSize: "0.8rem" }}>● Live prices</span>
            )}
            {lastUpdated && <span style={{ color: "#8b949e", fontSize: "0.8rem" }}>Updated {lastUpdated}</span>}
            {priceError && <span style={{ color: "#f85149", fontSize: "0.8rem" }}>⚠ {priceError}</span>}
          </div>
        </div>

        {/* Summary Cards */}
        {holdings.length > 0 && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem", marginBottom: "1.5rem" }}>
            {[
              { label: "Total Value", value: formatCurrency(totalValue), color: "#58a6ff" },
              { label: "Total Invested", value: formatCurrency(totalCost), color: "#8b949e" },
              {
                label: "Total P&L",
                value: `${totalPnL >= 0 ? "+" : ""}${formatCurrency(totalPnL)} (${totalPnLPct >= 0 ? "+" : ""}${totalPnLPct.toFixed(2)}%)`,
                color: totalPnL >= 0 ? "#3fb950" : "#f85149",
              },
              { label: "Holdings", value: `${holdings.length} asset${holdings.length !== 1 ? "s" : ""}`, color: "#bc8cff" },
            ].map((card) => (
              <div key={card.label} style={cardStyle}>
                <div style={{ fontSize: "0.75rem", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.4rem" }}>{card.label}</div>
                <div style={{ fontSize: "1.4rem", fontWeight: "700", color: card.color }}>{card.value}</div>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: holdings.length > 0 ? "1fr 220px" : "1fr", gap: "1.5rem", alignItems: "start" }}>

          {/* Left: Add + Holdings Table */}
          <div>
            {/* Add Holding Form */}
            <div style={{ ...cardStyle, marginBottom: "1.5rem", border: "1px solid rgba(99,102,241,0.3)" }}>
              <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1rem" }}>
                ➕ Add Holding
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr auto", gap: "0.75rem", alignItems: "flex-end" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#8b949e", marginBottom: "0.3rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Coin</label>
                  <select
                    value={formCoin}
                    onChange={(e) => setFormCoin(e.target.value)}
                    style={{ width: "100%", padding: "0.6rem 0.75rem", background: "#161b22", border: "1px solid #30363d", borderRadius: "8px", color: "#e6edf3", fontSize: "0.9rem", cursor: "pointer" }}
                  >
                    {SUPPORTED_COINS.map((c) => (
                      <option key={c.id} value={c.id}>{c.symbol} — {c.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#8b949e", marginBottom: "0.3rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Amount</label>
                  <input
                    type="number"
                    value={formAmount}
                    onChange={(e) => setFormAmount(e.target.value)}
                    placeholder="e.g. 0.5"
                    min="0"
                    step="any"
                    style={{ width: "100%", padding: "0.6rem 0.75rem", background: "#161b22", border: "1px solid #30363d", borderRadius: "8px", color: "#e6edf3", fontSize: "0.9rem" }}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontSize: "0.75rem", color: "#8b949e", marginBottom: "0.3rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Buy Price (USD)</label>
                  <input
                    type="number"
                    value={formBuyPrice}
                    onChange={(e) => setFormBuyPrice(e.target.value)}
                    placeholder="e.g. 60000"
                    min="0"
                    step="any"
                    style={{ width: "100%", padding: "0.6rem 0.75rem", background: "#161b22", border: "1px solid #30363d", borderRadius: "8px", color: "#e6edf3", fontSize: "0.9rem" }}
                  />
                </div>
                <button
                  onClick={addHolding}
                  style={{ padding: "0.6rem 1.2rem", background: "linear-gradient(135deg, #6366f1, #06b6d4)", border: "none", borderRadius: "8px", color: "#fff", fontWeight: "700", fontSize: "0.9rem", cursor: "pointer", whiteSpace: "nowrap" }}
                >
                  Add
                </button>
              </div>
              {formError && <p style={{ color: "#f85149", fontSize: "0.8rem", marginTop: "0.5rem" }}>{formError}</p>}
            </div>

            {/* Holdings Table */}
            {holdings.length === 0 ? (
              <div style={{ ...cardStyle, textAlign: "center", padding: "3rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📊</div>
                <p style={{ color: "#8b949e", fontSize: "1rem" }}>Add your first holding above to start tracking your portfolio.</p>
                <p style={{ color: "#6e7681", fontSize: "0.85rem", marginTop: "0.5rem" }}>All data is stored locally in your browser. Nothing is sent to our servers.</p>
              </div>
            ) : (
              <div style={{ ...cardStyle, overflowX: "auto" }}>
                <h2 style={{ fontSize: "1.1rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1rem" }}>📋 Holdings</h2>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid #30363d" }}>
                      {["Asset", "Amount", "Buy Price", "Current Price", "24h", "Value", "P&L", ""].map((h) => (
                        <th key={h} style={{ padding: "0.6rem 0.75rem", textAlign: "left", color: "#8b949e", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {enriched.map((h) => (
                      <tr key={h.id} style={{ borderBottom: "1px solid #21262d" }}>
                        <td style={{ padding: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                          <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: h.coin.color, display: "inline-block", flexShrink: 0 }} />
                          <span style={{ color: "#e6edf3", fontWeight: "600" }}>{h.coin.symbol}</span>
                          <span style={{ color: "#6e7681", fontSize: "0.8rem" }}>{h.coin.name}</span>
                        </td>
                        <td style={{ padding: "0.75rem", color: "#e6edf3" }}>{h.amount}</td>
                        <td style={{ padding: "0.75rem", color: "#8b949e" }}>${h.buyPrice.toLocaleString()}</td>
                        <td style={{ padding: "0.75rem", color: "#e6edf3", fontWeight: "600" }}>${h.currentPrice.toLocaleString()}</td>
                        <td style={{ padding: "0.75rem", color: h.change24h >= 0 ? "#3fb950" : "#f85149", fontWeight: "600" }}>
                          {h.change24h >= 0 ? "▲" : "▼"} {Math.abs(h.change24h).toFixed(2)}%
                        </td>
                        <td style={{ padding: "0.75rem", color: "#58a6ff", fontWeight: "700" }}>{formatCurrency(h.currentValue)}</td>
                        <td style={{ padding: "0.75rem", color: h.pnl >= 0 ? "#3fb950" : "#f85149", fontWeight: "600" }}>
                          {h.pnl >= 0 ? "+" : ""}{formatCurrency(h.pnl)}<br />
                          <span style={{ fontSize: "0.75rem" }}>({h.pnlPct >= 0 ? "+" : ""}{h.pnlPct.toFixed(1)}%)</span>
                        </td>
                        <td style={{ padding: "0.75rem" }}>
                          <button
                            onClick={() => removeHolding(h.id)}
                            style={{ background: "none", border: "none", color: "#f85149", cursor: "pointer", fontSize: "1rem", padding: "0.25rem" }}
                            title="Remove holding"
                          >✕</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  {holdings.length > 1 && (
                    <tfoot>
                      <tr style={{ borderTop: "2px solid #30363d" }}>
                        <td colSpan={5} style={{ padding: "0.75rem", color: "#8b949e", fontWeight: "600", fontSize: "0.8rem", textTransform: "uppercase" }}>Total</td>
                        <td style={{ padding: "0.75rem", color: "#58a6ff", fontWeight: "700", fontSize: "1rem" }}>{formatCurrency(totalValue)}</td>
                        <td style={{ padding: "0.75rem", color: totalPnL >= 0 ? "#3fb950" : "#f85149", fontWeight: "700" }}>
                          {totalPnL >= 0 ? "+" : ""}{formatCurrency(totalPnL)}<br />
                          <span style={{ fontSize: "0.75rem" }}>({totalPnLPct >= 0 ? "+" : ""}{totalPnLPct.toFixed(1)}%)</span>
                        </td>
                        <td />
                      </tr>
                    </tfoot>
                  )}
                </table>
              </div>
            )}
          </div>

          {/* Right: Donut Chart */}
          {holdings.length > 0 && (
            <div>
              <div style={{ ...cardStyle, textAlign: "center" }}>
                <h3 style={{ fontSize: "0.85rem", fontWeight: "700", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "1rem" }}>Allocation</h3>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <DonutChart slices={donutSlices} />
                </div>
                <div style={{ marginTop: "1rem", display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                  {enriched.map((h) => (
                    <div key={h.id} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.8rem" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: h.coin.color, display: "inline-block" }} />
                        <span style={{ color: "#e6edf3" }}>{h.coin.symbol}</span>
                      </div>
                      <span style={{ color: "#8b949e" }}>
                        {totalValue > 0 ? ((h.currentValue / totalValue) * 100).toFixed(1) : 0}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div style={{ ...cardStyle, marginTop: "1rem" }}>
                <h3 style={{ fontSize: "0.85rem", fontWeight: "700", color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.75rem" }}>Best Performer</h3>
                {enriched.length > 0 && (() => {
                  const best = [...enriched].sort((a, b) => b.pnlPct - a.pnlPct)[0];
                  return (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: best.coin.color, display: "inline-block" }} />
                      <span style={{ color: "#e6edf3", fontWeight: "600" }}>{best.coin.symbol}</span>
                      <span style={{ color: "#3fb950", marginLeft: "auto", fontWeight: "700" }}>+{best.pnlPct.toFixed(1)}%</span>
                    </div>
                  );
                })()}
              </div>
            </div>
          )}
        </div>

        {/* Privacy note */}
        <div style={{ marginTop: "2rem", padding: "1rem 1.25rem", background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.2)", borderRadius: "10px" }}>
          <p style={{ color: "#8b949e", fontSize: "0.85rem", margin: 0 }}>
            🔒 <strong style={{ color: "#e6edf3" }}>Privacy first:</strong> Your portfolio data is never stored on our servers. Everything runs in your browser. Prices refresh every 2 minutes from CoinGecko's public API.
          </p>
        </div>

        {/* Info Section */}
        <div style={{ marginTop: "3rem" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1rem" }}>Why Track Your Crypto Portfolio?</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.25rem" }}>
            {[
              { icon: "📈", title: "Monitor Real-Time P&L", desc: "See exactly how much you've made or lost on each position at a glance. Know your cost basis and current value." },
              { icon: "🥧", title: "Visualize Allocation", desc: "The donut chart shows your portfolio composition instantly. Spot over-concentration in a single asset." },
              { icon: "🔒", title: "100% Private", desc: "No login, no account, no tracking. Your holdings stay in your browser only. We never see your data." },
              { icon: "💡", title: "Make Better Decisions", desc: "Data-driven portfolio review helps you rebalance at the right time and avoid emotional trading." },
            ].map((card) => (
              <div key={card.title} style={cardStyle}>
                <div style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>{card.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: "600", color: "#e6edf3", marginBottom: "0.5rem" }}>{card.title}</h3>
                <p style={{ color: "#8b949e", fontSize: "0.875rem", lineHeight: "1.6", margin: 0 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        select option { background: #161b22; color: #e6edf3; }
        input:focus, select:focus { outline: none; border-color: rgba(99,102,241,0.6) !important; }
        button:hover { opacity: 0.9; }
      `}</style>
    </div>
  );
}
