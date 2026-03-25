'use client';

import { useState, useMemo } from "react";

// ── Interfaces ───────────────────────────────────────────────────────────────
interface DeFAIProtocol {
  name: string;
  ticker: string;
  chain: string;
  category: string;
  tvlDisplay: string;
  tvlValue: number; // for sorting (in millions)
  marketCapDisplay: string;
  marketCapValue: number;
  description: string;
  color: string;
  riskLevel: "Low" | "Medium" | "High";
  launchYear: number;
  auditStatus: "Audited" | "Partial" | "Unaudited";
}

// ── Static Data ──────────────────────────────────────────────────────────────
const DEFAI_PROTOCOLS: DeFAIProtocol[] = [
  {
    name: "Almanak",
    ticker: "ALMANAK",
    chain: "Ethereum",
    category: "Yield Optimization",
    tvlDisplay: "$90M+",
    tvlValue: 90,
    marketCapDisplay: "—",
    marketCapValue: 0,
    description:
      "Leads DeFAI vault TVL. Autonomous liquidity management for Uniswap v3 LP positions — continuously rebalances to keep positions in range and maximize fee capture.",
    color: "#8b5cf6",
    riskLevel: "Medium",
    launchYear: 2024,
    auditStatus: "Audited",
  },
  {
    name: "Virtuals Protocol",
    ticker: "VIRTUAL",
    chain: "Base",
    category: "Agent Infrastructure",
    tvlDisplay: "—",
    tvlValue: 0,
    marketCapDisplay: "$1B+",
    marketCapValue: 1000,
    description:
      "Leading AI agent launchpad. Create, deploy, and co-own AI agents as tokenized assets. GAME framework enables no-code agent deployment across Base and Solana.",
    color: "#f59e0b",
    riskLevel: "High",
    launchYear: 2024,
    auditStatus: "Audited",
  },
  {
    name: "ElizaOS (ai16z)",
    ticker: "AI16Z",
    chain: "Solana",
    category: "Open Source Framework",
    tvlDisplay: "—",
    tvlValue: 0,
    marketCapDisplay: "$2.8B",
    marketCapValue: 2800,
    description:
      "Open-source 'WordPress for AI agents.' Modular framework for building DeFi-native agents with multi-platform presence. Thousands of live agents run on this stack.",
    color: "#3b82f6",
    riskLevel: "High",
    launchYear: 2024,
    auditStatus: "Partial",
  },
  {
    name: "SingularityDAO",
    ticker: "SDAO",
    chain: "Ethereum",
    category: "Portfolio Management",
    tvlDisplay: "$400M AUM",
    tvlValue: 400,
    marketCapDisplay: "$250M",
    marketCapValue: 250,
    description:
      "Runs DynaSets — AI-managed on-chain investment vaults. Users set a risk tier and deposit; agents handle strategy, allocation, and execution across multiple tokens.",
    color: "#22c55e",
    riskLevel: "Medium",
    launchYear: 2021,
    auditStatus: "Audited",
  },
  {
    name: "Fetch.ai (ASI)",
    ticker: "FET",
    chain: "Ethereum",
    category: "Agent Network",
    tvlDisplay: "—",
    tvlValue: 0,
    marketCapDisplay: "$3.1B",
    marketCapValue: 3100,
    description:
      "OG AI-crypto project merged into the ASI Alliance. DeltaV platform lets users query DeFi protocols in natural language and execute complex multi-step strategies autonomously.",
    color: "#06b6d4",
    riskLevel: "Medium",
    launchYear: 2019,
    auditStatus: "Audited",
  },
  {
    name: "Beep",
    ticker: "BEEP",
    chain: "Sui",
    category: "Micropayments",
    tvlDisplay: "Growing",
    tvlValue: 5,
    marketCapDisplay: "—",
    marketCapValue: 0,
    description:
      "Leading agentic finance protocol on Sui. Enables micropayments and programmable finance for high-frequency DeFi operations that require Sui's low-latency finality.",
    color: "#a855f7",
    riskLevel: "High",
    launchYear: 2025,
    auditStatus: "Partial",
  },
  {
    name: "Autonolas (OLAS)",
    ticker: "OLAS",
    chain: "Ethereum",
    category: "Multi-Agent Systems",
    tvlDisplay: "—",
    tvlValue: 0,
    marketCapDisplay: "$1.5B",
    marketCapValue: 1500,
    description:
      "Decentralized network for creating and running autonomous agent services. Focuses on multi-agent coordination for complex tasks like liquidity provisioning and DAO ops.",
    color: "#ec4899",
    riskLevel: "Medium",
    launchYear: 2022,
    auditStatus: "Audited",
  },
  {
    name: "Beefy Finance",
    ticker: "BIFI",
    chain: "Multi-chain",
    category: "Yield Aggregator",
    tvlDisplay: "$300M+",
    tvlValue: 300,
    marketCapDisplay: "$50M",
    marketCapValue: 50,
    description:
      "Veteran yield aggregator integrating AI-powered vault selection in 2025. Auto-compounds yields across 25+ chains. Increasingly uses ML models to optimize compounding strategies.",
    color: "#f97316",
    riskLevel: "Low",
    launchYear: 2020,
    auditStatus: "Audited",
  },
];

