'use client';
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';
import Diagram from '@/components/Diagram';
import AutoTOC from '@/components/AutoTOC';
import ReadingTime from '@/components/ReadingTime';
import LastUpdated from '@/components/LastUpdated';

const S = {
  bg: "#0d1117", border: "#30363d", text: "#e6edf3", text2: "#8b949e",
  blue: "#58a6ff", green: "#3fb950", orange: "#f0883e",
  yellow: "#d29922", purple: "#bc8cff", cyan: "#06b6d4",
};

const breadcrumbs = [
  { label: "Home", href: "/" }, { label: "Learn", href: "/learn" },
  { label: "Liquid Staking (LSDs)", href: "/learn/liquid-staking-derivatives" },
];

const LSD_TABLE = [
  ["Lido (stETH)", "Ethereum", "~8.7M ETH staked (~28% of all staked ETH)", "2.8–4.2% APR", "Multi-sig + DAO"],
  ["Rocket Pool (rETH)", "Ethereum", "Permissionless node operators (16 ETH min)", "3.1–4.5% APR", "8 ETH bond + RPL"],
  ["Jito (JitoSOL)", "Solana", "MEV-boosted staking via Jito protocol", "7–9% APR", "MEV tip sharing"],
  ["Marinade (mSOL)", "Solana", "Stake to 450+ validators, DeFi integration", "6–8% APR", "Directed stake auction"],
  ["Frax ETH (frxETH)", "Ethereum", "Two-token model: frxETH + sfrxETH", "4–5.5% APR", "Frax validator set"],
  ["Ankr (ankrETH)", "Multi-chain", "Cross-chain LSD across ETH, BNB, AVAX, MATIC", "Varies by chain", "DeFi integrations"],
];

export default function LiquidStakingDerivativesPage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>
      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>💧 LSDs</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.green}20`, color: S.green, border: `1px solid ${S.green}40` }}>Staking</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 14, 2026 · 15 min read · +125 XP</span>
          </div>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Liquid Staking Derivatives (LSDs) 2026: Lido, Rocket Pool, Jito & How to Earn Yield
          </h1>
          <LastUpdated pathKey="/learn/liquid-staking-derivatives" />
          <ReadingTime />
          <AutoTOC />
          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75 }}>
            Liquid staking lets you earn PoS staking rewards while keeping your assets liquid for DeFi. Instead of locking ETH or SOL
            in a validator, you receive a receipt token (stETH, rETH, JitoSOL) that accrues value and can be used across DeFi.
            This guide covers how LSDs work, the top protocols, risks, and how to use them to maximise yield.
          </p>
        </header>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.blue }}>The Problem LSDs Solve</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Staking Ethereum natively requires 32 ETH (~$100K+), technical validator setup, and keeping funds locked until unstaking
            (which takes days). Liquid staking protocols pool deposits, run validators on your behalf, and issue a receipt token
            representing your stake + accrued rewards. This token is liquid — you can sell, lend, use as collateral, or provide
            liquidity at any time.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We wrote this guide because the existing explanations online are either too simplified or assume PhD-level knowledge. Neither serves most readers.
          </p>
        </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.blue }}>Top LSD Protocols (2026)</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Protocol", "Chain", "Model", "Yield (approx)", "Security"].map((h) => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 11 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {LSD_TABLE.map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 12px", color: j === 0 ? S.blue : S.text2 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.blue }}>Restaking: LSDs on Steroids</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Restaking (pioneered by EigenLayer) lets you use your stETH or native ETH to simultaneously secure other protocols
            (AVSs — Actively Validated Services) and earn additional yield. In 2026, restaking is mainstream:
            EigenLayer has $15B+ TVL, and competitors like Symbiotic and Karak are live on multiple chains.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { label: "Base staking APR", value: "3–4%", color: S.green },
              { label: "Restaking bonus APR", value: "+1–6%", color: S.blue },
              { label: "Combined yield target", value: "5–10% APR", color: S.purple },
              { label: "Risk multiplier", value: "2–3× slashing exposure", color: S.orange },
            ].map((item) => (
              <div key={item.label} style={{ background: "#161b22", border: `1px solid ${S.border}`, borderRadius: 10, padding: "14px" }}>
                <div style={{ fontSize: 11, color: S.text2, marginBottom: 4 }}>{item.label}</div>
                <div style={{ fontWeight: 700, color: item.color, fontSize: 18 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 12, color: S.blue }}>Risks of Liquid Staking</h2>
          {[
            { title: "Smart contract risk", body: "If Lido's contracts are hacked, all stETH holders are affected. Audits and bug bounties reduce — but don't eliminate — this risk." },
            { title: "De-peg risk", body: "stETH should trade 1:1 with ETH but can temporarily de-peg during market stress (as seen in June 2022, stETH briefly hit 0.93 ETH). Restakers have additional de-peg vectors." },
            { title: "Centralisation", body: "Lido controls ~30% of all staked ETH, creating systemic risk for Ethereum's consensus. The community has actively debated Lido's dominance." },
            { title: "Slashing", body: "If a validator misbehaves (double-signing, downtime), a portion of staked ETH is slashed. LSD protocols absorb this pro-rata across all depositors." },
          ].map((item) => (
            <div key={item.title} style={{ background: "#161b22", border: `1px solid #f8514930`, borderLeft: `3px solid #f85149`, borderRadius: 8, padding: "12px 16px", marginBottom: 10 }}>
              <div style={{ fontWeight: 700, color: "#f85149", marginBottom: 4, fontSize: 13 }}>⚠️ {item.title}</div>
              <div style={{ fontSize: 13, color: S.text2 }}>{item.body}</div>
            </div>
          ))}
        </section>

        <section style={{ background: `linear-gradient(135deg,${S.blue}10,${S.purple}10)`, border: `1px solid ${S.blue}30`, borderRadius: 14, padding: "24px 28px" }}>
          <h3 style={{ fontWeight: 800, marginBottom: 8, color: S.text }}>💧 Key takeaway</h3>
          <p style={{ color: S.text2, lineHeight: 1.8, fontSize: 14 }}>
            Liquid staking is one of the most capital-efficient ways to earn yield in crypto: you get staking rewards while
            keeping your ETH or SOL liquid for DeFi. For most users, stETH (Lido) or rETH (Rocket Pool for decentralisation)
            is the entry point. Adding restaking boosts yield but adds complexity and slashing risk — only go there once you
            understand the base layer.
          </p>
        </section>
      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/investing/best-infrastructure-crypto-tokens" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Infrastructure Crypto Tokens</a></li>
            <li><a href="/investing/best-rwa-crypto-tokens-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Rwa Crypto Tokens 2026</a></li>
            <li><a href="/investing/crypto-index-fund-guide" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Index Fund Guide</a></li>
            <li><a href="/investing/crypto-structured-products-guide" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Structured Products Guide</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Liquid Staking Derivatives",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/liquid-staking-derivatives"
            })
          }}
        />
      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/learn/undercollateralized-defi-lending-onchain-credit-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Undercollateralized Defi Lending Onchain Credit Guide 2026</a>
        </nav>
      <Diagram slug="staking-rewards" />
      <RelatedContent category="learn" currentSlug="/learn/liquid-staking-derivatives" />
    </main>
  );
}
