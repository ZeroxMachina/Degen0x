'use client';

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const ASSET_PRICES: Record<string, number> = {
  BTC: 95000,
  ETH: 3400,
  SOL: 185,
  BNB: 620,
  AVAX: 38,
  DOGE: 0.38,
  ADA: 0.92,
  LINK: 18,
};

const PRICE_HISTORIES: Record<string, { year: number; price: number }[]> = {
  BTC: [
    { year: 2018, price: 3200 }, { year: 2019, price: 7200 }, { year: 2020, price: 29000 },
    { year: 2021, price: 46000 }, { year: 2022, price: 16500 }, { year: 2023, price: 42000 },
    { year: 2024, price: 95000 },
  ],
  ETH: [
    { year: 2018, price: 130 }, { year: 2019, price: 130 }, { year: 2020, price: 730 },
    { year: 2021, price: 3700 }, { year: 2022, price: 1200 }, { year: 2023, price: 2200 },
    { year: 2024, price: 3400 },
  ],
  SOL: [
    { year: 2021, price: 10 }, { year: 2022, price: 11 }, { year: 2023, price: 100 },
    { year: 2024, price: 185 },
  ],
};

const JOB_TITLES = [
  "Software Engineer", "Product Manager", "Designer", "Data Scientist",
  "Marketing Manager", "Sales Executive", "DevOps Engineer", "Founder/CEO",
  "Financial Analyst", "Consultant", "Teacher", "Doctor", "Lawyer", "Custom",
];

const USD_INFLATION = 0.037; // avg annual

