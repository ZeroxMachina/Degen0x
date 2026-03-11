import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Subnet: What It Means in Crypto (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn what a subnet means in cryptocurrency. Understand how subnets enable custom blockchain networks within larger ecosystems like Avalanche.",
  keywords: ["subnet", "Avalanche subnet", "custom blockchain", "blockchain subnet"],
};

export default function SubnetGlossaryPage() {
  return (
    <LearnPageLayout
      title="Subnet: What It Means in Crypto"
      categoryName="Crypto Education"
      categorySlug="learn"
      readTime="5 min"
      intro="A subnet (subnetwork) is a sovereign, customizable blockchain network that operates within a larger blockchain ecosystem. Most commonly associated with Avalanche, subnets allow developers to create application-specific blockchains with their own rules, validators, and virtual machines."
      toc={[
        { id: "definition", title: "Definition", level: 2 },
        { id: "how-it-works", title: "How It Works", level: 2 },
        { id: "examples", title: "Examples & Use Cases", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
      ]}
      faqs={[
        {
          question: "How is a subnet different from a sidechain?",
          answer:
            "While both are separate chains, subnets are typically more deeply integrated into their parent ecosystem. Avalanche subnets share the same validator infrastructure and can communicate natively with the primary network. Sidechains are more independent and rely on bridges for cross-chain communication.",
        },
        {
          question: "Can anyone create a subnet?",
          answer:
            "Yes, on platforms like Avalanche, anyone can create a subnet by staking the required tokens and recruiting validators. Subnets can be customized for specific compliance needs, performance requirements, or application logic, making them accessible for both enterprises and independent developers.",
        },
      ]}
      relatedArticles={[
        { title: "Sidechain", href: "/learn/glossary/sidechain", category: "Glossary" },
        { title: "Validator", href: "/learn/glossary/validator", category: "Glossary" },
        { title: "Scalability", href: "/learn/glossary/scalability", category: "Glossary" },
      ]}
    >
      <section id="definition">
        <h2>Definition</h2>
        <p>
          A subnet, short for subnetwork, is a dynamic set of validators that work together to achieve consensus on the state of one or more blockchains within a larger network ecosystem. Each subnet is essentially a custom blockchain that can define its own execution logic, fee structure, consensus parameters, and governance rules. The concept was pioneered by Avalanche, where subnets allow anyone to create purpose-built blockchains that benefit from the broader network infrastructure while maintaining sovereignty over their own chain's rules and operation. Unlike a single monolithic blockchain that forces all applications to share the same resources and follow the same rules, the subnet model allows different use cases to run on dedicated chains optimized for their specific requirements. This creates a network of networks where each subnet can be as simple or complex as needed.
        </p>
      </section>
      <section id="how-it-works">
        <h2>How It Works</h2>
        <p>
          In the Avalanche ecosystem, every subnet validator must also validate the primary network, which provides a baseline security model. When creating a subnet, the deployer specifies the virtual machine that defines the chain's execution logic, which can be a standard EVM, a custom WebAssembly VM, or any other compatible runtime. The deployer also defines validator requirements, which can include KYC compliance, geographic restrictions, or minimum hardware specifications. Validators opt in to validate specific subnets based on these requirements and the economic incentives offered. Each subnet can have its own native token for gas fees and staking, or it can use any existing token. Subnets operate independently and do not compete for resources with other subnets or the primary network, meaning congestion on one subnet does not affect others. Cross-subnet communication is facilitated through the Avalanche Warp Messaging protocol, which allows subnets to verify messages from other subnets without relying on external bridges.
        </p>
      </section>
      <section id="examples">
        <h2>Examples & Use Cases</h2>
        <p>
          DeFi Kingdoms launched its own Avalanche subnet called DFK Chain to provide a dedicated blockchain for its gaming ecosystem with custom gas tokens and optimized performance. The Dexalot subnet runs a decentralized central limit order book exchange that requires low latency and high throughput. Enterprise use cases include regulated financial institutions creating permissioned subnets where only approved validators can participate, satisfying compliance requirements while still leveraging public blockchain infrastructure. Gaming companies use subnets to create dedicated environments where in-game transactions do not compete with DeFi or other activity. The Evergreen Subnet framework was specifically designed for institutional use cases requiring privacy and regulatory compliance. Other blockchain platforms have adopted similar concepts, with Cosmos using the term appchain and Polkadot using parachain to describe analogous dedicated blockchain architectures within their respective ecosystems.
        </p>
      </section>
      <section id="why-it-matters">
        <h2>Why It Matters</h2>
        <p>
          Subnets represent a fundamental shift in blockchain architecture from one-size-fits-all chains to specialized, application-specific networks. This matters because different use cases have fundamentally different requirements. A high-frequency trading application needs low latency and high throughput, while a privacy-focused application needs confidential transactions, and a regulated financial application needs compliance controls. Forcing all these use cases onto a single chain creates unavoidable compromises. Subnets solve this by allowing each application to have its own optimized environment while still being part of a larger interconnected ecosystem. For the broader crypto industry, subnets and similar appchain architectures are driving a vision of the future where thousands of specialized blockchains work together, each handling specific use cases efficiently. This horizontal scaling approach is increasingly seen as the path to supporting billions of users across diverse applications without overwhelming any single chain.
        </p>
      </section>
    </LearnPageLayout>
  );
}
