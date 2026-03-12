import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Dynamic NFTs: What Are They? (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about Dynamic NFTs that change based on external data, time, or user interaction. Understand how they work, their use cases, and the technology behind them.",
};

export default function DynamicNftsPage() {
  return (
    <LearnPageLayout
      title="Dynamic NFTs: What Are They?"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="9 min"
      intro="Dynamic NFTs (dNFTs) are tokens whose metadata and visual appearance can change after minting based on external conditions, time, user interaction, or real-world data. Unlike static NFTs that remain the same forever, dynamic NFTs evolve, respond to events, and create living digital assets. This technology opens up entirely new possibilities for art, gaming, sports, real estate, and identity applications that require NFTs to reflect changing real-world conditions."
      toc={[
        { id: "static-vs-dynamic", title: "static-vs-dynamic", level: 2 },
        { id: "static-vs-dynamic-nfts", title: "Static vs. Dynamic NFTs", level: 2 },
        { id: "how-they-work", title: "how-they-work", level: 2 },
        { id: "how-dynamic-nfts-work", title: "How Dynamic NFTs Work", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "real-world-use-cases", title: "Real-World Use Cases", level: 2 },
        { id: "oracle-integration", title: "oracle-integration", level: 2 },
        { id: "oracle-integration", title: "Oracle Integration", level: 2 },
        { id: "creating-dnfts", title: "creating-dnfts", level: 2 },
        { id: "creating-dynamic-nfts", title: "Creating Dynamic NFTs", level: 2 }
      ]}
      faqs={[
        { question: "Do dynamic NFTs lose their previous states?", answer: "It depends on the implementation. Some dynamic NFTs overwrite their metadata, losing the previous version. Others maintain a history of all states, preserving the evolution. On-chain dynamic NFTs can store state changes in contract storage. Off-chain metadata changes depend on how the creator manages the metadata server or IPFS updates." },
        { question: "Are dynamic NFTs more expensive to create?", answer: "Dynamic NFTs with on-chain logic require more complex smart contracts, which increases deployment and interaction gas costs. However, NFTs that use off-chain metadata updates through Chainlink Functions or similar services can be cost-efficient. The complexity and cost depend on the specific dynamic behavior implemented." },
        { question: "Can any NFT become dynamic?", answer: "Standard ERC-721 NFTs with off-chain metadata can become dynamic if the metadata URI is updated to point to new content. However, truly dynamic NFTs are purpose-built with smart contract logic that triggers changes based on defined conditions. Retrofitting static NFTs with dynamic behavior is technically possible but limited compared to purpose-built dynamic NFTs." },
      ]}
      relatedArticles={[
        { title: "Soulbound Tokens Explained", href: "/nfts/learn/soulbound-tokens", category: "NFTs" },
        { title: "How to Create NFTs", href: "/nfts/learn/how-to-create-nfts", category: "NFTs" },
        { title: "What Are NFTs?", href: "/nfts/learn/what-are-nfts", category: "NFTs" },
      ]}
    >
      <h2 id="static-vs-dynamic">Static vs. Dynamic NFTs</h2>
      <p>Static NFTs have fixed metadata and visual content set at the time of minting. A static profile picture NFT will always show the same image. Dynamic NFTs, by contrast, have smart contract logic that allows their metadata, visual appearance, or properties to change after minting. A dynamic NFT might change its appearance based on the weather, a sports score, token holder activity, or the passage of time. This fundamental difference transforms NFTs from static collectibles into living, responsive digital assets that can represent real-world states and evolving conditions.</p>

      <h2 id="how-they-work">How Dynamic NFTs Work</h2>
      <p>Dynamic NFTs use smart contracts with conditional logic that modifies the token's metadata when specific triggers occur. The smart contract defines the conditions and the resulting changes. When a condition is met, the contract updates the tokenURI or on-chain properties. External data enters the blockchain through oracles like Chainlink, which securely feed real-world information to the smart contract. Chainlink Automation can trigger state changes based on time-based or custom conditions. Some dNFTs use on-chain SVG generation where the image is computed directly from contract state, ensuring the visual always reflects the current data.</p>

      <h2 id="use-cases">Real-World Use Cases</h2>
      <p>Sports NFTs can update player statistics in real-time, with card appearances changing based on performance. Real estate NFTs can reflect current property valuations, maintenance records, and ownership history. Gaming NFTs can evolve based on gameplay, leveling up or changing appearance as the player progresses. Art NFTs can respond to environmental data like weather, time of day, or blockchain activity, creating generative art that is never the same twice. Loyalty NFTs can upgrade based on customer engagement, unlocking new benefits as the holder meets milestones. Identity NFTs can accumulate credentials and reputation over time.</p>

      <h2 id="oracle-integration">Oracle Integration</h2>
      <p>Oracles are essential for dynamic NFTs that respond to off-chain data. Chainlink is the most widely used oracle network for dNFTs, providing price feeds, weather data, sports scores, and custom API data. Chainlink Functions allows dNFTs to connect to any external API. Chainlink VRF provides verifiable randomness for NFTs that change based on random events. The oracle's role is to bridge the gap between the blockchain, which cannot access external data directly, and the real-world information that drives the dynamic behavior. Reliable oracle infrastructure ensures dNFTs update accurately and on time.</p>

      <h2 id="creating-dnfts">Creating Dynamic NFTs</h2>
      <p>Creating dynamic NFTs requires smart contract development skills or the use of no-code platforms that support dynamic features. Start by defining the dynamic behavior: what triggers changes and what changes occur. Choose between on-chain metadata (more expensive but fully decentralized) and off-chain metadata with oracle-triggered updates (more flexible and cost-efficient). Develop the smart contract with the conditional logic using Solidity for EVM chains. Integrate Chainlink or another oracle for external data feeds. Test thoroughly on testnets since dynamic behavior adds complexity and potential edge cases. Several platforms including Manifold and Highlight support creating dynamic NFTs through their creator tools.</p>
    </LearnPageLayout>
  );
}
