import { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'SEC/CFTC Crypto Commodities Ruling March 2026 — Digital Asset Classification Guide | degen0x',
  description: 'Complete guide to the March 17, 2026 SEC/CFTC joint ruling classifying 16 digital commodities including ETH, SOL, XRP, and more. Learn how the 68-page interpretive release changed crypto regulation, unlocked ETF approvals, and clarified staking rewards.',
  keywords: [
    'SEC CFTC ruling',
    'digital commodity',
    'crypto regulation 2026',
    'staking rewards',
    'ETH classification',
    'SOL commodity',
    'XRP ruling',
    'CLARITY Act',
    'crypto ETFs',
    'Paul Atkins',
    'Trump crypto',
    'commodity exchange act',
    'institutional capital',
    'regulatory clarity',
    'SEC guidance',
    'cryptocurrency law',
    'digital asset regulation',
    'March 2026'
  ],
  openGraph: {
    type: 'article',
    title: 'SEC/CFTC Digital Commodities Ruling March 2026 Guide',
    description: 'Complete guide to the historic March 17, 2026 SEC/CFTC ruling that classified 16 digital assets as commodities, unlocked ETF approvals, and clarified staking regulation.',
    url: 'https://degen0x.com/learn/sec-crypto-commodities-ruling-digital-asset-regulation-guide-2026',
    siteName: 'degen0x',
    images: [{ url: "https://degen0x.com/og-sec-cftc-ruling-2026.svg", width: 1200, height: 630, alt: "SEC/CFTC Digital Commodities Ruling 2026" }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEC/CFTC Digital Commodities Ruling 2026',
    description: 'The March 17, 2026 ruling classified 16 cryptos as commodities, unlocked ETF approvals, and clarified staking. Complete regulatory guide.',
    images: ["https://degen0x.com/og-sec-cftc-ruling-2026.svg"],
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/sec-crypto-commodities-ruling-digital-asset-regulation-guide-2026',
  };
// Server-side structured data
const articleStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'SEC/CFTC Digital Commodities Ruling March 2026 — Complete Guide',
  description: 'Complete guide to the historic March 17, 2026 SEC/CFTC joint ruling classifying 16 digital assets as commodities and unlocking ETF approvals.',
  image: 'https://degen0x.com/og-sec-cftc-ruling-2026.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: {
    '@type': 'Organization',
    name: 'degen0x',
    url: 'https://degen0x.com',
  },
  publisher: {
    '@type': 'Organization',
    name: 'degen0x',
    logo: {
      '@type': 'ImageObject',
      url: 'https://degen0x.com/logo.png',
    },
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the SEC/CFTC digital commodities ruling?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On March 17, 2026, the SEC and CFTC jointly issued a 68-page interpretive release classifying 16 digital assets (including ETH, SOL, XRP, ADA, LINK, AVAX, and others) as commodities under the Commodity Exchange Act—not securities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the 16 digital commodities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Ethereum (ETH), Solana (SOL), XRP, Cardano (ADA), Chainlink (LINK), Avalanche (AVAX), Polkadot (DOT), Hedera (HBAR), Litecoin (LTC), Dogecoin (DOGE), Shiba Inu (SHIB), Tezos (XTZ), Bitcoin Cash (BCH), Aptos (APT), Stellar Lumens (XLM), and Algorand (ALGO).',
        },
      },
      {
        '@type': 'Question',
        name: 'Does this classify staking rewards as securities?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The ruling explicitly stated that staking rewards are NOT securities transactions. This clarification unlocked ETF issuers to include staking yields in their prospectuses without regulatory risk.',
        },
      },
      {
        '@type': 'Question',
        name: 'How did this ruling affect ETF approvals?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The ruling shortened ETF approval timelines from 240 days to 75 days and unlocked spot ETF approvals for 13 new digital commodities beyond Bitcoin and Ethereum. Over 90 crypto ETF applications are now pending with the SEC.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is this ruling permanent?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The March 17, 2026 ruling is interpretive guidance under existing law, not a new statute. Congressional passage of the CLARITY Act is needed to make this classification permanent and protect against future regulatory reversal.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the CLARITY Act?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The CLARITY Act (Crypto and Digital Asset Regulation in the US) is proposed legislation that would make the SEC/CFTC ruling statutory law and establish permanent jurisdiction: CFTC for commodity tokens, SEC for securities tokens.',
        },
      },
    ],
  },
};

const breadcrumbStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'degen0x', item: 'https://degen0x.com' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'SEC/CFTC Ruling Guide 2026', item: 'https://degen0x.com/learn/sec-crypto-commodities-ruling-digital-asset-regulation-guide-2026' },
  ],
};

