import type { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "Backpack Exchange",
  slug: "backpack",
  rating: 4.0,
  description:
    "Backpack Exchange is a regulated crypto exchange built by the team behind the Backpack Wallet and Mad Lads NFT collection, offering spot and futures trading with a Solana-native focus.",
  pros: [
    "Built by respected Solana ecosystem team (ex-FTX engineers)",
    "Regulated exchange with VASP license in Dubai",
    "Clean, modern interface with professional trading features",
    "Strong Solana ecosystem integration and token support",
  ],
  cons: [
    "Relatively new exchange with a shorter track record",
    "Smaller coin selection compared to established exchanges",
    "Lower liquidity on many trading pairs",
    "Limited fiat on-ramp options",
  ],
  fees: "0.1% spot; 0.02%/0.06% futures maker/taker",
  bestFor: "Solana ecosystem traders and NFT enthusiasts",
  affiliateUrl: "https://cryptodegen.com/go/backpack",
  category: "exchanges",
};

export const metadata: Metadata = {
  title: `Backpack Exchange Review (${CURRENT_YEAR}) - Solana-Native CEX | ${SITE_NAME}`,
  description: `Complete Backpack Exchange review for ${CURRENT_YEAR}. Covers Solana integration, trading features, fees, regulation, security, and the team's FTX heritage.`,
};

const overview =
  "Backpack Exchange is a centralized cryptocurrency exchange launched in 2023 by the team behind the Backpack Wallet and the popular Mad Lads NFT collection. The founding team includes former FTX engineers who leveraged their experience to build what they describe as a next-generation regulated exchange. Backpack holds a VASP (Virtual Asset Service Provider) license in Dubai and has been expanding its regulatory footprint.\n\nThe exchange offers spot trading, perpetual futures with leverage, and has rapidly built out its feature set since launch. Backpack has a particularly strong connection to the Solana ecosystem, often being among the first to list Solana-native tokens and providing deep liquidity for SPL assets. The platform has quickly gained traction through a combination of its team's reputation, strategic token listing partnerships, and a clean, modern trading interface.\n\nWhile Backpack is newer than most competitors, the team's proven track record in building crypto infrastructure and their regulatory-first approach have helped establish credibility rapidly. The exchange is best suited for traders who are active in the Solana ecosystem and value a modern platform built by experienced crypto engineers.";

const sections = [
  {
    id: "team-background",
    title: "Team & Background",
    content:
      "Backpack Exchange was founded by Armani Ferrante and Tristan Yver, both former engineers at FTX. Ferrante is also known for creating the Anchor framework, one of the most widely used development frameworks on Solana. After FTX's collapse, the team set out to build a regulated exchange that incorporated lessons learned from that experience, with an emphasis on transparency, proper reserve management, and regulatory compliance. The team's deep Solana expertise and established reputation through Backpack Wallet and Mad Lads has given the exchange a strong foundation.",
  },
  {
    id: "trading-features",
    title: "Trading Features",
    content:
      "Backpack offers spot trading with market, limit, and stop orders across a growing selection of trading pairs. Perpetual futures are available on major pairs with competitive leverage options. The trading interface is clean and professional, with TradingView-powered charts and real-time order book visualization. The exchange supports both web and mobile access, with a focus on performance and responsive design. Backpack has been rapidly adding features since launch, with new products and trading pairs introduced regularly.",
  },
  {
    id: "solana-ecosystem",
    title: "Solana Ecosystem Integration",
    content:
      "Backpack's strongest differentiator is its deep integration with the Solana ecosystem. The exchange frequently lists Solana-native tokens before they appear on other centralized exchanges, providing early access to SPL token markets. The team's relationship with the Solana developer community, built through the Anchor framework and Backpack Wallet, ensures that promising Solana projects often launch their exchange listings on Backpack first. For traders focused on the Solana ecosystem, this early access and typically strong liquidity for SOL pairs is a significant advantage.",
  },
  {
    id: "regulation",
    title: "Regulation & Compliance",
    content:
      "Backpack holds a VASP license from the Dubai Virtual Assets Regulatory Authority (VARA), which requires compliance with anti-money laundering, know-your-customer, and fund segregation requirements. The exchange has been working to obtain additional licenses in other jurisdictions. This regulatory-first approach distinguishes Backpack from many newer exchanges that launch without proper licensing. The team has been transparent about their commitment to operating within regulatory frameworks.",
  },
  {
    id: "security-measures",
    title: "Security",
    content:
      "Backpack employs industry-standard security measures including cold storage for the majority of user funds, two-factor authentication, and withdrawal address whitelisting. The exchange's security architecture was designed by engineers with experience building systems at major crypto platforms. Backpack publishes proof-of-reserves data for transparency. The platform's relatively short history means it has a limited track record, but no security incidents have been reported since launch.",
  },
];

