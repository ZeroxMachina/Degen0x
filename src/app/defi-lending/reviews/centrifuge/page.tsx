import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Centrifuge Review (${CURRENT_YEAR}): Real-World Asset DeFi Lending | degen0x`,
  description: "In-depth Centrifuge review covering real-world asset tokenization, Tinlake pools, CFG token, and bridging traditional finance with DeFi lending.",
  alternates: { canonical: "/defi-lending/reviews/centrifuge" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/defi-lending/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Centrifuge', },
  ],
};

export default function CentrifugeReview() {
  return (
    <>
      <ReviewPage
      product={{
        name: "Centrifuge",
        slug: "centrifuge",
        rating: 4.2,
        description: "Centrifuge is a decentralized protocol that tokenizes real-world assets like invoices, real estate, and trade receivables to bring them on-chain as collateral for DeFi lending.",
        pros: ["Pioneering real-world asset tokenization in DeFi", "Diversification beyond crypto-native collateral", "Integration with MakerDAO for DAI minting", "Institutional-grade legal structures"],
        cons: ["Complex off-chain legal and compliance requirements", "Illiquid asset pools with lock-up periods", "Dependent on off-chain asset originators quality"],
        bestFor: "Investors seeking DeFi yields backed by real-world assets",
        affiliateUrl: "#",
        category: "defi-lending",
      }}
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      overview="Centrifuge is a pioneering protocol in the real-world asset (RWA) tokenization space, bridging traditional finance assets with DeFi liquidity. The protocol enables businesses to tokenize their real-world assets such as trade invoices, real estate mortgages, consumer loans, and revenue-based financing into NFTs that can be used as collateral in DeFi lending pools. Through its Tinlake application and the newer Centrifuge App, asset originators can create pools backed by these tokenized assets and access decentralized financing from DeFi lenders. The protocol has been instrumental in expanding MakerDAO's real-world asset vault strategy, serving as one of the primary conduits for bringing off-chain collateral into the DAI ecosystem. Centrifuge operates its own blockchain built on Substrate and connected to the Polkadot ecosystem, while its lending pools are deployed on Ethereum for maximum DeFi composability."
      sections={[
        { id: "tinlake-pools", title: "Tinlake Lending Pools", content: "Tinlake is Centrifuge's flagship lending application that structures real-world asset pools into tranched investment opportunities. Each pool is created by an asset originator who tokenizes their real-world assets as NFTs on the Centrifuge chain and uses them as collateral. The pools are structured into two tranches: the DROP (senior) tranche, which receives a fixed yield and has priority in liquidation scenarios, and the TIN (junior) tranche, which earns a variable yield and absorbs first losses. This tranching mechanism allows investors with different risk appetites to participate, with DROP investors getting more conservative returns and TIN investors taking on more risk for potentially higher yields. The dual-tranche structure is modeled after traditional structured finance practices and provides institutional-grade risk management." },
        { id: "rwa-tokenization", title: "Real-World Asset Tokenization", content: "Centrifuge's tokenization process transforms off-chain assets into on-chain representations. Asset originators work with legal counsel to create special purpose vehicles (SPVs) that hold the underlying assets. These assets are then represented as NFTs on the Centrifuge chain, with each NFT containing metadata about the asset including its value, maturity, and other relevant attributes. The legal structure ensures that token holders have genuine claims on the underlying assets, providing a crucial link between on-chain representations and off-chain legal rights. This process has been refined through partnerships with legal firms specializing in structured finance and securities law." },
        { id: "cfg-token", title: "CFG Token & Centrifuge Chain", content: "The CFG token is the native token of the Centrifuge blockchain, used for governance, staking, and transaction fees on the network. The Centrifuge chain is built on Substrate and connected to Polkadot as a parachain, providing interoperability with other chains in the ecosystem. CFG holders govern the protocol through on-chain voting, including decisions about supported asset types, risk parameters, and protocol upgrades. The token also incentivizes participation in the network through staking rewards for validators and collators who secure the chain." },
        { id: "institutional-adoption", title: "Institutional Adoption & Partnerships", content: "Centrifuge has achieved significant institutional adoption, most notably through its deep integration with MakerDAO. Several Centrifuge pools have been approved as collateral types in MakerDAO, allowing real-world assets to back DAI minting. This partnership has been one of the largest real-world asset integrations in DeFi history. Centrifuge has also partnered with BlockTower Capital, Anemoy, and other institutional players to bring diverse asset classes on-chain. The protocol's institutional-grade legal structures and compliance framework make it suitable for regulated entities looking to participate in DeFi while maintaining their compliance obligations." },
      ]}
      fees={{ "Protocol Fee": "Set by governance on each pool", "Origination Fee": "Varies by asset originator", "Gas Costs": "Standard Ethereum gas fees for pool interactions", "CFG Chain Fees": "Minimal fees on the Centrifuge chain" }}
      security={["Legal SPV structures for asset protection", "Tranched pool design for risk management", "Smart contract audits of Tinlake and pool contracts", "On-chain governance through CFG token", "Third-party asset valuations and audits", "Continuous monitoring of asset originator performance"]}
      features={["Real-world asset tokenization as NFTs", "Tranched investment pools (DROP/TIN)", "MakerDAO integration for DAI backing", "Centrifuge Chain on Polkadot ecosystem", "CFG governance token", "Institutional-grade legal frameworks"]}
      faqs={[
        { question: "What types of real-world assets does Centrifuge support?", answer: "Centrifuge supports a wide range of real-world assets including trade invoices, real estate mortgages, revenue-based financing, consumer loans, and cargo and freight receivables. Each asset type requires specific legal structuring and valuation processes before being tokenized on-chain." },
        { question: "How are Centrifuge pools different from Aave or Compound?", answer: "Unlike Aave or Compound which use crypto assets as collateral, Centrifuge pools are backed by real-world assets. This means yields are generated from real economic activity rather than crypto market dynamics. However, the assets are less liquid and have different risk profiles than crypto collateral." },
        { question: "What happens if an asset originator defaults?", answer: "The legal SPV structure is designed to protect investors in default scenarios. The DROP tranche has priority over TIN in liquidation, and legal agreements govern the recovery process. However, recovery of real-world assets can be slow and uncertain compared to on-chain liquidations." },
      ]}
      relatedReviews={[{ name: "Goldfinch", slug: "/defi-lending/reviews/goldfinch" }, { name: "Maple Finance", slug: "/defi-lending/reviews/maple-finance" }]}
      relatedGuides={[{ title: "Real World Asset Lending", href: "/defi-lending/learn/real-world-asset-lending" }, { title: "DeFi Risks Guide", href: "/defi-lending/learn/defi-risks-guide" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
    </>
  );
}
