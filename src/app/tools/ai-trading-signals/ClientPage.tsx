'use client';

"use client";

import { useState, useMemo, useCallback } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

// ── Types ────────────────────────────────────────────────────────────────────
interface TradingSignal {
  symbol: string;
  name: string;
  signal: "Strong Buy" | "Buy" | "Neutral" | "Sell" | "Strong Sell";
  confidence: number;
  rsi: number;
  macd: number;
  bollingerPos: number;
  ma50200: "bullish" | "bearish" | "neutral";
  volumeTrend: "increasing" | "decreasing" | "neutral";
  activeAddresses: number;
  whaleAccum: number;
  exchangeNetflow: number;
  riskLevel: "Low" | "Medium" | "High";
  lastSignalChange: string;
  signals: { timestamp: string; signal: string; confidence: number }[];
}

type TimeFrame = "1H" | "4H" | "1D" | "1W";
type SortBy = "symbol" | "signal" | "confidence" | "rsi";

// ── Mock Data Generator ──────────────────────────────────────────────────────
function generateMockSignals(): TradingSignal[] {
  const coins = [
    { symbol: "BTC", name: "Bitcoin" },
    { symbol: "ETH", name: "Ethereum" },
    { symbol: "BNB", name: "BNB" },
    { symbol: "XRP", name: "Ripple" },
    { symbol: "SOL", name: "Solana" },
    { symbol: "ADA", name: "Cardano" },
    { symbol: "DOGE", name: "Dogecoin" },
    { symbol: "POLKA", name: "Polkadot" },
    { symbol: "AVAX", name: "Avalanche" },
    { symbol: "MATIC", name: "Polygon" },
    { symbol: "LINK", name: "Chainlink" },
    { symbol: "UNI", name: "Uniswap" },
    { symbol: "ATOM", name: "Cosmos" },
    { symbol: "LTC", name: "Litecoin" },
    { symbol: "BCH", name: "Bitcoin Cash" },
    { symbol: "NEAR", name: "NEAR Protocol" },
    { symbol: "ARB", name: "Arbitrum" },
    { symbol: "OP", name: "Optimism" },
    { symbol: "SUI", name: "Sui" },
    { symbol: "PEPE", name: "Pepe" },
  ];

  const signals = ["Strong Buy", "Buy", "Neutral", "Sell", "Strong Sell"] as const;
  const riskLevels = ["Low", "Medium", "High"] as const;

  return coins.map((coin, idx) => {
    const seed = idx * 12345;
    const random = (offset: number) => Math.sin(seed + offset) * 100 % 100;

    const signal = signals[Math.floor(random(1) / 20)];
    const confidence = 50 + Math.floor(random(2) / 2);
    const rsi = 30 + Math.floor(random(3) / 2);
    const macd = -5 + Math.floor(random(4) / 5);
    const bollingerPos = Math.floor(random(5) / 50);
    const ma50200 = random(6) > 50 ? "bullish" : random(6) > 25 ? "bearish" : "neutral";
    const volumeTrend = random(7) > 50 ? "increasing" : random(7) > 25 ? "decreasing" : "neutral";
    const activeAddresses = 100000 + Math.floor(random(8) * 5000);
    const whaleAccum = -2 + Math.floor(random(9) / 25);
    const exchangeNetflow = -100000 + Math.floor(random(10) * 1000);
    const riskLevel = riskLevels[Math.floor(random(11) / 34)];

    const baseSignals = [
      { timestamp: "Now", signal: signal, confidence: confidence },
      { timestamp: "-1H", signal: signal === "Strong Buy" ? "Buy" : signal === "Buy" ? "Neutral" : signal, confidence: confidence - 5 },
      { timestamp: "-4H", signal: random(12) > 50 ? "Buy" : "Neutral", confidence: 60 },
      { timestamp: "-24H", signal: random(13) > 50 ? "Neutral" : "Sell", confidence: 55 },
      { timestamp: "-3D", signal: random(14) > 50 ? "Buy" : "Neutral", confidence: 58 },
      { timestamp: "-7D", signal: random(15) > 50 ? "Buy" : "Sell", confidence: 52 },
      { timestamp: "-30D", signal: random(16) > 50 ? "Strong Buy" : "Buy", confidence: 65 },
    ];

    return {
      symbol: coin.symbol,
      name: coin.name,
      signal,
      confidence,
      rsi,
      macd,
      bollingerPos,
      ma50200: ma50200 as "bullish" | "bearish" | "neutral",
      volumeTrend: volumeTrend as "increasing" | "decreasing" | "neutral",
      activeAddresses,
      whaleAccum,
      exchangeNetflow,
      riskLevel: riskLevel as "Low" | "Medium" | "High",
      lastSignalChange: `${confidence > 70 ? "Strong signal" : "Moderate signal"}`,
      signals: baseSignals,
    };
  });
}

