const fs = require('fs');
const path = require('path');

const BASE = '/Users/0xmachina/cryptodegen/src/app';

function w(filePath, content) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, content);
    console.log('CREATED: ' + path.relative(BASE, filePath));
  } else {
    console.log('EXISTS: ' + path.relative(BASE, filePath));
  }
}

function learn(slug, funcName, title, catName, catSlug, readTime, intro, toc, faqs, related, sections) {
  const secHtml = sections.map(s => `
      <section id="${s.id}">
        <h2>${s.title}</h2>
        <p>${s.p1}</p>
        <p>${s.p2}</p>
      </section>`).join('\n');

  const tocStr = toc.map(t => `        { id: "${t.id}", title: "${t.title}", level: 2 },`).join('\n');
  const faqStr = faqs.map(f => `        { question: "${f.q}", answer: "${f.a}" },`).join('\n');
  const relStr = related.map(r => `        { title: "${r.title}", href: "${r.href}", category: "${r.cat}" },`).join('\n');

  return `import type { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { SITE_NAME, CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: \`${title} (\${CURRENT_YEAR}) | \${SITE_NAME}\`,
  description: "${intro.substring(0, 155).replace(/"/g, '\\"')}...",
  keywords: ["${slug.replace(/-/g, ' ')}"],
};

export default function ${funcName}() {
  return (
    <LearnPageLayout
      title="${title}"
      categoryName="${catName}"
      categorySlug="${catSlug}"
      readTime="${readTime}"
      intro="${intro.replace(/"/g, '\\"')}"
      toc={[
${tocStr}
      ]}
      faqs={[
${faqStr}
      ]}
      relatedArticles={[
${relStr}
      ]}
    >${secHtml}
    </LearnPageLayout>
  );
}
`;
}

function review(slug, funcName, name, catName, catSlug, rating, desc, pros, cons, bestFor, overview, sections, fees, security, features, faqs, relReviews, relGuides) {
  const prosStr = pros.map(p => `          "${p}",`).join('\n');
  const consStr = cons.map(c => `          "${c}",`).join('\n');
  const secStr = sections.map(s => `        { id: "${s.id}", title: "${s.title}", content: "${s.content.replace(/"/g, '\\"')}" },`).join('\n');
  const feeStr = Object.entries(fees).map(([k,v]) => `        "${k}": "${v}",`).join('\n');
  const securityStr = security.map(s => `        "${s}",`).join('\n');
  const featStr = features.map(f => `        "${f}",`).join('\n');
  const faqStr = faqs.map(f => `        { question: "${f.q}", answer: "${f.a.replace(/"/g, '\\"')}" },`).join('\n');
  const rrStr = relReviews.map(r => `        { name: "${r.name}", slug: "${r.slug}" },`).join('\n');
  const rgStr = relGuides.map(g => `        { title: "${g.title}", href: "${g.href}" },`).join('\n');

  return `import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: \`${name} Review \${CURRENT_YEAR}: Fees, Features, Pros & Cons\`,
  description: "${desc.substring(0, 155).replace(/"/g, '\\"')}",
};

export default function ${funcName}() {
  return (
    <ReviewPage
      product={{
        name: "${name}",
        slug: "${slug}",
        rating: ${rating},
        description: "${desc.replace(/"/g, '\\"')}",
        pros: [
${prosStr}
        ],
        cons: [
${consStr}
        ],
        bestFor: "${bestFor}",
        affiliateUrl: "#",
        category: "${catSlug}",
      }}
      categoryName="${catName}"
      categorySlug="${catSlug}"
      overview={\`${overview}\`}
      sections={[
${secStr}
      ]}
      fees={{
${feeStr}
      }}
      security={[
${securityStr}
      ]}
      features={[
${featStr}
      ]}
      faqs={[
${faqStr}
      ]}
      relatedReviews={[
${rrStr}
      ]}
      relatedGuides={[
${rgStr}
      ]}
    />
  );
}
`;
}

// Helper for batch learn pages
function batchLearn(pages, catName, catSlug, defaultRelated) {
  pages.forEach(p => {
    const tocItems = p.toc || [
      { id: "section-1", title: "Overview and Fundamentals" },
      { id: "section-2", title: "Key Concepts and Mechanics" },
      { id: "section-3", title: "Practical Applications" },
      { id: "section-4", title: "Best Practices and Tips" },
    ];

    const faqItems = p.faqs || [
      { q: `What should beginners know about ${p.title.toLowerCase()}?`, a: `Start by understanding the basics covered in this guide. Focus on fundamental concepts before exploring advanced strategies. The space evolves quickly, so staying informed through community engagement and continued learning is essential.` },
      { q: `How does this relate to the broader ecosystem?`, a: `${p.title} is an important component of the ecosystem that connects to market dynamics, economics, and participant strategies. Understanding this topic provides valuable context for effective navigation.` },
    ];

    const relArticles = p.related || defaultRelated;

    const secs = p.sections || [
      { id: "section-1", title: "Overview and Fundamentals", p1: `${p.intro} The fundamentals of this topic provide the foundation for understanding more advanced concepts and strategies. Grasping these basics is essential for making informed decisions.`, p2: `The ecosystem has matured significantly, and ${p.title.toLowerCase()} represents one of the key areas where innovation and practical application intersect. Understanding the current landscape requires awareness of both the technical underpinnings and the market dynamics that drive adoption and value creation.` },
      { id: "section-2", title: "Key Concepts and Mechanics", p1: `The mechanics underlying ${p.title.toLowerCase()} involve several interrelated concepts that work together. Smart contracts, protocols, marketplace dynamics, and community governance all play roles in how this area functions and evolves. Understanding these mechanics at a deeper level enables more sophisticated participation.`, p2: `Collectors and participants who understand the technical foundations can better evaluate quality and longevity. Creators who grasp the mechanics can build more robust projects. Investors who comprehend the underlying dynamics can make more informed allocation decisions based on fundamental analysis rather than speculation.` },
      { id: "section-3", title: "Practical Applications", p1: `Real-world applications span multiple sectors and use cases. Each application brings unique requirements and opportunities that shape how the technology is implemented and adopted. The practical value comes from the ability to provide verifiable ownership, programmable rules, and interoperable digital assets across platforms and ecosystems.`, p2: `As infrastructure improves and user experience simplifies, the range of practical applications continues to expand, bringing the technology closer to mainstream adoption. Early participants in promising application areas often benefit from the growth that follows as adoption increases and network effects compound over time.` },
      { id: "section-4", title: "Best Practices and Tips", p1: `Success requires a combination of technical knowledge, market awareness, and community engagement. Following established best practices reduces risk and increases the likelihood of positive outcomes. Research thoroughly before committing funds, verify legitimacy of projects and platforms, and maintain proper security practices for wallet and key management.`, p2: `Stay connected to the community through social media, forums, and industry publications to remain informed about developments, opportunities, and risks. Building a network of trusted sources and maintaining a learning mindset are the most valuable long-term strategies for anyone participating in this ecosystem.` },
    ];

    w(`${BASE}/${catSlug}/learn/${p.slug}/page.tsx`, learn(p.slug, p.func, p.title, catName, catSlug, p.readTime || "10 min", p.intro, tocItems, faqItems, relArticles, secs));
  });
}

