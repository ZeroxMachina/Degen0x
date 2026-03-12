import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Floor Price? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what floor price means in the NFT market, how it is determined, and why it is a key metric for evaluating collections.",
};

export default function FloorPricePage() {
  return (
    <LearnPageLayout
      title="What Is Floor Price?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="4 min"
      intro="Floor price is the lowest price at which an NFT from a specific collection is currently listed for sale on a marketplace. It represents the minimum cost of entry into a collection and serves as the most widely referenced metric for gauging the market value and sentiment around an NFT project. Floor price fluctuations are closely watched by traders and collectors alike."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-floor-price", title: "What Is Floor Price?", level: 2 },
        { id: "how-determined", title: "how-determined", level: 2 },
        { id: "how-floor-price-is-determined", title: "How Floor Price Is Determined", level: 2 },
        { id: "floor-as-metric", title: "floor-as-metric", level: 2 },
        { id: "floor-price-as-a-valuation-metric", title: "Floor Price as a Valuation Metric", level: 2 },
        { id: "floor-sweeping", title: "floor-sweeping", level: 2 },
        { id: "floor-sweeping", title: "Floor Sweeping", level: 2 },
        { id: "limitations", title: "limitations", level: 2 },
        { id: "limitations-of-floor-price", title: "Limitations of Floor Price", level: 2 }
      ]}
      faqs={[
        {
          question: "Does floor price reflect the value of all NFTs in a collection?",
          answer:
            "No. Floor price only tells you the cheapest available listing. Rare or highly desirable NFTs within the same collection can sell for many multiples of the floor price. The floor represents the entry point, not the average or the ceiling of a collection's value.",
        },
        {
          question: "Can floor price be manipulated?",
          answer:
            "Yes. Wash trading (buying and selling to yourself) can create artificial volume. Listing very low can crash a floor temporarily, and coordinated buying can inflate it. Some projects also use treasury funds to buy their own floor. This is why floor price should be considered alongside volume and holder distribution.",
        },
      ]}
      relatedArticles={[
        { title: "What Is an NFT?", href: "/learn/glossary/nft", category: "Glossary" },
        { title: "What Is ERC-721?", href: "/learn/glossary/erc-721", category: "Glossary" },
        { title: "What Is a DEX?", href: "/learn/glossary/dex", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is Floor Price?</h2>
      <p>
        The floor price of an NFT collection is simply the lowest asking price for any single item currently listed for sale. If a collection has 10,000 NFTs and the cheapest one listed is priced at 2 ETH, then the floor price is 2 ETH. This metric is displayed prominently on every NFT marketplace and is the first number most people check when evaluating a project.
      </p>

      <h2 id="how-determined">How Floor Price Is Determined</h2>
      <p>
        Floor price is set by the open market. When holders list their NFTs for sale, the lowest listing becomes the floor. As buyers purchase floor-priced NFTs, the floor rises to the next lowest listing. If holders panic and list below the previous floor, the floor drops. Supply and demand dynamics, project news, broader market conditions, and whale activity all influence floor price movement.
      </p>

      <h2 id="floor-as-metric">Floor Price as a Valuation Metric</h2>
      <p>
        Traders use floor price to quickly compare collections, calculate portfolio values, and identify trends. A steadily rising floor suggests growing demand, while a declining floor may signal waning interest. Multiplying the floor price by the total supply gives an approximate market cap for the collection, though this is a rough estimate since most NFTs are not listed for sale.
      </p>

      <h2 id="floor-sweeping">Floor Sweeping</h2>
      <p>
        Floor sweeping is the practice of buying up all NFTs listed at or near the floor price. Whales or project teams sometimes sweep floors to reduce supply, drive up the price, and signal confidence. A sweep can rapidly increase the floor by removing the cheapest listings. However, organic demand is needed to sustain the higher floor after a sweep.
      </p>

      <h2 id="limitations">Limitations of Floor Price</h2>
      <p>
        Floor price does not capture trait rarity, utility differences, or artistic quality within a collection. It can be misleading if few items are listed or if listings are artificially placed. Volume, unique holders, listing ratio, and sales history provide important context. Relying solely on floor price for investment decisions ignores the nuances that drive value in the NFT market.
      </p>
    </LearnPageLayout>
  );
}