const CATEGORIES = ["All", "Yield Optimization", "Agent Infrastructure", "Open Source Framework", "Portfolio Management", "Agent Network", "Multi-Agent Systems", "Micropayments", "Yield Aggregator"];
const CHAINS = ["All", "Ethereum", "Solana", "Base", "Sui", "Multi-chain"];
const SORT_OPTIONS = [
  { label: "Market Cap ↓", value: "mcap_desc" },
  { label: "TVL ↓", value: "tvl_desc" },
  { label: "Launch Year ↑", value: "year_asc" },
  { label: "Name A-Z", value: "name_asc" },
];

// ── Risk badge helper ────────────────────────────────────────────────────────
function RiskBadge({ level }: { level: DeFAIProtocol["riskLevel"] }) {
  const config = {
    Low: { bg: "#22c55e20", color: "#22c55e", border: "#22c55e40" },
    Medium: { bg: "#f59e0b20", color: "#f59e0b", border: "#f59e0b40" },
    High: { bg: "#ef444420", color: "#ef4444", border: "#ef444440" },
  }[level];
  return (
    <span
      style={{
        fontSize: 10,
        fontWeight: 700,
        padding: "2px 8px",
        borderRadius: 999,
        background: config.bg,
        color: config.color,
        border: `1px solid ${config.border}`,
      }}
    >
      {level} Risk
    </span>
  );
}

