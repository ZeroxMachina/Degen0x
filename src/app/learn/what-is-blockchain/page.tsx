import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: 'What Is Blockchain? Complete Guide to How It Works (2026) | degen0x',
  description: 'Blockchain explained simply: what it is, how it works, why it matters. Learn about blocks, hashes, consensus (PoW vs PoS), public vs private chains, real uses beyond crypto, and limitations. Beginner-friendly 2026 guide.',
  keywords: ['what is blockchain', 'blockchain explained', 'how blockchain works', 'blockchain technology', 'blockchain for beginners', 'distributed ledger', 'proof of work', 'proof of stake', 'blockchain uses'],
  openGraph: {
    type: 'article',
    title: 'What Is Blockchain? Complete Guide to How It Works (2026)',
    description: 'A plain-English guide to blockchain: blocks, hashes, consensus, public vs private chains, and real uses in 2026.',
    publishedTime: '2026-04-14T00:00:00Z',
    modifiedTime: '2026-04-14T00:00:00Z',
    url: 'https://degen0x.com/learn/what-is-blockchain',
    images: [{ url: 'https://degen0x.com/og-learn.svg', width: 1200, height: 630, alt: 'What Is Blockchain Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Blockchain? Complete Guide to How It Works (2026)',
    description: 'Blockchain explained: blocks, hashes, consensus, public vs private chains, real uses, and limitations.',
    images: ['https://degen0x.com/og-learn.svg'],
  },
  alternates: { canonical: 'https://degen0x.com/learn/what-is-blockchain' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Blockchain? Complete Guide to How It Works (2026)',
  description: 'Plain-English guide to blockchain technology: blocks, hashes, consensus (PoW vs PoS), public vs private chains, real uses, and limitations.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
  author: { '@type': 'Organization', name: 'degen0x' },
  publisher: { '@type': 'Organization', name: 'degen0x', logo: { '@type': 'ImageObject', url: 'https://degen0x.com/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://degen0x.com/learn/what-is-blockchain' },
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is blockchain in simple terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A blockchain is a shared database that is copied across thousands of computers and updated by group consensus rather than a central authority. Every new entry is bundled into a "block" that is cryptographically linked to the previous block, creating a tamper-evident chain. Because thousands of independent nodes hold identical copies, rewriting history requires controlling a majority of the network — which is economically impractical on large public chains like Bitcoin and Ethereum.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does blockchain actually work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Users sign transactions with a private key and broadcast them to the network. Validators (miners in PoW, stakers in PoS) collect pending transactions into a block, run a consensus algorithm to agree on the next block, and append it to the chain. Each block contains a hash of the previous block, so changing any historical data would change every subsequent hash. Nodes reject mismatched chains, which is why tampering is detectable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between Proof of Work and Proof of Stake?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Proof of Work (PoW), used by Bitcoin, secures the chain by making miners solve computationally expensive puzzles — the energy cost is the security budget. Proof of Stake (PoS), used by Ethereum since The Merge in 2022, secures the chain by making validators lock up (stake) tokens that can be slashed if they misbehave — the capital at risk is the security budget. PoS uses ~99.9% less energy but introduces different trade-offs around decentralization and liveness.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is blockchain the same as Bitcoin?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Bitcoin is one application built on blockchain technology — the first, but not the only one. Ethereum adds programmable smart contracts. Solana optimizes for high throughput. Private/permissioned blockchains like Hyperledger are used by enterprises. Think of blockchain as the technology (like "databases") and Bitcoin as one product (like "Postgres"). By 2026 there are hundreds of live blockchains serving different use cases.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are real-world uses of blockchain beyond crypto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Beyond cryptocurrency: tokenized real-world assets (US Treasuries on-chain surpassed $5B in 2025), supply-chain provenance (Walmart, Maersk), cross-border payments (USDC settles globally in seconds), digital identity, loyalty programs, NFT-based event ticketing, and verifiable credentials. Not every use case needs a blockchain — but where multiple parties need a shared source of truth without trusting one another, blockchain is often the right tool.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the main limitations of blockchain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three big ones. Throughput: Bitcoin does ~7 transactions per second, Ethereum ~15 on L1. Layer 2s and faster chains like Solana push this higher, but there are trade-offs. Finality: public blockchains take seconds to minutes to confirm, versus milliseconds for centralized databases. User experience: private keys, gas fees, and wallet management remain confusing for non-crypto-native users. Blockchain is not a silver bullet — it shines when decentralization and auditability matter more than speed.',
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

export default function WhatIsBlockchainPage() {
  const tableOfContents = [
    { id: 'what-is-blockchain', title: 'What Is a Blockchain?' },
    { id: 'how-it-works', title: 'How a Blockchain Actually Works' },
    { id: 'consensus', title: 'Consensus: Proof of Work vs Proof of Stake' },
    { id: 'public-vs-private', title: 'Public vs Private Blockchains' },
    { id: 'uses', title: 'Real-World Uses in 2026' },
    { id: 'limitations', title: 'Limitations and Misconceptions' },
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
          <span style={{ color: '#c9d1d9' }}>What Is Blockchain</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Blockchain</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Beginner</span>
          <h1 style={h1Style}>What Is Blockchain? A Plain-English Guide for 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Blockchain is the shared, tamper-evident database that makes Bitcoin, Ethereum, stablecoins, NFTs, and most of crypto possible. But the concept is older and broader than any single coin. This guide strips away the hype and walks through what a blockchain actually is, how a new block gets added, why Proof of Work and Proof of Stake exist, where blockchains are genuinely useful in 2026 (and where they are not), and the honest limitations you should know before building on one.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 14, 2026</span>
            <span>Reading time: 14 min</span>
          </div>
        </div>

        <AuthorAttribution author="DegenSensei" role="Content Lead" publishedDate="2026-04-14" updatedDate="2026-04-14" readingTime={14} section="learn" />

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

        <section id="what-is-blockchain" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>What Is a Blockchain?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            A blockchain is a shared database where entries are grouped into blocks and each block is cryptographically linked to the one before it. That chain of blocks is copied across thousands of independent computers (nodes), and the network uses a rulebook called a consensus algorithm to agree on which new blocks are valid. No single party can unilaterally rewrite history, because every other node has its own copy and will reject a chain that does not match.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            That is the entire trick: instead of trusting one database administrator, you trust the <em>rules</em> that thousands of independent parties follow. The output is a ledger that is public, auditable, and extremely difficult to tamper with — which is why it is useful for money (Bitcoin), programmable money (Ethereum), digital collectibles (NFTs), and any scenario where multiple parties need a shared source of truth without trusting one another.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#a78bfa' }}>Key idea:</strong> A blockchain is not a mystical new type of computer. It is a database with unusual guarantees — global replication, cryptographic linking, and consensus-based updates — that make censorship and retroactive tampering uneconomical.
          </div>
        </section>

        <section id="how-it-works" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>How a Blockchain Actually Works</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Start with a transaction. Say Alice wants to send Bob 1 ETH. Alice signs the transaction with her private key and broadcasts it to the Ethereum network. The transaction lands in a "mempool" — a waiting room of unconfirmed transactions that every node sees.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Validators (on Ethereum, staked participants) pick transactions out of the mempool, bundle them into a candidate block, and run the consensus algorithm to propose that block to the network. The block includes a cryptographic hash of the previous block, a timestamp, the validator's signature, and the list of transactions.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Other nodes verify the block — is every signature valid? Does the validator have the right to propose? Are the balances consistent? If yes, they add the block to their local copy of the chain. If no, they discard it. Once enough nodes agree, the block is "finalized" and the transactions inside are considered permanent.
          </p>
          <h3 style={h3Style}>Why hashes matter</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Each block embeds the hash of the previous block. Hashes are one-way functions: change a single character of the input and the output is completely different. If you tried to alter a transaction from three years ago, that block's hash would change, which would break the next block's hash, which breaks the next, and so on. Every node would instantly see the mismatch. This is why blockchains are called "tamper-evident" — you cannot quietly rewrite history.
          </p>
        </section>

        <section id="consensus" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Consensus: Proof of Work vs Proof of Stake</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Consensus is how thousands of nodes agree on a single version of the truth without a central coordinator. The two dominant approaches in 2026 are Proof of Work and Proof of Stake.
          </p>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Feature</th>
                <th style={thStyle}>Proof of Work (Bitcoin)</th>
                <th style={thStyle}>Proof of Stake (Ethereum)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Security budget</td>
                <td style={tdStyle}>Electricity + hardware cost</td>
                <td style={tdStyle}>Capital locked as stake</td>
              </tr>
              <tr>
                <td style={tdStyle}>Energy use</td>
                <td style={tdStyle}>High (~150 TWh/year)</td>
                <td style={tdStyle}>Low (~0.01 TWh/year)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Attack cost</td>
                <td style={tdStyle}>51% of global hash rate</td>
                <td style={tdStyle}>Buy + stake ~⅓ of supply</td>
              </tr>
              <tr>
                <td style={tdStyle}>Block time</td>
                <td style={tdStyle}>~10 minutes</td>
                <td style={tdStyle}>~12 seconds</td>
              </tr>
              <tr>
                <td style={tdStyle}>Finality</td>
                <td style={tdStyle}>Probabilistic (~6 confirmations)</td>
                <td style={tdStyle}>Deterministic (~13 minutes)</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Neither is universally better. Bitcoin maximalists argue PoW's energy cost is a feature — an attacker cannot print security the way they could print ETH to attack PoS. Ethereum proponents argue PoS gets the same economic security at 1/1000th the energy use, and that slashing (destroying the stake of misbehaving validators) provides sharper incentives.
          </p>
        </section>

        <section id="public-vs-private" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Public vs Private Blockchains</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Public blockchains (Bitcoin, Ethereum, Solana) are permissionless: anyone can run a node, propose transactions, or build applications. Private/permissioned blockchains (Hyperledger Fabric, Quorum, Corda) are controlled by a consortium that decides who can participate.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Private chains deliver higher throughput and more privacy, at the cost of decentralization — which is often the whole point. They are useful for supply-chain tracking, interbank settlement, and regulated workflows where the participants already trust each other somewhat but want a shared, auditable record. Public chains are useful when the participants do not trust each other, when censorship resistance is required, or when permissionless innovation is the goal.
          </p>
        </section>

        <section id="uses" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Real-World Uses in 2026</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Blockchain's most battle-tested use cases in 2026 are: money movement (stablecoins settle over $2T in on-chain volume annually, faster and cheaper than traditional rails for cross-border), tokenized treasuries (BlackRock's BUIDL, Ondo, and others have pushed on-chain US Treasury products past $5B), decentralized finance (lending, DEX trading, and perpetuals handle ~$200B TVL), and digital ownership (NFT-based ticketing, music royalties, and gaming items).
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Use cases where blockchain has <em>not</em> taken over: social media (decentralized networks exist but remain niche), generic data storage (cheaper centralized alternatives win), and most enterprise "blockchain for X" initiatives from 2017-2019, which quietly became private databases.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            If you are evaluating whether a project actually needs a blockchain, the honest test is: do multiple parties need a shared source of truth, and do they not fully trust each other or a central operator? If yes, blockchain is a reasonable tool. If no, a regular database is faster, cheaper, and simpler.
          </p>
        </section>

        <section id="limitations" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Limitations and Common Misconceptions</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            <strong>Blockchains are slow compared to databases.</strong> Bitcoin processes ~7 transactions per second, Ethereum ~15 on L1. Layer 2s (Base, Arbitrum, Optimism) push this into the thousands, but there are trade-offs around settlement guarantees and cross-chain complexity.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            <strong>Blockchains are not anonymous.</strong> Bitcoin and Ethereum are pseudonymous — addresses are not tied to real identities by default, but every transaction is public forever. Chain-analysis firms routinely link addresses to individuals. If you want true privacy, you need additional tools (mixers, zero-knowledge rollups) that come with their own trade-offs and regulatory risks.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            <strong>Immutability cuts both ways.</strong> Losing your private key means losing your funds permanently. Sending to the wrong address is unrecoverable. The same property that makes blockchain censorship-resistant makes user error unforgiving, which is why wallet UX and social-recovery schemes are still an active area of work.
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
            <li><Link href="/learn/what-is-web3" style={linkStyle}>What Is Web3? A Practical Guide for 2026</Link></li>
            <li><Link href="/learn/crypto-for-beginners" style={linkStyle}>Crypto for Beginners: Start-Here Guide (2026)</Link></li>
            <li><Link href="/learn/blockchain-consensus-mechanisms-compared" style={linkStyle}>Blockchain Consensus Mechanisms Compared</Link></li>
            <li><Link href="/learn/what-is-a-stablecoin-guide" style={linkStyle}>What Is a Stablecoin? Complete Guide</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
