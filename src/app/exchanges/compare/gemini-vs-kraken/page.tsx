import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Gemini vs Kraken (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Compare Gemini vs Kraken. Fees, security, features, regulation, and which US exchange is better for security-focused traders.",
};

export default function GeminiVsKraken() {
  return (
    <LearnPageLayout
      title="Gemini vs Kraken"
      categoryName="Exchanges"
      categorySlug="exchanges"
      readTime="8 min read"
      intro="Gemini and Kraken are two of the most security-focused and regulated crypto exchanges available to US traders. Both prioritize compliance and asset protection, but they differ in fees, features, and approach. This comparison examines which platform better serves security-conscious crypto users."
      toc={[
        { id: "overview", title: "Platform Overview", level: 2 },
        { id: "fees", title: "Fee Comparison", level: 2 },
        { id: "security", title: "Security and Regulation", level: 2 },
        { id: "features", title: "Features", level: 2 },
        { id: "supported-assets", title: "Supported Assets", level: 2 },
        { id: "verdict", title: "Which Should You Choose?", level: 2 },
      ]}
      faqs={[
        { question: "Which has lower fees?", answer: "Kraken generally offers lower fees across most volume tiers. Kraken starts at 0.25% maker/0.40% taker while Gemini ActiveTrader starts at 0.20% maker/0.40% taker. Both decrease with volume." },
        { question: "Which has better security?", answer: "Both are excellent. Gemini is SOC 2 Type 2 certified and operates as a trust company. Kraken has never been hacked and publishes proof of reserves. Both are among the safest exchanges globally." },
        { question: "Which has more coins?", answer: "Kraken lists 200+ cryptocurrencies compared to Gemini's 100+. Kraken has the advantage in variety." },
        { question: "Which supports more fiat currencies?", answer: "Kraken supports 7 fiat currencies (USD, EUR, GBP, CAD, AUD, CHF, JPY). Gemini primarily supports USD, EUR, GBP, CAD, AUD, and HKD." },
      ]}
      relatedArticles={[
        { title: "Gemini vs Coinbase", href: "/exchanges/compare/gemini-vs-coinbase", category: "Exchanges" },
        { title: "Kraken vs Coinbase", href: "/exchanges/compare/kraken-vs-coinbase", category: "Exchanges" },
        { title: "Exchange Security Features", href: "/exchanges/learn/exchange-security-features", category: "Exchanges" },
      ]}
    >
      <section id="overview">
        <h2>Platform Overview</h2>
        <p>Gemini, founded in 2014 by the Winklevoss twins, operates as a New York trust company with SOC 2 Type 2 certification. The platform emphasizes security and regulatory compliance with a curated selection of assets. Gemini serves both retail users and institutions.</p>
        <p>Kraken, founded in 2011, is one of the longest-running exchanges with an unblemished security record. Based in San Francisco, it holds licenses across multiple jurisdictions. Kraken offers spot, margin, and futures trading alongside staking and institutional services.</p>
      </section>

      <section id="fees">
        <h2>Fee Comparison</h2>
        <p>Gemini's standard platform charges convenience fees up to 1.49%. ActiveTrader offers 0.20% maker/0.40% taker at base tier, decreasing to 0% maker/0.10% taker at $10M+ monthly volume.</p>
        <p>Kraken charges 0.25% maker/0.40% taker at base tier for spot, decreasing to 0% maker/0.10% taker at the highest volumes. Futures fees start at 0.02% maker/0.05% taker. Kraken's fee structure is more competitive at lower volumes.</p>
      </section>

      <section id="security">
        <h2>Security and Regulation</h2>
        <p>Gemini operates as a NYDFS-regulated trust company with SOC 2 Type 2 certification. It maintains insurance on custodial assets and FDIC coverage on USD deposits. The trust company framework provides banking-level regulatory oversight.</p>
        <p>Kraken has never been hacked since 2011, one of the longest clean records in crypto. It publishes proof of reserves verified by third-party auditors. Kraken holds licenses in multiple countries and offers hardware security key support for account protection.</p>
      </section>

      <section id="features">
        <h2>Features</h2>
        <p>Gemini offers ActiveTrader for advanced trading, Gemini Earn for yield, Gemini Pay for spending, and the GUSD stablecoin. The platform focuses on core exchange functionality with a premium on security and compliance.</p>
        <p>Kraken provides more features: spot trading, margin (5x), futures, staking for multiple assets, OTC trading, and Kraken Pro interface. The broader trading feature set gives Kraken an edge for active traders.</p>
      </section>

      <section id="supported-assets">
        <h2>Supported Assets</h2>
        <p>Gemini lists 100+ carefully curated cryptocurrencies with focus on established projects. The selective approach prioritizes quality over quantity.</p>
        <p>Kraken supports 200+ cryptocurrencies with seven fiat currency pairs. The broader selection with strong international fiat support makes Kraken more versatile for global users.</p>
      </section>

      <section id="verdict">
        <h2>Which Should You Choose?</h2>
        <p>Choose Gemini if you prioritize SOC 2 certification, trust company regulation, and a streamlined secure experience. Gemini is ideal for security-first investors who value the NYDFS trust company framework.</p>
        <p>Choose Kraken if you want more coins, broader fiat support, additional features like staking and futures, and competitive fees. Kraken is the better all-around platform for security-conscious users who also want comprehensive trading capabilities.</p>
      </section>
    </LearnPageLayout>
  );
}
