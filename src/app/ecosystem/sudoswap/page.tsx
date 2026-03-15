'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e",
  accent: "#8e44ad",
  green: "#3fb950", blue: "#58a6ff", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function SudoswapGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Sudoswap</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `#8e44ad20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid #8e44ad40` }}>🔁</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#8e44ad20`, color: "#8e44ad", border: `1px solid #8e44ad40` }}>NFT AMM</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#3fb95020`, color: "#3fb950", border: `1px solid #3fb95040` }}>DeFi</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `#58a6ff20`, color: "#58a6ff", border: `1px solid #58a6ff40` }}>Ethereum</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Sudoswap: NFT AMM Protocol</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>+100 XP · 9 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["Model", "AMM", "#8e44ad"],
            ["Fee", "0.5% protocol", "#3fb950"],
            ["Token", "$SUDO", "#58a6ff"],
            ["Pools", "Active", "#bc8cff"],
            ["Royalties", "0%", "#d29922"],
            ["Rating", "⭐ 4.3", "#d29922"],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase", letterSpacing: "0.05em" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Sudoswap?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }} dangerouslySetInnerHTML={{ __html: "Sudoswap pioneered the NFT AMM model — bringing the Uniswap constant-product formula to NFT trading. Instead of listing NFTs at fixed prices, liquidity providers deposit NFTs + ETH into bonding curve pools that automatically reprice as trades happen. This solves NFT liquidity without order books." }} />
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 20, color: S.accent }}>How to Use Sudoswap</h2>
          <div>

          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#8e44ad20`, border: `1px solid #8e44ad40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#8e44ad", flexShrink: 0 }}>1</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Create a Pool</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Deposit NFTs + ETH into a bonding curve pool. Choose Linear, Exponential, or XYK curve. Set your spread (fee) and initial price.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#8e44ad20`, border: `1px solid #8e44ad40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#8e44ad", flexShrink: 0 }}>2</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Buy from Pools</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>Instantly buy NFTs from any active pool at the current bonding curve price — no waiting for sellers, no negotiations.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#8e44ad20`, border: `1px solid #8e44ad40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#8e44ad", flexShrink: 0 }}>3</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Provide Liquidity</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>LP in two-sided pools (NFTs + ETH) to earn spread fees every time someone buys or sells through your pool.</div>
            </div>
          </div>
          <div style={{ display: "flex", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: "50%", background: `#8e44ad20`, border: `1px solid #8e44ad40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 800, color: "#8e44ad", flexShrink: 0 }}>4</div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: 4 }}>Automated Repricing</div>
              <div style={{ color: "#8b949e", lineHeight: 1.7, fontSize: 14 }}>As NFTs are bought, the pool price rises automatically. As NFTs are sold in, the price drops — always reflecting supply/demand.</div>
            </div>
          </div>
          </div>
        </section>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Risks to Consider</h2>
          <div style={{ background: `#f8514920`, border: "1px solid #f8514940", borderRadius: 12, padding: "20px 24px" }}>
            <ul style={{ color: S.text2, lineHeight: 1.8, paddingLeft: 16 }}>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Impermanent loss risk as NFT prices change</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>0% royalties to creators (controversial)</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Low liquidity in many collections</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Smart contract risk — novel AMM model</li>
            <li style={{ marginBottom: 8, paddingLeft: 8 }}>Less volume than Blur for top collections</li>
            </ul>
          </div>
        </section>

        <div style={{ background: `#8e44ad10`, border: `1px solid #8e44ad30`, borderRadius: 16, padding: "24px", marginBottom: 40, display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 16 }}>
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
          <TradingViewChart symbol="BINANCE:SUDOUSDT" height={420} />
        </section>

      </article>
    </main>
  );
}
