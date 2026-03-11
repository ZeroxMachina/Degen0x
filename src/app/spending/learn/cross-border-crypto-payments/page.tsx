import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Cross-Border Crypto Payments Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "How to make cross-border payments with cryptocurrency. Business and personal international transfers, regulatory considerations, and best practices.",
  keywords: ["cross-border crypto", "international crypto payments", "global crypto transfers"],
};

export default function CrossBorderCryptoPaymentsPage() {
  return (
    <LearnPageLayout
      title="Cross-Border Crypto Payments Guide"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="10 min"
      intro="Cross-border cryptocurrency payments bypass the correspondent banking system, offering faster settlement, lower fees, and 24/7 availability. For businesses paying international suppliers and individuals sending money across borders, crypto provides a compelling alternative to SWIFT transfers and traditional remittance services."
      toc={[
        { id: "business-payments", title: "Business Cross-Border Payments", level: 2 },
        { id: "personal-transfers", title: "Personal International Transfers", level: 2 },
        { id: "regulatory", title: "Regulatory Considerations", level: 2 },
        { id: "best-practices", title: "Best Practices", level: 2 },
      ]}
      faqs={[
        { question: "Are crypto cross-border payments legal?", answer: "Crypto transfers are legal in most countries, but regulations vary. Both sender and recipient should understand their local laws. Some countries restrict or ban cryptocurrency entirely." },
        { question: "How much can I save on international transfers?", answer: "Traditional wire transfers cost $25-50 with 1-3% exchange rate spreads. Crypto transfers on efficient networks cost under $1 regardless of amount, potentially saving 90%+ on fees." },
        { question: "What about currency conversion?", answer: "The recipient will need to convert crypto to local currency through a local exchange or P2P platform. Sending stablecoins eliminates exchange rate volatility during transit." },
      ]}
      relatedArticles={[
        { title: "Best International Payments", href: "/spending/best/international-payments", category: "Spending" },
        { title: "Crypto Remittances Guide", href: "/spending/learn/crypto-remittances-guide", category: "Spending" },
        { title: "Stablecoin Payments Guide", href: "/spending/learn/stablecoin-payments-guide", category: "Spending" },
      ]}
    >
      <section id="business-payments">
        <h2>Business Cross-Border Payments</h2>
        <p>Businesses making international payments face significant friction with traditional banking. SWIFT transfers involve multiple correspondent banks, each adding fees and delays. A typical business wire transfer costs $25-50, takes two to five days, and incurs 1-3% in exchange rate markups. For businesses making frequent international payments, these costs compound significantly. Crypto payments on networks like Stellar, Polygon, or Tron settle in minutes for under a dollar regardless of payment size.</p>
        <p>Platforms like Request Network and Superfluid provide invoicing and payment infrastructure designed for cross-border crypto business payments. These tools handle multi-currency invoicing, payment tracking, and accounting integration. BitPay and CoinGate offer business payment processing that settles in the recipient's preferred fiat currency. For companies with distributed teams, crypto payroll solutions can pay international contractors without the delays and fees of international banking.</p>
      </section>

      <section id="personal-transfers">
        <h2>Personal International Transfers</h2>
        <p>Personal cross-border transfers using crypto are straightforward when both parties have compatible wallets. The sender converts local currency to stablecoin (or uses existing crypto holdings), transfers to the recipient's wallet address, and the recipient converts to local currency through their preferred exchange or P2P platform. The entire process can be completed in under 30 minutes at a fraction of the cost of traditional money transfer services.</p>
        <p>For less crypto-savvy recipients, platforms like Strike abstract the complexity by handling the crypto conversion on both ends. The sender inputs dollars and the recipient receives their local currency, with the Bitcoin Lightning Network handling the transfer invisibly in between. This approach provides the cost and speed benefits of crypto without requiring either party to manage wallets or understand blockchain technology.</p>
      </section>

      <section id="regulatory">
        <h2>Regulatory Considerations</h2>
        <p>Cross-border crypto payments must navigate the regulatory frameworks of both the sending and receiving countries. Most developed countries require crypto exchanges and payment platforms to implement KYC procedures and comply with anti-money-laundering regulations. Large transfers may trigger reporting requirements in both jurisdictions. Some countries, including China, have significant restrictions on crypto transactions that make crypto payments impractical.</p>
        <p>Travel rule compliance, which requires sharing sender and recipient information for transfers above certain thresholds, is being implemented across major jurisdictions. Businesses making regular cross-border crypto payments should work with legal counsel familiar with both crypto regulations and international payment laws. Personal transfers below reporting thresholds face fewer regulatory hurdles but should still comply with local laws regarding crypto holdings and conversions.</p>
      </section>

      <section id="best-practices">
        <h2>Best Practices</h2>
        <p>Use stablecoins for cross-border payments to eliminate exchange rate volatility during transfer. Verify the recipient's wallet address carefully since crypto transactions are irreversible. For first-time transfers to a new recipient, send a small test amount and confirm receipt before sending the full payment. Choose a blockchain network that is widely supported in both the sending and receiving countries to ensure smooth conversion.</p>
        <p>Keep records of all cross-border crypto transfers including dates, amounts, wallet addresses, exchange rates, and the purpose of each payment. These records may be needed for tax reporting in either jurisdiction. For business payments, use invoicing platforms that generate documentation suitable for accounting and compliance. Consider the total cost including conversion fees at both ends when comparing crypto transfers against traditional banking options.</p>
      </section>
    </LearnPageLayout>
  );
}
