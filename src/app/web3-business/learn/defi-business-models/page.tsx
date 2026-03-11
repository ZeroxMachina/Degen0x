import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `DeFi Business Models Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Decentralized finance has created novel business models generating revenue through protocol fees, token appreciation...",
};

export default function DefiBusinessModelsPage() {
  return (
    <LearnPageLayout
      title="DeFi Business Models Explained"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="10 min"
      intro="Decentralized finance has created novel business models generating revenue through protocol fees, token appreciation, MEV capture, and liquidity provision across the DeFi ecosystem."
      toc={[
        { id: "section-1", title: "DeFi Revenue Models", level: 2 },
        { id: "section-2", title: "Protocol Business Models", level: 2 },
        { id: "section-3", title: "Infrastructure Models", level: 2 },
        { id: "section-4", title: "Sustainability Analysis", level: 2 },
      ]}
      faqs={[
        { question: "How do DeFi protocols make money?", answer: "DeFi protocols generate revenue through trading fees, lending spreads, liquidation penalties, protocol fees from token swaps, and value accrual to governance tokens. Different protocol types have different primary revenue sources." },
        { question: "Are DeFi business models sustainable?", answer: "Sustainable DeFi business models generate revenue from genuine economic activity like trading and lending rather than relying on token emissions. Protocols with real revenue relative to their costs and token incentives have the strongest sustainability profiles." },
      ]}
      relatedArticles={[
        { title: "Crypto Business Guide", href: "/web3-business/learn/crypto-business-guide", category: "Web3 Business" },
        { title: "Web3 Startup Funding", href: "/web3-business/learn/web3-startup-funding", category: "Web3 Business" },
        { title: "Best DAO Tooling", href: "/web3-business/best/dao-tooling", category: "Web3 Business" },
      ]}
    >
      <section id="section-1">
        <h2>DeFi Revenue Models</h2>
        <p>DeFi protocols generate revenue through several mechanisms. Trading fee protocols like Uniswap earn from swap fees charged on trades. Lending protocols earn from the spread between borrower interest rates and depositor yields. Liquid staking protocols take a percentage of staking rewards. Each model creates different revenue profiles, growth dynamics, and competitive moats that determine long-term viability.</p>
        <p>Revenue distribution varies between protocols. Some direct fees to token holders through buybacks or dividends. Others accumulate in protocol treasuries governed by the DAO. Some protocols have fee switches that can be activated by governance to redirect fees from liquidity providers to token holders. Understanding how revenue flows through a protocol's economic model helps evaluate token investment thesis and sustainability.</p>
      </section>

      <section id="section-2">
        <h2>Protocol Business Models</h2>
        <p>DEX protocols earn trading fees proportional to volume. Higher liquidity attracts more traders, creating a positive flywheel. Lending protocols earn from the interest rate spread between borrowers and lenders, with liquidation penalties providing additional revenue. Yield aggregators charge performance fees on the yield they generate for depositors. Each model has different scaling characteristics and competitive dynamics.</p>
        <p>Derivatives protocols earn from trading fees and funding rates. Oracle networks charge data consumers for reliable price feeds. Bridge protocols earn from transfer fees. Each niche within DeFi has developed specific business models that generate revenue from the value they provide to users. The most successful protocols achieve product-market fit where users willingly pay fees for services that provide genuine economic value.</p>
      </section>

      <section id="section-3">
        <h2>Infrastructure Models</h2>
        <p>DeFi infrastructure businesses include node operators, indexing services, analytics platforms, development tools, and security services. These businesses often operate as traditional companies charging subscription or usage fees rather than as tokenized protocols. The infrastructure layer provides essential services that enable the DeFi ecosystem to function, creating reliable revenue streams less correlated to token market cycles.</p>
        <p>MEV (Maximal Extractable Value) capture through searchers, builders, and validators represents a significant but technically complex business model. API and data services monetize blockchain access and analytics. Audit firms charge for security review services. These infrastructure businesses benefit from ecosystem growth regardless of which specific protocols succeed, providing more diversified exposure to the DeFi sector.</p>
      </section>

      <section id="section-4">
        <h2>Sustainability Analysis</h2>
        <p>Evaluate DeFi business model sustainability by comparing real revenue to token emissions and operating costs. Protocols where token incentive costs exceed revenue are effectively subsidizing usage and may not be sustainable when incentives decrease. Sustainable protocols generate enough organic revenue to cover costs and reward stakeholders without relying on continuous token inflation.</p>
        <p>Long-term sustainability requires competitive moats including network effects, switching costs, brand trust, and technological advantages. Protocols with strong moats can maintain pricing power and market share. Those competing purely on incentives face a race to the bottom as incentives are unsustainable. The most promising DeFi business models combine genuine value creation with defensible competitive advantages and efficient capital structures.</p>
      </section>
    </LearnPageLayout>
  );
}
