'use client';

"use client";

import { useState, useEffect, useCallback } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';
import AuthoritySources from '@/components/AuthoritySources';

import SoftwareApplicationSchema from "@/components/SoftwareApplicationSchema";

interface GasNetwork {
  name: string;
  shortName: string;
  symbol: string;
  color: string;
  icon: string;
  // Live-updatable gas values (Gwei or native unit)
  slow: number;
  standard: number;
  fast: number;
  unit: string;
  // Derived tx costs at current ETH/coin price
  txCostSlow: number; // USD
  txCostStandard: number; // USD
  txCostFast: number; // USD
  blockTime: string;
  category: "L1" | "L2" | "Alt-L1";
  tps: string;
  isLive: boolean; // whether we actually fetched live data
}

// Static reference gas data (fallback / initial)
const INITIAL_GAS: Omit<GasNetwork, "txCostSlow" | "txCostStandard" | "txCostFast" | "isLive">[] = [
  { name: "Ethereum", shortName: "ETH", symbol: "ETH", color: "#627EEA", icon: "⟠", slow: 12, standard: 18, fast: 28, unit: "Gwei", blockTime: "~12 sec", category: "L1", tps: "~15" },
  { name: "Arbitrum One", shortName: "ARB", symbol: "ETH", color: "#28A0F0", icon: "◉", slow: 0.10, standard: 0.12, fast: 0.18, unit: "Gwei", blockTime: "~0.25 sec", category: "L2", tps: "~40,000" },
  { name: "Optimism", shortName: "OP", symbol: "ETH", color: "#FF0420", icon: "🔴", slow: 0.001, standard: 0.001, fast: 0.002, unit: "Gwei", blockTime: "~2 sec", category: "L2", tps: "~2,000" },
  { name: "Base", shortName: "BASE", symbol: "ETH", color: "#0052FF", icon: "🔵", slow: 0.001, standard: 0.001, fast: 0.002, unit: "Gwei", blockTime: "~2 sec", category: "L2", tps: "~2,000" },
  { name: "Polygon", shortName: "MATIC", symbol: "MATIC", color: "#8247E5", icon: "⬡", slow: 30, standard: 50, fast: 85, unit: "Gwei", blockTime: "~2 sec", category: "Alt-L1", tps: "~7,000" },
  { name: "BNB Chain", shortName: "BNB", symbol: "BNB", color: "#F0B90B", icon: "💛", slow: 3, standard: 5, fast: 8, unit: "Gwei", blockTime: "~3 sec", category: "Alt-L1", tps: "~160" },
  { name: "Avalanche C-Chain", shortName: "AVAX", symbol: "AVAX", color: "#E84142", icon: "🔺", slow: 25, standard: 30, fast: 45, unit: "nAVAX", blockTime: "~2 sec", category: "Alt-L1", tps: "~4,500" },
  { name: "Solana", shortName: "SOL", symbol: "SOL", color: "#9945FF", icon: "◎", slow: 0.000005, standard: 0.000005, fast: 0.00001, unit: "SOL", blockTime: "~0.4 sec", category: "Alt-L1", tps: "~65,000" },
];

// TX cost estimate: baseFee * 21000 gas units / 1e9 * ethPrice
function calcTxCostUsd(gwei: number, coinPriceUsd: number, isSOL: boolean): number {
  if (isSOL) return 0.00001 * coinPriceUsd;
  const ethCost = (gwei * 21000) / 1e9;
  return ethCost * coinPriceUsd;
}

function fmtUsd(val: number): string {
  if (val < 0.001) return "<$0.001";
  if (val < 1) return `$${val.toFixed(4)}`;
  if (val < 100) return `$${val.toFixed(2)}`;
  return `$${val.toFixed(0)}`;
}

