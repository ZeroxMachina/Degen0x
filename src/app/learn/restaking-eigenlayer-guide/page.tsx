import type { Metadata } from "next";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import RelatedContent from '@/components/RelatedContent';


export const metadata: Metadata = {
  title: "Restaking & EigenLayer: The Complete Guide",
  description:
    "Master restaking with EigenLayer. Learn how AVS protocols work, explore liquid restaking tokens, understand risks, and discover top projects reshaping Ethereum infrastructure.",
};

export default function RestakingGuide() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <nav className="text-sm mb-8">
        <a href="/learn" className="text-[#58a6ff] hover:underline">
          Learn
        </a>
        <span className="text-[#8b949e] mx-2">/</span>
        <span className="text-[#e6edf3]">Restaking & EigenLayer Guide</span>
      </nav>

      {/* Title */}
      <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-[#58a6ff] to-[#79c0ff] bg-clip-text text-transparent">
        Restaking & EigenLayer
      </h1>
      <p className="text-xl text-[#8b949e] mb-8">
        The Complete Guide to Ethereum's Most Powerful Infrastructure Layer
      </p>

      {/* Meta Info */}
      <div className="flex flex-wrap gap-6 mb-12 text-sm text-[#8b949e] pb-8 border-b border-[#30363d]">
        <span>18 min read</span>
        <span>Advanced</span>
        <span>March 2026</span>
      </div>

      {/* What is Restaking? */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          What is Restaking?
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Restaking is the practice of using already-staked ETH (or LSTs) to secure additional
          services and earn additional yield. Instead of staking your ETH only to Ethereum
          validators, restaking allows you to recursively commit that same capital to other
          protocols that need validation and economic security.
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
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          This creates a fundamental shift in how Ethereum's security budget is monetized. Rather
          than that security budget being monopolized by Ethereum itself, it becomes available to
          an entire ecosystem of services and applications. EigenLayer is the primary protocol
          enabling this by building a marketplace for security.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 my-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">The Core Concept</h4>
          <p className="text-[#c9d1d9] mb-4">
            Traditional staking: ETH staker → Earns Ethereum validator rewards
          </p>
          <p className="text-[#c9d1d9] mb-4">
            Restaking: ETH staker → Earns Ethereum rewards + Services rewards + Slashing risks
          </p>
          <p className="text-[#c9d1d9]">
            Restaking adds additional economic security and verification services that rely on
            honest behavior, backed by real financial incentives.
          </p>
        </div>
      </section>

      {/* How EigenLayer Works */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          How EigenLayer Works
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          EigenLayer is a smart contract platform built on Ethereum that enables restaking. It
          acts as a marketplace where validators can opt-in to additional security services, and
          service operators can request economic security.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">The Architecture</h3>
        <div className="space-y-4 mb-8">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#79c0ff] font-semibold mb-2">1. Delegation</h4>
            <p className="text-[#c9d1d9]">
              Stakers deposit ETH or LSTs (Liquid Staking Tokens) into EigenLayer contracts.
              They can delegate to operators who manage the restaking positions.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#79c0ff] font-semibold mb-2">2. Operator Registration</h4>
            <p className="text-[#c9d1d9]">
              Operators register with EigenLayer and commit to running AVS nodes. They manage
              the technical infrastructure and take responsibility for the staked capital.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#79c0ff] font-semibold mb-2">3. AVS Integration</h4>
            <p className="text-[#c9d1d9]">
              Actively Validated Services (AVS) are services that need external verification.
              They request security from EigenLayer by offering rewards to operators.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#79c0ff] font-semibold mb-2">4. Reward Distribution</h4>
            <p className="text-[#c9d1d9]">
              Operators earn fees from AVS services. These rewards are passed through to
              delegators minus a commission. Stakers earn both Ethereum staking rewards and
              AVS service rewards.
            </p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#79c0ff] font-semibold mb-2">5. Slashing</h4>
            <p className="text-[#c9d1d9]">
              If an operator misbehaves or verifies false data, the AVS can slash their
              stake. This creates real economic incentive for honest behavior.
            </p>
          </div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-04-10"
          updatedDate="2026-04-12"
          readingTime={5}
          section="learn"
        />

      </section>

      {/* Actively Validated Services (AVS) */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          Actively Validated Services (AVS)
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          An AVS is any service that requires external validation and can offer economic rewards
          for that validation. AVS can be anything from data availability layers to light clients
          to application-specific rollups.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">Examples of AVS</h3>
        <ul className="text-[#c9d1d9] space-y-3 mb-8">
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">•</span>
            <span>
              <strong>Data Availability:</strong> Services like EigenDA that verify data was
              published and made available
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">•</span>
            <span>
              <strong>Light Clients:</strong> Protocols that verify block headers and state proofs
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">•</span>
            <span>
              <strong>Rollup Validators:</strong> Services that validate state transitions in
              layer 2 systems
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">•</span>
            <span>
              <strong>Sidechains & Appchains:</strong> Alternative chains that want Ethereum
              security guarantees
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">•</span>
            <span>
              <strong>Oracle Networks:</strong> Services that verify and aggregate external data
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">•</span>
            <span>
              <strong>Bridges:</strong> Cross-chain messaging that requires validation
            </span>
          </li>
        </ul>

        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The beauty of EigenLayer's design is that it's composable. Multiple AVS can share the
          same set of operators and stakers, creating economies of scale. An operator with
          $10M restaked might be validating for 5 different services simultaneously.
        </p>
      </section>

      {/* Liquid Restaking Tokens */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          Liquid Restaking Tokens (LRT)
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Just as liquid staking tokens (LST) like stETH enable staking without locking capital,
          Liquid Restaking Tokens (LRT) enable restaking without directly interacting with
          EigenLayer. These tokens abstract away the complexity while maintaining capital
          efficiency.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">Major LRT Protocols</h3>

        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#58a6ff] font-semibold mb-2">EigenRio (Rio)</h4>
            <p className="text-[#c9d1d9] mb-3">
              Rio is a liquid restaking token that lets users restake directly. It combines
              multiple LSTs (stETH, rETH, etc.) and handles all the EigenLayer complexity.
              Users earn a portion of AVS rewards.
            </p>
            <p className="text-[#8b949e] text-sm">Key advantage: Diversified LST backing</p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#58a6ff] font-semibold mb-2">Kelp DAO (rsETH)</h4>
            <p className="text-[#c9d1d9] mb-3">
              rsETH is a liquid restaking token providing exposure to multiple AVS. Kelp manages
              the operator delegation and handles withdrawals through native staking and LST
              redemptions.
            </p>
            <p className="text-[#8b949e] text-sm">Key advantage: Multi-AVS exposure</p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#58a6ff] font-semibold mb-2">Ether.fi (weETH)</h4>
            <p className="text-[#c9d1d9] mb-3">
              Ether.fi operates its own staking service and also offers weETH for wrapped EigenLayer
              ETH. They run their own operators to capture AVS rewards while maintaining MEV
              optimization.
            </p>
            <p className="text-[#8b949e] text-sm">Key advantage: Integrated staking + restaking</p>
          </div>

          <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
            <h4 className="text-[#58a6ff] font-semibold mb-2">Symbiotic</h4>
            <p className="text-[#c9d1d9] mb-3">
              Symbiotic is a permissionless shared security protocol that allows any token to be
              used for security provision, not just ETH or LSTs. This creates more flexibility
              than EigenLayer.
            </p>
            <p className="text-[#8b949e] text-sm">Key advantage: Maximum flexibility</p>
          </div>
        </div>
      </section>

      {/* Understanding Risks */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          The Risks of Restaking
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Restaking is powerful but comes with significant risks. Understanding these is crucial
          before participating.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">Slashing Risk</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          The primary risk is operator misbehavior leading to slashing. If an operator verifies
          false data or behaves dishonestly, the AVS can slash all associated stake. This is
          permanent capital loss, not just missed rewards.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">Correlated Risk</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          If many AVS use the same operators, a single major hack or failure could slash
          operators' stake across multiple services. This concentration risk grows as operators
          accumulate more restaked capital.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">Unknown Risks</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Some AVS services are new and unproven. Their security models might have bugs,
          vulnerabilities, or logical flaws that haven't been discovered yet. Early participants
          bear these discovery risks.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">Liquidity Risks</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          During market stress, if operators are slashed and capital is locked for exiting
          positions, LRT holders might experience significant price divergence from the
          underlying assets.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mt-6">
          <h4 className="text-[#58a6ff] font-semibold mb-4">Risk Mitigation Strategies</h4>
          <ul className="text-[#c9d1d9] space-y-3">
            <li className="flex items-start">
              <span className="text-[#79c0ff] mr-3">→</span>
              <span>Start small and gradually increase exposure as you understand the risks</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#79c0ff] mr-3">→</span>
              <span>
                Use diversified LRT protocols that spread risk across multiple operators and AVS
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-[#79c0ff] mr-3">→</span>
              <span>Monitor operator performance and AVS security audits</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#79c0ff] mr-3">→</span>
              <span>Keep some capital in plain Ethereum staking as a lower-risk alternative</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#79c0ff] mr-3">→</span>
              <span>Only use well-audited AVS with significant security track records</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Top Restaking Protocols */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          Leading Restaking Protocols
        </h2>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">EigenLayer (Core Protocol)</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          EigenLayer is the original and largest restaking protocol. It enables direct restaking
          of ETH and LSTs. The protocol has emerged as the industry standard for security
          provision, with billions in TVL and dozens of AVS.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">EigenDA (Data Availability)</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          EigenDA is the flagship AVS using EigenLayer security. It provides data availability
          guarantees for rollups and other systems. Being the first major AVS, it helped prove
          the restaking model works in production.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">AltLayer (RaaS Platform)</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          AltLayer is a Rollup-as-a-Service platform that uses EigenLayer security for its
          rollups. It demonstrates how new blockchain infrastructure can be built on top of
          Ethereum's security via restaking.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">Babylon (Bitcoin Staking)</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Babylon enables Bitcoin staking and restaking, bringing Bitcoin's security to other
          services. This is particularly notable as it extends the restaking paradigm beyond
          Ethereum.
        </p>
      </section>

      {/* The Restaking Economy */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#e6edf3] mb-4">
          The Restaking Economy
        </h2>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Restaking creates a new economic model where Ethereum's security is a commodity that
          can be traded and optimized. This has profound implications.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">New Infrastructure Layers</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Services that were previously impossible or prohibitively expensive to secure can now
          rent Ethereum security through restaking. This accelerates innovation in data
          availability, bridges, light clients, and other infrastructure.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">Improved Yield Efficiency</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Instead of capital earning just base staking yields, that same capital can now
          simultaneously earn rewards from multiple services. This improves capital efficiency
          across the ecosystem.
        </p>

        <h3 className="text-xl font-semibold text-[#e6edf3] mt-6 mb-4">Operator Competition</h3>
        <p className="text-[#c9d1d9] mb-4 leading-relaxed">
          Professional operators compete on technical excellence, security track record, and fee
          efficiency. This competition benefits both delegators and services requiring security.
        </p>

        <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6 mt-6">
          <h4 className="text-[#58a6ff] font-semibold mb-3">Restaking Yield Breakdown</h4>
          <p className="text-[#c9d1d9] mb-3">
            Your total yield from restaking typically consists of:
          </p>
          <ul className="text-[#c9d1d9] space-y-2">
            <li>
              <strong>Base Staking Yield:</strong> ~3-4% from Ethereum validators
            </li>
            <li>
              <strong>AVS Rewards:</strong> Variable, typically 3-20% depending on service
            </li>
            <li>
              <strong>Minus Operator Commission:</strong> Usually 5-10% of rewards
            </li>
            <li>
              <strong>Minus Slashing Risk Premium:</strong> Implicit cost of slashing risk
            </li>
          </ul>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="mb-12 bg-[#161b22] border border-[#30363d] rounded-lg p-8">
        <h3 className="text-2xl font-bold text-[#58a6ff] mb-6">Key Takeaways</h3>
        <ul className="space-y-3 text-[#c9d1d9]">
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">→</span>
            <span>
              Restaking reuses staked ETH to secure additional services, creating new revenue
              streams
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">→</span>
            <span>
              EigenLayer is the leading protocol enabling restaking via a marketplace for
              security
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">→</span>
            <span>
              AVS (Actively Validated Services) can be anything from data availability to light
              clients
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">→</span>
            <span>
              Liquid Restaking Tokens simplify participation for those not running operators
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">→</span>
            <span>
              Slashing and correlated risks are real—start small and use diversified protocols
            </span>
          </li>
          <li className="flex items-start">
            <span className="text-[#79c0ff] mr-3">→</span>
            <span>
              Restaking will likely power the next generation of Ethereum scaling and
              infrastructure
            </span>
          </li>
        </ul>
      </section>

      {/* Related Articles */}
      <section className="pt-8 border-t border-[#30363d]">
        <h3 className="text-xl font-bold text-[#e6edf3] mb-6">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a
            className="p-4 bg-[#161b22] border border-[#30363d] rounded-lg hover:border-[#58a6ff] transition-colors"
          >
            <h4 className="text-[#58a6ff] font-semibold mb-2">Bitcoin Layer 2 Solutions</h4>
            <p className="text-[#8b949e] text-sm">
              Explore scaling solutions for Bitcoin and infrastructure comparisons
            </p>
          </a>
          <a
          >
            <h4 className="text-[#58a6ff] font-semibold mb-2">Real World Assets Guide</h4>
            <p className="text-[#8b949e] text-sm">
              Understand how traditional assets are being tokenized on-chain
            </p>
          </a>
        </div>
      </section>
      <RelatedContent category="learn" currentSlug="/learn/restaking-eigenlayer-guide" />
    </div>
  );
}
