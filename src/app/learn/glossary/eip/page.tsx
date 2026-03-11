import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is an EIP? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what Ethereum Improvement Proposals (EIPs) are, how they work, and why they matter for Ethereum's evolution.",
};

export default function EipPage() {
  return (
    <LearnPageLayout
      title="What Is an EIP?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="An Ethereum Improvement Proposal (EIP) is a formal document that proposes changes to the Ethereum protocol. EIPs follow a standardized process for community review, discussion, and adoption. They cover everything from core protocol upgrades to token standards and interface conventions, serving as the primary governance mechanism for Ethereum's technical evolution."
      toc={[
        { id: "definition", title: "What Is an EIP?", level: 2 },
        { id: "types", title: "Types of EIPs", level: 2 },
        { id: "process", title: "The EIP Process", level: 2 },
        { id: "notable-eips", title: "Notable EIPs", level: 2 },
        { id: "why-it-matters", title: "Why EIPs Matter", level: 2 },
      ]}
      faqs={[
        {
          question: "Can anyone submit an EIP?",
          answer:
            "Yes. The EIP process is open to anyone. You write a proposal following the EIP template, submit it as a pull request to the EIPs repository on GitHub, and it goes through community review. However, getting an EIP accepted and implemented requires significant technical merit and community support.",
        },
        {
          question: "What is the difference between an EIP and an ERC?",
          answer:
            "An ERC (Ethereum Request for Comments) is a specific category of EIP focused on application-level standards like token interfaces. ERC-20 and ERC-721 are EIPs that define how fungible and non-fungible tokens should behave. All ERCs are EIPs, but not all EIPs are ERCs.",
        },
      ]}
      relatedArticles={[
        { title: "What Is ERC-20?", href: "/learn/glossary/erc-20", category: "Glossary" },
        { title: "What Is ERC-721?", href: "/learn/glossary/erc-721", category: "Glossary" },
        { title: "What Is a Fork?", href: "/learn/glossary/fork", category: "Glossary" },
        { title: "What Is Governance Token?", href: "/learn/glossary/governance-token", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is an EIP?</h2>
      <p>
        An Ethereum Improvement Proposal is a design document providing information to the Ethereum community about a proposed new feature, process, or standard. EIPs are modeled after Bitcoin Improvement Proposals (BIPs) and Python Enhancement Proposals (PEPs). Each EIP includes a technical specification, rationale, and reference implementation when applicable.
      </p>

      <h2 id="types">Types of EIPs</h2>
      <p>
        EIPs are categorized into three types. Standards Track EIPs propose changes that affect most or all Ethereum implementations, including core protocol changes, networking changes, and application standards like ERCs. Meta EIPs describe processes or guidelines for the Ethereum community. Informational EIPs provide general guidance or information but do not propose new features.
      </p>

      <h2 id="process">The EIP Process</h2>
      <p>
        An EIP starts as a Draft, submitted via a pull request to the ethereum/EIPs GitHub repository. Editors review it for formatting and completeness. After community discussion and revisions, it moves to Review, then Last Call (a final comment period). If no critical issues arise, it becomes Final. Core EIPs that change the protocol must be included in a network upgrade (hard fork) by client teams.
      </p>

      <h2 id="notable-eips">Notable EIPs</h2>
      <p>
        Some EIPs have shaped the entire crypto ecosystem. EIP-20 (ERC-20) defined the fungible token standard used by thousands of tokens. EIP-721 (ERC-721) created the NFT standard. EIP-1559 reformed Ethereum&apos;s fee market by introducing base fee burning. EIP-4895 enabled staked ETH withdrawals after the merge to proof of stake.
      </p>

      <h2 id="why-it-matters">Why EIPs Matter</h2>
      <p>
        EIPs represent decentralized governance in action. They provide a transparent, meritocratic process for evolving a protocol used by millions. Without EIPs, changes to Ethereum would lack structure and accountability. The process ensures that proposals are thoroughly vetted by the community before being implemented, reducing the risk of bugs or contentious changes.
      </p>
    </LearnPageLayout>
  );
}
