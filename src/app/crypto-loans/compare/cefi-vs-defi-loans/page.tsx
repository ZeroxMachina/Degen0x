import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `CeFi vs DeFi Loans Compared (${CURRENT_YEAR}) | degen0x`,
  description: "Detailed comparison of CeFi and DeFi crypto loans. Understand the trade-offs in security, rates, privacy, and user experience for crypto borrowing.",
};

export default function CefiVsDefiLoansPage() {
  return (
    <LearnPageLayout
      title="CeFi vs DeFi Loans Compared"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="10 min read"
      intro="The choice between CeFi and DeFi for crypto loans is one of the most important decisions borrowers face. CeFi platforms like Nexo offer familiar interfaces and fiat access, while DeFi protocols like Aave provide transparency and self-custody. Each approach carries distinct risks and benefits that matter for your financial safety."
      toc={[
        { id: "key-differences", title: "key-differences", level: 2 },
        { id: "key-differences", title: "Key Differences", level: 2 },
        { id: "security-models", title: "security-models", level: 2 },
        { id: "security-models-compared", title: "Security Models Compared", level: 2 },
        { id: "user-experience", title: "user-experience", level: 2 },
        { id: "user-experience", title: "User Experience", level: 2 },
        { id: "choosing", title: "choosing", level: 2 },
        { id: "how-to-choose", title: "How to Choose", level: 2 }
      ]}
      faqs={[
        { question: "Is DeFi lending safer than CeFi?", answer: "They have different risk profiles. DeFi eliminates counterparty risk but introduces smart contract risk. CeFi offers insurance and support but requires trusting a company with your funds. Neither is universally safer; it depends on the specific platform and your risk tolerance." },
        { question: "Can I switch between CeFi and DeFi?", answer: "Yes. You can move your collateral between platforms at any time (after repaying existing loans). Many users maintain positions on both CeFi and DeFi to diversify risk." },
      ]}
      relatedArticles={[
        { title: "CeFi vs DeFi Lending Guide", href: "/crypto-loans/learn/cefi-vs-defi-lending", category: "Crypto Loans" },
        { title: "Best DeFi Loans", href: "/crypto-loans/best/defi", category: "Crypto Loans" },
        { title: "Nexo Review", href: "/crypto-loans/reviews/nexo", category: "Crypto Loans" },
      ]}
    >
      <h2 id="key-differences">Key Differences</h2>
      <p>CeFi loans are managed by companies that custody your funds, require KYC, offer customer support, and can provide fiat disbursement. DeFi loans operate through smart contracts, require no identity verification, are fully transparent on-chain, and only support crypto-to-crypto borrowing. CeFi typically charges 0-14% APR with tier-based pricing, while DeFi uses algorithmic rates that fluctuate with market demand.</p>

      <h2 id="security-models">Security Models Compared</h2>
      <p>CeFi risk centers on counterparty failure: the company could mismanage funds, become insolvent, or freeze withdrawals, as seen with Celsius and BlockFi. DeFi risk centers on smart contract vulnerabilities and oracle manipulation. CeFi offers insurance and regulatory recourse. DeFi offers on-chain transparency where you can verify reserves at any time. The 2022 collapses demonstrated that CeFi counterparty risk is very real.</p>

      <h2 id="user-experience">User Experience</h2>
      <p>CeFi platforms offer familiar banking-like interfaces, mobile apps, and customer support teams. Setting up takes minutes with email signup and KYC. DeFi requires a Web3 wallet, understanding of gas fees, and comfort with blockchain transactions. The learning curve is steeper but gives you full control. CeFi wins on convenience; DeFi wins on control and transparency.</p>

      <h2 id="choosing">How to Choose</h2>
      <p>Choose CeFi if you need fiat withdrawals, prefer simple interfaces, want customer support, and are comfortable with counterparty risk. Choose DeFi if you value transparency, self-custody, permissionless access, and no KYC requirements. For large amounts, consider splitting between both to diversify risk. Many experienced users start on CeFi and gradually move to DeFi as they gain confidence with Web3 tools.</p>
    </LearnPageLayout>
  );
}
