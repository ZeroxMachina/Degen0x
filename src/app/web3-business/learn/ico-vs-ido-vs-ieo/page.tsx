import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `ICO vs IDO vs IEO: Token Launch Methods Compared (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Initial Coin Offerings, Initial DEX Offerings, and Initial Exchange Offerings represent three primary token launch methods...",
};

export default function IcoVsIdoVsIeoPage() {
  return (
    <LearnPageLayout
      title="ICO vs IDO vs IEO: Token Launch Methods Compared"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="10 min"
      intro="Initial Coin Offerings, Initial DEX Offerings, and Initial Exchange Offerings represent three primary token launch methods with distinct advantages, requirements, and risk profiles."
      toc={[
        { id: "section-1", title: "Launch Method Overview", level: 2 },
        { id: "section-2", title: "Detailed Comparison", level: 2 },
        { id: "section-3", title: "Choosing Your Method", level: 2 },
        { id: "section-4", title: "Best Practices", level: 2 },
      ]}
      faqs={[
        { question: "What is the difference between ICO, IDO, and IEO?", answer: "ICOs are self-managed token sales by the project team. IEOs are conducted through centralized exchanges that vet projects and host the sale. IDOs launch on decentralized exchanges with immediate on-chain trading. Each offers different levels of trust, accessibility, and regulatory implications." },
        { question: "Which token launch method is most popular now?", answer: "IDOs and hybrid launches are currently most common. Pure ICOs have declined due to regulatory scrutiny. IEOs remain popular for projects that can secure exchange partnerships. The trend is toward decentralized and fair launch mechanisms." },
      ]}
      relatedArticles={[
        { title: "Token Sale Guide", href: "/web3-business/learn/token-sale-guide", category: "Web3 Business" },
        { title: "Crypto Business Guide", href: "/web3-business/learn/crypto-business-guide", category: "Web3 Business" },
        { title: "Best Token Launch Platforms", href: "/web3-business/best/token-launch-platforms", category: "Web3 Business" },
      ]}
    >
      <section id="section-1">
        <h2>Launch Method Overview</h2>
        <p>Token launch methods have evolved significantly since the ICO boom of 2017. Initial Coin Offerings were the first mechanism for projects to raise funds by selling tokens directly to the public. Initial Exchange Offerings shifted the process to centralized exchanges that provide curation and distribution. Initial DEX Offerings brought token launches on-chain through decentralized exchanges and launchpad platforms.</p>
        <p>Each method represents a different philosophy about token distribution, investor protection, and decentralization. Understanding the trade-offs between accessibility, regulatory compliance, cost, and control helps projects choose the launch method that best aligns with their goals and the expectations of their target community.</p>
      </section>

      <section id="section-2">
        <h2>Detailed Comparison</h2>
        <p>ICOs offer maximum control but carry significant regulatory risk and require the project to build its own distribution infrastructure. The 2017 ICO wave raised billions but also included numerous scams, leading to regulatory crackdowns that made pure ICOs less viable. Projects using ICO-style launches today must invest heavily in legal compliance and investor verification to mitigate regulatory exposure.</p>
        <p>IEOs leverage exchange platforms for distribution, vetting, and trust. Exchanges perform due diligence on projects, providing a filter that reduces scam risk for investors. However, IEOs require exchange partnerships that may involve listing fees and competitive selection processes. IDOs provide immediate on-chain liquidity through decentralized exchanges, offering permissionless participation but with less investor protection and higher manipulation risk.</p>
      </section>

      <section id="section-3">
        <h2>Choosing Your Method</h2>
        <p>Choose based on your project's regulatory situation, community characteristics, and resource availability. Projects with strong exchange relationships and institutional backing may benefit from IEOs. Projects prioritizing decentralization and community ownership often prefer IDOs. Projects with established legal frameworks may use structured private sales combined with public distribution mechanisms.</p>
        <p>Hybrid approaches are increasingly common, combining private sales to accredited investors with public IDOs for community distribution. This layered approach balances regulatory compliance for larger allocations with community accessibility for smaller ones. Consider your target audience, geographic distribution, and regulatory constraints when selecting the combination of mechanisms for your token distribution strategy.</p>
      </section>

      <section id="section-4">
        <h2>Best Practices</h2>
        <p>Regardless of launch method, prioritize transparency in tokenomics, clear communication about risks, and robust compliance measures. Provide detailed documentation about token utility, distribution schedule, and vesting terms. Implement fair participation mechanisms that prevent whale domination and bot manipulation. Build genuine community engagement before the launch event to ensure real demand.</p>
        <p>Plan for post-launch market making, liquidity management, and ongoing communication. A successful launch creates initial momentum that must be sustained through development execution and community growth. The launch method sets the tone for your project's relationship with its community, so choose an approach that reflects your values and positions you for long-term success rather than short-term fundraising optimization.</p>
      </section>
    </LearnPageLayout>
  );
}
