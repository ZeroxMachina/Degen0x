import { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, generateHowToSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import { SITE_URL } from "@/lib/constants";
import Hip3FundingCalculator from "@/components/Hip3FundingCalculator";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


const PAGE_URL = `${SITE_URL}/learn/hyperliquid-hip3-tokenized-futures-guide`;
const DATE_PUBLISHED = "2026-03-16T00:00:00Z";
const OG_IMAGE = `${SITE_URL}/og-hyperliquid-hip3-guide.png`;

export const metadata: Metadata = {
  title: "Hyperliquid HIP-3 Tokenized Futures Guide 2026 | degen0x",
  description:
    "Trade oil, stocks & commodities on-chain via Hyperliquid HIP-3 permissionless futures. $1.2B open interest, no KYC, 24/7 access. Full guide for 2026.",
  keywords: [
    "Hyperliquid HIP-3",
    "tokenized futures",
    "on-chain commodity trading",
    "permissionless perpetuals",
    "trade oil crypto",
    "tokenized stocks DeFi",
    "HYPE token",
    "CL-USDC oil futures",
    "XYZ100 tokenized equity",
    "Hyperliquid guide 2026",
  ],
  openGraph: {
    title: "Hyperliquid HIP-3: Trade Oil & Stocks On-Chain 24/7 | degen0x",
    description:
      "Hyperliquid's permissionless HIP-3 futures hit $1.2B open interest. Trade crude oil, equity indices & gold on-chain — no broker, no KYC, any weekend.",
    url: PAGE_URL,
    type: "article",
    publishedTime: DATE_PUBLISHED,
    modifiedTime: DATE_PUBLISHED,
    authors: ["degen0x Team"],
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Hyperliquid HIP-3 Tokenized Futures Guide — $1.2B open interest, CL-USDC $1.62B vol, 500K HYPE stake, 24/7 trading" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hyperliquid HIP-3 Tokenized Futures Guide 2026 | degen0x",
    description:
      "Trade oil, stocks & commodities on-chain 24/7 via Hyperliquid HIP-3. $1.2B open interest. No KYC, no broker. Full guide.",
    images: [OG_IMAGE],
  },
};

export default function HyperliquidHip3TokenizedFuturesGuidePage() {
  const articleSchema = generateArticleSchema({
    title: "Hyperliquid HIP-3 Tokenized Futures Guide 2026",
    description:
      "Learn how Hyperliquid's HIP-3 permissionless futures let you trade oil, stocks, and commodities on-chain 24/7 with no KYC. $1.2B open interest as of March 2026.",
    url: PAGE_URL,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_PUBLISHED,
    author: "degen0x Team",
    image: OG_IMAGE,
    wordCount: 3200,
  });

  const faqSchema = generateFAQSchema([
    {
      question: "Is trading oil on Hyperliquid legal?",
      answer:
        "It depends on your jurisdiction. In the US, trading commodity derivatives is regulated by the CFTC. The regulatory status of DeFi-based commodity derivatives is evolving — the CFTC issued new guidance on non-custodial DeFi applications following the March 2026 CFTC-SEC MOU. Consult a legal professional before trading if you are in a regulated jurisdiction.",
    },
    {
      question: "Do I actually own oil or stocks when I trade on HIP-3?",
      answer:
        "No. HIP-3 products are fully synthetic perpetual contracts. You own a derivative that tracks the price of the underlying asset — there is no physical delivery and you do not hold actual equity shares or commodities.",
    },
    {
      question: "How much HYPE do I need to create a new HIP-3 market?",
      answer:
        "500,000 HYPE tokens are required to create a new permissionless HIP-3 perpetual futures market. This serves as both a spam guard and a financial commitment to the market's health.",
    },
    {
      question: "What is pmUSDH on Hyperliquid?",
      answer:
        "pmUSDH is a yield-bearing ERC-20 tokenized collateral launched by Native Markets in March 2026. When you deposit USDH into a Hyperliquid portfolio margin account, it is converted to pmUSDH which earns lending yield from borrowers while still backing your open positions.",
    },
    {
      question: "What is the difference between HIP-3 and regular Hyperliquid markets?",
      answer:
        "Regular Hyperliquid perpetual markets are listed by the core team through governance. HIP-3 is fully permissionless — anyone who stakes 500,000 HYPE can deploy a perpetual futures market for any underlying asset, including commodities, stocks, indices, and more.",
    },
    {
      question: "What are the biggest HIP-3 markets by volume?",
      answer:
        "As of March 2026, the largest HIP-3 market is CL-USDC (WTI Crude Oil), which recorded $1.62 billion in 24-hour trading volume. The XYZ100-USDC tokenized equity index is the second largest. Precious metals (gold and silver) also see significant activity.",
    },
  ]);

  const howToSchema = generateHowToSchema({
    name: "How to Trade Oil Futures on Hyperliquid HIP-3",
    description: "Step-by-step guide to trading tokenized commodity and equity futures on Hyperliquid's permissionless HIP-3 markets",
    totalTime: "PT15M",
    steps: [
      { name: "Fund Your Wallet", text: "Bridge USDC or acquire USDH and transfer it to your Hyperliquid account via the native bridge from Arbitrum or Ethereum." },
      { name: "Connect Wallet", text: "Visit app.hyperliquid.xyz and connect a WalletConnect-compatible wallet. No KYC or email required." },
      { name: "Deposit Collateral", text: "Transfer USDC or USDH from your spot balance to your perpetuals account. USDH auto-converts to yield-bearing pmUSDH in portfolio margin accounts." },
      { name: "Select a HIP-3 Market", text: "Search for your target market (e.g., CL-USDC for crude oil, XYZ100-USDC for US equity index) in the permissionless markets section." },
      { name: "Set Leverage and Place Trade", text: "Choose your leverage (2–20x), enter your position size, set a stop-loss, and place your trade using a limit order to minimize slippage." },
      { name: "Monitor Funding Rates", text: "Check the funding rate panel hourly. High sustained positive funding means longs are paying shorts — factor this cost into your holding period calculations." },
    ],
  });

  const schemas = combineSchemas([articleSchema, faqSchema, howToSchema]);

  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3" }}>
      <StructuredData data={schemas} />
      <article style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px" }}>

        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 12 }}>
            <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, background: "#06b6d420", color: "#06b6d4", border: "1px solid #06b6d440" }}>DeFi</span>
            <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, background: "#d2992220", color: "#d29922", border: "1px solid #d2992240" }}>Intermediate</span>
            <span style={{ padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, background: "#22c55e20", color: "#22c55e", border: "1px solid #22c55e40" }}>Updated March 2026</span>
          </div>
          <h1 style={{
            fontSize: 36,
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 16,
            background: "linear-gradient(135deg, #06b6d4, #6366f1)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Hyperliquid HIP-3: How to Trade Oil, Stocks &amp; Commodities On-Chain in 2026
          </h1>
          <p style={{ color: "#8b949e", fontSize: 17, lineHeight: 1.7, marginBottom: 12 }}>
            On March 10, 2026, Hyperliquid's permissionless HIP-3 futures market hit $1.2 billion in open interest — with oil and equity futures outpacing most crypto pairs. Here's everything you need to know about trading real-world assets 24/7, without a broker, without KYC, directly on-chain.
          </p>
          <div style={{ fontSize: 13, color: "#8b949e" }}>Updated March 2026 · 12 min read</div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={5}
          section="learn"
        />


        {/* Quick Stats Box */}
        <div style={{ background: "#161b22", border: "1px solid #06b6d440", borderRadius: 12, padding: 20, marginBottom: 32 }}>
          <h2 style={{ fontSize: 13, fontWeight: 700, color: "#06b6d4", marginBottom: 14, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            ⚡ HIP-3 Key Stats (March 2026)
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
            {[
              { label: "Total Open Interest", value: "$1.2B+" },
              { label: "CL-USDC (Oil) 24h Vol", value: "$1.62B" },
              { label: "Top Equity Market", value: "XYZ100-USDC" },
              { label: "Market Creation Stake", value: "500K HYPE" },
              { label: "Available 24/7", value: "Yes (weekends too)" },
              { label: "KYC Required", value: "None" },
            ].map((stat) => (
              <div key={stat.label} style={{ background: "#0d1117", borderRadius: 8, padding: "10px 14px" }}>
                <div style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3" }}>{stat.value}</div>
                <div style={{ fontSize: 12, color: "#8b949e", marginTop: 2 }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Table of Contents */}
        <nav aria-label="Table of Contents" style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 40 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12, color: "#58a6ff" }}>📋 Table of Contents</h2>
          <ol style={{ paddingLeft: 20, color: "#8b949e", fontSize: 14, lineHeight: 2.1, margin: 0 }}>
            <li><a href="#what-is-hip3" style={{ color: "#58a6ff", textDecoration: "none" }}>What Is HIP-3? Hyperliquid's Permissionless Futures Engine</a></li>
            <li><a href="#markets-available" style={{ color: "#58a6ff", textDecoration: "none" }}>What Can You Trade? Oil, Stocks, Commodities</a></li>
            <li><a href="#how-it-works" style={{ color: "#58a6ff", textDecoration: "none" }}>How HIP-3 Markets Work: Mechanics Deep Dive</a></li>
            <li><a href="#portfolio-margin" style={{ color: "#58a6ff", textDecoration: "none" }}>Portfolio Margin & pmUSDH: Trading with Yield-Bearing Collateral</a></li>
            <li><a href="#how-to-trade" style={{ color: "#58a6ff", textDecoration: "none" }}>Step-by-Step: How to Open Your First HIP-3 Trade</a></li>
            <li><a href="#strategies" style={{ color: "#58a6ff", textDecoration: "none" }}>HIP-3 Trading Strategies</a></li>
            <li><a href="#risks" style={{ color: "#58a6ff", textDecoration: "none" }}>Risks You Need to Understand</a></li>
            <li><a href="#vs-tradfi" style={{ color: "#58a6ff", textDecoration: "none" }}>HIP-3 vs. TradFi Brokers: Why It Matters</a></li>
            <li><a href="#faq" style={{ color: "#58a6ff", textDecoration: "none" }}>FAQ</a></li>
          </ol>
        </nav>

        {/* Disclaimer */}
        <div style={{ background: "#161b22", border: "1px solid #d2992240", borderRadius: 10, padding: 16, marginBottom: 40, fontSize: 13, color: "#8b949e" }}>
          ⚠️ <strong style={{ color: "#d29922" }}>Disclaimer:</strong> This guide is for informational purposes only. Trading leveraged derivatives carries significant risk. This is not financial advice. Always do your own research before making investment decisions.
        </div>

        {/* Section 1 */}
        <section id="what-is-hip3" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>1. What Is HIP-3? Hyperliquid's Permissionless Futures Engine</h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            HIP-3 (Hyperliquid Improvement Proposal 3) is the protocol upgrade that turned Hyperliquid from a crypto-only perp DEX into something much more radical: a permissionless futures exchange for <em>any</em> asset in the world — stocks, commodities, indices, and beyond.
          </p>
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
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            Before HIP-3, Hyperliquid listed new markets through a centralized governance process — the team decided which assets got perpetuals. HIP-3 flipped the model entirely. Now, anyone who stakes 500,000 HYPE tokens can permissionlessly launch a perpetual futures market for any underlying asset. No approval required. No waiting. Deploy and go.
          </p>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            The result? Within weeks of launch, traders piled into oil futures, equity index contracts, and commodity pairs — because for the first time, they could access these markets 24/7, globally, with no broker, no KYC, and no weekend closures. By March 10, 2026, the HIP-3 permissionless market had surpassed $1.2 billion in total open interest.
          </p>
          <div style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#06b6d4", marginBottom: 10 }}>💡 Why This Is a Big Deal</h3>
            <p style={{ fontSize: 14, color: "#c9d1d9", lineHeight: 1.75, margin: 0 }}>
              Traditional commodities and equity derivatives trading is gated: US markets close on weekends, brokers require extensive KYC, and access varies by country. HIP-3 breaks all of that open. A trader in any country with a crypto wallet can trade crude oil futures at 3am on a Sunday — something that was impossible in TradFi.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="markets-available" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>2. What Can You Trade? Oil, Stocks, Commodities</h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            The most-traded HIP-3 markets as of March 2026 span commodities and equities, with only a minority of top markets tied to crypto pairs. The market has spoken: traders want real-world asset exposure on-chain.
          </p>
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", marginBottom: 24 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 700 }}>
              <thead>
                <tr style={{ background: "#161b22" }}>
                  {["Market", "Asset", "Category", "24h Vol (est.)", "Why Traders Use It"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#8b949e", fontWeight: 600, borderBottom: "1px solid #30363d", whiteSpace: "nowrap" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { market: "CL-USDC", asset: "WTI Crude Oil", category: "Commodity", vol: "$1.62B", why: "Oil is the most volatile global commodity; weekend access is unique on-chain" },
                  { market: "XYZ100-USDC", asset: "Equity Index (US100-equivalent)", category: "Equity Index", vol: "$320M+", why: "Trade tech stocks 24/7, even during weekend volatility from geopolitical events" },
                  { market: "GC-USDC", asset: "Gold Futures", category: "Precious Metal", vol: "$180M+", why: "Gold as an inflation hedge without holding physical metal or ETF shares" },
                  { market: "SI-USDC", asset: "Silver Futures", category: "Precious Metal", vol: "$90M+", why: "Leverage play on industrial metals and inflation thesis" },
                  { market: "TSLA-USDC", asset: "Tesla Stock Perp", category: "Single Stock", vol: "~$60M", why: "Directional bet on TSLA without a brokerage account" },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "#0d111780", borderBottom: "1px solid #21262d" }}>
                    <td style={{ padding: "10px 14px", color: "#58a6ff", fontFamily: "monospace", fontWeight: 600 }}>{row.market}</td>
                    <td style={{ padding: "10px 14px", color: "#e6edf3" }}>{row.asset}</td>
                    <td style={{ padding: "10px 14px", color: "#8b949e" }}>{row.category}</td>
                    <td style={{ padding: "10px 14px", color: "#22c55e", fontWeight: 600 }}>{row.vol}</td>
                    <td style={{ padding: "10px 14px", color: "#c9d1d9", fontSize: 13 }}>{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "#8b949e", fontSize: 13, fontStyle: "italic" }}>
            Note: Volume figures are approximate as of March 10, 2026. New markets are being added continuously as projects stake HYPE to launch them.
          </p>
        </section>

        {/* Section 3 */}
        <section id="how-it-works" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>3. How HIP-3 Markets Work: Mechanics Deep Dive</h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            Understanding the plumbing of HIP-3 is important before you trade. These aren't traditional futures contracts — they're perpetuals, which means no expiry date and a funding rate mechanism to keep prices anchored to the real-world underlying.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 24 }}>Market Creation: Staking 500K HYPE</h3>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            To launch a new HIP-3 market, a sponsor must stake 500,000 HYPE tokens (~$9M at March 2026 prices). This serves two purposes: it's a meaningful financial commitment that deters spam markets, and the staked HYPE is slashable if the market creator acts maliciously. The creator sets the initial oracle source and market parameters.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 24 }}>Price Oracles: How On-Chain Knows the Oil Price</h3>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            Each HIP-3 market specifies an oracle source — typically a decentralized price feed aggregating data from TradFi market data providers. The <code style={{ background: "#161b22", padding: "2px 6px", borderRadius: 4, color: "#79c0ff", fontSize: 13 }}>CL-USDC</code> market, for example, tracks WTI crude oil front-month futures prices from commodity exchange data. The mark price — used for liquidations — is derived from this oracle, preventing manipulation via thin on-chain order books.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 24 }}>Fully Collateralized: No Custodian, No Counterparty</h3>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            HIP-3 products are fully collateralized perpetuals. When you open a long position in CL-USDC, you're not buying actual oil — you're entering a synthetic contract that moves 1:1 with the oil price, settled in USDC or USDH. There's no oil barrel sitting in a warehouse somewhere. Settlement is purely financial and handled by HyperEVM smart contracts.
          </p>

          <div style={{ background: "#161b22", border: "1px solid #f7851340", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#f78513", marginBottom: 10 }}>⚠️ Important Distinction</h3>
            <p style={{ fontSize: 14, color: "#c9d1d9", lineHeight: 1.75, margin: 0 }}>
              When you "trade oil" on HIP-3, you're trading a perpetual synthetic that tracks crude oil prices. You cannot take physical delivery of commodities, and you don't own shares in an equity. These are purely derivative instruments — purely price exposure.
            </p>
          </div>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 24 }}>Funding Rates: The Price Anchor</h3>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            Funding rates transfer payments between longs and shorts every hour to keep the perp price close to oracle price. If the perp trades above oracle (too many longs), longs pay shorts. If below (too many shorts), shorts pay longs. Monitoring funding rates is critical — a sustained positive funding on CL-USDC means you're paying to stay long oil, which erodes your position over time.
          </p>
        </section>

        {/* Section 4 */}
        <section id="portfolio-margin" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>4. Portfolio Margin &amp; pmUSDH: Trading with Yield-Bearing Collateral</h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            One of the most powerful (and underused) features in Hyperliquid's HIP-3 ecosystem is portfolio margin. Instead of margining each position in isolation, portfolio margin nets your entire account's risk — so a long oil position and a short equity index position can offset each other, dramatically reducing your liquidation exposure.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 12, marginTop: 24 }}>What Is pmUSDH?</h3>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            Launched on March 15, 2026 by Native Markets (the USDH issuer), <strong style={{ color: "#e6edf3" }}>pmUSDH</strong> is a yield-bearing ERC-20 token representing tokenized collateral within Hyperliquid's portfolio margin system. Here's how it works:
          </p>
          <ol style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 2, paddingLeft: 24, marginBottom: 20 }}>
            <li>Deposit USDH into your Hyperliquid portfolio margin account</li>
            <li>USDH is automatically converted into pmUSDH — earning interest from borrowers in the margin lending pool</li>
            <li>Your pmUSDH collateral still fully backs your open perp positions</li>
            <li>You can also transfer pmUSDH to external DeFi protocols (Felix, Hyperlend, Pendle, Rysk) for additional yield layers</li>
          </ol>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            The key insight: your idle margin is no longer idle. Instead of sitting as dead collateral, it's working — earning lending yield while simultaneously backing your futures positions.
          </p>

          <div style={{ background: "#161b22", border: "1px solid #22c55e40", borderRadius: 12, padding: 20, marginBottom: 16 }}>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "#22c55e", marginBottom: 10 }}>✅ Pro Tip: The Carry Trade</h3>
            <p style={{ fontSize: 14, color: "#c9d1d9", lineHeight: 1.75, margin: 0 }}>
              Portfolio margin enables a classic carry trade: hold spot USDH (or a yield-bearing asset), short the corresponding perp to hedge price exposure, and pocket the spread between lending yield and funding payments. When funding rates are neutral or negative, this trade earns yield with near-zero directional risk.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="how-to-trade" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>5. Step-by-Step: How to Open Your First HIP-3 Trade</h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 20 }}>
            Getting into a HIP-3 market is straightforward if you already use Hyperliquid. Here's the full flow:
          </p>
          {[
            { step: "1", title: "Fund Your Wallet", body: "You'll need USDC or USDH. Bridge USDC from Arbitrum, Ethereum, or other chains via the Hyperliquid native bridge. The process takes ~5 minutes and costs a few dollars in gas." },
            { step: "2", title: "Navigate to Hyperliquid Perp DEX", body: "Go to app.hyperliquid.xyz. Connect your wallet (MetaMask, Rabby, or any WalletConnect-compatible wallet). No email, no KYC, no waiting." },
            { step: "3", title: "Deposit Collateral", body: "Transfer USDC from your spot balance to your perpetuals account. If you want portfolio margin benefits, deposit USDH instead — it will be converted to pmUSDH automatically." },
            { step: "4", title: "Find Your Market", body: "In the perps interface, search for your desired HIP-3 market. Look for CL-USDC (crude oil), GC-USDC (gold), or XYZ100-USDC (equity index). Note that permissionless markets are filtered separately from the main crypto list." },
            { step: "5", title: "Set Your Leverage", body: "HIP-3 markets support up to 20x leverage (varies by market). Start low — 2-5x — especially for volatile commodities. Higher leverage narrows the price move required to liquidate you." },
            { step: "6", title: "Place Your Trade", body: "Enter your position size in USDC terms. Use limit orders when possible — market orders on thinner HIP-3 markets can suffer slippage, especially during volatile commodity moves. Set your stop-loss before confirming." },
            { step: "7", title: "Monitor Funding Rates", body: "Check the funding rate panel hourly. Sustained high positive funding (longs paying shorts) means the market is crowded long — factor this into your holding cost calculation." },
          ].map((s) => (
            <div key={s.step} style={{ display: "flex", gap: 16, marginBottom: 20 }}>
              <div style={{ flexShrink: 0, width: 32, height: 32, borderRadius: "50%", background: "#06b6d420", border: "1px solid #06b6d440", display: "flex", alignItems: "center", justifyContent: "center", color: "#06b6d4", fontWeight: 700, fontSize: 14 }}>
                {s.step}
              </div>
              <div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", marginBottom: 6 }}>{s.title}</h3>
                <p style={{ color: "#c9d1d9", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Interactive Calculator */}
        <Hip3FundingCalculator />

        {/* Section 6 */}
        <section id="strategies" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>6. HIP-3 Trading Strategies</h2>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 10, marginTop: 20 }}>📈 Macro Momentum: Trade Geopolitical Events 24/7</h3>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            Oil prices react instantly to OPEC announcements, Middle East news, or US inventory data — but TradFi futures markets close on weekends. With HIP-3, you can go long CL-USDC on a Saturday when an OPEC surprise drops, capturing a move that TradFi traders have to wait until Monday to react to. This weekend access edge is real and actively used by HIP-3's biggest traders.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 10, marginTop: 20 }}>⚖️ Cross-Asset Hedging: Long Crypto, Short Equities</h3>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            Crypto and US tech stocks are highly correlated in risk-off environments. Using portfolio margin, you can hold long BTC or ETH perps while shorting XYZ100-USDC (US equity index). If global risk-off hits, your equity short hedges your crypto longs — all in one margin account, with positions netting against each other.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 10, marginTop: 20 }}>💰 Yield + Hedge: The pmUSDH Carry Trade</h3>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            As described in the portfolio margin section: hold pmUSDH for lending yield, short the relevant market perp to stay delta-neutral, and earn the spread. Particularly attractive during periods of low funding rates on HIP-3 markets.
          </p>

          <h3 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 10, marginTop: 20 }}>🎯 Single-Stock Event Trading</h3>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 16 }}>
            Earnings releases, product launches, and macro events move individual stocks dramatically. If you have a view on TSLA going into a product reveal, you can express that directionally through TSLA-USDC perps — without opening a US brokerage account. Just be aware that liquidity on single-stock HIP-3 markets is thinner than the commodity markets; manage your position size accordingly.
          </p>
        </section>

        {/* Section 7 */}
        <section id="risks" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>7. Risks You Need to Understand</h2>

          {[
            { icon: "🔴", title: "Oracle Manipulation Risk", body: "HIP-3 markets depend on oracle price feeds. If an oracle is compromised or experiences latency during a fast market move, the mark price may diverge from reality, triggering unwarranted liquidations. Stick to markets with established, multi-source oracle feeds." },
            { icon: "🔴", title: "Low-Liquidity Markets", body: "While CL-USDC trades billions in daily volume, newer or less popular HIP-3 markets can have thin order books. Large orders will cause significant slippage, and wide bid-ask spreads eat into profitability. Check depth before sizing in." },
            { icon: "🔴", title: "Smart Contract Risk", body: "Hyperliquid's HyperEVM is relatively new infrastructure. Smart contract bugs or exploits remain a possibility. The $500M+ in Hyperliquid TVL makes it a high-value target. Only trade with capital you can afford to lose." },
            { icon: "🔴", title: "Funding Rate Drag", body: "On high-demand markets where most traders are directionally long (e.g., CL-USDC during an oil price spike), positive funding can be extreme — sometimes 0.05-0.1% per hour. That adds up to 40-80%+ annualized cost. Long-term directional holds need to account for this." },
            { icon: "🟡", title: "Regulatory Uncertainty", body: "Accessing commodity and equity derivatives via DeFi may have regulatory implications depending on your jurisdiction. The CFTC is actively working on guidance for non-custodial DeFi applications (following the March 11, 2026 CFTC-SEC MOU). Consult a legal professional if you're uncertain about your local rules." },
            { icon: "🟡", title: "No Settlement in Kind", body: "You can never take delivery of physical oil or actual stock shares from HIP-3. These are purely synthetic derivatives. If Hyperliquid were to shut down tomorrow, positions would need to be closed — there's no fallback to physical settlement." },
          ].map((risk) => (
            <div key={risk.title} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: 16, marginBottom: 12 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", marginBottom: 6 }}>{risk.icon} {risk.title}</h3>
              <p style={{ color: "#8b949e", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{risk.body}</p>
            </div>
          ))}
        </section>

        {/* Section 8 */}
        <section id="vs-tradfi" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>8. HIP-3 vs. TradFi Brokers: Why It Matters</h2>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85, marginBottom: 20 }}>
            The rise of HIP-3 is part of a broader shift in what "financial access" means. Here's how it stacks up against the traditional route:
          </p>
          <div style={{ overflowX: "auto", WebkitOverflowScrolling: "touch", marginBottom: 16 }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14, minWidth: 520 }}>
              <thead>
                <tr style={{ background: "#161b22" }}>
                  {["Feature", "TradFi Broker", "Hyperliquid HIP-3"].map((h) => (
                    <th key={h} style={{ padding: "10px 14px", textAlign: "left", color: "#8b949e", fontWeight: 600, borderBottom: "1px solid #30363d" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["KYC / Account Opening", "Required (days to weeks)", "Not required (wallet only)"],
                  ["Trading Hours", "Market hours + some after-hours", "24/7/365"],
                  ["Weekend Access", "Limited or closed", "Full access"],
                  ["Geographic Access", "Restricted by country", "Global (wallet-gated only)"],
                  ["Collateral Earning Yield", "Sometimes (money market fund)", "Yes (pmUSDH auto-yield)"],
                  ["Max Leverage", "Typically 2–20x (regulated)", "Up to 20x (varies by market)"],
                  ["Settlement", "Physical delivery possible", "Cash-settled only (synthetic)"],
                  ["Counterparty Risk", "Broker/exchange solvency", "Smart contract risk"],
                  ["Fees", "Commission + spread + overnight", "Funding rate + taker fees"],
                ].map(([feat, trad, hyp], i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "transparent" : "#0d111780", borderBottom: "1px solid #21262d" }}>
                    <td style={{ padding: "10px 14px", color: "#e6edf3", fontWeight: 500 }}>{feat}</td>
                    <td style={{ padding: "10px 14px", color: "#8b949e" }}>{trad}</td>
                    <td style={{ padding: "10px 14px", color: "#22c55e" }}>{hyp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85 }}>
            The on-chain advantage is real — especially for traders in regions with limited brokerage access, or anyone who wants to express macro views on weekends when most TradFi desks are closed.
          </p>
        </section>

        {/* FAQ */}
        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 700, marginBottom: 20, color: "#e6edf3" }}>9. FAQ</h2>
          {[
            {
              q: "Is trading oil on Hyperliquid legal?",
              a: "It depends on your jurisdiction. In the US, trading commodity derivatives is regulated by the CFTC. The regulatory status of DeFi-based commodity derivatives remains evolving — the CFTC issued new guidance on non-custodial DeFi applications in March 2026. Consult a legal professional before trading if you're in a heavily regulated jurisdiction.",
            },
            {
              q: "Do I actually own oil or stocks when I trade on HIP-3?",
              a: "No. HIP-3 products are fully synthetic perpetual contracts. You own a derivative that tracks the price of oil, stocks, or commodities. There is no physical delivery, and you don't hold actual equity shares.",
            },
            {
              q: "What happens to my position if Hyperliquid goes offline?",
              a: "As a non-custodial protocol, your funds are held in smart contracts — not on Hyperliquid's balance sheet. However, if the protocol itself experienced a critical failure, positions would need to be unwound via on-chain mechanisms. This is a real smart contract/infrastructure risk to factor in.",
            },
            {
              q: "How much HYPE do I need to create a new market?",
              a: "500,000 HYPE tokens. At March 2026 prices (HYPE ~$18), that's roughly $9 million. This intentionally high bar filters out spam markets and ensures market creators are financially committed to the market's health.",
            },
            {
              q: "What's the difference between pmUSDH and regular USDC collateral?",
              a: "Regular USDC sitting as collateral earns nothing. pmUSDH automatically earns lending yield (paid by traders who borrow margin) while still fully backing your positions. It's strictly better collateral, with the added bonus of being usable across external DeFi protocols for stacked yield.",
            },
            {
              q: "Are there limits on how much I can trade on HIP-3?",
              a: "There are no KYC-based position limits. However, individual markets have open interest caps set by market parameters, and maximum leverage varies by asset (oil and commodities typically cap lower than crypto pairs). Very large positions may also face significant market impact on thinner markets.",
            },
          ].map((item, i) => (
            <div key={i} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: 18, marginBottom: 12 }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#58a6ff", marginBottom: 8 }}>{item.q}</h3>
              <p style={{ color: "#8b949e", fontSize: 14, lineHeight: 1.75, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </section>

        {/* Related Articles */}
        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: "#e6edf3" }}>📚 Related Guides</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
            {[
              { href: "/learn/hyperliquid-guide", label: "Hyperliquid Complete Guide 2026" },
              { href: "/learn/perpetual-futures-guide", label: "Perpetual Futures Trading Guide" },
              { href: "/learn/best-perpetual-dex-guide", label: "Best Perp DEXs in 2026" },
              { href: "/learn/restaking-eigenlayer-guide", label: "Restaking & EigenLayer Guide" },
              { href: "/learn/real-world-assets-rwa-guide", label: "Real World Assets (RWA) Guide" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 8, padding: "12px 16px", color: "#58a6ff", textDecoration: "none", fontSize: 14, display: "block", lineHeight: 1.4 }}
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </section>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {["Hyperliquid", "HIP-3", "Tokenized Futures", "On-Chain Commodities", "DeFi Trading", "Perpetual DEX", "Oil Futures", "Portfolio Margin", "pmUSDH", "HYPE Token"].map((tag) => (
            <span key={tag} style={{ background: "#161b22", border: "1px solid #30363d", borderRadius: 6, padding: "4px 10px", fontSize: 12, color: "#8b949e" }}>
              #{tag.toLowerCase().replace(/\s+/g, "-")}
            </span>
          ))}
        </div>

      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/tools/bitcoin-dominance-chart-live" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Bitcoin Dominance Chart Live</a></li>
            <li><a href="/tools/crypto-correlation-matrix" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Correlation Matrix</a></li>
            <li><a href="/tools/crypto-profit-calculator" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Profit Calculator</a></li>
            <li><a href="/tools/eth-burn-tracker-live" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Eth Burn Tracker Live</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
    </div>
  );
}
