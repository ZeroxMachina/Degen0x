import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Buy Sui (SUI) - Step-by-Step Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Learn how to buy Sui (SUI) in ${CURRENT_YEAR}. Complete guide covering exchanges, wallets, and strategies for purchasing SUI tokens.`,
};

export default function HowToBuySuiPage() {
  return (
    <LearnPageLayout
      title="How to Buy Sui (SUI)"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="8 min"
      intro="Sui is a next-generation Layer 1 blockchain built by Mysten Labs, also founded by former Meta engineers. Like Aptos, Sui uses the Move programming language but with a unique object-centric data model that enables parallel transaction processing. Sui has experienced rapid ecosystem growth and is particularly strong in gaming and consumer applications."
      toc={[
        { id: "what-is-sui", title: "What Is Sui?", level: 2 },
        { id: "where-to-buy", title: "Where to Buy Sui", level: 2 },
        { id: "step-by-step", title: "Step-by-Step Purchase Guide", level: 2 },
        { id: "storage", title: "Storing Your SUI", level: 2 },
      ]}
      faqs={[
        { question: "How is Sui different from Aptos?", answer: "While both use the Move language, Sui uses an object-centric model where each asset is a unique object, enabling transactions that touch different objects to process in parallel without coordination. Aptos uses a more traditional account-based model. Sui also features a unique consensus mechanism called Narwhal and Bullshark." },
        { question: "Can I stake SUI tokens?", answer: "Yes. SUI operates on a delegated proof-of-stake model with approximately 3-4% APY. You can delegate SUI to validators through the Sui Wallet or compatible wallets. Staked SUI remains liquid through the native staking mechanism, with rewards distributed each epoch (approximately 24 hours)." },
      ]}
      relatedArticles={[
        { title: "How to Buy Aptos", href: "/investing/learn/how-to-buy-aptos", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Gaming Crypto Guide", href: "/investing/learn/gaming-crypto-guide", category: "Investing" },
      ]}
    >
      <h2 id="what-is-sui">What Is Sui?</h2>
      <p>
        Sui is a Layer 1 blockchain developed by Mysten Labs, co-founded by Evan Cheng and other
        former Meta engineers who worked on the Diem and Novi projects. Sui&apos;s object-centric
        data model is its key innovation: every asset on Sui is a unique object with its own
        ownership rules, enabling massive parallelization of transactions. The network has achieved
        sub-second finality and can handle hundreds of thousands of transactions per second.
      </p>

      <h2 id="where-to-buy">Where to Buy Sui</h2>
      <p>
        SUI is available on major exchanges including Coinbase, Binance, Kraken, OKX, and KuCoin.
        Coinbase offers straightforward SUI purchases for US users. Binance has the deepest
        liquidity across multiple SUI trading pairs. Within the Sui ecosystem, decentralized
        exchanges like Cetus and Turbos Finance allow trading SUI-based tokens directly.
      </p>

      <h2 id="step-by-step">Step-by-Step Purchase Guide</h2>
      <p>
        Create and verify your account on a supported exchange. Fund your account using bank
        transfer or card payment. Navigate to the SUI trading page and place your buy order.
        After purchasing, consider transferring SUI to a self-custody wallet if you plan to
        explore the Sui ecosystem, participate in DeFi, or stake your tokens for rewards.
      </p>

      <h2 id="storage">Storing Your SUI</h2>
      <p>
        The Sui Wallet (browser extension) is the official wallet for the Sui ecosystem. Suiet
        and Ethos are alternative wallet options with good ecosystem integration. Ledger hardware
        wallets support SUI for cold storage security. The Sui ecosystem is growing rapidly in
        gaming, DeFi, and social applications, making a native wallet essential for full ecosystem
        participation. Always secure your recovery phrase offline.
      </p>
    </LearnPageLayout>
  );
}
