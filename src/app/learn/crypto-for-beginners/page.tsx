import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution from "@/components/AuthorAttribution";

export const metadata: Metadata = {
  title: 'Crypto for Beginners: Start-Here Guide (2026) | degen0x',
  description: 'A safe, no-hype guide for crypto beginners: what crypto actually is, how to buy your first coin, how to set up a wallet, common scams, tax basics, and a simple starter portfolio. Updated for April 2026.',
  keywords: ['crypto for beginners', 'crypto beginner guide', 'how to start in crypto', 'crypto basics', 'first crypto purchase', 'beginner crypto portfolio', 'crypto safety', 'crypto scams'],
  openGraph: {
    type: 'article',
    title: 'Crypto for Beginners: Start-Here Guide (2026)',
    description: 'A safe, no-hype starter guide: what crypto is, how to buy, how to store, how not to get scammed.',
    publishedTime: '2026-04-14T00:00:00Z',
    modifiedTime: '2026-04-14T00:00:00Z',
    url: 'https://degen0x.com/learn/crypto-for-beginners',
    images: [{ url: 'https://degen0x.com/og-learn.svg', width: 1200, height: 630, alt: 'Crypto for Beginners 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crypto for Beginners: Start-Here Guide (2026)',
    description: 'Safe starter guide: what crypto is, how to buy, store, and avoid scams.',
    images: ['https://degen0x.com/og-learn.svg'],
  },
  alternates: { canonical: 'https://degen0x.com/learn/crypto-for-beginners' },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Crypto for Beginners: Start-Here Guide (2026)',
  description: 'Beginner guide to crypto: basics, first purchase, wallets, safety, scams, taxes, and a simple starter portfolio.',
  image: 'https://degen0x.com/og-learn.svg',
  datePublished: '2026-04-14',
  dateModified: '2026-04-14',
  author: { '@type': 'Organization', name: 'degen0x' },
  publisher: { '@type': 'Organization', name: 'degen0x', logo: { '@type': 'ImageObject', url: 'https://degen0x.com/logo.png' } },
  mainEntityOfPage: { '@type': 'WebPage', '@id': 'https://degen0x.com/learn/crypto-for-beginners' },
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much money should I start with in crypto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start with an amount you would be fine losing entirely — for most people that is $50 to a few hundred dollars. The goal of your first purchase is not profit, it is learning the process: buying, custody, and sending without mistakes. A common rule among prudent investors is to cap total crypto exposure at 1–5% of net worth, and only increase it after you have lived through a drawdown and kept your head.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I buy Bitcoin or altcoins first?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bitcoin and Ethereum are the two most battle-tested assets and are appropriate for most beginners. They have the deepest liquidity, the most regulatory clarity in major jurisdictions, and the longest track record. Altcoins can offer more upside but also carry more risk — most coins launched this cycle will not exist in three years. Learn on BTC/ETH before you branch out.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the safest way to store crypto as a beginner?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For small amounts you are actively using, a reputable exchange like Coinbase, Kraken, or Binance is fine. For amounts you plan to hold, move them to a self-custody wallet. A hardware wallet (Ledger, Trezor) is the gold standard: your private keys never touch the internet. Write your seed phrase on paper or metal, store it somewhere only you know, and never type it into a website or share it with anyone — including "support" staff.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most common scams beginners fall for?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Five show up constantly. Impersonation: fake "support" DMs on Twitter, Discord, or Telegram asking for your seed phrase — real support never will. Giveaways: Elon/Vitalik/etc promising to double your crypto. Approve-all traps: malicious token approvals that drain your wallet after you connect. Romance/pig-butchering scams that move you to a fake trading platform. Rug pulls: freshly launched tokens whose devs drain liquidity. Rule of thumb: nobody online is giving away free money, and anyone asking for your seed phrase is stealing from you.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I owe taxes when I buy crypto?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the US and most major jurisdictions, simply buying crypto with fiat is not a taxable event. Selling, swapping one token for another, or earning staking/yield rewards is. Keep records of every transaction (exchanges usually provide exports), and consider a tracker like Koinly or CoinTracker once you have more than a handful of trades. Tax rules differ by country; check your local guidance or consult a professional before filing.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a sensible beginner portfolio?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A common starter split for someone putting in money they can afford to lose: 50% Bitcoin, 30% Ethereum, 10% stablecoin earning yield, 10% one or two higher-conviction altcoins you have researched yourself. This is not investment advice, just a reasonable template that emphasizes the most-proven assets. Dollar-cost averaging (buying a fixed amount weekly/monthly) tends to beat trying to time entries for most beginners.',
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

export default function CryptoForBeginnersPage() {
  const tableOfContents = [
    { id: 'what-is-crypto', title: 'What Crypto Actually Is' },
    { id: 'before-you-buy', title: 'Before You Buy Anything' },
    { id: 'first-purchase', title: 'Your First Purchase, Step by Step' },
    { id: 'wallets-storage', title: 'Wallets and Storage' },
    { id: 'safety', title: 'Safety: Scams to Avoid' },
    { id: 'starter-portfolio', title: 'A Sensible Starter Portfolio' },
    { id: 'taxes', title: 'Taxes in a Nutshell' },
    { id: 'next-steps', title: 'Where to Go Next' },
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
          <span style={{ color: '#c9d1d9' }}>Crypto for Beginners</span>
        </nav>

        <div style={{ marginBottom: 32 }}>
          <span style={{ ...badgeStyle, background: '#10b981', color: '#00150a' }}>Start Here</span>
          <span style={{ ...badgeStyle, background: '#3d444d', color: '#e6edf3' }}>Beginner</span>
          <h1 style={h1Style}>Crypto for Beginners: A Start-Here Guide for 2026</h1>
          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            If you have never bought crypto, the single best thing you can do is move slowly and keep the first dollar amount small. The goal of your first month is not profit — it is to learn the mechanics (buying, storing, sending) without making an expensive mistake. This guide walks you through what crypto actually is, how to set up your first exchange account and wallet, which scams catch nearly every newcomer, a simple starter portfolio, and tax basics. No hype, no shilling, no "this coin will 100x." Just a safe on-ramp.
          </p>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 14, 2026</span>
            <span>Reading time: 16 min</span>
          </div>
        </div>

        <AuthorAttribution author="DegenSensei" role="Content Lead" publishedDate="2026-04-14" updatedDate="2026-04-14" readingTime={16} section="learn" />

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

        <section id="what-is-crypto" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>What Crypto Actually Is</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Cryptocurrency is digital money that lives on a blockchain — a shared, tamper-evident database maintained by a network of independent computers rather than a single bank or company. Bitcoin was the first and remains the most widely held. Ethereum added programmability, which is why most of today's on-chain applications (lending, DEXs, NFTs, stablecoin payments) run there or on an Ethereum-compatible chain.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            The two things to internalize before you buy anything: <strong>you are responsible for your own keys</strong> (lose them and the coins are gone; no one can restore them), and <strong>transactions are final</strong> (send to the wrong address and there is no "bank transfer reversal"). These are also the features that make crypto interesting — just respect them.
          </p>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            If the underlying tech interests you, our <Link href="/learn/what-is-blockchain" style={linkStyle}>what is blockchain</Link> guide walks through how it works in plain English.
          </p>
        </section>

        <section id="before-you-buy" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Before You Buy Anything</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Three questions to settle before your first purchase:
          </p>
          <ol style={{ marginLeft: 20, lineHeight: 1.9, marginBottom: 16 }}>
            <li><strong>Can I afford to lose this money?</strong> Crypto markets routinely move 30–80% during cycles. Only deploy capital you do not need for expenses, emergencies, or near-term goals.</li>
            <li><strong>What is my time horizon?</strong> Buying for a 5+ year hold is a different plan than trading weekly. Most beginners who do well are holders, not traders.</li>
            <li><strong>How will I feel if this drops 50%?</strong> If the answer is "terrified," your position is too large. Size down until a drawdown would be merely annoying, not life-altering.</li>
          </ol>
        </section>

        <section id="first-purchase" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Your First Purchase, Step by Step</h2>
          <ol style={{ marginLeft: 20, lineHeight: 1.9, marginBottom: 16 }}>
            <li><strong>Pick a reputable exchange.</strong> Coinbase and Kraken are the most beginner-friendly in the US. In Europe, Kraken and Bitstamp. Globally, Binance and OKX have the most altcoins. See our <Link href="/exchanges" style={linkStyle}>exchange reviews</Link> for detailed comparisons.</li>
            <li><strong>Complete KYC.</strong> Upload ID, take a selfie. This is required on any regulated exchange. Expect approval in minutes to a day.</li>
            <li><strong>Fund your account.</strong> Bank transfer (ACH in US, SEPA in EU) has the lowest fees. Debit card is faster but expensive.</li>
            <li><strong>Buy BTC or ETH.</strong> Skip the exotic coins for the first purchase. A simple spot buy on the exchange is the cleanest option.</li>
            <li><strong>Turn on 2FA.</strong> Use an authenticator app (Aegis, Google Authenticator, 1Password) — not SMS, which can be SIM-swapped.</li>
            <li><strong>Consider withdrawing to your own wallet</strong> once you have more than a few hundred dollars (see next section).</li>
          </ol>
        </section>

        <section id="wallets-storage" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Wallets and Storage</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            "Not your keys, not your coins" is a real lesson. Exchanges have failed before (FTX, Mt. Gox) and customers with funds on them lost access. For beginners, the sensible tiering is:
          </p>
          <ul style={{ marginLeft: 20, lineHeight: 1.9, marginBottom: 16 }}>
            <li><strong>Trading float on an exchange</strong>: fine for what you are actively buying/selling.</li>
            <li><strong>Hot wallet on your phone/desktop</strong>: MetaMask, Rabby, Phantom, Coinbase Wallet for small amounts you interact with on-chain.</li>
            <li><strong>Hardware wallet (cold storage)</strong>: Ledger Nano X, Trezor Safe 5, or similar for the bulk of your holdings. Keys never touch the internet.</li>
          </ul>
          <div style={infoBoxStyle}>
            <strong style={{ color: '#a78bfa' }}>Seed phrase rule:</strong> Every self-custody wallet gives you a 12 or 24 word recovery phrase. Write it on paper or a metal plate. Never type it into any website. Never photograph it. Never store it in a cloud notes app. Anyone who has it has your coins.
          </div>
        </section>

        <section id="safety" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Safety: Scams to Avoid</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Almost every beginner loss comes from a handful of scams. Learn to spot them:
          </p>
          <ul style={{ marginLeft: 20, lineHeight: 1.9, marginBottom: 16 }}>
            <li><strong>Impersonation:</strong> Fake "support" DMs on Discord, Telegram, Twitter. Real support never DMs you first and never asks for your seed phrase.</li>
            <li><strong>Giveaway scams:</strong> "Send 1 ETH, get 2 back" — a classic, and still working because new users keep arriving. Zero legitimate projects double crypto for free.</li>
            <li><strong>Approve-all traps:</strong> Malicious dapps request "infinite approval" on a token and then drain your wallet minutes later. Revoke unused approvals at <a href="https://revoke.cash" target="_blank" rel="noopener noreferrer" style={linkStyle}>revoke.cash</a>.</li>
            <li><strong>Pig-butchering:</strong> A stranger on a dating or messaging app slowly builds rapport, then gets you to deposit on a fake "trading platform." The platform shows gains, withdrawal fails, then it disappears.</li>
            <li><strong>Rug pulls:</strong> A token launches with hype, the team owns most supply, dumps, and the chart goes to zero. If a project's token distribution is opaque, assume the worst.</li>
          </ul>
        </section>

        <section id="starter-portfolio" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>A Sensible Starter Portfolio</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            There is no single "right" allocation, but a common, conservative beginner template looks like this:
          </p>
          <ul style={{ marginLeft: 20, lineHeight: 1.9, marginBottom: 16 }}>
            <li><strong>50% Bitcoin</strong> — the most liquid, most regulated, longest-track-record crypto asset.</li>
            <li><strong>30% Ethereum</strong> — the largest smart-contract platform, central to DeFi and stablecoins.</li>
            <li><strong>10% stablecoin (USDC)</strong> — dry powder for dips, earning modest yield in a reputable venue.</li>
            <li><strong>10% one or two altcoins you have researched</strong> — optional; only after reading the project's documentation, not because someone on Twitter said so.</li>
          </ul>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Dollar-cost averaging (buying a fixed amount on a fixed schedule) tends to beat trying to time entries. Automate it if you can.
          </p>
        </section>

        <section id="taxes" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Taxes in a Nutshell</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            In the US and most major jurisdictions, buying crypto with fiat is not a taxable event. Selling, swapping one token for another, or earning rewards usually is. Keep records from day one — exchanges offer CSV exports, and trackers like Koinly, CoinTracker, and Recap aggregate across wallets. Tax rules vary by country; this is general information, not personalized advice. If your activity gets complex, a crypto-literate accountant pays for itself. See our <Link href="/taxes" style={linkStyle}>tax guides section</Link> for country-specific detail.
          </p>
        </section>

        <section id="next-steps" style={{ scrollMarginTop: 24 }}>
          <h2 style={h2Style}>Where to Go Next</h2>
          <p style={{ marginBottom: 16, lineHeight: 1.8 }}>
            Once you have a wallet, some crypto, and a few months of watching price action without panic-selling, you can graduate to the next layer: understanding DeFi, trying a small staking position, or exploring NFTs. Take it in order; skipping steps is how beginners get hurt.
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
            <li><Link href="/learn/what-is-blockchain" style={linkStyle}>What Is Blockchain? Plain-English Guide</Link></li>
            <li><Link href="/learn/what-is-web3" style={linkStyle}>What Is Web3? Practical Guide</Link></li>
            <li><Link href="/learn/how-to-buy-bitcoin-step-by-step" style={linkStyle}>How to Buy Bitcoin Step by Step</Link></li>
            <li><Link href="/learn/what-is-a-stablecoin-guide" style={linkStyle}>What Is a Stablecoin?</Link></li>
          </ul>
        </section>
      </main>
    </>
  );
}
