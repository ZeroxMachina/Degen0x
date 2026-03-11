import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `RWA Tokens Explained (${CURRENT_YEAR}) - Real World Assets on Blockchain | ${SITE_NAME}`,
  description: `Learn about Real World Asset (RWA) tokenization in ${CURRENT_YEAR}. Treasury bills, real estate, and commodities on-chain. How RWA tokens work and investment opportunities.`,
  alternates: { canonical: "/investing/learn/rwa-tokens-explained" },
};

const toc = [
  { id: "what-are-rwa", title: "What Are RWA Tokens?", level: 2 },
  { id: "types-of-rwa", title: "Types of Tokenized Real World Assets", level: 2 },
  { id: "how-tokenization-works", title: "How Asset Tokenization Works", level: 2 },
  { id: "benefits-risks", title: "Benefits and Risks", level: 2 },
  { id: "investing-in-rwa", title: "How to Invest in RWA Tokens", level: 2 },
];

const faqs = [
  { question: "What are the biggest RWA crypto projects?", answer: "Leading RWA projects include Ondo Finance (tokenized US Treasuries), Centrifuge (real-world credit), Maple Finance (institutional lending), and Goldfinch (emerging market loans). MakerDAO has significant RWA exposure through its treasury. BlackRock's BUIDL fund represents traditional finance entering the RWA space." },
  { question: "Are RWA tokens regulated?", answer: "RWA tokens often fall under securities regulations because they represent ownership or yield from real-world assets. Many RWA platforms implement KYC/AML requirements and restrict access to accredited investors. The regulatory landscape varies by jurisdiction and asset type. This is one of the more regulated corners of crypto." },
  { question: "Can I earn yield from RWA tokens?", answer: "Yes. Tokenized US Treasuries offer yields competitive with traditional T-bills (typically 4-5% depending on rates). Real estate tokens can provide rental income. Credit tokens offer lending yields from real-world borrowers. RWA yield is generally lower than DeFi native yields but backed by real economic activity rather than token emissions." },
  { question: "What is the advantage of tokenized real estate?", answer: "Tokenized real estate enables fractional ownership, making property investment accessible with much smaller minimums (sometimes $100 vs hundreds of thousands for direct ownership). It also provides liquidity that traditional real estate lacks, as tokens can be traded on secondary markets. However, the market is still developing and liquidity remains limited." },
  { question: "How do tokenized Treasuries work?", answer: "Tokenized Treasury products like Ondo's USDY or BlackRock's BUIDL hold actual US Treasury bills and notes in custody, then issue blockchain tokens representing shares of that holding. Token holders earn yield from the underlying Treasuries. The tokens are redeemable for their underlying value and can be used as collateral in DeFi protocols." },
];

const relatedArticles = [
  { title: "AI Crypto Tokens", href: "/investing/learn/ai-crypto-tokens", category: "Investing" },
  { title: "Yield vs Growth Investing", href: "/investing/learn/yield-vs-growth", category: "Investing" },
  { title: "DeFi vs CeFi Investing", href: "/investing/learn/defi-vs-cefi-investing", category: "Investing" },
];

