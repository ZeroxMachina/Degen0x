import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is crvUSD (crvUSD)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn about crvUSD, the stablecoin from Curve Finance with soft liquidation mechanics. Discover crvUSD features, LLAMMA design, and how to buy.",
};

export default function CrvusdPage() {
  return (
    <LearnPageLayout
      title="What Is crvUSD (crvUSD)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="crvUSD is the stablecoin issued by Curve Finance, featuring an innovative lending-liquidating AMM algorithm (LLAMMA) that provides soft liquidations instead of traditional hard liquidations. This novel design gradually converts collateral to crvUSD as prices decline and reverses the process as prices recover, significantly reducing the risk of complete position liquidation for borrowers."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-crvusd", title: "What Is crvUSD?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-crvusd-work", title: "How Does crvUSD Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "crvusd-tokenomics", title: "crvUSD Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-crvusd", title: "How to Buy crvUSD", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is crvUSD?", answer: "crvUSD is Curve Finance's native stablecoin that uses the LLAMMA algorithm for soft liquidations. Borrowers' collateral is gradually converted during price declines rather than being liquidated all at once." },
        { question: "Where can I buy crvUSD?", answer: "crvUSD can be minted by depositing collateral on Curve Finance or purchased on Curve's own pools. It is also available on other Ethereum DEXs." },
        { question: "Is crvUSD a good investment?", answer: "crvUSD is designed to maintain a $1 peg. Its innovative LLAMMA mechanism benefits borrowers through softer liquidations. For investment exposure to Curve, see the CRV governance token." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is crvUSD?</h2><p>crvUSD is a decentralized stablecoin created by Curve Finance that introduces a fundamentally new approach to collateralized lending through its LLAMMA (Lending-Liquidating AMM Algorithm) mechanism. Launched in May 2023, crvUSD allows users to borrow against crypto collateral with the unique benefit of soft liquidations, where the system gradually converts collateral to stablecoins as prices decline rather than executing a sudden, complete liquidation at a single threshold.</p><p>This design represents a significant improvement in borrower protection compared to traditional DeFi lending where positions are fully liquidated with penalties when collateral values drop below fixed thresholds. The revenue from crvUSD lending directly benefits CRV token holders through the veCRV fee distribution mechanism.</p></section>
      <section id="how-it-works"><h2>How Does crvUSD Work?</h2><p>LLAMMA distributes a borrower's collateral across a series of price bands in a specialized AMM. As the collateral price falls through these bands, the algorithm automatically converts collateral to crvUSD, similar to how an AMM would process a swap. If the price recovers, the process reverses, converting crvUSD back to the original collateral. This continuous soft liquidation process means borrowers retain partial exposure to their collateral rather than losing everything in a single liquidation event.</p><p>Borrowers choose collateral types (ETH, WBTC, wstETH, sfrxETH, and others), set their leverage level, and the system distributes their collateral across price bands. Interest rates adjust dynamically based on the peg deviation of crvUSD, with rates increasing when crvUSD trades below $1 and decreasing when above to maintain price stability.</p></section>
      <section id="tokenomics"><h2>crvUSD Tokenomics</h2><p>crvUSD has a variable supply that increases with borrowing demand. All interest paid by borrowers is distributed to veCRV holders, directly benefiting Curve governance participants. The stablecoin's peg stability mechanism uses a PegKeeper system that mints or burns crvUSD through designated Curve pools to maintain the dollar peg. This creates a tight integration between crvUSD's stability and Curve's existing pool infrastructure.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>crvUSD serves as a borrowing tool with improved liquidation protection, a stablecoin for DeFi trading and liquidity provision on Curve, and a revenue generator for the CRV ecosystem through interest payments. Borrowers use crvUSD for leveraged positions with softer risk management than traditional lending protocols. The stablecoin is integrated across Curve pools and can be used in the broader DeFi ecosystem as a dollar-denominated asset.</p></section>
      <section id="how-to-buy"><h2>How to Buy crvUSD</h2><p>crvUSD can be minted by depositing collateral on the Curve Finance lending platform. It can also be purchased on Curve's own stablecoin pools or on other Ethereum DEXs. For most users, swapping USDC or USDT for crvUSD on Curve provides the best rates with minimal slippage. Store in any Ethereum-compatible wallet.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>The LLAMMA mechanism, while innovative, is still relatively new and untested under extreme market stress conditions. Soft liquidations involve conversion losses (similar to impermanent loss), meaning borrowers may recover less collateral than originally deposited even if prices recover. Smart contract complexity in the novel AMM design creates elevated risk. The PegKeeper mechanism depends on healthy Curve pool liquidity. Competition from established stablecoins like DAI and newer entrants limits adoption potential.</p></section>
    </LearnPageLayout>
  );
}
