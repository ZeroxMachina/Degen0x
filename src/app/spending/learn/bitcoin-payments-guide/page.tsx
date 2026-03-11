import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Bitcoin Payments Guide (${CURRENT_YEAR}) - How to Pay with BTC | ${SITE_NAME}`,
  description: `Learn how to pay with Bitcoin in ${CURRENT_YEAR}. Lightning Network payments, merchant acceptance, Bitcoin debit cards, and the growing ecosystem of Bitcoin spending options.`,
  alternates: { canonical: "/spending/learn/bitcoin-payments-guide" },
};

const toc = [
  { id: "paying-with-bitcoin", title: "Paying with Bitcoin in Everyday Life", level: 2 },
  { id: "lightning-network", title: "Lightning Network Payments", level: 2 },
  { id: "merchant-acceptance", title: "Where Bitcoin Is Accepted", level: 2 },
  { id: "debit-cards", title: "Bitcoin Debit Card Options", level: 2 },
  { id: "practical-tips", title: "Practical Tips for Bitcoin Payments", level: 2 },
];

const faqs = [
  { question: "Is it practical to use Bitcoin for everyday payments?", answer: "It is increasingly practical, especially with the Lightning Network for instant, low-fee transactions. However, direct merchant acceptance is still limited in most areas. Bitcoin debit cards bridge the gap by converting BTC to fiat at the point of sale. In crypto-friendly cities and countries, direct Bitcoin payment is viable for daily use. In most places, a Bitcoin debit card is the most practical approach." },
  { question: "What is the Lightning Network?", answer: "The Lightning Network is a Layer-2 payment protocol built on top of Bitcoin that enables instant transactions with near-zero fees. Instead of waiting for on-chain confirmations, Lightning payments settle in seconds. It is ideal for small everyday purchases where on-chain Bitcoin fees and confirmation times would be impractical. Major wallets like Muun, Phoenix, and Strike support Lightning payments." },
  { question: "Do I have to pay taxes when I spend Bitcoin?", answer: "In most jurisdictions, yes. Spending Bitcoin is treated as selling it at the current market price, which triggers a capital gain or loss based on your cost basis. If you bought BTC at $30,000 and spent it when it was worth $60,000, you owe capital gains tax on the $30,000 gain. This tax treatment is a significant friction point for everyday Bitcoin spending." },
  { question: "What are the fees for Bitcoin payments?", answer: "On-chain Bitcoin transaction fees vary with network congestion, typically ranging from $0.50 to $5 for standard transactions (but can spike higher during busy periods). Lightning Network fees are much lower, often less than $0.01 for small payments. Bitcoin debit card transactions may include a spread or conversion fee of 0.5-2.5% depending on the card provider." },
  { question: "Can merchants easily accept Bitcoin?", answer: "Yes. Payment processors like BTCPay Server (open-source, self-hosted), Strike, and OpenNode make it straightforward for merchants to accept Bitcoin. BTCPay Server enables merchants to accept on-chain and Lightning payments with no third-party fees. Strike converts Bitcoin payments to fiat instantly, eliminating price volatility risk for the merchant." },
];

const relatedArticles = [
  { title: "Crypto Travel Guide", href: "/spending/learn/crypto-travel-guide", category: "Spending" },
  { title: "Crypto Gift Cards", href: "/spending/learn/crypto-gift-cards", category: "Spending" },
  { title: "Hot vs Cold Wallets", href: "/wallets/learn/hot-vs-cold-wallets", category: "Wallets" },
];

export default function BitcoinPaymentsGuidePage() {
  return (
    <LearnPageLayout
      title="Bitcoin Payments Guide: How to Pay with BTC"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="8 min"
      intro="Bitcoin was originally conceived as a peer-to-peer electronic cash system, and the payment infrastructure has matured significantly. The Lightning Network enables instant, nearly free transactions. Bitcoin debit cards let you spend BTC anywhere cards are accepted. And a growing number of merchants accept Bitcoin directly. This guide covers the practical landscape of Bitcoin payments and how to start spending your BTC."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="paying-with-bitcoin">Paying with Bitcoin in Everyday Life</h2>
      <p>
        Bitcoin payments have evolved significantly from the early days of slow, expensive on-chain
        transactions. The Lightning Network enables instant payments with sub-cent fees, making
        Bitcoin viable for buying coffee or paying for lunch. Bitcoin debit cards allow spending
        at any Visa or Mastercard merchant worldwide. And direct Bitcoin acceptance by merchants
        continues to grow, particularly in tech-forward cities and crypto-friendly countries.
      </p>
      <p>
        The user experience of paying with Bitcoin has also improved. Modern Lightning wallets
        handle the technical complexity behind a simple QR code scan. Payment apps like Strike
        make sending Bitcoin as easy as Venmo. The remaining friction points are tax reporting
        (each spend is a taxable event in most jurisdictions) and limited direct acceptance by
        merchants. Both barriers are gradually decreasing as infrastructure and regulations evolve.
      </p>

      <h2 id="lightning-network">Lightning Network Payments</h2>
      <p>
        The Lightning Network is Bitcoin&apos;s most important payment innovation. It creates payment
        channels between users that enable unlimited instant transactions off the main blockchain.
        Only the opening and closing of channels are recorded on-chain, dramatically reducing
        fees and enabling real-time settlement. A Lightning payment typically completes in under
        one second and costs a fraction of a cent.
      </p>
      <p>
        To use Lightning payments, install a Lightning-compatible wallet like Muun, Phoenix, or
        Breez. These wallets handle channel management automatically. To pay, scan the merchant&apos;s
        Lightning QR code (called an invoice) and confirm the payment. The process is as fast as
        tapping a contactless card. For receiving Lightning payments, share your own invoice or
        Lightning address. The growing adoption of Lightning makes Bitcoin increasingly practical
        as a daily payment method.
      </p>

      <h2 id="merchant-acceptance">Where Bitcoin Is Accepted</h2>
      <p>
        Direct Bitcoin acceptance is growing across multiple sectors. Major companies that accept
        Bitcoin (directly or through payment processors) include Microsoft, AT&T, Twitch, and
        numerous online retailers. In the physical world, Bitcoin-accepting businesses are
        concentrated in crypto-friendly cities. BTCMap.org provides a crowd-sourced map of
        merchants accepting Bitcoin worldwide, which is useful for finding local Bitcoin-friendly
        businesses in your area.
      </p>
      <p>
        El Salvador made Bitcoin legal tender, meaning all businesses are required to accept it.
        Switzerland has Bitcoin-friendly cantons where taxes and many services can be paid in BTC.
        Portugal, the UAE, and parts of Southeast Asia have vibrant Bitcoin merchant ecosystems.
        Even in areas with limited direct acceptance, Bitcoin debit cards and gift card services
        effectively make Bitcoin spendable anywhere traditional payment methods work.
      </p>

      <h2 id="debit-cards">Bitcoin Debit Card Options</h2>
      <p>
        Bitcoin debit cards convert your BTC to local fiat currency at the point of sale. The
        conversion happens instantly when you swipe or tap the card. Popular options include
        Coinbase Card (no annual fee, 1-4% crypto rewards), Crypto.com Visa (tiered rewards up
        to 5%), and the Fold Card (Bitcoin rewards on every purchase). Each card offers a slightly
        different rewards structure and fee model.
      </p>
      <p>
        When choosing a Bitcoin debit card, compare the conversion spread (the markup between
        the market price and the price you receive when spending), reward rates, supported
        cryptocurrencies for spending, and geographic availability. Some cards let you choose which
        crypto to spend at the time of purchase, while others auto-sell from a preset asset.
        Cards that earn Bitcoin rewards on spending are popular because they let you accumulate
        BTC passively with every purchase.
      </p>

      <h2 id="practical-tips">Practical Tips for Bitcoin Payments</h2>
      <p>
        Keep a separate wallet for spending with only the BTC you plan to use. This prevents
        accidental overspending from your savings. For Lightning payments, ensure your wallet
        has adequate inbound and outbound capacity. For debit card spending, maintain a sufficient
        BTC balance to avoid declined transactions. Consider using a stablecoin like USDC for
        routine spending if you want to avoid the tax complexity of spending appreciating Bitcoin.
      </p>
      <p>
        Track every Bitcoin spending transaction for tax purposes. Apps like CoinTracker and
        Koinly can connect to your wallets and exchanges to automatically record transactions.
        The tax burden of spending crypto is a genuine inconvenience, but proper tracking makes
        it manageable. Some Bitcoin advocates argue that spending BTC promotes adoption and
        circulation. Others prefer to hold BTC and spend fiat, treating Bitcoin as a savings
        technology rather than a spending currency. Choose the approach that aligns with your
        financial goals and tax situation.
      </p>
    </LearnPageLayout>
  );
}
