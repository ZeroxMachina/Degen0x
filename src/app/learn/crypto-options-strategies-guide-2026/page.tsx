import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: "Crypto Options Strategies 2026: Calls, Spreads & More | degen0x",
  description: "Master crypto options strategies in 2026. Learn covered calls, protective puts, bull/bear spreads, straddles, strangles, iron condors, and where to trade DeFi and CeFi options.",
  keywords: ["options strategies", "covered calls", "put spreads", "call spreads", "straddles", "strangles", "iron condors", "DeFi options", "Deribit", "Aevo", "crypto derivatives"],
  openGraph: {
    title: "Crypto Options Strategies 2026: Covered Calls, Straddles, Spreads & More",
    description: "Complete guide to crypto options strategies. Harness volatility and protect your portfolio with covered calls, spreads, and volatility strategies.",
    url: `${SITE_URL}/learn/crypto-options-strategies-guide-2026`,
    type: "article",
    publishedTime: "2026-03-01T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: `${SITE_URL}/og-crypto-options-strategies-guide-2026.svg`,
        width: 1200,
        height: 630,
        alt: "Crypto Options Strategies Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crypto Options Strategies 2026: Complete Guide",
    description: "Master covered calls, spreads, straddles, and more. DeFi and CeFi options trading strategies.",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Learn", href: "/learn" },
  { label: "Crypto Options Strategies 2026", href: "/learn/crypto-options-strategies-guide-2026" },
];

// ─── Structured Data ──────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Crypto Options Strategies 2026: Covered Calls, Straddles, Spreads & More",
  description: "Master crypto options strategies in 2026. Learn covered calls, protective puts, bull/bear spreads, straddles, strangles, iron condors, and where to trade DeFi and CeFi options.",
  url: `${SITE_URL}/learn/crypto-options-strategies-guide-2026`,
  datePublished: "2026-03-01T00:00:00Z",
  dateModified: "2026-03-25T00:00:00Z",
  author: "degen0x Team",
  image: `${SITE_URL}/og-crypto-options-strategies-guide-2026.svg`,
  wordCount: 3500,
});

