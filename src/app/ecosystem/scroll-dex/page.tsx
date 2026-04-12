'use client';
import Link from "next/link";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", cyan: "#79c0ff", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function ScrollDexGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Scroll DEX</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Hero */}
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.cyan}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.cyan}40` }}>🌀</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.cyan}20`, color: S.cyan, border: `1px solid ${S.cyan}40` }}>DEX</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Scroll</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>zkEVM</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Scroll DEX: The Complete Guide 2026</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Scroll's native concentrated liquidity DEX · +120 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        {/* Quick Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$45M", S.cyan],
            ["Daily Volume", "$8.2M", S.blue],
            ["Token", "None", S.purple],
            ["Chains", "Scroll", S.green],
            ["Concentrated", "Live", S.orange],
            ["Rating", "⭐ 4.5", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.cyan }}>What is Scroll DEX?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Scroll DEX (also known as Ambient or CrocSwap) is the native decentralized exchange built on <strong style={{ color: S.text }}>Scroll</strong>, an Ethereum-compatible zkEVM Layer 2 that enables cheap, fast swaps without sacrificing EVM compatibility. It brings concentrated liquidity to Scroll users at a fraction of the cost of Ethereum-based DEXs.
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
            Unlike traditional DEXs, Scroll DEX uses a single unified pool for each token pair, reducing fragmentation and improving capital efficiency through concentrated liquidity mechanisms inspired by Uniswap V3.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.cyan }}>Key Features</h2>
          {[
            ["Concentrated Liquidity", "Provide liquidity in custom price ranges to earn concentrated fees on capital"],
            ["Cross-chain Composability", "Bridge assets from Ethereum or other L2s via Scroll's native bridge"],
            ["Low Gas Costs", "Gas fees 99% lower than Ethereum Mainnet — typical swap costs ~$0.01"],
            ["MEV Protection", "Built-in protections against sandwich attacks via encrypted mempools"],
            ["Single Pool Architecture", "One liquidity pool per pair reduces slippage and improves execution"],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.cyan, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.cyan }}>How to Use Scroll DEX</h2>
          {[
            ["1. Bridge to Scroll", "Use Scroll's official bridge (scroll.io/bridge) to move assets from Ethereum L1 to Scroll L2"],
            ["2. Connect Wallet", "Visit the Scroll DEX dApp → Connect with MetaMask, WalletConnect, or other EVM wallets with Scroll RPC"],
            ["3. Add Scroll Network", "Ensure Scroll mainnet is added: chainid 534352, RPC scroll.io"],
            ["4. Swap Tokens", "Select input/output tokens, confirm the swap, and approve with gas costs under 1 cent"],
            ["5. Provide Liquidity (Optional)", "Deposit equal values of two tokens in a custom price range to earn swap fees"],
          ].map(([step, desc]) => (
            <div key={String(step)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.cyan, fontSize: 13, marginBottom: 4 }}>{step}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.cyan }}>Risks & Considerations</h2>
          <div style={{ background: `${S.orange}10`, border: `1px solid ${S.orange}40`, borderRadius: 10, padding: "16px 18px" }}>
            <div style={{ color: S.text2, lineHeight: 1.8, fontSize: 13 }}>
              <strong style={{ color: S.orange }}>Bridge Risk:</strong> Assets must be bridged to Scroll; bridge failures or delays could trap capital temporarily.<br/><br/>
              <strong style={{ color: S.orange }}>Liquidity Risk:</strong> Scroll DEX has lower liquidity than Ethereum, so large orders may experience slippage.<br/><br/>
              <strong style={{ color: S.orange }}>Smart Contract Risk:</strong> Scroll is a relatively new L2; audit thoroughly before depositing large amounts.
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, ${S.cyan}15, ${S.purple}10)`, border: `1px solid ${S.cyan}30`, borderRadius: 14, padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Try Scroll DEX today</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Complete the Scroll DEX quiz and earn +120 XP</div>
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="https://scroll.io/bridge" target="_blank" rel="noopener noreferrer" style={{ padding: "10px 20px", background: S.cyan, color: "#000", borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Bridge to Scroll ↗
            </a>
            <Link href="/quiz" style={{ padding: "10px 20px", background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40`, borderRadius: 8, fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              Take Quiz +120 XP
            </Link>
          </div>
        </div>

        <section style={{ marginTop: 40, paddingTop: 40, borderTop: `1px solid ${S.border}` }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.text }}>Related dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 12 }}>
            {[
              ["SyncSwap", "zkSync Era's leading DEX", "/ecosystem/syncswap"],
              ["Uniswap", "Multi-chain DEX pioneer", "/ecosystem/uniswap"],
              ["PancakeSwap V4", "Multi-chain DEX with V4", "/ecosystem/pancakeswap-v4"],
            ].map(([name, desc, url]) => (
              <Link key={name} href={url} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", textDecoration: "none", cursor: "pointer", transition: "border 0.2s" }}>
                <div style={{ fontWeight: 700, fontSize: 13, color: S.cyan, marginBottom: 4 }}>{name}</div>
                <div style={{ color: S.text2, fontSize: 12 }}>{desc}</div>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}
