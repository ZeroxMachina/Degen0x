import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `How to Run a Staking Validator: Complete Guide (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description:
    "Learn how to run a staking validator for Ethereum or Solana. Hardware requirements, setup process, profitability analysis, and tips for maintaining high uptime.",
};

export default function ValidatorGuidePage() {
  return (
    <LearnPageLayout
      title="How to Run a Staking Validator: Complete Guide"
      categoryName="Staking"
      categorySlug="investing/staking"
      readTime="15 min"
      intro="Running your own staking validator is the most decentralized and potentially most profitable way to participate in proof-of-stake networks. This guide covers everything from hardware requirements and initial setup to ongoing maintenance and profitability analysis. Whether you are considering solo staking on Ethereum or running a Solana validator, this guide provides the knowledge you need."
      toc={[
        { id: "why-run-validator", title: "why-run-validator", level: 2 },
        { id: "why-run-your-own-validator", title: "Why Run Your Own Validator?", level: 2 },
        { id: "eth-requirements", title: "eth-requirements", level: 2 },
        { id: "ethereum-validator-requirements", title: "Ethereum Validator Requirements", level: 2 },
        { id: "sol-requirements", title: "sol-requirements", level: 2 },
        { id: "solana-validator-requirements", title: "Solana Validator Requirements", level: 2 },
        { id: "setup-process", title: "setup-process", level: 2 },
        { id: "setup-process-overview", title: "Setup Process Overview", level: 2 },
        { id: "profitability", title: "profitability", level: 2 },
        { id: "profitability-analysis", title: "Profitability Analysis", level: 2 },
        { id: "maintenance", title: "maintenance", level: 2 },
        { id: "ongoing-maintenance", title: "Ongoing Maintenance", level: 2 },
        { id: "alternatives", title: "alternatives", level: 2 },
        { id: "alternatives-to-solo-validation", title: "Alternatives to Solo Validation", level: 2 }
      ]}
      faqs={[
        {
          question: "How much does it cost to run an Ethereum validator?",
          answer: "Running an Ethereum validator requires 32 ETH (a significant capital commitment) plus hardware costs of approximately $500-$2,000 for a suitable machine. Monthly operating costs include electricity ($10-$30) and internet ($50-$100). The total first-year cost, excluding the ETH stake, is roughly $1,000-$3,500.",
        },
        {
          question: "Can I run a validator from home?",
          answer: "Yes, both Ethereum and Solana validators can be run from home. Ethereum validators have modest hardware requirements that a standard desktop or mini PC can handle. Solana validators require more powerful hardware and a high-bandwidth internet connection. A stable power supply and internet connection are essential for both.",
        },
        {
          question: "What happens if my validator goes offline?",
          answer: "On Ethereum, brief offline periods result in small penalties roughly equal to the rewards you would have earned. Extended downtime leads to larger penalties. You will not be severely slashed for going offline unless you are also offline during a mass slashing event. On Solana, offline validators simply miss rewards without incurring penalties.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Staking?", href: "/investing/staking/learn/what-is-staking", category: "Staking" },
        { title: "Staking Risks", href: "/investing/staking/learn/staking-risks", category: "Staking" },
        { title: "Rocket Pool Review", href: "/investing/staking/reviews/rocket-pool", category: "Reviews" },
      ]}
    >
      <h2 id="why-run-validator">Why Run Your Own Validator?</h2>
      <p>
        Running your own validator provides several advantages over delegated or liquid staking.
        You earn the full staking reward without paying commission to a third party (typically
        10-35% of rewards). You contribute directly to network decentralization by adding an
        independent validator to the network. And you maintain complete control over your staked
        assets without trusting any intermediary protocol or service.
      </p>
      <p>
        The main tradeoffs are the capital requirement (32 ETH for Ethereum, significant SOL plus
        hardware for Solana), technical responsibility (you must maintain uptime and keep software
        updated), and opportunity cost (your staked capital is locked and cannot be used in DeFi
        unless you use a protocol like StakeWise to mint osETH against your position).
      </p>

      <h2 id="eth-requirements">Ethereum Validator Requirements</h2>
      <p>
        Running an Ethereum validator requires 32 ETH staked to the deposit contract, a machine
        capable of running both an execution layer client (like Geth or Nethermind) and a consensus
        layer client (like Prysm, Lighthouse, or Teku), a reliable internet connection with at
        least 10 Mbps upload and download, and at least 2 TB of SSD storage.
      </p>
      <p>
        Recommended hardware specifications include a modern multi-core CPU (Intel i5/i7 or AMD
        Ryzen 5/7), 16-32 GB of RAM, a 2 TB NVMe SSD, and an uninterruptible power supply (UPS)
        for protection against power outages. Many home stakers use compact, energy-efficient
        machines like the Intel NUC or equivalent mini PCs, which consume roughly 10-20 watts and
        cost $500-$1,500.
      </p>
      <p>
        Client diversity is important for network health. Running minority clients (like Nethermind
        instead of Geth, or Lighthouse instead of Prysm) helps protect against correlated bugs and
        reduces your risk of mass slashing events. The Ethereum community actively encourages
        validators to choose minority clients.
      </p>

      <h2 id="sol-requirements">Solana Validator Requirements</h2>
      <p>
        Solana validators have significantly higher hardware requirements due to the network&apos;s
        high throughput design. The recommended specifications include a 12-core CPU at 2.8 GHz or
        higher, 256 GB of RAM, multiple NVMe SSDs totaling at least 2 TB, and a network connection
        with at least 300 Mbps bandwidth. These requirements make home operation feasible but more
        challenging than Ethereum.
      </p>
      <p>
        Solana validators also need SOL for voting transactions, which can cost 1-2 SOL per day in
        vote fees. This ongoing cost must be factored into profitability calculations. New validators
        need to attract delegated stake to become profitable, as the rewards scale with total stake.
        Many Solana validators operate from data centers to meet the bandwidth and uptime requirements.
      </p>

      <h2 id="setup-process">Setup Process Overview</h2>
      <p>
        The general setup process for an Ethereum validator involves: installing the operating system
        (Ubuntu is most common), syncing the execution and consensus layer clients (which can take
        hours to days depending on sync method), generating validator keys using the official deposit
        CLI tool, depositing 32 ETH to the deposit contract, and configuring monitoring tools to
        track validator performance.
      </p>
      <p>
        Security hardening is critical. Set up a firewall, disable unnecessary services, configure
        SSH key authentication (disable password login), and set up automatic security updates.
        Your validator keys should be generated on an air-gapped machine and stored securely.
        The withdrawal address should be set to a hardware wallet you control.
      </p>
      <p>
        Several community-maintained guides provide detailed step-by-step instructions for
        validator setup, including CoinCashew, Somer Esat&apos;s guides, and the official Ethereum
        documentation. Following an established guide significantly reduces the risk of
        misconfiguration.
      </p>

      <h2 id="profitability">Profitability Analysis</h2>
      <p>
        An Ethereum validator earning 3.5% APY on 32 ETH generates approximately 1.12 ETH per year.
        At $3,000 per ETH, that represents roughly $3,360 in annual revenue. After subtracting
        hardware costs ($100-$200 annualized), electricity ($120-$360 per year), and internet ($600-
        $1,200 per year), the net annual profit is approximately $1,800-$3,000. This compares
        favorably to liquid staking after fees, especially over multiple years.
      </p>
      <p>
        Solana validator profitability is more variable and depends heavily on the amount of delegated
        stake attracted. A validator with 100,000 SOL in delegated stake and a 10% commission can earn
        meaningful returns, but the high hardware and vote transaction costs create a higher
        break-even point compared to Ethereum validators.
      </p>

      <h2 id="maintenance">Ongoing Maintenance</h2>
      <p>
        Running a validator is not a set-and-forget operation. You need to keep your client software
        updated (especially before network upgrades), monitor validator performance and uptime,
        respond to alerts for downtime or reduced attestation effectiveness, and perform periodic
        hardware maintenance. Most operators set up monitoring dashboards using tools like Grafana
        and alerting through services like PagerDuty or simple email/SMS alerts.
      </p>
      <p>
        Software updates are particularly important before scheduled hard forks. Missing an update
        can result in your validator going offline or producing invalid blocks, both of which carry
        penalties. Joining validator community channels on Discord helps ensure you stay informed
        about upcoming changes and best practices.
      </p>

      <h2 id="alternatives">Alternatives to Solo Validation</h2>
      <p>
        If 32 ETH is beyond your budget, Rocket Pool allows you to run a minipool with just 8 ETH
        (plus RPL collateral). You validate the pooled ETH from other stakers and earn a commission
        on their rewards, effectively increasing your APY. This is the most accessible path to
        running your own validator without the full 32 ETH requirement.
      </p>
      <p>
        Distributed Validator Technology (DVT) from protocols like SSV Network and Obol allows
        multiple operators to collectively run a single validator, splitting the 32 ETH requirement
        and operational responsibility. This approach increases resilience since no single operator
        can cause the validator to fail, and makes solo staking accessible to a broader audience.
      </p>
    </LearnPageLayout>
  );
}
