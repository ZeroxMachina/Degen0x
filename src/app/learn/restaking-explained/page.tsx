import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Restaking Explained: EigenLayer and Securing Multiple Networks in ${CURRENT_YEAR}`,
  description:
    "Complete guide to restaking and EigenLayer. Learn how restaking works, its risks, top protocols, and how validators can earn additional yield by securing multiple networks.",
  keywords: [
    "restaking",
    "EigenLayer",
    "validator rewards",
    "Ethereum staking",
    "slashing risks",
    "Symbiotic",
    "Catalyst",
  ],
};

export default function RestakingExplainedPage() {
  return (
    <LearnPageLayout
      title="Restaking Explained: EigenLayer and Multi-Chain Security"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="11 min"
      intro="Restaking is a novel mechanism that allows Ethereum stakers to reuse their staked ETH to simultaneously secure other networks and services. EigenLayer pioneered this concept, enabling validators to point their stake toward additional operators and earn extra yield. Rather than withdrawing from Ethereum staking to stake on other networks, restakers can multiply their capital efficiency by securing multiple chains with the same ETH. This guide explains how restaking works, its mechanisms, risks (including cross-chain slashing), top protocols, and the implications for Ethereum's security model."
      toc={[
        { id: "what-is-restaking", title: "What Is Restaking?", level: 2 },
        { id: "how-restaking-works", title: "How Restaking Works Mechanically", level: 2 },
        { id: "eigenlayer-explained", title: "EigenLayer: The Restaking Pioneer", level: 2 },
        { id: "restaking-risks", title: "Risks: Slashing and Complexity", level: 2 },
        { id: "top-restaking-protocols", title: "Top Restaking Protocols and Operators", level: 2 },
        { id: "restaking-yields", title: "Restaking Yields and Economics", level: 2 },
        { id: "future-of-restaking", title: "The Future of Restaking", level: 2 },
      ]}
      faqs={[
        {
          question: "How does restaking differ from regular staking?",
          answer:
            "Regular staking locks ETH with Ethereum's validator set to secure the network. Restaking allows that same staked ETH to additionally secure other networks or services. The staked ETH remains committed to Ethereum, but restakers permit operators to use their stake as collateral for other chains. This multiplies capital efficiency—one unit of stake secures multiple networks. However, restaking introduces slashing risks from the additional networks.",
        },
        {
          question: "Can I lose my staked ETH through restaking?",
          answer:
            "Yes. Restaking introduces slashing risk. If an operator you've restaked with behaves maliciously or incorrectly on another network, your stake can be slashed—a portion of your ETH permanently lost. This is the key risk trade-off: higher yield in exchange for slashing risk. Ethereum solo stakers have minimal slashing risk (mostly for offline penalties). Restakers have higher slashing risk from the networks they're securing via operators.",
        },
        {
          question: "What is EigenLayer and how does it work?",
          answer:
            "EigenLayer is a smart contract protocol on Ethereum that enables restaking. Stakers deposit staked ETH or liquid staking tokens (LSTs like stETH) into EigenLayer contracts. They then point their stake toward operators. These operators use the delegated stake to secure other networks (called AVSs—Actively Validated Services). EigenLayer is the plumbing that coordinates restaking relationships and manages slashing.",
        },
        {
          question: "What are AVSs in EigenLayer?",
          answer:
            "AVS stands for Actively Validated Service. These are networks or applications secured by restaked capital through EigenLayer. Examples include data availability layers, sidechains, and rollups. Each AVS has its own operators. Restakers delegate to operators who validate transactions for AVSs. If an operator misbehaves on an AVS, both Ethereum and the AVS can slash the operator's stake.",
        },
        {
          question: "What are the best restaking protocols besides EigenLayer?",
          answer:
            "Symbiotic is a permissionless alternative to EigenLayer enabling restaking on non-Ethereum chains. Catalyst focuses on restaking infrastructure. EigenLayer dominates due to first-mover advantage and scale. Other emerging protocols include Babylon (Bitcoin staking to Ethereum), which explores cross-chain restaking. The ecosystem is still early; EigenLayer leads with the most AVSs and capital.",
        },
        {
          question: "How much can I earn restaking?",
          answer:
            "Restaking yields vary by operator and AVS. Base Ethereum staking yields approximately 3-5% annually. Restaking can add 5-50%+ additional yield depending on demand for the AVS and risk. However, higher yields compensate for slashing risk—you're being paid to accept that risk. Yields fluctuate as more capital enters and operators compete. Always evaluate the slashing risk of operators and AVSs before committing capital.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Ethereum?", href: "/learn/what-is-ethereum", category: "Learn Crypto" },
        { title: "Ethereum Staking Guide", href: "/learn/ethereum-staking-guide", category: "Learn Crypto" },
        { title: "Liquid Staking Tokens Explained", href: "/learn/liquid-staking-tokens", category: "Learn Crypto" },
        { title: "What Are Layer 2 Solutions?", href: "/learn/layer-2-solutions", category: "Learn Crypto" },
      ]}
    >
      <h2 id="what-is-restaking">What Is Restaking?</h2>
      <p>
        Restaking is a mechanism that allows Ethereum stakers to reuse their staked capital to simultaneously secure other blockchain networks and services. Instead of withdrawing from Ethereum to stake on another chain, restakers keep their stake on Ethereum while pointing it toward additional operators who validate other networks. This multiplies capital efficiency: one unit of stake can secure Ethereum plus one or more additional networks, generating additional yield.
      </p>
      <p>
        The mechanism emerged from the recognition that Ethereum staked capital is highly secure and valuable as collateral. Rather than each new blockchain building its own validator set, they can leverage Ethereum's security budget through restaking. This enables smaller or newer networks to inherit Ethereum's security without running their own validator infrastructure.
      </p>

      <h2 id="how-restaking-works">How Restaking Works Mechanically</h2>
      <p>
        Restaking typically involves three parties: stakers (who own ETH), operators (who run validators), and services (networks or applications seeking security). A staker deposits ETH or liquid staking tokens into a restaking protocol (like EigenLayer). They then delegate their stake to an operator. That operator uses the delegated stake as collateral to validate transactions on other networks. If the operator behaves correctly, the staker earns additional yield. If the operator misbehaves, the staker's stake is slashed.
      </p>
      <p>
        The operator is responsible for validating transactions on the additional network and maintaining uptime. They earn fees from that network but also bear responsibility for slashing risk. Stakers implicitly trust the operator to avoid misbehavior. This creates a delegation chain: staker to operator to additional network.
      </p>

      <h2 id="eigenlayer-explained">EigenLayer: The Restaking Pioneer</h2>
      <p>
        EigenLayer is a smart contract protocol on Ethereum that pioneered restaking. It enables stakers to deposit staked ETH or liquid staking tokens (like stETH, rETH) into EigenLayer contracts. Stakers then delegate their stake to operators. EigenLayer manages the relationships, coordinates slashing, and distributes rewards. EigenLayer operators validate transactions for "Actively Validated Services" (AVSs)—other networks or applications seeking security.
      </p>
      <p>
        EigenLayer's innovation is enabling permissionless restaking at scale. Previously, securing another network required building your own validator set. EigenLayer allows any network to access Ethereum's validator set. Operators can offer their services to multiple AVSs simultaneously, and stakers can delegate to multiple operators, maximizing yield opportunities.
      </p>

      <h2 id="restaking-risks">Risks: Slashing and Complexity</h2>
      <p>
        The primary risk of restaking is slashing. If an operator you've delegated to misbehaves on another network (signs conflicting blocks, goes offline, violates protocol rules), your stake can be slashed—a permanent loss of ETH. This is the core trade-off: higher yield in exchange for slashing risk. Additionally, complexity introduces new vulnerabilities: smart contract bugs in restaking protocols, operator misconduct, or coordination failures across networks.
      </p>
      <p>
        Another risk is correlated slashing: if the same operator secures multiple AVSs and misbehaves on one, your entire restaked balance could be slashed across all AVSs simultaneously. Stakers must carefully evaluate operators and the networks they validate for. This requires ongoing due diligence, making restaking more complex than passive staking.
      </p>

      <h2 id="top-restaking-protocols">Top Restaking Protocols and Operators</h2>
      <p>
        EigenLayer dominates the restaking landscape, with the largest capital base and most AVSs. Notable EigenLayer AVSs include Othentic Chain, AltLayer, Witness Chain, and emerging data availability layers. Leading operators include Lido's node operators, Coinbase Cloud, Figment, and others. Symbiotic offers a permissionless alternative for restaking on non-Ethereum chains. Catalyst focuses on restaking infrastructure and tooling. The ecosystem is rapidly expanding as more networks adopt restaking models.
      </p>

      <h2 id="restaking-yields">Restaking Yields and Economics</h2>
      <p>
        Ethereum solo staking yields approximately 3-5% annually. Restaking can add 5-50%+ additional yield depending on demand for AVS security and operator supply. However, yields are dynamic: as more capital enters, yields decrease as competition increases. Operators set fees based on supply and demand. Early restakers captured high yields; over time, yields will normalize as the market matures.
      </p>
      <p>
        Yield should never be the sole consideration. Evaluate the slashing risk of the operators and AVSs you're supporting. A 30% yield from an operator with a high slashing probability is not worthwhile. Conservative stakers may prefer lower-yield operators with proven track records and clear slashing conditions. Aggressive stakers might accept higher risk for higher yields.
      </p>

      <h2 id="future-of-restaking">The Future of Restaking</h2>
      <p>
        Restaking represents a fundamental shift in how blockchain security is provisioned. Rather than each chain building isolated validator sets, restaking enables shared security markets. Over time, this could concentrate security provision: a small number of high-quality operators attracting most restaked capital. This raises centralization concerns but also creates economic efficiency.
      </p>
      <p>
        The long-term implications include Ethereum becoming a "security marketplace" where its validator set provides security-as-a-service to other networks. This could increase Ethereum's value and staking rewards while simultaneously expanding its responsibility for securing other systems. The tension between security decentralization and efficiency will shape restaking's evolution.
      </p>
    </LearnPageLayout>
  );
}
