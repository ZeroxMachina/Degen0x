'use client';

"use client";

// ─────────────────────────────────────────────
//  Crypto Trading Journal
//  degen0x · Sprint 25 · Day 31
//  Log trades, analyze patterns, improve edge
//  Features: trade log, P&L analytics, win rate,
//  emotion tracker, mistake tagger, performance charts
// ─────────────────────────────────────────────

import { useState, useMemo } from "react";
import Link from "next/link";

/* ─── Types ─── */
interface Trade {
  id: string;
  date: string;
  asset: string;
  side: "Long" | "Short";
  entryPrice: number;
  exitPrice: number;
  size: number; // USD notional
  fees: number;
  pnl: number;
  pnlPercent: number;
  setup: string;
  emotion: "Calm" | "FOMO" | "Fear" | "Greedy" | "Disciplined" | "Revenge";
  mistakes: string[];
  notes: string;
  tags: string[];
  duration: string; // "2h", "3d", etc.
};

const SETUPS = [
  "Breakout", "Pullback", "Reversal", "Range Scalp", "News Play",
  "DCA Entry", "Swing", "Momentum", "Support Bounce", "Resistance Test",
];

const EMOTIONS = ["Calm", "FOMO", "Fear", "Greedy", "Disciplined", "Revenge"] as const;

const MISTAKE_OPTIONS = [
  "Entered too early", "Exited too early", "Moved SL", "No SL set",
  "Over-leveraged", "Ignored trend", "Chased entry", "Sized too big",
  "Sized too small", "Ignored news", "Emotional trade",
];

const EMOTION_COLORS: Record<string, string> = {
  Calm: "#3fb950",
  FOMO: "#f0883e",
  Fear: "#f85149",
  Greedy: "#d29922",
  Disciplined: "#58a6ff",
  Revenge: "#f85149",
};

/* ─── Seed Data ─── */
const SEED_TRADES: Trade[] = [
  {
    id: "t1",
    date: "2026-03-10",
    asset: "BTC",
    side: "Long",
    entryPrice: 84200,
    exitPrice: 87500,
    size: 5000,
    fees: 12.5,
    pnl: 183.5,
    pnlPercent: 3.67,
    setup: "Breakout",
    emotion: "Calm",
    mistakes: [],
    notes: "Clean breakout above weekly resistance. Held conviction.",
    tags: ["Winner", "High Conviction"],
    duration: "2d",
  },
  {
    id: "t2",
    date: "2026-03-09",
    asset: "ETH",
    side: "Long",
    entryPrice: 2180,
    exitPrice: 2095,
    size: 3000,
    fees: 9.0,
    pnl: -126,
    pnlPercent: -4.20,
    setup: "Pullback",
    emotion: "FOMO",
    mistakes: ["Entered too early", "No SL set"],
    notes: "Rushed in without proper confirmation. Lesson learned.",
    tags: ["Loser", "Lesson"],
    duration: "4h",
  },
  {
    id: "t3",
    date: "2026-03-08",
    asset: "SOL",
    side: "Long",
    entryPrice: 142,
    exitPrice: 158,
    size: 4000,
    fees: 10,
    pnl: 440,
    pnlPercent: 11.0,
    setup: "Support Bounce",
    emotion: "Disciplined",
    mistakes: [],
    notes: "Perfect entry at key support. Patient execution.",
    tags: ["Winner", "Best Trade"],
    duration: "1d 6h",
  },
  {
    id: "t4",
    date: "2026-03-07",
    asset: "AVAX",
    side: "Short",
    entryPrice: 38.5,
    exitPrice: 36.2,
    size: 2500,
    fees: 7.5,
    pnl: 141.5,
    pnlPercent: 5.66,
    setup: "Resistance Test",
    emotion: "Calm",
    mistakes: [],
    notes: "Shorted the double top. Clean execution.",
    tags: ["Winner", "Counter-trend"],
    duration: "8h",
  },
  {
    id: "t5",
    date: "2026-03-06",
    asset: "DOGE",
    side: "Long",
    entryPrice: 0.162,
    exitPrice: 0.148,
    size: 1500,
    fees: 4.5,
    pnl: -134.5,
    pnlPercent: -8.97,
    setup: "Momentum",
    emotion: "FOMO",
    mistakes: ["Chased entry", "Over-leveraged", "Ignored trend"],
    notes: "Classic revenge trade after ETH loss. Should never have entered.",
    tags: ["Loser", "Lesson", "Emotional Trade"],
    duration: "3h",
  },
  {
    id: "t6",
    date: "2026-03-05",
    asset: "BTC",
    side: "Long",
    entryPrice: 82100,
    exitPrice: 85300,
    size: 8000,
    fees: 20,
    pnl: 292,
    pnlPercent: 3.65,
    setup: "DCA Entry",
    emotion: "Disciplined",
    mistakes: [],
    notes: "Planned DCA in accumulation zone. Solid thesis.",
    tags: ["Winner", "Planned"],
    duration: "5d",
  },
];

