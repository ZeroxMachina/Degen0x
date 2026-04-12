'use client';
import Link from "next/link";
import TradingViewChart from "@/components/TradingViewChart";

const S = {
  bg: "#0d1117", surface: "#161b22", surface2: "#1c2330", border: "#30363d",
  text: "#e6edf3", text2: "#8b949e", accent: "#0ea5e9", blue: "#58a6ff",
  green: "#3fb950", orange: "#f0883e", yellow: "#d29922", purple: "#bc8cff",
};

export default function KaminoGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh", fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, padding: "16px 24px", display: "flex", gap: 8, fontSize: 13, color: S.text2 }}>
        <Link href="/" style={{ color: S.text2, textDecoration: "none" }}>Home</Link>
        <span>/</span>
        <Link href="/ecosystem" style={{ color: S.text2, textDecoration: "none" }}>Ecosystem</Link>
        <span>/</span>
        <span style={{ color: S.text }}>Kamino Finance</span>
      </div>

      <article style={{ maxWidth: 860, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 32 }}>
          <div style={{ width: 64, height: 64, background: `${S.accent}20`, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, border: `1px solid ${S.accent}40` }}>🌊</div>
          <div>
            <div style={{ display: "flex", gap: 8, marginBottom: 8, flexWrap: "wrap" }}>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.accent}20`, color: S.accent, border: `1px solid ${S.accent}40` }}>Lending</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Solana</span>
              <span style={{ fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Liquidity</span>
            </div>
            <h1 style={{ fontSize: "2rem", fontWeight: 900, lineHeight: 1.2, margin: 0 }}>Kamino Finance: Solana's DeFi Super-App</h1>
            <p style={{ margin: "8px 0 0", color: S.text2, fontSize: 14 }}>Lending, liquidity & leverage on Solana · +140 XP · 11 min read · Updated March 2026</p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 12, marginBottom: 40 }}>
          {[
            ["TVL", "$1.8B", S.accent],
            ["Lend APY", "Up to 18%", S.green],
            ["Token", "$KMNO", S.purple],
            ["Chain", "Solana", S.blue],
            ["Markets", "20+ assets", S.orange],
            ["Rating", "⭐ 4.7", S.yellow],
          ].map(([label, value, color]) => (
            <div key={String(label)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px" }}>
              <div style={{ fontSize: 11, color: S.text2, textTransform: "uppercase" }}>{label}</div>
              <div style={{ fontSize: 20, fontWeight: 800, color: String(color), marginTop: 4 }}>{value}</div>
            </div>
          ))}
        </div>

        <section style={{ marginBottom: 36 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 12, color: S.accent }}>What is Kamino?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 14 }}>
            Kamino Finance is Solana's leading DeFi platform combining lending, automated liquidity management, and leverage products. Starting as a CLMM liquidity vault optimizer (auto-compounding Orca/Raydium CLMM positions), Kamino expanded into <strong style={{ color: S.text }}>Kamino Lend</strong> — now the largest lending market on Solana with $1.8B TVL.
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
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16, color: S.accent }}>Products</h2>
          {[
            ["Kamino Lend", "Supply assets (SOL, USDC, jitoSOL, mSOL, USDT, BTC) to earn yield. Borrow against collateral. Supports eMode (elevated LTV for correlated assets like SOL LSTs)."],
            ["Multiply (Looping)", "One-click leverage on SOL LSTs. Deposit jitoSOL, borrow USDC, buy more jitoSOL — all in one transaction. Target 2–4× amplified staking yield."],
            ["Liquidity Vaults", "Auto-compound CLMM positions on Orca and Raydium. Vault rebalances the price range automatically so LPs never need to manage positions."],
            ["Points & KMNO", "Kamino rewards active users with KMNO tokens via points system. Lending, borrowing, and providing liquidity all generate points redeemable for governance tokens."],
          ].map(([title, desc]) => (
            <div key={String(title)} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: S.accent, fontSize: 13, marginBottom: 4 }}>{title}</div>
              <div style={{ color: S.text2, fontSize: 13, lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 800, marginBottom: 16 }}>Live Price Chart — $KMNO</h2>
          <TradingViewChart symbol="BINANCE:KMNOUSDT" height={420} />
        </section>

        <div style={{ background: `${S.accent}10`, border: `1px solid ${S.accent}30`, borderRadius: 12, padding: "20px 24px", textAlign: "center" }}>
          <p style={{ color: S.text2, fontSize: 14, marginBottom: 12 }}>Lend, borrow and earn on Solana</p>
          <a href="https://app.kamino.finance" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: S.accent, color: "#fff", padding: "10px 28px", borderRadius: 8, fontWeight: 700, textDecoration: "none", fontSize: 14 }}>
            Open Kamino →
          </a>
        </div>
      
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/learn/story-protocol-ip-tokenization-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Story Protocol Ip Tokenization Guide 2026</a></li>
            <li><a href="/learn/tokenized-treasuries-t-bills-on-chain-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Tokenized Treasuries T Bills On Chain Guide 2026</a></li>
            <li><a href="/learn/usual-protocol-usd0-rwa-stablecoin-guide-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Usual Protocol Usd0 Rwa Stablecoin Guide 2026</a></li>
            <li><a href="/learn/what-is-a-crypto-faucet" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>What Is A Crypto Faucet</a></li>
          </ul>
        </nav>
      </article>
    </main>
  );
}
