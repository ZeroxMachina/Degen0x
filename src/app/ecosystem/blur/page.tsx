'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e",
  accent: "#f0883e",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function BlurGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Blur</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#f0883e20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #f0883e40` }}>💨</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#f0883e20`, color: "#f0883e", border: `1px solid #f0883e40` }}>NFT Marketplace</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#58a6ff20`, color: "#58a6ff", border: `1px solid #58a6ff40` }}>Ethereum</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#bc8cff20`, color: "#bc8cff", border: `1px solid #bc8cff40` }}>Pro Trading</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Blur: The Pro NFT Marketplace</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+100 XP · 9 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["Volume", "#1 NFT DEX", "#f0883e"],
            ["Fee", "0%", "#3fb950"],
            ["Token", "$BLUR", "#58a6ff"],
            ["Royalties", "Optional", "#bc8cff"],
            ["Speed", "Real-time", "#d29922"],
            ["Rating", "⭐ 4.6", "#d29922"],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Blur?</h2>
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
          <p style={{ color: S.text2, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Blur is the dominant professional NFT marketplace on Ethereum, capturing over 70% of NFT trading volume in 2025. It was built specifically for NFT traders — not collectors — with real-time price feeds, sweep tools, portfolio analytics, and a bidding pool system that makes market-making NFTs competitive with DeFi." }} />
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20, color: S.accent }}>How to Use Blur</h2>
          <div>

          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#f0883e20`, border: `1px solid #f0883e40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#f0883e", flexShrink: 0 }}>1</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Connect Wallet</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Connect MetaMask or any WalletConnect wallet. Blur aggregates listings from OpenSea, X2Y2, and LooksRare automatically.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#f0883e20`, border: `1px solid #f0883e40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#f0883e", flexShrink: 0 }}>2</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Trade NFTs</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Use the pro trading interface with real-time floor price feeds, trait rarity filters, and one-click sweep to buy multiple NFTs.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#f0883e20`, border: `1px solid #f0883e40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#f0883e", flexShrink: 0 }}>3</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Bid & Earn $BLUR</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Place collection bids to earn $BLUR tokens through Blur's ongoing airdrop seasons. Higher bids earn more rewards.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#f0883e20`, border: `1px solid #f0883e40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#f0883e", flexShrink: 0 }}>4</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Analytics</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Track your P&L, floor price trends, and collection depth charts to make data-driven trading decisions.</div>
            </div>
          </div>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Risks to Consider</h2>
          <div style={{ background: `#f8514920`, border: "1px solid #f8514940", borderRadius: 12, padding: "20px 24px" }}>
            <ul style={{ color: S.text2, lineHeight: 1.8, paddingLeft: 16 }}>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>NFT liquidity is thin — can't always exit at listed price</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>$BLUR token rewards may dilute value</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>0% creator royalties is controversial and may harm creators</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Smart contract risk</li>
            </ul>
          </div>
        </section>

        <div style={{ background: `#f0883e10`, border: `1px solid #f0883e30`, borderRadius: 16, padding: "24px", marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
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
          <TradingViewChart symbol="COINBASE:BLURUSD" height={420} />
        </section>

      </article>
    </main>
  );
}
