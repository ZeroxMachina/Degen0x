import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: 'Crypto Presale Guide 2026: How They Work, Risks & Red Flags | degen0x',
  description: 'Everything you need to know about crypto presales in 2026: what a presale is, how seed and private rounds work, vesting and unlocks, scam patterns, due-diligence checklist, and how to actually evaluate a presale before you buy.',
  keywords: ['crypto presale', 'what is a crypto presale', 'crypto presale list', 'ico presale', 'ido presale', 'crypto presale 2026', 'how to find crypto presales', 'crypto presale risks'],
  openGraph: {
    type: 'article',
    title: 'Crypto Presale Guide 2026: How They Work, Risks & Red Flags',
    description: 'How crypto presales work, how to evaluate them, and the scam patterns that keep catching people.',
    publishedTime: '2026-04-14T00:00:00Z',
    modifiedTime: '2026-04-14T00:00:00Z',
    url: 'https://degen0x.com/learn/crypto-presale',
    images: [{ url: 'https://degen0x.com/og-learn.svg', width: 1200, height: 630, alt: 'Crypto Presale Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Presale Guide 2026: How They Work, Risks & Red Flags',
    description: 'How presales work, how to evaluate them, and the scam patterns to avoid.',
    images: ['https://degen0x.com/og-learn.svg'],
  },
  alternates: { canonical: 'https://degen0x.com/learn/crypto-presale' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto Presale Guide 2026: How They Work, Risks & Red Flags',
  description: 'Full guide to crypto presales: mechanics, round types, vesting, due-diligence checklist, and scam patterns.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
  author: { '@type': 'Organization', name: 'degen0x' },
  publisher: { '@type': 'Organization', name: 'degen0x', logo: { '@type': 'ImageObject', url: 'https://degen0x.com/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://degen0x.com/learn/crypto-presale' },
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a crypto presale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A crypto presale is a token sale that happens before a project lists on exchanges. Early backers get tokens at a discount in exchange for funding the project and accepting higher risk — the product may not ship, the token may launch below presale price, or there may be no launch at all. Presales today typically happen through launchpads (IDOs), dedicated presale platforms, or directly via a project\'s website.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a seed round, private sale, and public presale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Seed rounds are the earliest stage — usually institutional investors and close friends at deep discounts (sometimes 10–20x below eventual launch price) with long lockups. Private sales come next, often to funds and strategic partners, with smaller discounts and shorter vesting. Public presales (IDOs, IEOs, community rounds) open to retail investors at smaller discounts and shorter or no lockups. The earlier the round, the deeper the discount and the longer the risk window.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are crypto presales legal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on your jurisdiction and how the token is structured. In the US, unregistered token sales that look like securities have drawn SEC enforcement, which is why most presales exclude US participants. In the EU, MiCA sets disclosure and licensing rules for issuers. Many retail-facing presales operate in regulatory grey zones. If a project asks for your ID (KYC), that is a good sign; if it actively tries to avoid regulators, treat that as risk, not savvy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I check before buying a presale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'At minimum: team identity (doxed or credibly pseudonymous with track record), audit status of the contract, token distribution (what % to team/insiders vs community), vesting schedule (is there a cliff? linear unlock?), the platform hosting the sale, fundraising cap, and what the money is used for. If any of these are missing or vague, skip it. "Fair launch" projects that publish full distribution on-chain before the sale are easier to evaluate than opaque ones.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why do presale tokens often dump after listing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A few reasons compound. Presale buyers are up on day one and take profit. Seed and private investors who paid less may still be deep in the money even if price halves. Bots snipe allocations, rotate fast, and sell into retail buyers. And in many cases, the actual utility has not caught up with the price, so natural buying support is thin. The pattern is so common that experienced traders expect a post-TGE dip and wait for it rather than buying the hype candle.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the biggest red flags in a presale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Anonymous team with no verifiable track record; no audit or a "self-audit" PDF; uncapped or opaque raises; tiny community that is mostly bots; unrealistic promises ("guaranteed 100x"); pressure tactics ("last 24 hours, limited allocation"); and presale platforms you cannot verify independently. Also watch for "presales" that are pure meme coins with no product at all — some pump, most vanish, and the expected value for retail is almost always negative after fees and taxes.',
      },
    },
  ],
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const h3Style: React.CSSProperties = { fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' };
const badgeStyle: React.CSSProperties = { display: 'inline-block', padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16 };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderLeft: '3px solid #a78bfa', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };
const linkStyle: React.CSSProperties = { color: '#58a6ff', textDecoration: 'none' };
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', marginBottom: 24, fontSize: 14 };
const thStyle: React.CSSProperties = { background: '#0d1117', border: '1px solid #30363d', padding: 12, textAlign: 'left', color: '#a78bfa', fontWeight: 700 };
const tdStyle: React.CSSProperties = { border: '1px solid #30363d', padding: 12, color: '#c9d1d9' };
const warnBoxStyle: React.CSSProperties = { background: '#2a1111', border: '1px solid #5a1f1f', borderLeft: '3px solid #ef4444', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8, color: '#f2b8b8' };

export default function CryptoPresalePage() {
  const tableOfContents = [
    { id: 'what-is-presale', title: 'What Is a Crypto Presale?' },
    { id: 'round-types', title: 'Round Types: Seed, Private, Public' },
    { id: 'mechanics', title: 'How Presales Work Mechanically' },
    { id: 'vesting', title: 'Vesting, Cliffs, and Unlocks' },
    { id: 'due-diligence', title: 'Due-Diligence Checklist' },
    { id: 'red-flags', title: 'Red Flags and Scam Patterns' },
    { id: 'platforms', title: 'Where Presales Happen in 2026' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

      <main style={{ maxWidth: 900, margin: '0 auto', padding: '32px 20px', color: '#c9d1d9' }}>
        <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: '#8b949e', marginBottom: 20 }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Crypto Presale</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#f59e0b', color: '#000' }}>Presales</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Intermediate</span>
          <h1 style={h1Style}>Crypto Presales in 2026: How They Work, and How Not to Get Rekt</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Presales are how early-stage crypto projects raise money before listing on exchanges. The appeal is obvious — you buy at a discount and, if the project succeeds, launch price is higher than what you paid. The catch is also obvious, once you see the statistics: most tokens launch at lower circulating valuation than their presale FDV implied, insiders unlock before you do, and a meaningful percentage of "presales" are outright scams. This guide explains the full mechanics, round types, vesting rules, a due-diligence checklist you can actually use, the red flags that keep catching retail buyers, and where presales happen in 2026.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 14, 2026</span>
            <span>Reading time: 15 min</span>
          </div>
        </div>

        <AuthorAttribution author="DegenSensei" role="Content Lead" publishedDate="2026-04-14" updatedDate="2026-04-14" readingTime={15} section="learn" />

        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: '#58a6ff' }}>
            {tableOfContents.map((item) => (
              <li key={item.id} style={{ marginBottom: 8 }}>
                <a href={`#${item.id}`} style={linkStyle}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="what-is-presale" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>What Is a Crypto Presale?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            A crypto presale is a sale of project tokens before those tokens are listed on a public exchange. Early backers send stablecoins or ETH/SOL and receive either the tokens directly (sometimes with a vesting schedule) or a claim against future tokens. In theory, the presale price is lower than launch price, and backers are compensated for taking on early-stage risk: no product yet, team execution unproven, regulatory uncertainty, and no liquid market to exit into until listing.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The term "presale" covers a wide spectrum — from well-governed institutional seed rounds for legitimate protocols all the way to straight-up rug pulls dressed up with a landing page. Being able to tell one from the other is the entire skill.
          </p>
        </section>

        <section id="round-types" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Round Types: Seed, Private, Public</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Round</th>
                <th style={thStyle}>Who buys</th>
                <th style={thStyle}>Typical discount to launch</th>
                <th style={thStyle}>Typical vesting</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Seed</td>
                <td style={tdStyle}>VCs, angels, founding insiders</td>
                <td style={tdStyle}>5–20x</td>
                <td style={tdStyle}>1-year cliff + 2–4 year linear</td>
              </tr>
              <tr>
                <td style={tdStyle}>Private / Strategic</td>
                <td style={tdStyle}>Funds, strategic partners, KOLs</td>
                <td style={tdStyle}>2–5x</td>
                <td style={tdStyle}>3–6 month cliff + 1–2 year linear</td>
              </tr>
              <tr>
                <td style={tdStyle}>Public (IDO / IEO / community)</td>
                <td style={tdStyle}>Retail</td>
                <td style={tdStyle}>1.1–2x (or zero)</td>
                <td style={tdStyle}>0–3 months linear</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The public presale is the last and most expensive round. If a token launches and dumps, early rounds are still usually profitable — which is why the public buyer needs to assume the exit liquidity role unless the project genuinely delivers.
          </p>
        </section>

        <section id="mechanics" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>How Presales Work Mechanically</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The common flow in 2026: a project publishes a tokenomics doc (supply, distribution, vesting), announces a presale window, KYC-gates participants on a launchpad or via their own portal, collects stablecoins or ETH/SOL at a fixed price or in an auction, and then either issues tokens at Token Generation Event (TGE) or distributes them after listing.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Modern variants include bonding-curve launches (price rises as more is bought), LBPs / Fjord auctions (Dutch-style price discovery), and fair launches (no presale — all buyers get the same price at listing). Each has different incentive dynamics worth learning before participating.
          </p>
        </section>

        <section id="vesting" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Vesting, Cliffs, and Unlocks</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Vesting is the schedule on which tokens become transferable. A <em>cliff</em> is a period during which nothing unlocks (e.g., 12 months where insider tokens are completely locked). After the cliff, tokens usually vest <em>linearly</em> (a continuous drip) or in <em>periodic tranches</em> (monthly, quarterly).
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Why this matters for buyers: if retail presale tokens vest fully at TGE but insider tokens vest over years, early price action is mostly retail-on-retail. The big overhang arrives at the first cliff unlock, often months in. Check unlock schedules on trackers like Token Unlocks or CryptoRank before you buy.
          </p>
        </section>

        <section id="due-diligence" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Due-Diligence Checklist</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Before sending money to any presale, run through this list. If you cannot answer a line, skip the project.
          </p>
          <ol style={{ marginLeft: 20, lineHeight: 1.9, marginBottom: 16 }}>
            <li><strong>Team:</strong> Are they doxed, or credibly pseudonymous with a verifiable track record? What else have they shipped?</li>
            <li><strong>Product:</strong> Is there a working demo, a testnet, or a whitepaper with actual technical content? Or just marketing?</li>
            <li><strong>Contract:</strong> Has the token/vesting contract been audited by a reputable firm? Is the address verifiable?</li>
            <li><strong>Distribution:</strong> What percent goes to team, investors, community, treasury? Disclosure should be precise, not "fair."</li>
            <li><strong>Vesting:</strong> When does each bucket unlock? Is there a cliff? What does the emission curve look like?</li>
            <li><strong>Fundraise:</strong> Is there a hard cap? What is the presale FDV, and is it reasonable compared to peers?</li>
            <li><strong>Use of funds:</strong> Specific line items, not "marketing and development."</li>
            <li><strong>Community:</strong> Real users and devs, or Telegram bots and copy-pasted comments?</li>
            <li><strong>Legal:</strong> Who is the issuing entity? Which jurisdictions are excluded? Is there a token sale agreement?</li>
            <li><strong>Launchpad:</strong> Is the platform hosting the sale itself reputable? Who lists there is a signal.</li>
          </ol>
        </section>

        <section id="red-flags" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Red Flags and Scam Patterns</h2>
          <div style={warnBoxStyle}>
            <strong>If you see any two of these, walk away.</strong> Anonymous team with no history; no audit or a "self-audit"; unrealistic performance promises; no vesting disclosure; "bonus 2x" for sending in the next hour; copy-pasted whitepaper; inflated social metrics with dead engagement; and pressure to join a Telegram group where you are shown "live buys" from obvious bots.
          </div>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The classic rug: token launches, liquidity looks deep, insiders dump into the liquidity they own, pool drains to zero, team deletes Telegram. The classic slow-rug: token launches, team slowly sells OTC for months, price bleeds, eventually project quietly dies. Both are common. Neither is an accident.
          </p>
        </section>

        <section id="platforms" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Where Presales Happen in 2026</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Reputable IDO launchpads (CoinList, DAOMaker, Polkastarter and similar) do some level of project vetting and are a less dangerous entry point than direct project websites. Fjord Foundry and similar platforms run LBP-style launches. Centralized exchanges occasionally run token launches ("launchpools") where holders of the exchange's native token get allocation. Direct-to-user presales on project websites are the highest-variance category — some of the best projects of any cycle started here, but so do most of the scams.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            If you are getting into presales, rule one: size small. Treat each position as likely-zero and size it accordingly. That is how participants who survive multiple cycles play the asymmetric bet without getting wiped out by the duds.
          </p>
        </section>

        <section id="faq" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Frequently Asked Questions</h2>
          {faqData.mainEntity.map((item, i) => (
            <div key={i} style={{ ...infoBoxStyle, marginBottom: 16 }}>
              <h3 style={{ ...h3Style, marginTop: 0 }}>{item.name}</h3>
              <p style={{ margin: 0, lineHeight: 1.8 }}>{item.acceptedAnswer.text}</p>
            </div>
          ))}
        </section>

        <section style={{ scrollMarginTop: 24, marginTop: 40 }}>
          <h2 style={h2Style}>Related Guides</h2>
          <ul style={{ marginLeft: 20, lineHeight: 2 }}>
            <li><Link href="/learn/crypto-for-beginners" style={linkStyle}>Crypto for Beginners: Start Here</Link></li>
            <li><Link href="/learn/what-is-web3" style={linkStyle}>What Is Web3? Practical Guide</Link></li>
            <li><Link href="/learn/what-is-blockchain" style={linkStyle}>What Is Blockchain? Plain-English Guide</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
