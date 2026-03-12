import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = { title: `How Crypto Exchange Listings Work (${CURRENT_YEAR}) | ${SITE_NAME}`, description: "Learn how cryptocurrencies get listed on exchanges, the listing process, fees involved, and what listings mean for token prices." };

export default function Page() {
  return (
    <LearnPageLayout title="How Crypto Exchange Listings Work" categoryName="Crypto Exchanges" categorySlug="exchanges" readTime="8 min" intro="Exchange listings can make or break a cryptocurrency project. Understanding how the listing process works, what exchanges look for, and the impact on token prices helps you make better investment decisions around listing events."
      toc={[
        { id: "listing-process", title: "listing-process", level: 2 },
        { id: "the-listing-process", title: "The Listing Process", level: 2 },
        { id: "listing-criteria", title: "listing-criteria", level: 2 },
        { id: "what-exchanges-evaluate", title: "What Exchanges Evaluate", level: 2 },
        { id: "listing-fees", title: "listing-fees", level: 2 },
        { id: "listing-fees-and-costs", title: "Listing Fees and Costs", level: 2 },
        { id: "price-impact", title: "price-impact", level: 2 },
        { id: "impact-on-token-prices", title: "Impact on Token Prices", level: 2 },
        { id: "trading-listings", title: "trading-listings", level: 2 },
        { id: "trading-around-listings", title: "Trading Around Listings", level: 2 }
      ]}
      faqs={[{question:"Do projects pay to get listed?",answer:"Yes, many exchanges charge listing fees ranging from $50,000 to several million dollars for top-tier exchanges. Some exchanges deny charging fees but may require token deposits or market-making commitments."},{question:"Why do prices spike on listings?",answer:"Listings increase visibility and accessibility, bringing new buyers who could not previously access the token. The anticipation effect and exchange credibility also drive demand."},{question:"Where do tokens list first?",answer:"Most tokens launch on DEXs first (Uniswap, Raydium) where listing is permissionless. Centralized exchange listings typically come later after the project gains traction."}]}
      relatedArticles={[{title:"How to Choose a Crypto Exchange",href:"/exchanges/learn/how-to-choose-crypto-exchange",category:"Exchanges"},{title:"What Are Trading Pairs",href:"/exchanges/learn/what-are-trading-pairs",category:"Exchanges"}]}
    >
      <section id="listing-process"><h2>The Listing Process</h2><p>Exchange listings follow a multi-step process that varies by platform. Projects typically submit an application including technical documentation, team background, tokenomics, legal opinion, and market data. The exchange's listing committee evaluates the submission against internal criteria. Due diligence includes code audits, legal review, and market analysis. If approved, the exchange and project coordinate on listing date, trading pairs, and promotional activities. The process can take anywhere from weeks to months depending on the exchange.</p></section>
      <section id="listing-criteria"><h2>What Exchanges Evaluate</h2><p>Major exchanges evaluate several factors: the project's technology and innovation, team credibility and track record, community size and engagement, trading volume on existing venues, legal and regulatory compliance, tokenomics and distribution fairness, and security audit results. US exchanges apply additional scrutiny to determine whether a token could be classified as a security under the Howey test. This regulatory consideration is why many tokens are listed on international exchanges but not on US platforms like Coinbase or Kraken.</p></section>
      <section id="listing-fees"><h2>Listing Fees and Costs</h2><p>Listing fees vary dramatically. Smaller exchanges may charge $10,000-$50,000. Mid-tier exchanges typically charge $100,000-$500,000. Top-tier exchanges like Binance reportedly charge $1 million or more, though Binance has stated it does not charge listing fees. Beyond direct fees, projects may need to provide tokens for promotional campaigns, fund market-making operations to ensure adequate liquidity, and commit to ongoing compliance requirements. Some exchanges operate launchpad programs where projects can get listed in exchange for conducting their token sale on the platform.</p></section>
      <section id="price-impact"><h2>Impact on Token Prices</h2><p>Exchange listings typically cause significant price movements. The announcement of a listing on a major exchange often triggers a price spike of 20-100% or more. However, the actual listing day may see a sell-off as early buyers take profits. This pattern — buy the rumor, sell the news — is common in crypto markets. The sustained price impact depends on whether the listing brings genuine new demand or just redistributes existing holders. Listings on Binance and Coinbase tend to have the largest and most sustained impact due to their massive user bases.</p></section>
      <section id="trading-listings"><h2>Trading Around Listings</h2><p>Trading listing events is popular but risky. Buying after a listing is announced but before it goes live can be profitable, but the initial spike is often followed by a correction. Buying at the moment of listing is risky because prices are volatile and spreads are wide. The safest approach for most investors is to evaluate projects on fundamentals rather than listing speculation. If you believe in a project long-term, a listing is a positive catalyst but should not be the sole reason for buying.</p></section>
    </LearnPageLayout>
  );
}
