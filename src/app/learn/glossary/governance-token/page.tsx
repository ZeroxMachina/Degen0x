import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Governance Token? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what governance tokens are, how they enable decentralized decision-making, and their role in DAOs and DeFi protocols.",
};

export default function GovernanceTokenPage() {
  return (
    <LearnPageLayout
      title="What Is a Governance Token?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A governance token gives holders the right to vote on decisions that shape a protocol or decentralized organization. These decisions can include treasury allocations, fee structures, protocol upgrades, and partnership proposals. Governance tokens are a cornerstone of decentralized governance, transferring control from a founding team to the community of users and stakeholders."
      toc={[
        { id: "definition", title: "What Is a Governance Token?", level: 2 },
        { id: "how-it-works", title: "How Governance Tokens Work", level: 2 },
        { id: "examples", title: "Notable Examples", level: 2 },
        { id: "challenges", title: "Challenges and Criticisms", level: 2 },
        { id: "why-it-matters", title: "Why Governance Tokens Matter", level: 2 },
      ]}
      faqs={[
        {
          question: "Do governance tokens have monetary value?",
          answer:
            "Most governance tokens trade on exchanges and have market value. However, their value proposition is debated. Some argue their value comes from the power to influence protocols that manage billions in assets. Others argue that governance rights alone do not justify high valuations and that tokens need additional utility like fee sharing.",
        },
        {
          question: "Is token-based governance truly decentralized?",
          answer:
            "In practice, governance participation is often concentrated among large token holders (whales) and founding teams. Voter apathy is common, with many token holders never voting. This means a small minority can effectively control decisions. Various solutions like delegation, quadratic voting, and participation incentives aim to address these issues.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DAO?", href: "/learn/glossary/dao", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is Decentralization?", href: "/learn/glossary/decentralization", category: "Glossary" },
        { title: "What Is ERC-20?", href: "/learn/glossary/erc-20", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a Governance Token?</h2>
      <p>
        A governance token is a cryptocurrency that represents voting power within a decentralized protocol or organization. Holding governance tokens allows you to propose and vote on changes to the protocol, from minor parameter adjustments to major strategic decisions. The weight of your vote is typically proportional to the number of tokens you hold or delegate.
      </p>

      <h2 id="how-it-works">How Governance Tokens Work</h2>
      <p>
        Governance typically follows a structured process. Anyone with enough tokens can submit a proposal (or signal support for one). There is usually a discussion period, followed by a formal on-chain vote. If the proposal reaches quorum and passes, it is executed automatically via smart contracts or implemented by the development team. Many protocols use delegation, where holders can assign their voting power to trusted representatives.
      </p>

      <h2 id="examples">Notable Examples</h2>
      <p>
        UNI governs the Uniswap protocol, AAVE governs the Aave lending platform, COMP governs Compound, and MKR governs MakerDAO. Each has its own governance framework with different quorum requirements, voting periods, and proposal processes. Some tokens like MKR also have additional utility: MKR can be burned or minted based on the protocol&apos;s financial health.
      </p>

      <h2 id="challenges">Challenges and Criticisms</h2>
      <p>
        Token-based governance faces several challenges. Plutocratic voting (one token, one vote) means wealthy holders dominate decisions. Voter participation rates are typically very low. Flash loan attacks have been used to temporarily acquire voting power. Additionally, the line between governance and securities regulation remains unclear, creating legal uncertainty for many governance token projects.
      </p>

      <h2 id="why-it-matters">Why Governance Tokens Matter</h2>
      <p>
        Governance tokens represent an experiment in digital democracy and decentralized coordination. They align incentives between users and protocols by giving stakeholders direct control. Even with current limitations, they are the primary mechanism by which DeFi protocols achieve progressive decentralization, transitioning from team-controlled to community-governed systems over time.
      </p>
    </LearnPageLayout>
  );
}
