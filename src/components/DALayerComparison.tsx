'use client';

import { useState, useMemo } from "react";

// ── Interfaces ────────────────────────────────────────────────────────────────
interface DALayer {
  id: string;
  name: string;
  color: string;
  throughputMBs: number;   // MB/s throughput
  finalitySecs: number;    // DA finality in seconds
  costIndex: number;       // 1=very low, 2=low, 3=moderate, 4=high
  trustModel: "DAS" | "DAC" | "DAS+KZG";
  marketShare: number;     // percent
  publicVerifiable: boolean;
  bestFor: string;
  token: string;
}

type SortKey = "throughput" | "finality" | "cost" | "marketShare";

// ── Data ─────────────────────────────────────────────────────────────────────
const DA_LAYERS: DALayer[] = [
  {
    id: "celestia",
    name: "Celestia",
    color: "#8b5cf6",
    throughputMBs: 1.33,
    finalitySecs: 600,
    costIndex: 1,
    trustModel: "DAS",
    marketShare: 50,
    publicVerifiable: true,
    bestFor: "Sovereign rollups, cost-sensitive chains",
    token: "TIA",
  },
  {
    id: "eigenda",
    name: "EigenDA",
    color: "#3b82f6",
    throughputMBs: 100,
    finalitySecs: 750,
    costIndex: 3,
    trustModel: "DAC",
    marketShare: 28,
    publicVerifiable: false,
    bestFor: "High-throughput Ethereum-native L2s",
    token: "ETH (restaked)",
  },
  {
    id: "avail",
    name: "Avail",
    color: "#22c55e",
    throughputMBs: 16,
    finalitySecs: 40,
    costIndex: 1,
    trustModel: "DAS+KZG",
    marketShare: 22,
    publicVerifiable: true,
    bestFor: "Multichain / fast-finality apps",
    token: "AVAIL",
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function costLabel(index: number): string {
  return ["", "Very Low", "Low", "Moderate", "High"][index] ?? "Unknown";
}

function fmtFinality(secs: number): string {
  if (secs < 60) return `${secs}s`;
  return `~${Math.round(secs / 60)} min`;
}

function fmtThroughput(mbs: number): string {
  if (mbs < 10) return `${mbs.toFixed(2)} MB/s`;
  return `${mbs.toFixed(0)} MB/s`;
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function DALayerComparison() {
  const [sortKey, setSortKey] = useState<SortKey>("marketShare");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const sorted = useMemo(() => {
    return [...DA_LAYERS].sort((a, b) => {
      switch (sortKey) {
        case "throughput": return b.throughputMBs - a.throughputMBs;
        case "finality":   return a.finalitySecs - b.finalitySecs; // lower = better
        case "cost":       return a.costIndex - b.costIndex;       // lower = better
        case "marketShare": return b.marketShare - a.marketShare;
      }
    });
  }, [sortKey]);

  const selected = selectedId ? DA_LAYERS.find(l => l.id === selectedId) ?? null : null;

  // SVG bar chart max values
  const maxThroughput = Math.max(...DA_LAYERS.map(l => l.throughputMBs));

  return (
    <div style={{
      background: "#161b22",
      border: "1px solid #30363d",
      borderRadius: 16,
      padding: "1.5rem",
      fontFamily: "inherit",
    }}>
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", flexWrap: "wrap", gap: 8 }}>
        <h3 style={{ color: "#e6edf3", fontWeight: 700, fontSize: 16, margin: 0 }}>
          DA Layer Comparison
          <span style={{ color: "#8b949e", fontWeight: 400, fontSize: 13, marginLeft: 8 }}>March 2026</span>
        </h3>
        <div style={{ display: "flex", gap: 6 }}>
          {(["marketShare", "throughput", "finality", "cost"] as SortKey[]).map(key => (
            <button
              key={key}
              onClick={() => setSortKey(key)}
              style={{
                padding: "6px 12px",
                borderRadius: 6,
                fontSize: 12,
                minHeight: 32,
                fontWeight: 600,
                cursor: "pointer",
                border: sortKey === key ? "1px solid #6e40c9" : "1px solid #30363d",
                background: sortKey === key ? "#6e40c9" : "transparent",
                color: sortKey === key ? "#fff" : "#8b949e",
                textTransform: "capitalize",
                transition: "all 0.15s",
              }}
            >
              {key === "marketShare" ? "Market Share" : key === "finality" ? "Finality" : key}
            </button>
          ))}
        </div>
      </div>

      {/* Throughput Bar Chart */}
      <div style={{ marginBottom: "1.5rem" }}>
        <p style={{ color: "#8b949e", fontSize: 12, marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>
          Throughput Comparison
        </p>
        {sorted.map(layer => (
          <div
            key={layer.id}
            onClick={() => setSelectedId(selectedId === layer.id ? null : layer.id)}
            style={{
              marginBottom: 8,
              cursor: "pointer",
              opacity: selectedId && selectedId !== layer.id ? 0.5 : 1,
              transition: "opacity 0.2s",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
              <span style={{ color: "#e6edf3", fontSize: 13, fontWeight: 600 }}>{layer.name}</span>
              <span style={{ color: "#8b949e", fontSize: 12 }}>{fmtThroughput(layer.throughputMBs)}</span>
            </div>
            {/* Bar */}
            <div style={{ background: "#0d1117", borderRadius: 4, height: 8, overflow: "hidden" }}>
              <div style={{
                height: "100%",
                width: `${Math.max(3, (layer.throughputMBs / maxThroughput) * 100)}%`,
                background: layer.color,
                borderRadius: 4,
                transition: "width 0.4s ease",
              }} />
            </div>
          </div>
        ))}
      </div>

      {/* Cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 10, marginBottom: selected ? "1.25rem" : 0 }}>
        {sorted.map(layer => (
          <button
            key={layer.id}
            onClick={() => setSelectedId(selectedId === layer.id ? null : layer.id)}
            style={{
              background: selectedId === layer.id ? `${layer.color}18` : "#0d1117",
              border: selectedId === layer.id ? `1px solid ${layer.color}` : "1px solid #30363d",
              borderRadius: 12,
              padding: "0.875rem",
              textAlign: "left",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <span style={{ color: layer.color, fontWeight: 700, fontSize: 14 }}>{layer.name}</span>
              <span style={{
                background: `${layer.color}22`,
                color: layer.color,
                fontSize: 10,
                fontWeight: 700,
                padding: "2px 6px",
                borderRadius: 4,
                border: `1px solid ${layer.color}40`,
              }}>
                {layer.token}
              </span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 }}>
              <div>
                <p style={{ color: "#8b949e", fontSize: 10, marginBottom: 2 }}>Finality</p>
                <p style={{ color: "#e6edf3", fontSize: 12, fontWeight: 600 }}>{fmtFinality(layer.finalitySecs)}</p>
              </div>
              <div>
                <p style={{ color: "#8b949e", fontSize: 10, marginBottom: 2 }}>Cost</p>
                <p style={{ color: "#e6edf3", fontSize: 12, fontWeight: 600 }}>{costLabel(layer.costIndex)}</p>
              </div>
              <div>
                <p style={{ color: "#8b949e", fontSize: 10, marginBottom: 2 }}>Trust Model</p>
                <p style={{ color: "#e6edf3", fontSize: 12, fontWeight: 600 }}>{layer.trustModel}</p>
              </div>
              <div>
                <p style={{ color: "#8b949e", fontSize: 10, marginBottom: 2 }}>Public Verify</p>
                <p style={{ color: layer.publicVerifiable ? "#3fb950" : "#f85149", fontSize: 12, fontWeight: 600 }}>
                  {layer.publicVerifiable ? "Yes ✓" : "No ✗"}
                </p>
              </div>
            </div>
            {/* Market share badge */}
            <div style={{ marginTop: 8 }}>
              <div style={{ background: "#30363d", borderRadius: 4, height: 4 }}>
                <div style={{
                  height: "100%",
                  width: `${layer.marketShare}%`,
                  background: layer.color,
                  borderRadius: 4,
                }} />
              </div>
              <p style={{ color: "#8b949e", fontSize: 10, marginTop: 3 }}>~{layer.marketShare}% market share</p>
            </div>
          </button>
        ))}
      </div>

      {/* Expanded detail panel */}
      {selected && (
        <div style={{
          background: `${selected.color}10`,
          border: `1px solid ${selected.color}40`,
          borderRadius: 12,
          padding: "1rem",
        }}>
          <p style={{ color: selected.color, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>
            {selected.name} — Best For
          </p>
          <p style={{ color: "#c9d1d9", fontSize: 13, lineHeight: 1.6 }}>
            {selected.bestFor}
          </p>
        </div>
      )}

      <p style={{ color: "#8b949e", fontSize: 11, marginTop: "1rem", lineHeight: 1.5 }}>
        Click any card for details. Throughput figures are mainnet benchmarks as of March 2026. Data subject to change.
      </p>
    </div>
  );
}
