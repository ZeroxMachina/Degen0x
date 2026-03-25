'use client';

import { useState, useMemo } from "react";

// ── Interfaces ──────────────────────────────────────────────────────────────
interface Launchpad {
  name: string;
  chain: string;
  chainColor: string;
  launchFee: string;
  tradingFee: string;
  graduationCap: string;
  graduationDex: string;
  bestFor: string;
  status: "leader" | "challenger" | "niche";
  url: string;
  highlights: string[];
}

// ── Data ─────────────────────────────────────────────────────────────────────
const LAUNCHPADS: Launchpad[] = [
  {
    name: "Pump.fun",
    chain: "Solana",
    chainColor: "#9945FF",
    launchFee: "~0.02 SOL",
    tradingFee: "1%",
    graduationCap: "~$69K",
    graduationDex: "PumpSwap",
    bestFor: "Max volume & discovery",
    status: "leader",
    url: "https://pump.fun",
    highlights: ["#1 by volume", "1B+ lifetime revenue", "PUMP token rewards"],
  },
  {
    name: "LetsBonk",
    chain: "Solana",
    chainColor: "#9945FF",
    launchFee: "~Free",
    tradingFee: "~1%",
    graduationCap: "~$69K",
    graduationDex: "Raydium",
    bestFor: "Lower fees on Solana",
    status: "challenger",
    url: "https://letsbonk.fun",
    highlights: ["Free to launch", "Creator incentives", "Raydium graduation"],
  },
  {
    name: "Moonshot",
    chain: "Solana",
    chainColor: "#9945FF",
    launchFee: "Low",
    tradingFee: "~1%",
    graduationCap: "~$69K",
    graduationDex: "Raydium",
    bestFor: "Mobile & mainstream users",
    status: "niche",
    url: "https://moonshot.money",
    highlights: ["Apple Pay support", "Credit card onboarding", "Clean UX"],
  },
  {
    name: "Clanker",
    chain: "Base",
    chainColor: "#0052FF",
    launchFee: "Low",
    tradingFee: "1%",
    graduationCap: "Uniswap v3",
    graduationDex: "Uniswap v3",
    bestFor: "Farcaster / social communities",
    status: "challenger",
    url: "https://clanker.world",
    highlights: ["@mention to launch", "Farcaster-native", "Social context built-in"],
  },
  {
    name: "Zora",
    chain: "Base",
    chainColor: "#0052FF",
    launchFee: "Low",
    tradingFee: "~1%",
    graduationCap: "Variable",
    graduationDex: "Uniswap v3",
    bestFor: "Creator & content tokens",
    status: "niche",
    url: "https://zora.co",
    highlights: ["Creator royalties", "NFT + token hybrid", "Content-native"],
  },
  {
    name: "Flaunch",
    chain: "Base",
    chainColor: "#0052FF",
    launchFee: "Low",
    tradingFee: "~1%",
    graduationCap: "Variable",
    graduationDex: "Uniswap v4",
    bestFor: "Developers & builders",
    status: "niche",
    url: "https://flaunch.gg",
    highlights: ["Full SDK", "Uniswap v4 hooks", "Customizable curves"],
  },
  {
    name: "four.meme",
    chain: "BNB Chain",
    chainColor: "#F3BA2F",
    launchFee: "Very low",
    tradingFee: "<1%",
    graduationCap: "~$69K",
    graduationDex: "PancakeSwap",
    bestFor: "BNB ecosystem users",
    status: "challenger",
    url: "https://four.meme",
    highlights: ["Pump.fun model on BNB", "Low gas costs", "PancakeSwap graduation"],
  },
  {
    name: "SunPump",
    chain: "Tron",
    chainColor: "#FF060A",
    launchFee: "Very low",
    tradingFee: "1%",
    graduationCap: "Variable",
    graduationDex: "SunSwap",
    bestFor: "Tron community",
    status: "niche",
    url: "https://sunpump.meme",
    highlights: ["Near-zero fees", "Tron speed", "Justin Sun ecosystem"],
  },
  {
    name: "Blum",
    chain: "TON",
    chainColor: "#0098EA",
    launchFee: "Very low",
    tradingFee: "Varies",
    graduationCap: "Variable",
    graduationDex: "STON.fi",
    bestFor: "Telegram's 900M+ users",
    status: "niche",
    url: "https://blum.io",
    highlights: ["Telegram-native", "No extra wallet needed", "Massive distribution"],
  },
  {
    name: "Moonbags",
    chain: "Sui",
    chainColor: "#6FBCF0",
    launchFee: "Low",
    tradingFee: "~1%",
    graduationCap: "Variable",
    graduationDex: "Cetus",
    bestFor: "Sui ecosystem",
    status: "niche",
    url: "https://moonbags.io",
    highlights: ["Sub-second finality", "Top Sui launchpad", "Growing DeFi ecosystem"],
  },
];