const fees: Record<string, string> = {
  "Spot Trading (Maker)": "0.1% (volume discounts available)",
  "Spot Trading (Taker)": "0.1% (volume discounts available)",
  "Futures (Maker)": "0.02%",
  "Futures (Taker)": "0.06%",
  "Deposit": "Free",
  "Withdrawal": "Varies by asset and network",
};

const security = [
  "VASP license from Dubai VARA with regulatory compliance",
  "Cold storage for majority of user funds",
  "Two-factor authentication with authenticator app support",
  "Withdrawal address whitelisting",
  "Proof-of-reserves data published for transparency",
  "Built by former FTX engineers with institutional security experience",
  "Fund segregation as required by regulatory license",
];

const features = [
  "Deep Solana ecosystem integration with early SPL token listings",
  "Clean, modern trading interface with TradingView charts",
  "Perpetual futures with competitive leverage options",
  "VASP regulated in Dubai with compliance framework",
  "Built by Anchor framework creator and former FTX engineers",
  "Growing spot trading selection across multiple chains",
  "Proof-of-reserves for transparency",
  "Mobile and web platform access",
];

const faqs = [
  {
    question: "Who is behind Backpack Exchange?",
    answer:
      "Backpack Exchange was founded by Armani Ferrante (creator of the Anchor framework for Solana) and Tristan Yver, both former FTX engineers. The team also built Backpack Wallet and the Mad Lads NFT collection. Their experience in crypto infrastructure development and lessons learned from FTX informed the exchange's regulatory-first approach.",
  },
  {
    question: "Is Backpack Exchange regulated?",
    answer:
      "Yes. Backpack holds a VASP license from the Dubai Virtual Assets Regulatory Authority (VARA). This requires compliance with AML/KYC regulations, fund segregation, and ongoing regulatory reporting. The exchange is working to expand its regulatory coverage to additional jurisdictions.",
  },
  {
    question: "Is Backpack Exchange available in the US?",
    answer:
      "Backpack Exchange's availability to US residents depends on current regulatory status. Check the platform's terms of service for the latest information on supported jurisdictions. The exchange has expressed interest in obtaining US regulatory approvals.",
  },
  {
    question: "Why does Backpack focus on Solana?",
    answer:
      "The founding team has deep roots in the Solana ecosystem. Armani Ferrante created the Anchor framework, which is used by thousands of Solana developers. Backpack Wallet is a popular Solana wallet. This expertise and network gives the exchange an advantage in listing and providing liquidity for Solana-native tokens.",
  },
];

const relatedReviews = [
  { name: "Kraken", slug: "kraken" },
  { name: "Bybit", slug: "bybit" },
  { name: "OKX", slug: "okx" },
];

const relatedGuides = [
  { title: "Best Decentralized Exchanges", href: "/exchanges/best/decentralized" },
  { title: "Exchange Security Tips", href: "/exchanges/learn/exchange-security-tips" },
];

export default function BackpackReviewPage() {
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