export default function SalaryInCryptoPage() {
  const [salary, setSalary] = useState(100000);
  const [allocation, setAllocation] = useState(20); // % to crypto
  const [asset, setAsset] = useState("BTC");
  const [startYear, setStartYear] = useState(2020);
  const [jobTitle, setJobTitle] = useState("Software Engineer");
  const [showComparison, setShowComparison] = useState(false);

  const assetHistory = PRICE_HISTORIES[asset] || PRICE_HISTORIES.BTC;
  const currentPrice = ASSET_PRICES[asset] || ASSET_PRICES.BTC;

  const results = useMemo(() => {
    const relevantHistory = assetHistory.filter(h => h.year >= startYear);
    if (relevantHistory.length < 2) return null;

    const startPrice = relevantHistory[0].price;
    const endPrice = relevantHistory[relevantHistory.length - 1].price;
    const yearsElapsed = relevantHistory.length - 1;

    const annualCryptoAlloc = salary * (allocation / 100);
    const totalCryptoInvested = annualCryptoAlloc * yearsElapsed;
    const totalSalaryEarned = salary * yearsElapsed;

    // Simulate dollar cost averaging each year
    let totalCoins = 0;
    for (const hist of relevantHistory.slice(0, -1)) {
      totalCoins += annualCryptoAlloc / hist.price;
    };
    const cryptoPortfolioValue = totalCoins * endPrice;

    // What the cash portion looks like with inflation
    const cashPortion = salary * (1 - allocation / 100);
    const inflationAdjustedCash = cashPortion * yearsElapsed * Math.pow(1 - USD_INFLATION, yearsElapsed);

    const cryptoMultiple = cryptoPortfolioValue / totalCryptoInvested;
    const totalNetWorth = cryptoPortfolioValue + (cashPortion * yearsElapsed);

    return {
      startYear,
      endYear: relevantHistory[relevantHistory.length - 1].year,
      yearsElapsed,
      annualCryptoAlloc,
      totalCryptoInvested,
      totalSalaryEarned,
      totalCoins,
      cryptoPortfolioValue,
      cryptoMultiple,
      inflationAdjustedCash,
      totalNetWorth,
      startPrice,
      endPrice,
      priceMultiple: endPrice / startPrice,
    };
  }, [salary, allocation, asset, startYear, assetHistory]);

  const fmt = (n: number) =>
    n >= 1e6 ? `$${(n / 1e6).toFixed(2)}M` :
    n >= 1e3 ? `$${(n / 1e3).toFixed(1)}K` :
    `$${n.toFixed(2)}`;

  const fmtCoin = (n: number) =>
    n >= 1 ? n.toFixed(4) : n.toFixed(6);

  return (
    <div className="min-h-screen" style={{ background: "var(--color-bg)" }}>
      <div className="max-w-3xl mx-auto px-4 py-10">

        {/* Header */}
        <div className="mb-8">
          <div className="text-sm font-semibold mb-2" style={{ color: "#818cf8" }}>
            <Link href="/tools">Tools</Link> › Salary in Crypto Calculator
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-3" style={{ color: "var(--color-text)" }}>
            💰 What If You Got Paid in Crypto?
          </h1>
          <p style={{ color: "var(--color-text-secondary)" }}>
            See what your salary would be worth today if a portion had been paid in Bitcoin, Ethereum, or Solana — and what your net worth would look like now.
          </p>
        </div>

        {/* Inputs */}
        <div className="glass rounded-2xl p-6 mb-6">
          <h2 className="text-lg font-bold mb-5" style={{ color: "var(--color-text)" }}>Your Situation</h2>

          {/* Job Title */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>Job Title</label>
            <select
              value={jobTitle}
              onChange={e => setJobTitle(e.target.value)}
              className="w-full rounded-lg px-3 py-2 text-sm"
              style={{ background: "var(--color-bg)", border: "1px solid #30363d", color: "var(--color-text)" }}
            >
              {JOB_TITLES.map(j => <option key={j} value={j}>{j}</option>)}
            </select>
          </div>

          {/* Salary */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>Annual Salary (USD)</label>
              <span className="text-lg font-extrabold" style={{ color: "#6366f1" }}>{fmt(salary)}</span>
            </div>
            <input
              type="range" min={20000} max={500000} step={5000}
              value={salary}
              onChange={e => setSalary(Number(e.target.value))}
              className="w-full accent-indigo-500"
            />
            <div className="flex justify-between text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
              <span>$20K</span><span>$500K</span>
            </div>
          </div>

          {/* Crypto Allocation */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold" style={{ color: "var(--color-text)" }}>
                % Taken in Crypto (rest in USD)
              </label>
              <span className="text-lg font-extrabold" style={{ color: "#F7931A" }}>{allocation}%</span>
            </div>
            <input
              type="range" min={5} max={100} step={5}
              value={allocation}
              onChange={e => setAllocation(Number(e.target.value))}
              className="w-full accent-orange-500"
            />
            <div className="flex justify-between text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
              <span>5% crypto</span><span>100% crypto (full degen)</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {/* Asset */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>Crypto Asset</label>
              <div className="flex flex-wrap gap-2">
                {["BTC", "ETH", "SOL"].map(a => (
                  <button
                    key={a}
                    onClick={() => setAsset(a)}
                    className="px-3 py-1.5 rounded-lg text-sm font-bold"
                    style={{
                      background: asset === a ? (a === "BTC" ? "#F7931A" : a === "ETH" ? "#627EEA" : "#9945FF") : "var(--color-surface)",
                      color: asset === a ? "white" : "var(--color-text-secondary)",
                      border: "1px solid #30363d",
                    }}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>

            {/* Start Year */}
            <div>
              <label className="block text-sm font-semibold mb-2" style={{ color: "var(--color-text)" }}>Started receiving crypto in</label>
              <div className="flex flex-wrap gap-2">
                {["2018", "2019", "2020", "2021", "2022"].map(y => {
                  const hasData = (PRICE_HISTORIES[asset] || PRICE_HISTORIES.BTC).some(h => h.year === Number(y));
                  return (
                    <button
                      key={y}
                      onClick={() => hasData && setStartYear(Number(y))}
                      disabled={!hasData}
                      style={{
                        background: startYear === Number(y) ? "#6366f1" : "var(--color-surface)",
                        color: !hasData ? "#555" : startYear === Number(y) ? "white" : "var(--color-text-secondary)",
                        border: "1px solid #30363d",
                        opacity: hasData ? 1 : 0.4,
                      }}
                    >
                      {y}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Results */}
        {results && (
          <>
            {/* Hero Result */}
            <div
              className="rounded-2xl p-6 mb-6 text-center"
              style={{
                background: "linear-gradient(135deg, #0d1117, #1a1040)",
                border: "2px solid #6366f1",
                boxShadow: "0 0 40px #6366f120",
              }}
            >
              <div className="text-sm mb-2" style={{ color: "var(--color-text-secondary)" }}>
                If {jobTitle} earned {allocation}% in {asset} from {results.startYear}–{results.endYear}
              </div>
              <div className="text-5xl font-extrabold mb-2" style={{ color: "#3fb950" }}>
                {fmt(results.cryptoPortfolioValue)}
              </div>
              <div className="text-lg font-bold mb-1" style={{ color: "var(--color-text)" }}>
                Your crypto stack would be worth today
              </div>
              <div className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                From {fmt(results.totalCryptoInvested)} invested → {fmtCoin(results.totalCoins)} {asset} accumulated
              </div>
              <div className="mt-4 inline-block px-4 py-1.5 rounded-full text-sm font-bold" style={{ background: "#3fb95020", color: "#3fb950" }}>
                {results.cryptoMultiple.toFixed(1)}x return on crypto allocation
              </div>
            </div>

            {/* Breakdown Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {[
                { label: "Total Salary Earned", value: fmt(results.totalSalaryEarned), sub: `${results.yearsElapsed} years`, color: "var(--color-text)" },
                { label: "Crypto Invested", value: fmt(results.totalCryptoInvested), sub: `${allocation}% each year`, color: "#818cf8" },
                { label: `${asset} Accumulated`, value: fmtCoin(results.totalCoins), sub: `@ avg cost basis`, color: asset === "BTC" ? "#F7931A" : asset === "ETH" ? "#627EEA" : "#9945FF" },
                { label: "Price Growth", value: `${results.priceMultiple.toFixed(0)}x`, sub: `$${results.startPrice.toLocaleString()} → $${results.endPrice.toLocaleString()}`, color: "#3fb950" },
              ].map(s => (
                <div key={s.label} className="glass rounded-xl p-4 text-center">
                  <div className="text-xs mb-1" style={{ color: "var(--color-text-secondary)" }}>{s.label}</div>
                  <div className="text-xl font-extrabold" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* USD vs Crypto Compare */}
            <div className="glass rounded-2xl p-6 mb-6">
              <h3 className="font-bold mb-4" style={{ color: "var(--color-text)" }}>Cash vs Crypto: Where Is Your Wealth Now?</h3>
              <div className="space-y-3">
                {/* Crypto portion */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span style={{ color: "var(--color-text)" }}>🔥 Crypto portion ({allocation}%)</span>
                    <span className="font-bold" style={{ color: "#3fb950" }}>{fmt(results.cryptoPortfolioValue)}</span>
                  </div>
                  <div className="rounded-full h-4 overflow-hidden" style={{ background: "#30363d" }}>
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.min(100, (results.cryptoPortfolioValue / (results.cryptoPortfolioValue + results.totalSalaryEarned * (1 - allocation / 100))) * 100)}%`,
                        background: "linear-gradient(90deg, #6366f1, #3fb950)",
                      }}
                    />
                  </div>
                </div>
                {/* Cash portion */}
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span style={{ color: "var(--color-text)" }}>💵 Cash portion ({100 - allocation}%) after inflation</span>
                    <span className="font-bold" style={{ color: "#d29922" }}>{fmt(results.inflationAdjustedCash)}</span>
                  </div>
                  <div className="rounded-full h-4 overflow-hidden" style={{ background: "#30363d" }}>
                    <div
                      style={{
                        width: `${Math.min(100, (results.inflationAdjustedCash / (results.cryptoPortfolioValue + results.totalSalaryEarned * (1 - allocation / 100))) * 100)}%`,
                        background: "linear-gradient(90deg, #d29922, #f59e0b)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Share / CTA */}
            <div className="glass rounded-2xl p-5 text-center">
              <div className="text-lg font-bold mb-2" style={{ color: "var(--color-text)" }}>
                Start stacking {asset} now
              </div>
              <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
                The best time was {startYear}. The second best time is today.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Link href="/exchanges/best" className="affiliate-cta px-6 py-2 rounded-lg font-semibold text-white text-sm">
                  Buy {asset} Now
                </Link>
                <Link href="/tools/dca-calculator" className="px-6 py-2 rounded-lg font-semibold text-sm" style={{ background: "var(--color-surface)", color: "var(--color-text)", border: "1px solid #30363d" }}>
                  DCA Calculator
                </Link>
                <button
                  onClick={() => {
                    const text = `If I had taken ${allocation}% of my salary in ${asset} since ${startYear}, my crypto stack would be worth ${fmt(results.cryptoPortfolioValue)} today. A ${results.cryptoMultiple.toFixed(1)}x return! 🤯 Check yours: degen0x.com/tools/salary-in-crypto`;
                    navigator.clipboard?.writeText(text);
                    alert("Tweet copied! Paste to share.");
                  }}
                  className="px-6 py-2 rounded-lg font-semibold text-sm"
                  style={{ background: "#1DA1F220", color: "#1DA1F2", border: "1px solid #1DA1F240" }}
                >
                  🐦 Share this
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Salary In Crypto",
              "url": "https://degen0x.com/tools/salary-in-crypto",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
