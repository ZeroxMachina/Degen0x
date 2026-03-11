import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Songbird (SGB)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Songbird (SGB), Flare's canary network for testing. Discover how it works, tokenomics, use cases, and how to buy SGB.",
};

export default function SongbirdPage() {
  return (
    <LearnPageLayout
      title="What Is Songbird (SGB)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Songbird is the canary network for the Flare blockchain, serving as a live testing environment where new features and governance proposals are battle-tested before deployment on Flare mainnet. Similar to Kusama's relationship with Polkadot, Songbird operates as a fully functional blockchain with real economic value, its own token (SGB), and a complete ecosystem including FTSO oracle and DeFi applications."
      toc={[
        { id: "what-is", title: "What Is Songbird?", level: 2 },
        { id: "how-it-works", title: "How Does Songbird Work?", level: 2 },
        { id: "tokenomics", title: "SGB Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy SGB", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Songbird?",
          answer:
            "Songbird is Flare's canary network where new features are tested in a live environment with real value before deploying to Flare mainnet. It has its own token, FTSO oracle system, and DeFi ecosystem.",
        },
        {
          question: "Where can I buy SGB?",
          answer:
            "SGB is available on BlazeSwap DEX on the Songbird network and some smaller exchanges. Liquidity is limited compared to FLR.",
        },
        {
          question: "Is Songbird a good investment?",
          answer:
            "Songbird serves an important role in the Flare ecosystem but has limited liquidity and is a test network with inherent additional risks. This is not financial advice. Do your own research.",
        },
      ]}
      relatedArticles={[
        { title: "Best Cryptos to Buy", href: "/investing/best/cryptos-to-buy", category: "Investing" },
        { title: "How to Invest in Crypto", href: "/investing/learn/how-to-invest-in-crypto", category: "Investing" },
        { title: "Polkadot", href: "/investing/crypto/polkadot", category: "Investing" },
      ]}
    >
      <h2 id="what-is">What Is Songbird?</h2>
      <p>
        Songbird was launched in September 2021, preceding Flare&apos;s mainnet launch, and was airdropped to the same XRP holders who received FLR tokens. The network was designed to serve as a proving ground for Flare&apos;s technology, allowing new protocol features, governance proposals, and smart contract updates to be validated in a live economic environment before being deployed on the main Flare network.
      </p>
      <p>
        Despite being a canary network, Songbird has developed its own independent ecosystem with DeFi protocols, NFT projects, and an active FTSO delegation community. The network mirrors Flare&apos;s architecture including the FTSO oracle system and State Connector, ensuring that features tested on Songbird will behave identically when deployed on Flare mainnet. This approach provides an extra layer of safety for the Flare ecosystem.
      </p>

      <h2 id="how-it-works">How Does Songbird Work?</h2>
      <p>
        Songbird runs the same codebase as Flare with identical consensus mechanisms, FTSO oracle system, and smart contract compatibility. New protocol updates are first deployed on Songbird where they undergo real-world testing with actual economic stakes. If the updates perform well, they are then proposed for Flare mainnet deployment. Validators, data providers, and dApps on Songbird operate independently from their Flare counterparts.
      </p>
      <p>
        Users can wrap SGB and delegate to FTSO data providers to earn oracle rewards, just as FLR holders do on Flare. DeFi applications on Songbird include DEXs, lending protocols, and yield aggregators. The governance process allows SGB holders to vote on protocol changes that affect the Songbird network specifically, giving the community direct input on the testing and development process.
      </p>

      <h2 id="tokenomics">SGB Tokenomics</h2>
      <p>
        SGB has a total supply of approximately 15 billion tokens. The token is used for FTSO delegation rewards, gas fees on the Songbird network, governance voting, and wrapping for DeFi participation. SGB inflation is directed to FTSO data provider rewards and validator incentives, mirroring Flare&apos;s economic model. The smaller supply compared to FLR reflects Songbird&apos;s role as a complementary testing network.
      </p>

      <h2 id="use-cases">Key Use Cases</h2>
      <p>
        Songbird serves as a live testing environment for Flare protocol upgrades, FTSO delegation for oracle rewards, DeFi participation through Songbird-native protocols, governance experimentation before Flare mainnet votes, and development testing for dApps planning to deploy on Flare. The network provides developers with a real economic environment to stress-test their applications.
      </p>

      <h2 id="how-to-buy">How to Buy SGB</h2>
      <p>
        To buy SGB, use the BlazeSwap DEX on the Songbird network or check smaller exchanges for availability. Bridge assets to the Songbird network and swap for SGB. After purchasing, wrap SGB and delegate to FTSO data providers to earn rewards. Store SGB in MetaMask with the Songbird network configured, or use a Bifrost wallet.
      </p>

      <h2 id="risks">Risks and Considerations</h2>
      <p>
        As a canary network, Songbird inherently carries higher risk than mainnet deployments. New, untested features are deployed here first, meaning smart contract bugs or protocol issues may surface on Songbird before being caught. Liquidity is significantly lower than on Flare or major chains, making it difficult to enter or exit large positions without substantial slippage.
      </p>
      <p>
        The long-term value proposition of Songbird depends on Flare&apos;s continued need for a canary network and the independent ecosystem&apos;s growth. Limited exchange listings reduce accessibility for most investors. The large token supply creates dilution risk. If Flare&apos;s ecosystem fails to grow, Songbird&apos;s relevance diminishes accordingly. Regulatory treatment of canary network tokens is ambiguous.
      </p>
    </LearnPageLayout>
  );
}