export default function CryptoOptionsStrategiesGuide() {
  const faqs = [
    {
      question: "What makes crypto options different from equity options?",
      answer: "Crypto options trade on assets with much higher implied volatility (60-120% annualized vs 15-30% for equities), which increases premium prices but also allows for wider profit ranges on directional strategies. Crypto markets trade 24/7 without circuit breakers, crypto options typically lack standardized expiration dates on DeFi protocols (unlike traditional exchanges), and IV crush can be severe during consolidation periods. Additionally, most DeFi options are non-custodial and trustless, whereas CeFi options require exchange account holdings."
    },
    {
      question: "What is IV crush and how does it affect my options?",
      answer: "IV (implied volatility) crush occurs when volatility collapses—usually after a major announcement, ETF decision, or earnings event. If you bought a long call or put expecting high volatility and IV drops 50%, your option's value decays rapidly even if the price moves in your direction. Conversely, if you sold a put and IV crushes, you profit. To mitigate crush, avoid buying far OTM options before known events, close positions before volatility events complete, or sell premium during elevated IV to collect theta."
    },
    {
      question: "How do Greeks (delta, theta, vega) help me manage options?",
      answer: "Delta measures directional exposure: 0.5 delta means a $1 move in the underlying moves the option $0.50. Theta measures time decay—how much value you lose per day holding a position; short sellers profit from theta. Vega measures volatility sensitivity; if IV increases, long vega positions (long calls/puts) profit, while short vega positions (short calls/puts) lose. Balancing these Greeks—say, selling theta-positive put spreads but buying gamma for protection—helps manage portfolio risk across multiple dimensions."
    },
    {
      question: "What is the difference between DeFi and CeFi options, and which should I use?",
      answer: "CeFi options (Deribit, OKX, Bybit) offer deep liquidity, tight spreads, lower minimum position sizes, and mature platforms, but require KYC and trusted counterparties. DeFi options (Aevo, Derive, Panoptic) are permissionless and non-custodial, meaning no exchange can freeze your account or disappear with your funds, but liquidity is thinner, spreads wider, and minimum sizes higher. Choose CeFi for active trading and spreads, DeFi for trustlessness and avoiding exchange risk."
    },
    {
      question: "Can I use options on leverage, and what are the risks?",
      answer: "Yes, many options platforms offer leverage (e.g., Deribit offers 2-10x on certain strategies), but leverage on options amplifies both gains and losses. Buying calls on 5x leverage means a 10% move in the underlying can wipe you out. Additionally, liquidation mechanisms differ between platforms—some force-close positions below a certain collateral ratio, leaving you with losses on both sides. Position sizing (risk 1-5% per trade) and stop-losses are critical when using leverage."
    },
    {
      question: "How do I calculate breakeven prices and max profit/loss for a spread?",
      answer: "For a bull call spread (buy $50 call, sell $60 call): Max profit = (60 - 50) - premium paid = capped; max loss = premium paid. Breakeven = $50 strike + net premium paid. For example, if you pay $2 net, breakeven is $52. For a short put spread (sell $40 put, buy $30 put): Max profit = net premium collected; max loss = (40 - 30) - premium received. Always calculate these before opening the trade—it prevents surprises at expiration."
    },
  ];

  const optionsPlatforms = [
    { platform: "Deribit", type: "CeFi", feature: "Largest options exchange, $24B+ volumes, deep liquidity", minSize: "$100 notional", fees: "0.05% maker / 0.1% taker" },
    { platform: "Aevo", type: "DeFi L2", feature: "Custom rollup, low gas costs, fast execution, decentralized", minSize: "$500", fees: "0.02% maker / 0.05% taker" },
    { platform: "Derive", type: "DeFi", feature: "70% DeFi market share, on-chain settlement, multiple underlyings", minSize: "$1000", fees: "0.1% / 0.2%" },
    { platform: "Panoptic", type: "DeFi (Uniswap V3)", feature: "Permissionless, composable with LP positions, no oracles", minSize: "$500", fees: "Variable, paid to LPs" },
  ];

  const strategyComparison = [
    { strategy: "Long Straddle", buyCall: "Yes (ATM)", buyPut: "Yes (ATM)", profitScenario: "Large move either direction", maxProfit: "Unlimited", maxLoss: "Premiums paid", bestFor: "Pre-FOMC, ETF approval decisions" },
    { strategy: "Long Strangle", buyCall: "Yes (OTM)", buyPut: "Yes (OTM)", profitScenario: "Large move either direction", maxProfit: "Unlimited", maxLoss: "Premiums paid", bestFor: "Cheaper than straddle, less premium spent" },
    { strategy: "Short Straddle", sellCall: "Yes (ATM)", sellPut: "Yes (ATM)", profitScenario: "Small range, theta decay", maxProfit: "Premiums collected", maxLoss: "Unlimited", bestFor: "High IV environment (sell high)" },
    { strategy: "Short Strangle", sellCall: "Yes (OTM)", sellPut: "Yes (OTM)", profitScenario: "Price stays in range", maxProfit: "Premiums collected", maxLoss: "Unlimited", bestFor: "Lower risk than straddle, less capital" },
  ];

  const faqSchema = generateFAQSchema(faqs);
  const structuredData = combineSchemas(articleSchema, faqSchema);

  const S = {
    bg: "#0d1117",
    surface: "#161b22",
    surface2: "#1c2330",
    border: "#30363d",
    text: "#c9d1d9",
    text2: "#8b949e",
    link: "#58a6ff",
    green: "#3fb950",
    red: "#f85149",
    orange: "#f0883e",
    yellow: "#d29922",
    blue: "#58a6ff",
    purple: "#8957e5",
  };

  return (
    <main style={{ backgroundColor: S.bg, color: S.text, minHeight: "100vh" }}>
      <StructuredData data={structuredData} />

      {/* Breadcrumb */}
      <div style={{ borderBottom: `1px solid ${S.border}`, paddingTop: 24 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 24px 24px" }}>
          <Breadcrumb items={breadcrumbs} />
        </div>
      </div>

      <article style={{ maxWidth: 900, margin: "0 auto", padding: "48px 24px 80px" }}>
        {/* Header */}
        <header style={{ marginBottom: 48 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16, flexWrap: "wrap" }}>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.blue}20`, color: S.blue, border: `1px solid ${S.blue}40` }}>🎯 DeFi Derivatives</span>
            <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${S.purple}20`, color: "#d2a8ff", border: `1px solid ${S.purple}40` }}>⚡ Advanced</span>
            <span style={{ fontSize: 12, color: S.text2 }}>March 2026 · 15 min read</span>
          </div>

          <h1 style={{ fontSize: "2.4rem", fontWeight: 900, lineHeight: 1.2, marginBottom: 20, background: "linear-gradient(135deg, #58a6ff, #79c0ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            Crypto Options Strategies 2026: Covered Calls, Straddles, Spreads & More
          </h1>

          <p style={{ fontSize: 17, color: S.text2, lineHeight: 1.75, marginBottom: 28 }}>
            Bitcoin and Ethereum options trade with implied volatility 4-8x higher than traditional equities, unlocking strategies most traders never see. Whether you hold crypto and want to generate yield, bet on volatility, or protect your downside, options strategies are your secret weapon. This guide covers every major strategy—from simple covered calls to complex iron condors—plus exactly where to trade them in 2026.
          </p>

          {/* Quick Strategy Box */}
          <div style={{ background: `${S.blue}10`, border: `1px solid ${S.blue}30`, borderRadius: 14, padding: 24, marginBottom: 32 }}>
            <h2 style={{ fontSize: 16, fontWeight: 800, color: S.blue, marginBottom: 16 }}>⚡ Quick Strategy Selector</h2>
            <p style={{ fontSize: 14, color: S.text2, marginBottom: 16, lineHeight: 1.7 }}>
              Skip ahead to the strategy that matches your goal: earning yield (covered calls), protecting downside (puts), betting on upside (bull spreads), predicting ranges (iron condors), or riding volatility (straddles).
            </p>
          </div>

          {/* Table of Contents */}
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: S.text, marginBottom: 12 }}>📋 Table of Contents</div>
            {[
              ["#why-options", "Why Options Strategies Matter in Crypto"],
              ["#covered-calls", "Covered Calls: Earn Yield on Your Holdings"],
              ["#protective-puts", "Protective Puts: Insurance for Your Portfolio"],
              ["#bull-spreads", "Bull Call Spreads: Leveraged Upside"],
              ["#bear-spreads", "Bear Put Spreads: Profit from Downside"],
              ["#straddles-strangles", "Straddles & Strangles: Volatility Trading"],
              ["#iron-condors", "Iron Condors: Range-Bound Income"],
              ["#trading-platforms", "Where to Trade: DeFi vs CeFi Options"],
              ["#risk-management", "Risk Management for Options Traders"],
              ["#faq", "Frequently Asked Questions"],
            ].map(([href, label]) => (
              <div key={href}>
                <a href={href} style={{ display: "block", color: S.link, fontSize: 13, textDecoration: "none", padding: "4px 0", lineHeight: 1.6 }}>→ {label}</a>
              </div>
            ))}
          </div>
        </header>

        {/* Section 1: Why Options Strategies Matter */}
        <section id="why-options" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Why Options Strategies Matter in Crypto</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Crypto's implied volatility—typically 60-120% annualized—is 4-8x higher than equities (15-30%). This extreme volatility is a feature, not a bug: it creates massive opportunities for options traders. High IV means option premiums are fat, spreads wider, and leverage more accessible. Both buyers and sellers of options can profit, but only if they deploy the right strategy at the right time.
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
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            A covered call seller during extreme bullishness can collect 30-50% annualized yield. A straddle buyer before a major ETF decision can 3x their money in days. A bear put spread seller during a panic can lock in consistent income. Options let you monetize any market view: bullish, bearish, or flat. Learn the basics in our <Link href="/learn/defi-options-trading-guide-2026" style={{ color: S.link, textDecoration: "underline" }}>DeFi Options Trading Guide</Link>, then come back here to master advanced strategies.
          </p>
        </section>

        {/* Section 2: Covered Calls */}
        <section id="covered-calls" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Covered Calls: Earn Yield on Your Holdings</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            A covered call is the simplest income strategy. You own an asset (say, 1 BTC), and you sell a call option against it. The buyer of the call pays you a premium upfront. If the price stays below the strike at expiration, you pocket the premium as pure profit and keep your BTC. If the price shoots above the strike, your BTC gets called away, but you keep both the premium and the gains up to the strike.
          </p>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            <strong>Real Example:</strong> You own 1 BTC at $42,000. BTC options have 60 days to expiration. You sell a $50,000 call for $2,000 premium (4.8% yield for 60 days, or ~29% annualized). Outcomes:
          </p>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 20, marginBottom: 24 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16, fontSize: 13 }}>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 8, color: S.green }}>✓ Price stays $48k</div>
                <div style={{ color: S.text2 }}>Keep 1 BTC + $2k premium = +$2k profit</div>
              </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-01"
          updatedDate="2026-03-25"
          readingTime={7}
          section="learn"
        />

              <div>
                <div style={{ fontWeight: 700, marginBottom: 8, color: S.yellow }}>⚡ Price hits $50k exactly</div>
                <div style={{ color: S.text2 }}>Sell 1 BTC + $2k premium = $52k total</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 8, color: S.red }}>✗ Price rockets to $60k</div>
                <div style={{ color: S.text2 }}>Sell 1 BTC at $50k + $2k premium = $52k, miss upside</div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>When to use:</strong> When you hold crypto but think prices will stay flat or rise modestly. You're willing to sacrifice unlimited upside for consistent yields. Ideal during low volatility or sideways markets.
          </p>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Protocols like <strong>Derive</strong> offer vault strategies that automate covered calls—you deposit your ETH, and the protocol sells calls against it monthly, distributing yields to you. Smart for passive income.
          </p>
        </section>

        {/* Section 3: Protective Puts */}
        <section id="protective-puts" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Protective Puts: Insurance for Your Portfolio</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Buying a put gives you the right to sell an asset at a set price. It's insurance. You own 10 ETH at $2,500 each. You're bullish long-term but terrified of a sudden 20% crash (common in crypto). You buy a $2,000 put expiring in 90 days for $100 premium. Now, if ETH crashes to $1,800, you can exercise the put and sell at $2,000, capping your loss.
          </p>

          <div style={{ background: `${S.red}15`, border: `1px solid ${S.red}40`, borderRadius: 10, padding: 16, marginBottom: 24 }}>
            <div style={{ fontWeight: 700, marginBottom: 8, color: S.red }}>Insurance Cost Example</div>
            <div style={{ fontSize: 13, color: S.text2, lineHeight: 1.8 }}>
              Holding 10 ETH at $2,500 ($25,000 value). Buy $2,000 puts for $100 premium per contract ($1,000 total). If ETH crashes to $1,500: you exercise puts, sell at $2,000 each ($20,000), loss = $5,000. Without puts, loss = $10,000. Insurance cost you $1,000 but saved $5,000. <strong>Net gain: $4,000.</strong>
            </div>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>When to use:</strong> Before major announcements (FOMC meetings, SEC decisions, platform shutdowns), right before entering a large position, or when you sense market fragility but still want upside exposure.
          </p>
        </section>

        {/* Section 4: Bull Call Spreads */}
        <section id="bull-spreads" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Bull Call Spreads: Leveraged Upside with Capped Risk</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            A bull call spread pairs two calls: you buy a lower-strike call (say, $45,000 BTC call) and sell a higher-strike call ($48,000). The call you sell generates premium that offsets what you paid for the call you bought, reducing your net cost and capping your maximum profit.
          </p>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 24 }}>
            <div style={{ fontWeight: 700, marginBottom: 12, color: S.blue }}>Bull Call Spread: Buy $45k / Sell $48k</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 13 }}>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Max Profit:</div>
                <div style={{ color: S.text2 }}>($48k - $45k) - net premium = ~$2.4k (if both calls ITM)</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Max Loss:</div>
                <div style={{ color: S.text2 }}>Net premium paid = ~$600 (if price stays below $45k)</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Breakeven:</div>
                <div style={{ color: S.text2 }}>$45k + $600 net premium = $45,600</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>ROI if max profit:</div>
                <div style={{ color: S.green }}>$2,400 / $600 = 400% return</div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>When to use:</strong> When you're bullish but want defined risk. Spreads cost less capital than buying a naked call, perfect for traders with limited funds. You sacrifice unlimited upside for safety.
          </p>
        </section>

        {/* Section 5: Bear Put Spreads */}
        <section id="bear-spreads" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Bear Put Spreads: Profit from Downside</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            The bear put spread is the bearish mirror of the bull call spread. You sell a higher-strike put (say, $40,000 BTC) and buy a lower-strike put ($37,000) for protection. If BTC stays above $40,000, both puts expire worthless, and you keep the net premium. If BTC crashes below $37,000, your long put limits your loss.
          </p>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 24 }}>
            <div style={{ fontWeight: 700, marginBottom: 12, color: S.red }}>Bear Put Spread: Sell $40k / Buy $37k</div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 13 }}>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Max Profit:</div>
                <div style={{ color: S.text2 }}>Net premium collected (~$1,200 if margin keeps spread tight)</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Max Loss:</div>
                <div style={{ color: S.text2 }}>($40k - $37k) - premium = ~$1,800</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>Breakeven:</div>
                <div style={{ color: S.text2 }}>$40k - $1,200 premium = $38,800</div>
              </div>
              <div>
                <div style={{ fontWeight: 700, marginBottom: 4 }}>ROI if max profit:</div>
                <div style={{ color: S.green }}>$1,200 / $1,800 max loss = 67% ROI</div>
              </div>
            </div>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>When to use:</strong> When you think crypto will stay flat or rally modestly, or you want to collect premium in high-volatility environments. Ideal for selling premium when IV is elevated.
          </p>
        </section>

        {/* Section 6: Straddles & Strangles */}
        <section id="straddles-strangles" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Straddles & Strangles: Bet on Volatility</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            A straddle buys (or sells) a call and a put at the same strike. A strangle does the same but at different strikes—lower strike for the put, higher for the call. Both strategies profit when the market moves big in either direction (volatility play).
          </p>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Perfect for crypto</strong> because major catalyst events (FOMC announcements, ETF approvals, network upgrades) cause sharp 10-20% moves in hours. Buy a straddle 2 weeks before, collect profits when volatility explodes.
          </p>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 24, overflow: "auto" }}>
            <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <th style={{ textAlign: "left", padding: 8, fontWeight: 700 }}>Metric</th>
                  <th style={{ textAlign: "left", padding: 8, fontWeight: 700 }}>Long Straddle</th>
                  <th style={{ textAlign: "left", padding: 8, fontWeight: 700 }}>Long Strangle</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: 8, fontWeight: 700 }}>Setup</td>
                  <td style={{ padding: 8, color: S.text2 }}>Buy ATM call + ATM put (same strike)</td>
                  <td style={{ padding: 8, color: S.text2 }}>Buy OTM call + OTM put (different strikes)</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: 8, fontWeight: 700 }}>Cost</td>
                  <td style={{ padding: 8, color: S.text2 }}>Higher (ATM options expensive)</td>
                  <td style={{ padding: 8, color: S.text2 }}>Lower (OTM options cheaper)</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: 8, fontWeight: 700 }}>Max Profit</td>
                  <td style={{ padding: 8, color: S.text2 }}>Unlimited either direction</td>
                  <td style={{ padding: 8, color: S.text2 }}>Unlimited either direction</td>
                </tr>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <td style={{ padding: 8, fontWeight: 700 }}>Breakeven</td>
                  <td style={{ padding: 8, color: S.text2 }}>Strike ± total premium paid</td>
                  <td style={{ padding: 8, color: S.text2 }}>Wide breakeven range, lower probability</td>
                </tr>
                <tr>
                  <td style={{ padding: 8, fontWeight: 700 }}>Best For</td>
                  <td style={{ padding: 8, color: S.text2 }}>High-conviction vol plays, earnings weeks</td>
                  <td style={{ padding: 8, color: S.text2 }}>Cheaper entry, less capital required</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Real Crypto Example:</strong> Bitcoin is at $45,000. An ETF approval is expected in 7 days. You buy a $45,000 straddle (call + put) for $1,500 total. If BTC rockets to $49,000, your call is worth $4,000 and your put expires worthless, netting $2,500 profit on a $1,500 investment. If BTC crashes to $41,000, your put is worth $4,000, netting $2,500. Either direction, you win.
          </p>
        </section>

        {/* Section 7: Iron Condors */}
        <section id="iron-condors" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Iron Condors: Range-Bound Income</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            An iron condor combines two spreads: a bull put spread (sell OTM put, buy lower put) and a bear call spread (sell OTM call, buy higher call). The result: you sell premium on both sides, pocketing income as long as the price stays in the middle range.
          </p>

          <div style={{ background: `${S.purple}15`, border: `1px solid ${S.purple}40`, borderRadius: 10, padding: 16, marginBottom: 24 }}>
            <div style={{ fontWeight: 700, marginBottom: 12, color: "#d2a8ff" }}>Iron Condor Setup: BTC at $45k</div>
            <div style={{ fontSize: 13, color: S.text2, lineHeight: 1.9 }}>
              <div>Sell $42k put / Buy $40k put (downside protection)</div>
              <div>Sell $48k call / Buy $50k call (upside protection)</div>
              <div style={{ marginTop: 8, fontWeight: 700 }}>Max profit: ~$1,200 (all four legs expire worthless)</div>
              <div style={{ fontWeight: 700 }}>Max loss: ~$1,800 (if BTC crashes below $40k or rallies above $50k)</div>
              <div style={{ marginTop: 8, color: S.green }}>Profit zone: $42k–$48k range</div>
            </div>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>When to use:</strong> In consolidation markets where you expect crypto to stay range-bound. High probability of profit (70-80% if you set strikes far enough out), but low return per trade. Ideal for patient, consistent income.
          </p>
        </section>

        {/* Section 8: Trading Platforms */}
        <section id="trading-platforms" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Where to Trade: DeFi vs CeFi Options</h2>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 20 }}>
            You have two worlds: centralized exchanges (CeFi) with deep liquidity and mature platforms, or decentralized protocols (DeFi) offering trustlessness and permissionless access. Here's how they compare:
          </p>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 24, overflow: "auto" }}>
            <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
              <thead>
                <tr style={{ borderBottom: `1px solid ${S.border}` }}>
                  <th style={{ textAlign: "left", padding: 8, fontWeight: 700 }}>Platform</th>
                  <th style={{ textAlign: "left", padding: 8, fontWeight: 700 }}>Type</th>
                  <th style={{ textAlign: "left", padding: 8, fontWeight: 700 }}>Key Feature</th>
                  <th style={{ textAlign: "left", padding: 8, fontWeight: 700 }}>Min Size</th>
                  <th style={{ textAlign: "left", padding: 8, fontWeight: 700 }}>Fees</th>
                </tr>
              </thead>
              <tbody>
                {optionsPlatforms.map((p, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${S.border}` }}>
                    <td style={{ padding: 8, fontWeight: 700 }}>{p.platform}</td>
                    <td style={{ padding: 8, color: S.text2 }}>{p.type}</td>
                    <td style={{ padding: 8, color: S.text2 }}>{p.feature}</td>
                    <td style={{ padding: 8, color: S.text2 }}>{p.minSize}</td>
                    <td style={{ padding: 8, color: S.text2 }}>{p.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>CeFi Champion: Deribit.</strong> With $24B+ notional options volume, Deribit dominates. Tight spreads, lightning-fast execution, and zero KYC for sub-$50k daily withdrawals. Perfect for active traders.
          </p>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>DeFi Innovators:</strong> Aevo (custom Arbitrum rollup with ultra-low gas), Derive (70% of DeFi options market, on-chain settlement), and Panoptic (fully permissionless, composable with Uniswap V3). Choose DeFi if you value censorship-resistance and non-custody, or if you're hedging LP positions.
          </p>
        </section>

        {/* Section 9: Risk Management */}
        <section id="risk-management" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Risk Management for Options Traders</h2>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Position Sizing: The #1 Rule</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            <strong>Risk 1-5% of your portfolio per trade.</strong> If you have $100,000, risk $1,000–$5,000 per position. This means you can lose 10-20 consecutive trades without blowing up. Most options traders who fail do so from overleveraging, not from wrong predictions.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Greeks: Your Dashboard</h3>
          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 10, padding: 16, marginBottom: 20 }}>
            <ul style={{ paddingLeft: 20, color: S.text, lineHeight: 2, fontSize: 14, listStyle: "none" }}>
              <li><strong>Delta:</strong> Directional exposure. 0.5 delta = $1 move in underlying = $0.50 move in option. Monitor portfolio delta to avoid unintended directional drift.</li>
              <li><strong>Theta:</strong> Time decay. Positive theta benefits sellers (short calls/puts), negative hurts buyers. Theta accelerates in the final week before expiration.</li>
              <li><strong>Vega:</strong> Volatility sensitivity. High vega = sensitive to IV changes. In crypto, vega swings can dwarf price moves. Always consider IV crush risk.</li>
              <li><strong>Gamma:</strong> Delta acceleration. High gamma = delta changes fast. Useful for protection, dangerous for sellers near expiration.</li>
            </ul>
          </div>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>IV Crush & Liquidity</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Crypto IV can collapse 50% in hours after volatility events complete. If you bought a straddle expecting a 15% move and got a 15% move but IV crushed, you still lose money. Avoid buying far OTM options before events. Sell premium when IV spikes, not when it's depressed. And on DeFi, always check liquidity—a $10k position on a thin orderbook can slip 20%+.
          </p>

          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 12, marginTop: 24 }}>Stop-Loss Discipline</h3>
          <p style={{ fontSize: 15, color: S.text2, lineHeight: 1.8, marginBottom: 16 }}>
            Set stop-losses at 50% of your max risk before entering. If you can lose $1,000 max, exit at -$500. Emotions destroy options traders. A spread that was winning can reverse quickly. Stick to your rules.
          </p>
        </section>

        {/* Section 10: FAQ */}
        <section id="faq" style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 800, marginBottom: 20, paddingTop: 8 }}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: 12, padding: 20 }}>
                <h3 style={{ fontSize: 15, fontWeight: 800, marginBottom: 12, color: S.link }}>Q: {faq.question}</h3>
                <p style={{ fontSize: 14, color: S.text2, lineHeight: 1.8, margin: 0 }}>
                  <strong>A:</strong> {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Related Links */}
        <section style={{ marginBottom: 48, padding: 24, background: `${S.blue}10`, border: `1px solid ${S.blue}30`, borderRadius: 12 }}>
          <h3 style={{ fontSize: 16, fontWeight: 800, marginBottom: 16, color: S.link }}>📚 Related Resources</h3>
          <ul style={{ paddingLeft: 20, color: S.link, lineHeight: 2, fontSize: 14, listStyle: "none" }}>
            <li><Link href="/learn/defi-options-trading-guide-2026" style={{ color: S.link, textDecoration: "underline" }}>DeFi Options Trading Basics</Link> — Start here if you're new to options.</li>
            <li><Link href="/learn/crypto-options-trading-guide" style={{ color: S.link, textDecoration: "underline" }}>Crypto Options Trading 101</Link> — Introduction to calls, puts, and premiums.</li>
            <li><Link href="/tools/options-calculator" style={{ color: S.link, textDecoration: "underline" }}>Options Payoff Calculator</Link> — Calculate max profit/loss for any strategy.</li>
            <li><Link href="/learn/perpetual-futures-funding-rate-guide" style={{ color: S.link, textDecoration: "underline" }}>Perpetual Futures vs Options</Link> — Compare leverage derivatives.</li>
            <li><Link href="/learn/delta-neutral-strategies" style={{ color: S.link, textDecoration: "underline" }}>Delta-Neutral Trading</Link> — Advanced portfolio balancing.</li>
          </ul>
        </section>

        {/* Disclaimer */}
        <div style={{ background: `${S.yellow}10`, border: `1px solid ${S.yellow}40`, borderRadius: 12, padding: 20, marginBottom: 48 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: S.orange, marginBottom: 8 }}>⚠️ Disclaimer</div>
          <p style={{ fontSize: 13, color: S.text2, lineHeight: 1.8, margin: 0 }}>
            This guide is for informational and educational purposes only. It does not constitute financial advice, investment recommendations, or an offer to buy or sell any financial instrument. Options trading involves substantial risk of loss and is not suitable for all investors. Past performance does not guarantee future results. Crypto assets are volatile and speculative. Always do your own research, consult a financial advisor, and never risk more than you can afford to lose.
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

      <BackToTop />
      <RelatedContent category="learn" currentSlug="/learn/crypto-options-strategies-guide-2026" />
    </main>
  );
}
