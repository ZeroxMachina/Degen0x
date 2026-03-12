import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NEAR Protocol Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the NEAR Protocol ecosystem including chain abstraction, Aurora EVM, AI integration, and how to get started with NEAR.",
  keywords: ["NEAR Protocol", "NEAR ecosystem", "chain abstraction", "Aurora", "NEAR AI", "sharding"],
};

export default function NearEcosystemGuidePage() {
  return (
    <LearnPageLayout
      title="NEAR Protocol Ecosystem Guide"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="8 min"
      intro="NEAR Protocol is a high-performance Layer 1 blockchain focused on usability and chain abstraction. With human-readable account names, gasless transactions, and the vision of making multi-chain interactions invisible to users, NEAR aims to make blockchain technology accessible to mainstream audiences. The protocol has also positioned itself at the forefront of AI and blockchain convergence."
      toc={[
        { id: "overview", title: "overview", level: 2 },
        { id: "near-overview", title: "NEAR Overview", level: 2 },
        { id: "technology", title: "technology", level: 2 },
        { id: "technology", title: "Technology", level: 2 },
        { id: "chain-abstraction", title: "chain-abstraction", level: 2 },
        { id: "chain-abstraction", title: "Chain Abstraction", level: 2 },
        { id: "ecosystem", title: "ecosystem", level: 2 },
        { id: "key-projects", title: "Key Projects", level: 2 },
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 }
      ]}
      faqs={[
        { question: "What makes NEAR different?", answer: "NEAR focuses on user experience with human-readable account names, built-in account recovery, and gasless transactions through meta-transactions. Its sharding architecture (Nightshade) enables horizontal scaling, and its chain abstraction vision aims to make multi-chain interactions seamless." },
        { question: "What is NEAR's chain abstraction?", answer: "NEAR's chain abstraction allows users to interact with any blockchain from a single NEAR account through chain signatures. This means you can sign transactions on Ethereum, Bitcoin, or other chains using your NEAR account, eliminating the need for multiple wallets and bridge interactions." },
        { question: "How does NEAR handle AI?", answer: "NEAR has integrated AI capabilities through NEAR AI, which enables on-chain AI agents, decentralized training data management, and AI-powered user interfaces. The protocol positions itself as infrastructure for the convergence of AI and blockchain technology." },
      ]}
      relatedArticles={[
        { title: "What Is Account Abstraction?", href: "/learn/what-is-account-abstraction", category: "Learn" },
        { title: "What Is Interoperability?", href: "/learn/what-is-interoperability", category: "Learn" },
        { title: "Ethereum Ecosystem Guide", href: "/learn/ethereum-ecosystem-guide", category: "Learn" },
        { title: "Solana Ecosystem Guide", href: "/learn/solana-ecosystem-guide", category: "Learn" },
      ]}
    >
      <section id="overview">
        <h2>NEAR Overview</h2>
        <p>NEAR Protocol was founded by Illia Polosukhin (co-author of the Transformer paper that underlies modern AI) and Alexander Skidanov. The project brings strong technical foundations to blockchain development, with a focus on developer experience and user-friendly design. NEAR uses a sharded Proof of Stake architecture called Nightshade that dynamically adjusts the number of shards based on network demand.</p>
        <p>The protocol has attracted significant developer activity, with a growing ecosystem of DeFi, gaming, NFT, and social applications. NEAR's positioning at the intersection of blockchain and AI, combined with its chain abstraction vision, differentiates it from other Layer 1 platforms.</p>
      </section>
      <section id="technology">
        <h2>Technology</h2>
        <p>Nightshade is NEAR's sharding approach where validators process different shards of the state in parallel, enabling the network to scale throughput as demand increases. Each shard processes transactions independently while maintaining the security of a single chain through cross-shard communication protocols. This design enables NEAR to handle high transaction volumes without requiring every validator to process every transaction.</p>
        <p>NEAR accounts use human-readable names (like "alice.near") instead of hexadecimal addresses, dramatically improving usability. The protocol supports meta-transactions that allow dApps to pay gas fees on behalf of users, named function call access keys that limit permissions, and built-in social recovery — collectively creating one of the most user-friendly blockchain experiences available.</p>
      </section>
      <section id="chain-abstraction">
        <h2>Chain Abstraction</h2>
        <p>NEAR's chain abstraction stack includes chain signatures (enabling NEAR accounts to sign transactions on any chain), intent-based transactions (expressing desired outcomes rather than specific operations), and multi-chain account management. This creates a future where users need only one account to interact with all blockchains, eliminating the complexity of managing multiple wallets and bridge interactions.</p>
        <p>This vision positions NEAR not just as another Layer 1 competitor but as a coordination layer for the multi-chain ecosystem. By abstracting away the complexity of cross-chain interactions, NEAR aims to be the entry point through which mainstream users access the entire blockchain ecosystem without needing to understand the underlying infrastructure.</p>
      </section>
      <section id="ecosystem">
        <h2>Key Projects</h2>
        <p>Aurora is an EVM-compatible environment running on NEAR, allowing Ethereum applications to deploy and benefit from NEAR's performance and low costs. Ref Finance serves as the primary DEX. Burrow provides lending and borrowing. The ecosystem also includes Mintbase for NFTs, Sweat Economy for move-to-earn fitness applications, and growing gaming and social projects.</p>
        <p>NEAR AI initiatives include on-chain AI agents, decentralized model training infrastructure, and AI-powered developer tools. These projects leverage NEAR's low costs and account model to create practical AI applications that would be expensive or impractical on other chains.</p>
      </section>
      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>Create a NEAR account through near.org or the NEAR wallet. You can choose a human-readable name like "yourname.near" which serves as your wallet address. Acquire NEAR tokens through exchanges and start exploring the ecosystem. The account creation process is designed to be accessible to users with no blockchain experience.</p>
        <p>Explore DeFi through Ref Finance, try Aurora for an EVM-compatible experience, or check out consumer applications like Sweat Economy. NEAR's low fees and user-friendly design make it an excellent platform for newcomers to blockchain technology.</p>
      </section>
    </LearnPageLayout>
  );
}
