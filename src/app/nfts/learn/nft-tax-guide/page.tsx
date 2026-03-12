import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Tax Guide: How NFTs Are Taxed & Reporting Requirements (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how NFTs are taxed, what triggers a taxable event, how to calculate gains and losses, reporting requirements, and strategies for minimizing your NFT tax burden.",
};

export default function NftTaxGuidePage() {
  return (
    <LearnPageLayout
      title="NFT Tax Guide"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="13 min"
      intro="NFT transactions create tax obligations that many collectors overlook until filing season. In the United States, the IRS treats NFTs as property, meaning buying, selling, trading, and even creating NFTs can trigger taxable events. Understanding these rules before they become a problem is essential for any active NFT participant. This guide covers the tax implications of common NFT activities and strategies for proper reporting."
      toc={[
        { id: "tax-basics", title: "tax-basics", level: 2 },
        { id: "nft-tax-basics", title: "NFT Tax Basics", level: 2 },
        { id: "taxable-events", title: "taxable-events", level: 2 },
        { id: "what-triggers-a-taxable-event", title: "What Triggers a Taxable Event", level: 2 },
        { id: "calculating-gains", title: "calculating-gains", level: 2 },
        { id: "calculating-gains-and-losses", title: "Calculating Gains and Losses", level: 2 },
        { id: "creator-taxes", title: "creator-taxes", level: 2 },
        { id: "tax-rules-for-nft-creators", title: "Tax Rules for NFT Creators", level: 2 },
        { id: "record-keeping", title: "record-keeping", level: 2 },
        { id: "record-keeping-requirements", title: "Record Keeping Requirements", level: 2 },
        { id: "tax-strategies", title: "tax-strategies", level: 2 },
        { id: "tax-optimization-strategies", title: "Tax Optimization Strategies", level: 2 }
      ]}
      faqs={[
        {
          question: "Do I owe taxes just for buying an NFT?",
          answer:
            "Buying an NFT with fiat currency (USD) does not trigger a taxable event. However, buying an NFT with cryptocurrency is a taxable event because you are disposing of the crypto. If the crypto you used to buy the NFT has appreciated since you acquired it, you owe capital gains tax on that appreciation.",
        },
        {
          question: "What if I sell an NFT at a loss?",
          answer:
            "Capital losses from NFT sales can offset capital gains from other investments, reducing your overall tax burden. If your total capital losses exceed your gains, you can deduct up to $3,000 per year against ordinary income in the US, with remaining losses carried forward to future years.",
        },
        {
          question: "Are NFT airdrops taxable?",
          answer:
            "Yes, receiving an NFT airdrop is generally treated as ordinary income, taxed at the fair market value of the NFT at the time you receive it. This applies even if you did not request the airdrop. If you later sell the airdropped NFT, you also owe capital gains tax on any price increase.",
        },
        {
          question: "Do I need to report NFTs I still hold?",
          answer:
            "Simply holding NFTs does not create a taxable event. You only owe taxes when you dispose of them through selling, trading, or gifting. However, you should maintain records of your cost basis (purchase price plus fees) for when you eventually sell.",
        },
        {
          question: "What tax software supports NFT reporting?",
          answer:
            "CoinTracker, Koinly, TaxBit, and CoinLedger all support NFT transaction tracking and tax reporting. These tools can import data from marketplace APIs and blockchain addresses to automatically calculate gains, losses, and generate tax forms like IRS Form 8949.",
        },
      ]}
      relatedArticles={[
        { title: "NFT Investing Guide", href: "/nfts/learn/nft-investing-guide", category: "NFTs" },
        { title: "NFT Royalties Explained", href: "/nfts/learn/nft-royalties-explained", category: "NFTs" },
        { title: "How to Buy NFTs", href: "/nfts/learn/how-to-buy-nfts", category: "NFTs" },
      ]}
    >
      <h2 id="tax-basics">NFT Tax Basics</h2>
      <p>
        The IRS classifies NFTs as digital assets treated as property for tax purposes. This means
        NFT transactions are subject to capital gains tax rules similar to stocks or real estate. The
        tax rate depends on how long you held the NFT: short-term capital gains (held less than one
        year) are taxed at your ordinary income rate, while long-term gains (held more than one year)
        benefit from reduced rates of 0%, 15%, or 20% depending on your income bracket.
      </p>
      <p>
        The IRS has also considered classifying certain NFTs as collectibles, which would subject them
        to a higher maximum long-term rate of 28%. This classification applies to NFTs that represent
        art, antiques, or similar collectible items. The guidance continues to evolve, so consulting a
        tax professional familiar with digital assets is advisable for significant holdings.
      </p>

      <h2 id="taxable-events">What Triggers a Taxable Event</h2>
      <p>
        Selling an NFT for cryptocurrency or fiat currency triggers a capital gains event. Trading one
        NFT for another is also taxable, as the IRS treats it as selling the first NFT and buying the
        second. Using cryptocurrency to purchase an NFT is a disposition of the crypto, triggering gains
        or losses on the crypto used. Gifting NFTs above the annual gift tax exclusion may trigger gift
        tax obligations.
      </p>
      <p>
        Receiving NFTs as income is taxed differently. If you earn NFTs through work, contests, or
        airdrops, their fair market value at the time of receipt is treated as ordinary income. Creators
        who sell NFTs they minted are also subject to ordinary income tax on the sale proceeds, since
        their cost basis in a self-created NFT is typically just the minting gas fees.
      </p>

      <h2 id="calculating-gains">Calculating Gains and Losses</h2>
      <p>
        Your capital gain or loss equals the sale price minus your cost basis. The cost basis includes
        the purchase price of the NFT plus any transaction fees (gas fees, marketplace fees) you paid
        when acquiring it. If you bought an NFT for 1 ETH when ETH was worth $2,000, your cost basis
        is $2,000 plus any gas and marketplace fees paid at the time.
      </p>
      <p>
        When selling, your proceeds are the sale price minus selling fees. If you sell that same NFT
        for 2 ETH when ETH is worth $3,000, your proceeds are $6,000 minus fees. Your capital gain
        would be approximately $4,000 (proceeds minus the original cost basis). Track the USD value
        at the time of each transaction, not the crypto amounts, since the IRS requires reporting in
        US dollars.
      </p>

      <h2 id="creator-taxes">Tax Rules for NFT Creators</h2>
      <p>
        NFT creators face different tax treatment than collectors. When you sell an NFT you created,
        the full sale proceeds (minus minting costs) are generally treated as ordinary income, not
        capital gains. This is similar to how an artist selling their own paintings is taxed. If you
        are a frequent creator, you may be classified as a business, which allows you to deduct related
        expenses but also subjects you to self-employment tax.
      </p>
      <p>
        Royalty income from secondary sales is also taxed as ordinary income. Deductible business
        expenses for NFT creators may include software subscriptions, hardware costs, gas fees for
        minting, marketing expenses, and a portion of internet and workspace costs. Keep detailed
        records of all business-related expenditures to maximize your deductions.
      </p>

      <h2 id="record-keeping">Record Keeping Requirements</h2>
      <p>
        Maintain detailed records of every NFT transaction including the date of acquisition and
        disposal, the purchase and sale prices in USD, gas fees and marketplace fees paid, the wallet
        addresses and transaction hashes involved, and the holding period. Blockchain data is permanent,
        but extracting and organizing it after the fact is time-consuming and error-prone.
      </p>
      <p>
        Use crypto tax software that supports NFT tracking to automate this process. Import your wallet
        addresses and marketplace accounts at the start of each tax year rather than scrambling at
        filing time. If you trade across multiple wallets and chains, ensure all addresses are connected
        to get a complete picture of your activity.
      </p>

      <h2 id="tax-strategies">Tax Optimization Strategies</h2>
      <p>
        Tax-loss harvesting is one of the most effective strategies. If you hold NFTs that have
        declined in value, selling them realizes a capital loss that can offset gains from profitable
        sales. Unlike stocks, the wash sale rule does not currently apply to NFTs (though this may
        change), so you can potentially repurchase similar assets immediately after selling at a loss.
      </p>
      <p>
        Holding NFTs for over one year qualifies gains for lower long-term capital gains rates. For
        high-value collections, donating NFTs to qualified charities may provide a fair market value
        deduction without triggering capital gains tax. Consider the timing of sales relative to your
        overall income for the year, as realizing gains in a lower-income year reduces the tax rate.
        Always consult a qualified tax professional for strategies specific to your situation.
      </p>
    </LearnPageLayout>
  );
}
