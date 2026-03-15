'use client';
import { useState, useEffect, useCallback } from "react";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#6366f1", green: "#3fb950",
  blue: "#58a6ff", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff", red: "#f85149",
};

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
  category: string;
}

const MOCK_ITEMS: NewsItem[] = [
  { title: "Bitcoin Breaks $98K as Institutional Demand Surges in Q1 2026", link: "#", pubDate: new Date().toISOString(), description: "Bitcoin has surged past $98,000 driven by continued ETF inflows and growing sovereign wealth fund allocations to the asset class.", source: "CoinTelegraph", category: "General" },
  { title: "Ethereum L2 Total Value Locked Hits New ATH of $78B", link: "#", pubDate: new Date(Date.now() - 3600000).toISOString(), description: "The combined TVL across Base, Arbitrum, and Optimism has set a new all-time high as developers continue migrating to cheaper execution environments.", source: "The Defiant", category: "DeFi" },
  { title: "Jupiter DEX Surpasses $100B in Cumulative Volume on Solana", link: "#", pubDate: new Date(Date.now() - 7200000).toISOString(), description: "The Solana-based DEX aggregator celebrated a historic milestone as Solana ecosystem activity continues to accelerate.", source: "Decrypt", category: "DeFi" },
  { title: "SEC Approves First Spot Solana ETF Applications in Landmark Decision", link: "#", pubDate: new Date(Date.now() - 10800000).toISOString(), description: "Multiple asset managers received approval for spot SOL ETF products, marking a major regulatory breakthrough for the Solana ecosystem.", source: "CoinDesk", category: "Regulatory" },
  { title: "Ethena's USDe Supply Crosses $6B as Institutional Adoption Accelerates", link: "#", pubDate: new Date(Date.now() - 14400000).toISOString(), description: "The synthetic dollar protocol continues its rapid growth, attracting major TradFi firms seeking yield-bearing stablecoin exposure.", source: "Blockworks", category: "DeFi" },
  { title: "Ondo Finance Announces ONDO Chain Mainnet Launch for Q3 2026", link: "#", pubDate: new Date(Date.now() - 18000000).toISOString(), description: "The RWA-focused L1 blockchain designed for institutional tokenized assets is set for launch, with BlackRock and Franklin Templeton as launch partners.", source: "CoinDesk", category: "Institutional" },
  { title: "Base Ecosystem Total Users Surpass 10 Million Monthly Active Wallets", link: "#", pubDate: new Date(Date.now() - 21600000).toISOString(), description: "Coinbase's L2 network hits a new milestone, cementing its position as the fastest-growing EVM chain and home to the growing Farcaster ecosystem.", source: "Decrypt", category: "General" },
  { title: "DeFi Lending Protocols Report Record $18B in Active Loans", link: "#", pubDate: new Date(Date.now() - 25200000).toISOString(), description: "Aave, Morpho, and Kamino collectively report record borrowing activity as crypto collateral ratios improve with rising asset prices.", source: "The Defiant", category: "DeFi" },
];

const CATEGORY_COLORS: Record<string, string> = {
  General: S.blue, DeFi: S.accent, Regulatory: S.orange,
  Institutional: S.purple, NFT: S.yellow, Security: S.red,
};

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  if (mins < 1440) return `${Math.floor(mins / 60)}h ago`;
  return `${Math.floor(mins / 1440)}d ago`;
}

