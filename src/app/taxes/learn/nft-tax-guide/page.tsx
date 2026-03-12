import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Taxes: Creating, Buying, and Selling (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Complete guide to NFT taxes. Learn how creating, buying, selling, and trading NFTs are taxed, including royalty income, collectible tax rates, and wash sale considerations.",
  keywords: ["NFT taxes", "NFT tax guide", "NFT capital gains", "NFT creator taxes", "sell NFT taxes"],
};

export default function NftTaxGuidePage() {
  return (
    <LearnPageLayout
      title="NFT Taxes: Creating, Buying, and Selling"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="11 min read"
      intro="NFTs create unique tax situations because they can be digital art, collectibles, gaming items, or financial instruments. Whether you are a creator minting NFTs, a collector buying and selling them, or a trader flipping for profit, each activity has distinct tax implications. The IRS and other tax agencies have started issuing specific guidance on NFT taxation, including the potential classification as collectibles subject to higher tax rates."
      toc={[
        { id: "buying-selling", title: "buying-selling", level: 2 },
        { id: "buying-selling-nfts", title: "Buying & Selling NFTs", level: 2 },
        { id: "creator-taxes", title: "creator-taxes", level: 2 },
        { id: "nft-creator-tax-obligations", title: "NFT Creator Tax Obligations", level: 2 },
        { id: "collectibles", title: "collectibles", level: 2 },
        { id: "nfts-as-collectibles", title: "NFTs as Collectibles", level: 2 },
        { id: "royalties", title: "royalties", level: 2 },
        { id: "royalty-income-from-nfts", title: "Royalty Income from NFTs", level: 2 },
        { id: "gaming-nfts", title: "gaming-nfts", level: 2 },
        { id: "gaming-nfts-virtual-worlds", title: "Gaming NFTs & Virtual Worlds", level: 2 },
        { id: "record-keeping", title: "record-keeping", level: 2 },
        { id: "record-keeping-for-nfts", title: "Record Keeping for NFTs", level: 2 }
      ]}
      faqs={[
        { question: "Are NFTs taxed as collectibles?", answer: "The IRS has indicated that some NFTs may be classified as collectibles, subject to a higher long-term capital gains rate of 28 percent instead of the usual 20 percent maximum. This applies to NFTs that represent digital art, music, or other collectible items. The IRS is using a look-through analysis." },
        { question: "Is minting an NFT a taxable event?", answer: "Minting an NFT you create is generally not a taxable event. However, selling or transferring the minted NFT is a taxable event. Gas fees paid for minting can be added to your cost basis. If you mint an NFT created by someone else, the purchase price plus gas becomes your cost basis." },
        { question: "How are NFT royalties taxed?", answer: "Royalty income from secondary NFT sales is taxed as ordinary income (or self-employment income if you are a creator). The income is recognized at fair market value when received, regardless of whether you receive ETH, WETH, or another token." },
        { question: "Can I deduct NFT losses?", answer: "Yes. If you sell an NFT for less than your cost basis, you can claim a capital loss. However, if the NFT became completely worthless, you may need to demonstrate the worthlessness to claim the loss. Personal use NFTs like profile pictures may not qualify for loss deductions." },
      ]}
      relatedArticles={[
        { title: "DeFi Tax Guide", href: "/taxes/learn/defi-tax-guide", category: "Taxes" },
        { title: "Capital Gains Explained", href: "/taxes/learn/capital-gains", category: "Taxes" },
        { title: "Best Crypto Tax Software", href: "/taxes/best/software", category: "Taxes" },
      ]}
    >
      <h2 id="buying-selling">Buying &amp; Selling NFTs</h2>
      <p>
        Purchasing an NFT with cryptocurrency is a two-part taxable event. First, you are disposing of the crypto (ETH, SOL, etc.) used for the purchase, triggering a capital gain or loss on that crypto. Second, your cost basis in the NFT becomes the fair market value of the crypto you paid plus any gas fees. When you later sell the NFT, you calculate your capital gain as the sale proceeds minus your cost basis. If you buy an NFT with fiat currency through a credit card integration, only the sale triggers a taxable event. Trading one NFT for another is also a taxable exchange requiring you to recognize gain or loss on the disposed NFT.
      </p>

      <h2 id="creator-taxes">NFT Creator Tax Obligations</h2>
      <p>
        If you create and sell NFTs, the proceeds are generally treated as ordinary income or self-employment income rather than capital gains. This is because you created the asset rather than acquiring it as an investment. The income is subject to self-employment tax in the US (an additional 15.3 percent for Social Security and Medicare) on top of regular income tax. However, as a self-employed creator, you can deduct business expenses including platform fees, marketing costs, art creation tools, gas fees for minting, and a portion of your home office. The cost basis for an NFT you create is essentially your creation costs.
      </p>

      <h2 id="collectibles">NFTs as Collectibles</h2>
      <p>
        The IRS issued Notice 2023-27 indicating it intends to use a look-through analysis to determine if an NFT is a collectible under Section 408(m). If the underlying asset the NFT represents would be considered a collectible (art, antiques, gems, stamps, coins, or similar items), then the NFT itself is treated as a collectible. Collectibles are subject to a maximum long-term capital gains rate of 28 percent, higher than the standard 20 percent maximum for most capital assets. This means NFT art, digital collectible cards, and similar items may face higher tax rates on long-term gains. NFTs representing financial instruments or utility rights may not be classified as collectibles.
      </p>

      <h2 id="royalties">Royalty Income from NFTs</h2>
      <p>
        Many NFT marketplaces enforce creator royalties on secondary sales, typically ranging from 2.5 to 10 percent. These royalty payments are taxable income for the creator when received. If you are an active NFT creator, royalties are self-employment income subject to both income tax and self-employment tax. The royalties are usually paid in crypto, so you recognize income at the fair market value in your local currency at the time of receipt. The received crypto then has a cost basis equal to its value at receipt, and any subsequent appreciation when you sell or spend it creates an additional capital gains event.
      </p>

      <h2 id="gaming-nfts">Gaming NFTs &amp; Virtual Worlds</h2>
      <p>
        NFTs used in blockchain games and virtual worlds create ongoing tax events. Earning NFTs as in-game rewards may be taxable income at fair market value when received. Selling in-game NFT items for crypto or fiat triggers capital gains. Using NFTs across different games or bridging them between blockchains may create additional taxable events. The tax treatment of gaming NFTs is still evolving, and the line between personal use and investment activity matters. If you play a blockchain game casually, some tax professionals argue earned items are not taxable until sold. If you play to earn as a primary income source, all earned items are more likely to be immediate income.
      </p>

      <h2 id="record-keeping">Record Keeping for NFTs</h2>
      <p>
        NFT tax reporting requires tracking every acquisition, sale, and royalty payment. For each NFT, record the acquisition date, purchase price in crypto and local currency, gas fees, sale date and price, marketplace fees, and any royalties received. Screenshots of marketplace transactions are helpful as backup documentation since blockchain data alone does not capture local currency values at the time of each transaction. Tax tools like Koinly and CryptoTaxCalculator can import NFT transactions from popular marketplaces and blockchains. Keep records for at least 3 to 7 years depending on your jurisdiction, as NFT audits may increase as tax agencies develop better tracking capabilities.
      </p>
    </LearnPageLayout>
  );
}
