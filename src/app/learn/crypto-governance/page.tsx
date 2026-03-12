import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Governance: How to Vote on Proposals (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn how crypto governance works, how to vote on blockchain proposals, the role of governance tokens, and best practices for participating in protocol governance.",
};

export default function CryptoGovernancePage() {
  return (
    <LearnPageLayout
      title="Crypto Governance: How to Vote on Proposals"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="8 min read"
      intro="Crypto governance is the process by which decentralized protocols make collective decisions about upgrades, treasury spending, parameter changes, and strategic direction. Unlike traditional companies where decisions are made by executives and boards, many blockchain projects use token-based voting systems where anyone holding governance tokens can participate. Understanding governance is essential for protecting your interests as a token holder and contributing to the protocols you use."
      toc={[
        { id: "how-governance-works", title: "how-governance-works", level: 2 },
        { id: "how-crypto-governance-works", title: "How Crypto Governance Works", level: 2 },
        { id: "voting-mechanisms", title: "voting-mechanisms", level: 2 },
        { id: "voting-mechanisms", title: "Voting Mechanisms", level: 2 },
        { id: "participating", title: "participating", level: 2 },
        { id: "how-to-participate", title: "How to Participate", level: 2 },
        { id: "governance-challenges", title: "governance-challenges", level: 2 },
        { id: "governance-challenges", title: "Governance Challenges", level: 2 }
      ]}
      faqs={[
        {
          question: "Do I need to vote on every proposal?",
          answer:
            "No. Most token holders delegate their voting power to delegates who actively participate in governance. Delegation allows you to have your voice represented without tracking every proposal. You can delegate to multiple addresses on some platforms and change your delegation at any time.",
        },
        {
          question: "Does voting cost gas fees?",
          answer:
            "On-chain voting requires gas fees for each vote transaction. Off-chain voting through Snapshot is gasless, using signed messages instead of transactions. Many protocols use a hybrid approach: initial temperature checks on Snapshot, followed by binding on-chain votes for proposals that pass.",
        },
        {
          question: "Can governance be attacked?",
          answer:
            "Yes. Governance attacks include vote buying, flash loan voting (borrowing tokens to vote), and plutocratic capture where wealthy holders override community preferences. Protocols mitigate these risks through time-locks, quorum requirements, vote escrow mechanisms, and multi-house governance models.",
        },
      ]}
      relatedArticles={[
        { title: "DAO Participation Guide", href: "/learn/dao-participation", category: "Learn Crypto" },
        { title: "What Is a DAO?", href: "/learn/what-is-a-dao", category: "Learn Crypto" },
        { title: "Governance (Glossary)", href: "/learn/glossary/governance", category: "Glossary" },
        { title: "Tokenomics Explained", href: "/learn/tokenomics-explained", category: "Learn Crypto" },
      ]}
    >
      <section id="how-governance-works">
        <h2>How Crypto Governance Works</h2>
        <p>
          Most DeFi protocols use a governance process that begins with community discussion on forums like Discourse or Commonwealth. Ideas are refined through debate and feedback. Promising proposals move to a temperature check vote, typically on Snapshot (off-chain). If the temperature check passes, a formal proposal is submitted for on-chain voting, where token holders vote with their governance tokens. Approved proposals are executed through time-locked contracts.
        </p>
        <p>
          Governance tokens represent voting power in proportion to holdings. Holding 1% of the token supply gives you 1% of the voting power. Some protocols use vote-escrowed tokens (veTokens) where locking tokens for longer periods grants more voting power, rewarding long-term commitment. The specifics vary by protocol, but the principle of token-weighted voting is nearly universal in DeFi governance.
        </p>
      </section>

      <section id="voting-mechanisms">
        <h2>Voting Mechanisms</h2>
        <p>
          Token-weighted voting is the simplest model: one token equals one vote. This is used by Uniswap, Compound, and many other protocols. Quadratic voting reduces the influence of large holders by making each additional vote cost quadratically more, though it requires identity verification to prevent Sybil attacks. Conviction voting, used by some Cosmos DAOs, lets votes accumulate strength over time, favoring persistent preferences over snap decisions.
        </p>
        <p>
          Multi-house governance separates different types of decisions among different voting bodies. Optimism uses a Token House for protocol decisions and a Citizens&apos; House for public goods funding. MakerDAO has used a delegate-based model where elected delegates make routine decisions while major changes require broad token holder votes. These hybrid models aim to balance efficiency with decentralization and prevent plutocratic outcomes.
        </p>
      </section>

      <section id="participating">
        <h2>How to Participate</h2>
        <p>
          Start by acquiring governance tokens for the protocols you use and care about. Visit the protocol&apos;s governance forum to understand current discussions and proposals. If you lack the time to research every proposal, delegate your voting power to a delegate whose values align with yours. Platforms like Tally, Boardroom, and Karma provide delegate profiles, voting histories, and governance dashboards.
        </p>
        <p>
          Active participation involves more than just voting. Join governance calls, contribute to forum discussions, analyze proposal impacts, and share your perspective. Some protocols offer governance mining or rewards for participation. Being an informed, active governance participant also positions you well for future airdrops, as many projects specifically reward governance engagement in their airdrop criteria.
        </p>
      </section>

      <section id="governance-challenges">
        <h2>Governance Challenges</h2>
        <p>
          Low participation is the most common governance challenge. Most token holders never vote, leaving decisions to a small group of active participants and large holders. This creates a tension between the ideal of democratic governance and the reality of concentrated influence. Voter apathy is worsened by gas costs for on-chain voting and the complexity of understanding technical proposals.
        </p>
        <p>
          Governance capture occurs when a small group accumulates enough voting power to consistently control outcomes. This can happen through token accumulation, delegate capture, or coordination among aligned parties. Protocols combat this through quorum requirements, time-locks on execution, emergency governance mechanisms, and diversified governance structures. The ongoing challenge is designing governance systems that are both efficient enough to make timely decisions and decentralized enough to resist capture.
        </p>
      </section>
    </LearnPageLayout>
  );
}
