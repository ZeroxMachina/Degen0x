import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Web3? The Decentralized Internet (${CURRENT_YEAR}) | degen0x`,
  description:
    "Explore Web3: the decentralized internet built on blockchain technology. Learn how Web3 differs from Web1 and Web2, its core principles, key applications, and current limitations.",
};

export default function WhatIsWeb3Page() {
  return (
    <LearnPageLayout
      title="What Is Web3? The Decentralized Internet"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="9 min read"
      intro="Web3 refers to the next evolution of the internet, built on decentralized technologies like blockchain, smart contracts, and token-based economics. Where Web1 was read-only and Web2 introduced user-generated content controlled by platform intermediaries, Web3 envisions an internet where users own their data, digital assets, and identity. It promises to shift power from centralized corporations back to individuals and communities through open, permissionless protocols."
      toc={[
        { id: "web-evolution", title: "web-evolution", level: 2 },
        { id: "the-evolution-web1-web2-web3", title: "The Evolution: Web1, Web2, Web3", level: 2 },
        { id: "core-principles", title: "core-principles", level: 2 },
        { id: "core-principles-of-web3", title: "Core Principles of Web3", level: 2 },
        { id: "key-technologies", title: "key-technologies", level: 2 },
        { id: "key-technologies-powering-web3", title: "Key Technologies Powering Web3", level: 2 },
        { id: "applications", title: "applications", level: 2 },
        { id: "web3-applications-today", title: "Web3 Applications Today", level: 2 },
        { id: "challenges", title: "challenges", level: 2 },
        { id: "challenges-and-criticisms", title: "Challenges and Criticisms", level: 2 }
      ]}
      faqs={[
        {
          question: "Do I need cryptocurrency to use Web3?",
          answer:
            "Currently, most Web3 applications require some cryptocurrency to pay for transaction fees (gas). However, account abstraction and gas sponsorship are making it possible for applications to cover these costs on behalf of users, creating experiences that feel as seamless as traditional Web2 apps while operating on decentralized infrastructure.",
        },
        {
          question: "Is Web3 just about money and finance?",
          answer:
            "No. While DeFi is currently the most mature Web3 sector, Web3 encompasses decentralized social media, gaming, identity, governance, science, storage, and more. The core idea is applying decentralization and user ownership to any internet application, not just financial ones.",
        },
        {
          question: "When will Web3 replace Web2?",
          answer:
            "Web3 is unlikely to fully replace Web2, just as Web2 did not eliminate Web1. Instead, Web3 technologies will integrate with existing internet infrastructure, gradually introducing user ownership and decentralization into applications where those properties provide meaningful value. The transition will be gradual, and many applications will be hybrid Web2/Web3.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DAO?", href: "/learn/what-is-a-dao", category: "Learn" },
        { title: "What Are Smart Contracts?", href: "/learn/what-are-smart-contracts", category: "Learn" },
        { title: "Account Abstraction", href: "/learn/account-abstraction", category: "Learn" },
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn" },
      ]}
    >
      <section id="web-evolution">
        <h2>The Evolution: Web1, Web2, Web3</h2>
        <p>
          Web1 (roughly 1990-2004) was the era of static, read-only websites. Content was created by a small number of publishers, and users consumed it passively. Websites were little more than digital brochures — informative but non-interactive. The infrastructure was decentralized in the sense that anyone could host a website, but the experience was limited and one-directional.
        </p>
        <p>
          Web2 (2004-present) introduced user-generated content, social media, and interactive applications. Platforms like Facebook, YouTube, Google, and Amazon became the dominant intermediaries of online life. While Web2 democratized content creation, it concentrated power and data in the hands of a few massive corporations. Users became the product — their data harvested for targeted advertising, their content hosted on platforms that could censor or de-platform them at will.
        </p>
        <p>
          Web3 aims to address this power imbalance by building internet applications on decentralized, open-source protocols. Instead of platforms owning user data and content, blockchain-based systems enable users to own their digital identity, assets, and social connections through cryptographic keys. Value flows to participants rather than platform operators, and governance is distributed among community members rather than corporate boards.
        </p>
      </section>

      <section id="core-principles">
        <h2>Core Principles of Web3</h2>
        <p>
          Decentralization is the foundational principle: Web3 applications run on distributed networks rather than centralized servers, eliminating single points of failure and control. User ownership means individuals have true custody of their digital assets, identity, and data through private keys, without relying on a platform to grant or revoke access. Permissionless participation means anyone can use, build on, or contribute to Web3 protocols without seeking approval from a gatekeeper.
        </p>
        <p>
          Composability refers to the ability of Web3 protocols to interoperate and build on each other like open-source building blocks, creating an ecosystem where innovation compounds. Token-based economics align incentives between users, developers, and stakeholders by distributing ownership and governance rights through digital tokens. Transparency ensures that all code, transactions, and governance decisions are publicly auditable on the blockchain.
        </p>
      </section>

      <section id="key-technologies">
        <h2>Key Technologies Powering Web3</h2>
        <p>
          Blockchains provide the decentralized infrastructure for settlement, data storage, and smart contract execution. Smart contracts enable programmable, self-executing agreements that power everything from financial services to digital identity. Cryptographic wallets serve as the user's gateway to Web3, managing private keys and enabling interaction with decentralized applications. Decentralized storage networks like IPFS and Arweave provide permanent, censorship-resistant data storage.
        </p>
        <p>
          Decentralized identity standards allow users to create portable, self-sovereign identities that work across multiple applications without relying on centralized providers like Google or Facebook for authentication. Oracle networks like Chainlink bridge the gap between blockchain and real-world data, enabling smart contracts to react to external events. Layer 2 scaling solutions ensure that Web3 applications can achieve the speed and cost-effectiveness necessary for mainstream adoption.
        </p>
      </section>

      <section id="applications">
        <h2>Web3 Applications Today</h2>
        <p>
          DeFi protocols have created a parallel financial system processing billions in daily volume, offering lending, borrowing, trading, and insurance without banks. Decentralized social platforms like Farcaster and Lens Protocol give users ownership of their social graph and content, allowing them to move their followers and posts between applications. Play-to-earn games and metaverse platforms use NFTs and tokens to give players true ownership of in-game assets.
        </p>
        <p>
          DAOs coordinate thousands of contributors globally, managing treasuries worth billions and governing major protocols through democratic, on-chain voting. Decentralized physical infrastructure networks (DePIN) incentivize people to contribute real-world resources like wireless coverage, compute power, and data storage. The Web3 ecosystem continues to expand into new verticals, each applying the principles of decentralization and user ownership to different domains.
        </p>
      </section>

      <section id="challenges">
        <h2>Challenges and Criticisms</h2>
        <p>
          User experience remains Web3's biggest barrier to mainstream adoption. Managing private keys, understanding gas fees, navigating bridges between chains, and protecting against scams create a steep learning curve. Many Web3 applications are slower and more expensive than their Web2 counterparts, and the benefits of decentralization are not always apparent to casual users who prioritize convenience over sovereignty.
        </p>
        <p>
          Scalability limitations, regulatory uncertainty, and environmental concerns (for PoW-based systems) continue to present challenges. Critics argue that many Web3 projects are solutions in search of problems, that token incentives often attract speculators rather than genuine users, and that true decentralization is rare in practice, with many projects relying heavily on centralized infrastructure behind the scenes. Addressing these valid criticisms while maintaining the core vision of user ownership and openness is the defining challenge of the Web3 movement.
        </p>
      </section>
    </LearnPageLayout>
  );
}
