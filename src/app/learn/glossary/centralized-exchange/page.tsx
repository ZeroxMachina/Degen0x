import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is a Centralized Exchange (CEX)? Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what centralized crypto exchanges are, how they work, top examples, and their advantages and disadvantages compared to decentralized exchanges.",
};

export default function CentralizedExchangePage() {
  return (
    <LearnPageLayout
      title="What Is a Centralized Exchange (CEX)?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="5 min"
      intro="A centralized exchange (CEX) is a cryptocurrency trading platform operated by a company that acts as an intermediary between buyers and sellers. CEXs like Coinbase, Binance, and Kraken are the most common way people buy, sell, and trade cryptocurrency. They offer user-friendly interfaces, fiat currency support, and high liquidity, but require users to trust the exchange with their funds."
      toc={[
        { id: "definition", title: "What Is a CEX?", level: 2 },
        { id: "how-it-works", title: "How CEXs Work", level: 2 },
        { id: "pros-cons", title: "Advantages and Disadvantages", level: 2 },
        { id: "why-it-matters", title: "Why It Matters", level: 2 },
        { id: "safety", title: "Staying Safe on CEXs", level: 2 },
      ]}
      faqs={[
        {
          question: "What is the difference between a CEX and a DEX?",
          answer:
            "CEXs are operated by companies, require KYC, hold your funds custodially, and use order book trading. DEXs are powered by smart contracts, do not require identity verification, let you trade from your own wallet, and use automated market makers. CEXs offer more features and liquidity; DEXs offer more control and privacy.",
        },
        {
          question: "Is my crypto safe on an exchange?",
          answer:
            "Centralized exchanges can be hacked or go bankrupt, as the FTX collapse demonstrated. While major exchanges invest heavily in security, the safest approach is to withdraw crypto to a personal wallet (especially a hardware wallet) for long-term holding. Use exchanges primarily for trading and converting currencies.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DEX?", href: "/learn/glossary/dex", category: "Glossary" },
        { title: "What Is CeFi?", href: "/learn/glossary/cefi", category: "Glossary" },
        { title: "What Is KYC?", href: "/learn/glossary/kyc", category: "Glossary" },
        { title: "What Is Liquidity?", href: "/learn/glossary/liquidity", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is a CEX?</h2>
      <p>
        A centralized exchange is a business that facilitates cryptocurrency trading. The company operates the platform, maintains order books, processes deposits and withdrawals, and holds customer assets in its own wallets. To use a CEX, you typically create an account, complete identity verification (KYC), deposit funds, and then place buy or sell orders.
      </p>

      <h2 id="how-it-works">How CEXs Work</h2>
      <p>
        CEXs match buyers with sellers using an order book system. When you place a buy order, the exchange finds a matching sell order at your price. Trades execute off-chain on the exchange&apos;s internal systems, making them fast and gas-free. The exchange earns revenue through trading fees, withdrawal fees, and other services like staking and lending.
      </p>

      <h2 id="pros-cons">Advantages and Disadvantages</h2>
      <p>
        Advantages include user-friendly interfaces, fiat on/off-ramps, high liquidity, advanced trading tools (limit orders, futures, margin), customer support, and regulatory compliance. Disadvantages include custodial risk (the exchange holds your funds), KYC requirements, geographic restrictions, potential for hacks, and the possibility of withdrawal freezes or platform insolvency.
      </p>

      <h2 id="why-it-matters">Why It Matters</h2>
      <p>
        CEXs are the primary on-ramp for new crypto users and handle the majority of cryptocurrency trading volume globally. Understanding how they work, their fee structures, and their risks helps you make informed decisions about where and how to trade. Most investors use a combination of CEXs for active trading and self-custody wallets for long-term storage.
      </p>

      <h2 id="safety">Staying Safe on CEXs</h2>
      <p>
        Use strong, unique passwords and enable two-factor authentication (preferably hardware-based). Withdraw large holdings to personal wallets. Diversify across multiple exchanges rather than keeping everything in one place. Monitor exchange proof-of-reserves reports. Be wary of exchanges offering unsustainable yields or operating without proper regulatory licenses.
      </p>
    </LearnPageLayout>
  );
}
