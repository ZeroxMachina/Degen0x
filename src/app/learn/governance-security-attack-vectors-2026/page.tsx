'use client';

import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import RelatedContent from '@/components/RelatedContent';
import AuthorAttribution, { getAuthorForSection } from '@/components/AuthorAttribution';

const S = {
  bg:"#0d1117",
  border:"#30363d",
  text:"#e6edf3",
  text2:"#8b949e",
  blue:"#58a6ff",
  green:"#3fb950",
  orange:"#f0883e",
  yellow:"#d29922",
  purple:"#bc8cff",
  cyan:"#06b6d4"
};

const breadcrumbs = [
  { label: "degen0x", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "DAO Governance", href: "/learn/dao-governance-voting-guide" },
  { label: "Security & Attack Vectors" }
];

const attackVectors = [
  {
    title: "Flashloan Governance Attacks",
    risk: "CRITICAL",
    description: "Borrowing massive token amounts within a single transaction to inflate voting power before the proposal snapshot.",
    example: "Beanstalk ($181M, April 2022): Attacker used flashloan to borrow 75M BEAN, voted maliciously, then immediately repaid the loan.",
    defense: "Block-based voting snapshots taken before transaction execution"
  },
  {
    title: "Vote Buying & Bribe Markets",
    risk: "HIGH",
    description: "Centralized platforms like Votium, Hidden Hand, and LobbyFi aggregate DAO voter tokens and sell voting power to bidders.",
    example: "Arbitrum: $10K in bribes purchased $6.5M in vote weight to push specific proposals through.",
    defense: "Conviction voting, veto mechanisms, and transparent voting requirements"
  },
  {
    title: "Delegate Concentration",
    risk: "HIGH",
    description: "Power concentrates in few delegates. Top 10 addresses often control 50%+ of voting power while participation averages 17%.",
    example: "Uniswap: Top 100 delegates represent 65% of all voting power despite 400K+ token holders.",
    defense: "Delegation limits, quadratic voting, and rotating delegate elections"
  },
  {
    title: "Time-Lock Bypass",
    risk: "CRITICAL",
    description: "Emergency proposals skip time-locks entirely, allowing immediate execution without proper community review.",
    example: "UPCX ($70M, April 2025): Emergency proposal bypassed 3-day timelock, resulted in unintended fund transfer.",
    defense: "Minimum 3-7 day time-locks enforced for all proposals, veto councils for emergencies"
  },
  {
    title: "Malicious Proposal Injection",
    risk: "MEDIUM",
    description: "Submitting governance proposals designed to execute malicious code, drain treasury, or steal tokens.",
    example: "Tornado Cash (May 2023): Governance proposal created to enable unrestricted withdrawals.",
    defense: "Code audits, proposal simulation, time-weighted voting, and multi-sig safeguards"
  }
];

const caseStudies = [
  {
    date: "April 2022",
    protocol: "Beanstalk",
    loss: "$181M",
    vector: "Flashloan Attack",
    details: "Attacker borrowed 75M BEAN in a single transaction, voted to propose a treasury fund transfer, then repaid the flashloan in the same tx."
  },
  {
    date: "May 2023",
    protocol: "Tornado Cash",
    loss: "Full DAO Compromise",
    vector: "Malicious Proposal Injection",
    details: "Governance proposal attempted to enable unrestricted asset withdrawals, spotted and blocked by community before execution."
  },
  {
    date: "March 2023",
    protocol: "Compound (GoldenBoyz)",
    loss: "$0 (Prevented)",
    vector: "Vote Buying",
    details: "Votes were aggregated to push questionable proposals; exposed by transparent governance monitoring."
  },
  {
    date: "March 2024",
    protocol: "Arbitrum",
    loss: "$0 (Bribe Influence)",
    vector: "Vote Buying & Bribes",
    details: "$10K in bribe payments influenced $6.5M in voting weight to support governance proposals."
  },
  {
    date: "April 2025",
    protocol: "UPCX",
    loss: "$70M+",
    vector: "Time-Lock Bypass",
    details: "Emergency proposal bypassed 3-day time-lock, executed immediately with unintended consequences affecting fund transfers."
  }
];

