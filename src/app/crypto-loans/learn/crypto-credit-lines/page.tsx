import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Credit Lines Explained (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Understand crypto credit lines. Learn how revolving crypto-backed credit works, how it differs from term loans, and which platforms offer credit lines.",
  keywords: ["crypto credit line", "revolving credit crypto", "crypto backed credit", "bitcoin credit line"],
};

export default function CryptoCreditLinesPage() {
  return (
    <LearnPageLayout
      title="Crypto Credit Lines Explained"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="8 min"
      intro="A crypto credit line provides revolving access to funds backed by your crypto collateral, functioning similarly to a home equity line of credit but using cryptocurrency instead of real estate. Unlike term loans with fixed amounts and repayment schedules, credit lines let you draw and repay funds as needed, paying interest only on the amount currently borrowed. This flexibility makes them ideal for ongoing liquidity needs."
      toc={[
        { id: "how-credit-lines-work", title: "how-credit-lines-work", level: 2 },
        { id: "how-crypto-credit-lines-work", title: "How Crypto Credit Lines Work", level: 2 },
        { id: "vs-term-loans", title: "vs-term-loans", level: 2 },
        { id: "credit-lines-vs-term-loans", title: "Credit Lines vs Term Loans", level: 2 },
        { id: "platforms", title: "platforms", level: 2 },
        { id: "credit-line-platforms", title: "Credit Line Platforms", level: 2 },
        { id: "best-practices", title: "best-practices", level: 2 },
        { id: "best-practices", title: "Best Practices", level: 2 }
      ]}
      faqs={[
        { question: "Do I pay interest on unused credit?", answer: "No. With most crypto credit lines, you only pay interest on the amount you actually draw from the line. Your total available credit is determined by your collateral value, but unused credit incurs no cost." },
        { question: "Can my credit limit change?", answer: "Yes. Since your credit limit is based on your collateral value, it increases when your crypto appreciates and decreases when it drops. Some platforms allow you to add more collateral to increase your limit at any time." },
      ]}
      relatedArticles={[
        { title: "How Crypto Loans Work", href: "/crypto-loans/learn/how-crypto-loans-work", category: "Crypto Loans" },
        { title: "Crypto Loan Strategies", href: "/crypto-loans/learn/crypto-loan-strategies", category: "Crypto Loans" },
      ]}
    >
      <section id="how-credit-lines-work">
        <h2>How Crypto Credit Lines Work</h2>
        <p>A crypto credit line establishes a maximum borrowing limit based on your deposited collateral value and the platform's LTV ratio. For example, depositing $50,000 in Bitcoin with a 50% LTV gives you a $25,000 credit line. You can draw any amount up to this limit at any time, repay partially or fully, and draw again. Interest accrues only on the outstanding balance, not the total credit limit. This revolving structure mirrors traditional lines of credit but uses crypto collateral instead of real estate or business assets. Most CeFi platforms offer instant access to credit line funds, with options to withdraw as fiat, stablecoins, or other cryptocurrencies. DeFi protocols inherently function as credit lines since you can borrow and repay at will within your collateral limits.</p>
      </section>
      <section id="vs-term-loans">
        <h2>Credit Lines vs Term Loans</h2>
        <p>Credit lines and term loans serve different purposes. Term loans provide a fixed amount at a defined rate for a specific period, ideal for one-time large expenses. Credit lines provide flexible, ongoing access to funds, ideal for recurring needs or uncertain cash flow timing. Credit lines typically have variable interest rates that can change over time, while some term loans offer fixed rates for the entire term. The flexibility of credit lines comes with the responsibility of managing your own repayment since there is no defined schedule. Term loans provide more structure and predictability. For most crypto borrowers, the DeFi model naturally provides credit line functionality since protocols allow continuous borrowing and repayment without fixed terms.</p>
      </section>
      <section id="platforms">
        <h2>Credit Line Platforms</h2>
        <p>Nexo is the most prominent CeFi credit line provider, offering instant credit lines against 60 or more cryptocurrencies with tiered rates based on loyalty level. You can borrow fiat, stablecoins, or other crypto against your deposited collateral. Ledn offers Bitcoin-backed credit lines focused on transparency and proof of reserves. On the DeFi side, every major lending protocol inherently functions as a credit line. Aave, Compound, and MakerDAO all allow you to borrow up to your collateral limit, repay, and reborrow without creating a new loan. The DeFi approach provides maximum flexibility and self-custody, while CeFi credit lines offer fiat disbursement options and customer support.</p>
      </section>
      <section id="best-practices">
        <h2>Best Practices</h2>
        <p>Use crypto credit lines strategically and avoid treating them as free money. Draw only what you need and repay as soon as practical to minimize interest costs. Monitor your collateral value regularly since your available credit and liquidation risk both depend on market prices. Keep a buffer between your outstanding balance and maximum credit limit to absorb price volatility. Consider the purpose of your borrowing and ensure the expected return or utility exceeds the interest cost. Set personal limits on your credit line usage even if the platform allows more. Regularly review the interest rate you are paying and compare with alternatives, refinancing if better rates become available. Treat your crypto credit line with the same discipline you would apply to any other form of debt.</p>
      </section>
    </LearnPageLayout>
  );
}
