"use client";
import { useState, useMemo } from "react";

interface UnlockEvent {
  id: string;
  project: string;
  symbol: string;
  date: string; // YYYY-MM-DD
  amount: number; // USD value
  percentOfSupply: number;
  type: "cliff" | "linear" | "team" | "investor" | "ecosystem";
  description: string;
}

const UNLOCK_EVENTS: UnlockEvent[] = [
  { id: "1", project: "Arbitrum", symbol: "ARB", date: "2026-03-16", amount: 92_000_000, percentOfSupply: 2.1, type: "investor", description: "Investor token unlock — Series B participants" },
  { id: "2", project: "Optimism", symbol: "OP", date: "2026-03-18", amount: 45_000_000, percentOfSupply: 1.4, type: "ecosystem", description: "Ecosystem fund distribution" },
  { id: "3", project: "Aptos", symbol: "APT", date: "2026-03-20", amount: 156_000_000, percentOfSupply: 3.8, type: "cliff", description: "Team & early contributor cliff unlock" },
  { id: "4", project: "Sui", symbol: "SUI", date: "2026-03-22", amount: 78_000_000, percentOfSupply: 1.9, type: "investor", description: "VC vesting tranche release" },
  { id: "5", project: "Worldcoin", symbol: "WLD", date: "2026-03-24", amount: 210_000_000, percentOfSupply: 5.2, type: "team", description: "Team allocation — monthly linear vest" },
  { id: "6", project: "Starknet", symbol: "STRK", date: "2026-03-25", amount: 134_000_000, percentOfSupply: 4.1, type: "cliff", description: "Early backer cliff unlock" },
  { id: "7", project: "Celestia", symbol: "TIA", date: "2026-03-28", amount: 88_000_000, percentOfSupply: 2.7, type: "investor", description: "Series A investor linear unlock" },
  { id: "8", project: "Pyth", symbol: "PYTH", date: "2026-03-30", amount: 42_000_000, percentOfSupply: 1.2, type: "ecosystem", description: "Publisher & staker rewards release" },
  { id: "9", project: "dYdX", symbol: "DYDX", date: "2026-04-01", amount: 67_000_000, percentOfSupply: 2.3, type: "team", description: "Founding team quarterly vest" },
  { id: "10", project: "Sei", symbol: "SEI", date: "2026-04-03", amount: 55_000_000, percentOfSupply: 1.8, type: "ecosystem", description: "Community incentives program" },
  { id: "11", project: "Jupiter", symbol: "JUP", date: "2026-04-05", amount: 120_000_000, percentOfSupply: 3.5, type: "cliff", description: "Major cliff unlock — airdrop reserve" },
  { id: "12", project: "Jito", symbol: "JTO", date: "2026-04-08", amount: 38_000_000, percentOfSupply: 1.5, type: "investor", description: "Seed round linear unlock" },
];

const TYPE_COLORS: Record<string, { bg: string; text: string; label: string }> = {
  cliff: { bg: "bg-red-500/15", text: "text-red-400", label: "Cliff" },
  linear: { bg: "bg-blue-500/15", text: "text-blue-400", label: "Linear" },
  team: { bg: "bg-purple-500/15", text: "text-purple-400", label: "Team" },
  investor: { bg: "bg-yellow-500/15", text: "text-yellow-400", label: "Investor" },
  ecosystem: { bg: "bg-green-500/15", text: "text-green-400", label: "Ecosystem" },
};

