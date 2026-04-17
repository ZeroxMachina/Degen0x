import { Metadata } from "next";
import Link from "next/link";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";
import MethodologyBlock from '@/components/MethodologyBlock';

export const metadata: Metadata = {
  title: `Exactly Protocol Review 2026: Fixed-Rate DeFi Lending`,
  description: "In-depth Exactly Protocol review covering fixed-rate lending, variable markets, the EXA token, and how this Optimism protocol enables predictable DeFi yields.",
  alternates: { canonical: "/defi-lending/reviews/exactly" },
  openGraph: { type: "website", images: [{ url: "/og-default.svg", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image" }};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://degen0x.com/' },
    { '@type': 'ListItem', position: 2, name: 'Defi Lending', item: 'https://degen0x.com/defi-lending' },
    { '@type': 'ListItem', position: 3, name: 'Reviews', item: 'https://degen0x.com/defi-lending/reviews' },
    { '@type': 'ListItem', position: 4, name: 'Exactly', },
  ],
};

export default function ExactlyReview() {
  return (
    <>
      <ReviewPage
      product={{ name: "Exactly Protocol", slug: "exactly", rating: 4.1, description: "Exactly Protocol is a decentralized lending platform on Optimism that uniquely offers both fixed-rate and variable-rate lending markets, enabling users to lock in predictable yields and borrowing costs.", pros: ["Fixed-rate lending provides predictable yields and borrowing costs", "Dual market system offers flexibility between fixed and variable rates", "Built on Optimism with low transaction costs", "Strong tokenomics with EXA staking and revenue sharing", "Innovative approach to a genuine DeFi need for rate certainty"], cons: ["Fixed-rate markets may have limited liquidity for specific maturities", "More complex than simple variable-rate protocols", "Limited to Optimism ecosystem", "Newer protocol with growing but still modest TVL", "Fixed rates may be less competitive during certain market conditions"], bestFor: "DeFi users seeking predictable fixed-rate yields and borrowing costs", affiliateUrl: "#", category: "defi-lending" }}
      categoryName="DeFi Lending" categorySlug="defi-lending"
      overview="Exactly Protocol addresses one of DeFi's persistent challenges: the lack of predictable interest rates. While most lending protocols offer only variable rates that fluctuate constantly, Exactly provides both fixed-rate and variable-rate lending markets on Optimism. The fixed-rate markets allow lenders to lock in yields and borrowers to lock in costs for specific time periods, bringing a level of financial planning capability that is standard in traditional finance but rare in DeFi. The protocol has gained traction among users who value rate predictability, institutional-minded participants, and those looking to hedge against rate volatility. The EXA governance token provides staking rewards and protocol revenue sharing."
      sections={[
        { id: "fixed-rate", title: "Fixed-Rate Markets", content: "Exactly's fixed-rate markets operate through a maturity-based system where users can lend or borrow at locked rates for specific time periods. Maturities are typically set at weekly or monthly intervals, with rates determined by market supply and demand at each maturity point. When you lend at a fixed rate, you know exactly what yield you will earn for the duration. When you borrow at a fixed rate, your interest cost is locked regardless of market conditions. This creates value for users who need predictability for financial planning, hedging, or institutional treasury management. Fixed-rate positions mature at specific dates, at which point they can be rolled into new maturities or converted to variable-rate positions." },
        { id: "variable-rate", title: "Variable-Rate Markets", content: "Alongside fixed-rate markets, Exactly offers standard variable-rate lending and borrowing similar to protocols like Aave and Compound. Variable-rate markets provide flexibility for users who do not need rate certainty and prefer the ability to enter and exit positions freely. Interest rates adjust based on utilization curves familiar to DeFi lending users. The coexistence of fixed and variable markets creates interesting dynamics where users can arbitrage between the two, and the interaction between the markets provides more complete interest rate discovery than either market alone." },
        { id: "exa-token", title: "EXA Token & Governance", content: "The EXA token serves as Exactly's governance and staking token. Staked EXA earns a share of protocol revenue, creating real yield for token holders rather than relying solely on emissions. Governance rights allow token holders to vote on protocol parameters including supported assets, risk settings, maturity configurations, and treasury management. The real-yield staking model aligns EXA holders with protocol success and provides more sustainable economics than pure emission-based incentives. EXA also serves as an incentive for liquidity in select markets." },
        { id: "security", title: "Security & Risk Profile", content: "Exactly has undergone multiple security audits and implements standard DeFi safety features including oracle validation, liquidation mechanisms, and risk parameter controls. The fixed-rate mechanism introduces additional complexity compared to purely variable-rate protocols, which means more code surface area and potential for edge cases. However, the auditing process has specifically reviewed the fixed-rate logic. Operating on Optimism provides the security of Ethereum with lower transaction costs. Users should consider the additional complexity of fixed-rate mechanics when assessing risk alongside standard smart contract and oracle risks." },
      ]}
      fees={{ "Supply APY (Variable)": "Variable (2-8%)", "Fixed Rate Supply": "Varies by maturity (3-10%)", "Borrow APR (Variable)": "Variable (3-12%)", "Fixed Rate Borrow": "Varies by maturity (5-15%)", "Liquidation Penalty": "5-10%", "Gas Costs": "Low on Optimism" }}
      security={["Multiple security audits including fixed-rate logic", "Oracle price validation via Chainlink", "Automated liquidation mechanisms", "Maturity-based risk management", "Governance-controlled parameters", "Real-yield tokenomics reduce emission dependency"]}
      features={["Fixed-rate lending and borrowing with specific maturities", "Variable-rate markets for flexible positioning", "EXA token staking with protocol revenue sharing", "Multiple maturity options for fixed-rate positions", "Support for major Optimism assets", "Low gas costs on Optimism network", "Governance participation through EXA token"]}
      faqs={[
        { question: "How do fixed rates work on Exactly?", answer: "You choose a maturity date and lock in a rate for that period. Lenders earn the fixed rate until maturity; borrowers pay the fixed rate. At maturity, positions can be rolled into new fixed terms or converted to variable." },
        { question: "Are fixed rates always better than variable?", answer: "Not necessarily. Fixed rates provide certainty but may be higher or lower than variable rates depending on market expectations. In rising rate environments, locking in can be advantageous. In falling rate environments, variable may be better." },
        { question: "Is EXA staking profitable?", answer: "EXA staking earns real protocol revenue rather than emissions. Profitability depends on protocol activity and fee generation. Check current staking yields and consider token price risk alongside staking returns." },
      ]}
      relatedReviews={[{ name: "Sonne", slug: "sonne" }, { name: "Sturdy", slug: "sturdy" }, { name: "Granary", slug: "granary" }]}
      relatedGuides={[{ title: "Fixed-Rate Yield Guide", href: "/defi-lending/learn/fixed-rate-yield-guide" }, { title: "DeFi on Optimism", href: "/defi-lending/learn/defi-on-optimism" }]}
    />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "WebPage", "name": "Fixed-Rate Markets", "description": "In-depth Exactly Protocol review covering fixed-rate lending, variable markets, the EXA token, and how this Optimism protocol enables predictable DeFi yields.", "url": "https://degen0x.com/defi-lending/reviews/exactly", "datePublished": "2026-04-13", "dateModified": "2026-04-13"}) }} />
    <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/defi-lending/reviews/aave" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave</a>
  <a href="/defi-lending/reviews/alpaca-finance" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Alpaca Finance</a>
  <a href="/defi-lending/reviews/aurelius" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aurelius</a>
  <a href="/defi-lending/reviews/bastion" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bastion</a>
  <a href="/defi-lending/reviews/benqi" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Benqi</a>
  <a href="/defi-lending/reviews/centrifuge" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Centrifuge</a>
  <a href="/defi-lending/reviews/clearpool" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Clearpool</a>
  <a href="/defi-lending/reviews/compound" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Compound</a>
</nav>
      <MethodologyBlock variant="review" />
      </>
  );
}
