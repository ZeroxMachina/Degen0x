import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Liquid Staking Tokens in DeFi Lending (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Guide to using liquid staking tokens (LSTs) in DeFi lending. Learn how to earn staking yield plus lending yield with stETH, rETH, and other LSTs.",
};

export default function LiquidStakingLendingPage() {
  return (
    <LearnPageLayout title="Liquid Staking Tokens in DeFi Lending" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="8 min read"
      intro="Liquid staking tokens (LSTs) like stETH, rETH, and cbETH have become some of the most popular collateral types in DeFi lending. By combining staking yield with lending opportunities, LSTs offer a capital-efficient way to earn multiple layers of return on your ETH. This guide covers how to use LSTs effectively in lending protocols, the strategies available, and the risks to understand."
      toc={[{ id: "what-are-lsts", title: "What Are Liquid Staking Tokens?", level: 2 }, { id: "lending-strategies", title: "LST Lending Strategies", level: 2 }, { id: "emode-leverage", title: "eMode and Leveraged Staking", level: 2 }, { id: "risks", title: "LST-Specific Risks", level: 2 }]}
      faqs={[
        { question: "What are the main LSTs?", answer: "The largest liquid staking tokens are stETH (Lido), rETH (Rocket Pool), cbETH (Coinbase), sfrxETH (Frax), and swETH (Swell). Each represents staked ETH plus accumulated rewards, but they differ in decentralization, fee structures, and DeFi integrations." },
        { question: "Can I earn staking yield and lending yield simultaneously?", answer: "Yes. When you deposit an LST as collateral in a lending protocol, the LST continues to accrue staking rewards while serving as collateral. You earn staking yield plus any lending supply rate, and can borrow against it for additional strategies." },
        { question: "What is leveraged staking?", answer: "Leveraged staking involves depositing an LST as collateral, borrowing ETH, staking the borrowed ETH for more LSTs, and repeating. This amplifies your staking yield exposure. With Aave's eMode for ETH-correlated assets, you can achieve high leverage with relatively low liquidation risk." },
      ]}
      relatedArticles={[
        { title: "Collateral Types Guide", href: "/defi-lending/learn/collateral-types-guide", category: "DeFi Lending" },
        { title: "DeFi Lending Strategies", href: "/defi-lending/learn/defi-lending-strategies", category: "DeFi Lending" },
        { title: "Ethereum Investment Thesis", href: "/long-term/learn/ethereum-investment-thesis", category: "Long-Term" },
      ]}
    >
      <h2 id="what-are-lsts">What Are Liquid Staking Tokens?</h2>
      <p>Liquid staking tokens represent staked ETH on the Ethereum Beacon Chain. Instead of locking ETH directly in staking where it becomes illiquid, you deposit ETH into a liquid staking protocol and receive a token that represents your staked position. This token earns staking rewards (approximately 3-4% APY) and can be used freely in DeFi, including as collateral for lending. stETH from Lido is the largest LST by market cap, using a rebasing model where your stETH balance increases daily. wstETH is the wrapped version that appreciates in value instead of rebasing, making it more compatible with DeFi protocols. rETH from Rocket Pool appreciates against ETH as staking rewards accumulate. cbETH from Coinbase and sfrxETH from Frax work similarly. Each LST has different validator sets, fee structures, and decentralization properties.</p>

      <h2 id="lending-strategies">LST Lending Strategies</h2>
      <p>The simplest strategy is depositing LSTs as collateral to borrow stablecoins for other uses while your ETH continues earning staking yield. You effectively get a staking-yield-subsidized loan. A more aggressive strategy borrows ETH against LST collateral: since both sides are ETH-denominated, the position has minimal liquidation risk and you can use the borrowed ETH for additional yield strategies. LSTs can also be deposited into lending pools to earn supply interest on top of staking yield, creating double-yield positions. For example, depositing wstETH into Aave earns approximately 3.5% staking yield plus the Aave supply rate, potentially achieving 4-5% total. Using multiple protocols (deposit LST on one, borrow and farm on another) creates more complex but potentially higher-yielding strategies.</p>

      <h2 id="emode-leverage">eMode and Leveraged Staking</h2>
      <p>Aave V3&apos;s efficiency mode (eMode) for ETH-correlated assets enables particularly high LTV ratios when borrowing ETH against LST collateral. Since stETH and ETH are highly correlated (typically trading within 0.5% of parity), Aave allows up to 90%+ LTV in eMode. This enables leveraged staking: deposit wstETH, borrow ETH at 90% LTV, stake the borrowed ETH for more wstETH, repeat. With 3-4 loops, you can achieve 3-5x leverage on your staking yield. If staking yields 3.5% and borrowing costs 2%, the spread of 1.5% is amplified by leverage to potentially 5-7% total return. DeFi Saver and Instadapp offer one-click leverage tools for this strategy. The primary risk is a significant stETH-ETH depeg that pushes your LTV above the liquidation threshold. During the 2022 stETH depeg, positions with high leverage were liquidated. Conservative leverage of 2-3x provides meaningful yield amplification with more safety margin.</p>

      <h2 id="risks">LST-Specific Risks</h2>
      <p>Depeg risk is the primary concern for LST collateral. While LSTs should trade close to ETH value, market stress can cause temporary depegs. stETH traded at a 5%+ discount during the 2022 crisis. A depeg reduces your collateral value relative to ETH-denominated debt, potentially triggering liquidation for leveraged positions. Smart contract risk exists for both the staking protocol and the lending protocol you use. A vulnerability in Lido&apos;s contracts could affect stETH value, impacting all positions using stETH as collateral. Slashing risk is the possibility that validators operating on behalf of the staking protocol get slashed, reducing the value of the LST. Centralization risk varies by LST: Lido controls a large share of staked ETH, while Rocket Pool is more decentralized. Oracle risk for LSTs includes both the ETH/USD price and the LST/ETH exchange rate, both of which must be accurate for proper position management. Despite these risks, LSTs remain among the most capital-efficient collateral types in DeFi due to their intrinsic yield generation.</p>
    </LearnPageLayout>
  );
}