function formatUSD(n: number): string {
  if (n >= 1e9) return `$${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`;
  return `$${n.toLocaleString()}`;
}

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr + "T00:00:00");
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function formatDate(dateStr: string): string {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function TokenUnlockCalendar() {
  const [filter, setFilter] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"date" | "amount">("date");

  const filtered = useMemo(() => {
    let events = [...UNLOCK_EVENTS];
    if (filter !== "all") events = events.filter((e) => e.type === filter);
    if (sortBy === "amount") events.sort((a, b) => b.amount - a.amount);
    else events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return events;
  }, [filter, sortBy]);

  const totalValue = useMemo(
    () => filtered.reduce((sum, e) => sum + e.amount, 0),
    [filtered]
  );

  return (
    <section className="glass rounded-2xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-4 border-b border-[var(--glass-border)]">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-[var(--color-text)]">Token Unlock Calendar</h2>
            <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
              Upcoming vesting events — {formatUSD(totalValue)} total value
            </p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {["all", "cliff", "investor", "team", "ecosystem"].map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                  filter === t
                    ? "bg-[var(--color-primary)]/20 text-[var(--color-primary)]"
                    : "text-[var(--color-text-secondary)] hover:bg-[var(--glass-bg)]"
                }`}
              >
                {t === "all" ? "All" : TYPE_COLORS[t]?.label || t}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Sort control */}
      <div className="px-5 py-2 border-b border-[var(--glass-border)] flex items-center gap-2">
        <span className="text-xs text-[var(--color-text-secondary)]">Sort by:</span>
        <button
          onClick={() => setSortBy("date")}
          className={`text-xs font-semibold transition ${sortBy === "date" ? "text-[var(--color-text)]" : "text-[var(--color-text-secondary)]"}`}
        >
          Date
        </button>
        <span className="text-[var(--color-text-secondary)]">|</span>
        <button
          onClick={() => setSortBy("amount")}
          className={`text-xs font-semibold transition ${sortBy === "amount" ? "text-[var(--color-text)]" : "text-[var(--color-text-secondary)]"}`}
        >
          Value
        </button>
      </div>

      {/* Events */}
      <div className="divide-y divide-[var(--glass-border)]">
        {filtered.map((event) => {
          const days = daysUntil(event.date);
          const urgency = days <= 3 ? "text-red-400" : days <= 7 ? "text-yellow-400" : "text-[var(--color-text-secondary)]";
          const tc = TYPE_COLORS[event.type] || TYPE_COLORS.linear;

          return (
            <div key={event.id} className="px-5 py-3.5 hover:bg-[var(--glass-bg)] transition-colors">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-bold text-[var(--color-text)]">{event.project}</span>
                    <span className="text-xs text-[var(--color-text-secondary)] font-mono">{event.symbol}</span>
                    <span className={`px-1.5 py-0.5 rounded text-[10px] font-semibold ${tc.bg} ${tc.text}`}>
                      {tc.label}
                    </span>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] truncate">{event.description}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-sm font-bold text-[var(--color-text)]">{formatUSD(event.amount)}</div>
                  <div className="text-[10px] text-[var(--color-text-secondary)]">{event.percentOfSupply}% of supply</div>
                </div>
              </div>
              <div className="flex items-center justify-between mt-2">
                <span className="text-xs text-[var(--color-text-secondary)]">{formatDate(event.date)}</span>
                <span className={`text-xs font-semibold ${urgency}`}>
                  {days === 0 ? "Today" : days === 1 ? "Tomorrow" : days < 0 ? `${Math.abs(days)}d ago` : `in ${days} days`}
                </span>
              </div>
              {/* Impact bar */}
              <div className="mt-2 h-1 rounded-full bg-[var(--glass-border)] overflow-hidden">
                <div
                  className={`h-full rounded-full ${
                    event.percentOfSupply > 4 ? "bg-red-500" : event.percentOfSupply > 2 ? "bg-yellow-500" : "bg-green-500"
                  }`}
                  style={{ width: `${Math.min(event.percentOfSupply * 15, 100)}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div className="px-5 py-3 border-t border-[var(--glass-border)] text-center">
        <a href="/tools/token-unlocks" className="text-xs font-semibold text-[var(--color-primary)] hover:underline">
          View Full Unlock Calendar →
        </a>
      </div>
    </section>
  );
}
