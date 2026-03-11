import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `The Base Ecosystem Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Explore the Base ecosystem including DeFi, social apps, memecoins, and why Coinbase's Layer 2 has become one of the fastest-growing Ethereum L2 networks.",
};

export default function BaseEcosystemPage() {
  return (
    <LearnPageLayout
      title="The Base Ecosystem Guide"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Base is an Ethereum Layer 2 network built by Coinbase using the Optimism OP Stack. Despite having no native token, Base has rapidly grown to become one of the most active L2 networks, driven by its seamless Coinbase integration, social applications, and a vibrant memecoin culture. Base's mission is to bring the next billion users on-chain by providing an accessible, low-cost platform that benefits from Coinbase's massive user base and brand trust."
      toc={[
        { id: "base-overview", title: "Base Overview", level: 2 },
        { id: "ecosystem-highlights", title: "Ecosystem Highlights", level: 2 },
        { id: "social-and-culture", title: "Social Apps and Culture", level: 2 },
        { id: "coinbase-integration", title: "Coinbase Integration and Growth", level: 2 },
      ]}
      faqs={[
        {
          question: "Does Base have its own token?",
          answer:
            "No. Base does not have a native token and Coinbase has stated there are no plans to launch one. The chain uses ETH for gas fees. This has not stopped speculation about a future token, but Coinbase earns revenue from sequencer fees rather than token appreciation. This no-token approach differentiates Base from most L2 competitors.",
        },
        {
          question: "Is Base controlled by Coinbase?",
          answer:
            "Currently, yes. Coinbase operates the sole sequencer on Base. However, Base is part of the Optimism Superchain collective and shares revenue with the Optimism Collective. The long-term roadmap includes progressively decentralizing the sequencer and governance. As an OP Stack chain, Base benefits from Optimism's decentralization efforts.",
        },
        {
          question: "How do I bridge to Base?",
          answer:
            "The easiest way is through Coinbase itself, which offers free bridging from your Coinbase account to Base. Third-party bridges like Across, Stargate, and Relay also support Base. The official Base bridge works but has a 7-day withdrawal period for L2-to-L1 transfers. For most users, bridging through Coinbase is the simplest option.",
        },
      ]}
      relatedArticles={[
        { title: "Arbitrum Ecosystem", href: "/learn/arbitrum-ecosystem", category: "Learn Crypto" },
        { title: "Optimism Ecosystem", href: "/learn/optimism-ecosystem", category: "Learn Crypto" },
        { title: "What Is a Rollup?", href: "/learn/what-is-a-rollup", category: "Learn Crypto" },
        { title: "Ethereum Ecosystem Guide", href: "/learn/ethereum-ecosystem-guide", category: "Learn Crypto" },
      ]}
    >
      <section id="base-overview">
        <h2>Base Overview</h2>
        <p>
          Base launched in August 2023 and rapidly became one of the most active Ethereum L2 networks. Built on the Optimism OP Stack, it benefits from a battle-tested codebase while leveraging Coinbase&apos;s resources and user base for distribution. The chain offers sub-cent transaction fees, fast confirmation times, and full EVM compatibility. Base is the first major blockchain launched by a publicly traded company, bringing institutional credibility to the L2 space.
        </p>
        <p>
          What distinguishes Base from other L2s is its growth strategy. Rather than relying on token incentives and airdrops, Base grows through Coinbase integration, developer grants, and cultural momentum. The Coinbase Smart Wallet provides gasless onboarding for new users, dramatically reducing the friction of entering the on-chain world. This approach has attracted both crypto-native users and completely new participants.
        </p>
      </section>

      <section id="ecosystem-highlights">
        <h2>Ecosystem Highlights</h2>
        <p>
          Aerodrome is the dominant DEX on Base, combining the ve(3,3) tokenomics model with concentrated liquidity to offer deep pools and competitive yields. It has attracted billions in TVL and serves as the primary liquidity layer for the ecosystem. Moonwell provides lending and borrowing, while Extra Finance offers leveraged yield farming. Morpho has also deployed on Base, offering optimized lending rates.
        </p>
        <p>
          The NFT and creator economy on Base is particularly vibrant. Zora enables free minting of NFTs as media, turning every post into a collectible. Highlight provides tools for creators to launch NFT collections. The low costs make experimentation accessible, encouraging creative uses of on-chain technology that would be too expensive on Ethereum mainnet. Developer tooling from Coinbase including the Base SDK and onchainkit simplify building applications on Base.
        </p>
      </section>

      <section id="social-and-culture">
        <h2>Social Apps and Culture</h2>
        <p>
          Base has become the epicenter of on-chain social applications. Farcaster, the decentralized social protocol, has strong ties to the Base ecosystem, with many Frames (interactive social widgets) operating on Base. Friend.tech popularized social token trading on the chain. Degen, the community tipping token from Farcaster, created an entire meme economy on Base that expanded into its own L3 chain.
        </p>
        <p>
          The memecoin culture on Base is distinct and highly active. Low transaction costs enable rapid token creation and trading, and cultural alignment between Base builders creates a unique sense of community. Coinbase has embraced this grassroots culture while also attracting more institutional applications. This combination of retail energy and institutional backing creates a uniquely balanced ecosystem that appeals to a wide range of participants.
        </p>
      </section>

      <section id="coinbase-integration">
        <h2>Coinbase Integration and Growth</h2>
        <p>
          The Coinbase connection is Base&apos;s most powerful growth lever. With over 100 million verified users, Coinbase can funnel new users directly to Base through in-app prompts, free bridging, and the Smart Wallet. This distribution advantage is difficult for any other L2 to replicate. Coinbase earns sequencer revenue from Base, creating a sustainable business model that does not depend on token speculation.
        </p>
        <p>
          Base is part of the broader Optimism Superchain vision, sharing revenue with the Optimism Collective and contributing to shared development efforts. This collaboration means Base users benefit from ongoing OP Stack improvements while Base&apos;s success helps fund public goods and ecosystem development across the entire Superchain. The relationship demonstrates how L2 networks can cooperate rather than purely compete, creating a healthier multi-chain ecosystem.
        </p>
      </section>
    </LearnPageLayout>
  );
}
