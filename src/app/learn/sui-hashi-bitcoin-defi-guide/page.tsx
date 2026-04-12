import { Metadata } from 'next';
import Link from 'next/link';
import { generateArticleSchema, generateFAQSchema, combineSchemas } from '@/lib/structured-data';
import StructuredData from '@/components/StructuredData';
import BackToTop from '@/components/BackToTop';
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Sui Hashi Bitcoin DeFi Guide 2026 — BTC Lending & Yield on Sui | degen0x',
  description: 'Comprehensive guide to Hashi protocol on Sui blockchain. Native Bitcoin DeFi without wrappers. BTC lending, borrowing, yield generation with institutional backing.',
  keywords: [
    'sui hashi protocol',
    'bitcoin defi 2026',
    'hashi bitcoin lending',
    'BTC yield sui',
    'sui bitcoin defi',
    'BTCFi',
    'bitcoin smart contracts',
  ],
  openGraph: {
    type: 'article',
    title: 'Sui Hashi Bitcoin DeFi Guide 2026',
    description: 'Learn how Hashi brings native Bitcoin into DeFi on Sui with institutional-grade infrastructure.',
    url: 'https://degen0x.com/learn/sui-hashi-bitcoin-defi-guide',
    publishedTime: '2026-03-25T00:00:00Z',
    authors: ['degen0x'],
    tags: ['DeFi', 'Bitcoin', 'Sui', 'BTCFi'],
    images: [{
      url: 'https://degen0x.com/og-sui-hashi-bitcoin-defi-guide.svg',
      width: 1200,
      height: 630,
      alt: 'Sui Hashi Bitcoin DeFi Guide 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sui Hashi Bitcoin DeFi Guide 2026',
    description: 'Master native Bitcoin DeFi on Sui with Hashi protocol',
    images: ['https://degen0x.com/og-sui-hashi-bitcoin-defi-guide.svg'],
  },
};

const articleSchema = generateArticleSchema({
  headline: 'Sui Hashi Bitcoin DeFi Guide 2026 — BTC Lending & Yield on Sui',
  description: 'Comprehensive guide to Hashi protocol bringing native Bitcoin into DeFi on Sui blockchain',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  wordCount: 3200,
});

const faqSchema = generateFAQSchema([
  {
    question: 'What is Hashi and how does it differ from wrapped Bitcoin solutions?',
    answer: 'Hashi is a native Bitcoin DeFi protocol on Sui that uses multi-party computation (MPC) custody and smart contracts to enable lending, borrowing, and yield without wrapping BTC. Unlike wrapped solutions that create synthetic derivatives, Hashi uses actual Bitcoin locked in institutional-grade custody through BitGo, providing direct exposure to BTC in DeFi.',
  },
  {
    question: 'Why was Sui blockchain chosen for Hashi instead of Ethereum or Bitcoin L2s?',
    answer: 'Sui was chosen for its object-centric model, parallel execution capabilities, and sub-second finality. These features enable efficient collateral management, fast settlement, and lower costs. Sui\'s Move language also provides better formal verification capabilities for smart contract security.',
  },
  {
    question: 'What are the main risks of using Hashi protocol?',
    answer: 'Key risks include MPC custody trust assumptions (though distributed across multiple institutions), smart contract risk (audits and formal verification planned), regulatory uncertainty around Bitcoin custody in DeFi, and early-stage protocol risk. Users should verify security audits before mainnet launch and never commit more than they can afford to lose.',
  },
  {
    question: 'When will Hashi launch on mainnet and how can I prepare now?',
    answer: 'Hashi launched on Sui devnet around March 19, 2026, with mainnet planned for later in 2026. You can prepare by understanding the protocol fundamentals, monitoring official announcements, testing on devnet when available, and ensuring familiarity with Sui wallet management and DeFi interactions.',
  },
  {
    question: 'How much Bitcoin is currently in DeFi and what opportunity does Hashi address?',
    answer: 'Less than 0.5% of Bitcoin\'s $1T+ market cap is currently deployed in DeFi. Hashi targets this massive gap by enabling native, institutional-grade Bitcoin lending and borrowing without the friction of wrapping or bridging. This unlocks yield generation on idle Bitcoin holdings.',
  },
  {
    question: 'How does Hashi compare to other BTCFi solutions like Babylon and Stacks?',
    answer: 'Babylon focuses on Bitcoin staking without wrapping. Stacks offers sBTC as a Bitcoin L2. Hashi complements these by enabling direct BTC lending/borrowing on Sui. Each addresses different aspects of Bitcoin DeFi: Babylon targets yield staking, Stacks enables smart contracts on Bitcoin, Hashi enables diverse DeFi primitives with MPC custody.',
  },
]);

const schemas = combineSchemas([articleSchema, faqSchema]);

export default function HashiBitcoinDefiGuide() {
  return (
    <>
      <StructuredData data={schemas} />
      <div
        style={{
          background: '#0d1117',
          color: '#e6edf3',
          minHeight: '100vh',
          padding: '20px',
        }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Header Section */}
          <div style={{ marginBottom: '40px' }}>
            <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
              <span
                style={{
                  background: '#3730a3',
                  color: '#e6edf3',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}
              >
                DeFi
              </span>
              <span
                style={{
                  background: '#92400e',
                  color: '#e6edf3',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}
              >
                Bitcoin
              </span>
              <span
                style={{
                  background: '#1e40af',
                  color: '#e6edf3',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  fontSize: '12px',
                  fontWeight: '600',
                }}
              >
                Intermediate
              </span>
            </div>

            <h1
              style={{
                fontSize: '48px',
                fontWeight: '700',
                marginBottom: '16px',
                background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Sui Hashi: Native Bitcoin DeFi Without Wrappers
            </h1>

            <p style={{ fontSize: '18px', color: '#8b949e', marginBottom: '24px' }}>
              Hashi is bringing institutional-grade Bitcoin into DeFi on Sui blockchain. Learn how native BTC lending, borrowing, and yield generation work without wrapping.
            </p>

            <div style={{ display: 'flex', gap: '16px', color: '#8b949e', fontSize: '14px' }}>
              <span>Updated March 2026</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-25"
          updatedDate="2026-04-12"
          readingTime={9}
          section="learn"
        />


          {/* Table of Contents */}
          <div
            style={{
              background: '#161b22',
              border: '1px solid #30363d',
              borderRadius: '12px',
              padding: '24px',
              marginBottom: '40px',
            }}
          >
            <h2 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '16px', color: '#e6edf3' }}>
              Table of Contents
            </h2>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                { href: '#what-is-hashi', label: '1. What Is Hashi?' },
                { href: '#how-hashi-works', label: '2. How Hashi Works' },
                { href: '#key-features', label: '3. Key Features' },
                { href: '#why-sui', label: '4. Why Sui Blockchain?' },
                { href: '#institutional-partners', label: '5. Institutional Partners' },
                { href: '#hashi-vs-others', label: '6. Hashi vs Other BTCFi Solutions' },
                { href: '#risks', label: '7. Risks & Considerations' },
                { href: '#timeline', label: '8. Timeline & How to Get Involved' },
                { href: '#faq', label: '9. Frequently Asked Questions' },
              ].map((item) => (
                <li key={item.href} style={{ marginBottom: '12px' }}>
                  <a
                    href={item.href}
                    style={{
                      color: '#58a6ff',
                      textDecoration: 'none',
                      fontSize: '14px',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = 'none')}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content */}

          {/* Section 1: What Is Hashi? */}
          <section id="what-is-hashi" style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#e6edf3',
              }}
            >
              1. What Is Hashi?
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Hashi is a native Bitcoin DeFi protocol launched on Sui blockchain in March 2026. It enables direct Bitcoin lending, borrowing, and yield generation without wrapping or bridging. Hashi uses institutional-grade multi-party computation (MPC) custody through BitGo combined with Sui smart contracts to bring actual Bitcoin into DeFi primitives.
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

            <div
              style={{
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
              }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#06b6d4', marginBottom: '12px' }}>
                The Problem Hashi Solves
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#8b949e', margin: 0 }}>
                Less than 0.5% of Bitcoin's $1 trillion+ market cap is currently deployed in DeFi. Bitcoin holders face a choice: hold BTC for security (no yield) or wrap it for DeFi (counterparty risk). Hashi eliminates this friction by enabling direct, institutional-grade Bitcoin participation in DeFi yield strategies.
              </p>
            </div>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              The protocol is backed by industry leaders including BitGo (institutional custody), Bullish (exchange infrastructure), FalconX (market making), Ledger (wallet security), and Cubist (research). This backing ensures institutional-grade security from day one.
            </p>

            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#e6edf3' }}>
              Hashi launched on Sui devnet around March 19, 2026, with mainnet planned for later in 2026. The protocol underwent formal verification and security audits before mainnet deployment.
            </p>
          </section>

          {/* Section 2: How Hashi Works */}
          <section id="how-hashi-works" style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#e6edf3',
              }}
            >
              2. How Hashi Works: Technical Architecture
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: '#e6edf3' }}>
              Hashi's architecture combines two powerful approaches: MPC custody for Bitcoin security and Sui smart contracts for DeFi logic.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              MPC Custody Layer
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Bitcoin deposited into Hashi is secured through multi-party computation (MPC). No single entity controls the private keys—instead, key fragments are distributed across multiple institutional operators including BitGo and others. This means:
            </p>

            <ul style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px', color: '#e6edf3', paddingLeft: '20px' }}>
              <li>Bitcoin remains on Bitcoin blockchain (not wrapped)</li>
              <li>Private keys never exist in single location</li>
              <li>Custody is distributed across multiple institutions</li>
              <li>Institutional-grade security standards applied</li>
            </ul>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Sui Smart Contract Layer
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              While Bitcoin sits safely in MPC custody, Hashi's smart contracts on Sui manage collateral positions, lending pools, and DeFi logic. When you deposit BTC:
            </p>

            <ol style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px', color: '#e6edf3', paddingLeft: '20px' }}>
              <li>Your Bitcoin is locked in institutional MPC custody</li>
              <li>You receive a representation on Sui (hBTC or similar) tracking your position</li>
              <li>You use hBTC in Sui DeFi: lending pools, yield strategies, collateral for borrowing</li>
              <li>Smart contracts maintain collateral ratios and liquidation logic</li>
              <li>When you exit, your BTC is released from custody back to you</li>
            </ol>

            <div
              style={{
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
              }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#06b6d4', marginBottom: '12px' }}>
                Key Insight: No Wrapping
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#8b949e', margin: 0 }}>
                Traditional wrapped Bitcoin (like WBTC) relies on a custodian to mint/burn representations. Hashi's MPC approach distributes custody risk across multiple institutional parties, reducing single points of failure.
              </p>
            </div>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Collateral Management
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#e6edf3' }}>
              Sui's object-centric model makes collateral management efficient. Each position is an object with properties tracked on-chain. The smart contracts enforce collateral ratios, automate liquidations at thresholds, and enable complex multi-asset positioning without central intermediaries.
            </p>
          </section>

          {/* Section 3: Key Features */}
          <section id="key-features" style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#e6edf3',
              }}
            >
              3. Key Features of Hashi
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: '#e6edf3' }}>
              Hashi enables multiple DeFi primitives for Bitcoin holders:
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              BTC Lending & Borrowing
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Deposit BTC to earn yield in stablecoins or other assets. Borrowers can use BTC as collateral to access liquidity without selling. This creates a native Bitcoin credit market on Sui.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              BTC Yield Generation
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Unlike holding BTC on an exchange or wallet, Hashi enables passive yield generation. Supply BTC to lending pools and earn interest from borrowers. Yield rates fluctuate based on demand and risk parameters.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              BTC-Backed Bonds
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Hashi enables the issuance of bonds collateralized by Bitcoin. These provide structured returns for conservative investors wanting exposure to BTC appreciation with fixed income.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Insurance on BTC Collateral
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: '#e6edf3' }}>
              Hashi includes optional insurance protocols protecting against custody failures or smart contract exploits. Users can pay premiums to insure their positions against tail risks.
            </p>

            <div
              style={{
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
              }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#06b6d4', marginBottom: '12px' }}>
                Feature Combination
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#8b949e', margin: 0 }}>
                Power users can combine these features. Example: deposit BTC for yield, use the yield in a liquid staking strategy, borrow against the position, and insure the collateral—all without leaving Sui ecosystem.
              </p>
            </div>
          </section>

          {/* Section 4: Why Sui Blockchain? */}
          <section id="why-sui" style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#e6edf3',
              }}
            >
              4. Why Sui Blockchain?
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: '#e6edf3' }}>
              Hashi was built on Sui for specific technical reasons. Understanding these reveals why Sui excels for complex DeFi protocols.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Object-Centric Model
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Sui treats blockchain data as objects, not accounts. Each user position (collateral, debt, yield) is an object with properties. This design enables fine-grained ownership and efficient parallel processing of independent transactions. Collateral management becomes simpler and more efficient.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Parallel Execution
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Ethereum and Bitcoin process transactions sequentially—each transaction waits for the previous one. Sui processes non-conflicting transactions in parallel. When thousands of users are depositing, borrowing, and withdrawing BTC simultaneously, Sui handles it without bottlenecks or fee spikes.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Sub-Second Finality
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Sui achieves transaction finality in under one second. For time-sensitive DeFi operations (liquidations, settlement), this matters. You don't wait for block confirmations—your transaction is final instantly. This enables responsive risk management.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Move Language & Formal Verification
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: '#e6edf3' }}>
              Sui's Move language (borrowed from Libra/Diem) was designed for formal verification. Before mainnet launch, Hashi's smart contracts underwent formal verification—mathematical proofs that the code behaves as intended. This is stronger than standard audits and critical for custody protocols.
            </p>

            <div
              style={{
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
              }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#06b6d4', marginBottom: '12px' }}>
                Lower Costs
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#8b949e', margin: 0 }}>
                Parallel execution and efficient object model mean Hashi transactions cost fractions of a cent instead of dollars. This enables smaller positions and frequent rebalancing without fee drag.
              </p>
            </div>
          </section>

          {/* Section 5: Institutional Partners */}
          <section id="institutional-partners" style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#e6edf3',
              }}
            >
              5. Institutional Partners Behind Hashi
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: '#e6edf3' }}>
              Hashi isn't built by unknown developers—it's backed by the most reputable names in crypto infrastructure. Here's what each brings:
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              BitGo
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              BitGo is the largest digital asset custodian, managing billions in institutional assets. They provide the MPC infrastructure securing Bitcoin deposits. BitGo's insurance backing adds another layer of security. This is the difference between amateur custody and institutional-grade protection.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Bullish
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Bullish operates institutional-grade exchange infrastructure. Their involvement ensures liquidity, order books, and trading infrastructure for hBTC and other Hashi tokens. They bring market-making expertise and prevent thin liquidity problems.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              FalconX
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              FalconX specializes in algorithmic trading and market microstructure. They ensure pricing is fair, prevent front-running, and provide technical market infrastructure. Their quant expertise helps optimize collateral management.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Ledger
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Ledger secures billions in crypto assets via hardware wallets. Their involvement means Hashi will integrate with Ledger wallets, enabling users to interact with the protocol directly from their hardware-secured accounts. This is significant for institutional users.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: '#e6edf3' }}>
              Cubist
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#e6edf3' }}>
              Cubist conducts cutting-edge DeFi research and protocol design. Their involvement in formal verification and economic modeling ensures Hashi's mechanics are sound. They also advise on security best practices.
            </p>
          </section>

          {/* Section 6: Hashi vs Other BTCFi Solutions */}
          <section id="hashi-vs-others" style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#e6edf3',
              }}
            >
              6. Hashi vs Other BTCFi Solutions
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: '#e6edf3' }}>
              Bitcoin DeFi is exploding, but different protocols take different approaches. Here's how Hashi compares:
            </p>

            <div style={{ overflowX: 'auto', marginBottom: '24px' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                  fontSize: '14px',
                  color: '#e6edf3',
                }}
              >
                <thead>
                  <tr style={{ borderBottom: '2px solid #30363d' }}>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontWeight: '600',
                        color: '#58a6ff',
                      }}
                    >
                      Protocol
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontWeight: '600',
                        color: '#58a6ff',
                      }}
                    >
                      Primary Feature
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontWeight: '600',
                        color: '#58a6ff',
                      }}
                    >
                      Chain
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '12px',
                        fontWeight: '600',
                        color: '#58a6ff',
                      }}
                    >
                      Strengths
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #30363d' }}>
                    <td style={{ padding: '12px', fontWeight: '600' }}>Hashi</td>
                    <td style={{ padding: '12px' }}>Native BTC lending/borrowing</td>
                    <td style={{ padding: '12px' }}>Sui</td>
                    <td style={{ padding: '12px' }}>
                      MPC custody, high throughput, formal verification, institutional backing
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #30363d' }}>
                    <td style={{ padding: '12px', fontWeight: '600' }}>Babylon</td>
                    <td style={{ padding: '12px' }}>Bitcoin staking</td>
                    <td style={{ padding: '12px' }}>Bitcoin</td>
                    <td style={{ padding: '12px' }}>
                      Direct Bitcoin consensus participation, maximalist approach, no wrapping
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #30363d' }}>
                    <td style={{ padding: '12px', fontWeight: '600' }}>Stacks sBTC</td>
                    <td style={{ padding: '12px' }}>Bitcoin L2</td>
                    <td style={{ padding: '12px' }}>Stacks</td>
                    <td style={{ padding: '12px' }}>
                      Bitcoin settlement layer, smart contracts on Bitcoin, decentralized bridge
                    </td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #30363d' }}>
                    <td style={{ padding: '12px', fontWeight: '600' }}>WBTC</td>
                    <td style={{ padding: '12px' }}>Wrapped Bitcoin</td>
                    <td style={{ padding: '12px' }}>Multiple</td>
                    <td style={{ padding: '12px' }}>
                      Wide ecosystem support, mature, simple model, high adoption
                    </td>
                  </tr>
                  <tr>
                    <td style={{ padding: '12px', fontWeight: '600' }}>Lightning Network</td>
                    <td style={{ padding: '12px' }}>Bitcoin payments</td>
                    <td style={{ padding: '12px' }}>Bitcoin</td>
                    <td style={{ padding: '12px' }}>
                      Low-cost payments, instant settlement, native Bitcoin, scalability
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              style={{
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
              }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#06b6d4', marginBottom: '12px' }}>
                Complementary, Not Competitive
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#8b949e', margin: 0 }}>
                These protocols aren't enemies. A Bitcoin holder might stake on Babylon for base layer returns, use sBTC on Stacks for smart contracts, and deploy to Hashi for lending yield. Bitcoin DeFi is large enough for multiple winners.
              </p>
            </div>
          </section>

          {/* Section 7: Risks & Considerations */}
          <section id="risks" style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#e6edf3',
              }}
            >
              7. Risks & Considerations
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: '#e6edf3' }}>
              Hashi is institutional-grade, but it's still early-stage. Be aware of risks:
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              MPC Custody Trust Assumptions
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              MPC distributes custody across multiple parties, but participants are known institutions. You're trusting that BitGo and partners remain solvent, secure, and honest. Regulatory actions against any party could impact custody.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Smart Contract Risk
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Formal verification reduces but doesn't eliminate smart contract risk. Sui blockchain itself could be exploited (unlikely but possible). Always verify audits and formal verification reports before deploying significant capital.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Regulatory Uncertainty
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Regulators are still deciding how to treat Bitcoin custody in DeFi. Hashi's institutional backing helps, but sudden regulatory action could restrict access or force changes. This is tail risk but real tail risk.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Liquidation Risk
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              If you use BTC as collateral to borrow, market downturns trigger liquidations. A 40% BTC crash could liquidate undercollateralized positions. Always maintain safe collateral ratios and understand liquidation mechanisms.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '24px', color: '#e6edf3' }}>
              Liquidity Risk
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#e6edf3' }}>
              During extreme market stress, liquidity can dry up. You might not be able to exit positions quickly at fair prices. This is especially relevant for less-liquid yield strategies.
            </p>

            <div
              style={{
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
              }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#f85149', marginBottom: '12px' }}>
                Core Principle
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#8b949e', margin: 0 }}>
                Never commit more than you can afford to lose. Even institutional protocols can fail. Start small, test on devnet, verify security information independently, and scale gradually.
              </p>
            </div>
          </section>

          {/* Section 8: Timeline & How to Get Involved */}
          <section id="timeline" style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#e6edf3',
              }}
            >
              8. Timeline & How to Get Involved
            </h2>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: '#e6edf3' }}>
              Hashi is live on Sui devnet and preparing for mainnet. Here's what to expect and how to prepare:
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Current Status: Devnet (March 19, 2026)
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Hashi launched on Sui devnet, enabling developers and early users to test the protocol. Devnet uses testnet assets (no real money). This is your chance to understand the interface without risk.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Security Phase: Audits & Formal Verification
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '16px', color: '#e6edf3' }}>
              Before mainnet, Hashi underwent third-party audits and formal verification to ensure smart contract correctness. Look for published audit reports and verification certificates on the official website.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              Expected: Mainnet Later in 2026
            </h3>

            <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '24px', color: '#e6edf3' }}>
              Mainnet launch will enable real Bitcoin deposits and yields. Monitor official announcements for exact timing. Mainnet will likely start with limited capacity (cap on total BTC accepted) and gradually scale.
            </p>

            <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '12px', color: '#e6edf3' }}>
              How to Prepare Now
            </h3>

            <ol style={{ fontSize: '16px', lineHeight: '1.8', marginBottom: '24px', color: '#e6edf3', paddingLeft: '20px' }}>
              <li>
                <strong>Set up Sui wallet:</strong> Get a Sui wallet (Sui Wallet browser extension or Ledger). Familiarize yourself with managing assets on Sui.
              </li>
              <li>
                <strong>Understand the mechanics:</strong> Read this guide multiple times. Follow the links to understand BTCFi trends and Sui blockchain architecture.
              </li>
              <li>
                <strong>Test on devnet:</strong> Once available, grab devnet assets and practice depositing, borrowing, and yielding. Mistakes on devnet are free.
              </li>
              <li>
                <strong>Monitor announcements:</strong> Follow official Hashi channels for security audit releases, formal verification reports, and mainnet timeline updates.
              </li>
              <li>
                <strong>Start small on mainnet:</strong> When mainnet launches, begin with small BTC amounts. Gradually increase as you gain confidence and verify security reports.
              </li>
              <li>
                <strong>Participate in governance:</strong> Hashi will likely have governance tokens. Understand voting mechanisms and participate in protocol decisions.
              </li>
            </ol>

            <div
              style={{
                background: '#161b22',
                border: '1px solid #30363d',
                borderRadius: '12px',
                padding: '20px',
                marginBottom: '24px',
              }}
            >
              <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#06b6d4', marginBottom: '12px' }}>
                Risk Escalation Principle
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#8b949e', margin: 0 }}>
                Start on devnet (free). Move to mainnet testnet (if available). Then mainnet with minimal capital. Only scale to larger amounts after multiple transactions succeed and you've verified all security information independently.
              </p>
            </div>
          </section>

          {/* Section 9: FAQ */}
          <section id="faq" style={{ marginBottom: '48px' }}>
            <h2
              style={{
                fontSize: '32px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#e6edf3',
              }}
            >
              9. Frequently Asked Questions
            </h2>

            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#e6edf3',
                }}
              >
                What is Hashi and how does it differ from wrapped Bitcoin solutions?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#8b949e' }}>
                Hashi is a native Bitcoin DeFi protocol on Sui that uses multi-party computation (MPC) custody and smart contracts to enable lending, borrowing, and yield without wrapping BTC. Unlike wrapped solutions that create synthetic derivatives, Hashi uses actual Bitcoin locked in institutional-grade custody through BitGo, providing direct exposure to BTC in DeFi.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#e6edf3',
                }}
              >
                Why was Sui blockchain chosen for Hashi instead of Ethereum or Bitcoin L2s?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#8b949e' }}>
                Sui was chosen for its object-centric model, parallel execution capabilities, and sub-second finality. These features enable efficient collateral management, fast settlement, and lower costs. Sui's Move language also provides better formal verification capabilities for smart contract security.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#e6edf3',
                }}
              >
                What are the main risks of using Hashi protocol?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#8b949e' }}>
                Key risks include MPC custody trust assumptions (though distributed across multiple institutions), smart contract risk (audits and formal verification planned), regulatory uncertainty around Bitcoin custody in DeFi, and early-stage protocol risk. Users should verify security audits before mainnet launch and never commit more than they can afford to lose.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#e6edf3',
                }}
              >
                When will Hashi launch on mainnet and how can I prepare now?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#8b949e' }}>
                Hashi launched on Sui devnet around March 19, 2026, with mainnet planned for later in 2026. You can prepare by understanding the protocol fundamentals, monitoring official announcements, testing on devnet when available, and ensuring familiarity with Sui wallet management and DeFi interactions.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#e6edf3',
                }}
              >
                How much Bitcoin is currently in DeFi and what opportunity does Hashi address?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#8b949e' }}>
                Less than 0.5% of Bitcoin's $1T+ market cap is currently deployed in DeFi. Hashi targets this massive gap by enabling native, institutional-grade Bitcoin lending and borrowing without the friction of wrapping or bridging. This unlocks yield generation on idle Bitcoin holdings.
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '12px',
                  color: '#e6edf3',
                }}
              >
                How does Hashi compare to other BTCFi solutions like Babylon and Stacks?
              </h3>
              <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#8b949e' }}>
                Babylon focuses on Bitcoin staking without wrapping. Stacks offers sBTC as a Bitcoin L2. Hashi complements these by enabling direct BTC lending/borrowing on Sui. Each addresses different aspects of Bitcoin DeFi: Babylon targets yield staking, Stacks enables smart contracts on Bitcoin, Hashi enables diverse DeFi primitives with MPC custody.
              </p>
            </div>
          </section>

          {/* Disclaimer */}
          <section style={{ marginBottom: '40px' }}>
            <div
              style={{
                background: '#161b22',
                border: '1px solid #f85149',
                borderRadius: '12px',
                padding: '20px',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#f85149' }}>
                Disclaimer
              </h3>
              <p style={{ fontSize: '14px', lineHeight: '1.6', color: '#8b949e', margin: 0 }}>
                This guide is educational only and not financial advice. Bitcoin DeFi involves substantial risk including custody risk, smart contract risk, liquidation risk, and regulatory risk. Do your own research, verify security information independently, and never invest more than you can afford to lose. Always test on devnet before mainnet deployment. Past performance of similar protocols does not guarantee future results. Consult a financial advisor before making investment decisions.
              </p>
            </div>
          </section>

          {/* Related Resources */}
          <section style={{ marginBottom: '40px' }}>
            <h2
              style={{
                fontSize: '24px',
                fontWeight: '700',
                marginBottom: '20px',
                color: '#e6edf3',
              }}
            >
              Continue Learning
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {[
                {
                  href: '/learn/btcfi-bitcoin-defi-guide-2026',
                  title: 'BTCFi Guide 2026',
                  description: 'Comprehensive overview of Bitcoin DeFi ecosystem',
                },
                {
                  href: '/learn/sui-blockchain-guide-2026',
                  title: 'Sui Blockchain Guide',
                  description: 'Deep dive into Sui blockchain architecture and advantages',
                },
                {
                  href: '/learn/babylon-protocol-bitcoin-staking',
                  title: 'Babylon Protocol Guide',
                  description: 'Bitcoin staking without wrapping or custodians',
                },
                {
                  href: '/learn/bitcoin-liquid-staking-tokens-guide-2026',
                  title: 'Bitcoin Liquid Staking',
                  description: 'Stake Bitcoin and maintain liquidity simultaneously',
                },
                {
                  href: '/learn/stablecoin-yield-strategies-2026',
                  title: 'Stablecoin Yield Strategies',
                  description: 'Generate yield on stablecoins safely',
                },
                {
                  href: '/tools/defi-yields',
                  title: 'DeFi Yields Tool',
                  description: 'Compare yields across protocols and strategies',
                },
              ].map((resource) => (
                <Link
                  key={resource.href}
                  href={resource.href}
                  style={{
                    background: '#161b22',
                    border: '1px solid #30363d',
                    borderRadius: '12px',
                    padding: '20px',
                    textDecoration: 'none',
                    color: '#e6edf3',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#58a6ff';
                    e.currentTarget.style.background = '#0d1117';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#30363d';
                    e.currentTarget.style.background = '#161b22';
                  }}
                >
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      marginBottom: '8px',
                      color: '#58a6ff',
                    }}
                  >
                    {resource.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: '#8b949e', margin: 0 }}>
                    {resource.description}
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* Back to Top */}
          <BackToTop />
        </div>
      </div>
    </>
  );
}

export { metadata };
