import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Trading Taxes (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn the tax rules for buying, selling, and trading NFTs. Understand capital gains, cost basis, royalties, and reporting for NFT transactions.",
  keywords: ["nft trading taxes", "nft capital gains", "nft tax reporting", "buying selling nft taxes"],
};

export default function NFTTradingTaxesPage() {
  return (
    <LearnPageLayout
      title="NFT Trading Taxes"
      categoryName="Taxes"
      categorySlug="taxes"
      readTime="8 min"
      intro="NFT trading has become a significant part of the crypto ecosystem, but the tax treatment of buying, selling, minting, and receiving NFTs is complex and still evolving. NFTs are treated as property by the IRS, meaning each transaction may trigger capital gains or losses. Additionally, the IRS has proposed treating certain NFTs as collectibles subject to higher tax rates. This guide covers the comprehensive tax implications of NFT trading."
      toc={[
        { id: "buying-selling", title: "buying-selling", level: 2 },
        { id: "buying-and-selling-nfts", title: "Buying and Selling NFTs", level: 2 },
        { id: "minting-creating", title: "minting-creating", level: 2 },
        { id: "minting-and-creating-nfts", title: "Minting and Creating NFTs", level: 2 },
        { id: "collectibles-treatment", title: "collectibles-treatment", level: 2 },
        { id: "collectibles-tax-treatment", title: "Collectibles Tax Treatment", level: 2 },
        { id: "nft-specific-issues", title: "nft-specific-issues", level: 2 },
        { id: "nft-specific-tax-issues", title: "NFT-Specific Tax Issues", level: 2 }
      ]}
      faqs={[
        { question: "Is buying an NFT with crypto a taxable event?", answer: "Yes. When you use cryptocurrency to purchase an NFT, you are disposing of the crypto, which triggers a capital gain or loss on the crypto used for payment. The gain or loss is calculated based on the difference between the fair market value of the crypto at the time of purchase and your cost basis in that crypto." },
        { question: "Are NFTs taxed as collectibles?", answer: "The IRS issued Notice 2023-27 requesting comments on whether certain NFTs should be treated as collectibles. Under a proposed look-through approach, an NFT is a collectible if the underlying asset would be a collectible (like digital art). Collectibles are taxed at a maximum rate of 28% for long-term gains, higher than the standard 20% maximum." },
      ]}
      relatedArticles={[
        { title: "NFT Tax Guide", href: "/taxes/learn/nft-tax-guide", category: "Taxes" },
        { title: "Capital Gains Guide", href: "/taxes/learn/capital-gains", category: "Taxes" },
      ]}
    >
      <section id="buying-selling">
        <h2>Buying and Selling NFTs</h2>
        <p>Every NFT purchase and sale involves potential tax consequences on multiple levels. When you buy an NFT using cryptocurrency like ETH, you trigger a taxable disposition of the crypto used for payment. If your ETH has appreciated since you acquired it, you realize a capital gain. The cost basis of your new NFT is the fair market value of the crypto used to purchase it plus any gas fees and marketplace fees. When you sell an NFT, you realize a capital gain or loss based on the difference between the sale proceeds and your cost basis in the NFT. Sale proceeds are the amount received minus any marketplace seller fees. If you held the NFT for more than one year, the gain is long-term. If held for one year or less, it is short-term and taxed at ordinary income rates. Trading one NFT for another NFT is also a taxable event. You are disposing of the first NFT and acquiring the second. Each side of the trade has its own gain or loss calculation. Gas fees paid for purchasing and selling can be added to cost basis or deducted from proceeds respectively. Marketplace royalties paid to creators reduce your net proceeds as a buyer and are income for the creator. Track every transaction carefully including the crypto conversion rate at the time of each trade.</p>
      </section>
      <section id="minting-creating">
        <h2>Minting and Creating NFTs</h2>
        <p>The tax treatment differs depending on whether you are minting an NFT you created or minting one created by someone else. For NFT creators, the act of minting is generally not a taxable event. Your cost basis in the minted NFT is the gas fees and any other costs incurred in creating and minting it. When you sell the minted NFT, the entire sale price minus your cost basis is income. Whether this is ordinary income or capital gains depends on whether your NFT creation is a business activity or investment activity. If you are a professional creator regularly selling NFTs, sales are likely ordinary income subject to self-employment tax. If you minted once as an experiment, it may be a capital gain. For buyers minting NFTs from another creator's collection, the mint is a purchase. You are paying the mint price plus gas fees, and your cost basis is the total amount paid. If you used crypto for the mint, the crypto payment is a taxable disposition as well. Free mints and airdrops of NFTs are income at the fair market value at the time of receipt. If the NFT has no established market value at mint time, determining fair market value can be challenging. Using the floor price of the collection at the time of receipt is one reasonable approach.</p>
      </section>
      <section id="collectibles-treatment">
        <h2>Collectibles Tax Treatment</h2>
        <p>The IRS has signaled its intent to treat certain NFTs as collectibles under Section 408(m) of the Internal Revenue Code. Collectibles are subject to a maximum long-term capital gains rate of 28%, compared to the standard maximum of 20% for other long-term capital gains. The proposed approach uses a look-through analysis where the IRS examines the underlying asset represented by the NFT. If the NFT represents a collectible item such as artwork, antiques, gems, metals, or stamps, the NFT itself would be treated as a collectible. Digital art NFTs would likely qualify as collectibles under this framework. NFTs representing other types of assets like virtual real estate, gaming items, or membership passes may not be collectibles. Profile picture collections and generative art are likely to be classified as collectibles since they are fundamentally digital artwork. This classification has not been finalized, and the proposed rules may change based on public comments. Until final rules are issued, there is some uncertainty about which NFTs are collectibles. The conservative approach is to assume art-based NFTs are collectibles and plan for the 28% rate on long-term gains. Short-term gains are taxed at ordinary income rates regardless of collectible status, so this distinction only matters for NFTs held more than one year.</p>
      </section>
      <section id="nft-specific-issues">
        <h2>NFT-Specific Tax Issues</h2>
        <p>Several tax issues are unique to NFTs or particularly common in NFT trading. Wash sales with NFTs are a gray area. Since each NFT is technically unique, selling an NFT at a loss and buying a similar one from the same collection may not trigger the wash sale rule even if it is eventually applied to crypto. However, the IRS could argue that NFTs from the same collection are substantially identical. Worthless NFTs that can no longer be sold present the question of how to claim a loss. If you can demonstrate the NFT has no value and no market, you may be able to claim an abandonment loss. Some services allow you to send NFTs to a burn address, creating a clear disposal event at zero proceeds. NFT fractionalization, where an NFT is divided into fungible tokens, is likely a taxable event where you exchange the NFT for the fractional tokens. Using NFTs as collateral in DeFi lending protocols does not transfer ownership and should not be a taxable event. NFT staking for rewards generates ordinary income when rewards are received. Each of these scenarios requires careful analysis, and the tax treatment of emerging NFT use cases continues to evolve as the technology develops.</p>
      </section>
    </LearnPageLayout>
  );
}
