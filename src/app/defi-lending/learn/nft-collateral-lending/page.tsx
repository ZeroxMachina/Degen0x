import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Using NFTs as Collateral in DeFi (${CURRENT_YEAR}) | degen0x`,
  description: "Guide to NFT-collateralized lending. Learn how to borrow against NFTs, the platforms available, pricing challenges, and risks of NFT lending.",
};

export default function NftCollateralLendingPage() {
  return (
    <LearnPageLayout title="Using NFTs as Collateral in DeFi" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="8 min read"
      intro="NFT lending allows holders of valuable NFTs to borrow against their digital assets without selling them. As NFT collections like CryptoPunks, Bored Ape Yacht Club, and Pudgy Penguins achieved significant floor prices, demand emerged for lending products that unlock liquidity from these illiquid assets. Several protocols now enable NFT-collateralized borrowing, each with different approaches to the unique challenges of pricing and liquidating NFTs."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-nft-lending-works", title: "How NFT Lending Works", level: 2 },
        { id: "platforms", title: "platforms", level: 2 },
        { id: "nft-lending-platforms", title: "NFT Lending Platforms", level: 2 },
        { id: "pricing-challenges", title: "pricing-challenges", level: 2 },
        { id: "pricing-and-valuation-challenges", title: "Pricing and Valuation Challenges", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "Can I borrow against my NFTs?", answer: "Yes. Several protocols allow you to deposit blue-chip NFTs as collateral and borrow ETH or stablecoins. Available LTV ratios are typically 20-50% of the floor price, lower than fungible token collateral due to the higher risk and illiquidity of NFTs." },
        { question: "Which NFTs are accepted as collateral?", answer: "Most NFT lending platforms only accept established, liquid collections. CryptoPunks, BAYC, MAYC, Azuki, Pudgy Penguins, and other blue-chip collections are typically supported. Lower-value or illiquid collections are generally not accepted due to pricing and liquidation difficulties." },
        { question: "What happens if my NFT is liquidated?", answer: "If your loan LTV exceeds the liquidation threshold (usually because the NFT floor price dropped), the NFT may be auctioned or transferred to the lender. Liquidation of NFTs is less efficient than fungible tokens because finding a buyer at fair value takes time. Liquidation penalties can be significant." },
      ]}
      relatedArticles={[
        { title: "NFT Insurance", href: "/insurance/learn/nft-insurance", category: "Insurance" },
        { title: "Collateral Types Guide", href: "/defi-lending/learn/collateral-types-guide", category: "DeFi Lending" },
        { title: "LTV Ratio Guide", href: "/crypto-loans/learn/ltv-ratio-guide", category: "Crypto Loans" },
      ]}
    >
      <h2 id="how-it-works">How NFT Lending Works</h2>
      <p>NFT lending follows two main models. Peer-to-pool lending (used by BendDAO and ParaSpace) works similarly to Aave: NFT holders deposit their NFTs into a pool as collateral and borrow from a liquidity pool funded by ETH or stablecoin depositors. The LTV is based on the collection&apos;s floor price, and liquidation occurs when the loan value exceeds the threshold. Peer-to-peer lending (used by NFTfi, Arcade, and Blend) connects individual lenders with borrowers who negotiate terms. A lender offers specific terms (loan amount, interest rate, duration) for a specific NFT, and the borrower accepts. Peer-to-peer provides more customized terms and can value NFTs above floor price (rare traits), but requires finding a willing counterpart. Some platforms combine both models for flexibility.</p>

      <h2 id="platforms">NFT Lending Platforms</h2>
      <p>BendDAO is one of the largest peer-to-pool NFT lending protocols on Ethereum. It accepts major collections and allows instant borrowing against floor price. BendDAO experienced a near-crisis during an NFT market downturn when multiple positions approached liquidation and the auction mechanism struggled. This event led to protocol improvements. Blur&apos;s Blend protocol offers perpetual lending for NFTs without fixed terms or expiration, using a unique design where lenders can trigger refinancing auctions at any time. NFTfi is the leading peer-to-peer NFT lending platform where lenders and borrowers negotiate directly. Arcade focuses on higher-value loans and wrapping multiple NFTs into a single collateral bundle. MetaStreet and Pine Protocol offer additional NFT lending options with varying features and supported collections.</p>

      <h2 id="pricing-challenges">Pricing and Valuation Challenges</h2>
      <p>NFT pricing is fundamentally harder than fungible token pricing. Floor price (the lowest listed price in a collection) is the most common reference but does not reflect the value of rare or unique pieces. A rare CryptoPunk may be worth 10 times the floor price, but lending protocols typically only consider floor price for safety. NFT price oracles are less reliable than fungible token oracles. Floor prices can be manipulated through wash trading or strategic listing. Collection-wide prices can drop dramatically and quickly during market downturns. Time-weighted average floor prices provide some protection against manipulation but lag behind genuine price movements. Appraisal-based lending attempts to value individual NFTs above floor price using trait analysis and sales history, but this introduces subjective valuation risk. The pricing challenge is the fundamental reason NFT lending offers lower LTV ratios and carries higher risk than fungible token lending.</p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>Liquidation risk is amplified for NFT collateral because NFTs are less liquid than fungible tokens. During a market downturn, liquidated NFTs may not find buyers at fair value, potentially creating bad debt for lending pools. The BendDAO liquidity crisis demonstrated this risk in practice. Smart contract risk exists for all DeFi protocols but is heightened for NFT lending protocols that are newer and less battle-tested. Collection-specific risk means your collateral value depends on the continued desirability and floor price of a specific NFT collection, which can decline permanently. Custodial risk arises when your NFT is locked in a smart contract; you lose the ability to use it (for airdrops, claims, or staking) while it serves as collateral. Some protocols offer NFT delegation that maintains certain utility rights. Given these risks, NFT lending is best suited for short-term liquidity needs against blue-chip collections, with conservative LTV ratios and clear exit plans.</p>
    </LearnPageLayout>
  );
}
