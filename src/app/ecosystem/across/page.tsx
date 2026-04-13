'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#06b6d4",
  green: "#3fb950", blue: "#58a6ff", purple: "#bc8cff",
};

export default function AcrossGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Across Protocol</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#06b6d420`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #06b6d440` }}>🌉</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#06b6d420`, color: S.accent, border: `1px solid #06b6d440` }}>Bridge</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#3fb95020`, color: S.green, border: `1px solid #3fb95040` }}>Intent-Based</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#58a6ff20`, color: S.blue, border: `1px solid #58a6ff40` }}>Cross-Chain</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Across Protocol: Fastest Intent-Based Bridge</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+130 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["Volume (30d)", "$3.2B", "#06b6d4"],
            ["Avg Speed", "~2 sec", "#3fb950"],
            ["Token", "$ACX", "#58a6ff"],
            ["Chains", "18+", "#bc8cff"],
            ["Relayer Fee", "~0.06%", "#d29922"],
            ["Rating", "⭐ 4.8", "#d29922"],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Across Protocol?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Across is the fastest cross-chain bridge in DeFi, powered by an <strong style={{ color: S.text }}>intent-based architecture</strong>. Users sign an intent ("bridge 100 USDC from Arbitrum to Base"), and competitive relayers fulfill it instantly from their own capital — often in under 2 seconds. Settlement happens on Ethereum mainnet via UMA's optimistic oracle, with relayers reimbursed on a rolling basis. This design eliminates the slow "burn-and-mint" or "lock-and-unlock" mechanisms of legacy bridges.
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
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>How Across Works</h2>
          <div style={{ background: S.surface2, border: `1px solid #06b6d430`, borderRadius: 12, padding: 20, marginBottom: 20 }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: "1️⃣", label: "User submits intent", desc: "Specifies origin chain, destination chain, token, amount, and max fee willing to pay." },
                { icon: "2️⃣", label: "Relayer fills instantly", desc: "A competitive relayer sends funds on the destination chain from their own inventory — no waiting." },
                { icon: "3️⃣", label: "UMA verifies on Ethereum", desc: "The intent + fill is verified by UMA's optimistic oracle. If valid, the relayer is reimbursed from the Hub Pool." },
                { icon: "4️⃣", label: "LP earns yield", desc: "Liquidity providers in the Hub Pool earn fees from relayer reimbursements — passive cross-chain yield." },
              ].map((step) => (
                <div key={step.icon} style={{ display: "flex", gap: 14 }}>
                  <div style={{ fontSize: 22, flexShrink: 0 }}>{step.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, marginBottom: 3 }}>{step.label}</div>
                    <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{step.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20, color: S.accent }}>How to Bridge with Across</h2>
          {[
            { n: 1, title: "Go to app.across.to", desc: "Connect your wallet. Select source chain (e.g., Ethereum) and destination chain (e.g., Arbitrum)." },
            { n: 2, title: "Select token and amount", desc: "Choose ETH, USDC, USDT, DAI, WBTC, or other supported tokens. The bridge UI shows estimated fees and transfer time." },
            { n: 3, title: "Confirm the transfer", desc: "One transaction on the source chain. Your funds arrive on the destination within seconds in most cases." },
            { n: 4, title: "Provide Liquidity (optional)", desc: "Deposit USDC or ETH into the Hub Pool on Ethereum to earn fees paid by relayers. APY varies with bridge volume." },
          ].map((step) => (
            <div key={step.n} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#06b6d420`, border: `1px solid #06b6d440`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: S.accent, flexShrink: 0 }}>{step.n}</div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{step.title}</div>
                <div style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Supported Chains</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {["Ethereum", "Arbitrum", "Optimism", "Base", "Polygon", "zkSync Era", "Linea", "Scroll", "Mode", "Blast", "Zora", "World Chain", "Redstone", "Lisk", "Aleph Zero", "BOB", "Lens", "Soneium"].map((chain) => (
              <span key={chain} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 8, padding: "6px 12px", fontSize: 13, fontWeight: 600 }}>{chain}</span>
            ))}
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, #06b6d415, #6366f110)`, border: `1px solid #06b6d430`, borderRadius: 14, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: S.text2, marginBottom: 12 }}>Bridge in seconds with Across</div>
          <a href="https://app.across.to" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#0d1117", fontWeight: 700, padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14 }}>Launch Across Bridge →</a>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:ACXUSDT" height={420} />
        </section>

      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/crypto-governance-tokens-explained" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Governance Tokens Explained</a></li>
            <li><a href="/learn/crypto-market-cap-explained" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Market Cap Explained</a></li>
            <li><a href="/learn/crypto-points-programs-pre-token-loyalty-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Points Programs Pre Token Loyalty Guide 2026</a></li>
            <li><a href="/learn/crypto-rug-pull-how-to-avoid" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Rug Pull How To Avoid</a></li>
                      <li><a href="/ecosystem/1inch" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>1inch</a></li>
            <li><a href="/ecosystem/babylon-protocol" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Babylon Protocol</a></li>
                      <li><a href="/ecosystem/balancer" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Balancer</a></li>
            <li><a href="/ecosystem/berachain-dex" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Berachain Dex</a></li>
                      <li><a href="/ecosystem/best-projects-on-sei" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Projects On Sei</a></li>
            <li><a href="/ecosystem/best-projects-on-sui" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Projects On Sui</a></li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
