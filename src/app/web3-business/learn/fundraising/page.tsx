import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Web3 Fundraising Guide (${CURRENT_YEAR}) - Grants, VCs & Token Sales | degen0x`,
  description: `Learn how to fundraise for your Web3 project. Ecosystem grants, crypto venture capital, token sales, SAFTs, and alternative funding strategies explained.`,
};

export default function FundraisingPage() {
  return (
    <LearnPageLayout
      title="Web3 Fundraising Guide"
      categoryName="Web3 Business"
      categorySlug="web3-business"
      readTime="10 min"
      intro="Fundraising in Web3 offers a broader toolkit than traditional startups, ranging from ecosystem grants and retroactive funding to token sales and crypto-native venture capital. Understanding which funding sources match your project stage, token model, and growth objectives is critical to raising capital on favorable terms while maintaining alignment with your community."
      toc={[
        { id: "grants", title: "grants", level: 2 },
        { id: "ecosystem-grants", title: "Ecosystem Grants", level: 2 },
        { id: "venture-capital", title: "venture-capital", level: 2 },
        { id: "crypto-venture-capital", title: "Crypto Venture Capital", level: 2 },
        { id: "token-sales", title: "token-sales", level: 2 },
        { id: "token-sales-and-idos", title: "Token Sales and IDOs", level: 2 },
        { id: "alternative", title: "alternative", level: 2 },
        { id: "alternative-funding-models", title: "Alternative Funding Models", level: 2 }
      ]}
      faqs={[
        { question: "What is a SAFT agreement?", answer: "A SAFT (Simple Agreement for Future Tokens) is a legal instrument where investors provide capital in exchange for the right to receive tokens at a future date, typically at a discount to the public launch price. SAFTs are commonly used in pre-token seed and Series A rounds. They are structured to comply with securities regulations by selling to accredited investors under Regulation D exemptions." },
        { question: "How long does a crypto fundraising round take?", answer: "A typical seed round takes 2 to 4 months from initial outreach to close. Series A rounds may take 3 to 6 months. Grant applications usually take 4 to 12 weeks for review and approval. Token sales can be executed within weeks once legal and technical preparation is complete. Factor in 2 to 4 months of additional time for legal documentation, entity formation, and compliance work." },
        { question: "Should I raise in equity or tokens?", answer: "Early-stage projects often raise equity (or SAFEs) if the token design is not finalized, then transition to SAFTs or token warrants in later rounds. If your product fundamentally requires a token, SAFTs allow investors to participate in the token upside while providing current capital. If your business model works without a token, traditional equity is simpler and avoids the regulatory complexity of token offerings." },
      ]}
      relatedArticles={[
        { title: "Best Web3 Grants", href: "/web3-business/best/grants", category: "Web3 Business" },
        { title: "Tokenomics Design", href: "/web3-business/learn/tokenomics-design", category: "Web3 Business" },
        { title: "Best Token Launchpads", href: "/web3-business/best/launchpads", category: "Web3 Business" },
      ]}
    >
      <h2 id="grants">Ecosystem Grants</h2>
      <p>Ecosystem grants are the most founder-friendly funding source in Web3, providing non-dilutive capital with no equity or token requirements. Major blockchain foundations including Ethereum, Solana, Optimism, Arbitrum, and Polygon all operate active grant programs. Grant sizes range from $5,000 for individual contributor grants to $500,000+ for major infrastructure projects. The key to successful grant applications is demonstrating how your project directly benefits the specific ecosystem. Build a working prototype before applying, define clear milestones with measurable deliverables, show existing community engagement or traction, and align your roadmap with the foundation stated priorities. Gitcoin Grants offers a unique quadratic funding model where community support amplifies matching funds, making it ideal for public goods projects. Retroactive funding programs like Optimism RetroPGF reward impact that has already been delivered, removing the risk of funding vaporware.</p>

      <h2 id="venture-capital">Crypto Venture Capital</h2>
      <p>Crypto-native venture capital firms provide larger checks, strategic guidance, and ecosystem connections. Leading firms include a16z Crypto, Paradigm, Polychain Capital, Pantera Capital, Multicoin Capital, and dozens of mid-tier and emerging funds. Crypto VC rounds typically follow a progression: pre-seed ($250K to $1M, often from angels and small funds), seed ($1M to $5M from crypto-focused VCs), Series A ($5M to $20M from larger funds), and growth rounds ($20M+ from major firms). Deal structures include SAFEs (pre-token), SAFTs (with token commitment), equity rounds, and token warrants (equity with the right to purchase tokens at a fixed price later). When approaching VCs, prepare a clear pitch deck covering the problem, solution, market size, team, tokenomics (if applicable), traction, and competitive landscape. Warm introductions from portfolio founders or advisors dramatically increase response rates.</p>

      <h2 id="token-sales">Token Sales and IDOs</h2>
      <p>Token sales allow projects to raise capital while simultaneously distributing tokens to their community. Initial DEX Offerings (IDOs) through launchpad platforms are the most common format, where tokens are sold to participants before trading begins on decentralized exchanges. Liquidity Bootstrapping Pools (LBPs) through platforms like Fjord Foundry use a Dutch auction mechanism for fair price discovery. Private token rounds sold to institutional investors and whitelisted participants typically precede public sales at a discounted price. Before conducting any token sale, obtain legal counsel to ensure compliance with securities regulations in your target jurisdictions. Most legitimate token sales exclude US persons or are limited to accredited investors under Regulation D. The token should have genuine utility and the sale structure should prevent excessive concentration among a small group of buyers.</p>

      <h2 id="alternative">Alternative Funding Models</h2>
      <p>Beyond grants, VCs, and token sales, Web3 offers several alternative funding paths. Revenue-based financing allows projects with existing revenue to borrow against future earnings without diluting equity or tokens. Protocol-owned liquidity models, pioneered by Olympus DAO, let protocols accumulate their own liquidity rather than renting it through incentive emissions. Community rounds through platforms like Echo, Republic, or Juicebox allow a broad base of community members to invest smaller amounts. NFT sales can fund development while building community ownership (many projects have raised millions through genesis NFT collections). Treasury diversification involves established protocols exchanging governance tokens for stablecoins or other assets with strategic partners. The most resilient fundraising strategies combine multiple sources rather than depending on a single mechanism.</p>
    </LearnPageLayout>
  );
}
