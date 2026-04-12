import { Metadata } from "next";
import Link from "next/link";
import BackToTop from "@/components/BackToTop";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Onchain Order Books & CLOBs Guide 2026 — Central Limit Order Books DEX Trading | degen0x',
  description: 'Complete guide to onchain order books and CLOBs (Central Limit Order Books) for DEX trading in 2026. Learn how dYdX v4, Sei, Orderly Network, and Solana CLOBs work. Compare AMMs vs CLOBs, explore hybrid models, and understand the future of onchain trading.',
  keywords: ['CLOBs', 'central limit order books', 'onchain order books', 'dYdX v4', 'Sei', 'Orderly Network', 'Phoenix DEX', 'OpenBook', 'DEX trading', 'AMM vs CLOB', 'hybrid DEX', 'intent-based trading', 'CoW Protocol'],
  openGraph: {
    type: 'article',
    title: 'Onchain Order Books & CLOBs Guide 2026 | degen0x',
    description: 'Master CLOBs and onchain order books: architecture, AMM comparison, dYdX v4, Sei, Solana CLOBs, and hybrid models. Complete 2026 trading guide.',
    publishedTime: '2026-04-04T00:00:00Z',
    modifiedTime: '2026-04-04T00:00:00Z',
    url: 'https://degen0x.com/learn/onchain-order-books-clob-dex-trading-guide-2026',
    images: [{
      url: 'https://degen0x.com/og-onchain-order-books-2026.svg',
      width: 1200,
      height: 630,
      alt: 'Onchain Order Books & CLOBs Guide 2026',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Onchain Order Books & CLOBs Guide 2026',
    description: 'CLOBs vs AMMs: architecture, capital efficiency, MEV, and the protocols reshaping onchain trading. dYdX v4, Sei, Orderly, Phoenix & more.',
  },
  alternates: {
    canonical: 'https://degen0x.com/learn/onchain-order-books-clob-dex-trading-guide-2026',
  },
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Learn', item: 'https://degen0x.com/learn' },
    { '@type': 'ListItem', position: 3, name: 'Onchain Order Books & CLOBs Guide 2026' },
  ],
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': ['Article', 'FAQPage'],
  headline: 'Onchain Order Books & CLOBs Guide 2026 — Central Limit Order Books for DEX Trading',
  description: 'Complete guide to onchain order books (CLOBs) in 2026. Learn how Central Limit Order Books differ from AMMs, explore dYdX v4, Sei, Orderly, Solana CLOBs, and hybrid models.',
  image: 'https://degen0x.com/og-onchain-order-books-2026.svg',
  datePublished: '2026-04-04',
  dateModified: '2026-04-04',
  author: {
    '@type': 'Organization',
    name: 'degen0x',
  },
  mainEntity: {
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a CLOB and how does it differ from an AMM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A CLOB (Central Limit Order Book) is a matching engine that pairs buy and sell orders at agreed prices, following price-time priority. Users can set limit orders and wait for a match. AMMs (like Uniswap) use mathematical formulas to set prices automatically. CLOBs offer better capital efficiency and tighter spreads for liquid pairs, while AMMs provide passive liquidity and simpler UX. CLOBs require more active management.',
        },
      },
      {
        '@type': 'Question',
        name: 'How does dYdX v4 work as an appchain CLOB?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'dYdX v4 is a sovereign Cosmos appchain dedicated to trading. Validators run a matching engine off-chain to match orders, with on-chain settlement and state commitment. This hybrid approach enables high throughput (100M+ daily volume) while maintaining decentralization through a distributed validator set. The DYDX token governs protocol parameters.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes Sei unique for onchain order books?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Sei is purpose-built for trading with twin-turbo consensus enabling 1-block finality and parallel order execution. Its architecture allows multiple orders to execute simultaneously without contention, eliminating frontrunning of individual orders. Sei v2 adds EVM compatibility for multi-chain composability.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is Orderly Network and how is it hybrid?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Orderly Network is a hybrid CLOB providing a shared order book across multiple chains. Orders are matched off-chain through Orderly nodes, with settlement on NEAR or other blockchains. It offers permissionless access for protocols to launch white-label DEXs while maintaining a unified liquidity pool.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why do CLOBs have MEV exposure but AMMs are less vulnerable?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In CLOBs, the matching engine order matters — a sequencer can reorder transactions to benefit itself or favored participants. In AMMs, prices are determined by formulas, not sequencing order. However, both face MEV risks. Solutions include encrypted mempools, fair ordering services, and protocols like CoW that batch auctions to neutralize MEV.',
        },
      },
      {
        '@type': 'Question',
        name: 'When should I use a CLOB vs an AMM?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Use CLOBs for precise limit orders, tight spreads, and professional trading on deep order books. Use AMMs for casual swaps, passive liquidity provision, and when you want predictable pricing formulas. Hybrid platforms combine both: spot trading via CLOBs, synthetic exposure via AMMs.',
        },
      },
    ],
  },
};

