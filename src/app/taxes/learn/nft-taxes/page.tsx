import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Tax Guide ${CURRENT_YEAR} - How NFTs Are Taxed`,
  description: `Complete NFT tax guide for ${CURRENT_YEAR}. How buying, selling, minting, and trading NFTs are taxed, including creator royalties and collectibles treatment.`,
  alternates: { canonical: "/taxes/learn/nft-taxes" },
};

const toc = [
  { id: "nft-tax-basics", title: "NFT Tax Basics", level: 2 },
  { id: "buying-selling", title: "Buying & Selling NFTs", level: 2 },
  { id: "minting", title: "Minting NFTs", level: 2 },
  { id: "creators", title: "NFT Creator Taxes", level: 2 },
  { id: "collectibles-rate", title: "Collectibles Tax Rate", level: 2 },
];

const faqs = [
  { question: "Are NFTs taxed as collectibles?", answer: "The IRS has proposed that certain NFTs may be treated as collectibles, subject to a higher long-term capital gains rate of 28% instead of the standard 20% maximum. This applies to NFTs that represent digital art, trading cards, and similar collectible items. NFTs representing other assets (like financial instruments) may receive standard treatment." },
  { question: "Is minting an NFT a taxable event?", answer: "For buyers, minting (purchasing) an NFT is similar to buying any other asset and is not taxable by itself. The ETH or crypto spent to mint establishes your cost basis. For creators, minting and selling an NFT generates ordinary income or self-employment income based on the sale price." },
  { question: "How are NFT royalties taxed?", answer: "Creator royalties from secondary sales of NFTs are treated as ordinary income or self-employment income. You owe income tax on royalty payments when received. Track each royalty payment including the date, amount, and fair market value of the crypto received." },
];

export default function NftTaxesPage() {
  return (
    <LearnPageLayout
      title="How NFTs Are Taxed"
      categoryName="Crypto Taxes"
      categorySlug="taxes"
      readTime="9 min"
      intro="NFTs have unique tax considerations that differ from fungible cryptocurrencies. Whether you are buying, selling, creating, or earning royalties from NFTs, understanding the tax treatment helps you avoid costly mistakes and plan your transactions strategically."
      toc={toc}
      faqs={faqs}
      relatedArticles={[
        { title: "Capital Gains Explained", href: "/taxes/learn/capital-gains", category: "Taxes" },
        { title: "DeFi Taxes", href: "/taxes/learn/defi-taxes", category: "Taxes" },
        { title: "How to File Crypto Taxes", href: "/taxes/learn/how-to-file", category: "Taxes" },
      ]}
    >
      <section id="nft-tax-basics" className="mb-10">
        <h2>NFT Tax Basics</h2>
        <p>
          NFTs are treated as property by the IRS, similar to other crypto assets. When you sell
          an NFT, the difference between the sale price and your cost basis (what you paid plus
          gas fees) is a capital gain or loss. The holding period determines whether the gain is
          short-term or long-term.
        </p>
        <p>
          A unique aspect of NFTs is that using crypto (like ETH) to buy an NFT is actually two
          taxable events: you are disposing of ETH (triggering a capital gain or loss on the ETH)
          and acquiring the NFT. Many investors overlook the capital gain on the ETH used for
          the purchase, which can lead to underreporting.
        </p>
      </section>

      <section id="buying-selling" className="mb-10">
        <h2>Buying and Selling NFTs</h2>
        <p>
          When you buy an NFT, your cost basis is the fair market value of the crypto you spent
          plus all transaction fees (gas fees, marketplace fees). When you sell, your proceeds are
          the sale price minus seller fees. The difference is your capital gain or loss. Gas fees
          for failed transactions may be deductible as investment losses.
        </p>
        <p>
          Trading one NFT for another is a taxable exchange. The fair market value of the NFT
          received minus the cost basis of the NFT given up equals your gain or loss. If market
          values are unclear, use recent comparable sales or marketplace floor prices. Document
          your valuation methodology in case of an audit.
        </p>
      </section>

      <section id="minting" className="mb-10">
        <h2>Minting NFTs</h2>
        <p>
          For buyers, the minting price plus gas fees forms the cost basis of the NFT. The ETH
          or other crypto used to mint triggers a disposal event on that crypto. If you bought
          ETH at $1,500 and used it to mint when ETH was worth $3,000, you have a capital gain
          on the ETH disposal in addition to acquiring the NFT.
        </p>
        <p>
          Free mints still have a cost basis equal to the gas fees paid to complete the
          transaction. If a free mint NFT later sells for a significant amount, your gain is the
          sale price minus only the gas fees. Track all minting transactions including failed
          attempts where gas was spent but no NFT was received.
        </p>
      </section>

      <section id="creators" className="mb-10">
        <h2>NFT Creator Taxes</h2>
        <p>
          If you create and sell NFTs, the income is treated as ordinary income or
          self-employment income depending on your situation. If creating NFTs is a regular
          business activity, the income goes on Schedule C and is subject to self-employment tax
          (15.3% for Social Security and Medicare) in addition to income tax.
        </p>
        <p>
          Ongoing royalties from secondary sales are also ordinary income when received. You can
          deduct business expenses related to creating NFTs, including software costs, marketing
          expenses, and a portion of computer and internet expenses. Keep detailed records of
          both income and expenses for each NFT project.
        </p>
      </section>

      <section id="collectibles-rate" className="mb-10">
        <h2>Collectibles Tax Rate</h2>
        <p>
          The IRS has indicated that certain NFTs may be classified as collectibles, subject to a
          28% maximum long-term capital gains rate instead of the standard 20%. This potentially
          applies to digital art, music, trading cards, and virtual collectibles. The IRS issued
          Notice 2023-27 requesting public comment on this treatment.
        </p>
        <p>
          The collectibles classification is based on a look-through analysis: if the NFT
          represents an underlying collectible (like art), it may be taxed as a collectible. If
          it represents something else (like a financial instrument or membership), standard
          rates may apply. This area of tax law remains unsettled, so consult a tax professional
          for significant NFT transactions.
        </p>
      </section>
    </LearnPageLayout>
  );
}
