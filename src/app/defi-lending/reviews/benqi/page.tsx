import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { Product } from "@/lib/types";
import { CURRENT_YEAR } from "@/lib/constants";

const product: Product = {
  name: "BENQI",
  slug: "benqi",
  rating: 4.0,
  description: "BENQI is the leading lending and liquid staking protocol on Avalanche, offering competitive rates for lending and borrowing plus sAVAX liquid staking for",
  pros: ["Largest lending protocol on Avalanche", "Integrated liquid staking with sAVAX", "Low gas fees on Avalanche C-Chain", "Simple and clean user interface", "Strong Avalanche ecosystem integration"],
  cons: ["Limited to Avalanche ecosystem only", "Smaller TVL than multi-chain competitors", "QI token has limited price appreciation", "Fewer asset markets than Aave"],
  fees: "Variable (supply/borrow spread)",
  bestFor: "Avalanche ecosystem DeFi users",
  affiliateUrl: "#",
  category: "defi-lending",
};

export const metadata: Metadata = {
  title: `BENQI Review (${CURRENT_YEAR}) | degen0x`,
  description: "In-depth BENQI review covering Avalanche lending, sAVAX liquid staking, rates, security, and how it compares to other DeFi lending protocols.",
  alternates: { canonical: "/defi-lending/reviews/benqi" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/defi-lending/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Benqi', },
  ],
};

export default function BenqiReview() {
  return (
    <>
      <ReviewPage
      product={product}
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      overview="BENQI has established itself as the dominant lending protocol on Avalanche, combining traditional lending and borrowing markets with liquid staking through sAVAX. The protocol offers a familiar Compound-style lending experience with the added benefit of Avalanche's fast finality and low transaction costs. BENQI's liquid staking product allows AVAX holders to stake and receive sAVAX, which can then be used as collateral in BENQI's lending markets, creating a capital-efficient loop. The protocol has maintained stable TVL and a clean security record, making it the go-to lending solution for the Avalanche ecosystem."
      sections={[
        { id: "lending", title: "Lending & Borrowing Markets", content: "BENQI operates lending markets for major Avalanche assets including AVAX, USDC, USDT, WETH, WBTC, and several other tokens. The protocol uses a utilization-based interest rate model similar to Compound, where rates adjust automatically based on supply and demand. Lenders earn interest by depositing assets into pools, while borrowers provide collateral to take loans. Each asset has configurable parameters including collateral factors, reserve factors, and borrowing caps set through governance. The interface is clean and intuitive, with clear displays of rates, utilization, and available liquidity." },
        { id: "liquid-staking", title: "sAVAX Liquid Staking", content: "BENQI's liquid staking product lets users stake AVAX and receive sAVAX in return. sAVAX is a yield-bearing token that appreciates relative to AVAX as staking rewards accrue. Unlike native AVAX staking which has a minimum delegation of 25 AVAX and a lock-up period, sAVAX can be acquired in any amount and used immediately in DeFi. sAVAX can be used as collateral on BENQI's lending platform, deposited in liquidity pools on Trader Joe and other Avalanche DEXs, or held to earn staking yield. This combination of staking and DeFi utility makes sAVAX a core building block of the Avalanche ecosystem." },
        { id: "ecosystem", title: "Avalanche Ecosystem Integration", content: "BENQI is deeply integrated into the Avalanche DeFi ecosystem. sAVAX is accepted as collateral across multiple Avalanche protocols beyond BENQI itself. The protocol participates in Avalanche Foundation incentive programs and has received grants to boost liquidity. BENQI's qiTokens (receipt tokens for lending deposits) are integrated with yield aggregators and other Avalanche DeFi protocols. The protocol also supports Avalanche subnets, potentially expanding to provide lending services on application-specific chains within the Avalanche network." },
        { id: "tokenomics", title: "QI Token & Governance", content: "QI is BENQI's governance token used for voting on protocol parameters, emissions, and strategic decisions. QI can be staked in the veQI model to boost rewards and direct emissions to specific markets. The token also earns a share of protocol revenue through staking. QI emissions are distributed to lenders and borrowers as additional incentives on top of base interest rates. While QI provides governance utility, its price performance has been modest compared to the broader market, which is common for DeFi governance tokens on smaller ecosystems." },
        { id: "performance", title: "Performance & Reliability", content: "BENQI benefits from Avalanche's sub-second finality and low gas costs, typically a few cents per transaction. This makes frequent interactions like claiming rewards, adjusting positions, and compounding yields economically viable. The protocol has maintained a clean security record with no major exploits since launch, supported by multiple audits and a conservative approach to listing new assets. Uptime has been excellent, with the protocol remaining operational even during periods of high network congestion that affected some other Avalanche applications." },
      ]}
      fees={{ "Supply Rate": "Variable based on utilization", "Borrow Rate": "Variable based on utilization", "sAVAX Staking Fee": "10% of staking rewards", "Reserve Factor": "10-25% depending on asset", "Gas Costs": "Very low (Avalanche C-Chain)" }}
      security={["Multiple smart contract audits by Halborn and others", "Conservative asset listing process", "Time-locked governance for protocol changes", "No major exploits since launch", "Bug bounty program", "Transparent on-chain reserve tracking"]}
      features={["Lending and borrowing for major Avalanche assets", "sAVAX liquid staking for AVAX", "veQI governance model for emission direction", "Integration with Avalanche ecosystem protocols", "Low gas costs and fast transactions", "Subnet expansion capabilities"]}
      faqs={[
        { question: "Can I use sAVAX as collateral?", answer: "Yes. sAVAX can be deposited as collateral on BENQI's lending platform, allowing you to borrow against your staked AVAX while continuing to earn staking rewards. This creates a capital-efficient strategy for AVAX holders." },
        { question: "How does BENQI compare to Aave on Avalanche?", answer: "Both are available on Avalanche, but BENQI has deeper native integration and the unique sAVAX liquid staking product. Aave offers multi-chain familiarity and potentially more sophisticated features. BENQI is generally the better choice for Avalanche-focused users." },
        { question: "What are the risks of using BENQI?", answer: "Standard DeFi risks apply including smart contract risk, oracle risk, and liquidation risk for borrowers. Additionally, sAVAX carries the risk of Avalanche validator slashing, though this is mitigated by BENQI's validator selection process." },
      ]}
      relatedReviews={[{ name: "Aave", slug: "/defi-lending/reviews/aave" }, { name: "Venus Protocol", slug: "/defi-lending/reviews/venus" }]}
      relatedGuides={[{ title: "How to Earn Yield", href: "/defi-lending/learn/how-to-earn-yield" }, { title: "Impermanent Loss Guide", href: "/defi-lending/learn/impermanent-loss" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
