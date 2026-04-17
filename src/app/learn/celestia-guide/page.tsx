'use client';
import Breadcrumb from "@/components/Breadcrumb";
import RelatedContent from '@/components/RelatedContent';
import AuthorAttribution, { getAuthorForSection } from '@/components/AuthorAttribution';

const S = {
  bg: "var(--color-bg, #0d1117)", surface: "var(--color-surface, #161b22)",
  border: "var(--glass-border, #30363d)", text: "var(--color-text, #e6edf3)",
  text2: "var(--color-text-secondary, #8b949e)", primary: "#8b5cf6",
  blue: "#58a6ff", green: "#3fb950", orange: "#f0883e", yellow: "#d29922",
};

const breadcrumbs = [
  { label: "Home", href: "/" }, { label: "Learn", href: "/learn" },
  { label: "Celestia Guide", href: "/learn/celestia-guide" },
];

export default function CelestiaGuidePage() {
  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
      {(() => { const a = getAuthorForSection('learn'); return (<AuthorAttribution author={a.author} role={a.role} publishedDate="2026-04-17" updatedDate="2026-04-17" section="learn" />); })()}
        </div>
      </div>

      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>🔮 Modular</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Data Availability</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 14, 2026 · 18 min read</span>
          </div>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Celestia Guide 2026: The Modular DA Layer Powering the Next Generation of Blockchains
          </h1>
          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75 }}>
            Celestia pioneered the concept of separating data availability (DA) from execution and consensus — enabling chains to scale without compromising decentralization. In 2026, Celestia powers dozens of rollups, validiums, and sovereign chains. This guide explains how Celestia works, why DA matters, and how to build or use Celestia-powered networks.
          </p>
        </header>

        {/* What is Celestia */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>What is Celestia?</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Celestia is a modular blockchain that specializes exclusively in ordering transactions and guaranteeing data availability — it does not execute smart contracts. This "separation of concerns" approach allows execution layers (rollups, app-chains) to scale independently while relying on Celestia for cheap, scalable data publication.
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
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Before Celestia, monolithic blockchains like Ethereum handled execution, consensus, settlement, AND data availability all in one. This created a bottleneck. Celestia's insight: if you can prove data was available without downloading all of it (using Data Availability Sampling — DAS), you can scale data throughput massively without requiring every node to download everything.
          </p>
        </section>

        {/* Modular Stack */}
        <section style={{ marginBottom: 40, background: `${S.primary}08`, border: `1px solid ${S.primary}20`, borderRadius: 14, padding: 28 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 20 }}>The Modular Blockchain Stack</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
            {[
              { layer: "Execution", example: "Eclipse, Fuel, Rollkit chains", color: S.orange, desc: "Process transactions & run smart contracts" },
              { layer: "Settlement", example: "Ethereum, Dymension Hub", color: S.blue, desc: "Resolve disputes and verify proofs" },
              { layer: "Consensus", example: "Celestia, Tendermint", color: S.yellow, desc: "Order transactions and agree on state" },
              { layer: "Data Availability", example: "Celestia, EigenDA, Avail", color: S.primary, desc: "Ensure transaction data is published and accessible" },
            ].map((l) => (
              <div key={l.layer} style={{ background: `${l.color}10`, border: `1px solid ${l.color}30`, borderRadius: 10, padding: 16 }}>
                <div style={{ fontWeight: 800, color: l.color, marginBottom: 6 }}>{l.layer}</div>
                <div style={{ fontSize: 12, color: S.text2, marginBottom: 8 }}>{l.desc}</div>
                <div style={{ fontSize: 11, color: l.color, fontWeight: 600 }}>Example: {l.example}</div>
              </div>
            ))}
          </div>
        </section>

        {/* How DAS works */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Data Availability Sampling (DAS)</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            DAS is Celestia's core innovation. Instead of downloading an entire block to verify its availability, light nodes randomly sample small chunks. Using erasure coding (similar to Reed-Solomon), the data is expanded 2x so that even if 50% is hidden, the full data can be recovered. If random samples succeed repeatedly, the probability that data is withheld approaches zero exponentially.
          </p>
          <div style={{ background: `${S.blue}08`, border: `1px solid ${S.blue}20`, borderRadius: 12, padding: 20, fontFamily: "monospace", fontSize: 13 }}>
            <div style={{ color: S.blue, fontWeight: 700, marginBottom: 12 }}>DAS in Practice:</div>
            {[
              "1. Block producer publishes data blob to Celestia",
              "2. Data is erasure-coded into 2x size chunks",
              "3. Light nodes randomly sample ~15 chunks",
              "4. If all samples succeed → data is available with 99.99%+ confidence",
              "5. Execution layer knows data is available → safe to process",
            ].map((step, i) => (
              <div key={i} style={{ color: S.text2, marginBottom: 6, paddingLeft: 8 }}>{step}</div>
            ))}
          </div>
        </section>

        {/* TIA Token */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>TIA Token — Paying for Blobspace</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            TIA is Celestia's native token with three core use cases: paying for data blobs (blobspace), staking to secure the network, and governance. Chains building on Celestia pay in TIA for every blob they publish. This creates direct fee demand tied to the usage of Celestia as a DA layer.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { stat: "~1.1B", label: "TIA Supply", color: S.primary },
              { stat: "$50M+", label: "Daily Blob Fees", color: S.orange },
              { stat: "700+", label: "Chains Using Celestia", color: S.green },
            ].map((s) => (
              <div key={s.label} style={{ background: `${s.color}10`, border: `1px solid ${s.color}30`, borderRadius: 12, padding: 16, textAlign: "center" }}>
                <div style={{ fontSize: 24, fontWeight: 900, color: s.color }}>{s.stat}</div>
                <div style={{ fontSize: 12, color: S.text2, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Celestia vs Competitors */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Celestia vs Other DA Layers</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Feature", "Celestia", "EigenDA", "Avail", "Ethereum blobs"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Throughput", "8 MB/s → 1 GB/s", "10 MB/s", "2 MB/s", "~125 KB/12s"],
                  ["Light clients", "DAS ✅", "Commitments", "Partial", "❌"],
                  ["Sovereignty", "Full ✅", "Ethereum-bound", "Full ✅", "ETH-bound"],
                  ["Token", "TIA", "ETH (operator)", "AVAIL", "ETH"],
                  ["Live chains", "700+", "50+", "20+", "All L2s"],
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                    {row.map((cell, j) => (
                      <td key={j} style={{ padding: "10px 14px", color: j === 0 ? S.text : S.text2, fontWeight: j === 0 ? 600 : 400 }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Building on Celestia */}
        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Building on Celestia</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Developers can deploy sovereign rollups using frameworks like Rollkit (Cosmos SDK compatible), OP Stack with Celestia DA, or Arbitrum Orbit. A sovereign rollup on Celestia gets cheap data availability with full control over execution — no Ethereum gas fees for DA.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            {[
              { name: "Rollkit", desc: "Cosmos SDK framework for sovereign rollups on Celestia", color: S.primary },
              { name: "Astria", desc: "Shared sequencer network using Celestia for DA", color: S.blue },
              { name: "Dymension", desc: "RollApp ecosystem with Celestia DA support", color: S.orange },
              { name: "Blobstream", desc: "Bridge to stream Celestia DA commitments to EVM chains", color: S.green },
            ].map((f) => (
              <div key={f.name} style={{ background: `${f.color}08`, border: `1px solid ${f.color}25`, borderRadius: 12, padding: 16 }}>
                <div style={{ fontWeight: 700, color: f.color, marginBottom: 6 }}>{f.name}</div>
                <div style={{ fontSize: 13, color: S.text2 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}25`, borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>🔑 Key Takeaways</h2>
          {[
            "Celestia separates data availability from execution — the core insight of modular blockchains.",
            "Data Availability Sampling (DAS) lets light nodes verify data availability without downloading full blocks.",
            "TIA token pays for blobspace — demand grows as more rollups and app-chains deploy on Celestia.",
            "700+ chains use Celestia for DA in 2026, with throughput scaling toward 1 GB/s via future upgrades.",
            "Developers can launch sovereign rollups on Celestia with full autonomy using Rollkit or OP Stack.",
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
            <li><a href="/investing/crypto-index-fund-guide" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Index Fund Guide</a></li>
            <li><a href="/investing/crypto-structured-products-guide" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Structured Products Guide</a></li>
            <li><a href="/tools/bitcoin-halving-countdown" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Bitcoin Halving Countdown</a></li>
            <li><a href="/tools/crypto-exchange-fee-comparison-tool" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Exchange Fee Comparison Tool</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
      <RelatedContent category="learn" currentSlug="/learn/celestia-guide" />
    </main>
  );
}
