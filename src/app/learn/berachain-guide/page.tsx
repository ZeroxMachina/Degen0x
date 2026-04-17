'use client';
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';
import AutoTOC from '@/components/AutoTOC';
import ReadingTime from '@/components/ReadingTime';

const S = {
  bg: "var(--color-bg, #0d1117)", border: "var(--glass-border, #30363d)",
  text: "var(--color-text, #e6edf3)", text2: "var(--color-text-secondary, #8b949e)",
  primary: "#F6851B", blue: "#58a6ff", green: "#3fb950", purple: "#bc8cff", yellow: "#d29922",
};

const breadcrumbs = [
  { label: "Home", href: "/" }, { label: "Learn", href: "/learn" },
  { label: "Berachain Guide", href: "/learn/berachain-guide" },
];

export default function BerachainGuidePage() {
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
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>🐻 Berachain</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Proof of Liquidity</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 14, 2026 · 16 min read</span>
          </div>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Berachain Guide 2026: Proof of Liquidity & the Tri-Token Model Explained
          </h1>
          <ReadingTime />
          <AutoTOC />
          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75 }}>
            Berachain is an EVM-compatible L1 with a novel "Proof of Liquidity" (PoL) consensus mechanism that aligns validator incentives with protocol liquidity. Its tri-token model (BERA, BGT, HONEY) creates a unique flywheel for DeFi-native chain security. This guide explains how Berachain works, its tokenomics, and the ecosystem.
          </p>
        </header>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>Proof of Liquidity (PoL)</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Traditional Proof of Stake locks capital for security but provides no benefit to the chain's DeFi ecosystem. Berachain's PoL changes this: instead of locking tokens in a validator contract, users provide liquidity to approved "reward vaults" (DEXes, lending protocols). Validators then direct BGT emissions to these vaults, creating a symbiotic relationship between chain security and DeFi liquidity.
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
          <div style={{ background: `${S.primary}08`, border: `1px solid ${S.primary}25`, borderRadius: 14, padding: 24 }}>
            <div style={{ fontWeight: 800, color: S.primary, marginBottom: 16 }}>PoL Flywheel</div>
            <div style={{ display: "grid", gap: 10 }}>
              {[
                "1. Users provide liquidity to reward vaults (BEX pools, Bend lending, etc.)",
                "2. Validators earn BERA fees and can direct BGT emissions to vaults",
                "3. LPs receive BGT for providing liquidity",
                "4. BGT holders can boost validators → validators direct more BGT to their vaults",
                "5. More BGT → more TVL → more fees → more validators → repeat",
              ].map((s) => (
                <div key={s} style={{ color: S.text2, fontSize: 14, paddingLeft: 8 }}>{s}</div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>The Tri-Token Model</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            {[
              {
                token: "BERA", emoji: "🐻", role: "Gas Token",
                desc: "Paid for all transaction fees. Can be staked to earn protocol fees. Does NOT govern BGT emissions.",
                color: S.primary,
              },
              {
                token: "BGT", emoji: "⭐", role: "Governance Token",
                desc: "Non-transferable (soulbound) governance token earned by providing liquidity. Can be burned for BERA 1:1.",
                color: S.yellow,
              },
              {
                token: "HONEY", emoji: "🍯", role: "Stablecoin",
                desc: "Native over-collateralized stablecoin. Minted by depositing BERA or approved collateral. Pegged to $1.",
                color: "#f0883e",
              },
            ].map((t) => (
              <div key={t.token} style={{ background: `${t.color}10`, border: `1px solid ${t.color}30`, borderRadius: 14, padding: 18 }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{t.emoji}</div>
                <div style={{ fontWeight: 900, color: t.color, fontSize: 18 }}>{t.token}</div>
                <div style={{ fontSize: 11, color: t.color, fontWeight: 700, marginBottom: 8 }}>{t.role}</div>
                <div style={{ fontSize: 12, color: S.text2, lineHeight: 1.6 }}>{t.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Native dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { name: "BEX", type: "DEX", desc: "Native Berachain DEX — the primary reward vault for BGT emissions", color: S.primary },
              { name: "Bend", type: "Lending", desc: "Berachain's native money market — borrow/lend HONEY", color: S.blue },
              { name: "Berps", type: "Perps", desc: "On-chain perpetual exchange native to Berachain", color: S.purple },
              { name: "BGT Station", type: "Governance", desc: "Delegate BGT, vote on emissions, manage validator boosts", color: S.yellow },
            ].map((d) => (
              <div key={d.name} style={{ background: `${d.color}08`, border: `1px solid ${d.color}25`, borderRadius: 10, padding: 14 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, color: d.color }}>{d.name}</span>
                  <span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 4, background: `${d.color}20`, color: d.color }}>{d.type}</span>
                </div>
                <div style={{ fontSize: 12, color: S.text2 }}>{d.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}25`, borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>🐻 Key Takeaways</h2>
          {[
            "Berachain is an EVM L1 with Proof of Liquidity — validators and LPs are aligned, not competing.",
            "Tri-token model: BERA (gas), BGT (soulbound governance, earned by LPs), HONEY (native stablecoin).",
            "BGT cannot be transferred — only earned by providing liquidity to approved reward vaults.",
            "BGT can be burned 1:1 for BERA, creating a floor on BERA's value relative to protocol activity.",
            "The PoL flywheel: more liquidity → more BGT → more validators → more security → more TVL.",
          ].map((pt, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
              <span style={{ color: S.primary, fontWeight: 800, marginTop: 2 }}>✦</span>
              <span style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{pt}</span>
            </div>
          ))}
        </section>
      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/investing/crypto-sector-rotation-strategy" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Sector Rotation Strategy</a></li>
            <li><a href="/tools/altcoin-season-index" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Altcoin Season Index</a></li>
            <li><a href="/tools/crypto-airdrop-tracker" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Airdrop Tracker</a></li>
            <li><a href="/tools/crypto-portfolio-tracker-free" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Portfolio Tracker Free</a></li>
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
              "headline": "Berachain Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/berachain-guide"
            })
          }}
        />
      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/learn/eclipse-svm-ethereum-layer-2-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Eclipse Svm Ethereum Layer 2 Guide 2026</a>
        </nav>
      <RelatedContent category="learn" currentSlug="/learn/berachain-guide" />
    </main>
  );
}
