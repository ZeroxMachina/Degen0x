import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Participate in a DAO (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn how to join and participate in DAOs, the different types of DAOs, contribution opportunities, and how to get started with decentralized governance.",
};

export default function DaoParticipationPage() {
  return (
    <LearnPageLayout
      title="How to Participate in a DAO"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Decentralized Autonomous Organizations (DAOs) are community-governed entities that use smart contracts and token voting to make collective decisions. DAOs manage billions in treasury funds, govern major DeFi protocols, fund public goods, and coordinate communities around shared goals. Participating in a DAO can be as simple as buying a governance token and voting, or as involved as becoming a core contributor shaping the organization's direction."
      toc={[
        { id: "types-of-daos", title: "types-of-daos", level: 2 },
        { id: "types-of-daos", title: "Types of DAOs", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started-with-daos", title: "Getting Started with DAOs", level: 2 },
        { id: "contribution-opportunities", title: "contribution-opportunities", level: 2 },
        { id: "contribution-opportunities", title: "Contribution Opportunities", level: 2 },
        { id: "dao-compensation", title: "dao-compensation", level: 2 },
        { id: "dao-compensation-and-incentives", title: "DAO Compensation and Incentives", level: 2 }
      ]}
      faqs={[
        {
          question: "Do I need tokens to participate in a DAO?",
          answer:
            "Voting typically requires governance tokens, but many DAOs welcome participation in other ways without token holdings. You can contribute to discussions on forums, join working groups, complete bounties, create content, and attend community calls. Meaningful contribution often leads to token grants or compensation.",
        },
        {
          question: "Can I work full-time for a DAO?",
          answer:
            "Yes. Many large DAOs like Uniswap Foundation, Arbitrum DAO, and MakerDAO have full-time contributors earning competitive salaries paid in tokens, stablecoins, or a mix. Core contributor roles include engineering, governance facilitation, treasury management, communications, and business development. These roles are typically filled through governance proposals or working group hiring.",
        },
        {
          question: "How are DAOs legally structured?",
          answer:
            "DAOs use various legal structures. Some incorporate as foundations in crypto-friendly jurisdictions like the Cayman Islands or Switzerland. Others use Wyoming DAO LLC structures or operate as unincorporated associations. The legal status of DAOs remains evolving, with new frameworks being developed in multiple jurisdictions to accommodate decentralized governance.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DAO?", href: "/learn/what-is-a-dao", category: "Learn Crypto" },
        { title: "Crypto Governance", href: "/learn/crypto-governance", category: "Learn Crypto" },
        { title: "Governance (Glossary)", href: "/learn/glossary/governance", category: "Glossary" },
        { title: "DAO (Glossary)", href: "/learn/glossary/dao", category: "Glossary" },
      ]}
    >
      <section id="types-of-daos">
        <h2>Types of DAOs</h2>
        <p>
          Protocol DAOs govern DeFi protocols and blockchain networks. Examples include Uniswap DAO, Aave DAO, and Arbitrum DAO. They manage protocol upgrades, treasury spending, and ecosystem incentives. Investment DAOs pool capital from members to invest in crypto projects, venture deals, or NFTs. The LAO, MetaCartel Ventures, and BitDAO pioneered this model. Social DAOs organize around shared interests, culture, or values, often gating membership through NFTs or tokens.
        </p>
        <p>
          Grant DAOs like Gitcoin Grants and Protocol Guild focus on distributing funding to public goods and ecosystem development. Service DAOs like RaidGuild and LexDAO provide professional services to the Web3 ecosystem. Media DAOs like Bankless create content and educational resources. Each type has different participation models, governance structures, and contribution opportunities, so finding the right fit depends on your interests and skills.
        </p>
      </section>

      <section id="getting-started">
        <h2>Getting Started with DAOs</h2>
        <p>
          Begin by identifying DAOs aligned with your interests. Browse DAO aggregators like DeepDAO, which tracks DAO treasuries, membership, and activity. Join the Discord or Telegram of DAOs that interest you and spend time lurking to understand the culture, ongoing projects, and decision-making processes. Read recent governance proposals and forum discussions to understand current priorities and debates.
        </p>
        <p>
          Introduce yourself in community channels and attend governance calls or community meetings. Most DAOs have contributor onboarding processes or newcomer channels. Start with small contributions like providing feedback on proposals, helping with documentation, or participating in working group discussions. Building reputation through consistent, quality contributions is the best path to deeper involvement and compensation opportunities.
        </p>
      </section>

      <section id="contribution-opportunities">
        <h2>Contribution Opportunities</h2>
        <p>
          Technical contributions include smart contract development, frontend engineering, security auditing, and infrastructure management. Non-technical roles encompass governance facilitation, community management, content creation, marketing, treasury analysis, and business development. Most large DAOs have working groups or sub-DAOs focused on specific functions, each with their own budgets and contributor needs.
        </p>
        <p>
          Bounty platforms like Dework, Layer3, and Wonderverse list specific tasks that DAOs need completed, ranging from small documentation fixes to major development projects. These bounties provide a structured way to contribute and earn compensation without a long-term commitment. Successfully completing bounties builds your reputation and can lead to ongoing contributor roles within the DAO.
        </p>
      </section>

      <section id="dao-compensation">
        <h2>DAO Compensation and Incentives</h2>
        <p>
          DAO compensation varies widely. Core contributors at major protocol DAOs can earn $100,000-300,000 annually in a mix of stablecoins and governance tokens. Bounty payments range from $50 to $50,000 depending on scope and complexity. Some DAOs offer retroactive compensation, rewarding valuable past contributions that were not pre-negotiated. Token vesting schedules are common for ongoing contributors.
        </p>
        <p>
          Beyond direct compensation, DAO participation offers unique benefits. You gain governance influence over protocols managing billions in value. You build a public, verifiable track record of contributions. You network with talented people across the crypto ecosystem. And the experience of working in a decentralized, permission-less organization teaches skills increasingly relevant as more organizations experiment with decentralized governance structures.
        </p>
      </section>
    </LearnPageLayout>
  );
}