// =============================================
// NFT LEARN PAGES (20)
// =============================================

const nftLearnPages = [
  { slug: "nft-complete-guide", func: "NftCompleteGuidePage", title: "NFT Complete Guide", intro: "Non-fungible tokens have revolutionized digital ownership, creating new markets for art, gaming, music, and real-world assets. This comprehensive guide covers everything from the basics of how NFTs work to advanced strategies for collecting, creating, and investing in non-fungible tokens." },
  { slug: "how-nfts-work", func: "HowNftsWorkPage", title: "How NFTs Work: Technical Deep Dive", intro: "Understanding the technical foundations of NFTs provides critical context for collectors, creators, and investors. From blockchain mechanics to metadata standards and smart contract interactions, this guide explains the technology powering the NFT ecosystem." },
  { slug: "nft-smart-contracts", func: "NftSmartContractsGuidePage2", title: "NFT Smart Contracts Explained", intro: "Smart contracts are the backbone of every NFT, governing minting, transfers, royalties, and marketplace interactions. Understanding how these contracts work helps creators make informed decisions and collectors evaluate the quality and security of NFT projects." },
  { slug: "erc-721-vs-erc-1155", func: "Erc721VsErc1155LearnPage", title: "ERC-721 vs ERC-1155: NFT Token Standards Compared", intro: "ERC-721 and ERC-1155 are the two primary NFT token standards on Ethereum. Each has distinct advantages for different use cases, from unique art pieces to gaming items and semi-fungible tokens." },
  { slug: "nft-metadata-guide", func: "NftMetadataGuidePage", title: "NFT Metadata Guide", intro: "NFT metadata defines everything about a token beyond its on-chain ownership record, including the image, attributes, description, and external links. How metadata is stored and structured dramatically affects the long-term durability of NFTs." },
  { slug: "ipfs-nft-storage", func: "IpfsNftStoragePage", title: "IPFS and NFT Storage Guide", intro: "Where NFT media and metadata are stored is one of the most important yet overlooked aspects of NFT ownership. IPFS, Arweave, and on-chain storage each offer different guarantees for the permanence and accessibility of your NFT content." },
  { slug: "nft-rarity-guide", func: "NftRarityGuidePage", title: "NFT Rarity Guide: Understanding Trait Rarity", intro: "Rarity is a primary driver of NFT value within generative collections. Understanding how rarity is calculated, which traits drive premiums, and how to use rarity tools helps collectors make informed purchasing decisions." },
  { slug: "nft-flipping-guide", func: "NftFlippingGuidePage2", title: "NFT Flipping Guide: Trading for Profit", intro: "NFT flipping involves buying NFTs at lower prices and selling at a profit, often within short timeframes. While risky, informed flipping strategies can generate returns by identifying undervalued assets and timing market momentum." },
  { slug: "nft-valuation-methods", func: "NftValuationMethodsPage", title: "NFT Valuation Methods", intro: "Valuing NFTs requires a combination of quantitative analysis and qualitative assessment. From floor price multiples to trait-based pricing and comparable sales analysis, multiple methodologies exist for determining what an NFT is worth." },
  { slug: "nft-community-building", func: "NftCommunityBuildingPage", title: "NFT Community Building Guide", intro: "Community is the foundation of successful NFT projects. Building and nurturing an engaged community determines a project's longevity, floor price stability, and cultural impact across the NFT ecosystem." },
  { slug: "nft-marketing-guide", func: "NftMarketingGuidePage", title: "NFT Marketing Guide", intro: "Marketing an NFT project requires a unique blend of Web3 community building, social media strategy, and traditional marketing principles. Effective marketing is essential for NFT project success from pre-launch through post-mint phases." },
  { slug: "nft-licensing-rights", func: "NftLicensingRightsPage", title: "NFT Licensing and IP Rights Guide", intro: "Understanding what rights you actually receive when purchasing an NFT is crucial for collectors and commercial users. NFT licensing ranges from no commercial rights to full intellectual property transfer." },
  { slug: "dynamic-nfts-guide", func: "DynamicNftsGuidePage", title: "Dynamic NFTs Guide", intro: "Dynamic NFTs change over time based on external data, user interactions, or on-chain events. Unlike static NFTs with fixed metadata, dynamic NFTs can evolve and respond to real-world conditions." },
  { slug: "soulbound-tokens-guide", func: "SoulboundTokensGuidePage", title: "Soulbound Tokens Guide", intro: "Soulbound tokens are non-transferable NFTs permanently bound to a wallet address, designed to represent identity, credentials, achievements, and reputation in decentralized systems." },
  { slug: "nft-lending-guide", func: "NftLendingGuidePage", title: "NFT Lending Guide", intro: "NFT lending allows holders to borrow against their NFTs without selling them, or lend their NFTs to earn yield. This emerging DeFi category unlocks liquidity from otherwise illiquid NFT holdings." },
  { slug: "nft-staking-guide", func: "NftStakingGuidePage", title: "NFT Staking Guide", intro: "NFT staking lets holders lock their NFTs in smart contracts to earn rewards, typically in the form of the project's native token. Staking mechanisms vary widely between projects." },
  { slug: "nft-airdrops-guide", func: "NftAirdropsGuidePage", title: "NFT Airdrops Guide", intro: "NFT airdrops distribute free tokens to wallet holders based on various eligibility criteria. Understanding how airdrops work and how to qualify is essential for maximizing NFT collecting benefits." },
  { slug: "nft-gaming-guide", func: "NftGamingGuidePage2", title: "NFT Gaming Complete Guide", intro: "NFTs in gaming represent a paradigm shift from rented digital items to truly owned in-game assets. Players can buy, sell, and trade gaming items across marketplaces, creating real economic value from gameplay." },
  { slug: "ordinals-inscriptions-guide", func: "OrdinalsInscriptionsGuidePage", title: "Bitcoin Ordinals and Inscriptions Guide", intro: "Bitcoin Ordinals bring NFT-like functionality to Bitcoin by assigning serial numbers to individual satoshis and enabling data inscription directly on the Bitcoin blockchain." },
  { slug: "nft-future-trends", func: "NftFutureTrendsPage", title: "NFT Future Trends", intro: "The NFT landscape continues to evolve rapidly with new technologies, use cases, and market dynamics. From AI-generated art to real-world asset tokenization, the future of NFTs extends far beyond digital art." },
];

