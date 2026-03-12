import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Nexo vs BlockFi Lending (${CURRENT_YEAR}) | degen0x`,
  description:
    "Compare Nexo and BlockFi crypto lending platforms. Analysis of rates, features, safety, and the impact of BlockFi's bankruptcy on the CeFi lending landscape.",
};

export default function NexoVsBlockfiPage() {
  return (
    <LearnPageLayout
      title="Nexo vs BlockFi Lending"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="8 min read"
      intro="Nexo and BlockFi represent two different outcomes in the CeFi crypto lending space. While Nexo has survived and continued operating, BlockFi filed for bankruptcy in November 2022 following the FTX collapse. This comparison examines what happened to both platforms, what Nexo offers today, the lessons learned from BlockFi's failure, and what CeFi lending users should look for in platform selection going forward."
      toc={[
        { id: "platform-status", title: "platform-status", level: 2 },
        { id: "current-platform-status", title: "Current Platform Status", level: 2 },
        { id: "what-happened-blockfi", title: "what-happened-blockfi", level: 2 },
        { id: "what-happened-to-blockfi", title: "What Happened to BlockFi", level: 2 },
        { id: "nexo-today", title: "nexo-today", level: 2 },
        { id: "nexo-today", title: "Nexo Today", level: 2 },
        { id: "lessons-learned", title: "lessons-learned", level: 2 },
        { id: "lessons-for-cefi-users", title: "Lessons for CeFi Users", level: 2 }
      ]}
      faqs={[
        { question: "Is BlockFi still operating?", answer: "No. BlockFi filed for Chapter 11 bankruptcy in November 2022 due to significant exposure to FTX and Alameda Research. The platform has ceased lending operations and is in the process of returning remaining assets to creditors and customers through bankruptcy proceedings." },
        { question: "Is Nexo safe to use?", answer: "Nexo has maintained operations and claims to have never lost user funds. They provide real-time attestations of assets and have maintained licensing in multiple jurisdictions. However, all CeFi platforms carry counterparty risk. Evaluate their current proof of reserves, regulatory status, and financial health before depositing." },
        { question: "What rates does Nexo offer?", answer: "Nexo offers variable rates depending on your loyalty tier (based on NEXO token holdings). Lending rates range from approximately 4-12% APY for various crypto assets and stablecoins. Borrowing rates start from 0% for top-tier users up to approximately 13.9% APR." },
        { question: "Should I use CeFi lending after the 2022 collapses?", answer: "CeFi lending can still be useful, but with much greater caution. Only use platforms with transparent proof of reserves, regulatory compliance, and strong financial positions. Never deposit more than you can afford to lose. Consider diversifying between CeFi and DeFi for risk management." },
      ]}
      relatedArticles={[
        { title: "DeFi vs CeFi Lending", href: "/crypto-loans/learn/defi-vs-cefi-lending", category: "Crypto Loans" },
        { title: "Institutional Crypto Lending", href: "/crypto-loans/learn/institutional-crypto-lending", category: "Crypto Loans" },
        { title: "Stablecoin Lending", href: "/crypto-loans/learn/stablecoin-lending", category: "Crypto Loans" },
      ]}
    >
      <h2 id="platform-status">Current Platform Status</h2>
      <p>
        The CeFi lending landscape was fundamentally reshaped by the events of 2022. BlockFi, once one of the largest crypto lenders with billions in assets under management, filed for bankruptcy and is no longer operational for lending. Nexo, by contrast, has continued operating and claims to have navigated the crisis without losing user funds. This divergent outcome highlights the importance of risk management, transparency, and counterparty selection in CeFi lending. For users who had funds on BlockFi, the bankruptcy process has been lengthy, with partial recoveries distributed through court-supervised proceedings. Nexo has used its survival as a differentiator, emphasizing its risk management practices and regulatory compliance. However, it has faced its own regulatory scrutiny in various jurisdictions.
      </p>

      <h2 id="what-happened-blockfi">What Happened to BlockFi</h2>
      <p>
        BlockFi&apos;s collapse was triggered by its deep financial entanglement with FTX and Alameda Research. BlockFi had lent significant funds to Alameda and relied on a credit facility from FTX after experiencing losses from the Three Arrows Capital (3AC) collapse earlier in 2022. When FTX imploded in November 2022, BlockFi lost access to funds on FTX and could not recover its loans to Alameda. The platform halted withdrawals and filed for bankruptcy shortly after. This chain of failures illustrates the interconnected nature of CeFi lending and the danger of concentrated counterparty exposure. BlockFi&apos;s users discovered that their deposits were effectively unsecured loans to the platform, not segregated assets. The lesson is clear: in CeFi, your funds are only as safe as the platform&apos;s risk management and financial health.
      </p>

      <h2 id="nexo-today">Nexo Today</h2>
      <p>
        Nexo has continued to operate and expand its services. The platform offers instant crypto-backed loans with LTV ratios up to 80%, earning products for crypto and stablecoin deposits, and a crypto card for spending. Nexo uses a tiered loyalty system based on NEXO token holdings that determines your interest rates and benefits. The platform claims to maintain overcollateralized lending practices and provides real-time attestations from Armanino (a third-party attestation firm). Nexo holds licenses in multiple jurisdictions and has invested in regulatory compliance. However, it has faced regulatory challenges, including a cease-and-desist from state regulators in the US regarding its Earn product. Users should review Nexo&apos;s current regulatory status in their jurisdiction before depositing. The platform supports a wide range of crypto assets for lending and borrowing.
      </p>

      <h2 id="lessons-learned">Lessons for CeFi Users</h2>
      <p>
        The CeFi lending failures of 2022 taught several critical lessons. First, proof of reserves and third-party attestations are minimum requirements. Demand transparency about how your deposited funds are used. Second, counterparty concentration is dangerous. Platforms that lend heavily to single borrowers or related entities create systemic risk. Third, regulatory compliance provides some protection, though it is not a guarantee. Licensed platforms are subject to oversight that may catch problems earlier. Fourth, terms of service matter. Understand whether your deposits are segregated or become the platform&apos;s property. Fifth, diversification is essential. Never deposit all your crypto in a single CeFi platform. Spread across multiple platforms and include DeFi protocols where you maintain custody. Finally, yield that seems too good to be true usually is. High rates often indicate the platform is taking risks with your funds that you may not be aware of.
      </p>
    </LearnPageLayout>
  );
}
