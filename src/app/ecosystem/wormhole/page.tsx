'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#bc8cff",
};

export default function WormholeGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link><span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link><span>/</span>
        <span style={{ color: S.text }}>Wormhole</span>
      </div>
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#bc8cff20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #bc8cff40` }}>🌀</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              {[["Bridge", "#bc8cff20","#bc8cff","#bc8cff40"],["Solana","#3fb95020","#3fb950","#3fb95040"],["Multi-Chain","#58a6ff20","#58a6ff","#58a6ff40"]].map(([tag,bg,col,border]) => (
                <span key={String(tag)} style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: String(bg), color: String(col), border: `1px solid ${String(border)}` }}>{String(tag)}</span>
              ))}
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Wormhole: Cross-Chain Messaging for All Blockchains</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+140 XP · 12 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["Chains","30+","#bc8cff"],["Messages","1B+","#3fb950"],["Token","$W","#58a6ff"],["Volume","$40B+ bridged","#d29922"],["Guardians","19","#06b6d4"],["Rating","⭐ 4.5","#d29922"]].map(([l,v,c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Wormhole?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Wormhole is a generic cross-chain messaging protocol connecting 30+ blockchains including Ethereum, Solana, Sui, Aptos, Cosmos, and all major EVM chains. Originally built as a token bridge, it evolved into a full messaging infrastructure. <strong style={{ color: S.text }}>19 Guardian nodes</strong> (run by top validators like Everstake, Figment, P2P) observe and sign messages using a 2/3 supermajority threshold. Wormhole V2 introduced <strong style={{ color: S.text }}>Native Token Transfers (NTT)</strong> — letting protocols move tokens without wrapped assets.
          </p>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Key Products</h2>
          {[
            { name: "Portal Bridge", desc: "The flagship UI for bridging tokens across all Wormhole-connected chains. Supports 100+ tokens. Best for Solana ↔ EVM transfers where no other bridge covers both." },
            { name: "Native Token Transfers (NTT)", desc: "Protocols can make their token natively multichain without wrapped versions. Burn on source, mint on dest. Used by $WEN, $PYTH, $JTO." },
            { name: "Wormhole Connect", desc: "Drop-in React widget that any app can embed to add cross-chain transfers. Used by Jupiter, Phantom, and dozens of DeFi UIs." },
            { name: "Queries", desc: "On-demand data fetching from any chain — read any contract state, any event, any storage slot across all supported networks." },
          ].map((item) => (
            <div key={item.name} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
              <div style={{ fontWeight: 700, color: S.accent, marginBottom: 6 }}>{item.name}</div>
              <div style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{item.desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Historical Context: The $320M Hack</h2>
          <div style={{ background: `#f8514910`, border: `1px solid #f8514930`, borderRadius: 10, padding: 16 }}>
            <p style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>
              In February 2022, Wormhole suffered a $320M exploit on its Solana bridge — the second largest hack in DeFi history. A smart contract bug let an attacker forge fake Guardian signatures to mint 120,000 wETH on Solana without depositing ETH. Jump Crypto (then backing Wormhole) immediately injected $320M to make users whole. The protocol has since undergone multiple audits and implemented defense-in-depth measures. The current codebase is substantially different from the exploited version.
            </p>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, #bc8cff15, #6366f110)`, border: `1px solid #bc8cff30`, borderRadius: 14, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: S.text2, marginBottom: 12 }}>Bridge across 30+ chains with Wormhole</div>
          <a href="https://portalbridge.com" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#0d1117", fontWeight: 700, padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14 }}>Launch Portal Bridge →</a>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:WUSDT" height={420} />
        </section>

      </article>
    </main>
  );
}
