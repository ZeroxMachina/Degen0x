import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Solidity: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what Solidity means in cryptocurrency. Understand the primary smart contract programming language for Ethereum and EVM-compatible blockchains.",
  keywords: ["Solidity", "Ethereum programming language", "smart contract language", "Solidity development"],
};

export default function SolidityGlossaryPage() {
  return (
    <LearnPageLayout
      title="Solidity: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="6 min"
      intro="Solidity is a high-level, statically-typed programming language designed specifically for writing smart contracts on the Ethereum Virtual Machine (EVM). Created by the Ethereum team, it is the most widely used language for building decentralized applications across Ethereum and all EVM-compatible blockchains."
      toc={[
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "Is Solidity hard to learn?",
          answer:
            "Solidity's syntax is similar to JavaScript and C++, making it relatively approachable for developers with experience in these languages. However, smart contract development requires understanding unique concepts like gas optimization, reentrancy vulnerabilities, and blockchain-specific design patterns that differ from traditional software development.",
        },
        {
          question: "Can Solidity be used on blockchains other than Ethereum?",
          answer:
            "Yes, Solidity can be used on any EVM-compatible blockchain including Polygon, Arbitrum, Optimism, BNB Chain, Avalanche, and many others. This compatibility is one of Solidity's greatest strengths, as code written for Ethereum can often be deployed on these chains with minimal modification.",
        },
      ]}
      relatedArticles={[
        { title: "Smart Contract", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "Virtual Machine", href: "/learn/glossary/virtual-machine", category: "Glossary" },
        { title: "How Smart Contracts Work", href: "/learn/how-smart-contracts-work", category: "Learn" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          Solidity is a contract-oriented, high-level programming language for implementing smart contracts on blockchain platforms that support the Ethereum Virtual Machine. It was initially proposed by Gavin Wood in 2014 and has since become the dominant language for blockchain development. Solidity draws syntactic influence from JavaScript, C++, and Python, making it accessible to developers from various programming backgrounds. The language is statically typed, supports inheritance, libraries, and complex user-defined types, providing the features necessary to build sophisticated decentralized applications. Solidity code is compiled into bytecode that runs on the EVM, which is present on Ethereum and dozens of compatible blockchains. The language has evolved significantly since its creation, with regular updates adding new features, security improvements, and gas optimizations that make smart contract development more efficient and safer.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          Developers write smart contracts in Solidity using specialized development environments like Remix, Hardhat, or Foundry. The Solidity compiler (solc) translates the human-readable code into EVM bytecode, which is then deployed to the blockchain through a transaction. Once deployed, the contract lives at a specific address on the blockchain and can be interacted with by users and other contracts. Solidity supports key programming concepts including functions, events, modifiers, mappings, structs, and enums. It also includes blockchain-specific features like the ability to receive and send cryptocurrency, emit events that external applications can listen to, and interact with other deployed contracts. Gas costs are a critical consideration in Solidity development since every computation and storage operation consumes gas that users must pay for. This economic model incentivizes developers to write efficient, optimized code and has led to unique programming patterns specific to blockchain development.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          Virtually every major decentralized application on Ethereum and EVM chains is built with Solidity. The ERC-20 token standard, which powers thousands of fungible tokens, is implemented in Solidity. The ERC-721 and ERC-1155 standards for NFTs are Solidity contracts. Major DeFi protocols like Uniswap, Aave, Compound, and MakerDAO are all built primarily in Solidity. These contracts handle billions of dollars in value and demonstrate Solidity's capability for building complex financial logic. OpenZeppelin provides audited, reusable Solidity libraries that serve as building blocks for new projects, including safe math operations, access control patterns, and upgradeable contract frameworks. DAOs use Solidity contracts for governance, with token voting, proposal creation, and execution all encoded in smart contract logic. The language is also used for building bridges, oracles, and other infrastructure components that connect different parts of the blockchain ecosystem.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Solidity is the backbone of the decentralized application ecosystem and the most in-demand skill in blockchain development. Its importance stems from the network effects of the Ethereum ecosystem, where the vast majority of DeFi value, NFT trading, and decentralized governance takes place. Because so many blockchains have adopted EVM compatibility, learning Solidity gives developers access to building on dozens of networks, not just Ethereum. The language's dominance also means it has the largest community of developers, the most educational resources, the most comprehensive tooling, and the most battle-tested libraries available. For the crypto industry as a whole, Solidity represents the primary way that financial innovation is encoded into trustless, transparent smart contracts. Security in Solidity development is critically important since vulnerabilities can lead to the loss of millions of dollars, which has driven the growth of the smart contract auditing industry and formal verification tools designed specifically for Solidity code.
        </p>
      </section>
    </LearnPageLayout>
  );
}