const nftDefaultRelated = [
  { title: "NFT Complete Guide", href: "/nfts/learn/nft-complete-guide", cat: "NFTs" },
  { title: "How to Buy NFTs", href: "/nfts/learn/how-to-buy-nfts", cat: "NFTs" },
  { title: "Best NFT Art Marketplaces", href: "/nfts/best/art", cat: "NFTs" },
];

batchLearn(nftLearnPages, "NFTs", "nfts", nftDefaultRelated);
console.log("NFT learn pages done");

// NFT COMPARE PAGES (3)
const nftComparePages = [
  { slug: "erc721-vs-erc1155", func: "Erc721VsErc1155ComparePage", title: "ERC-721 vs ERC-1155: NFT Standards Compared", intro: "A detailed comparison of Ethereum's two primary NFT token standards, examining technical differences, gas efficiency, use cases, and which standard best suits different project requirements." },
  { slug: "solana-vs-ethereum-nfts", func: "SolanaVsEthereumNftsComparePage", title: "Solana vs Ethereum NFTs: Complete Comparison", intro: "Comparing the two largest NFT ecosystems across cost, speed, marketplace options, collection quality, developer tools, and long-term prospects for collectors and creators." },
  { slug: "ordinals-vs-ethereum-nfts", func: "OrdinalsVsEthereumNftsComparePage", title: "Bitcoin Ordinals vs Ethereum NFTs Compared", intro: "Bitcoin Ordinals and Ethereum NFTs represent fundamentally different approaches to digital ownership. This comparison examines their technical architectures, cost structures, ecosystem maturity, and cultural communities." },
];

batchLearn(nftComparePages, "NFTs", "nfts", nftDefaultRelated);
console.log("NFT compare pages done");

// =============================================
// INSURANCE REVIEW PAGES (2 new: solace, sherlock)
// =============================================

w(`${BASE}/insurance/reviews/solace/page.tsx`, review(
  "solace", "SolaceReview", "Solace", "Crypto Insurance", "insurance", 3.8,
  "Solace is a decentralized insurance protocol offering portfolio-level coverage for DeFi positions, protecting users against smart contract exploits, oracle failures, and governance attacks across multiple protocols simultaneously.",
  ["Portfolio-level coverage across multiple DeFi protocols", "Single policy covers diverse DeFi positions", "Automated claims assessment via on-chain data", "Competitive premium pricing through risk pooling", "Transparent on-chain policy management"],
  ["Smaller coverage capacity than established competitors", "Limited protocol coverage compared to larger platforms", "Relatively new protocol with limited track record", "Complex pricing model for new users"],
  "DeFi users seeking portfolio-wide coverage across multiple protocols",
  `Solace takes an innovative approach to DeFi insurance by offering portfolio-level coverage rather than individual protocol policies. Instead of purchasing separate cover for each DeFi position, users can insure their entire portfolio with a single policy that monitors positions across supported protocols. This simplifies the insurance buying process and ensures comprehensive coverage without gaps.

The protocol uses on-chain data monitoring to assess risk in real-time and automate claims processing. When a covered event occurs, the system can verify the incident through on-chain evidence and initiate the claims payment process without requiring lengthy manual review.

Solace's underwriting model pools risk across all covered protocols, enabling more efficient capital utilization and competitive premium pricing. The protocol's native token governs decisions about risk parameters, coverage expansion, and development.`,
  [
    { id: "portfolio-coverage", title: "Portfolio Coverage Model", content: "Solace's portfolio coverage model monitors your DeFi positions across supported protocols and provides blanket protection. Rather than managing individual policies separately, a single Solace policy covers all eligible positions. The system tracks positions through wallet monitoring and adjusts coverage automatically as you enter or exit DeFi positions. This dynamic model eliminates the risk of forgetting to purchase coverage for a new position." },
    { id: "claims-automation", title: "Automated Claims Process", content: "Claims on Solace leverage on-chain data to verify covered events and process payouts efficiently. When a smart contract exploit or oracle failure affects a covered protocol, the system identifies impacted users through blockchain analysis. This data-driven approach reduces subjectivity in claims assessment and accelerates payout timelines compared to governance-based claims models." },
    { id: "risk-underwriting", title: "Risk Assessment and Underwriting", content: "Solace's underwriting engine evaluates the risk profile of supported protocols based on audit history, TVL, track record, and governance structure. Premium pricing reflects these assessments. Capital providers earn yield by supplying assets to the underwriting pool, accepting the risk of claims payouts in exchange for premium income from the diversified risk pool." },
  ],
  { "Annual Premium": "Variable based on portfolio risk", "Minimum Coverage": "Check current minimums", "Claims Processing": "Automated via on-chain data", "Coverage Cap": "Subject to pool capacity" },
  ["On-chain position monitoring and coverage tracking", "Automated claims verification", "Smart contract audits", "Transparent risk assessment methodology", "Decentralized governance"],
  ["Portfolio-level DeFi coverage", "Automated claims processing", "Dynamic position monitoring", "Multi-protocol single policy", "On-chain policy management", "Risk-adjusted pricing"],
  [
    { q: "How does Solace portfolio coverage work?", a: "Solace monitors your wallet positions across supported DeFi protocols and provides blanket coverage. A single policy covers all eligible positions automatically." },
    { q: "How are claims processed?", a: "Solace uses on-chain data to verify covered events and automate claims assessment, reducing processing time compared to manual review processes." },
  ],
  [{ name: "InsurAce", slug: "insurace" }, { name: "Unslashed", slug: "unslashed" }],
  [{ title: "Crypto Insurance Complete Guide", href: "/insurance/learn/crypto-insurance-complete-guide" }, { title: "Risk Assessment in DeFi", href: "/insurance/learn/risk-assessment-defi" }]
));

