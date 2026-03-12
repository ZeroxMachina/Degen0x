'use client';

"use client";
import { useState, useCallback, useRef } from "react";

/* ── types ── */
interface TokenProfile {
  name: string;
  symbol: string;
  category: string;
  launched: string;
  consensus: string;
  maxSupply: string;
  circulatingSupply: string;
  allTimeHigh: string;
  allTimeLow: string;
  marketCapRank: string;
  summary: string;
  useCases: string[];
  risks: string[];
  competitors: string[];
  links: { label: string; url: string }[];
  sentiment: "Bullish" | "Neutral" | "Bearish";
  fundamentalScore: number; // 0-100
  technicalScore: number;   // 0-100
}

interface ResearchSection {
  title: string;
  icon: string;
  content: string | string[];
  type: "text" | "list" | "metric";
  color?: string;
}

/* ── knowledge base (curated profiles) ── */
const TOKEN_DB: Record<string, TokenProfile> = {
  BTC: {
    name: "Bitcoin", symbol: "BTC", category: "Store of Value / L1", launched: "Jan 2009", consensus: "Proof of Work (SHA-256)",
    maxSupply: "21,000,000", circulatingSupply: "~19,600,000", allTimeHigh: "$109,114 (Jan 2025)", allTimeLow: "$0.0008 (Oct 2009)", marketCapRank: "#1",
    summary: "Bitcoin is the first decentralized cryptocurrency and remains the largest by market capitalization. It serves as digital gold and a store of value, with institutional adoption accelerating through spot ETFs approved in 2024.",
    useCases: ["Store of value / digital gold", "Peer-to-peer payments", "Treasury reserve asset", "Inflation hedge", "Lightning Network micropayments"],
    risks: ["Regulatory crackdowns", "Energy consumption concerns", "Quantum computing threat (long-term)", "Mining centralization", "Slow base layer throughput"],
    competitors: ["Litecoin (LTC)", "Bitcoin Cash (BCH)", "Gold"],
    links: [{ label: "Bitcoin.org", url: "https://bitcoin.org" }, { label: "Lightning Network", url: "https://lightning.network" }],
    sentiment: "Bullish", fundamentalScore: 92, technicalScore: 78,
  },
  ETH: {
    name: "Ethereum", symbol: "ETH", category: "Smart Contract Platform / L1", launched: "Jul 2015", consensus: "Proof of Stake (Gasper/Casper)",
    maxSupply: "No cap (deflationary via EIP-1559)", circulatingSupply: "~120,400,000", allTimeHigh: "$4,891 (Nov 2021)", allTimeLow: "$0.42 (Oct 2015)", marketCapRank: "#2",
    summary: "Ethereum is the leading smart contract platform powering DeFi, NFTs, and thousands of dApps. Post-Merge (2022) it runs on Proof of Stake, and the Dencun upgrade (2024) slashed L2 costs by 95%+. The Pectra upgrade (2025) further improved validator UX and account abstraction.",
    useCases: ["DeFi protocols", "NFT infrastructure", "Layer 2 settlement", "DAO governance", "Tokenized real-world assets (RWA)", "Account abstraction (ERC-4337)"],
    risks: ["L2 fragmentation", "MEV exploitation", "Regulatory classification risk", "Execution layer complexity", "Competition from Solana, Sui"],
    competitors: ["Solana (SOL)", "Avalanche (AVAX)", "Sui (SUI)", "Cardano (ADA)"],
    links: [{ label: "Ethereum.org", url: "https://ethereum.org" }, { label: "L2Beat", url: "https://l2beat.com" }],
    sentiment: "Bullish", fundamentalScore: 88, technicalScore: 72,
  },
  SOL: {
    name: "Solana", symbol: "SOL", category: "High-Performance L1", launched: "Mar 2020", consensus: "Proof of Stake + Proof of History",
    maxSupply: "No cap (inflationary, decreasing)", circulatingSupply: "~430,000,000", allTimeHigh: "$293 (Jan 2025)", allTimeLow: "$0.50 (May 2020)", marketCapRank: "#5",
    summary: "Solana is a high-throughput blockchain achieving 65,000+ TPS with sub-second finality. It has become the dominant chain for memecoins, consumer DeFi, and DePIN. The Firedancer validator client (by Jump Crypto) is set to dramatically improve reliability.",
    useCases: ["DePIN networks", "Memecoin trading", "Consumer DeFi", "NFT marketplaces", "Payment processing", "Mobile-first crypto (Saga phone)"],
    risks: ["Network outage history", "Validator centralization", "Heavy memecoin dependence", "State growth concerns", "VC unlock pressure"],
    competitors: ["Ethereum (ETH)", "Sui (SUI)", "Aptos (APT)", "Sei (SEI)"],
    links: [{ label: "Solana.com", url: "https://solana.com" }, { label: "Solana FM", url: "https://solana.fm" }],
    sentiment: "Bullish", fundamentalScore: 82, technicalScore: 80,
  },
  LINK: {
    name: "Chainlink", symbol: "LINK", category: "Oracle / Infrastructure", launched: "Sep 2017", consensus: "Decentralized Oracle Network",
    maxSupply: "1,000,000,000", circulatingSupply: "~626,000,000", allTimeHigh: "$52.88 (May 2021)", allTimeLow: "$0.13 (Sep 2017)", marketCapRank: "#12",
    summary: "Chainlink is the dominant decentralized oracle network connecting smart contracts to real-world data. CCIP (Cross-Chain Interoperability Protocol) positions it as critical infrastructure for cross-chain communication and tokenized assets.",
    useCases: ["Price feeds for DeFi", "Cross-chain messaging (CCIP)", "VRF randomness", "Proof of Reserve", "DECO privacy proofs", "RWA tokenization oracles"],
    risks: ["Token unlock schedule", "Competition from API3, Pyth", "Revenue vs token emissions", "Centralization of node operators"],
    competitors: ["Pyth Network", "API3", "Band Protocol", "UMA"],
    links: [{ label: "Chain.link", url: "https://chain.link" }, { label: "Data Feeds", url: "https://data.chain.link" }],
    sentiment: "Bullish", fundamentalScore: 85, technicalScore: 68,
  },
  AAVE: {
    name: "Aave", symbol: "AAVE", category: "DeFi / Lending", launched: "Jan 2020 (v1)", consensus: "Governance Token (Ethereum-based)",
    maxSupply: "16,000,000", circulatingSupply: "~15,000,000", allTimeHigh: "$661 (Oct 2021)", allTimeLow: "$26.02 (Nov 2020)", marketCapRank: "#25",
    summary: "Aave is the largest decentralized lending protocol with $15B+ TVL across 12 chains. Aave v3 introduced efficiency modes, isolation pools, and portal bridging. GHO stablecoin launch expanded its DeFi ecosystem.",
    useCases: ["Lending & borrowing", "Flash loans", "GHO stablecoin", "Governance", "Institutional DeFi (Aave Arc)", "Cross-chain liquidity"],
    risks: ["Smart contract risk", "Liquidation cascades", "GHO depeg risk", "Regulatory uncertainty for DeFi lending", "TVL concentration in ETH/stablecoins"],
    competitors: ["Compound (COMP)", "Morpho", "Spark (MakerDAO)", "Euler Finance"],
    links: [{ label: "Aave.com", url: "https://aave.com" }, { label: "Governance", url: "https://governance.aave.com" }],
    sentiment: "Bullish", fundamentalScore: 80, technicalScore: 74,
  },
};

