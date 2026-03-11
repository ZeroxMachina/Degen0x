import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Aurelius Finance Review ${CURRENT_YEAR}: Mantle Lending Protocol`,
  description: "Complete Aurelius Finance review covering lending on Mantle network, CDP mechanics, yield strategies, and how this protocol serves the Mantle DeFi ecosystem.",
};

export default function AureliusReview() {
  return (
    <ReviewPage
      product={{ name: "Aurelius Finance", slug: "aurelius", rating: 3.5, description: "Aurelius Finance is a lending and borrowing protocol on Mantle network offering CDP-style borrowing alongside standard lending markets, designed specifically for the Mantle DeFi ecosystem.", pros: ["Mantle-native protocol with deep ecosystem integration", "CDP mechanics enable stablecoin minting against collateral", "Low gas costs on Mantle network", "Supports Mantle-native assets including MNT", "Combined lending and CDP model offers flexibility"], cons: ["Mantle ecosystem is still developing", "Limited TVL and user base", "Minimal track record and battle-testing", "CDP model adds complexity and liquidation risk", "Competing against larger multi-chain protocols"], bestFor: "DeFi users seeking CDP-style borrowing and lending on Mantle network", affiliateUrl: "#", category: "defi-lending" }}
      categoryName="DeFi Lending" categorySlug="defi-lending"
      overview="Aurelius Finance provides lending and CDP (Collateralized Debt Position) services on Mantle network, allowing users to deposit Mantle-native assets and either lend them for yield or mint stablecoins against their collateral. The protocol serves as DeFi infrastructure for the growing Mantle ecosystem, offering both traditional lending markets and a MakerDAO-inspired CDP mechanism. Aurelius benefits from Mantle network's growing ecosystem incentives and developer grants, though it faces the challenge of building user adoption on a relatively new network. The protocol's combined lending and CDP approach provides flexibility for users seeking different yield and borrowing strategies within the Mantle ecosystem."
      sections={[
        { id: "cdp-mechanics", title: "CDP Borrowing Mechanism", content: "Aurelius enables users to create Collateralized Debt Positions by depositing assets like ETH, MNT, or yield-bearing tokens as collateral and minting stablecoins against them. This CDP model is similar to MakerDAO's approach where users borrow a protocol-native stablecoin rather than borrowing from lending pools. The CDP mechanism provides an alternative to pool-based borrowing, with different risk and cost dynamics. Borrowers pay a stability fee rather than a variable interest rate, providing more predictable borrowing costs. The CDP stablecoin can be used within the Mantle DeFi ecosystem for additional yield opportunities." },
        { id: "lending-markets", title: "Standard Lending Markets", content: "Alongside CDP borrowing, Aurelius operates standard lending pools where suppliers deposit assets to earn variable interest. The lending markets support Mantle-native tokens and major bridged assets. Interest rates follow algorithmic curves based on utilization. The dual model of CDP and lending provides users with options: those wanting predictable borrowing costs use CDPs, while those comfortable with variable rates use lending pools. The lending pools also provide utility for the protocol's CDP stablecoin, creating lending markets for users who want to earn yield on the stablecoin." },
        { id: "mantle-integration", title: "Mantle Ecosystem Role", content: "Aurelius has positioned itself as a core DeFi infrastructure provider for Mantle, integrating with other Mantle protocols and participating in the network's ecosystem development programs. The protocol benefits from Mantle's treasury-funded incentive programs that bootstrap DeFi activity on the network. Mantle's support for DeFi development has helped Aurelius attract initial liquidity and users. However, the protocol's success is closely tied to Mantle's ability to grow its overall DeFi ecosystem and compete with established L2 networks." },
        { id: "risks", title: "Risk Assessment", content: "Aurelius carries risks typical of newer protocols on developing networks. The Mantle ecosystem has lower overall activity than established L2s, resulting in less liquidity depth and fewer active liquidators. The CDP mechanism introduces specific risks including stablecoin de-peg potential and liquidation risk if collateral values decline. The protocol's limited track record means less stress-testing under adverse market conditions. Users should start with small positions and maintain conservative collateral ratios, treating Aurelius as an early-stage DeFi opportunity with corresponding risk." },
      ]}
      fees={{ "CDP Stability Fee": "Variable (2-5%)", "Supply APY": "Variable (2-8%)", "Borrow APR": "Variable (4-15%)", "Liquidation Penalty": "5-15%", "Gas Costs": "Low on Mantle network" }}
      security={["Smart contract audits completed", "Oracle price validation for CDPs", "Automated CDP liquidation mechanics", "Standard lending pool safety features", "Governance-controlled risk parameters"]}
      features={["CDP-style stablecoin minting", "Standard lending and borrowing markets", "Mantle-native asset support", "Low gas costs on Mantle", "Dual lending and CDP borrowing model", "Ecosystem integration with Mantle DeFi", "Governance-controlled parameters"]}
      faqs={[
        { question: "How do Aurelius CDPs work?", answer: "You deposit collateral (like ETH or MNT) and can mint stablecoins against it at a predetermined collateral ratio. You pay a stability fee rather than variable interest. If your collateral value drops below the liquidation threshold, your position is liquidated." },
        { question: "Is Aurelius safe on Mantle?", answer: "Aurelius has been audited but has limited real-world testing. Mantle itself is a newer network. Start with small positions and maintain conservative collateral ratios well above minimum requirements." },
        { question: "Should I use the CDP or lending market?", answer: "Use CDPs if you want predictable borrowing costs and are comfortable managing collateral ratios. Use lending pools if you prefer variable rates with potentially lower costs during low-utilization periods." },
      ]}
      relatedReviews={[{ name: "Init Capital", slug: "init-capital" }, { name: "Mendi", slug: "mendi" }, { name: "Lendle", slug: "lendle" }]}
      relatedGuides={[{ title: "DeFi on Mantle", href: "/defi-lending/learn/defi-on-mantle" }, { title: "Fixed vs Variable Lending", href: "/defi-lending/compare/fixed-vs-variable-lending" }]}
    />
  );
}
