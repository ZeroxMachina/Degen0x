import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Buy Cryptocurrency in the USA: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to buy cryptocurrency in the United States step by step. US exchanges, payment methods, KYC requirements, tax implications, and state-specific regulations explained.",
  keywords: [
    "how to buy crypto USA",
    "buy cryptocurrency United States",
    "buy bitcoin USA",
    "buy crypto with USD",
    "US crypto guide",
  ],
};

export default function HowToBuyCryptoUSAPage() {
  return (
    <LearnPageLayout
      title="How to Buy Cryptocurrency in the USA"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="14 min"
      intro="The United States is one of the most regulated cryptocurrency markets in the world, but buying crypto as an American is straightforward once you understand the process. This guide covers everything US residents need to know: which exchanges are available, how to fund your account with USD, what identity verification involves, tax obligations, and state-specific considerations."
      toc={[
        { id: "us-exchanges", title: "Choosing a US-Licensed Exchange", level: 2 },
        { id: "kyc-verification", title: "Identity Verification (KYC) in the US", level: 2 },
        { id: "funding-methods", title: "Depositing USD: ACH, Wire, and Cards", level: 2 },
        { id: "buying-process", title: "Placing Your First Order", level: 2 },
        { id: "tax-obligations", title: "US Tax Obligations for Crypto", level: 2 },
        { id: "state-rules", title: "State-Specific Regulations", level: 2 },
        { id: "security-tips", title: "Securing Your Crypto", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the minimum amount to buy crypto in the USA?",
          answer:
            "Most US exchanges allow purchases starting at $1-$10. Coinbase has a $2 minimum, Kraken starts at $1. You can buy fractional amounts of any cryptocurrency, so you do not need thousands of dollars to get started.",
        },
        {
          question: "Do I need to report crypto purchases to the IRS?",
          answer:
            "Purchasing crypto is not a taxable event itself. However, selling, trading, or spending crypto triggers capital gains taxes. Starting in 2025, exchanges must issue 1099-DA forms. The IRS now asks about crypto on Form 1040.",
        },
        {
          question: "Can I buy crypto with a credit card in the USA?",
          answer:
            "Many US banks and credit card issuers block crypto purchases. Debit cards generally work but carry 2-4% fees. ACH bank transfer is the cheapest method (often free) and is recommended for most buyers.",
        },
        {
          question: "Which states have crypto restrictions?",
          answer:
            "New York requires exchanges to hold a BitLicense, limiting options. Hawaii had restrictions but has since relaxed them. Most other states have full access to major exchanges. Always check exchange availability in your specific state.",
        },
        {
          question: "Is Binance available in the USA?",
          answer:
            "Binance.com is not available to US residents. Binance.US is a separate entity with fewer features and trading pairs. Most US users prefer Coinbase, Kraken, or Gemini for their full regulatory compliance.",
        },
      ]}
      relatedArticles={[
        { title: "Best Crypto Exchanges in the USA", href: "/exchanges/best/usa", category: "Exchanges" },
        { title: "Crypto Taxes in the USA", href: "/taxes/learn/crypto-taxes-usa", category: "Taxes" },
        { title: "US Crypto Regulation Guide", href: "/learn/crypto-regulation-usa", category: "Learn" },
      ]}
    >
      <h2 id="us-exchanges">Choosing a US-Licensed Exchange</h2>
      <p>
        The first step to buying crypto in the US is choosing a regulated exchange. US exchanges must
        register as Money Services Businesses with FinCEN, comply with state money transmitter laws,
        and implement robust KYC/AML programs. The top options for US residents include Coinbase
        (available in all 50 states, publicly traded on NASDAQ), Kraken (strong security record,
        competitive fees), and Gemini (SOC 2 certified, founded by the Winklevoss twins).
      </p>
      <p>
        Avoid using international exchanges not licensed for US users. While VPNs can technically
        bypass geographic restrictions, doing so violates terms of service and could result in
        frozen funds. Stick with properly licensed platforms for legal and financial protection.
      </p>

      <h2 id="kyc-verification">Identity Verification (KYC) in the US</h2>
      <p>
        All US exchanges require Know Your Customer (KYC) verification. You will need to provide
        your full legal name, date of birth, Social Security Number (SSN), a photo of a
        government-issued ID (driver&apos;s license or passport), and sometimes a selfie for facial
        recognition. This process helps prevent fraud and money laundering.
      </p>
      <p>
        Verification typically takes minutes with automated systems but can take up to 3 business
        days during peak signup periods. Ensure your documents are clear and legible. Your SSN is
        required for tax reporting purposes, as exchanges must report your activity to the IRS.
      </p>

      <h2 id="funding-methods">Depositing USD: ACH, Wire, and Cards</h2>
      <p>
        US exchanges offer several deposit methods. ACH bank transfers are free on most platforms
        and take 1-5 business days to settle, though some exchanges offer instant ACH for immediate
        buying power. Wire transfers ($10-$25 fee) settle same day and are ideal for large deposits.
        Debit card purchases are instant but carry 2-4% fees.
      </p>
      <p>
        Some exchanges also support PayPal, Apple Pay, and Google Pay. For regular buyers,
        setting up ACH provides the best balance of speed and cost. Many exchanges allow instant
        buying with ACH even before the transfer settles, up to a certain limit.
      </p>

      <h2 id="buying-process">Placing Your First Order</h2>
      <p>
        Once funded, navigate to the trading section and search for your desired cryptocurrency.
        For your first purchase, a market order is the simplest option: enter the USD amount
        you want to spend, review the fee breakdown, and confirm. The crypto appears in your
        exchange wallet immediately.
      </p>
      <p>
        To minimize fees, use the advanced or pro trading interface rather than the simple buy
        button. Coinbase Advanced Trade charges 0.04-0.60% versus up to 3.99% on the simple
        interface. This single tip can save you hundreds of dollars over time.
      </p>

      <h2 id="tax-obligations">US Tax Obligations for Crypto</h2>
      <p>
        The IRS treats cryptocurrency as property. Buying crypto is not taxable, but selling,
        trading crypto-to-crypto, or spending crypto triggers capital gains taxes. Short-term
        gains (held less than 1 year) are taxed as ordinary income (10-37%). Long-term gains
        (held over 1 year) are taxed at preferential rates (0%, 15%, or 20%).
      </p>
      <p>
        Starting in tax year 2025, exchanges must issue 1099-DA forms reporting your digital
        asset transactions. Keep detailed records of all purchases (including cost basis) and
        sales. Consider using crypto tax software like CoinTracker, Koinly, or TurboTax to
        automate your reporting.
      </p>

      <h2 id="state-rules">State-Specific Regulations</h2>
      <p>
        Crypto regulation varies by state. New York&apos;s BitLicense is the most stringent, limiting
        available exchanges and tokens. Coinbase is one of the few exchanges available in all
        50 states. Wyoming has passed crypto-friendly legislation including the DAO LLC structure.
        Check your specific state&apos;s rules, as some states also impose their own income tax on
        crypto gains.
      </p>

      <h2 id="security-tips">Securing Your Crypto</h2>
      <p>
        After purchasing, immediately enable two-factor authentication (2FA) using an authenticator
        app, not SMS. For holdings you plan to keep long-term, consider transferring to a personal
        wallet. Hardware wallets like Ledger and Trezor provide the strongest security. Never share
        your private keys or seed phrases with anyone, including people claiming to be exchange support.
      </p>
    </LearnPageLayout>
  );
}
