import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Token Unlocks & Vesting Schedules Guide 2026',
  description: 'Understand token vesting schedules, unlock cliffs, dilution impacts, and investment analysis. Learn to predict price pressure from vesting.',
  keywords: ['token vesting', 'token unlocks', 'cliff', 'dilution', 'lockup period', 'supply schedule', 'token economics'],
  openGraph: {
    type: 'article',
    title: 'Token Unlocks & Vesting Schedules Guide 2026',
    description: 'Master vesting schedules: cliffs, linear vesting, dilution, and price impact analysis.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/token-unlocks-vesting-schedules-guide-2026',
    images: [{ url: 'https://degen0x.com/og-learn.svg', width: 1200, height: 630, alt: 'Token Vesting Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Token Unlocks & Vesting Schedules 2026',
    description: 'Master vesting cliffs, dilution analysis, price impact prediction.',
    image: 'https://degen0x.com/og-learn.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/token-unlocks-vesting-schedules-guide-2026',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Token Unlocks & Vesting Schedules Guide 2026',
  description: 'Master vesting schedules, cliffs, dilution, and price impact.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a vesting schedule?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vesting schedule: timeline when tokens become available to holders. Example: 4-year vesting with 1-year cliff = tokens locked 1 year, then 25% unlocked per year for next 3 years. Purpose: prevent founders/investors from dumping on day one. Common cliff: 6 months to 2 years.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a cliff in vesting?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cliff: period where no tokens unlock. After cliff ends, tokens unlock linearly or in batches. Example: 2-year cliff + 2-year linear = no unlock for 2 years, then 50% per year for next 2 years. Longer cliff = longer price pressure delayed.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does token vesting affect price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cliff-end price crash: holders sell unlocked tokens. Example: $1B in tokens unlock on same date = potential $500M-$1B dump. Severity depends on: holders\' cost basis, market sentiment, exchange listings. Risk: avoid buying right before vesting cliff-end (e.g., day 0 of year 2).',
        },
      },
      {
        '@type': 'Question',
        name: 'What allocation typically goes to founders vs investors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Typical allocation: Founders 20-30%, Investors 30-40%, Community/Rewards 30-50%. Founders/investors often have longer vests (3-4 years) with 1-2 year cliffs. Community has shorter vests (0-1 year cliff). Check tokenomics to predict selling pressure timing.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I find a project\'s vesting schedule?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Check: project whitepaper, token economics section, dune analytics (token vesting dashboards), Twitter/Discord announcements. Token unlock tracking: DefiLlama, Messari, Token Unlock Calendar. Most projects publish detailed vesting on GitHub or investor docs.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is fully diluted value (FDV)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'FDV: market cap if all tokens (including vested/unvested) were in circulation. Example: 1B token max supply × $2 price = $2B FDV. Current cap: 100M circulating × $2 = $200M. FDV/circulating cap ratio > 5x = high dilution risk. Higher FDV = more selling pressure ahead.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


const thStyle: React.CSSProperties = { padding: '12px', borderBottom: '2px solid #30363d', textAlign: 'left', fontWeight: 700 };
const linkStyle: React.CSSProperties = { color: '#58a6ff', textDecoration: 'none', cursor: 'pointer' };
const tdStyle: React.CSSProperties = { padding: '12px', borderBottom: '1px solid #30363d' };
const tableStyle: React.CSSProperties = { width: '100%', borderCollapse: 'collapse' };
const h3Style: React.CSSProperties = { fontSize: 18, fontWeight: 700, marginTop: 32, marginBottom: 12, color: '#c9d1d9' };

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Token Unlocks Vesting Schedules Guide 2026', },
  ],
};

