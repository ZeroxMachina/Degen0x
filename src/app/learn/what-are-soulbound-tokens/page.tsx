import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: "Soulbound Tokens (SBTs) Explained: Non-Transferable",
  description: 'Complete guide to soulbound tokens in 2026. Learn Vitalik\'s Decentralized Society vision, EIP-5192, Galxe, Guild.xyz, Zupass ZK credentials, and on-chain academic credentials.',
  keywords: ['soulbound tokens', 'SBT', 'non-transferable NFT', 'EIP-5192', 'Decentralized Society', 'Galxe', 'Guild.xyz', 'Zupass', 'on-chain identity', 'reputation token'],
  openGraph: {
    type: 'article',
    title: 'Soulbound Tokens (SBTs) Explained: Non-Transferable Identity & Credentials',
    description: 'Complete guide to soulbound tokens. Learn from Vitalik\'s Decentralized Society, EIP-5192 standard, and credential systems like Galxe, Guild.xyz, Zupass.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/what-are-soulbound-tokens',
    images: [{
      url: 'https://degen0x.com/og-soulbound.svg',
      width: 1200,
      height: 630,
      alt: 'Soulbound Tokens Guide',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soulbound Tokens (SBTs) Explained: Non-Transferable Identity & Credentials',
    description: 'Vitalik\'s vision for decentralized society. Learn EIP-5192, Galxe, Guild.xyz, Zupass, and on-chain credentials.',
    image: 'https://degen0x.com/og-soulbound.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/what-are-soulbound-tokens',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Soulbound Tokens (SBTs) Explained: Non-Transferable Identity & Credentials',
  description: 'Complete guide to soulbound tokens. Understand EIP-5192, Galxe, Guild.xyz, Zupass ZK credentials, and Vitalik\'s Decentralized Society vision.',
  image: 'https://degen0x.com/og-soulbound.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are soulbound tokens and how are they different from NFTs?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Soulbound tokens (SBTs) are non-transferable credentials attached to wallet ("souls" in Vitalik\'s terminology). Unlike NFTs, which are freely traded and speculated on, SBTs are permanently bound to issuer + holder. Example: University issues diploma SBT to graduate. Student cannot sell diploma (non-transferable). Diploma represents achievement, not asset. SBTs answer: How do you prove you\'re MIT graduate without doxxing? Answer: Hold MIT diploma SBT. No KYC required, privacy preserved. Use cases: Educational credentials, professional licenses, community membership, reputation systems, credit scores.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Vitalik\'s "Decentralized Society" vision?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Vitalik + Buterin + Weyl 2022 paper: "Decentralized Society: Finding Web3\'s Soul." Vision: Web3 is currently focused on assets (tokens, NFTs). But humans need reputation, credentials, relationships. Current web2: Reputation centralized (LinkedIn, Facebook). Web3 vision: Reputation decentralized via SBTs. Ecosystem: (1) Soul = wallet/identity. (2) SBT = credential (education, work history). (3) Soulbound NFT = unique achievement. (4) Pluralistic community recovery = backup keys via friends/family (loss of private key = loss of soul, so need recovery). Impact: Enable decentralized society where identity, reputation, relationships are on-chain, user-controlled, censorship-resistant.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is EIP-5192 and why is it important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'EIP-5192 is Ethereum standard for soulbound tokens (minimal soulbound interface). Defines required functions: (1) locked(uint256 tokenId) -> bool: Returns true if token is soulbound (non-transferable). (2) Standard events for soulbinding/unbinding. Why important: (1) Standardization: All SBT projects can implement same interface (interoperability). (2) Wallets can recognize SBTs, display differently from NFTs. (3) Smart contracts can check if token is soulbound before attempting transfer. (4) EIP-5192 adoption means SBTs are Ethereum-native, not proprietary. Current adoption: Galxe, Guild.xyz, Lens Protocol (partially), OpenSea (recognizes SBTs). Expect full EIP-5192 adoption by 2027.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do Galxe and Guild.xyz differ in credential systems?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Galxe (formerly Project Galaxy): Credential network for Web3. Issuers (protocols, brands) can create campaigns awarding SBTs. Example: Uniswap runs campaign "swap 10x on Uniswap V3", award Uniswap Galxe badge. 50M+ badges issued. Unique: (1) On-chain verification of actions (swap events, governance votes). (2) Gamification (quests, points). (3) Marketplace (can list achievements). Users: 10M+ active.\n\nGuild.xyz: Access management via credentials. Example: Project needs "Discord member 6+ months + Uniswap trader" to join private channel. Guild checks SBTs, grants access. Unique: (1) Gatekeeping (not just credentials, but access control). (2) Multiple chain support (Ethereum, Polygon, Arbitrum, Solana). (3) Flexible logic (AND/OR conditions). Users: 500k+.\n\nVs each other: Galxe focuses on achievement + trading. Guild focuses on access control. Both issue SBTs. Galxe emphasizes gamification; Guild emphasizes utility.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Zupass and how do zero-knowledge credentials work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Zupass (from Protocol Labs): Privacy-preserving credential system using ZK proofs. Use case: "Prove you\'re Devcon attendee without revealing name/email." Traditional: Issuer provides credential + attendee name (privacy leak). Zupass: (1) User attends Devcon, registered in list (encrypted). (2) User generates ZK proof of membership (proves "I\'m in Devcon attendee list" without revealing identity). (3) Proof verified on-chain (or off-chain). (4) User has Zupass card (privacy passport). Advantage: Privacy. Attendee verified but not doxxed. Used by: EthCC (Ethereum community conference), ETHGlobal, Protocol Labs events. Limitation: Requires users to generate proofs (UX friction). Future: Batch proof generation + mobile apps will improve UX.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can soulbound tokens be used for credit scores and lending?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, but not directly. Smart contracts can use SBTs as reputation input. Example: Lender checks holder\'s SBTs (employment SBT, university diploma, on-time payment history SBT). If strong reputation, approve loan at better rates. Advantage: Open credit system (vs centralized bureaus). Disadvantage: (1) Privacy risk (visible on-chain). (2) SBTs are issued by others (can be revoked if issuer loses keys). (3) No global standard yet for credit SBTs.\n\nCurrent projects: Goldfinch (decentralized lending), Huma Protocol (crypto-native credit), Archblock (emerging). Limitation: Most DeFi uses overcollateralization (borrow $100 with $150 collateral) vs reputation. SBT-based lending requires mature reputation systems. Expected mainstream adoption: 2027-2028 once SBTs are ubiquitous.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'What Are Soulbound Tokens', },
  ],
};

export default function SoulboundTokensGuide() {
  const tableOfContents = [
    { id: 'what-are-sbts', title: 'What Are Soulbound Tokens?' },
    { id: 'decentralized-society', title: 'Vitalik\'s Decentralized Society Vision' },
    { id: 'sbt-types', title: 'Types of Soulbound Tokens' },
    { id: 'sbt-platforms', title: 'SBT Platforms & Comparison' },
    { id: 'eip-5192', title: 'EIP-5192 Standard' },
    { id: 'use-cases', title: 'Real-World Use Cases' },
    { id: 'privacy-challenges', title: 'Privacy & Revocation Challenges' },
    { id: 'faq', title: 'FAQ' },
  ];

  const infoBoxStyle = {
    background: '#161b22',
    border: '1px solid #30363d', borderLeft: '3px solid #a78bfa', borderLeft: '3px solid #a78bfa',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
    lineHeight: 1.8,
  };

  const h1Style = {
    fontSize: 36,
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 24,
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12,
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

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Soulbound Tokens</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>14 min read</span>
          <h1 style={h1Style}>Soulbound Tokens: Non-Transferable Identity &amp; Credentials</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Master soulbound tokens (SBTs) in 2026. Learn Vitalik&apos;s Decentralized Society vision, EIP-5192 standard, credential systems (Galxe, Guild.xyz), Zupass ZK credentials, and on-chain academic credentials.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
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

        <section id="what-are-sbts">
          <h2 style={h2Style}>What Are Soulbound Tokens?</h2>
          <p>Soulbound tokens (SBTs) are non-transferable credentials issued by issuers and permanently bound to wallet holders. Unlike NFTs, which are assets meant to be traded and speculated on, SBTs represent achievements, credentials, and reputation that cannot be sold or transferred.</p>
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

          <h3 style={h3Style}>SBTs vs NFTs: Core Differences</h3>
          <p><strong>NFT</strong>: Transferable, tradeable, speculative. "I own this digital art." Used for: collectibles, game items, profile pictures. Market-driven pricing.</p>
          <p><strong>SBT</strong>: Non-transferable, non-tradeable, credential-focused. "I earned this degree/badge." Used for: education, employment, governance. Price is zero (cannot be sold, only issued/revoked).</p>

          <h3 style={h3Style}>Core Properties of SBTs</h3>
          <ul>
            <li><strong>Non-transferable</strong>: Cannot move between wallets. If you lose private key, you lose SBT (no recovery).</li>
            <li><strong>Issued by trusted parties</strong>: Universities issue diplomas, employers issue job certs, DAOs issue governance badges.</li>
            <li><strong>Revocable</strong>: Issuer can revoke SBT if credential is no longer valid (e.g., job ended, license expired).</li>
            <li><strong>On-chain verifiable</strong>: Anyone can verify SBT without contacting issuer. Decentralized trust.</li>
            <li><strong>Privacy-respecting</strong>: Can be issued with ZK proofs (prove membership without revealing identity).</li>
          </ul>

          <div style={infoBoxStyle}>
            <p><strong>Current SBT Landscape (2026):</strong> 50M+ SBTs issued globally. Platforms: Galxe (50M+ badges), Guild.xyz (500k+ users), Lens Protocol (credential layer), OpenSea (recognizes SBTs). Adoption still early (compared to 1B+ NFTs), but growing 10x YoY. Expected mainstream adoption: 2027-2028.</p>
          </div>
        </section>

        <section id="decentralized-society">
          <h2 style={h2Style}>Vitalik&apos;s Decentralized Society Vision</h2>
          <p>In May 2022, Vitalik Buterin and E. Glen Weyl published "Decentralized Society: Finding Web3&apos;s Soul," outlining the future of Web3 identity beyond assets.</p>

          <h3 style={h3Style}>The Problem with Asset-Only Web3</h3>
          <p>Current Web3: Focused on token trading and NFT speculation. Users identified by wallet address, not reputation. Zero accountability. Example: Fresh wallet can launch $10M rug pull without history or consequences.</p>

          <h3 style={h3Style}>The Solution: Souls &amp; SBTs</h3>
          <p><strong>Soul</strong>: Wallet + identity. In Web2, you have one identity (Google account) across all platforms. In Web3, Vitalik proposes "soul" = wallet + attached credentials (SBTs). SBTs represent:</p>
          <ul>
            <li><strong>Education</strong>: MIT diploma SBT</li>
            <li><strong>Employment</strong>: Work history SBTs</li>
            <li><strong>Relationships</strong>: "Friend of John" SBT (social trust)</li>
            <li><strong>Reputation</strong>: "Honest trader" SBT (community vote)</li>
            <li><strong>Governance</strong>: "DAO member" SBT (voting rights)</li>
          </ul>

          <h3 style={h3Style}>Key Concepts in Decentralized Society</h3>
          <p><strong>1. Pluralistic Identity:</strong> Humans have multiple roles (employee, parent, artist). SBTs reflect this multiplicity. No single "credit score," but multiple SBTs from different issuers.</p>

          <p><strong>2. Pluralistic Community Recovery:</strong> Web3 problem: Lose private key = lose entire wallet (including SBTs). Solution: "Community recovery" = backup keys held by trusted friends/family. If you lose keys, friends can vote to recover access (50%+ approve). Used by Gnosis Safe, ERC-4337 account abstraction.</p>

          <p><strong>3. Soulbound NFTs:</strong> Limited-edition achievements tied to soul (e.g., "Speaker at Devcon 2025" NFT + SBT). Cannot be traded, only displayed. Certificates of participation/achievement.</p>

          <div style={infoBoxStyle}>
            <p><strong>Vitalik&apos;s Vision (2026 Progress):</strong> Partial realization. Community recovery is live (Gnosis Safe 50% adoption). SBTs are mainstream (Galxe, Guild). Missing piece: Privacy (current SBTs are transparent, doxxable). Expected: ZK credentials (Zupass style) become default by 2027.</p>
          </div>
        </section>

        <section id="sbt-types">
          <h2 style={h2Style}>Types of Soulbound Tokens</h2>

          <h3 style={h3Style}>Educational SBTs</h3>
          <p>Universities and learning platforms issue diplomas/certificates as SBTs. Examples: MIT Digital Diploma (2023), OpenZeppelin Educational SBT, Coursera credentials. Advantage: Portable (graduate holds certificate forever). Disadvantage: Depends on university adoption.</p>

          <h3 style={h3Style}>Employment &amp; Skill SBTs</h3>
          <p>Employers issue SBTs for job titles, skills, tenure. Example: "Senior Engineer at Uniswap 2022-2025" SBT. LinkedIn-equivalent on-chain. Companies: MetaCareer, Talent Protocol issuing these. Benefit: Decentralized resume (no LinkedIn KYC needed).</p>

          <h3 style={h3Style}>Community Membership SBTs</h3>
          <p>DAOs issue SBTs for membership/participation. Example: Uniswap DAO issues "Uniswap Governance Member" SBT to UNI token holders. Benefits: Gated access (only members can vote), reputation (member for 2 years = trusted), roles (core team vs community).</p>

          <h3 style={h3Style}>Achievement &amp; Gamification SBTs</h3>
          <p>Platforms issue SBTs for completing quests/challenges. Example: Galxe "Swap 10x on Uniswap" SBT, OpenSea "Top Collector" SBT. Motivation: Gamification (users compete for rare badges). Current leaders: Galxe (50M+ badges), Quest Protocol.</p>

          <h3 style={h3Style}>Verifiable Social SBTs</h3>
          <p>"Friend of [address]" SBTs showing social relationships. Example: "Friend of Vitalik" SBT (issued by Vitalik, claims friendship). Used for: Sybil attack detection (bots have fewer social SBTs), reputation networks. Risk: Easily faked (anyone can claim friendship).</p>

          <h3 style={h3Style}>Privacy-Preserving ZK SBTs</h3>
          <p>SBTs issued with zero-knowledge proofs. Example: Zupass "I attended Devcon" without revealing name. User gets proof, can show proof without identity. Used by: EthCC, ETHGlobal, privacy-conscious projects.</p>
        </section>

        <section id="sbt-platforms">
          <h2 style={h2Style}>SBT Platforms &amp; Comparison</h2>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Platform</th>
                <th style={thStyle}>Chain</th>
                <th style={thStyle}>Use Case</th>
                <th style={thStyle}>Issuer</th>
                <th style={thStyle}>Standard</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>Galxe</strong></td>
                <td style={tdStyle}>Multi-chain (10+)</td>
                <td style={tdStyle}>Gamification, quests</td>
                <td style={tdStyle}>Protocols, brands</td>
                <td style={tdStyle}>EIP-5192 (ERC-1238)</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Guild.xyz</strong></td>
                <td style={tdStyle}>Multi-chain (5+)</td>
                <td style={tdStyle}>Access control</td>
                <td style={tdStyle}>Projects, communities</td>
                <td style={tdStyle}>EIP-5192</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Zupass</strong></td>
                <td style={tdStyle}>Off-chain (ZK)</td>
                <td style={tdStyle}>Privacy-preserving</td>
                <td style={tdStyle}>Events, conferences</td>
                <td style={tdStyle}>Custom (ZK proofs)</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Lens Protocol</strong></td>
                <td style={tdStyle}>Polygon</td>
                <td style={tdStyle}>Social network</td>
                <td style={tdStyle}>Users, projects</td>
                <td style={tdStyle}>Custom SBT layer</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>OpenZeppelin</strong></td>
                <td style={tdStyle}>Ethereum</td>
                <td style={tdStyle}>Educational</td>
                <td style={tdStyle}>Universities</td>
                <td style={tdStyle}>EIP-5192</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Talent Protocol</strong></td>
                <td style={tdStyle}>Polygon</td>
                <td style={tdStyle}>Employment certs</td>
                <td style={tdStyle}>Employers</td>
                <td style={tdStyle}>EIP-5192</td>
              </tr>
            </tbody>
          </table>

          <div style={infoBoxStyle}>
            <p><strong>Market Leaders (2026):</strong> Galxe dominates with 50M+ badges. Guild.xyz growing in access control (500k+ users). Zupass popular in privacy communities. Lens Protocol integrating SBTs for social reputation. OpenZeppelin standard is becoming default (EIP-5192).</p>
          </div>
        </section>

        <section id="eip-5192">
          <h2 style={h2Style}>EIP-5192: The Soulbound Token Standard</h2>

          <h3 style={h3Style}>What is EIP-5192?</h3>
          <p>Ethereum Improvement Proposal 5192 defines the standard interface for soulbound tokens. Proposed by Ethereum community to ensure all SBTs can interoperate. Like ERC-20 (all tokens follow same interface), EIP-5192 (all SBTs follow same interface).</p>

          <h3 style={h3Style}>Required EIP-5192 Functions</h3>
          <p><strong>1. locked(uint256 tokenId) -&gt; bool</strong>: Returns true if token is soulbound (non-transferable). Smart contracts can check before attempting transfer.</p>

          <p><strong>2. Events</strong>: Emit events when token is soulbound/unsoulbound for transparency.</p>

          <p><strong>3. Metadata</strong>: Standard fields (issuer, expiration date, revocation status) for wallets to display correctly.</p>

          <h3 style={h3Style}>Why EIP-5192 Matters</h3>
          <p><strong>Interoperability</strong>: Wallets (MetaMask, Ledger, Rabby) can recognize SBTs and display them differently from NFTs.</p>

          <p><strong>Smart Contract Integration</strong>: Protocols can read `locked()` before allowing transfers. Prevents accidental SBT trades.</p>

          <p><strong>Cross-Platform Compatibility</strong>: Galxe SBT + Guild.xyz SBT both use EIP-5192. Same interface = easier building.</p>

          <h3 style={h3Style}>Adoption Status (2026)</h3>
          <p>EIP-5192 is not yet finalized (still in discussion stage). Current implementations use similar but proprietary standards. Expected finalization: Q2 2026. Once finalized, expect rapid adoption across wallets and platforms.</p>
        </section>

        <section id="use-cases">
          <h2 style={h2Style}>Real-World Use Cases for SBTs</h2>

          <h3 style={h3Style}>Use Case 1: On-Chain Education</h3>
          <p>MIT issues diploma SBT to graduates. Student holds diploma forever (non-transferable). Employer can verify: "John graduated from MIT" by checking his wallet for MIT diploma SBT. No need to call university directly. Benefit: Decentralized resume. Current: MIT Digital Diploma (2023), limited adoption.</p>

          <h3 style={h3Style}>Use Case 2: Professional Licenses</h3>
          <p>Medical board issues "Board-Certified Physician" SBT to doctors. Patients can verify doctor credentials on-chain. Benefit: Transparency, no fake credentials. Risk: Revocation (if license suspended, SBT revoked, but on-chain immutable). Solution: Issuer can emit "revoked" event.</p>

          <h3 style={h3Style}>Use Case 3: Decentralized Identity</h3>
          <p>User accumulates SBTs (education, employment, social) that form identity. Used in: Credit scoring (Goldfinch loans based on SBT reputation), governance (DAO voting weighted by SBT badges), access control (DAOs grant roles based on SBT holdings).</p>

          <h3 style={h3Style}>Use Case 4: Community Moderation</h3>
          <p>DAOs issue "Community Moderator" SBT. Moderators use this for: (a) Gatekeeping (only moderators can moderate). (b) Reputation (visible in Discord, Twitter). (c) Accountability (if moderator abuses power, SBT revoked). Example: MakerDAO moderators hold Moderator SBT.</p>

          <h3 style={h3Style}>Use Case 5: Privacy-Preserving Credentials</h3>
          <p>Zupass: Prove you attended conference without revealing identity. Example: "Prove you&apos;re EthCC attendee" → ZK proof → Verified on-chain. Used for: Private voting, anonymous credentials, privacy-respecting applications.</p>

          <h3 style={h3Style}>Use Case 6: Sybil Attack Prevention</h3>
          <p>Problem: Airdrop farming (bot wallet creates 1000 alts, claims 1000x airdrop). Solution: Airdrop requires "human" SBT (verified human via Gitcoin Passport + humanode). Bots cannot forge human SBT. Protocols using: Optimism, Arbitrum, Uniswap (early experiments).</p>
        </section>

        <section id="privacy-challenges">
          <h2 style={h2Style}>Privacy &amp; Revocation Challenges</h2>

          <h3 style={h3Style}>Privacy Risk: On-Chain Transparency</h3>
          <p>Current SBTs are transparent. Anyone can see: "Address 0x123 has MIT diploma SBT." This doxxes identity. Solution: Use private SBTs (off-chain storage) or ZK proofs (prove membership without revealing identity). Zupass uses ZK approach. Most platforms still use transparent approach.</p>

          <h3 style={h3Style}>Revocation Problem: Immutable Ledger</h3>
          <p>Problem: SBT says "John graduated from MIT" but later university finds fraud (forged transcript). University revokes SBT, but on-chain history shows John once held diploma (immutable). Solution: (1) Event-based revocation (emit "revoked" event, smart contracts listen). (2) Timestamp-based checking (contract checks: "Did John hold diploma on Date X?"). (3) Off-chain revocation lists (issuer maintains public list of revoked SBTs).</p>

          <h3 style={h3Style}>Recovery Risk: Lost Keys = Lost Identity</h3>
          <p>If you lose wallet private key, you lose all SBTs (unlike traditional credentials stored in cloud). Solution: Community recovery (friends vote to recover access). Used by Gnosis Safe. Expected to become standard by 2027.</p>

          <h3 style={h3Style}>Issuer Risk: Centralized Trust</h3>
          <p>SBTs require trusting issuer. If issuer loses keys or shuts down, SBTs become orphaned (cannot be transferred, hard to verify). Solution: Decentralized issuers (DAOs instead of individuals), multi-sig keys, time-locked contracts.</p>

          <div style={infoBoxStyle}>
            <p><strong>Best Practices for SBT Safety (2026):</strong> (1) Prefer transparent issuers (MIT, Uniswap, Gitcoin). (2) Check expiration dates (old SBTs may be stale). (3) Use community recovery (Gnosis Safe style). (4) Verify issuer key security (multi-sig preferred). (5) For sensitive credentials, use ZK proofs (Zupass style).</p>
          </div>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Can I transfer a soulbound token to someone else?</h3>
            <p>No. SBTs are non-transferable by design. You cannot sell or move them to another wallet. If you lose your wallet, you lose the SBT (no recovery unless using community recovery mechanisms like Gnosis Safe). This is the key difference from NFTs.</p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Who can issue soulbound tokens?</h3>
            <p>Anyone with smart contract knowledge can issue SBTs. In practice, trusted entities issue: Universities (diplomas), employers (job certs), DAOs (governance badges), events (attendance badges). To be valuable, issuers must be credible (MIT more trusted than random wallet). Platforms like Galxe make SBT issuance accessible to non-technical people.</p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>What happens if the issuer of my SBT loses their private key?</h3>
            <p>SBT becomes orphaned. No one can revoke or manage it. On-chain, it still exists (showing you held it). Off-chain, you cannot update metadata or revoke. This is a risk for centralized issuers. Solution: Issuers should use multi-sig wallets or decentralized governance (DAO controls issuance).</p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Are soulbound tokens the same as credentials from Galxe?</h3>
            <p>Galxe badges are one type of SBT (achievement-focused). SBTs are broader (education, employment, social, etc.). Galxe credentials are Galxe&apos;s implementation of SBTs. Other platforms (Guild, Zupass, Lens) also issue SBTs with different mechanics. All are SBTs, but different use cases.</p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Can my SBT expire or be revoked?</h3>
            <p>Yes. Issuers can revoke SBTs if credential is no longer valid (license expired, job ended, membership revoked). Revocation is emitted as event on-chain. Smart contracts can check revocation status. Unlike NFTs (permanent), SBTs are designed for lifecycle management (issue → update → revoke).</p>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={h3Style}>How does Zupass differ from regular SBTs?</h3>
            <p>Zupass uses zero-knowledge proofs instead of on-chain storage. You get a ZK credential (privacy passport) proving you attended conference without revealing identity. Regular SBTs are stored on-chain (transparent, doxxable). Zupass is better for privacy; regular SBTs are better for transparency/verification. Both are emerging standards.</p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only. SBTs are an emerging technology with ongoing development. Privacy and security best practices are still being established. Always verify issuer credibility before trusting SBTs for critical decisions.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/tools/compound-interest-crypto-calculator" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Compound Interest Crypto Calculator</Link></li>
            <li><Link href="/tools/crypto-airdrop-tracker" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Airdrop Tracker</Link></li>
            <li><Link href="/tools/crypto-correlation-matrix" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Correlation Matrix</Link></li>
            <li><Link href="/tools/crypto-exchange-fee-comparison-tool" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Crypto Exchange Fee Tool</Link></li>
          </ul>
        </nav>

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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Soulbound Tokens (SBTs) Explained: Non-Transferable", "description": "Complete guide to soulbound tokens in 2026. Learn Vitalik\\", "url": "https://degen0x.com/learn/what-are-soulbound-tokens", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
</div>
      <RelatedContent category="learn" currentSlug="/learn/what-are-soulbound-tokens" />
      </article>
  );
}
