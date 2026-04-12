import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Alpaca Finance Review ${CURRENT_YEAR}: Leveraged Yield Farming`,
  description:
    "Complete Alpaca Finance review covering leveraged yield farming, lending vaults, automated strategies, and risk analysis on BNB Chain and Fantom.",
  alternates: { canonical: "/defi-lending/reviews/alpaca-finance" }};

export default function AlpacaFinanceReview() {
  return (
    <ReviewPage
      product={{
        name: "Alpaca Finance",
        slug: "alpaca-finance",
        rating: 4.1,
        description:
          "Alpaca Finance is a leveraged yield farming protocol on BNB Chain offering lending vaults, automated farming strategies, and tools for maximizing DeFi yields through leveraged positions.",
        pros: [
          "Pioneer of leveraged yield farming on BNB Chain",
          "Lending vaults offer competitive yields for depositors",
          "Automated strategies simplify complex DeFi operations",
          "Long track record on BNB Chain with no major exploits",
          "Comprehensive documentation and educational resources",
        ],
        cons: [
          "Leveraged farming carries significant liquidation risk",
          "ALPACA token has experienced substantial price decline from highs",
          "Limited to BNB Chain ecosystem primarily",
          "Yield from token emissions may not be sustainable long-term",
          "Complex strategies can be difficult for beginners to understand",
        ],
        bestFor: "BNB Chain users seeking leveraged yield farming and passive lending yields",
        affiliateUrl: "#",
        category: "defi-lending",
      }}
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      overview="Alpaca Finance established itself as the largest leveraged yield farming protocol on BNB Chain, allowing users to open leveraged farming positions on major DEX pools while lenders earn yield from providing the borrowed capital. The protocol operates a two-sided market where lenders deposit assets into lending vaults to earn interest, and farmers borrow those assets to leverage their yield farming positions. This creates higher yields for both parties compared to traditional farming or lending. Alpaca has processed billions in cumulative farming volume and maintains a strong position in the BNB Chain DeFi ecosystem. The protocol has expanded to include automated vaults, perpetual futures, and various yield optimization strategies beyond its core leveraged farming product."
      sections={[
        { id: "leveraged-farming", title: "Leveraged Yield Farming", content: "Alpaca's core product allows users to open yield farming positions with up to 6x leverage on supported DEX trading pairs. When a user opens a leveraged farm position, Alpaca borrows additional assets from the lending vaults to amplify the farming position. The farmer earns magnified trading fees and token rewards, while paying interest to lenders. Positions can be opened as long or short, allowing farmers to express directional views while earning yield. The protocol supports farming on PancakeSwap, Biswap, and other BNB Chain DEXs. Automated rebalancing and compounding features help optimize returns, though farmers must monitor positions to avoid liquidation when asset prices move significantly." },
        { id: "lending-vaults", title: "Lending Vaults", content: "Lending vaults are the safer side of Alpaca Finance, where users deposit assets like BNB, BUSD, USDT, or ALPACA to earn interest from borrowers. Lenders receive ibTokens (interest-bearing tokens) representing their deposits plus accumulated interest. These ibTokens can be used in other DeFi protocols for additional yield. Lending rates are determined by utilization: higher borrowing demand drives up lender yields. Historical yields for major assets have ranged from 3-15% depending on market conditions. Lenders face lower risk than leveraged farmers but still bear smart contract risk and the possibility of temporary liquidity shortages during high-utilization periods." },
        { id: "automated-vaults", title: "Automated Vaults & Strategies", content: "Alpaca has expanded beyond manual leveraged farming to offer automated vault strategies that handle position management, rebalancing, and compounding automatically. These vaults implement various strategies including market-neutral farming, single-asset exposure with leverage, and optimized yield compounding. Automated vaults reduce the operational complexity and gas costs of manual farming while potentially improving returns through algorithmic optimization. The protocol's automated strategies are particularly useful for users who want leveraged farming exposure without constant position monitoring and management." },
        { id: "security", title: "Security & Risk Management", content: "Alpaca Finance has maintained a clean security record with multiple audits from firms including PeckShield and CertiK. The protocol implements comprehensive liquidation mechanics that protect lenders when farming positions become undercollateralized. Oracle price feeds from Chainlink ensure accurate position valuation. Risk parameters including maximum leverage ratios, collateral factors, and liquidation thresholds are configurable through governance. Despite these measures, leveraged farming inherently carries significant risk including impermanent loss amplified by leverage, liquidation risk from price movements, and smart contract risk from interaction with multiple protocols simultaneously." },
      ]}
      fees={{ "Lending APY": "Variable (3-15%)", "Borrowing APR": "Variable (5-20%)", "Performance Fee": "19% of farming profits", "Liquidation Fee": "5% of position", "Management Fee": "Included in performance fee", "Gas Costs": "Low on BNB Chain" }}
      security={["Multiple audits by PeckShield and CertiK", "Chainlink oracle price feeds for position valuation", "Automated liquidation engine for undercollateralized positions", "Configurable risk parameters through governance", "No major exploits since launch", "Timelock on protocol upgrades", "Active monitoring and emergency pause capabilities"]}
      features={["Leveraged yield farming up to 6x on major DEX pairs", "Lending vaults for passive yield on deposited assets", "Automated vault strategies with auto-compounding", "Long and short farming positions", "ibToken system for composable lending positions", "ALPACA governance token", "Multi-DEX farming support on BNB Chain"]}
      faqs={[
        { question: "Is leveraged farming on Alpaca safe?", answer: "Leveraged farming amplifies both returns and risks. Positions can be liquidated if asset prices move against you significantly. Lenders face lower risk but still bear smart contract risk. Start with low leverage and only use funds you can afford to lose." },
        { question: "What is the minimum to start on Alpaca Finance?", answer: "There is no strict minimum, but BNB Chain gas costs are low enough that positions as small as $50-100 can be practical. For leveraged farming, having enough collateral to withstand market volatility is more important than meeting a minimum threshold." },
        { question: "How do Alpaca ibTokens work?", answer: "When you deposit into a lending vault, you receive ibTokens that represent your share of the vault. These tokens appreciate in value as interest accrues. You can use ibTokens in other DeFi protocols or redeem them for the original asset plus earned interest." },
      ]}
      relatedReviews={[
        { name: "Extra Finance", slug: "extra-finance" },
        { name: "Tarot", slug: "tarot" },
        { name: "Impermax", slug: "impermax" },
      ]}
      relatedGuides={[
        { title: "Leveraged Yield Farming Guide", href: "/defi-lending/learn/leveraged-yield-farming" },
        { title: "DeFi on BNB Chain", href: "/defi-lending/learn/defi-on-bnb-chain" },
      ]}
    />
  );
}
