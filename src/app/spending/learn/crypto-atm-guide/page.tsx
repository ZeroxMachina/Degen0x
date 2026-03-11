import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Crypto ATM Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Complete guide to crypto ATMs in ${CURRENT_YEAR}. How to buy and sell Bitcoin at ATMs, fees, limits, locations, and tips for first-time users.`,
  alternates: { canonical: "/spending/learn/crypto-atm-guide" },
};

const toc = [
  { id: "overview", title: "Crypto ATM Overview", level: 2 },
  { id: "how-to-use", title: "How to Use a Crypto ATM", level: 2 },
  { id: "fees-limits", title: "Fees &amp; Limits", level: 2 },
  { id: "finding-atms", title: "Finding Crypto ATMs", level: 2 },
  { id: "tips", title: "Tips for Using Crypto ATMs", level: 2 },
];

const faqs = [
  { question: "How much do crypto ATMs charge?", answer: "Crypto ATMs typically charge 6-12% above the market price for purchases and 4-8% below market for sales. Some operators charge even higher fees of 15-20%. Always check the displayed exchange rate against the current market price before confirming a transaction. The convenience premium is significant compared to online exchanges." },
  { question: "Do I need ID to use a crypto ATM?", answer: "Requirements vary by operator and transaction amount. Many ATMs allow purchases up to $250-500 with just a phone number for SMS verification. Larger transactions require government-issued ID and sometimes facial recognition. KYC requirements have increased across the industry to comply with anti-money laundering regulations." },
  { question: "Can I sell crypto at an ATM for cash?", answer: "Some crypto ATMs support two-way transactions (buy and sell). Two-way machines dispense cash when you send crypto to the ATM wallet address. Not all ATMs support selling, so check the specific machine's capabilities before visiting. Selling typically has lower transaction limits and may require more identity verification." },
];

const relatedArticles = [
  { title: "Crypto-to-Fiat Off-Ramps", href: "/spending/best/crypto-to-fiat", category: "Spending" },
  { title: "Bitcoin Payments Guide", href: "/spending/learn/bitcoin-payments-guide", category: "Spending" },
  { title: "Best Crypto Debit Cards", href: "/spending/best/debit-cards", category: "Spending" },
];

export default function CryptoATMGuidePage() {
  return (
    <LearnPageLayout
      title="Crypto ATM Guide: Buying and Selling Bitcoin at ATMs"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="7 min"
      intro="Crypto ATMs provide a physical, accessible way to buy and sell cryptocurrency with cash. With over 38,000 machines installed worldwide, they offer a bridge between physical currency and digital assets. While their fees are higher than online exchanges, they serve an important role for users who prefer cash transactions, lack bank accounts, or want immediate access to crypto without waiting for account verification."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="overview">Crypto ATM Overview</h2>
      <p>
        Crypto ATMs (also called Bitcoin ATMs or BTMs) are physical kiosks that allow you to buy cryptocurrency
        with cash, debit cards, or credit cards. Some machines also let you sell crypto and receive cash.
        The major operators include Bitcoin Depot, CoinFlip, Coinme, and LibertyX. Most machines support
        Bitcoin, with many also offering Ethereum, Litecoin, and Bitcoin Cash. The machines are typically
        located in convenience stores, gas stations, shopping malls, and other retail locations.
      </p>

      <h2 id="how-to-use">How to Use a Crypto ATM</h2>
      <p>
        The process is straightforward. Approach the machine, select whether you want to buy or sell crypto,
        complete any required verification (phone number, ID scan), enter or scan your wallet address, insert
        cash (for buying), and confirm the transaction. The crypto is sent to your wallet within minutes
        after the blockchain confirms the transaction. For selling, you send crypto to the machine&apos;s address
        first, wait for confirmation, then the machine dispenses cash. Always have your wallet app ready with
        a QR code before arriving at the ATM.
      </p>

      <h2 id="fees-limits">Fees &amp; Limits</h2>
      <p>
        Crypto ATM fees are the highest in the industry, typically 6-12% above market price for purchases.
        Some operators charge up to 15-20%, particularly for small transactions. Transaction limits vary by
        operator and verification level. Basic transactions with phone verification are usually limited to
        $250-500. With full ID verification, limits can reach $2,000-$10,000 per transaction. Daily and
        monthly limits may also apply. Always compare the displayed price against the current market rate
        before confirming.
      </p>

      <h2 id="finding-atms">Finding Crypto ATMs</h2>
      <p>
        CoinATMRadar is the most comprehensive directory of crypto ATMs worldwide, with an interactive map
        showing locations, supported coins, and fee estimates. Bitcoin Depot and CoinFlip have their own
        locator tools. Google Maps also shows crypto ATMs in many areas. The US has the highest concentration
        of machines, followed by Canada, Europe, and Australia. Urban areas have the most options while rural
        locations may require significant travel.
      </p>

      <h2 id="tips">Tips for Using Crypto ATMs</h2>
      <p>
        Compare fees across nearby machines since rates vary significantly between operators. Have your wallet
        app installed and set up before visiting the ATM. Bring your phone for verification and your wallet
        QR code for receiving. Avoid machines with fees above 12% as there are usually cheaper alternatives
        nearby. For regular crypto purchases, online exchanges are far more cost-effective. Use ATMs for
        convenience, small cash purchases, or when you need crypto immediately without exchange account setup.
      </p>
    </LearnPageLayout>
  );
}
