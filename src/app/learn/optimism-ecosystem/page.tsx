import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `The Optimism Ecosystem Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Explore the Optimism ecosystem including the Superchain vision, OP Stack, DeFi protocols, OP token governance, and retroactive public goods funding.",
};

export default function OptimismEcosystemPage() {
  return (
    <LearnPageLayout
      title="The Optimism Ecosystem Guide"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Optimism is an Ethereum Layer 2 network and the creator of the OP Stack, the open-source framework powering Base, Worldchain, and dozens of other chains in the Superchain collective. Beyond just a single rollup, Optimism envisions a network of interoperable L2 chains that share security, communication standards, and a commitment to funding public goods. Its innovative governance model combines token voting with citizen governance to allocate resources toward ecosystem health."
      toc={[
        { id: "optimism-overview", title: "optimism-overview", level: 2 },
        { id: "optimism-overview", title: "Optimism Overview", level: 2 },
        { id: "superchain", title: "superchain", level: 2 },
        { id: "the-superchain-vision", title: "The Superchain Vision", level: 2 },
        { id: "defi-and-apps", title: "defi-and-apps", level: 2 },
        { id: "defi-and-applications", title: "DeFi and Applications", level: 2 },
        { id: "op-token", title: "op-token", level: 2 },
        { id: "op-token-and-governance", title: "OP Token and Governance", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the Superchain?",
          answer:
            "The Superchain is Optimism's vision for a network of interoperable L2 chains all built on the OP Stack. Chains in the Superchain share a common bridge, sequencing, and communication layer, enabling seamless asset and message passing. Members include Base, Worldchain, Zora Network, Mode, and others, all contributing a portion of their revenue to the Optimism Collective.",
        },
        {
          question: "How does Optimism differ from Arbitrum?",
          answer:
            "Optimism focuses on the Superchain ecosystem model, creating a standardized framework for launching interoperable L2 chains. Arbitrum focuses more on customizable Orbit chains. Optimism uses non-interactive fraud proofs while Arbitrum uses interactive ones. Both offer similar end-user experience with low fees and fast transactions.",
        },
        {
          question: "What is retroactive public goods funding?",
          answer:
            "RetroPGF is Optimism's mechanism for funding public goods that benefit the ecosystem. Instead of funding promises, RetroPGF rewards projects after they have demonstrated impact. Rounds have distributed tens of millions of dollars to developers, educators, and infrastructure providers. The Citizens' House, composed of badge-holding citizens, votes on allocations.",
        },
      ]}
      relatedArticles={[
        { title: "Base Ecosystem", href: "/learn/base-ecosystem", category: "Learn Crypto" },
        { title: "Arbitrum Ecosystem", href: "/learn/arbitrum-ecosystem", category: "Learn Crypto" },
        { title: "What Is a Rollup?", href: "/learn/what-is-a-rollup", category: "Learn Crypto" },
        { title: "Crypto Governance", href: "/learn/crypto-governance", category: "Learn Crypto" },
      ]}
    >
      <section id="optimism-overview">
        <h2>Optimism Overview</h2>
        <p>
          Optimism launched its OP Mainnet in 2021 as one of the first optimistic rollups on Ethereum. The project is built by OP Labs and governed by the Optimism Collective, a two-house governance system. The OP Stack, the modular open-source software powering the network, has been adopted by Coinbase (Base), Worldcoin (Worldchain), Zora, and many others, making it the most widely deployed L2 framework in the ecosystem.
        </p>
        <p>
          The Optimism Collective operates with a unique philosophy: the network should generate revenue that funds public goods, creating a sustainable cycle where ecosystem growth funds further development. Chains built on the OP Stack contribute a portion of their sequencer revenue to the Collective, which distributes it through retroactive public goods funding. This model aims to solve the free-rider problem that plagues open-source software development.
        </p>
      </section>

      <section id="superchain">
        <h2>The Superchain Vision</h2>
        <p>
          The Superchain envisions dozens or hundreds of OP Stack chains operating as a unified network with shared bridging, sequencing, and security. Unlike isolated L2 chains that fragment liquidity and require separate bridges, Superchain members can communicate natively through shared message passing. This means moving assets between Base and OP Mainnet can be as simple as transferring between accounts on the same chain.
        </p>
        <p>
          Shared sequencing is a key component of the Superchain roadmap. By coordinating transaction ordering across multiple chains, the Superchain can enable atomic cross-chain transactions where operations on two different chains either both succeed or both fail. This composability across chains replicates the composability that makes Ethereum mainnet DeFi so powerful, but across a scalable network of specialized chains.
        </p>
      </section>

      <section id="defi-and-apps">
        <h2>DeFi and Applications</h2>
        <p>
          OP Mainnet&apos;s DeFi ecosystem includes Velodrome (the dominant DEX using ve(3,3) tokenomics), Synthetix (synthetic assets and perpetual futures), Sonne Finance (lending), and deployments of major Ethereum protocols like Aave, Uniswap, and Curve. The Synthetix ecosystem is particularly notable, powering multiple frontend applications for perpetual futures trading including Kwenta.
        </p>
        <p>
          Beyond DeFi, the OP ecosystem hosts innovative applications across social, gaming, and identity. Worldchain (from Worldcoin) provides proof-of-personhood using iris biometrics. Zora Network focuses on NFT creation and media. Mode targets DeFi-native users with yield optimization. The diversity of chains and applications demonstrates the flexibility of the OP Stack in serving different use cases while maintaining interoperability.
        </p>
      </section>

      <section id="op-token">
        <h2>OP Token and Governance</h2>
        <p>
          OP is the governance token of the Optimism Collective, used for voting on protocol upgrades, treasury allocations, and governance proposals. The Token House consists of all OP holders and delegates, voting on core protocol decisions. The Citizens&apos; House, composed of badge-holding citizens selected through various mechanisms, votes specifically on retroactive public goods funding rounds.
        </p>
        <p>
          OP token distribution occurs through multiple channels including airdrops to active users, grants to builders, and retroPGF allocations. The token does not currently share in network revenue, though governance discussions about revenue sharing are ongoing. The value proposition of OP is tied to the growth of the entire Superchain ecosystem, as more chains joining and contributing revenue increases the resources available for ecosystem development and public goods funding.
        </p>
      </section>
    </LearnPageLayout>
  );
}
