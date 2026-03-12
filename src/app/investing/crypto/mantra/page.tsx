import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is MANTRA (OM)? Price, Guide & How to Buy (${CURRENT_YEAR}) | degen0x`,
  description: "Learn about MANTRA (OM), the Layer 1 blockchain for real-world asset tokenization. Discover OM tokenomics, RWA features, and how to buy.",
};

export default function MantraPage() {
  return (
    <LearnPageLayout
      title="What Is MANTRA (OM)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="MANTRA (OM) is a Layer 1 blockchain built on the Cosmos SDK specifically designed for real-world asset (RWA) tokenization. The protocol provides a regulatory-compliant infrastructure for tokenizing and trading assets like real estate, securities, and commodities on-chain. MANTRA positions itself at the intersection of traditional finance and DeFi."
      toc={[
        { id: "what-is", title: "what-is", level: 2 },
        { id: "what-is-mantra", title: "What Is MANTRA?", level: 2 },
        { id: "how-it-works", title: "how-it-works", level: 2 },
        { id: "how-does-mantra-work", title: "How Does MANTRA Work?", level: 2 },
        { id: "tokenomics", title: "tokenomics", level: 2 },
        { id: "om-tokenomics", title: "OM Tokenomics", level: 2 },
        { id: "use-cases", title: "use-cases", level: 2 },
        { id: "key-use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "how-to-buy", level: 2 },
        { id: "how-to-buy-om", title: "How to Buy OM", level: 2 },
        { id: "risks", title: "risks", level: 2 },
        { id: "risks-and-considerations", title: "Risks and Considerations", level: 2 }
      ]}
      faqs={[
        { question: "What is MANTRA?", answer: "MANTRA is a Cosmos-based Layer 1 blockchain focused on real-world asset tokenization. OM is the native token used for staking, governance, and transaction fees on the network." },
        { question: "Where can I buy OM?", answer: "OM is available on Binance, OKX, Bybit, KuCoin, and other exchanges." },
        { question: "Is MANTRA a good investment?", answer: "MANTRA targets the growing RWA tokenization market with a regulatory-focused approach. Success depends on attracting real-world asset issuers and building institutional partnerships." },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
      ]}
    >
      <section id="what-is"><h2>What Is MANTRA?</h2><p>MANTRA is a purpose-built Layer 1 blockchain designed to serve as the infrastructure layer for tokenizing real-world assets. Built using the Cosmos SDK and leveraging the IBC protocol for interoperability, MANTRA provides the compliance tools, identity verification systems, and permissioned access controls necessary for institutional-grade asset tokenization. The chain targets a multi-trillion-dollar opportunity in bringing traditional financial assets on-chain.</p><p>The MANTRA team has pursued regulatory licenses and partnerships in key markets, positioning the protocol as a compliant bridge between traditional finance and blockchain technology. The project has secured partnerships with real estate developers, financial institutions, and government entities exploring tokenized asset issuance.</p></section>
      <section id="how-it-works"><h2>How Does MANTRA Work?</h2><p>MANTRA uses a proof-of-stake consensus mechanism through the Cosmos SDK's Tendermint BFT. The chain includes built-in compliance modules for KYC/AML verification, permissioned token transfers, and regulatory reporting. Asset issuers can create tokenized representations of real estate, bonds, equities, and other assets with configurable compliance rules. DeFi applications on MANTRA can interact with these tokenized assets while respecting regulatory constraints.</p><p>The IBC integration enables MANTRA to connect with other Cosmos ecosystem chains, providing liquidity access and cross-chain functionality for tokenized assets. OM token holders participate in network security through staking and governance over protocol parameters.</p></section>
      <section id="tokenomics"><h2>OM Tokenomics</h2><p>OM serves as the native gas token, staking asset, and governance token of the MANTRA chain. Stakers earn rewards from transaction fees and network inflation. The token underwent a migration from an ERC-20 token to the native MANTRA chain token. OM governance allows holders to vote on protocol upgrades, parameter changes, and ecosystem development funding. The tokenomics are designed to incentivize validators and delegators who secure the network.</p></section>
      <section id="use-cases"><h2>Key Use Cases</h2><p>OM is used for network staking, governance, and transaction fees on the MANTRA chain. The protocol enables tokenization of real estate, bonds, and other traditional assets, compliant DeFi trading and lending of tokenized assets, and cross-chain asset transfers through IBC. The platform targets institutional users, asset managers, and traditional finance entities looking to bring assets on-chain within a regulatory-compliant framework.</p></section>
      <section id="how-to-buy"><h2>How to Buy OM</h2><p>OM is available on Binance, OKX, Bybit, KuCoin, and other major exchanges. After purchasing, OM can be staked on the MANTRA chain to earn staking rewards and participate in governance. Store in Keplr or other Cosmos-compatible wallets for native chain functionality.</p></section>
      <section id="risks"><h2>Risks and Considerations</h2><p>MANTRA's success depends on attracting real-world asset issuers and institutional adoption, which is uncertain and may take considerable time. The RWA tokenization space is competitive with established players like Ondo and Centrifuge. Regulatory landscapes differ by jurisdiction and remain in flux. The price of OM experienced significant volatility including a flash crash event that raised concerns about market structure and token holder concentration. The protocol's relatively early stage means many planned features are still in development.</p></section>
    </LearnPageLayout>
  );
}
