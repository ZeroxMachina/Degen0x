import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Morpho Token (MORPHO)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Morpho Token (MORPHO), the governance token of the Morpho lending protocol. Discover MORPHO tokenomics and how to buy.",
};

export default function MorphoTokenPage() {
  return (
    <LearnPageLayout
      title="What Is Morpho Token (MORPHO)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Morpho Token (MORPHO) is the governance token of Morpho, an innovative lending protocol that optimizes interest rates by matching lenders and borrowers peer-to-peer on top of existing lending pools. Morpho Blue, its latest iteration, provides a permissionless, minimal lending primitive that enables anyone to create isolated lending markets with customizable risk parameters."
      toc={[
        { id: "what-is", title: "What Is Morpho Token?", level: 2 },
        { id: "how-it-works", title: "How Does Morpho Work?", level: 2 },
        { id: "tokenomics", title: "MORPHO Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy MORPHO", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        { question: "What is Morpho Token?", answer: "MORPHO is the governance token of the Morpho protocol, which optimizes DeFi lending through peer-to-peer matching and permissionless isolated markets via Morpho Blue." },
        { question: "Where can I buy MORPHO?", answer: "MORPHO is available on Coinbase, Binance, and other exchanges after its token became transferable. It can also be traded on Ethereum DEXs." },
        { question: "Is Morpho Token a good investment?", answer: "Morpho has grown rapidly in TVL and represents a new approach to DeFi lending. Its success depends on continued adoption of Morpho Blue markets and MetaMorpho vaults." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is Morpho Token?</h2><p>Morpho started as a peer-to-peer matching layer on top of Aave and Compound, improving rates for both lenders and borrowers by directly connecting them when possible. The protocol then evolved into Morpho Blue, a permissionless, minimal lending primitive deployed on Ethereum. Morpho Blue allows anyone to create isolated lending markets with specific collateral, loan assets, oracle feeds, and risk parameters without governance approval.</p><p>MetaMorpho vaults sit on top of Morpho Blue, providing curated lending strategies managed by risk experts who allocate capital across multiple Morpho Blue markets. This layered architecture separates the base lending protocol from risk management decisions, creating a modular and efficient lending stack that has attracted billions in total value locked.</p></section>
      <section id="how-it-works"><h2>How Does Morpho Work?</h2><p>Morpho Blue operates as an immutable smart contract with no admin keys, governance controls, or upgradability. Each market is defined by five parameters: collateral token, loan token, liquidation loan-to-value ratio, oracle, and interest rate model. Markets are completely isolated, meaning a bad debt event in one market does not affect others. This isolation dramatically reduces systemic risk compared to shared-pool lending protocols like Aave.</p><p>MetaMorpho vaults abstract away the complexity of individual market selection by providing managed strategies. Vault curators allocate deposits across multiple Morpho Blue markets to optimize yield while managing risk. Users simply deposit into a vault and receive yield without needing to evaluate individual markets.</p></section>
      <section id="tokenomics"><h2>MORPHO Tokenomics</h2><p>MORPHO has a total supply of 1 billion tokens distributed across the community, team, investors, and ecosystem reserves. The token was initially non-transferable, with governance being its primary function during the early period. Token transferability was enabled through governance vote. MORPHO is used for protocol governance including decisions about fee parameters, ecosystem development, and treasury management. The Morpho protocol generates revenue through potential fee switches on lending markets.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>MORPHO is used for governance over protocol parameters and ecosystem development. The Morpho protocol enables permissionless lending market creation, curated yield strategies through MetaMorpho vaults, and optimized lending rates. The protocol serves DeFi protocols seeking tailored lending markets, risk managers creating curated vaults, and individual users seeking better lending and borrowing rates than traditional DeFi platforms offer.</p></section>
      <section id="how-to-buy"><h2>How to Buy MORPHO</h2><p>MORPHO is available on Coinbase, Binance, and other centralized exchanges. It can also be traded on Uniswap and other Ethereum DEXs. After purchasing, hold for governance participation or long-term exposure to the growth of the Morpho lending ecosystem. Store in MetaMask, Ledger, or any Ethereum-compatible wallet.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>Morpho Blue's permissionless nature means anyone can create markets, including poorly designed ones. While market isolation limits contagion, individual markets can still experience bad debt. MetaMorpho vault curators have significant discretion over capital allocation, introducing trust assumptions. Competition from Aave, Compound, and other lending protocols is ongoing. The immutable nature of Morpho Blue means any bugs in the core contract cannot be patched. Oracle failures in individual markets could lead to losses.</p></section>
    </LearnPageLayout>
  );
}
