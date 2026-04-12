import { Metadata } from "next";
import Link from "next/link";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import BasedRollupsVisualizer from "@/components/BasedRollupsVisualizer";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "Based Rollups & Preconfirmations Guide 2026 — How They Work | degen0x",
  description:
    "Based rollups let Ethereum validators sequence L2 transactions — no centralized sequencer needed. Add preconfirmations and you get 100ms finality with full L1 security. The complete 2026 guide.",
  keywords: [
    "based rollups explained",
    "based rollups guide 2026",
    "preconfirmations ethereum",
    "what are based rollups",
    "based sequencing ethereum",
    "preconfs ethereum",
    "ethereum layer 2 scaling 2026",
    "based rollups vs optimistic rollups",
    "justin drake based rollups",
    "ethereum preconfirmations how it works",
  ],
  openGraph: {
    title: "Based Rollups & Preconfirmations: The Complete 2026 Guide | degen0x",
    description:
      "Based rollups replace centralized sequencers with Ethereum's own validators. Pair them with preconfirmations and you get near-instant finality with zero trust assumptions.",
    url: "https://degen0x.com/learn/based-rollups-preconfirmations-guide",
    type: "article",
    publishedTime: "2026-03-16T00:00:00Z",
    modifiedTime: "2026-03-16T00:00:00Z",
    images: [
      {
        url: "https://degen0x.com/og-based-rollups-preconfirmations-guide.png",
        width: 1200,
        height: 630,
        alt: "Based Rollups & Preconfirmations Guide 2026 — degen0x",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Based Rollups & Preconfirmations Explained 2026",
    description:
      "No centralized sequencer. 100ms finality. Full Ethereum security. Here's exactly how based rollups + preconfs work.",
  },
};

// ─── Structured Data ─────────────────────────────────────────────────────────
const articleSchema = generateArticleSchema({
  title: "Based Rollups & Preconfirmations Guide 2026 — How They Work",
  description:
    "Based rollups let Ethereum validators sequence L2 transactions — no centralized sequencer needed. Add preconfirmations and you get 100ms finality with full L1 security.",
  url: "https://degen0x.com/learn/based-rollups-preconfirmations-guide",
  datePublished: "2026-03-16T00:00:00Z",
  dateModified: "2026-03-16T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-based-rollups-preconfirmations-guide.png",
  wordCount: 3400,
});

const faqSchema = generateFAQSchema([
  {
    question: "What is a based rollup?",
    answer:
      "A based rollup is a Layer 2 rollup where transaction ordering (sequencing) is handled by Ethereum's own Layer 1 block proposers — not a separate, centralized sequencer. This means the rollup inherits Ethereum's decentralization and censorship resistance without running its own validator set.",
  },
  {
    question: "What is the difference between a based rollup and a regular rollup?",
    answer:
      "A regular rollup (like early Arbitrum or Optimism) uses a single centralized sequencer to order transactions before they're posted to Ethereum. A based rollup removes this sequencer entirely and uses Ethereum L1 validators as the ordering mechanism, eliminating the single point of failure and censorship risk.",
  },
  {
    question: "What are preconfirmations (preconfs) in Ethereum?",
    answer:
      "Preconfirmations are off-chain commitments made by Ethereum validators to users, guaranteeing that their transaction will be included in the next block. They let users get ~100ms transaction guarantees instead of waiting the full 12-second Ethereum block time, and are enforced by validator slashing if the commitment is broken.",
  },
  {
    question: "Why do based rollups need preconfirmations?",
    answer:
      "Based rollups inherit Ethereum's 12-second block time, which makes the user experience feel slow compared to rollups with their own fast sequencers. Preconfirmations solve this by letting validators commit to including a transaction before the block is finalized, giving users near-instant (~100ms) confirmations while preserving L1 security.",
  },
  {
    question: "Are based rollups live on Ethereum today?",
    answer:
      "Based rollups are an active area of Ethereum research and development as of March 2026. Taiko is one of the most advanced based rollup implementations currently live. EIP-7917 (deterministic proposer lookahead) is a key infrastructure piece being finalized to support based preconfs at scale.",
  },
  {
    question: "Who invented based rollups?",
    answer:
      "The core concept was originally described by Vitalik Buterin in 2021 under the name 'Total Anarchy.' Ethereum Foundation researcher Justin Drake formalized the 'based rollup' terminology and design in a 2023 research post, which sparked the current wave of development.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

// ─── Page ────────────────────────────────────────────────────────────────────
export default function BasedRollupsGuide() {
  return (
    <div style={{ minHeight: "100vh", background: "#0d1117", color: "#e6edf3" }}>
      <StructuredData data={combinedSchema} />

      <article style={{ maxWidth: 820, margin: "0 auto", padding: "40px 20px 80px" }}>

        {/* ── Breadcrumb ── */}
        <nav aria-label="Breadcrumb" style={{ marginBottom: 24, fontSize: 13, color: "#8b949e" }}>
          <Link href="/" style={{ color: "#8b949e", textDecoration: "none" }}>Home</Link>
          <span aria-hidden="true" style={{ margin: "0 8px" }}>›</span>
          <Link href="/learn" style={{ color: "#8b949e", textDecoration: "none" }}>Learn</Link>
          <span aria-hidden="true" style={{ margin: "0 8px" }}>›</span>
          <span style={{ color: "#58a6ff" }}>Based Rollups &amp; Preconfirmations</span>
        </nav>

        {/* ── Header ─────────────────────────────────────────────────────── */}
        <div style={{ marginBottom: 32 }}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700,
              background: "#6366f120", color: "#818cf8", border: "1px solid #6366f140",
            }}>
              Ethereum
            </span>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700,
              background: "#8b5cf620", color: "#a78bfa", border: "1px solid #8b5cf640",
            }}>
              Advanced
            </span>
            <span style={{
              padding: "3px 10px", borderRadius: 6, fontSize: 12, fontWeight: 700,
              background: "#22c55e20", color: "#4ade80", border: "1px solid #22c55e40",
            }}>
              Updated March 2026
            </span>
          </div>

          <h1 style={{
            fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
            fontWeight: 800,
            lineHeight: 1.2,
            marginBottom: 14,
            background: "linear-gradient(135deg, #6366f1, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Based Rollups & Preconfirmations: The Complete 2026 Guide
          </h1>

          <p style={{ color: "#c9d1d9", fontSize: 17, lineHeight: 1.75, marginBottom: 12 }}>
            Every Layer 2 today relies on a centralized sequencer — a single server that decides which
            transactions get included and in what order. It's crypto's dirty secret. Based rollups fix
            this by routing transaction ordering through Ethereum's own validators instead. Combine that
            with <strong style={{ color: "#e6edf3" }}>preconfirmations</strong> — off-chain commitments
            from validators that give you ~100ms guarantees before the block is even built — and you get
            something genuinely new: decentralized sequencing with near-instant finality and full L1 security.
          </p>
          <div style={{ fontSize: 13, color: "#8b949e" }}>Updated March 2026 · 14 min read</div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-16"
          updatedDate="2026-03-16"
          readingTime={6}
          section="learn"
        />


        {/* ── Key Stats ──────────────────────────────────────────────────── */}
        <div style={{
          background: "#161b22", border: "1px solid #30363d", borderRadius: 12,
          padding: 20, marginBottom: 32,
        }}>
          <h2 style={{
            fontSize: 13, fontWeight: 800, color: "#58a6ff", marginBottom: 14,
            textTransform: "uppercase", letterSpacing: "0.05em",
          }}>
            ⚡ Based Rollups: Key Facts (March 2026)
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12 }}>
            {[
              { label: "Concept Origin", value: "2021 (Vitalik)" },
              { label: "Term Coined", value: "Justin Drake, 2023" },
              { label: "Preconf Latency", value: "~100ms" },
              { label: "Ethereum Block Time", value: "12 seconds" },
              { label: "Leading Implementation", value: "Taiko" },
              { label: "Key Infrastructure EIP", value: "EIP-7917" },
            ].map((s) => (
              <div key={s.label} style={{
                padding: "12px 14px", background: "#0d1117", borderRadius: 8,
                border: "1px solid #30363d",
              }}>
                <div style={{ fontSize: 11, color: "#8b949e", marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3" }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Table of Contents ──────────────────────────────────────────── */}
        <nav aria-label="Table of contents" style={{
          background: "#161b22", border: "1px solid #30363d", borderRadius: 12,
          padding: 20, marginBottom: 40,
        }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: "#58a6ff", marginBottom: 12 }}>
            Table of Contents
          </h2>
          <ol style={{ paddingLeft: 20, color: "#8b949e", fontSize: 14, lineHeight: 2.1, margin: 0 }}>
            <li><a href="#sequencer-problem" style={{ color: "#58a6ff", textDecoration: "none" }}>The Sequencer Problem No One Talks About</a></li>
            <li><a href="#what-are-based-rollups" style={{ color: "#58a6ff", textDecoration: "none" }}>What Are Based Rollups?</a></li>
            <li><a href="#how-based-sequencing-works" style={{ color: "#58a6ff", textDecoration: "none" }}>How Based Sequencing Works</a></li>
            <li><a href="#what-are-preconfs" style={{ color: "#58a6ff", textDecoration: "none" }}>What Are Preconfirmations?</a></li>
            <li><a href="#based-plus-preconfs" style={{ color: "#58a6ff", textDecoration: "none" }}>Based Rollups + Preconfs: The Full Picture</a></li>
            <li><a href="#transaction-flow-visualizer" style={{ color: "#58a6ff", textDecoration: "none" }}>Transaction Flow Visualizer (Interactive)</a></li>
            <li><a href="#comparison" style={{ color: "#58a6ff", textDecoration: "none" }}>Based vs Traditional Rollups: Side-by-Side</a></li>
            <li><a href="#implementations" style={{ color: "#58a6ff", textDecoration: "none" }}>Who Is Building Based Rollups?</a></li>
            <li><a href="#risks" style={{ color: "#58a6ff", textDecoration: "none" }}>Risks & Trade-offs</a></li>
            <li><a href="#what-it-means-for-you" style={{ color: "#58a6ff", textDecoration: "none" }}>What This Means for You as a User</a></li>
            <li><a href="#faq" style={{ color: "#58a6ff", textDecoration: "none" }}>Frequently Asked Questions</a></li>
          </ol>
        </nav>

        {/* ── Content Body ───────────────────────────────────────────────── */}
        <div style={{ color: "#c9d1d9", fontSize: 15, lineHeight: 1.85 }}>

          {/* 1. The Sequencer Problem */}
          <section id="sequencer-problem" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
              1. The Sequencer Problem No One Talks About
            </h2>
            <p style={{ marginBottom: 16 }}>
              When you send a transaction on Arbitrum, Optimism, Base, or virtually any other Layer 2
              today, it doesn't go straight to Ethereum. It goes to a{" "}
              <strong style={{ color: "#e6edf3" }}>sequencer</strong> — a centralized server controlled
              by the rollup's operator. That sequencer decides the order of your transaction relative to
              everyone else's, bundles them up, and only then posts a batch to Ethereum.
            </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            This is one of those topics where surface-level understanding is dangerous. We've seen traders lose significant capital from misconceptions covered in this guide.
          </p>
        </div>
            <p style={{ marginBottom: 16 }}>
              Technically, this sequencer inherits Ethereum's security for finality (you can always force
              transactions through the L1 if the sequencer ignores you). But in practice, it creates real
              risks most users never consider:
            </p>

            <div style={{
              background: "#161b22", border: "1px solid #f8514930", borderRadius: 12,
              padding: 20, marginBottom: 20,
            }}>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: "#f85149", marginBottom: 12 }}>
                ⚠️ The Four Risks of Centralized Sequencers
              </h3>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  {
                    title: "Censorship",
                    desc: "A sequencer can choose to delay or exclude your transaction — especially relevant if you're trading against a well-connected market maker.",
                  },
                  {
                    title: "Single point of failure",
                    desc: "If the sequencer goes down, the L2 goes down. Several major rollups have experienced multi-hour outages from sequencer failures.",
                  },
                  {
                    title: "MEV extraction",
                    desc: "Because the sequencer controls ordering, it can front-run, back-run, or sandwich user trades — capturing MEV that would otherwise flow to users or validators.",
                  },
                  {
                    title: "Regulatory risk",
                    desc: "A sequencer is a legal entity. It can be compelled to comply with sanctions lists, block addresses, or hand over data.",
                  },
                ].map((risk) => (
                  <div key={risk.title} style={{
                    padding: "12px 14px", background: "#0d1117", borderRadius: 8,
                    border: "1px solid #30363d",
                  }}>
                    <span style={{ fontWeight: 700, color: "#e6edf3" }}>{risk.title}: </span>
                    <span style={{ color: "#c9d1d9" }}>{risk.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ marginBottom: 16 }}>
              The broader Ethereum community has been aware of this problem since the earliest rollup
              days. The question was always: what do you replace the sequencer with? Running a decentralized
              sequencer set costs money, introduces latency, and creates governance headaches. Based rollups
              offer a different answer: don't replace it with a new thing — use the thing that's already
              there and already proven at scale.
            </p>
          </section>

          {/* 2. What Are Based Rollups */}
          <section id="what-are-based-rollups" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
              2. What Are Based Rollups?
            </h2>
            <p style={{ marginBottom: 16 }}>
              A <strong style={{ color: "#e6edf3" }}>based rollup</strong> — also called an
              L1-sequenced rollup — is a Layer 2 where transaction ordering is delegated entirely to
              Ethereum's own block proposers. There is no separate sequencer. Instead, the next Ethereum
              L1 validator can, in collaboration with L1 searchers and builders, permissionlessly include
              the next rollup block as part of the next L1 block.
            </p>

            <div style={{
              background: "#161b22", border: "1px solid #6366f140", borderRadius: 12,
              padding: 20, marginBottom: 20,
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#818cf8", marginBottom: 8 }}>
                📖 Quick Definition
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: "#c9d1d9", lineHeight: 1.7 }}>
                A rollup is said to be "based" when its sequencing is driven by the base Layer 1. The
                term was formalized by Ethereum Foundation researcher{" "}
                <strong style={{ color: "#e6edf3" }}>Justin Drake</strong> in a 2023 research post, though
                the concept traces back to Vitalik Buterin's 2021 "Total Anarchy" proposal. If the next
                L1 proposer can include your rollup transaction without anyone's permission, the rollup is based.
              </p>
            </div>

            <p style={{ marginBottom: 16 }}>
              The key insight is that Ethereum already solves decentralized transaction ordering — it
              does it for the L1 every 12 seconds. Validators compete to propose blocks, MEV is captured
              through a competitive market (PBS), and the whole system is secured by hundreds of billions
              of dollars in staked `ETH`. Why build an entirely new parallel system when you can piggyback
              on the existing one?
            </p>
            <p style={{ marginBottom: 16 }}>
              When you use a based rollup, your transaction goes into the same mempool environment
              as L1 transactions. Ethereum's block builders — the same entities building blocks for
              Ethereum mainnet today — can include your L2 transaction as part of the next L1 block.
              The rollup's execution layer processes it, but the sequencing decision was made by
              Ethereum's existing infrastructure.
            </p>
          </section>

          {/* 3. How Based Sequencing Works */}
          <section id="how-based-sequencing-works" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
              3. How Based Sequencing Works
            </h2>
            <p style={{ marginBottom: 16 }}>
              Under the hood, Ethereum already uses a separation between the validator who proposes a
              block (the <strong style={{ color: "#e6edf3" }}>proposer</strong>) and the entity who builds
              the block content (the <strong style={{ color: "#e6edf3" }}>builder</strong>). This is called
              Proposer-Builder Separation, or PBS. Builders compete in a competitive auction for the right
              to fill a block with the most profitable set of transactions; the proposer simply picks the
              highest-paying builder.
            </p>
            <p style={{ marginBottom: 16 }}>
              Based rollups plug directly into this existing PBS market. Builders who are already
              constructing L1 blocks can additionally include L2 rollup transactions in their block bids.
              When the proposer selects that block, both L1 and L2 transactions are finalized together in
              a single atomic operation. The result is that based rollup transactions achieve the same
              censorship resistance and decentralization as ordinary Ethereum transactions — because they
              literally go through the same process.
            </p>

            <div style={{
              background: "#161b22", border: "1px solid #06b6d440", borderRadius: 12,
              padding: 20, marginBottom: 20,
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#06b6d4", marginBottom: 12 }}>
                💡 Based Sequencing Step-by-Step
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { step: "1", text: "User submits a transaction to the based rollup's mempool." },
                  { step: "2", text: "L1 block builders see the transaction alongside regular L1 transactions." },
                  { step: "3", text: "Builders include the rollup transaction in their block bid, optimizing for MEV." },
                  { step: "4", text: "The L1 proposer selects the highest-bid block and proposes it to Ethereum." },
                  { step: "5", text: "The block is finalized on Ethereum, settling both L1 and L2 transactions simultaneously." },
                  { step: "6", text: "The rollup's execution layer processes the state update from the finalized block." },
                ].map((item) => (
                  <div key={item.step} style={{
                    display: "flex", gap: 12, alignItems: "flex-start",
                    padding: "10px 12px", background: "#0d1117", borderRadius: 8, border: "1px solid #30363d",
                  }}>
                    <span style={{
                      width: 24, height: 24, background: "#6366f120", border: "1px solid #6366f140",
                      borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 12, fontWeight: 700, color: "#818cf8", flexShrink: 0,
                    }}>{item.step}</span>
                    <span style={{ fontSize: 14, color: "#c9d1d9" }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ marginBottom: 16 }}>
              This design has a powerful side effect: <strong style={{ color: "#e6edf3" }}>synchronous
              composability</strong>. Because L1 and L2 transactions are included in the same block,
              a smart contract on Ethereum mainnet can atomically interact with a contract on the based
              rollup in a single transaction. This was impossible with traditional rollups that had their
              own separate sequencer timing. Think of it like combining two separate call stacks that used
              to require a multi-block round trip into a single atomic operation.
            </p>
          </section>

          {/* 4. Preconfirmations */}
          <section id="what-are-preconfs" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
              4. What Are Preconfirmations?
            </h2>
            <p style={{ marginBottom: 16 }}>
              There's an obvious problem with based rollups: Ethereum's block time is 12 seconds. If your
              transaction is sequenced by an L1 validator, you're stuck waiting up to 12 seconds just to
              know if it got included. Rollups with their own sequencers can give you a soft confirmation
              in under a second. That's a brutal UX gap.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: "#e6edf3" }}>Preconfirmations</strong> (commonly shortened to
              "preconfs") solve this. A preconf is an off-chain commitment from an Ethereum validator
              to a user, promising that a specific transaction will be included in their next block.
              The validator sends you a cryptographic commitment — essentially a signed IOU — within
              ~100 milliseconds of receiving your transaction. You now have a reliable guarantee
              without waiting for block finalization.
            </p>

            <div style={{
              background: "#161b22", border: "1px solid #22c55e40", borderRadius: 12,
              padding: 20, marginBottom: 20,
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#4ade80", marginBottom: 8 }}>
                🍽️ The Restaurant Reservation Analogy
              </h3>
              <p style={{ margin: 0, fontSize: 14, color: "#c9d1d9", lineHeight: 1.7 }}>
                Think of a preconf like a restaurant reservation. When you book a table, the restaurant
                hasn't seated you yet — you're not there. But you've received a trustworthy commitment
                that a spot will be ready for you at the specified time. You don't have to show up and
                wait in line hoping there's space. Preconfs give your transaction the same guarantee:
                you get a signed commitment from the next block proposer that your transaction will be
                included, long before the block is actually built.
              </p>
            </div>

            <p style={{ marginBottom: 16 }}>
              Preconfs come in three flavors, depending on how strong a guarantee you want:
            </p>

            <div style={{ display: "grid", gap: 12, marginBottom: 20 }}>
              {[
                {
                  type: "Inclusion (DA)",
                  color: "#58a6ff",
                  bg: "#58a6ff20",
                  border: "#58a6ff40",
                  desc: "The validator commits to including your transaction's data in their block. Weakest guarantee — your transaction is in but execution outcome isn't guaranteed.",
                },
                {
                  type: "Ordering (Sequencing)",
                  color: "#a78bfa",
                  bg: "#8b5cf620",
                  border: "#8b5cf640",
                  desc: "The validator commits to including your transaction at a specific position in the block. You know your trade won't be front-run by anything else.",
                },
                {
                  type: "Execution (Settlement)",
                  color: "#4ade80",
                  bg: "#22c55e20",
                  border: "#22c55e40",
                  desc: "The strongest form — the validator commits to a specific execution outcome (e.g., you'll receive at least X tokens from this swap). This is what most DeFi users actually care about.",
                },
              ].map((t) => (
                <div key={t.type} style={{
                  padding: 16, background: t.bg, borderRadius: 10, border: `1px solid ${t.border}`,
                }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: t.color, marginBottom: 6 }}>{t.type}</div>
                  <div style={{ fontSize: 14, color: "#c9d1d9", lineHeight: 1.6 }}>{t.desc}</div>
                </div>
              ))}
            </div>

            <p style={{ marginBottom: 16 }}>
              Preconfs are enforced through a <strong style={{ color: "#e6edf3" }}>slashing mechanism</strong>.
              If a validator issues a preconf and then reneges — either by excluding your transaction or
              by delivering a different execution result — they can be slashed (lose a portion of their
              staked `ETH`). This economic penalty is what gives preconfs their teeth. A validator making
              a preconf is putting real money on the line.
            </p>
            <p style={{ marginBottom: 16 }}>
              Validators who want to issue preconfs opt in to this service. They register their intent
              to act as preconf providers, and users can choose to route transactions to them (paying a
              small premium for the speed guarantee). Validators who'd rather not take on slashing risk
              can stay in their standard role as block proposers.
            </p>
          </section>

          {/* 5. Based + Preconfs Together */}
          <section id="based-plus-preconfs" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
              5. Based Rollups + Preconfs: The Full Picture
            </h2>
            <p style={{ marginBottom: 16 }}>
              Individually, based rollups and preconfirmations each solve different problems. Together
              they form a coherent solution to Ethereum's scaling challenge:
            </p>

            <div style={{
              background: "#161b22", border: "1px solid #30363d", borderRadius: 12,
              padding: 20, marginBottom: 24,
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#818cf8", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Based Rollups Solve
                  </div>
                  {[
                    "Centralized sequencer risk",
                    "Censorship vulnerability",
                    "MEV extraction by operators",
                    "Single point of failure",
                    "Fragmented L1/L2 composability",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
                      <span style={{ color: "#4ade80", marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: "#c9d1d9" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#06b6d4", marginBottom: 10, textTransform: "uppercase", letterSpacing: "0.04em" }}>
                    Preconfs Solve
                  </div>
                  {[
                    "Slow 12-second confirmation time",
                    "Uncertain execution outcomes",
                    "Poor UX vs centralized systems",
                    "Front-running risk on DEXes",
                    "Latency-sensitive application limits",
                  ].map((item) => (
                    <div key={item} style={{ display: "flex", gap: 8, marginBottom: 6, alignItems: "flex-start" }}>
                      <span style={{ color: "#06b6d4", marginTop: 2, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 13, color: "#c9d1d9" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p style={{ marginBottom: 16 }}>
              The combination delivers something no previous L2 design could claim: a rollup with the
              decentralization and security of Ethereum itself, combined with user-facing speed that
              approaches centralized competitors. You're not choosing between fast-and-centralized vs
              slow-and-decentralized. You're getting both.
            </p>
            <p style={{ marginBottom: 16 }}>
              <strong style={{ color: "#e6edf3" }}>EIP-7917</strong>, which introduces deterministic
              proposer lookahead, is one of the key infrastructure changes landing in the Ethereum
              protocol to support this model. It lets validators (and users) know ahead of time which
              validator will propose the next block — a prerequisite for meaningful preconfs, since you
              need to know who to request the commitment from.
            </p>
          </section>

          {/* 6. Interactive Visualizer */}
          <section id="transaction-flow-visualizer" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>
              6. Transaction Flow Visualizer
            </h2>
            <p style={{ color: "#8b949e", fontSize: 14, marginBottom: 20 }}>
              Select a scenario below to see how a transaction flows through each architecture.
            </p>
            <BasedRollupsVisualizer />
          </section>

          {/* 7. Comparison Table */}
          <section id="comparison" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
              7. Based vs Traditional Rollups: Side-by-Side
            </h2>

            <div style={{ overflowX: "auto", marginBottom: 20 }}>
              <table style={{
                width: "100%", borderCollapse: "collapse",
                fontSize: 14, background: "#161b22", borderRadius: 12, overflow: "hidden",
              }}>
                <thead>
                  <tr style={{ background: "#0d1117" }}>
                    {["Feature", "Traditional Rollup", "Based Rollup", "Based + Preconfs"].map((h) => (
                      <th key={h} style={{
                        padding: "12px 14px", textAlign: "left", color: "#58a6ff",
                        fontWeight: 700, fontSize: 13, borderBottom: "1px solid #30363d",
                        whiteSpace: "nowrap",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Sequencer", "Centralized operator", "Ethereum validators", "Ethereum validators"],
                    ["Censorship resistance", "❌ Vulnerable", "✅ Full L1 level", "✅ Full L1 level"],
                    ["Liveness", "⚠️ Operator dependent", "✅ Ethereum-level", "✅ Ethereum-level"],
                    ["Soft confirmation", "~500ms (sequencer)", "12 seconds (L1 block)", "~100ms (preconf)"],
                    ["L1/L2 composability", "⚠️ Async only", "✅ Synchronous", "✅ Synchronous"],
                    ["MEV distribution", "Captured by operator", "Competitive L1 market", "Competitive L1 market"],
                    ["New validator set", "Sometimes required", "❌ None needed", "❌ None needed"],
                    ["Regulatory exposure", "High (entity controls)", "Low (decentralized)", "Low (decentralized)"],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: "1px solid #30363d" }}>
                      {row.map((cell, j) => (
                        <td key={j} style={{
                          padding: "11px 14px", color: j === 0 ? "#e6edf3" : "#c9d1d9",
                          fontWeight: j === 0 ? 600 : 400,
                          background: i % 2 === 0 ? "transparent" : "#0d111740",
                        }}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 8. Who Is Building */}
          <section id="implementations" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
              8. Who Is Building Based Rollups?
            </h2>
            <p style={{ marginBottom: 16 }}>
              Based rollups are moving from whitepaper to production as of 2026, with several teams
              in different stages of deployment:
            </p>

            <div style={{ display: "grid", gap: 14, marginBottom: 20 }}>
              {[
                {
                  name: "Taiko",
                  status: "Live on Mainnet",
                  statusColor: "#4ade80",
                  statusBg: "#22c55e20",
                  desc: "The most mature based rollup implementation, live on Ethereum mainnet. Taiko uses a based sequencing model where Ethereum validators propose Taiko blocks as part of their L1 block proposals. It also has a custom preconf design under active development.",
                },
                {
                  name: "Ethereum Foundation Research",
                  status: "Active Research",
                  statusColor: "#f59e0b",
                  statusBg: "#d2992220",
                  desc: "Justin Drake and others at EF continue publishing research on based preconfs, MEV redistribution, and protocol-level support. EIP-7917 (deterministic proposer lookahead) is a direct output of this work.",
                },
                {
                  name: "Bolt Protocol",
                  status: "In Development",
                  statusColor: "#818cf8",
                  statusBg: "#6366f120",
                  desc: "Bolt is building preconfirmation infrastructure specifically designed for based rollups. It enables validators to opt in to issuing execution preconfs backed by on-chain commitments and slashing conditions.",
                },
                {
                  name: "Primev / mev-commit",
                  status: "In Development",
                  statusColor: "#818cf8",
                  statusBg: "#6366f120",
                  desc: "mev-commit is a commitment protocol that lets block builders make execution commitments to users. It's a critical piece of infrastructure for both preconfs and based rollup composability.",
                },
              ].map((project) => (
                <div key={project.name} style={{
                  background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: 16,
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#e6edf3" }}>{project.name}</span>
                    <span style={{
                      fontSize: 11, fontWeight: 700, padding: "2px 8px", borderRadius: 4,
                      background: project.statusBg, color: project.statusColor,
                    }}>{project.status}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#c9d1d9", margin: 0, lineHeight: 1.65 }}>{project.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 9. Risks */}
          <section id="risks" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
              9. Risks & Trade-offs
            </h2>
            <p style={{ marginBottom: 16 }}>
              Based rollups are a genuine architectural improvement, but they come with real trade-offs
              you should understand before dismissing traditional rollups entirely.
            </p>

            <div style={{ display: "grid", gap: 14 }}>
              {[
                {
                  title: "Throughput ceiling",
                  icon: "📊",
                  desc: "By tying sequencing to Ethereum's L1 block time and blockspace, a based rollup's throughput is constrained by L1. Traditional rollups with their own sequencer can process thousands of TPS independently of L1 congestion. Blob scaling via EIP-4844 and Pectra helps, but it's an inherent constraint.",
                },
                {
                  title: "Validator complexity",
                  icon: "⚙️",
                  desc: "Issuing preconfs requires validators to run additional software, monitor L2 mempools, and take on slashing risk. This raises the technical and capital requirements for validators who opt in, potentially reducing the pool of willing preconf providers.",
                },
                {
                  title: "MEV dynamics shift",
                  icon: "🔄",
                  desc: "Centralized sequencers captured MEV — that was bad, but predictable. In a based rollup, MEV flows back into the competitive L1 PBS market. This is better for decentralization, but MEV in the L1 market can still impact users and may interact with preconfs in complex ways.",
                },
                {
                  title: "Still early",
                  icon: "🔬",
                  desc: "Most based rollup infrastructure — including Bolt, mev-commit, and EIP-7917 — is in active development or recently deployed as of March 2026. Battle-tested production systems with billions of dollars at stake don't exist yet at the scale of Arbitrum or Optimism.",
                },
              ].map((risk) => (
                <div key={risk.title} style={{
                  background: "#161b22", border: "1px solid #30363d", borderRadius: 10, padding: 16,
                  display: "flex", gap: 14,
                }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{risk.icon}</span>
                  <div>
                    <div style={{ fontWeight: 700, color: "#e6edf3", marginBottom: 6 }}>{risk.title}</div>
                    <p style={{ fontSize: 14, color: "#c9d1d9", margin: 0, lineHeight: 1.65 }}>{risk.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 10. What It Means for You */}
          <section id="what-it-means-for-you" style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
              10. What This Means for You as a User
            </h2>
            <p style={{ marginBottom: 16 }}>
              If you're a DeFi user on Ethereum today, here's the practical translation:
            </p>

            <div style={{
              background: "#161b22", border: "1px solid #22c55e40", borderRadius: 12,
              padding: 20, marginBottom: 20,
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#4ade80", marginBottom: 14 }}>
                ✅ What you gain on a based rollup + preconfs
              </h3>
              <div style={{ display: "grid", gap: 8 }}>
                {[
                  "Transactions can't be censored by a single operator — your trade gets included or it doesn't, based on market dynamics, not anyone's whitelist.",
                  "Near-instant execution preconfs (~100ms) eliminate the uncertainty of 'did my transaction go through?'",
                  "L1-to-L2 atomic composability means new DeFi primitives become possible — flash loans spanning L1 and L2, atomic arbitrage across layers, and more.",
                  "MEV revenue is redistributed through the competitive L1 market rather than captured entirely by a rollup operator.",
                  "No new trust assumption — you're trusting Ethereum's validator set, which you already trust to finalize your transactions.",
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: "#4ade80", flexShrink: 0, marginTop: 1 }}>→</span>
                    <span style={{ fontSize: 14, color: "#c9d1d9", lineHeight: 1.65 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <p style={{ marginBottom: 16 }}>
              The practical timeline: you're unlikely to notice a difference in your day-to-day
              Ethereum usage immediately. Taiko is live but still growing its ecosystem. As based rollup
              infrastructure matures over 2026 and into 2027, expect the major rollup teams to at minimum
              decentralize their sequencers using based or based-adjacent designs, even if they don't
              go full based immediately.
            </p>
            <p style={{ marginBottom: 16 }}>
              The long arc here favors based rollups. Centralized sequencers are a liability —
              reputationally, legally, and technically. The question isn't whether the industry moves
              away from them; it's how fast.
            </p>

            <div style={{
              background: "#161b22", border: "1px solid #d2992240", borderRadius: 12, padding: 16,
            }}>
              <p style={{ margin: 0, fontSize: 13, color: "#8b949e", lineHeight: 1.6 }}>
                ⚠️ <strong style={{ color: "#d29922" }}>This guide is for informational purposes only.</strong>{" "}
                It is not financial advice. The protocols and technologies discussed are actively
                evolving. Always do your own research before making investment or usage decisions.
              </p>
            </div>
          </section>

          {/* Related Articles */}
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: "#e6edf3", marginBottom: 16 }}>
              Related Guides
            </h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12 }}>
              {[
                { href: "/learn/ethereum-pectra-upgrade-guide", label: "Ethereum Pectra Upgrade", desc: "The next big Ethereum upgrade and what it changes." },
                { href: "/learn/restaking-eigenlayer-guide", label: "Restaking & EigenLayer", desc: "How restaking works and why it's reshaping Ethereum security." },
                { href: "/learn/modular-blockchains-guide", label: "Modular Blockchains", desc: "The full landscape of modular blockchain architectures." },
                { href: "/learn/zero-knowledge-proofs", label: "Zero-Knowledge Proofs", desc: "How ZK proofs power the next generation of rollups." },
                { href: "/learn/mev-guide-2026", label: "MEV Guide 2026", desc: "What MEV is, who captures it, and how to protect yourself." },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{
                  display: "block", padding: 14, background: "#161b22",
                  border: "1px solid #30363d", borderRadius: 10, textDecoration: "none",
                  transition: "border-color 0.2s",
                }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: "#58a6ff", marginBottom: 4 }}>{link.label}</div>
                  <div style={{ fontSize: 12, color: "#8b949e", lineHeight: 1.5 }}>{link.desc}</div>
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" style={{ marginBottom: 16 }}>
            <h2 style={{ fontSize: 22, fontWeight: 700, color: "#e6edf3", marginBottom: 20 }}>
              Frequently Asked Questions
            </h2>
            <div style={{ display: "grid", gap: 12 }}>
              {[
                {
                  q: "What is a based rollup?",
                  a: "A based rollup is a Layer 2 where transaction ordering is handled by Ethereum's own L1 validators — not by a separate, centralized sequencer. The L1 proposer can include rollup transactions in their block, giving the rollup the same decentralization and censorship resistance as Ethereum mainnet.",
                },
                {
                  q: "What is the difference between a based rollup and a regular rollup?",
                  a: "A regular rollup uses a centralized sequencer to order transactions before posting them to Ethereum. A based rollup removes this sequencer entirely, routing transaction ordering through Ethereum's PBS (proposer-builder separation) system. This eliminates the single point of failure and censorship risk.",
                },
                {
                  q: "What are preconfirmations on Ethereum?",
                  a: "Preconfirmations (preconfs) are off-chain commitments from Ethereum validators to users, guaranteeing that a specific transaction will be included in their next block. They enable ~100ms transaction confirmations, backed by validator slashing if the commitment is broken.",
                },
                {
                  q: "Why do based rollups need preconfirmations?",
                  a: "Based rollups inherit Ethereum's 12-second block time, which is slow for user-facing apps. Preconfirmations bridge this gap by letting validators commit to including your transaction in ~100ms, before the block is finalized. You get decentralized sequencing AND fast confirmations.",
                },
                {
                  q: "Are based rollups live on Ethereum today?",
                  a: "As of March 2026, Taiko is the most advanced live based rollup on Ethereum mainnet. Infrastructure for based preconfs (like EIP-7917 and Bolt Protocol) is in active development. The ecosystem is growing but not yet at the scale of Arbitrum or Optimism.",
                },
                {
                  q: "Who invented based rollups?",
                  a: "The core concept was described by Vitalik Buterin in 2021 as 'Total Anarchy.' Ethereum Foundation researcher Justin Drake formalized the 'based rollup' term and design in a 2023 research post, catalyzing the current wave of development.",
                },
              ].map((item, i) => (
                <div key={i} style={{
                  background: "#161b22", border: "1px solid #30363d", borderRadius: 10,
                  padding: 16,
                }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e6edf3", marginBottom: 8 }}>{item.q}</h3>
                  <p style={{ fontSize: 14, color: "#c9d1d9", margin: 0, lineHeight: 1.7 }}>{item.a}</p>
                </div>
              ))}
            </div>
          </section>

        </div>

        <BackToTop />

      
        
        {/* related-guides */}
        <nav aria-label="Related guides" style={{ marginTop: 48, padding: 24, background: '#161b22', border: '1px solid #30363d', borderRadius: 12 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: '#e6edf3' }}>Continue Reading</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 12 }}>
            <li><a href="/compare/hot-wallet-vs-cold-wallet" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Hot Wallet Vs Cold Wallet</a></li>
            <li><a href="/courses/crypto-security-certification-course" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Crypto Security Certification Course</a></li>
            <li><a href="/investing/best-altcoins-to-buy-2026" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Altcoins To Buy 2026</a></li>
            <li><a href="/investing/best-infrastructure-crypto-tokens" style={{ color: '#58a6ff', textDecoration: 'none', fontSize: 15 }}>Best Infrastructure Crypto Tokens</a></li>
          </ul>
        </nav>

        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>
    </div>
  );
}
