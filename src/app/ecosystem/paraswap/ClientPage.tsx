'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e",
  accent: "#1a73e8",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function ParaSwapGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>ParaSwap</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#1a73e820`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #1a73e840` }}>⚡</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#1a73e820`, color: "#1a73e8", border: `1px solid #1a73e840` }}>DEX Aggregator</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#3fb95020`, color: "#3fb950", border: `1px solid #3fb95040` }}>Multi-chain</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#bc8cff20`, color: "#bc8cff", border: `1px solid #bc8cff40` }}>DeFi</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>ParaSwap: Best-Rate DEX Aggregator</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+100 XP · 8 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["Volume", "$50B+", "#1a73e8"],
            ["Chains", "14+", "#3fb950"],
            ["Token", "$PSP", "#58a6ff"],
            ["Fee", "Positive slippage", "#bc8cff"],
            ["DEXes", "100+", "#d29922"],
            ["Rating", "⭐ 4.6", "#d29922"],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is ParaSwap?</h2>
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
          <p style={{ color: S.text2, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "ParaSwap is a meta-DEX aggregator that routes your swap across 100+ liquidity sources — DEXes, lending protocols, and PMMs — to find the best rate. Its proprietary Augustus algorithm splits trades across multiple routes, often saving 0.3-1%+ on large swaps versus trading on a single DEX." }} />
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20, color: S.accent }}>How to Use ParaSwap</h2>
          <div>

          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#1a73e820`, border: `1px solid #1a73e840`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#1a73e8", flexShrink: 0 }}>1</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Connect & Swap</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Connect your wallet on app.paraswap.io. Enter any token pair and ParaSwap automatically finds the best route across all DEXes and aggregators.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#1a73e820`, border: `1px solid #1a73e840`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#1a73e8", flexShrink: 0 }}>2</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>MultiPath Routing</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Large trades are split across Uniswap V4, Curve, Balancer, and more simultaneously to minimize price impact and slippage.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#1a73e820`, border: `1px solid #1a73e840`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#1a73e8", flexShrink: 0 }}>3</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Positive Slippage</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>If ParaSwap gets a better rate than quoted, the surplus is shared with you (partner) and the protocol — not kept by the aggregator.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#1a73e820`, border: `1px solid #1a73e840`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#1a73e8", flexShrink: 0 }}>4</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>API Integration</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Developers can integrate ParaSwap's API to power best-rate swaps in any wallet, dApp, or protocol.</div>
            </div>
          </div>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Risks to Consider</h2>
          <div style={{ background: `#f8514920`, border: "1px solid #f8514940", borderRadius: 12, padding: "20px 24px" }}>
            <ul style={{ color: S.text2, lineHeight: 1.8, paddingLeft: 16 }}>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Still dependent on underlying DEX liquidity</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Smart contract risk from routing contracts</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>$PSP token has limited current utility</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>MEV exposure on large trades (use private RPC)</li>
            </ul>
          </div>
        </section>

        <div style={{ background: `#1a73e810`, border: `1px solid #1a73e830`, borderRadius: 16, padding: "24px", marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Earn +100 XP for reading this guide</div>
            <div style={{ color: S.text2, fontSize: 13 }}>Take the quiz to test your knowledge and unlock your XP reward.</div>
          </div>
          <Link href="/courses" style={{ background: S.accent, color: "#fff", padding: "10px 24px", borderRadius: 10, fontWeight: 700, fontSize: 14, textDecoration: "none" }}>Take Quiz →</Link>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 24, borderTop: `1px solid ${S.border}`, flexWrap: "wrap", gap: 12 }}>
          <Link href="/ecosystem" style={{ color: S.text2, fontSize: 13, textDecoration: "none" }}>← Back to Ecosystem</Link>
          <Link href="/courses" style={{ color: S.accent, fontSize: 13, fontWeight: 600, textDecoration: "none" }}>Take the full crypto course →</Link>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:PSPUSDT" height={420} />
        </section>

      </article>
    </main>
  );
}
