'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#bc8cff",
};

export default function SocketGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link><span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link><span>/</span>
        <span style={{ color: S.text }}>Socket / Bungee</span>
      </div>
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#bc8cff20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #bc8cff40` }}>🔌</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              {[["Bridge Aggregator","#bc8cff20","#bc8cff","#bc8cff40"],["API Infrastructure","#58a6ff20","#58a6ff","#58a6ff40"]].map(([tag,bg,col,border]) => (
                <span key={String(tag)} style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: String(bg), color: String(col), border: `1px solid ${String(border)}` }}>{String(tag)}</span>
              ))}
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Socket: The Cross-Chain Infrastructure Layer</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+120 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["Vol Routed","$8B+","#bc8cff"],["Bridges","20+","#3fb950"],["Chains","25+","#58a6ff"],["Apps Built","300+","#f0883e"],["Token","$SOCKET","#d29922"],["Rating","⭐ 4.5","#d29922"]].map(([l,v,c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Socket?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Socket is the infrastructure layer for cross-chain interoperability — a <strong style={{ color: S.text }}>bridge aggregator and developer toolkit</strong> that connects to 20+ bridges and routes through the best path for any given transfer. Bungee Exchange is Socket's consumer product. Developers integrate Socket's API/SDK to give their users seamless bridging without managing multiple bridge integrations. Socket also provides <strong style={{ color: S.text }}>Socket DL (Data Layer)</strong> for generalized cross-chain messaging.
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Products</h2>
          {[
            { name: "Bungee Exchange", desc: "Consumer-facing bridge UI that aggregates Across, Stargate, Hop, deBridge, CCTP, and more. Shows you the best route by fee, speed, or output amount." },
            { name: "Socket API / Widget", desc: "Developers embed Socket's bridge widget or call the API to route cross-chain transfers. Used by Rainbow Wallet, Biconomy, and 300+ protocols." },
            { name: "Socket DL", desc: "General message passing infrastructure. Send arbitrary calldata across chains with Socket's validator network verifying delivery." },
            { name: "Plug Framework", desc: "Composable cross-chain app framework. Chain abstraction for end users — they interact from any chain, the protocol executes on the target chain automatically." },
          ].map((item) => (
            <div key={item.name} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
              <div style={{ fontWeight: 700, color: S.accent, marginBottom: 6 }}>{item.name}</div>
              <div style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{item.desc}</div>
            </div>
          ))}
        </section>

        <div style={{ background: `linear-gradient(135deg, #bc8cff15, #6366f110)`, border: `1px solid #bc8cff30`, borderRadius: 14, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: S.text2, marginBottom: 12 }}>Find the best bridge route with Bungee</div>
          <a href="https://www.bungee.exchange" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#0d1117", fontWeight: 700, padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14 }}>Launch Bungee →</a>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:SOCKETUSDT" height={420} />
        </section>

      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/institutional-defi-onchain-finance-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Institutional Defi Onchain Finance Guide 2026</a></li>
            <li><a href="/learn/layer-2-crypto-explained" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Layer 2 Crypto Explained</a></li>
            <li><a href="/learn/lombard-finance-lbtc-bitcoin-liquid-staking-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Lombard Finance Lbtc Bitcoin Liquid Staking Guide 2026</a></li>
            <li><a href="/learn/merkle-tree-blockchain-explained" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Merkle Tree Blockchain Explained</a></li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
