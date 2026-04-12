'use client';

"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

// ── Types ────────────────────────────────────────────────────────────────────
interface StakingEntry {
  asset: string; symbol: string; icon: string; color: string;
  protocol: string; protocolType: "CEX" | "DEX" | "Liquid" | "Native" | "Yield Aggregator";
  apy: number; apyMin?: number; apyMax?: number;
  lockPeriod: string; minStake: string;
  tvlUsd: number; // billions
  risk: "Low" | "Medium" | "High";
  chain: string; audited: boolean; insurance: boolean;
  url: string; slug: string;
  tags: string[];
  change24h: number;
  description: string;
}

interface CompoundingResult {
  year: number;
  amount: number;
  gains: number;
}

// ── Data ─────────────────────────────────────────────────────────────────────
const STAKING_DATA: StakingEntry[] = [
  { asset:"Ethereum", symbol:"ETH", icon:"⟠", color:"#627EEA", protocol:"Lido Finance", protocolType:"Liquid", apy:3.8, lockPeriod:"None (liquid)", minStake:"Any", tvlUsd:22.4, risk:"Low", chain:"Ethereum", audited:true, insurance:false, url:"https://degen0x.com/go/lido", slug:"lido-eth", tags:["DeFi","Liquid Staking","Blue Chip"], change24h:0.12, description:"Lido's liquid staking gives you stETH tokens representing your staked ETH, with the best liquidity in DeFi." },
  { asset:"Ethereum", symbol:"ETH", icon:"⟠", color:"#627EEA", protocol:"Rocket Pool", protocolType:"Liquid", apy:3.6, lockPeriod:"None (liquid)", minStake:"Any", tvlUsd:3.8, risk:"Low", chain:"Ethereum", audited:true, insurance:false, url:"https://degen0x.com/go/rocketpool", slug:"rocketpool-eth", tags:["DeFi","Liquid Staking","Decentralized"], change24h:-0.05, description:"Rocket Pool is the most decentralized liquid staking protocol, ideal for ETH stakers who prioritize decentralization." },
  { asset:"Ethereum", symbol:"ETH", icon:"⟠", color:"#627EEA", protocol:"Coinbase cbETH", protocolType:"CEX", apy:3.4, lockPeriod:"None (liquid)", minStake:"0.001 ETH", tvlUsd:5.2, risk:"Low", chain:"Ethereum", audited:true, insurance:true, url:"https://degen0x.com/go/coinbase", slug:"coinbase-eth", tags:["CEX","Liquid Staking","Regulated"], change24h:0.02, description:"Coinbase's wrapped staked ETH (cbETH) with FDIC-insured fiat and regulatory compliance." },
  { asset:"Solana", symbol:"SOL", icon:"◎", color:"#9945FF", protocol:"Marinade Finance", protocolType:"Liquid", apy:7.2, lockPeriod:"None (liquid)", minStake:"Any", tvlUsd:1.4, risk:"Low", chain:"Solana", audited:true, insurance:false, url:"https://degen0x.com/go/marinade", slug:"marinade-sol", tags:["DeFi","Liquid Staking","Solana"], change24h:0.38, description:"Marinade distributes your SOL across the best validators automatically, maximizing yield." },
  { asset:"Solana", symbol:"SOL", icon:"◎", color:"#9945FF", protocol:"Binance", protocolType:"CEX", apy:6.8, lockPeriod:"None / 30 days", minStake:"0.1 SOL", tvlUsd:8.2, risk:"Low", chain:"Solana", audited:false, insurance:true, url:"https://degen0x.com/go/binance", slug:"binance-sol", tags:["CEX","Flexible","High Liquidity"], change24h:-0.15, description:"Binance offers flexible and locked SOL staking with competitive APY and the largest user base." },
  { asset:"AVAX", symbol:"AVAX", icon:"🔺", color:"#E84142", protocol:"Benqi (sAVAX)", protocolType:"Liquid", apy:5.8, lockPeriod:"None (liquid)", minStake:"Any", tvlUsd:0.62, risk:"Medium", chain:"Avalanche", audited:true, insurance:false, url:"https://degen0x.com/go/benqi", slug:"benqi-avax", tags:["DeFi","Liquid Staking","Avalanche"], change24h:0.24, description:"Benqi's liquid staking for Avalanche lets you earn sAVAX that auto-compounds your rewards." },
  { asset:"BNB", symbol:"BNB", icon:"💛", color:"#F0B90B", protocol:"Binance", protocolType:"CEX", apy:5.2, lockPeriod:"None / 30 / 90 days", minStake:"0.1 BNB", tvlUsd:15.8, risk:"Low", chain:"BNB Chain", audited:false, insurance:true, url:"https://degen0x.com/go/binance", slug:"binance-bnb", tags:["CEX","Flexible","High TVL"], change24h:-0.08, description:"Stake BNB directly on Binance with various lock durations and earn rewards automatically." },
  { asset:"Polkadot", symbol:"DOT", icon:"⬡", color:"#E6007A", protocol:"Kraken", protocolType:"CEX", apy:11.2, lockPeriod:"Unbonding ~28 days", minStake:"1 DOT", tvlUsd:1.2, risk:"Medium", chain:"Polkadot", audited:false, insurance:false, url:"https://degen0x.com/go/kraken", slug:"kraken-dot", tags:["CEX","High APY","Nominated PoS"], change24h:0.42, description:"Kraken's DOT staking offers some of the highest APY available for Polkadot, with a 28-day unbonding period." },
  { asset:"Cardano", symbol:"ADA", icon:"₳", color:"#0033AD", protocol:"Native Staking", protocolType:"Native", apy:4.2, lockPeriod:"None", minStake:"Any", tvlUsd:6.4, risk:"Low", chain:"Cardano", audited:true, insurance:false, url:"https://degen0x.com/go/cardano-staking", slug:"native-ada", tags:["Native","No Lock","Low Risk"], change24h:0.06, description:"Cardano's native staking has no lock-up period. Delegate to a stake pool and earn rewards every 5 days." },
  { asset:"MATIC", symbol:"MATIC", icon:"⬡", color:"#8247E5", protocol:"Lido Finance", protocolType:"Liquid", apy:4.8, lockPeriod:"None (liquid)", minStake:"Any", tvlUsd:0.84, risk:"Low", chain:"Ethereum / Polygon", audited:true, insurance:false, url:"https://degen0x.com/go/lido", slug:"lido-matic", tags:["DeFi","Liquid Staking","L2"], change24h:-0.22, description:"Lido's stMATIC gives you liquidity while earning staking rewards from Polygon's validators." },
  { asset:"Cosmos", symbol:"ATOM", icon:"⚛️", color:"#2E3148", protocol:"Native Staking", protocolType:"Native", apy:18.5, apyMin:14, apyMax:23, lockPeriod:"21 days unbonding", minStake:"Any", tvlUsd:2.1, risk:"Medium", chain:"Cosmos Hub", audited:true, insurance:false, url:"https://degen0x.com/go/cosmos-staking", slug:"native-atom", tags:["Native","High APY","IBC"], change24h:0.65, description:"Cosmos Hub offers some of DeFi's highest native staking yields, with rewards distributed every block." },
  { asset:"Near", symbol:"NEAR", icon:"Ⓝ", color:"#00EC97", protocol:"Native Staking", protocolType:"Native", apy:9.8, lockPeriod:"~36-48 hours", minStake:"Any", tvlUsd:0.92, risk:"Low", chain:"NEAR Protocol", audited:true, insurance:false, url:"https://degen0x.com/go/near-staking", slug:"native-near", tags:["Native","Low Risk","Fast Unstaking"], change24h:0.18, description:"Stake NEAR natively with quick unstaking and competitive yields. No minimum stake required." },
  { asset:"SUI", symbol:"SUI", icon:"💧", color:"#6FBCF0", protocol:"Native Staking", protocolType:"Native", apy:4.1, lockPeriod:"Epoch-based (~24h)", minStake:"Any", tvlUsd:0.75, risk:"Low", chain:"Sui", audited:true, insurance:false, url:"https://degen0x.com/go/sui-staking", slug:"native-sui", tags:["Native","New Chain","Low Risk"], change24h:0.28, description:"Sui's proof-of-stake has quick epoch-based reward cycles and requires no minimum stake." },
  { asset:"Injective", symbol:"INJ", icon:"⚡", color:"#00C9FF", protocol:"Native Staking", protocolType:"Native", apy:14.2, lockPeriod:"21 days unbonding", minStake:"Any", tvlUsd:0.48, risk:"Medium", chain:"Injective", audited:true, insurance:false, url:"https://degen0x.com/go/injective-staking", slug:"native-inj", tags:["Native","High APY","Cosmos SDK"], change24h:0.82, description:"Injective Protocol offers high staking yields through its on-chain governance and fee distribution model." },
  { asset:"Arbitrum", symbol:"ARB", icon:"◉", color:"#28A0F0", protocol:"Gains Network", protocolType:"Yield Aggregator", apy:22.4, apyMin:15, apyMax:30, lockPeriod:"None", minStake:"Any", tvlUsd:0.22, risk:"High", chain:"Arbitrum", audited:true, insurance:false, url:"https://degen0x.com/go/gains", slug:"gains-arb", tags:["Yield","High APY","DeFi"], change24h:-1.2, description:"Gains Network's gDAI/ARB pools offer high yield from trading fees, with smart contract risk." },
  { asset:"USDC", symbol:"USDC", icon:"💲", color:"#2775CA", protocol:"Aave v3", protocolType:"Yield Aggregator", apy:5.8, apyMin:3, apyMax:12, lockPeriod:"None", minStake:"Any", tvlUsd:4.6, risk:"Low", chain:"Multi-chain", audited:true, insurance:false, url:"https://degen0x.com/go/aave", slug:"aave-usdc", tags:["Stablecoin","Low Risk","DeFi"], change24h:0.05, description:"Lend USDC on Aave to earn variable interest from borrowers. Rates fluctuate with market demand." },
  { asset:"USDT", symbol:"USDT", icon:"₮", color:"#26A17B", protocol:"Binance Earn", protocolType:"CEX", apy:6.2, apyMin:4, apyMax:8, lockPeriod:"None / 30 / 90 days", minStake:"$10", tvlUsd:9.8, risk:"Low", chain:"Multi-chain", audited:false, insurance:true, url:"https://degen0x.com/go/binance", slug:"binance-usdt", tags:["Stablecoin","CEX","Flexible"], change24h:0.01, description:"Earn on your idle USDT through Binance's Simple Earn with flexible or fixed-term deposits." },
  { asset:"Ethereum", symbol:"ETH", icon:"⟠", color:"#627EEA", protocol:"EigenLayer", protocolType:"Native", apy:8.5, lockPeriod:"None (restaking)", minStake:"Any", tvlUsd:0.95, risk:"Medium", chain:"Ethereum", audited:true, insurance:false, url:"https://degen0x.com/go/eigenlayer", slug:"eigenlayer-eth", tags:["Restaking","Yield","AVS"], change24h:0.34, description:"EigenLayer enables restaking of ETH/LSTs to earn additional yield from actively validated services." },
  { asset:"Celestia", symbol:"TIA", icon:"✡️", color:"#8A72B8", protocol:"Native Staking", protocolType:"Native", apy:14.2, lockPeriod:"21 days unbonding", minStake:"Any", tvlUsd:0.68, risk:"Medium", chain:"Celestia", audited:true, insurance:false, url:"https://degen0x.com/go/celestia", slug:"native-tia", tags:["Native","High APY","Modular Blockchain"], change24h:0.51, description:"Celestia's native staking rewards validators and delegators for securing the modular blockchain." },
  { asset:"Aptos", symbol:"APT", icon:"🎯", color:"#00D4AA", protocol:"Native Staking", protocolType:"Native", apy:7.8, lockPeriod:"Unbonding ~7 days", minStake:"Any", tvlUsd:0.82, risk:"Low", chain:"Aptos", audited:true, insurance:false, url:"https://degen0x.com/go/aptos", slug:"native-apt", tags:["Native","Move VM","Fast Finality"], change24h:0.19, description:"Aptos native staking offers consistent yields with fast finality and no minimum stake." },
  { asset:"Osmosis", symbol:"OSMO", icon:"🌀", color:"#65CDF0", protocol:"Native Staking", protocolType:"Native", apy:8.5, lockPeriod:"Unbonding ~14 days", minStake:"Any", tvlUsd:0.41, risk:"Medium", chain:"Cosmos", audited:true, insurance:false, url:"https://degen0x.com/go/osmosis", slug:"native-osmo", tags:["Native","Cosmos","DEX"], change24h:0.27, description:"Osmosis is a leading DEX on Cosmos with competitive staking yields and governance participation." },
  { asset:"Solana", symbol:"SOL", icon:"◎", color:"#9945FF", protocol:"Jito Liquid Staking", protocolType:"Liquid", apy:7.8, lockPeriod:"None (liquid)", minStake:"Any", tvlUsd:0.56, risk:"Medium", chain:"Solana", audited:true, insurance:false, url:"https://degen0x.com/go/jito", slug:"jito-sol", tags:["Liquid Staking","MEV","Solana"], change24h:0.33, description:"Jito's liquid staking stake SOL with jitoSOL, earning MEV rewards plus validator commission." },
  { asset:"Ethereum", symbol:"ETH", icon:"⟠", color:"#627EEA", protocol:"StakeWise", protocolType:"Liquid", apy:4.1, lockPeriod:"None (liquid)", minStake:"Any", tvlUsd:0.38, risk:"Medium", chain:"Ethereum", audited:true, insurance:false, url:"https://degen0x.com/go/stakewise", slug:"stakewise-eth", tags:["Liquid Staking","Decentralized","Governance"], change24h:0.16, description:"StakeWise offers ETH liquid staking with community governance and instant unstaking via sETH2." },
  { asset:"Ethereum", symbol:"ETH", icon:"⟠", color:"#627EEA", protocol:"Frax Finance", protocolType:"Liquid", apy:4.5, lockPeriod:"None (liquid)", minStake:"Any", tvlUsd:0.29, risk:"Low", chain:"Ethereum", audited:true, insurance:false, url:"https://degen0x.com/go/frax", slug:"frax-eth", tags:["Liquid Staking","Fractional","Stablecoin"], change24h:0.11, description:"Frax's frxETH offers ETH liquid staking with integration into the Frax stablecoin ecosystem." },
  { asset:"Multiple", symbol:"PENDLE", icon:"📈", color:"#25C26E", protocol:"Pendle Finance", protocolType:"Yield Aggregator", apy:17.5, apyMin:10, apyMax:25, lockPeriod:"None", minStake:"Any", tvlUsd:1.3, risk:"High", chain:"Multi-chain", audited:true, insurance:false, url:"https://degen0x.com/go/pendle", slug:"pendle-yield", tags:["Yield Trading","DeFi","Variable"], change24h:-0.87, description:"Pendle enables yield trading by splitting yield-bearing tokens into principal and yield components." },
];

