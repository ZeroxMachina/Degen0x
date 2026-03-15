'use client';
import Breadcrumb from "@/components/Breadcrumb";

const S = {
  bg: "var(--color-bg, #0d1117)", border: "var(--glass-border, #30363d)",
  text: "var(--color-text, #e6edf3)", text2: "var(--color-text-secondary, #8b949e)",
  primary: "#E040FB", blue: "#58a6ff", green: "#3fb950", orange: "#f0883e",
  yellow: "#d29922",
};

const breadcrumbs = [
  { label: "Home", href: "/" }, { label: "Learn", href: "/learn" },
  { label: "Symbiotic Restaking", href: "/learn/symbiotic-restaking" },
];

export default function SymbioticRestakingPage() {
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
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.primary}20`, color: S.primary, border: `1px solid ${S.primary}40` }}>🔗 Symbiotic</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>Restaking</span>
            <span style={{ fontSize: 12, color: S.text2 }}>Updated March 14, 2026 · 16 min read</span>
          </div>
          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20 }}>
            Symbiotic Restaking Guide 2026: EigenLayer's Main Competitor Explained
          </h1>
          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75 }}>
            Symbiotic emerged as EigenLayer's primary competitor in the restaking space, backed by Lido (the largest liquid staking protocol) and Paradigm. While EigenLayer only supports ETH and LSTs from Ethereum, Symbiotic supports any ERC-20 token as collateral — enabling protocols, DAOs, and networks to use their own tokens for crypto-economic security.
          </p>
        </header>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>Restaking Recap</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Restaking lets staked ETH (or other assets) secure multiple networks simultaneously. Instead of each new protocol bootstrapping its own validator set from scratch, they can "borrow" the security of Ethereum validators who opt-in to additional obligations. In return, validators earn additional yield — but take on slashing risk from the secured protocol.
          </p>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Symbiotic vs EigenLayer</h2>
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  {["Feature", "Symbiotic", "EigenLayer"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: S.text2, fontWeight: 600, fontSize: 12 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Backed by", "Lido + Paradigm", "a16z + others"],
                  ["Accepted Collateral", "Any ERC-20 token ✅", "ETH + LSTs only"],
                  ["Slashing Logic", "External (network-defined)", "Built-in EigenLayer contracts"],
                  ["Operator Model", "Any operator, permissionless", "Registered operators"],
                  ["Networks Supported", "50+ in 2026", "100+ (AVSes)"],
                  ["Governance", "Multi-sig → DAO", "EigenLayer Foundation"],
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

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Key Architecture Components</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            {[
              { name: "Vaults", desc: "Smart contracts that hold collateral and delegate stake to operators. Networks choose which vaults to accept.", color: S.primary },
              { name: "Operators", desc: "Node operators who run validator or AVS infrastructure. Delegated stake from vaults.", color: S.blue },
              { name: "Networks", desc: "Protocols (rollups, oracles, bridges) that purchase security by paying rewards to operators.", color: S.green },
              { name: "Resolvers", desc: "Entities (multisig, DAO, or smart contract) responsible for adjudicating slashing disputes.", color: S.orange },
            ].map((c) => (
              <div key={c.name} style={{ background: `${c.color}08`, border: `1px solid ${c.color}25`, borderRadius: 12, padding: 16 }}>
                <div style={{ fontWeight: 700, color: c.color, marginBottom: 6 }}>{c.name}</div>
                <div style={{ fontSize: 13, color: S.text2 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>The Lido Connection</h2>
          <p style={{ color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Lido's involvement gives Symbiotic a massive distribution advantage: stETH (from Lido) is the most liquid LST with ~$30B in TVL. By designing Symbiotic to natively support stETH and wstETH as collateral, the protocol immediately had access to the largest pool of restakeable assets. Lido also integrated Symbiotic as a restaking option directly in the Lido UI.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
            {[
              { stat: "$15B+", label: "Symbiotic TVL", color: S.primary },
              { stat: "50+", label: "Secured Networks", color: S.blue },
              { stat: "$4B+", label: "wstETH Restaked", color: S.green },
            ].map((s) => (
              <div key={s.label} style={{ background: `${s.color}10`, border: `1px solid ${s.color}30`, borderRadius: 12, padding: 14, textAlign: "center" }}>
                <div style={{ fontSize: 22, fontWeight: 900, color: s.color }}>{s.stat}</div>
                <div style={{ fontSize: 11, color: S.text2, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: 16 }}>Mellow Protocol — Curated Vaults</h2>
          <p style={{ color: S.text2, lineHeight: 1.8 }}>
            Mellow Protocol is Symbiotic's native vault curation layer — similar to how Kelp and Renzo curate EigenLayer strategies. Mellow allows DAOs and protocols to build "curated vaults" that combine specific network exposures, operator selections, and risk parameters. Users deposit into Mellow vaults instead of managing raw Symbiotic positions themselves.
          </p>
        </section>

        <section style={{ background: `${S.primary}10`, border: `1px solid ${S.primary}25`, borderRadius: 16, padding: 28 }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 800, marginBottom: 16, color: S.primary }}>🔗 Key Takeaways</h2>
          {[
            "Symbiotic is EigenLayer's main competitor — accepts any ERC-20 collateral vs. ETH/LSTs only.",
            "Backed by Lido (largest LST) and Paradigm — stETH integration gives instant scale.",
            "Architecture: Vaults (hold collateral) → Operators (run nodes) → Networks (purchase security).",
            "Key differentiator: external slashing resolvers — networks define their own slashing conditions.",
            "Mellow Protocol provides curated vault strategies on top of Symbiotic for retail users.",
          ].map((pt, i) => (
            <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10, alignItems: "flex-start" }}>
              <span style={{ color: S.primary, fontWeight: 800, marginTop: 2 }}>✦</span>
              <span style={{ color: S.text2, lineHeight: 1.7, fontSize: 14 }}>{pt}</span>
            </div>
          ))}
        </section>
      </article>
    </main>
  );
}
