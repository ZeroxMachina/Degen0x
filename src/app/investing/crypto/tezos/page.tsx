import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Tezos (XTZ)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn about Tezos (XTZ), the self-amending blockchain with on-chain governance. Discover XTZ tokenomics, baking, and how to buy.",
};

export default function TezosPage() {
  return (
    <LearnPageLayout
      title="What Is Tezos (XTZ)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Tezos (XTZ) is a self-amending blockchain platform that features on-chain governance, enabling the protocol to upgrade itself without hard forks. Launched in 2018 after a record-breaking ICO, Tezos uses a liquid proof-of-stake consensus mechanism where token holders can delegate their XTZ to validators (bakers) and participate in governance while earning staking rewards."
      toc={[
        { id: "what-is", title: "What Is Tezos?", level: 2 },
        { id: "how-it-works", title: "How Does Tezos Work?", level: 2 },
        { id: "tokenomics", title: "XTZ Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy XTZ", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Tezos?", answer: "Tezos is a self-amending blockchain with built-in on-chain governance. It upgrades without hard forks through community voting. XTZ (tez) is used for staking (baking), governance, and transaction fees." },
        { question: "Where can I buy XTZ?", answer: "XTZ is available on Coinbase, Binance, Kraken, and most major exchanges. Many exchanges also support direct XTZ staking." },
        { question: "Is Tezos a good investment?", answer: "Tezos has proven technology with regular self-amendments and institutional adoption in sectors like art and real estate. However, it has lost developer and DeFi mindshare to Ethereum L2s and newer chains." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Tezos?</h2><p>Tezos is a decentralized, open-source blockchain network that launched in September 2018. Its defining feature is self-amendment: the protocol can upgrade itself through on-chain governance without requiring contentious hard forks that split the community. Token holders vote on proposed protocol amendments, and approved changes are automatically implemented. This process has enabled Tezos to undergo numerous successful upgrades since launch.</p><p>The Tezos Foundation, based in Switzerland, manages a substantial treasury that funds ecosystem development, research grants, and partnerships. Tezos has gained particular traction in the digital art and collectibles space, with institutions like museums and luxury brands choosing Tezos for NFT projects due to its energy efficiency and low transaction costs.</p></section>
      <section id="how-it-works"><h2>How Does Tezos Work?</h2><p>Tezos uses liquid proof-of-stake (LPoS), where validators called bakers stake XTZ to create and validate blocks. Token holders who do not want to run their own baker can delegate their XTZ to existing bakers without giving up custody, earning a share of baking rewards. The governance process follows a structured cycle: proposals are submitted, evaluated, tested, and voted on by bakers, with successful amendments automatically activated.</p><p>Smart contracts on Tezos are written in Michelson, a stack-based language designed for formal verification, allowing mathematical proofs of contract correctness. Higher-level languages like SmartPy and LIGO compile to Michelson. The platform supports FA2 tokens (similar to ERC-20/ERC-721) and has rolled out significant performance improvements through successive amendments.</p></section>
      <section id="tokenomics"><h2>XTZ Tokenomics</h2><p>XTZ has an inflationary supply model with new tokens created as baking rewards. The inflation rate is approximately 5-6% annually, offset partially by tokens locked in staking. Bakers and delegators earn staking yields from block rewards and transaction fees. The Tezos Foundation holds a significant treasury used for ecosystem grants and development. XTZ is widely available for staking on exchanges, making it one of the most accessible proof-of-stake tokens.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>XTZ is used for staking through baking or delegation, on-chain governance voting, transaction fees, and as the native currency of the Tezos ecosystem. The Tezos blockchain supports digital art NFTs, decentralized finance protocols, gaming applications, and enterprise use cases including supply chain tracking and digital identity. Its formal verification capabilities make it attractive for high-assurance applications in finance and legal sectors.</p></section>
      <section id="how-to-buy"><h2>How to Buy XTZ</h2><p>XTZ is available on Coinbase, Binance, Kraken, and most major exchanges. Many exchanges offer built-in XTZ staking for convenient yield generation. For self-custody, Temple Wallet and Kukai are popular Tezos wallets. After purchasing, delegate XTZ to a baker to earn staking rewards without a lock-up period, a unique advantage of Tezos liquid proof-of-stake.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>Tezos has experienced declining developer activity and DeFi total value locked relative to competitors. Ethereum Layer 2 solutions and newer chains like Solana have captured much of the developer and user growth. The governance process, while innovative, can be slow to implement changes compared to more centralized decision-making. Inflationary tokenomics require sustained demand growth to support price appreciation. The Tezos ecosystem is smaller than many competing platforms, limiting network effects.</p></section>
    </LearnPageLayout>
  );
}
