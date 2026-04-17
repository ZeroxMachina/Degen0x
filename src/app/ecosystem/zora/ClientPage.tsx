'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e",
  accent: "#9b59b6",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function ZoraGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Zora</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#9b59b620`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #9b59b640` }}>🔮</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#9b59b620`, color: "#9b59b6", border: `1px solid #9b59b640` }}>NFT Creation</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#3fb95020`, color: "#3fb950", border: `1px solid #3fb95040` }}>Creator Economy</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#58a6ff20`, color: "#58a6ff", border: `1px solid #58a6ff40` }}>L2</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Zora: Creator-First NFT Protocol</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+90 XP · 8 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["Network", "Zora Network (L2)", "#9b59b6"],
            ["Fee", "Sparks only", "#3fb950"],
            ["Mints", "100M+", "#58a6ff"],
            ["Creators", "50K+", "#bc8cff"],
            ["Gas", "~$0.001", "#d29922"],
            ["Rating", "⭐ 4.6", "#d29922"],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Zora?</h2>
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
          <p style={{ color: S.text2, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Zora is a creator-first NFT protocol with its own L2 blockchain (Zora Network) built on the OP Stack. It focuses on making NFT minting nearly free ($0.001 gas fees), enabling creators to mint anything — art, music, writing, memes — as on-chain media with minimal friction." }} />
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20, color: S.accent }}>How to Use Zora</h2>
          <div>

          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#9b59b620`, border: `1px solid #9b59b640`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#9b59b6", flexShrink: 0 }}>1</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Create on Zora</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Upload any media file (image, video, audio, text). Choose free mint or paid editions. Zora handles all contract deployment automatically.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#9b59b620`, border: `1px solid #9b59b640`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#9b59b6", flexShrink: 0 }}>2</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Collect with Sparks</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Collectors pay tiny 'Sparks' fees (~0.000777 ETH per mint) which go to creators and the Zora Protocol treasury.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#9b59b620`, border: `1px solid #9b59b640`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#9b59b6", flexShrink: 0 }}>3</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Earn as Creator</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Creators earn 50% of mint fees plus secondary royalties. The protocol takes a small split to fund development.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#9b59b620`, border: `1px solid #9b59b640`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#9b59b6", flexShrink: 0 }}>4</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Bridge Assets</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Bridge ETH to Zora Network via the official bridge for near-zero gas fees. Bridge back anytime.</div>
            </div>
          </div>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Risks to Consider</h2>
          <div style={{ background: `#f8514920`, border: "1px solid #f8514940", borderRadius: 12, padding: "20px 24px" }}>
            <ul style={{ color: S.text2, lineHeight: 1.8, paddingLeft: 16 }}>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Zora Network is a newer L2 — bridge risk exists</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Low secondary market liquidity compared to Ethereum L1</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Creator market is noisy — hard to stand out</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Token/governance still evolving</li>
            </ul>
          </div>
        </section>

        <div style={{ background: `#9b59b610`, border: `1px solid #9b59b630`, borderRadius: 16, padding: "24px", marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: 16, marginBottom: 4 }}>Earn +90 XP for reading this guide</div>
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
          <TradingViewChart symbol="COINBASE:ETHUSD" height={420} />
        </section>

      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/ecosystem/sonic-finance" style={{ color: "#fb923c", marginRight: "1rem" }}>Sonic Finance</a>
        
          <a href="/spending/reviews/travala" style={{ color: "#fb923c", marginRight: "1rem" }}>Travala</a>
        </nav>
    </main>
  );
}