const faqs = [
  {
    id: 'what-ruling',
    question: 'What is the SEC/CFTC digital commodities ruling?',
    answer:
      'On March 17, 2026, the U.S. Securities and Exchange Commission (SEC) and Commodity Futures Trading Commission (CFTC) jointly issued a 68-page interpretive release under the Commodity Exchange Act. This document classified 16 digital assets as commodities (not securities), explicitly stating that staking rewards are not securities transactions. It was a landmark shift from the SEC\'s previous Gensler-era enforcement approach, which treated many tokens as securities. SEC Chairman Paul S. Atkins stated the goal was to "draw clear lines in clear terms."',
  },
  {
    id: 'sixteen-assets',
    question: 'What are the 16 digital commodities classified by the ruling?',
    answer:
      'The ruling classified: Ethereum (ETH), Solana (SOL), XRP, Cardano (ADA), Chainlink (LINK), Avalanche (AVAX), Polkadot (DOT), Hedera (HBAR), Litecoin (LTC), Dogecoin (DOGE), Shiba Inu (SHIB), Tezos (XTZ), Bitcoin Cash (BCH), Aptos (APT), Stellar Lumens (XLM), and Algorand (ALGO). Bitcoin and Ethereum were already treated as commodities prior to this ruling. This ruling extended commodity classification to 14 additional major tokens.',
  },
  {
    id: 'staking-securities',
    question: 'Does the ruling classify staking rewards as securities?',
    answer:
      'No. The ruling explicitly stated that staking rewards are NOT securities transactions and are NOT subject to securities registration requirements. This clarification removed years of regulatory ambiguity and was critical to unlocking staking-enabled ETFs. Prior to this, the SEC had not clearly stated whether staking yields would trigger securities registration. ETF issuers can now confidently market staking yields (~7% annually for Solana and other networks) without legal uncertainty. The ruling also clarified that the exchange of tokens for staking rewards is not an investment contract under the Howey test.',
  },
  {
    id: 'etf-impact',
    question: 'How did the ruling affect ETF approvals?',
    answer:
      'The ruling had three major impacts on ETF approvals: (1) It shortened approval timelines from 240 days to 75 days by establishing clear commodity status; (2) It unlocked spot ETF approvals for 13 new digital commodities (beyond Bitcoin and Ethereum), resulting in over 90 pending crypto ETF applications with the SEC; (3) It enabled staking-enabled ETFs, allowing issuers to pass through yields to shareholders. Within weeks of the ruling, approvals accelerated dramatically. By April 2026, 16 Solana spot ETFs had received approval, and XRP, ADA, LINK, AVAX, and other commodities had similar applications in process.',
  },
  {
    id: 'permanent',
    question: 'Is the ruling permanent? What about regulatory reversal?',
    answer:
      'The March 17, 2026 ruling is interpretive guidance under existing law—not a new statute. This means it could theoretically be reversed by a future SEC administration that reinterprets the Commodity Exchange Act differently. To make this classification permanent and protect the crypto ecosystem from reversal risk, Congress must pass the CLARITY Act, which would establish digital asset jurisdiction as statutory law. The CLARITY Act proposal gives permanent authority to the CFTC for commodity tokens and the SEC for securities tokens. Without the CLARITY Act becoming law, this ruling remains vulnerable to political reversals.',
  },
  {
    id: 'clarity-act',
    question: 'What is the CLARITY Act and what does it do?',
    answer:
      'The CLARITY Act (Crypto and Digital Asset Regulation in the United States) is proposed legislation that would codify the SEC/CFTC ruling into permanent statutory law. It would: (1) Establish clear statutory definitions for digital assets and commodities; (2) Give permanent jurisdiction to the CFTC for commodity tokens and the SEC for securities tokens; (3) Create a statutory staking framework ensuring staking rewards are not securities; (4) Establish a 75-day ETF approval timeline as statutory law; (5) Create clear compliance paths for crypto projects. The Act passed the House in 2025 and is moving through the Senate. Passage would provide long-term regulatory certainty and protect the March 2026 ruling from reversal.',
  },
];

const classifiedAssets = [
  {
    asset: 'Ethereum',
    ticker: 'ETH',
    category: 'Smart Contract Platform',
    previousStatus: 'Unclear / Potentially security',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Solana',
    ticker: 'SOL',
    category: 'Smart Contract Platform',
    previousStatus: 'Unclear / Potentially security',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'XRP',
    ticker: 'XRP',
    category: 'Payments',
    previousStatus: 'Partially security (litigation)',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Cardano',
    ticker: 'ADA',
    category: 'Smart Contract Platform',
    previousStatus: 'Unclear',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Chainlink',
    ticker: 'LINK',
    category: 'Oracle Network',
    previousStatus: 'Unclear',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Avalanche',
    ticker: 'AVAX',
    category: 'Smart Contract Platform',
    previousStatus: 'Unclear',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Polkadot',
    ticker: 'DOT',
    category: 'Interoperability',
    previousStatus: 'Unclear',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Hedera',
    ticker: 'HBAR',
    category: 'Enterprise DLT',
    previousStatus: 'Unclear',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Litecoin',
    ticker: 'LTC',
    category: 'Payments',
    previousStatus: 'Likely commodity',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Dogecoin',
    ticker: 'DOGE',
    category: 'Meme/Payments',
    previousStatus: 'Likely commodity',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Shiba Inu',
    ticker: 'SHIB',
    category: 'Meme Token',
    previousStatus: 'Unclear',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Tezos',
    ticker: 'XTZ',
    category: 'Smart Contract Platform',
    previousStatus: 'Unclear',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Bitcoin Cash',
    ticker: 'BCH',
    category: 'Payments',
    previousStatus: 'Likely commodity',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Aptos',
    ticker: 'APT',
    category: 'Smart Contract Platform',
    previousStatus: 'Unclear',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Stellar Lumens',
    ticker: 'XLM',
    category: 'Payments',
    previousStatus: 'Unclear',
    newStatus: 'Digital Commodity',
  },
  {
    asset: 'Algorand',
    ticker: 'ALGO',
    category: 'Smart Contract Platform',
    previousStatus: 'Unclear',
    newStatus: 'Digital Commodity',
  },
];

