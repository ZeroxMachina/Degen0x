import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Drops: How to Get Allowlisted (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn how NFT drops work, strategies for getting allowlisted, how to evaluate upcoming drops, and best practices for participating in NFT launches.",
};

export default function NftDropsGuidePage() {
  return (
    <LearnPageLayout title="NFT Drops: How to Get Allowlisted" categoryName="NFTs" categorySlug="nfts" readTime="9 min read"
      intro="NFT drops are timed release events where new collections become available for minting. Getting access to the best drops, particularly through allowlists, can mean the difference between minting at a discount and paying a premium on the secondary market. The allowlisting process has evolved into a complex ecosystem with various strategies and criteria. This guide covers how drops are structured, how to position yourself for allowlist spots, and how to evaluate which drops are worth pursuing."
      toc={[{ id: "drop-structures", title: "Drop Structures", level: 2 }, { id: "getting-allowlisted", title: "Getting Allowlisted", level: 2 }, { id: "evaluating-drops", title: "Evaluating Upcoming Drops", level: 2 }, { id: "drop-day-strategy", title: "Drop Day Strategy", level: 2 }]}
      faqs={[{ question: "What is an NFT allowlist?", answer: "An allowlist is a curated list of wallet addresses that receive priority access to mint from a new NFT collection, usually before the public sale and often at a lower price. Allowlist spots are earned through community participation, holding specific NFTs, completing tasks, winning raffles, or being selected by the project team. The allowlist mint phase is less competitive and cheaper than the public mint." },
        { question: "How far in advance should I start preparing for a drop?", answer: "For popular projects, start engaging 2-4 weeks before the mint date. Join the Discord early, participate consistently in community activities, and complete any required tasks promptly. Allowlist selection often happens 1-2 weeks before mint, but some projects reward early and consistent participants. Following project founders and team members on Twitter/X helps you stay informed about allowlist opportunities as they arise." },
        { question: "Is it worth buying an allowlist spot?", answer: "Some people sell allowlist access through marketplace platforms. This carries significant risk: you might overpay relative to the mint price plus expected gains, the project might underperform, or the allowlist sale might be a scam. If you consider buying a spot, ensure the seller can verifiably add your wallet to the allowlist and that the expected post-mint value justifies the total cost (spot price plus mint price plus gas)." }]}
      relatedArticles={[{ title: "NFT Minting Guide", href: "/nfts/learn/nft-minting-guide", category: "NFTs" }, { title: "NFT Communities", href: "/nfts/learn/nft-communities", category: "NFTs" }, { title: "NFT Valuation", href: "/nfts/learn/nft-valuation", category: "NFTs" }, { title: "NFT Marketplaces Compared", href: "/nfts/learn/nft-marketplaces-compared", category: "NFTs" }]}
    >
      <section id="drop-structures">
        <h2>Drop Structures</h2>
        <p>Most NFT drops follow a multi-phase structure. The first phase is the allowlist (or presale) mint, where pre-approved wallets can mint at a discounted price with guaranteed access. The second phase is the public mint, open to everyone, often at a higher price and with competitive demand. Some projects add a third phase for holders of partner collections or a free claim for existing community members. Each phase may have different prices, mint limits, and durations.</p>
        <p>Alternative drop structures include Dutch auctions, where the mint price starts high and decreases over time until all NFTs are claimed or a minimum price is reached. This mechanism lets the market determine fair price. Free mints have become popular, where minters pay only gas. Raffle-based drops require registration and randomly select winners who gain the right to mint, eliminating the gas wars that plague first-come-first-served public mints. Each structure creates different strategic considerations for participants.</p>
      </section>

      <section id="getting-allowlisted">
        <h2>Getting Allowlisted</h2>
        <p>The most common path to allowlist spots is active community participation. Join the project&apos;s Discord early, contribute to discussions, help other members, create fan art, and participate in community events. Projects track engagement through role systems and bot-based activity metrics. Genuine, consistent participation over weeks demonstrates real interest and is more effective than last-minute activity bursts. Quality of engagement matters more than quantity.</p>
        <p>Other allowlisting methods include holding specific partner NFTs (cross-community collaborations), completing social media tasks (following, retweeting, creating content), winning community competitions or raffles, and being identified as an influential community member. Some projects use platforms like Premint or Alphabot that aggregate allowlist applications and use criteria-based selection. Building a strong NFT social media presence across multiple communities increases your chances of receiving allowlist invitations for new projects.</p>
      </section>

      <section id="evaluating-drops">
        <h2>Evaluating Upcoming Drops</h2>
        <p>Not every drop is worth pursuing. Evaluate the team behind the project: do they have a track record of successful launches? Is the team doxxed (publicly identified) or anonymous? Review the art quality and originality: is it distinctive enough to stand out in a crowded market? Assess the community size and engagement: genuine excitement from a growing community is a strong positive signal. Check the mint price and supply: high prices and large supplies face more resistance to sustained value.</p>
        <p>Analyze the project&apos;s roadmap and utility proposition. Projects that promise extensive roadmaps without the team or funding to deliver often disappoint. Look for realistic, focused plans rather than overly ambitious visions. Check the smart contract: is it verified, audited, and using standard patterns? Monitor pre-mint secondary market activity for allowlist spots and partner collections as a demand gauge. Use drop calendars and aggregators like ICY Tools, NFT Evening, and Rarity Sniper to discover and track upcoming drops systematically.</p>
      </section>

      <section id="drop-day-strategy">
        <h2>Drop Day Strategy</h2>
        <p>Prepare your wallet well before the mint opens. Ensure you have sufficient funds for the mint price plus gas fees with a generous buffer. Connect to the minting site using verified official links and bookmark the page. Test the connection and ensure your wallet is on the correct network. If you have an allowlist spot, verify your wallet is on the list using any verification tools the project provides.</p>
        <p>During the allowlist phase, you typically have a time window (hours to a full day) so there is no rush. Mint at your convenience during this window. For public mints, the first minutes are the most competitive. Have your transaction ready to submit immediately when the mint opens. Set appropriate gas settings: higher for competitive mints, standard for less competitive ones. After minting, decide quickly whether to hold or list. Early secondary market dynamics can be volatile, with prices often spiking immediately after sellout before settling to a more stable level over the following days.</p>
      </section>
    </LearnPageLayout>
  );
}
