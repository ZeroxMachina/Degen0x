import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a dApp? Decentralized Application Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Learn what dApps are, how decentralized applications work, popular examples, and how they differ from traditional apps.",
};

export default function DappPage() {
  return (
    <LearnPageLayout
      title="What Is a dApp (Decentralized Application)?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A dApp (decentralized application) is an application that runs on a blockchain or decentralized network rather than on centralized servers. Unlike traditional apps controlled by a single company, dApps use smart contracts for their backend logic, making them censorship-resistant, transparent, and permissionless. DeFi platforms, NFT marketplaces, and decentralized social networks are all examples of dApps."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-a-dapp", title: "What Is a dApp?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-dapps-work", title: "How dApps Work", level: 2 },
        { id: "examples", title: "examples", level: 2 },
        { id: "popular-dapps", title: "Popular dApps", level: 2 },
        { id: "why-it-matters", title: "why-it-matters", level: 2 },
        { id: "why-dapps-matter", title: "Why dApps Matter", level: 2 },
        { id: "limitations", title: "limitations", level: 2 },
        { id: "current-limitations", title: "Current Limitations", level: 2 }
      ]}
      faqs={[
        {
          question: "How do I use a dApp?",
          answer:
            "To use most dApps, you need a cryptocurrency wallet (like MetaMask) and some crypto for transaction fees. Connect your wallet to the dApp's website, and you can interact with the smart contracts directly from your browser. No account creation or identity verification is typically required.",
        },
        {
          question: "Are dApps safe?",
          answer:
            "dApps vary widely in security. Well-audited protocols with long track records are generally reliable, but new or unaudited dApps can contain bugs or malicious code. Always check if a dApp has been audited, review its TVL and history, and start with small amounts. Be cautious about approving unlimited token spending.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is a DEX?", href: "/learn/glossary/dex", category: "Glossary" },
        { title: "What Is the EVM?", href: "/learn/glossary/ethereum-virtual-machine", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a dApp?</h2>
      <p>
        A decentralized application is software that uses smart contracts on a blockchain for its core logic and data storage, rather than relying on centralized servers and databases. The frontend can be a traditional web interface, but the backend operations — transactions, state changes, and business logic — are executed on-chain. This means no single entity can shut down, censor, or modify the application.
      </p>

      <h2 id="how-it-works">How dApps Work</h2>
      <p>
        A typical dApp has a web frontend that connects to smart contracts on a blockchain through a wallet like MetaMask. When you interact with the dApp (making a swap, lending tokens, minting an NFT), your wallet creates a transaction that calls a function on the smart contract. The transaction is processed by the network, and the result is reflected in the dApp&apos;s interface.
      </p>

      <h2 id="examples">Popular dApps</h2>
      <p>
        Uniswap is a decentralized exchange for swapping tokens. Aave and Compound enable decentralized lending and borrowing. OpenSea is an NFT marketplace. Lido provides liquid staking services. ENS (Ethereum Name Service) offers decentralized domain names. These dApps collectively process billions of dollars in transactions and serve millions of users.
      </p>

      <h2 id="why-it-matters">Why dApps Matter</h2>
      <p>
        dApps represent a paradigm shift in how software can be built and operated. They run 24/7 without downtime, operate without gatekeepers, allow anyone to interact without permission, and provide full transparency of their code and operations. They enable financial services for the unbanked, censorship-resistant communication, and new models of digital ownership.
      </p>

      <h2 id="limitations">Current Limitations</h2>
      <p>
        dApps face challenges including slower performance compared to centralized apps, transaction fees for every interaction, steep learning curves for non-technical users, limited ability to update or fix bugs once deployed, and reliance on blockchain scalability. The user experience gap between dApps and traditional apps is narrowing but remains significant.
      </p>
    </LearnPageLayout>
  );
}