w(`${BASE}/insurance/reviews/sherlock/page.tsx`, review(
  "sherlock", "SherlockReview", "Sherlock", "Crypto Insurance", "insurance", 4.0,
  "Sherlock combines smart contract auditing with exploit coverage, where audit quality directly backs insurance. Protocols audited by Sherlock receive coverage backed by the staking pool.",
  ["Unique audit-backed coverage model", "Strong auditor network with competitive marketplace", "Coverage backed by community staking pool", "Focus on smart contract exploit coverage", "Transparent published audit reports"],
  ["Coverage limited to Sherlock-audited protocols", "Staking carries risk of loss from claims", "Smaller coverage capacity than larger competitors", "Complex governance for claims disputes"],
  "DeFi protocols seeking combined audit and coverage services",
  `Sherlock represents a novel approach to DeFi insurance by directly linking smart contract security audits with exploit coverage. The protocol operates an audit marketplace where security researchers compete to find vulnerabilities. Protocols that pass Sherlock's audit receive exploit coverage backed by the staking pool.

This model aligns incentives uniquely. Auditors have skin in the game because the staking pool that backs coverage also compensates them. If an audited protocol is exploited due to a missed vulnerability, the staking pool pays the claim.

Sherlock's staking mechanism allows anyone to provide capital to the coverage pool, earning yield from audit fees and premiums in exchange for accepting claims risk.`,
  [
    { id: "audit-marketplace", title: "Audit Marketplace", content: "Sherlock operates a competitive audit marketplace where security researchers compete to find vulnerabilities. Audits are structured as contests where multiple auditors independently review the same codebase. The contest model attracts top security talent by offering competitive rewards for significant findings. Reports are published publicly for transparency." },
    { id: "coverage-model", title: "Audit-Backed Coverage", content: "Protocols completing a Sherlock audit receive smart contract exploit coverage as part of the package. If an exploit occurs due to a vulnerability present during the audit, the staking pool pays claims. This direct connection between audit quality and financial outcomes creates stronger accountability." },
    { id: "staking-mechanics", title: "Staking and Capital Provision", content: "Sherlock's staking pool accepts deposits from anyone willing to provide capital backing for coverage. Stakers earn yield from audit fees, premiums, and DeFi strategies. In exchange, stakers accept the risk that capital may be used to pay claims. Lock-up periods apply to ensure capital stability." },
  ],
  { "Audit Cost": "Variable based on codebase complexity", "Coverage Premium": "Included with audit", "Staking Yield": "Variable APY", "Claims": "Paid from staking pool" },
  ["Competitive multi-auditor review", "Published audit reports", "Economic alignment between audit quality and coverage", "Staking pool capital monitoring", "Escalation committee for complex claims"],
  ["Combined audit and coverage platform", "Competitive audit marketplace", "Staking yield for capital providers", "Transparent audit publications", "Direct incentive alignment", "Protocol-specific coverage terms"],
  [
    { q: "How does Sherlock combine auditing and insurance?", a: "Protocols audited by Sherlock receive exploit coverage backed by the staking pool. If exploited due to a missed vulnerability, the pool pays claims, creating financial accountability for audit quality." },
    { q: "Can anyone stake on Sherlock?", a: "Yes. Anyone can provide capital to the staking pool, earning yield from fees and premiums while accepting the risk of claims payouts." },
  ],
  [{ name: "InsurAce", slug: "insurace" }, { name: "Neptune Mutual", slug: "neptune-mutual" }],
  [{ title: "Smart Contract Cover Explained", href: "/insurance/learn/smart-contract-cover-explained" }, { title: "Risk Assessment in DeFi", href: "/insurance/learn/risk-assessment-defi" }]
));

console.log("Insurance reviews done");

// INSURANCE BEST-OF (3 new)
const insBestPages = [
  { slug: "exchange-coverage", func: "BestExchangeCoveragePage", title: "Best Crypto Exchange Insurance Coverage", intro: "Protecting your assets held on cryptocurrency exchanges requires understanding available insurance options, from FDIC-like protections to decentralized coverage protocols. Compare the best exchange insurance options to safeguard crypto holdings." },
  { slug: "yield-farming", func: "BestYieldFarmingInsurancePage", title: "Best Insurance for Yield Farming", intro: "Yield farming involves significant smart contract risk that can be mitigated through DeFi insurance protocols. Protecting farming positions against exploits, oracle failures, and protocol insolvency helps preserve capital while pursuing yield." },
  { slug: "cross-chain", func: "BestCrossChainInsurancePage", title: "Best Cross-Chain Insurance Protocols", intro: "Cross-chain bridges and multi-chain DeFi positions create unique risks requiring specialized insurance. Bridge hacks have resulted in billions in losses, making cross-chain insurance increasingly important." },
];

const insDefaultRelated = [
  { title: "Crypto Insurance Complete Guide", href: "/insurance/learn/crypto-insurance-complete-guide", cat: "Crypto Insurance" },
  { title: "Best DeFi Protocol Insurance", href: "/insurance/best/defi-protocols", cat: "Crypto Insurance" },
  { title: "InsurAce Review", href: "/insurance/reviews/insurace", cat: "Crypto Insurance" },
];

batchLearn(insBestPages, "Crypto Insurance", "insurance", insDefaultRelated);
console.log("Insurance best pages done");

