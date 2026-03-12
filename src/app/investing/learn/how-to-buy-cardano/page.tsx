import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Buy Cardano (ADA): Step-by-Step Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to buy Cardano step by step. Best exchanges for ADA, staking with Daedalus and Yoroi, delegation process, and Cardano ecosystem overview explained.",
  keywords: [
    "how to buy Cardano",
    "buy ADA",
    "buy Cardano step by step",
    "best exchange for Cardano",
    "Cardano staking",
    "ADA delegation",
  ],
};

export default function HowToBuyCardanoPage() {
  return (
    <LearnPageLayout
      title="How to Buy Cardano (ADA): Step-by-Step Guide"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="12 min"
      intro="Cardano (ADA) is a third-generation blockchain platform built on peer-reviewed academic research and a methodical development approach. Founded by Ethereum co-founder Charles Hoskinson, Cardano aims to be a more scalable, sustainable, and interoperable blockchain. ADA is the native cryptocurrency used for transaction fees, staking, and governance. Cardano's Ouroboros Proof of Stake protocol allows ADA holders to earn staking rewards while maintaining full control of their coins. This guide covers how to buy ADA, staking options, and the Cardano ecosystem."
      toc={[
        { id: "choose-exchange", title: "choose-exchange", level: 2 },
        { id: "step-1-choose-an-exchange", title: "Step 1: Choose an Exchange", level: 2 },
        { id: "create-account", title: "create-account", level: 2 },
        { id: "step-2-create-and-verify-your-account", title: "Step 2: Create and Verify Your Account", level: 2 },
        { id: "deposit-funds", title: "deposit-funds", level: 2 },
        { id: "step-3-deposit-funds", title: "Step 3: Deposit Funds", level: 2 },
        { id: "buy-cardano", title: "buy-cardano", level: 2 },
        { id: "step-4-buy-cardano", title: "Step 4: Buy Cardano", level: 2 },
        { id: "store-cardano", title: "store-cardano", level: 2 },
        { id: "step-5-store-and-stake-your-ada", title: "Step 5: Store and Stake Your ADA", level: 2 },
        { id: "staking-delegation", title: "staking-delegation", level: 2 },
        { id: "ada-staking-and-delegation", title: "ADA Staking and Delegation", level: 2 },
        { id: "cardano-ecosystem", title: "cardano-ecosystem", level: 2 },
        { id: "exploring-the-cardano-ecosystem", title: "Exploring the Cardano Ecosystem", level: 2 }
      ]}
      faqs={[
        {
          question: "What is the minimum amount of Cardano I can buy?",
          answer:
            "Most exchanges allow ADA purchases starting from $1-$10. ADA is divisible to 6 decimal places (the smallest unit is called a lovelace). You can buy fractional amounts, so the current per-unit price does not determine the minimum investment. Start small to learn the process before committing larger amounts.",
        },
        {
          question: "How does Cardano staking work?",
          answer:
            "Cardano staking is unique because it is non-custodial: your ADA never leaves your wallet. You delegate your ADA to a stake pool, which validates transactions on your behalf. Rewards are earned every epoch (5 days) and automatically added to your delegated stake. There is no lock-up period, and you can spend or move your ADA at any time while it remains staked. Current staking yields are approximately 3-5% APY.",
        },
        {
          question: "What wallet should I use for Cardano?",
          answer:
            "The top Cardano wallets are Daedalus (full node desktop wallet developed by IOG), Yoroi (light wallet by Emurgo, available as browser extension and mobile app), and Eternl (community-built wallet with advanced features). All three support native ADA staking through delegation. Ledger hardware wallets integrate with Yoroi and Eternl for maximum security.",
        },
        {
          question: "What makes Cardano different from Ethereum?",
          answer:
            "Cardano was designed from the ground up using peer-reviewed academic research. Key differences include the Ouroboros PoS protocol (designed before Ethereum's transition), the eUTXO transaction model (vs. Ethereum's account model), native token support without smart contracts, and a formal verification approach to smart contract security. Cardano prioritizes methodical, research-driven development over rapid iteration.",
        },
        {
          question: "Is there a lock-up period for Cardano staking?",
          answer:
            "No. One of Cardano's key advantages is that staked ADA is never locked. You can delegate your ADA to a stake pool and still spend, transfer, or sell it at any time. Your staking rewards are distributed automatically every epoch (5 days). This makes Cardano staking one of the most flexible staking mechanisms among major cryptocurrencies.",
        },
      ]}
      relatedArticles={[
        { title: "How to Buy Ethereum", href: "/investing/learn/how-to-buy-ethereum", category: "Investing" },
        { title: "How to Buy Polkadot", href: "/investing/learn/how-to-buy-polkadot", category: "Investing" },
        { title: "Staking Explained", href: "/investing/learn/staking-explained", category: "Investing" },
      ]}
    >
      <h2 id="choose-exchange">Step 1: Choose an Exchange</h2>
      <p>
        ADA is available on all major cryptocurrency exchanges. Top options include Coinbase
        (beginner-friendly, ADA staking available), Kraken (competitive fees, strong ADA
        liquidity), Binance (highest trading volume for ADA pairs), and Crypto.com (mobile-first
        experience with ADA staking). Consider whether the exchange offers ADA staking if you
        want to earn rewards without managing your own wallet, though self-custody staking
        through a Cardano wallet provides more flexibility, control, and generally higher
        staking yields.
      </p>

      <h2 id="create-account">Step 2: Create and Verify Your Account</h2>
      <p>
        Sign up with your email address and create a strong, unique password. Enable two-factor
        authentication immediately. Complete identity verification with your personal details and
        government-issued photo ID. Verification typically takes minutes through automated
        systems. Once verified, you can deposit funds and begin purchasing ADA.
      </p>

      <h2 id="deposit-funds">Step 3: Deposit Funds</h2>
      <p>
        Deposit funds using a bank transfer for the lowest fees or a debit card for instant
        access. If you already hold other cryptocurrencies, you can deposit them and trade for
        ADA. Consider your investment strategy: a lump sum purchase or spreading buys over time
        through dollar-cost averaging. Many exchanges support automated recurring purchases
        for ADA. Bank transfers are free on most platforms and settle within 1-5 business days
        depending on your country and banking method.
      </p>

      <h2 id="buy-cardano">Step 4: Buy Cardano</h2>
      <p>
        Search for ADA on the exchange and place your order. Market orders buy immediately at
        the current price, while limit orders let you specify a target price. ADA has good
        liquidity on major exchanges, so spreads are typically tight. Use the advanced trading
        interface for lower fees. After your purchase, ADA appears in your exchange wallet
        immediately.
      </p>

      <h2 id="store-cardano">Step 5: Store and Stake Your ADA</h2>
      <p>
        For long-term holding and staking, transfer ADA to a dedicated Cardano wallet. Yoroi
        wallet is a lightweight option available as a browser extension and mobile app. Eternl
        is a feature-rich community wallet with multi-account support. Daedalus is the full-node
        wallet that downloads the entire blockchain (desktop only). All three wallets support
        native ADA delegation for staking. Hardware wallet users can pair a Ledger device with
        Yoroi or Eternl for maximum security while still participating in staking. Always
        backup your seed phrase securely before depositing any funds.
      </p>

      <h2 id="staking-delegation">ADA Staking and Delegation</h2>
      <p>
        Cardano&apos;s staking model is uniquely user-friendly. Delegation is non-custodial, meaning
        your ADA stays in your wallet and remains fully liquid. To stake, open your Cardano
        wallet, browse available stake pools, and delegate to a pool of your choice. Consider
        pool performance (blocks produced), saturation level (pools near saturation produce
        lower rewards), operator fees, and pledge amount. Rewards begin after 2-3 epochs
        (10-15 days) and are distributed every epoch (5 days) thereafter at approximately
        3-5% APY.
      </p>

      <h2 id="cardano-ecosystem">Exploring the Cardano Ecosystem</h2>
      <p>
        The Cardano ecosystem has grown significantly since smart contract capability launched.
        SundaeSwap and Minswap are popular decentralized exchanges for trading Cardano native
        tokens. Liqwid Finance leads in DeFi lending on Cardano. JPG Store is the primary NFT
        marketplace. Cardano also supports native tokens (similar to ERC-20 tokens but without
        requiring smart contracts), making it efficient for token issuance. The ecosystem
        continues to develop through the Catalyst Fund, one of the largest community-governed
        funding mechanisms in crypto.
      </p>
      <p>
        Cardano&apos;s roadmap continues with further scalability improvements through Hydra (a
        Layer 2 scaling solution for high-throughput applications), partner chains, and input
        endorsers. The transition to community governance through the Voltaire era gives ADA
        holders direct control over the protocol&apos;s future through on-chain voting. For new
        Cardano users, start by staking your ADA through Yoroi or Eternl, explore the DeFi
        ecosystem through Minswap, and participate in governance to get a full understanding
        of the Cardano ecosystem.
      </p>
    </LearnPageLayout>
  );
}
