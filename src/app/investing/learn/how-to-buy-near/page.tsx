import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Buy NEAR Protocol (NEAR) - Step-by-Step Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: `Learn how to buy NEAR Protocol in ${CURRENT_YEAR}. Complete guide covering exchanges, wallets, and strategies for purchasing NEAR tokens.`,
};

export default function HowToBuyNearPage() {
  return (
    <LearnPageLayout
      title="How to Buy NEAR Protocol (NEAR)"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="8 min"
      intro="NEAR Protocol is a high-performance Layer 1 blockchain known for its developer-friendly approach and innovative sharding technology called Nightshade. NEAR has gained significant attention for its focus on user experience, account abstraction, and chain abstraction technology. This guide shows you how to buy NEAR tokens."
      toc={[
        { id: "what-is-near", title: "What Is NEAR Protocol?", level: 2 },
        { id: "where-to-buy", title: "Where to Buy NEAR", level: 2 },
        { id: "step-by-step", title: "Step-by-Step Purchase Guide", level: 2 },
        { id: "storage", title: "Storing Your NEAR", level: 2 },
      ]}
      faqs={[
        { question: "What makes NEAR Protocol unique?", answer: "NEAR uses Nightshade sharding to achieve high throughput while maintaining decentralization. It offers human-readable account names instead of long hex addresses, has a strong focus on developer experience with support for Rust and JavaScript, and is pioneering chain abstraction technology to simplify multi-chain interactions." },
        { question: "Can I stake NEAR tokens?", answer: "Yes. NEAR uses a proof-of-stake consensus mechanism with approximately 5-7% APY for stakers. You can delegate NEAR to validators through the NEAR wallet or compatible wallets like Meteor Wallet. The unstaking period on NEAR is approximately 52-65 hours." },
      ]}
      relatedArticles={[
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Layer 2 Investing Guide", href: "/investing/learn/layer-2-investing", category: "Investing" },
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
      ]}
    >
      <h2 id="what-is-near">What Is NEAR Protocol?</h2>
      <p>
        NEAR Protocol is a Layer 1 blockchain that uses a unique sharding approach called
        Nightshade to achieve scalability without sacrificing decentralization. The platform is
        designed to be developer-friendly with support for Rust and JavaScript smart contracts.
        NEAR has been at the forefront of chain abstraction, aiming to make cross-chain interactions
        seamless for users. The network processes thousands of transactions per second with
        sub-second finality and low fees.
      </p>

      <h2 id="where-to-buy">Where to Buy NEAR</h2>
      <p>
        NEAR tokens are available on major exchanges including Coinbase, Binance, Kraken, and
        KuCoin. Coinbase provides the simplest buying experience for US users. Binance offers the
        deepest liquidity with multiple NEAR trading pairs. For users already in the NEAR ecosystem,
        the Ref Finance DEX allows swapping other tokens for NEAR directly on the network.
      </p>

      <h2 id="step-by-step">Step-by-Step Purchase Guide</h2>
      <p>
        Create an account on a supported exchange and complete verification. Fund your account
        through your preferred payment method. Search for NEAR and place your order. After
        purchasing, you can keep NEAR on the exchange or transfer to a NEAR wallet. When
        withdrawing, make sure you are sending to a NEAR address (they look like human-readable
        names such as &quot;yourname.near&quot; or long hex addresses).
      </p>

      <h2 id="storage">Storing Your NEAR</h2>
      <p>
        The official NEAR Wallet and Meteor Wallet are popular options for storing NEAR tokens.
        Ledger hardware wallets support NEAR for cold storage. NEAR&apos;s account model is unique
        in that accounts have human-readable names and can hold multiple access keys with different
        permission levels. This makes NEAR particularly user-friendly for newcomers. Store your
        recovery phrase securely and consider staking your NEAR to earn rewards while holding.
      </p>
    </LearnPageLayout>
  );
}