// INSURANCE LEARN (12 new)
const insLearnPages = [
  { slug: "crypto-insurance-complete-guide", func: "CryptoInsuranceCompleteGuidePage", title: "Crypto Insurance Complete Guide", intro: "Cryptocurrency insurance has evolved from a niche concept into an essential risk management tool for DeFi participants. This comprehensive guide covers every aspect of crypto insurance, from decentralized coverage protocols to traditional custodial insurance." },
  { slug: "smart-contract-cover-explained", func: "SmartContractCoverExplainedPage2", title: "Smart Contract Cover Explained", intro: "Smart contract cover protects against losses from bugs, exploits, and vulnerabilities in decentralized protocol code. Understanding how smart contract cover works, what it covers, and its limitations is essential for anyone with DeFi exposure." },
  { slug: "defi-insurance-claims-process", func: "DefiInsuranceClaimsProcessPage", title: "DeFi Insurance Claims Process Guide", intro: "Filing a DeFi insurance claim involves a process fundamentally different from traditional insurance. From incident verification to governance voting and payout distribution, understanding the claims process ensures effective navigation when coverage is needed." },
  { slug: "insurance-pricing-models", func: "InsurancePricingModelsPage", title: "Crypto Insurance Pricing Models", intro: "Understanding how DeFi insurance premiums are calculated helps evaluate whether coverage is fairly priced and compare offerings across providers. Pricing models incorporate risk assessment, capital costs, and market dynamics." },
  { slug: "mutual-vs-traditional-insurance", func: "MutualVsTraditionalInsurancePage", title: "Mutual vs Traditional Crypto Insurance", intro: "The crypto insurance landscape includes both mutual models where members share risk collectively and traditional models backed by company reserves. Each approach has distinct advantages for cost, coverage, claims, and governance." },
  { slug: "parametric-insurance-crypto", func: "ParametricInsuranceCryptoPage", title: "Parametric Insurance in Crypto", intro: "Parametric insurance pays claims based on predefined trigger events rather than assessed losses, enabling faster and more predictable payouts. In crypto, triggers can include exchange downtime, oracle deviations, and congestion events." },
  { slug: "stablecoin-depeg-insurance", func: "StablecoinDepegInsurancePage2", title: "Stablecoin Depeg Insurance Guide", intro: "Stablecoin depeg events represent one of the most significant risks in DeFi. Insurance against depegging protects holders and DeFi participants from catastrophic value loss in assets presumed to be stable." },
  { slug: "bridge-hack-insurance", func: "BridgeHackInsurancePage2", title: "Bridge Hack Insurance Guide", intro: "Cross-chain bridge exploits have resulted in some of the largest losses in DeFi history. Insurance covering bridge risks addresses unique vulnerabilities including smart contract exploits, validator compromise, and message-passing failures." },
  { slug: "insurance-pool-mechanics", func: "InsurancePoolMechanicsPage", title: "Insurance Pool Mechanics Explained", intro: "DeFi insurance pools are the capital reserves backing coverage policies. Understanding how pools work, how capital is managed, and how claims affect solvency helps both coverage buyers and capital providers make informed decisions." },
  { slug: "risk-assessment-defi", func: "RiskAssessmentDefiPage", title: "Risk Assessment in DeFi", intro: "Assessing risk in decentralized finance requires evaluating smart contract security, protocol design, governance mechanisms, and economic incentives. This guide provides a framework for evaluating DeFi protocol risk." },
  { slug: "insurance-dao-governance", func: "InsuranceDaoGovernancePage", title: "Insurance DAO Governance", intro: "Decentralized insurance protocols are governed by their communities through DAO mechanisms. Understanding governance for claims assessment, risk parameter setting, and protocol upgrades is essential for participants." },
  { slug: "crypto-insurance-vs-traditional", func: "CryptoInsuranceVsTraditionalPage", title: "Crypto Insurance vs Traditional Insurance", intro: "Comparing decentralized crypto insurance protocols with traditional insurance products reveals fundamental differences in risk assessment, pooling, and compensation. Understanding these differences helps choose the right protection approach." },
];

batchLearn(insLearnPages, "Crypto Insurance", "insurance", insDefaultRelated);
console.log("Insurance learn pages done");

// =============================================
// WEB3-BUSINESS REVIEWS (7 new)
// =============================================

const web3Reviews = [
  { slug: "stripe-crypto", func: "StripeCryptoReview", name: "Stripe Crypto", rating: 4.2, desc: "Stripe Crypto enables businesses to accept cryptocurrency payments through Stripe's established payment infrastructure, combining reliability with crypto capabilities.", bestFor: "Businesses wanting crypto payments through existing Stripe integration" },
  { slug: "bitpay-business", func: "BitPayBusinessReview", name: "BitPay Business", rating: 4.1, desc: "BitPay Business provides enterprise-grade crypto payment processing with fiat settlement, invoicing, and compliance tools for businesses accepting cryptocurrency.", bestFor: "Businesses seeking proven crypto payment processing with fiat settlement" },
  { slug: "coinbase-commerce", func: "CoinbaseCommerceReview", name: "Coinbase Commerce", rating: 4.0, desc: "Coinbase Commerce allows businesses to accept crypto payments directly with no processing fees, leveraging Coinbase infrastructure for secure merchant payments.", bestFor: "Businesses wanting fee-free crypto payment acceptance" },
  { slug: "superfluid", func: "SuperfluidReview", name: "Superfluid", rating: 4.3, desc: "Superfluid is a token streaming protocol enabling real-time continuous payment flows for subscriptions, salaries, and any recurring payment use case on EVM chains.", bestFor: "Web3 organizations needing real-time payment streaming" },
  { slug: "sablier", func: "SablierReview", name: "Sablier", rating: 4.0, desc: "Sablier is a token streaming and vesting protocol enabling linear and dynamic token distribution schedules for team vesting, contributor payments, and distributions.", bestFor: "Projects needing token vesting and streaming payment infrastructure" },
  { slug: "utrust", func: "UtrustReview", name: "UTrust", rating: 3.8, desc: "UTrust provides crypto payment processing for merchants with buyer protection, instant fiat settlement, and integration with major e-commerce platforms.", bestFor: "E-commerce businesses wanting crypto payments with buyer protection" },
  { slug: "ramp-network", func: "RampNetworkReview", name: "Ramp Network", rating: 4.1, desc: "Ramp Network provides fiat-to-crypto on-ramp and off-ramp infrastructure that businesses can embed in their apps for seamless user crypto purchases.", bestFor: "Web3 apps needing embedded fiat on-ramp and off-ramp" },
];

