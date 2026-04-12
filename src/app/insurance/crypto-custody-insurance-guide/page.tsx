import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Crypto Custody Insurance Guide 2026: Coinbase, Fireblocks, Lloyd\'s Policies",
  description: "Complete crypto custody insurance guide. Institutional custody (Coinbase $320B+ AUM, Fireblocks $4B+ insured), Lloyd\'s of London policies, crime vs specie insurance. Comparison table with coverage limits and premiums.",
  keywords: [
    "custody insurance",
    "crypto custody",
    "Coinbase Custody",
    "Fireblocks",
    "BitGo",
    "institutional custody",
    "crypto insurance",
    "Lloyd\'s of London",
    "cold storage insurance",
    "asset protection",
  ],
  openGraph: {
    title: "Crypto Custody Insurance Guide 2026",
    description: "Guide to crypto custody insurance providers, coverage types, and institutional best practices.",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Custody Insurance Guide 2026",
  },
  alternates: {
    canonical: 'https://degen0x.com/insurance/crypto-custody-insurance-guide',
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Crypto Custody Insurance Guide: Institutional Providers and Coverage Comparison",
  description: "Comprehensive guide to crypto custody insurance including institutional custodians, Lloyd\'s policies, and coverage gap analysis.",
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  author: { "@type": "Organization", name: "degen0x" },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is crypto custody insurance and who needs it?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Crypto custody insurance protects digital assets held in custody from theft, hacking, or loss. Essential for: institutions holding $10M+, exchanges with user deposits, hedge funds, pension funds. Covers exchange hacks (e.g., FTX-style theft), custodian failures, employee misconduct. Does NOT cover price collapse, regulatory seizure (usually), or staking slash.",
        },
      },
      {
        "@type": "Question",
        name: "What\'s the difference between custody and self-custody insurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Custody insurance (Coinbase, Fireblocks): Covers assets held by third-party custodian. AXA/Lloyd\'s underwrites, covers up to $320B per institution. Premium: 0.1%-0.5% of AUM. Self-custody insurance (hardware wallet): Evertas, Heirloom offer coverage, rare, limited availability. Custody is preferred for institutions due to economies of scale.",
        },
      },
      {
        "@type": "Question",
        name: "How much custody coverage does Coinbase provide?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Coinbase Custody: $250M+ per client insured, $320B+ total assets under custody. Insurance via AXA, covers 98% of assets in cold storage (offline vaults). Fee: 0.1%-0.25% of AUM annually (no additional insurance purchase needed). Coverage includes theft, hacking, custody provider failure.",
        },
      },
      {
        "@type": "Question",
        name: "What are crime vs specie insurance policies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Crime insurance: Covers theft by employees, third-party theft, fraud. Example: employee steals private keys. Specie insurance: Covers loss of custody (physical or digital property damage). Crypto typically uses combined crime + specie policies. Lloyd\'s underwrites both: crime at 0.2%-0.5% of AUM, specie at 0.1%-0.3%. Full coverage requires both.",
        },
      },
      {
        "@type": "Question",
        name: "Are hot wallets covered by custody insurance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Partially. Custody policies cover 100% of cold storage assets (offline). Hot wallets (online for transactions) have higher risk, typically 50-90% coverage at 2-3x higher premium. Coinbase holds 98% cold, 2% hot (for operational liquidity). Best practice: minimize hot wallet exposure to <5% of total assets for maximum coverage.",
        },
      },
      {
        "@type": "Question",
        name: "What\'s included in Lloyd\'s of London crypto policies?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lloyd\'s underwriters offer comprehensive crypto insurance (2025+): crime (employee theft, fraud), specie (asset loss), errors & omissions (E&O), cyber (hack recovery). Minimum premium: $100k-$500k/year. Coverage limits: $100M-$5B depending on underwriter. Requires audit, security certification (SOC 2), proof of reserves, and cold storage audits.",
        },
      },
    ],
  },
};

