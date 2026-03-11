import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Avalanche Ecosystem Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Complete guide to the Avalanche ecosystem including subnets, C-Chain DeFi, institutional adoption, gaming initiatives, and how to get started.",
  keywords: ["Avalanche", "AVAX", "Avalanche ecosystem", "subnets", "Avalanche DeFi", "C-Chain"],
};

export default function AvalancheEcosystemGuidePage() {
  return (
    <LearnPageLayout
      title="Avalanche Ecosystem Guide"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="9 min"
      intro="Avalanche is a high-performance blockchain platform known for its unique subnet architecture, sub-second finality, and growing institutional adoption. The platform enables anyone to launch customized blockchain networks (subnets) while maintaining interoperability with the main Avalanche ecosystem, making it attractive for both DeFi applications and enterprise use cases."
      toc={[
        { id: "overview", title: "Avalanche Overview", level: 2 },
        { id: "architecture", title: "Multi-Chain Architecture", level: 2 },
        { id: "subnets", title: "Subnets and Customization", level: 2 },
        { id: "defi", title: "DeFi Ecosystem", level: 2 },
        { id: "institutional", title: "Institutional Adoption", level: 2 },
        { id: "getting-started", title: "Getting Started", level: 2 },
      ]}
      faqs={[
        { question: "What makes Avalanche different from Ethereum?", answer: "Avalanche uses the Avalanche consensus protocol which achieves sub-second finality without the need for leader-based block production. Its subnet architecture allows creating custom blockchain networks. The C-Chain is EVM-compatible, providing a familiar environment for Ethereum developers." },
        { question: "What are Avalanche subnets?", answer: "Subnets are custom blockchain networks that operate within the Avalanche ecosystem. Each subnet can have its own validator set, virtual machine, and rules. This enables application-specific chains for gaming, DeFi, or enterprise use while maintaining Avalanche network connectivity." },
        { question: "How fast is Avalanche?", answer: "Avalanche achieves transaction finality in under one second on the C-Chain, making it one of the fastest smart contract platforms. This speed is achieved through the Avalanche consensus protocol, which uses repeated random sampling of validators rather than sequential block production." },
      ]}
      relatedArticles={[
        { title: "Ethereum Ecosystem Guide", href: "/learn/ethereum-ecosystem-guide", category: "Learn" },
        { title: "Solana Ecosystem Guide", href: "/learn/solana-ecosystem-guide", category: "Learn" },
        { title: "What Is Consensus?", href: "/learn/what-is-consensus", category: "Learn" },
        { title: "What Is a Sidechain?", href: "/learn/what-is-a-sidechain", category: "Learn" },
      ]}
    >
      <section id="overview">
        <h2>Avalanche Overview</h2>
        <p>Avalanche, created by Ava Labs and founded by Cornell professor Emin Gun Sirer, introduced a novel consensus protocol that achieves finality in under a second through repeated random sub-sampling of validators. This approach enables high throughput without sacrificing decentralization, positioning Avalanche as a serious competitor to both Ethereum and other high-performance chains.</p>
        <p>The AVAX token serves as the native currency for transaction fees, staking, and subnet security. Avalanche has attracted significant institutional interest, with partnerships in tokenized real-world assets, gaming, and enterprise blockchain solutions. The platform's flexibility through subnets makes it uniquely suited for applications that need custom blockchain environments.</p>
      </section>
      <section id="architecture">
        <h2>Multi-Chain Architecture</h2>
        <p>Avalanche consists of three built-in chains. The C-Chain (Contract Chain) is the EVM-compatible smart contract platform where most DeFi and application activity occurs. The X-Chain (Exchange Chain) handles asset creation and transfer with high throughput. The P-Chain (Platform Chain) coordinates validators and manages subnets. This multi-chain design separates different types of activity for optimal performance.</p>
        <p>The C-Chain provides a familiar environment for Ethereum developers, supporting Solidity smart contracts, MetaMask, and standard EVM tooling. Applications can be deployed with minimal changes from Ethereum, while benefiting from faster finality and lower fees during normal network conditions.</p>
      </section>
      <section id="subnets">
        <h2>Subnets and Customization</h2>
        <p>Subnets are Avalanche's most distinctive feature — customizable blockchain networks that can define their own virtual machines, consensus parameters, and validator requirements. Gaming subnets like DFK Chain (for DeFi Kingdoms) and Beam (for Merit Circle) demonstrate the power of application-specific chains that can optimize for their particular use case while remaining connected to the broader Avalanche ecosystem.</p>
        <p>The Avalanche Warp Messaging (AWM) protocol enables native cross-subnet communication, allowing assets and data to flow between subnets without relying on external bridges. This creates a network of interoperable chains that collectively strengthen the Avalanche ecosystem while serving diverse application needs. The upcoming ACP-77 proposal aims to make subnet creation more accessible and reduce the cost of launching custom chains.</p>
      </section>
      <section id="defi">
        <h2>DeFi Ecosystem</h2>
        <p>The C-Chain hosts a substantial DeFi ecosystem led by Trader Joe, the dominant native DEX, along with Aave, Benqi for lending, and GMX for perpetual futures. The DeFi ecosystem benefited from significant growth incentives through the Avalanche Rush program, which attracted major protocols to deploy on the network. Stablecoin liquidity and lending markets provide essential infrastructure for the ecosystem.</p>
        <p>Avalanche has also become a notable platform for tokenized real-world assets, with projects tokenizing real estate, treasury bills, and other traditional financial instruments on the C-Chain. This RWA focus, combined with institutional partnerships, positions Avalanche at the intersection of traditional finance and DeFi innovation.</p>
      </section>
      <section id="institutional">
        <h2>Institutional Adoption</h2>
        <p>Avalanche has pursued institutional adoption aggressively, with Avalanche Evergreen subnets designed for permissioned institutional use cases. These specialized subnets allow institutions to leverage blockchain technology with compliance controls, KYC requirements, and customizable access permissions while connecting to the public Avalanche network when appropriate.</p>
        <p>Partnerships with major financial institutions for asset tokenization, trade finance, and cross-border payments demonstrate growing institutional confidence in the platform. The combination of high performance, customizable infrastructure, and institutional-grade tooling positions Avalanche as a leading platform for bridging traditional finance with blockchain technology.</p>
      </section>
      <section id="getting-started">
        <h2>Getting Started</h2>
        <p>Add the Avalanche C-Chain to MetaMask or use Core Wallet, Avalanche's native wallet. Bridge assets from Ethereum using the official Avalanche Bridge or withdraw directly from exchanges supporting Avalanche. Purchase AVAX for gas fees and start exploring the DeFi ecosystem through Trader Joe or Aave.</p>
        <p>For a broader experience, explore subnet applications like DeFi Kingdoms or gaming platforms that showcase Avalanche's unique multi-chain capabilities. The ecosystem offers something for every user, from traditional DeFi to gaming to institutional finance applications.</p>
      </section>
    </LearnPageLayout>
  );
}
