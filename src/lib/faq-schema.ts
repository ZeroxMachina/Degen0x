/**
 * FAQ Schema Generator for degen0x
 * Generates JSON-LD FAQPage structured data for Google rich results.
 *
 * Usage:
 *   import { generateFAQSchema, TOOL_FAQS, EXCHANGE_FAQS } from "@/lib/faq-schema";
 *   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: generateFAQSchema(TOOL_FAQS.dcaCalculator) }} />
 */

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQPageSchema {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: {
    "@type": "Question";
    name: string;
    acceptedAnswer: {
      "@type": "Answer";
      text: string;
    };
  }[];
}

export function generateFAQSchema(faqs: FAQItem[]): string {
  const schema: FAQPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
  return JSON.stringify(schema);
}

// ─── Pre-built FAQ sets for high-traffic pages ────────────────────

export const TOOL_FAQS = {
  dcaCalculator: [
    { question: "What is Dollar Cost Averaging (DCA) in crypto?", answer: "Dollar Cost Averaging is an investment strategy where you invest a fixed amount of money into a cryptocurrency at regular intervals, regardless of the price. This reduces the impact of volatility on your overall purchase and lowers your average cost per coin over time." },
    { question: "How does a crypto DCA calculator work?", answer: "A DCA calculator lets you input your investment amount, frequency (daily, weekly, monthly), time period, and chosen cryptocurrency. It then calculates your total investment, current portfolio value, average buy price, and ROI based on historical price data." },
    { question: "Is DCA better than lump sum investing in crypto?", answer: "Research shows DCA reduces risk from market timing. While lump sum can outperform in consistent bull markets, DCA protects against buying at peaks and is generally recommended for volatile assets like cryptocurrency. It also helps manage emotional decision-making." },
    { question: "What is the best frequency for DCA into Bitcoin?", answer: "Weekly DCA is most popular among Bitcoin investors as it provides good averaging without excessive transaction fees. Daily DCA offers slightly better averaging but may incur higher fees. Monthly DCA works well for larger investment amounts." },
    { question: "Can I DCA into multiple cryptocurrencies at once?", answer: "Yes, many investors DCA into a portfolio of cryptocurrencies. A common approach is 50-60% Bitcoin, 20-30% Ethereum, and 10-20% in promising altcoins. Our DCA calculator lets you model multi-asset DCA strategies." },
  ],
  taxCalculator: [
    { question: "How is cryptocurrency taxed?", answer: "In most countries, cryptocurrency is taxed as property. You owe capital gains tax when you sell, trade, or spend crypto at a profit. Short-term gains (held < 1 year) are taxed at your income tax rate. Long-term gains (held > 1 year) receive preferential rates, typically 0-20% in the US." },
    { question: "Do I need to report crypto on my taxes?", answer: "Yes, in the US and most countries you must report all cryptocurrency transactions including sales, trades, earning crypto as income, mining rewards, staking rewards, and airdrops. Failure to report can result in penalties from the IRS." },
    { question: "What crypto transactions are taxable?", answer: "Taxable events include: selling crypto for fiat, trading one crypto for another, spending crypto on goods/services, receiving crypto as payment, mining and staking rewards, and airdrops. Buying crypto with fiat and transferring between your own wallets are generally not taxable." },
    { question: "How do I calculate my crypto capital gains?", answer: "Capital gain = Sale price - Cost basis. Your cost basis is the original purchase price plus any fees. For multiple purchases, you can use FIFO (first in, first out), LIFO (last in, first out), or specific identification methods. Our calculator supports all methods." },
    { question: "Can I deduct crypto losses on my taxes?", answer: "Yes, crypto losses can offset capital gains and up to $3,000 of ordinary income per year in the US. Excess losses can be carried forward to future tax years. This strategy, called tax-loss harvesting, is a key benefit of tracking your crypto taxes carefully." },
  ],
  portfolioTracker: [
    { question: "What is a crypto portfolio tracker?", answer: "A crypto portfolio tracker is a tool that aggregates all your cryptocurrency holdings across multiple wallets and exchanges into one dashboard. It shows your total balance, profit/loss, asset allocation, and performance over time." },
    { question: "Is it safe to connect my exchange accounts to a portfolio tracker?", answer: "Reputable portfolio trackers use read-only API keys that can view your balances but cannot make trades or withdrawals. Always use read-only permissions and never share your secret keys. Our recommended trackers all support read-only connections." },
    { question: "Can I track DeFi positions in a portfolio tracker?", answer: "Yes, advanced portfolio trackers can connect to DeFi protocols across multiple blockchains to track lending positions, liquidity pools, staking rewards, and yield farming. This gives you a complete view of both centralized and decentralized holdings." },
  ],
  gasTracker: [
    { question: "What is Ethereum gas and why do I need to track it?", answer: "Gas is the fee you pay to execute transactions on the Ethereum network. Gas prices fluctuate based on network demand. Tracking gas prices helps you time your transactions for lower fees, potentially saving hundreds of dollars on DeFi operations." },
    { question: "When are Ethereum gas fees lowest?", answer: "Gas fees are typically lowest during weekends and early morning hours (UTC). The cheapest times are usually Saturday and Sunday between 2-6 AM UTC. High gas periods tend to be weekday afternoons UTC when US and European markets overlap." },
    { question: "How are gas fees calculated?", answer: "Gas fees = Gas Units × (Base Fee + Priority Fee). The base fee is set by the network and burned, while the priority fee (tip) goes to validators. Our gas tracker shows current base fees, recommended priority fees, and estimated costs for common transactions." },
  ],
};

