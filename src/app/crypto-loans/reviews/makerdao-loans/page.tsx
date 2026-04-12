import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "MakerDAO Loans",
  slug: "makerdao-loans",
  rating: 4.5,
  description: "MakerDAO enables borrowing DAI stablecoin against crypto collateral through the original DeFi lending protocol.",
  pros: ["Original DeFi lending protocol", "DAI is highly liquid and widely adopted", "Multiple collateral types supported", "Battle-tested since 2017"],
  cons: ["Complex vault management", "Stability fees can change via governance", "Liquidation penalties are significant", "Ethereum mainnet gas costs"],
  bestFor: "Users seeking to mint DAI against crypto collateral through the most established DeFi protocol",
  affiliateUrl: "https://degen0x.com/go/makerdao",
  category: "crypto-loans",
};

export const metadata: Metadata = {
  title: `MakerDAO Loans Review (${CURRENT_YEAR}): DAI Vaults Guide | ${SITE_NAME}`,
  description: "In-depth MakerDAO review covering DAI borrowing, vault types, stability fees, liquidation mechanics, and the Sky protocol transition.",
  alternates: { canonical: "/crypto-loans/reviews/makerdao-loans" }};

export default function MakerDAOLoansReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      overview="MakerDAO is the original DeFi lending protocol, enabling users to deposit crypto collateral into vaults and mint DAI, a decentralized stablecoin. Launched in 2017, Maker has processed billions in loans and DAI remains one of the most widely used stablecoins in DeFi. The protocol supports multiple collateral types including ETH, WBTC, and various LP tokens, each with specific risk parameters set through governance. MakerDAO has evolved significantly, recently transitioning toward the Sky Protocol brand while maintaining core vault functionality. The DAI Savings Rate (DSR) provides yield for DAI holders, funded by stability fees from vault borrowers. MakerDAO is also one of the largest holders of real-world assets in DeFi, with billions in US Treasury exposure backing DAI."
      sections={[
        { id: "vault-system", title: "Vault System", content: "MakerDAO's vault system allows users to lock collateral and generate DAI against it. Each vault type has specific parameters including collateral ratio, stability fee (interest rate), and liquidation ratio. Popular vault types include ETH-A (standard), ETH-B (higher risk, lower ratio), and ETH-C (conservative, lower fee). When you open a vault, you deposit collateral and can generate DAI up to the maximum allowed by the collateral ratio. You must maintain your collateral ratio above the liquidation threshold, which varies by vault type. The system is entirely permissionless and operates through smart contracts on Ethereum, though interfaces like Oasis and DeFi Saver simplify vault management." },
        { id: "stability-fees", title: "Stability Fees and DSR", content: "Stability fees are the interest rate charged on DAI borrowed through vaults. These fees are set by MakerDAO governance and can change through governance votes, meaning your borrowing costs are not fixed. Fees vary by vault type and collateral, with more volatile collateral types generally carrying higher stability fees. Revenue from stability fees funds the DAI Savings Rate, which provides yield for DAI holders who deposit into the DSR contract. This creates a complete ecosystem where vault borrowers pay fees that fund returns for DAI savers. The relationship between stability fees and DSR is managed through governance to maintain DAI's peg and the protocol's economic sustainability." },
        { id: "liquidation", title: "Liquidation Mechanics", content: "MakerDAO uses a Dutch auction system for liquidations. When a vault's collateral ratio drops below the liquidation threshold, the collateral is auctioned through a decreasing price auction where the price starts high and drops until a buyer is found. The liquidation penalty is 13% for most vault types, which is higher than many other protocols. This penalty incentivizes active vault management and maintaining healthy collateral ratios. Vault owners lose their collateral up to the debt amount plus penalty, and receive any remaining surplus. Monitoring tools like DeFi Saver offer automated vault management that can adjust collateral ratios to prevent liquidation, which is highly recommended for active vault users." },
        { id: "rwa-integration", title: "Real-World Asset Integration", content: "MakerDAO has become one of the largest DeFi holders of real-world assets, with billions of dollars allocated to US Treasury bills and other traditional finance instruments. This diversification provides stable backing for DAI beyond crypto collateral and generates yield that supports the DSR. The RWA strategy represents MakerDAO's evolution from a purely crypto-collateral protocol to a hybrid system that bridges DeFi and traditional finance. This approach provides more stable revenue but also introduces dependencies on traditional financial infrastructure and regulatory considerations that pure DeFi protocols avoid." },
      ]}
      fees={{ "Stability Fee": "Variable (2-8% typical)", "Liquidation Penalty": "13%", "DSR Yield": "Variable (set by governance)", "Gas Costs": "Ethereum mainnet fees", "Origination Fee": "None" }}
      security={["Operational since 2017 with strong track record", "Multiple comprehensive audits", "Formal verification of core contracts", "Decentralized governance via MKR token", "Largest DeFi protocol by historical TVL", "Emergency shutdown mechanism"]}
      features={["Mint DAI against multiple collateral types", "DAI Savings Rate for yield", "Multiple vault types per collateral", "Real-world asset backing", "Decentralized governance", "Emergency shutdown protection", "Integration with major DeFi protocols"]}
      faqs={[
        { question: "What is the Sky Protocol transition?", answer: "MakerDAO has been transitioning its branding to Sky Protocol, with DAI being joined by USDS and MKR by SKY tokens. Core vault functionality remains similar, but the ecosystem is evolving with new products and governance structures. Existing vaults and DAI continue to function." },
        { question: "What is the minimum collateral ratio?", answer: "It depends on the vault type. ETH-A requires a minimum 145% collateral ratio, ETH-B requires 130%, and ETH-C requires 170%. Lower minimum ratios allow more borrowing but increase liquidation risk. Most experts recommend maintaining at least 200% for safety." },
      ]}
      relatedReviews={[{ name: "Liquity", slug: "liquity" }, { name: "Aave Loans", slug: "aave-loans" }]}
      relatedGuides={[{ title: "Overcollateralization Explained", href: "/crypto-loans/learn/overcollateralization-explained" }, { title: "Stablecoin Lending", href: "/crypto-loans/learn/stablecoin-lending" }]}
    />
  );
}