const h1Style: React.CSSProperties = { fontSize: 36, fontWeight: 800, marginBottom: 16, background: 'linear-gradient(135deg, #6366f1, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1.2 };
const h2Style: React.CSSProperties = { fontSize: 24, fontWeight: 700, marginTop: 40, marginBottom: 16, color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12 };
const badgeStyle: React.CSSProperties = { padding: '6px 12px', borderRadius: 6, fontSize: 12, fontWeight: 600, marginRight: 8, marginBottom: 16, display: 'inline-block' };
const infoBoxStyle: React.CSSProperties = { background: '#161b22', border: '1px solid #30363d', borderRadius: 12, padding: 20, marginBottom: 24, lineHeight: 1.8 };


export default function OnchainOrderBooksGuide() {
  const tableOfContents = [
    { id: 'what-are-onchain-order-books', title: 'What Are Onchain Order Books?' },
    { id: 'amms-vs-clobs', title: 'AMMs vs CLOBs: The Core Trade-Off' },
    { id: 'how-clobs-work', title: 'How Onchain CLOBs Work' },
    { id: 'dydx-v4-cosmos', title: 'dYdX v4: The Cosmos Appchain CLOB' },
    { id: 'sei-purpose-built', title: 'Sei: The Order Book Layer 1' },
    { id: 'orderly-hybrid', title: 'Orderly Network: Hybrid CLOB Infrastructure' },
    { id: 'solana-clobs', title: 'Solana CLOBs: Phoenix, Openbook & Beyond' },
    { id: 'hybrid-architectures', title: 'Hybrid Architectures: Best of Both Worlds' },
    { id: 'comparison-table', title: 'CLOB Protocols Comparison Table' },
    { id: 'risks-limitations', title: 'Risks & Limitations' },
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
    fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
    fontWeight: 800,
    marginBottom: 16,
    background: 'linear-gradient(135deg, #6366f1, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  };

  const h2Style = {
    fontSize: 'clamp(1.25rem, 3.5vw, 1.5rem)',
    fontWeight: 700,
    marginTop: 40,
    marginBottom: 16,
    color: '#a78bfa', borderBottom: '2px solid #2d2254', paddingBottom: 12,
  };

  const badgeStyle = {
    display: 'inline-block',
    padding: '8px 14px',
    borderRadius: 6,
    fontSize: 12,
    fontWeight: 600,
    marginRight: 8,
    marginBottom: 16,
  };

  const linkStyle = {
    color: '#58a6ff',
    textDecoration: 'none',
    padding: '2px 0',
  };

  const tocLinkStyle = {
    color: '#58a6ff',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '6px 0',
    minHeight: 44,
  };

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

  const codeStyle = {
    background: '#0d1117',
    border: '1px solid #30363d',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    overflowX: 'auto' as const,
    fontSize: 13,
    lineHeight: 1.5,
    color: '#79c0ff',
    fontFamily: 'monospace',
  };

  return (
    <article id="top" style={{ background: '#0d1117', color: '#e6edf3', minHeight: '100vh', padding: '40px 20px', scrollBehavior: 'smooth' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />

      <style dangerouslySetInnerHTML={{ __html: `
        details[open] > summary span.faq-icon { transform: rotate(45deg); }
        a:focus-visible, summary:focus-visible, button:focus-visible { outline: 2px solid #6366f1; outline-offset: 2px; border-radius: 4px; }
        @media (prefers-reduced-motion: reduce) { * { transition-duration: 0.01ms !important; animation-duration: 0.01ms !important; } }
      ` }} />

      <div style={{ maxWidth: 800, margin: '0 auto' }}>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 20, fontSize: 13, color: '#8b949e' }}>
          <Link href="/" style={{ color: '#8b949e', textDecoration: 'none' }}>Home</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <Link href="/learn" style={{ color: '#8b949e', textDecoration: 'none' }}>Learn</Link>
          <span style={{ margin: '0 6px' }}>›</span>
          <span style={{ color: '#c9d1d9' }}>Onchain Order Books &amp; CLOBs Guide</span>
        </nav>

        {/* Header Section */}
        <div style={{ marginBottom: 32 }}>
          <div>
            <span style={{ ...badgeStyle, background: '#1f6feb', color: '#e6edf3' }}>DEX Trading</span>
            <span style={{ ...badgeStyle, background: '#6e40c9', color: '#e6edf3' }}>Advanced</span>
            <span style={{ ...badgeStyle, background: '#05a74020', color: '#05a740', border: '1px solid #05a74040' }}>Architecture</span>
          </div>

          <h1 style={h1Style}>Onchain Order Books &amp; CLOBs Guide 2026</h1>

          <p style={{ fontSize: 16, color: '#8b949e', marginBottom: 20 }}>
            Onchain order books and Central Limit Order Books (CLOBs) represent a fundamental alternative to Automated Market Makers. Instead of bonding curves and liquidity pools, CLOBs match buyers and sellers directly through order matching engines. This guide explores how CLOBs work, compares them to AMMs, examines leading protocols like dYdX v4, Sei, Orderly Network, and Solana CLOBs, and reveals why the future of DEX trading may require both models coexisting.
          </p>

          <div style={{ display: 'flex', gap: 24, fontSize: 14, color: '#8b949e', marginBottom: 24 }}>
            <span>Updated: April 4, 2026</span>
            <span>Reading time: 16 min</span>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-04"
          updatedDate="2026-04-04"
          readingTime={16}
          section="learn"
        />


        {/* Table of Contents */}
        <nav aria-label="Table of Contents" style={{ ...infoBoxStyle, marginBottom: 32 }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Table of Contents</h3>
          <ol style={{ margin: 0, paddingLeft: 20, lineHeight: 2.4, color: '#8b949e', fontSize: 14 }}>
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`} style={tocLinkStyle}>{item.title}</a>
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Section 1: What Are Onchain Order Books ── */}
        <section id="what-are-onchain-order-books" style={{ marginBottom: 40, scrollMarginTop: 20 }}>
          <h2 style={h2Style}>1. What Are Onchain Order Books?</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            An onchain order book is a collection of buy and sell orders stored on the blockchain, ranked by price and creation time. When a buy order matches a sell order at the same price, the orders execute instantly. This is the opposite of Automated Market Makers (AMMs), which use formulas to determine prices without requiring counterparties to explicitly agree.
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

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Central Limit Order Books (CLOBs) specifically use price-time priority: orders at better prices execute first, and orders at the same price execute in the order they were placed. This is identical to how traditional finance equity exchanges work. The advantage is predictability and capital efficiency — limit orders sit passively, only executing when conditions are met.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            For much of blockchain&apos;s history, CLOBs were dismissed as infeasible onchain because matching engines require complex state management and fast execution. However, new approaches have emerged: sovereign appchains like dYdX v4 run matching off-chain with validators, Solana leverages its throughput for onchain matching, and hybrid models like Orderly settle cross-chain while maintaining unified liquidity.
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#06b6d4', marginBottom: 10 }}>CLOB Terminology</h3>
            <div style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 8 }}><strong>Limit Order:</strong> An order to buy or sell at a specific price or better. Executes when a matching counterparty arrives.</p>
              <p style={{ marginBottom: 8 }}><strong>Market Order:</strong> An order to buy or sell immediately at the best available price. Matches instantly against existing limit orders.</p>
              <p style={{ marginBottom: 8 }}><strong>Price-Time Priority:</strong> Orders at better prices execute first; among orders at the same price, earlier orders execute first.</p>
              <p style={{ marginBottom: 8 }}><strong>Order Book:</strong> The list of all active buy (bid) and sell (ask) orders, ranked by price and time.</p>
              <p style={{ marginBottom: 0 }}><strong>Matching Engine:</strong> The system component responsible for pairing buy and sell orders and executing trades.</p>
            </div>
          </div>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The onchain order book revolution has enabled new trading paradigms, professional-grade features like limit orders and post-only orders, and significantly tighter spreads on liquid pairs. However, they also introduce challenges: liquidity fragmentation across chains, sequencing MEV, and higher complexity for casual users.
          </p>
        </section>

        {/* ── Section 2: AMMs vs CLOBs ── */}
        <section id="amms-vs-clobs" style={{ marginBottom: 40, scrollMarginTop: 20 }}>
          <h2 style={h2Style}>2. AMMs vs CLOBs: The Core Trade-Off</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            AMMs and CLOBs represent two philosophies for onchain trading. Understanding their trade-offs is essential for selecting the right venue or protocol for your needs.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Automated Market Makers (AMMs)</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            AMMs use mathematical formulas (bonding curves) to set prices. The most common formula is x × y = k (Uniswap), where x and y are reserve amounts. Prices adjust automatically based on trade size and pool ratios. Liquidity providers deposit both assets into a pool and earn fees from traders. There&apos;s no matching step — any trade executes instantly at the formula-determined price.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Advantages of AMMs: simple UX, passive liquidity (LPs deposit once and earn fees), permissionless (any token pair can be created), and no latency/matching delays. Disadvantages: slippage on large trades, capital inefficiency (much of the pool sits unused), impermanent loss for LPs, and worse pricing than tight order books.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Central Limit Order Books (CLOBs)</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            CLOBs rely on explicit orders from market makers and traders. A limit order sits in the book until filled. Market orders execute immediately against the best bid/ask. This model requires active participation from market makers but offers superior pricing, tighter spreads, and capital efficiency.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Advantages of CLOBs: tight spreads, no slippage (you know your fill price), better capital efficiency for market makers, and professional trading features (limit orders, stop orders). Disadvantages: requires active market maker participation, less passive for LPs (market making is competitive), potential liquidity fragmentation across chains, and MEV exposure from sequencing.
          </p>

          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: 24 }}>
            <table style={tableStyle} aria-label="AMM vs CLOB Comparison">
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Metric</th>
                  <th style={thStyle} scope="col">AMM (e.g., Uniswap)</th>
                  <th style={thStyle} scope="col">CLOB (e.g., dYdX v4)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>Price Discovery</td>
                  <td style={tdStyle}>Formula-based (x × y = k)</td>
                  <td style={tdStyle}>Supply &amp; demand (order book)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Capital Efficiency</td>
                  <td style={tdStyle}>Low (50%+ of reserves unused)</td>
                  <td style={tdStyle}>High (most LP capital deployed)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Slippage on Large Trades</td>
                  <td style={tdStyle}>High (exponential)</td>
                  <td style={tdStyle}>Low (if book is deep)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Spreads</td>
                  <td style={tdStyle}>Wide (1-100 bps typical)</td>
                  <td style={tdStyle}>Tight (0.1-10 bps on liquid pairs)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>LP Complexity</td>
                  <td style={tdStyle}>Simple (deposit, earn)</td>
                  <td style={tdStyle}>Complex (active market making)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Impermanent Loss</td>
                  <td style={tdStyle}>Significant</td>
                  <td style={tdStyle}>Low (if spreads &gt; price volatility)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>MEV Exposure</td>
                  <td style={tdStyle}>Sandwich attacks common</td>
                  <td style={tdStyle}>Sequencing MEV (order matching)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>UX Complexity</td>
                  <td style={tdStyle}>Simple (one-click swap)</td>
                  <td style={tdStyle}>Advanced (order management)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#06b6d4', marginBottom: 10 }}>The Hybrid Future</h3>
            <div style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 0 }}>Leading protocols recognize that both models solve different problems. dYdX v4 supports both CLOBs and perpetual futures (leveraged). Sei hosts CLOBs for spot trading but enables AMM modules for other assets. The future is likely segmented: professional traders use CLOBs, casual users prefer AMM simplicity, and protocols offer both.</p>
            </div>
          </div>
        </section>

        {/* ── Section 3: How Onchain CLOBs Work ── */}
        <section id="how-clobs-work" style={{ marginBottom: 40, scrollMarginTop: 20 }}>
          <h2 style={h2Style}>3. How Onchain CLOBs Work</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Building a functional CLOB onchain requires solving several technical challenges: how to store the order book efficiently, how to match orders quickly, how to settle atomically, and how to handle the throughput demands of a global order book.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Matching Engine Architecture</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            A CLOB matching engine receives orders (either as transactions for onchain matching or as signed messages for off-chain matching) and pairs them using price-time priority. When a new order arrives, the engine scans the order book:
          </p>

          <ol style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16, paddingLeft: 24 }}>
            <li style={{ marginBottom: 12 }}>If it&apos;s a market buy order, match against the lowest priced sell orders until filled or the book is exhausted.</li>
            <li style={{ marginBottom: 12 }}>If it&apos;s a limit buy order above the current ask, match against asks, then place the remaining order in the book.</li>
            <li style={{ marginBottom: 12 }}>If it doesn&apos;t match, add it to the order book in its appropriate price level.</li>
          </ol>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The challenge is speed and state management. Traditional blockchains process transactions sequentially; checking and updating an entire order book for each transaction is slow. Solutions vary by protocol:
          </p>

          <ul style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16, paddingLeft: 24 }}>
            <li style={{ marginBottom: 12 }}><strong>Appchain approach (dYdX v4):</strong> Validators cooperatively run the matching engine off-chain, then submit matched results + proof to the chain for settlement.</li>
            <li style={{ marginBottom: 12 }}><strong>High-throughput approach (Solana):</strong> Use the blockchain&apos;s native parallelization to process multiple orders simultaneously without contention.</li>
            <li style={{ marginBottom: 12 }}><strong>Hybrid approach (Orderly):</strong> Orders are matched by a decentralized network of nodes off-chain, then settled on the blockchain.</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Order Types</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Modern CLOBs support multiple order types beyond basic buy/sell:
          </p>

          <ul style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16, paddingLeft: 24 }}>
            <li style={{ marginBottom: 12 }}><strong>Limit orders:</strong> Buy or sell at a specific price or better.</li>
            <li style={{ marginBottom: 12 }}><strong>Market orders:</strong> Buy or sell immediately at the best available price.</li>
            <li style={{ marginBottom: 12 }}><strong>Post-only orders:</strong> Only add liquidity to the book; never cross the spread to take liquidity.</li>
            <li style={{ marginBottom: 12 }}><strong>Immediate-or-Cancel (IOC):</strong> Execute immediately; cancel any unfilled portion.</li>
            <li style={{ marginBottom: 12 }}><strong>Fill-or-Kill (FOK):</strong> Execute fully or cancel entirely; no partial fills.</li>
            <li style={{ marginBottom: 12 }}><strong>Stop orders:</strong> Trigger execution when price reaches a threshold (useful for risk management).</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Settlement &amp; Atomicity</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Once orders match, settlement must be atomic: both sides must exchange assets simultaneously. Onchain CLOBs handle this by:
          </p>

          <ul style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16, paddingLeft: 24 }}>
            <li style={{ marginBottom: 12 }}>Using smart contracts to escrow assets before matching.</li>
            <li style={{ marginBottom: 12 }}>Executing transfers within a single transaction or atomic batch.</li>
            <li style={{ marginBottom: 12 }}>For hybrid models, using bridge contracts to handle cross-chain settlement.</li>
          </ul>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Throughput Challenge</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Traditional blockchains process hundreds to thousands of transactions per second. A liquid CLOB can receive millions of orders per second globally. Solutions include:
          </p>

          <ul style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16, paddingLeft: 24 }}>
            <li style={{ marginBottom: 12 }}><strong>Dedicated blockchains (appchains):</strong> Devote all block space to order matching.</li>
            <li style={{ marginBottom: 12 }}><strong>Parallel execution:</strong> Process orders for different trading pairs in parallel without contention.</li>
            <li style={{ marginBottom: 12 }}><strong>Off-chain matching:</strong> Match orders off-chain, settle periodically or atomically onchain.</li>
            <li style={{ marginBottom: 12 }}><strong>Batching:</strong> Group multiple orders and settle in batches to reduce transaction overhead.</li>
          </ul>
        </section>

        {/* ── Section 4: dYdX v4 ── */}
        <section id="dydx-v4-cosmos" style={{ marginBottom: 40, scrollMarginTop: 20 }}>
          <h2 style={h2Style}>4. dYdX v4: The Cosmos Appchain CLOB</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            dYdX v4, launched in late 2024, represents a watershed moment for onchain CLOBs. By becoming a sovereign Cosmos appchain dedicated entirely to trading, dYdX achieved a CLOB at meaningful scale — processing over 100 million dollars of daily volume by 2026 while maintaining decentralization.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Architecture: Off-Chain Matching, On-Chain Settlement</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            dYdX v4 uses a hybrid model. Users submit orders signed with their private keys to the dYdX validators. The validator set runs a matching engine off-chain: orders are matched according to price-time priority. Once a batch of matched orders is determined, the results are committed onchain in a block, and settlement (asset transfers) happens atomically.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The key innovation is that the matching engine is deterministic and decentralized. Because validators reach consensus on matched orders through Tendermint consensus, the system is resistant to single-validator manipulation. A validator cannot reorder trades for MEV extraction without the majority of validators accepting the reorder.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Features in 2026</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            dYdX v4 supports spot trading (CLOB) and perpetual futures (leveraged derivatives). The same underlying order book mechanism powers both. Perpetuals use mark prices derived from the spot book and index prices to prevent manipulation. Leverage is available up to 20x on many pairs.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Trading fees are low (maker: -0.01%, taker: 0.05%, meaning makers earn rebates). Minimum order sizes are minimal, permitting retail-sized orders. The platform has native support for stop orders, post-only orders, and other advanced features.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>DYDX Token &amp; Governance</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The DYDX token serves three functions: securing the network through staking (validators must bond DYDX), governing protocol changes (token holders vote on parameters), and fee distribution (revenue is shared with DYDX holders). This creates alignment: traders benefit from protocol security, validators are incentivized to operate honestly, and governance is decentralized.
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#06b6d4', marginBottom: 10 }}>Why dYdX v4 Chose Appchain</h3>
            <div style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 8 }}>dYdX v3 operated as a suite of smart contracts on Ethereum. This limited throughput and incurred massive gas costs during volatile markets. By becoming an appchain, dYdX can dedicate 100% of block space to trading, eliminate cross-contract calls, and scale horizontally via Cosmos IBC bridges. Users pay minimal gas (funded by trading fees), and throughput is not constrained by Ethereum&apos;s blockspace.</p>
            </div>
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Limitations &amp; Trade-Offs</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            dYdX v4&apos;s primary limitation is that it is chain-specific. Assets must be bridged to dYdX, and trading is isolated from other chains. While Cosmos IBC bridges connect dYdX to other Cosmos chains, Ethereum and Solana remain separate ecosystems. Users must manage cross-chain bridges and liquidity.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Additionally, validator node operation requires significant resources, concentrating decentralization somewhat compared to light clients. However, the validator set is reasonably distributed, and community participation is possible through validators accepting delegated DYDX.
          </p>
        </section>

        {/* ── Section 5: Sei ── */}
        <section id="sei-purpose-built" style={{ marginBottom: 40, scrollMarginTop: 20 }}>
          <h2 style={h2Style}>5. Sei: The Order Book Layer 1</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Sei takes a different approach: instead of a single protocol owning the order book, Sei is a Layer 1 blockchain purpose-built for order book applications. Any protocol can build CLOBs atop Sei, leveraging its native order book infrastructure. Sei v2, launched in 2026, adds EVM compatibility, allowing Ethereum developers to build trading applications on Sei&apos;s throughput.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Twin-Turbo Consensus &amp; Parallel Execution</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Sei&apos;s innovation lies in its consensus and execution layer. Twin-turbo consensus enables 1-block finality (transactions are irreversible after one block) and 390ms block times. This is achieved through an improved Byzantine-Fault-Tolerant (BFT) consensus that optimizes for trading use cases.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            More importantly, Sei&apos;s parallel order execution eliminates the sequencing MEV problem. In traditional blockchains, a sequencer chooses transaction order, and MEV exploiters benefit from seeing transactions before they settle. Sei executes orders for different trading pairs in parallel: if orders involve different assets, they don&apos;t contend for sequencing, and there&apos;s no MEV advantage from reordering.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            For example, orders in the SOL/USDC pair execute in parallel with orders in the ETH/USDC pair. A MEV bot cannot exploit the SOL/USDC order flow to profit from the ETH/USDC order because they&apos;re independent execution pipelines.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Native Order Book Matching</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Sei provides a native order book module in its consensus layer. Developers write simple order book modules as smart contracts, and Sei handles matching, settlement, and finality. This is significantly faster than implementing a full matching engine in application code.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Protocols building on Sei include Navi, a spot and derivatives DEX, and OpenBook (Serum-inspired). Each has its own order book, but all benefit from Sei&apos;s throughput and parallel execution guarantees.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Sei v2: EVM Compatibility</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Sei v2 adds EVM (Ethereum Virtual Machine) support. This allows Ethereum contracts to be deployed with minimal changes, opening Sei to the entire Ethereum DeFi ecosystem. Uniswap-style AMMs can coexist with CLOBs; yield strategies and collateral protocols can integrate.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The result is a multi-paradigm Layer 1: order books for professional traders, AMMs for casual swaps, and lending protocols for yield. This is Sei&apos;s thesis: unified throughput infrastructure for trading applications.
          </p>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#06b6d4', marginBottom: 10 }}>Sei vs dYdX v4</h3>
            <div style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 8 }}><strong>dYdX v4:</strong> Single protocol, proprietary order book, high concentration of trading. Validators run matching engine. Single token (DYDX).</p>
              <p style={{ marginBottom: 0 }}><strong>Sei:</strong> Multiple protocols, permissionless order book deployment, native throughput. Developers build CLOBs as modules. Multiple tokens, EVM ecosystem. Sei v2 enables Ethereum porting.</p>
            </div>
          </div>
        </section>

        {/* ── Section 6: Orderly Network ── */}
        <section id="orderly-hybrid" style={{ marginBottom: 40, scrollMarginTop: 20 }}>
          <h2 style={h2Style}>6. Orderly Network: Hybrid CLOB Infrastructure</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Orderly Network represents a hybrid model: a shared order book accessible from multiple blockchains, with off-chain matching and on-chain settlement. This addresses liquidity fragmentation — instead of isolated order books per chain, traders access a unified global order book.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>How Orderly Works</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Users deposit collateral into Orderly&apos;s smart contracts on any supported chain (Ethereum, Arbitrum, NEAR, etc.). They then trade against a shared order book maintained by a decentralized network of Orderly nodes. Nodes match orders off-chain based on price-time priority. Matched results are periodically settled on the blockchain through smart contract execution.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The key is that Orderly settlement contracts ensure all users&apos; collateral is safe and that matched results correspond to actual blockchain state. If a node attempts to submit fraudulent matches, the smart contract rejects it.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>White-Label DEX Infrastructure</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Orderly\&apos;s most powerful feature is its permissionless infrastructure. Any protocol can build a white-label DEX using Orderly\&apos;s matching engine and settlement. A new AMM-style DEX can tap into Orderly\&apos;s liquidity without building an order book from scratch. Protocols can customize fees, order types, leverage, and UI while relying on Orderly\&apos;s robust infrastructure.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            This has created an explosion of DEX variants: Debridge uses Orderly for derivatives, PMMX builds a commodity exchange on Orderly, and others launch perpetual futures. Each has its own brand and audience, but they all share Orderly\&apos;s order book depth.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Cross-Chain Liquidity</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Because Orderly operates across multiple chains, liquidity is unified. A trader on Arbitrum and a trader on Ethereum access the same order book. This increases liquidity depth and tightens spreads. Bridge liquidity is handled by Orderly\&apos;s node network, which facilitates cross-chain transfers.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Limitations</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Orderly\&apos;s decentralization depends on node diversity. If most nodes are run by a single party or concentrated set of entities, consensus could be compromised. Additionally, cross-chain settlement introduces latency — matches are settled in batches, not instantly. This is acceptable for limit orders but problematic for fast market orders.
          </p>
        </section>

        {/* ── Section 7: Solana CLOBs ── */}
        <section id="solana-clobs" style={{ marginBottom: 40, scrollMarginTop: 20 }}>
          <h2 style={h2Style}>7. Solana CLOBs: Phoenix, Openbook &amp; Beyond</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Solana\&apos;s raw throughput (65,000+ transactions per second theoretically, 400-1,000 practically) makes it naturally suited for onchain CLOBs. Instead of building a specialized appchain, DEXs can run full order books directly on Solana\&apos;s blockchain. The result is fast, finalized, and fully onchain.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Phoenix DEX</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Phoenix, launched by Jump Crypto (now Wormhole), is a fully onchain CLOB on Solana. Orders are executed as transactions, matched by the Phoenix smart contract, and settled atomically. Because Solana can finalize transactions in ~400ms and process thousands per second, Phoenix achieves CLOB functionality without off-chain matching.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Phoenix supports limit orders, market orders, and IOC orders. Spreads are tight on liquid pairs (BTC/USDC, SOL/USDC), and order book depth is substantial. Fees are competitive (0.01-0.05%), and there are no additional bridges or cross-chain friction.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>OpenBook &amp; Serum Legacy</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            OpenBook is the successor to Serum, a historic Solana DEX. Serum pioneered shared order books on Solana, allowing multiple frontends to trade the same market. OpenBook modernizes this architecture, removing dependencies on a single protocol and enabling permissionless order book creation.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            OpenBook\&apos;s key innovation is its abstraction layer: any frontend can display OpenBook order books, and the underlying order book is shared. This prevents liquidity fragmentation and creates composability.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Advantages &amp; Challenges</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Solana\&apos;s advantage is speed and finality: transactions settle in ~400ms and are irreversible. No bridges, no appchain governance overhead, just fast blockchain trading. However, Solana\&apos;s network stability has been a historical concern — during high-load periods, the network has experienced slowdowns and occasional outages. Additionally, Solana\&apos;s validator set is more concentrated than Ethereum or dYdX, creating centralization risks.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            MEV still exists on Solana. While Solana\&apos;s high throughput reduces MEV\&apos;s impact, validators can still influence order sequencing. Protocols like the Jito MEV system help, but MEV-free Solana trading remains an open challenge.
          </p>
        </section>

        {/* ── Section 8: Hybrid Architectures ── */}
        <section id="hybrid-architectures" style={{ marginBottom: 40, scrollMarginTop: 20 }}>
          <h2 style={h2Style}>8. Hybrid Architectures: Best of Both Worlds</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            The trading landscape is evolving toward hybrid models that combine CLOBs with intent-based systems, batch auctions, and AMMs. These designs aim to preserve the benefits of both while mitigating downsides.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>UniswapX: Intent-Based Trading</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            UniswapX allows users to express intent to trade without specifying the exact execution mechanism. A user says "I want to swap 1 ETH for USDC at the best price," and an auction mechanism finds the best filler. Fillers can be market makers, CLOBs, AMMs, or other liquidity sources. The system is MEV-resistant because the intent is signed before execution details are known.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            UniswapX combines the capital efficiency of CLOBs (market makers can post tight quotes) with the simplicity of AMMs (users just say what they want). Execution is abstracted away, and fillers compete based on price quality.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>CoW Protocol: Batch Auctions</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Coincidence of Wants (CoW) Protocol collects user intents and batches them for execution. Within a batch, users&apos; orders can be matched directly against each other, avoiding external liquidity entirely. This minimizes MEV and improves pricing by eliminating intermediaries.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            CoW is not a CLOB, but it achieves similar goals (tight pricing, minimal MEV) through batch auction mechanics. It&apos;s particularly powerful on Ethereum because batch auctions operate at a different layer than sequencing MEV.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Hybrid AMM+CLOB Models</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Some protocols embed CLOBs within AMMs. For example, Curve offers both automated trading (AMM) and permissionless order books. Users can provide AMM liquidity or run market making strategies directly on the order book. This creates optionality: casual users get simple swaps, professionals get order books.
          </p>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Hybrid models recognize that trading is not monolithic. Different user segments need different tools. A single protocol offering both increases adoption and network effects.
          </p>
        </section>

        {/* ── Section 9: Comparison Table ── */}
        <section id="comparison-table" style={{ marginBottom: 40, scrollMarginTop: 20 }}>
          <h2 style={h2Style}>9. CLOB Protocols Comparison Table</h2>

          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Here&apos;s a side-by-side comparison of the major onchain CLOB protocols and relevant platforms as of April 2026:
          </p>

          <div style={{ overflowX: 'auto', WebkitOverflowScrolling: 'touch', marginBottom: 24 }}>
            <table style={tableStyle} aria-label="CLOB Protocols Comparison 2026">
              <thead>
                <tr>
                  <th style={thStyle} scope="col">Protocol</th>
                  <th style={thStyle} scope="col">Chain/Model</th>
                  <th style={thStyle} scope="col">Matching Model</th>
                  <th style={thStyle} scope="col">Throughput</th>
                  <th style={thStyle} scope="col">Maker Fees</th>
                  <th style={thStyle} scope="col">Token</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={tdStyle}>dYdX v4</td>
                  <td style={tdStyle}>Cosmos Appchain</td>
                  <td style={tdStyle}>Off-chain validator matching</td>
                  <td style={tdStyle}>100M+ daily</td>
                  <td style={tdStyle}>-0.01%</td>
                  <td style={tdStyle}>DYDX</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Sei (v2)</td>
                  <td style={tdStyle}>Layer 1 (EVM compatible)</td>
                  <td style={tdStyle}>Onchain parallel execution</td>
                  <td style={tdStyle}>100K+ tx/sec</td>
                  <td style={tdStyle}>0.01-0.05%</td>
                  <td style={tdStyle}>SEI</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Orderly</td>
                  <td style={tdStyle}>Multi-chain hybrid</td>
                  <td style={tdStyle}>Off-chain nodes + batch settlement</td>
                  <td style={tdStyle}>10M+ daily</td>
                  <td style={tdStyle}>0.02-0.1%</td>
                  <td style={tdStyle}>USDC (via settlement)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Phoenix</td>
                  <td style={tdStyle}>Solana</td>
                  <td style={tdStyle}>Fully onchain matching</td>
                  <td style={tdStyle}>~5M daily</td>
                  <td style={tdStyle}>0.01%</td>
                  <td style={tdStyle}>None (program)</td>
                </tr>
                <tr>
                  <td style={tdStyle}>OpenBook</td>
                  <td style={tdStyle}>Solana</td>
                  <td style={tdStyle}>Fully onchain matching</td>
                  <td style={tdStyle}>~3M daily</td>
                  <td style={tdStyle}>0.02%</td>
                  <td style={tdStyle}>BOOK</td>
                </tr>
                <tr>
                  <td style={tdStyle}>Hyperliquid</td>
                  <td style={tdStyle}>Custom L1</td>
                  <td style={tdStyle}>Off-chain matching + onchain settlement</td>
                  <td style={tdStyle}>500M+ daily</td>
                  <td style={tdStyle}>-0.025%</td>
                  <td style={tdStyle}>HYPE</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={infoBoxStyle}>
            <h3 style={{ fontSize: 15, fontWeight: 700, color: '#06b6d4', marginBottom: 10 }}>Volume Notes</h3>
            <div style={{ color: '#c9d1d9', fontSize: 14, lineHeight: 1.8 }}>
              <p style={{ marginBottom: 0 }}>Daily volume figures are approximate and vary by market conditions. Hyperliquid&apos;s volume is heavily concentrated in perpetual futures (leveraged trading), while dYdX v4 includes both spot and perpetuals. Orderly&apos;s volume is split across multiple DEX frontends.</p>
            </div>
          </div>
        </section>

        {/* ── Section 10: Risks & Limitations ── */}
        <section id="risks-limitations" style={{ marginBottom: 40, scrollMarginTop: 20 }}>
          <h2 style={h2Style}>10. Risks &amp; Limitations</h2>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Centralization of Sequencing &amp; Validators</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Many CLOB protocols rely on validators or sequencers to maintain order matching. If these entities are concentrated or colluding, they can manipulate order execution for profit. dYdX v4 mitigates this through consensus (validators must agree), but this doesn&apos;t eliminate risk entirely. Solana&apos;s high validator stakes mean large entities exert outsized influence. Orderly&apos;s node operator set is smaller, creating concentration risk.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Liquidity Fragmentation</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Each CLOB protocol maintains separate order books. A trader looking for USDC/ETH liquidity must check dYdX v4, Sei, Solana CLOBs, etc. independently. This fragments liquidity and worsens pricing compared to a unified global order book. Bridges can consolidate liquidity, but they introduce latency and counterparty risk. Solutions like Orderly Network help, but fragmentation remains a challenge.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Regulatory Classification</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Onchain CLOBs with leverage (perpetual futures) may be classified as unregistered exchanges or securities platforms by regulators. The SEC has taken an interest in DEX governance and custody models. CLOBs enabling leverage face particular scrutiny. As of 2026, regulatory clarity remains limited, and protocols may face enforcement action. This is a material risk for protocols and users.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Throughput Ceilings</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Even high-throughput protocols have limits. Sei processes ~100K tx/sec on paper, but sustained trading during volatile market conditions consumes significant resources. Solana has experienced network slowdowns under load. If a protocol hits its throughput ceiling, order latency increases, and trading quality degrades. Competition will push toward bigger ceilings, but physics and economics have limits.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>MEV &amp; Front-Running</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Onchain CLOBs are vulnerable to MEV extraction through sequencing. Even if matching is decentralized, a validator can reorder transactions before inclusion in a block. Protocols like Sei mitigate this through parallel execution (orders for different pairs don&apos;t contend), but the problem isn&apos;t fully solved. Users remain vulnerable to sophisticated MEV bots exploiting state information.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: '#e6edf3', marginTop: 24, marginBottom: 12 }}>Bridge Risk (Multi-Chain CLOBs)</h3>
          <p style={{ color: '#c9d1d9', fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            Protocols like Orderly that operate across multiple chains rely on bridges to transfer assets. Bridge exploits have cost billions. A hack in Orderly&apos;s bridge could drain user collateral. While protocols implement safeguards (timelocks, multisigs), bridge risk is inherent to cross-chain trading.
          </p>
        </section>

        {/* ── FAQ Section ── */}
        <section id="faq" style={{ marginBottom: 40, scrollMarginTop: 20 }}>
          <h2 style={h2Style}>11. FAQ</h2>

          <details style={{ marginBottom: 20, padding: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 8, cursor: 'pointer' }}>
            <summary style={{ fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              What is a CLOB and how does it differ from an AMM?
              <span className="faq-icon" style={{ display: 'inline-block', transition: 'transform 0.2s', fontSize: 20 }}>+</span>
            </summary>
            <p style={{ color: '#8b949e', marginTop: 12, fontSize: 14, lineHeight: 1.8 }}>
              A CLOB (Central Limit Order Book) is a matching engine that pairs buy and sell orders at agreed prices, following price-time priority. Users can set limit orders and wait for a match. AMMs (like Uniswap) use mathematical formulas to set prices automatically. CLOBs offer better capital efficiency and tighter spreads for liquid pairs, while AMMs provide passive liquidity and simpler UX. CLOBs require more active management.
            </p>
          </details>

          <details style={{ marginBottom: 20, padding: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 8, cursor: 'pointer' }}>
            <summary style={{ fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              How does dYdX v4 work as an appchain CLOB?
              <span className="faq-icon" style={{ display: 'inline-block', transition: 'transform 0.2s', fontSize: 20 }}>+</span>
            </summary>
            <p style={{ color: '#8b949e', marginTop: 12, fontSize: 14, lineHeight: 1.8 }}>
              dYdX v4 is a sovereign Cosmos appchain dedicated to trading. Validators run a matching engine off-chain to match orders, with on-chain settlement and state commitment. This hybrid approach enables high throughput (100M+ daily volume) while maintaining decentralization through a distributed validator set. The DYDX token governs protocol parameters.
            </p>
          </details>

          <details style={{ marginBottom: 20, padding: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 8, cursor: 'pointer' }}>
            <summary style={{ fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              What makes Sei unique for onchain order books?
              <span className="faq-icon" style={{ display: 'inline-block', transition: 'transform 0.2s', fontSize: 20 }}>+</span>
            </summary>
            <p style={{ color: '#8b949e', marginTop: 12, fontSize: 14, lineHeight: 1.8 }}>
              Sei is purpose-built for trading with twin-turbo consensus enabling 1-block finality and parallel order execution. Its architecture allows multiple orders to execute simultaneously without contention, eliminating frontrunning of individual orders. Sei v2 adds EVM compatibility for multi-chain composability.
            </p>
          </details>

          <details style={{ marginBottom: 20, padding: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 8, cursor: 'pointer' }}>
            <summary style={{ fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              What is Orderly Network and how is it hybrid?
              <span className="faq-icon" style={{ display: 'inline-block', transition: 'transform 0.2s', fontSize: 20 }}>+</span>
            </summary>
            <p style={{ color: '#8b949e', marginTop: 12, fontSize: 14, lineHeight: 1.8 }}>
              Orderly Network is a hybrid CLOB providing a shared order book across multiple chains. Orders are matched off-chain through Orderly nodes, with settlement on NEAR or other blockchains. It offers permissionless access for protocols to launch white-label DEXs while maintaining a unified liquidity pool.
            </p>
          </details>

          <details style={{ marginBottom: 20, padding: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 8, cursor: 'pointer' }}>
            <summary style={{ fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Why do CLOBs have MEV exposure but AMMs are less vulnerable?
              <span className="faq-icon" style={{ display: 'inline-block', transition: 'transform 0.2s', fontSize: 20 }}>+</span>
            </summary>
            <p style={{ color: '#8b949e', marginTop: 12, fontSize: 14, lineHeight: 1.8 }}>
              In CLOBs, the matching engine order matters — a sequencer can reorder transactions to benefit itself or favored participants. In AMMs, prices are determined by formulas, not sequencing order. However, both face MEV risks. Solutions include encrypted mempools, fair ordering services, and protocols like CoW that batch auctions to neutralize MEV.
            </p>
          </details>

          <details style={{ marginBottom: 20, padding: 16, background: '#161b22', border: '1px solid #30363d', borderRadius: 8, cursor: 'pointer' }}>
            <summary style={{ fontWeight: 600, color: '#e6edf3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              When should I use a CLOB vs an AMM?
              <span className="faq-icon" style={{ display: 'inline-block', transition: 'transform 0.2s', fontSize: 20 }}>+</span>
            </summary>
            <p style={{ color: '#8b949e', marginTop: 12, fontSize: 14, lineHeight: 1.8 }}>
              Use CLOBs for precise limit orders, tight spreads, and professional trading on deep order books. Use AMMs for casual swaps, passive liquidity provision, and when you want predictable pricing formulas. Hybrid platforms combine both: spot trading via CLOBs, synthetic exposure via AMMs.
            </p>
          </details>
        </section>

        {/* ── Internal Links & Related Content ── */}
        <section style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #30363d' }}>
          <h3 style={{ fontSize: 16, fontWeight: 700, color: '#e6edf3', marginBottom: 16 }}>Related Guides</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: 2 }}>
            <li style={{ marginBottom: 12 }}>
              <Link href="/learn/perpetual-dex-onchain-perps-trading-guide-2026" style={linkStyle}>
                Perpetual DEX: Onchain Perps Trading Guide 2026
              </Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link href="/learn/dex-aggregators-trade-routing-guide-2026" style={linkStyle}>
                DEX Aggregators & Trade Routing Guide 2026
              </Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link href="/learn/mev-protection-fair-trading-guide-2026" style={linkStyle}>
                MEV Protection & Fair Trading Guide 2026
              </Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link href="/learn/hyperliquid-perp-dex-trading-guide-2026" style={linkStyle}>
                Hyperliquid Perp DEX Trading Guide 2026
              </Link>
            </li>
            <li style={{ marginBottom: 12 }}>
              <Link href="/learn/impermanent-loss-liquidity-providing-guide-2026" style={linkStyle}>
                Impermanent Loss & Liquidity Providing Guide 2026
              </Link>
            </li>
          </ul>
        </section>

        <BackToTop />
      </div>
    
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
