'use client';

"use client";

import { useState, useRef } from "react";
import { Metadata } from "next";
import Link from "next/link";
import RelatedContent from '@/components/RelatedContent';

const COINS = [
  { id: "bitcoin", symbol: "BTC", name: "Bitcoin", color: "#F7931A", emoji: "₿" },
  { id: "ethereum", symbol: "ETH", name: "Ethereum", color: "#627EEA", emoji: "Ξ" },
  { id: "solana", symbol: "SOL", name: "Solana", color: "#9945FF", emoji: "◎" },
  { id: "binancecoin", symbol: "BNB", name: "BNB", color: "#F3BA2F", emoji: "⬡" },
  { id: "xrp", symbol: "XRP", name: "XRP", color: "#00AAE4", emoji: "✕" },
  { id: "cardano", symbol: "ADA", name: "Cardano", color: "#0033AD", emoji: "₳" },
  { id: "avalanche-2", symbol: "AVAX", name: "Avalanche", color: "#E84142", emoji: "🔺" },
  { id: "polkadot", symbol: "DOT", name: "Polkadot", color: "#E6007A", emoji: "●" },
  { id: "dogecoin", symbol: "DOGE", name: "Dogecoin", color: "#C2A633", emoji: "Ð" },
  { id: "chainlink", symbol: "LINK", name: "Chainlink", color: "#375BD2", emoji: "⬡" },
  { id: "uniswap", symbol: "UNI", name: "Uniswap", color: "#FF007A", emoji: "🦄" },
  { id: "shiba-inu", symbol: "SHIB", name: "Shiba Inu", color: "#FF9D00", emoji: "🐕" },
];

const YEAR_PERFORMANCES: Record<string, Record<string, number>> = {
  "2024": {
    bitcoin: 121, ethereum: 47, solana: 94, binancecoin: 132, xrp: 237,
    cardano: 58, "avalanche-2": -12, polkadot: -18, dogecoin: 285,
    chainlink: 110, uniswap: 8, "shiba-inu": 92,
  },
  "2023": {
    bitcoin: 155, ethereum: 91, solana: 916, binancecoin: -8, xrp: 81,
    cardano: 148, "avalanche-2": 280, polkadot: 63, dogecoin: 29,
    chainlink: 231, uniswap: -25, "shiba-inu": 21,
  },
  "2022": {
    bitcoin: -65, ethereum: -67, solana: -94, binancecoin: -52, xrp: -57,
    cardano: -82, "avalanche-2": -90, polkadot: -85, dogecoin: -58,
    chainlink: -75, uniswap: -71, "shiba-inu": -78,
  },
};

type Holding = {
  coin: string;
  amount: string;
  buyPrice: string;
};

const PERSONALITIES = [
  { min: 200, label: "GIGACHAD DEGEN", emoji: "🦁", color: "#F7931A", desc: "You absolutely crushed it. Pure alpha energy." },
  { min: 50, label: "BASED BULL", emoji: "🐂", color: "#3fb950", desc: "Strong gains. You held through the storms." },
  { min: 0, label: "DIAMOND HANDS", emoji: "💎", color: "#58a6ff", desc: "Profitable and patient. Respect." },
  { min: -30, label: "PAPER HANDS SURVIVOR", emoji: "📄", color: "#d29922", desc: "Rough year but you made it out alive." },
  { min: -60, label: "REKT BUT ALIVE", emoji: "💀", color: "#f85149", desc: "The market humbled you. It humbles us all." },
  { min: -Infinity, label: "ABSOLUTE BOTTOM", emoji: "🕳️", color: "#6e40c9", desc: "Zero to hero journey begins... now." },
];