// ── Utility Functions ────────────────────────────────────────────────────────
function getSignalColor(signal: string): string {
  switch (signal) {
    case "Strong Buy":
      return "#22c55e";
    case "Buy":
      return "#84cc16";
    case "Neutral":
      return "#f3ba2f";
    case "Sell":
      return "#f97316";
    case "Strong Sell":
      return "#f85149";
    default:
      return "#6366f1";
  }
}

function getMarketRegime(signals: TradingSignal[]): { regime: string; color: string; bullishCount: number } {
  const bullishCount = signals.filter(s => s.signal === "Strong Buy" || s.signal === "Buy").length;
  const bearishCount = signals.filter(s => s.signal === "Strong Sell" || s.signal === "Sell").length;

  if (bullishCount > signals.length * 0.6) return { regime: "Bull Market", color: "#22c55e", bullishCount };
  if (bearishCount > signals.length * 0.4) return { regime: "Bear Market", color: "#f85149", bullishCount };
  return { regime: "Sideways", color: "#f3ba2f", bullishCount };
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function AITradingSignalsPage() {
  const [timeFrame, setTimeFrame] = useState<TimeFrame>("1D");
  const [sortBy, setSortBy] = useState<SortBy>("confidence");
  const [selectedCoin, setSelectedCoin] = useState<string>("BTC");
  const [filterRisk, setFilterRisk] = useState<"All" | "Low" | "Medium" | "High">("All");

  const allSignals = useMemo(() => generateMockSignals(), []);
  const selectedSignalData = allSignals.find(s => s.symbol === selectedCoin) || allSignals[0];

  const marketRegime = useMemo(() => getMarketRegime(allSignals), [allSignals]);

  const filteredAndSortedSignals = useMemo(() => {
    let filtered = filterRisk === "All" ? allSignals : allSignals.filter(s => s.riskLevel === filterRisk);

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "symbol":
          return a.symbol.localeCompare(b.symbol);
        case "signal": {
          const signalOrder = { "Strong Buy": 5, "Buy": 4, "Neutral": 3, "Sell": 2, "Strong Sell": 1 };
          return (signalOrder[b.signal] || 0) - (signalOrder[a.signal] || 0);
        }
        case "confidence":
          return b.confidence - a.confidence;
        case "rsi":
          return b.rsi - a.rsi;
        default:
          return 0;
      }
    });
  }, [allSignals, sortBy, filterRisk]);

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "AI Trading Signals", href: "/tools/ai-trading-signals" }]} />

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "var(--color-text)", marginBottom: 8 }}>
            🤖 AI Trading Signals
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: 15, marginBottom: 12 }}>
            Algorithmic signals powered by technical analysis and on-chain metrics across 20 major cryptocurrencies.
          </p>
        </div>

        {/* Educational Disclaimer */}
        <div style={{ background: "linear-gradient(135deg, #f8514920, #f8514940)", borderRadius: 12, border: "1px solid #f8514980", padding: 16, marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
            <div style={{ fontSize: 20 }}>⚠️</div>
            <div>
              <div style={{ fontWeight: 700, color: "#f85149", marginBottom: 4 }}>Not Financial Advice</div>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                These AI signals are for educational and informational purposes only. They are generated algorithmically from simulated data. Crypto trading carries significant risk of loss. Never invest more than you can afford to lose. Always conduct your own research and consult with financial advisors before making investment decisions.
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* MARKET REGIME INDICATOR */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "var(--color-surface)", borderRadius: 16, border: "1px solid var(--color-border)", padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>
            📊 Market Regime
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            <div style={{ background: `${marketRegime.color}20`, borderRadius: 12, border: `1px solid ${marketRegime.color}60`, padding: 20, textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>
                Current Regime
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: marketRegime.color, marginBottom: 12 }}>
                {marketRegime.regime}
              </div>
              <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>
                {marketRegime.bullishCount} of {allSignals.length} signals bullish
              </div>
            </div>

            <div style={{ background: "#22c55e20", borderRadius: 12, border: "1px solid #22c55e60", padding: 20, textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>
                Strong Buy
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#22c55e" }}>
                {allSignals.filter(s => s.signal === "Strong Buy").length}
              </div>
            </div>

            <div style={{ background: "#f8514920", borderRadius: 12, border: "1px solid #f8514960", padding: 20, textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>
                Strong Sell
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#f85149" }}>
                {allSignals.filter(s => s.signal === "Strong Sell").length}
              </div>
            </div>

            <div style={{ background: "#f3ba2f20", borderRadius: 12, border: "1px solid #f3ba2f60", padding: 20, textAlign: "center" }}>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>
                Neutral
              </div>
              <div style={{ fontSize: 28, fontWeight: 900, color: "#f3ba2f" }}>
                {allSignals.filter(s => s.signal === "Neutral").length}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SIGNALS TABLE */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "var(--color-surface)", borderRadius: 16, border: "1px solid var(--color-border)", padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>
            📈 Trading Signals Dashboard
          </h2>

          {/* Controls */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 12, marginBottom: 24 }}>
            {/* TimeFrame Selector */}
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Time Frame
              </label>
              <div style={{ display: "flex", gap: 6 }}>
                {(["1H", "4H", "1D", "1W"] as TimeFrame[]).map(tf => (
                  <button
                    key={tf}
                    onClick={() => setTimeFrame(tf)}
                    style={{
                      flex: 1,
                      padding: "8px 12px",
                      borderRadius: 6,
                      border: `1px solid ${timeFrame === tf ? "#6366f1" : "var(--color-border)"}`,
                      background: timeFrame === tf ? "#6366f120" : "transparent",
                      color: timeFrame === tf ? "#818cf8" : "var(--color-text-secondary)",
                      fontSize: 11,
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    {tf}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort By */}
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as SortBy)}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <option value="confidence">Confidence Score</option>
                <option value="signal">Signal Strength</option>
                <option value="rsi">RSI Value</option>
                <option value="symbol">Symbol A-Z</option>
              </select>
            </div>

            {/* Risk Filter */}
            <div>
              <label style={{ display: "block", fontSize: 11, fontWeight: 700, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Risk Filter
              </label>
              <select
                value={filterRisk}
                onChange={e => setFilterRisk(e.target.value as "All" | "Low" | "Medium" | "High")}
                style={{
                  width: "100%",
                  padding: "8px 12px",
                  borderRadius: 6,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: "pointer",
                }}
              >
                <option value="All">All Risks</option>
                <option value="Low">Low Risk Only</option>
                <option value="Medium">Medium Risk Only</option>
                <option value="High">High Risk Only</option>
              </select>
            </div>
          </div>

          {/* Signals Table */}
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                  <th style={{ textAlign: "left", padding: "12px 12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Coin
                  </th>
                  <th style={{ textAlign: "center", padding: "12px 12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Signal
                  </th>
                  <th style={{ textAlign: "center", padding: "12px 12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Confidence
                  </th>
                  <th style={{ textAlign: "center", padding: "12px 12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    RSI (14)
                  </th>
                  <th style={{ textAlign: "center", padding: "12px 12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    MACD
                  </th>
                  <th style={{ textAlign: "center", padding: "12px 12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    MA 50/200
                  </th>
                  <th style={{ textAlign: "center", padding: "12px 12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Volume
                  </th>
                  <th style={{ textAlign: "center", padding: "12px 12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Risk
                  </th>
                  <th style={{ textAlign: "center", padding: "12px 12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredAndSortedSignals.map((coin, idx) => (
                  <tr
                    key={coin.symbol}
                    style={{
                      borderBottom: "1px solid var(--color-border)",
                      background: idx % 2 === 0 ? "transparent" : "var(--color-bg)",
                    }}
                  >
                    <td style={{ padding: "12px", fontWeight: 600, color: "var(--color-text)" }}>
                      <div>{coin.symbol}</div>
                      <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 2 }}>
                        {coin.name}
                      </div>
                    </td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      <div
                        style={{
                          display: "inline-block",
                          padding: "6px 10px",
                          borderRadius: 6,
                          background: `${getSignalColor(coin.signal)}20`,
                          color: getSignalColor(coin.signal),
                          fontWeight: 700,
                          fontSize: 12,
                        }}
                      >
                        {coin.signal}
                      </div>
                    </td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      <div style={{ fontWeight: 700, color: "var(--color-text)" }}>
                        {coin.confidence}%
                      </div>
                      <div style={{ width: "60px", height: "4px", background: "var(--color-border)", borderRadius: 2, margin: "6px auto 0", overflow: "hidden" }}>
                        <div
                          style={{
                            width: `${coin.confidence}%`,
                            height: "100%",
                            background: getSignalColor(coin.signal),
                            borderRadius: 2,
                          }}
                        />
                      </div>
                    </td>
                    <td style={{ padding: "12px", textAlign: "center", color: coin.rsi > 70 ? "#f85149" : coin.rsi < 30 ? "#22c55e" : "var(--color-text)" }}>
                      {coin.rsi.toFixed(1)}
                    </td>
                    <td style={{ padding: "12px", textAlign: "center", color: coin.macd > 0 ? "#22c55e" : "#f85149" }}>
                      {coin.macd > 0 ? "+" : ""}{coin.macd.toFixed(2)}
                    </td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      <span style={{ color: coin.ma50200 === "bullish" ? "#22c55e" : coin.ma50200 === "bearish" ? "#f85149" : "#f3ba2f", fontWeight: 600 }}>
                        {coin.ma50200.charAt(0).toUpperCase() + coin.ma50200.slice(1)}
                      </span>
                    </td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      <span style={{ color: coin.volumeTrend === "increasing" ? "#22c55e" : coin.volumeTrend === "decreasing" ? "#f85149" : "#f3ba2f", fontWeight: 600 }}>
                        {coin.volumeTrend === "increasing" ? "↑" : coin.volumeTrend === "decreasing" ? "↓" : "→"}
                      </span>
                    </td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 8px",
                          borderRadius: 4,
                          fontSize: 11,
                          fontWeight: 700,
                          background: coin.riskLevel === "Low" ? "#22c55e20" : coin.riskLevel === "Medium" ? "#f3ba2f20" : "#f8514920",
                          color: coin.riskLevel === "Low" ? "#22c55e" : coin.riskLevel === "Medium" ? "#f3ba2f" : "#f85149",
                        }}
                      >
                        {coin.riskLevel}
                      </span>
                    </td>
                    <td style={{ padding: "12px", textAlign: "center" }}>
                      <button
                        onClick={() => setSelectedCoin(coin.symbol)}
                        style={{
                          padding: "6px 12px",
                          borderRadius: 6,
                          border: "1px solid #6366f1",
                          background: "#6366f120",
                          color: "#818cf8",
                          fontSize: 11,
                          fontWeight: 700,
                          cursor: "pointer",
                        }}
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* DETAILED COIN ANALYSIS */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "var(--color-surface)", borderRadius: 16, border: "1px solid var(--color-border)", padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>
            🔍 Detailed Analysis: {selectedSignalData.name} ({selectedSignalData.symbol})
          </h2>

          {/* Main Signal Card */}
          <div
            style={{
              background: `${getSignalColor(selectedSignalData.signal)}20`,
              borderRadius: 12,
              border: `1px solid ${getSignalColor(selectedSignalData.signal)}60`,
              padding: 24,
              marginBottom: 24,
            }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 24 }}>
              <div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>
                  Current Signal
                </div>
                <div style={{ fontSize: 32, fontWeight: 900, color: getSignalColor(selectedSignalData.signal) }}>
                  {selectedSignalData.signal}
                </div>
              </div>

              <div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>
                  Confidence Score
                </div>
                <div style={{ fontSize: 32, fontWeight: 900, color: "#6366f1" }}>
                  {selectedSignalData.confidence}%
                </div>
                <div style={{ width: "100%", height: "8px", background: "var(--color-border)", borderRadius: 4, marginTop: 12, overflow: "hidden" }}>
                  <div
                    style={{
                      width: `${selectedSignalData.confidence}%`,
                      height: "100%",
                      background: getSignalColor(selectedSignalData.signal),
                      borderRadius: 4,
                    }}
                  />
                </div>
              </div>

              <div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 8, fontWeight: 600, textTransform: "uppercase" }}>
                  Risk Level
                </div>
                <div
                  style={{
                    fontSize: 32,
                    fontWeight: 900,
                    color: selectedSignalData.riskLevel === "Low" ? "#22c55e" : selectedSignalData.riskLevel === "Medium" ? "#f3ba2f" : "#f85149",
                  }}
                >
                  {selectedSignalData.riskLevel}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Indicators Panel */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 16 }}>
              📊 Technical Indicators
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
              {[
                {
                  label: "RSI (14)",
                  value: selectedSignalData.rsi.toFixed(1),
                  status: selectedSignalData.rsi > 70 ? "Overbought" : selectedSignalData.rsi < 30 ? "Oversold" : "Neutral",
                  color: selectedSignalData.rsi > 70 ? "#f85149" : selectedSignalData.rsi < 30 ? "#22c55e" : "#f3ba2f",
                },
                {
                  label: "MACD",
                  value: (selectedSignalData.macd > 0 ? "+" : "") + selectedSignalData.macd.toFixed(2),
                  status: selectedSignalData.macd > 0 ? "Bullish" : "Bearish",
                  color: selectedSignalData.macd > 0 ? "#22c55e" : "#f85149",
                },
                {
                  label: "Bollinger Bands",
                  value: `${Math.round(selectedSignalData.bollingerPos * 100)}%`,
                  status: selectedSignalData.bollingerPos > 0.75 ? "Upper Band" : selectedSignalData.bollingerPos < 0.25 ? "Lower Band" : "Middle",
                  color: selectedSignalData.bollingerPos > 0.75 ? "#f85149" : selectedSignalData.bollingerPos < 0.25 ? "#22c55e" : "#f3ba2f",
                },
                {
                  label: "MA 50/200",
                  value: selectedSignalData.ma50200.charAt(0).toUpperCase() + selectedSignalData.ma50200.slice(1),
                  status: selectedSignalData.ma50200 === "bullish" ? "Golden Cross" : selectedSignalData.ma50200 === "bearish" ? "Death Cross" : "Converging",
                  color: selectedSignalData.ma50200 === "bullish" ? "#22c55e" : selectedSignalData.ma50200 === "bearish" ? "#f85149" : "#f3ba2f",
                },
              ].map((ind, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--color-bg)",
                    borderRadius: 10,
                    border: "1px solid var(--color-border)",
                    padding: 16,
                  }}
                >
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)", fontWeight: 600, textTransform: "uppercase", marginBottom: 8 }}>
                    {ind.label}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: ind.color, marginBottom: 6 }}>
                    {ind.value}
                  </div>
                  <div style={{ fontSize: 11, color: ind.color, fontWeight: 600 }}>
                    {ind.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* On-Chain Metrics Panel */}
          <div style={{ marginBottom: 24 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 16 }}>
              ⛓️ On-Chain Metrics
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
              {[
                {
                  label: "Active Addresses",
                  value: (selectedSignalData.activeAddresses / 1000).toFixed(0) + "K",
                  change: Math.random() > 0.5 ? "↑ Increasing" : "↓ Decreasing",
                  color: Math.random() > 0.5 ? "#22c55e" : "#f85149",
                },
                {
                  label: "Whale Accumulation",
                  value: (selectedSignalData.whaleAccum > 0 ? "+" : "") + selectedSignalData.whaleAccum.toFixed(1) + "%",
                  change: selectedSignalData.whaleAccum > 0 ? "Accumulating" : "Distributing",
                  color: selectedSignalData.whaleAccum > 0 ? "#22c55e" : "#f85149",
                },
                {
                  label: "Exchange Netflow",
                  value: (selectedSignalData.exchangeNetflow > 0 ? "+" : "") + (selectedSignalData.exchangeNetflow / 100000).toFixed(1) + "M",
                  change: selectedSignalData.exchangeNetflow > 0 ? "Inflow" : "Outflow",
                  color: selectedSignalData.exchangeNetflow < 0 ? "#22c55e" : "#f85149",
                },
                {
                  label: "Volume Trend",
                  value: selectedSignalData.volumeTrend.charAt(0).toUpperCase() + selectedSignalData.volumeTrend.slice(1),
                  change: selectedSignalData.volumeTrend === "increasing" ? "Bullish Signal" : selectedSignalData.volumeTrend === "decreasing" ? "Bearish Signal" : "Neutral",
                  color: selectedSignalData.volumeTrend === "increasing" ? "#22c55e" : selectedSignalData.volumeTrend === "decreasing" ? "#f85149" : "#f3ba2f",
                },
              ].map((metric, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--color-bg)",
                    borderRadius: 10,
                    border: "1px solid var(--color-border)",
                    padding: 16,
                  }}
                >
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)", fontWeight: 600, textTransform: "uppercase", marginBottom: 8 }}>
                    {metric.label}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: "var(--color-text)", marginBottom: 6 }}>
                    {metric.value}
                  </div>
                  <div style={{ fontSize: 11, color: metric.color, fontWeight: 600 }}>
                    {metric.change}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Signal History */}
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 16 }}>
              📅 Signal History (Last 7 Periods)
            </div>
            <div style={{ background: "var(--color-bg)", borderRadius: 10, border: "1px solid var(--color-border)", padding: 0, overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--color-border)" }}>
                    <th style={{ textAlign: "left", padding: "12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase" }}>
                      Time Period
                    </th>
                    <th style={{ textAlign: "center", padding: "12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase" }}>
                      Signal
                    </th>
                    <th style={{ textAlign: "center", padding: "12px", color: "var(--color-text-secondary)", fontWeight: 700, fontSize: 11, textTransform: "uppercase" }}>
                      Confidence
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedSignalData.signals.map((sig, idx) => (
                    <tr key={idx} style={{ borderBottom: idx < selectedSignalData.signals.length - 1 ? "1px solid var(--color-border)" : "none" }}>
                      <td style={{ padding: "12px", color: "var(--color-text)", fontWeight: 600 }}>
                        {sig.timestamp}
                      </td>
                      <td style={{ padding: "12px", textAlign: "center" }}>
                        <span
                          style={{
                            display: "inline-block",
                            padding: "4px 10px",
                            borderRadius: 6,
                            background: `${getSignalColor(sig.signal)}20`,
                            color: getSignalColor(sig.signal),
                            fontWeight: 700,
                            fontSize: 11,
                          }}
                        >
                          {sig.signal}
                        </span>
                      </td>
                      <td style={{ padding: "12px", textAlign: "center", color: "var(--color-text)", fontWeight: 600 }}>
                        {sig.confidence}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* EDUCATIONAL CONTENT */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "var(--color-surface)", borderRadius: 16, border: "1px solid var(--color-border)", padding: 28 }}>
          <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>
            📚 Signal Guide
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16 }}>
            {[
              { signal: "Strong Buy", color: "#22c55e", description: "High confidence bullish signal. Multiple indicators aligned." },
              { signal: "Buy", color: "#84cc16", description: "Moderate bullish signal. Some indicators showing strength." },
              { signal: "Neutral", color: "#f3ba2f", description: "Inconclusive signals. No clear directional bias." },
              { signal: "Sell", color: "#f97316", description: "Moderate bearish signal. Some indicators showing weakness." },
              { signal: "Strong Sell", color: "#f85149", description: "High confidence bearish signal. Multiple indicators aligned." },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  background: `${item.color}10`,
                  border: `1px solid ${item.color}40`,
                  borderRadius: 10,
                  padding: 16,
                }}
              >
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: item.color }} />
                  <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-text)" }}>
                    {item.signal}
                  </div>
                </div>
                <div style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.5 }}>
                  {item.description}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 24, padding: 16, background: "var(--color-bg)", borderRadius: 10, border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text)", marginBottom: 8 }}>
              💡 How to Use These Signals
            </div>
            <ul style={{ fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.8, paddingLeft: 20, margin: 0 }}>
              <li>Signals are generated algorithmically from simulated technical and on-chain data</li>
              <li>Use signals as ONE of many tools in your analysis, not as standalone trading advice</li>
              <li>Monitor signal confidence score - higher percentages indicate stronger alignment</li>
              <li>Consider risk levels when evaluating entry and position sizing</li>
              <li>Watch for signal changes in the historical timeline for trend reversals</li>
              <li>Always perform your own research and never risk more than you can afford to lose</li>
            </ul>
          </div>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Ai Trading Signals",
              "url": "https://degen0x.com/tools/ai-trading-signals",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/ai-trading-signals" />
      </div>
  );
}
