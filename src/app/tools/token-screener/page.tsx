'use client';

"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import { tokens, TOKEN_CATEGORIES } from "@/data/tokens";

// ── Helpers ───────────────────────────────────────────────────────────────────
function parseMarketCap(raw: string): number {
  const s = raw.replace(/[$,\s]/g, "");
  if (s.endsWith("T")) return parseFloat(s) * 1e12;
  if (s.endsWith("B")) return parseFloat(s) * 1e9;
  if (s.endsWith("M")) return parseFloat(s) * 1e6;
  if (s.endsWith("K")) return parseFloat(s) * 1e3;
  return parseFloat(s) || 0;
}

function parseVolume(raw: string): number {
  return parseMarketCap(raw);
}

function parsePrice(raw: string): number {
  return parseFloat(raw.replace(/[$,]/g, "")) || 0;
}

function formatCompact(n: number): string {
  if (n >= 1e12) return `$${(n / 1e12).toFixed(2)}T`;
  if (n >= 1e9) return `$${(n / 1e9).toFixed(2)}B`;
  if (n >= 1e6) return `$${(n / 1e6).toFixed(0)}M`;
  return `$${n.toLocaleString()}`;
}

const CHAIN_ICONS: Record<string, string> = {
  Bitcoin: "₿", Ethereum: "⟠", Solana: "◎", BNB: "💛",
  Polygon: "⬡", Avalanche: "🔺", Cosmos: "⚛", Polkadot: "⬡",
  Cardano: "₳", Near: "Ⓝ", Arbitrum: "◉", Optimism: "🔴",
  Base: "🔵", Sui: "💧", Aptos: "▲",
};

const CAT_COLORS: Record<string, string> = {
  layer1: "#6366f1", layer2: "#06b6d4", defi: "#22c55e",
  stablecoin: "#2775CA", meme: "#F59E0B", nft: "#d946ef",
  gaming: "#e11d48", ai: "#9945FF", infrastructure: "#14b8a6",
};

const CAT_LABELS: Record<string, string> = {
  layer1: "Layer 1", layer2: "Layer 2", defi: "DeFi",
  stablecoin: "Stablecoin", meme: "Meme", nft: "NFT",
  gaming: "Gaming", ai: "AI", infrastructure: "Infra",
};

type SortKey = "rank" | "price" | "change24h" | "change7d" | "marketCap" | "volume24h";
type SortDir = "asc" | "desc";

const CHAINS_ALL = Array.from(
  new Set(tokens.flatMap((t) => t.chains))
).sort();

