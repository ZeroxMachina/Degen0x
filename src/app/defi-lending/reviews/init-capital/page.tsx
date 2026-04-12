import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Init Capital Review ${CURRENT_YEAR}: Composable Lending on Mantle`,
  description:
    "In-depth Init Capital review covering composable lending hooks, position management, yield strategies, and protocol design on Mantle network.",
  alternates: { canonical: "/defi-lending/reviews/init-capital" }};

export default function InitCapitalReview() {
  return (
    <ReviewPage
      product={{
        name: "Init Capital",
        slug: "init-capital",
        rating: 4.0,
        description:
          "Init Capital is a composable lending protocol on Mantle network featuring a hooks-based architecture that enables customizable lending positions and automated yield strategies.",
        pros: [
          "Innovative hooks architecture enables highly composable strategies",
          "Position management abstraction simplifies complex DeFi operations",
          "Growing presence on Mantle with ecosystem support",
          "Automated strategy hooks reduce manual management overhead",
          "Flexible collateral and borrowing configurations",
        ],
        cons: [
          "Mantle ecosystem is still developing and has lower overall activity",
          "Complex architecture may be harder to audit and secure",
          "Limited track record as a newer protocol",
          "Fewer supported assets compared to multi-chain protocols",
          "Hooks system has a learning curve for advanced users",
        ],
        bestFor: "Advanced DeFi users on Mantle seeking composable and customizable lending strategies",
        affiliateUrl: "#",
        category: "defi-lending",
      }}
      categoryName="DeFi Lending"
      categorySlug="defi-lending"
      overview="Init Capital introduces a novel approach to DeFi lending with its hooks-based architecture on Mantle network. Unlike traditional lending protocols that offer fixed supply-and-borrow mechanics, Init Capital allows for composable position management where hooks can automate complex strategies including leveraged loops, yield optimization, and cross-protocol composability. The protocol has gained traction within the Mantle ecosystem and represents a new generation of lending protocols that prioritize flexibility and programmability. Init Capital's position management system abstracts individual lending operations into unified positions, making it easier for users and integrators to build sophisticated DeFi strategies on top of the protocol."
      sections={[
        { id: "hooks-architecture", title: "Hooks-Based Architecture", content: "Init Capital's hooks system is its defining innovation. Hooks are modular smart contract extensions that can be attached to lending positions to automate specific behaviors. For example, a hook can automatically rebalance a leveraged position when the collateral ratio changes, or execute a yield optimization strategy when conditions are met. This modular approach allows the protocol to support a wide range of strategies without hardcoding each one into the core contracts. Developers can build and deploy new hooks to extend the protocol's capabilities, creating an ecosystem of automated lending strategies that users can opt into based on their goals and risk tolerance." },
        { id: "position-management", title: "Position Management", content: "Init Capital abstracts lending and borrowing into positions that can hold multiple collateral types and debt obligations simultaneously. This position-based approach is more flexible than the pool-based model used by most lending protocols. Users can manage their entire lending portfolio as a unified position, adjusting collateral, debt, and strategy parameters from a single interface. The position management system also enables features like cross-collateralization and multi-asset borrowing within a single position, improving capital efficiency for users with diverse collateral holdings." },
        { id: "mantle-ecosystem", title: "Mantle Ecosystem Integration", content: "Init Capital is deeply integrated with the Mantle ecosystem, supporting Mantle-native assets and partnering with other Mantle DeFi protocols. The protocol benefits from Mantle's low gas costs and growing DeFi ecosystem. Supported assets include ETH, USDC, USDT, MNT, and various other tokens available on Mantle. The protocol's growth is tied to the broader adoption of the Mantle network, which has been investing heavily in DeFi ecosystem development and incentive programs. Users should consider the maturity of the Mantle ecosystem when evaluating Init Capital for significant capital deployment." },
        { id: "security", title: "Security Considerations", content: "Init Capital's hooks architecture introduces both benefits and challenges for security. The modular design allows each hook to be audited independently, but the composability between hooks and core contracts creates additional surface area for potential vulnerabilities. The protocol has undergone security audits and implements standard safety features including oracle validation, liquidation mechanisms, and position health monitoring. However, users should exercise caution with newer or less audited hooks. The core lending contracts follow established patterns, but the innovative aspects of the protocol have a shorter track record of real-world testing." },
      ]}
      fees={{ "Supply APY": "Variable (2-8%)", "Borrow APR": "Variable (4-15%)", "Hook Fees": "Varies by strategy hook", "Liquidation Penalty": "5-10%", "Gas Costs": "Low on Mantle network" }}
      security={["Core contract security audits completed", "Modular hook architecture allows independent auditing", "Oracle price validation for position health", "Automated liquidation engine", "Position health monitoring", "Guardian controls for emergency situations"]}
      features={["Hooks-based composable lending architecture", "Unified position management system", "Automated strategy execution through hooks", "Multi-collateral position support", "Integration with Mantle ecosystem protocols", "Low gas costs on Mantle network", "Flexible collateral and borrowing configurations"]}
      faqs={[
        { question: "What makes Init Capital different from Aave?", answer: "Init Capital's hooks architecture allows for composable, automated strategies that are built into the lending layer itself. Traditional protocols like Aave require external contracts for strategy automation. Init Capital's positions are also more flexible, supporting multi-collateral configurations natively." },
        { question: "Is Mantle a safe network for DeFi?", answer: "Mantle is a Layer 2 network backed by significant treasury and institutional support. However, it is newer than established L2s like Arbitrum and Optimism. Users should evaluate their comfort with the network's maturity alongside protocol-specific risks." },
        { question: "Do I need to understand hooks to use Init Capital?", answer: "No, basic lending and borrowing works without hooks knowledge. Hooks add optional automation for advanced strategies. Start with simple supply and borrow operations before exploring hooks-based strategies." },
      ]}
      relatedReviews={[
        { name: "LayerBank", slug: "layerbank" },
        { name: "Fluid", slug: "fluid" },
        { name: "Seamless", slug: "seamless" },
      ]}
      relatedGuides={[
        { title: "DeFi on Mantle", href: "/defi-lending/learn/defi-on-mantle" },
        { title: "DeFi Composability Strategies", href: "/defi-lending/learn/defi-composability-strategies" },
      ]}
    />
  );
}
