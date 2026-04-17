import { Metadata } from 'next';
import Link from "next/link";
import { SITE_URL } from '@/lib/constants';
import Breadcrumb from '@/components/Breadcrumb';
import BackToTop from '@/components/BackToTop';
import StructuredData from '@/components/StructuredData';
import { generateArticleSchema, generateFAQSchema, generateHowToSchema, combineSchemas } from '@/lib/structured-data';
import { ReactNode } from 'react';
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';
import AutoTOC from '@/components/AutoTOC';
import ReadingTime from '@/components/ReadingTime';


export const metadata: Metadata = {
  title: "Scroll zkEVM Guide 2026: Ethereum's Native ZK Layer 2 | degen0x",
  description: "Complete guide to Scroll, the native zkEVM Layer 2 for Ethereum. Learn how it works, ecosystem DeFi protocols, SCR token, risks, and how to bridge & trade.",
  keywords: [
    'Scroll guide',
    'Scroll zkEVM',
    'Scroll Layer 2',
    'Scroll Ethereum scaling',
    'Scroll network guide 2026',
    'zk rollup guide',
    'zkEVM layer 2',
    'Scroll DeFi',
    'zero-knowledge proof',
    'Ethereum scaling'
  ],
  authors: [{ name: 'degen0x' }],
  openGraph: {
    title: "Scroll zkEVM Guide 2026: Ethereum's Native ZK Layer 2",
    description: 'Complete guide to Scroll zkEVM Layer 2, ecosystem, token, risks, and how to use it.',
    url: `${SITE_URL}/learn/scroll-zkevm-guide-2026`,
    type: 'article',
    publishedTime: '2026-03-24T00:00:00Z',
  },

  alternates: { canonical: "/learn/scroll-zkevm-guide-2026" },
  twitter: { card: "summary_large_image" }};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Scroll zkEVM Guide 2026: Ethereum's Native ZK Layer 2",
  description: "Complete guide to Scroll, the native zkEVM Layer 2 for Ethereum.",
  author: {
    '@type': 'Organization',
    name: 'degen0x',
    url: SITE_URL,
  },
  datePublished: '2026-03-24',
  dateModified: '2026-03-24',
  image: `${SITE_URL}/og-scroll-zkevm-guide-2026.svg`,
  url: `${SITE_URL}/learn/scroll-zkevm-guide-2026`,
  publisher: {
    '@type': 'Organization',
    name: 'degen0x',
    url: SITE_URL,
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Scroll and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scroll is a native zkEVM Layer 2 for Ethereum that uses zero-knowledge proofs for scaling. It matters because it offers EVM-compatible scaling with cryptographic security, enabling high-throughput transactions while maintaining Ethereum security.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Scroll different from Optimistic rollups like Arbitrum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scroll uses zero-knowledge proofs (zkEVM) while Arbitrum uses optimistic rollups. ZK proofs provide instant finality without dispute periods, while optimistic rollups have 7-day challenge windows. Scroll is EVM-compatible but requires more complex proving infrastructure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Scroll safe to use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scroll has undergone multiple security audits by OpenZeppelin, Zellic, and Trail of Bits. However, as a Layer 2 using zero-knowledge proofs, it carries risks including ZK prover vulnerabilities, bridge risks, and smart contract risks. Always start with small amounts.',
      },
    },
    {
      '@type': 'Question',
      name: 'What can I do on Scroll?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scroll supports DeFi protocols like Aave, SyncSwap, and Ambient Finance. You can trade tokens, farm liquidity, lend/borrow, and swap assets at low gas costs (~$0.01-0.05 per transaction).',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Scroll have a token?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, SCR token launched in October 2024 for governance. Holders can vote on protocol upgrades and parameters. The token is tradeable on major exchanges.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I bridge assets to Scroll?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use the official Scroll Bridge (scroll.io/bridge) or third-party aggregators. Send ETH or ERC-20 tokens from Ethereum. The bridge is audited and typically takes 12-24 hours for proof generation, though some services offer faster bridging.',
      },
    },
  ],
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Use Scroll Layer 2',
  step: [
    {
      '@type': 'HowToStep',
      position: '1',
      name: 'Set up MetaMask or compatible wallet',
      text: 'Install MetaMask extension or compatible wallet (Coinbase Wallet, WalletConnect, etc.) and fund with Ethereum on mainnet.',
    },
    {
      '@type': 'HowToStep',
      position: '2',
      name: 'Bridge ETH to Scroll',
      text: 'Visit scroll.io/bridge and follow instructions to bridge ETH from Ethereum to Scroll network.',
    },
    {
      '@type': 'HowToStep',
      position: '3',
      name: 'Add Scroll RPC to wallet',
      text: 'Add Scroll network to MetaMask: RPC https://rpc.scroll.io, Chain ID 534352, Symbol ETH.',
    },
    {
      '@type': 'HowToStep',
      position: '4',
      name: 'Explore DeFi protocols',
      text: 'Visit Ambient Finance, SyncSwap, or Aave to trade, farm liquidity, and interact with DeFi.',
    },
    {
      '@type': 'HowToStep',
      position: '5',
      name: 'Monitor costs and confirmations',
      text: 'Observe gas costs (typically $0.01-0.05) and transaction times. Scroll has ~12-second block time.',
    },
  ],
};

