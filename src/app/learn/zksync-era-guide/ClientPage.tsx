'use client';
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';
import AutoTOC from '@/components/AutoTOC';
import ReadingTime from '@/components/ReadingTime';
import LastUpdated from '@/components/LastUpdated';

import AuthoritySources from "@/components/AuthoritySources";

const S = {
  bg: "var(--color-bg, #0d1117)", border: "var(--glass-border, #30363d)",
  text: "var(--color-text, #e6edf3)", text2: "var(--color-text-secondary, #8b949e)",
  primary: "#1B5EF7", blue: "#58a6ff", green: "#3fb950", orange: "#f0883e",
  yellow: "#d29922", purple: "#bc8cff",
};

const breadcrumbs = [
  { label: "Home", href: "/" }, { label: "Learn", href: "/learn" },
  { label: "zkSync Era Guide", href: "/learn/zksync-era-guide" },
];

export default function ZkSyncEraGuidePage() {
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
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: "#1B5EF720", color: "#4d9bff", border: "1px solid #1B5EF740" }}>⚡ zkSync Era</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.purple}20`, color: S.purple, border: `1px solid ${S.purple}40` }}>ZK Rollup</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 14, 2026 · 20 min read</span>
          </div>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            zkSync Era Guide 2026: ZK-Rollup Technology, Ecosystem & ZK Token
          </h1>
          <LastUpdated pathKey="/learn/zksync-era-guide" />
          <ReadingTime />
          <AutoTOC />
          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75 }}>
            zkSync Era (by Matter Labs) is a ZK-rollup with EVM compatibility, using zero-knowledge proofs for cryptographic finality without the 7-day withdrawal delay of optimistic rollups. In 2026, zkSync's "Elastic Chain" vision powers a network of ZK-powered chains. This guide covers the technology, ZK token, ecosystem, and how it compares to Optimism and Arbitrum.
          </p>
        </header>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: "#4d9bff" }}>ZK Rollups vs Optimistic Rollups</h2>
          <div style={{ overflowX: "auto", marginBottom: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Feature", "ZK Rollup (zkSync)", "Optimistic Rollup (Arbitrum/OP)"].map((h) => (
                    <th key={h} style={{ padding: "10px 12px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 11 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Proof Type", "Zero-Knowledge (SNARK/STARK)", "Fraud Proof (challenge period)"],
                  ["Withdrawal Time", "Minutes–Hours ✅", "7 Days ⚠️"],
                  ["Security Model", "Cryptographic guarantee", "Economic incentive (assumes honest challengers)"],
                  ["Proof Cost", "High (off-chain proving)", "Low (only if challenged)"],
                  ["EVM Compatibility", "zkEVM (almost full) ✅", "Full EVM equivalence ✅"],
                  ["Current Maturity", "2026: production-ready", "2026: production-ready"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "8px 12px", color: j === 0 ? S.text : S.text2, fontWeight: j === 0 ? 600 : 400, fontSize: 13 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>zkSync Era Architecture</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            zkSync Era uses a custom LLVM compiler to compile Solidity/Yul to its zkEVM bytecode. The prover (Boojum — a STARK-based system) generates validity proofs for each batch of transactions, which are then verified on Ethereum. The "hyperchain" architecture allows application-specific ZK chains to settle to zkSync Era (instead of directly to Ethereum), forming a hierarchical ZK network.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals.
          </p>
        </div>
          <div style={{ background: "#1B5EF710", border: "1px solid #1B5EF730", borderRadius: 12, padding: 20 }}>
            <div style={{ fontWeight: 700, color: "#4d9bff", marginBottom: 14 }}>Elastic Chain Architecture</div>
            <div style={{ display: "grid", gap: 8 }}>
              {[
                { level: "Ethereum", detail: "Settlement & DA layer — receives validity proofs from ZK Stack chains" },
                { level: "ZK Stack Hub (zkSync Era)", detail: "Aggregates proofs from hyperchains before settling to Ethereum" },
                { level: "Hyperchains", detail: "App-specific ZK chains (e.g., Cronos zkEVM, Sophon, Abstract)" },
              ].map((r) => (
                <div key={r.level} style={{ display: "flex", gap: 12, padding: "8px 0" }}>
                  <span style={{ color: "#4d9bff", fontWeight: 700, minWidth: 180, fontSize: 13 }}>{r.level}</span>
                  <span style={{ color: S.text2, fontSize: 13 }}>{r.detail}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>ZK Token & Airdrop</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            The ZK token airdrop in June 2024 was one of the most anticipated in crypto — and one of the most controversial. 17.5% of total supply (3.675 billion ZK) was distributed to ~695,000 eligible addresses. The eligibility criteria excluded many longtime users, leading to significant community backlash. Despite this, ZK is used for governance and is planned as the gas token for hyperchains.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { stat: "21B", label: "Total ZK Supply", color: "#4d9bff" },
              { stat: "17.5%", label: "Airdrop Allocation", color: S.purple },
              { stat: "695K", label: "Eligible Addresses", color: S.green },
            ].map((s) => (
              <div key={s.label} style={{ background: `${s.color}10`, border: `1px solid ${s.color}30`, borderRadius: 12, padding: 14, textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: s.color }}>{s.stat}</div>
                <div style={{ fontSize: 11, color: S.text2, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Key Ecosystem dApps</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { name: "SyncSwap", type: "DEX", desc: "Leading AMM on zkSync with Classic and Stable pools", color: "#4d9bff" },
              { name: "Maverick Protocol", type: "DEX", desc: "Directional AMM — LPs can bet on price movement direction", color: S.purple },
              { name: "ZeroLend", type: "Lending", desc: "Aave fork on zkSync — borrow/lend major assets", color: S.orange },
              { name: "Rhino.fi", type: "Bridge", desc: "Cross-chain bridge supporting zkSync with fast withdrawals", color: S.green },
              { name: "Holdstation", type: "Perps", desc: "Native perpetuals DEX on zkSync with account abstraction", color: S.yellow },
              { name: "dMail Network", type: "Web3 Email", desc: "Decentralized email protocol deployed on zkSync", color: S.primary },
            ].map((d) => (
              <div key={d.name} style={{ background: `${d.color}08`, border: `1px solid ${d.color}25`, borderRadius: 10, padding: 14 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 4 }}>
                  <span style={{ fontWeight: 700, color: d.color, fontSize: 13 }}>{d.name}</span>
                  <span style={{ fontSize: 10, padding: "1px 6px", borderRadius: 4, background: `${d.color}20`, color: d.color }}>{d.type}</span>
                </div>
                <div style={{ fontSize: 12, color: S.text2 }}>{d.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "#1B5EF710", border: "1px solid #1B5EF725", borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 16, color: "#4d9bff" }}>⚡ Key Takeaways</h2>
          {[
            "zkSync Era is a ZK-rollup: cryptographic proofs provide security vs. 7-day fraud proof window in Optimistic rollups.",
            "The Elastic Chain / ZK Stack enables app-specific hyperchains that settle to zkSync Era → Ethereum.",
            "ZK token (21B supply) used for governance; planned as gas token for hyperchains.",
            "Top dApps: SyncSwap, Maverick, ZeroLend, Holdstation — focus on trading and DeFi.",
            "Boojum prover (STARK-based) is open-source — key competitive advantage in proving speed/cost.",
          ].map((pt, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
              <span style={{ color: "#4d9bff", fontWeight: 800, marginTop: 2 }}>✦</span>
              <span style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{pt}</span>
            </div>
          ))}
        </section>
      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/tools/crypto-volatility-index" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Volatility Index</a></li>
            <li><a href="/tools/gas-price-estimator-multi-chain" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Gas Price Estimator Multi Chain</a></li>
            <li><a href="/tools/token-unlocks-calendar" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Token Unlocks Calendar</a></li>
            <li><a href="/compare/chainlink-vs-pyth-vs-band" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Chainlink Vs Pyth Vs Band</a></li>
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
              "headline": "Zksync Era Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/zksync-era-guide"
            })
          }}
        />
      </article>
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/learn/depin-ecosystem-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Depin Ecosystem Guide 2026</a>
        </nav>
      <RelatedContent category="learn" currentSlug="/learn/zksync-era-guide" />
    <AuthoritySources url="/learn/zksync-era-guide" />
    </main>
  );
}
