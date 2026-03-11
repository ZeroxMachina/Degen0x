import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is CeFi? Centralized Finance Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what CeFi (Centralized Finance) is, how it differs from DeFi, its advantages and risks, and the role centralized platforms play in the crypto ecosystem.",
};

export default function CefiPage() {
  return (
    <LearnPageLayout
      title="What Is CeFi (Centralized Finance)?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="CeFi (Centralized Finance) refers to cryptocurrency financial services provided by centralized companies that act as intermediaries. This includes centralized exchanges, lending platforms, and custodial services. CeFi offers familiar user experiences and customer support but requires trusting a third party with your assets, which introduces counterparty risk."
      toc={[
        { id: "definition", title: "What Is CeFi?", level: 2 },
        { id: "how-it-works", title: "How CeFi Works", level: 2 },
        { id: "cefi-vs-defi", title: "CeFi vs DeFi", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "risks", title: "CeFi Risks", level: 2 },
      ]}
      faqs={[
        {
          question: "Is CeFi safer than DeFi?",
          answer:
            "CeFi and DeFi carry different risk profiles. CeFi has counterparty risk (the company could fail or mismanage funds) but offers customer support and insurance in some cases. DeFi has smart contract risk and requires self-custody but eliminates counterparty risk. Neither is universally safer — the best approach often combines both.",
        },
        {
          question: "What are examples of CeFi platforms?",
          answer:
            "Major CeFi platforms include Coinbase, Kraken, Binance, and Gemini for trading. For lending, examples include (or included) BlockFi, Nexo, and Celsius. For custody, there are Coinbase Custody, BitGo, and Fireblocks. These platforms serve as the primary on-ramp for most new crypto users.",
        },
      ]}
      relatedArticles={[
        { title: "What Is DeFi?", href: "/learn/glossary/defi", category: "Glossary" },
        { title: "What Is a Centralized Exchange?", href: "/learn/glossary/centralized-exchange", category: "Glossary" },
        { title: "What Is KYC?", href: "/learn/glossary/kyc", category: "Glossary" },
        { title: "What Is a Cold Wallet?", href: "/learn/glossary/cold-wallet", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is CeFi?</h2>
      <p>
        CeFi encompasses all cryptocurrency financial services operated by centralized entities. When you use Coinbase to buy Bitcoin, deposit stablecoins on a lending platform to earn interest, or trade perpetual futures on a centralized exchange, you are using CeFi. These platforms operate much like traditional financial institutions but deal in digital assets.
      </p>

      <h2 id="how-it-works">How CeFi Works</h2>
      <p>
        CeFi platforms hold customer assets in their own wallets and manage them on behalf of users. When you deposit crypto on a centralized exchange, you are essentially transferring custody to that company. They maintain internal ledgers to track your balance. Transactions between users on the same platform happen off-chain, which is faster and cheaper than on-chain transactions.
      </p>

      <h2 id="cefi-vs-defi">CeFi vs DeFi</h2>
      <p>
        CeFi offers simplicity, fiat on/off-ramps, customer support, and regulatory compliance. DeFi offers self-custody, transparency, permissionless access, and composability. CeFi requires identity verification (KYC), while most DeFi protocols are open to anyone with a wallet. CeFi operates under business hours and jurisdictional regulations, while DeFi runs 24/7 without geographic restrictions.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        CeFi remains the primary gateway for most people entering crypto. It provides the familiar interfaces, fiat currency support, and customer service that new users expect. Understanding the trade-offs between CeFi and DeFi helps you make informed decisions about where to hold and manage your assets based on your priorities for convenience, control, and risk tolerance.
      </p>

      <h2 id="risks">CeFi Risks</h2>
      <p>
        The collapse of FTX, Celsius, and BlockFi demonstrated the risks of trusting centralized platforms. These companies mismanaged customer funds, leading to billions in losses. CeFi platforms can be hacked, go bankrupt, freeze withdrawals, or commit fraud. The core lesson is to minimize assets held on centralized platforms and practice self-custody for long-term holdings.
      </p>
    </LearnPageLayout>
  );
}