const QUICK_TOKENS = ["BTC", "ETH", "SOL", "LINK", "AAVE"];

/* ── component ── */
export default function ResearchAssistantPage() {
  const [query, setQuery] = useState("");
  const [activeToken, setActiveToken] = useState<TokenProfile | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const search = useCallback((sym: string) => {
    const key = sym.trim().toUpperCase();
    setLoading(true);
    setError("");

    // Simulate brief loading
    setTimeout(() => {
      const profile = TOKEN_DB[key];
      if (profile) {
        setActiveToken(profile);
        setHistory(prev => [key, ...prev.filter(h => h !== key)].slice(0, 10));
      } else {
        setError(`Token "${key}" not found in research database. Available: ${Object.keys(TOKEN_DB).join(", ")}`);
        setActiveToken(null);
      }
      setLoading(false);
    }, 400);
  }, []);

  const sections: ResearchSection[] = activeToken ? [
    { title: "Overview", icon: "📋", content: activeToken.summary, type: "text" },
    { title: "Use Cases", icon: "🎯", content: activeToken.useCases, type: "list", color: "#3fb950" },
    { title: "Risk Factors", icon: "⚠️", content: activeToken.risks, type: "list", color: "#f85149" },
    { title: "Competitors", icon: "🏁", content: activeToken.competitors, type: "list", color: "#58a6ff" },
  ] : [];

  return (
    <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 16px", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <span style={{ fontSize: 36 }}>🔬</span>
          <h1 style={{ fontSize: 28, fontWeight: 800, background: "linear-gradient(135deg, #6366f1, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Token Research Assistant
          </h1>
          <span style={{ background: "#6366f120", color: "#818cf8", border: "1px solid #6366f140", borderRadius: 6, padding: "3px 10px", fontSize: 12, fontWeight: 600 }}>Beta</span>
        </div>
        <p style={{ color: "#8b949e", fontSize: 15, maxWidth: 700 }}>
          Deep-dive research reports on major crypto assets. Fundamentals, risk analysis, competitive landscape, and sentiment scoring — all in one place.
        </p>
      </div>

      {/* Search */}
      <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 24 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          <input
            ref={inputRef}
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={e => e.key === "Enter" && query && search(query)}
            placeholder="Enter token symbol (e.g., BTC, ETH, SOL)..."
            style={{ flex: 1, padding: "12px 16px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 10, color: "#e6edf3", fontSize: 15, outline: "none" }}
          />
          <button
            onClick={() => query && search(query)}
            style={{ padding: "12px 24px", background: "#6366f1", color: "#fff", border: "none", borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: "pointer" }}
          >
            Research
          </button>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <span style={{ fontSize: 12, color: "#8b949e" }}>Quick:</span>
          {QUICK_TOKENS.map(t => (
            <button key={t} onClick={() => { setQuery(t); search(t); }}
              style={{ padding: "4px 12px", background: activeToken?.symbol === t ? "#6366f130" : "#0d1117", border: `1px solid ${activeToken?.symbol === t ? "#6366f1" : "#30363d"}`, borderRadius: 6, color: activeToken?.symbol === t ? "#818cf8" : "#8b949e", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
              {t}
            </button>
          ))}
          {history.length > 0 && (
            <>
              <span style={{ fontSize: 12, color: "#30363d", margin: "0 4px" }}>|</span>
              <span style={{ fontSize: 12, color: "#8b949e" }}>Recent:</span>
              {history.slice(0, 3).filter(h => !QUICK_TOKENS.includes(h)).map(h => (
                <button key={h} onClick={() => { setQuery(h); search(h); }}
                  style={{ padding: "4px 10px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 6, color: "#8b949e", fontSize: 12, cursor: "pointer" }}>
                  {h}
                </button>
              ))}
            </>
          )}
        </div>
      </div>

      {loading && (
        <div style={{ textAlign: "center", padding: 60, color: "#8b949e" }}>
          <div style={{ fontSize: 32, marginBottom: 12 }}>🔍</div>
          <div>Analyzing token fundamentals...</div>
        </div>
      )}

      {error && (
        <div style={{ background: "#f8514915", border: "1px solid #f8514940", borderRadius: 10, padding: 16, color: "#f85149", fontSize: 14 }}>
          {error}
        </div>
      )}

      {activeToken && !loading && (
        <>
          {/* Token Header Card */}
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 24, marginBottom: 24 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 16 }}>
              <div>
                <h2 style={{ fontSize: 24, fontWeight: 800 }}>{activeToken.name} <span style={{ color: "#8b949e", fontWeight: 400 }}>({activeToken.symbol})</span></h2>
                <div style={{ display: "flex", gap: 8, marginTop: 8, flexWrap: "wrap" }}>
                  <span style={{ background: "#6366f120", color: "#818cf8", padding: "3px 10px", borderRadius: 6, fontSize: 12 }}>{activeToken.category}</span>
                  <span style={{ background: "#58a6ff20", color: "#58a6ff", padding: "3px 10px", borderRadius: 6, fontSize: 12 }}>Rank {activeToken.marketCapRank}</span>
                  <span style={{ background: "#3fb95020", color: "#3fb950", padding: "3px 10px", borderRadius: 6, fontSize: 12 }}>Since {activeToken.launched}</span>
                  <span style={{ background: "#d2992220", color: "#d29922", padding: "3px 10px", borderRadius: 6, fontSize: 12 }}>{activeToken.consensus}</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                {activeToken.links.map((l, i) => (
                  <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" style={{ padding: "6px 14px", background: "#0d1117", border: "1px solid #30363d", borderRadius: 8, color: "#58a6ff", fontSize: 12, fontWeight: 600, textDecoration: "none" }}>
                    {l.label} ↗
                  </a>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginTop: 20 }}>
              {[
                { label: "Max Supply", value: activeToken.maxSupply },
                { label: "Circulating", value: activeToken.circulatingSupply },
                { label: "All-Time High", value: activeToken.allTimeHigh },
                { label: "All-Time Low", value: activeToken.allTimeLow },
              ].map((m, i) => (
                <div key={i} style={{ background: "#0d1117", borderRadius: 8, padding: "10px 14px" }}>
                  <div style={{ fontSize: 10, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.04em" }}>{m.label}</div>
                  <div style={{ fontSize: 13, fontWeight: 600, marginTop: 2 }}>{m.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scores */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, marginBottom: 24 }}>
            {/* Fundamental Score */}
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Fundamental Score</div>
              <div style={{ position: "relative", width: 100, height: 100, margin: "0 auto" }}>
                <svg viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#30363d" strokeWidth="8" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke={activeToken.fundamentalScore > 75 ? "#3fb950" : activeToken.fundamentalScore > 50 ? "#d29922" : "#f85149"} strokeWidth="8" strokeDasharray={`${activeToken.fundamentalScore * 2.64} 264`} strokeLinecap="round" />
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 800, color: activeToken.fundamentalScore > 75 ? "#3fb950" : activeToken.fundamentalScore > 50 ? "#d29922" : "#f85149" }}>
                  {activeToken.fundamentalScore}
                </div>
              </div>
            </div>

            {/* Technical Score */}
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Technical Score</div>
              <div style={{ position: "relative", width: 100, height: 100, margin: "0 auto" }}>
                <svg viewBox="0 0 100 100" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="50" cy="50" r="42" fill="none" stroke="#30363d" strokeWidth="8" />
                  <circle cx="50" cy="50" r="42" fill="none" stroke={activeToken.technicalScore > 75 ? "#3fb950" : activeToken.technicalScore > 50 ? "#d29922" : "#f85149"} strokeWidth="8" strokeDasharray={`${activeToken.technicalScore * 2.64} 264`} strokeLinecap="round" />
                </svg>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, fontWeight: 800, color: activeToken.technicalScore > 75 ? "#3fb950" : activeToken.technicalScore > 50 ? "#d29922" : "#f85149" }}>
                  {activeToken.technicalScore}
                </div>
              </div>
            </div>

            {/* Sentiment */}
            <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, textAlign: "center" }}>
              <div style={{ fontSize: 11, color: "#8b949e", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>Market Sentiment</div>
              <div style={{ fontSize: 48, marginBottom: 4 }}>{activeToken.sentiment === "Bullish" ? "🟢" : activeToken.sentiment === "Bearish" ? "🔴" : "🟡"}</div>
              <div style={{ fontSize: 18, fontWeight: 700, color: activeToken.sentiment === "Bullish" ? "#3fb950" : activeToken.sentiment === "Bearish" ? "#f85149" : "#d29922" }}>
                {activeToken.sentiment}
              </div>
            </div>
          </div>

          {/* Research Sections */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
            {sections.map((s, i) => (
              <div key={i} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                  <span>{s.icon}</span> {s.title}
                </h3>
                {s.type === "text" ? (
                  <p style={{ color: "#8b949e", fontSize: 14, lineHeight: 1.7 }}>{s.content}</p>
                ) : (
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {(s.content as string[]).map((item, j) => (
                      <li key={j} style={{ padding: "6px 0", borderBottom: j < (s.content as string[]).length - 1 ? "1px solid #21262d" : "none", fontSize: 13, color: "#c9d1d9", display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.color || "#58a6ff", flexShrink: 0 }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div style={{ background: "#d2992210", border: "1px solid #d2992240", borderRadius: 10, padding: "12px 16px", fontSize: 12, color: "#d29922" }}>
            This research is for educational purposes only and does not constitute investment advice. Always do your own research (DYOR) before making any investment decisions. Crypto assets are highly volatile and you may lose your entire investment.
          </div>
        </>
      )}

      {!activeToken && !loading && !error && (
        <div style={{ textAlign: "center", padding: 60, color: "#8b949e" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🔬</div>
          <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8, color: "#e6edf3" }}>Ready to Research</div>
          <p>Enter a token symbol above or click a quick button to generate a comprehensive research report.</p>
        </div>
      )}
    </div>
  );
}
