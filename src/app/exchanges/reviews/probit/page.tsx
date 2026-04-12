import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "ProBit Global",
  slug: "probit",
  rating: 3.4,
  description:
    "ProBit Global is a South Korean crypto exchange offering 800+ trading pairs, IEO launchpad, and staking with a focus on listing emerging projects early.",
  pros: [
    "800+ trading pairs with many early-stage project listings",
    "Active IEO launchpad with frequent new token sales",
    "Competitive base fees of 0.2% with PROB token discounts",
    "Available in most countries with minimal KYC requirements",
  ],
  cons: [
    "Very low liquidity on most altcoin pairs",
    "User interface feels dated compared to modern exchanges",
    "Limited futures and derivatives offerings",
    "Smaller community and less transparent operations",
  ],
  fees: "0.2% maker/taker (reduced with PROB token)",
  bestFor: "IEO participants and micro-cap altcoin traders",
  affiliateUrl: "https://degen0x.com/go/probit",
  category: "exchanges",
};

export const metadata: Metadata = {
  title: `ProBit Global Review (${CURRENT_YEAR}) - IEO Launchpad & Altcoin Trading | ${SITE_NAME}`,
  description: `Complete ProBit Global review for ${CURRENT_YEAR}. Covers IEO launchpad, 800+ trading pairs, fees, security, and trading experience.`,
  alternates: { canonical: "/exchanges/reviews/probit" }};

const overview =
  "ProBit Global is a cryptocurrency exchange headquartered in South Korea, launched in 2018. The platform has positioned itself as a gateway for emerging blockchain projects to reach the market, offering an active IEO (Initial Exchange Offering) launchpad alongside standard spot trading services. ProBit lists over 800 trading pairs, many of which are micro-cap tokens unavailable on larger exchanges.\n\nThe exchange operates with a relatively simple product offering focused primarily on spot trading and its launchpad. Unlike many competitors, ProBit does not offer futures, margin trading, or complex derivative products. This simplicity can be an advantage for users who want a straightforward trading experience without the complexity of leveraged products, but it limits the platform's appeal for advanced traders.\n\nProBit's PROB utility token provides fee discounts and access to exclusive launchpad events. The exchange serves users in most countries and maintains a policy of minimal KYC requirements for basic trading. While ProBit fills a niche for IEO participation and micro-cap trading, its lower liquidity, dated interface, and limited feature set place it below larger competitors for most trading needs.";

const sections = [
  {
    id: "ieo-launchpad",
    title: "IEO Launchpad",
    content:
      "ProBit's Exclusive launchpad is the platform's most distinctive feature. The exchange regularly hosts IEO events where new blockchain projects sell tokens at discounted prices before broader market listing. Participation typically requires holding PROB tokens or meeting minimum trading volume thresholds. ProBit has hosted hundreds of IEO events since its launch, though outcomes for participants vary significantly. The launchpad provides project documentation, tokenomics information, and team details to help users make informed decisions. Early-stage token sales carry substantial risk, and many IEO tokens have depreciated significantly post-launch.",
  },
  {
    id: "trading-experience",
    title: "Trading Experience",
    content:
      "ProBit offers spot trading with market and limit orders. The trading interface provides basic charting with TradingView integration and standard order book visualization. The platform does not offer margin trading, futures, or options, making it a spot-only exchange. While the charting and order execution are functional, the overall interface feels less modern than competitors. The platform supports both a web version and mobile app, with the mobile experience offering adequate functionality for basic trading.",
  },
  {
    id: "coin-selection",
    title: "Token Selection & Liquidity",
    content:
      "ProBit lists over 800 trading pairs, with a heavy emphasis on small-cap and newly launched projects. The exchange is often among the first to list tokens from its IEO program and from the broader market. However, the major caveat is liquidity: the vast majority of listed pairs have extremely low trading volume, resulting in wide spreads and potential difficulty executing trades at desired prices. Major pairs like BTC/USDT and ETH/USDT maintain reasonable liquidity, but micro-cap tokens may have daily volumes under $1,000.",
  },
  {
    id: "prob-token",
    title: "PROB Token & Benefits",
    content:
      "PROB is ProBit's native utility token that provides several platform benefits. Holding PROB grants access to exclusive IEO events with priority allocation. The token provides trading fee discounts, reducing the base 0.2% fee for holders. PROB can also be staked on the platform for additional rewards. The token serves as the primary mechanism for engaging with ProBit's launchpad ecosystem.",
  },
  {
    id: "security-measures",
    title: "Security",
    content:
      "ProBit implements standard security measures including two-factor authentication, email confirmation for withdrawals, and cold storage for the majority of user funds. The exchange has not suffered a publicly reported major security breach. However, ProBit provides less transparency about its security practices and audit history compared to larger exchanges. The platform operates with minimal KYC for basic accounts, which increases accessibility but may raise concerns for users who prefer exchanges with stricter compliance frameworks.",
  },
];

const fees: Record<string, string> = {
  "Spot Trading (Maker)": "0.2% (reduced with PROB token)",
  "Spot Trading (Taker)": "0.2% (reduced with PROB token)",
  "IEO Participation": "Free (PROB holding required)",
  "Deposit": "Free",
  "Withdrawal": "Varies by asset and network",
};

const security = [
  "Cold storage for majority of user funds",
  "Two-factor authentication via Google Authenticator",
  "Email confirmation required for withdrawals",
  "No publicly reported major security breaches",
  "Anti-phishing code for email communications",
  "IP restriction options for account access",
];

const features = [
  "800+ trading pairs with early-stage project listings",
  "Active IEO launchpad with frequent token sales",
  "PROB utility token for fee discounts and launchpad access",
  "Spot trading with TradingView charting integration",
  "Staking products for select assets",
  "Available in most countries with minimal KYC",
  "Multi-language support including Korean, English, and others",
  "Mobile app available on iOS and Android",
];

const faqs = [
  {
    question: "Is ProBit Global safe?",
    answer:
      "ProBit has not suffered a publicly reported major security breach and implements standard security measures. However, the exchange provides less transparency about security practices compared to larger platforms. Use 2FA, enable email confirmations, and only keep funds on the exchange that you need for active trading.",
  },
  {
    question: "Is ProBit available in the US?",
    answer:
      "ProBit Global operates a separate ProBit US platform for American users, but the availability of tokens and features may differ. US residents should verify their state's eligibility before registering.",
  },
  {
    question: "Are ProBit IEOs worth participating in?",
    answer:
      "IEO results on ProBit vary significantly. Some early participants have seen positive returns, but many IEO tokens have depreciated substantially after listing. The quality of projects on ProBit's launchpad is generally lower than those on top-tier launchpads like Binance Launchpad. Treat IEO participation as high-risk, speculative activity.",
  },
  {
    question: "Why is liquidity so low on ProBit?",
    answer:
      "ProBit's focus on listing micro-cap and emerging tokens means that many pairs have limited trading activity. The exchange's smaller user base compared to giants like Binance or KuCoin also contributes to lower overall volume. Stick to higher-volume pairs for better execution.",
  },
];

const relatedReviews = [
  { name: "Gate.io", slug: "gate-io" },
  { name: "LBank", slug: "lbank" },
  { name: "BitMart", slug: "bitmart" },
];

const relatedGuides = [
  { title: "Best Exchanges for Altcoins", href: "/exchanges/best/altcoins" },
  { title: "How to Choose an Exchange", href: "/exchanges/learn/how-to-choose-exchange" },
];

export default function ProBitReviewPage() {
  return (
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
  );
}
