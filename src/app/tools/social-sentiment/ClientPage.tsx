"use client";

import { useState, useMemo, useEffect } from "react";
import RelatedContent from '@/components/RelatedContent';

interface TokenSentiment {
  name: string;
  ticker: string;
  sentimentScore: number;       // -100 to 100
  sentimentLabel: "Very Bearish" | "Bearish" | "Neutral" | "Bullish" | "Very Bullish";
  mentions24h: number;
  mentionChange: number;        // %
  twitterFollowers: number;
  telegramMembers: number;
  redditActive: number;
  topTopic: string;
  buzzScore: number;            // 0-100
  sparkline: number[];          // last 24h sentiment
  color: string;
}

const TOKENS: TokenSentiment[] = [
  { name: "Bitcoin", ticker: "BTC", sentimentScore: 72, sentimentLabel: "Bullish", mentions24h: 284300, mentionChange: 18.4, twitterFollowers: 6200000, telegramMembers: 890000, redditActive: 45200, topTopic: "Strategic reserve announcement", buzzScore: 89, sparkline: [55,58,62,59,65,68,72,75,71,68,72,74,70,68,72,75,78,74,71,73,76,74,72,72], color: "#F7931A" },
  { name: "Ethereum", ticker: "ETH", sentimentScore: 45, sentimentLabel: "Neutral", mentions24h: 178500, mentionChange: -5.2, twitterFollowers: 3800000, telegramMembers: 560000, redditActive: 38700, topTopic: "Pectra upgrade timeline", buzzScore: 67, sparkline: [52,50,48,45,43,46,48,50,47,44,42,45,48,46,43,45,47,49,46,44,45,47,45,45], color: "#627EEA" },
  { name: "Solana", ticker: "SOL", sentimentScore: 81, sentimentLabel: "Very Bullish", mentions24h: 198400, mentionChange: 34.7, twitterFollowers: 2900000, telegramMembers: 420000, redditActive: 22100, topTopic: "Firedancer launch hype", buzzScore: 94, sparkline: [60,63,67,70,72,75,78,80,82,79,76,78,81,83,80,78,82,85,83,80,82,84,81,81], color: "#00FFA3" },
  { name: "Hyperliquid", ticker: "HYPE", sentimentScore: 88, sentimentLabel: "Very Bullish", mentions24h: 87600, mentionChange: 67.3, twitterFollowers: 450000, telegramMembers: 180000, redditActive: 8900, topTopic: "Volume flipping Binance perps", buzzScore: 96, sparkline: [50,55,60,65,70,73,76,78,82,85,87,88,86,84,87,89,91,88,86,88,90,88,88,88], color: "#00FF88" },
  { name: "Jupiter", ticker: "JUP", sentimentScore: 62, sentimentLabel: "Bullish", mentions24h: 56800, mentionChange: 12.8, twitterFollowers: 680000, telegramMembers: 210000, redditActive: 6700, topTopic: "New launchpad features", buzzScore: 73, sparkline: [48,50,53,55,57,59,61,63,60,58,60,62,64,61,59,62,64,63,61,62,64,63,62,62], color: "#C5F467" },
  { name: "Pendle", ticker: "PENDLE", sentimentScore: 56, sentimentLabel: "Bullish", mentions24h: 34200, mentionChange: 8.4, twitterFollowers: 290000, telegramMembers: 95000, redditActive: 4200, topTopic: "New yield markets launching", buzzScore: 64, sparkline: [45,47,49,51,53,54,55,56,54,53,55,57,56,54,55,57,58,56,55,56,57,56,56,56], color: "#01C0AB" },
  { name: "Ethena", ticker: "ENA", sentimentScore: 34, sentimentLabel: "Neutral", mentions24h: 41300, mentionChange: -12.6, twitterFollowers: 520000, telegramMembers: 150000, redditActive: 5600, topTopic: "Yield sustainability debate", buzzScore: 58, sparkline: [50,48,45,42,40,38,36,35,37,39,36,34,32,34,36,33,31,34,36,35,33,34,35,34], color: "#7B61FF" },
  { name: "Sui", ticker: "SUI", sentimentScore: 68, sentimentLabel: "Bullish", mentions24h: 62100, mentionChange: 22.1, twitterFollowers: 780000, telegramMembers: 280000, redditActive: 7800, topTopic: "Gaming ecosystem growth", buzzScore: 78, sparkline: [50,53,56,58,60,62,65,67,64,62,65,68,66,64,66,68,70,68,66,68,70,68,68,68], color: "#4DA2FF" },
  { name: "Berachain", ticker: "BERA", sentimentScore: 74, sentimentLabel: "Bullish", mentions24h: 45800, mentionChange: 41.2, twitterFollowers: 410000, telegramMembers: 160000, redditActive: 5100, topTopic: "Proof-of-Liquidity innovation", buzzScore: 82, sparkline: [45,50,55,58,62,65,68,70,72,70,68,72,75,73,70,72,75,77,74,72,74,76,74,74], color: "#784420" },
  { name: "Virtuals", ticker: "VIRTUAL", sentimentScore: 79, sentimentLabel: "Bullish", mentions24h: 38900, mentionChange: 55.8, twitterFollowers: 320000, telegramMembers: 120000, redditActive: 4800, topTopic: "AI agent token economy", buzzScore: 87, sparkline: [40,45,50,55,60,63,67,70,73,76,78,79,77,75,78,80,82,79,77,79,81,80,79,79], color: "#FF69B4" },
  { name: "Dogecoin", ticker: "DOGE", sentimentScore: -15, sentimentLabel: "Bearish", mentions24h: 124500, mentionChange: -18.3, twitterFollowers: 3700000, telegramMembers: 340000, redditActive: 28900, topTopic: "DOGE department controversy", buzzScore: 71, sparkline: [20,15,10,5,0,-5,-8,-10,-12,-10,-8,-12,-15,-13,-10,-12,-15,-18,-15,-13,-15,-16,-15,-15], color: "#C2A633" },
  { name: "XRP", ticker: "XRP", sentimentScore: 28, sentimentLabel: "Neutral", mentions24h: 95200, mentionChange: 7.6, twitterFollowers: 2100000, telegramMembers: 280000, redditActive: 18400, topTopic: "ETF speculation continues", buzzScore: 62, sparkline: [20,22,24,25,27,28,30,28,26,28,30,28,26,28,30,28,26,27,28,30,28,27,28,28], color: "#00AAE4" },
];

