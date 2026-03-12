import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Buy Cryptocurrency in India: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to buy cryptocurrency in India step by step. UPI and bank transfer deposits, 30% tax and 1% TDS explained, exchange options, P2P trading, and security tips for Indian investors.",
  keywords: [
    "how to buy crypto India",
    "buy cryptocurrency India",
    "buy bitcoin India",
    "buy crypto with INR",
    "Indian crypto guide",
    "UPI crypto",
  ],
};

export default function HowToBuyCryptoIndiaPage() {
  return (
    <LearnPageLayout
      title="How to Buy Cryptocurrency in India"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="14 min"
      intro="India is one of the world's largest cryptocurrency markets by user count, despite having some of the most challenging tax regulations. With a flat 30% tax on gains, 1% TDS on transactions, and no loss offsetting, understanding the rules before you buy is essential. This guide covers everything Indian residents need to know about purchasing cryptocurrency legally and cost-effectively."
      toc={[
        { id: "legal-status", title: "legal-status", level: 2 },
        { id: "legal-status-of-crypto-in-india", title: "Legal Status of Crypto in India", level: 2 },
        { id: "choose-exchange", title: "choose-exchange", level: 2 },
        { id: "choosing-an-exchange-in-india", title: "Choosing an Exchange in India", level: 2 },
        { id: "deposit-inr", title: "deposit-inr", level: 2 },
        { id: "depositing-inr-upi-imps-and-p2p", title: "Depositing INR: UPI, IMPS, and P2P", level: 2 },
        { id: "buying-guide", title: "buying-guide", level: 2 },
        { id: "step-by-step-buying-process", title: "Step-by-Step Buying Process", level: 2 },
        { id: "tax-rules", title: "tax-rules", level: 2 },
        { id: "understanding-india", title: "Understanding India", level: 2 }
      ]}
      faqs={[
        {
          question: "Is buying crypto legal in India?",
          answer:
            "Yes. The Supreme Court overturned the RBI banking ban in 2020, and cryptocurrency is legal to buy, sell, and hold. The 2022 Union Budget introduced tax rules (30% tax, 1% TDS), which effectively legalized crypto by creating a taxation framework.",
        },
        {
          question: "What is the 1% TDS on crypto in India?",
          answer:
            "Section 194S of the Income Tax Act requires a 1% Tax Deducted at Source on crypto transactions exceeding 10,000 INR annually. Indian exchanges deduct this automatically. You can claim this TDS as a credit when filing your income tax return.",
        },
        {
          question: "Can I offset crypto losses against gains in India?",
          answer:
            "No. Under Indian tax law, losses from one crypto asset cannot be set off against gains from another. Each profitable transaction is taxed individually at 30%. This is one of the most restrictive aspects of India's crypto tax framework.",
        },
        {
          question: "Which is better: Indian or international exchanges?",
          answer:
            "Indian exchanges offer easier INR deposits via UPI and automatic TDS compliance but have higher fees and fewer coins. International exchanges offer lower fees and more assets but may lack direct INR support. Many traders use a combination of both.",
        },
        {
          question: "Can I use UPI to buy crypto?",
          answer:
            "Yes. Most Indian exchanges support UPI for instant INR deposits. Simply scan the QR code or enter the UPI ID provided by the exchange in your UPI app (Google Pay, PhonePe, etc.). Deposits are typically instant and free.",
        },
        {
          question: "Is crypto income taxed differently from crypto trading gains?",
          answer:
            "All crypto income (including mining, staking, airdrops, and salary paid in crypto) is taxed at the flat 30% rate. The 1% TDS also applies to all transactions. There is no distinction between income types for crypto taxation in India.",
        }
      ]}
      relatedArticles={[
        { title: "Best Crypto Exchanges in India", href: "/exchanges/best/india", category: "Exchanges" },
        { title: "Crypto Taxes in India", href: "/taxes/learn/crypto-taxes-india", category: "Taxes" },
        { title: "Indian Crypto Regulation Guide", href: "/learn/crypto-regulation-india", category: "Learn" }
      ]}
    >
      <h2 id="legal-status">Legal Status of Crypto in India</h2>
      <p>
        Cryptocurrency is legal in India. The Supreme Court&apos;s landmark 2020 decision overturned
        the RBI&apos;s banking ban, and the 2022 Union Budget introduced a formal taxation
        framework. While the government has not passed a dedicated crypto law, the tax provisions
        effectively legitimize crypto transactions. Indian users can legally buy, sell, hold,
        and trade cryptocurrency.
      </p>

      <h2 id="choose-exchange">Choosing an Exchange in India</h2>
      <p>
        Indian users can choose between local exchanges (with direct INR support and automatic
        TDS compliance) and international platforms (with lower fees and more assets). Local
        options include WazirX, CoinDCX, and ZebPay. International exchanges like Binance and
        KuCoin are popular for their lower trading fees and wider selection. Consider your
        priorities: convenience and compliance favor local exchanges, while cost and variety
        favor international ones.
      </p>

      <h2 id="deposit-inr">Depositing INR: UPI, IMPS, and P2P</h2>
      <p>
        UPI (Unified Payments Interface) is the most popular deposit method for Indian crypto
        users. It is instant, free, and works with all major UPI apps including Google Pay,
        PhonePe, and Paytm. IMPS and NEFT bank transfers are also widely supported. P2P
        trading offers an alternative where you buy directly from other users, paying via
        UPI, bank transfer, or other methods.
      </p>
      <p>
        INR deposit support on international exchanges has been inconsistent. Some platforms
        periodically enable and disable INR deposits depending on banking partner availability.
        P2P trading on Binance provides a reliable alternative when direct deposits are
        unavailable.
      </p>

      <h2 id="buying-guide">Step-by-Step Buying Process</h2>
      <p>
        After depositing INR, navigate to the trading section and search for your desired
        cryptocurrency. INR trading pairs (BTC/INR, ETH/INR) are available on Indian exchanges.
        On international platforms, you may need to first convert INR to USDT and then trade.
        Place a market order for immediate purchase or a limit order to set your price. The
        1% TDS will be automatically deducted on Indian exchanges.
      </p>

      <h2 id="tax-rules">Understanding India&apos;s 30% Tax and 1% TDS</h2>
      <p>
        India&apos;s crypto tax regime has two main components. First, a flat 30% tax on all
        crypto gains with no deductions allowed except the cost of acquisition. You cannot
        offset losses, claim expenses, or benefit from holding period discounts. Second, a
        1% TDS on all transactions above 10,000 INR annually, which is deducted at the time
        of the trade and can be claimed as a credit on your tax return.
      </p>
      <p>
        These rules apply to all types of crypto income: trading gains, mining rewards, staking
        income, airdrops, and salary received in crypto. The 30% rate applies regardless of
        your overall income tax bracket. Proper record-keeping is essential for accurate tax
        filing.
      </p>

      <h2 id="p2p-trading">P2P Trading in India</h2>
      <p>
        Peer-to-peer (P2P) trading is widely used in India, especially when direct INR deposit
        options are limited. On P2P platforms, you deal directly with another user. The exchange
        holds the crypto in escrow while you transfer INR to the seller via UPI, IMPS, or bank
        transfer. Once the seller confirms receipt, the crypto is released to you. Always trade
        with verified merchants with high completion rates.
      </p>

      <h2 id="security">Security Tips</h2>
      <p>
        Indian crypto users should enable 2FA on all exchange accounts, be cautious of
        Telegram and WhatsApp groups promising guaranteed returns (a common scam in India),
        and never share OTPs or UPI PINs with anyone. For long-term storage, consider a
        hardware wallet. Keep records of all transactions for income tax filing and always
        use registered platforms to ensure TDS compliance.
      </p>
    </LearnPageLayout>
  );
}