export default function CryptoCustodyInsuranceGuide() {
  const infoBoxStyle = {
    background: "#161b22",
    border: "1px solid #30363d",
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: "linear-gradient(135deg, #64748b, #3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: "#e6edf3",
  };

  const h3Style = {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 12,
    color: "#e6edf3",
  };

  const badgeStyle = {
    display: "inline-block",
    padding: "6px 12px",
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
  };

  const linkStyle = { color: "#58a6ff", textDecoration: "none" };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse" as const,
    marginBottom: 24,
    fontSize: 14,
  };

  const thStyle = {
    background: "#0d1117",
    border: "1px solid #30363d",
    padding: 12,
    textAlign: "left" as const,
    fontWeight: 700,
    color: "#e6edf3",
  };

  const tdStyle = {
    border: "1px solid #30363d",
    padding: 12,
    color: "#8b949e",
  };

  const tableOfContents = [
    { id: "overview", title: "Custody Insurance Overview" },
    { id: "custodians", title: "Institutional Custodians Comparison" },
    { id: "policies", title: "Insurance Policy Types" },
    { id: "coverage", title: "Coverage Gaps & Cold vs Hot Storage" },
    { id: "setup", title: "Optimal Custody Setup" },
    { id: "requirements", title: "Regulatory Requirements" },
    { id: "faq", title: "FAQ" },
  ];

  return (
    <article
      id="top"
      style={{
        background: "#0d1117",
        color: "#e6edf3",
        minHeight: "100vh",
        padding: "40px 20px",
        scrollBehavior: "smooth",
      }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <nav
          aria-label="Breadcrumb"
          style={{
            marginBottom: 20,
            fontSize: 13,
            color: "#8b949e",
          }}
    >
          <Link href="/" style={{ color: "#8b949e", textDecoration: "none" }}>
            Home
          </Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="#"
            style={{ color: "#8b949e", textDecoration: "none" }}
    >
            Insurance
          </Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span style={{ color: "#c9d1d9" }}>Custody Insurance</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span
            style={{
              ...badgeStyle,
              background: "#64748b",
              color: "#fff",
            }}
    >
            Insurance
          </span>
          <span
            style={{
              ...badgeStyle,
              background: "#3d444d",
              color: "#e6edf3",
            }}
    >
            Institutional
          </span>
          <h1 style={h1Style}>Crypto Custody Insurance Guide</h1>
          <p
            style={{
              fontSize: 16,
              color: "#8b949e",
              marginBottom: 20,
            }}
    >
            Protect institutional crypto assets with custody insurance. Compare Coinbase ($320B+ AUM),
            Fireblocks ($4B+ insured), BitGo, and Lloyd&apos;s of London policies. Understand crime vs specie
            coverage, cold/hot storage gaps, and regulatory requirements.
          </p>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 14,
              color: "#8b949e",
              marginBottom: 24,
            }}
    >
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 22 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="CipherPunk_42"
          role="Security & QA"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={22}
          section="insurance"
        />


        <nav
          aria-label="Table of Contents"
          style={{
            ...infoBoxStyle,
            marginBottom: 32,
          }}
    >
          <h3
            style={{
              fontSize: 16,
              fontWeight: 700,
              marginBottom: 16,
              color: "#e6edf3",
            }}
    >
            Table of Contents
          </h3>
          <ol style={{ marginLeft: 20, color: "#58a6ff" }}>
            {tableOfContents.map((item) => (
              <li key={item.id} style={{ marginBottom: 8 }}>
                <a href={`#${item.id}`} style={linkStyle}>
                  {item.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="overview">
          <h2 style={h2Style}>Custody Insurance Overview</h2>
          <p style={{ fontSize: 16, color: "#8b949e", lineHeight: 1.7, marginBottom: 16 }}>
            Crypto custody insurance is specialized coverage protecting digital assets held by third-party
            custodians from theft, hacking, fraud, and loss. The market expanded 300% in 2024-2025 as
            institutions adopted crypto. Coinbase Custody alone holds $320B+ in assets for institutions,
            backed by AXA and Lloyd&apos;s policies covering $250M+ per client. Fireblocks pioneered enterprise
            custody with $4B+ in insured assets across 1,000+ institutional clients.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#0f1a08', border: '1px solid #365314', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🔒</span>
            <strong style={{ color: '#a3e635', fontSize: 15 }}>Coverage Analysis</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We analyze claims history and payout records, not just policy terms. A protocol that's never paid a claim isn't necessarily trustworthy.
          </p>
        </div>
          <div style={{ ...infoBoxStyle, borderLeft: "4px solid #3b82f6" }}>
            <h3 style={h3Style}>Market Scale &amp; Key Players</h3>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>Coinbase Custody:</strong> $320B+ assets under custody, $250M+ per client insurance,
              AXA underwriter. Founded 2017, serves 500+ institutions (pension funds, family offices, hedge
              funds).
            </p>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>Fireblocks:</strong> $4B+ insured assets, covers 1,000+ institutions, $5B+ additional
              transaction insurance. Multi-asset support (100+ blockchains), institutional-grade security.
            </p>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>BitGo:</strong> $250M+ insurance policy, serves 300+ institutional clients, cold storage
              specialization (all assets offline).
            </p>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              <strong>Kraken Custody:</strong> $100M+ per client, Fidelity-backed (2023 acquisition in
              progress), emerging institutional player.
            </p>
          </div>
        </section>

        <section id="custodians">
          <h2 style={h2Style}>Institutional Custodians Comparison</h2>
          <div style={{ overflowX: "auto", marginBottom: 24 }}>
            <table style={tableStyle}>
              <thead>
                <tr style={{ background: "#0d1117" }}>
                  <th style={thStyle}>Custodian</th>
                  <th style={thStyle}>AUM</th>
                  <th style={thStyle}>Insured Per Client</th>
                  <th style={thStyle}>Fee (Annual %)</th>
                  <th style={thStyle}>Min. Account</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Coinbase Custody</td>
                  <td style={tdStyle}>$320B+</td>
                  <td style={tdStyle}>$250M+</td>
                  <td style={tdStyle}>0.1%-0.25%</td>
                  <td style={tdStyle}>$1M</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Fireblocks</td>
                  <td style={tdStyle}>$2B+ (client AUM)</td>
                  <td style={tdStyle}>$4B+ total insured</td>
                  <td style={tdStyle}>0.15%-0.4%</td>
                  <td style={tdStyle}>$5M</td>
                </tr>
                <tr>
                  <td style={tdStyle}>BitGo</td>
                  <td style={tdStyle}>$1B+ in custody</td>
                  <td style={tdStyle}>$250M per client</td>
                  <td style={tdStyle}>0.2%-0.35%</td>
                  <td style={tdStyle}>$2M</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Kraken Custody</td>
                  <td style={tdStyle}>$500M+ (growing)</td>
                  <td style={tdStyle}>$100M per client</td>
                  <td style={tdStyle}>0.25%-0.4%</td>
                  <td style={tdStyle}>$500k</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Fidelity Digital Assets</td>
                  <td style={tdStyle}>$300M+ (Bitcoin/ETH)</td>
                  <td style={tdStyle}>Unlimited (custodial trust)</td>
                  <td style={tdStyle}>Custom (0.1%-0.5%)</td>
                  <td style={tdStyle}>$10M</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div style={{ ...infoBoxStyle, borderLeft: "4px solid #3b82f6" }}>
            <h3 style={h3Style}>Selecting a Custodian: Key Factors</h3>
            <ul
              style={{
                fontSize: 15,
                color: "#8b949e",
                paddingLeft: 20,
                lineHeight: 1.8,
              }}
    >
              <li>
                <strong>Assets under custody:</strong> Larger AUM = more robust capital reserves. Coinbase&apos;s
                $320B signals security credibility.
              </li>
              <li>
                <strong>Insurance underwriter:</strong> AXA and Lloyd&apos;s are gold standard. Avoid custodians
                self-insured (rare, risky).
              </li>
              <li>
                <strong>Cold storage %:</strong> Coinbase (98% cold) vs Fireblocks (100% cold by default).
                Higher cold = lower hack risk.
              </li>
              <li>
                <strong>Regulatory status:</strong> NY BitLicense (Coinbase, Gemini, Kraken). NYDFS approval
                signals compliance.
              </li>
              <li>
                <strong>Audit history:</strong> SOC 2 Type II certification, annual security audits, passed
                penetration tests. Public information on custodian website.
              </li>
            </ul>
          </div>
        </section>

        <section id="policies">
          <h2 style={h2Style}>Insurance Policy Types &amp; Coverage Models</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              marginBottom: 24,
            }}
    >
            <div style={{ ...infoBoxStyle, borderLeft: "4px solid #22c55e" }}>
              <h3 style={{ ...h3Style, color: "#22c55e" }}>Crime Insurance</h3>
              <p style={{ fontSize: 14, color: "#8b949e", marginBottom: 12 }}>
                Covers theft by employees, third-party theft, fraud, embezzlement. Example: Employee with
                admin access steals private keys.
              </p>
              <p style={{ fontSize: 14, color: "#8b949e", marginBottom: 12 }}>
                Premium: 0.2%-0.5% of AUM annually. Coverage limit: $100M-$1B depending on custodian size.
              </p>
              <p style={{ fontSize: 14, color: "#8b949e" }}>
                Typical incidents: 1-2 per year across all custodians (Coinbase zero major incidents in
                decade).
              </p>
            </div>
            <div style={{ ...infoBoxStyle, borderLeft: "4px solid #06b6d4" }}>
              <h3 style={{ ...h3Style, color: "#06b6d4" }}>Specie Insurance</h3>
              <p style={{ fontSize: 14, color: "#8b949e", marginBottom: 12 }}>
                Covers loss of custody property (physical or digital). Example: Hard drive with private keys
                malfunction, data loss.
              </p>
              <p style={{ fontSize: 14, color: "#8b949e", marginBottom: 12 }}>
                Premium: 0.1%-0.3% of AUM annually. Coverage limit: Often unlimited (depends on underwriter).
              </p>
              <p style={{ fontSize: 14, color: "#8b949e" }}>
                Typical incidents: Hardware failures in cold storage (mitigated by redundancy and backup
                systems).
              </p>
            </div>
          </div>
          <div style={{ ...infoBoxStyle, borderLeft: "4px solid #3b82f6" }}>
            <h3 style={h3Style}>Errors &amp; Omissions (E&amp;O) Insurance</h3>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              Covers custodian mistakes (wrong withdrawal address, failed transaction). Example: Accidentally
              send client&apos;s Bitcoin to blackhole address.
            </p>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              Premium: 0.1%-0.2% of AUM. Coverage: $10M-$500M depending on policy. Increasingly standard for
              institutional custodians.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, borderLeft: "4px solid #3b82f6", marginTop: 20 }}>
            <h3 style={h3Style}>Lloyd&apos;s of London Comprehensive Policies (2025+)</h3>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              Lloyd&apos;s syndicates (underwriter groups) now offer bundled crypto insurance: crime + specie + E&O
              + cyber. Comprehensive policies cover 90%+ of institutional scenarios.
            </p>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>Premium structure:</strong> Minimum $100k-$500k/year depending on AUM. Base + variable
              (AUM-based). Example: $1B custodian = $250k minimum + 0.2% variable = ~$250k + $2M = $2.25M
              annually.
            </p>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              <strong>Coverage limit:</strong> $500M-$5B depending on underwriter appetite. Coinbase&apos;s
              multiple syndicates allow $250M+ per client with room to scale.
            </p>
          </div>
        </section>

        <section id="coverage">
          <h2 style={h2Style}>Coverage Gaps: Cold vs Hot Storage</h2>
          <div style={{ ...infoBoxStyle, borderLeft: "4px solid #3b82f6" }}>
            <h3 style={h3Style}>Cold Storage (Offline Vaults)</h3>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>Coverage:</strong> 100% insured. Assets kept in offline hardware, geographically
              redundant vaults (e.g., Coinbase vaults in 3+ locations).
            </p>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>Risk profile:</strong> Near-zero hack risk (no internet connection). Only human error or
              natural disaster risks (mitigated by backups).
            </p>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              <strong>Operational friction:</strong> 24-48 hour withdrawal window. Unsuitable for frequent
              trading. Coinbase uses for long-term institutional holdings (98% of custody assets).
            </p>
          </div>
          <div style={{ ...infoBoxStyle, borderLeft: "4px solid #3b82f6", marginTop: 20 }}>
            <h3 style={h3Style}>Hot Wallets (Online, Operational)</h3>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>Coverage:</strong> 50-90% insured. Higher risk drives higher premiums (2-3x cold storage
              cost). Some policies exclude hot wallet losses.
            </p>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>Risk profile:</strong> Hack exposure (connected to internet). Mitigated by: multi-sig
              controls (3-of-5 signatures required), air-gap isolation, monitoring.
            </p>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              <strong>Use case:</strong> Operational liquidity only (&lt;2% of assets). Coinbase holds 2% hot
              for day-to-day client withdrawals, 98% cold.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, borderLeft: "4px solid #ef4444", marginTop: 20 }}>
            <h3 style={{ ...h3Style, color: "#ef4444" }}>Coverage Exclusions (Not Insured)</h3>
            <ul
              style={{
                fontSize: 14,
                color: "#8b949e",
                paddingLeft: 20,
                lineHeight: 1.7,
              }}
    >
              <li>Price collapse (crypto loses 80% value)</li>
              <li>Regulatory seizure or government action</li>
              <li>Staking slash penalties</li>
              <li>Smart contract exploits (DeFi position losses)</li>
              <li>Network failures or blockchain reorg (extremely rare)</li>
              <li>Self-custody/key loss (hardware wallet</li>
            </ul>
          </div>
        </section>

        <section id="setup">
          <h2 style={h2Style}>Optimal Institutional Custody Setup</h2>
          <div style={{ ...infoBoxStyle, borderLeft: "4px solid #3b82f6" }}>
            <h3 style={h3Style}>Portfolio Allocation Strategy</h3>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>60% - Primary Custodian (Cold Storage):</strong> Coinbase Custody or Fireblocks. 100%
              insured, 98%+ cold. Low-friction for quarterly rebalancing.
            </p>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>20% - Secondary Custodian (Redundancy):</strong> BitGo or Kraken Custody. Backup
              provider for key management resilience. Separate insurance policy.
            </p>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>15% - Operational (Hot Wallet):</strong> Primary custodian hot wallet for liquidity.
              Monthly rebalance from cold. Requires monitoring.
            </p>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              <strong>5% - Hardware Wallet (Self-Custody):</strong> Multi-sig cold storage (Gnosis Safe, Ledger).
              Keys held by separate team member. Backup for catastrophic custodian failure.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, borderLeft: "4px solid #3b82f6", marginTop: 20 }}>
            <h3 style={h3Style}>Cost Analysis ($100M Portfolio)</h3>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>Primary Custodian (Coinbase):</strong> $100M × 0.2% = $200k/year
            </p>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>Secondary Custodian (BitGo):</strong> $20M × 0.25% = $50k/year
            </p>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>Governance &amp; Multi-Sig Setup:</strong> $20k-$50k one-time setup
            </p>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              <strong>Total Annual Cost:</strong> ~$250k-$300k (0.25%-0.3% of AUM). Typical for large
              institutions.
            </p>
          </div>
        </section>

        <section id="requirements">
          <h2 style={h2Style}>Regulatory Requirements &amp; Compliance</h2>
          <div style={{ ...infoBoxStyle, borderLeft: "4px solid #3b82f6" }}>
            <h3 style={h3Style}>US Regulatory Framework</h3>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>NY BitLicense:</strong> Required for custodians operating in New York. Coinbase, Gemini,
              Kraken, Fidelity Digital Assets all hold BitLicense (approved by NYDFS).
            </p>
            <p style={{ fontSize: 15, color: "#8b949e", marginBottom: 12 }}>
              <strong>SEC Custody Rule (2023):</strong> Institutional advisors (RIAs) must use SEC-qualified
              custodians. Qualified custodians: Coinbase Custody, BitGo, Fidelity (all approved). Eliminates
              unregulated alternatives.
            </p>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              <strong>OCC Guidance (2021):</strong> Banks can offer crypto custody via partnerships (e.g.,
              JPMorgan partnerships with Fireblocks). Custody counts as banking product, subject to banking
              regulations.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, borderLeft: "4px solid #3b82f6", marginTop: 20 }}>
            <h3 style={h3Style}>Required Security Certifications</h3>
            <ul
              style={{
                fontSize: 15,
                color: "#8b949e",
                paddingLeft: 20,
                lineHeight: 1.8,
              }}
    >
              <li>
                <strong>SOC 2 Type II:</strong> Annual audit of security controls. Coinbase, BitGo publicly
                share SOC 2 reports.
              </li>
              <li>
                <strong>ISO 27001:</strong> Information security management standard. Third-party certified.
              </li>
              <li>
                <strong>Penetration Testing:</strong> Annual red-team exercises by external security firms.
                Results reviewed by insurers.
              </li>
              <li>
                <strong>Proof of Reserves:</strong> Attestation that custodian holds claimed assets. Increasingly
                required by regulators and users.
              </li>
              <li>
                <strong>Cold Storage Audits:</strong> Annual audits of vault locations, key storage, physical
                security.
              </li>
            </ul>
          </div>
        </section>

        <section id="faq" style={{ marginTop: 48 }}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={{ ...infoBoxStyle, marginBottom: 20 }}>
            <h3 style={h3Style}>Is my crypto on Coinbase insured?</h3>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              Partially. Fiat deposits (USD, EUR, GBP) are FDIC-insured up to $250k as of 2025. Crypto
              holdings: 98% held in offline cold storage insured via AXA policy ($250M+ per customer).
              Remaining 2% online for withdrawal liquidity covered by cyber insurance. For retail, Coinbase
              recommends under $50k per account; institutional accounts have higher per-customer limits
              ($250M+).
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 20 }}>
            <h3 style={h3Style}>What happens if a custodian goes bankrupt?</h3>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              Custodian bankruptcy doesn&apos;t affect client assets (held separately under custody law, not
              custodian&apos;s balance sheet). Regulatory framework (SEC custody rule, NY BitLicense) requires
              segregation. However, operational issues (slow withdrawals, frozen accounts) can occur. Insurance
              covers custodian failure only if assets are actually lost/stolen (rare). Best practice: diversify
              across 2+ custodians to mitigate operational risk.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 20 }}>
            <h3 style={h3Style}>Can I get insurance for self-custody (hardware wallet)?</h3>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              Limited options. Evertas (startup, 2024) offers hardware wallet insurance in select states
              (CA, NY pending). Heirloom covers key recovery but not theft. Most insurers require institutional
              custody (not self-custody) due to liability concerns. For self-custody, insurance typically
              covers operational loss (forgotten password, hardware failure) via specialized products, not
              standard crime insurance.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 20 }}>
            <h3 style={h3Style}>What&apos;s the difference between Fireblocks and Coinbase Custody?</h3>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              Coinbase Custody: Specialized custody (no trading), full cold storage, AXA insurance, $250M per
              client. Fireblocks: Custody + operations platform (orchestrates transactions, workflows), 100%
              cold by default, enterprise-grade. Fireblocks costs 2-3x Coinbase but offers automation and
              multi-chain support. Choose Coinbase for simplicity, Fireblocks for operational complexity (many
              blockchains, frequent rebalancing).
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 20 }}>
            <h3 style={h3Style}>Are staking rewards covered by custody insurance?</h3>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              Custody insurance covers the principal staked amount but NOT staking penalties (slashing) or
              lost rewards from protocol failures. Example: $1M ETH staked = $1M insured if stolen, but 32 ETH
              slash penalty = not insured. DeFi insurance (Nexus Mutual, InsurAce) covers smart contract risks
              but not custody. For institutional staking, use both: custody insurance (theft protection) + DeFi
              insurance (protocol risk).
            </p>
          </div>

          <div style={{ ...infoBoxStyle }}>
            <h3 style={h3Style}>How do I verify a custodian&apos;s insurance coverage?</h3>
            <p style={{ fontSize: 15, color: "#8b949e" }}>
              Request the Insurance Certificate directly from custodian. Should list: underwriter (AXA, Lloyd&apos;s
              syndicate), coverage limits, policy exclusions. Red flags: self-insured (custodian covers losses
              from capital), named perils (excludes certain risks), low coverage limits (&lt;$50M for $1B+
              AUM). Reputable custodians publish insurance details on website or in compliance docs. If
              custodian refuses to share certificate, do not use.
            </p>
          </div>
        </section>

        <div
          style={{
            ...infoBoxStyle,
            marginTop: 48,
            fontSize: 13,
            color: "#8b949e",
          }}
    >
          <strong>Disclaimer:</strong> This content is for informational purposes only and does not
          constitute financial or legal advice. Crypto custody insurance terms vary by provider, jurisdiction,
          and policy year. Always review insurance certificates, regulatory approvals (BitLicense, SEC), and
          audit reports before selecting a custodian. Past coverage does not guarantee future solvency or
          coverage availability.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/wallets/best-defi-wallet-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Defi Wallet</Link></li>
            <li><Link href="/wallets/best-hardware-wallet-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Hardware Wallet</Link></li>
            <li><Link href="/wallets/best-mobile-crypto-wallet-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Mobile Crypto Wallet</Link></li>
            <li><Link href="/wallets/best-multi-chain-wallet" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Multi Chain Wallet</Link></li>
          </ul>
        </nav>

</article>
  );
}