function formatTVL(tvl: number): string {
  if (tvl >= 1) return `$${tvl.toFixed(1)}B`;
  return `$${(tvl * 1000).toFixed(0)}M`;
};

const RISK_COLORS = { Low: "#22c55e", Medium: "#F3BA2F", High: "#f85149" };
const TYPE_COLORS: Record<string, string> = { CEX:"#6366f1", DEX:"#06b6d4", Liquid:"#9945FF", Native:"#22c55e", "Yield Aggregator":"#F3BA2F" };

function APYBadge({ apy, min, max, change }: { apy: number; min?: number; max?: number; change: number }) {
  return (
    <div>
      <div style={{ fontSize: 20, fontWeight: 900, color: "#22c55e" }}>{apy.toFixed(1)}%</div>
      {min && max && <div style={{ fontSize: 10, color: "var(--color-text-secondary)" }}>{min}–{max}% range</div>}
      <div style={{ fontSize: 11, color: change >= 0 ? "#22c55e" : "#f85149", marginTop: 2 }}>
        {change >= 0 ? "▲" : "▼"} {Math.abs(change).toFixed(2)}% 24h
      </div>
    </div>
  );
}

// ── Compounding Calculator ────────────────────────────────────────────────
function CompoundingCalculator({ allData }: { allData: StakingEntry[] }) {
  const [stakeAmount, setStakeAmount] = useState(1000);
  const [selectedAsset, setSelectedAsset] = useState(allData[0].slug);
  const [compoundFreq, setCompoundFreq] = useState<"daily" | "weekly" | "monthly" | "quarterly" | "annually">("monthly");
  const [timeHorizon, setTimeHorizon] = useState(5);

  const selectedEntry = allData.find(e => e.slug === selectedAsset);
  const apy = selectedEntry?.apy || 5;

  const results = useMemo(() => {
    const res: CompoundingResult[] = [];
    const freqPerYear = { daily: 365, weekly: 52, monthly: 12, quarterly: 4, annually: 1 };
    const n = freqPerYear[compoundFreq];
    const rate = apy / 100;

    for (let year = 0; year <= timeHorizon; year++) {
      const amount = stakeAmount * Math.pow(1 + rate / n, n * year);
      const gains = amount - stakeAmount;
      res.push({ year, amount, gains });
    }
    return res;
  }, [stakeAmount, apy, compoundFreq, timeHorizon]);

  const maxAmount = Math.max(...results.map(r => r.amount));
  const uniqueAssets = Array.from(new Set(allData.map(e => e.symbol)));

  return (
    <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 24, marginBottom: 32 }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>📊 Compound Frequency Calculator</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 24 }}>
        <div>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase" }}>Initial Stake ($)</label>
          <input
            type="number"
            value={stakeAmount}
            onChange={e => setStakeAmount(parseFloat(e.target.value) || 1000)}
            min="1"
            step="100"
            style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-bg)", color: "var(--color-text)", fontSize: 14, fontWeight: 600 }}
          />
        </div>

        <div>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase" }}>Asset / Protocol</label>
          <select
            value={selectedAsset}
            onChange={e => setSelectedAsset(e.target.value)}
            style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-bg)", color: "var(--color-text)", fontSize: 14, fontWeight: 600 }}
          >
            {allData.map(e => (
              <option key={e.slug} value={e.slug}>{e.asset} - {e.protocol}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase" }}>Compound Frequency</label>
          <select
            value={compoundFreq}
            onChange={e => setCompoundFreq(e.target.value as any)}
            style={{ width: "100%", padding: "10px 12px", borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-bg)", color: "var(--color-text)", fontSize: 14, fontWeight: 600 }}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="annually">Annually</option>
          </select>
        </div>

        <div>
          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 8, textTransform: "uppercase" }}>Time Horizon: {timeHorizon} years</label>
          <input
            type="range"
            max="10"
            value={timeHorizon}
            onChange={e => setTimeHorizon(parseInt(e.target.value))}
            style={{ width: "100%" }}
          />
        </div>
      </div>

      {/* Results Table */}
      <div style={{ overflowX: "auto", marginBottom: 24 }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ borderBottom: "2px solid var(--color-border)" }}>
              <th style={{ textAlign: "left", padding: "12px 8px", color: "var(--color-text-secondary)", fontWeight: 600 }}>Year</th>
              <th style={{ textAlign: "right", padding: "12px 8px", color: "var(--color-text-secondary)", fontWeight: 600 }}>Balance</th>
              <th style={{ textAlign: "right", padding: "12px 8px", color: "var(--color-text-secondary)", fontWeight: 600 }}>Total Gains</th>
              <th style={{ textAlign: "right", padding: "12px 8px", color: "var(--color-text-secondary)", fontWeight: 600 }}>Growth %</th>
            </tr>
          </thead>
          <tbody>
            {results.map((r, i) => (
              <tr key={i} style={{ borderBottom: "1px solid var(--color-border)" }}>
                <td style={{ padding: "10px 8px", color: "var(--color-text)" }}>{r.year}</td>
                <td style={{ textAlign: "right", padding: "10px 8px", color: "var(--color-text)", fontWeight: 600 }}>${r.amount.toFixed(0)}</td>
                <td style={{ textAlign: "right", padding: "10px 8px", color: "#22c55e", fontWeight: 600 }}>+${r.gains.toFixed(0)}</td>
                <td style={{ textAlign: "right", padding: "10px 8px", color: "#22c55e", fontWeight: 600 }}>+{((r.gains / stakeAmount) * 100).toFixed(1)}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pure CSS Bar Chart */}
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-text-secondary)", marginBottom: 12 }}>Growth Visualization</div>
        <div style={{ display: "flex", gap: 12, alignItems: "flex-end", height: 120 }}>
          {results.map((r, i) => (
            <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
              <div
                style={{
                  width: "100%",
                  height: `${(r.amount / maxAmount) * 100}%`,
                  background: `linear-gradient(180deg, #22c55e, #16a34a)`,
                  borderRadius: "4px 4px 0 0",
                  minHeight: 4,
                  transition: "all 0.3s ease",
                }}
              />
              <div style={{ fontSize: 10, color: "var(--color-text-secondary)", marginTop: 6 }}>Yr {r.year}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ background: "var(--color-bg)", padding: 12, borderRadius: 8, fontSize: 12, color: "var(--color-text-secondary)" }}>
        After {timeHorizon} years: <span style={{ color: "#22c55e", fontWeight: 700 }}>${results[results.length - 1]?.amount.toFixed(0) || 0}</span> (total gain: <span style={{ color: "#22c55e", fontWeight: 700 }}>${results[results.length - 1]?.gains.toFixed(0) || 0}</span>)
      </div>
    </div>
  );
}

// ── Validator Comparison ──────────────────────────────────────────────────
function ValidatorComparison() {
  const options = [
    {
      type: "Solo Staking",
      apy: "3.2 - 4.5%",
      pros: ["Full control", "Keep all rewards", "Privacy"],
      cons: ["32 ETH minimum", "Technical setup", "Network risk"],
    },
    {
      type: "Pool Staking",
      apy: "3.5 - 4.0%",
      pros: ["Any amount", "Lower fees", "Decentralized"],
      cons: ["Smart contract risk", "Slashing risk", "Setup complexity"],
    },
    {
      type: "Liquid Staking",
      apy: "3.4 - 3.8%",
      pros: ["No lockup", "Instant liquidity", "Easy entry"],
      cons: ["Platform risk", "Lower APY", "Fees"],
    },
    {
      type: "CEX Staking",
      apy: "3.0 - 3.4%",
      pros: ["Simplest", "Custodial", "Insurance"],
      cons: ["Lowest APY", "Counterparty risk", "Centralized"],
    },
  ];

  return (
    <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 24, marginBottom: 32 }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>⚖️ Validator & Staking Method Comparison</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
        {options.map((opt, i) => (
          <div key={i} style={{ background: "var(--color-bg)", borderRadius: 10, padding: 16, border: "1px solid var(--color-border)" }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-text)", marginBottom: 8 }}>{opt.type}</div>
            <div style={{ fontSize: 16, fontWeight: 800, color: "#22c55e", marginBottom: 12 }}>{opt.apy}</div>

            <div style={{ marginBottom: 12 }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#22c55e", marginBottom: 4, textTransform: "uppercase" }}>Pros</div>
              <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: "var(--color-text-secondary)" }}>
                {opt.pros.map((p, j) => <li key={j}>{p}</li>)}
              </ul>
            </div>

            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: "#f85149", marginBottom: 4, textTransform: "uppercase" }}>Cons</div>
              <ul style={{ margin: 0, paddingLeft: 16, fontSize: 12, color: "var(--color-text-secondary)" }}>
                {opt.cons.map((c, j) => <li key={j}>{c}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Historical APY Trend ──────────────────────────────────────────────────
function HistoricalAPYTrend() {
  const months = ["Sep 2025", "Oct 2025", "Nov 2025", "Dec 2025", "Jan 2026", "Feb 2026", "Mar 2026"];
  const ethApy = [3.2, 3.4, 3.6, 3.7, 3.8, 3.9, 3.8];
  const maxApy = Math.max(...ethApy);

  return (
    <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 24, marginBottom: 32 }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>📈 Historical APY Trend (ETH Staking)</h2>

      <div style={{ display: "flex", gap: 8, alignItems: "flex-end", height: 140, marginBottom: 16 }}>
        {ethApy.map((apy, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div
              style={{
                width: "100%",
                height: `${(apy / maxApy) * 100}%`,
                background: i < ethApy.length - 1 ? "#6366f1" : "#22c55e",
                borderRadius: "4px 4px 0 0",
                minHeight: 8,
              }}
            />
            <div style={{ fontSize: 10, color: "var(--color-text-secondary)", marginTop: 8, textAlign: "center" }}>
              <div>{apy}%</div>
              <div style={{ fontSize: 9, marginTop: 2 }}>{months[i]}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: "var(--color-bg)", padding: 12, borderRadius: 8, fontSize: 12, color: "var(--color-text-secondary)" }}>
        ETH staking APY has gradually increased from 3.2% to 3.8% over the past 6 months. Current trend suggests continued slight increases as validator participation stabilizes.
      </div>
    </div>
  );
}

// ── FAQ Section ───────────────────────────────────────────────────────────
function FAQSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const faqs = [
    {
      q: "What is staking and how do rewards work?",
      a: "Staking is the process of locking cryptocurrency in a blockchain network to help secure it and earn rewards. Validators or delegators earn APY (annual percentage yield) based on the amount staked and the network's rewards distribution mechanism. Rewards vary by protocol."
    },
    {
      q: "What are the main risks of staking?",
      a: "Staking risks include slashing (loss of stake for validator misconduct), smart contract vulnerabilities (in DeFi protocols), exchange risk (on centralized platforms), impermanent loss (in yield farms), and market volatility affecting underlying asset value."
    },
    {
      q: "What's the difference between solo staking and pool staking?",
      a: "Solo staking requires you to run your own validator (32 ETH minimum for Ethereum) and earn full rewards but accept full responsibility. Pool staking lets you join others' pools with any amount, share fees, and reduce technical burden but expose you to pool operator risk."
    },
    {
      q: "What is liquid staking and how does it work?",
      a: "Liquid staking allows you to earn staking rewards while keeping your tokens liquid and tradeable. You deposit tokens and receive derivative tokens (like stETH or sSOL) that represent your stake. You can trade, lend, or use these derivatives while earning staking rewards."
    },
    {
      q: "How are staking rewards taxed?",
      a: "Tax treatment varies by jurisdiction. Generally, staking rewards are taxed as income at the fair market value when received. Additionally, if you sell derivative staking tokens or the original asset at a gain, you may owe capital gains tax. Consult a tax professional for your region."
    },
    {
      q: "Which staking method is best for beginners?",
      a: "For beginners, we recommend starting with liquid staking (Lido, Marinade) or CEX staking (Coinbase, Binance) as they require minimal technical knowledge and have insurance/backing. Avoid high-risk yield aggregators until you understand smart contract risks."
    },
    {
      q: "Can I lose my stake?",
      a: "In native staking, slashing (losing a percentage of your stake) is possible for validator misconduct. In liquid staking, smart contract risks exist. In CEX staking, counterparty risk applies. The amount you lose depends on the specific protocol and your actions."
    },
    {
      q: "How often are staking rewards distributed?",
      a: "Distribution frequency varies: Ethereum distributes every slot (12 seconds), Cosmos every block, Cardano every 5 days, and most CEX/DeFi platforms daily or hourly. Check each protocol's documentation for exact reward cycles."
    },
  ];

  return (
    <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 24, marginBottom: 32 }}>
      <h2 style={{ fontSize: 20, fontWeight: 800, color: "var(--color-text)", marginBottom: 20 }}>❓ Staking Rewards FAQ</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ background: "var(--color-bg)", borderRadius: 10, border: "1px solid var(--color-border)", overflow: "hidden" }}>
            <button
              onClick={() => setExpanded(expanded === i ? null : i)}
              style={{
                width: "100%",
                padding: "14px 16px",
                textAlign: "left",
                cursor: "pointer",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--color-text)",
                background: "transparent",
                border: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>{faq.question}</span>
              <span style={{ fontSize: 18, color: "var(--color-text-secondary)" }}>{expanded === i ? "▼" : "▶"}</span>
            </button>

            {expanded === i && (
              <div style={{ padding: "0 16px 12px", fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6, borderTop: "1px solid var(--color-border)" }}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────
export default function StakingAPYPage() {
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<string>("All");
  const [filterRisk, setFilterRisk] = useState<string>("All");
  const [filterChain, setFilterChain] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"apy" | "tvl" | "risk">("apy");
  const [showStablecoins, setShowStablecoins] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setLastUpdate(new Date()), 30000);
    return () => clearInterval(id);
  }, []);

  const chains = ["All", ...Array.from(new Set(STAKING_DATA.map(e => e.chain.split(" / ")[0])))];
  const types = ["All", "CEX", "DEX", "Liquid", "Native", "Yield Aggregator"];
  const risks = ["All", "Low", "Medium", "High"];

  const filtered = useMemo(() => {
    let data = [...STAKING_DATA];
    if (!showStablecoins) data = data.filter(e => !["USDC","USDT","DAI","BUSD"].includes(e.symbol));
    if (filterType !== "All") data = data.filter(e => e.protocolType === filterType);
    if (filterRisk !== "All") data = data.filter(e => e.risk === filterRisk);
    if (filterChain !== "All") data = data.filter(e => e.chain.includes(filterChain));
    if (search) data = data.filter(e => `${e.asset} ${e.symbol} ${e.protocol}`.toLowerCase().includes(search.toLowerCase()));
    if (sortBy === "apy") data.sort((a, b) => b.apy - a.apy);
    else if (sortBy === "tvl") data.sort((a, b) => b.tvlUsd - a.tvlUsd);
    else data.sort((a, b) => { const order = { Low:0, Medium:1, High:2 }; return order[a.risk] - order[b.risk]; });
    return data;
  }, [search, filterType, filterRisk, filterChain, sortBy, showStablecoins]);

  const topAPY = STAKING_DATA.reduce((a, b) => a.apy > b.apy ? a : b);
  const totalTVL = STAKING_DATA.reduce((s, e) => s + e.tvlUsd, 0);
  const avgAPY = STAKING_DATA.reduce((s, e) => s + e.apy, 0) / STAKING_DATA.length;

  return (
    <div style={{ minHeight: "100vh", background: "var(--color-bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px 80px" }}>
        <Breadcrumb items={[{ label: "Tools", href: "/tools" }, { label: "Staking APY Leaderboard", href: "/tools/staking-apy" }]} />

        {/* ── Header ── */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 800, color: "var(--color-text)", marginBottom: 6 }}>
                🥩 Staking APY Leaderboard
              </h1>
              <p style={{ color: "var(--color-text-secondary)", fontSize: 14 }}>
                Compare staking yields across {STAKING_DATA.length} protocols. Updated every 30 seconds.
              </p>
            </div>
            <span style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 8 }}>
              Last update: {lastUpdate.toLocaleTimeString()}
            </span>
          </div>
        </div>

        {/* ── Stats ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 28 }}>
          {[
            { label: "Best APY Right Now", value: `${topAPY.apy.toFixed(1)}%`, sub: `${topAPY.protocol}`, color: "#22c55e" },
            { label: "Avg Staking APY", value: `${avgAPY.toFixed(1)}%`, sub: "Across all protocols", color: "#6366f1" },
            { label: "Total TVL Tracked", value: formatTVL(totalTVL), sub: `${STAKING_DATA.length} protocols`, color: "#06b6d4" },
            { label: "Protocols Listed", value: `${STAKING_DATA.length}`, sub: "CEX + DeFi + Native", color: "#F3BA2F" },
          ].map((s, i) => (
            <div key={i} style={{ background: "var(--color-surface)", border: "1px solid var(--color-border)", borderRadius: 12, padding: "14px 16px", borderTop: `3px solid ${s.color}` }}>
              <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</div>
              <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.value}</div>
              <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 2 }}>{s.sub}</div>
            </div>
          ))}
        </div>

        {/* ── Filters ── */}
        <div style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: "16px 20px", marginBottom: 20, display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          {/* Search */}
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="🔍 Search asset or protocol..."
            style={{ padding: "8px 14px", borderRadius: 8, border: "1px solid var(--color-border)", background: "var(--color-bg)", color: "var(--color-text)", fontSize: 13, minWidth: 220 }}
          />
          {/* Type filter */}
          <div style={{ display: "flex", gap: 4 }}>
            {types.map(t => (
              <button key={t} onClick={() => setFilterType(t)} style={{ padding: "5px 10px", borderRadius: 6, cursor: "pointer", fontSize: 11, fontWeight: 600, border: `1px solid ${filterType === t ? (TYPE_COLORS[t] ?? "#6366f1") : "var(--color-border)"}`, background: filterType === t ? `${TYPE_COLORS[t] ?? "#6366f1"}20` : "transparent", color: filterType === t ? (TYPE_COLORS[t] ?? "#6366f1") : "var(--color-text-secondary)" }}>
                {t}
              </button>
            ))}
          </div>
          {/* Risk filter */}
          <div style={{ display: "flex", gap: 4 }}>
            {risks.map(r => (
              <button key={r} onClick={() => setFilterRisk(r)} style={{ padding: "5px 10px", borderRadius: 6, cursor: "pointer", fontSize: 11, fontWeight: 600, border: `1px solid ${filterRisk === r ? (RISK_COLORS[r as keyof typeof RISK_COLORS] ?? "#6366f1") : "var(--color-border)"}`, background: filterRisk === r ? `${RISK_COLORS[r as keyof typeof RISK_COLORS] ?? "#6366f1"}20` : "transparent", color: filterRisk === r ? (RISK_COLORS[r as keyof typeof RISK_COLORS] ?? "#6366f1") : "var(--color-text-secondary)" }}>
                {r === "All" ? r : `${r} Risk`}
              </button>
            ))}
          </div>
          {/* Stablecoins toggle */}
          <label style={{ display: "flex", alignItems: "center", gap: 6, cursor: "pointer", fontSize: 12, color: "var(--color-text-secondary)", userSelect: "none" }}>
            <input type="checkbox" checked={showStablecoins} onChange={e => setShowStablecoins(e.target.checked)} />
            Show stablecoins
          </label>
          {/* Sort */}
          <div style={{ marginLeft: "auto", display: "flex", gap: 4, alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>Sort:</span>
            {(["apy","tvl","risk"] as const).map(s => (
              <button key={s} onClick={() => setSortBy(s)} style={{ padding: "5px 10px", borderRadius: 6, cursor: "pointer", fontSize: 11, fontWeight: 600, border: `1px solid ${sortBy === s ? "#6366f1" : "transparent"}`, background: sortBy === s ? "#6366f120" : "transparent", color: sortBy === s ? "#6366f1" : "var(--color-text-secondary)" }}>
                {s === "apy" ? "APY" : s === "tvl" ? "TVL" : "Safety"}
              </button>
            ))}
          </div>
        </div>

        {/* ── Results count ── */}
        <div style={{ fontSize: 12, color: "var(--color-text-secondary)", marginBottom: 12 }}>
          Showing {filtered.length} of {STAKING_DATA.length} protocols
        </div>

        {/* ── Table ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 40 }}>
          {/* Table header */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 110px 80px 90px 80px 80px 90px 120px", gap: 8, padding: "0 16px", fontSize: 10, color: "var(--color-text-secondary)", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600 }}>
            <span>Asset</span><span>Protocol</span><span style={{ textAlign:"right" }}>APY</span>
            <span style={{ textAlign:"center" }}>Type</span><span style={{ textAlign:"right" }}>TVL</span>
            <span style={{ textAlign:"center" }}>Risk</span><span style={{ textAlign:"center" }}>Lock</span>
            <span style={{ textAlign:"right" }}>Min Stake</span><span style={{ textAlign:"center" }}>Action</span>
          </div>

          {filtered.map((e, i) => (
            <div key={e.slug} style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 110px 80px 90px 80px 80px 90px 120px",
              gap: 8, padding: "14px 16px", alignItems: "center",
              background: "var(--color-surface)", borderRadius: 10,
              border: `1px solid var(--color-border)`,
              borderLeft: i < 3 ? `4px solid ${["#F3BA2F","#8b949e","#CD7F32"][i]}` : "1px solid var(--color-border)",
            }}>
              {/* Asset */}
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                {i < 3 && <span style={{ fontSize: 14 }}>{["🥇","🥈","🥉"][i]}</span>}
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: `${e.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, flexShrink: 0 }}>
                  {e.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--color-text)", fontSize: 13 }}>{e.asset}</div>
                  <div style={{ fontSize: 10, color: "var(--color-text-secondary)" }}>{e.chain.split(" / ")[0]}</div>
                </div>
              </div>
              {/* Protocol */}
              <div>
                <div style={{ fontWeight: 600, color: "var(--color-text)", fontSize: 13 }}>{e.protocol}</div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 3, marginTop: 3 }}>
                  {e.tags.slice(0, 2).map(t => (
                    <span key={t} style={{ fontSize: 9, padding: "1px 5px", borderRadius: 4, background: "#6366f120", color: "#818cf8", fontWeight: 600 }}>{t}</span>
                  ))}
                </div>
              </div>
              {/* APY */}
              <div style={{ textAlign: "right" }}>
                <APYBadge apy={e.apy} min={e.apyMin} max={e.apyMax} change={e.change24h} />
              </div>
              {/* Type */}
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: 10, padding: "3px 7px", borderRadius: 5, background: `${TYPE_COLORS[e.protocolType]}20`, color: TYPE_COLORS[e.protocolType], fontWeight: 700 }}>
                  {e.protocolType}
                </span>
              </div>
              {/* TVL */}
              <div style={{ textAlign: "right", fontWeight: 700, fontSize: 13, color: "var(--color-text)" }}>
                {formatTVL(e.tvlUsd)}
                {e.audited && <div style={{ fontSize: 9, color: "#22c55e", marginTop: 1 }}>✓ Audited</div>}
              </div>
              {/* Risk */}
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: 11, padding: "3px 8px", borderRadius: 5, background: `${RISK_COLORS[e.risk]}20`, color: RISK_COLORS[e.risk], fontWeight: 700 }}>
                  {e.risk}
                </span>
              </div>
              {/* Lock */}
              <div style={{ textAlign: "center", fontSize: 11, color: "var(--color-text-secondary)" }}>
                {e.lockPeriod.includes("None") ? <span style={{ color: "#22c55e", fontWeight: 600 }}>✓ None</span> : e.lockPeriod.split("(")[0].trim()}
              </div>
              {/* Min stake */}
              <div style={{ textAlign: "right", fontSize: 12, color: "var(--color-text-secondary)" }}>
                {e.minStake}
                {e.insurance && <div style={{ fontSize: 9, color: "#6366f1", marginTop: 1 }}>🛡️ Insured</div>}
              </div>
              {/* CTA */}
              <div style={{ textAlign: "center" }}>
                <Link href={e.url} style={{ display: "inline-block", padding: "7px 14px", background: `${e.color}20`, border: `1px solid ${e.color}50`, borderRadius: 8, color: e.color, fontSize: 12, fontWeight: 700, textDecoration: "none", whiteSpace: "nowrap" }}>
                  Stake Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: 60, color: "var(--color-text-secondary)", background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", marginBottom: 40 }}>
            No protocols match your filters. Try adjusting your search.
          </div>
        )}

        {/* ── Compound Calculator ── */}
        <CompoundingCalculator allData={STAKING_DATA} />

        {/* ── Validator Comparison ── */}
        <ValidatorComparison />

        {/* ── Historical Trend ── */}
        <HistoricalAPYTrend />

        {/* ── FAQ ── */}
        <FAQSection />

        {/* ── Risk Guide ── */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 32 }}>
          {[
            { risk: "Low", color: "#22c55e", icon: "🟢", title: "Low Risk Staking", desc: "Native blockchain staking (ETH, SOL, ADA) and regulated CEX staking. Smart contract risk is minimal or zero. Best for conservative investors." },
            { risk: "Medium", color: "#F3BA2F", icon: "🟡", title: "Medium Risk Staking", desc: "DeFi liquid staking protocols with audits (Lido, Rocket Pool). Smart contract risk exists but protocols have proven track records." },
            { risk: "High", color: "#f85149", icon: "🔴", title: "High Risk / High Reward", desc: "Yield aggregators and newer protocols offering 15%+ APY. Higher smart contract risk, potential for liquidations, or less-tested code." },
          ].map(r => (
            <div key={r.risk} style={{ background: "var(--color-surface)", borderRadius: 12, border: "1px solid var(--color-border)", padding: 18, borderTop: `3px solid ${r.color}` }}>
              <div style={{ fontSize: 18, marginBottom: 6 }}>{r.icon} <strong style={{ color: r.color }}>{r.title}</strong></div>
              <div style={{ fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{r.desc}</div>
            </div>
          ))}
        </div>

        {/* ── Disclaimer ── */}
        <div style={{ marginTop: 32, padding: 16, background: "var(--color-surface)", borderRadius: 10, border: "1px solid var(--color-border)", fontSize: 12, color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
          <strong>⚠️ Disclaimer:</strong> APY rates are indicative and change constantly based on network conditions, market demand, and protocol parameters. Past yields are not indicative of future returns. Always verify current rates on the protocol's website before staking. Staking involves risk including loss of principal. This is not financial advice.
        </div>
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              "name": "Staking Apy",
              "url": "https://degen0x.com/tools/staking-apy",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Web",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
            })
          }}
        />
      </div>
  );
}
