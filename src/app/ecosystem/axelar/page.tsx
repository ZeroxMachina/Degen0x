'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#06b6d4",
};

export default function AxelarGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link><span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link><span>/</span>
        <span style={{ color: S.text }}>Axelar</span>
      </div>
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#06b6d420`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #06b6d440` }}>🌐</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              {[["Cross-Chain","#06b6d420","#06b6d4","#06b6d440"],["Cosmos","#bc8cff20","#bc8cff","#bc8cff40"],["GMP","#3fb95020","#3fb950","#3fb95040"]].map(([tag,bg,col,border]) => (
                <span key={String(tag)} style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: String(bg), color: String(col), border: `1px solid ${String(border)}` }}>{String(tag)}</span>
              ))}
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Axelar: General Message Passing for Web3</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+140 XP · 12 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["Chains","65+","#06b6d4"],["Validators","75+","#3fb950"],["Token","$AXL","#58a6ff"],["GMP Calls","50M+","#bc8cff"],["Vol Bridged","$12B+","#d29922"],["Rating","⭐ 4.6","#d29922"]].map(([l,v,c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Axelar?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Axelar is a Cosmos-based blockchain that specializes in cross-chain communication — its validator set (75+ nodes staking $AXL) collectively signs and relays messages between 65+ chains including all major EVMs, Cosmos chains (IBC), Solana, Sui, and Aptos. Axelar's key product is <strong style={{ color: S.text }}>General Message Passing (GMP)</strong> — which lets any contract on chain A call any contract on chain B with arbitrary data and token transfers in a single transaction. Squid Router, Satellite Bridge, and dozens of DeFi protocols are built on Axelar GMP.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Core Products</h2>
          {[
            { name: "Satellite Bridge", desc: "Axelar's own bridge UI. Transfer canonical tokens across all supported chains. Wrapped assets are axlUSDC, axlETH, axlBTC — redeemable 1:1 on Ethereum." },
            { name: "General Message Passing (GMP)", desc: "Developers call any contract cross-chain. One SDK, one integration, 65+ chains supported. Used by Osmosis, Frax, Lido, and more." },
            { name: "Squid Router", desc: "Built on Axelar — single-click cross-chain swaps. Swap any token on any chain to any token on any other chain in one transaction." },
            { name: "Interchain Token Service (ITS)", desc: "Like NTT but for Axelar — deploy tokens as native multichain assets with canonical supply across all Axelar chains." },
          ].map((item) => (
            <div key={item.name} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
              <div style={{ fontWeight: 700, color: S.accent, marginBottom: 6 }}>{item.name}</div>
              <div style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{item.desc}</div>
            </div>
          ))}
        </section>

        <div style={{ background: `linear-gradient(135deg, #06b6d415, #6366f110)`, border: `1px solid #06b6d430`, borderRadius: 14, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: S.text2, marginBottom: 12 }}>Bridge with Satellite or use Squid for cross-chain swaps</div>
          <a href="https://app.squidrouter.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#0d1117", fontWeight: 700, padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14 }}>Try Squid Router →</a>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="COINBASE:AXLUSD" height={420} />
        </section>

      </article>
    </main>
  );
}
