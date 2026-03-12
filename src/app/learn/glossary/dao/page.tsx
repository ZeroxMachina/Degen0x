import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a DAO? Decentralized Autonomous Organization Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what DAOs are, how decentralized governance works, types of DAOs, and the benefits and challenges of decentralized organizations.",
};

export default function DaoPage() {
  return (
    <LearnPageLayout
      title="What Is a DAO?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A DAO (Decentralized Autonomous Organization) is an organization governed by smart contracts and token-holder votes rather than a traditional corporate hierarchy. DAOs allow communities to collectively manage treasuries, make protocol decisions, and coordinate resources without centralized leadership. They represent a new model of internet-native organization."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-dao", title: "What Is a DAO?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-daos-work", title: "How DAOs Work", level: 2 },
        { id: "types", title: "types", level: 2 },
        { id: "types-of-daos", title: "Types of DAOs", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-daos-matter", title: "Why DAOs Matter", level: 2 },
        { id: "challenges", title: "challenges", level: 2 },
        { id: "challenges", title: "Challenges", level: 2 }
      ]}
      faqs={[
        {
          question: "How do I join a DAO?",
          answer:
            "You typically join a DAO by acquiring its governance token, which can be bought on exchanges or earned through participation. Token holders can then vote on proposals, participate in discussions (usually on Discord and governance forums), and contribute to the organization. Some DAOs also require NFTs or other membership credentials.",
        },
        {
          question: "Are DAOs legal?",
          answer:
            "The legal status of DAOs varies by jurisdiction and is still evolving. Some U.S. states like Wyoming have created legal frameworks for DAOs. In most places, DAOs exist in a regulatory gray area. Some DAOs have wrapped themselves in traditional legal entities (like foundations or LLCs) for legal clarity.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Governance Token?", href: "/learn/glossary/governance-token", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "What Is Decentralization?", href: "/learn/glossary/decentralization", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a DAO?</h2>
      <p>
        A DAO is an organization where decisions are made collectively by token holders through on-chain voting, rather than by executives or a board of directors. The rules of the organization are encoded in smart contracts on a blockchain, making them transparent and automatically enforceable. Treasury funds are managed by the smart contract and can only be spent according to approved proposals.
      </p>

      <h2 id="how-it-works">How DAOs Work</h2>
      <p>
        Community members submit proposals for treasury spending, protocol changes, partnerships, or other decisions. Token holders vote on proposals, with voting power typically proportional to token holdings. If a proposal reaches quorum and passes, it is either automatically executed by the smart contract or implemented by designated contributors. Most DAOs use platforms like Snapshot for off-chain voting and Tally for on-chain governance.
      </p>

      <h2 id="types">Types of DAOs</h2>
      <p>
        Protocol DAOs (like Uniswap, Aave) govern DeFi protocols. Investment DAOs pool capital for collective investment. Grant DAOs (like Gitcoin) distribute funding to public goods. Social DAOs create token-gated communities. Collector DAOs acquire digital art and NFTs. Media DAOs create content collectively. Each type applies the DAO model to different organizational purposes.
      </p>

      <h2 id="why-it-matters">Why DAOs Matter</h2>
      <p>
        DAOs represent a fundamental shift in how organizations can be structured. They enable global coordination without traditional corporate infrastructure, provide transparent treasury management, and give stakeholders direct say in decision-making. In DeFi, DAOs ensure that protocols remain decentralized and community-owned rather than controlled by a small team.
      </p>

      <h2 id="challenges">Challenges</h2>
      <p>
        DAOs face challenges including low voter participation, plutocratic governance (wealthy holders dominate decisions), slow decision-making, legal uncertainty, coordination difficulties, and vulnerability to governance attacks. Many DAOs are also &quot;DAOs in name only&quot; with core teams making most decisions while maintaining the appearance of decentralization.
      </p>
    </LearnPageLayout>
  );
}
