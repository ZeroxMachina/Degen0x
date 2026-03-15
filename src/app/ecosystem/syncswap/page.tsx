'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", indigo: "#a371f7", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function SyncSwapGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>SyncSwap</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.indigo}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.indigo}40` }}>⚡</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.indigo}20`, color: S.indigo, border: `1px solid ${S.indigo}40` }}>DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>zkSync Era</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>ZK-Rollup</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>SyncSwap: The Complete Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>zkSync Era's flagship DEX · +150 XP · 11 min read · Updated March 2026</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$180M", S.indigo],
            ["Daily Volume", "$35M", S.blue],
            ["Token", "$SYNC", S.purple],
            ["Chains", "zkSync Era", S.green],
            ["V2 Pools", "Active", S.orange],
            ["Rating", "⭐ 4.7", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.indigo }}>What is SyncSwap?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            SyncSwap is the leading decentralized exchange on <strong style={{ color: S.text }}>zkSync Era</strong>, Matter Labs' high-performance Ethereum Layer 2 using zero-knowledge proofs. It combines concentrated liquidity pools with low fees to serve zkSync's rapidly growing ecosystem, offering swap volumes and TVL that dominate the network.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            SyncSwap pioneered the 2-token concentrated liquidity model on zkSync, allowing LPs to maximize capital efficiency while traders enjoy deep liquidity and minimal slippage. The native <strong style={{ color: S.text }}>$SYNC</strong> token enables governance and fee rewards.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.indigo }}>Key Features</h2>
          {[
            ["Concentrated Liquidity Pools", "LP capital earns fees only in active price ranges, maximizing yield efficiency"],
            ["Multi-Pool Strategy", "Classic pools (1% fixed fee) and concentrated pools coexist for different risk profiles"],
            ["Ultra-Low Gas Costs", "zkSync Era's ZK-rollups compress transactions; SyncSwap swaps cost ~$0.02"],
            ["Governance via SYNC", "Token holders vote on protocol upgrades, fee adjustments, and grant programs"],
            ["StableSwap Pools", "Specialized pools for stablecoin pairs with minimal slippage for high-volume trading"],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.indigo, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.indigo }}>How to Use SyncSwap</h2>
          {[
            ["1. Bridge Assets to zkSync", "Use Official Bridge (bridge.zksync.io) or multi-chain bridges like Orbiter to move funds to zkSync Era"],
            ["2. Connect to SyncSwap", "Visit app.syncswap.io → Connect Wallet (MetaMask with zkSync RPC configured)"],
            ["3. Set Up Wallet", "Add zkSync Era: chainid 324, RPC mainnet.era.zksync.io"],
            ["4. Swap Tokens", "Select from/to tokens, review price impact, and confirm the swap"],
            ["5. Earn Yield (Optional)", "Add liquidity to pools, especially concentrated pools, to earn swap fees"],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.indigo, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.indigo }}>SYNC Token & Rewards</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            The <strong style={{ color: S.text }}>$SYNC</strong> token is SyncSwap's native governance token. SYNC holders can vote on protocol decisions, and fee generation mechanisms reward SYNC stakers with transaction fee cuts. Liquidity providers earn swap fees, and some pools offer SYNC emissions for early adopters.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {[
              ["Total Supply", "~10B SYNC"],
              ["Circulating", "~1.5B SYNC"],
              ["Governance", "Fee allocation voting"],
              ["Yield Mechanism", "LP fee rewards + SYNC emissions"],
            ].map(([k, v]) => (
              <div key={String(k)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: 11, color: S.text2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 3, color: S.text }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.indigo }}>Risks & Considerations</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ color: S.text2, lineHeight: 1.8, fontSize: 13 }}>
              <strong style={{ color: S.orange }}>zkSync Era Smart Contract Risk:</strong> zkSync Era is newer; always audit code before depositing large amounts.<br/><br/>
              <strong style={{ color: S.orange }}>Impermanent Loss (IL):</strong> Concentrated liquidity amplifies IL during volatile price movements.<br/><br/>
              <strong style={{ color: S.orange }}>Bridge Risk:</strong> Cross-chain bridges have inherent risk; only bridge what you need.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${S.indigo}15, ${S.purple}10)`, border: `1px solid ${S.indigo}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Ready to use SyncSwap?</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the SyncSwap quiz and earn +150 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://app.syncswap.io" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: S.indigo, color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Open SyncSwap ↗
            </a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Take Quiz +150 XP
            </Link>
          </div>
        </div>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live SYNC Price Chart</h2>
          <TradingViewChart symbol="COINBASE:SYNCUSD" height={420} />
        </section>

        <section style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Related dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["Scroll DEX", "Scroll's native DEX", "/ecosystem/scroll-dex"],
              ["Uniswap", "Multi-chain DEX pioneer", "/ecosystem/uniswap"],
              ["JediSwap", "Starknet's AMM DEX", "/ecosystem/jediswap"],
            ].map(([name, desc, url]) => (
              <Link key={name} href={url} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", textDecoration: "none", cursor: "pointer" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: S.indigo, marginBottom: 4 }}>{name}</div>
                <div style={{ color: S.text2, fontSize: 12 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
