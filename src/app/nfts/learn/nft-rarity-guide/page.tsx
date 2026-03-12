import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Rarity Guide: Understanding Trait Rarity (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Rarity is a primary driver of NFT value within generative collections. Understanding how rarity is calculated...",
};

export default function NftRarityGuidePage() {
  return (
    <LearnPageLayout
      title="NFT Rarity Guide: Understanding Trait Rarity"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="Rarity is a primary driver of NFT value within generative collections. Understanding how rarity is calculated, which traits drive premiums, and how to use rarity tools helps collectors make informed purchasing decisions."
      toc={[
        { id: "section-1", title: "section-1", level: 2 },
        { id: "rarity-fundamentals", title: "Rarity Fundamentals", level: 2 },
        { id: "section-2", title: "section-2", level: 2 },
        { id: "rarity-calculation-methods", title: "Rarity Calculation Methods", level: 2 },
        { id: "section-3", title: "section-3", level: 2 },
        { id: "rarity-tools-and-platforms", title: "Rarity Tools and Platforms", level: 2 },
        { id: "section-4", title: "section-4", level: 2 },
        { id: "using-rarity-strategically", title: "Using Rarity Strategically", level: 2 }
      ]}
      faqs={[
        { question: "How is NFT rarity calculated?", answer: "Rarity is typically calculated by examining how uncommon each trait is within a collection. Statistical rarity scores combine the frequency of each trait an NFT possesses. Multiple calculation methods exist including trait frequency, information content, and custom scoring models." },
        { question: "Does rarity always determine value?", answer: "Not always. While rarity strongly influences pricing in generative collections, aesthetic appeal, cultural significance, and community sentiment also play major roles. Some common traits are more desired than rare ones based on visual appeal." },
      ]}
      relatedArticles={[
        { title: "NFT Complete Guide", href: "/nfts/learn/nft-complete-guide", category: "NFTs" },
        { title: "NFT Valuation Methods", href: "/nfts/learn/nft-valuation-methods", category: "NFTs" },
        { title: "Best NFT Art Marketplaces", href: "/nfts/best/art", category: "NFTs" },
      ]}
    >
      <section id="section-1">
        <h2>Rarity Fundamentals</h2>
        <p>In generative NFT collections, each piece is created by combining traits from multiple categories like background, body, clothing, accessories, and expressions. Each trait has a frequency determining how often it appears in the collection. Traits that appear less frequently are considered rarer and typically command higher prices. Understanding trait distribution is foundational to evaluating generative NFT collections.</p>
        <p>Rarity extends beyond individual traits to trait combinations. An NFT with a rare background and a rare hat is more valuable than one with only one rare trait. Some collections also feature one-of-one pieces or hand-drawn variants that exist outside the generative system entirely, often commanding the highest premiums within a collection regardless of statistical rarity scoring.</p>
      </section>

      <section id="section-2">
        <h2>Rarity Calculation Methods</h2>
        <p>The simplest rarity calculation method uses trait frequency, adding the percentage occurrence of each trait. Lower total percentages indicate rarer pieces. More sophisticated methods use information content or entropy-based scoring that weights traits by their informativeness. Some tools use normalized scoring to prevent single extremely rare traits from dominating the overall rarity rank.</p>
        <p>Different rarity calculation methods can produce different rankings for the same collection, which has implications for trading. Trait count rarity considers how many trait slots are filled, as missing traits can be either very common or very rare. Understanding which calculation method a rarity tool uses helps interpret rankings correctly and avoid overpaying for pieces that rank high on one system but lower on others.</p>
      </section>

      <section id="section-3">
        <h2>Rarity Tools and Platforms</h2>
        <p>Rarity tools like Rarity Sniper, HowRare.is, and marketplace-integrated rarity filters provide instant access to rarity rankings and trait breakdowns. These tools calculate scores automatically from on-chain metadata, allowing collectors to quickly assess where an NFT falls within its collection hierarchy. Most tools provide searchable databases with filtering by trait, rank range, and price.</p>
        <p>Advanced rarity analysis involves comparing tool rankings, examining trait distribution patterns, and identifying undervalued trait combinations. Some traits gain cultural significance that outpaces their statistical rarity. Market intelligence tools that combine rarity data with sales history, listing patterns, and social sentiment provide the most comprehensive view for informed collecting and trading decisions.</p>
      </section>

      <section id="section-4">
        <h2>Using Rarity Strategically</h2>
        <p>Strategic use of rarity data involves identifying value gaps between rarity rankings and current prices. NFTs with high rarity but low prices relative to similarly ranked pieces represent potential opportunities. Monitoring newly listed items against their rarity ranking helps identify mispriced listings that sellers may not have evaluated carefully against the collection's rarity distribution.</p>
        <p>Balance rarity-based collecting with aesthetic preferences and community dynamics. Collections where the community values specific traits regardless of statistical rarity require understanding cultural context beyond pure numbers. The most effective collectors combine quantitative rarity analysis with qualitative assessment of visual appeal, cultural significance, and community trends to build valuable, personally meaningful collections.</p>
      </section>
    </LearnPageLayout>
  );
}
