import { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from '@/components/BackToTop';
import StructuredData from '@/components/StructuredData';
import { generateArticleSchema, generateFAQSchema, combineSchemas } from '@/lib/structured-data';
import { SITE_URL } from '@/lib/constants';
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "ERC-7683 Guide 2026: The Cross-Chain Intents Standard",
  description: "Complete guide to ERC-7683 cross-chain intents standard co-authored by Uniswap Labs and Across Protocol. Learn how cross-chain intents work, the filler",
  keywords: ['ERC-7683', 'ERC-7683 guide', 'cross-chain intents', 'cross-chain intents standard', 'UniswapX cross-chain', 'Across Protocol ERC-7683', 'filler network crypto', 'intent-based cross-chain', 'Ethereum interoperability standard', 'cross-chain swaps 2026'],
  openGraph: {
    type: 'article',
    title: "ERC-7683 Guide 2026: The Cross-Chain Intents Standard",
    description: 'Complete guide to ERC-7683 cross-chain intents standard. Learn how fillers compete to fulfill user intents and why this creates better prices and faster settlement.',
    url: `${SITE_URL}/learn/erc-7683-cross-chain-intents-guide`,
    publishedTime: '2026-03-24T00:00:00Z',
    authors: ['degen0x'],
    tags: ['ERC-7683', 'cross-chain', 'intents', 'infrastructure', 'defi'],
    images: [
      {
        url: `${SITE_URL}/api/og?title=ERC-7683+Guide+2026:+Cross-Chain+Intents+Standard&category=Learn&type=learn`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ERC-7683 Guide 2026: The Cross-Chain Intents Standard",
    description: 'Complete guide to ERC-7683 cross-chain intents standard. Learn how it replaces fragmented bridges with a unified framework.',
    images: [`${SITE_URL}/api/og?title=ERC-7683+Guide+2026:+Cross-Chain+Intents+Standard&category=Learn&type=learn`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/erc-7683-cross-chain-intents-guide`,
  },
};

const articleSchema = generateArticleSchema({
  title: "ERC-7683 Guide 2026: The Cross-Chain Intents Standard",
  description: 'Complete guide to ERC-7683 cross-chain intents standard co-authored by Uniswap Labs and Across Protocol.',
  url: `${SITE_URL}/learn/erc-7683-cross-chain-intents-guide`,
  datePublished: '2026-03-24T00:00:00Z',
  dateModified: '2026-03-24T00:00:00Z',
  author: 'degen0x Team',
  image: `${SITE_URL}/api/og?title=ERC-7683+Guide+2026:+The+Cross-Chain+Intents+Standard&category=Learn&type=learn`,
  wordCount: 2800,
});

const faqSchema = generateFAQSchema([
  {
    question: 'What is ERC-7683?',
    answer: 'ERC-7683 is an Ethereum standard for cross-chain intents co-authored by Uniswap Labs and Across Protocol. It creates a universal framework where users declare what they want (e.g., "swap USDC on Ethereum for WETH on Base") and a competitive network of fillers races to fulfill that intent as cheaply and quickly as possible.',
  },
  {
    question: 'How is ERC-7683 different from a bridge?',
    answer: 'Traditional bridges lock and mint tokens, which is slow and trust-dependent. ERC-7683 intents instead declare an outcome and let fillers compete to achieve it. Fillers front-run the destination assets and get reimbursed, making settlement faster and prices better through competition. Users never touch a bridge directly.',
  },
  {
    question: 'Who created ERC-7683?',
    answer: 'ERC-7683 was co-authored by Uniswap Labs and Across Protocol, with endorsement from Vitalik Buterin and support from 50+ ecosystem projects including Arbitrum, Base, Optimism, Polygon, ZKsync, Offchain Labs, and Scroll.',
  },
  {
    question: 'Do I need a special wallet to use ERC-7683?',
    answer: 'No. ERC-7683 intents are implemented at the application level (like in UniswapX). Any standard Web3 wallet that supports the underlying chains works with ERC-7683 protocols. No special wallet software is required.',
  },
  {
    question: 'How many projects support ERC-7683?',
    answer: 'Over 50 projects have endorsed or are implementing ERC-7683, including major protocols like Uniswap, Across, Okto, and leading chains like Arbitrum, Base, Optimism, and Polygon. The ecosystem is growing rapidly.',
  },
  {
    question: 'Is ERC-7683 safe to use?',
    answer: 'ERC-7683 is safe in principle—it transfers cross-chain risk from users to fillers who are incentivized to manage it. However, always use only well-audited protocols (like UniswapX and Across), start with smaller amounts, and verify you\'re on the correct domain to avoid phishing.',
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Erc 7683 Cross Chain Intents Guide', },
  ],
};

export default function ERC7683GuidePage() {
  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Learn', href: '/learn' },
    { label: 'ERC-7683 Guide', href: '/learn/erc-7683-cross-chain-intents-guide' },
  ];

  const tableOfContents = [
    { id: 'what-is-erc-7683', label: 'What Is ERC-7683?' },
    { id: 'the-problem', label: 'The Problem ERC-7683 Solves' },
    { id: 'how-intents-work', label: 'How Cross-Chain Intents Work' },
    { id: 'filler-network', label: 'The Filler Network' },
    { id: 'key-projects', label: 'Key Projects Using ERC-7683' },
    { id: 'vs-bridges', label: 'ERC-7683 vs Traditional Bridges' },
    { id: 'user-impact', label: 'What ERC-7683 Means for Users' },
    { id: 'technical-architecture', label: 'Technical Architecture' },
    { id: 'risks-questions', label: 'Risks and Open Questions' },
    { id: 'future', label: 'The Future of Cross-Chain Intents' },
    { id: 'faq', label: 'Frequently Asked Questions' },
  ];

  return (
    <div style={{ backgroundColor: '#0d1117', color: '#e6edf3', minHeight: '100vh' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <style>{`
        .erc-toc-link:hover { text-decoration: underline; }
        .erc-toc-link:focus { outline: 2px solid #6366f1; outline-offset: 2px; }
        .erc-related-card:hover { border-color: #58a6ff !important; background-color: #0d1117 !important; }
        .erc-related-card:focus { outline: 2px solid #6366f1; outline-offset: 2px; }
      `}</style>
      <StructuredData data={combinedSchema} />
      <Breadcrumb items={breadcrumbItems} />

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        {/* Header Section */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px', flexWrap: 'wrap' }}>
            <span
              style={{
                padding: '4px 12px',
                backgroundColor: '#4f46e5',
                color: '#e6edf3',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}
            >
              Infrastructure
            </span>
            <span
              style={{
                padding: '4px 12px',
                backgroundColor: '#1e40af',
                color: '#e6edf3',
                borderRadius: '16px',
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
              }}
            >
              Intermediate
            </span>
          </div>

          <h1
            style={{
              fontSize: '42px',
              fontWeight: '700',
              marginBottom: '20px',
              background: 'linear-gradient(135deg, #58a6ff 0%, #79c0ff 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.2',
            }}
          >
            ERC-7683 Guide 2026: The Cross-Chain Intents Standard Explained
          </h1>

          <p style={{ fontSize: '18px', color: '#8b949e', marginBottom: '20px', lineHeight: '1.6' }}>
            ERC-7683 is the unified standard for cross-chain intents, co-authored by Uniswap Labs and Across Protocol. Instead of manually bridging assets between chains, users simply declare what they want and a competitive network of fillers races to fulfill that intent at the best price. This comprehensive guide explains what ERC-7683 is, how it works, and why it's reshaping cross-chain DeFi.
          </p>

          <p style={{ color: '#8b949e', fontSize: '14px' }}>
            Updated March 2026 · 14 min read
          </p>
        </div>

        {/* Table of Contents */}
        <div
          aria-label="Table of Contents"
          style={{
            backgroundColor: '#161b22',
            border: '1px solid #30363d',
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '40px',
          }}
        >
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#e6edf3' }}>
            Table of Contents
          </h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {tableOfContents.map((item, index) => (
              <li key={item.id} style={{ marginBottom: '8px' }}>
                <a
                  className="erc-toc-link"
                  style={{
                    color: '#58a6ff',
                    textDecoration: 'none',
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <span style={{ color: '#8b949e' }}>{index + 1}.</span> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 1 */}
        <section id="what-is-erc-7683" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#e6edf3' }}>
            1. What Is ERC-7683?
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            ERC-7683 is an Ethereum standard that creates a universal framework for cross-chain intents. Co-authored by Uniswap Labs and Across Protocol with endorsement from Vitalik Buterin, ERC-7683 represents a fundamental shift in how assets move between blockchains.
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

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Instead of forcing users to manually bridge assets through traditional lock-and-mint mechanisms, ERC-7683 allows users to simply declare what they want to achieve. For example: "I want to swap 1,000 USDC on Ethereum for WETH on Base." The user specifies the source chain, destination chain, input token, output token, and deadline. They don't care who fulfills this order—only that it happens as cheaply and quickly as possible.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            A competitive network of specialized market makers called fillers races to fulfill that intent. Fillers hold liquidity on multiple chains and compete to give users the best execution. The standard creates a shared language so all fillers, regardless of which protocol they work with, can compete on an equal footing. This drives better prices, faster settlement, and lower fees.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '2px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: '#e6edf3', margin: 0 }}>
              <strong>Key Insight:</strong> ERC-7683 doesn't eliminate bridges—it creates a higher layer of abstraction where protocols and fillers can compete on a level playing field. The actual settlement still happens through cross-chain messaging, but users and applications never interact with bridges directly.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="the-problem" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#e6edf3' }}>
            2. The Problem ERC-7683 Solves
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Before ERC-7683, the cross-chain ecosystem was hopelessly fragmented. Every bridge protocol—Across, Stargate, Wormhole, IBC, LayerZero—had its own proprietary order format, its own relayer network, and its own liquidity pools. This fragmentation created multiple serious problems:
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            1. Liquidity Fragmentation
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Each bridge maintained its own separate liquidity pools. This meant that liquidity was split across 10+ protocols instead of consolidated, resulting in fewer available fillers for any given route. Fewer fillers meant worse prices for users and lower margins for liquidity providers.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            2. Ecosystem Lock-In
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Applications had to choose one bridge and stick with it. If you built on Stargate, you couldn't access fillers from Across. This meant applications were locked into whatever liquidity their chosen bridge had, with no way to tap into other filler networks. Competing bridges couldn't collaborate; they could only fight for volume.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            3. Duplicate Infrastructure Costs
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Every bridge built and operated its own relayer networks, security infrastructure, and verification systems. This meant billions of dollars in duplicated work, with each protocol spending 6-12 months and millions in engineering resources to build essentially the same thing.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            4. Inconsistent User Experience
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Each bridge had different settlement times, different fee structures, and different UX flows. A user had to learn 10 different bridging interfaces to get optimal pricing across different routes. This fragmentation made it nearly impossible to build a unified cross-chain user experience.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: '#e6edf3', margin: 0 }}>
              <strong>The Root Cause:</strong> There was no shared language. Each bridge spoke its own dialect, making it impossible for fillers to work across protocols or for applications to access the full filler network. ERC-7683 solves this by creating one universal language that everyone uses.
            </p>
          </div>
        </section>

        {/* Section 3 */}
        <section id="how-intents-work" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#e6edf3' }}>
            3. How Cross-Chain Intents Work
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            ERC-7683 defines a standard workflow where users, applications, and fillers interact through a common framework. Let's walk through a real example: swapping 1,000 USDC on Ethereum for WETH on Base.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Step 1: User Creates a CrossChainOrder
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            The user specifies an intent through an application (like Uniswap or Across). This creates a CrossChainOrder struct that contains: source chain (Ethereum), destination chain (Base), input token (USDC), input amount (1,000), output token (WETH), minimum output (e.g., 0.5 WETH), and deadline (e.g., 10 minutes from now). The user signs this order with their private key.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Step 2: Order Broadcast to Filler Network
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            The application broadcasts this order to a p2p network of fillers who are listening for orders they can profitably fulfill. Think of this like an RFQ (Request for Quote) system where the user broadcasts their need and fillers compete to submit quotes. The order isn't on-chain yet—it's in the application mempool or communicated through the filler network.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Step 3: Fillers Compete to Fulfill
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Multiple fillers—which could be Uniswap, Across, Paraswap, or other specialized firms—immediately calculate their own costs for fulfilling this order. A filler checks: "Do I have 0.5+ WETH liquidity on Base? What's my cost of acquiring it? What's my slippage? How much can I make on the spread?" They submit their best quote to the user or application.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            The competition between fillers drives prices toward fair market value. If Filler A quotes a worse rate than Filler B, the user accepts Filler B's quote. This competitive pressure ensures users get prices that are hard to beat.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Step 4: Filler Executes and Gets Settled
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            The winning filler immediately sends 0.5 WETH (or the exact amount) to the user's address on Base. The user receives their destination tokens instantly or within seconds. Simultaneously, the filler's CrossChainOrder gets confirmed and submitted to the settlement contract on Ethereum.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Step 5: Settlement on Source Chain
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            On Ethereum, the ISettlementContract validates the order signature and transfers 1,000 USDC from the user to the filler. Now the filler has received their reimbursement and can repeat this process with other users. Total time from user's perspective: 5-30 seconds. Total cost: just the gas fees on both chains.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: '#e6edf3', margin: 0 }}>
              <strong>Key Innovation:</strong> The filler fronts the destination assets and gets reimbursed later. This means settlement happens in two phases: instant execution (user gets tokens), then settlement (filler gets reimbursed). This is fundamentally different from traditional bridges where everything happens synchronously.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="filler-network" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#e6edf3' }}>
            4. The Filler Network: Who Fulfills Your Intents
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Fillers are specialized market makers for cross-chain transactions. They're the engine of the ERC-7683 economy. Unlike passive liquidity providers in traditional bridges, fillers are active participants who make money by efficiently fulfilling orders and managing the cross-chain risk.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            What Fillers Do
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Fillers hold capital on multiple chains. When they see a profitable order, they front the destination assets to the user and then rebalance their capital across chains to settle. For example, if a filler fronts WETH on Base, they then need to rebalance by acquiring that WETH. They might buy it on Base's DEX, or they might use arbitrage to rebalance more efficiently.
          </p>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Fillers make money on the spread: the difference between what they pay to acquire the destination asset and what they receive from the settlement on the source chain. More fillers competing means tighter spreads and better prices for users. With ERC-7683, all fillers can access all orders through a unified interface.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Why More Fillers = Better Outcomes
          </h3>
          <ul style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px', color: '#e6edf3', paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px' }}>
              <strong>Better Prices:</strong> With 20 fillers competing instead of 3, each one is pressured to offer the tightest possible quote. Users benefit from this competition.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Deeper Liquidity:</strong> More fillers means more capital available across chains. Larger orders can be filled without slippage.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Lower Failure Rates:</strong> If one filler can't fill an order, another one immediately steps in. Orders rarely fail.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Faster Settlement:</strong> With many fillers operating, orders get picked up almost instantly. No waiting for a relayer to process your transaction.
            </li>
            <li style={{ marginBottom: '8px' }}>
              <strong>Reduced Fees:</strong> Competition drives fees down across all participants. Users pay less, fillers make thinner margins but higher volume.
            </li>
          </ul>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Types of Fillers
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            ERC-7683 is protocol-agnostic, so many types of entities can be fillers: dedicated market makers, DEX protocols with capital, lending protocols with idle reserves, major exchanges holding cross-chain capital, and algorithmic arbitrage bots. This diversity creates a robust, resilient network.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: '#e6edf3', margin: 0 }}>
              <strong>Market Efficiency:</strong> The filler network is a pure market mechanism. It doesn't require trust in any single entity. Fillers are incentivized to offer good prices (or lose orders to competitors), and they're incentivized to manage cross-chain capital efficiently (or lose money). This aligns economic incentives perfectly.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="key-projects" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#e6edf3' }}>
            5. Key Projects Using ERC-7683
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '24px', color: '#e6edf3' }}>
            ERC-7683 has rapidly gained adoption across the DeFi ecosystem. Here are the major protocols and chains already implementing it:
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff', marginTop: 0 }}>
              UniswapX
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: '#e6edf3' }}>
              Uniswap's intent-based trading system is the flagship application of ERC-7683. UniswapX allows users to swap tokens across chains without ever touching a bridge interface. All cross-chain swaps on UniswapX are fulfilled through the ERC-7683 framework, powered by competing fillers. Uniswap is also offering filler incentives to bootstrap the network.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff', marginTop: 0 }}>
              Across Protocol
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: '#e6edf3' }}>
              Across Protocol is co-author of ERC-7683 and has integrated the standard into their core infrastructure. Across uses an optimistic verification model with UMA oracle for settlement, allowing for cheaper and faster cross-chain transfers. Across is an excellent example of how a bridge protocol transitions to the intent model.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff', marginTop: 0 }}>
              Okto
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: '#e6edf3' }}>
              Okto is a chain abstraction platform built on ERC-7683 that enables seamless multi-chain DeFi. Users on Okto can interact with protocols across different chains as if they were on one unified blockchain. ERC-7683 intents power all of Okto's cross-chain operations.
            </p>
          </div>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginBottom: '20px',
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff', marginTop: 0 }}>
              50+ Supporting Chains and Protocols
            </h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: '#e6edf3' }}>
              Major chains like Arbitrum, Base, Optimism, Polygon, and ZKsync have endorsed and are integrating ERC-7683. Offchain Labs, Scroll, and other protocol developers support the standard. Vitalik Buterin has publicly endorsed ERC-7683 as the right direction for cross-chain communication. This support indicates that ERC-7683 is becoming the industry standard.
            </p>
          </div>
        </section>

        {/* Section 6 */}
        <section id="vs-bridges" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#e6edf3' }}>
            6. ERC-7683 vs Traditional Bridges vs Other Intent Standards
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '24px', color: '#e6edf3' }}>
            To understand why ERC-7683 matters, it's helpful to compare it with existing solutions:
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '13px',
              }}
            >
              <thead>
                <tr style={{ borderBottom: '2px solid #30363d' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#79c0ff', fontWeight: '600' }}>
                    Aspect
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#79c0ff', fontWeight: '600' }}>
                    ERC-7683 Intents
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#79c0ff', fontWeight: '600' }}>
                    Traditional Bridges
                  </th>
                  <th style={{ padding: '12px', textAlign: 'left', color: '#79c0ff', fontWeight: '600' }}>
                    Aggregators
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Mechanism</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Fillers compete to fulfill intents</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Lock assets, mint wrapped token</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Route through multiple bridges</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Settlement Speed</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>5–30 seconds</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>5–20 minutes</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>10–30 minutes</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Trust Model</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Economic incentives</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Validator set</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Multiple validators</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Fee Structure</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Competitive spread</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Fixed or variable fee</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Multiple bridge fees</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Price Competitiveness</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Very good (many fillers)</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Fair (no competition)</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Good (limited routing)</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#8b949e' }}>User UX</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>One-click intent</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Manual bridge interface</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Semi-automatic routing</td>
                </tr>
                <tr style={{ borderBottom: '1px solid #30363d' }}>
                  <td style={{ padding: '12px', color: '#8b949e' }}>Interoperability</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Universal standard</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Protocol-specific</td>
                  <td style={{ padding: '12px', color: '#e6edf3' }}>Bridges are fragmented</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ color: '#6e7681', fontSize: '12px', textAlign: 'center', marginTop: '4px' }}>
            <span style={{ opacity: 0.6 }}>← scroll to see all columns →</span>
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: '#e6edf3', margin: 0 }}>
              <strong>Why ERC-7683 Wins:</strong> ERC-7683 combines the speed and economics of the filler model (like UniswapX) with the universality of a standard. Every protocol that implements it gets access to the same filler network. No lock-in, no proprietary formats, no duplicate infrastructure. It's the most efficient way to move assets between chains.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section id="user-impact" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#e6edf3' }}>
            7. What ERC-7683 Means for Users
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            ERC-7683 doesn't just improve the infrastructure—it fundamentally changes the user experience and economics of cross-chain trading. Here's what matters:
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            One-Click Cross-Chain Swaps
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Instead of manually navigating to a bridge, waiting 5-20 minutes, then going to a DEX, you now just click "swap USDC on Ethereum for WETH on Base" in Uniswap or your app of choice. It feels exactly like a normal swap, but it happens across chains. The entire process takes 10-30 seconds.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Better Prices Through Filler Competition
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            With multiple fillers competing for your order, you get prices very close to the fair market rate. The spread is minimized by competition. If you're swapping $100,000 across chains, the savings from better pricing could easily be hundreds of dollars compared to traditional bridges.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Lower Fees from Shared Infrastructure
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            You only pay two gas fees (one on source chain, one on destination) plus the filler's spread. No extra bridge fees, no redundant infrastructure costs passed down to users. The economics are cleaner and cheaper.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Reduced Bridge Risk
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Fillers take on the cross-chain risk, not users. If something goes wrong in the cross-chain communication, the filler bears the loss, not you. Users simply wait a few seconds and get their tokens. This is a massive improvement in risk distribution.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            How to Use It Today
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            If you have a Uniswap account, you can already use ERC-7683 intents through UniswapX. Simply go to swap, select two different chains, and execute. You'll see the swap complete within seconds. Across Protocol also allows direct intent-based swaps. As more protocols implement ERC-7683, more apps will offer this experience.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: '#e6edf3', margin: 0 }}>
              <strong>Practical Impact:</strong> For a user swapping $10,000 across chains with traditional bridges, you'd wait 10 minutes and pay $50-200 in fees. With ERC-7683, you wait 10 seconds and pay $10-30. That's not a small improvement—it's a 10x reduction in time and cost.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section id="technical-architecture" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#e6edf3' }}>
            8. Technical Architecture
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            ERC-7683 defines the key interfaces and data structures that enable the cross-chain intent model. Let's walk through the technical core:
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            CrossChainOrder Struct
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            The CrossChainOrder struct defines a user's intent. It contains: chainIn (source chain ID), chainOut (destination chain ID), tokenIn (source token address), amountIn (source amount), tokenOut (destination token address), amountOutMin (minimum acceptable output), deadline (order expiration time), and other metadata. This is what fillers see and quote against.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            ResolvedCrossChainOrder
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            After a filler accepts an order, it becomes a ResolvedCrossChainOrder. This includes the original order plus additional fields: the filler's address, the actual output amount they're providing, and the settlement contract address. This is what gets submitted on-chain for settlement.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            ISettlementContract Interface
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Each protocol implementing ERC-7683 implements the ISettlementContract interface, which handles on-chain settlement. Key methods include: resolveOrder (validates and executes order settlement), and verification logic that confirms the filler did deliver the tokens on the destination chain. Different protocols can have different settlement logic, but they all follow the same interface.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Open Intents Framework
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            The Open Intents Framework is an off-chain coordination layer that helps broadcast orders to fillers. It's like a mempool for cross-chain intents. Fillers subscribe to the framework and receive orders matching their profile. This prevents each application from having to build its own p2p network.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            RFQ (Request for Quote) Systems
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            ERC-7683 enables RFQ systems where users broadcast their intent and fillers submit quotes. This is fundamentally different from traditional AMM models. The user can see multiple quotes from different fillers, or the application can automatically route to the best quote. This competitive dynamic is what makes prices so good.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: '#e6edf3', margin: 0 }}>
              <strong>Flexibility by Design:</strong> ERC-7683 is intentionally minimal. It defines the order format and settlement interface, but leaves settlement logic to each protocol. This allows Uniswap, Across, and others to use different verification methods (optimistic, UMA oracle, etc.) while all communicating through the same standard.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section id="risks-questions" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#e6edf3' }}>
            9. Risks and Open Questions
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '24px', color: '#e6edf3' }}>
            ERC-7683 is promising, but like any new standard, it has challenges and open questions:
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Filler Centralization Risk
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            If a few large fillers dominate (e.g., Uniswap becomes 50% of all filling), they could coordinate to raise spreads or discriminate against certain orders. The standard is designed to prevent this through competition, but network effects could still favor incumbents. Mitigation: incentivize new filler entry and monitor market concentration.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            MEV Extraction by Fillers
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Fillers have information about user intents before they're settled. They could potentially front-run or sandwich users just like validators do on-chain. Mitigation: encrypted order broadcasts, private order books, and protocol-level MEV minimization techniques being researched.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Settlement Disputes
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            What happens if a filler claims they delivered tokens but the user received nothing? Settlement contracts need robust dispute resolution mechanisms. Cross-chain verification is complex, and bugs in settlement logic could cause losses.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Standard Not Yet Finalized
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            ERC-7683 is still evolving. The final EIP (Ethereum Improvement Proposal) is not yet accepted on-chain, and changes could happen. Early adopters are taking some risk that the standard could change or that competing standards could emerge.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Filler Liquidity Dependency
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            The system only works well if fillers have sufficient capital on all chains. During market stress or liquidity crises, fillers might not have enough assets to fulfill orders, causing orders to fail. This is mitigated by having many competing fillers with diverse capital sources.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Smart Contract Risk
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Settlement contracts are code, and code has bugs. A vulnerability in any major settlement contract could result in loss of user funds. Always use audited protocols and start with smaller amounts.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '2px solid #d47a40',
              borderRadius: '8px',
              padding: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: '#e6edf3', margin: 0 }}>
              <strong>⚠️ Risk Summary:</strong> ERC-7683 is well-designed and has strong backing, but it's still new. Use audited protocols only (Uniswap, Across), start with smaller amounts, and always verify you're on the correct domain. As the ecosystem matures and audits accumulate, these risks will decrease significantly.
            </p>
          </div>
        </section>

        {/* Section 10 */}
        <section id="future" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#e6edf3' }}>
            10. The Future of Cross-Chain Intents
          </h2>

          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            ERC-7683 is likely just the beginning. Here's where the technology is heading:
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Expansion Beyond Token Swaps
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Today, ERC-7683 mostly powers token swaps. But intents can express any outcome: "Provide 100 USDC liquidity on Curve on Arbitrum," "Borrow 1,000 DAI on Compound on Base," "Stake 32 ETH on Lido on Ethereum," etc. As the standard matures, fillers will be able to fulfill intents for any cross-chain DeFi action.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Integration with Account Abstraction (ERC-4337)
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Smart contract wallets using ERC-4337 (account abstraction) can bundle intents into batch operations. A user could submit a complex intent like "Swap ETH for USDC on Arbitrum, then provide liquidity on Uniswap, then delegate rewards to a friend's wallet"—all as a single intent. Paymasters could front the costs.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Cross-Chain DeFi Composability
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            The vision is Ethereum-as-a-unified-liquidity-layer. Users and applications won't think of assets as being "on Arbitrum" or "on Base"—they'll be on "Ethereum," and the specific location is an implementation detail. ERC-7683 is the infrastructure layer that makes this possible.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Chain Abstraction at Scale
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            Platforms like Okto are building "chain abstraction" layers where users interact with DeFi without caring which chain their assets are on. ERC-7683 is the foundation for these platforms. As adoption grows, chain abstraction will become the default way people interact with multi-chain DeFi.
          </p>

          <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff' }}>
            Standardization Across All Bridges
          </h3>
          <p style={{ fontSize: '16px', lineHeight: '1.7', marginBottom: '16px', color: '#e6edf3' }}>
            With 50+ projects already supporting ERC-7683, it's on track to become the industry standard for cross-chain intents. Legacy bridges will likely adopt the standard or become irrelevant. This consolidation of infrastructure will be enormously beneficial for the ecosystem.
          </p>

          <div
            style={{
              backgroundColor: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '8px',
              padding: '20px',
              marginTop: '20px',
            }}
          >
            <p style={{ fontSize: '14px', color: '#e6edf3', margin: 0 }}>
              <strong>The Big Picture:</strong> ERC-7683 is laying the foundation for Ethereum as a true multi-chain ecosystem. Instead of fragmented bridges and app lock-in, users will have one unified interface for cross-chain DeFi. This is what true interoperability looks like.
            </p>
          </div>
        </section>

        {/* Section 11: FAQ */}
        <section id="faq" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '24px', color: '#e6edf3' }}>
            11. Frequently Asked Questions
          </h2>

          <div style={{ display: 'grid', gap: '16px' }}>
            {[
              {
                q: 'What is ERC-7683?',
                a: 'ERC-7683 is a standard for cross-chain intents co-authored by Uniswap Labs and Across Protocol. It allows users to declare what they want (e.g., swap USDC on Ethereum for WETH on Base) and lets a competitive network of fillers race to fulfill that intent as cheaply and quickly as possible.',
              },
              {
                q: 'How is ERC-7683 different from a bridge?',
                a: 'Traditional bridges lock assets on the source chain and mint wrapped tokens on the destination chain. ERC-7683 instead creates an intent that fillers compete to fulfill by fronting destination assets and getting reimbursed later. This is faster (seconds vs minutes), cheaper (competitive spreads), and safer (fillers take cross-chain risk).',
              },
              {
                q: 'Who created ERC-7683?',
                a: 'ERC-7683 was co-authored by Uniswap Labs and Across Protocol. The standard has been endorsed by Vitalik Buterin and supported by 50+ ecosystem projects including Arbitrum, Base, Optimism, Polygon, and ZKsync.',
              },
              {
                q: 'Do I need a special wallet to use ERC-7683?',
                a: 'No. Any standard Web3 wallet (MetaMask, Coinbase Wallet, etc.) works with ERC-7683 protocols. The standard is implemented at the application level (like Uniswap), so no special wallet software is required.',
              },
              {
                q: 'How many projects support ERC-7683?',
                a: 'Over 50 projects have endorsed or implemented ERC-7683, including major protocols like Uniswap, Across, and Okto, as well as leading chains like Arbitrum, Base, Optimism, and Polygon. Adoption is growing rapidly.',
              },
              {
                q: 'Is ERC-7683 safe to use?',
                a: 'ERC-7683 is safe in principle because it transfers cross-chain risk from users to fillers. However, smart contract risk always exists. Use only audited protocols (Uniswap, Across), start with smaller amounts, and always verify you\'re on the correct domain to avoid phishing.',
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: '#161b22',
                  border: '1px solid #30363d',
                  borderRadius: '8px',
                  padding: '20px',
                }}
              >
                <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#79c0ff', marginTop: 0 }}>
                  Q: {faq.question}
                </h3>
                <p style={{ fontSize: '14px', lineHeight: '1.6', margin: 0, color: '#e6edf3' }}>
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links Section */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '20px', color: '#e6edf3' }}>
            Related Resources
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '16px',
            }}
          >
            <Link href="/learn/chain-abstraction-guide-2026"
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '16px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
              className="erc-related-card"
            >
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#79c0ff', marginTop: 0 }}>
                Chain Abstraction Guide 2026
              </h3>
              <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                Learn how chain abstraction platforms like Okto simplify multi-chain DeFi using ERC-7683 intents.
              </p>
            </Link>

            <Link href="/learn/chain-abstraction-guide-2026"
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '16px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#79c0ff', marginTop: 0 }}>
                Intent-Based Trading Guide
              </h3>
              <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                Understand how intent-based trading systems like UniswapX work and why they offer better prices.
              </p>
            </Link>

            <Link href="/learn/chain-abstraction-guide-2026"
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '16px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#79c0ff', marginTop: 0 }}>
                Bridge Aggregator Tool
              </h3>
              <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                Compare cross-chain bridges and find the best rates for your transfers.
              </p>
            </Link>

            <Link href="/learn/chain-abstraction-guide-2026"
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '16px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#79c0ff', marginTop: 0 }}>
                Advanced DeFi Strategies
              </h3>
              <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                Explore advanced cross-chain DeFi strategies enabled by seamless cross-chain intents.
              </p>
            </Link>

            <Link href="/learn/chain-abstraction-guide-2026"
              style={{
                backgroundColor: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '8px',
                padding: '16px',
                textDecoration: 'none',
                transition: 'all 0.3s',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '8px', color: '#79c0ff', marginTop: 0 }}>
                DEX Aggregator Comparison
              </h3>
              <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                Compare DEX aggregators and their cross-chain capabilities powered by protocols like Uniswap.
              </p>
            </Link>
          </div>
        </section>

        {/* Back to Top */}
        <BackToTop />
        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-24"
          updatedDate="2026-04-12"
          readingTime={13}
          section="learn"
        />
      </div>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Erc 7683 Cross Chain Intents Guide",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/erc-7683-cross-chain-intents-guide"
            })
          }}
        />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "ERC-7683 Guide 2026: The Cross-Chain Intents Standard", "description": "Complete guide to ERC-7683 cross-chain intents standard co-authored by Uniswap Labs and Across Protocol. Learn how cross-chain intents work, the filler", "url": "https://degen0x.com/learn/erc-7683-cross-chain-intents-guide", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>

  );
}