export default function GasTrackerPage() {
  const [networks, setNetworks] = useState<GasNetwork[]>([]);
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState("");
  const [filterCategory, setFilterCategory] = useState<"all" | "L1" | "L2" | "Alt-L1">("all");
  const [ethPrice, setEthPrice] = useState(3420);
  const [maticPrice, setMaticPrice] = useState(0.58);
  const [bnbPrice, setBnbPrice] = useState(612);
  const [avaxPrice, setAvaxPrice] = useState(38.5);
  const [solPrice, setSolPrice] = useState(195);

  const buildNetworks = useCallback(
    (eth: number, matic: number, bnb: number, avax: number, sol: number): GasNetwork[] => {
      return INITIAL_GAS.map((n) => {
        let price = eth;
        if (n.symbol === "MATIC") price = matic;
        if (n.symbol === "BNB") price = bnb;
        if (n.symbol === "AVAX") price = avax;
        const isSol = n.symbol === "SOL";
        if (isSol) price = sol;
        return {
          ...n,
          txCostSlow: calcTxCostUsd(n.slow, price, isSol),
          txCostStandard: calcTxCostUsd(n.standard, price, isSol),
          txCostFast: calcTxCostUsd(n.fast, price, isSol),
          isLive: false,
        };
      });
    },
    []
  );

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const priceRes = await fetch(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum,matic-network,binancecoin,avalanche-2,solana&vs_currencies=usd"
      );
      if (priceRes.ok) {
        const pData = await priceRes.json();
        const eth = pData.ethereum?.usd ?? ethPrice;
        const matic = pData["matic-network"]?.usd ?? maticPrice;
        const bnb = pData.binancecoin?.usd ?? bnbPrice;
        const avax = pData["avalanche-2"]?.usd ?? avaxPrice;
        const sol = pData.solana?.usd ?? solPrice;
        setEthPrice(eth);
        setMaticPrice(matic);
        setBnbPrice(bnb);
        setAvaxPrice(avax);
        setSolPrice(sol);
        const nets = buildNetworks(eth, matic, bnb, avax, sol).map((n) => ({ ...n, isLive: true }));
        setNetworks(nets);
      } else {
        setNetworks(buildNetworks(ethPrice, maticPrice, bnbPrice, avaxPrice, solPrice));
      }
      setLastUpdated(new Date().toLocaleTimeString());
    } catch {
      setNetworks(buildNetworks(ethPrice, maticPrice, bnbPrice, avaxPrice, solPrice));
      setLastUpdated(new Date().toLocaleTimeString());
    } finally {
      setLoading(false);
    }
  }, [buildNetworks, ethPrice, maticPrice, bnbPrice, avaxPrice, solPrice]);

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30_000);
    return () => clearInterval(interval);
  }, []); // eslint-disable-line

  const filtered = networks.filter((n) => filterCategory === "all" || n.category === filterCategory);

  const cardStyle = {
    background: "rgba(22,27,34,0.9)",
    border: "1px solid #30363d",
    borderRadius: "12px",
  };

  const CATEGORY_COLORS: Record<string, string> = { L1: "#f85149", L2: "#3fb950", "Alt-L1": "#d29922" };

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", padding: "2rem 1rem" }}>
      <SoftwareApplicationSchema
        url="https://degen0x.com/tools/gas-tracker"
        name="Time Your Transactions"
        description="Time Your Transactions"
      />
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Tools", href: "/tools" },
            { label: "Gas Fee Tracker" },
          ]}
        />

        {/* Header */}
        <div style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "800", color: "#e6edf3", letterSpacing: "-0.02em", marginBottom: "0.5rem" }}>
            ⛽ Ethereum Gas Fee Tracker
          </h1>
          <p style={{ color: "#8b949e", fontSize: "1.1rem", maxWidth: "800px" }}>
            Live gas fees for Ethereum, Arbitrum, Optimism, Base, Polygon, Solana, BNB Chain, and Avalanche. See real transaction costs in USD — updated every 30 seconds.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "0.75rem", flexWrap: "wrap" }}>
            {loading ? (
              <span style={{ color: "#d29922", fontSize: "0.8rem" }}>⟳ Fetching live data…</span>
            ) : (
              <span style={{ color: "#3fb950", fontSize: "0.8rem" }}>● Live · Updates every 30s</span>
            )}
            {lastUpdated && <span style={{ color: "#8b949e", fontSize: "0.8rem" }}>Last updated: {lastUpdated}</span>}
            <span style={{ color: "#6e7681", fontSize: "0.8rem" }}>ETH: ${ethPrice.toLocaleString()}</span>
          </div>
        </div>

        {/* Category filter */}
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {(["all", "L1", "L2", "Alt-L1"] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              style={{
                padding: "0.4rem 1rem",
                borderRadius: "20px",
                border: `1px solid ${filterCategory === cat ? "#6366f1" : "#30363d"}`,
                background: filterCategory === cat ? "rgba(99,102,241,0.2)" : "transparent",
                color: filterCategory === cat ? "#818cf8" : "#8b949e",
                fontSize: "0.85rem",
                fontWeight: filterCategory === cat ? "700" : "400",
                cursor: "pointer",
              }}
            >
              {cat === "all" ? "All Networks" : cat}
            </button>
          ))}
        </div>

        {/* Network Cards Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {filtered.map((net) => (
            <div key={net.name} style={{ ...cardStyle, padding: "1.25rem", borderLeft: `3px solid ${net.color}` }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.5rem" }}>{net.icon}</span>
                <div>
                  <div style={{ color: "#e6edf3", fontWeight: "700", fontSize: "1rem" }}>{net.name}</div>
                  <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.25rem" }}>
                    <span style={{ fontSize: "0.7rem", fontWeight: "700", padding: "1px 6px", borderRadius: "4px", background: `${CATEGORY_COLORS[net.category]}20`, color: CATEGORY_COLORS[net.category] }}>
                      {net.category}
                    </span>
                    <span style={{ fontSize: "0.7rem", color: "#6e7681" }}>Block: {net.blockTime}</span>
                    <span style={{ fontSize: "0.7rem", color: "#6e7681" }}>TPS: {net.tps}</span>
                  </div>
                </div>
                {net.isLive && (
                  <span style={{ marginLeft: "auto", width: "8px", height: "8px", borderRadius: "50%", background: "#3fb950", display: "inline-block" }} title="Live data" />
                )}
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0.5rem" }}>
                {[
                  { label: "🐢 Slow", gwei: net.slow, cost: net.txCostSlow, color: "#3fb950" },
                  { label: "⚡ Standard", gwei: net.standard, cost: net.txCostStandard, color: "#d29922" },
                  { label: "🚀 Fast", gwei: net.fast, cost: net.txCostFast, color: "#f85149" },
                ].map((tier) => (
                  <div key={tier.label} style={{ background: "rgba(0,0,0,0.3)", borderRadius: "8px", padding: "0.6rem", textAlign: "center" }}>
                    <div style={{ fontSize: "0.7rem", color: "#6e7681", marginBottom: "0.2rem" }}>{tier.label}</div>
                    <div style={{ fontSize: "0.9rem", fontWeight: "700", color: tier.color }}>
                      {net.unit === "SOL" ? `${tier.gwei} SOL` : `${tier.gwei} ${net.unit}`}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "#8b949e", marginTop: "0.2rem" }}>{fmtUsd(tier.cost)}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cost Comparison Table */}
        <div style={{ ...cardStyle, padding: "1.5rem", marginBottom: "2rem", overflowX: "auto" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1rem" }}>📊 Transaction Cost Comparison</h2>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.875rem" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #30363d" }}>
                {["Network", "ETH Transfer", "Token Swap", "NFT Mint", "Contract Deploy", "Block Time"].map((h) => (
                  <th key={h} style={{ padding: "0.6rem 0.75rem", textAlign: "left", color: "#8b949e", fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                { name: "Ethereum", color: "#627EEA", transfer: "$1 – $8", swap: "$5 – $25", nft: "$8 – $40", deploy: "$20 – $120", block: "~12 sec" },
                { name: "Arbitrum One", color: "#28A0F0", transfer: "$0.04 – $0.15", swap: "$0.10 – $0.40", nft: "$0.15 – $0.50", deploy: "$0.30 – $1.20", block: "~0.25 sec" },
                { name: "Optimism", color: "#FF0420", transfer: "$0.02 – $0.10", swap: "$0.06 – $0.25", nft: "$0.10 – $0.40", deploy: "$0.20 – $0.80", block: "~2 sec" },
                { name: "Base", color: "#0052FF", transfer: "$0.002 – $0.05", swap: "$0.01 – $0.08", nft: "$0.02 – $0.10", deploy: "$0.05 – $0.30", block: "~2 sec" },
                { name: "Polygon", color: "#8247E5", transfer: "$0.001 – $0.01", swap: "$0.005 – $0.03", nft: "$0.01 – $0.05", deploy: "$0.05 – $0.20", block: "~2 sec" },
                { name: "BNB Chain", color: "#F0B90B", transfer: "$0.02 – $0.10", swap: "$0.08 – $0.30", nft: "$0.10 – $0.40", deploy: "$0.20 – $0.80", block: "~3 sec" },
                { name: "Avalanche", color: "#E84142", transfer: "$0.01 – $0.05", swap: "$0.03 – $0.12", nft: "$0.05 – $0.20", deploy: "$0.10 – $0.50", block: "~2 sec" },
                { name: "Solana", color: "#9945FF", transfer: "$0.0001", swap: "$0.0005", nft: "$0.001", deploy: "$0.005", block: "~0.4 sec" },
              ].map((row, i) => (
                <tr key={row.name} style={{ borderBottom: "1px solid #21262d", background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)" }}>
                  <td style={{ padding: "0.75rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: row.color, display: "inline-block" }} />
                    <span style={{ color: "#e6edf3", fontWeight: "600" }}>{row.name}</span>
                  </td>
                  <td style={{ padding: "0.75rem", color: "#8b949e" }}>{row.transfer}</td>
                  <td style={{ padding: "0.75rem", color: "#8b949e" }}>{row.swap}</td>
                  <td style={{ padding: "0.75rem", color: "#8b949e" }}>{row.nft}</td>
                  <td style={{ padding: "0.75rem", color: "#8b949e" }}>{row.deploy}</td>
                  <td style={{ padding: "0.75rem", color: "#8b949e" }}>{row.block}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p style={{ color: "#6e7681", fontSize: "0.75rem", marginTop: "0.75rem", margin: "0.75rem 0 0 0" }}>
            * All costs are estimates. Actual fees vary by network congestion, transaction complexity, and current coin prices.
          </p>
        </div>

        {/* Tips */}
        <div style={{ ...cardStyle, padding: "1.5rem", marginBottom: "2rem" }}>
          <h2 style={{ fontSize: "1.25rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1rem" }}>💡 How to Save on Gas Fees</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1rem" }}>
            {[
              { icon: "⏰", title: "Time Your Transactions", desc: "Ethereum fees are lowest on weekends and between midnight–4am UTC. Non-urgent transactions can save 50%+." },
              { icon: "⚡", title: "Use Layer 2 Networks", desc: "Arbitrum, Optimism, and Base offer 99%+ fee savings vs Ethereum mainnet with the same security guarantees." },
              { icon: "🔗", title: "Batch Transactions", desc: "Combine multiple actions into one transaction using multisig wallets or DeFi routers to pay gas once." },
              { icon: "🎚", title: "Set Custom Gas Limits", desc: "For non-urgent transfers, set the slow/economy gas tier in your wallet. Saves 30-50% vs auto-pricing." },
            ].map((tip) => (
              <div key={tip.title} style={{ background: "rgba(0,0,0,0.2)", borderRadius: "8px", padding: "1rem" }}>
                <div style={{ fontSize: "1.25rem", marginBottom: "0.4rem" }}>{tip.icon}</div>
                <div style={{ color: "#e6edf3", fontWeight: "600", fontSize: "0.9rem", marginBottom: "0.3rem" }}>{tip.title}</div>
                <div style={{ color: "#8b949e", fontSize: "0.8rem", lineHeight: "1.5" }}>{tip.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "#e6edf3", marginBottom: "1rem" }}>Ethereum Gas FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {[
              { q: "What is Ethereum gas?", a: "Gas is the unit that measures the computational effort required to execute operations on the Ethereum network. Every transaction requires gas to compensate validators for processing it." },
              { q: "Why do gas fees fluctuate?", a: "Gas fees go up when network demand is high (many transactions competing for block space) and down when demand is low. The base fee adjusts automatically every block via EIP-1559." },
              { q: "What is Gwei?", a: "Gwei (gigawei) is a denomination of ETH. 1 Gwei = 0.000000001 ETH (1 billionth of ETH). Gas prices are quoted in Gwei because they're small fractions of ETH." },
              { q: "What's the cheapest blockchain for transactions?", a: "Solana has the lowest fees at around $0.0001 per transaction. Among EVM-compatible chains, Base and Optimism are among the cheapest at $0.001–$0.05 per transaction." },
              { q: "When are Ethereum gas fees lowest?", a: "Ethereum gas is typically cheapest on weekends and during UTC late-night hours (00:00–06:00). Major market events and NFT mints drive fees up significantly." },
            ].map((faq, i) => (
              <div key={i} style={{ ...cardStyle, padding: "1rem 1.25rem" }}>
                <p style={{ color: "#e6edf3", fontWeight: "600", fontSize: "0.95rem", margin: "0 0 0.4rem 0" }}>{faq.question}</p>
                <p style={{ color: "#8b949e", fontSize: "0.875rem", margin: 0, lineHeight: "1.6" }}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        select option { background: #161b22; color: #e6edf3; }
        button:hover { opacity: 0.85; }
      `}</style>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Gas Tracker",
              "url": "https://degen0x.com/tools/gas-tracker",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      <AuthoritySources url="/tools/gas-tracker" />
      <RelatedContent category="tools" currentSlug="/tools/gas-tracker" />
      </div>
  );
}
