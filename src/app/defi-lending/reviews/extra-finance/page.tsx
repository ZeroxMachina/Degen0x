import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Extra Finance Review ${CURRENT_YEAR}: Leveraged Farming on Optimism & Base`,
  description:
    "Complete Extra Finance review covering leveraged yield farming, lending markets, strategy vaults, and risk analysis on Optimism and Base networks.",
};

export default function ExtraFinanceReview() {
  return (
    <ReviewPage
      product={{
        name: "Extra Finance",
        slug: "extra-finance",
        rating: 4.0,
        description:
          "Extra Finance is a leveraged yield farming protocol on Optimism and Base that enables users to amplify LP positions through borrowing while lenders earn yield from the borrowed capital.",
        pros: [
          "Leveraged farming on Optimism and Base with low gas costs",
          "Supports multiple DEX LP pairs for diverse farming options",
          "Lending side offers passive yield without impermanent loss",
          "Active development with regular new pool additions",
          "User-friendly interface for leveraged farming setup",
        ],
        cons: [
          "Leveraged positions carry significant liquidation risk",
          "Relatively newer protocol with shorter track record",
          "Some farming pairs have limited liquidity depth",
          "Token incentives may not sustain current yield levels",
          "Complex mechanics may confuse DeFi beginners",
        ],
        bestFor: "L2 yield farmers seeking leveraged LP exposure on Optimism and Base with manageable gas costs",
        affiliateUrl: "#",
        category: "defi-lending",
      }}
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      overview="Extra Finance brings leveraged yield farming to Optimism and Base Layer 2 networks, enabling users to amplify their liquidity provision positions through borrowed capital. The protocol operates a two-sided market where lenders supply individual assets to earn interest, and farmers borrow those assets to create leveraged LP positions on supported DEXs like Velodrome, Aerodrome, and Uniswap. The low gas costs on L2 networks make Extra Finance's leveraged farming strategies more accessible than similar protocols on Ethereum mainnet, where transaction costs could consume a significant portion of farming returns. The protocol has been growing steadily, regularly adding support for new farming pairs and DEX integrations."
      sections={[
        { id: "leveraged-farming", title: "Leveraged Farming Mechanics", content: "Extra Finance enables users to open leveraged yield farming positions by borrowing additional assets from lending pools. Users select an LP pair, choose their leverage level (typically up to 3-5x), and the protocol handles the borrowing and LP token creation automatically. The leveraged position earns amplified trading fees and any farming incentives from the underlying DEX. Users can choose to farm long or short by adjusting the ratio of borrowed assets, allowing directional expression alongside yield generation. The protocol continuously monitors position health and triggers liquidations when collateral ratios fall below safety thresholds." },
        { id: "lending", title: "Lending for Passive Yield", content: "The lending side of Extra Finance provides a lower-risk option for earning yield. Lenders deposit individual assets like ETH, USDC, OP, or AERO into lending pools and earn interest from borrowers who use leverage. Lenders do not face impermanent loss since they supply single assets. Interest rates are determined by utilization: higher borrowing demand drives up yields. Lending yields typically range from 3-15% depending on the asset and market conditions. The lending pools have independent risk parameters, with each pool's risk limited to its own assets rather than shared across the protocol." },
        { id: "supported-dexs", title: "Supported DEXs & Pairs", content: "Extra Finance integrates with major DEXs on Optimism and Base, including Velodrome, Aerodrome, Uniswap V3, and others. This broad integration provides access to a wide range of farming pairs across different DEX types. The protocol supports both standard AMM pools and concentrated liquidity positions, offering different risk-reward profiles. Popular farming pairs include ETH-USDC, OP-ETH, AERO-USDC, and stablecoin pairs. New integrations are added regularly through governance, expanding the range of available farming opportunities." },
        { id: "risks", title: "Risk Analysis", content: "Extra Finance users face several risk categories. Leveraged farming amplifies impermanent loss, which can result in position value declining faster than without leverage. Liquidation risk is present when collateral ratios deteriorate below safety thresholds due to price movements. Smart contract risk exists across both the Extra Finance contracts and the integrated DEX contracts. Oracle pricing failures could lead to incorrect liquidations or exploitation. Low-liquidity farming pairs present additional slippage and exit risks. Users should carefully evaluate each farming pair's liquidity depth, historical volatility, and their own risk tolerance before committing capital to leveraged positions." },
      ]}
      fees={{ "Lending APY": "Variable (3-15%)", "Borrowing APR": "Variable (5-25%)", "Performance Fee": "10-15% of farming profits", "Liquidation Penalty": "5-10%", "Gas Costs": "Very low on Optimism and Base" }}
      security={["Smart contract audits completed", "Isolated lending pool architecture", "Oracle price validation for position monitoring", "Automated liquidation engine", "Supply and borrow caps per pool", "Regular security reviews with new integrations"]}
      features={["Leveraged yield farming on Optimism and Base", "Single-asset lending for passive yield", "Integration with Velodrome, Aerodrome, and Uniswap", "Long and short farming positions", "Automated position management", "Low gas costs on L2 networks", "Regular new pool and DEX additions"]}
      faqs={[
        { question: "How much leverage can I use on Extra Finance?", answer: "Maximum leverage depends on the farming pair and its risk parameters, typically ranging from 3x to 5x. Higher leverage amplifies both returns and liquidation risk." },
        { question: "Can I farm on Extra Finance without leverage?", answer: "You can participate as a lender on Extra Finance without leverage exposure, earning yield from borrowers. The lending side does not carry impermanent loss or leveraged liquidation risk." },
        { question: "Which chain is better for Extra Finance?", answer: "Both Optimism and Base offer very low gas costs. Choose based on which DEXs and pairs interest you: Velodrome pairs are on Optimism, while Aerodrome pairs are on Base." },
      ]}
      relatedReviews={[
        { name: "Alpaca Finance", slug: "alpaca-finance" },
        { name: "Seamless", slug: "seamless" },
        { name: "Tarot", slug: "tarot" },
      ]}
      relatedGuides={[
        { title: "DeFi on Optimism", href: "/defi-lending/learn/defi-on-optimism" },
        { title: "Leveraged Yield Farming", href: "/defi-lending/learn/leveraged-yield-farming" },
      ]}
    />
  );
}
