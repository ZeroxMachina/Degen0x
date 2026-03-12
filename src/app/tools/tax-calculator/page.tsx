'use client';

"use client";

import { useState, useMemo } from "react";
import Breadcrumb from "@/components/Breadcrumb";

// ── Types ─────────────────────────────────────────────────────────────────────
type CostBasisMethod = "FIFO" | "LIFO" | "HIFO";
type TaxYear = "2025" | "2024" | "2023";

interface Trade {
  id: string;
  type: "buy" | "sell";
  coin: string;
  amount: number;
  price: number;
  date: string;
  fee: number;
}

interface TaxLot {
  amount: number;
  costBasis: number;
  date: string;
  fee: number;
}

interface GainLoss {
  coin: string;
  proceeds: number;
  costBasis: number;
  gain: number;
  isLongTerm: boolean;
  date: string;
  amount: number;
}

// ── Tax Brackets 2025 ─────────────────────────────────────────────────────────
const SHORT_TERM_BRACKETS = [
  { min: 0, max: 11925, rate: 0.10 },
  { min: 11925, max: 48475, rate: 0.12 },
  { min: 48475, max: 103350, rate: 0.22 },
  { min: 103350, max: 197300, rate: 0.24 },
  { min: 197300, max: 250525, rate: 0.32 },
  { min: 250525, max: 626350, rate: 0.35 },
  { min: 626350, max: Infinity, rate: 0.37 },
];

const LONG_TERM_BRACKETS = [
  { min: 0, max: 48350, rate: 0.00 },
  { min: 48350, max: 533400, rate: 0.15 },
  { min: 533400, max: Infinity, rate: 0.20 },
];

const COINS = ["BTC", "ETH", "SOL", "BNB", "XRP", "DOGE", "AVAX", "LINK", "ADA", "DOT", "MATIC", "ATOM"];

function calculateTaxOwed(gains: number, brackets: typeof SHORT_TERM_BRACKETS): number {
  if (gains <= 0) return 0;
  let tax = 0;
  let remaining = gains;
  for (const bracket of brackets) {
    const taxable = Math.min(remaining, bracket.max - bracket.min);
    if (taxable <= 0) break;
    tax += taxable * bracket.rate;
    remaining -= taxable;
    if (remaining <= 0) break;
  }
  return tax;
}

function isLongTerm(buyDate: string, sellDate: string): boolean {
  const buy = new Date(buyDate);
  const sell = new Date(sellDate);
  const diff = sell.getTime() - buy.getTime();
  return diff > 365 * 24 * 60 * 60 * 1000;
}

function computeGains(trades: Trade[], method: CostBasisMethod): GainLoss[] {
  const lots: Record<string, TaxLot[]> = {};
  const results: GainLoss[] = [];

  const sorted = [...trades].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  for (const trade of sorted) {
    if (!lots[trade.coin]) lots[trade.coin] = [];

    if (trade.type === "buy") {
      lots[trade.coin].push({
        amount: trade.amount,
        costBasis: trade.price * trade.amount + trade.fee,
        date: trade.date,
        fee: trade.fee,
      });
    } else {
      // Sell — match against lots
      let remainingSell = trade.amount;
      const proceeds = trade.price * trade.amount - trade.fee;
      const coinLots = lots[trade.coin] || [];

      // Sort lots per method
      let sortedLots: TaxLot[];
      if (method === "FIFO") {
        sortedLots = [...coinLots].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
      } else if (method === "LIFO") {
        sortedLots = [...coinLots].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      } else {
        // HIFO — highest cost basis first
        sortedLots = [...coinLots].sort((a, b) => (b.costBasis / b.amount) - (a.costBasis / a.amount));
      }

      let totalCostBasis = 0;
      for (const lot of sortedLots) {
        if (remainingSell <= 0) break;
        const usedAmount = Math.min(lot.amount, remainingSell);
        const lotCostPerUnit = lot.costBasis / lot.amount;
        const usedCost = usedAmount * lotCostPerUnit;
        totalCostBasis += usedCost;
        remainingSell -= usedAmount;
        lot.amount -= usedAmount;
        lot.costBasis -= usedCost;
      }

      // Remove depleted lots
      lots[trade.coin] = coinLots.filter(l => l.amount > 0.000001);

      const gain = proceeds - totalCostBasis;
      results.push({
        coin: trade.coin,
        proceeds,
        costBasis: totalCostBasis,
        gain,
        isLongTerm: sortedLots[0] ? isLongTerm(sortedLots[0].date, trade.date) : false,
        date: trade.date,
        amount: trade.amount,
      });
    }
  }

  return results;
}

