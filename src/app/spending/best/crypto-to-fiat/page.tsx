import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Best Crypto-to-Fiat Off-Ramps (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Compare the best ways to convert cryptocurrency to fiat currency in ${CURRENT_YEAR}. Off-ramp services, P2P platforms, and crypto debit cards ranked by fees, speed, and limits.`,
  alternates: { canonical: "/spending/best/crypto-to-fiat" },
};

const toc = [
  { id: "overview", title: "Crypto-to-Fiat Overview", level: 2 },
  { id: "exchange-offramps", title: "Exchange Off-Ramps", level: 2 },
  { id: "p2p-platforms", title: "P2P Platforms", level: 2 },
  { id: "debit-cards", title: "Crypto Debit Cards", level: 2 },
  { id: "choosing", title: "Choosing the Right Method", level: 2 },
];

const faqs = [
  { question: "What is the cheapest way to convert crypto to fiat?", answer: "Centralized exchanges like Coinbase, Kraken, and Binance typically offer the lowest conversion fees (0.1-1.5%). Bank wire withdrawals are usually cheaper than card withdrawals. For larger amounts, OTC desks offer competitive rates with minimal slippage. P2P platforms may offer better rates but carry higher counterparty risk." },
  { question: "How long does it take to cash out crypto?", answer: "Selling crypto on an exchange is instant, but withdrawing fiat to your bank takes 1-5 business days depending on the method. SEPA transfers in Europe take 1-2 days. US ACH transfers take 3-5 days. Wire transfers are typically same-day or next-day. Crypto debit cards provide instant spending access without a bank withdrawal." },
  { question: "Are there limits on crypto-to-fiat conversions?", answer: "Yes. Most exchanges have daily and monthly withdrawal limits that increase with identity verification level. Basic accounts may be limited to $10,000-$50,000 daily. Fully verified accounts on major exchanges can withdraw $100,000+ daily. P2P platforms may have per-trade limits. OTC desks are designed for large conversions with no practical limits." },
];

const relatedArticles = [
  { title: "Best Crypto Debit Cards", href: "/spending/best/debit-cards", category: "Spending" },
  { title: "Stablecoin Payments", href: "/spending/learn/stablecoin-payments", category: "Spending" },
  { title: "Tax Implications of Spending", href: "/spending/learn/tax-implications-spending", category: "Spending" },
];

export default function BestCryptoToFiatPage() {
  return (
    <LearnPageLayout
      title="Best Crypto-to-Fiat Off-Ramps: Convert Crypto to Cash"
      categoryName="Crypto Spending"
      categorySlug="spending"
      readTime="7 min"
      intro="Converting cryptocurrency to fiat currency is essential for anyone who wants to realize their crypto gains or pay for expenses that require traditional money. The best off-ramp method depends on your priorities: speed, fees, withdrawal limits, and geographic availability all vary significantly across platforms and methods."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="overview">Crypto-to-Fiat Overview</h2>
      <p>
        Off-ramping is the process of converting cryptocurrency into government-issued fiat currency like USD,
        EUR, or GBP. The three primary methods are centralized exchange withdrawals, peer-to-peer trading, and
        crypto debit cards. Each has different trade-offs in terms of fees, speed, privacy, and convenience.
        Your choice depends on how quickly you need the funds, how much you are converting, and where you are
        located.
      </p>

      <h2 id="exchange-offramps">Exchange Off-Ramps</h2>
      <p>
        Major exchanges like Coinbase, Kraken, Binance, and Gemini offer the most straightforward off-ramp
        experience. Sell your crypto on the exchange, then withdraw fiat to your linked bank account. Fees
        typically range from 0.1% to 1.5% for the trade plus a flat withdrawal fee. Coinbase charges up to
        1.49% for standard sells. Kraken offers lower fees at 0.16-0.26% on their pro platform. Bank transfer
        times vary from instant (for supported banks) to 5 business days.
      </p>

      <h2 id="p2p-platforms">P2P Platforms</h2>
      <p>
        Peer-to-peer platforms connect crypto sellers directly with buyers. Paxful, LocalBitcoins (now closed),
        and Binance P2P allow you to sell crypto for bank transfers, mobile money, or even cash. P2P often
        offers better rates in regions with limited exchange access. The trade-off is higher counterparty risk
        and slower settlement. Escrow systems protect both parties, but disputes can occur. P2P is particularly
        popular in Africa, South America, and Southeast Asia.
      </p>

      <h2 id="debit-cards">Crypto Debit Cards</h2>
      <p>
        Crypto debit cards from providers like Crypto.com, Coinbase, and BitPay convert your crypto to fiat
        at the point of sale. This is the fastest off-ramp for everyday spending since there is no bank
        withdrawal delay. The conversion happens instantly when you make a purchase or ATM withdrawal. Cards
        typically charge a small spread on conversion (0.5-2%) plus ATM fees above monthly free limits. This
        method is ideal for spending crypto gradually rather than large lump-sum conversions.
      </p>

      <h2 id="choosing">Choosing the Right Method</h2>
      <p>
        For large conversions over $10,000, use a major exchange with low trading fees and wire transfer
        withdrawal. For everyday spending, a crypto debit card eliminates the need to convert in advance.
        For regions with limited exchange access, P2P platforms offer the most flexibility. For urgent needs,
        cards and instant bank transfer exchanges are fastest. Always factor in tax implications, as every
        conversion from crypto to fiat is a taxable event in most jurisdictions.
      </p>
    </LearnPageLayout>
  );
}