export default function LiveCryptoNews() {
  const [items, setItems] = useState<NewsItem[]>(MOCK_ITEMS);
  const [loading, setLoading] = useState(false);
  const [lastFetched, setLastFetched] = useState<Date | null>(null);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [liveCount, setLiveCount] = useState(0);

  const fetchNews = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/news-rss");
      if (res.ok) {
        const data = await res.json();
        if (data.items?.length > 0) {
          setItems(data.items);
          setLiveCount(data.items.length);
        }
      }
    } catch {
      // API may not be available in static build — use mock data
    } finally {
      setLoading(false);
      setLastFetched(new Date());
    }
  }, []);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  useEffect(() => {
    if (!autoRefresh) return;
    const interval = setInterval(fetchNews, 5 * 60 * 1000); // every 5 min
    return () => clearInterval(interval);
  }, [autoRefresh, fetchNews]);

  const categories = ["All", ...Array.from(new Set(items.map(i => i.category)))];
  const filtered = items.filter(item => {
    if (filter !== "All" && item.category !== filter) return false;
    if (search && !item.title.toLowerCase().includes(search.toLowerCase()) && !item.source.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const sources = Array.from(new Set(items.map(i => i.source)));

  return (
    <div style={{ background: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "20px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h1 style={{ fontSize: "1.6rem", fontWeight: 900, margin: 0, display: "flex", alignItems: "center", gap: 10 }}>
              📡 Live Crypto News
              {loading && <span style={{ fontSize: 12, padding: "2px 8px", background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40`, borderRadius: 6 }}>Refreshing...</span>}
            </h1>
            <p style={{ margin: "4px 0 0", color: S.text2, fontSize: 13 }}>
              {sources.length} sources · {filtered.length} articles
              {lastFetched && ` · Last updated ${timeAgo(lastFetched.toISOString())}`}
            </p>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <button onClick={() => setAutoRefresh(p => !p)} style={{ padding: "7px 14px", borderRadius: 8, border: `1px solid ${autoRefresh ? S.green : S.border}`, background: autoRefresh ? `${S.green}15` : S.surface, color: autoRefresh ? S.green : S.text2, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
              {autoRefresh ? "🔄 Auto-refresh ON" : "⏸ Auto-refresh OFF"}
            </button>
            <button onClick={fetchNews} disabled={loading} style={{ padding: "7px 14px", borderRadius: 8, border: `1px solid ${S.border}`, background: S.surface, color: S.text2, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
              ↻ Refresh now
            </button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "20px 24px" }}>
        {/* Source Pills */}
        <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
          {sources.map(s => (
            <span key={s} style={{ fontSize: 11, padding: "3px 10px", background: S.surface, border: `1px solid ${S.border}`, borderRadius: 20, color: S.text2, fontWeight: 600 }}>📰 {s}</span>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: 10, marginBottom: 20, flexWrap: "wrap", alignItems: "center" }}>
          <input
            placeholder="Search news..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            style={{ flex: 1, minWidth: 200, background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, padding: "8px 14px", color: S.text, fontSize: 13 }}
          />
          <div style={{ display: "flex", gap: 6 }}>
            {categories.map(cat => (
              <button key={cat} onClick={() => setFilter(cat)} style={{ padding: "6px 14px", borderRadius: 8, border: `1px solid ${filter === cat ? (CATEGORY_COLORS[cat] || S.accent) : S.border}`, background: filter === cat ? `${CATEGORY_COLORS[cat] || S.accent}15` : S.surface, color: filter === cat ? (CATEGORY_COLORS[cat] || S.accent) : S.text2, cursor: "pointer", fontSize: 12, fontWeight: 600 }}>
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* News Grid */}
        <div style={{ display: "grid", gap: 12 }}>
          {filtered.map((item, i) => (
            <a key={i} href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", display: "block" }}>
              <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: "16px 20px", transition: "border-color 0.15s", cursor: "pointer" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = S.accent)}
                onMouseLeave={e => (e.currentTarget.style.borderColor = S.border)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", gap: 6, marginBottom: 8, flexWrap: "wrap", alignItems: "center" }}>
                      <span style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 5, background: `${CATEGORY_COLORS[item.category] || S.blue}20`, color: CATEGORY_COLORS[item.category] || S.blue, border: `1px solid ${CATEGORY_COLORS[item.category] || S.blue}40` }}>
                        {item.category}
                      </span>
                      <span style={{ fontSize: 11, color: S.text2, fontWeight: 600 }}>{item.source}</span>
                      <span style={{ fontSize: 11, color: S.text2 }}>·</span>
                      <span style={{ fontSize: 11, color: S.text2 }}>{timeAgo(item.pubDate)}</span>
                    </div>
                    <h3 style={{ fontSize: 15, fontWeight: 700, color: S.text, margin: "0 0 6px", lineHeight: 1.4 }}>{item.title}</h3>
                    {item.description && <p style={{ fontSize: 13, color: S.text2, margin: 0, lineHeight: 1.6 }}>{item.description}...</p>}
                  </div>
                  <span style={{ fontSize: 18, flexShrink: 0 }}>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "60px 20px", color: S.text2 }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>📭</div>
            <div style={{ fontWeight: 700, marginBottom: 4 }}>No articles found</div>
            <div style={{ fontSize: 13 }}>Try adjusting your filters or search query</div>
          </div>
        )}
      </div>
    </div>
  );
}
