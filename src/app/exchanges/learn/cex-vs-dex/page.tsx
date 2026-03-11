import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `CEX vs DEX: Centralized vs Decentralized Exchanges (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Compare centralized exchanges (CEX) and decentralized exchanges (DEX). Understand the pros, cons, and key differences to decide which is right for your trading needs.",
};

export default function CexVsDexPage() {
  return (
    <LearnPageLayout
      title="CEX vs DEX: Centralized vs Decentralized Exchanges"
      categoryName="Crypto Exchanges"
      categorySlug="exchanges"
      readTime="11 min"
      intro="The debate between centralized exchanges (CEX) and decentralized exchanges (DEX) sits at the heart of cryptocurrency philosophy. CEXs like Coinbase and Binance offer convenience and familiar trading experiences, while DEXs like Uniswap and dYdX give you full control of your funds and eliminate intermediaries. Understanding the trade-offs between these two approaches is essential for any crypto participant."
      toc={[
        { id: "what-is-cex", title: "What Is a Centralized Exchange (CEX)?", level: 2 },
        { id: "what-is-dex", title: "What Is a Decentralized Exchange (DEX)?", level: 2 },
        { id: "key-differences", title: "Key Differences Compared", level: 2 },
        { id: "when-use-cex", title: "When to Use a CEX", level: 2 },
        { id: "when-use-dex", title: "When to Use a DEX", level: 2 },
        { id: "hybrid-future", title: "The Hybrid Future", level: 2 },
      ]}
      faqs={[
        {
          question: "Is a DEX safer than a CEX?",
          answer:
            "DEXs eliminate the risk of exchange hacks and exit scams because you retain control of your funds. However, they introduce other risks: smart contract vulnerabilities, phishing attacks targeting wallet approvals, and no recourse if you send funds to the wrong address. Neither is inherently safer -- they have different risk profiles.",
        },
        {
          question: "Can I buy crypto with USD on a DEX?",
          answer:
            "Most DEXs do not support direct fiat purchases. You typically need to first buy crypto on a CEX or through a fiat on-ramp service, transfer it to your wallet, and then use a DEX. Some DEXs have integrated fiat on-ramps through third-party providers, but the options are still limited.",
        },
        {
          question: "Are DEX fees lower than CEX fees?",
          answer:
            "DEX swap fees are often around 0.3% (Uniswap) which is comparable to many CEX fees. However, you also pay blockchain gas fees on a DEX, which can be very high on Ethereum. On Layer-2 networks or Solana, total DEX costs can be lower than CEX fees for smaller trades.",
        },
      ]}
      relatedArticles={[
        {
          title: "How to Choose a Crypto Exchange",
          href: "/exchanges/learn/how-to-choose-exchange",
          category: "Exchanges",
        },
        {
          title: "Crypto Exchange Fees Explained",
          href: "/exchanges/learn/exchange-fees-explained",
          category: "Exchanges",
        },
        {
          title: "How to Secure Your Crypto Exchange Account",
          href: "/exchanges/learn/exchange-security-tips",
          category: "Exchanges",
        },
      ]}
    >
      <h2 id="what-is-cex">What Is a Centralized Exchange (CEX)?</h2>
      <p>
        A centralized exchange is a cryptocurrency trading platform operated by a company that acts as an
        intermediary between buyers and sellers. When you deposit funds on a CEX, the exchange takes custody of
        your assets and manages the order book, trade execution, and settlement on your behalf. Examples include
        Coinbase, Binance, Kraken, and Gemini.
      </p>
      <p>
        CEXs function similarly to traditional stock exchanges or brokerages. They require account registration,
        identity verification (KYC), and comply with regulatory requirements in their operating jurisdictions. This
        compliance provides legal protections for users but also means the exchange controls access to your funds.
      </p>
      <p>
        The order matching on a CEX happens on centralized servers using a traditional order book model. This
        enables fast execution speeds, advanced order types (limit, stop-loss, OCO), and deep liquidity on popular
        trading pairs. CEXs also provide fiat on-ramps, allowing you to buy crypto directly with your bank account
        or credit card.
      </p>

      <h2 id="what-is-dex">What Is a Decentralized Exchange (DEX)?</h2>
      <p>
        A decentralized exchange is a peer-to-peer marketplace that runs on blockchain smart contracts without a
        central authority. Instead of depositing your funds into an exchange, you trade directly from your own
        wallet. The smart contracts automatically handle the trade execution and settlement. Uniswap, SushiSwap,
        PancakeSwap, and dYdX are prominent examples.
      </p>
      <p>
        Most DEXs use an Automated Market Maker (AMM) model instead of a traditional order book. Liquidity
        providers deposit token pairs into liquidity pools, and traders swap against these pools. The price is
        determined algorithmically based on the ratio of tokens in the pool, following a constant product formula.
      </p>
      <p>
        DEXs require no registration, no identity verification, and no permission to use. Anyone with a
        cryptocurrency wallet can connect and start trading immediately. This permissionless nature aligns with the
        decentralization ethos of cryptocurrency but also means there is no customer support, no account recovery,
        and no regulatory protection.
      </p>

      <h2 id="key-differences">Key Differences Compared</h2>
      <p>
        <strong>Custody:</strong> On a CEX, the exchange holds your funds. On a DEX, you retain custody of your
        assets in your own wallet at all times. This is the fundamental philosophical difference. CEX custody means
        convenience but also counterparty risk. DEX self-custody means sovereignty but also full personal
        responsibility.
      </p>
      <p>
        <strong>Speed and cost:</strong> CEXs typically execute trades in milliseconds with predictable fees. DEX
        trades depend on blockchain confirmation times and network gas fees, which can fluctuate wildly. On
        Ethereum mainnet, a simple Uniswap swap might cost $5-$50 in gas during congested periods. On Solana or
        Layer-2 chains like Arbitrum, DEX transactions are fast and cheap, often costing just a few cents.
      </p>
      <p>
        <strong>Asset availability:</strong> DEXs often list tokens long before they appear on CEXs because anyone
        can create a liquidity pool for any token. This provides early access to new projects but also exposes
        users to scam tokens and rug pulls. CEXs vet tokens before listing them, providing a layer of quality
        control but limiting the selection.
      </p>
      <p>
        <strong>Privacy:</strong> CEXs require full identity verification. DEXs allow pseudonymous trading with
        just a wallet address. For users in regions with limited exchange access or those who value financial
        privacy, DEXs provide an alternative that is not available through centralized platforms.
      </p>

      <h2 id="when-use-cex">When to Use a CEX</h2>
      <p>
        Centralized exchanges are the better choice when you are new to crypto and need a guided, intuitive
        experience. The onboarding process, educational resources, and customer support offered by CEXs make them
        ideal for beginners. If something goes wrong, you have a support team and potentially legal recourse.
      </p>
      <p>
        CEXs are also preferable when you need to convert between fiat currency and crypto, when you require
        advanced trading features like margin trading or futures, when you are trading large volumes and need deep
        liquidity, or when you want the security of a regulated and insured platform.
      </p>
      <p>
        For institutional traders and those managing significant portfolios, the compliance infrastructure,
        reporting tools, and institutional-grade custody offered by major CEXs are often non-negotiable
        requirements.
      </p>

      <h2 id="when-use-dex">When to Use a DEX</h2>
      <p>
        Decentralized exchanges are the right choice when self-custody of your funds is a priority. If you do not
        want to trust a third party with your assets, a DEX lets you trade without ever giving up control of your
        private keys.
      </p>
      <p>
        DEXs excel when you want to access newly launched tokens before they appear on CEXs, when you want to
        participate in DeFi activities like providing liquidity for yield, when you are in a jurisdiction where
        centralized exchanges are restricted, or when you value pseudonymous trading without KYC requirements.
      </p>
      <p>
        Power users who understand smart contract risks and blockchain transaction mechanics can benefit from the
        composability of DEXs. You can chain together swaps, liquidity provision, lending, and other DeFi
        activities in ways that are not possible on centralized platforms.
      </p>

      <h2 id="hybrid-future">The Hybrid Future</h2>
      <p>
        The line between CEXs and DEXs is increasingly blurring. Centralized exchanges like Coinbase and OKX have
        launched their own decentralized platforms and Web3 wallets. Meanwhile, DEXs like dYdX have introduced
        order book models traditionally associated with centralized exchanges.
      </p>
      <p>
        Hybrid platforms are emerging that combine the user experience and speed of a CEX with the self-custody
        principles of a DEX. These platforms use technologies like zero-knowledge proofs and off-chain order
        matching with on-chain settlement to achieve the best of both worlds.
      </p>
      <p>
        For most users, the practical approach is to use both. Maintain a CEX account for fiat on-ramps, larger
        trades requiring deep liquidity, and the convenience of managed custody. Use DEXs for accessing the
        broader DeFi ecosystem, newly launched tokens, and situations where self-custody is important. The two
        models complement each other, and understanding both gives you the full range of tools available in the
        crypto market.
      </p>
    </LearnPageLayout>
  );
}
