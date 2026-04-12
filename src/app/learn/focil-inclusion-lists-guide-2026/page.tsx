import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";
import {
  generateArticleSchema,
  generateFAQSchema,
  combineSchemas,
} from "@/lib/structured-data";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FOCIL & Inclusion Lists on Ethereum Guide 2026 | Degen0x",
  description:
    "Plain-English guide to FOCIL (EIP-7805), Ethereum's fork-choice enforced inclusion lists. Learn how they fight censorship, limit MEV builder power, and fit into the Glamsterdam roadmap.",
  keywords: [
    "FOCIL",
    "EIP-7805",
    "inclusion lists",
    "Ethereum censorship resistance",
    "Glamsterdam",
    "MEV",
    "proposer builder separation",
    "PBS",
    "Ethereum roadmap 2026",
    "based rollups",
  ],
  openGraph: {
    type: "article",
    title: "FOCIL & Inclusion Lists on Ethereum Guide 2026",
    description:
      "How EIP-7805 FOCIL gives every validator a say in transaction inclusion — and why it matters for censorship resistance.",
    url: `${SITE_URL}/learn/focil-inclusion-lists-guide-2026`,
    images: [
      {
        url: `${SITE_URL}/og-focil-inclusion-lists-guide-2026.svg`,
        width: 1200,
        height: 630,
        alt: "FOCIL & Inclusion Lists on Ethereum Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FOCIL & Inclusion Lists on Ethereum Guide 2026",
    description:
      "How EIP-7805 FOCIL protects Ethereum from censorship without breaking MEV-Boost.",
    images: [`${SITE_URL}/og-focil-inclusion-lists-guide-2026.svg`],
  },
  alternates: {
    canonical: `${SITE_URL}/learn/focil-inclusion-lists-guide-2026`,
  },
};

const articleSchema = generateArticleSchema({
  title: metadata.title as string,
  description: metadata.description as string,
  url: `${SITE_URL}/learn/focil-inclusion-lists-guide-2026`,
  publishedDate: "2026-04-09",
  modifiedDate: "2026-04-09",
  author: "Degen0x",
});

const faqSchema = generateFAQSchema([
  {
    question: "What is FOCIL in one sentence?",
    answer:
      "FOCIL (Fork-Choice enforced Inclusion Lists, EIP-7805) lets a randomly selected committee of validators each propose transactions that the next block MUST include, so a single builder cannot silently censor users.",
  },
  {
    question: "Is FOCIL live on Ethereum mainnet?",
    answer:
      "Not yet. As of April 2026, FOCIL is specified as EIP-7805 and is a leading candidate for Ethereum's Glamsterdam hard fork, which is targeted for late 2026. It has been tested on devnets and is undergoing client implementation review.",
  },
  {
    question: "How is FOCIL different from normal inclusion lists?",
    answer:
      "Earlier inclusion list designs relied on a single proposer to name the transactions that the next block must include, which meant the proposer could still be bribed or coerced. FOCIL spreads that power across a committee of 16 validators per slot, and the fork-choice rule penalizes blocks that ignore their lists.",
  },
  {
    question: "Does FOCIL break MEV-Boost or PBS?",
    answer:
      "No. FOCIL is intentionally designed to coexist with proposer-builder separation and MEV-Boost. Builders still compete on tip extraction, but they must satisfy any non-conflicting transactions named by the FOCIL committee, which restores baseline censorship resistance.",
  },
  {
    question: "Why does FOCIL matter for ordinary users?",
    answer:
      "If you use a mixer, a sanctioned address, or simply a dApp that some builders dislike, today your transaction can sit unmined for hours. With FOCIL, at least one of 16 committee members is likely to name your transaction, and the block that follows is forced to include it or lose fork-choice weight.",
  },
  {
    question: "How does FOCIL relate to based rollups?",
    answer:
      "Based rollups inherit L1 censorship resistance. A strong FOCIL on Ethereum directly upgrades the censorship resistance of every based rollup and of any L2 that uses force-inclusion via L1 calldata, making the whole stack harder to capture.",
  },
]);

const combinedSchema = combineSchemas([articleSchema, faqSchema]);

export default function FocilInclusionListsGuide() {
  return (
    <>
      <StructuredData schema={combinedSchema} />

      <main className="min-h-screen bg-[#0d1117] text-[#e6edf3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <Breadcrumb
            items={[
              { label: "Learn", href: "/learn" },
              { label: "FOCIL & Inclusion Lists Guide 2026" },
            ]}
          />

          <article className="mt-8">
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-block px-3 py-1 bg-purple-900/30 text-purple-300 text-sm rounded-full border border-purple-700/50">
                Ethereum
              </span>
              <span className="inline-block px-3 py-1 bg-blue-900/30 text-blue-300 text-sm rounded-full border border-blue-700/50">
                Intermediate
              </span>
              <span className="text-[#8b949e] text-sm">10&ndash;12 min read</span>
              <span className="text-[#6e7681] text-sm">&middot;</span>
              <span className="text-[#8b949e] text-sm">Published April 9, 2026</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              FOCIL &amp; Inclusion Lists on Ethereum: The 2026 Guide
            </h1>
            <p className="text-lg text-[#8b949e] mb-10">
              How EIP-7805 forces builders to stop censoring your transactions &mdash; without
              breaking MEV-Boost, PBS, or the roadmap Ethereum is already on.
            </p>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Why inclusion lists exist</h2>
              <p className="text-[#c9d1d9] leading-relaxed mb-4">
                Since the Merge, almost every Ethereum block has been built by a small group of
                block builders connected to proposers through MEV-Boost. That design is efficient,
                but it created a single point of censorship: if the top two or three builders
                decide to drop a transaction &mdash; because of OFAC screening, a private filter,
                or simple commercial pressure &mdash; the average user sees their transaction sit
                in the mempool for hours. Inclusion lists are the answer: a simple rule that says
                &ldquo;the next block MUST contain these transactions, or it is invalid.&rdquo;
              </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            We wrote this guide because the existing explanations online are either too simplified or assume PhD-level knowledge. Neither serves most readers.
          </p>
        </div>
              <p className="text-[#c9d1d9] leading-relaxed">
                Earlier designs, like EIP-7547, gave that power to the slot proposer. But a
                proposer is a single actor that can be bribed, coerced, or compromised. FOCIL
                fixes this by spreading the responsibility across a committee of validators.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">What FOCIL actually does</h2>
              <p className="text-[#c9d1d9] leading-relaxed mb-4">
                FOCIL stands for <strong>Fork-Choice enforced Inclusion Lists</strong>. It is
                specified in <span className="font-mono text-purple-300">EIP-7805</span>. Every
                slot, the beacon chain deterministically selects 16 validators as the
                <em> inclusion list committee</em>. Each committee member watches the public
                mempool and publishes a short list of transactions they believe the next block
                should contain.
              </p>
              <p className="text-[#c9d1d9] leading-relaxed mb-4">
                When the block proposer and their builder assemble the next payload, they are free
                to order transactions however they like &mdash; the MEV game is preserved. But the
                payload must satisfy the union of the committee&rsquo;s lists: every non-conflicting,
                still-valid transaction named by a committee member has to make it into the block,
                unless the block is genuinely full. Anything else, and the Ethereum fork-choice
                rule (the algorithm that decides which head to follow) penalizes the block. Honest
                attesters will simply refuse to vote for it, and it falls out of the canonical
                chain.
              </p>
              <p className="text-[#c9d1d9] leading-relaxed">
                The critical word is <em>fork-choice enforced</em>. Unlike softer schemes,
                censoring a FOCIL transaction is not &ldquo;frowned upon&rdquo; &mdash; it costs
                the builder the block&rsquo;s reward.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Why a committee of 16?</h2>
              <p className="text-[#c9d1d9] leading-relaxed mb-4">
                Sixteen is the number researchers landed on after modeling two failure cases: a
                committee too small to be robust, and one too large to be bandwidth-friendly. With
                16 independent validators, bribing the entire committee in a single slot is
                economically irrational for all but the most valuable censorship attempts, while
                the aggregate list stays small enough to gossip quickly across the network.
              </p>
              <p className="text-[#c9d1d9] leading-relaxed">
                Importantly, the committee only needs <strong>one honest member</strong> for a
                user&rsquo;s transaction to be forced in. That is a dramatic asymmetry: attackers
                must compromise all 16, defenders need only one.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                How FOCIL fits the Glamsterdam roadmap
              </h2>
              <p className="text-[#c9d1d9] leading-relaxed mb-4">
                Fusaka shipped in December 2025 with PeerDAS and a raised gas limit. The next hard
                fork, Glamsterdam, is targeted for late 2026 and is explicitly themed around
                censorship resistance and user experience. FOCIL is one of the leading candidates
                for inclusion, alongside enshrined proposer-builder separation (ePBS), MEV burn
                experiments, and further blob throughput work.
              </p>
              <p className="text-[#c9d1d9] leading-relaxed">
                FOCIL is not the final word on censorship resistance &mdash; attester-enforced
                lists and ePBS are still active research &mdash; but it is the cleanest near-term
                upgrade that can ship without rewriting the whole block production pipeline.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">
                What FOCIL means for users, L2s, and builders
              </h2>
              <p className="text-[#c9d1d9] leading-relaxed mb-4">
                <strong>For users:</strong> if your transaction pays a reasonable tip and touches
                no forbidden state, at least one of 16 validators is very likely to name it, and
                the block that follows must include it. Time-to-inclusion for controversial
                transactions should collapse from hours to a single slot.
              </p>
              <p className="text-[#c9d1d9] leading-relaxed mb-4">
                <strong>For Layer 2s:</strong> based rollups, force-inclusion queues, and
                escape-hatch withdrawals all inherit this property. A strong FOCIL on L1 is the
                single biggest upgrade to L2 censorship resistance that Ethereum can make without
                touching the rollups themselves.
              </p>
              <p className="text-[#c9d1d9] leading-relaxed">
                <strong>For builders:</strong> MEV-Boost still works, proposer-builder separation
                still works, and tip extraction continues. Builders simply lose the ability to
                silently drop user transactions &mdash; a power most honest builders never wanted
                in the first place.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Open questions</h2>
              <p className="text-[#c9d1d9] leading-relaxed mb-4">
                FOCIL still has unresolved design tradeoffs: how to handle conflicting transactions
                named by different committee members, how to gossip lists fast enough under
                network stress, and how to prevent spam attacks on the list itself. These are the
                main topics being worked out on devnets and in all-core-dev calls throughout 2026.
              </p>
              <p className="text-[#c9d1d9] leading-relaxed">
                The takeaway for degens: FOCIL is probably the most important thing happening in
                Ethereum protocol politics this year. Watch the Glamsterdam scope discussions
                closely.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Frequently asked questions</h2>
              <div className="space-y-4">
                {[
                  { q: "What is FOCIL in one sentence?", a: "FOCIL (Fork-Choice enforced Inclusion Lists, EIP-7805) lets a randomly selected committee of validators each propose transactions that the next block MUST include, so a single builder cannot silently censor users." },
                  { q: "Is FOCIL live on Ethereum mainnet?", a: "Not yet. As of April 2026, FOCIL is specified as EIP-7805 and is a leading candidate for Ethereum\u2019s Glamsterdam hard fork, targeted for late 2026. It has been tested on devnets and is undergoing client implementation review." },
                  { q: "How is FOCIL different from normal inclusion lists?", a: "Earlier designs relied on a single proposer to name transactions the next block must include. FOCIL spreads that power across a committee of 16 validators per slot, and the fork-choice rule penalizes blocks that ignore their lists." },
                  { q: "Does FOCIL break MEV-Boost or PBS?", a: "No. FOCIL coexists with proposer-builder separation and MEV-Boost. Builders still compete on tip extraction, but they must satisfy non-conflicting transactions named by the committee." },
                  { q: "Why does FOCIL matter for ordinary users?", a: "If your transaction touches anything some builders dislike, today it can sit unmined for hours. With FOCIL, at least one of 16 committee members is likely to name it, and the following block is forced to include it or lose fork-choice weight." },
                  { q: "How does FOCIL relate to based rollups?", a: "Based rollups inherit L1 censorship resistance. A strong FOCIL on Ethereum directly upgrades the censorship resistance of every based rollup and of any L2 that uses force-inclusion via L1 calldata." },
                ].map((faq, i) => (
                  <details key={i} className="group bg-[#161b22] border border-[#30363d] rounded-lg">
                    <summary className="cursor-pointer px-5 py-4 text-white font-medium list-none flex justify-between items-center min-h-[44px]">
                      {faq.q}
                      <span className="text-[#8b949e] ml-2 group-open:rotate-180 transition-transform">&#9660;</span>
                    </summary>
                    <p className="px-5 pb-4 text-[#c9d1d9] leading-relaxed">{faq.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-white mb-4">Related reading</h2>
              <ul className="list-disc list-inside text-purple-300 space-y-2">
                <li>
                  <a className="hover:underline" href="/learn/ethereum-fusaka-glamsterdam-guide-2026">
                    Ethereum Fusaka &amp; Glamsterdam Upgrade Guide 2026
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="/learn/based-rollups-preconfirmations-guide">
                    Based Rollups &amp; Preconfirmations Guide
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="/learn/eip-7702-smart-accounts-guide-2026">
                    EIP-7702 Smart Accounts Guide 2026
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="/learn/data-availability-layer-guide-2026">
                    Data Availability Layer Guide 2026
                  </a>
                </li>
              </ul>
            </section>
          
        {/* section-footer */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 8, padding: '16px 20px', marginTop: 40, marginBottom: 20 }}>
          <p style={{ fontSize: 13, color: '#8b949e', lineHeight: 1.7, margin: 0 }}>
            <strong style={{ color: '#a78bfa' }}>Educational disclaimer:</strong> This guide is for informational purposes only and does not constitute financial advice.
            Crypto involves significant risk — do your own research before making any decisions. Learn more about <a href="/about" style={{ color: '#a78bfa' }}>our team</a>.
          </p>
        </div>
      </article>

          <BackToTop />
        </div>
      </main>
    
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": "Focil Inclusion Lists Guide 2026",
              "author": { "@type": "Organization", "name": "degen0x" },
              "publisher": { "@type": "Organization", "name": "degen0x", "url": "https://degen0x.com" },
              "datePublished": "2026-04-01",
              "dateModified": "2026-04-12",
              "mainEntityOfPage": "https://degen0x.com/learn/focil-inclusion-lists-guide-2026"
            })
          }}
        />
      </>
  );
}
