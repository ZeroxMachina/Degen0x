import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "Abracadabra",
  slug: "abracadabra",
  rating: 3.7,
  description: "Abracadabra allows borrowing the MIM stablecoin against interest-bearing collateral like yield-bearing tokens.",
  pros: ["Borrow against yield-bearing assets", "Keep earning yield while borrowing", "Multi-chain deployment", "No repayment schedule"],
  cons: ["MIM stablecoin has depeg risk", "Complex mechanisms for beginners", "SPELL token volatility", "Past security incidents"],
  bestFor: "DeFi users who want to borrow against yield-bearing collateral without interrupting their yield strategies",
  affiliateUrl: "https://degen0x.com/go/abracadabra",
  category: "crypto-loans",
};

export const metadata: Metadata = {
  title: `Abracadabra Review (${CURRENT_YEAR}): MIM Borrowing & Cauldrons | ${SITE_NAME}`,
  description: "In-depth Abracadabra review covering MIM stablecoin borrowing, cauldron mechanics, yield-bearing collateral, and risk assessment.",
};

export default function AbracadabraReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      overview="Abracadabra Money is a DeFi lending protocol that introduced the concept of borrowing against interest-bearing tokens. Through its cauldron system, users can deposit yield-bearing assets like yvUSDC (Yearn vault tokens), stETH, or other productive collateral and borrow MIM (Magic Internet Money), Abracadabra's native stablecoin. The key innovation is that your collateral continues earning yield while it secures your loan, making the effective borrowing cost much lower. Abracadabra operates across multiple chains including Ethereum, Arbitrum, Avalanche, and others. The protocol uses isolated lending markets called cauldrons, each with specific parameters for different collateral types."
      sections={[
        { id: "cauldrons", title: "How Cauldrons Work", content: "Abracadabra's lending markets are called cauldrons, each designed for a specific collateral type with its own risk parameters. When you deposit collateral into a cauldron, you can borrow MIM up to the collateral's maximum LTV. Each cauldron is isolated, meaning issues in one market do not directly affect others. Popular cauldrons accept collateral like yvDAI, yvUSDC, stETH, GLP tokens, and various LP tokens. The isolation model is important because different collateral types have very different risk profiles. Yield-bearing tokens may have smart contract risk from both the underlying protocol and Abracadabra, creating layered risk that users must understand." },
        { id: "mim-stablecoin", title: "MIM Stablecoin", content: "Magic Internet Money is the stablecoin that borrowers receive when taking loans on Abracadabra. MIM is pegged to the US dollar and can be traded on various DEXs and bridges. The peg is maintained through arbitrage incentives and liquidation mechanisms similar to other DeFi stablecoins. However, MIM has experienced notable depeg events, particularly during the broader stablecoin confidence crisis and following controversy involving the protocol's founders. MIM's stability depends on the quality of collateral backing it and the health of the protocol's liquidation system. Users should be aware that borrowing MIM introduces stablecoin risk in addition to the standard lending risks." },
        { id: "leverage-strategies", title: "Leverage Strategies", content: "Abracadabra enables leveraged yield strategies through a built-in degenbox mechanism. Users can loop their collateral by depositing yield-bearing tokens, borrowing MIM, swapping MIM for more of the collateral asset, and repeating. This amplifies yield exposure but also amplifies liquidation risk. For example, a leveraged stETH position earns multiplied staking yields but faces amplified losses if ETH price drops significantly. These leverage strategies can be powerful in the right market conditions but represent significantly higher risk than simple borrowing. The protocol's interface makes leveraging accessible, which can be both an advantage and a risk for less experienced users." },
        { id: "risk-assessment", title: "Risk Assessment", content: "Abracadabra carries several layers of risk that users should carefully evaluate. Smart contract risk exists at both the Abracadabra level and the underlying collateral protocol level. MIM stablecoin risk means your borrowed asset could depeg, requiring more MIM to repay than originally borrowed in dollar terms. The protocol has experienced security incidents in the past. SPELL governance token volatility affects the protocol's ability to incentivize liquidity and maintain operations. The layered nature of yield-bearing collateral creates compounding risk where a failure in the underlying yield source could cascade into the Abracadabra position. Conservative LTV management and thorough understanding of the collateral risks are essential." },
      ]}
      fees={{ "Borrowing Fee": "0.5-1% one-time", "Interest Rate": "Variable per cauldron", "Liquidation Penalty": "3-12.5%", "Withdrawal Fee": "None", "Platform Fee": "None" }}
      security={["Isolated cauldron architecture", "Multiple smart contract audits", "Decentralized governance via SPELL", "Multi-chain deployment", "Open-source codebase"]}
      features={["Borrow MIM against yield-bearing collateral", "Isolated cauldron markets", "Multi-chain support", "Built-in leverage tools", "No repayment schedule", "Continue earning yield on collateral", "SPELL governance token"]}
      faqs={[
        { question: "Is MIM a safe stablecoin?", answer: "MIM has maintained its peg through most market conditions but has experienced notable depeg events. It is backed by overcollateralized positions on Abracadabra. MIM carries more risk than larger stablecoins like USDC or DAI due to its smaller market cap and dependency on Abracadabra's collateral health." },
        { question: "Can I really earn yield while borrowing?", answer: "Yes, that is Abracadabra's core innovation. When you deposit yield-bearing tokens like Yearn vault tokens or liquid staking derivatives, those tokens continue earning yield while serving as loan collateral. Your effective borrowing cost is the interest rate minus the collateral yield." },
      ]}
      relatedReviews={[{ name: "MakerDAO", slug: "makerdao" }, { name: "Liquity", slug: "liquity" }]}
      relatedGuides={[{ title: "How Crypto Loans Work", href: "/crypto-loans/learn/how-to-get-crypto-loan" }, { title: "Liquidation Risk", href: "/crypto-loans/learn/liquidation-risk" }]}
    />
  );
}