interface StatBoxProps {
  label: string;
  value: string;
}

const StatBox: React.FC<StatBoxProps> = ({ label, value }) => (
  <div className="p-4 rounded-lg border border-[#30363d] bg-[#161b22] hover:border-[#fbbf24]/50 transition-colors">
    <div className="text-sm text-[#8b949e] mb-2">{label}</div>
    <div className="text-xl font-bold text-[#fbbf24]">{value}</div>
  </div>
);

interface SectionProps {
  number: number;
  title: string;
  children: ReactNode;
}

const Section: React.FC<SectionProps> = ({ number, title, children }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold text-[#e6edf3] mb-6 flex items-center gap-3">
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#161b22] border border-[#fbbf24] text-[#fbbf24] font-bold text-lg">
        {number}
      </span>
      {title}
    </h2>
    <div className="text-[#8b949e] leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

interface InfoBoxProps {
  type: 'info' | 'warning' | 'success';
  title: string;
  children: ReactNode;
}

const InfoBox: React.FC<InfoBoxProps> = ({ type, title, children }) => {
  const bgColor = {
    info: 'bg-blue-950/30 border-blue-700/50',
    warning: 'bg-amber-950/30 border-amber-700/50',
    success: 'bg-green-950/30 border-green-700/50',
  }[type];

  const textColor = {
    info: 'text-blue-300',
    warning: 'text-amber-300',
    success: 'text-green-300',
  }[type];

  return (
    <div className={`p-4 rounded-lg border ${bgColor} my-6`}>
      <h4 className={`font-bold ${textColor} mb-2`}>{title}</h4>
      <div className="text-[#e6edf3] text-sm">{children}</div>
    </div>
  );
};

interface RiskCardProps {
  icon: string;
  title: string;
  description: string;
}

const RiskCard: React.FC<RiskCardProps> = ({ icon, title, description }) => (
  <div className="p-4 rounded-lg bg-[#161b22] border border-red-700/30 hover:border-red-700/60 transition-colors">
    <div className="text-2xl mb-2">{icon}</div>
    <h4 className="font-bold text-[#e6edf3] mb-2">{title}</h4>
    <p className="text-sm text-[#8b949e]">{description}</p>
  </div>
);

interface FAQItemProps {
  question: string;
  answer: ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => (
  <details className="group p-4 rounded-lg bg-[#161b22] border border-[#30363d] hover:border-[#fbbf24]/50 transition-colors cursor-pointer">
    <summary className="font-bold text-[#e6edf3] flex items-center justify-between">
      {question}
      <span className="transition-transform group-open:rotate-180">▼</span>
    </summary>
    <div className="mt-4 text-[#8b949e] text-sm leading-relaxed">{answer}</div>
  </details>
);

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Scroll Zkevm Guide 2026', },
  ],
};

export default function ScrollGuide() {
  const structuredData = [articleSchema, faqSchema, howToSchema];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <StructuredData data={structuredData} />
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Learn', href: '/learn' },
          { label: 'Scroll zkEVM Guide 2026', href: '/learn/scroll-zkevm-guide-2026' },
        ]}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/50 text-cyan-300 border border-cyan-700/30">
              Layer 2
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/50 text-blue-300 border border-blue-700/30">
              Intermediate
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight" style={{
            backgroundImage: 'linear-gradient(135deg, #fbbf24, #f97316)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Scroll zkEVM Guide 2026
          </h1>

          <ReadingTime />
          <AutoTOC />
          <p className="text-xl text-[#8b949e] mb-2">
            Ethereum's Native Zero-Knowledge Layer 2: Complete Technical & Investment Guide
          </p>
          <p className="text-sm text-[#8b949e]">
            Published: March 24, 2026 | Category: Layer 2 Scaling | Reading time: ~12 minutes
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 p-6 rounded-xl bg-[#161b22] border border-[#30363d]">
          <StatBox label="Network TVL" value="$500M+" />
          <StatBox label="TPS Capacity" value="50-100" />
          <StatBox label="Avg Tx Cost" value="$0.01-0.05" />
          <StatBox label="Funding Raised" value="$80M+" />
        </div>

        {/* Table of Contents */}
        <div className="p-6 rounded-xl bg-[#161b22] border border-[#30363d] mb-12">
          <h2 className="text-xl font-bold text-[#e6edf3] mb-4">Table of Contents</h2>
          <nav className="space-y-2">
            <a href="#section-1" className="block text-[#58a6ff] hover:text-[#fbbf24] transition-colors">1. What Is Scroll?</a>
            <a href="#section-2" className="block text-[#58a6ff] hover:text-[#fbbf24] transition-colors">2. How Scroll's zkEVM Works</a>
            <a href="#section-3" className="block text-[#58a6ff] hover:text-[#fbbf24] transition-colors">3. Scroll vs. Other ZK Layer 2s</a>
            <a href="#section-4" className="block text-[#58a6ff] hover:text-[#fbbf24] transition-colors">4. The Scroll Ecosystem</a>
            <a href="#section-5" className="block text-[#58a6ff] hover:text-[#fbbf24] transition-colors">5. SCR Token & Governance</a>
            <a href="#section-6" className="block text-[#58a6ff] hover:text-[#fbbf24] transition-colors">6. How to Bridge & Use Scroll</a>
            <a href="#section-7" className="block text-[#58a6ff] hover:text-[#fbbf24] transition-colors">7. Risks and Considerations</a>
            <a href="#section-8" className="block text-[#58a6ff] hover:text-[#fbbf24] transition-colors">8. Frequently Asked Questions</a>
          </nav>
        </div>

        {/* Section 1: What Is Scroll? */}
        <Section number={1} title="What Is Scroll?">
          <p>
            Scroll is a <strong>native zkEVM (zero-knowledge Ethereum Virtual Machine) Layer 2</strong> that scales Ethereum using zero-knowledge proofs. Launched on mainnet in October 2023 after 15 months of rigorous testing on testnet, Scroll represents a fundamental shift in how blockchains achieve scalability without sacrificing security or decentralization.
          </p>

          <p>
            Unlike optimistic rollups (Arbitrum, Optimism) that assume transactions are valid and allow 7-day challenges, Scroll uses zero-knowledge proofs to <strong>cryptographically prove</strong> that transactions are valid. This means finality is achieved in minutes rather than days, and there's no period where funds are vulnerable to withdrawal challenges.
          </p>

          <InfoBox type="info" title="Key Innovation">
            Scroll achieves <strong>bytecode-level EVM compatibility</strong>, meaning existing Ethereum smart contracts can deploy directly without modification. This is technically harder than opcode-level compatibility but vastly improves the developer experience.
          </InfoBox>

          <p>
            The founding team, led by Ye Zhang and Haichuan Liu, raised <strong>$80M+</strong> from top-tier crypto investors including Polychain Capital, Bain Capital Crypto, and Sequoia China. The protocol has undergone security audits by <strong>OpenZeppelin, Zellic, and Trail of Bits</strong>—some of the most respected security firms in crypto.
          </p>

          <p>
            As of March 2026, Scroll processes tens of thousands of transactions daily with a <strong>TVL of $500M+</strong> across DeFi protocols. The network demonstrated its maturity with an <strong>emergency upgrade in February 2026</strong>, showing the team's commitment to active maintenance and security.
          </p>
        </Section>

        {/* Section 2: How Scroll's zkEVM Works */}
        <Section number={2} title="How Scroll's zkEVM Works">
          <p>
            Understanding Scroll requires understanding zero-knowledge proofs (ZKPs) and rollups. Here's the technical breakdown:
          </p>

          <div className="space-y-4 my-6">
            <div>
              <h4 className="font-bold text-[#e6edf3] mb-2">What is a zkRollup?</h4>
              <p>
                A zkRollup batches transactions off-chain, compresses them, and generates a zero-knowledge proof that proves <strong>all transactions in the batch are valid</strong> without revealing transaction details. This proof is posted to Ethereum mainnet, and the protocol's security comes from Ethereum itself—not from alternative consensus mechanisms.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#e6edf3] mb-2">Why zkEVM is Hard</h4>
              <p>
                Creating a ZK-proof for an entire EVM is computationally complex. Scroll solved this through:
              </p>
              <ul className="list-disc list-inside text-[#8b949e] ml-4 mt-2">
                <li><strong>Bytecode-level compatibility:</strong> Provers verify actual EVM bytecode, ensuring 1:1 compatibility</li>
                <li><strong>Distributed proving:</strong> Network of provers generates proofs, reducing latency and centralization risk</li>
                <li><strong>Optimized arithmetic:</strong> Custom circuit designs minimize proof generation time</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#e6edf3] mb-2">Transaction Flow</h4>
              <p>
                <strong>1. User submits tx:</strong> You submit a transaction to Scroll sequencers<br/>
                <strong>2. Sequencing:</strong> Sequencers order transactions and execute them<br/>
                <strong>3. Batching:</strong> Multiple transactions are bundled into a batch<br/>
                <strong>4. Proof generation:</strong> Provers generate ZK proof that all txs are valid<br/>
                <strong>5. Settlement:</strong> Proof + compressed data posted to Ethereum, finality achieved<br/>
                <strong>Typical timeline:</strong> 12-24 hours from submission to finality (proof generation is the bottleneck)
              </p>
            </div>
          </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-24"
          updatedDate="2026-04-12"
          readingTime={8}
          section="learn"
        />


          <InfoBox type="success" title="Why This Matters">
            Scroll offers <strong>cryptographic finality</strong>. There's no 7-day dispute period like Arbitrum. Once the ZK proof is verified on Ethereum, the transaction is final. This reduces bridge risk and MEV attack vectors.
          </InfoBox>

          <p>
            Scroll achieves approximately <strong>50-100 transactions per second (TPS)</strong> depending on batch size, with typical transaction costs of <strong>$0.01-0.05 per transaction</strong>. Compare this to Ethereum mainnet ($5-50+ during congestion) and you see the scaling advantage.
          </p>
        </Section>

        {/* Section 3: Scroll vs. Other ZK Layer 2s */}
        <Section number={3} title="Scroll vs. Other ZK Layer 2s">
          <p>
            Several ZK Layer 2s exist. How does Scroll compare? Here's the landscape as of Q1 2026:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left p-3 text-[#58a6ff] font-bold">Feature</th>
                  <th className="text-left p-3 text-[#58a6ff] font-bold">Scroll</th>
                  <th className="text-left p-3 text-[#58a6ff] font-bold">zkSync Era</th>
                  <th className="text-left p-3 text-[#58a6ff] font-bold">Polygon zkEVM</th>
                  <th className="text-left p-3 text-[#58a6ff] font-bold">Linea</th>
                  <th className="text-left p-3 text-[#58a6ff] font-bold">Taiko</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#30363d] hover:bg-[#161b22]">
                  <td className="p-3 text-[#e6edf3]"><strong>EVM Compatibility</strong></td>
                  <td className="p-3 text-green-400">Bytecode-level</td>
                  <td className="p-3 text-yellow-400">Custom (ZK-safe)</td>
                  <td className="p-3 text-green-400">Full EVM</td>
                  <td className="p-3 text-green-400">Full EVM</td>
                  <td className="p-3 text-green-400">Full EVM</td>
                </tr>
                <tr className="border-b border-[#30363d] hover:bg-[#161b22]">
                  <td className="p-3 text-[#e6edf3]"><strong>Prover Type</strong></td>
                  <td className="p-3">Distributed</td>
                  <td className="p-3">Centralized (Matterlabs)</td>
                  <td className="p-3">Centralized (Polygon)</td>
                  <td className="p-3">Centralized (ConsenSys)</td>
                  <td className="p-3">Decentralized</td>
                </tr>
                <tr className="border-b border-[#30363d] hover:bg-[#161b22]">
                  <td className="p-3 text-[#e6edf3]"><strong>TPS</strong></td>
                  <td className="p-3">50-100</td>
                  <td className="p-3">200-300</td>
                  <td className="p-3">100-200</td>
                  <td className="p-3">100-150</td>
                  <td className="p-3">150-250</td>
                </tr>
                <tr className="border-b border-[#30363d] hover:bg-[#161b22]">
                  <td className="p-3 text-[#e6edf3]"><strong>Avg Tx Cost</strong></td>
                  <td className="p-3">$0.01-0.05</td>
                  <td className="p-3">$0.05-0.15</td>
                  <td className="p-3">$0.02-0.08</td>
                  <td className="p-3">$0.01-0.04</td>
                  <td className="p-3">$0.01-0.03</td>
                </tr>
                <tr className="border-b border-[#30363d] hover:bg-[#161b22]">
                  <td className="p-3 text-[#e6edf3]"><strong>Governance Token</strong></td>
                  <td className="p-3">SCR (Oct 2024)</td>
                  <td className="p-3">ZK (governance)</td>
                  <td className="p-3">None</td>
                  <td className="p-3">None</td>
                  <td className="p-3">TAIKO (planned)</td>
                </tr>
                <tr className="border-b border-[#30363d] hover:bg-[#161b22]">
                  <td className="p-3 text-[#e6edf3]"><strong>TVL (est.)</strong></td>
                  <td className="p-3">$500M+</td>
                  <td className="p-3">$700M+</td>
                  <td className="p-3">$300M+</td>
                  <td className="p-3">$200M+</td>
                  <td className="p-3">$100M+</td>
                </tr>
                <tr className="hover:bg-[#161b22]">
                  <td className="p-3 text-[#e6edf3]"><strong>Mainnet Launch</strong></td>
                  <td className="p-3">Oct 2023</td>
                  <td className="p-3">Mar 2023</td>
                  <td className="p-3">Mar 2023</td>
                  <td className="p-3">Sep 2024</td>
                  <td className="p-3">May 2024 (testnet)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            <strong>Scroll's unique position:</strong> It offers the best developer experience (bytecode-level compatibility) with lower transaction costs than most competitors. However, it has lower TPS than zkSync Era and Taiko. The distributed proving model is more decentralized than zkSync or Polygon but less battle-tested than Arbitrum's fraud proofs.
          </p>
        </Section>

        {/* Section 4: The Scroll Ecosystem */}
        <Section number={4} title="The Scroll Ecosystem">
          <p>
            Scroll's DeFi ecosystem is growing rapidly. Here are key protocols you should know about:
          </p>

          <div className="space-y-4 my-6">
            <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
              <h4 className="font-bold text-[#fbbf24] mb-2">Ambient Finance</h4>
              <p className="text-sm text-[#8b949e]">
                Concentrated liquidity DEX with zero-fee single-sided liquidity provision. Allows traders to swap with minimal slippage and liquidity providers to earn swaps fees with concentrated capital.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
              <h4 className="font-bold text-[#fbbf24] mb-2">SyncSwap</h4>
              <p className="text-sm text-[#8b949e]">
                Classic AMM + concentrated liquidity DEX. Features farming incentives, governance token (SYNC), and multiple pool types. One of Scroll's most active DeFi protocols.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
              <h4 className="font-bold text-[#fbbf24] mb-2">Aave</h4>
              <p className="text-sm text-[#8b949e]">
                Leading lending protocol deployed on Scroll. Supply assets to earn interest, borrow against collateral. Same interface and risks as Ethereum Aave, but on Scroll it's cheaper.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-[#161b22] border border-[#30363d]">
              <h4 className="font-bold text-[#fbbf24] mb-2">Zebra (zkLink)</h4>
              <p className="text-sm text-[#8b949e]">
                Perpetual futures DEX with leverage trading up to 50x. Aggregates liquidity across multiple chains including Scroll. High-risk trading instrument.
              </p>
            </div>
          </div>

          <InfoBox type="warning" title="Ecosystem Maturity">
            While Scroll's ecosystem is growing, it's still smaller than Arbitrum's. This means fewer liquidity pools, wider spreads, and more slippage on large trades. Start with established protocols (Aave, SyncSwap) and test with small amounts first.
          </InfoBox>

          <p>
            Other projects building on Scroll include Uniswap (coming), Curve, Yearn Finance, and various niche protocols. Check <strong>scroll.io/ecosystem</strong> for the latest deployments and <strong>L2BEAT.com</strong> for risk scoring.
          </p>
        </Section>

        {/* Section 5: SCR Token & Governance */}
        <Section number={5} title="SCR Token & Governance">
          <p>
            Scroll launched its <strong>SCR governance token</strong> in <strong>October 2024</strong>, approximately one year after mainnet launch. This was strategic timing—waiting for the ecosystem to mature before introducing the token.
          </p>

          <div className="space-y-4 my-6">
            <div>
              <h4 className="font-bold text-[#e6edf3] mb-2">SCR Token Economics</h4>
              <ul className="list-disc list-inside text-[#8b949e] space-y-2">
                <li><strong>Total supply:</strong> 1 billion SCR (standard in crypto governance tokens)</li>
                <li><strong>Distribution:</strong> Community, team, investors, foundation (typical multi-year vesting)</li>
                <li><strong>Use case:</strong> Governance voting on protocol upgrades, parameter changes, treasury allocation</li>
                <li><strong>Trading:</strong> Available on major DEXs (Uniswap, Binance, Coinbase, Kraken) as of Q1 2026</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#e6edf3] mb-2">Governance Structure</h4>
              <p>
                SCR holders vote on:
              </p>
              <ul className="list-disc list-inside text-[#8b949e] ml-4">
                <li>Sequencer rewards and commission rates</li>
                <li>Fee structures (proof costs, gas pricing)</li>
                <li>Protocol upgrades and new features</li>
                <li>Treasury allocation</li>
                <li>Emergency security measures</li>
              </ul>
            </div>
          </div>

          <InfoBox type="info" title="Token Holder Value">
            Unlike many L2 tokens, SCR actually creates governance value. You can vote on protocol decisions. However, there's currently no fee-sharing mechanism or staking rewards, so token value depends on governance utility and adoption.
          </InfoBox>

          <p>
            <strong>Investment perspective:</strong> SCR is a governance token, not a revenue-generating asset like some stocks. Its price is driven by (1) L2 adoption, (2) market sentiment on zero-knowledge proofs, and (3) supply/demand dynamics. Like all crypto governance tokens, it's volatile and speculative.
          </p>
        </Section>

        {/* Section 6: How to Bridge & Use Scroll */}
        <Section number={6} title="How to Bridge & Use Scroll">
          <p>
            Ready to start using Scroll? Here's a step-by-step guide to getting tokens onto Scroll and interacting with DeFi.
          </p>

          <div className="space-y-4 my-6">
            <div>
              <h4 className="font-bold text-[#e6edf3] mb-2">Step 1: Set Up Your Wallet</h4>
              <p className="text-[#8b949e]">
                You'll need MetaMask or another EVM-compatible wallet. Download MetaMask, set up an account, and store your seed phrase securely. Fund it with ETH on Ethereum mainnet first.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#e6edf3] mb-2">Step 2: Add Scroll Network to MetaMask</h4>
              <p className="text-[#8b949e]">
                In MetaMask, add a custom RPC with these details:
              </p>
              <div className="bg-[#0d1117] border border-[#30363d] rounded p-3 my-2 font-mono text-xs text-[#58a6ff]">
                Network: Scroll Main<br/>
                RPC URL: https://rpc.scroll.io<br/>
                Chain ID: 534352<br/>
                Symbol: ETH<br/>
                Explorer: https://scrollscan.com
              </div>
            </div>

            <div>
              <h4 className="font-bold text-[#e6edf3] mb-2">Step 3: Bridge ETH to Scroll</h4>
              <p className="text-[#8b949e]">
                Visit <strong>scroll.io/bridge</strong> (official bridge). Select "Ethereum to Scroll", connect your wallet, and choose how much ETH to bridge. The process typically takes:
              </p>
              <ul className="list-disc list-inside text-[#8b949e] ml-4">
                <li><strong>Deposit:</strong> ~1-5 minutes (Ethereum confirmation)</li>
                <li><strong>Proof generation:</strong> 12-24 hours</li>
                <li><strong>Total finality:</strong> 12-24 hours</li>
              </ul>
              <p className="text-[#8b949e] mt-2">
                <em>Note: Some third-party services (e.g., Across, Across Protocol) offer faster bridging via liquidity pools, but charge higher fees.</em>
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#e6edf3] mb-2">Step 4: Start Trading</h4>
              <p className="text-[#8b949e]">
                Once you have ETH on Scroll, you can:
              </p>
              <ul className="list-disc list-inside text-[#8b949e] ml-4">
                <li>Swap tokens on SyncSwap or Ambient Finance</li>
                <li>Supply/borrow on Aave</li>
                <li>Provide liquidity and farm yield</li>
                <li>Trade perpetuals on Zebra</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-[#e6edf3] mb-2">Step 5: Bridge Back to Ethereum</h4>
              <p className="text-[#8b949e]">
                To withdraw, use the Scroll Bridge in reverse (Scroll to Ethereum). Again, plan for 12-24 hours for finality. Always test with small amounts first.
              </p>
            </div>
          </div>

          <InfoBox type="success" title="Gas Cost Comparison">
            On Scroll: Swap costs ~$0.02, Aave deposit ~$0.03. On Ethereum mainnet during normal congestion: ~$5-20 per transaction. You see the advantage immediately.
          </InfoBox>
        </Section>

        {/* Section 7: Risks and Considerations */}
        <Section number={7} title="Risks and Considerations">
          <p>
            Scroll is a legitimate Layer 2, but it's not risk-free. Here are the major risks you should understand:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <RiskCard
              icon="⚙️"
              title="ZK Prover Centralization"
              description="Currently, Scroll's prover network is semi-centralized. If the prover(s) go offline or are malicious, the chain can't produce proofs. Scroll is working toward full decentralization via open-source provers."
            />

            <RiskCard
              icon="🔐"
              title="Smart Contract Risk"
              description="DeFi protocols on Scroll (Aave, SyncSwap) carry smart contract risk. Audits reduce but don't eliminate this risk. Exploits could result in loss of funds."
            />

            <RiskCard
              icon="🌉"
              title="Bridge Risk"
              description="The Scroll Bridge has been audited but is still code. A critical bug could lock funds or prevent withdrawals. Start with small amounts to test."
            />

            <RiskCard
              icon="📊"
              title="SCR Token Inflation"
              description="Like all governance tokens, SCR could face sell pressure from token unlocks, vesting schedules, and emissions. Check the token's vesting timeline before investing."
            />

            <RiskCard
              icon="🔗"
              title="Competition Risk"
              description="Multiple ZK Layer 2s exist (zkSync, Linea, Taiko). Scroll could lose market share if competitors offer better UX, higher TPS, or stronger ecosystems."
            />

            <RiskCard
              icon="⚖️"
              title="Regulatory Uncertainty"
              description="Layer 2s are still a gray area for regulators. New regulations could impact Scroll's operations, sequencer rewards, or token trading. Monitor regulatory developments."
            />
          </div>

          <InfoBox type="warning" title="Key Risk Mitigation">
            Start small (test with $100-500). Use established protocols only. Never bridge your entire portfolio at once. Monitor Scroll's Twitter and Discord for security updates.
          </InfoBox>

          <p>
            None of these risks make Scroll unusable—they make it important to approach with caution and due diligence. Billions are currently in Layer 2s, so Scroll's basic security is battle-tested.
          </p>
        </Section>

        {/* Section 8: FAQs */}
        <Section number={8} title="Frequently Asked Questions">
          <div className="space-y-4">
            <FAQItem
              question="What is Scroll and why does it matter?"
              answer={
                <>
                  Scroll is a zkEVM Layer 2 that uses zero-knowledge proofs to scale Ethereum. It matters because:
                  <ul className="list-disc list-inside ml-4 mt-2 text-[#e6edf3]">
                    <li>Reduces transaction costs by 100x (mainnet $5-20 vs Scroll $0.01-0.05)</li>
                    <li>Provides EVM compatibility so existing smart contracts work without modification</li>
                    <li>Offers cryptographic finality (instant vs 7-day challenges on optimistic rollups)</li>
                    <li>Maintains Ethereum-level security through mainnet proof verification</li>
                  </ul>
                </>
              }
            />

            <FAQItem
              question="How is Scroll different from Optimistic rollups like Arbitrum?"
              answer={
                <>
                  <strong>Scroll (zkEVM):</strong> Uses zero-knowledge proofs. Transactions are cryptographically proven valid. Finality in ~24 hours. More complex infrastructure.
                  <br/><br/>
                  <strong>Arbitrum (Optimistic):</strong> Assumes transactions are valid. Allows 7-day challenge period if someone thinks a transaction is invalid. Finality after 7 days. Simpler infrastructure.
                  <br/><br/>
                  In practice: Scroll has faster finality and stronger security guarantees. Arbitrum is mature with larger ecosystem. Both are safe.
                </>
              }
            />

            <FAQItem
              question="Is Scroll safe to use?"
              answer={
                <>
                  Scroll has been audited by top firms (OpenZeppelin, Zellic, Trail of Bits) and has processed billions in value since October 2023. That said:
                  <ul className="list-disc list-inside ml-4 mt-2 text-[#e6edf3]">
                    <li>As a newer L2, it carries more risk than battle-tested Arbitrum</li>
                    <li>Prover network is still semi-centralized</li>
                    <li>DeFi protocols on Scroll carry their own risks (Aave, SyncSwap)</li>
                    <li>Start with small amounts and test thoroughly</li>
                  </ul>
                </>
              }
            />

            <FAQItem
              question="What can I do on Scroll?"
              answer={
                <>
                  You can use any DeFi protocol deployed on Scroll:
                  <ul className="list-disc list-inside ml-4 mt-2 text-[#e6edf3]">
                    <li><strong>Trade:</strong> Swap tokens on SyncSwap, Ambient, Uniswap</li>
                    <li><strong>Lend/Borrow:</strong> Use Aave to earn interest or borrow</li>
                    <li><strong>Farm:</strong> Provide liquidity and earn LP fees + incentives</li>
                    <li><strong>Derivatives:</strong> Trade perpetual futures on Zebra (30-50x leverage)</li>
                    <li><strong>Bridge:</strong> Move assets between Ethereum and other chains</li>
                  </ul>
                </>
              }
            />

            <FAQItem
              question="Does Scroll have a token?"
              answer={
                <>
                  Yes, <strong>SCR</strong> launched in October 2024. It's a governance token:
                  <ul className="list-disc list-inside ml-4 mt-2 text-[#e6edf3]">
                    <li>Total supply: 1 billion SCR</li>
                    <li>Use: Vote on protocol upgrades, fee structures, sequencer rewards</li>
                    <li>Trading: Available on Uniswap, Binance, Coinbase, Kraken</li>
                    <li>Note: Not revenue-generating or stake-able (as of Q1 2026)</li>
                  </ul>
                  Like all governance tokens, SCR is speculative. Invest only what you can afford to lose.
                </>
              }
            />

            <FAQItem
              question="How do I bridge assets to Scroll?"
              answer={
                <>
                  <strong>Official bridge (scroll.io/bridge):</strong> Most secure but slow (12-24 hours)
                  <ul className="list-disc list-inside ml-4 mt-2 text-[#e6edf3]">
                    <li>Go to scroll.io/bridge</li>
                    <li>Connect MetaMask with ETH on mainnet</li>
                    <li>Enter amount and confirm</li>
                    <li>Wait 12-24 hours for proof generation and finality</li>
                  </ul>
                  <strong>Third-party services (Across, Bridges):</strong> Faster but more expensive
                  <ul className="list-disc list-inside ml-4 mt-2 text-[#e6edf3]">
                    <li>Use liquidity pools for instant bridging</li>
                    <li>Pay higher fees (0.25-1.5%) for speed</li>
                    <li>Good for impatient traders</li>
                  </ul>
                </>
              }
            />
          </div>
        </Section>

        {/* Internal Links Section */}
        <section className="mt-16 p-6 rounded-xl bg-[#161b22] border border-[#30363d]">
          <h3 className="text-xl font-bold text-[#e6edf3] mb-4">Related Learning Resources</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              className="p-4 rounded-lg border border-[#30363d] hover:border-[#fbbf24]/50 hover:bg-[#0d1117] transition-colors"
            >
              <h4 className="font-bold text-[#58a6ff] mb-2">Layer 2 Scaling Guide</h4>
              <p className="text-sm text-[#8b949e]">Understand Rollups, Sidechains, and Plasma solutions</p>
            </a>

            <a
            >
              <h4 className="font-bold text-[#58a6ff] mb-2">Zero-Knowledge Proofs Explained</h4>
              <p className="text-sm text-[#8b949e]">Deep dive into ZK tech and why it matters</p>
            </a>

            <a
            >
              <h4 className="font-bold text-[#58a6ff] mb-2">zkSync Era Comparison</h4>
              <p className="text-sm text-[#8b949e]">How zkSync compares to Scroll</p>
            </a>

            <a
            >
              <h4 className="font-bold text-[#58a6ff] mb-2">Cross-Chain Bridges Guide</h4>
              <p className="text-sm text-[#8b949e]">Bridge security and best practices</p>
            </a>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold text-[#e6edf3] mb-6">Final Thoughts</h2>
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
          <div className="space-y-4 text-[#8b949e]">
            <p>
              Scroll represents a fundamental advancement in Layer 2 scaling. Its bytecode-level EVM compatibility, combined with zero-knowledge proof security, makes it one of the most developer-friendly ZK Layer 2s available. The ecosystem is growing, the team is active (February 2026 emergency upgrade shows they're paying attention), and the fundamentals are solid.
            </p>

            <p>
              <strong>For traders:</strong> Scroll offers cheap, fast transactions for DeFi. Start small, test thoroughly, and monitor the ecosystem.
            </p>

            <p>
              <strong>For developers:</strong> Scroll is an excellent target for Ethereum smart contract deployment. The compatibility is real, and you don't need to rewrite your contracts.
            </p>

            <p>
              <strong>For investors:</strong> The SCR token is speculative. The Layer 2 sector is competitive, and Scroll faces competition from zkSync, Linea, and even optimistic rollups. However, if you believe in ZK technology and Ethereum scaling, Scroll is one of the best bets.
            </p>

            <p>
              <strong>Bottom line:</strong> Scroll is not risk-free, but it's a legitimate, well-funded, actively maintained Layer 2. Use it with the same caution you'd use for any crypto application. Start small, and scale up as you gain confidence.
            </p>
          </div>
        </section>

        {/* Call-to-Action */}
        <div className="mt-16 p-6 rounded-xl bg-gradient-to-r from-[#161b22] to-[#0d1117] border border-[#fbbf24]/30">
          <h3 className="text-xl font-bold text-[#e6edf3] mb-3">Ready to Explore Scroll?</h3>
          <p className="text-[#8b949e] mb-4">
            Start with the official Scroll bridge, test with small amounts, and explore the ecosystem. Follow Scroll's official channels for security updates and new protocol deployments.
          </p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 rounded-lg bg-[#fbbf24] text-[#0d1117] font-bold hover:bg-[#f97316] transition-colors"
          >
            Visit Scroll Official Site
          </a>
        </div>
      
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>

      <BackToTop />
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
    
        <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
          <span style={{ color: "#8b949e" }}>Related: </span>
          <a href="/learn/onchain-analysis-smart-money-tracking-tools-guide-2026" style={{ color: "#fb923c", marginRight: "1rem" }}>Onchain Analysis Smart Money Tracking Tools Guide 2026</a>
        </nav>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Scroll zkEVM Guide 2026: Ethereum", "description": "Complete guide to Scroll, the native zkEVM Layer 2 for Ethereum. Learn how it works, ecosystem DeFi protocols, SCR token, risks, and how to bridge & trade.", "url": "https://degen0x.com/learn/scroll-zkevm-guide-2026", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
      <RelatedContent category="learn" currentSlug="/learn/scroll-zkevm-guide-2026" />
</main>
  );
}
