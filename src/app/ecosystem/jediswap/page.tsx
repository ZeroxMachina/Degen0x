'use client';
import Link from "next/link";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", lime: "#26d07c", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function JediSwapGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>JediSwap</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.lime}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.lime}40` }}>⚔️</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.lime}20`, color: S.lime, border: `1px solid ${S.lime}40` }}>DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40` }}>Starknet</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Cairo</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>JediSwap: The Complete Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Starknet's leading AMM DEX · +140 XP · 11 min read · Updated March 2026</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$62M", S.lime],
            ["Daily Volume", "$12M", S.blue],
            ["Token", "$JEDI", S.purple],
            ["Chains", "Starknet", S.green],
            ["Pool Types", "Stable & Volatile", S.orange],
            ["Rating", "⭐ 4.6", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.lime }}>What is JediSwap?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            JediSwap is the flagship decentralized exchange on <strong style={{ color: S.text }}>Starknet</strong>, a StarkWare Layer 2 scaling solution for Ethereum powered by cryptographic proofs. It's an automated market maker (AMM) DEX that enables fast, cost-effective token swaps while leveraging Cairo's powerful smart contract capabilities for advanced trading features.
          </p>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            JediSwap differentiates itself with both volatile and stable pair pools, optimized for different trading scenarios. The protocol's focus on developer experience and DeFi composability makes it the central hub for Starknet's trading ecosystem.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.lime }}>Key Features</h2>
          {[
            ["Volatile & Stable Pools", "Optimize capital efficiency with pool types suited to different token pair characteristics"],
            ["Cairo Smart Contracts", "Advanced logic leveraging Starknet's Cairo language for enhanced functionality"],
            ["Sub-cent Gas Fees", "Starknet's STARK proofs compress transactions; typical swap ~$0.01-$0.02"],
            ["Governance via JEDI", "Token holders govern protocol updates, fee switches, and ecosystem grants"],
            ["Multi-hop Routing", "Automated smart routing finds optimal swap paths across multiple pools"],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.lime, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.lime }}>How to Use JediSwap</h2>
          {[
            ["1. Fund Starknet Account", "Use the official Starknet bridge or services like Orbiter Finance to move assets to Starknet L2"],
            ["2. Set Up Wallet", "Use Argent or Braavos wallets (Cairo-native) → configure Starknet network (chainid 534, RPC from wallet)"],
            ["3. Visit JediSwap", "Go to app.jediswap.xyz → Connect your Cairo wallet → approve interactions"],
            ["4. Execute Swap", "Select token pair (volatile or stable), enter amount, review fees (~0.25-0.3%), confirm swap"],
            ["5. Provide Liquidity (Optional)", "Deposit equal values of token pair to earn LP fees proportional to your share"],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.lime, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.lime }}>JEDI Token & Governance</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            <strong style={{ color: S.text }}>$JEDI</strong> is JediSwap's governance token. Holders vote on protocol upgrades, fee distribution, and ecosystem development. The protocol has begun fee distribution to JEDI stakers, making it a yield-bearing governance token similar to Uniswap's UNI.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {[
              ["Total Supply", "~5B JEDI"],
              ["Circulating", "~0.4B JEDI"],
              ["Governance", "Fee switch & upgrades"],
              ["Rewards", "Transaction fee distribution"],
            ].map(([k, v]) => (
              <div key={String(k)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: 11, color: S.text2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 3, color: S.text }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.lime }}>Risks & Considerations</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ color: S.text2, lineHeight: 1.8, fontSize: 13 }}>
              <strong style={{ color: S.orange }}>Starknet Maturity:</strong> Starknet is newer and less battle-tested than Ethereum L1; ensure you trust the implementation.<br/><br/>
              <strong style={{ color: S.orange }}>Wallet Learning Curve:</strong> Cairo wallets (Argent, Braavos) differ from EVM wallets; familiarize yourself first.<br/><br/>
              <strong style={{ color: S.orange }}>Liquidity Depth:</strong> Lower overall ecosystem liquidity than Ethereum; large trades may experience slippage.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${S.lime}15, ${S.purple}10)`, border: `1px solid ${S.lime}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Explore JediSwap</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the JediSwap quiz and earn +140 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://app.jediswap.xyz" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: S.lime, color: "#000", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Open JediSwap ↗
            </a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Take Quiz +140 XP
            </Link>
          </div>
        </div>

        <section style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Related dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["SyncSwap", "zkSync Era's leading DEX", "/ecosystem/syncswap"],
              ["Scroll DEX", "Scroll's native DEX", "/ecosystem/scroll-dex"],
              ["Uniswap", "Multi-chain DEX pioneer", "/ecosystem/uniswap"],
            ].map(([name, desc, url]) => (
              <Link key={name} href={url} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", textDecoration: "none", cursor: "pointer" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: S.lime, marginBottom: 4 }}>{name}</div>
                <div style={{ color: S.text2, fontSize: 12 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