web3Reviews.forEach(p => {
  w(`${BASE}/web3-business/reviews/${p.slug}/page.tsx`, review(
    p.slug, p.func, p.name, "Web3 Business", "web3-business", p.rating, p.desc,
    ["Established platform with proven infrastructure", "Competitive fee structure", "Integration with popular business tools", "Strong security and compliance framework", "Developer-friendly API and documentation"],
    ["Requires technical integration for custom setups", "Limited cryptocurrency support compared to some alternatives", "Geographic restrictions may apply", "Customer support response times can vary"],
    p.bestFor,
    `${p.name} serves the growing demand for Web3 business infrastructure by providing reliable, compliant tools for cryptocurrency operations. The platform has built a reputation for stability and ease of integration, making it accessible to businesses at various stages of crypto adoption.

The platform balances innovation with practicality, offering features that solve real business problems while maintaining regulatory compliance. This balance has attracted a diverse user base from small shops to enterprise organizations.

Integration is straightforward with well-documented APIs, SDKs for popular languages, and pre-built plugins for major platforms. The onboarding process guides businesses through setup, compliance, and best practices.`,
    [
      { id: "core-features", title: "Core Features", content: "The platform offers a comprehensive suite for business crypto operations including payment processing with conversion and settlement, integration tools with APIs and plugins, compliance features for regulatory requirements, and a dashboard providing real-time transaction visibility and business metrics." },
      { id: "integration", title: "Integration and Setup", content: "Setting up involves creating a business account, completing verification, configuring payment preferences, and integrating with existing systems. API documentation covers all endpoints with code examples. Pre-built plugins for Shopify, WooCommerce, and other platforms enable integration without custom development." },
      { id: "pricing-settlement", title: "Pricing and Settlement", content: "The transparent fee structure is competitive with traditional payment processing. Transaction fees, settlement schedules, and charges are documented before signup. Most plans offer daily or weekly settlement to your business bank account in fiat currency." },
    ],
    { "Transaction Fee": "Competitive rates (check current pricing)", "Setup Fee": "Free for standard plans", "Monthly Fee": "Varies by plan", "Settlement": "Daily or weekly" },
    ["Regulatory compliance", "Encrypted data handling", "Two-factor authentication", "Regular security audits", "PCI DSS compliance"],
    ["Business crypto payment processing", "Fiat settlement", "API and SDK tools", "E-commerce plugins", "Transaction monitoring", "Compliance tools"],
    [
      { q: `How quickly can I set up ${p.name}?`, a: "Most businesses complete setup within a few days including account creation, verification, and integration." },
      { q: "What cryptocurrencies are supported?", a: "Major cryptocurrencies including Bitcoin, Ethereum, and popular stablecoins. Check documentation for the full list." },
    ],
    [{ name: "Request Network", slug: "request-network" }],
    [{ title: "Crypto Business Guide", href: "/web3-business/learn/crypto-business-guide" }, { title: "Web3 Legal Considerations", href: "/web3-business/learn/web3-legal-considerations" }]
  ));
});

console.log("Web3 reviews done");

// WEB3-BUSINESS BEST-OF (7 new)
const web3BestPages = [
  { slug: "crypto-payroll", func: "BestCryptoPayrollPage", title: "Best Crypto Payroll Solutions", intro: "Crypto payroll platforms enable businesses to pay employees and contractors in cryptocurrency efficiently and compliantly, handling conversion, distribution, tax withholding, and reporting across jurisdictions." },
  { slug: "invoicing", func: "BestCryptoInvoicingPage", title: "Best Crypto Invoicing Tools", intro: "Crypto invoicing tools enable businesses and freelancers to create, send, and track invoices with cryptocurrency payment options, streamlining billing for Web3 businesses." },
  { slug: "treasury-management", func: "BestTreasuryManagementPage", title: "Best Crypto Treasury Management Tools", intro: "Crypto treasury management tools help organizations manage digital asset holdings with multi-sig wallets, spending controls, yield strategies, and reporting for DAOs and crypto-native businesses." },
  { slug: "accounting-tools", func: "BestCryptoAccountingToolsPage", title: "Best Crypto Accounting Tools", intro: "Crypto accounting tools automate tracking, categorizing, and reporting cryptocurrency transactions for business financial statements and tax compliance across wallets and protocols." },
  { slug: "smart-contract-platforms", func: "BestSmartContractPlatformsPage", title: "Best Smart Contract Development Platforms", intro: "Smart contract development platforms provide tools, frameworks, and infrastructure for building and deploying decentralized applications, from development environments to deployment pipelines." },
  { slug: "token-launch-platforms", func: "BestTokenLaunchPlatformsPage", title: "Best Token Launch Platforms", intro: "Token launch platforms provide infrastructure for creating, distributing, and listing new cryptocurrency tokens through launchpads, IDO platforms, and liquidity bootstrapping tools." },
  { slug: "dao-tooling", func: "BestDaoToolingPage", title: "Best DAO Tooling Platforms", intro: "DAO tooling platforms provide governance, treasury management, and operational infrastructure that decentralized autonomous organizations need, from voting systems to contributor management." },
];

const web3DefaultRelated = [
  { title: "Crypto Business Guide", href: "/web3-business/learn/crypto-business-guide", cat: "Web3 Business" },
  { title: "Web3 Legal Considerations", href: "/web3-business/learn/web3-legal-considerations", cat: "Web3 Business" },
  { title: "Best DAO Tooling", href: "/web3-business/best/dao-tooling", cat: "Web3 Business" },
];

batchLearn(web3BestPages, "Web3 Business", "web3-business", web3DefaultRelated);
console.log("Web3 best pages done");

