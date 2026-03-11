import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is DeFi? Decentralized Finance Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn what DeFi is, how decentralized finance works, the major DeFi categories, risks involved, and how to get started with DeFi protocols.",
};

export default function DefiPage() {
  return (
    <LearnPageLayout
      title="What Is DeFi (Decentralized Finance)?"
      categoryName="Glossary"
      categorySlug="learn/glossary"
      readTime="6 min"
      intro="DeFi (Decentralized Finance) is an ecosystem of financial applications built on blockchain networks using smart contracts, operating without traditional intermediaries like banks or brokerages. DeFi enables lending, borrowing, trading, insurance, and complex financial instruments that are permissionless, transparent, and available 24/7 to anyone with an internet connection and a crypto wallet."
      toc={[
        { id: "definition", title: "What Is DeFi?", level: 2 },
        { id: "how-it-works", title: "How DeFi Works", level: 2 },
        { id: "categories", title: "DeFi Categories", level: 2 },
        { id: "why-it-matters", title: "Why DeFi Matters", level: 2 },
        { id: "risks", title: "DeFi Risks", level: 2 },
      ]}
      faqs={[
        {
          question: "Do I need a lot of money to use DeFi?",
          answer:
            "No. DeFi is permissionless, so anyone can participate regardless of wealth. However, transaction fees (especially on Ethereum mainnet) can make small transactions uneconomical. Layer 2 networks and alternative chains like Arbitrum, Optimism, and Solana offer much lower fees, making DeFi accessible with smaller amounts.",
        },
        {
          question: "Is DeFi safe?",
          answer:
            "DeFi carries risks including smart contract bugs, oracle manipulation, governance attacks, and economic exploits. Billions have been lost to DeFi hacks. Mitigate risk by using well-audited protocols with long track records, diversifying across protocols, and never investing more than you can afford to lose.",
        },
      ]}
      relatedArticles={[
        { title: "What Is a DEX?", href: "/learn/glossary/dex", category: "Glossary" },
        { title: "What Is a Liquidity Pool?", href: "/learn/glossary/liquidity-pool", category: "Glossary" },
        { title: "What Is a Smart Contract?", href: "/learn/glossary/smart-contract", category: "Glossary" },
        { title: "What Is Impermanent Loss?", href: "/learn/glossary/impermanent-loss", category: "Glossary" },
      ]}
    >
      <h2 id="definition">What Is DeFi?</h2>
      <p>
        DeFi replaces traditional financial intermediaries with smart contracts — self-executing code on a blockchain. Instead of a bank managing your savings account, a smart contract automatically handles deposits, interest calculations, and withdrawals. Instead of a stock exchange matching buyers and sellers, an automated market maker uses algorithms and liquidity pools to facilitate trades.
      </p>

      <h2 id="how-it-works">How DeFi Works</h2>
      <p>
        DeFi protocols are composed of smart contracts deployed on programmable blockchains (primarily Ethereum and its Layer 2s). Users interact with these contracts through web interfaces by connecting their wallet. The contracts enforce rules automatically — collateral ratios, interest rates, trading fees — without human intervention. Everything is transparent on-chain and composable, meaning DeFi protocols can be combined like building blocks.
      </p>

      <h2 id="categories">DeFi Categories</h2>
      <p>
        Decentralized exchanges (Uniswap, Curve) enable token trading. Lending protocols (Aave, Compound) allow borrowing and lending. Liquid staking (Lido, Rocket Pool) lets you stake ETH while retaining liquidity. Yield aggregators (Yearn) optimize returns across protocols. Stablecoins (DAI, FRAX) provide price-stable assets. Derivatives platforms offer options, perpetual futures, and synthetic assets. Each category has multiple competing protocols.
      </p>

      <h2 id="why-it-matters">Why DeFi Matters</h2>
      <p>
        DeFi provides financial services to anyone with an internet connection, regardless of geography, wealth, or identity. It operates 24/7 without holidays. It offers transparency — anyone can audit the code and verify the reserves. It enables composability — developers can build new financial products by combining existing protocols. DeFi represents a fundamentally different architecture for financial services.
      </p>

      <h2 id="risks">DeFi Risks</h2>
      <p>
        Smart contract vulnerabilities can be exploited to drain funds. Oracle manipulation can trigger improper liquidations or incorrect pricing. Economic exploits can drain protocol reserves through clever but unintended interactions. Regulatory uncertainty could affect access to DeFi. Impermanent loss affects liquidity providers. Always do thorough research, start with small amounts, and diversify across protocols with strong audit histories.
      </p>
    </LearnPageLayout>
  );
}
