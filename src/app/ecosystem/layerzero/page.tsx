'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#f0883e",
  green: "#3fb950", blue: "#58a6ff", purple: "#bc8cff",
};

export default function LayerZeroGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link><span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link><span>/</span>
        <span style={{ color: S.text }}>LayerZero</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#f0883e20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #f0883e40` }}>🔮</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              {["Messaging Protocol", "Omnichain", "Infrastructure"].map((tag, i) => {
                const colors = [["#f0883e20","#f0883e","#f0883e40"],["#58a6ff20","#58a6ff","#58a6ff40"],["#bc8cff20","#bc8cff","#bc8cff40"]];
                const [bg, col, border] = colors[i];
                return <span key={tag} style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: bg, color: col, border: `1px solid ${border}` }}>{tag}</span>;
              })}
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>LayerZero V2: The Omnichain Messaging Standard</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+150 XP · 14 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[["Chains", "100+", "#f0883e"],["Messages Sent", "200M+", "#3fb950"],["Token", "$ZRO", "#58a6ff"],["Protocols Built", "50,000+", "#bc8cff"],["Valuation", "$3B", "#d29922"],["Rating", "⭐ 4.7", "#d29922"]].map(([l, v, c]) => (
            <div key={String(l)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 800, color: String(c), marginTop: 4 }}>{v}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is LayerZero?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            LayerZero is the dominant omnichain messaging protocol — the communication layer that lets smart contracts on one blockchain send arbitrary data to contracts on any other blockchain. It's not a bridge itself; it's the <strong style={{ color: S.text }}>infrastructure that bridges, DeFi protocols, and NFT projects build on</strong>. LayerZero V2 introduced a configurable security model where each OApp (omnichain app) can choose its own DVN (Decentralized Verifier Network) for message verification — trading off security, speed, and cost.
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
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Core Concepts</h2>
          {[
            { title: "OApp (Omnichain App)", desc: "Any contract that inherits LayerZero's OApp standard. Can send and receive messages across 100+ chains. Used by Stargate, Radiant, Folks Finance, and thousands more." },
            { title: "OFT (Omnichain Fungible Token)", desc: "The OFT standard lets any ERC-20 token go omnichain natively. Burn on source, mint on dest — no wrapped tokens. Used by $STG, $JOE, $JEWEL, and many more." },
            { title: "DVN (Decentralized Verifier Network)", desc: "Security providers that verify message payloads. Apps choose their DVN configuration — Google Cloud DVN, Chainlink DVN, Polyhedra DVN, or custom combos for maximum trust." },
            { title: "Executor", desc: "Pays for gas on the destination chain on behalf of the user. The message fee covers destination execution automatically." },
          ].map((item) => (
            <div key={item.title} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 18, marginBottom: 12 }}>
              <div style={{ fontWeight: 700, color: S.accent, marginBottom: 6 }}>{item.title}</div>
              <div style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{item.desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>What Users Can Do</h2>
          <p style={{ color: S.text2, lineHeight: 1.7, marginBottom: 16 }}>As an end user, you interact with LayerZero-powered apps, not LayerZero directly. Here's what becomes possible:</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { icon: "🔀", title: "Bridge tokens natively", desc: "OFT bridges (Stargate, Jumper) give you canonical tokens on any chain." },
              { icon: "🏦", title: "Cross-chain lending", desc: "Radiant Capital lets you deposit on Arbitrum and borrow on BSC in one tx." },
              { icon: "🗳️", title: "Cross-chain governance", desc: "Vote on a DAO on Ethereum from your Layer 2 wallet." },
              { icon: "🎮", title: "Omnichain NFTs / Gaming", desc: "Move NFTs between chains without bridges. Ghost of Epics uses this for game assets." },
            ].map((item) => (
              <div key={item.title} style={{ background: S.surface2, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16 }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>{item.title}</div>
                <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <div style={{ background: `linear-gradient(135deg, #f0883e15, #d2992215)`, border: `1px solid #f0883e30`, borderRadius: 14, padding: 24, textAlign: "center" }}>
          <div style={{ fontSize: 14, color: S.text2, marginBottom: 12 }}>Explore the LayerZero omnichain ecosystem</div>
          <a href="https://layerzero.network" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#0d1117", fontWeight: 700, padding: "12px 28px", borderRadius: 10, textDecoration: "none", fontSize: 14 }}>Visit LayerZero →</a>
        </div>
      
        {/* Live Price Chart */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart</h2>
          <TradingViewChart symbol="BINANCE:ZROUSDT" height={420} />
        </section>

      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/tools/defi-yield-optimizer" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Defi Yield Optimizer</a></li>
            <li><a href="/tools/nft-floor-price-tracker" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Nft Floor Price Tracker</a></li>
            <li><a href="/trading/algorithmic-crypto-trading-guide" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Algorithmic Crypto Trading Guide</a></li>
            <li><a href="/trading/crypto-options-trading-strategies" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Options Trading Strategies</a></li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
