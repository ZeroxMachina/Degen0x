import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Buy Cryptocurrency in Australia: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to buy cryptocurrency in Australia step by step. AUSTRAC-registered exchanges, AUD deposits via PayID, ATO tax rules, and the 50% CGT discount explained.",
  keywords: [
    "how to buy crypto Australia",
    "buy cryptocurrency Australia",
    "buy bitcoin Australia",
    "buy crypto with AUD",
    "Australian crypto guide",
  ],
};

export default function HowToBuyCryptoAustraliaPage() {
  return (
    <LearnPageLayout
      title="How to Buy Cryptocurrency in Australia"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="12 min"
      intro="Australia has a thriving cryptocurrency market with strong regulatory oversight, instant AUD deposits via PayID, and a favorable capital gains tax discount for long-term holders. This guide covers everything Australian residents need to know about buying crypto, from choosing an AUSTRAC-registered exchange to understanding ATO tax obligations."
      toc={[
        { id: "choose-exchange", title: "Choosing an AUSTRAC-Registered Exchange", level: 2 },
        { id: "verification", title: "Account Verification in Australia", level: 2 },
        { id: "deposit-aud", title: "Depositing AUD: PayID, NPP, and Cards", level: 2 },
        { id: "buying-guide", title: "Making Your First Purchase", level: 2 },
        { id: "ato-taxes", title: "ATO Crypto Tax Rules and CGT Discount", level: 2 },
        { id: "local-vs-global", title: "Local vs Global Exchanges", level: 2 },
        { id: "security", title: "Securing Your Crypto", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the cheapest way to buy crypto in Australia?",
          answer:
            "Deposit AUD via PayID (free, instant) and use an exchange's advanced trading interface. Kraken charges 0.16-0.26% per trade, making it one of the cheapest options. Avoid simple buy buttons which charge 1-3% in spread fees.",
        },
        {
          question: "Do I get a tax discount for holding crypto long-term in Australia?",
          answer:
            "Yes. Australian residents who hold crypto for more than 12 months receive a 50% discount on their capital gains tax. This makes long-term holding particularly attractive from a tax perspective in Australia.",
        },
        {
          question: "Is crypto legal in Australia?",
          answer:
            "Yes. Cryptocurrency is legal to buy, sell, and hold in Australia. Exchanges must be registered with AUSTRAC and comply with anti-money laundering laws. The government is developing comprehensive licensing frameworks for additional oversight.",
        },
        {
          question: "Can I use PayID to deposit on crypto exchanges?",
          answer:
            "Yes. PayID/Osko is supported on most exchanges serving Australia. It allows instant, free AUD deposits from any Australian bank account that supports the New Payments Platform (NPP). It is the recommended deposit method for Australians.",
        },
        {
          question: "Should I use a local Australian exchange or a global one?",
          answer:
            "Local exchanges like CoinSpot offer simplicity and Australian support, but charge higher fees. Global exchanges like Kraken and Coinbase offer lower fees and more trading pairs. Many experienced traders use both depending on their needs.",
        },
      ]}
      relatedArticles={[
        { title: "Best Crypto Exchanges in Australia", href: "/exchanges/best/australia", category: "Exchanges" },
        { title: "Crypto Taxes in Australia", href: "/taxes/learn/crypto-taxes-australia", category: "Taxes" },
        { title: "Australian Crypto Regulation", href: "/learn/crypto-regulation-australia", category: "Learn" },
      ]}
    >
      <h2 id="choose-exchange">Choosing an AUSTRAC-Registered Exchange</h2>
      <p>
        All crypto exchanges operating in Australia must be registered with AUSTRAC (Australian
        Transaction Reports and Analysis Centre). This registration ensures the platform complies
        with anti-money laundering regulations and provides a baseline level of consumer protection.
        Major AUSTRAC-registered exchanges include Kraken, Coinbase, Binance Australia, CoinSpot,
        and Swyftx.
      </p>
      <p>
        Consider factors like AUD deposit methods, trading fees, available cryptocurrencies, and
        whether the exchange provides ATO-compatible tax reports. Global exchanges generally offer
        lower fees, while local Australian platforms provide a simpler experience.
      </p>

      <h2 id="verification">Account Verification in Australia</h2>
      <p>
        Australian exchanges require KYC verification including your full name, date of birth,
        residential address, and a photo of your driver&apos;s licence or passport. Most platforms
        use automated verification that completes within minutes. Some exchanges may also require
        a Tax File Number (TFN) or Australian Business Number (ABN) for tax reporting purposes.
      </p>

      <h2 id="deposit-aud">Depositing AUD: PayID, NPP, and Cards</h2>
      <p>
        PayID is the best deposit method for Australian users. It leverages the New Payments
        Platform (NPP) for instant, free AUD transfers from your bank to the exchange. Simply
        use the PayID details provided by your exchange in your banking app. Bank transfers via
        BSB/account number also work but may take longer.
      </p>
      <p>
        Debit and credit cards are accepted on most exchanges for instant purchases but carry
        2-3.5% fees. POLi payments (an online bank payment system) is available on some local
        exchanges. For the best value, always use PayID for deposits and the advanced trading
        interface for purchases.
      </p>

      <h2 id="buying-guide">Making Your First Purchase</h2>
      <p>
        After depositing AUD, search for the crypto you want to buy. Look for AUD trading pairs
        (e.g., BTC/AUD, ETH/AUD) to avoid conversion fees. Place a market order for immediate
        execution or a limit order to set your preferred price. Start with a small amount to
        familiarize yourself with the process before committing larger sums.
      </p>

      <h2 id="ato-taxes">ATO Crypto Tax Rules and CGT Discount</h2>
      <p>
        The ATO treats cryptocurrency as property subject to Capital Gains Tax (CGT). When you
        sell, trade, or spend crypto, you must calculate the capital gain (sale price minus
        purchase price minus costs). The key benefit for Australian holders is the 50% CGT
        discount for assets held longer than 12 months: effectively halving your tax bill on
        long-term gains.
      </p>
      <p>
        The ATO conducts data matching with crypto exchanges to identify unreported transactions.
        Use tax software like Koinly, Syla, or CoinTracker to generate accurate ATO-ready reports.
        The Australian financial year runs July to June, so plan your record-keeping accordingly.
      </p>

      <h2 id="local-vs-global">Local vs Global Exchanges</h2>
      <p>
        Australian users can choose between local exchanges (CoinSpot, Swyftx) and global
        platforms (Kraken, Coinbase, Binance). Local exchanges offer simpler interfaces,
        Australian customer support, and integration with local tax software, but typically
        charge higher fees. Global exchanges offer lower fees, more coins, and advanced features
        but may have less localized support.
      </p>

      <h2 id="security">Securing Your Crypto</h2>
      <p>
        Australian crypto assets are not protected by any government compensation scheme. For
        significant holdings, transfer to a hardware wallet like Ledger or Trezor. Both ship
        directly to Australia. Enable 2FA on all exchange accounts, use strong unique passwords,
        and be vigilant against phishing attempts targeting Australian crypto users.
      </p>
    </LearnPageLayout>
  );
}
