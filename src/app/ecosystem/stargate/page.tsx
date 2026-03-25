'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#58a6ff",
};

export default function StargateGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link><span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link><span>/</span>
        <span style={{ color: S.text }}>Stargate Finance</span>
      </div>
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32, flexWrap: "wrap" }}>
          <div style={{ width: 64, height: 64, background: `#58a6ff20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #58a6ff40` }}>⭐</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              {[["LayerZero OFT","#f0883e20","#f0883e","#f0883e40"],["Stablecoin Bridge","#58a6ff20","#58a6ff","#58a6ff40"],["Yield","#3fb95020","#3fb950","#3fb95040"]].map(([tag,bg,col,border]) => (
                <span key={String(tag)} style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: String(bg), color: String(col), border: `1px solid ${String(border)}` }}>{String(tag)}</span>
              ))}
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Stargate Finance V2: Unified Liquidity Bridge</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+130 XP · 11 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["TVL","$420M","#58a6ff"],["Vol (30d)","$1.8B","#3fb950"],["Token","$STG","#d29922"],["Chains","15+","#bc8cff"],["Pools","Unified","#06b6d4"],["Rating","⭐ 4.6","#d29922"]].map(([l,v,c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Stargate Finance?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Stargate is the premier <strong style={{ color: S.text }}>unified liquidity bridge</strong> built on LayerZero. Its breakthrough innovation was solving the "impossible triangle" of bridges: guaranteed finality, instant finality, and unified liquidity — all at once. Stargate V2 moved all liquidity into <strong style={{ color: S.text }}>OFT (Omnichain Fungible Token)</strong> pools, meaning USDC on Ethereum and USDC on Arbitrum share the same unified liquidity — no fragmentation, no slippage from rebalancing.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Why Stargate is Different</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {[
              { icon: "🔒", title: "Guaranteed Finality", desc: "Unlike bridges that can fail and leave you with wrapped tokens, Stargate guarantees your destination assets arrive or your source assets are returned." },
              { icon: "⚡", title: "Instant Finality", desc: "Transactions complete in seconds, not minutes. No waiting for block confirmations or validator signatures." },
              { icon: "💧", title: "Unified Liquidity", desc: "One pool shared across all chains for each asset. No per-route fragmentation. Deep liquidity for USDC, USDT, ETH, and more." },
              { icon: "📈", title: "LP Yield", desc: "Deposit USDC or ETH into Stargate pools and earn real yield from bridging fees + protocol emissions." },
            ].map((item) => (
              <div key={item.title} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 22, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, #58a6ff15, #06b6d410)`, border: `1px solid #58a6ff30`, borderRadius: 14, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: S.text2, marginBottom: 12 }}>Bridge stablecoins and ETH with Stargate V2</div>
          <a href="https://stargate.finance" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#0d1117", fontWeight: 700, padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14 }}>Launch Stargate →</a>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:STGUSDT" height={420} />
        </section>

      </article>
    </main>
  );
}
