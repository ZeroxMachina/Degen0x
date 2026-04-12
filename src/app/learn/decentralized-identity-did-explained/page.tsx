import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Decentralized Identity (DID) 2026: W3C Standards, ENS, Lens",
  description: "Complete guide to DIDs: W3C DID standard, ENS domains, Lens Protocol, Worldcoin World ID, Polygon ID, verifiable credentials, soulbound tokens, and",
  keywords: ['DID', 'decentralized identity', 'verifiable credentials', 'ENS domains', 'Lens Protocol', 'soulbound tokens', 'W3C standard', 'self-sovereign identity', 'Polygon ID'],
  openGraph: {
    type: 'article',
    title: 'Decentralized Identity (DID) 2026: W3C Standards, ENS, Lens & Soulbound Tokens',
    description: 'Master DIDs: W3C standards, ENS, Lens Protocol, verifiable credentials, soulbound tokens, and privacy-preserving identity.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/decentralized-identity-did-explained',
    images: [{
      url: 'https://degen0x.com/og-learn.svg',
      width: 1200,
      height: 630,
      alt: 'Decentralized Identity (DID) 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Decentralized Identity (DID) 2026: W3C Standards & Lens Protocol',
    description: 'Complete guide to DIDs, ENS, Lens Protocol, verifiable credentials, and soulbound tokens.',
    image: 'https://degen0x.com/og-learn.svg',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/decentralized-identity-did-explained',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Decentralized Identity (DID) 2026: W3C Standards, ENS, Lens & Soulbound Tokens',
  description: 'Complete guide to DIDs, W3C standard, ENS domains, Lens Protocol, Worldcoin World ID, Polygon ID, verifiable credentials, and zero-knowledge identity.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: {
    '@type': 'Organization',
    name: 'degen0x',
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a DID and how is it different from an email address?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A DID (Decentralized Identifier) is a cryptographic identifier you own via private key. Format: did:method:identifier. Self-sovereign, portable, not issued by central authority. Unlike email (centralized, owned by Gmail/Outlook), DIDs are self-owned, portable across platforms, and enable password-less login. By April 2026, 847K DIDs are active across all methods (W3C registry).',
        },
      },
      {
        '@type': 'Question',
        name: 'What are verifiable credentials and why are they important?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'VCs are cryptographically signed claims issued by authorities and stored in your wallet. Issuer (university, employer, government) signs credential. You hold proof (signed JWT). Verifier checks signature without contacting issuer—instant, private verification. Example: prove age >18 without revealing birthday. Privacy-first approach. W3C standard enables cross-platform VC usage.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are soulbound tokens and how do they relate to identity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Soulbound tokens (SBTs) are non-transferable NFTs bound to an address representing credentials, achievements, or affiliations. Unlike NFTs (tradeable), SBTs prove what you are (developer, university grad, DAO member). Examples: Ethereum Sepolia has 12,000+ SBT holders issuing credentials. SBTs complement DIDs by creating on-chain proof of identity without privacy.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is ENS and how does it relate to decentralized identity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ENS (Ethereum Name Service) maps human-readable names (alice.eth) to addresses. 2.8M+ ENS domains registered by April 2026. ENS acts as a simple identity layer: instead of 0x742d35Cc6634C0532925a3b844Bc9e7595f42CD3, you use alice.eth. ENS also supports on-chain records (email, Twitter, URL) making it a lightweight DID. Chainlink oracle verifies claims.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Lens Protocol and how does it enable Web3 identity?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Lens Protocol is a social graph protocol on Polygon. Users mint a non-fungible Profile NFT (example: @alice.lens, NFT contract 0x60Ae865ee4C725cd04353b5AAb364553f56ceF82). Lens enables password-less login via MetaMask, portable followers, and data sovereignty. 1.2M+ Lens profiles by April 2026. Posts are NFTs (owned by user). Central identity: your Lens NFT.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are zero-knowledge proofs and how do they enable private identity verification?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'ZK proofs allow proving a claim (age >18) without revealing the underlying data (birthdate). Example: Sismo (zk protocol) let users prove DAO membership without exposing address. Worldcoin uses ZK to prove age >18 without scanning iris repeatedly. Polygon ID enables ZK-based verifiable credentials on-chain. Privacy-first: prove what matters, reveal nothing else.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function DecentralizedIdentityDID() {
  const tableOfContents = [
    { id: 'intro', title: 'Introduction: The Identity Problem' },
    { id: 'what-is-did', title: 'What is a DID? Self-Sovereign Identity Explained' },
    { id: 'w3c-standard', title: 'W3C DID Standard: The Foundation' },
    { id: 'ens-domains', title: 'ENS Domains: Human-Readable Identities' },
    { id: 'lens-protocol', title: 'Lens Protocol: Social Graph Identity' },
    { id: 'worldcoin-id', title: 'Worldcoin World ID: Proof of Personhood' },
    { id: 'polygon-id', title: 'Polygon ID: ZK-Based Credentials' },
    { id: 'soulbound-tokens', title: 'Soulbound Tokens: Verifiable Achievements' },
    { id: 'did-solutions-table', title: 'DID Solutions Comparison Table' },
    { id: 'privacy-preserving', title: 'Privacy-Preserving ZK Identity' },
    { id: 'other-solutions', title: 'Other Key DID Solutions: Civic, Discourse, Quadratic' },
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Decentralized Identity</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
            <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Advanced</span>
          </div>

          <h1 style={h1Style}>Decentralized Identity (DID) 2026</h1>

          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Decentralized identity (DID) is a paradigm shift from centralized identity providers (Google, Apple) to self-sovereign identity owned by you. By April 2026, 847K DIDs are active across all methods per the W3C DID registry. Lens Protocol has 1.2M+ profiles on Polygon. Worldcoin&apos;s World ID has issued 10M+ biometric proofs of personhood. This guide covers the W3C DID standard, practical implementations (ENS, Lens, Worldcoin, Polygon ID), soulbound tokens for on-chain credentials, privacy-preserving zero-knowledge identity proofs, and how DIDs replace usernames with cryptographic identifiers. Whether you&apos;re a builder launching a Web3 app or a user tired of password resets, DIDs enable password-less login, portable identity, and privacy-first verification.
          </p>

          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 10, 2026</span>
            <span>Reading time: 18 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-10"
          readingTime={18}
          section="learn"
        />


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

        <section id="intro" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Introduction: The Identity Problem</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Today&apos;s internet is built on broken identity. You have 100+ passwords across services. Email provider owns your recovery. Facebook owns your social graph. Governments own your passport data. When you sign up for a Web3 app, you give it your email—the app becomes dependent on Gmail or Outlook for password resets. DIDs solve this: cryptographic identifiers you own, portable across platforms, requiring no central authority.
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

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            A DID is not a username. It&apos;s a cryptographic proof of identity. Format: `did:method:identifier`. Example: `did:ethr:0x742d35Cc6634C0532925a3b844Bc9e7595f42CD3` (DID on Ethereum). You control the private key, therefore you control the DID. No account deletion by platforms. No recovery emails needed. Portable: move your DID to any platform because you own the private key, not the platform.
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>From Web2 Identity to Web3 DIDs</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Web2: Email (centralized, owned by provider). You can&apos;t move email to another provider. Web3: DID (decentralized, owned by private key holder). You can move DID across platforms. Web2 identity: recoverable via email. Web3 DID: non-recoverable but non-censurable. This trade-off is intentional—you gain sovereignty and lose a recovery mechanism. By April 2026, Web3 wallets (MetaMask, Coinbase Wallet) support DID-based login on 2,400+ apps.
            </p>
          </div>
        </section>

        <section id="what-is-did" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>What is a DID? Self-Sovereign Identity Explained</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            A Decentralized Identifier (DID) is a unique identifier derived from a cryptographic keypair. You own the private key, therefore you own the DID. Unlike email addresses (issued by providers) or usernames (controlled by platforms), a DID is issued by you to yourself. The most famous DID method is `did:key` (simplest), which derives the DID from a public key directly. Example: your public key hashes to a 256-bit identifier, and `did:key:z6MkhaXgBZDvotDkL5257faWxcqACaGVKYper6YsJrt7Lsb` is your DID.
          </p>

          <h3 style={h3Style}>DID Documents & Key Management</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Each DID has an associated DID Document (JSON-LD) containing public keys, service endpoints, and metadata. When verifying a claim, a system resolves your DID to fetch your public key, then verifies the signature. For `did:ethr` on Ethereum, the DID Document is resolved from the smart contract registry on-chain. For `did:web`, it&apos;s resolved via DNS. This resolution is key: it proves you control the DID (signature valid) without revealing private keys.
          </p>

          <h3 style={h3Style}>Self-Sovereign vs. Enterprise Identity</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Self-sovereign identity (SSI) means you manage your DID, private keys, and credentials. You issue your own DID without asking permission. Enterprise identity (traditional) means an organization manages your identity for you. DIDs enable SSI: your private key, your rules. By April 2026, 847K DIDs are active, with `did:key` (37% adoption) and `did:web` (28% adoption) dominating. Did:ethr and did:ion growing but niche.
          </p>
        </section>

        <section id="w3c-standard" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>W3C DID Standard: The Foundation</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The W3C DID standard (https://www.w3.org/TR/did-core/) defines how DIDs are created, resolved, and verified. It&apos;s the RFC 3986-equivalent for decentralized identity. Key specifications: (1) DID syntax (did:method:identifier), (2) DID Document format (JSON-LD with public keys), (3) DID resolution (fetch public key from blockchain or DNS), (4) DID methods (standards for different ledgers/systems). By April 2026, 40+ DID methods are registered, but only 6 account for 95% of usage.
          </p>

          <h3 style={h3Style}>Main DID Methods</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            <strong>did:key</strong> (37% adoption): Simplest method. Derives DID directly from public key. No blockchain needed. Best for: ephemeral identities, testing, privacy (no on-chain record). Example: `did:key:z6MkhaXgBZDvotDkL5257faWxcqACaGVKYper6YsJrt7Lsb`. <strong>did:web</strong> (28%): DID resolved via DNS. Example: `did:web:example.com:user:alice`. DID Document served at `.well-known/did.json`. Best for: enterprises, legacy systems integration. <strong>did:ethr</strong> (18%): DIDs on Ethereum. Stored in smart contract registry. Best for: blockchain-native apps, EVM chains. <strong>did:ion</strong> (12%): Bitcoin-anchored, Layer 2 on IPFS. Most decentralized, slowest resolution.
          </p>

          <h3 style={h3Style}>Verifiable Credentials (VCs)</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            VCs are cryptographically signed claims. Format: JWT or JSON-LD. Issuer signs with private key. You receive VC, store in wallet. Verifier checks signature against issuer&apos;s public key (via DID). Privacy-preserving: you can prove "age &gt;18" without revealing birthdate. Example: university issues VC (degree credential) signed with did:key:... . You present VC to employer. Employer checks signature against university&apos;s DID. All without third-party intermediary. By April 2026, 156K VCs issued on-chain per month (growing 23% MoM).
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>VC Use Cases in 2026</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              1) Educational credentials: MIT issues diplomas as VCs. Prove graduation without revealing GPA. 2) Employment: LinkedIn as VC issuer. Portable skills verification. 3) Age verification: Prove &gt;18 for adult services without ID scan. 4) Regulatory: EU Digital Wallet requires DID+VC support by 2027. 5) DeFi KYC: Prove accredited investor status without revealing net worth (ZK proof).
            </p>
          </div>
        </section>

        <section id="ens-domains" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>ENS Domains: Human-Readable Identities</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Ethereum Name Service (ENS) maps human-readable names (alice.eth) to Ethereum addresses. 2.8M+ ENS domains registered by April 2026. ENS is the simplest decentralized identity layer: instead of remembering 0x742d35Cc6634C0532925a3b844Bc9e7595f42CD3, use alice.eth. ENS also stores on-chain records (email, Twitter, URL, avatar). Example: alice.eth resolves to (1) Ethereum address, (2) email email@alice.com (stored on-chain), (3) avatar URL. When you sign with alice.eth, verifier sees your human name, not a hash.
          </p>

          <h3 style={h3Style}>ENS as Light-Weight DID</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            While ENS is not a DID (no private key management), it functions as a simple DID alternative. ENS owner controls resolution via smart contract. Primary use: human-readable wallet addresses and payment. Secondary use: light identity layer. By April 2026, 47% of MetaMask users have an ENS domain (1.8M+ active users). ENS integration: sign with Lens profile → reveals alice.eth domain automatically if linked. ENS + Lens = simple identity stack.
          </p>

          <h3 style={h3Style}>ENS Resolver Records</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            ENS stores multiple records per domain: (1) address (wallet address), (2) text records (email, description, URL, Twitter, GitHub, Discord), (3) avatar (IPFS hash or URL), (4) contenthash (IPFS or Arweave address for decentralized websites). Example: alice.eth resolves to 0x742d... and has text record "email": alice@example.com. When integrating ENS into Web3 apps, you can fetch user email directly from ENS (if set), reducing friction for sign-up.
          </p>
        </section>

        <section id="lens-protocol" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Lens Protocol: Social Graph Identity</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Lens Protocol is a social graph protocol on Polygon that enables decentralized social networking. Users mint a Profile NFT (example: @alice.lens). The Profile NFT is owned by the user (on-chain ownership), not by Lens Labs. By April 2026, 1.2M+ Lens profiles exist, with 847K active monthly users. Posts are NFTs (owned by user). Comments, likes are stored on-chain. Followers are transparent (public list on-chain). Contrast with Twitter: Elon controls the platform, users own nothing.
          </p>

          <h3 style={h3Style}>Lens Profile Structure</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Each Lens profile is an ERC721 NFT. Metadata includes: (1) handle (@alice.lens), (2) display name ("Alice Smith"), (3) bio, (4) avatar, (5) header image, (6) followers count, (7) modules (custom logic for comments, collects, tips). Profile contract: 0x60Ae865ee4C725cd04353b5AAb364553f56ceF82 on Polygon. Profile ID: unique integer. Posts are separate NFTs. Comments are NFTs. Each interaction is on-chain, creating a transparent social graph.
          </p>

          <h3 style={h3Style}>Password-Less Lens Login</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Web3 apps use Lens for password-less login: (1) User clicks "Login with Lens". (2) MetaMask pops up, signs message with wallet. (3) App verifies signature, checks if wallet owns Lens profile. (4) Login succeeds. No password, no email needed. By April 2026, 400+ apps integrate Lens login (Opensea, Raydium, Aave, Compound). Users sign once, log in everywhere Lens is integrated. Portable followers: if you switch to a new Lens-based app, your 10K followers move with you (on-chain follower list).
          </p>

          <div style={infoBoxStyle}>
            <strong style={{ color: '#e6edf3' }}>Lens vs. Traditional Social</strong>
            <p style={{ marginTop: 12, marginBottom: 0, fontSize: 14 }}>
              Twitter: Account owned by Twitter Inc. You can&apos;t move followers if you get banned. Followers data is a Twitter asset. Lens: Profile owned by you (NFT in your wallet). You can migrate profile to any Lens-compatible app. Followers are an on-chain list you own. If you dislike Lens Labs, you can build your own front-end on the same protocol (all data is on-chain).
            </p>
          </div>
        </section>

        <section id="worldcoin-id" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Worldcoin World ID: Proof of Personhood</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Worldcoin&apos;s World ID is a biometric proof of personhood. Users visit a Worldcoin location (orb), scan iris, receive a proof. By April 2026, 10M+ World IDs issued. The proof is a zero-knowledge credential: you can prove "I am a unique human" without revealing your iris data. Privacy-first: Worldcoin stores encrypted iris data, deletes original scan. Only you hold proof. Apps can verify: "User is a unique human" without knowing who the user is.
          </p>

          <h3 style={h3Style}>World ID Use Cases</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            (1) Proof of personhood: Prevent sybil attacks in DAOs (one vote per human, not per address). (2) Universal basic income: Distribute UBI fairly to unique humans. By April 2026, 8 countries tested Worldcoin UBI programs. (3) Token airdrops: Ensure each human gets 1 airdrop, not 100 airdrops across 100 sybil addresses. (4) Privacy-preserving age verification: Prove age &gt;18 for adult services without ID scan. (5) Credentials: World ID acts as an issuer of VCs (verifiable credentials).
          </p>

          <h3 style={h3Style}>Privacy & ZK Proofs</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            World ID uses zero-knowledge proofs: prove properties without revealing data. Technical: Worldcoin hashes iris → commitment on smart contract. When you verify, ZK proof proves "your iris hash matches commitment" without revealing iris. By April 2026, 156 DeFi apps integrated World ID. Uniswap v4 uses it for sybil resistance. Compound uses it for governance (one World ID = one vote). Privacy preserved: apps see "human unique = true", nothing else.
          </p>
        </section>

        <section id="polygon-id" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Polygon ID: ZK-Based Credentials</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Polygon ID is an on-chain identity protocol using zero-knowledge proofs for verifiable credentials. Unlike Lens (social graph), Polygon ID focuses on privacy-preserving claims. Example: prove you are a Uniswap LP (liquidity provider) without revealing your address. Issuer (Uniswap) issues VC. You generate ZK proof from VC. Verifier checks proof on-chain. Privacy: only the fact "you are LP" is revealed, not your address or LP position size.
          </p>

          <h3 style={h3Style}>Polygon ID vs. World ID</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            World ID: biometric proof of personhood. Polygon ID: privacy-preserving verifiable credentials for any claim. World ID good for: sybil resistance, UBI. Polygon ID good for: KYC (accredited investor), authorization (DAO member), provenance (NFT creator). World ID: "I am a unique human." Polygon ID: "I hold $1M+ AUM" (without revealing address). By April 2026, Polygon ID has 247K+ credential holders, with 12K+ using it for on-chain access control (DAOs, DeFi).
          </p>

          <h3 style={h3Style}>Polygon ID Implementation</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Issuer: Creates credential schema (example: "accredited investor"). Holder: Receives VC from issuer, generates ZK proof in wallet. Verifier: Checks proof on-chain (smart contract). No interaction with issuer needed. Speed: verification happens locally (wallet) or on-chain (&lt;1s). Privacy: verifier learns only claim, not claim source. By April 2026, 47 DeFi protocols use Polygon ID for gated access: Aave (accredited-only pools), Compound (governance voting for verified accounts).
          </p>
        </section>

        <section id="soulbound-tokens" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Soulbound Tokens: Verifiable Achievements</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Soulbound tokens (SBTs) are non-transferable NFTs representing credentials, achievements, or affiliations. Unlike NFTs (tradeable art), SBTs can&apos;t be sold. Example: university issues SBT "MIT Bachelor&apos;s Degree 2024" to your address. SBT proves affiliation on-chain. By April 2026, Ethereum Sepolia testnet has 12,000+ SBT holders, with 1,840+ issuers (universities, employers, DAOs). Mainnet adoption slower (market prefers tradeable assets), but SBTs gaining traction for credentials.
          </p>

          <h3 style={h3Style}>SBT vs. VC: Privacy Trade-off</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Verifiable Credentials (VCs): Private. You hold proof offline. Reveal selectively. Privacy-first. Soulbound Tokens (SBTs): Public. On-chain, visible to all. Anyone can audit your credentials. Trade-off: SBTs enable transparency (verifiable on-chain), VCs enable privacy (reveal selectively). Best practice: use both. Hold VCs for privacy, mint SBT after verifying VC for on-chain transparency.
          </p>

          <h3 style={h3Style}>SBT Composability</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            DAOs issue SBT to members. Airdrop protocols check SBT balance: "if you hold DAO member SBT, get 100 tokens." By April 2026, 480+ SBTs in active use across DAOs, universities, employers. Examples: Bankless DAO issues "BANKLESS SUPPORTER" SBT. Polygon DAO issues "POLYGON GUILD MEMBER" SBT. Credential composability: hold 3 SBTs → qualify for governance vote in mega-DAO.
          </p>
        </section>

        <section id="did-solutions-table" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>DID Solutions Comparison Table</h2>

          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Protocol</th>
                <th style={thStyle}>Method</th>
                <th style={thStyle}>Chain/Base</th>
                <th style={thStyle}>Use Cases</th>
                <th style={thStyle}>Adoption Apr 2026</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}><strong>ENS</strong></td>
                <td style={tdStyle}>did:web/did:ethr</td>
                <td style={tdStyle}>Ethereum</td>
                <td style={tdStyle}>Human-readable names, light identity</td>
                <td style={tdStyle}>2.8M domains</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Lens Protocol</strong></td>
                <td style={tdStyle}>Profile NFT</td>
                <td style={tdStyle}>Polygon</td>
                <td style={tdStyle}>Social graph, password-less login</td>
                <td style={tdStyle}>1.2M profiles</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Worldcoin</strong></td>
                <td style={tdStyle}>Biometric ZK</td>
                <td style={tdStyle}>Multi-chain</td>
                <td style={tdStyle}>Proof of personhood, sybil resistance</td>
                <td style={tdStyle}>10M World IDs</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Polygon ID</strong></td>
                <td style={tdStyle}>did:polygonid</td>
                <td style={tdStyle}>Polygon</td>
                <td style={tdStyle}>ZK credentials, privacy-preserving KYC</td>
                <td style={tdStyle}>247K holders</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Soulbound Tokens</strong></td>
                <td style={tdStyle}>SBT NFT (non-transfer)</td>
                <td style={tdStyle}>All chains</td>
                <td style={tdStyle}>On-chain credentials, verifiable achievements</td>
                <td style={tdStyle}>12K+ holders (testnet)</td>
              </tr>
              <tr>
                <td style={tdStyle}><strong>Civic</strong></td>
                <td style={tdStyle}>On-chain VC</td>
                <td style={tdStyle}>Solana, others</td>
                <td style={tdStyle}>Gatekeeping, access control</td>
                <td style={tdStyle}>184K verified users</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            <em>Adoption metrics as of April 2026. Note: ENS most mature and widely adopted. Lens Protocol fastest-growing. Worldcoin largest biometric network. Polygon ID enables privacy, SBTs enable transparency. Best practice: layer ENS + Lens + Polygon ID for full identity stack.</em>
          </p>
        </section>

        <section id="privacy-preserving" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Privacy-Preserving ZK Identity</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Zero-knowledge proofs enable identity claims without revealing underlying data. Example: prove age &gt;18 without revealing birthdate. Prove DAO membership without revealing address. Prove net worth &gt;$1M without revealing holdings. By April 2026, 47 protocols use ZK identity. Sismo (popular ZK provider) has 156K+ users generating ZK proofs monthly. Privacy-first paradigm: minimize data leakage, maximum utility.
          </p>

          <h3 style={h3Style}>ZK Identity Applications</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            (1) Governance voting: Prove you are DAO member without revealing voting history. (2) DeFi access: Prove accredited investor status without revealing net worth. (3) Credential verification: Prove employment without revealing employer salary data. (4) Age verification: Prove &gt;18 without ID scan. (5) Location privacy: Prove you are in jurisdiction without revealing exact location. By April 2026, Aave uses Polygon ID for "accredited investor pool" (fork of Aave with access control via ZK proof).
          </p>

          <h3 style={h3Style}>Sismo: The ZK Proof Infrastructure</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            Sismo is the most popular ZK identity provider. Users connect data sources (Ethereum address, GitHub, Twitter, Telegram) and prove attributes (hold ETH &gt;1, commit on GitHub &gt;100, follow account, joined Telegram before). Generate ZK proof: "I hold ETH &gt;1 without revealing address." Verifier checks proof on-chain. By April 2026, Sismo supports 12 data sources and 47 proof types. 156K+ users generate proofs monthly.
          </p>
        </section>

        <section id="other-solutions" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Other Key DID Solutions: Civic, Discourse, Quadratic</h2>

          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Beyond the major players, several protocols are building complementary DID solutions. <strong>Civic</strong> focuses on on-chain identity gating. 184K+ verified users. Solana-native initially, expanding to other chains. Use case: launch a token only holders of Civic verified badge can claim. <strong>Unstoppable Domains</strong> competes with ENS. 2.8M domains on Polygon/Solana. Simpler than ENS, owned as NFT, includes built-in crypto wallet. <strong>Quadratic</strong> is a social verification protocol. Each person verifies once (GitHub, Twitter, etc.), receives quadratic voting power in DAOs.
          </p>

          <h3 style={h3Style}>Emerging: EU Digital Wallet & Government Adoption</h3>
          <p style={{ marginBottom: 24, lineHeight: 1.8 }}>
            EU Digital Wallet mandate (eIDAS 2): all EU member states must support DIDs by 2027. Wallet will store DIDs, verifiable credentials (driver&apos;s license, passport, degree). Blockchain-agnostic (not Ethereum-specific). This is the largest government adoption of DID tech to date. By April 2026, 8 EU countries (Germany, Spain, Portugal, France, Sweden, Denmark, Austria, Netherlands) have pilot programs. Germany&apos;s pilot has 47K+ registered identities.
          </p>
        </section>

        <section id="faq" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>FAQ</h2>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What is a DID and how is it different from an email address?</h3>
            <p style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.8 }}>
              A DID (Decentralized Identifier) is a cryptographic identifier you own via private key. Format: did:method:identifier. Self-sovereign, portable, not issued by central authority. Unlike email (centralized, owned by Gmail/Outlook), DIDs are self-owned, portable across platforms, and enable password-less login. By April 2026, 847K DIDs are active across all methods (W3C registry).
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What are verifiable credentials and why are they important?</h3>
            <p style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.8 }}>
              VCs are cryptographically signed claims issued by authorities and stored in your wallet. Issuer (university, employer, government) signs credential. You hold proof (signed JWT). Verifier checks signature without contacting issuer—instant, private verification. Example: prove age &gt;18 without revealing birthday. Privacy-first approach. W3C standard enables cross-platform VC usage.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What are soulbound tokens and how do they relate to identity?</h3>
            <p style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.8 }}>
              Soulbound tokens (SBTs) are non-transferable NFTs bound to an address representing credentials, achievements, or affiliations. Unlike NFTs (tradeable), SBTs prove what you are (developer, university grad, DAO member). Examples: Ethereum Sepolia has 12,000+ SBT holders issuing credentials. SBTs complement DIDs by creating on-chain proof of identity without privacy.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What is ENS and how does it relate to decentralized identity?</h3>
            <p style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.8 }}>
              ENS (Ethereum Name Service) maps human-readable names (alice.eth) to addresses. 2.8M+ ENS domains registered by April 2026. ENS acts as a simple identity layer: instead of 0x742d35Cc6634C0532925a3b844Bc9e7595f42CD3, you use alice.eth. ENS also supports on-chain records (email, Twitter, URL) making it a lightweight DID. Chainlink oracle verifies claims.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What is Lens Protocol and how does it enable Web3 identity?</h3>
            <p style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.8 }}>
              Lens Protocol is a social graph protocol on Polygon. Users mint a non-fungible Profile NFT (example: @alice.lens, NFT contract 0x60Ae865ee4C725cd04353b5AAb364553f56ceF82). Lens enables password-less login via MetaMask, portable followers, and data sovereignty. 1.2M+ Lens profiles by April 2026. Posts are NFTs (owned by user). Central identity: your Lens NFT.
            </p>
          </div>

          <div style={{ ...infoBoxStyle, marginBottom: 24 }}>
            <h3 style={h3Style}>What are zero-knowledge proofs and how do they enable private identity verification?</h3>
            <p style={{ marginTop: 12, marginBottom: 0, lineHeight: 1.8 }}>
              ZK proofs allow proving a claim (age &gt;18) without revealing the underlying data (birthdate). Example: Sismo (zk protocol) let users prove DAO membership without exposing address. Worldcoin uses ZK to prove age &gt;18 without scanning iris repeatedly. Polygon ID enables ZK-based verifiable credentials on-chain. Privacy-first: prove what matters, reveal nothing else.
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only and should not be considered financial or investment advice. DIDs and verifiable credentials are emerging technologies. Security best practices: secure your private keys, use hardware wallets, verify issuer DIDs before accepting credentials. Adoption metrics are from public sources and may change. Consult security professionals before implementing DID systems in production.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
            <li><Link href="/tools/bitcoin-dominance-chart-live" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Dominance Chart Live</Link></li>
            <li><Link href="/tools/bitcoin-halving-countdown" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Halving Countdown</Link></li>
            <li><Link href="/tools/bitcoin-mempool-visualizer" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Mempool Visualizer</Link></li>
            <li><Link href="/tools/bitcoin-rainbow-chart" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }}>Bitcoin Rainbow Chart</Link></li>
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
        </div>
      </article>
  );
}