export default function CryptoWrappedPage() {
  const [step, setStep] = useState<"select" | "input" | "result">("select");
  const [selectedYear, setSelectedYear] = useState("2024");
  const [holdings, setHoldings] = useState<Holding[]>([
    { coin: "bitcoin", amount: "", buyPrice: "" },
  ]);
  const [username, setUsername] = useState("");
  const cardRef = useRef<HTMLDivElement>(null);

  function addHolding() {
    setHoldings([...holdings, { coin: "ethereum", amount: "", buyPrice: "" }]);
  }
  function removeHolding(i: number) {
    setHoldings(holdings.filter((_, idx) => idx !== i));
  }
  function updateHolding(i: number, field: keyof Holding, value: string) {
    const updated = [...holdings];
    updated[i] = { ...updated[i], [field]: value };
    setHoldings(updated);
  };

  const calcResults = () => {
    const perfs = YEAR_PERFORMANCES[selectedYear] || YEAR_PERFORMANCES["2024"];
    let totalInvested = 0;
    let totalValue = 0;
    const breakdown: Array<{
      coin: typeof COINS[0]; pct: number; invested: number; value: number; gain: number;
    }> = [];

    for (const h of holdings) {
      const coin = COINS.find(c => c.id === h.coin);
      if (!coin) continue;
      const amt = parseFloat(h.amount) || 0;
      const buy = parseFloat(h.buyPrice) || 0;
      if (amt <= 0 || buy <= 0) continue;
      const invested = amt * buy;
      const pct = perfs[h.coin] ?? 0;
      const currentPrice = buy * (1 + pct / 100);
      const value = amt * currentPrice;
      totalInvested += invested;
      totalValue += value;
      breakdown.push({ coin, pct, invested, value, gain: value - invested });
    };
    const totalPct = totalInvested > 0 ? ((totalValue - totalInvested) / totalInvested) * 100 : 0;
    return { totalInvested, totalValue, totalPct, breakdown };
  };

  const results = step === "result" ? calcResults() : null;
  const personality = results
    ? PERSONALITIES.find(p => results.totalPct >= p.min) || PERSONALITIES[PERSONALITIES.length - 1]
    : null;

  const topGainer = results?.breakdown.length
    ? results.breakdown.reduce((a, b) => (a.pct > b.pct ? a : b))
    : null;
  const topLoser = results?.breakdown.length
    ? results.breakdown.reduce((a, b) => (a.pct < b.pct ? a : b))
    : null;

  const fmt = (n: number) =>
    n >= 1000000 ? `$${(n / 1000000).toFixed(2)}M` :
    n >= 1000 ? `$${(n / 1000).toFixed(1)}K` :
    `$${n.toFixed(2)}`;

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-2xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="text-5xl mb-3">🎁</div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2" style={{ color: "var(--color-text)" }}>
            Crypto <span style={{ background: "linear-gradient(135deg,#6366f1,#f7931a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Wrapped</span>
          </h1>
          <p style={{ color: "var(--color-text-secondary)" }}>
            See your crypto year in review. Share your wins (or losses) with the world.
          </p>
        </div>

        {/* Step: Select Year */}
        {step === "select" && (
          <div className="glass rounded-2xl p-6 text-center">
            <h2 className="text-xl font-bold mb-6" style={{ color: "var(--color-text)" }}>Pick Your Year</h2>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              {["2024", "2023", "2022"].map(y => (
                <button
                  key={y}
                  onClick={() => setSelectedYear(y)}
                  className="px-8 py-4 rounded-xl font-bold text-xl transition-all border-2"
                  style={{
                    borderColor: selectedYear === y ? "#6366f1" : "#30363d",
                    background: selectedYear === y ? "#6366f120" : "transparent",
                    color: selectedYear === y ? "#818cf8" : "var(--color-text-secondary)",
                  }}
                >
                  {y}
                  {y === "2024" && <span className="block text-xs mt-1 font-normal" style={{ color: "#f7931a" }}>🔥 Epic Year</span>}
                  {y === "2023" && <span className="block text-xs mt-1 font-normal" style={{ color: "#3fb950" }}>🚀 Bull Run</span>}
                  {y === "2022" && <span className="block text-xs mt-1 font-normal" style={{ color: "#f85149" }}>💀 Bear Year</span>}
                </button>
              ))}
            </div>
            <button
              onClick={() => setStep("input")}
              className="affiliate-cta px-10 py-3 rounded-xl font-bold text-white"
            >
              Continue →
            </button>
          </div>
        )}

        {/* Step: Input Holdings */}
        {step === "input" && (
          <div className="glass rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold" style={{ color: "var(--color-text)" }}>Enter Your Holdings ({selectedYear})</h2>
              <button onClick={() => setStep("select")} className="text-sm" style={{ color: "var(--color-text-secondary)" }}>← Back</button>
            </div>
            <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
              Enter what you held at the <strong>start of {selectedYear}</strong> — amount and price you paid.
            </p>

            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1" style={{ color: "var(--color-text)" }}>Your Name / Handle</label>
              <input
                type="text"
                placeholder="e.g. Satoshi 🔥"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full rounded-lg px-3 py-2 text-sm"
                style={{ background: "var(--color-bg)", border: "1px solid #30363d", color: "var(--color-text)" }}
              />
            </div>

            <div className="space-y-3 mb-4">
              {holdings.map((h, i) => {
                const coin = COINS.find(c => c.id === h.coin)!;
                return (
                  <div key={i} className="rounded-xl p-3" style={{ background: "var(--color-bg)", border: "1px solid #30363d" }}>
                    <div className="flex gap-2 flex-wrap">
                      <select
                        value={h.coin}
                        onChange={e => updateHolding(i, "coin", e.target.value)}
                        className="flex-1 rounded-lg px-2 py-2 text-sm font-semibold"
                        style={{ background: "var(--color-surface)", border: "1px solid #30363d", color: "var(--color-text)", minWidth: 140 }}
                      >
                        {COINS.map(c => (
                          <option key={c.id} value={c.id}>{c.emoji} {c.name} ({c.symbol})</option>
                        ))}
                      </select>
                      <input
                        type="number"
                        placeholder={`${coin.symbol} amount`}
                        value={h.amount}
                        onChange={e => updateHolding(i, "amount", e.target.value)}
                        className="flex-1 rounded-lg px-3 py-2 text-sm"
                        style={{ background: "var(--color-surface)", border: "1px solid #30363d", color: "var(--color-text)", minWidth: 100 }}
                      />
                      <input
                        placeholder={`Buy price $`}
                        value={h.buyPrice}
                        onChange={e => updateHolding(i, "buyPrice", e.target.value)}
                        style={{ background: "var(--color-surface)", border: "1px solid #30363d", color: "var(--color-text)", minWidth: 100 }}
                      />
                      {holdings.length > 1 && (
                        <button onClick={() => removeHolding(i)} className="px-2 text-lg" style={{ color: "#f85149" }}>✕</button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={addHolding}
              className="w-full py-2 rounded-xl text-sm font-semibold mb-6"
              style={{ border: "1px dashed #30363d", color: "var(--color-text-secondary)", background: "transparent" }}
            >
              + Add Another Coin
            </button>

            <button
              onClick={() => setStep("result")}
              disabled={holdings.every(h => !h.amount || !h.buyPrice)}
              className="w-full affiliate-cta py-3 rounded-xl font-bold text-white text-lg"
            >
              Generate My {selectedYear} Wrapped 🎁
            </button>
          </div>
        )}

        {/* Step: Results */}
        {step === "result" && results && personality && (
          <>
            {/* Shareable Card */}
            <div
              ref={cardRef}
              className="rounded-2xl overflow-hidden mb-6"
              style={{
                background: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1a1040 100%)",
                border: "2px solid",
                borderColor: personality.color,
                boxShadow: `0 0 40px ${personality.color}30`,
              }}
            >
              {/* Card Header */}
              <div className="p-6 border-b" style={{ borderColor: "#30363d" }}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-xs font-bold mb-1" style={{ color: "var(--color-text-secondary)", letterSpacing: "0.1em" }}>DEGEN0X.COM</div>
                    <div className="text-2xl font-extrabold" style={{ color: "var(--color-text)" }}>
                      {username || "Anon Degen"}&apos;s
                    </div>
                    <div className="text-xl font-bold" style={{ color: "#818cf8" }}>{selectedYear} WRAPPED</div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl">{personality.emoji}</div>
                    <div className="text-xs font-bold mt-1" style={{ color: personality.color }}>{personality.label}</div>
                  </div>
                </div>
                <p className="text-sm italic" style={{ color: "var(--color-text-secondary)" }}>&ldquo;{personality.desc}&rdquo;</p>
              </div>

              {/* Main Stats */}
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center rounded-xl p-3" style={{ background: "#ffffff08" }}>
                    <div className="text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>INVESTED</div>
                    <div className="text-xl font-extrabold" style={{ color: "var(--color-text)" }}>{fmt(results.totalInvested)}</div>
                  </div>
                  <div className="text-center rounded-xl p-3" style={{ background: "#ffffff08" }}>
                    <div className="text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>END VALUE</div>
                    <div className="text-xl font-extrabold" style={{ color: results.totalValue >= results.totalInvested ? "#3fb950" : "#f85149" }}>
                      {fmt(results.totalValue)}
                    </div>
                  </div>
                  <div className="text-center rounded-xl p-3" style={{ background: "#ffffff08" }}>
                    <div className="text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>RETURN</div>
                    <div className="text-xl font-extrabold" style={{ color: results.totalPct >= 0 ? "#3fb950" : "#f85149" }}>
                      {results.totalPct >= 0 ? "+" : ""}{results.totalPct.toFixed(1)}%
                    </div>
                  </div>
                </div>

                {/* P&L Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>
                    <span>P&L</span>
                    <span style={{ color: results.totalValue - results.totalInvested >= 0 ? "#3fb950" : "#f85149", fontWeight: 700 }}>
                      {results.totalValue - results.totalInvested >= 0 ? "+" : ""}{fmt(results.totalValue - results.totalInvested)}
                    </span>
                  </div>
                  <div className="rounded-full h-2 overflow-hidden" style={{ background: "#30363d" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.min(100, Math.abs(Math.min(100, results.totalPct)))}%`,
                        background: results.totalPct >= 0
                          ? "linear-gradient(90deg, #3fb950, #58a6ff)"
                          : "linear-gradient(90deg, #f85149, #ff6b6b)",
                      }}
                    />
                  </div>
                </div>

                {/* Breakdown */}
                {results.breakdown.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {results.breakdown.slice(0, 5).map((b, i) => (
                      <div key={i} className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2">
                          <span>{b.coin.emoji}</span>
                          <span style={{ color: "var(--color-text)" }}>{b.coin.symbol}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span style={{ color: "var(--color-text-secondary)", fontSize: 11 }}>{fmt(b.invested)} → {fmt(b.value)}</span>
                          <span className="font-bold text-xs px-2 py-0.5 rounded-full" style={{ background: b.pct >= 0 ? "#3fb95020" : "#f8514920", color: b.pct >= 0 ? "#3fb950" : "#f85149" }}>
                            {b.pct >= 0 ? "+" : ""}{b.pct.toFixed(0)}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Best / Worst */}
                {(topGainer || topLoser) && (
                  <div className="grid grid-cols-2 gap-3">
                    {topGainer && (
                      <div className="rounded-xl p-3 text-center" style={{ background: "#3fb95015", border: "1px solid #3fb95030" }}>
                        <div className="text-xs mb-1" style={{ color: "#3fb950" }}>🏆 TOP GAINER</div>
                        <div className="font-bold" style={{ color: "var(--color-text)" }}>{topGainer.coin.symbol}</div>
                        <div className="text-sm font-extrabold" style={{ color: "#3fb950" }}>+{topGainer.pct.toFixed(0)}%</div>
                      </div>
                    )}
                    {topLoser && topLoser.pct < 0 && (
                      <div className="rounded-xl p-3 text-center" style={{ background: "#f8514915", border: "1px solid #f8514930" }}>
                        <div className="text-xs mb-1" style={{ color: "#f85149" }}>💀 REKT BY</div>
                        <div className="font-bold" style={{ color: "var(--color-text)" }}>{topLoser.coin.symbol}</div>
                        <div className="text-sm font-extrabold" style={{ color: "#f85149" }}>{topLoser.pct.toFixed(0)}%</div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="px-6 py-3" style={{ background: "#ffffff05", borderTop: "1px solid #30363d" }}>
                <div className="text-center text-xs" style={{ color: "var(--color-text-secondary)" }}>
                  degen0x.com • Your Crypto Companion • {selectedYear} in Review
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6 flex-wrap">
              <button
                onClick={() => {
                  const text = `My ${selectedYear} Crypto Wrapped: ${results.totalPct >= 0 ? "+" : ""}${results.totalPct.toFixed(1)}% return (${fmt(results.totalInvested)} → ${fmt(results.totalValue)}) ${personality.emoji} ${personality.label} — generate yours at degen0x.com/tools/crypto-wrapped`;
                  if (navigator.share) {
                    navigator.share({ text });
                  } else {
                    navigator.clipboard.writeText(text);
                    alert("Copied to clipboard! Paste to share.");
                  }
                }}
                className="flex-1 affiliate-cta py-3 rounded-xl font-bold text-white"
              >
                📤 Share My Wrapped
              </button>
              <button
                onClick={() => { setStep("input"); }}
                className="flex-1 py-3 rounded-xl font-semibold"
                style={{ background: "var(--color-surface)", color: "var(--color-text)", border: "1px solid #30363d" }}
              >
                ✏️ Edit Holdings
              </button>
            </div>

            {/* CTA */}
            <div className="glass rounded-2xl p-5 text-center">
              <div className="text-xl font-bold mb-2" style={{ color: "var(--color-text)" }}>Ready to do better next year?</div>
              <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
                Compare the best exchanges, find highest staking yields, and track your portfolio automatically.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/exchanges/best" className="affiliate-cta px-6 py-2 rounded-lg font-semibold text-white text-sm">
                  Best Exchanges
                </Link>
                <Link href="/tools/portfolio-tracker" className="px-6 py-2 rounded-lg font-semibold text-sm" style={{ background: "var(--color-surface)", color: "var(--color-text)", border: "1px solid #30363d" }}>
                  Track Portfolio
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
      <RelatedContent category="tools" currentSlug="/tools/crypto-wrapped" />
    </div>
  );
}