export const EXCHANGE_FAQS = {
  general: [
    { question: "What is a cryptocurrency exchange?", answer: "A cryptocurrency exchange is a platform where you can buy, sell, and trade digital currencies like Bitcoin and Ethereum. Exchanges can be centralized (CEX) like Coinbase and Binance, or decentralized (DEX) like Uniswap and Jupiter. Centralized exchanges are easier for beginners, while DEXs offer more privacy and control." },
    { question: "How do I choose the best crypto exchange?", answer: "Consider these factors: security track record, supported cryptocurrencies, trading fees, payment methods, regulatory compliance, user interface, customer support, and available features like staking or lending. Our comparison tools help you evaluate exchanges across all these criteria." },
    { question: "Are crypto exchanges safe?", answer: "Reputable exchanges implement strong security measures including cold storage, 2FA, and insurance funds. However, no exchange is completely risk-free. Best practice is to only keep trading amounts on exchanges and move long-term holdings to a hardware wallet you control." },
    { question: "What fees do crypto exchanges charge?", answer: "Exchanges typically charge trading fees (0.1-1.5% per trade), deposit/withdrawal fees, and spread markup. Maker fees (adding liquidity) are usually lower than taker fees (removing liquidity). Some exchanges offer fee discounts for high-volume traders or holding their native token." },
  ],
};

export const WALLET_FAQS = {
  general: [
    { question: "What is a cryptocurrency wallet?", answer: "A crypto wallet is software or hardware that stores your private keys, which prove ownership of your cryptocurrency. Wallets don't actually store crypto — they store the keys that let you access your funds on the blockchain. Types include hardware wallets, software wallets, and mobile wallets." },
    { question: "What is the difference between hot and cold wallets?", answer: "Hot wallets are connected to the internet (mobile apps, browser extensions, desktop software) — convenient for trading but more vulnerable to hacks. Cold wallets (hardware devices like Ledger and Trezor) store keys offline — more secure for long-term storage but less convenient for frequent transactions." },
    { question: "What happens if I lose my crypto wallet?", answer: "If you have your seed phrase (recovery phrase), you can restore your wallet on any compatible device. If you lose both your wallet and seed phrase, your crypto is permanently inaccessible. This is why securely backing up your seed phrase — offline, in multiple locations — is critical." },
    { question: "Do I need a hardware wallet?", answer: "If you hold more than a few hundred dollars in crypto or plan to hold long-term, a hardware wallet is strongly recommended. They cost $60-200 and provide significantly better security than software wallets. For small amounts or active trading, a reputable software wallet is sufficient." },
  ],
};

export const LEARN_FAQS = {
  whatIsCrypto: [
    { question: "What is cryptocurrency in simple terms?", answer: "Cryptocurrency is digital money that works without banks. It uses cryptography (advanced math) to secure transactions and runs on a blockchain — a public ledger shared across thousands of computers. Anyone can send crypto to anyone else directly, without intermediaries, anywhere in the world." },
    { question: "Is cryptocurrency real money?", answer: "Cryptocurrency has real monetary value and can be used to buy goods and services, though acceptance varies. Major cryptocurrencies like Bitcoin are recognized as property or currency by many governments. You can convert crypto to traditional currency (USD, EUR, etc.) on exchanges at any time." },
    { question: "How do I start investing in cryptocurrency?", answer: "1) Choose a reputable exchange (we recommend Coinbase or Kraken for beginners). 2) Complete identity verification. 3) Deposit funds via bank transfer or card. 4) Start with Bitcoin or Ethereum. 5) Consider dollar-cost averaging rather than buying all at once. 6) Move holdings to a secure wallet once comfortable." },
  ],
};
