import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Onchain Identity Guide 2026: ENS, Soulbound Tokens, Attestations & DIDs | degen0x",
  description: "Explore the onchain identity stack in 2026 — ENS domains, Soulbound Tokens (SBTs), Ethereum Attestation Service (EAS), proof of personhood, and decentralized reputation systems.",
  keywords: ["onchain identity", "ENS", "soulbound tokens", "SBT", "decentralized identity", "Ethereum Attestation Service", "proof of personhood", "Web3 identity 2026"],
  openGraph: {
    title: "Onchain Identity Guide 2026: ENS, Soulbound Tokens, Attestations & DIDs",
    description: "Explore the onchain identity stack in 2026 — ENS domains, Soulbound Tokens (SBTs), Ethereum Attestation Service (EAS), proof of personhood, and decentralized reputation systems.",
    url: "https://degen0x.com/learn/onchain-identity-guide",
    siteName: "degen0x",
    images: [{ url: "https://degen0x.com/og-onchain-identity-guide.svg", width: 1200, height: 630 }],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Onchain Identity Guide 2026: ENS, SBTs & Attestations",
    description: "Explore the onchain identity stack in 2026 — ENS, SBTs, EAS, proof of personhood, and decentralized reputation systems.",
    images: ["https://degen0x.com/og-onchain-identity-guide.svg"],
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "What is onchain identity?",
    answer: "Onchain identity is your digital identity built from multiple layers of credentials, attestations, and tokens stored on the blockchain. Instead of relying on a central authority like a government or tech company, your identity is owned by you — controlled by your wallet and built through your actions, credentials, and relationships in Web3. Think of it as a decentralized resume that's cryptographically verified and attached to your wallet address."
  },
  {
    question: "How do I get an ENS domain?",
    answer: "Visit the ENS app at app.ens.domains, connect your wallet, search for your desired .eth domain name, and register it. Standard registrations require an 28-day waiting period (for security), then you claim and finalize the registration. You can also use ENS subdomains if the main domain is taken, or bid at ENS auction for premium names. Once registered, you can point it to your wallet address or set it as your primary name."
  },
  {
    question: "What are Soulbound Tokens and can I transfer them?",
    answer: "Soulbound Tokens (SBTs) are non-transferable tokens that represent credentials, achievements, or identity attributes. You can't sell or gift them because they're 'bound' to your wallet — this prevents credential inflation and fake credentials from being bought. Once issued by a trusted institution (university, employer, DAO), they stay with that wallet. You can revoke or ignore them, but the issuer can also revoke if credentials are false."
  },
  {
    question: "What is the Ethereum Attestation Service?",
    answer: "EAS is open-source infrastructure for creating, storing, and verifying attestations onchain or offchain. An attestation is a signed claim (like 'Alice completed Bootcamp X' or 'Bob has KYC verified'). EAS lets anyone issue attestations, applications can query them, and they're composable — meaning you can build reputation systems, governance voting, and trust networks on top of them. It's the standard for structured identity claims in Ethereum."
  },
  {
    question: "Is my onchain identity private?",
    answer: "No — onchain identity is public by default. If your wallet address is linked to your real identity, anyone can see all your SBTs, attestations, and credentials. This is a major privacy concern for sensitive credentials. Solutions include zero-knowledge proofs (prove you have a credential without revealing which one), private attestations (offchain), and selective disclosure (choose what to reveal). Always separate your privacy-sensitive identity from your main wallet if possible."
  },
  {
    question: "How will onchain identity affect DeFi lending?",
    answer: "Onchain identity enables undercollateralized lending by replacing collateral with reputation and credentials. Lenders can check your onchain credit score (built from repayment history, attestations, SBTs from trusted institutions), governance participation, and proof of personhood. This reduces barriers for borrowers who can't lock up 150% collateral but have strong onchain reputation. Expect DeFi lending to increasingly offer better rates for users with verified identity and history."
  }
];

