import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: 'Crypto Wallet Types Explained 2026: Hot, Cold, Smart, MPC | degen0x',
  description: 'Compare all crypto wallet types: hot wallets (MetaMask, Phantom), cold wallets (Ledger, Trezor), smart contract wallets (Safe, Argent), MPC wallets. Security, convenience, costs.',
  keywords: ['crypto wallet types', 'hot wallet', 'cold wallet', 'hardware wallet', 'MetaMask', 'Ledger', 'Phantom', 'Safe wallet', 'smart contract wallet', 'MPC wallet'],
  openGraph: {
    type: 'article',
    title: 'Crypto Wallet Types Explained 2026: Hot, Cold, Smart, MPC',
    description: 'Compare all crypto wallet types: hot wallets (MetaMask, Phantom), cold wallets (Ledger, Trezor), smart contract wallets (Safe, Argent), MPC wallets. Security, convenience, costs.',
    publishedTime: '2026-04-10T00:00:00Z',
    modifiedTime: '2026-04-10T00:00:00Z',
    url: 'https://degen0x.com/learn/crypto-wallet-types-explained',
    images: [{
      url: 'https://degen0x.com/og-learn.svg',
      width: 1200,
      height: 630,
      alt: 'Crypto Wallet Types',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto Wallet Types Explained 2026: Hot, Cold, Smart, MPC',
    description: 'Compare all crypto wallet types: hot wallets (MetaMask, Phantom), cold wallets (Ledger, Trezor), smart contract wallets (Safe, Argent), MPC wallets. Security, convenience, costs.',
    image: 'https://degen0x.com/og-learn.svg',
  },
,
  alternates: {
    canonical: 'https://degen0x.com/learn/crypto-wallet-types-explained',
  }};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto Wallet Types Explained 2026: Hot, Cold, Smart, MPC',
  description: 'Compare all crypto wallet types: hot wallets (MetaMask, Phantom), cold wallets (Ledger, Trezor), smart contract wallets (Safe, Argent), MPC wallets. Security, convenience, costs.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-10',
  dateModified: '2026-04-10',
  author: { '@type': 'Organization', name: 'degen0x' },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What are the main types of crypto wallets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hot wallets (online, convenient, higher risk): MetaMask, Phantom, Rainbow, Coinbase Wallet. Cold wallets (offline, secure, less convenient): Ledger ($119), Trezor ($99), paper wallets. Smart contract wallets (Safe, Argent): multiple signatures, social recovery. MPC wallets (Threshold, Fireblocks): distributed keys. Each has security/convenience tradeoff.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between hot and cold wallets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Hot wallets are connected to internet: easy to use, high risk of hacks. Cold wallets are offline: secure but inconvenient (must plug in, confirm transactions). For large amounts ($10K+), use cold wallets. For frequent trading, use hot wallets. Best practice: split assets 80/20 (80% cold, 20% hot).',
        },
      },
      {
        '@type': 'Question',
        name: 'How do smart contract wallets work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Safe (formerly Gnosis): deploy multi-sig contract requiring 2-of-3 signatures to approve txns. Argent: smart contract wallet with social recovery (prove identity via friends). Benefits: account recovery (unlike EOA wallets), customizable security. Cost: gas fees for deployment + txn fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is MPC (Multi-Party Computation)?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MPC splits private key across multiple parties/devices. No single point of failure. Example: Fireblocks stores 1/3 of key with you, 1/3 in cloud, 1/3 with Fireblocks. Need 2/3 to sign txn. More secure than single private key. Used by institutions (billions in AUM).',
        },
      },
      {
        '@type': 'Question',
        name: 'Is MetaMask safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'MetaMask is reasonably safe if you: (1) never share seed phrase, (2) verify addresses on every txn, (3) use hardware wallet connection (Ledger+MetaMask combo). Risks: phishing, malicious dapps, browser extensions. Store >$50K elsewhere.',
        },
      },
      {
        '@type': 'Question',
        name: 'Should I use paper wallets?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Paper wallets are ultra-secure (offline, no hacks possible). But they\'re fragile (fire, water, loss). Used for long-term cold storage only (hodl forever). Not practical for active traders. Better alternative: Ledger or Trezor.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function CryptoWalletTypesExplained() {
  const tableOfContents = [
    { id: 'what-are-wallets', title: 'What Are Crypto Wallets?' },
    { id: 'hot-wallets', title: 'Hot Wallets: MetaMask, Phantom, Rainbow' },
    { id: 'cold-wallets', title: 'Cold Wallets: Ledger, Trezor, Hardware' },
    { id: 'smart-contract-wallets', title: 'Smart Contract Wallets: Safe, Argent' },
    { id: 'mpc-wallets', title: 'MPC Wallets: Distributed Keys' },
    { id: 'custodial-vs-noncustodial', title: 'Custodial vs. Non-Custodial' },
    { id: 'seed-phrases', title: 'Seed Phrases & Private Key Management' },
    { id: 'wallet-comparison', title: 'Wallet Comparison Table' },
    { id: 'security-best-practices', title: 'Security Best Practices' },
    { id: 'wallet-selection', title: 'How to Choose a Wallet' },
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
          <span style={{ color: '#c9d1d9' }}>Crypto Wallet Types</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#6366f1', color: '#fff' }}>Learn</span>
            <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Beginner</span>
          </div>
          <h1 style={h1Style}>Crypto Wallet Types Explained 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            There&apos;s no one-size-fits-all crypto wallet. MetaMask dominates hot wallets (30M+ users). Ledger and Trezor lead hardware wallets ($5B+ AUM). Safe is the standard for multi-sig. Phantom commands Solana. This guide covers all wallet types: hot (convenient), cold (secure), smart contract (recoverable), and MPC (institutional). Learn which wallet fits your use case and how to secure your assets.
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

        <section id="what-are-wallets" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>1. What Are Crypto Wallets?</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Crypto wallets store private keys (your password to access funds). They enable you to sign transactions on blockchain. Wallets don&apos;t hold crypto; they hold keys to access crypto. Key types: hot wallets (online, convenient), cold wallets (offline, secure), smart contract wallets (account recovery), MPC wallets (distributed keys). Total wallet users (2026): ~900M. Top wallets: MetaMask, Trust Wallet, Phantom, Ledger Live, Coinbase Wallet.
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
        </section>

        <section id="hot-wallets" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>2. Hot Wallets: MetaMask, Phantom, Rainbow</h2>
          <h3 style={h3Style}>MetaMask - 30M+ Users</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            MetaMask is the leading Ethereum wallet. Browser extension + mobile app. Supports Ethereum, Polygon, Arbitrum, Optimism, Base. Key features: token swaps via 1inch, NFT gallery, hardware wallet connection, staking (Lido). Risk: seed phrase exposed = total loss. Use with Ledger for higher security.
          </p>
          <h3 style={h3Style}>Phantom - 5M+ Solana Users</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Phantom dominates Solana. Browser + mobile. Features: Solana/Ethereum/Polygon/Bitcoin support, in-app swap, staking SOL (3-5% APY), NFT gallery. More user-friendly than MetaMask. Similar security risks.
          </p>
          <h3 style={h3Style}>Rainbow - Designer Wallet</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Rainbow focuses on UX. Mobile + browser. Best for casual users. Features: easy NFT purchases, gas optimization, token swaps. Security: good, but keep amounts small.
          </p>
        </section>

        <section id="cold-wallets" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>3. Cold Wallets: Ledger, Trezor, Hardware</h2>
          <h3 style={h3Style}>Ledger - $119 (Nano S Plus)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Ledger is the leading hardware wallet ($5B+ AUM). Device plugs into computer. You approve transactions on the device (air-gapped). Ledger Live app manages assets. Supports 5,500+ tokens across 30+ chains. Security: unhackable (private key never leaves device). Downside: inconvenient for frequent trading. Update: Ledger faced security concern (2023 firmware vulnerability), fixed in 2024.
          </p>
          <h3 style={h3Style}>Trezor - $99 (Model One)</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Trezor is similar to Ledger. Open-source hardware (Ledger proprietary). Pros: transparent, ethical. Cons: fewer features. Supports 5,000+ tokens. Trezor Suite app. Both Ledger and Trezor are equally safe.
          </p>
        </section>

        <section id="smart-contract-wallets" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>4. Smart Contract Wallets: Safe, Argent</h2>
          <h3 style={h3Style}>Safe (Gnosis) - $12B+ Assets</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Safe is the standard multi-sig wallet. Deploy a smart contract requiring 2-of-3 (or 3-of-5, etc.) signatures to approve transactions. Best for teams, treasuries, institutions. Supports Ethereum, Polygon, Arbitrum, Solana. Cost: 0.1-0.5 ETH to deploy. Annual cost: near-zero. Security: extremely high.
          </p>
          <h3 style={h3Style}>Argent - Social Recovery</h3>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Argent is a smart contract wallet with social recovery. If you lose your key, friends can help you recover. No seed phrase to memorize. Supports Ethereum, Arbitrum. Cost: minimal. Security: high but depends on friends&apos; key security.
          </p>
        </section>

        <section id="mpc-wallets" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>5. MPC Wallets: Distributed Keys</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            MPC (Multi-Party Computation) splits private key across multiple parties. Example: Fireblocks stores 1/3 with you, 1/3 in cloud, 1/3 with Fireblocks. Need 2/3 to sign. Zero single point of failure. Used by institutions ($100B+ AUM). Cost: expensive ($10K+ annually). Overkill for retail, essential for institutions.
          </p>
        </section>

        <section id="custodial-vs-noncustodial" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>6. Custodial vs. Non-Custodial</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Custodial: exchange/platform holds your keys (Coinbase, Kraken). Risk: exchange collapse (FTX 2022), hacks, freezing. Non-custodial: you hold keys (MetaMask, Ledger). Risk: you lose keys. Maxim: "not your keys, not your coins." For amounts &gt;$1K, use non-custodial. For frequent trading: custodial OK.
          </p>
        </section>

        <section id="seed-phrases" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>7. Seed Phrases & Private Key Management</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Seed phrases are 12-24 words generating your private key. If someone gets your seed phrase, they control your funds forever. Best practices: (1) write on paper (not digital), (2) never screenshot, (3) store in safe (physical or safety deposit box), (4) never share, (5) test recovery once per year. Backup your seed phrase.
          </p>
        </section>

        <section id="wallet-comparison" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>8. Wallet Comparison Table</h2>
          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: '1.5rem' }}>
            <table style={tableStyle}>
            <thead>
              <tr>
                <th style={thStyle}>Wallet</th>
                <th style={thStyle}>Type</th>
                <th style={thStyle}>Security</th>
                <th style={thStyle}>Convenience</th>
                <th style={thStyle}>Cost</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={tdStyle}>MetaMask</td>
                <td style={tdStyle}>Hot (browser)</td>
                <td style={tdStyle}>Medium</td>
                <td style={tdStyle}>High</td>
                <td style={tdStyle}>Free</td>
              </tr>
              <tr>
                <td style={tdStyle}>Phantom</td>
                <td style={tdStyle}>Hot (mobile)</td>
                <td style={tdStyle}>Medium</td>
                <td style={tdStyle}>High</td>
                <td style={tdStyle}>Free</td>
              </tr>
              <tr>
                <td style={tdStyle}>Ledger Nano</td>
                <td style={tdStyle}>Cold (hardware)</td>
                <td style={tdStyle}>Very High</td>
                <td style={tdStyle}>Low</td>
                <td style={tdStyle}>$119</td>
              </tr>
              <tr>
                <td style={tdStyle}>Safe</td>
                <td style={tdStyle}>Smart Contract</td>
                <td style={tdStyle}>Very High</td>
                <td style={tdStyle}>Medium</td>
                <td style={tdStyle}>0.1-0.5 ETH</td>
              </tr>
              <tr>
                <td style={tdStyle}>Fireblocks</td>
                <td style={tdStyle}>MPC</td>
                <td style={tdStyle}>Extremely High</td>
                <td style={tdStyle}>Medium</td>
                <td style={tdStyle}>$10K+/year</td>
              </tr>
            </tbody>
          </table>
          </div>
        </section>

        <section id="security-best-practices" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>9. Security Best Practices</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            (1) Use hardware wallet for &gt;$10K. (2) Never share seed phrase. (3) Verify addresses on every transaction (copy-paste errors = loss). (4) Use different passwords for different wallets. (5) Enable 2FA where available. (6) Keep firmware/apps updated. (7) Test recovery process yearly.
          </p>
        </section>

        <section id="wallet-selection" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>10. How to Choose a Wallet</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Amount &lt;$1K: hot wallet (MetaMask, Phantom). Amount $1K-$50K: hot wallet + hardware backup (Ledger connected to MetaMask). Amount &gt;$50K: hardware wallet (Ledger, Trezor). Amount &gt;$10M (institutional): MPC wallet (Fireblocks, Threshold). Teams/DAOs: Safe multi-sig.
          </p>
        </section>

        <section id="faq">
          <h2 style={h2Style}>FAQ</h2>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Is MetaMask safe?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              Yes, if you never share seed phrase and verify addresses. Connect to Ledger for extra security (best practice).
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Can hardware wallets be hacked?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              No. Private key never leaves device. Secure by design (no internet connection). Only risk: you lose the device.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Can I recover a lost seed phrase?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              No. Lost seed phrase = lost funds forever (unless written somewhere). Always backup.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Is Coinbase Wallet custodial?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              No, Coinbase Wallet is non-custodial (you hold keys). But Coinbase Exchange is custodial.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Should I use a VPN with wallets?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              VPN helps hide IP from dapps (privacy). Not required for security if you use hardware wallet.
            </p>
          </div>
          <div style={infoBoxStyle}>
            <h3 style={h3Style}>Can I have multiple wallets?</h3>
            <p style={{ marginBottom: 0, fontSize: 14 }}>
              Yes. Best practice: multiple wallets for different purposes (trading, cold storage, etc.).
            </p>
          </div>
        </section>

        <div style={{ ...infoBoxStyle, marginTop: 48, fontSize: 13, color: '#8b949e' }}>
          <strong>Disclaimer:</strong> This content is for informational purposes only. Wallet security is your responsibility. Lost seed phrases are lost forever. Always test recovery. This is not financial advice.
        </div>
      </div>
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: "24px", background: "#161b22", border: "1px solid #30363d", borderRadius: 12 }>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }>Continue Reading</h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }>
            <li><Link href="/tools/crypto-airdrop-tracker" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Airdrop Tracker</Link></li>
            <li><Link href="/tools/crypto-correlation-matrix" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Correlation Matrix</Link></li>
            <li><Link href="/tools/crypto-exchange-fee-comparison-tool" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Crypto Exchange Fee Tool</Link></li>
            <li><Link href="/tools/altcoin-season-index" style={{ color: "#58a6ff", textDecoration: "none", fontSize: 15 }>Altcoin Season Index</Link></li>
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
