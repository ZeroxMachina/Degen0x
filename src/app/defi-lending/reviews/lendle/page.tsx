import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Lendle Review ${CURRENT_YEAR}: Mantle Lending Protocol`,
  description: "In-depth Lendle review covering Aave V2-based lending on Mantle, yield rates, LEND token incentives, and the protocol's role in Mantle DeFi ecosystem.",
  alternates: { canonical: "/defi-lending/reviews/lendle" }};

export default function LendleReview() {
  return (
    <ReviewPage
      product={{ name: "Lendle", slug: "lendle", rating: 3.7, description: "Lendle is an Aave V2-based lending protocol on Mantle network offering lending and borrowing markets with LEND token incentives, positioning itself as a core DeFi infrastructure provider for the Mantle ecosystem.", pros: ["Leading lending protocol on Mantle network", "Aave V2 proven architecture for reliable lending", "LEND token rewards enhance effective yields", "Mantle ecosystem grant support", "Low gas costs on Mantle network"], cons: ["Mantle ecosystem still growing and developing", "Aave V2 architecture lacks V3 improvements", "LEND token has limited trading liquidity", "Competing for attention against Mantle's own ecosystem initiatives", "Lower TVL than lending protocols on established L2s"], bestFor: "DeFi users seeking lending opportunities on Mantle network with token incentives", affiliateUrl: "#", category: "defi-lending" }}
      categoryName="DeFi Lending" categorySlug="defi-lending"
      overview="Lendle has established itself as one of the primary lending protocols on Mantle network, providing Aave V2-based lending and borrowing markets for the growing Mantle DeFi ecosystem. The protocol supports major Mantle assets and benefits from the network's ecosystem development grants and incentive programs. LEND token rewards boost lending yields, helping attract TVL during the ecosystem's growth phase. Lendle serves as essential DeFi infrastructure that enables composable strategies and capital efficiency for Mantle users. The protocol's Aave V2 foundation provides proven reliability, though the older architecture lacks some modern features found in V3-based alternatives."
      sections={[
        { id: "mantle-lending", title: "Lending on Mantle", content: "Lendle provides pool-based lending markets on Mantle supporting ETH, USDC, USDT, MNT, wstETH, mETH, and other Mantle-native and bridged assets. The Aave V2 architecture delivers proven lending mechanics with variable interest rates based on utilization. Mantle's low gas costs make lending operations efficient for all position sizes. As a core lending protocol on Mantle, Lendle captures organic borrowing demand from the ecosystem's growing DeFi activity. The protocol serves as a building block for more complex strategies, with other Mantle protocols integrating Lendle's lending markets for composability." },
        { id: "lend-incentives", title: "LEND Token & Incentives", content: "LEND token rewards are distributed to lenders and borrowers across major markets, providing additional yield on top of base lending rates. The token serves dual purposes as both a governance mechanism and an incentive tool. LEND rewards have been key to Lendle's TVL growth, offering competitive total yields that attract depositors to the Mantle ecosystem. The token can be staked for additional benefits and governance voting power. As with all emission-based incentives, users should assess the sustainability of LEND rewards and whether base yields alone justify their positions." },
        { id: "ecosystem-role", title: "Mantle Ecosystem Integration", content: "Lendle participates actively in the Mantle ecosystem, receiving grants and partnering with other Mantle protocols. The Mantle treasury's significant resources have funded ecosystem development programs that benefit Lendle and its users. The protocol integrates with Mantle DEXs, yield protocols, and other DeFi infrastructure, creating composability opportunities. Lendle's position as a primary lending market means it serves as collateral infrastructure for the broader Mantle DeFi ecosystem, with other protocols building on top of its lending primitives." },
        { id: "security", title: "Security & Risk Profile", content: "Lendle uses the extensively audited Aave V2 codebase with protocol-specific customizations reviewed by security firms. Standard Aave V2 safety features including oracle validation, automated liquidations, and interest rate models are maintained. The Mantle network itself adds a layer of infrastructure risk as a newer L2. Lower TVL compared to established chains means less robust liquidation infrastructure during market stress. Users should consider both protocol-level and network-level risks when evaluating Lendle for significant capital deployment." },
      ]}
      fees={{ "Supply APY": "Variable (2-8%) + LEND rewards", "Borrow APR": "Variable (3-12%)", "Liquidation Penalty": "5-10%", "LEND Incentives": "Variable additional APY", "Gas Costs": "Low on Mantle (~$0.02)" }}
      security={["Aave V2 audited codebase foundation", "Protocol-specific audit reviews", "Oracle price validation", "Automated liquidation engine", "Standard Aave V2 safety features", "Mantle ecosystem institutional backing"]}
      features={["Aave V2 lending on Mantle network", "LEND token incentive rewards and governance", "Support for Mantle-native and bridged assets", "Low gas costs on Mantle", "LEND staking for additional benefits", "Ecosystem composability with Mantle DeFi", "Growing asset support and integrations"]}
      faqs={[
        { question: "Is Lendle the best lending option on Mantle?", answer: "Lendle is one of the largest lending protocols on Mantle. Compare it with alternatives like Init Capital and Aurelius based on supported assets, yields, and features for your specific needs." },
        { question: "How does Lendle compare to Aave on Ethereum?", answer: "Lendle uses Aave V2 code but is independent. It offers lower gas costs on Mantle but less liquidity and fewer features than Aave V3 on Ethereum. Choose based on your chain preference and yield requirements." },
        { question: "Are Mantle network funds safe?", answer: "Mantle is backed by a significant treasury and BitDAO governance. The network uses Ethereum for settlement security. However, as a newer L2, it has less real-world stress testing than established networks." },
      ]}
      relatedReviews={[{ name: "Mendi", slug: "mendi" }, { name: "Aurelius", slug: "aurelius" }, { name: "Init Capital", slug: "init-capital" }]}
      relatedGuides={[{ title: "DeFi on Mantle", href: "/defi-lending/learn/defi-on-mantle" }, { title: "Multi-Chain Yield Farming", href: "/defi-lending/learn/multi-chain-yield-farming" }]}
    />
  );
}