// ── Audit badge helper ───────────────────────────────────────────────────────
function AuditBadge({ status }: { status: DeFAIProtocol["auditStatus"] }) {
  const config = {
    Audited: { icon: "✅", color: "#22c55e" },
    Partial: { icon: "⚠️", color: "#f59e0b" },
    Unaudited: { icon: "❌", color: "#ef4444" },
  }[status];
  return (
    <span style={{ fontSize: 11, color: config.color }}>
      {config.icon} {status}
    </span>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function DeFAIProtocolExplorer() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedChain, setSelectedChain] = useState("All");
  const [sortBy, setSortBy] = useState("mcap_desc");
  const [expanded, setExpanded] = useState<string | null>(null);

  const hasActiveFilters = search.trim() !== "" || selectedCategory !== "All" || selectedChain !== "All";

  const handleClearFilters = () => {
    setSearch("");
    setSelectedCategory("All");
    setSelectedChain("All");
    setSortBy("mcap_desc");
  };

  const filtered = useMemo(() => {
    let result = DEFAI_PROTOCOLS.filter((p) => {
      const matchSearch =
        search.trim() === "" ||
        p.name.toLowerCase().includes(search.toLowerCase()) ||
        p.ticker.toLowerCase().includes(search.toLowerCase()) ||
        p.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = selectedCategory === "All" || p.category === selectedCategory;
      const matchChain = selectedChain === "All" || p.chain === selectedChain;
      return matchSearch && matchCategory && matchChain;
    });

    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case "mcap_desc": return b.marketCapValue - a.marketCapValue;
        case "tvl_desc": return b.tvlValue - a.tvlValue;
        case "year_asc": return a.launchYear - b.launchYear;
        case "name_asc": return a.name.localeCompare(b.name);
        default: return 0;
      }
    });

    return result;
  }, [search, selectedCategory, selectedChain, sortBy]);

  return (
    <div style={{ marginTop: 24, marginBottom: 8 }}>
      {/* Keyframes for expand animation */}
      <style>{`
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0s !important; transition-duration: 0s !important; }
        }
      `}</style>
      {/* Header */}
      <div style={{ marginBottom: 16 }}>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: "#e6edf3",
            marginBottom: 4,
          }}
        >
          🔍 DeFAI Protocol Explorer
        </h3>
        <p style={{ fontSize: 13, color: "#8b949e" }}>
          {filtered.length} of {DEFAI_PROTOCOLS.length} protocols · Data approximate March 2026
        </p>
      </div>

      {/* Controls */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: 8,
          marginBottom: 16,
        }}
      >
        {/* Search */}
        <div style={{ position: "relative" }}>
          <input
            type="text"
            placeholder="Search protocols..."
            aria-label="Search DeFAI protocols"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              background: "#161b22",
              border: "1px solid #30363d",
              borderRadius: 8,
              padding: "8px 12px",
              paddingRight: search ? 32 : 12,
              color: "#e6edf3",
              fontSize: 13,
              minWidth: 0,
              width: "100%",
            }}
            className="focus:outline-2 focus:outline-[#6366f1]"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              aria-label="Clear search"
              style={{
                position: "absolute",
                right: 8,
                top: "50%",
                transform: "translateY(-50%)",
                background: "none",
                border: "none",
                color: "#8b949e",
                cursor: "pointer",
                fontSize: 14,
                padding: "2px 4px",
                lineHeight: 1,
              }}
              className="hover:text-[#e6edf3]"
            >
              ✕
            </button>
          )}
        </div>

        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
        {/* Category */}
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          aria-label="Filter by category"
          style={{
            background: "#161b22",
            border: "1px solid #30363d",
            borderRadius: 8,
            padding: "8px 10px",
            color: "#c9d1d9",
            fontSize: 12,
            cursor: "pointer",
            flex: "1 1 auto",
            minWidth: 130,
          }}
          className="focus:outline-2 focus:outline-[#6366f1]"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c === "All" ? "All Categories" : c}
            </option>
          ))}
        </select>

        {/* Chain */}
        <select
          value={selectedChain}
          onChange={(e) => setSelectedChain(e.target.value)}
          aria-label="Filter by chain"
          style={{
            background: "#161b22",
            border: "1px solid #30363d",
            borderRadius: 8,
            padding: "8px 10px",
            color: "#c9d1d9",
            fontSize: 12,
            cursor: "pointer",
            flex: "1 1 auto",
            minWidth: 100,
          }}
          className="focus:outline-2 focus:outline-[#6366f1]"
        >
          {CHAINS.map((c) => (
            <option key={c} value={c}>
              {c === "All" ? "All Chains" : c}
            </option>
          ))}
        </select>

        {/* Sort */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          aria-label="Sort protocols"
          style={{
            background: "#161b22",
            border: "1px solid #30363d",
            borderRadius: 8,
            padding: "8px 10px",
            color: "#c9d1d9",
            fontSize: 12,
            cursor: "pointer",
            flex: "1 1 auto",
            minWidth: 120,
          }}
          className="focus:outline-2 focus:outline-[#6366f1]"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>

        {/* Clear filters button */}
        {hasActiveFilters && (
          <button
            onClick={handleClearFilters}
            aria-label="Clear all filters"
            style={{
              background: "#6366f120",
              border: "1px solid #6366f140",
              borderRadius: 8,
              padding: "8px 14px",
              color: "#6366f1",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              transition: "background 0.15s, border-color 0.15s",
            }}
            className="hover:bg-[#6366f130] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1]"
          >
            ✕ Clear filters
          </button>
        )}
        </div>
      </div>

      {/* Protocol Cards */}
      {filtered.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            padding: "40px 16px",
            color: "#8b949e",
            fontSize: 14,
            background: "#161b22",
            borderRadius: 12,
            border: "1px solid #30363d",
          }}
        >
          <div style={{ fontSize: 28, marginBottom: 8 }}>🔍</div>
          <div style={{ fontWeight: 600, color: "#e6edf3", marginBottom: 4 }}>
            No protocols match your filters
          </div>
          <div style={{ fontSize: 13, marginBottom: 12 }}>
            Try broadening your search or clearing filters.
          </div>
          <button
            onClick={handleClearFilters}
            style={{
              background: "#6366f120",
              border: "1px solid #6366f140",
              borderRadius: 8,
              padding: "6px 16px",
              color: "#6366f1",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
            }}
            className="hover:bg-[#6366f130] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1]"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {filtered.map((p) => {
            const isExpanded = expanded === p.name;
            return (
              <div
                key={p.name}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                aria-label={`${p.name} (${p.ticker}) — ${p.category} on ${p.chain}`}
                style={{
                  background: "#161b22",
                  border: `1px solid ${isExpanded ? p.color + "80" : "#30363d"}`,
                  borderRadius: 12,
                  overflow: "hidden",
                  transition: "border-color 0.2s",
                  cursor: "pointer",
                }}
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6366f1]"
                onClick={() => setExpanded(isExpanded ? null : p.name)}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setExpanded(isExpanded ? null : p.name); } }}
              >
                {/* Row */}
                <div
                  className="grid items-center gap-3 px-4 py-3"
                  style={{
                    gridTemplateColumns: "auto 1fr auto",
                  }}
                >
                  {/* Color dot */}
                  <div
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: p.color,
                      flexShrink: 0,
                    }}
                  />

                  {/* Name + Chain */}
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 700,
                          color: "#e6edf3",
                        }}
                      >
                        {p.name}
                      </span>
                      <span
                        style={{
                          fontSize: 11,
                          fontFamily: "monospace",
                          color: "#8b949e",
                        }}
                      >
                        {p.ticker}
                      </span>
                      <span
                        style={{
                          fontSize: 10,
                          padding: "2px 6px",
                          borderRadius: 4,
                          background: `${p.color}20`,
                          color: p.color,
                          fontWeight: 600,
                        }}
                      >
                        {p.category}
                      </span>
                    </div>
                    <div style={{ fontSize: 11, color: "#8b949e", marginTop: 2 }}>
                      {p.chain} · Est. {p.launchYear}
                    </div>
                  </div>

                  {/* Metrics + Expand */}
                  <div className="flex items-center gap-3">
                    <div className="text-right hidden sm:block" style={{ minWidth: 60 }}>
                      <div style={{ fontSize: 10, color: "#8b949e", marginBottom: 1 }}>TVL</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3" }}>
                        {p.tvlDisplay || "—"}
                      </div>
                    </div>
                    <div className="text-right" style={{ minWidth: 60 }}>
                      <div style={{ fontSize: 10, color: "#8b949e", marginBottom: 1 }}>Mkt Cap</div>
                      <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3" }}>
                        {p.marketCapDisplay || "—"}
                      </div>
                    </div>
                    <div
                      aria-hidden="true"
                      style={{
                        color: "#8b949e",
                        fontSize: 14,
                        transition: "transform 0.2s",
                        transform: isExpanded ? "rotate(180deg)" : "none",
                        userSelect: "none",
                      }}
                    >
                      ▼
                    </div>
                  </div>
                </div>

                {/* Expanded detail */}
                {isExpanded && (
                  <div
                    style={{
                      borderTop: "1px solid #21262d",
                      padding: "14px 16px 16px",
                      animation: "fadeInDown 0.15s ease-out",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <p style={{ fontSize: 13, color: "#c9d1d9", lineHeight: 1.7, marginBottom: 12 }}>
                      {p.description}
                    </p>
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
                      <RiskBadge level={p.riskLevel} />
                      <AuditBadge status={p.auditStatus} />
                      <span style={{ fontSize: 11, color: "#8b949e" }}>
                        Chain: <strong style={{ color: "#e6edf3" }}>{p.chain}</strong>
                      </span>
                      <span style={{ fontSize: 11, color: "#8b949e" }}>
                        Type: <strong style={{ color: "#e6edf3" }}>{p.category}</strong>
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      <p style={{ fontSize: 11, color: "#8b949e", marginTop: 12, lineHeight: 1.5 }}>
        ⚠️ Data is approximate and for informational purposes only. Not financial advice. Verify
        all figures on{" "}
        <a
          href="https://defillama.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#58a6ff" }}
        >
          DefiLlama
        </a>{" "}
        and{" "}
        <a
          href="https://www.coingecko.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#58a6ff" }}
        >
          CoinGecko
        </a>{" "}
        before making any decisions.
      </p>
    </div>
  );
}
