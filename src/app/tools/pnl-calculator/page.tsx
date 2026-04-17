'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';

// ── Types ────────────────────────────────────────────────────────────────────
interface TradeEntry {
  id: string;
  coinName: string;
  buyPrice: number;
  sellPrice: number;
  amount: number;
  fees: number;
}

// ── Utility Functions ────────────────────────────────────────────────────────
function formatUSD(value: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

function formatPercent(value: number): string {
  return `${value >= 0 ? "+" : ""}${value.toFixed(2)}%`;
}

function calculateTradeMetrics(
  buyPrice: number,
  sellPrice: number,
  amount: number,
  feePercent: number,
  leverage: number = 1,
  isShort: boolean = false
) {
  const investmentAmount = amount * buyPrice;
  const fees = investmentAmount * (feePercent / 100);

  if (isShort) {
    const shortProfit = (buyPrice - sellPrice) * amount;
    const shortFees = investmentAmount * (feePercent / 100);
    const pnl = shortProfit - shortFees;
    const grossProfit = shortProfit * leverage;
    const leveragedPnl = grossProfit - shortFees;
    const pnlPercent = (pnl / investmentAmount) * 100;
    const roi = ((leveragedPnl - investmentAmount) / investmentAmount) * 100;
    const breakEven = sellPrice;
    const liquidationPrice = buyPrice + (buyPrice * 0.05) / leverage;

    return {
      pnl: leveragedPnl,
      pnlPercent,
      roi,
      grossProfit,
      fees,
      breakEven,
      liquidationPrice,
      investmentAmount,
    };
  } else {
    const grossProfit = (sellPrice - buyPrice) * amount;
    const leveragedProfit = grossProfit * leverage;
    const pnl = leveragedProfit - fees;
    const pnlPercent = (pnl / investmentAmount) * 100;
    const roi = ((leveragedProfit - investmentAmount) / investmentAmount) * 100;
    const breakEven = buyPrice + (buyPrice * feePercent) / 100;
    const liquidationPrice = buyPrice - (buyPrice * 0.05) / leverage;

    return {
      pnl,
      pnlPercent,
      roi,
      grossProfit: leveragedProfit,
      fees,
      breakEven,
      liquidationPrice,
      investmentAmount,
    };
  }
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function PnLCalculatorPage() {
  // Trade Calculator States
  const [buyPrice, setBuyPrice] = useState(50000);
  const [sellPrice, setSellPrice] = useState(55000);
  const [investAmount, setInvestAmount] = useState(10000);
  const [useQuantity, setUseQuantity] = useState(false);
  const [quantity, setQuantity] = useState(0.2);
  const [feePercent, setFeePercent] = useState(0.1);
  const [leverage, setLeverage] = useState(1);
  const [isShort, setIsShort] = useState(false);

  // Multi-Trade States
  const [trades, setTrades] = useState<TradeEntry[]>([]);
  const [multiCoinName, setMultiCoinName] = useState("BTC");
  const [multiBuyPrice, setMultiBuyPrice] = useState(45000);
  const [multiSellPrice, setMultiSellPrice] = useState(50000);
  const [multiAmount, setMultiAmount] = useState(0.5);
  const [multiTradeFees, setMultiTradeFees] = useState(0.1);

  // Tax States
  const [taxGain, setTaxGain] = useState(5000);
  const [isLongTerm, setIsLongTerm] = useState(false);
  const [taxBracket, setTaxBracket] = useState(22);

  // Compute trade calculator metrics
  const tradeAmount = useQuantity ? quantity : investAmount / buyPrice;
  const tradeMetrics = calculateTradeMetrics(buyPrice, sellPrice, tradeAmount, feePercent, leverage, isShort);
  const isProfitable = tradeMetrics.pnl >= 0;

  // Multi-trade functions
  const addTrade = () => {
    if (!multiCoinName || multiBuyPrice <= 0 || multiSellPrice <= 0 || multiAmount <= 0) return;
    const newTrade: TradeEntry = {
      id: Date.now().toString(),
      coinName: multiCoinName,
      buyPrice: multiBuyPrice,
      sellPrice: multiSellPrice,
      amount: multiAmount,
      fees: multiTradeFees,
    };
    setTrades([...trades, newTrade]);
    setMultiCoinName("");
    setMultiBuyPrice(0);
    setMultiSellPrice(0);
    setMultiAmount(0);
  };

  const removeTrade = (id: string) => {
    setTrades(trades.filter(t => t.id !== id));
  };

  // Multi-trade metrics
  const multiTradeMetrics = useMemo(() => {
    if (trades.length === 0) {
      return { totalInvested: 0, totalReturn: 0, totalPnl: 0, pnlPercent: 0, winRate: 0, bestTrade: null, worstTrade: null };
    }

    let totalInvested = 0;
    let totalReturn = 0;
    let winCount = 0;
    let tradeResults: { id: string; pnl: number; pnlPercent: number }[] = [];

    trades.forEach(trade => {
      const invested = trade.amount * trade.buyPrice;
      const grossReturn = (trade.sellPrice - trade.buyPrice) * trade.amount;
      const fees = invested * (trade.fees / 100);
      const pnl = grossReturn - fees;

      totalInvested += invested;
      totalReturn += pnl;
      if (pnl > 0) winCount++;

      tradeResults.push({ id: trade.id, pnl, pnlPercent: (pnl / invested) * 100 });
    });

    const bestTrade = tradeResults.reduce((a, b) => (a.pnl > b.pnl ? a : b)) || null;
    const worstTrade = tradeResults.reduce((a, b) => (a.pnl < b.pnl ? a : b)) || null;

    return {
      totalInvested,
      totalReturn,
      totalPnl: totalReturn,
      pnlPercent: (totalReturn / totalInvested) * 100,
      winRate: (winCount / trades.length) * 100,
      bestTrade,
      worstTrade,
    };
  }, [trades]);

  // Tax calculation
  const estimatedTax = taxGain * (taxBracket / 100);
  const afterTaxProfit = taxGain - estimatedTax;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "P&L Calculator", href: "/tools/pnl-calculator" }]} />

        {/* Header */}
        <div style={{ marginBottom: 40 }}>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: "var(--color-text)", marginBottom: 8 }}>
            💰 Crypto Profit & Loss Calculator
          </h1>
          <p style={{ color: "var(--color-text-secondary)", fontSize: 15 }}>
            Calculate trade P&L instantly with leverage, fees, multi-trade tracking, and tax estimation.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 1: TRADE CALCULATOR */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "var(--color-surface)", borderRadius: 16, border: "1px solid var(--color-border)", padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
            📊 Trade Calculator
          </h2>

          {/* Controls Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 20 }}>
            {/* Buy Price */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Buy Price ($)
              </label>
              <input
                type="number"
                value={buyPrice}
                onChange={e => setBuyPrice(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              />
            </div>

            {/* Sell Price */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Sell Price ($)
              </label>
              <input
                value={sellPrice}
                onChange={e => setSellPrice(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              />
            </div>

            {/* Investment / Quantity Toggle */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                {useQuantity ? "Quantity (coins)" : "Investment ($)"}
              </label>
              <div style={{ display: "flex", gap: 6 }}>
                <input
                  value={useQuantity ? quantity : investAmount}
                  onChange={e => (useQuantity ? setQuantity(Number(e.target.value)) : setInvestAmount(Number(e.target.value)))}
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-bg)",
                    color: "var(--color-text)",
                    fontSize: 14,
                    fontWeight: 600,
                  }}
                />
                <button
                  onClick={() => setUseQuantity(!useQuantity)}
                  style={{
                    padding: "10px 12px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "#6366f120",
                    color: "#818cf8",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                >
                  Toggle
                </button>
              </div>
            </div>

            {/* Fee % */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Fee %
              </label>
              <input
                value={feePercent}
                onChange={e => setFeePercent(Number(e.target.value))}
                step="0.1"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              />
            </div>

            {/* Leverage */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Leverage (1-100x)
              </label>
              <input
                value={leverage}
                onChange={e => setLeverage(Math.min(100, Math.max(1, Number(e.target.value))))}
                min="1"
                max="100"
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              />
            </div>

            {/* Long/Short */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Position
              </label>
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  onClick={() => setIsShort(false)}
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: `1px solid ${!isShort ? "#22c55e" : "var(--color-border)"}`,
                    background: !isShort ? "#22c55e20" : "transparent",
                    color: !isShort ? "#22c55e" : "var(--color-text-secondary)",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  📈 Long
                </button>
                <button
                  onClick={() => setIsShort(true)}
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: `1px solid ${isShort ? "#f85149" : "var(--color-border)"}`,
                    background: isShort ? "#f8514920" : "transparent",
                    color: isShort ? "#f85149" : "var(--color-text-secondary)",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  📉 Short
                </button>
              </div>
            </div>
          </div>

          {/* Results Display */}
          <div style={{ marginTop: 28 }}>
            {/* Main P&L Display */}
            <div style={{
              background: `linear-gradient(135deg, ${isProfitable ? "#22c55e40" : "#f8514940"}, ${isProfitable ? "#16a34a40" : "#dc262640"})`,
              borderRadius: 12,
              border: `1px solid ${isProfitable ? "#22c55e80" : "#f8514980"}`,
              padding: 24,
              marginBottom: 20,
              textAlign: "center",
            }}>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
                Profit & Loss
              </div>
              <div style={{
                fontSize: 42,
                fontWeight: 900,
                color: isProfitable ? "#22c55e" : "#f85149",
                marginBottom: 8,
              }}>
                {formatUSD(tradeMetrics.pnl)}
              </div>
              <div style={{ fontSize: 18, fontWeight: 800, color: isProfitable ? "#22c55e" : "#f85149" }}>
                {formatPercent(tradeMetrics.pnlPercent)}
              </div>
            </div>

            {/* Metrics Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
              {[
                { label: "P&L %", value: formatPercent(tradeMetrics.pnlPercent), color: isProfitable ? "#22c55e" : "#f85149" },
                { label: "ROI", value: formatPercent(tradeMetrics.roi), color: isProfitable ? "#22c55e" : "#f85149" },
                { label: "Entry", value: formatUSD(buyPrice), color: "#6366f1" },
                { label: "Exit", value: formatUSD(sellPrice), color: "#6366f1" },
                { label: "Fees", value: formatUSD(tradeMetrics.fees), color: "#F3BA2F" },
                { label: "Investment", value: formatUSD(tradeMetrics.investmentAmount), color: "#06b6d4" },
                { label: "Break-even", value: formatUSD(tradeMetrics.breakEven), color: "#9945FF" },
                ...(leverage > 1 ? [{ label: "Liquidation", value: formatUSD(tradeMetrics.liquidationPrice), color: "#f85149" }] : []),
              ].map((m, i) => (
                <div key={i} style={{ background: "var(--color-bg)", borderRadius: 10, padding: 12, border: "1px solid var(--color-border)" }}>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: m.color }}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 2: MULTI-TRADE TRACKER */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "var(--color-surface)", borderRadius: 16, border: "1px solid var(--color-border)", padding: 28, marginBottom: 32 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
            📈 Multi-Trade Tracker
          </h2>

          {/* Add Trade Form */}
          {trades.length < 5 && (
            <div style={{
              background: "var(--color-bg)",
              borderRadius: 12,
              border: "1px dashed var(--color-border)",
              padding: 16,
              marginBottom: 20,
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 12 }}>
                <input
                  type="text"
                  placeholder="Coin name (BTC, ETH...)"
                  value={multiCoinName}
                  onChange={e => setMultiCoinName(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontSize: 13,
                  }}
                />
                <input
                  placeholder="Buy price"
                  value={multiBuyPrice || ""}
                  onChange={e => setMultiBuyPrice(Number(e.target.value))}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontSize: 13,
                  }}
                />
                <input
                  placeholder="Sell price"
                  value={multiSellPrice || ""}
                  onChange={e => setMultiSellPrice(Number(e.target.value))}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontSize: 13,
                  }}
                />
                <input
                  placeholder="Amount"
                  value={multiAmount || ""}
                  onChange={e => setMultiAmount(Number(e.target.value))}
                  step="0.001"
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontSize: 13,
                  }}
                />
                <input
                  placeholder="Fees %"
                  value={multiTradeFees || ""}
                  onChange={e => setMultiTradeFees(Number(e.target.value))}
                  style={{
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: "1px solid var(--color-border)",
                    background: "var(--color-surface)",
                    color: "var(--color-text)",
                    fontSize: 13,
                  }}
                />
                <button
                  onClick={addTrade}
                  style={{
                    padding: "10px 16px",
                    borderRadius: 8,
                    border: "1px solid #6366f1",
                    background: "#6366f120",
                    color: "#818cf8",
                    fontSize: 13,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  + Add Trade
                </button>
              </div>
            </div>
          )}

          {/* Trades List */}
          {trades.length > 0 && (
            <div style={{ marginBottom: 20 }}>
              {trades.map(trade => {
                const invested = trade.amount * trade.buyPrice;
                const grossProfit = (trade.sellPrice - trade.buyPrice) * trade.amount;
                const fees = invested * (trade.fees / 100);
                const pnl = grossProfit - fees;
                const isProfitable = pnl >= 0;

                return (
                  <div key={trade.id} style={{
                    background: "var(--color-bg)",
                    borderRadius: 10,
                    border: `1px solid ${isProfitable ? "#22c55e40" : "#f8514940"}`,
                    borderLeft: `4px solid ${isProfitable ? "#22c55e" : "#f85149"}`,
                    padding: 14,
                    marginBottom: 10,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 12,
                  }}>
                    <div style={{ flex: 1, minWidth: 150 }}>
                      <div style={{ fontWeight: 700, color: "var(--color-text)", fontSize: 14 }}>
                        {trade.coinName}
                      </div>
                      <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: 2 }}>
                        {trade.amount} coins @ {formatUSD(trade.buyPrice)} → {formatUSD(trade.sellPrice)}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 14, fontWeight: 800, color: isProfitable ? "#22c55e" : "#f85149" }}>
                        {formatUSD(pnl)}
                      </div>
                      <div style={{ fontSize: 11, color: isProfitable ? "#22c55e" : "#f85149", marginTop: 2 }}>
                        {formatPercent((pnl / invested) * 100)}
                      </div>
                    </div>
                    <button
                      onClick={() => removeTrade(trade.id)}
                      style={{
                        padding: "6px 10px",
                        borderRadius: 6,
                        border: "1px solid var(--color-border)",
                        background: "transparent",
                        color: "var(--color-text-secondary)",
                        fontSize: 12,
                        cursor: "pointer",
                      }}
                    >
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          )}

          {/* Multi-Trade Summary */}
          {trades.length > 0 && (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12 }}>
              {[
                { label: "Total Invested", value: formatUSD(multiTradeMetrics.totalInvested), color: "#06b6d4" },
                { label: "Total Return", value: formatUSD(multiTradeMetrics.totalPnl), color: multiTradeMetrics.totalPnl >= 0 ? "#22c55e" : "#f85149" },
                { label: "Overall P&L %", value: formatPercent(multiTradeMetrics.pnlPercent), color: multiTradeMetrics.totalPnl >= 0 ? "#22c55e" : "#f85149" },
                { label: "Win Rate", value: `${multiTradeMetrics.winRate.toFixed(0)}%`, color: multiTradeMetrics.winRate >= 50 ? "#22c55e" : "#F3BA2F" },
              ].map((m, i) => (
                <div key={i} style={{ background: "var(--color-bg)", borderRadius: 10, padding: 14, border: "1px solid var(--color-border)", textAlign: "center" }}>
                  <div style={{ fontSize: 10, color: "var(--color-text-secondary)", marginBottom: 6, fontWeight: 600, textTransform: "uppercase" }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: m.color }}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {trades.length === 0 && (
            <div style={{ textAlign: "center", padding: 32, color: "var(--color-text-secondary)" }}>
              Add trades above to track your multi-trade performance
            </div>
          )}
        </div>

        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        {/* SECTION 3: TAX ESTIMATOR */}
        {/* ═══════════════════════════════════════════════════════════════════════════════ */}
        <div style={{ background: "var(--color-surface)", borderRadius: 16, border: "1px solid var(--color-border)", padding: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, color: "var(--color-text)", marginBottom: 20, display: "flex", alignItems: "center", gap: 8 }}>
            🏛️ Tax Estimator
          </h2>

          {/* Tax Inputs */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16, marginBottom: 24 }}>
            {/* Gain amount */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Capital Gain ($)
              </label>
              <input
                value={taxGain}
                onChange={e => setTaxGain(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              />
            </div>

            {/* Holding period */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Holding Period
              </label>
              <div style={{ display: "flex", gap: 6 }}>
                <button
                  onClick={() => setIsLongTerm(false)}
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: `1px solid ${!isLongTerm ? "#F3BA2F" : "var(--color-border)"}`,
                    background: !isLongTerm ? "#F3BA2F20" : "transparent",
                    color: !isLongTerm ? "#F3BA2F" : "var(--color-text-secondary)",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Short (&lt; 1yr)
                </button>
                <button
                  onClick={() => setIsLongTerm(true)}
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: 8,
                    border: `1px solid ${isLongTerm ? "#22c55e" : "var(--color-border)"}`,
                    background: isLongTerm ? "#22c55e20" : "transparent",
                    color: isLongTerm ? "#22c55e" : "var(--color-text-secondary)",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  Long (&gt; 1yr)
                </button>
              </div>
            </div>

            {/* Tax bracket */}
            <div>
              <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                Tax Bracket
              </label>
              <select
                value={taxBracket}
                onChange={e => setTaxBracket(Number(e.target.value))}
                style={{
                  width: "100%",
                  padding: "10px 14px",
                  borderRadius: 8,
                  border: "1px solid var(--color-border)",
                  background: "var(--color-bg)",
                  color: "var(--color-text)",
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                <option value={10}>10% (Lowest)</option>
                <option value={22}>22% (Middle)</option>
                <option value={24}>24% (Upper)</option>
                <option value={32}>32% (High)</option>
                <option value={37}>37% (Highest)</option>
              </select>
            </div>
          </div>

          {/* Tax Results */}
          <div style={{
            background: `linear-gradient(135deg, #f8514920, #f8514940)`,
            borderRadius: 12,
            border: "1px solid #f8514960",
            padding: 24,
          }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 20 }}>
              {[
                { label: "Capital Gain", value: formatUSD(taxGain), color: "#6366f1" },
                { label: "Tax Owed", value: formatUSD(estimatedTax), color: "#f85149" },
                { label: "After-Tax Profit", value: formatUSD(afterTaxProfit), color: "#22c55e" },
                { label: "Effective Rate", value: `${(taxBracket * (taxGain > 0 ? 1 : 0)).toFixed(1)}%`, color: "#F3BA2F" },
              ].map((m, i) => (
                <div key={i} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 6, fontWeight: 600, textTransform: "uppercase" }}>
                    {m.label}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: m.color }}>
                    {m.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tax disclaimer */}
          <div style={{ marginTop: 16, padding: 12, background: "var(--color-bg)", borderRadius: 8, border: "1px solid var(--color-border)", fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
            <strong>Disclaimer:</strong> This is a rough estimate for the USA tax system. Actual tax liability depends on your specific situation (federal vs state, filing status, other income). Consult a tax professional for accurate advice.
          </div>
        </div>
      </div>
      <RelatedContent category="tools" currentSlug="/tools/pnl-calculator" />
    </div>
  );
}
