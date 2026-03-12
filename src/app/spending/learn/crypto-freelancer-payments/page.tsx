import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto Freelancer Payments Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "How freelancers can get paid in cryptocurrency. Invoicing tools, payment platforms, tax considerations, and best practices for accepting crypto as a freelancer.",
  keywords: ["crypto freelancer payments", "get paid in bitcoin", "freelance crypto"],
};

export default function CryptoFreelancerPaymentsPage() {
  return (
    <LearnPageLayout
      title="Crypto Freelancer Payments Guide"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="9 min"
      intro="Freelancers are increasingly accepting cryptocurrency payments for faster settlement, lower fees, and global accessibility. Whether you are a developer, designer, writer, or consultant, accepting crypto opens you to a worldwide client base without the friction of international banking."
      toc={[
        { id: "getting-started", title: "getting-started", level: 2 },
        { id: "getting-started-with-crypto-payments", title: "Getting Started with Crypto Payments", level: 2 },
        { id: "invoicing", title: "invoicing", level: 2 },
        { id: "crypto-invoicing-tools", title: "Crypto Invoicing Tools", level: 2 },
        { id: "receiving", title: "receiving", level: 2 },
        { id: "receiving-and-managing-payments", title: "Receiving and Managing Payments", level: 2 },
        { id: "taxes", title: "taxes", level: 2 },
        { id: "tax-implications-for-freelancers", title: "Tax Implications for Freelancers", level: 2 }
      ]}
      faqs={[
        { question: "Should freelancers accept crypto payments?", answer: "It depends on your client base and financial needs. Crypto payments are excellent for international clients, provide faster settlement than bank transfers, and offer lower fees. The tradeoff is price volatility if holding non-stablecoin payments." },
        { question: "What is the best way to invoice in crypto?", answer: "Request Network, CoinGate, and BTCPay Server offer crypto invoicing solutions. These platforms generate professional invoices with crypto payment options and handle conversion to fiat if desired." },
        { question: "How do I report crypto freelance income?", answer: "Report the fair market value of crypto at the time of receipt as income on Schedule C (US). Track the cost basis for future capital gains calculations when you sell or spend the crypto." },
      ]}
      relatedArticles={[
        { title: "Crypto Payroll Guide", href: "/spending/learn/crypto-payroll-guide", category: "Spending" },
        { title: "Stablecoin Payments Guide", href: "/spending/learn/stablecoin-payments-guide", category: "Spending" },
        { title: "Request Network Review", href: "/web3-business/reviews/request-network", category: "Web3 Business" },
      ]}
    >
      <section id="getting-started">
        <h2>Getting Started with Crypto Payments</h2>
        <p>To start accepting crypto as a freelancer, you need a wallet to receive payments, an invoicing method, and a plan for managing received crypto. For stablecoins, set up a wallet on a popular network like Ethereum, Polygon, or Solana. For Bitcoin, a standard Bitcoin wallet or Lightning wallet covers most client payment preferences. Multi-chain wallets like MetaMask or Trust Wallet provide flexibility for receiving various tokens.</p>
        <p>Communicate your crypto payment capability to clients by adding crypto as a payment option on your invoices and website. Specify which cryptocurrencies you accept and on which networks to avoid confusion. Many freelancers offer a small discount for crypto payments to incentivize adoption, reflecting the lower processing fees and faster settlement compared to traditional payment methods. Start by offering crypto alongside traditional payments rather than replacing them entirely.</p>
      </section>

      <section id="invoicing">
        <h2>Crypto Invoicing Tools</h2>
        <p>Request Network provides decentralized invoicing where freelancers create professional invoices with crypto payment options. The platform supports multiple currencies and tokens, tracks payment status on-chain, and provides documentation suitable for accounting. CoinGate offers invoicing with automatic fiat conversion, meaning you can bill in dollars and let the client pay in their preferred crypto while you receive fiat. BTCPay Server provides self-hosted invoicing for maximum privacy and control.</p>
        <p>For simpler setups, generating a wallet address or payment link and including it on a standard invoice works for many freelancer-client relationships. Platforms like PayPal and Deel are integrating crypto payment options within their existing invoicing systems, making it increasingly seamless to offer crypto alongside traditional payment methods. The key is choosing a system that provides clear payment tracking and documentation for both parties.</p>
      </section>

      <section id="receiving">
        <h2>Receiving and Managing Payments</h2>
        <p>When receiving crypto payments, decide in advance whether to hold the crypto, convert to stablecoin, or convert to fiat. Immediate conversion to stablecoin or fiat eliminates price risk and simplifies accounting. Holding the crypto is essentially an investment decision that should be made intentionally rather than by default. Many freelancers adopt a hybrid approach, converting enough to cover expenses and holding the remainder as savings.</p>
        <p>For international freelancers, crypto payments solve the significant challenge of receiving money from clients in other countries. No bank account is needed to receive crypto, settlement is instant, and there are no incoming wire fees. This accessibility makes crypto particularly valuable for freelancers in countries with limited banking infrastructure or unfavorable exchange rates for incoming foreign currency payments.</p>
      </section>

      <section id="taxes">
        <h2>Tax Implications for Freelancers</h2>
        <p>Crypto received as freelance income is taxable at the fair market value on the date of receipt, treated the same as fiat income. In the US, report this on Schedule C as self-employment income and pay both income tax and self-employment tax on the amount. Track the exact value of each payment in your local currency at the time of receipt for accurate reporting.</p>
        <p>If you hold crypto received as income and it appreciates before you sell or spend it, the appreciation is a separate capital gains event. This creates a dual tax tracking requirement: income tax on the receipt and capital gains on the subsequent disposition. Using stablecoins for invoicing simplifies this dramatically since there is no appreciation to track. Quarterly estimated tax payments should account for crypto income just as they would for fiat freelance income.</p>
      </section>
    </LearnPageLayout>
  );
}
