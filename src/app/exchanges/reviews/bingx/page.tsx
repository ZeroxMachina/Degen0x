import type { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "BingX",
  slug: "bingx",
  rating: 3.8,
  description:
    "BingX is a global crypto exchange specializing in copy trading and derivatives, serving over 10 million users with competitive fees and social trading features.",
  pros: [
    "Industry-leading copy trading platform with transparent performance data",
    "Competitive futures trading fees starting at 0.02% maker",
    "Perpetual futures with up to 150x leverage on major pairs",
    "User-friendly interface suitable for intermediate traders",
  ],
  cons: [
    "Smaller spot market selection compared to top exchanges",
    "Not available to US residents",
    "Lower liquidity on altcoin pairs",
    "Relatively newer exchange with a shorter track record",
  ],
  fees: "0.1% spot; 0.02%/0.05% futures maker/taker",
  bestFor: "Copy traders and derivatives enthusiasts",
  affiliateUrl: "https://degen0x.com/go/bingx",
  category: "exchanges",
};

export const metadata: Metadata = {
  title: `BingX Review (${CURRENT_YEAR}) - Best Copy Trading Exchange? | ${SITE_NAME}`,
  description: `Complete BingX review for ${CURRENT_YEAR}. Covers copy trading features, futures trading, fees, security, and user experience.`,
  alternates: { canonical: "/exchanges/reviews/bingx" }};

const overview =
  "BingX is a centralized cryptocurrency exchange founded in 2018, primarily known for its copy trading capabilities and derivatives offerings. The platform has grown to serve over 10 million registered users across more than 100 countries. BingX positions itself at the intersection of social trading and crypto derivatives, making it particularly appealing to traders who want to follow experienced professionals or share their own strategies for profit.\n\nThe exchange supports spot trading, perpetual futures with up to 150x leverage, standard futures, and a grid trading bot. Its copy trading marketplace is one of the most feature-rich in the industry, allowing users to discover, evaluate, and automatically replicate the strategies of lead traders. BingX also provides a demo trading mode that lets newcomers practice without risking real funds.\n\nBingX has invested in regulatory compliance, obtaining licenses in multiple jurisdictions and implementing proof-of-reserves reporting. The platform offers competitive fees, especially for futures trading, and a clean interface that balances functionality with accessibility. While it may not match the sheer scale of Binance or OKX, BingX carves out a strong niche for social and derivatives trading.";

const sections = [
  {
    id: "copy-trading",
    title: "Copy Trading Platform",
    content:
      "BingX's copy trading is its flagship feature and arguably the best implementation among crypto exchanges. The marketplace presents lead traders with detailed performance dashboards showing ROI, win rate, maximum drawdown, trading frequency, and profit/loss history over multiple timeframes. Followers can set investment amounts, stop-loss limits, and choose between proportional and fixed-amount copying modes. The system supports both spot and futures copy trading, and lead traders earn a percentage of their followers' profits as compensation. BingX regularly audits lead trader statistics to prevent manipulation.",
  },
  {
    id: "futures-trading",
    title: "Futures & Derivatives",
    content:
      "BingX offers USDT-margined perpetual futures on 100+ trading pairs with leverage up to 150x on major assets like BTC and ETH. The futures platform includes standard order types, trailing stops, and take-profit/stop-loss orders. Funding rates are competitive and published in real-time. BingX also offers standard futures contracts with set expiration dates. The platform provides a liquidation calculator and margin calculator to help traders manage risk. Charting is powered by TradingView with a full suite of technical indicators.",
  },
  {
    id: "user-experience",
    title: "User Experience",
    content:
      "BingX offers a clean, modern interface that is easier to navigate than many competitors. The web platform organizes features into clear categories: spot, futures, copy trading, earn, and grid bots. The learning curve is moderate, with sufficient tools for intermediate traders while not overwhelming beginners. The mobile app is well-designed and mirrors the desktop functionality with responsive performance. BingX supports a demo trading mode that provides virtual funds for risk-free practice, which is particularly useful for newcomers to derivatives trading.",
  },
  {
    id: "grid-trading",
    title: "Grid Trading Bot",
    content:
      "BingX includes an automated grid trading bot that places buy and sell orders at set intervals within a price range. Users can configure the grid manually or use AI-recommended parameters based on historical volatility analysis. The bot supports both spot and futures grid strategies. Grid trading is most effective in sideways or range-bound markets, automatically buying low and selling high within the defined range. Performance tracking shows realized profits, number of executed trades, and annualized return estimates.",
  },
  {
    id: "security-measures",
    title: "Security & Compliance",
    content:
      "BingX has obtained regulatory licenses in Australia, the EU, and other jurisdictions. The exchange publishes proof-of-reserves reports and maintains cold storage for the majority of user funds. Security features include two-factor authentication, anti-phishing codes, withdrawal address whitelisting, and IP restriction options. BingX underwent a minor security incident in September 2024 affecting a hot wallet, which was promptly addressed with full user fund reimbursement. The incident highlighted the importance of the exchange maintaining a strong insurance fund.",
  },
];

