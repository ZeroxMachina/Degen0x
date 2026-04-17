import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: 'What Is Web3? A Practical Guide for 2026 | degen0x',
  description: 'Web3 explained: what it is, how it differs from Web1 and Web2, the real building blocks (wallets, smart contracts, tokens, DAOs), use cases that actually work in 2026, and the honest critiques you should know.',
  keywords: ['what is web3', 'web3 explained', 'web3 vs web2', 'web3 guide', 'decentralized internet', 'blockchain web3', 'web3 applications', 'web3 wallets'],
  openGraph: {
    type: 'article',
    title: 'What Is Web3? A Practical Guide for 2026',
    description: 'Beyond the hype: what Web3 is, how it differs from Web2, what works, and what does not.',
    publishedTime: '2026-04-14T00:00:00Z',
    modifiedTime: '2026-04-14T00:00:00Z',
    url: 'https://degen0x.com/learn/what-is-web3',
    images: [{ url: 'https://degen0x.com/og-learn.svg', width: 1200, height: 630, alt: 'What Is Web3 Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'What Is Web3? A Practical Guide for 2026',
    description: 'What Web3 is, how it differs from Web2, and what actually works in 2026.',
    images: ['https://degen0x.com/og-learn.svg'],
  },
  alternates: { canonical: 'https://degen0x.com/learn/what-is-web3' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What Is Web3? A Practical Guide for 2026',
  description: 'A practical guide to Web3: history, building blocks, use cases that work, honest critiques, and how to start.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
  author: { '@type': 'Organization', name: 'degen0x' },
  publisher: { '@type': 'Organization', name: 'degen0x', logo: { '@type': 'ImageObject', url: 'https://degen0x.com/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://degen0x.com/learn/what-is-web3' },
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Web3 in simple terms?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Web3 is a version of the internet where users hold their own accounts, assets, and identity directly via a crypto wallet, and where applications run (at least in part) on public blockchains instead of company-owned servers. The slogan is "read, write, own" — Web1 was read-only, Web2 added writing (social media, UGC), and Web3 adds ownership (tokens, on-chain assets, portable identity).',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Web3 different from Web2?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In Web2, your account, data, and followers live inside a platform (Twitter, Instagram, Uber). If the platform suspends you, you lose it. In Web3, your wallet is your account across every compatible application, your assets live on a blockchain you can take anywhere, and apps are built on open protocols. You gain portability and censorship resistance, but you also inherit responsibility for key management and understand that most Web3 apps still rely on some centralized infrastructure under the hood.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a crypto wallet to use Web3?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — a wallet is how you sign into Web3 apps, hold tokens, and prove ownership. Browser wallets like MetaMask and Rabby, mobile wallets like Phantom and Trust, and embedded wallets from Privy, Dynamic, and Coinbase Wallet all work. Embedded wallets (email or passkey login) have closed most of the UX gap with Web2, while self-custody wallets give you the strongest guarantees but make you fully responsible for your keys.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Web3 use cases actually work in 2026?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stablecoin payments and remittances, on-chain trading (DEXs, perpetuals), lending and yield (Aave, Morpho), tokenized real-world assets like US Treasuries, NFT-based ticketing and collectibles, on-chain identity/attestations, and certain games where item ownership matters. Use cases that have struggled: decentralized social media (niche), most enterprise consortium chains (became private databases), and "everything must be a DAO" governance.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Web3 the same as crypto or blockchain?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'They overlap heavily but are not identical. Blockchain is the underlying technology. Crypto is a broad term that includes tokens, exchanges, protocols, and the industry around them. Web3 is a user-facing vision of the internet built on blockchains and wallets, focused on ownership and portability. You can have blockchain applications that are not particularly "Web3" (private enterprise chains) and crypto activity that is not user-facing (market-making, infrastructure).',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the honest critiques of Web3?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three worth taking seriously. Decentralization is often partial — many "Web3" apps still use centralized RPCs, front-ends, and off-chain data. UX is improving but key management remains a stumbling block. And some use cases (payments, savings) have genuine product-market fit, while others (governance tokens, NFT profile pics as identity) have been mostly speculative. A mature take: Web3 is real where it solves a problem Web2 can not, and hype elsewhere.',
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

export default function WhatIsWeb3Page() {
  const tableOfContents = [
    { id: 'what-is-web3', title: 'What Is Web3?' },
    { id: 'evolution', title: 'Web1 → Web2 → Web3' },
    { id: 'building-blocks', title: 'The Web3 Building Blocks' },
    { id: 'use-cases', title: 'What Actually Works in 2026' },
    { id: 'how-to-start', title: 'How to Start Using Web3' },
    { id: 'critiques', title: 'Honest Critiques' },
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
          <span style={{ color: '#c9d1d9' }}>What Is Web3</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#06b6d4', color: '#001014' }}>Web3</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Beginner</span>
          <h1 style={h1Style}>What Is Web3? A Practical Guide for 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            "Web3" has carried a lot of hype, so here is the grounded version. Web3 is a stage of the internet where users sign in with a crypto wallet instead of a username, where assets live on public blockchains instead of company servers, and where applications are built on open protocols that any developer can read from and any user can walk away from. This guide explains where the term came from, the actual building blocks (wallets, smart contracts, tokens, DAOs, ENS), the use cases that have shipped real products by 2026, how to try it yourself, and the honest critiques you should know.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 14, 2026</span>
            <span>Reading time: 13 min</span>
          </div>
        </div>

        <AuthorAttribution author="DegenSensei" role="Content Lead" publishedDate="2026-04-14" updatedDate="2026-04-14" readingTime={13} section="learn" />

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

        <section id="what-is-web3" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>What Is Web3?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Web3 is shorthand for an internet where the user's account, assets, and identity are held in a crypto wallet rather than inside a company's database, and where applications are built on public blockchains that anyone can interact with. The one-line version, coined early by Ethereum founder Gavin Wood, is "read, write, own." Web1 let you read. Web2 let you write. Web3 lets you own — the tokens, the data, and the portable identity you use across apps.
          </p>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#a78bfa' }}>Plain take:</strong> Web3 is not a new internet. It is a set of tools built on top of the existing internet that move account ownership and asset ownership from platforms to users. Some of it is genuinely useful today; some of it is still early; some of it was hype that has not panned out.
          </div>
        </section>

        <section id="evolution" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Web1 → Web2 → Web3</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Era</th>
                <th style={thStyle}>Years</th>
                <th style={thStyle}>What you did</th>
                <th style={thStyle}>Who owned your account</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>Web1</td>
                <td style={tdStyle}>~1990–2004</td>
                <td style={tdStyle}>Read static pages</td>
                <td style={tdStyle}>Mostly nobody — you browsed anonymously</td>
              </tr>
              <tr>
                <td style={tdStyle}>Web2</td>
                <td style={tdStyle}>~2004–2020</td>
                <td style={tdStyle}>Post, share, collaborate</td>
                <td style={tdStyle}>The platform (Google, Meta, Amazon, Twitter)</td>
              </tr>
              <tr>
                <td style={tdStyle}>Web3</td>
                <td style={tdStyle}>~2015–present</td>
                <td style={tdStyle}>Own tokens, sign with a wallet, move across apps</td>
                <td style={tdStyle}>You, via a self-custody or embedded wallet</td>
              </tr>
            </tbody>
          </table>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The shift from Web1 to Web2 was about interactivity. The shift Web3 promises is about ownership and portability — the idea that your social graph, your collectibles, your subscriptions, and your credentials should travel with you rather than being locked inside whichever app created them.
          </p>
        </section>

        <section id="building-blocks" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>The Web3 Building Blocks</h2>
          <h3 style={h3Style}>Wallets</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Your wallet is your account. MetaMask and Rabby are the common browser extensions; Phantom leads on Solana; mobile-first wallets like Trust and Coinbase Wallet are popular with newer users; embedded wallets from Privy, Dynamic, and Turnkey let users sign in with email or passkey and still get a crypto account under the hood. One wallet address works across thousands of apps, which is the defining Web3 experience.
          </p>
          <h3 style={h3Style}>Smart contracts</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Smart contracts are small programs deployed to a blockchain that run exactly as written. They handle the logic of DeFi protocols (Uniswap, Aave), NFT marketplaces, governance systems, and just about everything users interact with on-chain. Once deployed, they are publicly auditable and often immutable — a strength for trust-minimization and a risk when bugs are found after the fact.
          </p>
          <h3 style={h3Style}>Tokens and stablecoins</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Tokens are the unit of value in Web3. Fungible tokens (ERC-20 on Ethereum, SPL on Solana) represent money, governance rights, or access. Non-fungible tokens (NFTs) represent unique assets — art, tickets, membership, in-game items. Stablecoins (USDC, USDT) are the practical payment rail that makes most on-chain commerce work.
          </p>
          <h3 style={h3Style}>DAOs and on-chain identity</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            DAOs (decentralized autonomous organizations) coordinate treasuries and decisions via token voting. ENS and similar name services give your wallet a human-readable handle (degensensei.eth) and increasingly serve as portable profiles linking your addresses, social accounts, and attestations across apps.
          </p>
        </section>

        <section id="use-cases" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>What Actually Works in 2026</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The Web3 use cases with real product-market fit by 2026: stablecoin payments and remittances (settle cross-border in seconds for cents), on-chain trading (DEXs and perpetuals routinely handle billions in daily volume), lending protocols (Aave, Morpho), tokenized real-world assets (on-chain US Treasuries pushed past $5B), and NFT-based ticketing, loyalty, and collectibles for specific audiences (music, sports, gaming).
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Use cases still working to find their footing: fully on-chain social networks (Farcaster is the most traction, still niche relative to Web2 peers), decentralized identity for mainstream logins (good tech, slow adoption outside crypto-native apps), and "put everything in a DAO" governance, which has produced both Nouns-style cultural hits and many drowsy treasuries.
          </p>
        </section>

        <section id="how-to-start" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>How to Start Using Web3</h2>
          <ol style={{ marginLeft: 20, lineHeight: 1.9, marginBottom: 16 }}>
            <li>Install a wallet (MetaMask or Rabby for desktop, Phantom for Solana, Coinbase Wallet on mobile). Back up your seed phrase offline.</li>
            <li>Fund it with a small amount — $20 to $50 in ETH, SOL, or USDC is plenty to experiment without putting real money at risk.</li>
            <li>Connect your wallet to one application you are curious about — a DEX like <Link href="/exchanges/best/ethereum" style={linkStyle}>one of these</Link>, an NFT marketplace, or a lending protocol. Sign a message; do not approve unfamiliar contracts.</li>
            <li>Try one real action: swap tokens, claim a free NFT, or deposit into a low-risk stablecoin vault. Pay attention to gas fees and what you are signing.</li>
            <li>Read our <Link href="/learn/crypto-for-beginners" style={linkStyle}>Crypto for Beginners guide</Link> for a safer ramp and longer-horizon habits.</li>
          </ol>
        </section>

        <section id="critiques" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Honest Critiques</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            <strong>Decentralization is often partial.</strong> Many Web3 apps depend on centralized RPC providers, front-end hosts, and off-chain oracles. "Decentralized" is a spectrum, not a binary.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            <strong>User experience still has rough edges.</strong> Seed phrases, gas fees, network switching, and scam approvals remain hazards for new users. Embedded wallets and smart accounts are closing the gap but adoption of the better UX is uneven across apps.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            <strong>Speculation outpaced utility in the last cycle.</strong> A lot of 2021–2022 Web3 noise was token speculation dressed up as product. The 2023–2026 cycle has been better about shipping real utility (stablecoin rails, RWAs, prediction markets, consumer wallets), but the discount for hype is still deserved — evaluate projects on the product, not the token chart.
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
            <li><Link href="/learn/what-is-blockchain" style={linkStyle}>What Is Blockchain? A Plain-English Guide</Link></li>
            <li><Link href="/learn/crypto-for-beginners" style={linkStyle}>Crypto for Beginners: Start-Here Guide</Link></li>
            <li><Link href="/learn/what-is-a-stablecoin-guide" style={linkStyle}>What Is a Stablecoin?</Link></li>
            <li><Link href="/learn/what-is-a-dao-explained" style={linkStyle}>What Is a DAO? Explained</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