function getSentimentColor(score: number): string {
  if (score >= 60) return "#3fb950";
  if (score >= 20) return "#d29922";
  if (score >= -20) return "#8b949e";
  if (score >= -60) return "#f0883e";
  return "#f85149";
}

function SparklineChart({ data, color, width = 120, height = 32 }: { data: number[]; color: string; width?: number; height?: number }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const points = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((v - min) / range) * height;
    return `${x},${y}`;
  }).join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <defs>
        <linearGradient id={`grad-${color.replace("#","")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon points={`0,${height} ${points} ${width},${height}`} fill={`url(#grad-${color.replace("#","")})`} />
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SentimentGauge({ score, size = 80 }: { score: number; size?: number }) {
  const normalized = (score + 100) / 200;
  const angle = -90 + normalized * 180;
  const color = getSentimentColor(score);
  const r = size / 2 - 8;

  return (
    <svg width={size} height={size / 2 + 10} viewBox={`0 0 ${size} ${size / 2 + 10}`}>
      <path d={`M 8 ${size / 2} A ${r} ${r} 0 0 1 ${size - 8} ${size / 2}`} fill="none" stroke="#21262d" strokeWidth="6" strokeLinecap="round" />
      <path d={`M 8 ${size / 2} A ${r} ${r} 0 0 1 ${size - 8} ${size / 2}`} fill="none" stroke={color} strokeWidth="6" strokeLinecap="round" strokeDasharray={`${normalized * Math.PI * r} ${Math.PI * r}`} />
      <text x={size / 2} y={size / 2 - 2} textAnchor="middle" fill={color} fontSize="16" fontWeight="800">{score}</text>
      <text x={size / 2} y={size / 2 + 10} textAnchor="middle" fill="#8b949e" fontSize="8" fontWeight="600">SENTIMENT</text>
    </svg>
  );
}

function formatNum(n: number): string {
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return n.toString();
}

type SortKey = "sentimentScore" | "mentions24h" | "mentionChange" | "buzzScore";

export default function SocialSentimentPage() {
  const [sortBy, setSortBy] = useState<SortKey>("buzzScore");
  const [sortDir, setSortDir] = useState<"desc" | "asc">("desc");
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [pulseOffset, setPulseOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setPulseOffset((p) => (p + 1) % 100), 3000);
    return () => clearInterval(timer);
  }, []);

  const filtered = useMemo(() => {
    let data = [...TOKENS];
    if (searchQuery) data = data.filter((t) => t.name.toLowerCase().includes(searchQuery.toLowerCase()) || t.ticker.toLowerCase().includes(searchQuery.toLowerCase()));
    if (filter === "bullish") data = data.filter((t) => t.sentimentScore >= 20);
    if (filter === "bearish") data = data.filter((t) => t.sentimentScore < -10);
    if (filter === "trending") data = data.filter((t) => t.mentionChange > 20);
    data.sort((a, b) => sortDir === "desc" ? b[sortBy] - a[sortBy] : a[sortBy] - b[sortBy]);
    return data;
  }, [sortBy, sortDir, filter, searchQuery, pulseOffset]);

  const handleSort = (key: SortKey) => {
    if (sortBy === key) setSortDir(sortDir === "desc" ? "asc" : "desc");
    else { setSortBy(key); setSortDir("desc"); }
  };

  const avgSentiment = Math.round(TOKENS.reduce((s, t) => s + t.sentimentScore, 0) / TOKENS.length);
  const totalMentions = TOKENS.reduce((s, t) => s + t.mentions24h, 0);
  const trendingCount = TOKENS.filter((t) => t.mentionChange > 20).length;

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #161b22 0%, #1c1a2e 100%)", borderBottom: "1px solid #30363d", padding: "28px 24px" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
            <span style={{ fontSize: "28px" }}>📡</span>
            <h1 style={{ fontSize: "26px", fontWeight: 800, background: "linear-gradient(135deg, #bc8cff, #ff69b4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Social Sentiment Radar
            </h1>
            <span style={{ background: "#bc8cff20", color: "#bc8cff", border: "1px solid #bc8cff40", borderRadius: "20px", padding: "2px 10px", fontSize: "11px", fontWeight: 700, animation: "pulse 2s infinite" }}>SCANNING</span>
          </div>
          <p style={{ color: "#8b949e", fontSize: "14px", maxWidth: "600px" }}>
            Track real-time social media sentiment across Twitter, Reddit, and Telegram. Spot narrative shifts before they hit the charts.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "20px 24px" }}>
        {/* Market Mood Summary */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px", marginBottom: "20px" }}>
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: "12px", padding: "16px", display: "flex", alignItems: "center", gap: "16px" }}>
            <SentimentGauge score={avgSentiment} />
            <div>
              <div style={{ fontSize: "11px", color: "#8b949e", fontWeight: 600, textTransform: "uppercase" }}>Market Mood</div>
              <div style={{ fontSize: "16px", fontWeight: 800, color: getSentimentColor(avgSentiment) }}>
                {avgSentiment >= 60 ? "Very Bullish" : avgSentiment >= 20 ? "Bullish" : "Neutral"}
              </div>
            </div>
          </div>
          {[
            { label: "Total Mentions (24h)", value: formatNum(totalMentions), color: "#58a6ff" },
            { label: "Trending Tokens", value: `${trendingCount} tokens`, color: "#f0883e" },
            { label: "Most Bullish", value: TOKENS.reduce((a, b) => a.sentimentScore > b.sentimentScore ? a : b).ticker, color: "#3fb950" },
            { label: "Most Bearish", value: TOKENS.reduce((a, b) => a.sentimentScore < b.sentimentScore ? a : b).ticker, color: "#f85149" },
          ].map((card) => (
            <div key={card.label} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: "12px", padding: "16px", borderLeft: `3px solid ${card.color}` }}>
              <div style={{ fontSize: "11px", color: "#8b949e", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "6px" }}>{card.label}</div>
              <div style={{ fontSize: "22px", fontWeight: 800, color: card.color }}>{card.value}</div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", alignItems: "center", marginBottom: "16px" }}>
          <input type="text" placeholder="Search tokens..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ padding: "8px 14px", borderRadius: "8px", border: "1px solid #30363d", background: "#161b22", color: "#e6edf3", fontSize: "13px", width: "200px" }} />
          {[
            { key: "all", label: "All Tokens" },
            { key: "bullish", label: "🟢 Bullish" },
            { key: "bearish", label: "🔴 Bearish" },
            { key: "trending", label: "🔥 Trending" },
          ].map((f) => (
            <button key={f.key} onClick={() => setFilter(f.key)} style={{ padding: "6px 14px", borderRadius: "8px", border: "1px solid", borderColor: filter === f.key ? "#bc8cff" : "#30363d", background: filter === f.key ? "#bc8cff20" : "#161b22", color: filter === f.key ? "#bc8cff" : "#8b949e", fontSize: "12px", fontWeight: 600, cursor: "pointer" }}>
              {f.label}
            </button>
          ))}
        </div>

        {/* Token Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "14px" }}>
          {filtered.map((token) => (
            <div key={token.ticker} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: "14px", padding: "20px", borderTop: `3px solid ${token.color}`, transition: "transform 0.15s" }}>
              {/* Token header */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "14px" }}>
                <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `${token.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px", fontWeight: 800, color: token.color, border: `1px solid ${token.color}40` }}>
                    {token.ticker.slice(0, 3)}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "15px" }}>{token.name}</div>
                    <div style={{ fontSize: "11px", color: "#8b949e" }}>{token.ticker}</div>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: "22px", fontWeight: 800, color: getSentimentColor(token.sentimentScore) }}>{token.sentimentScore}</div>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: getSentimentColor(token.sentimentScore), textTransform: "uppercase" }}>{token.sentimentLabel}</div>
                </div>
              </div>

              {/* Sparkline */}
              <div style={{ marginBottom: "14px", background: "#0d1117", borderRadius: "8px", padding: "8px" }}>
                <SparklineChart data={token.sparkline} color={token.color} width={290} height={40} />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "9px", color: "#6e7681", marginTop: "4px" }}>
                  <span>24h ago</span><span>Now</span>
                </div>
              </div>

              {/* Metrics */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "10px", marginBottom: "14px" }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "9px", color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: "2px" }}>Mentions</div>
                  <div style={{ fontSize: "14px", fontWeight: 700 }}>{formatNum(token.mentions24h)}</div>
                  <div style={{ fontSize: "10px", color: token.mentionChange >= 0 ? "#3fb950" : "#f85149", fontWeight: 600 }}>
                    {token.mentionChange >= 0 ? "+" : ""}{token.mentionChange.toFixed(1)}%
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "9px", color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: "2px" }}>Buzz</div>
                  <div style={{ fontSize: "14px", fontWeight: 700, color: token.buzzScore >= 80 ? "#f0883e" : token.buzzScore >= 60 ? "#d29922" : "#8b949e" }}>{token.buzzScore}</div>
                  <div style={{ width: "100%", height: "4px", background: "#21262d", borderRadius: "2px", marginTop: "4px" }}>
                    <div style={{ width: `${token.buzzScore}%`, height: "100%", background: token.buzzScore >= 80 ? "#f0883e" : token.buzzScore >= 60 ? "#d29922" : "#8b949e", borderRadius: "2px" }} />
                  </div>
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "9px", color: "#8b949e", fontWeight: 700, textTransform: "uppercase", marginBottom: "2px" }}>Socials</div>
                  <div style={{ fontSize: "10px", color: "#8b949e" }}>🐦 {formatNum(token.twitterFollowers)}</div>
                  <div style={{ fontSize: "10px", color: "#8b949e" }}>💬 {formatNum(token.telegramMembers)}</div>
                </div>
              </div>

              {/* Trending topic */}
              <div style={{ background: "#0d1117", borderRadius: "8px", padding: "8px 12px", fontSize: "11px" }}>
                <span style={{ color: "#8b949e", fontWeight: 600 }}>🔥 Hot topic:</span>{" "}
                <span style={{ color: "#e6edf3" }}>{token.topTopic}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology */}
        <div style={{ marginTop: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: "12px", padding: "20px" }}>
          <h3 style={{ fontSize: "14px", fontWeight: 700, marginBottom: "8px", color: "#8b949e" }}>📋 Methodology</h3>
          <p style={{ fontSize: "12px", color: "#6e7681", lineHeight: 1.7 }}>
            Sentiment Score ranges from -100 (extremely bearish) to +100 (extremely bullish), computed from NLP analysis of social media posts.
            Buzz Score measures the viral potential (0-100) based on mention velocity, engagement rate, and influencer amplification.
            Data aggregated from Twitter/X, Reddit, Telegram, and Discord. Updated every 5 minutes.
            Data shown is simulated for demonstration purposes.
          </p>
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Social Sentiment",
              "url": "https://degen0x.com/tools/social-sentiment",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <RelatedContent category="tools" currentSlug="/tools/social-sentiment" />
      </div>
  );
}
