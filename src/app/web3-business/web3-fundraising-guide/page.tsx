import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Web3 Fundraising Guide 2026: VCs, IDOs, Token Sales,",
  description: "Complete crypto fundraising guide. Seed rounds SAFE/SAFT, Series A equity, private token sales, IDOs, public sales. Top VCs: a16z, Polychain, Paradigm, Galaxy",
  keywords: ["web3 fundraising", "SAFT", "IDO", "seed round", "Series A", "token sale", "venture capital", "crypto funding"],
  openGraph: {
    type: "article",
    title: "Web3 Fundraising Guide 2026: VCs, IDOs, Token Sales",
    description: "Master crypto fundraising. Seed rounds, Series A, IDOs, token sales. Timeline, legal, investor strategy.",
    publishedTime: "2026-04-11T00:00:00Z",
    modifiedTime: "2026-04-11T00:00:00Z",
    url: "https://degen0x.com/web3-business/web3-fundraising-guide",
    images: [{ url: "https://degen0x.com/og-web3-business.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web3 Fundraising Guide 2026",
    description: "Raise capital from VCs, conduct IDOs, design tokenomics. Complete playbook.",
    image: "https://degen0x.com/og-web3-business.svg",
  },
  alternates: { canonical: "https://degen0x.com/web3-business/web3-fundraising-guide" },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Web3 Fundraising Guide 2026: VCs, IDOs, Token Sales, SAFE/SAFT",
  description: "Complete guide to raising capital for crypto projects. Seed rounds, Series A, IDOs, token sales, investor strategy, tokenomics.",
  image: "https://degen0x.com/og-web3-business.svg",
  datePublished: "2026-04-11",
  dateModified: "2026-04-11",
  author: { "@type": "Organization", name: "degen0x" },
  mainEntity: {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are the main fundraising methods for crypto projects?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Main methods: Seed rounds (SAFE/SAFT), Series A equity funding, private token sales, IDOs (Initial DEX Offerings), public sales, and grants. Most projects use 2-3 methods sequentially.",
        },
      },
      {
        "@type": "Question",
        name: "How much can a crypto startup raise?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seed rounds typically $500k-$3M; Series A $5M-$20M; Series B $20M-$100M+. Token sales can raise $10M-$500M depending on demand. Top tier projects raise $100M+.",
        },
      },
      {
        "@type": "Question",
        name: "What is a SAFT agreement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SAFT (Simple Agreement for Future Tokens) is an early-stage investment contract. Investors get tokens upon mainnet launch. Standard terms: 1-2 year vesting, accredited investor only, no registration required.",
        },
      },
      {
        "@type": "Question",
        name: "What are IDOs and how do they work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "IDOs (Initial DEX Offerings) launch tokens directly on decentralized exchanges. Advantages: fast execution (1-7 days), instant liquidity, global accessibility. Use platforms like Polkastarter, TrustPad, or Solanium.",
        },
      },
      {
        "@type": "Question",
        name: "What do venture capitalists look for in crypto?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "VCs evaluate: market size, team experience, technical differentiation, tokenomics quality, regulatory compliance, existing traction (users/revenue), and competitive positioning.",
        },
      },
      {
        "@type": "Question",
        name: "How long does crypto fundraising take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Seed: 2-4 months (100+ pitches for 10+ meetings, 3-5 term sheets). Series A: 3-6 months. IDO: 1-3 months prep. Full fundraising cycle (seed to launch): 9-18 months typical.",
        },
      },
    ],
  },
};

