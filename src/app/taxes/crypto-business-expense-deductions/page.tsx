import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Crypto Business Expense Deductions 2026 | Mining Equipment, Software | degen0x',
  description: 'Deductible crypto business expenses: hardware wallets, mining equipment, electricity, software subscriptions, conference travel, education, Section 179, home office deduction.',
  keywords: ['crypto business expense deductions', 'mining equipment deduction', 'Section 179', 'home office deduction', 'trading software deduction', 'crypto education deduction'],
  openGraph: {
    title: 'Crypto Business Expense Deductions 2026',
    description: 'Maximize deductions: mining equipment, electricity, software, education, home office, Section 179, depreciation.',
    url: 'https://degen0x.com/taxes/crypto-business-expense-deductions',
    type: 'article'
  },

  alternates: {
    canonical: 'https://degen0x.com/taxes/crypto-business-expense-deductions'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Business Expense Deductions 2026 | Mining Equipment, Software | degen0x',
    description: 'Deductible crypto business expenses: hardware wallets, mining equipment, electricity, software subscriptions, conference travel, education, Section 179, home office deduction.',
    image: 'https://degen0x.com/og-default.svg',
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto Business Expense Deductions 2026: Mining Equipment, Software, Education',
  description: 'Complete guide to deductible crypto business expenses including equipment, software, electricity, education, Section 179, and home office deduction with real examples.',
  image: 'https://degen0x.com/og-taxes.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What crypto equipment is deductible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Mining rigs, ASICs, hardware wallets, computers, monitors, networking equipment are deductible. Items under $2,500: full deduction year one. Over $2,500: Section 179 immediate deduction or depreciate over 5–7 years.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is electricity for mining deductible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% of electricity used for mining is deductible as a direct business expense. Track usage per mining operation. Home miners: allocate percentage of home electricity bill to mining based on equipment power consumption.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I deduct trading software subscriptions?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. TradingView Pro, Koinly, tax software, market data services are fully deductible as software subscriptions. Annual cost $500–$3K for professional traders.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the Section 179 deduction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Section 179 allows immediate deduction of business equipment (up to $1.16M in 2026) instead of depreciating over multiple years. A $5K mining rig is immediately deductible in year one under Section 179.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I calculate home office deduction?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Two methods: simplified ($5/sq ft, max $1,500/year) or actual expense. Dedicate room to crypto trading/mining, measure square footage, apply percentage to mortgage/rent, utilities, insurance, maintenance.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is crypto education tax deductible?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, courses, conferences, books, seminars related to crypto trading or mining are deductible. Keep receipts and certificates. A $2K trading course plus $500 conference = $2,500 deduction.',
        },
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Business Expense Deductions 2026 | Mining Equipment, Software | degen0x',
    description: 'Deductible crypto business expenses: hardware wallets, mining equipment, electricity, software subscriptions, conference travel, education, Section 179, home office deduction.',
    image: 'https://degen0x.com/og-default.svg',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Business Expense Deductions 2026 | Mining Equipment, Software | degen0x',
    description: 'Deductible crypto business expenses: hardware wallets, mining equipment, electricity, software subscriptions, conference travel, education, Section 179, home office deduction.',
    image: 'https://degen0x.com/og-default.svg',
  }
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #fb7185, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#fb7185', borderBottom: '2px solid #4c1d2a', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function CryptoBusinessExpenseDeductions() {
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
    { id: 'overview', title: 'Deduction Overview' },
    { id: 'equipment', title: 'Hardware & Equipment' },
    { id: 'section179', title: 'Section 179 Deduction' },
    { id: 'electricity', title: 'Electricity & Utilities' },
    { id: 'software', title: 'Software & Subscriptions' },
    { id: 'education', title: 'Education & Training' },
    { id: 'home-office', title: 'Home Office Deduction' },
    { id: 'comparison', title: 'Expense Deduction Table' },
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
          <span style={{ color: '#c9d1d9' }}>Crypto Business Expense Deductions</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#64748b', color: '#fff' }}>Taxes</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Intermediate</span>
          <h1 style={h1Style}>Crypto Business Expense Deductions 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Qualifying for trader or business status unlocks significant deductions: equipment, electricity, software, education, and home office. Properly documenting these can reduce taxable income by $10K–$50K+ annually depending on operation scale.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 16 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="NullPointer"
          role="Data Engineer"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={16}
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
          <h2 style={h2Style}>Deduction Overview</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            If you qualify as a professional trader or crypto business, you deduct business expenses directly from gross income on Schedule C, reducing taxable income dollar-for-dollar. A $100K income with $30K deductions = $70K taxable income. At 37% rate, this saves $11,100 in federal tax alone, plus state tax savings.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a0d14', border: '1px solid #4c1d2a', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>📋</span>
            <strong style={{ color: '#fb7185', fontSize: 15 }}>Tax Reality Check</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Crypto tax compliance is a mess, but ignoring it is worse. We focus on practical approaches that balance accuracy with the reality that most exchanges have incomplete records.
          </p>
        </div>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Key requirement: expenses must be "ordinary and necessary" for your business. This standard is broad and covers hardware, software, education, utilities allocated to business, home office, travel, and professional services. The IRS allows deduction of business expenses that are reasonable in amount and directly tied to earning business income.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Documentation Critical:</strong> Keep all receipts, invoices, credit card statements, and proof of business use (photos, dedicated folders, expense tracking software). The IRS challenges deductions without supporting documentation. Maintaining organized records is your best defense in an audit.
          </div>
        </section>

        <section id="equipment">
          <h2 style={h2Style}>Hardware & Equipment</h2>
          <h3 style={h3Style}>Mining Rigs & ASICs</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Mining hardware (ASIC miners, GPU rigs, CPU miners) is fully deductible. A $10K ASIC miner can be: (1) fully deducted under Section 179 (immediate deduction), or (2) depreciated over 5 years ($2K/year). Section 179 is superior if available; it provides immediate cash-flow relief by reducing year-one taxes.
          </p>
          <h3 style={h3Style}>Computers & Monitors</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Trading computers, monitors, and networking equipment are deductible if used exclusively for business. A $3K gaming PC used 100% for trading is deductible (either full Section 179 or depreciation). A PC used 50% personally, 50% business: only 50% ($1,500) is deductible. Allocate based on actual usage percentage.
          </p>
          <h3 style={h3Style}>Hardware Wallets & Security</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Hardware wallets ($100–$300), security devices, and cold storage equipment are fully deductible as business equipment. Multiple wallets for different crypto are all deductible. Ledger, Trezor, and similar devices: immediate deduction.
          </p>
        </section>

        <section id="section179">
          <h2 style={h2Style}>Section 179 Deduction</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Section 179 allows immediate deduction of business equipment up to $1.16M (2026 limit) instead of depreciating over multiple years. This accelerates tax deductions and improves cash flow for growing businesses.
          </p>
          <h3 style={h3Style}>How It Works</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            You purchase a $5K mining rig in March 2026. Under Section 179, the entire $5K is immediately deductible on your 2026 tax return, reducing taxable income by $5K. At 32% bracket, this saves $1,600 in taxes that year. Without Section 179, you&apos;d depreciate $5K over 5 years ($1K/year), saving only $320/year initially.
          </p>
          <h3 style={h3Style}>Limitations & Phaseout</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Section 179 phases out if total equipment purchases exceed $4.6M (2026). For most individual traders and miners, this limit is not a concern. However, you can only deduct up to your net business income (cannot create loss using Section 179). Excess deductions carry forward to next year.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Pro Tip:</strong> Time equipment purchases strategically. If expecting high profit year, purchase equipment that year to maximize Section 179 deductions. If expecting loss, defer purchases to following year.
          </div>
        </section>

        <section id="electricity">
          <h2 style={h2Style}>Electricity & Utilities</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            100% of electricity consumed by mining operations is deductible. This is a major expense for miners: a mining rig consuming 1,500 watts (constant) costs approximately $1,500–$3,000 annually in electricity at US average rates ($0.12–$0.25/kWh).
          </p>
          <h3 style={h3Style}>Calculating Deductible Electricity</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Formula: Wattage × Hours per Year ÷ 1,000 × Electricity Rate. Example: 1,500W × 8,760 hours × $0.15/kWh ÷ 1,000 = $1,962 annual electricity cost, 100% deductible.
          </p>
          <h3 style={h3Style}>Home Miner Allocation</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Home miners: calculate the percentage of home electricity used by mining vs household use. If mining rig uses 1,500W and home uses 3,000W average, mining is 33% of household electricity. Calculate 33% of your annual electric bill as deductible mining expense.
          </p>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Internet costs allocated to mining/trading are also deductible. If your internet is $100/month but 40% used for crypto activities, $40/month ($480/year) is deductible.
          </p>
        </section>

        <section id="software">
          <h2 style={h2Style}>Software & Subscriptions</h2>
          <h3 style={h3Style}>Trading Platforms & Data Services</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            TradingView Pro ($15/month = $180/year), Bybit, Binance API access, Bloomberg terminals, and market data services are fully deductible. Professional traders often spend $2K–$5K annually on software; all is business expense.
          </p>
          <h3 style={h3Style}>Tax & Accounting Software</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Koinly ($120–$300/year), CoinTracker, ZenLedger, and tax software (TurboTax Premium) are deductible. These expenses help you track and report crypto transactions accurately, so they&apos;re directly tied to business.
          </p>
          <h3 style={h3Style}>Security Software</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Antivirus, VPN, cold wallet firmware updates, and security subscriptions are deductible. If using VPN for privacy during trading, allocate percentage to business use (conservative: 50–80%).
          </p>
        </section>

        <section id="education">
          <h2 style={h2Style}>Education & Training</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Courses, seminars, conferences, and books related to crypto trading or mining are deductible. These expenses improve your business skills and are "ordinary and necessary" per IRS standards.
          </p>
          <h3 style={h3Style}>Deductible Education Examples</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            $2,000 trading course → deductible. $500 blockchain conference registration → deductible. $200 in crypto-related books → deductible. $1,000 bootcamp on DeFi → deductible. Total annual education budget: $3,700, all deductible.
          </p>
          <h3 style={h3Style}>Travel to Conferences</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Travel to crypto conferences is deductible: flights, hotel, meals (50%), transportation. Attending Bitcoin Miami Conference ($500 flight, $200 hotel, $100 meals) = $800 deductible. Keep receipts and conference agenda to document business purpose.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Documentation:</strong> Keep course certificates, conference confirmations, book receipts, and training materials. If audited, IRS may request proof that education is business-related.
          </div>
        </section>

        <section id="home-office">
          <h2 style={h2Style}>Home Office Deduction</h2>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            If you maintain a dedicated trading or mining office at home, you deduct a percentage of home costs: mortgage interest (or rent), utilities, insurance, maintenance, property tax. Two methods: simplified or actual expense.
          </p>
          <h3 style={h3Style}>Simplified Method</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            IRS allows $5 per square foot of dedicated office space, maximum $1,500/year. A 200-sq-ft dedicated trading office = 200 × $5 = $1,000 annual deduction (no documentation required). Easiest method for most traders.
          </p>
          <h3 style={h3Style}>Actual Expense Method</h3>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Allocate home expenses based on office percentage of total home square footage. Example: 200-sq-ft office in 2,000-sq-ft home = 10% of home expenses.
            - Mortgage interest: $8,000/year × 10% = $800
            - Utilities: $1,200/year × 10% = $120
            - Home insurance: $1,500/year × 10% = $150
            - Property tax: $3,000/year × 10% = $300
            Total: $1,370 annual deduction
          </p>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            Actual expense method can yield higher deductions but requires detailed documentation: utility bills, mortgage statements, property tax records, home valuation for depreciation if applicable.
          </p>
        </section>

        <section id="comparison">
          <h2 style={h2Style}>Expense Deduction Table</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Expense Type</th>
                <th style={thStyle}>Deduction Method</th>
                <th style={thStyle}>Annual Cost</th>
                <th style={thStyle}>Tax Savings (32% rate)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Mining rig ($5K)</td>
                <td style={tdStyle}>Section 179 (immediate)</td>
                <td style={tdStyle}>$5,000</td>
                <td style={tdStyle}>$1,600</td>
              </tr>
              <tr>
                <td style={tdStyle}>Electricity (mining)</td>
                <td style={tdStyle}>Direct business expense</td>
                <td style={tdStyle}>$2,000</td>
                <td style={tdStyle}>$640</td>
              </tr>
              <tr>
                <td style={tdStyle}>Trading software</td>
                <td style={tdStyle}>Direct business expense</td>
                <td style={tdStyle}>$500</td>
                <td style={tdStyle}>$160</td>
              </tr>
              <tr>
                <td style={tdStyle}>Tax software</td>
                <td style={tdStyle}>Direct business expense</td>
                <td style={tdStyle}>$250</td>
                <td style={tdStyle}>$80</td>
              </tr>
              <tr>
                <td style={tdStyle}>Education & conferences</td>
                <td style={tdStyle}>Direct business expense</td>
                <td style={tdStyle}>$2,500</td>
                <td style={tdStyle}>$800</td>
              </tr>
              <tr>
                <td style={tdStyle}>Home office (200 sq ft)</td>
                <td style={tdStyle}>Simplified ($5/sq ft)</td>
                <td style={tdStyle}>$1,000</td>
                <td style={tdStyle}>$320</td>
              </tr>
              <tr>
                <td style={tdStyle}>Trading computer</td>
                <td style={tdStyle}>Section 179 (partial)</td>
                <td style={tdStyle}>$2,000</td>
                <td style={tdStyle}>$640</td>
              </tr>
              <tr>
                <td style={tdStyle}>TOTAL</td>
                <td style={tdStyle}>All methods combined</td>
                <td style={tdStyle}>$13,250</td>
                <td style={tdStyle}>$4,240</td>
              </tr>
            </tbody>
          </table>
          <p style={{ color: '#8b949e', lineHeight: 1.8, marginBottom: 16 }}>
            A typical crypto trader with modest mining and active trading can accumulate $10K–$15K in annual deductions, reducing tax liability by $3K–$5K depending on bracket.
          </p>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>What crypto equipment is deductible?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              Mining rigs, ASICs, GPUs, hardware wallets, computers, monitors, networking gear are deductible. Items under $2,500: full deduction year one. Over $2,500: Section 179 (immediate) or depreciate 5–7 years.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>Is electricity for mining deductible?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              Yes, 100% of electricity for mining is deductible. Track usage in kWh, multiply by your rate ($/kWh). Home miners: allocate percentage of total home electricity bill to mining based on equipment power draw.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>Can I deduct trading software subscriptions?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              Yes. TradingView, Koinly, tax software, market data are fully deductible. Annual cost $500–$3K for professional traders. Keep invoices and proof of payment.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>What is the Section 179 deduction limit?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              Up to $1.16M in 2026 (adjusted annually). Can only deduct up to net business income (cannot create loss). Excess deductions carry forward to next year. Phases out if equipment purchases exceed $4.6M.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>How do I calculate home office deduction?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              Simplified: $5/sq ft × dedicated office size (max $1,500). Actual: calculate percentage of home electricity, utilities, mortgage interest, insurance, property tax allocated to office. Actual method often yields higher deductions but requires documentation.
            </p>
          </div>
          <div style={{ ...infoBoxStyle, marginBottom: 16 }}>
            <h3 style={h3Style}>Is crypto education deductible?</h3>
            <p style={{ color: '#8b949e', lineHeight: 1.8 }}>
              Yes, courses, conferences, books, seminars directly tied to crypto trading/mining are deductible. Keep certificates and receipts. Annual education budget $2K–$5K is common for active traders.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and not tax or legal advice. Deduction eligibility varies by individual circumstances and IRS interpretation. Consult a qualified CPA before claiming deductions. degen0x assumes no liability for errors or omissions.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/investing/best-layer-2-tokens-to-invest" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Layer 2 Tokens To Invest</Link></li>
            <li><Link href="/investing/best-ai-crypto-projects-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Ai Crypto Projects</Link></li>
            <li><Link href="/investing/best-altcoins-to-buy-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Altcoins To Buy</Link></li>
            <li><Link href="/investing/best-crypto-savings-accounts-2026" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Best Crypto Savings Accounts</Link></li>
          </ul>
        </nav>

</article>
  );
}