const defenses = [
  {
    name: "Time-Locks",
    description: "Enforce minimum 3-7 day delays between proposal approval and execution",
    effectiveness: "CRITICAL",
    implementation: "Governor contract delayed execution function"
  },
  {
    name: "Conviction Voting",
    description: "Vote weight increases with token lock duration (Polkadot model)",
    effectiveness: "HIGH",
    implementation: "Vote power = tokens × lock_duration_multiplier"
  },
  {
    name: "Veto Councils",
    description: "Elite group (Nouns, Optimism, Arbitrum) can veto harmful proposals before execution",
    effectiveness: "HIGH",
    implementation: "Multi-sig or small elected council with veto rights"
  },
  {
    name: "Quorum Requirements",
    description: "Minimum participation thresholds (10%+ recommended) to prevent low-engagement attacks",
    effectiveness: "MEDIUM-HIGH",
    implementation: "Minimum votes required = total_supply × 0.10"
  },
  {
    name: "Snapshot-Based Voting",
    description: "Use historical block-based voting power snapshots, not real-time state",
    effectiveness: "CRITICAL",
    implementation: "Governor snapshots voting power at proposal block, not execution"
  },
  {
    name: "Time-Weighted Voting",
    description: "Experimental 2025-2026: voting power weighted by time-held (prevents recent large purchases)",
    effectiveness: "HIGH",
    implementation: "Vote power = tokens × (current_block - purchase_block)"
  }
];

const checklistItems = {
  minimal: [
    "Time-locks (minimum 2 days)",
    "Quorum requirement (5%+)",
    "Block-based voting snapshot",
    "Proposal delay period"
  ],
  robust: [
    "All minimal requirements",
    "Conviction voting or time-weighted voting",
    "Veto council (5-9 trusted members)",
    "Minimum 3-7 day time-lock",
    "10%+ quorum requirement",
    "Vote delegation limits"
  ],
  advanced: [
    "All robust requirements",
    "Futarchy (prediction market governance)",
    "Quadratic voting for parameter changes",
    "Transparent bribe detection monitoring",
    "AI-based malicious code scanning",
    "Cross-DAO governance coordination"
  ]
};

const faqItems = [
  {
    q: "Can flashloan governance attacks be completely prevented?",
    a: "Yes, by using block-based voting snapshots. The voting power snapshot must be taken at a historical block before the transaction executes, preventing same-tx flashloan inflation."
  },
  {
    q: "What's the difference between vote buying and bribery?",
    a: "Vote buying is transparent transaction settlement (bribe markets); bribery is covert. Both are concerning. Conviction voting and veto councils reduce both vectors' effectiveness."
  },
  {
    q: "Is a 2-day time-lock sufficient?",
    a: "No. Industry standard is 3-7 days minimum. 2 days gives insufficient time for security audits and community review. UPCX's emergency bypass shows even 3 days can be bypassed."
  },
  {
    q: "How much voting power concentration is acceptable?",
    a: "The more distributed, the better. 50%+ in top 10 is dangerous. Target: top 100 addresses <40% of total voting power, and minimum 25%+ participation in major proposals."
  },
  {
    q: "Should DAOs implement futarchy?",
    a: "Futarchy (prediction markets for governance) is promising but experimental. Start with conviction voting + veto councils. Futarchy requires mature prediction market infrastructure."
  }
];