export default function Web3FundraisingGuideExpanded() {
  const infoBoxStyle = { background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };
  const h1Style = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: "linear-gradient(135deg, #3b82f6, #06b6d4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" };
  const h2Style = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: "#e6edf3" };
  const h3Style = { fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: "#e6edf3" };
  const badgeStyle = { display: "inline-block", padding: "6px 12px", borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16 };
  const linkStyle = { color: "#58a6ff", textDecoration: "none" };
  const tableStyle = { width: "100%", borderCollapse: "collapse" as const, marginBottom: 24, fontSize: 14 };
  const thStyle = { background: "#0d1117", border: "1px solid #30363d", padding: 12, textAlign: "left" as const, fontWeight: 700, color: "#e6edf3" };
  const tdStyle = { border: "1px solid #30363d", padding: 12, color: "#8b949e" };

  const tableOfContents = [
    { id: "overview", title: "Fundraising Overview" },
    { id: "methods-comparison", title: "Fundraising Methods Comparison" },
    { id: "seed-round", title: "Seed Round Strategy (SAFE/SAFT)" },
    { id: "series-a", title: "Series A Equity Funding" },
    { id: "private-sales", title: "Private Token Sales" },
    { id: "ido", title: "Initial DEX Offering (IDO)" },
    { id: "top-vcs", title: "Top Web3 VCs (2026)" },
    { id: "timeline-budget", title: "Fundraising Timeline & Budget" },
    { id: "legal-compliance", title: "Legal & Regulatory Compliance" },
    { id: "faq", title: "FAQ" },
  ];

  return (
    <article id="top" style={{ background: "#0d1117", color: "#e6edf3", minHeight: "100vh", padding: "40px 20px", scrollBehavior: "smooth" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: "0 auto" }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: "#8b949e" }}>
          <Link href="/" style={{ color: "#8b949e", textDecoration: "none" }}>Home</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <Link href="/web3-business" style={{ color: "#8b949e", textDecoration: "none" }}>Web3 Business</Link>
          <span style={{ margin: "0 6px" }}>›</span>
          <span style={{ color: "#c9d1d9" }}>Web3 Fundraising Guide</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: "#3b82f6", color: "#fff" }}>Web3 Business</span>
          <span style={{ ...badgeStyle, background: "#3d444d", color: "#e6edf3" }}>Advanced</span>
          <h1 style={h1Style}>Web3 Fundraising Guide: Complete 2026 Playbook</h1>
          <p style={{ fontSize: 16, color: "#8b949e", marginBottom: 20 }}>
            Master crypto fundraising: Seed rounds ($500K-$3M), Series A ($5M-$50M), private token sales, and IDOs ($2M-$20M). Learn SAFE/SAFT mechanics, investor diligence, tokenomics design. Study top VCs: a16z ($4.5B AUM), Polychain Capital ($600M+), Paradigm ($850M+). Full timeline: 9-18 months from pitch to token launch. Real data on median rounds, VC checklist items, and success factors.
          </p>
          <div style={{ display: "flex", gap: 24, fontSize: 14, color: "#8b949e", marginBottom: 24 }}>
            <span>Updated: April 11, 2026</span>
            <span>Reading time: 18 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="0xMachina"
          role="Founder"
          publishedDate="2026-04-11"
          updatedDate="2026-04-11"
          readingTime={18}
          section="web3-business"
        />


        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: "#58a6ff" }}>
            {tableOfContents.map((item) => (
              <li key={item.id} style={{ marginBottom: 8 }}>
                <a href={`#${item.id}`} style={linkStyle}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="overview">
          <h2 style={h2Style}>Web3 Fundraising Overview</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Successful crypto projects combine multiple fundraising methods to maximize capital while maintaining decentralization and community ownership. April 2026 fundraising landscape: Seed rounds averaging $1-2M from angel/micro-VCs. Series A rounds: $10-30M from Tier-1 VCs with concentrated ticket sizes ($1-5M per investor). Private token sales: $2-20M from institutional investors at 10-25% discount to public price. IDOs: $5-50M from community and retail on Polkastarter, TrustPad, Solanium. Total capital deployed into crypto projects in 2026: ~$15-20B (down from 2021&apos;s $25B peak, but higher quality projects selected).
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0808', border: '1px solid #5c1818', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>🏗️</span>
            <strong style={{ color: '#ef4444', fontSize: 15 }}>Builder Perspective</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Tokenomics design is where most projects fail silently. We've seen more projects die from bad token economics than from bad code.
          </p>
        </div>

          <h3 style={h3Style}>Fundraising as Validation &amp; Scaling</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 24, color: "#8b949e" }}>
            Fundraising serves dual purpose: (1) Capital: funds operations, development, marketing (18-36 month runway typical). (2) Validation: VC backing signals market confidence, attracts users/partners, enables token launch. Strategic investors: may provide revenue, distribution, or technical expertise beyond capital. Example: Paradigm invested $30M into Arbitrum (Ethereum L2) in 2022, adding partnership value beyond capital.
          </p>
        </section>

        <section id="methods-comparison">
          <h2 style={h2Style}>Fundraising Methods Comparison</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Method</th>
                <th style={thStyle}>Timeline</th>
                <th style={thStyle}>Typical Size</th>
                <th style={thStyle}>Audience</th>
                <th style={thStyle}>Pros &amp; Cons</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>SAFE/SAFT</td>
                <td style={tdStyle}>2-4 weeks</td>
                <td style={tdStyle}>$100k-$1M per investor</td>
                <td style={tdStyle}>Accredited VCs</td>
                <td style={tdStyle}>Fast, simple, no dilution yet</td>
              </tr>
              <tr>
                <td style={tdStyle}>Series A</td>
                <td style={tdStyle}>3-6 months</td>
                <td style={tdStyle}>$5M-$50M</td>
                <td style={tdStyle}>Tier-1 VCs</td>
                <td style={tdStyle}>High bar, board seat, brand lift</td>
              </tr>
              <tr>
                <td style={tdStyle}>Private Sale</td>
                <td style={tdStyle}>1-3 months</td>
                <td style={tdStyle}>$1M-$20M</td>
                <td style={tdStyle}>Institutional</td>
                <td style={tdStyle}>Higher price, vesting, constraints</td>
              </tr>
              <tr>
                <td style={tdStyle}>IDO</td>
                <td style={tdStyle}>1-2 weeks</td>
                <td style={tdStyle}>$500k-$10M</td>
                <td style={tdStyle}>Retail/community</td>
                <td style={tdStyle}>Instant liquidity, community building</td>
              </tr>
              <tr>
                <td style={tdStyle}>Public Sale</td>
                <td style={tdStyle}>1 week</td>
                <td style={tdStyle}>$1M-$100M</td>
                <td style={tdStyle}>Everyone</td>
                <td style={tdStyle}>Largest reach, regulatory scrutiny</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="seed-round">
          <h2 style={h2Style}>Seed Round Strategy (SAFE/SAFT)</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Seed rounds validate your idea and fund MVP development. Standard SAFE terms: $500k-$3M, 2-year vesting, MFN (Most Favored Nation) clause, pro-rata rights. SAFT: special variant for token projects, involves future token delivery at mainnet launch. Seed investors expect dilution: typical Series A dilution 15-25% per round, so seed expects 40-50% dilution by Series A.
          </p>

          <h3 style={h3Style}>Seed Round Checklist</h3>
          <ul style={{ marginLeft: 20, color: "#8b949e", lineHeight: 1.8, marginBottom: 24 }}>
            <li>10-20 page pitch deck (problem, market, solution, team, tokenomics, use of funds)</li>
            <li>Whitepaper with clear technical differentiation (15-30 pages typical)</li>
            <li>Financial model (18-month burn rate, runway calculation, unit economics)</li>
            <li>Target 30-50 investor pitches for 5-10 term sheets (hit rate 15-20%)</li>
            <li>Legal SAFT template (Y Combinator or Cooley standard recommended)</li>
            <li>Cap table management (track dilution, option pool, advisor equity)</li>
            <li>Technical demo or MVP (reduces risk perception significantly)</li>
            <li>Team credentials (prior experience, track record, domain expertise)</li>
          </ul>

          <h3 style={h3Style}>Top Seed VCs &amp; Angel Networks</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 24, color: "#8b949e" }}>
            a16z Crypto Seed: invests $500K-$5M early-stage, no board seat typical. Polychain Capital: protocol-focused, early-stage specialist, $200K-$2M tickets. Sequoia Capital (crypto desk): selective, early Bitcoin/Ethereum investors, board seats. Kleiner Perkins: established, DeFi focus. Angel networks: Balaji Srinivasan, Vitalik Buterin (indirect via other VCs), Coinbase Ventures. Founder-to-founder intros: best strategy, 30% close rate vs 5% cold email.
          </p>
        </section>

        <section id="series-a">
          <h2 style={h2Style}>Series A Equity Funding</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Series A scales proven products. Requirements: $1M+ MRR (monthly recurring revenue) OR 10K+ DAU (daily active users) with clear path. 3-6 month runway left (VCs want to see you&apos;re lean). Team of 10+. Typical Series A: $5M-$50M at $20M-$200M valuation. Lead investor takes board seat. Follow-on investors participate but may not.
          </p>

          <h3 style={h3Style}>Series A Requirements Checklist</h3>
          <ul style={{ marginLeft: 20, color: "#8b949e", lineHeight: 1.8, marginBottom: 24 }}>
            <li>Traction: Product-market fit demonstrated; 10k+ users or $500k+ MRR</li>
            <li>Team: 15-30 people; experienced leadership; CTO with track record</li>
            <li>Market: $10B+ TAM (Total Addressable Market); clear competitive advantage</li>
            <li>Financials: Path to $100M+ revenue; unit economics demonstrating sustainability</li>
            <li>Board: Professional board with crypto/VC experience; advisors with industry credibility</li>
            <li>Legal: Clean cap table, resolved seed disputes, IP ownership clear</li>
            <li>Roadmap: 18-24 month product roadmap, clear milestones, honest risk assessment</li>
          </ul>
        </section>

        <section id="private-sales">
          <h2 style={h2Style}>Private Token Sales</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Private token sales target institutional investors and strategic partners. Typical mechanics: $1-20M raises at 10-25% below public IDO price. Vesting: 2-4 year cliff + 2-4 year linear (protects against dumping). Lock-ups: 6-12 month post-launch restrictions for large holders. Strategic investors: obtain board observer rights, technical partnerships, distribution agreements.
          </p>

          <h3 style={h3Style}>Private Sale Structure Details</h3>
          <ul style={{ marginLeft: 20, color: "#8b949e", lineHeight: 1.8, marginBottom: 24 }}>
            <li>Price: $0.10-$1.00 per token typical; 10-25% discount to IDO price</li>
            <li>Allocation: $100k-$5M per investor (minimum rounds to 50+ LPs)</li>
            <li>Vesting: 2-4 year cliff + 2-4 year linear (protects against token dumping)</li>
            <li>Lock-ups: 6-12 month post-launch restrictions for large holders</li>
            <li>Legal: Regulation D (accredited) or Regulation S (offshore) documentation</li>
            <li>Strategic value: board seat, technical collaboration, revenue share opportunities</li>
            <li>Liquidation preferences: 1x non-participating common (not preference stack)</li>
          </ul>
        </section>

        <section id="ido">
          <h2 style={h2Style}>Initial DEX Offering (IDO)</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            IDOs launch tokens directly on DEXs with instant liquidity. Fastest path to public trading; typical $2M-$20M raises. Advantages: 1-7 day execution, instant DEX liquidity, global accessibility, no SEC registration. Disadvantages: volatile price (retail volatility), less institutional credibility, harder to control narrative.
          </p>

          <h3 style={h3Style}>IDO Execution Steps (4 Weeks Typical)</h3>
          <ul style={{ marginLeft: 20, color: "#8b949e", lineHeight: 1.8, marginBottom: 24 }}>
            <li>Week 1: IDO platform selection (Polkastarter, TrustPad, Solanium, OpenZeppelin Shop)</li>
            <li>Week 1-2: Campaign setup, tokenomics finalization, LP (liquidity pool) positioning, pricing</li>
            <li>Week 2-3: Whitelist campaign (300k-1M applications typical for competitive IDOs)</li>
            <li>Week 3: IDO launch, allocations drawn randomly from whitelist (fairness mechanism)</li>
            <li>Post-launch: DEX liquidity pairing, listing announcements, token distribution, secondary trading begins</li>
          </ul>
        </section>

        <section id="top-vcs">
          <h2 style={h2Style}>Top Web3 VCs &amp; Investors (2026)</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Tier-1 Crypto Investors</h3>
            <ul style={{ fontSize: 15, lineHeight: 1.8, marginLeft: 20, color: "#8b949e" }}>
              <li><strong>a16z Crypto:</strong> $4.5B AUM; 80+ portfolio companies; leads Series A rounds. Founders: Chris Dixon (crypto expert). Portfolio: Arbitrum, Polygon, Solana, Aave, Compound.</li>
              <li><strong>Polychain Capital:</strong> $600M+ AUM; protocol-focused; early-stage specialist. Lead: Olaf Carlson-Wee (first Ethereum investor). Focus: Layer 1s, DeFi, infrastructure.</li>
              <li><strong>Paradigm:</strong> $850M AUM; research-driven; infrastructure focused. Founders: Fred Ehrsam (Coinbase co-founder), Danielle Szwarc. Portfolio: Arbitrum, Optimism, dYdX.</li>
              <li><strong>Galaxy Digital:</strong> Public company; $5B+ AUM; institutional focus. CEO: Mike Novogratz. Portfolio: crypto mining, trading, venture investing.</li>
              <li><strong>Multicoin Capital:</strong> $1B+ AUM; sector-thesis approach; DeFi leader. Founder: Kyle Samani. Focus: DeFi protocols, L2s, gaming tokens.</li>
            </ul>
          </div>
        </section>

        <section id="timeline-budget">
          <h2 style={h2Style}>Full Fundraising Timeline &amp; Budget</h2>

          <h3 style={h3Style}>9-18 Month Cycle: Seed → Launch</h3>
          <table style={tableStyle}>
            <tbody>
              <tr>
                <td style={tdStyle}>Months 0-3: Seed Round Prep &amp; Pitching</td>
                <td style={tdStyle}>30-50 pitches, 5-10 meetings, 2-3 term sheets</td>
              </tr>
              <tr>
                <td style={tdStyle}>Months 1-3: Seed Closing &amp; Negotiation</td>
                <td style={tdStyle}>Finalize SAFT/SAFE terms, legal, cap table</td>
              </tr>
              <tr>
                <td style={tdStyle}>Months 3-6: Product Development &amp; Traction</td>
                <td style={tdStyle}>Build MVP, achieve metrics (DAU/MRR/TVL), regulatory clarity</td>
              </tr>
              <tr>
                <td style={tdStyle}>Months 6-12: Series A Prep &amp; Pitching</td>
                <td style={tdStyle}>Business model maturity, 10-15 meetings, 1-2 term sheets</td>
              </tr>
              <tr>
                <td style={tdStyle}>Months 10-14: Series A Closing &amp; Prep for Launch</td>
                <td style={tdStyle}>Token design, regulatory work, private sale, exchange listings</td>
              </tr>
              <tr>
                <td style={tdStyle}>Months 14-18: IDO/Public Launch</td>
                <td style={tdStyle}>Whitelist campaign, IDO execution, secondary trading begins</td>
              </tr>
            </tbody>
          </table>

          <h3 style={h3Style}>Fundraising Budget Breakdown</h3>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 24, color: "#8b949e" }}>
            Legal: $100-200K (SAFT, SAFE, regulatory review, corporate docs). Advisors/Consultants: $50-150K (fundraising coaches, investor relations). Marketing/Events: $50-100K (pitch events, investor dinners, brand building). Audits/Security: $50-150K (smart contract audits, security reviews, code reviews). Total Fundraising Overhead: $500K-$1M over 9-18 months. This is typically built into seed round ($1-3M) and comes from Series A capital if no seed.
          </p>
        </section>

        <section id="legal-compliance">
          <h2 style={h2Style}>Legal &amp; Regulatory Compliance</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, marginBottom: 16, color: "#8b949e" }}>
            Crypto fundraising operates in regulatory gray zone. Frameworks vary by jurisdiction: US (Reg D/Reg S preferred), Singapore (MAS-regulated), UAE (emerging hub). Key considerations: Is your token a security or utility? SEC guidance (2023-2026): most tokens are securities during development, become utilities at maturity. Practical approach: assume security status, follow Reg D (accredited only) for safety.
          </p>

          <h3 style={h3Style}>Regulatory Checklist for Token Projects</h3>
          <ul style={{ marginLeft: 20, color: "#8b949e", lineHeight: 1.8, marginBottom: 24 }}>
            <li>Token Classification: Is your token a security? Consult securities counsel (Cooley, DLA Piper, Orrick)</li>
            <li>Reg D Compliance: If security, use Accredited Investor verification (only high-net-worth investors)</li>
            <li>Reg S: Offshore sales to non-US persons (lower bar but geographic restrictions)</li>
            <li>Anti-Money Laundering: Know Your Customer (KYC) / Anti-Terrorism Financing (ATF) procedures</li>
            <li>Whitepaper Disclaimers: Regulatory risk warnings, non-binding forward-looking statements</li>
            <li>Token Launch Plan: Clear plan for transition from security to utility token (if applicable)</li>
          </ul>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What are the main fundraising methods for crypto projects?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#8b949e" }}>
              Main methods: Seed rounds (SAFE/SAFT), Series A equity funding, private token sales, IDOs (Initial DEX Offerings), public sales, and grants. Most projects use 2-3 methods sequentially.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How much can a crypto startup raise?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#8b949e" }}>
              Seed rounds typically $500k-$3M; Series A $5M-$20M; Series B $20M-$100M+. Token sales can raise $10M-$500M depending on demand. Top tier projects raise $100M+.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What is a SAFT agreement?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#8b949e" }}>
              SAFT (Simple Agreement for Future Tokens) is an early-stage investment contract. Investors get tokens upon mainnet launch. Standard terms: 1-2 year vesting, accredited investor only, no registration required.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What are IDOs and how do they work?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#8b949e" }}>
              IDOs (Initial DEX Offerings) launch tokens directly on decentralized exchanges. Advantages: fast execution (1-7 days), instant liquidity, global accessibility. Use platforms like Polkastarter, TrustPad, or Solanium.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What do venture capitalists look for in crypto?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#8b949e" }}>
              VCs evaluate: market size, team experience, technical differentiation, tokenomics quality, regulatory compliance, existing traction (users/revenue), and competitive positioning.
            </p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How long does crypto fundraising take?</h3>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: "#8b949e" }}>
              Seed: 2-4 months (100+ pitches for 10+ meetings, 3-5 term sheets). Series A: 3-6 months. IDO: 1-3 months prep. Full fundraising cycle (seed to launch): 9-18 months typical.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: "#8b949e" }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and is not legal or financial advice. Crypto fundraising involves complex legal, regulatory, and financial considerations. Token sales may be deemed securities offerings subject to strict regulation. Always consult with qualified legal counsel (securities lawyers), financial advisors, and accountants before fundraising. Regulatory landscape changes frequently. DYOR.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/ecosystem/best-projects-on-mantle" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Projects On Mantle</Link></li>
            <li><Link href="/ecosystem/best-projects-on-mode-network" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Projects On Mode Network</Link></li>
            <li><Link href="/ecosystem/best-projects-on-aptos" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Projects On Aptos</Link></li>
            <li><Link href="/ecosystem/best-projects-on-arbitrum" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Projects On Arbitrum</Link></li>
          </ul>
        </nav>

      <div style={{
        marginTop: "32px",
        padding: "24px",
        backgroundColor: "#111827",
        borderRadius: "12px",
        border: "1px solid #374151"
      }}>
        <h3 style={{ marginBottom: "16px", color: "#f3f4f6" }}>Explore More</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "12px" }}>
          <Link href="/learn" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            All Learning Guides
          </Link>
          <Link href="/tools" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Crypto Tools
          </Link>
          <Link href="/compare" style={{
            padding: "12px 16px",
            backgroundColor: "#1f2937",
            borderRadius: "8px",
            color: "#60a5fa",
            textDecoration: "none",
            border: "1px solid #374151",
            display: "block",
            textAlign: "center",
            transition: "all 0.2s"
          }}>
            Compare Projects
          </Link>
        </div>
      </div>
    </article>
  );
}
