import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is an Initial DEX Offering (IDO)? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what an Initial DEX Offering (IDO) is, how token launches work on decentralized exchanges, and how IDOs compare to ICOs and IEOs.",
  keywords: ["initial dex offering", "IDO", "token launch", "DEX launch", "launchpad crypto"],
};

export default function InitialDexOfferingPage() {
  return (
    <LearnPageLayout title="What Is an Initial DEX Offering (IDO)?" categoryName="Glossary" categorySlug="learn/glossary" readTime="4 min" intro="An Initial DEX Offering (IDO) is a token launch method where a new cryptocurrency is offered to the public through a decentralized exchange (DEX) or launchpad platform. Unlike ICOs (Initial Coin Offerings) that send funds directly to a project team, IDOs typically use smart contract-based mechanisms to create immediate liquidity and fair price discovery. IDOs have become the dominant token launch method in DeFi since 2021."
      toc={[{ id: "definition", title: "Definition", level: 2 },{ id: "how-it-works", title: "How It Works", level: 2 },{ id: "comparison", title: "IDO vs ICO vs IEO", level: 2 }]}
      faqs={[
        { question: "How can I participate in an IDO?", answer: "IDO participation typically requires holding the launchpad platform's token (like staking CAKE for PancakeSwap launches or holding tier-qualifying amounts on launchpads like DAO Maker or Seedify). Many IDOs use a lottery or tiered allocation system where larger stakers receive guaranteed allocations while smaller participants enter a lottery. Whitelisting through social media tasks or community participation is also common." },
        { question: "Are IDOs safe?", answer: "IDOs carry significant risk. While the decentralized launch mechanism itself is transparent, the underlying project may still fail, deliver a poor product, or turn out to be a scam. The immediate trading available after IDOs can lead to extreme price volatility. Always research the team, audit status, tokenomics, and vesting schedules before participating in any IDO." },
      ]}
      relatedArticles={[
        { title: "DEX", href: "/learn/glossary/dex", category: "Glossary" },
        { title: "Liquidity Pool", href: "/learn/glossary/liquidity-pool", category: "Glossary" },
        { title: "How to Evaluate an ICO", href: "/learn/how-to-evaluate-ico", category: "Learn" },
        { title: "Bonding Curve", href: "/learn/glossary/bonding-curve", category: "Glossary" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>An Initial DEX Offering is a fundraising and token distribution method conducted through a decentralized exchange or dedicated launchpad platform. When a project conducts an IDO, it creates a liquidity pool on a DEX with its new token paired against a base currency (typically ETH, USDC, or the chain's native token). Participants purchase the new token at launch, and the pooled funds create immediate trading liquidity. This eliminates the need for centralized exchange listings to establish a market. IDO platforms like DAO Maker, Seedify, Polkastarter, and Camelot manage the launch process, including vetting projects, managing allocations, and coordinating the liquidity setup.</p></section>
      <section id="how-it-works"><h2>How It Works</h2><p>A typical IDO follows several phases. First, the project is vetted and accepted by a launchpad platform. A token sale event is announced with details on allocation size, price, and participation requirements. Eligible participants commit funds during a subscription period, often through a tiered system based on their launchpad token holdings. At the launch time, the smart contract distributes tokens and creates liquidity on the DEX simultaneously, enabling immediate trading. Some IDOs use Liquidity Bootstrapping Pools (LBPs), which start at a high price and decrease over time to reduce front-running and enable fairer price discovery. Vesting schedules may release tokens gradually to prevent immediate sell pressure.</p></section>
      <section id="comparison"><h2>IDO vs ICO vs IEO</h2><p>ICOs (Initial Coin Offerings), popular in 2017-2018, involved sending funds directly to a project wallet with tokens distributed later — many turned out to be scams with no accountability. IEOs (Initial Exchange Offerings) improved on this by having centralized exchanges vet projects and handle the sale, but required exchange approval and centralized infrastructure. IDOs combine the accessibility of ICOs with better safeguards: smart contracts enforce automatic token distribution, liquidity is locked programmatically, and trading begins immediately. However, IDOs still require due diligence — the decentralized nature means there is less regulatory oversight, and project quality varies dramatically. The launchpad's reputation serves as an informal quality filter, but is not a guarantee of project legitimacy.</p></section>
    </LearnPageLayout>
  );
}
