import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Flare (FLR)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Flare (FLR), the blockchain for data with enshrined oracle protocols. Discover how it works, tokenomics, use cases, and how to buy FLR.",
};

export default function FlarePage() {
  return (
    <LearnPageLayout
      title="What Is Flare (FLR)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Flare is an EVM-compatible Layer 1 blockchain that uniquely enshrines oracle protocols directly into its consensus layer. Through the Flare Time Series Oracle (FTSO) and State Connector, Flare provides decentralized data feeds and cross-chain state verification as native chain features, enabling smart contracts to access real-world and cross-chain data without relying on third-party oracle providers."
      toc={[
        { id: "what-is", title: "What Is Flare?", level: 2 },
        { id: "how-it-works", title: "How Does Flare Work?", level: 2 },
        { id: "tokenomics", title: "FLR Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy FLR", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Flare?",
          answer:
            "Flare is an EVM-compatible Layer 1 blockchain with oracle protocols enshrined in its consensus. FTSO provides decentralized price feeds and State Connector verifies cross-chain state, both as native chain features.",
        },
        {
          question: "Where can I buy FLR?",
          answer:
            "FLR is available on Coinbase, Kraken, Gate.io, Bitfinex, and other exchanges. It trades against USDT, USD, and BTC pairs.",
        },
        {
          question: "Is Flare a good investment?",
          answer:
            "Flare uniquely integrates oracles into its consensus layer, but ecosystem growth and adoption are still early. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Chainlink", href: "/investing/crypto/chainlink", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Flare?</h2>
      <p>
        Flare was founded by Hugo Philion and Sean Rowan and launched its mainnet in January 2023. The project originated from the XRP community with the goal of bringing smart contract functionality to non-smart contract chains, but evolved into a broader vision of creating a blockchain optimized for decentralized data access. Flare conducted one of the largest airdrops in crypto history, distributing FLR tokens to XRP holders.
      </p>
      <p>
        The key innovation is that Flare&apos;s oracle infrastructure is not a separate third-party service but a core protocol feature. The FTSO system incentivizes data providers through the chain&apos;s own inflation mechanism, making price feeds a public good rather than a paid service. The State Connector allows smart contracts to verify events on other blockchains like Bitcoin, XRP Ledger, and Ethereum with cryptographic proofs.
      </p>

      <h2 id="how-it-works">How Does Flare Work?</h2>
      <p>
        The FTSO uses a network of independent data providers who submit price data for supported assets every few minutes. Submissions are weighted by the delegated FLR vote power each provider has received from token holders. Prices are calculated as a weighted median, and providers whose submissions are closest to the median earn rewards. This creates a decentralized, incentive-aligned price oracle without external dependencies.
      </p>
      <p>
        The State Connector enables smart contracts to securely query the state of external blockchains. Attestation providers independently verify external chain events and submit proofs to the State Connector protocol. Once consensus is reached, verified event data becomes available to any smart contract on Flare. The EVM compatibility means existing Ethereum tools and dApps can deploy on Flare with minimal modifications.
      </p>

      <h2 id="tokenomics">FLR Tokenomics</h2>
      <p>
        FLR has a total supply of approximately 100 billion tokens, with distribution occurring through the original airdrop and ongoing monthly FlareDrops. The token is used for FTSO delegation (earning data provider rewards), wrapping for governance participation, gas fees, and staking. Inflation is directed to FTSO data provider rewards and validator rewards, incentivizing participation in the oracle and consensus systems.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Flare enables DeFi applications with native oracle access, cross-chain asset bridging through the State Connector, bringing smart contracts to non-smart contract chains like Bitcoin and XRP, decentralized price feed provisioning as a public good, and trustless cross-chain verification for institutional applications. The platform is positioned to serve protocols that need reliable data without depending on external oracle services.
      </p>

      <h2 id="how-to-buy">How to Buy FLR</h2>
      <p>
        To buy FLR, create an account on Coinbase, Kraken, or Gate.io. Complete identity verification, deposit funds, and purchase FLR tokens. After purchasing, wrap FLR and delegate to FTSO data providers to earn rewards. Claim ongoing FlareDrop distributions if eligible. Store FLR in MetaMask (with Flare network added) or a Ledger hardware wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        Flare&apos;s large total supply of 100 billion tokens creates significant dilution risk, especially with ongoing FlareDrop distributions. The FTSO system&apos;s security depends on sufficient FLR delegation to honest data providers, and concentration of delegation could affect data quality. Building a competitive DeFi ecosystem from scratch against established chains with larger developer communities is challenging.
      </p>
      <p>
        The XRP community connection, while providing initial distribution, may not translate into sustained ecosystem development. Competition from chains with dedicated oracle partnerships (like Pyth on Solana) challenges the embedded oracle advantage. The State Connector&apos;s cross-chain verification has limited chain coverage compared to broader interoperability protocols. Regulatory uncertainty around token airdrops and DeFi infrastructure applies.
      </p>
    </LearnPageLayout>
  );
}
