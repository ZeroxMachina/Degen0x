import { Metadata } from "next";
import ReviewPage from "@/components/ReviewPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Tender.fi Review ${CURRENT_YEAR}: Arbitrum Lending Protocol`,
  description: "Complete Tender.fi review covering lending on Arbitrum, oracle-based pricing, yield rates, and the protocol's position in the Arbitrum DeFi ecosystem.",
};

export default function TenderReview() {
  return (
    <ReviewPage
      product={{ name: "Tender.fi", slug: "tender", rating: 3.4, description: "Tender.fi is a lending and borrowing protocol on Arbitrum offering Compound-style markets with GMX-integrated pricing oracles and support for Arbitrum DeFi ecosystem tokens.", pros: ["Arbitrum-native lending protocol with ecosystem focus", "GMX oracle integration for price feeds", "Supports GLP and other Arbitrum DeFi tokens as collateral", "Low gas costs on Arbitrum network", "Niche asset support not found on larger protocols"], cons: ["Very small TVL and limited liquidity", "Protocol experienced a white-hat exploit incident", "Limited development activity recently", "Competing against Aave V3 on Arbitrum", "Token incentives have diminished significantly"], bestFor: "Arbitrum users seeking to borrow against GLP and niche DeFi tokens", affiliateUrl: "#", category: "defi-lending" }}
      categoryName="DeFi Lending" categorySlug="defi-lending"
      overview="Tender.fi is an Arbitrum-native lending protocol that differentiates by supporting Arbitrum ecosystem tokens like GLP as collateral and integrating with GMX's oracle infrastructure for price feeds. The protocol experienced a notable white-hat exploit incident where a researcher demonstrated a vulnerability by borrowing against inflated collateral, then returned the funds and was paid a bounty. This event highlighted both the protocol's vulnerabilities and the community's ability to resolve security issues constructively. Tender.fi serves a niche in the Arbitrum ecosystem by offering lending markets for assets that larger protocols may not support, though its TVL remains small."
      sections={[
        { id: "lending", title: "Lending Markets", content: "Tender.fi operates Compound-style lending markets on Arbitrum supporting ETH, USDC, USDT, ARB, GLP, and other Arbitrum DeFi tokens. The protocol's key differentiator is its support for GLP (GMX Liquidity Provider tokens) as collateral, allowing GLP holders to borrow against their yield-generating positions without exiting them. Interest rates follow standard utilization curves, though some markets have limited activity. The lending mechanics are familiar to anyone who has used Compound-style protocols, with supply, borrow, repay, and withdraw operations working as expected." },
        { id: "gmx-integration", title: "GMX Oracle Integration", content: "Tender.fi integrates with GMX's oracle infrastructure for pricing GLP and other GMX-related assets. This integration is important because GLP is a basket asset whose value depends on the composition of the GMX liquidity pool, making standard price feeds insufficient. The GMX oracle provides more accurate pricing for these assets, enabling safer collateral valuation. This integration also positions Tender.fi as a complementary protocol to GMX, serving GLP holders who want to leverage their positions through borrowing." },
        { id: "exploit-history", title: "White-Hat Exploit Incident", content: "In 2023, a security researcher exploited a vulnerability in Tender.fi by manipulating oracle prices to borrow approximately $1.6M against inflated collateral. The researcher then contacted the team and returned the funds in exchange for a bug bounty. This white-hat incident demonstrated both a real vulnerability in the protocol and the constructive resolution that is possible in the DeFi community. The team patched the vulnerability and continued operations, but the incident raised questions about the protocol's security review process." },
        { id: "current-state", title: "Current State & Risks", content: "Tender.fi continues to operate on Arbitrum but with limited TVL and reduced development activity. The protocol serves a niche for users wanting to borrow against GLP and other Arbitrum DeFi tokens, but the small scale creates risks including limited liquidator activity, low exit liquidity, and reduced economic incentive for ongoing security maintenance. Users should carefully consider position sizing relative to the protocol's TVL and evaluate whether the niche asset support justifies the additional risks of using a smaller protocol." },
      ]}
      fees={{ "Supply APY": "Variable (1-5%)", "Borrow APR": "Variable (3-15%)", "Liquidation Penalty": "5-10%", "Gas Costs": "Low on Arbitrum" }}
      security={["Post-exploit security patches applied", "GMX oracle integration for accurate pricing", "Standard liquidation mechanisms", "Compound-style architecture", "White-hat bounty program demonstrated"]}
      features={["GLP collateral support for borrowing", "GMX oracle price feed integration", "Compound-style lending mechanics", "Support for Arbitrum ecosystem tokens", "Low gas costs on Arbitrum", "Niche asset lending markets"]}
      faqs={[
        { question: "Is Tender.fi safe after the exploit?", answer: "The vulnerability was patched after the white-hat incident, but the event raised security concerns. The protocol has limited TVL and development activity, which adds risk. Exercise extra caution with position sizing." },
        { question: "Can I borrow against GLP on Tender.fi?", answer: "Yes, Tender.fi supports GLP as collateral, allowing you to borrow while maintaining your GLP yield-generating position. This is one of the protocol's key differentiating features." },
        { question: "Why is TVL so low on Tender.fi?", answer: "The exploit incident, competition from Aave V3 on Arbitrum, and reduced token incentives have all contributed to lower TVL. Users have migrated to larger protocols for better liquidity and security assurance." },
      ]}
      relatedReviews={[{ name: "Lodestar", slug: "lodestar" }, { name: "Sonne", slug: "sonne" }, { name: "Granary", slug: "granary" }]}
      relatedGuides={[{ title: "DeFi on Arbitrum", href: "/defi-lending/learn/defi-on-arbitrum" }, { title: "Yield Risk Assessment", href: "/defi-lending/learn/yield-risk-assessment" }]}
    />
  );
}