function fmt(n: number): string {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 2 }).format(n);
}

const DEMO_TRADES: Trade[] = [
  { id: "1", type: "buy",  coin: "BTC", amount: 0.5,  price: 42000, date: "2024-01-15", fee: 12 },
  { id: "2", type: "buy",  coin: "ETH", amount: 2.0,  price: 2200,  date: "2024-02-10", fee: 8 },
  { id: "3", type: "sell", coin: "BTC", amount: 0.25, price: 67000, date: "2025-03-01", fee: 18 },
  { id: "4", type: "buy",  coin: "SOL", amount: 10,   price: 95,    date: "2024-06-01", fee: 5 },
  { id: "5", type: "sell", coin: "ETH", amount: 1.0,  price: 3800,  date: "2025-01-20", fee: 10 },
  { id: "6", type: "sell", coin: "SOL", amount: 5,    price: 200,   date: "2025-02-14", fee: 4 },
];

// ── Colors ────────────────────────────────────────────────────────────────────
const S = {
  bg: "#0d1117",
  surface: "#161b22",
  surface2: "#1c2330",
  border: "#30363d",
  text: "#e6edf3",
  text2: "#8b949e",
  green: "#3fb950",
  blue: "#58a6ff",
  purple: "#818cf8",
  red: "#f85149",
  orange: "#f0883e",
  yellow: "#d29922",
};

