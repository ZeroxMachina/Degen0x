import { Metadata } from "next";
import Link from "next/link";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Governance Markets & Liquid Lockers (Convex, Aura, Vote Markets) Guide 2026',
  description:
    'Master governance markets, liquid lockers, Convex, Aura, and vote markets in DeFi. Learn how veTokenomics, Convex\'s cvxCRV, Aura, bribes, and liquidity wars shape modern governance.',
  keywords: [
    'governance markets',
    'liquid lockers',
    'Convex Finance',
    'Aura Finance',
    'cvxCRV',
    'auraBAL',
    'vote markets',
    'bribes',
    'veTokenomics',
    'veCRV',
    'vlCVX',
    'vlAURA',
    'Votium',
    'Hidden Hand',
    'Curve Wars',
    'DeFi governance',
  ],
  openGraph: {
    title: 'Governance Markets & Liquid Lockers (Convex, Aura, Vote Markets) Guide 2026',
    description:
      'Master governance markets, liquid lockers, Convex, Aura, and vote markets in DeFi. Learn how veTokenomics, Convex\'s cvxCRV, Aura, bribes, and liquidity wars shape modern governance.',
    url: 'https://degen0x.com/learn/governance-markets-liquid-lockers-convex-aura-vote-markets-guide-2026',
    siteName: 'degen0x',
    type: 'article',
    images: [
      {
        url: 'https://degen0x.com/og/governance-markets-liquid-lockers.png',
        width: 1200,
        height: 630,
        alt: 'Governance Markets & Liquid Lockers Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Governance Markets & Liquid Lockers (Convex, Aura, Vote Markets) Guide 2026',
    description:
      'Master governance markets, liquid lockers, Convex, Aura, and vote markets in DeFi. Learn how veTokenomics, Convex\'s cvxCRV, Aura, bribes, and liquidity wars shape modern governance.',
    images: ['https://degen0x.com/og/governance-markets-liquid-lockers.png'],
  },
  canonical: 'https://degen0x.com/learn/governance-markets-liquid-lockers-convex-aura-vote-markets-guide-2026',
  alternates: {
    canonical: 'https://degen0x.com/learn/governance-markets-liquid-lockers-convex-aura-vote-markets-guide-2026',
  },
};

export default function GovernanceMarketsPage() {
  const faqs = [
    {
      question: 'What is a liquid locker?',
      answer:
        'A liquid locker is a DeFi protocol that locks governance tokens long-term and issues liquid wrapper tokens. Users deposit tokens like CRV, BAL, or AURA into Convex or Aura, receive transferable wrappers (cvxCRV, auraBAL), and earn yields without bearing the opportunity cost of multi-year locks.',
    },
    {
      question: 'Why would I use Convex instead of locking CRV directly?',
      answer:
        'Direct veCRV locks require a 4-year commitment with no liquidity. Convex offers cvxCRV, which is liquid, transferable, and earns protocol revenue. Additionally, Convex amplifies your voting power through meta-governance: vlCVX holders control how Convex votes, making governance participation accessible.',
    },
    {
      question: 'How do vote markets and bribes work?',
      answer:
        'Protocols offer bribes (in tokens or stablecoins) to incentivize governance voters to direct emissions toward their liquidity pools. Platforms like Votium and Hidden Hand facilitate transparent, auction-based bribe distribution. Historically, $1 in bribes generated >$4 in CRV emissions, making bribes highly effective.',
    },
    {
      question: 'What is vlCVX and why does it matter?',
      answer:
        'vlCVX is vote-locked CVX for 16 weeks. Holders vote on which Curve gauges Convex targets with veCRV voting power. This is meta-governance: by controlling CVX, you indirectly control CRV emissions. CVX governance is critical for protocols seeking Curve liquidity.',
    },
    {
      question: 'Is liquid locking risky?',
      answer:
        'Liquid lockers centralize governance power and depend on protocol solvency. Convex holds ~53% of veCRV, creating systemic risk if exploited or mismanaged. Smart contract risks, fee structures, and governance changes also apply. Always research protocols and use position sizing.',
    },
    {
      question: 'What are the key differences between Convex and Aura?',
      answer:
        'Convex aggregates veCRV on Curve; Aura aggregates veBAL on Balancer. Both follow the liquid locker model but target different underlying governance tokens. Aura is newer (launched June 2022) and serves a different ecosystem. Both offer similar incentive structures with wrapper tokens and governance tokens.',
    },
  ];

  const liquidLockersComparison = [
    {
      name: 'Convex Finance',
      governance_token: 'CRV',
      liquid_token: 'cvxCRV',
      voting_power: '~53% of veCRV',
      cvx_supply: 'Up to 100M CVX',
      fee_structure: '17% performance fee',
      launch_date: '2020',
      tvl_status: 'Significantly lower from $20B+ peak',
    },
    {
      name: 'Aura Finance',
      governance_token: 'BAL',
      liquid_token: 'auraBAL',
      voting_power: 'Significant veBAL %',
      cvx_supply: 'Up to 80M AURA',
      fee_structure: 'Similar fee model',
      launch_date: 'June 2022',
      tvl_status: 'Growing, smaller than Convex',
    },
  ];

  const voteMarketsComparison = [
    {
      platform: 'Votium',
      type: 'OTC Bribery',
      avg_bi_weekly_bribes: '$9.4M (historical)',
      fee: 'Variable',
      target: 'CRV gauge emissions',
    },
    {
      platform: 'Hidden Hand',
      type: 'Permissionless Marketplace',
      avg_bi_weekly_bribes: 'Variable',
      fee: '4% service fee',
      target: 'Multi-protocol governance',
    },
    {
      platform: 'Paladin (Warden Quest)',
      type: 'Bribe Routing',
      avg_bi_weekly_bribes: 'Variable',
      fee: 'Protocol-specific',
      target: 'Multi-protocol governance',
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b" style={{ backgroundColor: '#0d1117' }}>
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl">
          {/* Category Badge */}
          <div className="mb-6 flex items-center gap-3">
            <span
              className="rounded-full px-3 py-1 text-sm font-semibold"
              style={{ backgroundColor: '#4f46e5', color: '#fff' }}
    >
              DeFi
            </span>
            <span
              style={{ backgroundColor: '#a855f7', color: '#fff' }}
    >
              Advanced
            </span>
            <span className="text-sm" style={{ color: '#8b949e' }}>
              April 2026 • 14 min read
            </span>
          </div>

          {/* Main Title */}
          <h1
            className="mb-6 text-5xl font-bold leading-tight sm:text-6xl"
            style={{
              background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
    >
            Governance Markets & Liquid Lockers
          </h1>

          <p className="mb-4 text-xl" style={{ color: '#e6edf3' }}>
            Master Convex, Aura, Vote Markets, and the DeFi Governance Ecosystem
          </p>

          <p style={{ color: '#8b949e' }} className="text-lg">
            Learn how liquid lockers democratize governance access, how vote markets price governance influence, and how protocols use bribes to compete for liquidity in the governance wars.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Table of Contents */}
        <div
          className="mb-12 rounded-lg border p-6"
          style={{ backgroundColor: '#161b22', borderColor: '#30363d' }}
    >
          <h2 className="mb-4 text-2xl font-bold" style={{ color: '#e6edf3' }}>
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {[
              { id: 'liquid-lockers-overview', label: 'Liquid Lockers Overview' },
              { id: 'convex-finance', label: 'Convex Finance Deep Dive' },
              { id: 'aura-finance', label: 'Aura Finance' },
              { id: 'vote-markets', label: 'Vote Markets & Bribes' },
              { id: 'curve-wars', label: 'The Curve Wars & Meta-Governance' },
              { id: 'governance-impact', label: 'Why This Matters for DeFi' },
              { id: 'faq', label: 'FAQ' },
            ].map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: '#58a6ff' }}
    >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section: Liquid Lockers Overview */}
        <section id="liquid-lockers-overview" className="mb-12">
          <h2 className="mb-6 text-4xl font-bold" style={{ color: '#e6edf3' }}>
            Liquid Lockers Overview
          </h2>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            Liquid lockers solve a fundamental problem in modern DeFi governance: veTokenomics. Protocols like Curve introduced vote-escrow (ve) mechanics, requiring users to lock tokens for years (typically 4 years for veCRV) to receive governance power and protocol revenue. This creates a harsh tradeoff: either sacrifice liquidity for governance power, or forfeit governance participation entirely.
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

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            <strong>Liquid lockers bridge this gap.</strong> Instead of locking tokens yourself, you deposit governance tokens (CRV, BAL, AURA) into a liquid locker protocol and receive liquid wrapper tokens (cvxCRV, auraBAL) in return. These wrappers are:
          </p>

          <ul className="mb-6 space-y-2 pl-4">
            {[
              'Transferable: Trade them on DEXes or send them anywhere',
              'Stakeable: Earn yields without losing liquidity',
              'Yield-bearing: Capture protocol revenue and bribes',
              'Accessible: No lock commitment required',
            ].map((item, idx) => (
              <li key={idx} style={{ color: '#e6edf3' }} className="border-l-2 border-indigo-500 pl-4">
                {item}
              </li>
            ))}
          </ul>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            The liquid locker itself permanently locks the underlying tokens and accumulates massive voting power. This creates meta-governance: control the wrapper token to indirectly control the underlying governance power. Liquid lockers have become kingmakers in DeFi, wielding outsized voting influence on protocol decisions.
          </p>
        </section>

        {/* Section: Convex Finance */}
        <section id="convex-finance" className="mb-12">
          <h2 className="mb-6 text-4xl font-bold" style={{ color: '#e6edf3' }}>
            Convex Finance: The Largest Liquid Locker
          </h2>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            Convex is the dominant liquid locker on Curve, controlling approximately <strong>53% of all veCRV</strong> as of April 2026. It&apos;s the blueprint for liquid locking and has inspired similar protocols across the DeFi ecosystem.
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            How Convex Works
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            Users deposit CRV tokens into Convex and receive cvxCRV in return at a 1:1 ratio. Convex locks all deposited CRV as veCRV permanently on Curve, accumulating immense voting power. cvxCRV holders receive:
          </p>

          <ul className="mb-6 space-y-2 pl-4">
            {[
              '70% of CRV earned from Curve gauges',
              'Protocol performance fees',
              'The ability to trade, stake, or transfer cvxCRV',
            ].map((item, idx) => (
              <li key={idx} style={{ color: '#e6edf3' }} className="border-l-2 border-cyan-500 pl-4">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            CVX Governance Token
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            CVX is Convex&apos;s governance token. Holders lock CVX for 16 weeks to receive vlCVX (vote-locked CVX), which grants voting rights on Convex&apos;s gauge weight decisions. This is crucial: vlCVX holders determine <strong>how Convex deploys its veCRV voting power</strong>.
          </p>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            For protocols seeking Curve liquidity, controlling CVX is often more efficient than accumulating veCRV directly. Instead of locking CRV for 4 years, protocols can acquire CVX, lock it for 16 weeks, and vote on gauge weights. This meta-governance model has become central to DeFi competition.
          </p>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            <strong>Current CVX price (April 2026):</strong> ~$1.82 per token. Note: TVL peaked above $20B in 2022 but has declined significantly since.
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            Fee Structure
          </h3>

          <p className="mb-6" style={{ color: '#e6edf3' }}>
            Convex captures 17% of performance revenue:
          </p>

          <ul className="mb-6 space-y-2 pl-4">
            {[
              '10% to cvxCRV stakers',
              '4.5% to CVX stakers',
              '2% to treasury',
              '0.5% to harvest callers',
            ].map((item, idx) => (
              <li key={idx} style={{ color: '#e6edf3' }} className="border-l-2 border-purple-500 pl-4">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            Recent Developments
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            In January 2026, Asymmetry purchased 10,500 vlCVX for protocol-owned liquidity initiatives, demonstrating continued institutional interest. Q1 2026 saw governance votes on a $10M Pendle integration, showing Convex&apos;s evolution beyond Curve.
          </p>
        </section>

        {/* Section: Aura Finance */}
        <section id="aura-finance" className="mb-12">
          <h2 className="mb-6 text-4xl font-bold" style={{ color: '#e6edf3' }}>
            Aura Finance: Balancer&apos;s Liquid Locker
          </h2>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            Aura is the Convex equivalent for Balancer, launched in June 2022. It aggregates veBAL voting power and issues auraBAL (1:1 ratio) to depositors. The mechanics mirror Convex but serve the Balancer ecosystem instead of Curve.
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            Key Differences
          </h3>

          <ul className="mb-6 space-y-2 pl-4">
            {[
              'Underlying token: BAL (Balancer)',
              'Liquid wrapper: auraBAL',
              'Governance: vlAURA (vote-locked AURA)',
              'Supply: Up to 80M AURA tokens',
              'Ecosystem: Smaller than Convex but growing',
            ].map((item, idx) => (
              <li key={idx} style={{ color: '#e6edf3' }} className="border-l-2 border-indigo-500 pl-4">
                {item}
              </li>
            ))}
          </ul>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            Aura demonstrates that the liquid locker model is protocol-agnostic. Any ve-based governance system can benefit from aggregation, democratization, and meta-governance layers. The model has since expanded to Frax, Pendle, and beyond.
          </p>
        </section>

        {/* Section: Vote Markets */}
        <section id="vote-markets" className="mb-12">
          <h2 className="mb-6 text-4xl font-bold" style={{ color: '#e6edf3' }}>
            Vote Markets & Bribes: Governance as a Commodity
          </h2>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            Vote markets represent the formalization of governance influence as a tradeable commodity. Protocols compete for governance votes by offering bribes—payments in tokens or stablecoins to incentivize voters to direct emissions toward specific liquidity pools.
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            How Bribes Work
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            A protocol (e.g., a stablecoin platform) offers a bribe: "If you vote for our gauge on Curve, we&apos;ll pay you 10,000 USDC." Voters compare bribes across gauges and vote strategically to maximize returns. This creates a market price for governance influence.
          </p>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            <strong>Historical efficiency:</strong> $1 in bribes historically generated &gt;$4 in CRV emissions—a remarkable return. This explains why the bribe market has grown into a multi-billion-dollar industry.
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            Vote Market Platforms
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            Several platforms facilitate bribe discovery and routing:
          </p>

          <div
            className="mb-6 overflow-x-auto rounded-lg border"
            style={{ borderColor: '#30363d', backgroundColor: '#161b22' }}
    >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottomColor: '#30363d', borderBottom: '1px solid' }}>
                  <th className="px-4 py-2 text-left font-semibold" style={{ color: '#e6edf3' }}>
                    Platform
                  </th>
                  <th className="px-4 py-2 text-left font-semibold" style={{ color: '#e6edf3' }}>
                    Type
                  </th>
                  <th className="px-4 py-2 text-left font-semibold" style={{ color: '#e6edf3' }}>
                    Fee Structure
                  </th>
                </tr>
              </thead>
              <tbody>
                {voteMarketsComparison.map((platform, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottomColor: '#30363d',
                      borderBottom: idx < voteMarketsComparison.length - 1 ? '1px solid' : 'none',
                    }}
    >
                    <td className="px-4 py-2" style={{ color: '#e6edf3' }}>
                      {platform.platform}
                    </td>
                    <td className="px-4 py-2" style={{ color: '#8b949e' }}>
                      {platform.type}
                    </td>
                    <td className="px-4 py-2" style={{ color: '#8b949e' }}>
                      {platform.fee}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            <strong>Votium:</strong> Historically the largest CRV bribe platform, averaging $9.4M in bribes bi-weekly. OTC model with direct negotiation.
          </p>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            <strong>Hidden Hand:</strong> Developed by Redacted Cartel, this permissionless marketplace enables anyone to post bribes. Charges a 4% service fee and supports multiple protocols beyond Curve.
          </p>

          <p className="mb-6" style={{ color: '#e6edf3' }}>
            <strong>Paladin (Warden Quest):</strong> Another bribe routing platform offering permissionless bribe aggregation and routing.
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            "Liquidity Wars 3.0"
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            The maturation of vote markets has been dubbed "Liquidity Wars 3.0" — a formalized, transparent competition for governance influence. Unlike early governance wars fought informally through token accumulation, today&apos;s governance market features:
          </p>

          <ul className="mb-6 space-y-2 pl-4">
            {[
              'Transparent bribe discovery dashboards',
              'Automated bribe routing optimization',
              'Real-time pricing of governance influence',
              'Permissionless entry for protocols offering bribes',
            ].map((item, idx) => (
              <li key={idx} style={{ color: '#e6edf3' }} className="border-l-2 border-cyan-500 pl-4">
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Section: Curve Wars */}
        <section id="curve-wars" className="mb-12">
          <h2 className="mb-6 text-4xl font-bold" style={{ color: '#e6edf3' }}>
            The Curve Wars: History & Meta-Governance
          </h2>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            The "Curve Wars" began in 2021 when protocols realized that controlling CRV emissions through veCRV voting was more cost-effective than bootstrapping liquidity manually. This sparked a race to accumulate veCRV, with major competitors including Yearn, Convex, and others.
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            The Timeline
          </h3>

          <ul className="mb-6 space-y-2 pl-4">
            {[
              '2021: Protocols begin accumulating veCRV; Curve Wars intensify',
              '2020–2022: Convex emerges as dominant aggregator',
              '2022+: Meta-governance dominates; controlling CVX becomes more efficient than CRV',
              '2024–2026: Vote markets mature; bribes become the primary competition mechanism',
            ].map((item, idx) => (
              <li key={idx} style={{ color: '#e6edf3' }} className="border-l-2 border-purple-500 pl-4">
                {item}
              </li>
            ))}
          </ul>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            Meta-Governance Dynamics
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            The hierarchy of control in the Curve ecosystem illustrates meta-governance:
          </p>

          <ol className="mb-6 space-y-3 pl-4">
            {[
              'Control vlCVX → control how Convex votes',
              'Control how Convex votes → influence veCRV allocation',
              'Control veCRV allocation → direct CRV emissions',
              'Control CRV emissions → direct liquidity incentives to specific pools',
            ].map((item, idx) => (
              <li key={idx} style={{ color: '#e6edf3' }} className="border-l-2 border-indigo-500 pl-4">
                <strong>{idx + 1}.</strong> {item}
              </li>
            ))}
          </ol>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            This layered governance structure means that controlling CVX is often more cost-effective than direct CRV accumulation. Protocols strategically acquire CVX, lock it as vlCVX, and vote on gauge weights to attract liquidity.
          </p>
        </section>

        {/* Section: Why This Matters */}
        <section id="governance-impact" className="mb-12">
          <h2 className="mb-6 text-4xl font-bold" style={{ color: '#e6edf3' }}>
            Why Governance Markets & Liquid Lockers Matter
          </h2>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            The evolution of governance markets and liquid lockers reflects fundamental shifts in how DeFi operates:
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            1. Democratization of Governance
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            Liquid lockers lower barriers to governance participation. Instead of locking tokens for years, users can access governance exposure through transferable, liquid wrappers. This increases governance participation and creates more resilient voting mechanisms.
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            2. Price Discovery for Governance Influence
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            Vote markets create transparent pricing for governance influence. Bribes reveal the true cost of attracting liquidity, allowing protocols to make data-driven decisions about capital allocation.
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            3. Cost-Effective Liquidity Acquisition
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            For protocols, bribing is often cheaper than bootstrapping liquidity directly. A $100K bribe can attract millions in liquidity if voters respond rationally. This efficiency drives the continued growth of vote markets.
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            4. Ecosystem Expansion
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            The liquid locker model is now standard across DeFi. Beyond Convex and Aura, protocols have launched liquid lockers for Frax (frxETH), Pendle (PT), and others. This suggests ve-tokenomics and liquid locking will remain central to DeFi governance.
          </p>

          <h3 className="mb-3 text-2xl font-semibold" style={{ color: '#e6edf3' }}>
            5. Systemic Risk Considerations
          </h3>

          <p className="mb-4" style={{ color: '#e6edf3' }}>
            As Convex controls 53% of veCRV, concentration risk grows. A Convex exploit or governance failure could destabilize Curve&apos;s incentive distribution. Monitoring liquid locker concentration is critical for assessing DeFi systemic health.
          </p>
        </section>

        {/* Comparison Tables */}
        <section id="comparisons" className="mb-12">
          <h3 className="mb-6 text-2xl font-bold" style={{ color: '#e6edf3' }}>
            Liquid Lockers Comparison
          </h3>

          <div
            className="mb-12 overflow-x-auto rounded-lg border"
            style={{ borderColor: '#30363d', backgroundColor: '#161b22' }}
    >
            <table className="w-full text-sm">
              <thead>
                <tr style={{ borderBottomColor: '#30363d', borderBottom: '1px solid' }}>
                  <th className="px-4 py-2 text-left font-semibold" style={{ color: '#e6edf3' }}>
                    Protocol
                  </th>
                  <th className="px-4 py-2 text-left font-semibold" style={{ color: '#e6edf3' }}>
                    Underlying Token
                  </th>
                  <th className="px-4 py-2 text-left font-semibold" style={{ color: '#e6edf3' }}>
                    Liquid Token
                  </th>
                  <th className="px-4 py-2 text-left font-semibold" style={{ color: '#e6edf3' }}>
                    Voting Power
                  </th>
                </tr>
              </thead>
              <tbody>
                {liquidLockersComparison.map((item, idx) => (
                  <tr
                    key={idx}
                    style={{
                      borderBottomColor: '#30363d',
                      borderBottom: idx < liquidLockersComparison.length - 1 ? '1px solid' : 'none',
                    }}
    >
                    <td className="px-4 py-2 font-semibold" style={{ color: '#e6edf3' }}>
                      {item.name}
                    </td>
                    <td className="px-4 py-2" style={{ color: '#8b949e' }}>
                      {item.governance_token}
                    </td>
                    <td className="px-4 py-2" style={{ color: '#8b949e' }}>
                      {item.liquid_token}
                    </td>
                    <td className="px-4 py-2" style={{ color: '#8b949e' }}>
                      {item.voting_power}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-12">
          <h2 className="mb-6 text-4xl font-bold" style={{ color: '#e6edf3' }}>
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="rounded-lg border p-4 transition-all"
                style={{ borderColor: '#30363d', backgroundColor: '#161b22' }}
    >
                <summary
                  className="cursor-pointer font-semibold"
                  style={{ color: '#e6edf3' }}
    >
                  {faq.question}
                </summary>
                <p className="mt-3 pt-3" style={{ color: '#8b949e', borderTopColor: '#30363d', borderTopWidth: '1px' }}>
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Related Learning Paths */}
        <section className="mb-12">
          <h2 className="mb-6 text-4xl font-bold" style={{ color: '#e6edf3' }}>
            Related Learning Paths
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {[
              {
                title: 've-Tokenomics & Vote-Escrowed Tokens',
                slug: 'vetokenomics-vote-escrowed-tokens-defi-governance-guide-2026',
                description: 'Understand the ve model that powers governance',
              },
              {
                title: 'Concentrated Liquidity & LP Strategies',
                slug: 'concentrated-liquidity-lp-strategies-guide-2026',
                description: 'Master modern LP techniques and capital efficiency',
              },
              {
                title: 'Real Yield & Protocol Revenue',
                slug: 'real-yield-defi-protocol-revenue-guide-2026',
                description: 'How protocols generate sustainable returns',
              },
              {
                title: 'Protocol-Owned Liquidity (POL)',
                slug: 'protocol-owned-liquidity-pol-treasury-guide-2026',
                description: 'Strategic treasury management through POL',
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={`/learn/${item.slug}`}
                className="rounded-lg border p-4 transition-colors hover:opacity-80"
                style={{ borderColor: '#30363d', backgroundColor: '#161b22' }}
    >
                <h3 className="font-semibold" style={{ color: '#58a6ff' }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: '#8b949e' }}>
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Educational Disclaimer */}
        <section
          className="rounded-lg border p-6"
          style={{ borderColor: '#30363d', backgroundColor: '#161b22' }}
    >
          <h3 className="mb-3 text-lg font-semibold" style={{ color: '#e6edf3' }}>
            Educational Disclaimer
          </h3>
          <p style={{ color: '#8b949e', fontSize: '0.875rem' }}>
            This guide is educational content for informational purposes only and does not constitute financial advice, investment advice, or a recommendation to buy, sell, or hold any asset. Governance markets, liquid lockers, and DeFi protocols involve significant risks, including smart contract vulnerabilities, impermanent loss, governance attacks, and concentration risks. Always conduct your own research, understand the risks, and never invest more than you can afford to lose. Past performance and historical metrics are not guarantees of future results. Markets, protocols, and governance structures evolve rapidly—information current as of April 2026 may become outdated.
          </p>
        </section>
      </section>
    </main>
  );
}
