import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Sui Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the Sui blockchain ecosystem including Move language, object-centric model, DeFi protocols, gaming, and how to get started.",
  keywords: ["Sui", "Sui ecosystem", "Move language", "SUI token", "Sui DeFi", "object-centric blockchain"],
};

export default function SuiEcosystemGuidePage() {
  return (
    <LearnPageLayout
      title="Sui Ecosystem Guide"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="8 min"
      intro="Sui is a high-performance Layer 1 blockchain that uses the Move programming language and an object-centric data model to achieve parallel transaction execution and sub-second finality. Built by former Meta engineers from the Diem project, Sui prioritizes user experience and developer productivity while delivering industry-leading performance."
      toc={[
        { id: "overview", title: "Sui Overview", level: 2 },
        { id: "technology", title: "Technology and Move", level: 2 },
        { id: "defi", title: "DeFi Ecosystem", level: 2 },
        { id: "gaming", title: "Gaming and Consumer", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 },
      ]}
      faqs={[
        { question: "What is the Move programming language?", answer: "Move is a programming language designed for safe resource management in blockchain applications. Originally developed at Meta for the Diem project, Move prevents common smart contract vulnerabilities through its resource-oriented type system, where digital assets cannot be accidentally duplicated or destroyed." },
        { question: "How fast is Sui?", answer: "Sui can process tens of thousands of transactions per second with sub-second finality. Simple transactions (like token transfers) that do not conflict with each other can be processed in parallel without requiring consensus, enabling near-instant execution for the majority of on-chain interactions." },
        { question: "How does Sui compare to Solana?", answer: "Both are high-performance L1s targeting similar use cases. Sui uses the Move language while Solana uses Rust. Sui's object-centric model enables parallel execution without the coordination overhead of Solana's account model. Solana has a more mature ecosystem, while Sui offers newer technology and is growing rapidly." },
      ]}
      relatedArticles={[
        { title: "Aptos Ecosystem Guide", href: "/learn/aptos-ecosystem-guide", category: "Learn" },
        { title: "Solana Ecosystem Guide", href: "/learn/solana-ecosystem-guide", category: "Learn" },
        { title: "What Is Consensus?", href: "/learn/what-is-consensus", category: "Learn" },
        { title: "What Is a Smart Contract?", href: "/learn/what-is-a-smart-contract", category: "Learn" },
      ]}
    >
      <section id="overview">
        <h2>Sui Overview</h2>
        <p>Sui was built by Mysten Labs, founded by former Meta engineers who worked on the Diem blockchain project. The team brings deep expertise in distributed systems, programming language design, and cryptography. Sui launched its mainnet in May 2023 and has rapidly grown its ecosystem across DeFi, gaming, and consumer applications.</p>
        <p>The SUI token is used for gas fees, staking, and governance. Sui's unique storage fund model separates computation costs from storage costs, creating more predictable pricing and ensuring that the cost of on-chain storage is sustainable over time. The network has achieved significant adoption, particularly in gaming and consumer applications that benefit from its high performance and low costs.</p>
      </section>
      <section id="technology">
        <h2>Technology and Move</h2>
        <p>Sui's object-centric data model is its most distinctive technical feature. Unlike account-based blockchains where state is organized around addresses, Sui organizes state around objects — each token, NFT, or smart contract instance is an independent object with clear ownership. This enables parallel transaction processing because transactions touching different objects can execute simultaneously without coordination.</p>
        <p>The Move programming language provides safety guarantees at the language level. Resources in Move have linear type semantics, meaning they cannot be copied or implicitly destroyed — only moved between owners. This prevents entire classes of bugs including reentrancy attacks, unauthorized token minting, and accidental fund loss. For developers, Move provides stronger safety guarantees than Solidity while requiring a learning curve for the new paradigm.</p>
      </section>
      <section id="defi">
        <h2>DeFi Ecosystem</h2>
        <p>The Sui DeFi ecosystem is growing rapidly. Cetus is the leading DEX with concentrated liquidity. NAVI Protocol provides lending and borrowing. Scallop serves as another major lending platform. Turbos Finance offers additional DEX functionality. The ecosystem benefits from Sui's fast finality and low costs, enabling complex DeFi strategies to execute efficiently.</p>
        <p>Sui's DeFi ecosystem is still maturing compared to established chains like Ethereum and Solana, but its growth trajectory is strong. Unique capabilities enabled by the object model — like composable NFTs that can contain other objects and programmable transaction blocks that allow complex multi-step operations in a single call — create opportunities for novel DeFi products not possible on other platforms.</p>
      </section>
      <section id="gaming">
        <h2>Gaming and Consumer</h2>
        <p>Gaming is a strategic focus for Sui, with its high performance and low latency making it well-suited for gaming applications. The object model naturally maps to gaming concepts — characters, items, and game state can be represented as owned objects that players control. Several gaming studios are building on Sui, attracted by the developer experience and performance capabilities.</p>
        <p>Consumer applications on Sui leverage the platform's user-friendly features including zkLogin (signing transactions with social login credentials), sponsored transactions (dApps paying gas fees for users), and programmable transaction blocks. These features reduce the friction of blockchain interactions, making Sui-based applications feel more like traditional apps while maintaining decentralization benefits.</p>
      </section>
      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>Install the Sui Wallet browser extension or use one of several community wallets like Suiet or Ethos Wallet. Acquire SUI tokens through exchanges that support the network and send them to your wallet. Start exploring DeFi through Cetus or NAVI Protocol, or check out gaming and NFT applications in the Sui ecosystem directory.</p>
        <p>The Sui experience is designed to be accessible even for blockchain newcomers. Features like zkLogin allow sign-in with Google or other social accounts, and many applications sponsor gas fees so users can start interacting without first acquiring SUI tokens.</p>
      </section>
    </LearnPageLayout>
  );
}
