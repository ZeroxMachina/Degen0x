import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Inflation in Crypto? (${CURRENT_YEAR}) | ${SITE_NAME}`,
  description: "Learn what inflation means in cryptocurrency, how token emission schedules work, inflationary vs deflationary models, and the impact on token value over time.",
  keywords: ["inflation crypto", "token inflation", "emission schedule", "inflationary token", "token supply growth"],
};

export default function InflationPage() {
  return (
    <LearnPageLayout title="What Is Inflation in Crypto?" categoryName="Glossary" categorySlug="learn/glossary" readTime="4 min" intro="Inflation in cryptocurrency refers to the increase in a token's total supply over time through the creation of new tokens. Most blockchain networks issue new tokens as rewards for validators, miners, or stakers who secure the network. The rate of inflation, the schedule on which new tokens are created, and whether supply is capped or uncapped are critical aspects of a token's economic design that directly affect its long-term value proposition."
      toc={[{ id: "definition", title: "Definition", level: 2 },{ id: "emission-schedules", title: "Emission Schedules", level: 2 },{ id: "impact", title: "Impact on Value", level: 2 }]}
      faqs={[
        { question: "Is inflation bad for a cryptocurrency?", answer: "Not necessarily. Controlled inflation serves a vital purpose — it pays for network security by incentivizing validators and miners. Without inflation (block rewards), a network must rely entirely on transaction fees to compensate those who secure it, which may be insufficient or create unstable security budgets. The key question is whether the value created by a secure, functional network exceeds the dilution caused by new token issuance." },
        { question: "How does crypto inflation differ from fiat inflation?", answer: "Crypto inflation is typically programmatic, predictable, and transparent — the emission schedule is defined in the protocol's code and cannot be changed without governance approval. Fiat inflation is determined by central bank policy, which can change based on economic conditions and political pressures. Crypto inflation rates are known in advance, while fiat money supply expansion is discretionary and often unpredictable." },
      ]}
      relatedArticles={[
        { title: "Deflation", href: "/learn/glossary/deflation", category: "Glossary" },
        { title: "What Is Tokenomics?", href: "/learn/what-is-tokenomics", category: "Learn" },
        { title: "Halving", href: "/learn/glossary/halving", category: "Glossary" },
        { title: "What Is Staking?", href: "/learn/what-is-staking", category: "Learn" },
      ]}
    >
      <section id="definition"><h2>Definition</h2><p>Inflation in cryptocurrency economics means the total supply of a token increases over time as new tokens are created and distributed. This is analogous to fiat currency inflation where central banks print new money, except that crypto inflation is typically governed by deterministic code rather than discretionary policy. Inflation rates vary dramatically across projects — from Bitcoin's decreasing issuance (currently under 2% per year and halving approximately every four years) to some DeFi tokens with initial inflation rates exceeding 100% annually to bootstrap liquidity. The inflation rate, combined with demand dynamics, determines whether a token appreciates or depreciates in value over time.</p></section>
      <section id="emission-schedules"><h2>Emission Schedules</h2><p>Emission schedules define how new tokens are created and distributed over time. Bitcoin follows a halving schedule where block rewards are cut in half every 210,000 blocks (approximately 4 years), starting at 50 BTC per block in 2009 and reaching 3.125 BTC per block after the 2024 halving. Ethereum's Proof of Stake issuance is approximately 1,600 ETH per day, which can be offset by fee burning under EIP-1559. Many DeFi protocols use front-loaded emission schedules with high initial inflation that decreases over time to incentivize early adoption while reducing long-term dilution. Some tokens like Dogecoin have constant emission (10,000 DOGE per block forever), resulting in a decreasing inflation rate as the fixed issuance becomes a smaller percentage of the growing total supply.</p></section>
      <section id="impact"><h2>Impact on Value</h2><p>Token inflation directly impacts holders through dilution — if supply grows faster than demand, the value per token decreases. For stakers who earn inflation rewards, the real return equals the staking yield minus the inflation rate. For example, if a token has 8% staking rewards but 10% inflation, non-stakers lose 10% of their relative share annually while stakers still experience 2% net dilution. This dynamic incentivizes staking participation, which improves network security. Evaluating a cryptocurrency's long-term value proposition requires understanding its inflation schedule, the percentage of supply staked (reducing sell pressure from rewards), fee revenue that may offset inflation through burns, and the relationship between new supply entering the market and organic demand growth from adoption and utility.</p></section>
    </LearnPageLayout>
  );
}
