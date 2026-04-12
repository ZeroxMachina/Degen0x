'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#d29922",
};

export default function DebridgeGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link><span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link><span>/</span>
        <span style={{ color: S.text }}>deBridge</span>
      </div>
      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#d2992220`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #d2992240` }}>⚡</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
              {[["Intent Bridge","#d2992220","#d29922","#d2992240"],["Solana","#3fb95020","#3fb950","#3fb95040"]].map(([tag,bg,col,border]) => (
                <span key={String(tag)} style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: String(bg), color: String(col), border: `1px solid ${String(border)}` }}>{String(tag)}</span>
              ))}
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>deBridge: The Zero-Slippage Cross-Chain Protocol</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+120 XP · 10 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["Vol (30d)","$800M+","#d29922"],["Chains","20+","#3fb950"],["Token","$DBR","#58a6ff"],["Solana","✅ Supported","#bc8cff"],["Speed","~5 sec","#06b6d4"],["Rating","⭐ 4.5","#d29922"]].map(([l,v,c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is deBridge?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            deBridge is a high-performance cross-chain interoperability protocol that enables zero-slippage asset transfers using an <strong style={{ color: S.text }}>intent-based model</strong> with professional market makers (takers). Users post an order, takers compete to fill it at the best rate, and settlement is atomic. deBridge is one of the few protocols supporting <strong style={{ color: S.text }}>Solana ↔ EVM</strong> transfers with true native assets — no wrapped token intermediaries.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1005', border: '1px solid #4a2c10', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🌐</span>
            <strong style={{ color: '#fb923c', fontSize: 15 }}>Ecosystem Watch</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Ecosystem strength is the best leading indicator of L1/L2 value. We track developer activity, unique addresses, and TVL growth — not just token price.
          </p>
        </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>deBridge DLN (Decentralized Limit Network)</h2>
          <div style={{ background: S.surface2, border: `1px solid #d2992230`, borderRadius: 12, padding: 20 }}>
            <p style={{ color: S.text2, lineHeight: 1.7, marginBottom: 12 }}>
              DLN is deBridge's flagship product: a cross-chain order book where market makers fulfill user orders from their own inventory. Think of it as a limit order book, but cross-chain.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { step: "Order Posted", desc: "User creates a signed order specifying: give token + chain, receive token + chain, amount, and acceptable rate." },
                { step: "Takers Compete", desc: "Professional market makers monitor the DLN order book and fill orders that meet their criteria instantly." },
                { step: "Atomic Settlement", desc: "Both legs settle atomically — taker delivers on destination, and is reimbursed on source. If not filled, order expires and funds return." },
              ].map((item) => (
                <div key={item.step} style={{ display: "flex", gap: 12 }}>
                  <div style={{ background: `#d2992220`, border: `1px solid #d2992240`, borderRadius: 8, padding: "4px 10px", fontSize: 12, fontWeight: 700, color: S.accent, flexShrink: 0, alignSelf: "flex-start" }}>{item.step}</div>
                  <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, #d2992215, #f0883e10)`, border: `1px solid #d2992230`, borderRadius: 14, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: S.text2, marginBottom: 12 }}>Bridge with zero slippage via deBridge DLN</div>
          <a href="https://app.debridge.finance" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#0d1117", fontWeight: 700, padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14 }}>Launch deBridge →</a>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:DBRUSDT" height={420} />
        </section>

      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/crypto-portfolio-construction-position-sizing-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Portfolio Construction Position Sizing Guide 2026</a></li>
            <li><a href="/learn/crypto-staking-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Staking Guide 2026</a></li>
            <li><a href="/learn/dao-governance-onchain-voting-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Dao Governance Onchain Voting Guide 2026</a></li>
            <li><a href="/learn/decentralized-storage-filecoin-arweave-ipfs-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Decentralized Storage Filecoin Arweave Ipfs Guide 2026</a></li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