const CHAINS = ["All", "Solana", "Base", "BNB Chain", "Tron", "TON", "Sui"];

const STATUS_LABELS: Record<Launchpad["status"], { label: string; color: string; bg: string }> = {
  leader: { label: "Market Leader", color: "#3fb950", bg: "#3fb95020" },
  challenger: { label: "Challenger", color: "#58a6ff", bg: "#58a6ff20" },
  niche: { label: "Niche / Specialist", color: "#8b949e", bg: "#8b949e20" },
};

// ── Component ────────────────────────────────────────────────────────────────
export default function MemeLaunchpadComparison() {
  const [selectedChain, setSelectedChain] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [viewMode, setViewMode] = useState<"table" | "cards">("table");

  const filtered = useMemo(() => {
    return LAUNCHPADS.filter((lp) => {
      const matchChain = selectedChain === "All" || lp.chain === selectedChain;
      const matchSearch =
        !searchTerm ||
        lp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lp.bestFor.toLowerCase().includes(searchTerm.toLowerCase());
      return matchChain && matchSearch;
    });
  }, [selectedChain, searchTerm]);

  return (
    <div style={{ marginBottom: 48 }}>
      {/* Controls */}
      <div
        style={{
          background: "#161b22",
          border: "1px solid #30363d",
          borderRadius: 12,
          padding: "1rem 1.25rem",
          marginBottom: 20,
          display: "flex",
          flexWrap: "wrap",
          gap: 12,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Search */}
        <input
          type="text"
          placeholder="Search platforms..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search launchpad platforms"
          style={{
            background: "#0d1117",
            border: "1px solid #30363d",
            borderRadius: 8,
            padding: "6px 12px",
            color: "#e6edf3",
            fontSize: 14,
            outline: "none",
            width: 200,
            transition: "border-color 0.15s",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
          onBlur={(e) => (e.target.style.borderColor = "#30363d")}
        />

        {/* Chain Filter */}
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {CHAINS.map((chain) => (
            <button
              key={chain}
              onClick={() => setSelectedChain(chain)}
              style={{
                padding: "5px 12px",
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 600,
                border: "1px solid",
                cursor: "pointer",
                transition: "all 0.15s",
                background: selectedChain === chain ? "#6366f1" : "transparent",
                borderColor: selectedChain === chain ? "#6366f1" : "#30363d",
                color: selectedChain === chain ? "#fff" : "#8b949e",
              }}
            >
              {chain}
            </button>
          ))}
        </div>

        {/* View Toggle */}
        <div style={{ display: "flex", gap: 4 }}>
          {(["table", "cards"] as const).map((mode) => (
            <button
              key={mode}
              onClick={() => setViewMode(mode)}
              style={{
                padding: "5px 12px",
                borderRadius: 6,
                fontSize: 12,
                fontWeight: 600,
                border: "1px solid",
                cursor: "pointer",
                background: viewMode === mode ? "#21262d" : "transparent",
                borderColor: viewMode === mode ? "#58a6ff" : "#30363d",
                color: viewMode === mode ? "#e6edf3" : "#8b949e",
              }}
            >
              {mode === "table" ? "⊞ Table" : "⊟ Cards"}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <p style={{ fontSize: 13, color: "#8b949e", marginBottom: 12 }}>
        Showing <strong style={{ color: "#e6edf3" }}>{filtered.length}</strong> of{" "}
        {LAUNCHPADS.length} platforms
        {selectedChain !== "All" && (
          <span>
            {" "}
            on <strong style={{ color: "#58a6ff" }}>{selectedChain}</strong>
          </span>
        )}
      </p>

      {/* Table View */}
      {viewMode === "table" && (
        <div style={{ overflowX: "auto" }}>
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: 14,
            }}
            aria-label="Meme coin launchpad comparison"
          >
            <thead>
              <tr
                style={{
                  background: "#161b22",
                  borderBottom: "1px solid #30363d",
                }}
              >
                {["Platform", "Chain", "Launch Fee", "Trading Fee", "Graduation DEX", "Best For", "Status"].map(
                  (h) => (
                    <th
                      key={h}
                      style={{
                        textAlign: "left",
                        padding: "10px 14px",
                        color: "#58a6ff",
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {h}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {filtered.map((lp) => {
                const statusInfo = STATUS_LABELS[lp.status];
                return (
                  <tr
                    key={lp.name}
                    style={{
                      borderBottom: "1px solid #21262d",
                      transition: "background 0.1s",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLTableRowElement).style.background = "#161b22")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLTableRowElement).style.background = "transparent")
                    }
                  >
                    <td style={{ padding: "10px 14px" }}>
                      <a
                        href={lp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#e6edf3",
                          fontWeight: 700,
                          textDecoration: "none",
                        }}
                      >
                        {lp.name} ↗
                      </a>
                    </td>
                    <td style={{ padding: "10px 14px" }}>
                      <span
                        style={{
                          padding: "3px 8px",
                          borderRadius: 4,
                          fontSize: 12,
                          fontWeight: 600,
                          background: `${lp.chainColor}20`,
                          color: lp.chainColor,
                          border: `1px solid ${lp.chainColor}40`,
                        }}
                      >
                        {lp.chain}
                      </span>
                    </td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{lp.launchFee}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{lp.tradingFee}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9" }}>{lp.graduationDex}</td>
                    <td style={{ padding: "10px 14px", color: "#8b949e", maxWidth: 180 }}>
                      {lp.bestFor}
                    </td>
                    <td style={{ padding: "10px 14px" }}>
                      <span
                        style={{
                          padding: "3px 8px",
                          borderRadius: 4,
                          fontSize: 11,
                          fontWeight: 600,
                          background: statusInfo.bg,
                          color: statusInfo.color,
                        }}
                      >
                        {statusInfo.label}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "#8b949e", padding: "2rem" }}>
              No platforms match your filters.
            </p>
          )}
        </div>
      )}

      {/* Card View */}
      {viewMode === "cards" && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
            gap: 16,
          }}
        >
          {filtered.map((lp) => {
            const statusInfo = STATUS_LABELS[lp.status];
            return (
              <div
                key={lp.name}
                style={{
                  background: "#161b22",
                  border: "1px solid #30363d",
                  borderRadius: 12,
                  padding: 20,
                  transition: "border-color 0.15s",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor = "#58a6ff")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.borderColor = "#30363d")
                }
              >
                {/* Header */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    marginBottom: 12,
                  }}
                >
                  <div>
                    <a
                      href={lp.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        color: "#e6edf3",
                        fontWeight: 800,
                        fontSize: 16,
                        textDecoration: "none",
                      }}
                    >
                      {lp.name} ↗
                    </a>
                    <div style={{ marginTop: 4 }}>
                      <span
                        style={{
                          padding: "2px 8px",
                          borderRadius: 4,
                          fontSize: 11,
                          fontWeight: 600,
                          background: `${lp.chainColor}20`,
                          color: lp.chainColor,
                          border: `1px solid ${lp.chainColor}40`,
                        }}
                      >
                        {lp.chain}
                      </span>
                    </div>
                  </div>
                  <span
                    style={{
                      padding: "3px 8px",
                      borderRadius: 4,
                      fontSize: 11,
                      fontWeight: 600,
                      background: statusInfo.bg,
                      color: statusInfo.color,
                    }}
                  >
                    {statusInfo.label}
                  </span>
                </div>

                {/* Fees */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 8,
                    marginBottom: 12,
                  }}
                >
                  <div
                    style={{
                      background: "#0d1117",
                      borderRadius: 6,
                      padding: "8px 10px",
                    }}
                  >
                    <div style={{ fontSize: 10, color: "#8b949e", marginBottom: 2 }}>
                      LAUNCH FEE
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3" }}>
                      {lp.launchFee}
                    </div>
                  </div>
                  <div
                    style={{
                      background: "#0d1117",
                      borderRadius: 6,
                      padding: "8px 10px",
                    }}
                  >
                    <div style={{ fontSize: 10, color: "#8b949e", marginBottom: 2 }}>
                      TRADING FEE
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#e6edf3" }}>
                      {lp.tradingFee}
                    </div>
                  </div>
                </div>

                {/* Highlights */}
                <div style={{ marginBottom: 10 }}>
                  {lp.highlights.map((h) => (
                    <div
                      key={h}
                      style={{
                        fontSize: 12,
                        color: "#8b949e",
                        padding: "2px 0",
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span style={{ color: "#3fb950" }}>✓</span> {h}
                    </div>
                  ))}
                </div>

                {/* Best For */}
                <div
                  style={{
                    fontSize: 12,
                    color: "#58a6ff",
                    borderTop: "1px solid #21262d",
                    paddingTop: 10,
                    marginTop: 4,
                  }}
                >
                  🎯 {lp.bestFor}
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <p style={{ textAlign: "center", color: "#8b949e", padding: "2rem" }}>
              No platforms match your filters.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
