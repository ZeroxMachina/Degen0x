import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Treasury: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what a treasury means in cryptocurrency. Understand how protocol treasuries fund development, manage resources, and support community governance in DAOs.",
  keywords: ["crypto treasury", "DAO treasury", "protocol treasury", "treasury management"],
};

export default function TreasuryGlossaryPage() {
  return (
    <LearnPageLayout
      title="Treasury: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="5 min"
      intro="A treasury in cryptocurrency refers to a pool of funds controlled by a protocol, DAO, or project that is used to fund development, incentivize contributors, and support the long-term growth of the ecosystem. Treasuries are typically managed through governance votes by token holders."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "examples-use-cases", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 }
      ]}
      faqs={[
        { question: "Who controls a protocol treasury?", answer: "In decentralized protocols, the treasury is controlled by governance token holders who vote on spending proposals. Some treasuries use multisig wallets requiring multiple signers to approve transactions. The level of decentralization in treasury control varies by project, with some being fully community-governed and others having more centralized oversight." },
        { question: "How do treasuries generate revenue?", answer: "Protocol treasuries generate revenue through various mechanisms including protocol fees from user transactions, token sales from the treasury allocation, yield farming and DeFi strategies on treasury assets, NFT sales, and grants or investments from other organizations. Some treasuries also earn revenue from services offered by the protocol." },
      ]}
      relatedArticles={[
        { title: "Tokenomics", href: "/learn/glossary/tokenomics", category: "Glossary" },
        { title: "Token", href: "/learn/glossary/token", category: "Glossary" },
        { title: "How DAOs Work", href: "/learn/how-daos-work", category: "Learn" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          A treasury in the cryptocurrency context is a designated pool of assets held by a blockchain protocol, decentralized autonomous organization, or crypto project for the purpose of funding ongoing operations, development, and ecosystem growth. Treasuries can hold native tokens, stablecoins, other cryptocurrencies, NFTs, or a combination of assets. They are typically established during a project's token launch, with a percentage of the total token supply allocated to the treasury. Unlike traditional corporate treasuries managed by a CFO or finance team, crypto treasuries are increasingly managed through decentralized governance, where token holders propose and vote on how funds should be spent. The treasury serves as the financial backbone of a decentralized project, providing resources for developer grants, bug bounties, marketing campaigns, partnerships, liquidity incentives, and any other expenses needed to sustain and grow the protocol.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          Treasury management in crypto typically follows a governance-driven process. Community members or core contributors submit proposals for treasury spending, detailing the purpose, amount requested, expected outcomes, and timeline. Token holders review and vote on these proposals, with voting power proportional to their token holdings or delegated votes. If a proposal passes the required quorum and approval threshold, the funds are released from the treasury smart contract to the specified recipient. Some treasuries use timelock mechanisms that add a delay between proposal approval and fund disbursement, providing a safety window to catch malicious proposals. Multisig wallets add another layer of security by requiring multiple designated signers to approve transactions. Advanced treasury management involves diversification strategies, such as converting volatile native tokens into stablecoins to ensure the treasury can fund operations regardless of market conditions. Some protocols employ professional treasury managers or committees to handle day-to-day financial decisions within parameters approved by governance.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          The Uniswap treasury holds billions of dollars worth of UNI tokens, managed by governance votes from UNI holders. It funds grants for ecosystem development, liquidity mining programs, and community initiatives. MakerDAO's treasury management is particularly sophisticated, with diversification into real-world assets and US Treasury bonds alongside its crypto holdings. The Ethereum Foundation manages a significant treasury that funds core protocol development, research grants, and ecosystem support. Gitcoin uses its treasury to fund public goods in the Ethereum ecosystem through quadratic funding rounds. Polkadot's treasury receives a portion of transaction fees and slashing penalties, which the community then directs toward projects building on the network. These examples demonstrate how treasuries serve as the economic engine that sustains decentralized protocols, bridging the gap between token-based fundraising and the ongoing operational costs of maintaining and growing a blockchain ecosystem.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Treasuries are essential for the long-term sustainability of decentralized protocols. Without adequate funding for development, security audits, marketing, and community incentives, even technically superior projects can stagnate and lose relevance. The size and management of a treasury is a key indicator of a project's runway and ability to weather bear markets when token prices and fee revenues decline. Well-managed treasuries that diversify into stable assets can continue funding development even during prolonged downturns. For investors, treasury analysis provides insight into a project's financial health, governance maturity, and long-term viability. Red flags include treasuries that are too concentrated in the native token, excessive spending without clear outcomes, or lack of transparent reporting. The evolution of crypto treasury management reflects the broader maturation of the industry, as protocols increasingly adopt professional financial practices while maintaining the decentralized governance principles that distinguish them from traditional organizations.
        </p>
      </section>
    </LearnPageLayout>
  );
}
