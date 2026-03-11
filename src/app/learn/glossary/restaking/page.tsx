import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Restaking? Definition & Guide (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Learn what restaking means in crypto, how EigenLayer pioneered the concept, the benefits and risks, and how restaking creates new yield opportunities.",
};

export default function RestakingPage() {
  return (
    <LearnPageLayout title="What Is Restaking?" categoryName="Learn Crypto" categorySlug="learn" readTime="5 min read"
      intro="Restaking is the practice of using already-staked cryptocurrency to simultaneously secure additional protocols or services beyond the original blockchain. Pioneered by EigenLayer on Ethereum, restaking allows staked ETH (or liquid staking tokens) to opt into securing additional Actively Validated Services (AVSs), earning extra yield in exchange for additional slashing risk. Restaking has emerged as one of the most significant innovations in blockchain security and tokenomics."
      toc={[{ id: "definition", title: "What Is Restaking?", level: 2 }, { id: "eigenlayer", title: "EigenLayer and AVSs", level: 2 }, { id: "liquid-restaking", title: "Liquid Restaking", level: 2 }, { id: "risks", title: "Restaking Risks", level: 2 }]}
      faqs={[{ question: "How does restaking differ from regular staking?", answer: "Regular staking secures one network. Restaking takes that same staked capital and uses it to secure additional services simultaneously. It is like using your house as collateral for one mortgage versus using it for multiple loans — the potential returns are higher but so are the risks. Your staked ETH earns base staking yield plus additional restaking yield." },
        { question: "What are AVSs?", answer: "Actively Validated Services are protocols that use restaked ETH for security. Examples include oracle networks, data availability layers, cross-chain bridges, and decentralized sequencers. Instead of bootstrapping their own validator sets from scratch, these services rent security from Ethereum's restaked pool, benefiting from Ethereum's existing economic security." }]}
      relatedArticles={[{ title: "Restaking Explained", href: "/learn/restaking-explained", category: "Learn Crypto" }, { title: "Liquid Staking", href: "/learn/glossary/liquid-staking", category: "Glossary" }, { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" }, { title: "Validator", href: "/learn/glossary/validator", category: "Glossary" }]}
    >
      <h2 id="definition">What Is Restaking?</h2>
      <p>Restaking extends the utility of staked assets by allowing them to secure multiple protocols simultaneously. In the traditional model, staked ETH only secures the Ethereum network. With restaking, that same ETH can also secure oracle networks, bridges, data availability layers, and other services. The restaked assets face additional slashing conditions from each service they secure, creating a risk-return tradeoff that stakers must evaluate carefully.</p>

      <h2 id="eigenlayer">EigenLayer and AVSs</h2>
      <p>EigenLayer is the pioneering restaking protocol on Ethereum. It allows ETH stakers and liquid staking token holders to opt into additional slashing conditions imposed by AVSs. AVSs pay restakers for the security they provide, creating a new yield layer on top of base staking rewards. This model solves the cold-start problem for new protocols that need economic security but cannot afford to bootstrap an independent validator set.</p>

      <h2 id="liquid-restaking">Liquid Restaking</h2>
      <p>Liquid restaking protocols like Ether.fi, Puffer, Renzo, and Kelp issue liquid receipt tokens for restaked positions. These tokens (eETH, pufETH, ezETH, rsETH) can be used in DeFi while the underlying assets earn both staking and restaking rewards. This creates a three-layer yield stack: base staking yield, restaking yield from AVSs, and DeFi yield from using the liquid restaking token as collateral or liquidity.</p>

      <h2 id="risks">Restaking Risks</h2>
      <p>Restaking introduces cascading slashing risk: if an AVS detects a violation, it can slash the restaked position, affecting not just the individual staker but potentially the broader liquid restaking token backing. Over-leverage through recursive restaking and DeFi strategies compounds these risks. The nascent state of AVS slashing mechanisms means the full risk profile is not yet proven through adversarial conditions. Restakers should carefully evaluate which AVSs they opt into and the total exposure across their restaking positions.</p>
    </LearnPageLayout>
  );
}