const BLANK_FORM = {
  date: new Date().toISOString().split("T")[0],
  asset: "",
  side: "Long" as "Long" | "Short",
  entryPrice: "",
  exitPrice: "",
  size: "",
  fees: "",
  setup: "Breakout",
  emotion: "Calm" as const,
  mistakes: [] as string[],
  notes: "",
  tags: "",
  duration: "",
};

export default function TradingJournalPage() {
  const [trades, setTrades] = useState<Trade[]>(SEED_TRADES);
  const [showForm, setShowForm] = useState(false);
  const [activeTab, setActiveTab] = useState<"log" | "analytics" | "patterns">("log");
  const [filterAsset, setFilterAsset] = useState("ALL");
  const [filterOutcome, setFilterOutcome] = useState("ALL");
  const [form, setForm] = useState(BLANK_FORM);
  const [selectedMistakes, setSelectedMistakes] = useState<string[]>([]);

  /* ─── Computed Stats ─── */
  const stats = useMemo(() => {
    const wins = trades.filter((t) => t.pnl > 0);
    const losses = trades.filter((t) => t.pnl < 0);
    const totalPnl = trades.reduce((s, t) => s + t.pnl, 0);
    const avgWin = wins.length ? wins.reduce((s, t) => s + t.pnl, 0) / wins.length : 0;
    const avgLoss = losses.length ? losses.reduce((s, t) => s + t.pnl, 0) / losses.length : 0;
    const winRate = trades.length ? (wins.length / trades.length) * 100 : 0;
    const profitFactor = avgLoss !== 0 ? Math.abs(avgWin / avgLoss) : 0;
    const bestTrade = trades.reduce((best, t) => (t.pnl > (best?.pnl ?? -Infinity) ? t : best), trades[0]);
    const worstTrade = trades.reduce((worst, t) => (t.pnl < (worst?.pnl ?? Infinity) ? t : worst), trades[0]);
    const emotionCounts: Record<string, { wins: number; losses: number }> = {};
    trades.forEach((t) => {
      if (!emotionCounts[t.emotion]) emotionCounts[t.emotion] = { wins: 0, losses: 0 };
      if (t.pnl > 0) emotionCounts[t.emotion].wins++;
      else emotionCounts[t.emotion].losses++;
    });
    const mistakeCounts: Record<string, number> = {};
    trades.forEach((t) => t.mistakes.forEach((m) => { mistakeCounts[m] = (mistakeCounts[m] || 0) + 1; }));
    const setupPerf: Record<string, { trades: number; totalPnl: number; wins: number }> = {};
    trades.forEach((t) => {
      if (!setupPerf[t.setup]) setupPerf[t.setup] = { trades: 0, totalPnl: 0, wins: 0 };
      setupPerf[t.setup].trades++;
      setupPerf[t.setup].totalPnl += t.pnl;
      if (t.pnl > 0) setupPerf[t.setup].wins++;
    });
    return { wins, losses, totalPnl, avgWin, avgLoss, winRate, profitFactor, bestTrade, worstTrade, emotionCounts, mistakeCounts, setupPerf };
  }, [trades]);

  /* ─── Filtered Log ─── */
  const filteredTrades = trades.filter((t) => {
    if (filterAsset !== "ALL" && t.asset !== filterAsset) return false;
    if (filterOutcome === "WIN" && t.pnl <= 0) return false;
    if (filterOutcome === "LOSS" && t.pnl >= 0) return false;
    return true;
  });

  const uniqueAssets = Array.from(new Set(trades.map((t) => t.asset)));

  /* ─── Add Trade ─── */
  function handleAddTrade() {
    const entry = parseFloat(form.entryPrice as string);
    const exit = parseFloat(form.exitPrice as string);
    const size = parseFloat(form.size as string);
    const fees = parseFloat(form.fees as string) || 0;
    if (!form.asset || isNaN(entry) || isNaN(exit) || isNaN(size)) return;
    const direction = form.side === "Long" ? 1 : -1;
    const rawPnl = ((exit - entry) / entry) * size * direction;
    const pnl = rawPnl - fees;
    const pnlPercent = ((exit - entry) / entry) * 100 * direction;
    const newTrade: Trade = {
      id: `t${Date.now()}`,
      date: form.date,
      asset: form.asset.toUpperCase(),
      side: form.side,
      entryPrice: entry,
      exitPrice: exit,
      size,
      fees,
      pnl,
      pnlPercent,
      setup: form.setup,
      emotion: form.emotion,
      mistakes: selectedMistakes,
      notes: form.notes,
      tags: form.tags ? form.tags.split(",").map((t) => t.trim()) : [],
      duration: form.duration,
    };
    setTrades([newTrade, ...trades]);
    setForm(BLANK_FORM);
    setSelectedMistakes([]);
    setShowForm(false);
  }

  function toggleMistake(m: string) {
    setSelectedMistakes((prev) => prev.includes(m) ? prev.filter((x) => x !== m) : [...prev, m]);
  }

  /* ─── Render ─── */
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-[var(--color-text-secondary)] mb-6">
        <Link href="/" className="hover:text-[var(--color-primary)]">Home</Link>
        <span>›</span>
        <Link href="/tools" className="hover:text-[var(--color-primary)]">Tools</Link>
        <span>›</span>
        <span>Trading Journal</span>
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-black text-[var(--color-text)]">
            📓 Crypto Trading Journal
          </h1>
          <p className="text-[var(--color-text-secondary)] mt-1">
            Log every trade. Track your edge. Stop repeating mistakes.
          </p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-5 py-2.5 rounded-xl font-bold text-[var(--color-text)] text-sm"
          style={{ background: "var(--color-primary)" }}
        >
          {showForm ? "✕ Cancel" : "+ Log Trade"}
        </button>
      </div>

      {/* Add Trade Form */}
      {showForm && (
        <div
          className="rounded-2xl border border-[var(--color-border)] p-6 mb-8"
          style={{ background: "var(--color-surface)" }}
        >
          <h2 className="text-lg font-black text-[var(--color-text)] mb-5">Log New Trade</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div>
              <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Date</label>
              <input type="date" value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)]" />
            </div>
            <div>
              <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Asset</label>
              <input placeholder="BTC, ETH, SOL…" value={form.asset}
                onChange={(e) => setForm({ ...form, asset: e.target.value })}
                className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)]" />
            </div>
            <div>
              <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Side</label>
              <select value={form.side} onChange={(e) => setForm({ ...form, side: e.target.value as "Long" | "Short" })}
                className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)]">
                <option>Long</option>
                <option>Short</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Duration</label>
              <input placeholder="2h, 3d…" value={form.duration}
                onChange={(e) => setForm({ ...form, duration: e.target.value })}
                className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)]" />
            </div>
            <div>
              <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Entry Price ($)</label>
              <input type="number" placeholder="0.00" value={form.entryPrice}
                onChange={(e) => setForm({ ...form, entryPrice: e.target.value })}
                className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)]" />
            </div>
            <div>
              <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Exit Price ($)</label>
              <input type="number" placeholder="0.00" value={form.exitPrice}
                onChange={(e) => setForm({ ...form, exitPrice: e.target.value })}
                className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)]" />
            </div>
            <div>
              <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Position Size ($)</label>
              <input type="number" placeholder="1000" value={form.size}
                onChange={(e) => setForm({ ...form, size: e.target.value })}
                className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)]" />
            </div>
            <div>
              <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Fees ($)</label>
              <input type="number" placeholder="0" value={form.fees}
                onChange={(e) => setForm({ ...form, fees: e.target.value })}
                className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)]" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Setup</label>
              <select value={form.setup} onChange={(e) => setForm({ ...form, setup: e.target.value })}
                className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)]">
                {SETUPS.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <div>
              <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Emotion / Mindset</label>
              <select value={form.emotion} onChange={(e) => setForm({ ...form, emotion: e.target.value as typeof form.emotion })}
                className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)]">
                {EMOTIONS.map((em) => <option key={em}>{em}</option>)}
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-2 block">Mistakes (select all that apply)</label>
            <div className="flex flex-wrap gap-2">
              {MISTAKE_OPTIONS.map((m) => (
                <button key={m}
                  onClick={() => toggleMistake(m)}
                  className="text-xs px-3 py-1.5 rounded-lg border font-semibold transition-all"
                  style={{
                    background: selectedMistakes.includes(m) ? "#f8514920" : "var(--color-bg)",
                    borderColor: selectedMistakes.includes(m) ? "#f85149" : "var(--color-border)",
                    color: selectedMistakes.includes(m) ? "#f85149" : "var(--color-text-secondary)",
                  }}>
                  {m}
                </button>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Notes / Thesis</label>
            <textarea rows={2} placeholder="What was your thesis? What happened? What would you do differently?" value={form.notes}
              onChange={(e) => setForm({ ...form, notes: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)] resize-none" />
          </div>
          <div className="mb-5">
            <label className="text-xs font-bold text-[var(--color-text-secondary)] mb-1 block">Tags (comma-separated)</label>
            <input placeholder="Winner, High Conviction, Lesson…" value={form.tags}
              onChange={(e) => setForm({ ...form, tags: e.target.value })}
              className="w-full rounded-lg border border-[var(--color-border)] px-3 py-2 text-sm bg-[var(--color-bg)] text-[var(--color-text)]" />
          </div>
          <button onClick={handleAddTrade}
            className="px-6 py-2.5 rounded-xl font-bold text-[var(--color-text)] text-sm"
            style={{ background: "var(--color-primary)" }}>
            Save Trade
          </button>
        </div>
      )}

      {/* KPI Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-8">
        {[
          { label: "Total P&L", value: `${stats.totalPnl >= 0 ? "+" : ""}$${stats.totalPnl.toFixed(0)}`, color: stats.totalPnl >= 0 ? "#3fb950" : "#f85149" },
          { label: "Win Rate", value: `${stats.winRate.toFixed(0)}%`, color: "#58a6ff" },
          { label: "Profit Factor", value: stats.profitFactor.toFixed(2), color: "#bc8cff" },
          { label: "Total Trades", value: trades.length, color: "#e6edf3" },
          { label: "Winners", value: stats.wins.length, color: "#3fb950" },
          { label: "Avg Win", value: `$${stats.avgWin.toFixed(0)}`, color: "#3fb950" },
          { label: "Avg Loss", value: `$${Math.abs(stats.avgLoss).toFixed(0)}`, color: "#f85149" },
        ].map((k) => (
          <div key={k.label} className="rounded-xl border border-[var(--color-border)] p-3 text-center" style={{ background: "var(--color-surface)" }}>
            <div className="text-xs text-[var(--color-text-secondary)] mb-1">{k.label}</div>
            <div className="text-lg font-black" style={{ color: k.color }}>{k.value}</div>
          </div>
        ))}
      </div>

      {/* Tab Bar */}
      <div className="flex gap-2 mb-6 border-b border-[var(--color-border)]">
        {(["log", "analytics", "patterns"] as const).map((tab) => (
          <button key={tab}
            onClick={() => setActiveTab(tab)}
            className="px-4 py-2 text-sm font-bold capitalize border-b-2 transition-all -mb-px"
            style={{
              borderColor: activeTab === tab ? "var(--color-primary)" : "transparent",
              color: activeTab === tab ? "var(--color-primary)" : "var(--color-text-secondary)",
            }}>
            {tab === "log" ? "📋 Trade Log" : tab === "analytics" ? "📊 Analytics" : "🔍 Patterns"}
          </button>
        ))}
      </div>

      {/* TRADE LOG */}
      {activeTab === "log" && (
        <div>
          <div className="flex gap-3 mb-4 flex-wrap">
            <select value={filterAsset} onChange={(e) => setFilterAsset(e.target.value)}
              className="rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-sm bg-[var(--color-surface)] text-[var(--color-text)]">
              <option value="ALL">All Assets</option>
              {uniqueAssets.map((a) => <option key={a}>{a}</option>)}
            </select>
            <select value={filterOutcome} onChange={(e) => setFilterOutcome(e.target.value)}
              className="rounded-lg border border-[var(--color-border)] px-3 py-1.5 text-sm bg-[var(--color-surface)] text-[var(--color-text)]">
              <option value="ALL">All Outcomes</option>
              <option value="WIN">Winners Only</option>
              <option value="LOSS">Losers Only</option>
            </select>
            <div className="text-xs text-[var(--color-text-secondary)] self-center">
              Showing {filteredTrades.length} of {trades.length} trades
            </div>
          </div>

          <div className="space-y-3">
            {filteredTrades.map((trade) => (
              <div key={trade.id}
                className="rounded-xl border p-4"
                style={{
                  background: "var(--color-surface)",
                  borderColor: trade.pnl >= 0 ? "#3fb95040" : "#f8514940",
                  borderLeft: `4px solid ${trade.pnl >= 0 ? "#3fb950" : "#f85149"}`,
                }}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="text-center">
                      <div className="text-sm font-black text-[var(--color-text)]">{trade.asset}</div>
                      <div className="text-xs font-bold px-2 py-0.5 rounded-full mt-0.5"
                        style={{
                          background: trade.side === "Long" ? "#3fb95020" : "#f8514920",
                          color: trade.side === "Long" ? "#3fb950" : "#f85149",
                        }}>
                        {trade.side}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)]">
                        {trade.date} · {trade.duration || "—"}
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                        Entry ${trade.entryPrice.toLocaleString()} → Exit ${trade.exitPrice.toLocaleString()}
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{ background: "#6366f120", color: "#818cf8" }}>
                          {trade.setup}
                        </span>
                        <span className="text-xs px-2 py-0.5 rounded-full font-semibold"
                          style={{ background: `${EMOTION_COLORS[trade.emotion]}20`, color: EMOTION_COLORS[trade.emotion] }}>
                          {trade.emotion}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-black" style={{ color: trade.pnl >= 0 ? "#3fb950" : "#f85149" }}>
                      {trade.pnl >= 0 ? "+" : ""}${trade.pnl.toFixed(0)}
                    </div>
                    <div className="text-xs font-bold" style={{ color: trade.pnl >= 0 ? "#3fb950" : "#f85149" }}>
                      {trade.pnlPercent >= 0 ? "+" : ""}{trade.pnlPercent.toFixed(2)}%
                    </div>
                    <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                      Size: ${trade.size.toLocaleString()}
                    </div>
                  </div>
                </div>
                {(trade.notes || trade.mistakes.length > 0) && (
                  <div className="mt-3 pt-3 border-t border-[var(--color-border)]">
                    {trade.mistakes.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {trade.mistakes.map((m) => (
                          <span key={m} className="text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{ background: "#f8514915", color: "#f85149" }}>
                            ⚠️ {m}
                          </span>
                        ))}
                      </div>
                    )}
                    {trade.notes && (
                      <p className="text-xs text-[var(--color-text-secondary)] italic">"{trade.notes}"</p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ANALYTICS */}
      {activeTab === "analytics" && (
        <div className="space-y-6">

          {/* P&L Equity Curve */}
          <div className="rounded-2xl border border-[var(--color-border)] p-5" style={{ background: "var(--color-surface)" }}>
            <h3 className="text-sm font-black text-[var(--color-text)] mb-4">📈 Cumulative P&L Curve</h3>
            <div className="flex items-end gap-1 h-32">
              {(() => {
                let running = 0;
                const points = [...trades].reverse().map((t) => { running += t.pnl; return running; });
                const min = Math.min(0, ...points);
                const max = Math.max(1, ...points);
                const range = max - min;
                return points.map((p, i) => {
                  const heightPct = ((p - min) / range) * 100;
                  return (
                    <div key={i} className="flex-1 rounded-sm transition-all"
                      style={{
                        height: `${Math.max(4, heightPct)}%`,
                        background: p >= 0 ? "#3fb950" : "#f85149",
                        opacity: 0.8,
                      }}
                      title={`$${p.toFixed(0)}`} />
                  );
                });
              })()}
            </div>
            <div className="flex justify-between mt-2 text-xs text-[var(--color-text-secondary)]">
              <span>Trade #1</span>
              <span>Total: <span className="font-bold" style={{ color: stats.totalPnl >= 0 ? "#3fb950" : "#f85149" }}>{stats.totalPnl >= 0 ? "+" : ""}${stats.totalPnl.toFixed(0)}</span></span>
              <span>Trade #{trades.length}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Best / Worst */}
            <div className="rounded-2xl border border-[var(--color-border)] p-5" style={{ background: "var(--color-surface)" }}>
              <h3 className="text-sm font-black text-[var(--color-text)] mb-4">🏆 Best & Worst</h3>
              {[
                { label: "Best Trade", trade: stats.bestTrade, color: "#3fb950" },
                { label: "Worst Trade", trade: stats.worstTrade, color: "#f85149" },
              ].map(({ label, trade, color }) => trade && (
                <div key={label} className="rounded-xl border border-[var(--color-border)] p-3 mb-3"
                  style={{ background: "var(--color-bg)" }}>
                  <div className="text-xs text-[var(--color-text-secondary)] mb-1">{label}</div>
                  <div className="flex items-center justify-between">
                    <div className="font-bold text-sm text-[var(--color-text)]">
                      {trade.asset} {trade.side} · {trade.setup}
                    </div>
                    <div className="font-black text-sm" style={{ color }}>
                      {trade.pnl >= 0 ? "+" : ""}${trade.pnl.toFixed(0)}
                    </div>
                  </div>
                  <div className="text-xs text-[var(--color-text-secondary)] mt-0.5">{trade.date}</div>
                </div>
              ))}
            </div>

            {/* Emotion Performance */}
            <div className="rounded-2xl border border-[var(--color-border)] p-5" style={{ background: "var(--color-surface)" }}>
              <h3 className="text-sm font-black text-[var(--color-text)] mb-4">🧠 Emotion vs. Performance</h3>
              {Object.entries(stats.emotionCounts).map(([emotion, data]) => {
                const total = data.wins + data.losses;
                const wr = total > 0 ? (data.wins / total) * 100 : 0;
                return (
                  <div key={emotion} className="mb-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold" style={{ color: EMOTION_COLORS[emotion] }}>{emotion}</span>
                      <span className="text-xs text-[var(--color-text-secondary)]">{data.wins}W / {data.losses}L · {wr.toFixed(0)}% WR</span>
                    </div>
                    <div className="h-2 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                      <div className="h-full rounded-full transition-all" style={{ width: `${wr}%`, background: EMOTION_COLORS[emotion] }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* PATTERNS */}
      {activeTab === "patterns" && (
        <div className="space-y-6">
          {/* Setup Performance */}
          <div className="rounded-2xl border border-[var(--color-border)] p-5" style={{ background: "var(--color-surface)" }}>
            <h3 className="text-sm font-black text-[var(--color-text)] mb-4">🎯 Setup Performance</h3>
            <div className="space-y-3">
              {Object.entries(stats.setupPerf)
                .sort((a, b) => b[1].totalPnl - a[1].totalPnl)
                .map(([setup, data]) => {
                  const wr = (data.wins / data.trades) * 100;
                  return (
                    <div key={setup} className="flex items-center gap-4 p-3 rounded-xl border border-[var(--color-border)]"
                      style={{ background: "var(--color-bg)" }}>
                      <div className="text-sm font-bold text-[var(--color-text)] w-36 flex-shrink-0">{setup}</div>
                      <div className="flex-1">
                        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "var(--color-border)" }}>
                          <div className="h-full rounded-full" style={{ width: `${wr}%`, background: wr >= 50 ? "#3fb950" : "#f85149" }} />
                        </div>
                      </div>
                      <div className="text-xs text-[var(--color-text-secondary)] w-20 text-right">{wr.toFixed(0)}% WR ({data.trades}t)</div>
                      <div className="text-xs font-bold w-16 text-right"
                        style={{ color: data.totalPnl >= 0 ? "#3fb950" : "#f85149" }}>
                        {data.totalPnl >= 0 ? "+" : ""}${data.totalPnl.toFixed(0)}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Top Mistakes */}
          <div className="rounded-2xl border border-[var(--color-border)] p-5" style={{ background: "var(--color-surface)" }}>
            <h3 className="text-sm font-black text-[var(--color-text)] mb-4">⚠️ Most Common Mistakes</h3>
            {Object.keys(stats.mistakeCounts).length === 0 ? (
              <p className="text-sm text-[var(--color-text-secondary)]">No mistakes logged yet. Keep up the discipline! 💪</p>
            ) : (
              <div className="space-y-3">
                {Object.entries(stats.mistakeCounts)
                  .sort((a, b) => b[1] - a[1])
                  .map(([mistake, count]) => (
                    <div key={mistake} className="flex items-center gap-3">
                      <div className="text-sm text-[var(--color-text)] flex-1">{mistake}</div>
                      <div className="flex gap-1">
                        {Array.from({ length: Math.min(count, 10) }).map((_, i) => (
                          <div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: "#f85149" }} />
                        ))}
                      </div>
                      <div className="text-xs font-bold text-[var(--color-text-secondary)] w-12 text-right">
                        ×{count}
                      </div>
                    </div>
                  ))}
              </div>
            )}
          </div>

          {/* Asset Breakdown */}
          <div className="rounded-2xl border border-[var(--color-border)] p-5" style={{ background: "var(--color-surface)" }}>
            <h3 className="text-sm font-black text-[var(--color-text)] mb-4">💎 Asset Breakdown</h3>
            {(() => {
              const assetStats: Record<string, { pnl: number; trades: number; wins: number }> = {};
              trades.forEach((t) => {
                if (!assetStats[t.asset]) assetStats[t.asset] = { pnl: 0, trades: 0, wins: 0 };
                assetStats[t.asset].pnl += t.pnl;
                assetStats[t.asset].trades++;
                if (t.pnl > 0) assetStats[t.asset].wins++;
              });
              return Object.entries(assetStats).sort((a, b) => b[1].pnl - a[1].pnl).map(([asset, data]) => (
                <div key={asset} className="flex items-center justify-between py-2 border-b border-[var(--color-border)] last:border-0">
                  <div className="font-bold text-sm text-[var(--color-text)]">{asset}</div>
                  <div className="text-xs text-[var(--color-text-secondary)]">{data.trades} trades · {((data.wins / data.trades) * 100).toFixed(0)}% WR</div>
                  <div className="text-sm font-black" style={{ color: data.pnl >= 0 ? "#3fb950" : "#f85149" }}>
                    {data.pnl >= 0 ? "+" : ""}${data.pnl.toFixed(0)}
                  </div>
                </div>
              ));
            })()}
          </div>
        </div>
      )}

      {/* Related Tools */}
      <div className="mt-12 rounded-2xl border border-[var(--color-border)] p-5" style={{ background: "var(--color-surface)" }}>
        <div className="text-sm font-black text-[var(--color-text)] mb-3">Related Tools</div>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/tools/portfolio-tracker", label: "📊 Portfolio Tracker" },
            { href: "/tools/tax-calculator", label: "🧾 Tax Calculator" },
            { href: "/tools/risk-analyzer", label: "⚡ Risk Analyzer" },
            { href: "/tools/dca-calculator", label: "📈 DCA Calculator" },
            { href: "/tools/smart-money-tracker", label: "🐋 Smart Money Tracker" },
          ].map((l) => (
            <Link key={l.href} href={l.href}
              className="text-xs px-3 py-1.5 rounded-lg border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all font-semibold">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
