import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DAO Formation Guide (${CURRENT_YEAR}) - How to Create a DAO | CryptoDegen`,
  description: `Learn how to form a DAO from scratch. Legal wrappers, governance frameworks, treasury setup, tooling selection, and operational best practices for decentralized organizations.`,
};

export default function DAOFormationPage() {
  return (
    <LearnPageLayout
      title="DAO Formation Guide"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="10 min"
      intro="Decentralized Autonomous Organizations (DAOs) are internet-native entities governed by smart contracts and community voting. Whether you are forming an investment club, protocol governance body, or community treasury, this guide covers the legal, technical, and operational foundations for creating a functional DAO."
      toc={[
        { id: "what-is-dao", title: "What Is a DAO?", level: 2 },
        { id: "legal-wrappers", title: "Legal Wrappers and Jurisdiction", level: 2 },
        { id: "governance-design", title: "Governance Design", level: 2 },
        { id: "treasury-setup", title: "Treasury Setup", level: 2 },
        { id: "tooling", title: "Essential DAO Tooling", level: 2 },
      ]}
      faqs={[
        { question: "How much does it cost to form a DAO?", answer: "Technical setup can be done for a few hundred dollars in gas fees using free tools like Aragon or DAOhaus. However, proper legal structuring with a DAO wrapper LLC typically costs $5,000 to $30,000 in legal fees depending on the jurisdiction. Wyoming DAO LLCs have lower formation costs while more complex multi-jurisdictional structures cost more. Budget for both technical and legal setup." },
        { question: "Do DAO members have personal liability?", answer: "Without a legal wrapper, DAO members may be treated as participants in a general partnership, exposing them to unlimited personal liability. A legal wrapper like a Wyoming DAO LLC or a Marshall Islands DAO LLC limits member liability similar to a traditional LLC. This is one of the strongest reasons to establish a legal entity for any DAO that manages significant funds." },
        { question: "What is the minimum number of members to start a DAO?", answer: "Technically, a DAO can be created with any number of members. Most governance platforms have no minimum requirement. However, meaningful decentralization typically requires at least 10 to 20 active participants for governance legitimacy. Many DAOs start with a small founding team and progressively expand membership and governance power over time." },
      ]}
      relatedArticles={[
        { title: "How to Start a Web3 Business", href: "/web3-business/learn/how-to-start-web3-business", category: "Web3 Business" },
        { title: "Best DAO Tools", href: "/web3-business/best/dao-tools", category: "Web3 Business" },
        { title: "Treasury Management", href: "/web3-business/learn/treasury-management", category: "Web3 Business" },
      ]}
    >
      <h2 id="what-is-dao">What Is a DAO?</h2>
      <p>A DAO is an organization where rules and financial transactions are encoded in smart contracts on a blockchain. Members collectively govern the organization through token-weighted or reputation-based voting, and treasury funds are managed through multi-signature wallets that require multiple approvals for any transaction. DAOs remove the need for traditional corporate hierarchies by replacing centralized management with transparent, on-chain governance. Common DAO types include protocol DAOs that govern DeFi protocols (MakerDAO, Uniswap), investment DAOs that pool capital for collective investing (The LAO, MetaCartel Ventures), grant DAOs that fund ecosystem development (Gitcoin, Moloch), social DAOs built around communities and shared interests, and service DAOs that coordinate contributor work for clients. The DAO structure you choose should match your organization goals, membership model, and capital requirements.</p>

      <h2 id="legal-wrappers">Legal Wrappers and Jurisdiction</h2>
      <p>A legal wrapper gives your DAO recognized legal standing, limited liability protection for members, and the ability to enter contracts and hold traditional assets. Wyoming was the first US state to pass DAO-specific legislation, allowing DAOs to register as LLCs with algorithmically managed governance. Tennessee and other states have followed with similar frameworks. Internationally, the Marshall Islands offers a DAO LLC structure with favorable tax treatment and no requirement for members to be US persons. Switzerland foundations and Cayman Islands foundations are used for larger protocol DAOs. The key legal decision is whether your DAO will be member-managed (members vote directly on all decisions) or algorithmically managed (smart contracts execute decisions automatically based on governance votes). Most DAOs use a hybrid model where smart contracts handle routine operations while significant decisions require explicit member voting.</p>

      <h2 id="governance-design">Governance Design</h2>
      <p>Governance design determines how decisions are made, who has voting power, and what protections exist against capture or manipulation. Token-weighted voting gives voting power proportional to token holdings, which is simple but can concentrate power among large holders (whales). Quadratic voting reduces whale influence by making each additional vote progressively more expensive. Conviction voting allows participants to signal preference strength over time, reducing the impact of last-minute vote manipulation. Delegation allows token holders to assign their voting power to informed representatives. Most successful DAOs implement multiple governance layers: minor operational decisions handled by elected councils or multisig committees, significant protocol changes requiring full token holder votes with quorum requirements, and constitutional changes requiring supermajority thresholds. Set appropriate proposal thresholds, voting periods, and timelock delays to balance security with operational agility.</p>

      <h2 id="treasury-setup">Treasury Setup</h2>
      <p>The DAO treasury is typically the organization most critical asset. Set up a multi-signature wallet using Gnosis Safe (for EVM chains) or Squads (for Solana) with a signer configuration that prevents any single person from moving funds. A 3-of-5 or 4-of-7 multisig is common for initial treasuries. As the DAO grows, transition to governance-controlled treasury releases where on-chain votes authorize specific spending. Establish clear treasury management policies including diversification guidelines (avoid holding 100% in your own governance token), spending authorization levels, contributor payment schedules, and reserve requirements. Consider using a treasury management platform like Parcel or Coinshift for automated payments, portfolio tracking, and accounting integration.</p>

      <h2 id="tooling">Essential DAO Tooling</h2>
      <p>A functional DAO requires several categories of tooling. For governance, platforms like Snapshot (off-chain voting) and Tally or Governor (on-chain voting) handle proposal creation, voting, and execution. For treasury management, Gnosis Safe remains the standard multi-signature wallet with platforms like Parcel layering on payment automation. For communication and coordination, Discord serves as the primary community hub, with Discourse or Commonwealth for long-form governance discussion. For contributor management, Coordinape enables peer-based compensation allocation, while tools like Utopia Labs track contributor payments and bookkeeping. For identity and access, Guild.xyz and Collab.Land provide token-gated access to channels and resources. Start with the minimum viable toolstack and add complexity only as your DAO operations demand it.</p>
    </LearnPageLayout>
  );
}