export default function SECCFTCRulingGuide() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }} />

      {/* Skip to main content */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      {/* Header */}
      <header className="border-b border-[#30363d] bg-[#0d1117] sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-[#8b949e] mb-4">
            <Link href="/" className="hover:text-[#58a6ff] transition-colors">
              degen0x
            </Link>
            <span>/</span>
            <Link href="/learn" className="hover:text-[#58a6ff] transition-colors">
              Learn
            </Link>
            <span>/</span>
            <span className="text-[#c9d1d9]">SEC/CFTC Ruling 2026</span>
          </nav>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-900/30 text-purple-400 border border-purple-800">
                Regulation
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-900/30 text-yellow-300 border border-yellow-700">
                Intermediate
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-900/30 text-blue-400 border border-blue-700">
                2026
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              SEC/CFTC Digital Commodities Ruling 2026
            </h1>

            <p className="text-lg text-[#8b949e] max-w-3xl">
              Complete guide to the historic March 17, 2026 SEC/CFTC joint ruling classifying 16 digital assets as commodities, explaining staking regulation, ETF implications, and the path to permanent law through the CLARITY Act.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-[#8b949e]">
              <span>Updated April 10, 2026</span>
              <span>•</span>
              <span>14 min read</span>
            </div>
          </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={8}
          section="learn"
        />

        </div>
      </header>

      {/* Main content grid */}
      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main content */}
        <article id="main-content" className="lg:col-span-2 space-y-8">
          {/* Section 1: What the Ruling Says */}
          <section id="what-ruling" className="space-y-4">
            <h2 className="text-3xl font-bold text-[#e6edf3]">1. What the Ruling Says</h2>
            <p className="text-[#c9d1d9] leading-relaxed">
              On March 17, 2026, the U.S. Securities and Exchange Commission (SEC) and the Commodity Futures Trading Commission (CFTC) jointly issued a 68-page interpretive guidance document that fundamentally reshaped U.S. cryptocurrency regulation. This document, issued under the Commodity Exchange Act, made one singular declaration: sixteen digital assets are commodities, not securities.
            </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#e6edf3]">Core Statement</h3>
              <blockquote className="border-l-4 border-[#6366f1] pl-4 text-[#c9d1d9] italic">
                "These 16 digital assets meet the definition of commodities under the Commodity Exchange Act. Staking rewards generated by network participants are not securities transactions and are not subject to SEC registration. This classification provides immediate clarity for spot exchange-traded products, institutional capital flows, and compliant network operation."
              </blockquote>
            </div>

            <p className="text-[#c9d1d9] leading-relaxed">
              This ruling represented a dramatic reversal from the SEC&apos;s Gensler-era enforcement approach (2021-2025), which treated many tokens as potential securities and pursued enforcement actions against major exchanges and platforms. SEC Chairman Paul S. Atkins, appointed by the Trump administration, framed the new approach as designed to "draw clear lines in clear terms"—replacing regulatory ambiguity with clarity.
            </p>

            <p className="text-[#c9d1d9] leading-relaxed">
              The ruling is interpretive guidance, meaning it interprets existing law rather than creating new law. However, its practical impact was transformative: it unlocked ETF approvals, enabled institutional capital inflows, and provided compliant pathways for DeFi and staking ecosystems. Within 3 weeks, spot ETF approvals for Solana, XRP, and Cardano had been granted by the SEC.
            </p>
          </section>

          {/* Section 2: The 16 Digital Commodities */}
          <section id="classified-assets" className="space-y-4">
            <h2 className="text-3xl font-bold text-[#e6edf3]">2. The 16 Digital Commodities</h2>
            <p className="text-[#c9d1d9] leading-relaxed">
              The ruling classified the following 16 digital assets as commodities. Note that Bitcoin (BTC) and Ethereum (ETH) were already widely treated as commodities; this ruling provided explicit clarity for ETH and extended commodity classification to 14 previously unclear tokens.
            </p>

            <div className="overflow-x-auto border border-[#30363d] rounded-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#30363d] bg-[#161b22]">
                    <th className="px-4 py-3 text-left font-semibold text-[#e6edf3]">Asset</th>
                    <th className="px-4 py-3 text-left font-semibold text-[#e6edf3]">Ticker</th>
                    <th className="px-4 py-3 text-left font-semibold text-[#e6edf3]">Category</th>
                    <th className="px-4 py-3 text-left font-semibold text-[#e6edf3]">Previous Status</th>
                  </tr>
                </thead>
                <tbody>
                  {classifiedAssets.map((asset, idx) => (
                    <tr key={idx} className="border-b border-[#30363d] hover:bg-[#161b22] transition-colors">
                      <td className="px-4 py-3 font-semibold text-[#e6edf3]">{asset.asset}</td>
                      <td className="px-4 py-3 font-mono font-bold text-[#58a6ff]">{asset.ticker}</td>
                      <td className="px-4 py-3 text-[#8b949e] text-sm">{asset.category}</td>
                      <td className="px-4 py-3 text-[#c9d1d9] text-sm">{asset.previousStatus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 space-y-2">
              <p className="text-sm text-[#8b949e]">
                <span className="font-semibold text-[#e6edf3]">Key observations:</span>
              </p>
              <ul className="space-y-2 text-sm text-[#c9d1d9]">
                <li className="flex gap-2">
                  <span className="text-[#58a6ff]">•</span>
                  <span>
                    <strong>Smart Contract Platforms (8 assets):</strong> ETH, SOL, ADA, AVAX, DOT, XTZ, APT, ALGO dominate the list, reflecting how smart contract functionality doesn&apos;t trigger securities classification.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#58a6ff]">•</span>
                  <span>
                    <strong>Payment Tokens (5 assets):</strong> XRP, LTC, DOGE, BCH, XLM now have unambiguous commodity status, ending years of regulatory uncertainty around payment-focused tokens.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#58a6ff]">•</span>
                  <span>
                    <strong>Specialized Networks (3 assets):</strong> LINK (oracle), HBAR (enterprise), SHIB (meme) all received commodity classification despite different use cases.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3: SEC vs CFTC Jurisdiction Split */}
          <section id="jurisdiction" className="space-y-4">
            <h2 className="text-3xl font-bold text-[#e6edf3]">3. SEC vs CFTC Jurisdiction: The Split</h2>
            <p className="text-[#c9d1d9] leading-relaxed">
              A critical element of the ruling was clarifying which regulatory agency oversees what. The SEC and CFTC established a clear jurisdictional split that will persist unless the CLARITY Act modifies it.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-[#e6edf3] flex items-center gap-2">
                  <span className="text-xl">🔐</span> SEC Jurisdiction
                </h3>
                <ul className="space-y-3 text-[#c9d1d9] text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#6366f1]">→</span>
                    <span><strong>Securities tokens</strong> and equity-like offerings (still classified case-by-case using Howey test)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#6366f1]">→</span>
                    <span><strong>Securities exchanges</strong> and brokers offering commodity tokens</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#6366f1]">→</span>
                    <span><strong>Custody and safeguarding</strong> of commodity token assets in ETFs and funds</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#6366f1]">→</span>
                    <span><strong>Investment advisers</strong> managing crypto portfolios</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#6366f1]">→</span>
                    <span><strong>Fraud enforcement</strong> across all asset types</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 space-y-4">
                <h3 className="text-lg font-semibold text-[#e6edf3] flex items-center gap-2">
                  <span className="text-xl">⚙️</span> CFTC Jurisdiction
                </h3>
                <ul className="space-y-3 text-[#c9d1d9] text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#06b6d4]">→</span>
                    <span><strong>Commodity trading</strong> of the 16 digital commodities</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#06b6d4]">→</span>
                    <span><strong>Futures and derivatives</strong> on commodity tokens</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#06b6d4]">→</span>
                    <span><strong>Spot commodity exchanges</strong> (decentralized and centralized)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#06b6d4]">→</span>
                    <span><strong>Commodity trading advisers</strong> and floor traders</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#06b6d4]">→</span>
                    <span><strong>Market manipulation</strong> and spoofing prevention</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-[#c9d1d9] leading-relaxed text-sm italic text-[#8b949e] mt-4">
              Note: This jurisdictional split is functional but not perfectly clear in all edge cases. The CLARITY Act seeks to codify this division more precisely and create clearer boundaries for multi-asset platforms.
            </p>
          </section>

          {/* Section 4: Impact on ETFs */}
          <section id="etf-impact" className="space-y-4">
            <h2 className="text-3xl font-bold text-[#e6edf3]">4. Impact on ETF Approvals</h2>
            <p className="text-[#c9d1d9] leading-relaxed">
              The ruling&apos;s most immediate and visible impact was on ETF approvals. By establishing clear commodity status and explicitly permitting staking yields, the ruling unlocked a wave of spot exchange-traded product approvals across the crypto ecosystem.
            </p>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#e6edf3]">ETF Approval Timeline Acceleration</h3>
              <div className="space-y-3">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6366f1] text-white text-sm font-bold">
                      ↓
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#e6edf3]">Pre-Ruling: 240-Day Approval Timeline</h4>
                    <p className="text-[#8b949e] text-sm mt-1">
                      Before March 2026, SEC ETF approvals required extensive legal review (240 days standard) due to regulatory ambiguity around digital asset classification.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#22c55e] text-white text-sm font-bold">
                      ✓
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#e6edf3]">Post-Ruling: 75-Day Approval Timeline</h4>
                    <p className="text-[#8b949e] text-sm mt-1">
                      After March 17, 2026, the ruling enabled a significantly faster 75-day review process because commodity classification removed legal ambiguity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6366f1] text-white text-sm font-bold">
                      📈
                    </div>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-[#e6edf3]">Result: 90+ Pending Applications</h4>
                    <p className="text-[#8b949e] text-sm mt-1">
                      As of April 2026, over 90 crypto ETF applications are pending with the SEC, representing potential approvals for all 16 classified commodities in spot, staking, and possibly yield-bearing formats.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[#e6edf3] mt-4">Unlocked ETF Categories</h3>
              <ul className="space-y-2 text-[#c9d1d9] text-sm">
                <li className="flex gap-2">
                  <span className="text-[#58a6ff]">✓</span>
                  <span><strong>Spot ETFs:</strong> Direct ownership of the underlying token (e.g., Solana spot ETFs, XRP spot ETFs)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#58a6ff]">✓</span>
                  <span><strong>Staking ETFs:</strong> Tokens staked in networks with yields passed through to shareholders (~7% for Solana)</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#58a6ff]">✓</span>
                  <span><strong>Yield-bearing ETFs:</strong> Tokens delegated to DeFi protocols or liquid staking derivatives</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#58a6ff]">✓</span>
                  <span><strong>Thematic/Sector ETFs:</strong> Multi-asset funds tracking "smart contracts" or "layer-1 networks"</span>
                </li>
              </ul>
            </div>

            <p className="text-[#c9d1d9] leading-relaxed">
              Within three weeks of the March 17 ruling, the SEC approved spot ETFs for Solana (16 distinct products by April 2026). XRP, Cardano, Chainlink, and Avalanche ETF applications are in accelerated review. This represents a fundamental shift: from 2024-2025 (Bitcoin and Ethereum only) to 2026+ (multi-asset crypto ETF ecosystem).
            </p>
          </section>

          {/* Section 5: Impact on Staking */}
          <section id="staking-impact" className="space-y-4">
            <h2 className="text-3xl font-bold text-[#e6edf3]">5. Impact on Staking and Yield</h2>
            <p className="text-[#c9d1d9] leading-relaxed">
              The explicit clarification that staking rewards are not securities transactions was perhaps the most important regulatory breakthrough in the ruling. For years, the crypto ecosystem operated under uncertainty: would the SEC consider staking yields to be securities offerings?
            </p>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#e6edf3]">What the Ruling Said About Staking</h3>
              <blockquote className="border-l-4 border-[#22c55e] pl-4 text-[#c9d1d9] italic">
                "Staking rewards earned by network participants in the operation of these digital commodity networks are not securities transactions. The provision of staking services by validators, exchanges, or custodians, and the receipt of rewards by network participants, does not trigger securities registration requirements."
              </blockquote>

              <h3 className="text-lg font-semibold text-[#e6edf3] mt-4">Why This Matters</h3>
              <ul className="space-y-3 text-[#c9d1d9] text-sm">
                <li className="flex gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  <span>
                    <strong>ETF Issuers Can Now Stake:</strong> Solana ETFs, Ethereum ETFs, and others can stake their holdings and pass yields directly to shareholders without creating registration concerns.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  <span>
                    <strong>Removes "Unregistered Securities" Risk:</strong> Staking services provided by exchanges, custodians, and DeFi protocols are now compliant activities.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  <span>
                    <strong>Clarifies Tax Treatment:</strong> Staking rewards are taxed as ordinary income (not securities gains), simplifying tax reporting.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  <span>
                    <strong>Enables Liquid Staking:</strong> Protocols like Lido (liquid Ethereum staking) and Marinade Finance (liquid Solana staking) now have regulatory clarity to scale.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-[#c9d1d9] leading-relaxed">
              Current staking yields for the 16 classified commodities range from 4-8% annually (Ethereum ~3.5%, Solana ~7%, Cardano ~4%). With the ruling&apos;s clarification, institutional capital can now flow into staking-enabled ETFs, significantly amplifying staking participation and network security.
            </p>
          </section>

          {/* Section 6: Impact on DeFi */}
          <section id="defi-impact" className="space-y-4">
            <h2 className="text-3xl font-bold text-[#e6edf3]">6. Impact on DeFi Protocols</h2>
            <p className="text-[#c9d1d9] leading-relaxed">
              Beyond ETFs and staking, the ruling had significant implications for decentralized finance ecosystems, particularly for protocols built on the 16 classified commodity networks.
            </p>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#e6edf3]">DeFi Regulatory Clarity</h3>
              <ul className="space-y-3 text-[#c9d1d9] text-sm">
                <li className="flex gap-2">
                  <span className="text-[#06b6d4]">→</span>
                  <span>
                    <strong>Yield Farming on Commodity Networks:</strong> Protocols on Solana, Ethereum, Cardano, etc. can now confidently offer yield farming without regulatory uncertainty around whether yields trigger securities registration.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#06b6d4]">→</span>
                  <span>
                    <strong>Governance Tokens May Still Be Securities:</strong> The ruling clarifies the underlying assets (ETH, SOL, etc.) are commodities, but governance tokens issued by DeFi protocols may still be classified as securities case-by-case.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#06b6d4]">→</span>
                  <span>
                    <strong>Institutional DeFi Participation:</strong> With commodity clarity, traditional financial institutions can now participate in DeFi protocols without regulatory ambiguity about the underlying assets.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#06b6d4]">→</span>
                  <span>
                    <strong>Compliance Infrastructure Growth:</strong> DeFi platforms are investing in enhanced compliance tools (KYC, sanctions screening) to serve institutional users confidently.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: The CLARITY Act */}
          <section id="clarity-act" className="space-y-4">
            <h2 className="text-3xl font-bold text-[#e6edf3]">7. The CLARITY Act: Making It Permanent</h2>
            <p className="text-[#c9d1d9] leading-relaxed">
              While the March 17, 2026 ruling was transformative, it is not permanent law. It is interpretive guidance under existing law, meaning a future SEC administration could theoretically reverse or reinterpret it. To provide long-term stability, Congress is advancing the CLARITY Act.
            </p>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#e6edf3]">What is the CLARITY Act?</h3>
              <p className="text-[#c9d1d9]">
                The <strong>Crypto and Digital Asset Regulation in the US (CLARITY) Act</strong> is proposed legislation that would codify the SEC/CFTC ruling into permanent statutory law. It would:
              </p>

              <ul className="space-y-3 text-[#c9d1d9] text-sm mt-4">
                <li className="flex gap-2">
                  <span className="text-[#6366f1]">1.</span>
                  <span><strong>Define digital assets in statute:</strong> Replace regulatory ambiguity with clear statutory definitions of "digital commodities" and "digital securities."</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1]">2.</span>
                  <span><strong>Establish permanent jurisdiction:</strong> Grant the CFTC exclusive authority over digital commodity tokens and the SEC over digital security tokens in statute (not just guidance).</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1]">3.</span>
                  <span><strong>Protect staking:</strong> Create a statutory staking framework ensuring staking rewards are never classified as securities.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1]">4.</span>
                  <span><strong>Codify ETF timeline:</strong> Make the 75-day ETF approval timeline statutory law.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#6366f1]">5.</span>
                  <span><strong>Create clear compliance paths:</strong> Provide safe harbors for decentralized protocols, DeFi platforms, and staking services to operate compliantly.</span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-[#e6edf3] mt-4">Legislative Status</h3>
              <p className="text-[#c9d1d9] text-sm">
                The CLARITY Act passed the House in 2025 and is in Senate consideration. Passage would provide long-term certainty and make the March 2026 ruling irreversible without Congressional action. Without passage, the ruling remains subject to regulatory reversal.
              </p>
            </div>
          </section>

          {/* Section 8: What's NOT Covered */}
          <section id="not-covered" className="space-y-4">
            <h2 className="text-3xl font-bold text-[#e6edf3]">8. What's NOT Covered by the Ruling</h2>
            <p className="text-[#c9d1d9] leading-relaxed">
              Understanding what the ruling does NOT address is equally important for compliance and risk management.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold text-[#e6edf3]">Still Potential Securities</h3>
                <ul className="space-y-2 text-[#c9d1d9] text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#ff6b6b]">•</span>
                    <span>Governance tokens with voting/profit-sharing rights</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#ff6b6b]">•</span>
                    <span>New ICO tokens not yet classified</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#ff6b6b]">•</span>
                    <span>Wrapped or derivative tokens of unclear status</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#ff6b6b]">•</span>
                    <span>Stablecoins (covered under separate rules)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 space-y-3">
                <h3 className="text-sm font-semibold text-[#e6edf3]">Still Regulated Activities</h3>
                <ul className="space-y-2 text-[#c9d1d9] text-sm">
                  <li className="flex gap-2">
                    <span className="text-[#ff6b6b]">•</span>
                    <span>AML/KYC requirements (unchanged)</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#ff6b6b]">•</span>
                    <span>Sanctions and OFAC compliance</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#ff6b6b]">•</span>
                    <span>Fraud, market manipulation, insider trading</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-[#ff6b6b]">•</span>
                    <span>State money transmission laws</span>
                  </li>
                </ul>
              </div>
            </div>

            <p className="text-[#c9d1d9] leading-relaxed text-sm italic text-[#8b949e] mt-4">
              The ruling addresses classification and certain compliance areas, but does not eliminate the need for robust AML, sanctions screening, and fraud prevention measures. Regulatory obligations exist independently of asset classification.
            </p>
          </section>

          {/* Section 9: What This Means for Investors */}
          <section id="investor-impact" className="space-y-4">
            <h2 className="text-3xl font-bold text-[#e6edf3]">9. What This Means for Investors</h2>
            <p className="text-[#c9d1d9] leading-relaxed">
              For individual and institutional investors, the ruling created several tangible opportunities and considerations.
            </p>

            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[#e6edf3]">Immediate Opportunities</h3>
              <ul className="space-y-3 text-[#c9d1d9] text-sm">
                <li className="flex gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  <span>
                    <strong>Spot ETF Access:</strong> Buy regulated crypto exposure through traditional brokerage accounts (stocks, retirement accounts).
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  <span>
                    <strong>Staking Yields:</strong> Earn 4-8% annually through staking-enabled ETFs without self-custody or technical knowledge.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  <span>
                    <strong>Institutional Confidence:</strong> Major institutions (pension funds, endowments, corporations) are now entering the 16-commodity space.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#22c55e]">✓</span>
                  <span>
                    <strong>Regulatory Clarity:</strong> Reduced regulatory reversal risk and enforcement action risk for compliant platforms and investors.
                  </span>
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-[#e6edf3] mt-4">Risks and Considerations</h3>
              <ul className="space-y-3 text-[#c9d1d9] text-sm">
                <li className="flex gap-2">
                  <span className="text-[#ff6b6b]">⚠</span>
                  <span>
                    <strong>No Permanent Law Yet:</strong> The ruling could be reversed if the CLARITY Act fails. Monitor Congressional activity.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ff6b6b]">⚠</span>
                  <span>
                    <strong>Price Volatility:</strong> Commodity classification doesn't eliminate price risk. Crypto volatility remains high.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ff6b6b]">⚠</span>
                  <span>
                    <strong>ETF Fee Waivers Expire:</strong> Many new ETF issuers are offering temporary fee waivers (0.19-0.25%). Monitor expiration dates.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#ff6b6b]">⚠</span>
                  <span>
                    <strong>Governance Tokens May Be Securities:</strong> Many DeFi governance tokens are NOT covered. Assume they are unregistered securities unless explicitly cleared.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="space-y-4 mt-8 pt-8 border-t border-[#30363d]">
            <h2 className="text-3xl font-bold text-[#e6edf3]">Frequently Asked Questions</h2>
            <FAQAccordion faqs={faqs} />
          </section>

          {/* Disclaimer */}
          <section className="mt-8 pt-8 border-t border-[#30363d]">
            <h2 className="text-lg font-bold text-[#e6edf3]">Disclaimer</h2>
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-sm text-[#8b949e] space-y-3">
              <p>
                This guide is for educational purposes only and does not constitute legal, financial, investment, or tax advice. The March 17, 2026 SEC/CFTC ruling is interpretive guidance and could be reversed or modified by future regulatory action or Congressional legislation.
              </p>
              <p>
                Digital commodity classification does not eliminate investment risk. Token prices are volatile and subject to market forces, regulatory changes, technical failures, and liquidity constraints.
              </p>
              <p>
                Before investing in crypto ETFs or digital assets, consult with qualified financial advisors, tax professionals, and legal counsel who understand your personal circumstances and risk tolerance. The information in this guide was accurate as of April 10, 2026, but may be outdated due to regulatory changes, new guidance, or market developments.
              </p>
              <p>
                Staking yields are subject to network conditions and are not guaranteed. ETF issuers may change staking strategies, suspend staking, or modify their offerings. Tax treatment of staking rewards may change with future legislation.
              </p>
            </div>
          </section>

          {/* Related Resources */}
          <section id="related-resources" className="space-y-4 mt-8 pt-8 border-t border-[#30363d]">
            <h2 className="text-lg font-bold text-[#e6edf3]">Related Resources</h2>
            <div className="space-y-3">
              <Link
                href="/learn/solana-etf-spot-funds-staking-guide-2026"
                className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-colors group"
              >
                <p className="font-semibold text-[#58a6ff] group-hover:underline">
                  Solana ETF Spot Funds & Staking Guide
                </p>
                <p className="text-[#8b949e] text-sm mt-1">
                  16 SEC-approved SOL spot ETFs, fee comparisons, and staking yields.
                </p>
              </Link>

              <Link
                href="/learn/crypto-etfs-complete-guide-2026"
                className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-colors group"
              >
                <p className="font-semibold text-[#58a6ff] group-hover:underline">
                  Complete Crypto ETF Guide 2026
                </p>
                <p className="text-[#8b949e] text-sm mt-1">
                  Compare spot ETFs across Bitcoin, Ethereum, Solana, and 13 other commodities.
                </p>
              </Link>

              <Link
                href="/learn/crypto-staking-guide-2026"
                className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-colors group"
              >
                <p className="font-semibold text-[#58a6ff] group-hover:underline">
                  Crypto Staking Guide 2026
                </p>
                <p className="text-[#8b949e] text-sm mt-1">
                  Earn yields through staking: strategies, risks, and best practices post-March ruling.
                </p>
              </Link>

              <Link
                href="/learn/clarity-act-stablecoin-yield-regulation-guide-2026"
                className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-colors group"
              >
                <p className="font-semibold text-[#58a6ff] group-hover:underline">
                  CLARITY Act & Stablecoin Regulation Guide
                </p>
                <p className="text-[#8b949e] text-sm mt-1">
                  What permanent statutory law means for crypto and how CLARITY codifies the ruling.
                </p>
              </Link>

              <Link
                href="/learn/mica-regulation-eu-crypto-compliance-guide-2026"
                className="block p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-colors group"
              >
                <p className="font-semibold text-[#58a6ff] group-hover:underline">
                  MiCA EU Crypto Regulation Compliance Guide
                </p>
                <p className="text-[#8b949e] text-sm mt-1">
                  Compare U.S. SEC/CFTC approach to EU's Markets in Crypto Assets (MiCA) regulation.
                </p>
              </Link>
            </div>
          </section>
        
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
        </div>
      </article>

        {/* Sidebar - TOC */}
        <aside className="lg:col-span-1">
          <div className="sticky top-[120px] space-y-6">
            {/* Table of Contents */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4">
              <h3 className="font-bold text-[#e6edf3] mb-4">Table of Contents</h3>
              <nav className="space-y-2 text-sm">
                {[
                  { id: 'what-ruling', label: 'What the Ruling Says' },
                  { id: 'classified-assets', label: '16 Digital Commodities' },
                  { id: 'jurisdiction', label: 'SEC vs CFTC Split' },
                  { id: 'etf-impact', label: 'ETF Impact' },
                  { id: 'staking-impact', label: 'Staking Impact' },
                  { id: 'defi-impact', label: 'DeFi Impact' },
                  { id: 'clarity-act', label: 'CLARITY Act' },
                  { id: 'not-covered', label: "What's Not Covered" },
                  { id: 'investor-impact', label: 'For Investors' },
                  { id: 'faq', label: 'FAQ' },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-3 py-1 text-[#8b949e] hover:text-[#58a6ff] transition-colors rounded hover:bg-[#0d1117]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Key Facts */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 space-y-3">
              <h3 className="font-bold text-[#e6edf3]">Key Facts</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-[#8b949e]">Ruling Date</p>
                  <p className="text-lg font-bold text-[#22c55e]">March 17, 2026</p>
                </div>
                <div>
                  <p className="text-[#8b949e]">Digital Commodities</p>
                  <p className="text-lg font-bold text-[#22c55e]">16 Assets</p>
                </div>
                <div>
                  <p className="text-[#8b949e]">Document Length</p>
                  <p className="text-lg font-bold text-[#22c55e]">68 Pages</p>
                </div>
                <div>
                  <p className="text-[#8b949e]">ETF Approval Timeline</p>
                  <p className="text-lg font-bold text-[#22c55e]">75 Days</p>
                </div>
                <div>
                  <p className="text-[#8b949e]">Pending ETF Apps</p>
                  <p className="text-lg font-bold text-[#22c55e]">90+</p>
                </div>
              </div>
            </div>

            {/* The 16 Assets */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 space-y-3">
              <h3 className="font-bold text-[#e6edf3]">The 16 Commodities</h3>
              <div className="space-y-2 text-xs">
                <div className="font-mono text-[#58a6ff]">
                  ETH, SOL, XRP, ADA, LINK, AVAX, DOT, HBAR, LTC, DOGE, SHIB, XTZ, BCH, APT, XLM, ALGO
                </div>
              </div>
            </div>

            {/* Regulatory Status */}
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 space-y-3">
              <h3 className="font-bold text-[#e6edf3]">Regulatory Status</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-[#8b949e]">Ruling Type</p>
                  <p className="font-semibold text-[#c9d1d9]">Interpretive Guidance</p>
                </div>
                <div>
                  <p className="text-[#8b949e]">Permanent Law?</p>
                  <p className="font-semibold text-[#ff6b6b]">Not Yet</p>
                </div>
                <div>
                  <p className="text-[#8b949e]">CLARITY Act Status</p>
                  <p className="font-semibold text-[#22c55e]">In Senate</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-[#6366f1] to-[#06b6d4] rounded-lg p-4 text-white">
              <p className="text-sm font-semibold mb-2">Want institutional clarity?</p>
              <p className="text-xs mb-4">
                Monitor CLARITY Act progress for permanent statutory law.
              </p>
              <a
                href="#clarity-act"
                className="inline-block px-3 py-2 bg-white text-[#6366f1] rounded font-semibold text-xs hover:bg-gray-100 transition-colors"
              >
                Learn About CLARITY
              </a>
            </div>
          </div>
        </aside>
      </div>

      {/* Footer */}
      <footer className="border-t border-[#30363d] bg-[#0d1117] mt-12">
        <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8 text-center text-sm text-[#8b949e]">
          <p>
            © 2026 degen0x. All rights reserved. This content is for educational purposes only.
          </p>
        </div>
      </footer>
    </main>
  );
}
