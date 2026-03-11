import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Velodrome Finance (VELO)? Price, Guide & How to Buy (${CURRENT_YEAR}) | CryptoDegen`,
  description:
    "Learn about Velodrome Finance (VELO), the dominant DEX and liquidity layer on Optimism. Discover VELO tokenomics, ve(3,3) mechanics, and how to buy.",
};

export default function VelodromePage() {
  return (
    <LearnPageLayout
      title="What Is Velodrome Finance (VELO)? Price, Guide & How to Buy"
      categoryName="Investing"
      categorySlug="investing"
      readTime="8 min read"
      intro="Velodrome Finance (VELO) is the dominant decentralized exchange and liquidity hub on the Optimism Layer 2 network. Built on the Solidly ve(3,3) model pioneered by Andre Cronje, Velodrome uses vote-escrow tokenomics and emission voting to efficiently direct liquidity incentives across the Optimism ecosystem."
      toc={[
        { id: "what-is", title: "What Is Velodrome Finance?", level: 2 },
        { id: "how-it-works", title: "How Does Velodrome Finance Work?", level: 2 },
        { id: "tokenomics", title: "VELO Tokenomics", level: 2 },
        { id: "use-cases", title: "Key Use Cases", level: 2 },
        { id: "how-to-buy", title: "How to Buy VELO", level: 2 },
        { id: "risks", title: "Risks and Considerations", level: 2 },
      ]}
      faqs={[
        {
          question: "What is Velodrome Finance?",
          answer:
            "Velodrome is the primary DEX on Optimism using the ve(3,3) model. veVELO holders vote on which pools receive emissions, creating a marketplace for liquidity incentives that efficiently directs trading liquidity across the ecosystem.",
        },
        {
          question: "Where can I buy VELO?",
          answer:
            "VELO can be purchased on Velodrome itself on Optimism. It is also available on some centralized exchanges like Gate.io.",
        },
        {
          question: "Is Velodrome Finance a good investment?",
          answer:
            "VELO has established dominance on Optimism with strong protocol revenue. Its success depends on Optimism ecosystem growth and the sustainability of the ve(3,3) incentive model.",
        },
      ]}
      relatedArticles={[
        {
          title: "Best Cryptos to Buy",
          href: "/investing/best/cryptos-to-buy",
          category: "Investing",
        },
        {
          title: "How to Invest in Crypto",
          href: "/investing/learn/how-to-invest-in-crypto",
          category: "Investing",
        },
      ]}
    >
      <section id="what-is">
        <h2>What Is Velodrome Finance?</h2>
        <p>
          Velodrome Finance is the central liquidity hub on the Optimism Layer 2 network, handling the majority of DEX trading volume on the chain. Launched in June 2022, Velodrome adapted the Solidly ve(3,3) model originally created by Andre Cronje on Fantom and significantly improved its design to create a sustainable liquidity incentive marketplace. The protocol has become essential infrastructure for the Optimism ecosystem, serving as the primary venue for token swaps and liquidity provisioning.
        </p>
        <p>
          Velodrome V2 introduced concentrated liquidity pools, improved governance mechanics, and enhanced fee structures. The protocol's success on Optimism led to the creation of Aerodrome Finance, its sister protocol on Base chain, further extending the ve(3,3) model across the Superchain ecosystem.
        </p>
      </section>

      <section id="how-it-works">
        <h2>How Does Velodrome Finance Work?</h2>
        <p>
          The ve(3,3) model combines vote-escrow governance with emissions incentives. VELO token holders lock their tokens to receive veVELO NFTs, which grant voting power to direct weekly VELO emissions toward specific liquidity pools. Protocols that want deep liquidity for their tokens on Optimism incentivize veVELO holders to vote for their pools through bribes (direct incentive payments). In return, veVELO holders earn trading fees from pools they vote for plus any bribe rewards.
        </p>
        <p>
          This creates a self-reinforcing cycle: protocols pay bribes to attract emissions, emissions incentivize LPs to provide liquidity, deep liquidity attracts trading volume, and trading fees reward veVELO voters. The model has proven highly efficient at directing liquidity to where it is most needed within the ecosystem.
        </p>
      </section>

      <section id="tokenomics">
        <h2>VELO Tokenomics</h2>
        <p>
          VELO has a weekly emission schedule that decays over time, gradually reducing new token supply entering the market. veVELO holders receive a proportional rebase to maintain their voting power as new emissions are distributed. The lock period for veVELO is up to four years, with longer locks providing more voting power. Protocol revenue comes from trading fees and is distributed directly to veVELO voters based on their gauge votes. The bribe market creates additional yield for lockers beyond just trading fees.
        </p>
      </section>

      <section id="use-cases">
        <h2>Key Use Cases</h2>
        <p>
          VELO is used for locking as veVELO to vote on emissions and earn fees plus bribes. The protocol serves as the primary liquidity infrastructure on Optimism, enabling token swaps, liquidity provision, and ecosystem-wide liquidity coordination. Protocols use Velodrome as their primary tool for bootstrapping and maintaining liquidity for their tokens. The bribe marketplace has become a critical coordination mechanism for the Optimism DeFi ecosystem.
        </p>
      </section>

      <section id="how-to-buy">
        <h2>How to Buy VELO</h2>
        <p>
          VELO is primarily purchased on Velodrome Finance itself on Optimism. Some centralized exchanges like Gate.io also list the token. To buy, bridge ETH to Optimism using the official bridge or a third-party service, connect your wallet to Velodrome, and swap ETH for VELO. After purchasing, many holders lock VELO as veVELO to earn fees and bribe rewards. Store in MetaMask configured for Optimism.
        </p>
      </section>

      <section id="risks">
        <h2>Risks and Considerations</h2>
        <p>
          VELO's value is tightly coupled to Optimism ecosystem health and trading activity. Weekly emissions create ongoing dilution for non-locked holders. The ve(3,3) model's sustainability depends on continued protocol participation in the bribe market. Competition from Uniswap on Optimism and potential new DEX entrants is a concern. The four-year lock for maximum veVELO creates significant liquidity risk for governance participants. Smart contract risk and the complexity of the ve(3,3) mechanism are additional considerations.
        </p>
      </section>
    </LearnPageLayout>
  );
}
