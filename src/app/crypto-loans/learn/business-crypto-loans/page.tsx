import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Business Crypto Loans Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn about crypto-backed business loans. Understand how companies use crypto treasury for financing, available platforms, and corporate lending considerations.",
  keywords: ["business crypto loans", "corporate crypto lending", "crypto treasury loans", "business bitcoin loans"],
};

export default function BusinessCryptoLoansPage() {
  return (
    <LearnPageLayout
      title="Business Crypto Loans Guide"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min"
      intro="Businesses holding crypto assets can leverage them for operational financing without selling their positions. From startups using Bitcoin treasury as collateral to DeFi-native companies borrowing through on-chain protocols, crypto-backed business lending offers unique advantages for companies with digital asset holdings. This guide covers the available options, requirements, and considerations for business crypto borrowing."
      toc={[
        { id: "overview", title: "Business Crypto Lending Overview", level: 2 },
        { id: "use-cases", title: "Business Use Cases", level: 2 },
        { id: "platforms", title: "Business Lending Platforms", level: 2 },
        { id: "considerations", title: "Corporate Considerations", level: 2 },
      ]}
      faqs={[
        { question: "Can my company borrow against its Bitcoin holdings?", answer: "Yes. Several platforms offer corporate crypto-backed loans. Requirements typically include business registration documents, KYC for authorized signers, and minimum collateral amounts that are higher than retail minimums. Both CeFi platforms and DeFi protocols can serve corporate borrowers." },
        { question: "Are crypto loan interest payments tax deductible for businesses?", answer: "In many jurisdictions, interest payments on business loans are tax-deductible expenses. However, the tax treatment of crypto-collateralized loans varies by jurisdiction. Consult a tax professional experienced with both corporate taxation and cryptocurrency." },
      ]}
      relatedArticles={[
        { title: "How Crypto Loans Work", href: "/crypto-loans/learn/how-crypto-loans-work", category: "Crypto Loans" },
        { title: "Institutional Crypto Lending", href: "/crypto-loans/learn/institutional-crypto-lending", category: "Crypto Loans" },
      ]}
    >
      <section id="overview">
        <h2>Business Crypto Lending Overview</h2>
        <p>Business crypto loans allow companies to use their digital asset holdings as collateral for corporate financing. Companies like MicroStrategy have demonstrated that significant Bitcoin holdings can be leveraged for business purposes, and a growing ecosystem of lenders serves corporate borrowers. Business loans typically involve larger amounts, more documentation, and different underwriting criteria than retail loans. The core mechanics remain the same: deposit crypto collateral, receive a loan in fiat or stablecoins, and repay with interest. Corporate treasury management increasingly includes crypto assets, creating demand for lending products that allow businesses to maintain their digital asset exposure while accessing working capital.</p>
      </section>
      <section id="use-cases">
        <h2>Business Use Cases</h2>
        <p>Companies use crypto-backed loans for various purposes. Working capital financing allows businesses to fund operations without diluting equity or selling appreciating assets. Tax-efficient liquidity management avoids triggering capital gains events that would occur from selling crypto treasury. Expansion funding uses crypto collateral to finance growth without traditional bank lending requirements. Bridge financing provides short-term capital while waiting for other funding sources. Payroll management allows crypto-native companies to borrow stablecoins for employee payments while maintaining long positions. Market-making firms and trading companies use crypto loans as part of their trading infrastructure. Each use case has different term, amount, and flexibility requirements that influence the choice of lending platform.</p>
      </section>
      <section id="platforms">
        <h2>Business Lending Platforms</h2>
        <p>Several platforms cater specifically to business borrowers. Unchained offers collaborative custody Bitcoin loans with multisig security suitable for corporate treasury. Ledn provides institutional lending products with proof-of-reserves transparency. Maple Finance connects institutional borrowers with DeFi capital through curated lending pools. For on-chain borrowing, businesses can use Aave, MakerDAO, or other DeFi protocols through corporate wallets, though this requires technical expertise and introduces smart contract risk. OTC desks at major exchanges also offer custom lending solutions for larger corporate positions. The choice depends on loan size, collateral type, custody preferences, and whether the business requires fiat disbursement or stablecoin borrowing.</p>
      </section>
      <section id="considerations">
        <h2>Corporate Considerations</h2>
        <p>Corporate crypto borrowing introduces unique considerations. Accounting treatment of crypto collateral and loans must comply with applicable standards, and the volatile nature of crypto assets creates mark-to-market challenges. Board approval may be required for pledging corporate assets as loan collateral. Internal risk management policies should define maximum borrowing ratios, approved platforms, and margin call response procedures. Custody considerations are amplified for corporate holdings, with multisig arrangements and institutional custody providers being preferable to single-key solutions. Insurance coverage for custodied assets should be verified and sufficient. Regulatory compliance varies by jurisdiction and industry, with some regulated industries facing restrictions on crypto activities. Legal counsel experienced in both corporate finance and cryptocurrency should review any significant crypto borrowing arrangement.</p>
      </section>
    </LearnPageLayout>
  );
}
