import type { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "LBank",
  slug: "lbank",
  rating: 3.6,
  description:
    "LBank is a global crypto exchange founded in 2015, offering 800+ cryptocurrencies with a focus on altcoin discovery, low fees, and copy trading features.",
  pros: [
    "Large selection of 800+ altcoins with frequent new listings",
    "Competitive spot trading fees starting at 0.1%",
    "Copy trading and grid bot features for automated strategies",
    "No mandatory KYC for basic trading up to certain limits",
  ],
  cons: [
    "Lower liquidity on many trading pairs compared to top-tier exchanges",
    "Not available to US residents",
    "Interface can feel cluttered and less polished than competitors",
    "Limited regulatory transparency and licensing information",
  ],
  fees: "0.1% maker/taker",
  bestFor: "Altcoin hunters seeking early-stage listings",
  affiliateUrl: "https://degen0x.com/go/lbank",
  category: "exchanges",
};

export const metadata: Metadata = {
  title: `LBank Review (${CURRENT_YEAR}) - 800+ Altcoins & Copy Trading | ${SITE_NAME}`,
  description: `Complete LBank review for ${CURRENT_YEAR}. Covers fees, 800+ supported coins, copy trading, grid bots, security, and how it compares to top exchanges.`,
};

const overview =
  "LBank is a centralized cryptocurrency exchange that has been operating since 2015. Headquartered in Hong Kong, the platform serves users in over 200 countries and regions, offering access to more than 800 cryptocurrencies across spot, futures, and derivative markets. LBank has positioned itself as a mid-tier exchange that appeals primarily to altcoin traders looking for early access to new tokens before they reach larger platforms.\n\nThe exchange offers a straightforward spot trading interface, perpetual futures with up to 125x leverage, grid trading bots, and a copy trading feature. LBank also runs a launchpad called LBK Labs for early-stage token sales. The platform supports fiat on-ramps through third-party providers and has gradually expanded its feature set to compete with larger rivals like Gate.io and KuCoin.\n\nWhile LBank provides solid functionality for experienced traders, its lower liquidity on many pairs, limited brand recognition, and lack of transparency around regulatory licensing are drawbacks to consider. The exchange is best suited for crypto-savvy users who understand the risks of trading on smaller platforms and want access to emerging tokens.";

const sections = [
  {
    id: "coin-selection",
    title: "Coin Selection & Listings",
    content:
      "LBank lists over 800 cryptocurrencies spanning DeFi, Layer 1 and Layer 2 protocols, gaming tokens, memecoins, and various niche sectors. The exchange has a relatively fast listing process and frequently adds new tokens shortly after they launch. This makes LBank attractive for traders who want to access emerging projects early. However, the flip side is that many smaller-cap tokens have limited liquidity, resulting in wider spreads and potential slippage. Established pairs like BTC/USDT and ETH/USDT maintain healthy order books, but micro-cap tokens may require patience to fill orders at favorable prices.",
  },
  {
    id: "trading-features",
    title: "Trading Features",
    content:
      "LBank supports spot trading with standard order types including market, limit, and stop-limit orders. Perpetual futures are available on major pairs with up to 125x leverage, using both USDT-margined and coin-margined contracts. The platform includes TradingView-integrated charts with a range of technical indicators. Grid trading bots allow users to automate range-bound strategies, and the copy trading feature lets users follow profitable traders. The platform also offers staking products and a simple earn section for passive yield on select assets.",
  },
  {
    id: "user-experience",
    title: "User Experience",
    content:
      "LBank's web interface provides a functional trading experience, though the design lacks the refinement of top-tier exchanges. The trading terminal includes the standard layout with charts, order book, and trade history, but navigation between sections can feel disjointed. The mobile app is available on iOS and Android with full trading functionality. LBank supports multiple languages and offers both light and dark themes. Onboarding is straightforward, with the option to start trading without full KYC for limited withdrawal amounts.",
  },
  {
    id: "copy-trading",
    title: "Copy Trading & Bots",
    content:
      "LBank's copy trading feature allows users to browse a marketplace of lead traders, view their historical performance metrics, and automatically replicate their trades. The system supports both spot and futures copy trading with configurable investment amounts and risk parameters. Grid trading bots are available for automating buy and sell orders within price ranges. These automated tools make LBank accessible to less experienced traders, though past performance of lead traders does not guarantee future results.",
  },
  {
    id: "security-measures",
    title: "Security",
    content:
      "LBank employs standard industry security practices including cold wallet storage for the majority of user funds, two-factor authentication, email verification for withdrawals, and an anti-phishing code system. The exchange has not publicly disclosed a major security breach. However, LBank provides less transparency about its security infrastructure compared to leading exchanges, and independent security audits are not prominently published. Users should exercise standard precautions including enabling all available security features and limiting the amount of funds kept on the platform.",
  },
];

const fees: Record<string, string> = {
  "Spot Trading (Maker)": "0.1%",
  "Spot Trading (Taker)": "0.1%",
  "Futures (Maker)": "0.02%",
  "Futures (Taker)": "0.06%",
  "Deposit": "Free",
  "Withdrawal": "Varies by asset and network",
  "Fiat Purchase": "Third-party provider fees apply",
};

const security = [
  "Majority of funds stored in cold wallet infrastructure",
  "Two-factor authentication via Google Authenticator",
  "Email verification required for withdrawal requests",
  "Anti-phishing code for identifying official communications",
  "IP whitelisting for account access restriction",
  "Real-time monitoring for suspicious account activity",
];

const features = [
  "800+ listed cryptocurrencies with rapid new token additions",
  "Perpetual futures with up to 125x leverage on major pairs",
  "Copy trading for spot and futures markets",
  "Grid trading bot for automated range trading",
  "LBK Labs launchpad for early access to new projects",
  "Staking and earn products for passive income",
  "Fiat on-ramp through third-party payment providers",
  "Multi-language support across 15+ languages",
];

const faqs = [
  {
    question: "Is LBank safe to use?",
    answer:
      "LBank has operated since 2015 without a publicly reported major security breach. The exchange uses cold storage, 2FA, and standard security measures. However, it provides less transparency about its security audits and reserve status compared to top-tier exchanges. Keep only funds you actively need for trading on the platform.",
  },
  {
    question: "Is LBank available in the US?",
    answer:
      "No. LBank does not serve US residents due to regulatory restrictions. US-based traders should use regulated alternatives such as Coinbase, Kraken, or Gemini.",
  },
  {
    question: "Does LBank require KYC?",
    answer:
      "LBank allows limited trading without KYC, but verification is required for higher withdrawal limits and access to fiat services. KYC involves submitting government-issued ID and may include facial verification depending on your jurisdiction.",
  },
  {
    question: "How does LBank compare to Gate.io?",
    answer:
      "Gate.io offers significantly more listed coins (1,700+ vs 800+) and higher liquidity across most pairs. Gate.io also publishes proof-of-reserves reports, which LBank does not. LBank has comparable fees and similar features, but Gate.io is generally the stronger platform for altcoin trading.",
  },
];

const relatedReviews = [
  { name: "Gate.io", slug: "gate-io" },
  { name: "KuCoin", slug: "kucoin" },
  { name: "MEXC", slug: "mexc" },
];

const relatedGuides = [
  { title: "Best Exchanges for Altcoins", href: "/exchanges/best/altcoins" },
  { title: "How to Choose an Exchange", href: "/exchanges/learn/how-to-choose-exchange" },
];

export default function LBankReviewPage() {
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
