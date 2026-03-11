import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `NFT Lending and Borrowing Explained (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn how to borrow against your NFTs or earn yield by lending. Understand NFT-backed loans, peer-to-peer lending, and the risks of NFT collateralization.",
};

export default function NftLendingBorrowingPage() {
  return (
    <LearnPageLayout
      title="NFT Lending and Borrowing Explained"
      categoryName="NFTs"
      categorySlug="nfts"
      readTime="10 min"
      intro="NFT lending and borrowing platforms let you use your NFTs as collateral to access liquidity without selling your digital assets. Whether you need ETH for a new mint, want to leverage your portfolio, or simply need cash flow while holding valuable NFTs, lending protocols offer a way to unlock the value of your collection. This guide explains how NFT lending works, the major platforms, and the risks involved."
      toc={[
        { id: "how-it-works", title: "How NFT Lending Works", level: 2 },
        { id: "lending-models", title: "Peer-to-Peer vs. Pool Lending", level: 2 },
        { id: "major-platforms", title: "Major NFT Lending Platforms", level: 2 },
        { id: "risks", title: "Risks and Liquidation", level: 2 },
        { id: "earning-as-lender", title: "Earning Yield as a Lender", level: 2 },
      ]}
      faqs={[
        { question: "What happens if I cannot repay my NFT loan?", answer: "If you default on your loan or if the NFT value drops below the liquidation threshold, the lender or protocol takes ownership of your NFT collateral. In peer-to-peer lending, the lender receives the NFT directly. In pool-based lending, the NFT may be liquidated through auction. You lose the NFT but keep the borrowed funds. Always maintain a safe loan-to-value ratio." },
        { question: "Which NFT collections are accepted as collateral?", answer: "Most lending platforms accept blue-chip collections like CryptoPunks, Bored Ape Yacht Club, Azuki, Pudgy Penguins, and other high-value collections with strong floor prices and deep liquidity. Lower-value or less liquid collections may not be accepted or may receive lower loan-to-value ratios." },
        { question: "What are typical loan-to-value ratios for NFTs?", answer: "LTV ratios for NFT loans typically range from 30-50% of the floor price. This means a 10 ETH floor NFT might qualify for a 3-5 ETH loan. LTV is more conservative than fungible crypto lending because NFT prices are less liquid and can drop sharply. Some platforms offer higher LTV for the most liquid blue-chip collections." },
      ]}
      relatedArticles={[
        { title: "NFT Investing Guide", href: "/nfts/learn/nft-investing-guide", category: "NFTs" },
        { title: "Fractional NFTs", href: "/nfts/learn/nft-fractionalization", category: "NFTs" },
        { title: "NFT Flipping Guide", href: "/nfts/learn/nft-flipping-guide", category: "NFTs" },
      ]}
    >
      <h2 id="how-it-works">How NFT Lending Works</h2>
      <p>NFT lending allows you to deposit an NFT as collateral and receive a loan in ETH, USDC, or another cryptocurrency. The NFT is held in escrow by a smart contract for the duration of the loan. You receive the loan amount immediately and can use it for any purpose. When you repay the loan plus interest, your NFT is returned. If you fail to repay or if your collateral value drops below the liquidation threshold, the NFT is forfeited. The process is entirely non-custodial and handled by smart contracts without any intermediary or credit checks.</p>

      <h2 id="lending-models">Peer-to-Peer vs. Pool Lending</h2>
      <p>Peer-to-peer lending connects individual borrowers with individual lenders who negotiate terms directly. The lender evaluates the NFT and offers specific loan terms including amount, interest rate, and duration. NFTfi is the leading peer-to-peer platform. Pool-based lending uses automated protocols where lenders deposit ETH into pools and borrowers can draw loans against their NFTs based on predetermined parameters. Blur's Blend protocol and BendDAO are pool-based platforms. Peer-to-peer offers more flexible terms and potentially better rates for unique NFTs, while pool-based lending provides instant liquidity without waiting for a lender match.</p>

      <h2 id="major-platforms">Major NFT Lending Platforms</h2>
      <p>Blur Blend dominates NFT lending volume on Ethereum with its pool-based perpetual lending model that has no fixed duration. NFTfi provides peer-to-peer lending with negotiated terms and supports a wide range of collections. BendDAO operates as a pool-based lending protocol with instant loans against blue-chip NFTs. Arcade enables larger loans with longer terms for high-value NFTs. X2Y2 includes an NFT lending feature alongside its marketplace. On Solana, Sharky and Citrus provide NFT lending against Solana NFT collections. Each platform has different collection support, LTV ratios, interest rates, and user experience.</p>

      <h2 id="risks">Risks and Liquidation</h2>
      <p>The primary risk of NFT lending is liquidation. If the floor price of your collateral NFT drops significantly, the protocol may liquidate your NFT to protect lenders. Liquidation thresholds vary by platform but typically trigger when the loan amount exceeds 80-90% of the NFT's current floor value. NFT prices can be volatile, with floor prices dropping 30-50% in market downturns. Smart contract risk is also present: bugs in lending protocols could result in loss of deposited NFTs. Always borrow conservatively, monitor your loan health ratio, and be prepared to add collateral or partially repay during market downturns.</p>

      <h2 id="earning-as-lender">Earning Yield as a Lender</h2>
      <p>On the lending side, you can earn yield by providing liquidity to NFT lending pools or by offering peer-to-peer loans. Pool-based lending offers passive yield similar to DeFi lending, with rates typically ranging from 5-20% APY depending on demand. Peer-to-peer lending lets you evaluate individual NFTs and set your own terms, potentially earning higher returns on loans you underwrite. The risk as a lender is that if a borrower defaults, you receive the NFT collateral rather than your original ETH. If the NFT has depreciated below the loan amount, you realize a loss. Diversifying across multiple loans and lending against liquid blue-chip collections helps manage this risk.</p>
    </LearnPageLayout>
  );
}
