import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Real World Asset Lending in DeFi (${CURRENT_YEAR}) | CryptoDegen`,
  description: "Guide to Real World Asset (RWA) lending in DeFi. Learn how tokenized real-world assets are used in lending protocols, yields, and risks.",
};

export default function RealWorldAssetLendingPage() {
  return (
    <LearnPageLayout title="Real World Asset Lending in DeFi" categoryName="DeFi Lending" categorySlug="defi-lending" readTime="9 min read"
      intro="Real World Asset (RWA) lending bridges traditional finance and DeFi by bringing tokenized versions of traditional assets like US Treasuries, corporate bonds, real estate, and invoices into DeFi lending protocols. This trend has grown significantly as protocols seek sustainable yield sources beyond crypto-native activities. RWA lending provides DeFi users access to traditional finance yields while offering traditional asset holders access to DeFi liquidity."
      toc={[{ id: "what-are-rwas", title: "What Are RWAs in DeFi?", level: 2 }, { id: "protocols-platforms", title: "RWA Lending Protocols", level: 2 }, { id: "yields-benefits", title: "Yields and Benefits", level: 2 }, { id: "risks-challenges", title: "Risks and Challenges", level: 2 }]}
      faqs={[
        { question: "What are tokenized RWAs?", answer: "Tokenized Real World Assets are blockchain tokens that represent ownership or exposure to traditional financial assets. Examples include tokenized US Treasury bills, corporate bonds, real estate, invoices, and carbon credits. These tokens can be used in DeFi protocols for lending, trading, and collateral." },
        { question: "How does RWA lending generate yield?", answer: "RWA lending yield comes from the underlying traditional asset. For tokenized Treasuries, the yield comes from US government interest payments. For real estate RWAs, yield comes from rental income. These are sustainable yield sources backed by real economic activity rather than token incentives." },
        { question: "Can anyone access RWA lending?", answer: "Many RWA protocols require KYC/AML compliance due to securities regulations, limiting access to verified investors. Some RWA products are restricted to accredited investors. However, some RWA-backed stablecoins and lending products are accessible to all DeFi users through intermediary protocols." },
      ]}
      relatedArticles={[
        { title: "Undercollateralized Lending", href: "/defi-lending/learn/undercollateralized-lending", category: "DeFi Lending" },
        { title: "Fixed-Rate Lending", href: "/defi-lending/learn/fixed-rate-lending", category: "DeFi Lending" },
        { title: "Institutional Crypto Lending", href: "/crypto-loans/learn/institutional-crypto-lending", category: "Crypto Loans" },
      ]}
    >
      <h2 id="what-are-rwas">What Are RWAs in DeFi?</h2>
      <p>Real World Assets in DeFi are tokenized representations of traditional financial instruments. The most significant category is tokenized US Treasuries, where protocols like Ondo Finance (USDY, OUSG), Backed Finance (bIB01), and Mountain Protocol (USDM) create tokens backed by US Treasury bills. These tokens earn the Treasury yield (approximately 4-5%) and can be used within DeFi. MakerDAO has been a pioneer in accepting RWA collateral for DAI generation, deploying billions into US Treasuries and structured credit through entities like BlockTower and Monetalis. Other RWA categories include tokenized private credit, real estate, carbon credits, and trade finance. The total value of tokenized RWAs on-chain has grown to billions of dollars, driven by the attractiveness of earning traditional finance yields through DeFi infrastructure.</p>

      <h2 id="protocols-platforms">RWA Lending Protocols</h2>
      <p>MakerDAO is the largest DeFi consumer of RWAs, using tokenized Treasuries and structured credit as backing for DAI. This diversifies Maker&apos;s collateral beyond crypto assets and generates revenue from traditional finance yields. Centrifuge enables tokenization of real-world credit assets and connects them to DeFi lending pools. Maple Finance and Goldfinch extend DeFi capital to real-world borrowers through different credit assessment models. Ondo Finance creates tokenized Treasury products that can be used as collateral or held for yield. Flux Finance (associated with Ondo) enables lending against tokenized Treasury collateral. For retail DeFi users, the easiest access to RWA yields is through stablecoins backed by RWAs or by depositing into pools that lend to RWA-focused borrowers on protocols like Centrifuge or Goldfinch.</p>

      <h2 id="yields-benefits">Yields and Benefits</h2>
      <p>RWA yields are typically lower than peak DeFi yields but more predictable and sustainable. Tokenized Treasury products yield the current US Treasury rate, approximately 4-5%. Private credit RWAs may yield 8-12% reflecting higher credit risk. Real estate RWAs yield based on property income. The key benefit is yield sustainability: these returns come from real economic activity rather than token emissions that inevitably decrease. RWA lending also provides diversification for DeFi portfolios, as traditional asset yields are less correlated with crypto market cycles. During crypto bear markets, RWA yields remain stable while crypto-native yields collapse. This counter-cyclical characteristic makes RWAs valuable for portfolio construction. Additionally, RWAs expand the collateral universe for lending protocols, allowing more diverse and potentially more stable backing for loans.</p>

      <h2 id="risks-challenges">Risks and Challenges</h2>
      <p>RWA lending introduces risks that do not exist in purely crypto-native DeFi. Legal and regulatory risk: tokenized securities may require compliance with securities laws, restricting who can participate. Custodian risk: the real-world assets must be held by a trusted custodian, reintroducing the counterparty risk that DeFi was designed to eliminate. Redemption risk: converting RWA tokens back to the underlying assets or cash may involve delays and intermediaries. Oracle risk for RWAs is different from crypto: pricing traditional assets on-chain requires different data sources and update frequencies. Liquidity risk: RWA tokens may have limited on-chain liquidity, making large positions difficult to exit quickly. Credit risk for non-Treasury RWAs: borrowers may default, and enforcement of legal agreements across jurisdictions is complex and slow. Despite these challenges, the growth of RWA lending demonstrates strong demand for sustainable yield and the potential for DeFi to become an infrastructure layer for broader financial markets.</p>
    </LearnPageLayout>
  );
}