export default function RwaTokensExplainedPage() {
  return (
    <LearnPageLayout
      title="RWA Tokens Explained: Real World Assets on Blockchain"
      categoryName="Crypto Investing"
      categorySlug="investing"
      readTime="9 min"
      intro="Real World Asset (RWA) tokenization is one of the fastest-growing sectors in crypto, bringing trillions of dollars in traditional assets onto blockchain rails. From US Treasury bills to real estate and commodities, RWA tokens bridge the gap between traditional finance and DeFi. This guide explains what RWA tokens are, how they work, and what opportunities they present."
      toc={toc}
      faqs={faqs}
      relatedArticles={relatedArticles}
    >
      <h2 id="what-are-rwa">What Are RWA Tokens?</h2>
      <p>
        RWA tokens are blockchain-based digital tokens that represent ownership or claims on
        real-world assets. These assets can include government bonds, real estate, commodities,
        private credit, invoices, or any other tangible or financial asset. The token acts as a
        digital certificate of ownership that can be traded, used as collateral, or held for
        yield on blockchain networks.
      </p>
      <p>
        The concept is straightforward: take a real-world asset, place it in custody with a
        regulated entity, and issue blockchain tokens representing fractional ownership. This
        process brings the benefits of blockchain (24/7 trading, programmability, global access,
        fractional ownership) to assets that have traditionally been illiquid, expensive, and
        accessible only to institutional investors or the wealthy.
      </p>

      <h2 id="types-of-rwa">Types of Tokenized Real World Assets</h2>
      <p>
        Tokenized government securities are the largest RWA category. Products like Ondo Finance&apos;s
        USDY and BlackRock&apos;s BUIDL offer on-chain exposure to US Treasury yields. These provide
        a compelling alternative to stablecoins that earn no yield, allowing DeFi users to earn
        risk-free rates while maintaining on-chain liquidity. The total value of tokenized
        Treasuries has grown substantially as investors seek yield-bearing digital assets.
      </p>
      <p>
        Private credit and real-world lending represent another major category. Platforms like
        Centrifuge and Goldfinch connect DeFi liquidity with real-world borrowers, including
        emerging market businesses, trade finance, and revenue-based lending. Tokenized real
        estate offers fractional property ownership. Tokenized commodities provide on-chain
        exposure to gold, silver, and other physical assets through tokens backed by the
        underlying commodity held in custody.
      </p>

      <h2 id="how-tokenization-works">How Asset Tokenization Works</h2>
      <p>
        The tokenization process involves several steps. First, a legal entity acquires the
        underlying asset (Treasury bills, property deed, etc.) and holds it in regulated custody.
        A smart contract is deployed that issues tokens representing shares of the underlying
        asset. The custodian or issuer provides attestations verifying the reserves match the
        outstanding tokens. Investors purchase tokens on primary or secondary markets and can
        redeem them for the underlying asset value.
      </p>
      <p>
        Trust and verification are the critical challenges. Unlike native crypto assets that
        exist entirely on-chain, RWA tokens depend on off-chain custodians, legal structures,
        and real-world enforcement. The token is only as good as the entity backing it and the
        legal framework protecting token holders. This is why institutional involvement from
        firms like BlackRock is significant: it brings the custody infrastructure and regulatory
        compliance that RWA tokenization requires to scale.
      </p>

      <h2 id="benefits-risks">Benefits and Risks</h2>
      <p>
        The benefits of RWA tokens include fractional ownership (invest $100 in a property or
        Treasury bond), 24/7 liquidity on blockchain markets, composability with DeFi protocols
        (use tokenized Treasuries as collateral for loans), global access without traditional
        brokerage accounts, and transparent on-chain accounting. These properties can make
        traditionally exclusive investments accessible to a global audience.
      </p>
      <p>
        Risks include counterparty risk (you depend on the issuer and custodian), regulatory
        risk (securities regulations may restrict access or change token status), liquidity risk
        (secondary markets may be thin), smart contract risk (bugs in the token contract), and
        oracle risk (pricing feeds may be delayed or inaccurate for real-world assets). The
        legal complexity of cross-border asset tokenization adds additional uncertainty. Always
        verify the issuer&apos;s regulatory status, audit history, and custody arrangements before investing.
      </p>

      <h2 id="investing-in-rwa">How to Invest in RWA Tokens</h2>
      <p>
        For the simplest RWA exposure, consider tokenized Treasury products like USDY or BUIDL,
        which offer familiar government bond yields in token form. These are available on major
        DeFi platforms and increasingly through centralized exchanges. For higher yields, explore
        private credit protocols like Centrifuge, though these carry more credit risk. Real estate
        tokens are available through specialized platforms but tend to have lower liquidity.
      </p>
      <p>
        You can also gain exposure through RWA governance tokens like ONDO, CFG, or MPL, which
        represent equity-like ownership in the platforms facilitating tokenization. These tokens
        benefit from the growth of the overall RWA sector but carry additional market risk beyond
        the underlying assets. A balanced approach might combine direct RWA yield products with
        smaller positions in promising RWA infrastructure tokens.
      </p>
    </LearnPageLayout>
  );
}