// WEB3-BUSINESS LEARN (15 new)
const web3LearnPages = [
  { slug: "crypto-business-guide", func: "CryptoBusinessGuidePage", title: "Starting a Crypto Business: Complete Guide", intro: "Building a successful crypto business requires navigating regulatory compliance, volatile markets, technical infrastructure, and rapidly evolving technology. This guide covers essential steps from concept to scaling." },
  { slug: "web3-startup-funding", func: "Web3StartupFundingPage", title: "Web3 Startup Funding Guide", intro: "Funding a Web3 startup involves unique mechanisms beyond traditional venture capital, including token sales, grants, community funding, and decentralized fundraising approaches." },
  { slug: "token-sale-guide", func: "TokenSaleGuidePage", title: "Token Sale Guide", intro: "Launching a token sale is one of the most significant events for a crypto project. This guide covers tokenomics design, legal structuring, marketing, and distribution mechanics." },
  { slug: "ico-vs-ido-vs-ieo", func: "IcoVsIdoVsIeoPage", title: "ICO vs IDO vs IEO: Token Launch Methods Compared", intro: "Initial Coin Offerings, Initial DEX Offerings, and Initial Exchange Offerings represent three primary token launch methods with distinct advantages, requirements, and risk profiles." },
  { slug: "dao-treasury-management", func: "DaoTreasuryManagementPage2", title: "DAO Treasury Management Guide", intro: "Managing a DAO treasury requires balancing operational funding, risk management, yield generation, and community governance. Effective management is critical for long-term sustainability." },
  { slug: "web3-marketing-guide", func: "Web3MarketingGuidePage", title: "Web3 Marketing Guide", intro: "Marketing Web3 products requires strategies distinct from traditional digital marketing, including community building, token incentives, decentralized social media, and crypto-native distribution." },
  { slug: "blockchain-development-guide", func: "BlockchainDevelopmentGuidePage", title: "Blockchain Development Guide", intro: "Blockchain development encompasses smart contract programming, decentralized application architecture, and protocol engineering. This guide covers technologies, tools, and best practices." },
  { slug: "smart-contract-audit-business", func: "SmartContractAuditBusinessPage", title: "Smart Contract Auditing for Business", intro: "Smart contract audits are essential for any business deploying code handling user funds. Understanding the audit process, selecting auditors, and interpreting results ensures security before launch." },
  { slug: "web3-legal-considerations", func: "Web3LegalConsiderationsPage", title: "Web3 Legal Considerations", intro: "Legal considerations for Web3 businesses span securities regulation, data privacy, intellectual property, and cross-jurisdictional compliance. Navigating this landscape requires regulatory understanding." },
  { slug: "crypto-compliance-guide", func: "CryptoComplianceGuidePage", title: "Crypto Compliance Guide", intro: "Regulatory compliance is increasingly important as governments implement cryptocurrency regulations. This guide covers KYC/AML requirements, securities compliance, tax obligations, and jurisdiction rules." },
  { slug: "web3-hiring-guide", func: "Web3HiringGuidePage2", title: "Web3 Hiring Guide", intro: "Hiring for Web3 roles presents unique challenges including competitive talent markets, remote-first culture, crypto compensation expectations, and specialized technical requirements." },
  { slug: "crypto-accounting-guide", func: "CryptoAccountingGuidePage", title: "Crypto Accounting Guide", intro: "Cryptocurrency accounting requires tracking complex transactions across wallets, exchanges, DeFi protocols, and blockchains. Understanding crypto-specific challenges ensures accurate financial reporting." },
  { slug: "defi-business-models", func: "DefiBusinessModelsPage", title: "DeFi Business Models Explained", intro: "Decentralized finance has created novel business models generating revenue through protocol fees, token appreciation, MEV capture, and liquidity provision across the DeFi ecosystem." },
  { slug: "nft-business-applications", func: "NftBusinessApplicationsPage", title: "NFT Business Applications", intro: "NFTs offer businesses tools for customer loyalty, digital authentication, ticketing, supply chain tracking, and IP management beyond digital art, creating real value across industries." },
  { slug: "web3-customer-acquisition", func: "Web3CustomerAcquisitionPage", title: "Web3 Customer Acquisition Strategies", intro: "Acquiring users for Web3 products requires blending traditional growth marketing with crypto-native mechanics like airdrops, token incentives, and community-driven referrals." },
];

batchLearn(web3LearnPages, "Web3 Business", "web3-business", web3DefaultRelated);
console.log("Web3 learn pages done");

// =============================================
// LONG-TERM BEST-OF (4 new)
// =============================================

const ltBestPages = [
  { slug: "inflation-hedge", func: "BestInflationHedgePage", title: "Best Crypto Inflation Hedges", intro: "Cryptocurrency, particularly Bitcoin, is increasingly considered as a hedge against monetary inflation. This guide examines which digital assets have the strongest inflation-hedging properties." },
  { slug: "crypto-savings-accounts", func: "BestCryptoSavingsAccountsPage2", title: "Best Crypto Savings Accounts", intro: "Crypto savings accounts offer yield on digital asset holdings, functioning similarly to traditional savings accounts but with higher rates and different risk profiles for passive income." },
  { slug: "crypto-401k", func: "BestCrypto401kPage", title: "Best Crypto 401(k) Options", intro: "Crypto 401(k) plans allow employees to include Bitcoin and digital assets in employer-sponsored retirement accounts. Understanding available plans, fees, and choices is essential for retirement planning." },
  { slug: "estate-planning", func: "BestCryptoEstatePlanningPage", title: "Best Crypto Estate Planning Solutions", intro: "Crypto estate planning ensures digital assets transfer properly to heirs. Unlike institutional assets, self-custodied crypto requires specific planning to prevent permanent loss of access." },
];

const ltDefaultRelated = [
  { title: "Crypto Retirement Complete Guide", href: "/long-term/learn/crypto-retirement-complete-guide", cat: "Long-Term Strategies" },
  { title: "Best HODL Coins", href: "/long-term/best/hodl-coins", cat: "Long-Term Strategies" },
  { title: "Best Blue Chip Crypto", href: "/long-term/best/blue-chip-crypto", cat: "Long-Term Strategies" },
];

batchLearn(ltBestPages, "Long-Term Strategies", "long-term", ltDefaultRelated);
console.log("Long-term best pages done");

