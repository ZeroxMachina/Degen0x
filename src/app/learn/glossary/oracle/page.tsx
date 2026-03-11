import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is an Oracle? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what blockchain oracles are, how they bring real-world data on-chain, and why they are critical infrastructure for DeFi.",
};

export default function OraclePage() {
  return (
    <LearnPageLayout
      title="What Is an Oracle?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A blockchain oracle is a service that provides smart contracts with external, real-world data. Since blockchains cannot natively access off-chain information, oracles bridge the gap by feeding data like asset prices, weather conditions, sports scores, and more onto the blockchain. Oracles are critical infrastructure for DeFi, insurance, and any smart contract that depends on real-world information."
      toc={[
        { id: "definition", title: "What Is an Oracle?", level: 2 },
        { id: "oracle-problem", title: "The Oracle Problem", level: 2 },
        { id: "types", title: "Types of Oracles", level: 2 },
        { id: "chainlink", title: "Chainlink and Oracle Networks", level: 2 },
        { id: "why-it-matters", title: "Why Oracles Matter", level: 2 },
      ]}
      faqs={[
        {
          question: "Why can't smart contracts access external data directly?",
          answer:
            "Blockchains are deterministic systems — every node must reach the same result when executing a transaction. If smart contracts could directly query external APIs, different nodes might receive different responses at different times, breaking consensus. Oracles solve this by providing a single, agreed-upon data feed that all nodes can reference consistently.",
        },
        {
          question: "Can oracles be manipulated?",
          answer:
            "Yes, oracle manipulation is a significant attack vector. If an attacker can corrupt the price feed, they can exploit DeFi protocols that rely on it. This has led to hundreds of millions in losses. Decentralized oracle networks like Chainlink mitigate this by aggregating data from multiple independent sources and using economic incentives to ensure accuracy.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is Off-Chain?", href: "/learn/glossary/off-chain", category: "Glossary" },
        { title: "What Is a Flash Loan?", href: "/learn/glossary/flash-loan", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is an Oracle?</h2>
      <p>
        A blockchain oracle is a third-party service that connects smart contracts with the outside world. Smart contracts on Ethereum, for example, can only access data that exists within the Ethereum blockchain. An oracle fetches external data (like the current price of ETH in USD from exchanges), verifies it, and delivers it on-chain for smart contracts to use in their logic and calculations.
      </p>

      <h2 id="oracle-problem">The Oracle Problem</h2>
      <p>
        The &quot;oracle problem&quot; is a fundamental challenge: blockchains are trustless systems, but oracles introduce a trust dependency. If a DeFi lending protocol uses a price oracle, it must trust that the oracle provides accurate data. A compromised oracle can cause incorrect liquidations, enable exploits, or manipulate protocol behavior. Solving the oracle problem — making data feeds as reliable as the blockchain itself — is an ongoing challenge.
      </p>

      <h2 id="types">Types of Oracles</h2>
      <p>
        Centralized oracles rely on a single data provider, which is simple but creates a single point of failure. Decentralized oracle networks aggregate data from multiple independent node operators. Hardware oracles connect to physical sensors (IoT devices, environmental monitors). Compute oracles perform off-chain computations and deliver results on-chain. Cross-chain oracles relay information between different blockchains.
      </p>

      <h2 id="chainlink">Chainlink and Oracle Networks</h2>
      <p>
        Chainlink is the dominant decentralized oracle network, securing hundreds of billions of dollars in DeFi. It uses a network of independent node operators who each source data from multiple providers. The aggregated result is posted on-chain. Node operators are economically incentivized to provide accurate data through staking. Other oracle solutions include Pyth (optimized for high-frequency financial data), API3, and UMA.
      </p>

      <h2 id="why-it-matters">Why Oracles Matter</h2>
      <p>
        Without oracles, smart contracts would be limited to on-chain data, severely restricting their usefulness. Oracles enable DeFi lending and liquidation (price feeds), decentralized insurance (event data), prediction markets (outcome verification), and much more. The security of the entire DeFi ecosystem depends on oracle reliability. Oracles are one of the most critical and underappreciated infrastructure layers in blockchain.
      </p>
    </LearnPageLayout>
  );
}
