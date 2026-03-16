import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

const product = {
  name: "BENQI Loans",
  slug: "benqi-loans",
  rating: 4.0,
  description: "BENQI offers DeFi lending and borrowing on Avalanche with low fees and liquid staking integration.",
  pros: ["Low Avalanche gas fees", "Integrated liquid staking (sAVAX)", "Strong Avalanche ecosystem integration", "Clean, intuitive interface"],
  cons: ["Avalanche-only", "Smaller TVL than Ethereum protocols", "Fewer supported assets", "Less battle-tested than Aave/Compound"],
  bestFor: "Avalanche users seeking DeFi lending with low fees and native liquid staking integration",
  affiliateUrl: "https://degen0x.com/go/benqi",
  category: "crypto-loans",
};

export const metadata: Metadata = {
  title: `BENQI Loans Review (${CURRENT_YEAR}): Avalanche DeFi Lending | ${SITE_NAME}`,
  description: "In-depth BENQI review covering Avalanche lending, sAVAX liquid staking, borrowing rates, and how BENQI compares to other DeFi lending protocols.",
};

export default function BenqiLoansReview() {
  return (
    <ReviewPage
      product={product}
      categoryName="Crypto Loans"
      categorySlug="crypto-loans"
      overview="BENQI is the leading DeFi lending and borrowing protocol on Avalanche, offering a familiar Compound-style lending experience with the added benefit of Avalanche's low transaction fees and fast finality. The protocol consists of two main components: BENQI Lending (the core borrowing and lending markets) and BENQI Liquid Staking (which issues sAVAX for staked AVAX). This integration means users can stake AVAX for sAVAX and use it as collateral for borrowing, combining staking yield with lending utility. BENQI has established itself as essential Avalanche infrastructure, often serving as the primary money market for the ecosystem."
      sections={[
        { id: "lending-markets", title: "Lending Markets", content: "BENQI's lending markets function similarly to Compound, with algorithmic interest rates based on pool utilization. Users can supply assets to earn interest or borrow against deposited collateral. Supported assets include AVAX, major stablecoins like USDC and USDT, wrapped Bitcoin, and Avalanche ecosystem tokens. Interest rates adjust automatically based on supply and demand dynamics within each pool. The interface is clean and straightforward, displaying supply and borrow APYs alongside available liquidity. BENQI also distributes QI token rewards to suppliers and borrowers, providing additional yield on top of base interest rates. Avalanche's low gas costs make frequent interactions like claiming rewards or adjusting positions economical." },
        { id: "liquid-staking", title: "sAVAX Liquid Staking", content: "BENQI Liquid Staking allows users to stake AVAX and receive sAVAX, a liquid staking derivative that accrues staking rewards. sAVAX can then be used as collateral on BENQI Lending, creating a capital-efficient combination of staking and borrowing. The sAVAX token appreciates relative to AVAX over time as staking rewards accumulate. This integration is particularly powerful because it allows AVAX holders to maintain their staking yield while accessing liquidity through borrowing. The seamless connection between BENQI's liquid staking and lending products creates a smooth user experience that competing platforms on Avalanche have not matched." },
        { id: "avalanche-ecosystem", title: "Avalanche Ecosystem Integration", content: "As the dominant lending protocol on Avalanche, BENQI is deeply integrated with the broader ecosystem. It serves as a key liquidity hub for Avalanche DeFi, with integrations across DEXs like Trader Joe and Pangolin, yield optimizers, and other protocols. Avalanche's sub-second finality and low transaction costs create a responsive user experience for lending interactions. The C-Chain EVM compatibility means the core lending mechanics are familiar to Ethereum DeFi users. BENQI benefits from Avalanche Foundation support and incentive programs that periodically boost yields through additional token rewards." },
        { id: "risk-profile", title: "Risk Profile", content: "BENQI has been audited by multiple security firms and has operated without major exploits since launch. However, it carries risks common to DeFi lending: smart contract vulnerability, oracle manipulation, and market volatility affecting collateral values. Being on Avalanche means a smaller validator set and different security assumptions compared to Ethereum. BENQI's TVL, while significant for Avalanche, is smaller than Ethereum-based protocols, meaning less total battle-testing of the contracts. The protocol's governance through QI token voting determines risk parameters, and governance decisions carry the same risks as any DeFi governance system. For users comfortable with Avalanche's security model, BENQI represents a well-executed lending protocol with a strong ecosystem position." },
      ]}
      fees={{ "Borrowing Rate": "Variable (market-driven)", "Supply Rate": "Variable (market-driven)", "Liquidation Penalty": "5-15% (asset-dependent)", "Platform Fee": "Share of interest spread", "Gas Costs": "Minimal (Avalanche)" }}
      security={["Multiple third-party audits", "Avalanche-native security model", "Open-source smart contracts", "QI governance for parameter changes", "No major security incidents", "Integrated oracle infrastructure"]}
      features={["DeFi lending and borrowing on Avalanche", "sAVAX liquid staking integration", "Low Avalanche gas fees", "QI token rewards", "Multiple collateral types", "Clean user interface", "Deep Avalanche ecosystem integration"]}
      faqs={[
        { question: "Can I use sAVAX as collateral?", answer: "Yes, sAVAX is accepted as collateral on BENQI Lending. This allows you to earn AVAX staking rewards through sAVAX while simultaneously using it as collateral to borrow other assets. It is one of the most capital-efficient strategies on Avalanche." },
        { question: "How does BENQI compare to Aave on Avalanche?", answer: "Aave also operates on Avalanche and is a strong competitor. BENQI has deeper Avalanche-native integration, especially with sAVAX liquid staking. Aave brings its multi-chain brand and battle-tested codebase. Both are viable options, and many users use both for diversification." },
      ]}
      relatedReviews={[{ name: "Aave Loans", slug: "aave-loans" }, { name: "Venus Loans", slug: "venus-loans" }]}
      relatedGuides={[{ title: "How to Borrow Against Crypto", href: "/crypto-loans/learn/how-to-borrow-against-crypto" }, { title: "Interest Rates Comparison", href: "/crypto-loans/learn/interest-rates-comparison" }]}
    />
  );
}