export default function TokenScreenerPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [chain, setChain] = useState("All");
  const [onlyGainers, setOnlyGainers] = useState(false);
  const [onlyLosers, setOnlyLosers] = useState(false);
  const [sortKey, setSortKey] = useState<SortKey>("rank");
  const [sortDir, setSortDir] = useState<SortDir>("asc");

  const toggleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir(key === "rank" ? "asc" : "desc");
    }
  };

  const filtered = useMemo(() => {
    let list = [...tokens];

    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.symbol.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    if (category !== "all") {
      list = list.filter((t) => t.category === category);
    }

    if (chain !== "All") {
      list = list.filter((t) => t.chains.includes(chain));
    }

    if (onlyGainers) list = list.filter((t) => t.change24h > 0);
    if (onlyLosers) list = list.filter((t) => t.change24h < 0);

    list.sort((a, b) => {
      let valA = 0, valB = 0;
      switch (sortKey) {
        case "rank": valA = a.rank; valB = b.rank; break;
        case "price": valA = parsePrice(a.price); valB = parsePrice(b.price); break;
        case "change24h": valA = a.change24h; valB = b.change24h; break;
        case "change7d": valA = a.change7d; valB = b.change7d; break;
        case "marketCap": valA = parseMarketCap(a.marketCap); valB = parseMarketCap(b.marketCap); break;
        case "volume24h": valA = parseVolume(a.volume24h); valB = parseVolume(b.volume24h); break;
      }
      return sortDir === "asc" ? valA - valB : valB - valA;
    });

    return list;
  }, [search, category, chain, onlyGainers, onlyLosers, sortKey, sortDir]);

  const SortIcon = ({ k }: { k: SortKey }) => {
    if (sortKey !== k) return <span style={{ opacity: 0.3, fontSize: 10 }}> ↕</span>;
    return <span style={{ color: "#6366f1", fontSize: 10 }}>{sortDir === "asc" ? " ↑" : " ↓"}</span>;
  };

  const totalMarketCap = useMemo(
    () => tokens.reduce((s, t) => s + parseMarketCap(t.marketCap), 0),
    []
  );
  const gainers = tokens.filter((t) => t.change24h > 0).length;
  const losers = tokens.filter((t) => t.change24h < 0).length;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Crypto Tools", href: "/tools" },
          { label: "Token Screener", href: "#" },
        ]}
      />

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-text)] mb-3">
          Crypto Token Screener
        </h1>
        <p className="text-lg text-[var(--color-text-secondary)] max-w-3xl">
          Screen and filter 100 cryptocurrencies by category, chain, price performance, and market cap.
          Sort by any metric to discover tokens that match your investment criteria.
        </p>
      </div>

      {/* Market Stats Bar */}
      <div
        style={{
          background: "var(--glass-bg, rgba(255,255,255,0.05))",
          border: "1px solid var(--color-border, rgba(255,255,255,0.1))",
          borderRadius: 12,
          padding: "14px 20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "24px",
          marginBottom: 24,
          alignItems: "center",
        }}
      >
        <div>
          <div style={{ fontSize: 11, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>
            Total Market Cap
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>
            {formatCompact(totalMarketCap)}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>
            Tokens Tracked
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "white" }}>{tokens.length}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>
            24h Gainers
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#22c55e" }}>{gainers}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>
            24h Losers
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#f85149" }}>{losers}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: 1 }}>
            Results
          </div>
          <div style={{ fontSize: 20, fontWeight: 800, color: "#6366f1" }}>{filtered.length}</div>
        </div>
      </div>

      {/* Filters */}
      <div
        style={{
          background: "var(--glass-bg, rgba(255,255,255,0.05))",
          border: "1px solid var(--color-border, rgba(255,255,255,0.1))",
          borderRadius: 12,
          padding: "20px",
          marginBottom: 24,
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          alignItems: "flex-end",
        }}
      >
        {/* Search */}
        <div style={{ flex: "1 1 220px" }}>
          <label style={{ display: "block", fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 6, fontWeight: 600 }}>
            Search Token
          </label>
          <input
            type="text"
            placeholder="BTC, Ethereum, DeFi…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              color: "white",
              fontSize: 14,
              outline: "none",
            }}
          />
        </div>

        {/* Category */}
        <div style={{ flex: "1 1 180px" }}>
          <label style={{ display: "block", fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 6, fontWeight: 600 }}>
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              background: "rgba(30,30,40,0.95)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              color: "white",
              fontSize: 14,
              outline: "none",
            }}
          >
            <option value="all">All Categories</option>
            {TOKEN_CATEGORIES.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.icon} {c.label}
              </option>
            ))}
          </select>
        </div>

        {/* Chain */}
        <div style={{ flex: "1 1 160px" }}>
          <label style={{ display: "block", fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 6, fontWeight: 600 }}>
            Chain
          </label>
          <select
            value={chain}
            onChange={(e) => setChain(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 14px",
              background: "rgba(30,30,40,0.95)",
              border: "1px solid rgba(255,255,255,0.15)",
              borderRadius: 8,
              color: "white",
              fontSize: 14,
              outline: "none",
            }}
          >
            <option>All</option>
            {CHAINS_ALL.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        {/* Toggle: Gainers / Losers */}
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <button
            onClick={() => { setOnlyGainers(!onlyGainers); setOnlyLosers(false); }}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: `1px solid ${onlyGainers ? "#22c55e" : "rgba(255,255,255,0.15)"}`,
              background: onlyGainers ? "rgba(34,197,94,0.15)" : "transparent",
              color: onlyGainers ? "#22c55e" : "var(--color-text-secondary)",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            ▲ Gainers Only
          </button>
          <button
            onClick={() => { setOnlyLosers(!onlyLosers); setOnlyGainers(false); }}
            style={{
              padding: "10px 16px",
              borderRadius: 8,
              border: `1px solid ${onlyLosers ? "#f85149" : "rgba(255,255,255,0.15)"}`,
              background: onlyLosers ? "rgba(248,81,73,0.15)" : "transparent",
              color: onlyLosers ? "#f85149" : "var(--color-text-secondary)",
              fontWeight: 600,
              fontSize: 13,
              cursor: "pointer",
            }}
          >
            ▼ Losers Only
          </button>
          {(search || category !== "all" || chain !== "All" || onlyGainers || onlyLosers) && (
            <button
              onClick={() => { setSearch(""); setCategory("all"); setChain("All"); setOnlyGainers(false); setOnlyLosers(false); }}
              style={{
                padding: "10px 16px",
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.15)",
                background: "transparent",
                color: "var(--color-text-secondary)",
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              ✕ Clear Filters
            </button>
          )}
        </div>
      </div>

      {/* Category Quick Pills */}
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
        <button
          onClick={() => setCategory("all")}
          style={{
            padding: "6px 14px",
            borderRadius: 20,
            border: `1px solid ${category === "all" ? "#6366f1" : "rgba(255,255,255,0.1)"}`,
            background: category === "all" ? "rgba(99,102,241,0.2)" : "transparent",
            color: category === "all" ? "#818cf8" : "var(--color-text-secondary)",
            fontSize: 13,
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          All
        </button>
        {TOKEN_CATEGORIES.map((c) => (
          <button
            key={c.slug}
            onClick={() => setCategory(c.slug)}
            style={{
              padding: "6px 14px",
              borderRadius: 20,
              border: `1px solid ${category === c.slug ? CAT_COLORS[c.slug] : "rgba(255,255,255,0.1)"}`,
              background: category === c.slug ? `${CAT_COLORS[c.slug]}22` : "transparent",
              color: category === c.slug ? CAT_COLORS[c.slug] : "var(--color-text-secondary)",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {c.icon} {c.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div
        style={{
          background: "var(--glass-bg, rgba(255,255,255,0.04))",
          border: "1px solid var(--color-border, rgba(255,255,255,0.1))",
          borderRadius: 12,
          overflow: "hidden",
        }}
      >
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 800 }}>
            <thead>
              <tr style={{ background: "rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                {[
                  { key: "rank" as SortKey, label: "#", align: "center" },
                  { key: null, label: "Token", align: "left" },
                  { key: "price" as SortKey, label: "Price", align: "right" },
                  { key: "change24h" as SortKey, label: "24h %", align: "right" },
                  { key: "change7d" as SortKey, label: "7d %", align: "right" },
                  { key: "marketCap" as SortKey, label: "Market Cap", align: "right" },
                  { key: "volume24h" as SortKey, label: "Volume 24h", align: "right" },
                  { key: null, label: "Category", align: "left" },
                ].map(({ key, label, align }) => (
                  <th
                    key={label}
                    onClick={key ? () => toggleSort(key) : undefined}
                    style={{
                      padding: "12px 16px",
                      textAlign: align as "left" | "right" | "center",
                      fontSize: 12,
                      fontWeight: 700,
                      color: "var(--color-text-secondary)",
                      textTransform: "uppercase",
                      letterSpacing: 0.5,
                      cursor: key ? "pointer" : "default",
                      userSelect: "none",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {label}
                    {key && <SortIcon k={key} />}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={8} style={{ padding: "40px", textAlign: "center", color: "var(--color-text-secondary)" }}>
                    No tokens match your filters. <button onClick={() => { setSearch(""); setCategory("all"); setChain("All"); setOnlyGainers(false); setOnlyLosers(false); }} style={{ color: "#6366f1", background: "none", border: "none", cursor: "pointer", fontWeight: 600 }}>Clear filters</button>
                  </td>
                </tr>
              )}
              {filtered.map((token, i) => {
                const c24 = token.change24h;
                const c7 = token.change7d;
                return (
                  <tr
                    key={token.symbol}
                    style={{
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      transition: "background 0.15s",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = "rgba(255,255,255,0.04)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLTableRowElement).style.background = "transparent"; }}
                  >
                    {/* Rank */}
                    <td style={{ padding: "14px 16px", textAlign: "center", color: "var(--color-text-secondary)", fontSize: 13, fontWeight: 700 }}>
                      {token.rank}
                    </td>
                    {/* Token */}
                    <td style={{ padding: "14px 16px" }}>
                      <Link
                        href={`/token/${token.slug}`}
                        style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
                      >
                        <div style={{
                          width: 36, height: 36, borderRadius: "50%",
                          background: `${CAT_COLORS[token.category]}22`,
                          border: `1px solid ${CAT_COLORS[token.category]}44`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 14, fontWeight: 800, color: CAT_COLORS[token.category],
                          flexShrink: 0,
                        }}>
                          {token.symbol.slice(0, 2)}
                        </div>
                        <div>
                          <div style={{ fontWeight: 700, fontSize: 14, color: "white" }}>{token.name}</div>
                          <div style={{ fontSize: 12, color: "var(--color-text-secondary)" }}>{token.symbol}</div>
                        </div>
                      </Link>
                    </td>
                    {/* Price */}
                    <td style={{ padding: "14px 16px", textAlign: "right", fontWeight: 700, fontSize: 14, color: "white" }}>
                      {token.price}
                    </td>
                    {/* 24h */}
                    <td style={{ padding: "14px 16px", textAlign: "right", fontWeight: 700, fontSize: 14, color: c24 >= 0 ? "#22c55e" : "#f85149" }}>
                      {c24 >= 0 ? "▲" : "▼"} {Math.abs(c24).toFixed(1)}%
                    </td>
                    {/* 7d */}
                    <td style={{ padding: "14px 16px", textAlign: "right", fontWeight: 700, fontSize: 14, color: c7 >= 0 ? "#22c55e" : "#f85149" }}>
                      {c7 >= 0 ? "▲" : "▼"} {Math.abs(c7).toFixed(1)}%
                    </td>
                    {/* Market Cap */}
                    <td style={{ padding: "14px 16px", textAlign: "right", fontSize: 13, color: "var(--color-text-secondary)" }}>
                      {token.marketCap}
                    </td>
                    {/* Volume */}
                    <td style={{ padding: "14px 16px", textAlign: "right", fontSize: 13, color: "var(--color-text-secondary)" }}>
                      {token.volume24h}
                    </td>
                    {/* Category */}
                    <td style={{ padding: "14px 16px" }}>
                      <span style={{
                        background: `${CAT_COLORS[token.category]}20`,
                        color: CAT_COLORS[token.category],
                        border: `1px solid ${CAT_COLORS[token.category]}40`,
                        borderRadius: 6,
                        padding: "3px 10px",
                        fontSize: 11,
                        fontWeight: 700,
                        whiteSpace: "nowrap",
                      }}>
                        {CAT_LABELS[token.category]}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Footer note */}
      <div style={{ marginTop: 16, fontSize: 12, color: "var(--color-text-secondary)", textAlign: "center" }}>
        Data for educational purposes. Prices are indicative snapshots. Always DYOR before investing.
        <br />
        <Link href="/tools" style={{ color: "#6366f1" }}>← Back to all tools</Link>
      </div>

      {/* SEO Text */}
      <div
        style={{
          marginTop: 40,
          background: "var(--glass-bg, rgba(255,255,255,0.04))",
          border: "1px solid var(--color-border, rgba(255,255,255,0.08))",
          borderRadius: 12,
          padding: "28px 32px",
        }}
      >
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "white", marginBottom: 14 }}>
          How to Use the Crypto Token Screener
        </h2>
        <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 12 }}>
          The degen0x Token Screener lets you filter and rank 100 cryptocurrencies using real metrics. Start by choosing
          a <strong style={{ color: "white" }}>category</strong> — Layer 1 blockchains, DeFi protocols, stablecoins, meme coins, AI tokens, and more. Then
          narrow by <strong style={{ color: "white" }}>chain</strong> to focus on assets native to Ethereum, Solana, BNB Chain, Cosmos, or others.
        </p>
        <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: 12 }}>
          Use the <strong style={{ color: "white" }}>Gainers Only</strong> filter to find tokens with positive 24-hour momentum, or
          <strong style={{ color: "white" }}> Losers Only</strong> to find potential buy-the-dip opportunities. Sort any column to
          rank tokens by market cap, price, 24h change, 7-day performance, or trading volume.
        </p>
        <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>
          Click any token name to read a full review including use case, supply data, all-time high, and affiliate exchange links.
          Combine filters to build a personalized watchlist and track the sectors you care about.
        </p>
      </div>
    </div>
  );
}
