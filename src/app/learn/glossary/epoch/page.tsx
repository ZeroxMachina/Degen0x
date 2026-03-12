import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is an Epoch in Blockchain? Definition & Guide (${CURRENT_YEAR}) | degen0x`,
  description: "Learn what an epoch means in blockchain, how epochs work on different networks, their role in staking and validation, and why they matter for consensus.",
};

export default function EpochPage() {
  return (
    <LearnPageLayout title="What Is an Epoch?" categoryName="Learn Crypto" categorySlug="learn" readTime="4 min read"
      intro="An epoch is a defined period of time or set of blocks in a blockchain network during which certain protocol operations occur. Epochs are used to organize validator duties, calculate rewards, adjust network parameters, and achieve finality checkpoints. The length and function of epochs vary by blockchain, but they serve as the fundamental timing unit for proof-of-stake consensus mechanisms."
      toc={[
        { id: "definition", title: "definition", level: 2 },
        { id: "what-is-an-epoch", title: "What Is an Epoch?", level: 2 },
        { id: "epochs-by-chain", title: "epochs-by-chain", level: 2 },
        { id: "epochs-on-different-chains", title: "Epochs on Different Chains", level: 2 },
        { id: "epoch-functions", title: "epoch-functions", level: 2 },
        { id: "what-happens-during-an-epoch", title: "What Happens During an Epoch", level: 2 },
        { id: "importance", title: "importance", level: 2 },
        { id: "why-epochs-matter", title: "Why Epochs Matter", level: 2 }
      ]}
      faqs={[{ question: "How long is an Ethereum epoch?", answer: "An Ethereum epoch consists of 32 slots, each 12 seconds long, making a total epoch duration of 6.4 minutes. Ethereum achieves finality every two epochs (12.8 minutes). During each epoch, every active validator gets one opportunity to attest to blocks and potentially propose a block." },
        { question: "How do epochs relate to staking rewards?", answer: "Staking rewards are typically calculated and distributed on an epoch basis. Validators earn rewards for successfully attesting and proposing during their assigned epoch slots. Rewards accumulate each epoch and may be claimable after a certain number of epochs depending on the network." }]}
      relatedArticles={[{ title: "Finality", href: "/learn/glossary/finality", category: "Glossary" }, { title: "Validator", href: "/learn/glossary/validator", category: "Glossary" }, { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn Crypto" }, { title: "Consensus", href: "/learn/glossary/consensus", category: "Glossary" }]}
    >
      <h2 id="definition">What Is an Epoch?</h2>
      <p>An epoch is a fixed time period in a blockchain&apos;s consensus protocol that serves as a cycle for validator operations. Think of it as a shift rotation for validators: at the start of each epoch, the protocol assigns duties, and at the end, it tallies performance and distributes rewards. Epochs create predictable, recurring checkpoints that help the network coordinate among thousands of validators without constant communication.</p>

      <h2 id="epochs-by-chain">Epochs on Different Chains</h2>
      <p>Ethereum epochs last 6.4 minutes (32 slots of 12 seconds). Solana epochs last approximately 2-3 days and determine when stake delegation changes take effect. Cosmos chains typically do not use epochs in the same way, instead using block-by-block consensus. Polkadot uses eras (similar to epochs) lasting 24 hours for validator election and reward distribution. Cardano epochs last 5 days. Each chain optimizes epoch length for its specific consensus requirements.</p>

      <h2 id="epoch-functions">What Happens During an Epoch</h2>
      <p>During an Ethereum epoch, each validator is assigned to a committee for one slot, where they attest to the chain head. One validator per slot is randomly selected to propose a block. At epoch boundaries, the protocol finalizes the previous epoch (if conditions are met), shuffles validator assignments, and updates the effective balances used for reward calculations. Stake activations and exits are also processed at epoch boundaries.</p>

      <h2 id="importance">Why Epochs Matter</h2>
      <p>Epochs are important for understanding staking mechanics, reward timing, and withdrawal delays. When you initiate an unstaking request, it typically takes effect at the next epoch boundary. Validator reward calculations depend on epoch participation rates. Network upgrades and parameter changes often activate at specific epoch numbers. For developers and stakers, understanding epoch mechanics helps predict when actions take effect and when rewards are distributed.</p>
    </LearnPageLayout>
  );
}