export default function TokenVestingPage() {
  const h1Style = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text' as const, WebkitTextFillColor: 'transparent', backgroundClip: 'text' };
  const h2Style = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12, };
  const h3Style = { fontSize: 18, fontWeight: 600, marginTop: 20, marginBottom: 12, color: '#e6edf3' };
  const badgeStyle = { display: 'inline-block' as const, padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16 };
  const linkStyle = { color: '#58a6ff', textDecoration: 'none' };
  const infoBoxStyle = { background: '#161b22', border: '1px solid #30363d', borderLeft: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };
  const tableStyle = { width: '100%', borderCollapse: 'collapse' as const, marginBottom: 24, fontSize: 14 };
  const thStyle = { background: '#0d1117', border: '1px solid #30363d', padding: 12, textAlign: 'left' as const, fontWeight: 700, color: '#e6edf3' };
  const tdStyle = { border: '1px solid #30363d', padding: 12, color: '#8b949e' };

  return (
    <article style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Token Vesting</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#3b82f6', color: '#fff' }}>Learn</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Intermediate</span>
          <h1 style={h1Style}>Token Unlocks &amp; Vesting</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>Understand vesting schedules, cliffs, dilution impacts, and how to predict price pressure from token unlocks.</p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e' }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 14 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={14}
          section="learn"
        />


        <section style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>What Is Token Vesting?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Vesting schedule: timeline when tokens become available to holders. Prevents founders/investors from dumping on day one. Typical structure: cliff (lock period) + linear/batch unlocking.</p>
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
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Example: 4-year vesting with 1-year cliff = tokens locked 1 year, then 25% unlocked per year for next 3 years. Common cliff: 6 months to 2 years.</p>
        </section>

        <section style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Vesting Schedule Types</h2>
          <h3 style={h3Style}>Linear Vesting</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Tokens unlock smoothly over time. 100 tokens over 48 months = 2.08 tokens per month. Predictable sell pressure, less price shock.</p>
          <h3 style={h3Style}>Cliff + Linear</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Lock period, then linear unlock. 1-year cliff + 3-year linear = no unlock for 1 year, then 25% per year after. Price shock risk at cliff-end.</p>
          <h3 style={h3Style}>Batch Unlock</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Tokens unlock in batches on specific dates. Example: 25% unlock every quarter. Similar shock risk as cliff.</p>
        </section>

        <section style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>How Vesting Affects Price</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>Cliff-end price crash: holders sell unlocked tokens. Example: $1B in tokens unlock on same date = potential $500M-$1B dump. Severity depends on: holders&apos; cost basis, market sentiment, exchange listings.</p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Avoid Price Shock</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14, color: '#c9d1d9' }}>Risk: buying right before vesting cliff-end (e.g., day 0 of year 2). Strategy: buy after unlock event when sell pressure subsides.</p>
          </div>
        </section>

        <section style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Token Allocation &amp; Vesting Terms</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Category</th>
                <th style={thStyle}>% Allocation</th>
                <th style={thStyle}>Typical Vest</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Founders</td>
                <td style={tdStyle}>20-30%</td>
                <td style={tdStyle}>4 years + 1-2 year cliff</td>
              </tr>
              <tr>
                <td style={tdStyle}>Investors</td>
                <td style={tdStyle}>30-40%</td>
                <td style={tdStyle}>3-4 years + 1 year cliff</td>
              </tr>
              <tr>
                <td style={tdStyle}>Community/Rewards</td>
                <td style={tdStyle}>30-50%</td>
                <td style={tdStyle}>0-1 year cliff</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Fully Diluted Value (FDV)</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>FDV: market cap if all tokens (including vested/unvested) were in circulation. Example: 1B token max supply × $2 price = $2B FDV. Current cap: 100M circulating × $2 = $200M. FDV/circulating cap ratio &gt; 5x = high dilution risk.</p>
          <h3 style={h3Style}>FDV Impact Analysis</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8, color: '#c9d1d9' }}>High FDV = more selling pressure ahead. Example: Optimism (OP) circulating $4B, FDV $20B = 5x dilution. After airdrops, price dropped 30-40%. Check vesting schedule before investing.</p>
        </section>

        <section style={{ scrollMarginTop: 48, marginTop: 48 }}>
          <h2 style={h2Style}>FAQ</h2>
          {[
            { q: 'What is a vesting schedule?', a: 'Timeline when tokens become available to holders. Example: 4-year vesting with 1-year cliff = locked 1 year, then 25% per year for next 3 years. Purpose: prevent early dumps.' },
            { q: 'What is a cliff in vesting?', a: 'Period where no tokens unlock. After cliff, tokens unlock linearly or in batches. Example: 2-year cliff + 2-year linear = no unlock for 2 years, then 50% per year.' },
            { q: 'How does token vesting affect price?', a: 'Cliff-end causes sell pressure. Example: $1B in tokens unlocking same date = potential $500M dump. Avoid buying before cliff-end.' },
            { q: 'What allocation typically goes to founders vs investors?', a: 'Founders 20-30%, Investors 30-40%, Community 30-50%. Founders/investors have longer vests (3-4 years + 1-2 year cliffs).' },
            { q: 'How do I find a project\'s vesting schedule?', a: 'Check whitepaper, token economics, Dune Analytics dashboards, or Token Unlock Calendar. Most projects publish vesting details on GitHub.' },
            { q: 'What is fully diluted value (FDV)?', a: 'Market cap if all tokens were in circulation. Example: 1B max supply × $2 = $2B FDV. FDV/circulating > 5x = high dilution risk.' },
          ].map((faq, i) => (
            <div key={i} style={{ ...infoBoxStyle, marginBottom: 16 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#58a6ff', marginBottom: 10 }}>{faq.question}</h3>
              <p style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.7, marginBottom: 0 }}>{faq.answer}</p>
            </div>
          ))}
        </section>

        <nav style={{ marginTop: 48, paddingTop: 24, borderTop: '1px solid #30363d' }}>
          <h2 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12, color: '#e6edf3' }}>Related Guides</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
            <li><Link href="/learn/crypto-airdrops-farming-guide-2026" style={linkStyle}>Crypto Airdrops &amp; Farming Guide</Link></li>
            <li><Link href="/learn/dao-governance-onchain-voting-guide-2026" style={linkStyle}>DAO Governance &amp; Voting</Link></li>
            <li><Link href="/learn/what-is-a-crypto-index-fund" style={linkStyle}>Crypto Index Funds</Link></li>
            <li><Link href="/learn/what-is-a-liquidity-pool" style={linkStyle}>Liquidity Pools Explained</Link></li>
            <li><Link href="/learn/stablecoins-explained-guide-2026" style={linkStyle}>Stablecoins Explained</Link></li>
          </ul>
        </nav>

        <div style={{ marginTop: 32, padding: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 8, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> Vesting schedules are complex and vary widely. Always DYOR and check official tokenomics docs before investing. This is educational content only, not financial advice.
        </div>
      </div>
    
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Token Unlocks & Vesting Schedules Guide 2026", "description": "Understand token vesting schedules, unlock cliffs, dilution impacts, and investment analysis. Learn to predict price pressure from vesting.", "url": "https://degen0x.com/learn/token-unlocks-vesting-schedules-guide-2026", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>
      </article>
  );
}
