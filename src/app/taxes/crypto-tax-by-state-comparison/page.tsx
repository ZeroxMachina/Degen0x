import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Crypto Tax by State Comparison 2026 | No-Tax States vs High-Tax | degen0x'
  description: 'State cryptocurrency tax comparison 2026: Texas, Florida, Wyoming 0% income tax. California 13.3% + 1% surtax. New York 10.9%. Crypto-friendly states & mining rules.'
  keywords: ['crypto tax by state', 'no income tax states', 'Texas crypto tax', 'Florida crypto tax', 'Wyoming crypto tax', 'California crypto tax', 'crypto-friendly states']
  openGraph: {
    title: 'Crypto Tax by State 2026'
    description: 'Compare state income taxes: zero-tax states (TX, FL, WY, NV, TN, WA, SD, AK), high-tax states (CA, NY), and crypto-friendly legislation.'
    url: 'https://degen0x.com/taxes/crypto-tax-by-state-comparison'
    type: 'article'
  }

  alternates: {
    canonical: 'https://degen0x.com/taxes/crypto-tax-by-state-comparison'
  }},
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Tax by State Comparison 2026 | No-Tax States vs High-Tax | degen0x',
    description: 'State cryptocurrency tax comparison 2026: Texas, Florida, Wyoming 0% income tax. California 13.3% + 1% surtax. New York 10.9%. Crypto-friendly states & mining rules.',
    image: 'https://degen0x.com/og-default.svg',
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto Tax by State Comparison 2026: No-Income-Tax States vs High-Tax States',
  description: 'Complete guide to state cryptocurrency taxes: zero-tax states (Texas, Florida, Wyoming, Nevada), high-tax states (California, New York), and crypto-friendly legislation by state.',
  image: 'https://degen0x.com/og-taxes.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Which US states have zero income tax?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Eight states have zero income tax: Texas, Florida, Wyoming, Nevada, Tennessee, Washington, South Dakota, and Alaska. Moving to a zero-tax state can save 5–13.3% on crypto gains annually.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is California\'s crypto tax rate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'California taxes capital gains as ordinary income: 9.3–13.3% depending on bracket, plus 1% net investment income surtax for incomes over $250K. Total effective rate can exceed 14%.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best state for crypto businesses?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wyoming is the most crypto-friendly: zero income tax, no capital gains tax, DAO-specific legislation (DAO classification as LLC), and favorable mining regulations. Other contenders: Texas (zero tax, pro-business), Colorado (zero capital gains tax).',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I move to a zero-tax state to avoid state taxes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Establishing bona fide residency (changing domicile) in a zero-tax state exempts you from your former state\'s income tax. IRS requires proof: driver\'s license, voter registration, property ownership, 183+ days residence.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does New York have special crypto taxes?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'New York taxes capital gains 6.85–10.9% depending on bracket. NYC residents pay additional 3.876% city tax on gains, reaching ~14.8% total. No special crypto surcharge, but considered one of the highest in the nation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are crypto-friendly states?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Wyoming: DAO legislation, zero tax. Texas: zero tax, pro-business. Colorado: zero capital gains tax (2024). Nevada: zero income tax, blockchain division. Tennessee: zero income tax. These states actively support crypto innovation.',
        },
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Tax by State Comparison 2026 | No-Tax States vs High-Tax | degen0x',
    description: 'State cryptocurrency tax comparison 2026: Texas, Florida, Wyoming 0% income tax. California 13.3% + 1% surtax. New York 10.9%. Crypto-friendly states & mining rules.',
    image: 'https://degen0x.com/og-default.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Tax by State Comparison 2026 | No-Tax States vs High-Tax | degen0x',
    description: 'State cryptocurrency tax comparison 2026: Texas, Florida, Wyoming 0% income tax. California 13.3% + 1% surtax. New York 10.9%. Crypto-friendly states & mining rules.',
    image: 'https://degen0x.com/og-default.svg',
  }
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #fb7185, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#fb7185', borderBottom: '2px solid #4c1d2a', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function CryptoTaxByStateComparison() {
  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #fb7185', borderLeft: '3px solid #fb7185',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #64748b, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#fb7185', borderBottom: '2px solid #4c1d2a', paddingBottom: 12,
  };

  const h3Style = {
    fontSize: 18,
    fontWeight: 600,
    marginTop: 20,
    marginBottom: 12,
    color: '#e6edf3',
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '6px 12px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
  };

  const linkStyle = { color: '#58a6ff', textDecoration: 'none' };

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse' as const,
    marginBottom: 24,
    fontSize: 14,
  };

  const thStyle = {
    background: '#0d1117',
    border: '1px solid #30363d',
    padding: 12,
    textAlign: 'left' as const,
    fontWeight: 700,
    color: '#e6edf3',
  };

  const tdStyle = {
    border: '1px solid #30363d',
    padding: 12,
    color: '#8b949e',
  };

  const tableOfContents = [
    { id: 'overview', title: 'State Tax Overview' },
    { id: 'zero-tax-states', title: 'Zero Income Tax States' },
    { id: 'high-tax-states', title: 'High-Tax States' },
    { id: 'crypto-friendly', title: 'Crypto-Friendly States' },
    { id: 'comparison-table', title: 'State Comparison Table' },
    { id: 'residency', title: 'Establishing Residency' },
    { id: 'mining-rules', title: 'Crypto Mining Rules by State' },
    { id: 'tax-planning', title: 'Tax Planning Strategies' },
    { id: 'faq', title: 'FAQ' },
  ];

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/taxes" style={{ color: '#8b949e', textDecoration: 'none' }}>Taxes</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Crypto Tax by State</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#64748b', color: '#fff' }}>Taxes</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Intermediate</span>
          <h1 style={h1Style}>Crypto Tax by State Comparison 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            State income taxes on crypto gains range from 0% (Texas, Florida, Wyoming) to 13.3%+ (California). Choosing your state residency for tax purposes can save $10K–$100K+ annually on significant gains.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 18 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={18}
          section="taxes"
        />


        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ marginLeft: 20, color: '#58a6ff' }}>
            {tableOfContents.map(item => (
              <li key={item.id} style={{ marginBottom: 8 }}>
                <a href={`#${item.id}`} style={linkStyle}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        <section id="overview">
          <h2 style={h2Style}>State Tax Overview</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            State income taxes apply to all crypto transactions, mining rewards, staking income, and realized gains. Unlike federal tax, which applies uniformly, state taxes vary drastically. A $500K gain triggers approximately $185K federal tax (37% + Medicare 3.8%) plus 0–13.3% state tax, adding $0–$66,500 depending on residence.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d14', border: '1px solid #4c1d2a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📋</span>
            <strong style={{ color: '#fb7185', fontSize: 15 }}>Tax Reality Check</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Every jurisdiction has different rules, and they're changing fast. We note when guidance is US-specific vs. internationally applicable.
          </p>
        </div>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Eight states levy zero income tax: Texas, Florida, Wyoming, Nevada, Tennessee, Washington, South Dakota, and Alaska. The remaining 42 states plus DC tax capital gains as ordinary income or apply preferential capital gains rates. High-tax states like California and New York reach 14%+ effective rates when combining federal, state, and net investment income surtaxes.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Key Strategy:</strong> If you realize significant gains, consider establishing residency in a zero-tax state before selling. Even temporarily relocating for the sale year can eliminate state tax entirely, saving 5–13% on the transaction.
          </div>
        </section>

        <section id="zero-tax-states">
          <h2 style={h2Style}>Zero Income Tax States</h2>
          <h3 style={h3Style}>Texas</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Texas has zero income tax and zero capital gains tax. A $1M crypto gain incurs zero Texas state tax. Texas also has no state-level crypto registration requirements or business licensing for traders. Additionally, Texas offers favorable property tax exemptions for business equipment and mining hardware. Many crypto traders and mining operations have relocated to Texas for this reason.
          </p>
          <h3 style={h3Style}>Florida</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Florida has zero income tax and no capital gains tax, similar to Texas. Florida offers additional advantages: no state estate tax, no inheritance tax. This makes Florida attractive for generational wealth planning with crypto. Miami has become a crypto hub due to these favorable tax treatments and pro-business policies.
          </p>
          <h3 style={h3Style}>Wyoming</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Wyoming is the most crypto-friendly state, offering zero income tax plus unique crypto-specific legislation. Wyoming&apos;s DAO (Decentralized Autonomous Organization) law allows DAOs to register as Limited Liability Companies (LLC) and receive full legal recognition. Wyoming also recognizes digital asset business licenses, favorable blockchain division, and zero capital gains tax.
          </p>
          <h3 style={h3Style}>Nevada, Tennessee, Washington, South Dakota, Alaska</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            These five states round out the zero-income-tax group. Nevada offers strong privacy protections and a business-friendly regulatory environment. Tennessee has zero income tax and growing crypto infrastructure. Washington and South Dakota also have zero income tax. Alaska combines zero income tax with an oil wealth dividend fund, though not directly related to crypto.
          </p>
        </section>

        <section id="high-tax-states">
          <h2 style={h2Style}>High-Tax States</h2>
          <h3 style={h3Style}>California (Highest in Nation)</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            California taxes capital gains as ordinary income at rates from 9.3% to 13.3% depending on tax bracket. Additionally, California imposes a 1% Net Investment Income Tax (NIIT) on high-income earners (over $250K single, $500K married). This results in a combined state + federal rate exceeding 50% for California residents with significant gains.
          </p>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Example: $1M gain in California at 37% federal + 13.3% state + 3.8% Medicare + 1% NIIT = 55.1% total tax = $551K. The same gain in Texas = 40.8% federal + 3.8% Medicare = 44.6% = $446K. Difference: $105K saved by moving to Texas.
          </p>
          <h3 style={h3Style}>New York (Second Highest)</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            New York State taxes capital gains at 6.85–10.9% depending on bracket. NYC residents pay additional 3.876% city tax, reaching ~14.8% combined state + city. Like California, New York also applies 3.8% Medicare tax on high earners. New York&apos;s high costs make it expensive for crypto traders; many have relocated to Florida or Texas.
          </p>
        </section>

        <section id="crypto-friendly">
          <h2 style={h2Style}>Crypto-Friendly States</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Beyond zero-tax status, certain states actively support crypto innovation through legislation:
          </p>
          <h3 style={h3Style}>Wyoming</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Wyoming enacted the first DAO law (2021), granting DAOs LLC status and legal recognition. Wyoming also established a blockchain division in the Secretary of State&apos;s office to streamline digital asset business licensing. Multiple crypto companies have incorporated in Wyoming specifically for these advantages.
          </p>
          <h3 style={h3Style}>Colorado</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Colorado eliminated capital gains tax in 2024 (Proposition KK), making it highly attractive for crypto traders. Colorado taxes capital gains at 4.4% as the lowest rate in the nation. Additionally, Colorado has a pro-crypto stance in regulation, with Denver becoming a growing crypto hub.
          </p>
          <h3 style={h3Style}>Nevada & Puerto Rico (Act 20)</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Nevada combines zero income tax with strong privacy laws. Puerto Rico&apos;s Act 20 (now Act 60) offers 0% capital gains tax for bona fide residents and 4% corporate tax, attracting crypto entrepreneurs. Act 20 requires 183+ days annual residency in Puerto Rico.
          </p>
        </section>

        <section id="comparison-table">
          <h2 style={h2Style}>State Comparison Table</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>State</th>
                <th style={thStyle}>Income Tax</th>
                <th style={thStyle}>Capital Gains Tax</th>
                <th style={thStyle}>Crypto Mining Rules</th>
                <th style={thStyle}>Crypto-Friendly</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Texas</td>
                <td style={tdStyle}>0%</td>
                <td style={tdStyle}>0%</td>
                <td style={tdStyle}>Favorable (no special rules)</td>
                <td style={tdStyle}>Yes</td>
              </tr>
              <tr>
                <td style={tdStyle}>Florida</td>
                <td style={tdStyle}>0%</td>
                <td style={tdStyle}>0%</td>
                <td style={tdStyle}>Favorable</td>
                <td style={tdStyle}>Yes</td>
              </tr>
              <tr>
                <td style={tdStyle}>Wyoming</td>
                <td style={tdStyle}>0%</td>
                <td style={tdStyle}>0%</td>
                <td style={tdStyle}>Very favorable (DAO law)</td>
                <td style={tdStyle}>Yes (best)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Nevada</td>
                <td style={tdStyle}>0%</td>
                <td style={tdStyle}>0%</td>
                <td style={tdStyle}>Favorable</td>
                <td style={tdStyle}>Yes</td>
              </tr>
              <tr>
                <td style={tdStyle}>Colorado</td>
                <td style={tdStyle}>4.4%</td>
                <td style={tdStyle}>4.4% (2024+)</td>
                <td style={tdStyle}>Favorable</td>
                <td style={tdStyle}>Yes</td>
              </tr>
              <tr>
                <td style={tdStyle}>California</td>
                <td style={tdStyle}>9.3–13.3%</td>
                <td style={tdStyle}>13.3% + 1% NIIT</td>
                <td style={tdStyle}>Restrictive</td>
                <td style={tdStyle}>No</td>
              </tr>
              <tr>
                <td style={tdStyle}>New York</td>
                <td style={tdStyle}>6.85–10.9%</td>
                <td style={tdStyle}>10.9% + 3.876% (NYC)</td>
                <td style={tdStyle}>Restrictive</td>
                <td style={tdStyle}>No</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section id="residency">
          <h2 style={h2Style}>Establishing Residency</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            To claim zero-tax state residency for income tax purposes, you must establish bona fide domicile. The IRS and state tax authorities apply a multi-factor test: (1) physical presence (183+ days), (2) driver&apos;s license and voter registration in new state, (3) property ownership or long-term lease, (4) bank accounts and financial ties, (5) family residence location.
          </p>
          <h3 style={h3Style}>Practical Steps</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            First, purchase or lease residential property in your target state. Open a bank account and brokerage account in that state. Change your driver&apos;s license, voter registration, and car registration. Spend 183+ days annually in the new state (required by IRS). File your state tax return in the new state, not your former state. Update your address with employers and financial institutions.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Warning:</strong> States like California are aggressive about challenging domicile changes, especially for high-income individuals. The Franchise Tax Board assumes residency unless you prove otherwise. Document your move thoroughly. Many high-income traders hire CPAs or tax attorneys to defend their residency change; costs $500–$3K are far less than back taxes and penalties.
          </div>
        </section>

        <section id="mining-rules">
          <h2 style={h2Style}>Crypto Mining Rules by State</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Crypto mining income is taxed as ordinary income at receipt, not sale. States have varying regulatory approaches to mining operations:
          </p>
          <h3 style={h3Style}>Texas & Wyoming (Most Favorable)</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            No special mining licensing requirements. Mining is treated as a business activity with full deduction of electricity, equipment, and operational costs. Zero income tax makes Texas and Wyoming the primary destinations for large-scale mining operations.
          </p>
          <h3 style={h3Style}>California (Most Restrictive)</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            California classifies mining as a business and requires permits for large operations. Mining rewards are taxed ordinary income (13.3% state), and electricity costs are subject to state energy taxes. California&apos;s high electricity costs make mining economically unviable compared to Texas or Wyoming.
          </p>
        </section>

        <section id="tax-planning">
          <h2 style={h2Style}>Tax Planning Strategies</h2>
          <h3 style={h3Style}>Strategy 1: Relocation Before Major Sale</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            If planning a major trade or sale, relocate to a zero-tax state 30–60 days before execution. Establish bona fide residency (rent apartment, open bank account, spend 183+ days). Execute trades while a resident of the new state, saving 5–13% state tax on gains. This is legal if done properly with genuine domicile change.
          </p>
          <h3 style={h3Style}>Strategy 2: Year-End Tax Loss Harvesting</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Realize losses in December to offset gains. After wash-sale period (30 days), rebuy positions in January. This reduces taxable income without changing your actual holdings. More powerful if you relocate: harvesting losses in your high-tax state, then relocating to zero-tax state before taking gains in the following year.
          </p>
          <h3 style={h3Style}>Strategy 3: Timing Large Transactions</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Spread large gains across two calendar years to manage tax bracket creep. A $2M gain reported in December and January (instead of both in one year) may reduce overall tax liability due to lower marginal rates. Coordinate with state residency to maximize savings.
          </p>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>Which US states have zero income tax?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              Eight states: Texas, Florida, Wyoming, Nevada, Tennessee, Washington, South Dakota, and Alaska. All eight tax no income and no capital gains. Crypto traders benefit from these states via zero state tax burden.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>What is California&apos;s crypto tax rate?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              California taxes capital gains as ordinary income: 9.3–13.3% depending on bracket, plus 1% Net Investment Income Tax for high earners. Total effective rate reaches 14%+. Additionally, federal tax (37%) and Medicare tax (3.8%) apply, totaling 50%+.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>What is the best state for crypto businesses?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              Wyoming: zero tax, DAO legislation, blockchain division. Texas: zero tax, pro-business, mining-friendly. Colorado: 4.4% capital gains tax, crypto-friendly regulation. Puerto Rico (Act 60): 0% capital gains for residents.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>Can I move to a zero-tax state to avoid taxes?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              Yes, if you establish genuine bona fide residency. Requires 183+ days, property, driver&apos;s license, voter registration. IRS scrutinizes residency changes of high-income individuals. Document thoroughly; hiring a CPA ($500–$3K) is wise for large gains.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>Does New York have special crypto taxes?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              No special crypto surcharge. Capital gains taxed 6.85–10.9% statewide, plus 3.876% NYC city tax (total 14.8%+ in NYC). Combined with federal tax, effective rates reach 50%+, making New York one of the worst states for crypto.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>What are crypto-friendly states?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              Wyoming (DAO law, zero tax), Texas (zero tax, pro-business), Colorado (4.4% capital gains), Nevada (zero tax, privacy), and Puerto Rico (Act 60: 0% gains). These states actively support crypto innovation through legislation and favorable regulations.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and not tax or legal advice. State tax laws vary and change frequently. Consult a qualified CPA or tax attorney before relocating or making major trading decisions. degen0x assumes no liability for errors or omissions.

        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }>
            <li><Link href="/investing/best-crypto-under-1-dollar" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Best Crypto Under 1 Dollar</Link></li>
            <li><Link href="/investing/best-defi-tokens-to-buy-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Best Defi Tokens To Buy</Link></li>
            <li><Link href="/investing/best-depin-tokens-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Best Depin Tokens</Link></li>
            <li><Link href="/investing/best-gaming-crypto-tokens" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Best Gaming Crypto Tokens</Link></li>
          </ul>
        </nav>

</article>
  );
}