// LONG-TERM LEARN (20 new)
const ltLearnPages = [
  { slug: "crypto-retirement-complete-guide", func: "CryptoRetirementCompleteGuidePage", title: "Crypto Retirement Planning: Complete Guide", intro: "Including cryptocurrency in retirement planning requires understanding the unique opportunities and risks of digital assets for long-term wealth building, covering crypto IRAs, 401(k) options, and tax-efficient approaches." },
  { slug: "bitcoin-store-of-value", func: "BitcoinStoreOfValuePage", title: "Bitcoin as a Store of Value", intro: "Bitcoin's store of value narrative has become its dominant investment thesis, comparing the digital asset to gold as a hedge against monetary debasement and long-term wealth preservation." },
  { slug: "crypto-vs-gold-investment", func: "CryptoVsGoldInvestmentPage", title: "Crypto vs Gold: Investment Comparison", intro: "The comparison between cryptocurrency and gold as long-term stores of value and inflation hedges is one of investing's most debated topics, with different risk profiles and practical considerations." },
  { slug: "crypto-inheritance-guide", func: "CryptoInheritanceGuidePage", title: "Crypto Inheritance Guide", intro: "Ensuring cryptocurrency passes to heirs requires specific planning that traditional estate frameworks do not cover. Self-custodied crypto can be permanently lost without proper inheritance procedures." },
  { slug: "crypto-estate-planning", func: "CryptoEstatePlanningPage2", title: "Crypto Estate Planning Strategies", intro: "Estate planning for cryptocurrency involves unique challenges including private key management, multi-signature arrangements, dead man switches, and trust structures designed for digital assets." },
  { slug: "generational-wealth-crypto", func: "GenerationalWealthCryptoPage2", title: "Building Generational Wealth with Crypto", intro: "Cryptocurrency offers unique opportunities for building generational wealth through early adoption, compounding returns from staking and DeFi, and the portability of digital assets across borders." },
  { slug: "crypto-trust-setup", func: "CryptoTrustSetupPage", title: "Setting Up a Crypto Trust", intro: "Cryptocurrency trusts provide a legal framework for managing digital assets across generations, offering tax benefits, asset protection, and controlled distribution to beneficiaries." },
  { slug: "bitcoin-supercycle-theory", func: "BitcoinSupercycleTheoryPage", title: "Bitcoin Supercycle Theory Explained", intro: "The Bitcoin supercycle theory proposes that institutional adoption, sovereign interest, and monetary trends could drive a prolonged bull market breaking from the historical four-year cycle pattern." },
  { slug: "crypto-adoption-curves", func: "CryptoAdoptionCurvesPage", title: "Crypto Adoption Curves Analysis", intro: "Analyzing cryptocurrency adoption through technology adoption curves helps estimate where we are in the lifecycle and what growth potential remains, compared to internet and mobile adoption." },
  { slug: "institutional-crypto-adoption", func: "InstitutionalCryptoAdoptionPage", title: "Institutional Crypto Adoption Trends", intro: "Institutional adoption by hedge funds, pension funds, endowments, and corporations is reshaping the market. Understanding trends, motivations, and strategies provides insight into crypto's long-term trajectory." },
  { slug: "sovereign-wealth-funds-crypto", func: "SovereignWealthFundsCryptoPage", title: "Sovereign Wealth Funds and Crypto", intro: "Sovereign wealth funds managing trillions are beginning to explore cryptocurrency allocations, representing a significant milestone for legitimacy with implications for long-term price dynamics." },
  { slug: "pension-fund-crypto-allocation", func: "PensionFundCryptoAllocationPage", title: "Pension Fund Crypto Allocation", intro: "Pension funds are cautiously exploring cryptocurrency as a portfolio diversifier. Understanding how they evaluate and implement crypto allocations provides insight into institutional investment trends." },
  { slug: "endowment-crypto-strategy", func: "EndowmentCryptoStrategyPage", title: "Endowment Crypto Investment Strategy", intro: "University endowments and foundations were among the first institutional crypto investors. Their long horizons and diversification mandates make crypto a natural fit with lessons for individual investors." },
  { slug: "crypto-correlation-analysis", func: "CryptoCorrelationAnalysisPage", title: "Crypto Correlation Analysis", intro: "Understanding how cryptocurrency correlates with stocks, bonds, gold, and real estate is essential for portfolio construction and determining diversification benefits across market environments." },
  { slug: "portfolio-rebalancing-guide", func: "PortfolioRebalancingGuidePage", title: "Crypto Portfolio Rebalancing Guide", intro: "Regular portfolio rebalancing maintains target allocation as crypto prices fluctuate, systematically selling high and buying low with strategies, frequencies, and tax-efficient approaches." },
  { slug: "crypto-bear-market-investing", func: "CryptoBearMarketInvestingPage", title: "Crypto Bear Market Investing Strategies", intro: "Bear markets present both challenges and opportunities. Dollar-cost averaging, strategic accumulation, and portfolio optimization during downturns can significantly improve long-term returns." },
  { slug: "time-in-market-vs-timing", func: "TimeInMarketVsTimingPage", title: "Time in Market vs Timing the Market: Crypto Edition", intro: "The time-in-market versus timing debate takes unique dimensions in crypto where volatility is extreme and cycle patterns are more pronounced than traditional markets." },
  { slug: "conviction-investing-crypto", func: "ConvictionInvestingCryptoPage", title: "Conviction Investing in Crypto", intro: "Conviction investing involves concentrated bets on high-confidence positions and holding through volatility, requiring deep fundamental analysis and discipline during dramatic market swings." },
  { slug: "crypto-network-effects", func: "CryptoNetworkEffectsPage", title: "Understanding Crypto Network Effects", intro: "Network effects are among the most powerful value drivers in cryptocurrency, where each new user or developer increases network value. Understanding them helps identify protocols with the strongest moats." },
  { slug: "metcalfes-law-crypto", func: "MetcalfesLawCryptoPage", title: "Metcalfe's Law Applied to Crypto", intro: "Metcalfe's Law states a network's value is proportional to the square of its users. Applied to crypto valuation, this framework offers insights for long-term investment decisions." },
];

batchLearn(ltLearnPages, "Long-Term Strategies", "long-term", ltDefaultRelated);
console.log("Long-term learn pages done");

console.log("\n=== ALL PAGES GENERATED ===");