const fees: Record<string, string> = {
  "Spot Trading (Maker)": "0.1%",
  "Spot Trading (Taker)": "0.1%",
  "Futures (Maker)": "0.02%",
  "Futures (Taker)": "0.05%",
  "Copy Trading": "Up to 10% of follower profits (paid to lead trader)",
  "Deposit": "Free",
  "Withdrawal": "Varies by asset and network",
};

const security = [
  "Proof-of-reserves reports published regularly",
  "Majority of funds stored in cold wallet infrastructure",
  "Two-factor authentication with authenticator app support",
  "Anti-phishing code for email communications",
  "Withdrawal address whitelisting with cooling periods",
  "Licensed in Australia, EU, and other jurisdictions",
  "Insurance fund for user asset protection",
];

const features = [
  "Industry-leading copy trading marketplace with transparent performance data",
  "Perpetual futures with up to 150x leverage on 100+ pairs",
  "Demo trading mode with virtual funds for risk-free practice",
  "Automated grid trading bot with AI parameter recommendations",
  "Spot trading for 700+ cryptocurrency pairs",
  "Standard futures contracts with set expiration dates",
  "Staking and earn products for passive yield",
  "Multi-jurisdiction regulatory licenses",
];

const faqs = [
  {
    question: "Is BingX safe to use?",
    answer:
      "BingX holds regulatory licenses in multiple jurisdictions and publishes proof-of-reserves. The exchange experienced a minor hot wallet security incident in 2024 but fully reimbursed affected users. Standard security features include 2FA, withdrawal whitelisting, and cold storage. As with all exchanges, only keep funds on the platform that you actively need for trading.",
  },
  {
    question: "How does BingX copy trading work?",
    answer:
      "You browse the copy trading marketplace, evaluate lead traders based on their performance metrics, and allocate funds to automatically copy their trades. When the lead trader opens or closes a position, your account mirrors the action proportionally. You can set stop-loss limits and maximum investment amounts. Lead traders earn a percentage of their followers' profits.",
  },
  {
    question: "Is BingX available in the US?",
    answer:
      "No. BingX is not available to residents of the United States. US-based traders should consider exchanges like Coinbase, Kraken, or eToro for copy trading features.",
  },
  {
    question: "What is the minimum deposit on BingX?",
    answer:
      "There is no minimum deposit for cryptocurrency transfers to BingX. For copy trading, minimum investment amounts vary by lead trader and typically start from $10-50. Futures trading minimum position sizes depend on the specific contract.",
  },
];

const relatedReviews = [
  { name: "Bybit", slug: "bybit" },
  { name: "Bitget", slug: "bitget" },
  { name: "OKX", slug: "okx" },
];

const relatedGuides = [
  { title: "Best Exchanges for Futures", href: "/exchanges/best/futures" },
  { title: "How to Read Charts", href: "/exchanges/learn/how-to-read-charts" },
];

export default function BingXReviewPage() {
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