export default function GovernanceSecurityPage() {
  return (
    <main style={{ background: S.bg, minHeight: "100vh", padding: "20px" }}>
      <Breadcrumb items={breadcrumbs} />
      {(() => { const a = getAuthorForSection('learn'); return (<AuthorAttribution author={a.author} role={a.role} publishedDate="2026-04-17" updatedDate="2026-04-17" section="learn" />); })()}

      <article style={{ maxWidth: "920px", margin: "0 auto", color: S.text }}>

        {/* Header */}
        <section style={{ marginTop: "40px", marginBottom: "40px" }}>
          <div style={{ display: "flex", gap: "12px", marginBottom: "16px", flexWrap: "wrap" }}>
            <span style={{ background: "#1f6feb", color: "#fff", padding: "4px 12px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>DAO GOVERNANCE</span>
            <span style={{ background: "#da3633", color: "#fff", padding: "4px 12px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>SECURITY</span>
            <span style={{ background: "#1f6feb", color: "#fff", padding: "4px 12px", borderRadius: "12px", fontSize: "12px", fontWeight: "600" }}>2026</span>
          </div>

          <h1 style={{ fontSize: "36px", fontWeight: "700", lineHeight: "1.3", marginBottom: "16px" }}>
            DAO Governance Security 2026: Attack Vectors, Real Exploits & How to Defend Your Protocol
          </h1>

          <p style={{ color: S.text2, fontSize: "16px", marginBottom: "16px" }}>
            Over $28B in assets are governed by DAO tokens across 12,000+ active DAOs. Yet governance mechanisms remain an exploitable attack surface—with $181M lost to Beanstalk's flashloan attack alone. This guide covers the 5 critical attack vectors, real case studies, and defense mechanisms that actually work.
          </p>

          <div style={{ display: "flex", gap: "24px", color: S.text2, fontSize: "14px" }}>
            <span>📅 Updated March 2026</span>
            <span>⏱️ 12 min read</span>
            <span>✨ +50 XP</span>
          </div>
        </section>

        {/* Section: What is Governance Security? */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px", color: S.blue }}>
            What is Governance Security?
          </h2>
          <p style={{ color: S.text2, lineHeight: "1.6", marginBottom: "12px" }}>
            DAO governance is the mechanism by which token holders collectively make decisions about protocol changes, treasury allocation, and strategic direction. It's also one of the highest-value attack surfaces in crypto—an attacker who controls governance controls the entire protocol.
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
          <p style={{ color: S.text2, lineHeight: "1.6" }}>
            Governance security means designing systems that are resistant to flashloan attacks, vote buying, delegate capture, time-lock bypasses, and malicious proposal injection. With $28B+ under governance and 12,000+ active DAOs, a single governance vulnerability can lead to protocol-level compromise.
          </p>
        </section>

        {/* Section: 5 Major Attack Vectors */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px", color: S.blue }}>
            The 5 Major Attack Vectors
          </h2>
          <div style={{ display: "grid", gap: "16px" }}>
            {attackVectors.map((vector, idx) => (
              <div key={idx} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "12px" }}>
                  <h3 style={{ fontSize: "18px", fontWeight: "600", color: S.text }}>{vector.title}</h3>
                  <span style={{
                    background: vector.risk === "CRITICAL" ? "#da3633" : vector.risk === "HIGH" ? "#f86471" : S.orange,
                    color: "#fff",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "600",
                    whiteSpace: "nowrap"
                  }}>
                    {vector.risk}
                  </span>
                </div>
                <p style={{ color: S.text2, marginBottom: "12px", fontSize: "14px" }}>{vector.description}</p>
                <p style={{ color: S.text2, marginBottom: "12px", fontSize: "14px" }}>
                  <strong>Example:</strong> {vector.example}
                </p>
                <p style={{ color: S.green, fontSize: "14px", fontWeight: "500" }}>
                  <strong>Defense:</strong> {vector.defense}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Case Studies */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px", color: S.blue }}>
            Case Studies: Real Governance Attacks
          </h2>
          <div style={{ display: "grid", gap: "12px" }}>
            {caseStudies.map((study, idx) => (
              <div key={idx} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "8px" }}>
                  <div>
                    <h3 style={{ fontSize: "16px", fontWeight: "600", color: S.text, marginBottom: "4px" }}>
                      {study.date} • {study.protocol}
                    </h3>
                    <span style={{ background: "#da3633", color: "#fff", padding: "2px 8px", borderRadius: "4px", fontSize: "12px", display: "inline-block" }}>
                      {study.vector}
                    </span>
                  </div>
                  <span style={{ fontSize: "14px", fontWeight: "600", color: "#f85149" }}>
                    {study.loss}
                  </span>
                </div>
                <p style={{ color: S.text2, fontSize: "14px", lineHeight: "1.5" }}>{study.details}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Defense Mechanisms */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px", color: S.blue }}>
            Defense Mechanisms That Work
          </h2>
          <div style={{ display: "grid", gap: "12px" }}>
            {defenses.map((defense, idx) => (
              <div key={idx} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "16px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "8px" }}>
                  <h3 style={{ fontSize: "16px", fontWeight: "600", color: S.text }}>{defense.name}</h3>
                  <span style={{ background: S.green, color: "#fff", padding: "2px 8px", borderRadius: "4px", fontSize: "12px", fontWeight: "600" }}>
                    {defense.effectiveness}
                  </span>
                </div>
                <p style={{ color: S.text2, fontSize: "14px", lineHeight: "1.5", marginBottom: "8px" }}>{defense.description}</p>
                <p style={{ color: S.cyan, fontSize: "13px", fontStyle: "italic" }}>{defense.implementation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Governance Security Checklist */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px", color: S.blue }}>
            Governance Security Checklist
          </h2>

          <div style={{ display: "grid", gap: "16px" }}>
            {[
              { tier: "MINIMAL", items: checklistItems.minimal, color: "#f0883e" },
              { tier: "ROBUST", items: checklistItems.robust, color: S.green },
              { tier: "ADVANCED", items: checklistItems.advanced, color: S.purple }
            ].map((tier, idx) => (
              <div key={idx} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "16px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: "600", color: tier.color, marginBottom: "12px" }}>
                  {tier.tier}
                </h3>
                <ul style={{ listStyle: "none", padding: 0 }}>
                  {tier.items.map((item, itemIdx) => (
                    <li key={itemIdx} style={{ color: S.text2, fontSize: "14px", marginBottom: "8px", display: "flex", gap: "8px" }}>
                      <span style={{ color: tier.color }}>✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Futarchy */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "16px", color: S.blue }}>
            Futarchy: The Future of Governance?
          </h2>
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "20px" }}>
            <p style={{ color: S.text2, lineHeight: "1.6", marginBottom: "12px" }}>
              Futarchy is a governance model where policy decisions are made by prediction markets. Instead of voting on proposals, token holders trade shares in prediction markets that forecast the outcome of potential decisions. The market consensus becomes the governance outcome.
            </p>
            <p style={{ color: S.text2, lineHeight: "1.6", marginBottom: "12px" }}>
              <strong>Examples:</strong> Optimism experimented with futarchy for governance decisions. MetaDAO on Solana runs a futarchy framework. Advantages: removes voter apathy, incentivizes accuracy, harder to manipulate than simple voting.
            </p>
            <p style={{ color: S.text2, lineHeight: "1.6" }}>
              <strong>Challenges:</strong> Requires mature prediction market infrastructure, liquidity risk, governance decisions may lag market movements. Not yet production-ready for most DAOs.
            </p>
          </div>
        </section>

        {/* Section: FAQ */}
        <section style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "700", marginBottom: "20px", color: S.blue }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: "grid", gap: "12px" }}>
            {faqItems.map((item, idx) => (
              <div key={idx} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: "16px" }}>
                <h3 style={{ fontSize: "15px", fontWeight: "600", color: S.text, marginBottom: "8px" }}>
                  {item.q}
                </h3>
                <p style={{ color: S.text2, fontSize: "14px" }}>{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Takeaway */}
        <section style={{ marginBottom: "40px" }}>
          <div style={{
            background: "linear-gradient(135deg, #58a6ff 0%, #bc8cff 100%)",
            borderRadius: 12,
            padding: "24px",
            color: "#fff"
          }}>
            <h2 style={{ fontSize: "20px", fontWeight: "700", marginBottom: "12px" }}>
              Key Takeaway
            </h2>
            <p style={{ lineHeight: "1.6", fontSize: "15px" }}>
              DAO governance security is <strong>not optional</strong>. With $28B+ under governance, a single vulnerability can compromise entire protocols. The gold standard requires: (1) block-based voting snapshots, (2) 3-7 day time-locks, (3) 10%+ quorum, (4) conviction voting or time-weighted voting, and (5) veto councils for emergency override. Start with the robust checklist—futarchy and advanced mechanisms can follow once infrastructure matures.
            </p>
          </div>
        </section>

        {/* Related Reading */}
        <section style={{ marginTop: "40px", paddingTop: "20px", borderTop: `1px solid ${S.border}` }}>
          <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "12px", color: S.text }}>
            Related Learning
          </h3>
          <ul style={{ listStyle: "none", padding: 0, color: S.blue }}>
            <li style={{ marginBottom: "8px" }}>
              <a href="/learn/dao-governance-voting-guide" style={{ color: S.blue, textDecoration: "none", fontSize: "14px" }}>
                → DAO Governance & Voting Guide (Mechanisms, Token Delegation, Voting Power)
              </a>
            </li>
            <li style={{ marginBottom: "8px" }}>
              <a href="/learn/mev-maximal-extractable-value" style={{ color: S.blue, textDecoration: "none", fontSize: "14px" }}>
                → MEV: Maximal Extractable Value (Sandwich Attacks, Flashloans, Defense)
              </a>
            </li>
            <li>
              <a href="/learn" style={{ color: S.blue, textDecoration: "none", fontSize: "14px" }}>
                → Back to Learn Hub
              </a>
            </li>
          </ul>
        </section>

      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
      <BackToTop />
      <RelatedContent category="learn" currentSlug="/learn/governance-security-attack-vectors-2026" />
    </main>
  );
}