const relatedArticles = [
  { title: "Account Abstraction: The Future of Web3 UX", href: "/learn/account-abstraction" },
  { title: "Zero-Knowledge Proofs Guide: Privacy Without Trust", href: "/learn/zero-knowledge-proofs-guide" },
  { title: "What Is Web3? The Complete 2026 Breakdown", href: "/learn/what-is-web3" },
  { title: "Farcaster & SocialFi Guide 2026: Decentralized Twitter", href: "/learn/farcaster-socialfi-guide-2026" },
  { title: "Privacy Coins Guide 2026: Beyond Bitcoin Privacy", href: "/learn/privacy-coins-guide-2026" }
];

export default function OnchainIdentityGuide() {

  const tableOfContents = [
    "What Is Onchain Identity?",
    "ENS: The Foundation of Web3 Identity",
    "Soulbound Tokens (SBTs): Your Onchain Resume",
    "Ethereum Attestation Service (EAS)",
    "Proof of Personhood: Are You Human?",
    "Real-World Use Cases in 2026",
    "Privacy Challenges & Solutions",
    "The Future of Onchain Identity"
  ];

  return (
    <main className="min-h-screen" style={{ backgroundColor: '#0d1117' }}>
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      }} />
      <StructuredData data={{
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Onchain Identity Guide 2026: ENS, Soulbound Tokens, Attestations & DIDs",
        "description": "Explore the onchain identity stack in 2026 — ENS domains, Soulbound Tokens (SBTs), Ethereum Attestation Service (EAS), proof of personhood, and decentralized reputation systems.",
        "image": "https://degen0x.com/og-onchain-identity-guide.svg",
        "datePublished": "2026-03-23",
        "dateModified": "2026-03-23",
        "author": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
        "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" }
      }} />

      {/* Header Section */}
      <div className="border-b" style={{ borderColor: '#30363d' }}>
        <div className="max-w-4xl mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Learn", href: "/learn" }, { label: "Onchain Identity Guide" }]} />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {['Identity', 'Web3', '2026 Guide'].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: '#a855f7',
                  color: '#e6edf3'
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title with Gradient */}
          <h1
            className="text-5xl font-bold mb-4 leading-tight"
            style={{
              backgroundImage: 'linear-gradient(135deg, #6366f1, #a855f7)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            Onchain Identity Guide 2026: ENS, SBTs, Attestations & The Future of Web3
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-sm" style={{ color: '#8b949e' }}>
            <span>📖 12 min read</span>
            <span>March 23, 2026</span>
            <span>🪪 Identity & Reputation</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={12}
          section="learn"
        />

      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Intro Paragraph */}
        <div className="mb-12" style={{ color: '#e6edf3' }}>
          <p className="text-lg mb-4 leading-relaxed">
            Your wallet address is your identity in Web3, but by 2026, it's become far more than just a random string of characters. It's evolved into a dynamic, verifiable identity stack — a combination of domain names (ENS), non-transferable credentials (Soulbound Tokens), cryptographic attestations, and proof-of-personhood proofs. This guide breaks down the onchain identity infrastructure that's reshaping how we think about digital identity, credit, reputation, and trust.
          </p>
          <p className="text-lg leading-relaxed">
            Whether you're building a reputation in DeFi, running a DAO, or just trying to protect your privacy while participating in Web3, understanding onchain identity is essential. We'll explore each layer of the identity stack, see how they work together, and look at real-world applications that are already reshaping DeFi, governance, and institutional adoption.
          </p>
        </div>

        {/* Table of Contents */}
        <div
          className="rounded-lg p-6 mb-12 border"
          style={{ backgroundColor: '#161b22', borderColor: '#30363d' }}
        >
          <h2 className="text-xl font-bold mb-4" style={{ color: '#e6edf3' }}>
            📋 Table of Contents
          </h2>
          <ol className="space-y-2" style={{ color: '#58a6ff' }}>
            {tableOfContents.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <span className="mr-3 font-bold">{idx + 1}.</span>
                <a href={`#section-${idx + 1}`} className="hover:underline">
                  {item}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Section 1: What Is Onchain Identity? */}
        <section id="section-1" className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#e6edf3' }}>
            1. What Is Onchain Identity? 🌐
          </h2>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            Onchain identity is fundamentally different from traditional digital identity. Instead of a central authority (government, bank, or tech company) defining who you are, your identity lives on the blockchain and is controlled by you. Every credential, attestation, and achievement is cryptographically signed and permanently linked to your wallet address. This creates a portable, transparent, and composable identity that you truly own.
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

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            Think of your wallet as the foundation. But instead of just being a random address, it's now a repository for multiple identity layers: your human-readable domain name (ENS), credentials issued by institutions (SBTs), claims and attestations (EAS), and proof that you're a real person (Worldcoin/World ID). Each layer serves a different purpose — ENS makes you discoverable, SBTs prove credentials, attestations create reputation, and proof of personhood prevents sybil attacks.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            The power of this approach is composability. A DeFi protocol can check your ENS, query your attestations, verify your SBTs, confirm your proof of personhood, and instantly calculate your onchain credit score — all without trusting a central intermediary. This enables new business models: undercollateralized lending based on reputation, reputation-gated governance, identity-based airdrops, and even institutional asset management built on verified onchain credentials.
          </p>

          <p className="mb-6 leading-relaxed" style={{ color: '#e6edf3' }}>
            By 2026, the average active Ethereum user has accumulated 10+ identity artifacts across these categories. Your identity is no longer a single entity — it's a rich, multidimensional profile that applications can inspect, verify, and build upon. This shift from "accounts you control" to "identity you own" is the fundamental transformation of Web3 in the mid-2020s.
          </p>

          {/* Info Box */}
          <div
            className="rounded-lg p-6 mb-6 border-l-4"
            style={{ backgroundColor: '#161b22', borderColor: '#6366f1', borderLeftWidth: '4px' }}
          >
            <h4 className="font-bold mb-2" style={{ color: '#58a6ff' }}>🔗 Key Concept: The Identity Stack</h4>
            <p style={{ color: '#8b949e' }}>
              Your onchain identity has multiple layers working together: <strong>ENS</strong> (human-readable identity), <strong>SBTs</strong> (credentials & achievements), <strong>Attestations</strong> (claims and reputation), and <strong>Proof of Personhood</strong> (sybil resistance). Each layer is optional, but together they create a complete, verifiable identity that you control.
            </p>
          </div>
        </section>

        {/* Section 2: ENS */}
        <section id="section-2" className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#e6edf3' }}>
            2. ENS: The Foundation of Web3 Identity 📝
          </h2>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            ENS (Ethereum Name Service) is like DNS for Ethereum — it translates human-readable names (like "vitalik.eth") into wallet addresses (like "0xd8dA6BF26964aF9D7eEd9e03E53415D37AA96045"). Instead of remembering a random 42-character hex string, you can simply use "yourname.eth" to receive funds, sign messages, or identify yourself across Web3. It's one of the most important and widely-adopted pieces of onchain identity infrastructure.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            Beyond simple address resolution, ENS has become a digital identity credential itself. Owning an ENS domain signals that you're legitimate enough to spend the gas fees and registration cost, which creates a basic barrier against spam. Many DAOs and protocols treat ENS ownership as a signal of legitimacy — they give better governance voting weights, airdrop bonus multipliers, or even entry requirements ("must have ENS to participate") to reduce sybil attacks. A .eth domain costs roughly $5-10/year for most names, making it an affordable reputation signal.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            ENS has evolved beyond simple domain names. You can now set up reverse resolution (so your wallet automatically displays your name on block explorers and applications), create subdomains with different owners (imagine "alice.company.eth" where the company owns "company.eth"), and link your ENS to your Twitter, Discord, GitHub, and other social profiles. This transforms ENS from just a naming system into a complete digital identity profile — a decentralized version of a social media profile that you fully control.
          </p>

          <p className="mb-6 leading-relaxed" style={{ color: '#e6edf3' }}>
            By 2026, ENS is also multichain — you can resolve your .eth domain to addresses on Polygon, Optimism, Solana, or even non-EVM chains. This makes ENS your primary identity across all of Web3, not just Ethereum. If you want to build an onchain reputation that's portable and recognizable, ENS is the obvious first step. Registration is straightforward through app.ens.domains, and the secondary market for premium names is vibrant if you want something shorter or more memorable.
          </p>
        </section>

        {/* Section 3: Soulbound Tokens */}
        <section id="section-3" className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#e6edf3' }}>
            3. Soulbound Tokens (SBTs): Your Onchain Resume 🏆
          </h2>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            Soulbound Tokens (SBTs) are non-transferable tokens proposed by Ethereum co-founder Vitalik Buterin and others in the landmark 2022 paper "Decentralized Society: Finding Web3's Soul." Unlike regular NFTs that can be bought, sold, and traded, SBTs are permanently locked to the wallet address that receives them. This fundamental property makes them ideal for encoding credentials, achievements, and identity attributes that shouldn't be tradeable.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            Why can't SBTs be transferred? Imagine if you could buy a diploma on the secondary market — the credential becomes worthless. Same with university degrees, professional certifications, or company employment history. SBTs solve this by making them non-transferable: only the wallet that earned it holds it, which guarantees authenticity. If an issuer (university, company, DAO) revokes your SBT, it can be removed from your wallet, creating accountability and preventing fraud.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            The use cases for SBTs are expanding rapidly. Universities are issuing SBTs as digital diplomas. DAOs use SBTs for membership and governance rights. Companies are exploring SBTs for employment history and professional credentials. Protocols use SBTs to grant airdrops only to early contributors or verified participants. Even social networks are using SBTs — Farcaster frames issue SBTs for profile verification and achievement milestones. By 2026, accumulating a diverse portfolio of SBTs from reputable issuers is becoming a key part of your onchain reputation.
          </p>

          <p className="mb-6 leading-relaxed" style={{ color: '#e6edf3' }}>
            The challenge with SBTs is privacy: since the blockchain is public, anyone who knows your wallet address can see all your SBTs. This means if your wallet is linked to your real identity, strangers can see your educational history, professional background, and personal achievements. Solutions are emerging — zero-knowledge proofs let you prove you have an SBT without revealing which one, and some platforms now support selective disclosure where you choose which SBTs to display. By 2026, many expect SBTs and privacy technologies to converge, letting you keep sensitive credentials private while still proving their existence to applications that need them.
          </p>

          {/* Warning Box */}
          <div
            style={{ backgroundColor: '#161b22', borderColor: '#f85149', borderLeftWidth: '4px' }}
          >
            <h4 className="font-bold mb-2" style={{ color: '#f85149' }}>⚠️ Privacy Warning: SBTs Are Public</h4>
            <p style={{ color: '#8b949e' }}>
              Soulbound Tokens on public blockchains are visible to anyone who knows your wallet address. If your address is linked to your real identity, your credentials are public — including educational history, employment, achievements, and more. Always separate your anonymous identity (for privacy-sensitive transactions) from your doxxed identity (for professional credentials and reputation). Use zero-knowledge proofs or selective disclosure where available.
            </p>
          </div>
        </section>

        {/* Section 4: Ethereum Attestation Service */}
        <section id="section-4" className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#e6edf3' }}>
            4. Ethereum Attestation Service (EAS): Building Reputation 🛡️
          </h2>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            The Ethereum Attestation Service (EAS) is open-source infrastructure for creating, storing, and verifying attestations on Ethereum. An attestation is a signed claim from one party about another: "Alice completed Bootcamp X," "Bob has passed KYC verification," "Carol is a DAO contributor." EAS makes it easy for anyone to issue attestations and for applications to query and verify them. By 2026, EAS has become the standard for structured identity claims in Ethereum.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            What makes EAS powerful is its flexibility. Issuers define custom schemas for their attestations — a university might have a "degree" schema with fields like degree_type, graduation_date, and field_of_study. A DAO might have a "contributor" schema with fields like contribution_type, duration, and compensation. Applications can query attestations by schema, verify the issuer's reputation, and instantly see structured claims about a user. This is far more flexible than traditional credentials or even SBTs.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            EAS supports both onchain and offchain attestations. Onchain attestations are permanently stored on Ethereum and visible to everyone — useful for public claims like "Alice is a verified developer" that you want widely visible. Offchain attestations are signed cryptographically but stored privately — useful for sensitive claims like "Bob passed our KYC" that you want to share selectively with specific applications. This combination gives you control over what's public and what's private.
          </p>

          <p className="mb-6 leading-relaxed" style={{ color: '#e6edf3' }}>
            The ecosystem built on EAS is exploding. Reputation protocols use EAS to track user histories and calculate credit scores. Social protocols use EAS to verify followers and build trust networks. Governance systems use EAS for voting records and contribution tracking. Real-world examples: crypto lending protocols use EAS attestations to build credit scores for undercollateralized loans, DAOs use EAS to track contributor histories and reward loyal members, and Web3 social networks use EAS to prevent sybil attacks and verify authentic engagement.
          </p>

          {/* Info Box */}
          <div
            style={{ backgroundColor: '#161b22', borderColor: '#a855f7', borderLeftWidth: '4px' }}
          >
            <h4 className="font-bold mb-2" style={{ color: '#58a6ff' }}>📊 What Is an Attestation?</h4>
            <p style={{ color: '#8b949e' }}>
              An attestation is a cryptographically signed claim from one entity (the issuer) about another (the recipient). Example: a university (issuer) attests that "Alice graduated with honors in Computer Science" (the claim). EAS stores these attestations so they can be verified later. Unlike SBTs, attestations are flexible — they can be made public or private, onchain or offchain, and easily queryable. They're ideal for building trust and reputation networks.
            </p>
          </div>
        </section>

        {/* Section 5: Proof of Personhood */}
        <section id="section-5" className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#e6edf3' }}>
            5. Proof of Personhood: Are You Human? 👤
          </h2>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            Proof of personhood solves one of Web3's hardest problems: sybil attacks. A sybil attack is when one person creates multiple fake accounts to gain unfair advantages — imagine one person creating 100 wallets to receive 100x airdrops or to spam governance votes with fake identities. Most DAOs and protocols need some way to ensure "one person = one account," but how do you prove that without a central authority?
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            Worldcoin's World ID is the most prominent example. Users prove personhood by visiting a booth and having their iris scanned (alongside document verification), which generates a proof of personhood token they can use in Web3. The iris scan is hashed and never stored (theoretically), and the system is designed so that no organization, including Worldcoin, can link proofs to identities. The result: a globally verifiable proof that you're human and one-person-equals-one-proof, without Worldcoin knowing who you are.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            The controversy is real: collecting iris scans in developing countries raises privacy and consent concerns. Some critics worry about the long-term risks of biometric data storage or the potential for surveillance. Alternative approaches are emerging: proof-of-liveness (proving you're alive right now through a video), device-based proof (your phone signs transactions as proof of personhood), and community-based vouching (people who already have proof vouch for new people, creating a web of trust). By 2026, no single standard has emerged, but most active communities use some form of sybil resistance.
          </p>

          <p className="mb-6 leading-relaxed" style={{ color: '#e6edf3' }}>
            Proof of personhood is complementary to other identity layers. Your ENS, SBTs, and attestations prove your reputation, but proof of personhood proves you're a real, unique human. Together, they create a complete identity: you're verifiable (ENS), credentialed (SBTs), have a reputation (attestations), and are provably human (proof of personhood). Some of the most successful Web3 communities require proof of personhood for governance participation or major airdrops, finding it's the most effective way to align incentives and prevent gaming.
          </p>
        </section>

        {/* Section 6: Real-World Use Cases */}
        <section id="section-6" className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#e6edf3' }}>
            6. Real-World Use Cases in 2026 🚀
          </h2>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            <strong>Undercollateralized DeFi Lending:</strong> Traditional DeFi requires 150%+ collateral — you deposit $10,000 to borrow $6,000. But onchain identity is changing this. Lending protocols now check your onchain reputation (built from attestations, SBTs, and repayment history), calculate a credit score based on years of data, and offer undercollateralized loans to users with strong history. Aave's risk management team is building models to use EAS attestations and SBTs for credit assessment. By 2026, the best opportunities in DeFi are reserved for users with strong onchain identities.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            <strong>Reputation-Gated Governance:</strong> DAOs are using onchain identity to weight voting power. Instead of one-token-one-vote (which favors whale holders), some protocols weight votes by your seniority (how long you've been in the community), your contribution history (attestations from recognized contributors), and your proof of personhood (to prevent sybil attacks). This transforms governance from plutocratic (controlled by the richest) to meritocratic (based on actual contributions and community standing). Examples: impact DAOs, research communities, and contributor collectives are already deploying this model.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            <strong>Airdrop Eligibility:</strong> Protocols are using onchain identity to distribute airdrops more fairly. Instead of airdropping to everyone who ever used the protocol (which incentivizes farmers to spam), protocols now airdrop based on identity criteria: must have Proof of Personhood (one person per airdrop), must have ENS (basic legitimacy check), must have contributed to the ecosystem (verified by EAS attestations), must have certain SBTs (verified as developer, institutional user, or community member). This shifts airdrops from luck-based giveaways to reputation-based distributions.
          </p>

          <p className="mb-6 leading-relaxed" style={{ color: '#e6edf3' }}>
            <strong>Institutional Onchain KYC:</strong> Traditional banks and asset managers are integrating with onchain identity. Large institutions now issue SBTs to accredited investors and verified traders, and DeFi protocols recognize these SBTs as KYC proof. This lets institutions interact directly with DeFi without intermediate custodians. For example, a pension fund can verify it has institutional SBTs and access prime brokerage-level interest rates on Lido or Aave. By 2026, onchain identity is becoming the bridge between traditional finance and DeFi — it lets institutions prove their legitimacy without trusting centralized intermediaries.
          </p>

          {/* Pro Tip Box */}
          <div
            style={{ backgroundColor: '#161b22', borderColor: '#3fb950', borderLeftWidth: '4px' }}
          >
            <h4 className="font-bold mb-2" style={{ color: '#3fb950' }}>💡 Pro Tip: Build Your Onchain Identity Now</h4>
            <p style={{ color: '#8b949e' }}>
              Start with ENS (register at app.ens.domains), then work backward through the stack: accumulate SBTs from courses and communities you participate in, collect EAS attestations by contributing to projects and building relationships, and if privacy isn't a concern, get Proof of Personhood from World ID. The sooner you build your identity, the more opportunities unlock — better lending rates, governance participation, and early access to protocol opportunities.
            </p>
          </div>
        </section>

        {/* Section 7: Privacy Challenges */}
        <section id="section-7" className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#e6edf3' }}>
            7. Privacy Challenges & Solutions 🔐
          </h2>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            The fundamental problem with onchain identity is that "onchain" means public. Every SBT, attestation, and credential linked to your wallet is visible on the blockchain. If someone knows your wallet address and it's linked to your real identity (through Doxing, leaked database, or deliberate doxxing), strangers can see your complete identity history — educational credentials, professional history, financial relationships, and even personal achievements. For many people, this level of transparency is uncomfortable or dangerous.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            Solutions are emerging. Zero-knowledge proofs (ZK proofs) are the most elegant: they let you prove that you have a certain credential ("I have a degree from MIT," "I have KYC verification") without revealing which specific credential or which institution issued it. You prove the fact without revealing the details. By 2026, major protocols are integrating ZK attestations — you can prove you passed KYC without a lender seeing which jurisdiction verified you, or prove you have a degree without revealing your university.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            Another approach is selective disclosure. Instead of all your SBTs being public, you control which ones are visible. Social profiles might show only your "Developer" SBT and "DAO Contributor" SBT, while hiding your educational history or employment record. Technical platforms might display your "Smart Contract Auditor" SBT and certifications but hide your financial credentials. This puts you in control of your narrative — you decide what part of your identity to present to the world.
          </p>

          <p className="mb-6 leading-relaxed" style={{ color: '#e6edf3' }}>
            The most practical approach right now is wallet separation: use one wallet for your doxxed identity (professional reputation, credentials, governance participation) and a separate anonymous wallet for privacy-sensitive transactions (trading, swapping, exploring experimental protocols). Your doxxed wallet accumulates SBTs and attestations from institutions, while your anonymous wallet stays pseudonymous. By 2026, sophisticated users maintain multiple identity profiles and know when to use which one.
          </p>
        </section>

        {/* Section 8: The Future */}
        <section id="section-8" className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#e6edf3' }}>
            8. The Future of Onchain Identity 🔮
          </h2>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            By 2026, onchain identity is becoming the central infrastructure for Web3. All the pieces — ENS, SBTs, attestations, and proof of personhood — are converging into a coherent system. The most sophisticated DAOs weight governance by identity (not just token holdings). The best lending protocols offer rates based on credit scores built from onchain history. Institutional users are accessing DeFi through verified institutional identity. The era of pseudonymous, reputation-less Web3 is giving way to a system where identity and reputation matter.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            <strong>Institutional Adoption:</strong> Banks and traditional finance institutions are expected to heavily integrate onchain identity by 2027-2028. Imagine your bank issuing you an SBT proving you're a customer, regulators issuing SBTs proving you've passed AML/KYC, and your investment advisor issuing attestations about your risk profile. These institutional credentials will become the primary way that traditional finance interacts with DeFi. The friction between CeFi and DeFi — "how does a bank lend to a pseudonymous address?" — is solved by institutional onchain identity.
          </p>

          <p className="mb-4 leading-relaxed" style={{ color: '#e6edf3' }}>
            <strong>Privacy & ZK Integration:</strong> Expect massive progress in zero-knowledge proofs for identity. By 2028, the leading protocols will support ZK proofs for all identity claims — prove you're human without revealing biometric data, prove you passed KYC without revealing your personal information, prove you have a degree without doxxing yourself. This convergence of identity and privacy is essential for mainstream adoption — people want to build reputation without sacrificing privacy.
          </p>

          <p className="mb-6 leading-relaxed" style={{ color: '#e6edf3' }}>
            <strong>Regulatory Implications:</strong> Governments are watching onchain identity closely. The EU's upcoming regulations on digital identity expect decentralized identity infrastructure. Regulators like the SEC are exploring how onchain identity could simplify compliance and KYC. If handled well, onchain identity could be the bridge between Web3 and regulation — transparent enough for regulators to verify compliance, private enough for users to protect their data. But if mishandled, onchain identity could become a tool for mass surveillance. The next 2-3 years will be critical in determining which direction we move.
          </p>
        </section>

        {/* FAQ Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#e6edf3' }}>
            Frequently Asked Questions ❓
          </h2>
          <div className="space-y-3">
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className="border rounded-lg overflow-hidden"
                style={{ borderColor: '#30363d' }}
              >
                <div
                  style={{
                    padding: '16px',
                    backgroundColor: '#161b22',
                    color: '#e6edf3',
                    fontWeight: 600,
                    fontSize: '16px',
                  }}
                >
                  {item.question}
                </div>
                <div
                  style={{
                    padding: '0 16px 16px',
                    backgroundColor: '#161b22',
                    color: '#8b949e',
                    fontSize: '15px',
                    lineHeight: '1.6',
                  }}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Related Articles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6" style={{ color: '#e6edf3' }}>
            📚 Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedArticles.map((article, idx) => (
              <Link href={article.href}
                key={idx}
                className="p-4 rounded-lg border transition hover:border-opacity-100"
                style={{
                  backgroundColor: '#161b22',
                  borderColor: '#30363d',
                  color: '#58a6ff'
                }}
              >
                <div className="font-semibold mb-1">{article.title}</div>
                <div style={{ color: '#8b949e' }} className="text-sm">
                  Continue learning →
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div
          className="rounded-lg p-6 border-t"
          style={{
            backgroundColor: '#161b22',
            borderColor: '#30363d',
            borderTopWidth: '2px'
          }}
        >
          <h3 className="font-bold mb-2" style={{ color: '#e6edf3' }}>
            📋 Disclaimer
          </h3>
          <p style={{ color: '#8b949e' }} className="text-sm">
            This guide is for educational purposes only and should not be considered investment advice or financial guidance. Onchain identity is a rapidly evolving field, and the information here reflects the state of technology as of March 2026. Always do your own research, verify current information before making decisions, and consult professionals for financial, legal, or security questions. The technology and platforms mentioned are subject to rapid change, bugs, and regulatory updates.
          </p>
        </div>
      </div>

      <BackToTop />
    </main>
  );
}