export default function TaxCalculatorPage() {
  const [trades, setTrades] = useState<Trade[]>(DEMO_TRADES);
  const [method, setMethod] = useState<CostBasisMethod>("FIFO");
  const [income, setIncome] = useState(75000);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTrade, setNewTrade] = useState<Partial<Trade>>({
    type: "buy", coin: "BTC", amount: 0.1, price: 60000, date: "2025-01-01", fee: 0,
  });

  const gains = useMemo(() => computeGains(trades, method), [trades, method]);

  const summary = useMemo(() => {
    const stGains = gains.filter(g => !g.isLongTerm && g.gain > 0).reduce((s, g) => s + g.gain, 0);
    const ltGains = gains.filter(g => g.isLongTerm && g.gain > 0).reduce((s, g) => s + g.gain, 0);
    const stLosses = gains.filter(g => !g.isLongTerm && g.gain < 0).reduce((s, g) => s + Math.abs(g.gain), 0);
    const ltLosses = gains.filter(g => g.isLongTerm && g.gain < 0).reduce((s, g) => s + Math.abs(g.gain), 0);

    const netST = stGains - stLosses;
    const netLT = ltGains - ltLosses;

    // Loss harvesting across categories
    const finalST = netST >= 0 ? netST : 0;
    const finalLT = netLT + (netST < 0 ? netST : 0); // carry ST losses to LT

    const stTax = calculateTaxOwed(finalST, SHORT_TERM_BRACKETS);
    const ltTax = calculateTaxOwed(Math.max(0, finalLT), LONG_TERM_BRACKETS);

    const netGain = stGains + ltGains - stLosses - ltLosses;
    const totalTax = stTax + ltTax;

    return { stGains, ltGains, stLosses, ltLosses, netST, netLT, stTax, ltTax, totalTax, netGain };
  }, [gains, income]);

  function addTrade() {
    if (!newTrade.coin || !newTrade.amount || !newTrade.price || !newTrade.date) return;
    setTrades(prev => [...prev, {
      id: Date.now().toString(),
      type: newTrade.type as "buy" | "sell",
      coin: newTrade.coin!,
      amount: Number(newTrade.amount),
      price: Number(newTrade.price),
      date: newTrade.date!,
      fee: Number(newTrade.fee ?? 0),
    }]);
    setShowAddForm(false);
    setNewTrade({ type: "buy", coin: "BTC", amount: 0.1, price: 60000, date: "2025-01-01", fee: 0 });
  }

  function removeTrade(id: string) {
    setTrades(prev => prev.filter(t => t.id !== id));
  }

  const inputStyle = {
    background: S.surface2,
    border: `1px solid ${S.border}`,
    borderRadius: 8,
    color: S.text,
    padding: "8px 12px",
    fontSize: 13,
    width: "100%",
  };

  const btnStyle = (color: string, bg: string) => ({
    padding: "10px 20px",
    borderRadius: 8,
    border: `1px solid ${color}40`,
    background: bg,
    color,
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
  });

  return (
    <div style={{ minHeight: "100vh", background: S.bg, color: S.text }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Crypto Tax Calculator", href: "/tools/tax-calculator" }]} />

        {/* Header */}
        <div style={{ paddingBottom: 32, paddingTop: 20 }}>
          <div style={{ display: "inline-block", padding: "4px 14px", background: "#6366f120", border: "1px solid #6366f140", borderRadius: 20, fontSize: 12, color: S.purple, fontWeight: 600, marginBottom: 14 }}>
            🧮 Free Crypto Tax Calculator
          </div>
          <h1 style={{ fontSize: 32, fontWeight: 900, color: S.text, marginBottom: 10 }}>
            Crypto Tax Calculator 2025
          </h1>
          <p style={{ color: S.text2, fontSize: 15, maxWidth: 640 }}>
            Calculate your crypto capital gains taxes using FIFO, LIFO, or HIFO cost-basis methods. Enter your trades below — short-term vs long-term gains are computed automatically.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: 24, alignItems: "start" }}>

          {/* LEFT — Trades + Results */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>

            {/* Controls */}
            <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: 20 }}>
              <h2 style={{ fontSize: 15, fontWeight: 800, marginBottom: 16 }}>⚙️ Settings</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={{ fontSize: 12, color: S.text2, display: "block", marginBottom: 6 }}>Cost Basis Method</label>
                  <div style={{ display: "flex", gap: 8 }}>
                    {(["FIFO", "LIFO", "HIFO"] as CostBasisMethod[]).map(m => (
                      <button key={m} onClick={() => setMethod(m)} style={{
                        flex: 1, padding: "8px 4px", borderRadius: 8, fontSize: 12, fontWeight: 700, cursor: "pointer",
                        background: method === m ? "#6366f120" : S.surface2,
                        border: `1px solid ${method === m ? S.purple : S.border}`,
                        color: method === m ? S.purple : S.text2,
                      }}>
                        {m}
                      </button>
                    ))}
                  </div>
                  <div style={{ fontSize: 11, color: S.text2, marginTop: 6 }}>
                    {method === "FIFO" && "First In First Out — oldest lots sold first"}
                    {method === "LIFO" && "Last In First Out — newest lots sold first"}
                    {method === "HIFO" && "Highest In First Out — minimizes taxable gains"}
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: 12, color: S.text2, display: "block", marginBottom: 6 }}>Annual Income (for bracket)</label>
                  <input
                    type="number"
                    value={income}
                    onChange={e => setIncome(Number(e.target.value))}
                    style={inputStyle}
                    min={0}
                    step={1000}
                  />
                  <div style={{ fontSize: 11, color: S.text2, marginTop: 6 }}>Used for short-term capital gains tax bracket calculation</div>
                </div>
              </div>
            </div>

            {/* Trade List */}
            <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: 20 }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                <h2 style={{ fontSize: 15, fontWeight: 800 }}>📝 Trades ({trades.length})</h2>
                <button onClick={() => setShowAddForm(v => !v)} style={btnStyle(S.green, "#3fb95015")}>
                  {showAddForm ? "✕ Cancel" : "+ Add Trade"}
                </button>
              </div>

              {/* Add Trade Form */}
              {showAddForm && (
                <div style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 16 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 10 }}>
                    <div>
                      <label style={{ fontSize: 11, color: S.text2, display: "block", marginBottom: 4 }}>Type</label>
                      <select value={newTrade.type} onChange={e => setNewTrade(p => ({ ...p, type: e.target.value as "buy" | "sell" }))} style={inputStyle}>
                        <option value="buy">Buy</option>
                        <option value="sell">Sell</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: S.text2, display: "block", marginBottom: 4 }}>Coin</label>
                      <select value={newTrade.coin} onChange={e => setNewTrade(p => ({ ...p, coin: e.target.value }))} style={inputStyle}>
                        {COINS.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: S.text2, display: "block", marginBottom: 4 }}>Date</label>
                      <input type="date" value={newTrade.date} onChange={e => setNewTrade(p => ({ ...p, date: e.target.value }))} style={inputStyle} />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: S.text2, display: "block", marginBottom: 4 }}>Amount (coins)</label>
                      <input type="number" value={newTrade.amount} onChange={e => setNewTrade(p => ({ ...p, amount: Number(e.target.value) }))} style={inputStyle} step="any" min="0" />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: S.text2, display: "block", marginBottom: 4 }}>Price per Coin (USD)</label>
                      <input type="number" value={newTrade.price} onChange={e => setNewTrade(p => ({ ...p, price: Number(e.target.value) }))} style={inputStyle} step="any" min="0" />
                    </div>
                    <div>
                      <label style={{ fontSize: 11, color: S.text2, display: "block", marginBottom: 4 }}>Fee (USD)</label>
                      <input type="number" value={newTrade.fee} onChange={e => setNewTrade(p => ({ ...p, fee: Number(e.target.value) }))} style={inputStyle} step="any" min="0" />
                    </div>
                  </div>
                  <button onClick={addTrade} style={{ ...btnStyle(S.green, "#3fb95020"), width: "100%" }}>
                    ✓ Add Trade
                  </button>
                </div>
              )}

              {/* Table */}
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                  <thead>
                    <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                      {["Type", "Coin", "Amount", "Price", "Total", "Date", "Fee", ""].map(h => (
                        <th key={h} style={{ padding: "6px 8px", color: S.text2, fontWeight: 700, textAlign: "left", whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[...trades].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()).map(t => (
                      <tr key={t.id} style={{ borderBottom: `1px solid ${S.border}30` }}>
                        <td style={{ padding: "8px", color: t.type === "buy" ? S.green : S.red, fontWeight: 700 }}>
                          {t.type === "buy" ? "▲ BUY" : "▼ SELL"}
                        </td>
                        <td style={{ padding: "8px", fontWeight: 700 }}>{t.coin}</td>
                        <td style={{ padding: "8px", color: S.text2 }}>{t.amount}</td>
                        <td style={{ padding: "8px", color: S.text2 }}>{fmt(t.price)}</td>
                        <td style={{ padding: "8px" }}>{fmt(t.price * t.amount)}</td>
                        <td style={{ padding: "8px", color: S.text2, whiteSpace: "nowrap" }}>{t.date}</td>
                        <td style={{ padding: "8px", color: S.text2 }}>{fmt(t.fee)}</td>
                        <td style={{ padding: "8px" }}>
                          <button onClick={() => removeTrade(t.id)} style={{ background: "none", border: "none", color: S.red, cursor: "pointer", fontSize: 14 }}>✕</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Gain/Loss Breakdown */}
            {gains.length > 0 && (
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: 20 }}>
                <h2 style={{ fontSize: 15, fontWeight: 800, marginBottom: 16 }}>📊 Gain / Loss Detail</h2>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                    <thead>
                      <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                        {["Coin", "Date", "Amount Sold", "Proceeds", "Cost Basis", "Gain/Loss", "Term"].map(h => (
                          <th key={h} style={{ padding: "6px 8px", color: S.text2, fontWeight: 700, textAlign: "left", whiteSpace: "nowrap" }}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {gains.map((g, i) => (
                        <tr key={i} style={{ borderBottom: `1px solid ${S.border}30` }}>
                          <td style={{ padding: "8px", fontWeight: 700 }}>{g.coin}</td>
                          <td style={{ padding: "8px", color: S.text2 }}>{g.date}</td>
                          <td style={{ padding: "8px", color: S.text2 }}>{g.amount}</td>
                          <td style={{ padding: "8px" }}>{fmt(g.proceeds)}</td>
                          <td style={{ padding: "8px" }}>{fmt(g.costBasis)}</td>
                          <td style={{ padding: "8px", color: g.gain >= 0 ? S.green : S.red, fontWeight: 700 }}>
                            {g.gain >= 0 ? "+" : ""}{fmt(g.gain)}
                          </td>
                          <td style={{ padding: "8px" }}>
                            <span style={{
                              fontSize: 10, fontWeight: 700, padding: "2px 8px", borderRadius: 5,
                              background: g.isLongTerm ? "#3fb95015" : "#f8514915",
                              color: g.isLongTerm ? S.green : S.red,
                              border: `1px solid ${g.isLongTerm ? S.green : S.red}30`,
                            }}>
                              {g.isLongTerm ? "Long-term" : "Short-term"}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Explainer */}
            <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: 24 }}>
              <h2 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16 }}>📚 How Crypto Taxes Work (2025)</h2>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, fontSize: 13, color: S.text2, lineHeight: 1.7 }}>
                <div>
                  <h3 style={{ color: S.text, fontWeight: 700, marginBottom: 8 }}>Short-Term vs Long-Term</h3>
                  <p>If you hold crypto for <strong style={{ color: S.text }}>1 year or less</strong>, gains are taxed as ordinary income (10%–37%). Hold longer than 1 year and you qualify for <strong style={{ color: S.green }}>long-term capital gains rates</strong> of 0%, 15%, or 20%.</p>
                </div>
                <div>
                  <h3 style={{ color: S.text, fontWeight: 700, marginBottom: 8 }}>Cost Basis Methods</h3>
                  <p><strong style={{ color: S.text }}>FIFO</strong> is the IRS default. <strong style={{ color: S.text }}>HIFO</strong> minimizes taxes by selling your most expensive lots first — reducing gains (or increasing losses). You must make this election per-exchange.</p>
                </div>
                <div>
                  <h3 style={{ color: S.text, fontWeight: 700, marginBottom: 8 }}>What's a Taxable Event?</h3>
                  <p>Selling crypto, trading one coin for another, and using crypto to pay for goods/services are all taxable. <strong style={{ color: S.text }}>Buying crypto is NOT a taxable event</strong> — only selling or trading triggers taxes.</p>
                </div>
                <div>
                  <h3 style={{ color: S.text, fontWeight: 700, marginBottom: 8 }}>Tax Loss Harvesting</h3>
                  <p>You can deduct up to <strong style={{ color: S.text }}>$3,000 in net capital losses</strong> against ordinary income per year. Excess losses carry forward. Crypto has <strong style={{ color: S.green }}>no wash-sale rule</strong> — unlike stocks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Summary Panel */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16, position: "sticky", top: 20 }}>
            {/* Tax Summary */}
            <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: 20 }}>
              <h2 style={{ fontSize: 15, fontWeight: 800, marginBottom: 16 }}>💰 Tax Summary ({method})</h2>

              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {/* Net Gain */}
                <div style={{ background: S.surface2, borderRadius: 10, padding: 16, textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: S.text2, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.05em" }}>Net Capital Gain / Loss</div>
                  <div style={{ fontSize: 28, fontWeight: 900, color: summary.netGain >= 0 ? S.green : S.red }}>
                    {summary.netGain >= 0 ? "+" : ""}{fmt(summary.netGain)}
                  </div>
                </div>

                {/* ST/LT breakdown */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  <div style={{ background: S.surface2, borderRadius: 8, padding: 12 }}>
                    <div style={{ fontSize: 10, color: S.red, fontWeight: 700, marginBottom: 4 }}>SHORT-TERM NET</div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: summary.netST >= 0 ? S.text : S.red }}>
                      {fmt(summary.netST)}
                    </div>
                  </div>
                  <div style={{ background: S.surface2, borderRadius: 8, padding: 12 }}>
                    <div style={{ fontSize: 10, color: S.green, fontWeight: 700, marginBottom: 4 }}>LONG-TERM NET</div>
                    <div style={{ fontSize: 18, fontWeight: 800, color: summary.netLT >= 0 ? S.text : S.red }}>
                      {fmt(summary.netLT)}
                    </div>
                  </div>
                </div>

                {/* Line items */}
                {[
                  { label: "Short-term gains", val: summary.stGains, color: S.text },
                  { label: "Short-term losses", val: -summary.stLosses, color: summary.stLosses > 0 ? S.green : S.text2 },
                  { label: "Long-term gains", val: summary.ltGains, color: S.text },
                  { label: "Long-term losses", val: -summary.ltLosses, color: summary.ltLosses > 0 ? S.green : S.text2 },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: `1px solid ${S.border}30`, fontSize: 13 }}>
                    <span style={{ color: S.text2 }}>{item.label}</span>
                    <span style={{ fontWeight: 700, color: item.color }}>{fmt(item.val)}</span>
                  </div>
                ))}

                <div style={{ height: 1, background: S.border, margin: "4px 0" }} />

                {/* Tax Owed */}
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: S.text2 }}>Short-term tax owed</span>
                  <span style={{ fontWeight: 700, color: S.orange }}>{fmt(summary.stTax)}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                  <span style={{ color: S.text2 }}>Long-term tax owed</span>
                  <span style={{ fontWeight: 700, color: S.orange }}>{fmt(summary.ltTax)}</span>
                </div>

                <div style={{ background: "#f0883e15", border: `1px solid ${S.orange}30`, borderRadius: 10, padding: 14, textAlign: "center" }}>
                  <div style={{ fontSize: 11, color: S.orange, fontWeight: 700, marginBottom: 4 }}>ESTIMATED TAX OWED</div>
                  <div style={{ fontSize: 32, fontWeight: 900, color: S.orange }}>{fmt(summary.totalTax)}</div>
                  <div style={{ fontSize: 11, color: S.text2, marginTop: 4 }}>Based on {method} method · 2025 brackets</div>
                </div>
              </div>
            </div>

            {/* Method Comparison */}
            <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 14, padding: 20 }}>
              <h3 style={{ fontSize: 14, fontWeight: 800, marginBottom: 12 }}>🔄 Method Comparison</h3>
              {(["FIFO", "LIFO", "HIFO"] as CostBasisMethod[]).map(m => {
                const g = computeGains(trades, m);
                const stG = g.filter(x => !x.isLongTerm && x.gain > 0).reduce((s, x) => s + x.gain, 0);
                const ltG = g.filter(x => x.isLongTerm && x.gain > 0).reduce((s, x) => s + x.gain, 0);
                const stL = g.filter(x => !x.isLongTerm && x.gain < 0).reduce((s, x) => s + Math.abs(x.gain), 0);
                const ltL = g.filter(x => x.isLongTerm && x.gain < 0).reduce((s, x) => s + Math.abs(x.gain), 0);
                const tax = calculateTaxOwed(Math.max(0, stG - stL), SHORT_TERM_BRACKETS) +
                            calculateTaxOwed(Math.max(0, ltG - ltL), LONG_TERM_BRACKETS);
                return (
                  <div key={m} onClick={() => setMethod(m)} style={{
                    background: method === m ? "#6366f115" : S.surface2,
                    border: `1px solid ${method === m ? S.purple : S.border}`,
                    borderRadius: 8, padding: 12, marginBottom: 8, cursor: "pointer",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                  }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 13, color: method === m ? S.purple : S.text }}>{m}</div>
                      <div style={{ fontSize: 11, color: S.text2, marginTop: 2 }}>
                        {m === "FIFO" && "Default · Predictable"}
                        {m === "LIFO" && "Recent lots first"}
                        {m === "HIFO" && "Tax minimized ✨"}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontSize: 15, fontWeight: 800, color: S.orange }}>{fmt(tax)}</div>
                      <div style={{ fontSize: 10, color: S.text2 }}>est. tax</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Disclaimer */}
            <div style={{ background: "#d2992215", border: `1px solid #d2992240`, borderRadius: 10, padding: 14, fontSize: 11, color: S.yellow, lineHeight: 1.6 }}>
              ⚠️ <strong>Disclaimer:</strong> This calculator provides estimates only. Crypto tax law is complex. Consult a qualified tax professional or use dedicated software (Koinly, TaxBit, CoinTracker) for filing. Not financial or tax advice.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
