import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Getting Paid in Crypto: Complete Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Complete guide to receiving your salary in cryptocurrency. Payroll services, tax implications, negotiation tips, and managing a crypto-denominated salary.",
};

export default function CryptoSalaryGuidePage() {
  return (
    <LearnPageLayout title="Getting Paid in Crypto: Complete Guide" categoryName="Crypto Spending" categorySlug="spending" readTime="8 min read"
      intro="A growing number of companies offer cryptocurrency as part of compensation packages, either as base salary, bonus payments, or equity-equivalent token allocations. Whether you work for a crypto-native company that pays in tokens, a traditional company offering partial crypto salary, or you want to convert your paycheck to crypto, understanding the mechanics, tax implications, and financial planning strategies for crypto compensation is essential."
      toc={[
        { id: "types", title: "types", level: 2 },
        { id: "types-of-crypto-compensation", title: "Types of Crypto Compensation", level: 2 },
        { id: "payroll-services", title: "payroll-services", level: 2 },
        { id: "crypto-payroll-services", title: "Crypto Payroll Services", level: 2 },
        { id: "negotiation", title: "negotiation", level: 2 },
        { id: "negotiation-strategies", title: "Negotiation Strategies", level: 2 },
        { id: "financial-planning", title: "financial-planning", level: 2 },
        { id: "financial-planning", title: "Financial Planning", level: 2 }
      ]}
      faqs={[
        { question: "Is getting paid in crypto legal?", answer: "In most jurisdictions, employees can receive a portion of their compensation in crypto, though minimum wage laws typically require that the minimum wage portion be paid in fiat currency. Employers must still withhold and report payroll taxes based on the fiat value of the crypto paid. Laws vary by jurisdiction, so check your local regulations." },
        { question: "How is crypto salary taxed?", answer: "Crypto received as salary is taxed as ordinary income at the fair market value on the date of receipt, just like fiat salary. Your employer should withhold income taxes and payroll taxes based on this value. If you hold the crypto and later sell at a different price, you also incur a capital gain or loss. The cost basis for the capital gain calculation is the fair market value at the time you received it." },
        { question: "What percentage of salary should I take in crypto?", answer: "This depends on your financial situation and risk tolerance. Conservative advice is to limit crypto salary to 10-20% of total compensation, keeping enough fiat to cover all essential expenses. Aggressive crypto believers may take 50%+ in crypto. Never take so much in crypto that a price decline would prevent you from paying rent, bills, or other essential expenses." },
      ]}
      relatedArticles={[
        { title: "Crypto Freelancing", href: "/spending/learn/crypto-freelancing", category: "Spending" },
        { title: "Crypto Budgeting", href: "/spending/learn/crypto-budgeting", category: "Spending" },
        { title: "Stablecoin Spending", href: "/spending/learn/stablecoin-spending", category: "Spending" },
      ]}
    >
      <h2 id="types">Types of Crypto Compensation</h2>
      <p>Crypto compensation comes in several forms, each with different risk profiles and tax treatments. Direct crypto salary is receiving a portion or all of your regular paycheck in cryptocurrency. The employer converts your fiat salary to crypto and sends it to your wallet on payday. This is common at crypto-native companies and increasingly offered by forward-thinking traditional companies. Token compensation is receiving tokens of the company or protocol you work for, similar to stock options or equity grants. These tokens may vest over time (typically three to four years with a one-year cliff), creating alignment between employee and project success. Token compensation has significant upside potential (if the project succeeds) but also significant risk (if the token value declines). Stablecoin salary is receiving payment in stablecoins (USDC, USDT, DAI), providing the logistical benefits of crypto payment (instant global settlement, no banking complications) without price volatility. This is popular for international remote workers whose local banking systems make international wire transfers expensive or slow. Bounties and grants are one-time crypto payments for specific tasks or contributions, common in DAO-based work.</p>

      <h2 id="payroll-services">Crypto Payroll Services</h2>
      <p>Several services facilitate crypto payroll for both employers and employees. Bitwage allows employees to receive a portion of their existing paycheck in Bitcoin or other cryptocurrencies without requiring employer participation. You provide Bitwage with your employer&apos;s payroll details, and they intercept the fiat payment, convert the designated portion to crypto, and send it to your wallet. This works even if your employer does not officially offer crypto compensation. Deel and Remote provide international payroll services that include crypto payment options, popular with companies hiring global remote teams. Gilded offers crypto payroll and accounting for businesses that pay contractors and employees in cryptocurrency. Request Network enables invoice-based payments in crypto with built-in accounting features. Coinbase Commerce and BitPay provide tools for businesses to make crypto payments to contractors and vendors. For employers setting up crypto payroll, the key considerations are tax compliance (proper withholding and reporting), scalability (handling payroll for multiple employees across jurisdictions), and security (ensuring payments reach the correct wallets). Most services handle tax documentation, generating the equivalent of W-2s or 1099s with fiat-equivalent values for each crypto payment.</p>

      <h2 id="negotiation">Negotiation Strategies</h2>
      <p>When negotiating crypto compensation, several factors matter beyond the headline number. For token compensation, evaluate the vesting schedule (shorter vesting gives you access sooner but may indicate less long-term commitment from the employer), the cliff period (typically one year before any tokens vest), any lock-up periods after vesting (restrictions on when you can sell), and the token&apos;s current valuation, dilution potential, and market liquidity. Ask about the total token supply, the percentage allocated to employees, and any planned token emissions that could dilute your holdings. For direct crypto salary, negotiate the conversion mechanism: is it a fixed fiat amount converted to crypto on payday (you bear no conversion risk), or a fixed crypto amount (you bear price risk between negotiation and payday)? The fixed fiat model is safer for employees. Negotiate the payment frequency: more frequent payments (weekly versus monthly) reduce the conversion risk if crypto is volatile. For early-stage projects offering token compensation, request a higher allocation to account for the significant risk that the tokens may never be worth anything. Compare the expected value of token compensation against what you would earn in a stable fiat position, and ensure the premium compensates for the additional risk.</p>

      <h2 id="financial-planning">Financial Planning</h2>
      <p>Managing crypto compensation requires more active financial planning than fiat salary. First, establish a minimum fiat floor: determine the amount of fiat income you need to cover all essential expenses, taxes, insurance, and savings. Only accept crypto compensation above this floor. If your essential expenses are $5,000 per month, ensure at least $5,000 comes in fiat or stablecoins regardless of your total compensation package. Build a fiat emergency fund of three to six months before allocating significant compensation to volatile crypto. Tax planning is critical: set aside tax reserves from every crypto payment because the fiat value at receipt determines your tax obligation regardless of subsequent price changes. If you receive $10,000 in ETH that later drops to $5,000, you still owe income taxes on the $10,000. Convert your tax reserve to stablecoins immediately upon receipt. For vesting token compensation, plan for the tax event at each vesting date. Tokens that vest when the price is high create a large tax bill even if the price subsequently drops. Consider selling enough tokens at each vesting event to cover the associated taxes. Diversify: if a significant portion of your compensation is in your employer&apos;s token, your income and investment are concentrated in the same risk. Diversifying token compensation into other assets reduces this concentration risk.</p>
    </LearnPageLayout>
  );
}
