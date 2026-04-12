'use client';
import Link from "next/link";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", violet: "#d2a8ff", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function TurbosGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Turbos</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.violet}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.violet}40` }}>💨</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.violet}20`, color: S.violet, border: `1px solid ${S.violet}40` }}>DeFi</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40` }}>Sui</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Yield</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Turbos Finance: The Complete Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Sui's premier yield optimization protocol · +130 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$54M", S.violet],
            ["Daily Volume", "$8.5M", S.blue],
            ["Token", "$TURBOS", S.purple],
            ["Chains", "Sui", S.green],
            ["Vault Types", "5+", S.orange],
            ["Rating", "⭐ 4.6", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.violet }}>What is Turbos Finance?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Turbos Finance is a <strong style={{ color: S.text }}>yield optimization</strong> protocol on Sui that aggregates trading fees, staking rewards, and arbitrage opportunities into managed vaults. Unlike simple DEXs, Turbos automates yield strategies, allowing users to deposit assets once and earn optimized returns as the protocol compounds fees and incentives.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1005', border: '1px solid #4a2c10', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🌐</span>
            <strong style={{ color: '#fb923c', fontSize: 15 }}>Ecosystem Watch</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We maintain relationships with builders across ecosystems. Our coverage reflects boots-on-the-ground knowledge from governance forums and developer Discord channels.
          </p>
        </div>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Built natively on Sui's Move language, Turbos leverages the chain's high throughput and low costs to provide best-in-class yield farming and liquidity management tools. It's part of the broader Sui DeFi ecosystem alongside Cetus and other protocols.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.violet }}>Key Features</h2>
          {[
            ["Automated Yield Strategies", "Deposit assets once; protocol automates LP management, fee reinvestment, and rebalancing"],
            ["Multiple Vault Types", "Concentrated liquidity vaults, stable swaps, leverage farming, arbitrage bots"],
            ["Flash Loan Integration", "MEV-resistant strategies leverage Sui's atomic transactions"],
            ["Real-time APY Tracking", "Transparent historical returns and real-time APY calculations"],
            ["TURBOS Governance", "Token holders vote on vault strategies, fee tiers, and new yield products"],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.violet, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.violet }}>How to Use Turbos Finance</h2>
          {[
            ["1. Prepare SUI Assets", "Bridge SUI to Sui mainnet and hold other token pairs (e.g., SUI/USDC, SUI/CETUS)"],
            ["2. Connect Wallet", "Visit turbos.sui.io → Connect Sui wallet (Sui Wallet, Martian, Ethos, etc.)"],
            ["3. Choose Vault Strategy", "Browse available vaults: concentrated liquidity, stable swap farming, yield aggregation"],
            ["4. Deposit Assets", "Select a vault, approve token transfers, and deposit your assets (minimal gas cost)"],
            ["5. Monitor Returns", "Track APY, earnings, and rebalancing in real-time; harvest rewards when ready"],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.violet, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.violet }}>TURBOS Token & Governance</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            <strong style={{ color: S.text }}>$TURBOS</strong> is Turbos Finance's governance token. Holders vote on new vault strategies, fee structures, and protocol upgrades. TURBOS staking can unlock governance rights and yield-sharing mechanisms as the protocol matures.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 10 }}>
            {[
              ["Total Supply", "~5B TURBOS"],
              ["Circulating", "~0.8B TURBOS"],
              ["Governance", "Vault strategy voting"],
              ["Farming", "TURBOS emissions in vaults"],
            ].map(([k, v]) => (
              <div key={String(k)} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: 11, color: S.text2 }}>{k}</div>
                <div style={{ fontWeight: 700, fontSize: 13, marginTop: 3, color: S.text }}>{v}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.violet }}>Risks & Considerations</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ color: S.text2, lineHeight: 1.8, fontSize: 13 }}>
              <strong style={{ color: S.orange }}>Vault Smart Contract Risk:</strong> Automated yield strategies carry execution risk; always audit vault contracts before large deposits.<br/><br/>
              <strong style={{ color: S.orange }}>Impermanent Loss:</strong> Liquidity-providing vaults still suffer IL in volatile markets despite automation.<br/><br/>
              <strong style={{ color: S.orange }}>Rebalancing Risk:</strong> Automated rebalancing can incur gas costs and slippage; monitor vault performance regularly.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${S.violet}15, ${S.purple}10)`, border: `1px solid ${S.violet}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Earn with Turbos</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Turbos quiz and earn +130 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://turbos.sui.io" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: S.violet, color: "#fff", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Open Turbos ↗
            </a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Take Quiz +130 XP
            </Link>
          </div>
        </div>

        <section style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Related dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["Cetus", "Sui's concentrated liquidity DEX", "/ecosystem/cetus"],
              ["Yield Protocol", "Cross-chain yield farming", "/ecosystem/yearn"],
              ["PancakeSwap V4", "Multi-chain DEX with V4", "/ecosystem/pancakeswap-v4"],
            ].map(([name, desc, url]) => (
              <Link key={name} href={url} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", textDecoration: "none", cursor: "pointer" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: S.violet, marginBottom: 4 }}>{name}</div>
                <div style={{ color: S.text2, fontSize: 12 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
