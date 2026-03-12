import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin-Backed Loans: Complete Guide (${CURRENT_YEAR}) | degen0x`,
  description:
    "Everything you need to know about Bitcoin-backed loans. Compare platforms, understand LTV ratios, and learn how to borrow against your BTC without selling.",
};

export default function BitcoinBackedLoansPage() {
  return (
    <LearnPageLayout
      title="Bitcoin-Backed Loans: Complete Guide"
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      readTime="9 min read"
      intro="Bitcoin-backed loans allow you to access liquidity without selling your BTC. By depositing Bitcoin as collateral, you can borrow stablecoins or fiat for expenses, investments, or business needs while maintaining exposure to Bitcoin's upside potential. This strategy is popular among long-term Bitcoin holders who believe in continued price appreciation but need access to cash. Multiple platforms offer Bitcoin-backed loans with varying terms, rates, and LTV ratios."
      toc={[
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-bitcoin-backed-loans-work", title: "How Bitcoin-Backed Loans Work", level: 2 },
        { id: "platform-options", title: "platform-options", level: 2 },
        { id: "platform-options", title: "Platform Options", level: 2 },
        { id: "ltv-rates", title: "ltv-rates", level: 2 },
        { id: "ltv-ratios-and-interest-rates", title: "LTV Ratios and Interest Rates", level: 2 },
        { id: "tax-advantages", title: "tax-advantages", level: 2 },
        { id: "tax-advantages", title: "Tax Advantages", level: 2 },
        { id: "risks-considerations", title: "risks-considerations", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "Can I borrow against Bitcoin without selling?", answer: "Yes. Bitcoin-backed loans allow you to deposit BTC as collateral and receive a loan in stablecoins or fiat. You retain ownership of your Bitcoin (subject to collateral requirements) and get it back when you repay the loan. This avoids triggering a taxable sale event." },
        { question: "What LTV can I get on a Bitcoin loan?", answer: "Most platforms offer 25-50% LTV for Bitcoin-backed loans, with some allowing up to 70-80%. A 50% LTV means depositing $20,000 in BTC to borrow $10,000. Lower LTV ratios are safer because they provide more buffer against Bitcoin price drops before liquidation." },
        { question: "What happens if Bitcoin price drops?", answer: "If Bitcoin's price drops enough to push your LTV above the platform's threshold, you will face a margin call or liquidation. Platforms typically give you time to add more BTC collateral or repay part of the loan. If you don't act, some or all of your Bitcoin may be sold to cover the debt." },
        { question: "Are Bitcoin loans taxable?", answer: "In most jurisdictions, borrowing against Bitcoin is not a taxable event because you are not selling. This is a key advantage over selling BTC. However, if your Bitcoin is liquidated by the platform, that forced sale is typically a taxable event. Tax treatment varies by country, so consult a local tax advisor." },
      ]}
      relatedArticles={[
        { title: "LTV Ratio Guide", href: "/crypto-loans/learn/ltv-ratio-guide", category: "Crypto Loans" },
        { title: "Liquidation Prevention", href: "/crypto-loans/learn/liquidation-prevention", category: "Crypto Loans" },
        { title: "Crypto Loan Taxes", href: "/crypto-loans/learn/crypto-loan-taxes", category: "Crypto Loans" },
      ]}
    >
      <h2 id="how-it-works">How Bitcoin-Backed Loans Work</h2>
      <p>
        The process is straightforward. You deposit Bitcoin into a lending platform as collateral. The platform provides a loan, typically in USDC, USDT, DAI, or fiat currency, based on an agreed LTV ratio. For example, depositing 1 BTC worth $60,000 at 50% LTV gives you a $30,000 loan. You pay interest on the loan, usually monthly or continuously. When you are ready, you repay the principal plus any accrued interest and receive your Bitcoin back. The loan term may be open-ended (no fixed repayment date) or fixed (specific term length). During the loan period, your Bitcoin is held as collateral and you cannot trade or transfer it. The platform monitors the collateral value continuously, and if Bitcoin&apos;s price drops enough to push your LTV above the liquidation threshold, your BTC may be partially or fully sold.
      </p>

      <h2 id="platform-options">Platform Options</h2>
      <p>
        CeFi platforms offering Bitcoin-backed loans include Nexo, Ledn, and Unchained. Nexo allows instant loans against BTC with flexible repayment. Ledn specializes in Bitcoin financial services and offers competitive rates with clear terms. Unchained uses a collaborative custody model where your Bitcoin is held in multisig, giving you more control. In DeFi, borrowing against wrapped Bitcoin (WBTC) is available on Aave, Compound, and MakerDAO. WBTC is an ERC-20 token backed 1:1 by Bitcoin, held by a custodian (BitGo). This introduces an additional trust assumption compared to native Bitcoin. Newer solutions like Threshold Network offer tBTC as a more decentralized Bitcoin wrapper. For Bitcoin-native solutions, Stacks network enables lending protocols that use actual BTC. When choosing a platform, consider custody model, interest rates, LTV options, and the platform&apos;s financial health and track record.
      </p>

      <h2 id="ltv-rates">LTV Ratios and Interest Rates</h2>
      <p>
        LTV ratios for Bitcoin loans typically range from 20% to 80% depending on the platform. Conservative platforms offer 25-50% LTV, providing significant buffer against price drops. More aggressive platforms allow up to 70-80% LTV but with higher liquidation risk. Interest rates vary from approximately 2% to 12% APR depending on the platform, LTV chosen, and market conditions. Some platforms offer tiered rates: lower LTV ratios get lower interest rates because the loan is less risky for the lender. For example, Nexo may charge 0% APR at very low LTVs for premium users, while standard rates might be 6-12%. DeFi rates on WBTC borrowing fluctuate based on supply and demand, typically 1-5% for stablecoin loans against WBTC. Compare the total cost of borrowing including any platform fees, withdrawal fees, and the opportunity cost of locked collateral.
      </p>

      <h2 id="tax-advantages">Tax Advantages</h2>
      <p>
        The primary tax advantage of Bitcoin-backed loans is avoiding a taxable sale. In most jurisdictions, selling Bitcoin triggers capital gains tax on the appreciation. By borrowing against Bitcoin instead, you access liquidity without a taxable event. For long-term holders sitting on significant unrealized gains, this can represent substantial tax savings. For example, if you hold Bitcoin with $50,000 in unrealized gains and face a 20% capital gains rate, selling would cost $10,000 in taxes. Borrowing against the Bitcoin and paying 5% interest on a $30,000 loan costs $1,500 per year, significantly less. However, the interest paid on crypto loans is generally not tax-deductible for personal use in most jurisdictions. If the funds are used for investment purposes, interest may be deductible. And if your Bitcoin is liquidated, the forced sale is a taxable event. Consult a tax professional in your jurisdiction.
      </p>

      <h2 id="risks-considerations">Risks and Considerations</h2>
      <p>
        The primary risk is liquidation during a Bitcoin price drop. If Bitcoin falls 50% and your LTV was 50%, you are at 100% LTV and fully liquidated. Always borrow at a lower LTV than the maximum offered and have a plan for adding collateral during downturns. Counterparty risk is significant for CeFi platforms: if the platform becomes insolvent (as happened with Celsius and BlockFi), your collateral may be at risk. Evaluate platform financials, proof of reserves, and regulatory status. For WBTC in DeFi, there is custodian risk (BitGo holds the underlying BTC) and smart contract risk. Interest rate risk exists for variable-rate loans: rates can increase substantially during high-demand periods. Consider the total cost over your expected loan duration, including potential rate increases. Currency risk exists if you borrow in a fiat currency and Bitcoin&apos;s price changes significantly, affecting your ability to repay.
      </p>
    </LearnPageLayout>
  );
}
