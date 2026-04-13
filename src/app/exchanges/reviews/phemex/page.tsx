import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "Phemex",
  slug: "phemex",
  rating: 4.0,
  description: "Phemex is a derivatives-focused crypto exchange founded by ex-Morgan Stanley executives, offering perpetual futures with up to 100x leverage, spot trading, and",
  pros: [
    "Professional-grade derivatives platform with fast execution",
    "Founded by former Wall Street professionals with TradFi expertise",
    "Competitive futures fees starting at 0.01% maker",
    "Strong mobile app with full trading functionality",
  ],
  cons: [
    "Smaller spot market selection compared to top exchanges",
    "Not available to US residents",
    "Less established brand recognition than tier-one exchanges",
    "Earn products have variable and sometimes modest APY rates",
  ],
  fees: "0.1% spot; 0.01%/0.06% futures maker/taker",
  bestFor: "Derivatives traders seeking professional execution",
  affiliateUrl: "https://degen0x.com/go/phemex",
  category: "exchanges",
};

export const metadata: Metadata = {
  title: `Phemex Review (2026) - Professional Derivatives Exchange | degen0x`,
  description: `Complete Phemex review for ${CURRENT_YEAR}. Covers derivatives trading, fees, Wall Street team background, mobile app, security, and features.`,
  alternates: { canonical: "/exchanges/reviews/phemex" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const overview =
  "Phemex is a cryptocurrency derivatives exchange launched in 2019 by a team of eight former Morgan Stanley executives. Based in Singapore, the platform was built to bring institutional-grade trading infrastructure to the crypto market, with a focus on speed, reliability, and professional execution. Phemex supports spot trading for 300+ cryptocurrencies and perpetual futures with up to 100x leverage on major pairs.\n\nThe exchange is known for its performance-focused trading engine, which can process up to 300,000 transactions per second with sub-millisecond latency. This makes Phemex particularly attractive for high-frequency and algorithmic traders who need reliable execution during volatile market conditions. The platform also offers spot trading, earn products, and a copy trading feature.\n\nPhemex has grown steadily since its launch, serving millions of users across multiple countries. The founding team's Wall Street background informs the platform's emphasis on risk management, order execution quality, and institutional-grade infrastructure. While Phemex may lack the sheer volume and coin selection of Binance or OKX, it competes strongly on execution quality and derivatives-specific features.";

const sections = [
  {
    id: "derivatives-platform",
    title: "Derivatives Trading Platform",
    content:
      "Phemex's derivatives platform is its core strength. The exchange offers USDT-margined and coin-margined perpetual futures on 200+ trading pairs with leverage up to 100x. The trading engine delivers sub-millisecond order matching, which is among the fastest in the crypto exchange industry. Advanced order types include conditional orders, trailing stops, take-profit/stop-loss, and bracket orders. The charting suite is powered by TradingView with a comprehensive set of technical indicators. Risk management tools include a liquidation price calculator, margin calculator, and position mode switching between one-way and hedge modes.",
  },
  {
    id: "trading-engine",
    title: "Execution & Performance",
    content:
      "Phemex's trading engine is designed for institutional-grade performance, capable of processing 300,000 TPS with cross-matching latency under one millisecond. This infrastructure was built by the founding team using their experience from building trading systems at Morgan Stanley. The engine has maintained uptime during major market volatility events when other exchanges experienced outages. For algorithmic traders, Phemex provides well-documented REST and WebSocket APIs with reliable data feeds and order management.",
  },
  {
    id: "spot-trading",
    title: "Spot Trading",
    content:
      "While derivatives are Phemex's primary focus, the platform also offers spot trading for 300+ cryptocurrencies. Spot fees are a competitive 0.1% for both makers and takers, with volume-based discounts available. The spot interface uses the same TradingView-powered charts and order types as the derivatives platform. Phemex supports both crypto-to-crypto and fiat-to-crypto purchases through integrated payment providers. The coin selection is moderate, covering all major assets and a growing selection of altcoins.",
  },
  {
    id: "user-experience",
    title: "User Experience & Mobile App",
    content:
      "Phemex offers a clean, professional interface that reflects its institutional roots. The web platform is well-organized with clear separation between spot and derivatives sections. The mobile app is one of Phemex's strengths, providing full access to all trading features with a responsive and well-designed interface. Chart rendering on mobile is smooth, and order execution is reliable. Phemex supports push notifications for price alerts, order fills, and liquidation warnings. The platform includes a demo trading mode with virtual funds for practice.",
  },
  {
    id: "security-measures",
    title: "Security",
    content:
      "Phemex employs a hierarchical deterministic cold wallet system with offline key management and multi-signature authorization. The exchange claims to store all user funds in cold storage, with hot wallet exposure limited to operational needs. Security features include two-factor authentication, withdrawal address whitelisting with 24-hour lock periods, and anti-phishing codes. Phemex has not suffered a major security breach. The platform publishes proof-of-reserves data and undergoes regular security assessments.",
  },
];

const fees: Record<string, string> = {
  "Spot Trading (Maker)": "0.1%",
  "Spot Trading (Taker)": "0.1%",
  "Futures (Maker)": "0.01%",
  "Futures (Taker)": "0.06%",
  "Deposit": "Free",
  "Withdrawal": "Varies by asset and network",
  "Card Purchase": "Third-party provider fees (3-5%)",
};

const security = [
  "Hierarchical deterministic cold wallet system for fund storage",
  "Multi-signature authorization for all withdrawal operations",
  "Two-factor authentication with authenticator app support",
  "Withdrawal address whitelisting with 24-hour lock period",
  "Anti-phishing code for email verification",
  "Regular security assessments and penetration testing",
  "Proof-of-reserves published for transparency",
];

const features = [
  "Sub-millisecond order matching with 300,000 TPS capacity",
  "Perpetual futures with up to 100x leverage on 200+ pairs",
  "Professional charting with TradingView integration",
  "Demo trading mode with virtual funds for practice",
  "Copy trading feature for following successful traders",
  "Spot trading for 300+ cryptocurrencies",
  "Earn products including staking and savings",
  "Founded by former Morgan Stanley executives",
];

const faqs = [
  {
    question: "Who founded Phemex?",
    answer:
      "Phemex was founded in 2019 by Jack Tao and seven other former Morgan Stanley executives. The team brought extensive experience in building high-performance trading systems from Wall Street to the crypto derivatives market. This institutional background informs the platform's focus on execution quality and risk management.",
  },
  {
    question: "Is Phemex available in the US?",
    answer:
      "No. Phemex is not available to US residents due to regulatory restrictions on crypto derivatives in the United States. US-based traders should use regulated platforms like Coinbase, Kraken, or CME futures for Bitcoin derivatives exposure.",
  },
  {
    question: "How fast is Phemex's trading engine?",
    answer:
      "Phemex's trading engine can process up to 300,000 transactions per second with cross-matching latency under one millisecond. This makes it one of the fastest crypto exchange engines available, comparable to traditional financial market infrastructure.",
  },
  {
    question: "Does Phemex offer copy trading?",
    answer:
      "Yes. Phemex offers a copy trading feature that allows users to follow and automatically replicate the trades of experienced traders. You can browse lead traders by performance, risk level, and trading style before committing funds.",
  },
];

const relatedReviews = [
  { name: "Bybit", slug: "bybit" },
  { name: "OKX", slug: "okx" },
  { name: "Bitget", slug: "bitget" },
];

const relatedGuides = [
  { title: "Spot vs Futures Trading", href: "/exchanges/learn/spot-vs-futures" },
  { title: "Best Exchanges for Futures", href: "/exchanges/best/futures" },
];

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Exchanges', item: 'https://degen0x.com/exchanges' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/exchanges/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Phemex', },
  ],
};

export default function PhemexReviewPage() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      overview={overview}
      sections={sections}
      fees={fees}
      security={security}
      features={features}
      faqs={faqs}
      relatedReviews={relatedReviews}
      relatedGuides={relatedGuides}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Derivatives Trading Platform", "description": "Phemex is a derivatives-focused crypto exchange founded by ex-Morgan Stanley executives, offering perpetual futures with up to 100x leverage, spot trading, and", "url": "https://degen0x.com/exchanges/reviews/phemex", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/exchanges/reviews/backpack" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Backpack</a>
  <a href="/exchanges/reviews/backpack-exchange" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Backpack Exchange</a>
  <a href="/exchanges/reviews/binance" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Binance</a>
  <a href="/exchanges/reviews/bingx" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bingx</a>
  <a href="/exchanges/reviews/bitfinex" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bitfinex</a>
  <a href="/exchanges/reviews/bitget" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bitget</a>
  <a href="/exchanges/reviews/bitmart" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bitmart</a>
  <a href="/exchanges/reviews/bitmex" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bitmex</a>
</nav>
      </>
  );
}
