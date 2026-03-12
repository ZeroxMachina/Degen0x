import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Unbonding? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what unbonding means in crypto staking, why unbonding periods exist, how long they take on different networks, and strategies for managing unbonding.",
};

export default function UnbondingPage() {
  return (
    <LearnPageLayout title="What Is Unbonding?" categoryName="Learn Crypto" categorySlug="learn" readTime="4 min read"
      intro="Unbonding is the process of withdrawing staked tokens from a proof-of-stake network, returning them to a liquid, transferable state. During the unbonding period, tokens are locked and do not earn rewards but also cannot be transferred or traded. Unbonding periods exist as a security mechanism, giving the network time to detect and punish malicious validators before they can withdraw their stake and escape penalties."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-unbonding", title: "What Is Unbonding?", level: 2 },
        { id: "unbonding-periods", title: "unbonding-periods", level: 2 },
        { id: "unbonding-periods-by-network", title: "Unbonding Periods by Network", level: 2 },
        { id: "why-unbonding-exists", title: "why-unbonding-exists", level: 2 },
        { id: "why-unbonding-periods-exist", title: "Why Unbonding Periods Exist", level: 2 },
        { id: "strategies", title: "strategies", level: 2 },
        { id: "managing-unbonding", title: "Managing Unbonding", level: 2 }
      ]}
      faqs={[{ question: "Can I cancel an unbonding request?", answer: "On some networks, yes. Cosmos chains allow you to cancel unbonding and redelegate to a new validator. Ethereum allows validators to rejoin the active set during the exit queue. Check your specific network's rules, as cancellation policies vary. Some protocols charge fees for cancelling unbonding requests." },
        { question: "Do I earn rewards during unbonding?", answer: "No. Once you initiate unbonding, your tokens stop earning staking rewards immediately. They remain locked for the full unbonding period but generate no yield. This creates an opportunity cost that you should factor into any decision to unstake, especially during market volatility when you might want quick access to your tokens." }]}
      relatedArticles={[{ title: "Bonding", href: "/learn/glossary/bonding", category: "Glossary" }, { title: "Liquid Staking", href: "/learn/glossary/liquid-staking", category: "Glossary" }, { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" }, { title: "Delegator", href: "/learn/glossary/delegator", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Unbonding?</h2>
      <p>Unbonding is the reverse of bonding: releasing staked tokens from their locked state. When you initiate unbonding, your tokens enter a waiting period during which they are neither earning rewards nor available for use. After the unbonding period completes, the tokens return to your liquid balance and can be freely transferred, traded, or restaked. The unbonding process is typically irreversible once started on most networks.</p>

      <h2 id="unbonding-periods">Unbonding Periods by Network</h2>
      <p>Cosmos ecosystem chains have a standard 21-day unbonding period. Polkadot requires 28 days. Ethereum&apos;s withdrawal queue varies from hours to days depending on demand. Solana has a short cooldown of approximately 2-3 days (one epoch). Avalanche uses a flexible model with a minimum 2-week staking period. These periods are set by each network&apos;s governance and balance security needs with user liquidity preferences.</p>

      <h2 id="why-unbonding-exists">Why Unbonding Periods Exist</h2>
      <p>Unbonding periods serve a critical security function. They prevent attackers from staking tokens, performing a malicious action (like double-signing), and immediately withdrawing their stake before the slashing penalty can be applied. The delay gives the network and its validators time to detect, prove, and penalize any misbehavior. Without unbonding periods, the economic security model of proof-of-stake would be significantly weakened.</p>

      <h2 id="strategies">Managing Unbonding</h2>
      <p>Liquid staking is the primary strategy for avoiding unbonding constraints. Protocols like Lido and Stride issue liquid tokens that represent staked positions and can be traded immediately on secondary markets. If you need to exit a staking position urgently, you can sell the liquid staking token (potentially at a small discount) rather than waiting for the full unbonding period. Plan your liquidity needs in advance and consider keeping a portion of your holdings liquid for emergencies.</p>
    </LearnPageLayout>
  );
}
