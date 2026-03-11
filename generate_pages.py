#!/usr/bin/env python3
"""Generate all remaining pages for CryptoDegen site."""
import os

BASE = "/Users/0xmachina/cryptodegen/src/app"
count = 0

def w(path, content):
    global count
    fp = os.path.join(BASE, path, "page.tsx")
    if os.path.exists(fp):
        return
    os.makedirs(os.path.join(BASE, path), exist_ok=True)
    with open(fp, 'w') as f:
        f.write(content)
    count += 1

def learn(path, fn, title, cn, cs, rt, intro, toc, faqs, rel, body):
    t = "\n".join([f'        {{ id: "{a}", title: "{b}", level: {c} }},' for a,b,c in toc])
    fq = "\n".join([f'        {{ question: "{q}", answer: "{a}" }},' for q,a in faqs])
    r = "\n".join([f'        {{ title: "{a}", href: "{b}", category: "{c}" }},' for a,b,c in rel])
    return f'''import type {{ Metadata }} from "next";
import LearnPageLayout from "@/components/LearnPage";
import {{ SITE_NAME, CURRENT_YEAR }} from "@/lib/constants";

export const metadata: Metadata = {{
  title: `{title} (${{CURRENT_YEAR}}) | ${{SITE_NAME}}`,
  description: "{intro[:150]}...",
  keywords: ["{cs}", "{title.lower().split()[0]}"],
}};

export default function {fn}() {{
  return (
    <LearnPageLayout
      title="{title}"
      categoryName="{cn}"
      categorySlug="{cs}"
      readTime="{rt}"
      intro="{intro}"
      toc={{[
{t}
      ]}}
      faqs={{[
{fq}
      ]}}
      relatedArticles={{[
{r}
      ]}}
    >
{body}
    </LearnPageLayout>
  );
}}
'''

def review(path, fn, name, slug, rating, desc, pros, cons, bf, cs, cn, mt, md, ov, secs, fees, sec, feat, faqs, rr, rg):
    ps = ", ".join([f'"{p}"' for p in pros])
    co = ", ".join([f'"{c}"' for c in cons])
    ss = "\n".join([f'        {{ id: "{a}", title: "{b}", content: "{c}" }},' for a,b,c in secs])
    fs = ", ".join([f'"{k}": "{v}"' for k,v in fees.items()])
    sc = ", ".join([f'"{s}"' for s in sec])
    ft = ", ".join([f'"{f}"' for f in feat])
    fq = "\n".join([f'        {{ question: "{q}", answer: "{a}" }},' for q,a in faqs])
    rrs = ", ".join([f'{{ name: "{n}", slug: "{s}" }}' for n,s in rr])
    rgs = ", ".join([f'{{ title: "{t}", href: "{h}" }}' for t,h in rg])
    return f'''import {{ Metadata }} from "next";
import ReviewPage from "@/components/ReviewPage";
import {{ CURRENT_YEAR }} from "@/lib/constants";

export const metadata: Metadata = {{
  title: `{mt} (${{CURRENT_YEAR}}) | CryptoDegen`,
  description: "{md}",
}};

export default function {fn}() {{
  return (
    <ReviewPage
      product={{{{
        name: "{name}",
        slug: "{slug}",
        rating: {rating},
        description: "{desc}",
        pros: [{ps}],
        cons: [{co}],
        bestFor: "{bf}",
        affiliateUrl: "#",
        category: "{cs}",
      }}}}
      categoryName="{cn}"
      categorySlug="{cs}"
      overview="{ov}"
      sections={{[
{ss}
      ]}}
      fees={{{{ {fs} }}}}
      security={{[{sc}]}}
      features={{[{ft}]}}
      faqs={{[
{fq}
      ]}}
      relatedReviews={{[{rrs}]}}
      relatedGuides={{[{rgs}]}}
    />
  );
}}
'''

def compare(path, fn, title, cs, cn, md, intro, sa, items, fl, analysis, faqs):
    its = ""
    for i in items:
        fts = ", ".join([f'"{k}": "{v}"' for k,v in i["f"].items()])
        its += f'\n  {{ name: "{i["n"]}", slug: "{i["s"]}", rating: {i["r"]}, affiliateUrl: "#", features: {{ {fts} }} }},'
    fa = ", ".join([f'"{f}"' for f in fl])
    ah = ""
    for h,t in analysis:
        ah += f'\n        <h3 className="text-xl font-bold text-white mt-6 mb-3">{h}</h3>\n        <p className="text-[var(--color-text-secondary)]">{t}</p>'
    fq = "\n".join([f'  {{ question: "{q}", answer: "{a}" }},' for q,a in faqs])
    return f'''import {{ Metadata }} from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ComparisonTable from "@/components/ComparisonTable";
import FAQSection from "@/components/FAQSection";
import {{ CURRENT_YEAR, CURRENT_MONTH }} from "@/lib/constants";
import {{ ComparisonItem, FAQ }} from "@/lib/types";

export const metadata: Metadata = {{
  title: `{title} ${{CURRENT_YEAR}}: Full Comparison`,
  description: "{md}",
}};

const items: ComparisonItem[] = [{its}
];

const features = [{fa}];

const faqs: FAQ[] = [
{fq}
];

export default function {fn}() {{
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Breadcrumb items={{[{{ label: "Home", href: "/" }}, {{ label: "{cn}", href: "/{cs}" }}, {{ label: "{title}", href: "#" }}]}} />
      <h1 className="text-4xl font-bold text-white mb-4">{title} ({{CURRENT_YEAR}})</h1>
      <p className="text-sm text-[var(--color-text-secondary)] mb-8">Last updated: {{CURRENT_MONTH}} {{CURRENT_YEAR}}</p>
      <div className="prose prose-invert max-w-none mb-10">
        <p className="text-[var(--color-text-secondary)] leading-relaxed text-lg">{intro}</p>
        <p className="text-[var(--color-text-secondary)] leading-relaxed mt-4"><strong className="text-white">The short answer:</strong> {sa}</p>
      </div>
      <section className="mb-12">
        <ComparisonTable items={{items}} features={{features}} title="{title}" />
      </section>
      <section className="mb-12 prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-white mb-4">Detailed Analysis</h2>{ah}
      </section>
      <FAQSection faqs={{faqs}} />
    </div>
  );
}}
'''

# ============================================
# DEFI-LENDING LEARN (14 remaining)
# ============================================

defi_learn_data = [
  ("defi-lending/learn/liquidation-mechanics","LiquidationMechanicsPage","DeFi Liquidation Mechanics","DeFi Lending","defi-lending","10 min",
   "Liquidation keeps DeFi lending protocols solvent when borrower collateral values decline. This guide covers how liquidations work, triggers, penalties, and strategies to protect your positions from costly liquidation events.",
   [("how","How Liquidation Works",2),("triggers","Triggers",2),("penalties","Penalties",2),("avoidance","Avoidance Strategies",2)],
   [("What triggers liquidation?","When your health factor drops below 1.0, meaning collateral no longer sufficiently covers debt. Caused by collateral price drops or accumulated interest."),("How much do I lose?","Liquidation penalties range from 5-15% of liquidated collateral depending on protocol and asset.")],
   [("Collateralization Ratios","/defi-lending/learn/collateralization-ratios","DeFi Lending"),("How DeFi Lending Works","/defi-lending/learn/how-defi-lending-works","DeFi Lending")],
   '''      <section id="how"><h2>How Liquidation Works</h2><p>When a borrower's health factor drops below 1.0, external liquidators can repay a portion of debt and receive collateral at a discount. This permissionless process is incentivized by the liquidation bonus. Modern protocols use sophisticated mechanisms where liquidator bots compete to execute liquidations within the same block. The process protects lenders by ensuring sufficient collateral backing. Different protocols implement this differently: Aave allows partial liquidation up to 50%, Compound V3 uses absorption with dutch auctions, and MakerDAO uses full auctions.</p></section>
      <section id="triggers"><h2>Triggers</h2><p>The primary trigger is collateral value decline relative to borrowed value. If you deposit ETH and borrow USDC, an ETH price drop reduces your health factor. The liquidation threshold varies by asset, typically 5-10% above max LTV. Other triggers include accumulated interest increasing debt, oracle price updates reflecting large movements, and stablecoin depegs affecting either collateral or borrowed assets. During volatile markets, positions can go from healthy to liquidated within minutes.</p></section>
      <section id="penalties"><h2>Penalties</h2><p>Liquidation penalties range from 5% for stable assets to 10-15% for volatile ones on Aave. The liquidator repays debt at face value and receives collateral worth the repaid amount plus bonus. This creates profitable opportunities for liquidators while maintaining solvency. The penalty is borne by borrowers whose remaining collateral is reduced by the bonus amount. Understanding these penalties motivates maintaining conservative health factors.</p></section>
      <section id="avoidance"><h2>Avoidance Strategies</h2><p>Maintain health factors above 2.0 for volatile collateral. Set up monitoring alerts through DeBank or Zapper. Have readily available funds to add collateral or repay debt quickly. Consider stablecoin collateral to eliminate price volatility risk. Use efficiency mode for correlated asset pairs. Some advanced users implement automated health factor management through keeper networks that add collateral when thresholds are approached.</p></section>'''
  ),
  ("defi-lending/learn/flash-loans-guide","FlashLoansComprehensiveGuide","Flash Loans: Complete Guide","DeFi Lending","defi-lending","10 min",
   "Flash loans allow borrowing any amount of crypto with zero collateral within a single blockchain transaction. This guide covers mechanics, use cases, providers, risks, and practical applications of this uniquely DeFi financial primitive.",
   [("mechanics","How Flash Loans Work",2),("uses","Use Cases",2),("providers","Providers",2),("risks","Risks",2)],
   [("Do flash loans require collateral?","No. The loan must be repaid within the same transaction. If repayment fails, the entire transaction reverts as if nothing happened."),("What do flash loans cost?","Fees range from 0% (Balancer) to 0.09%. Aave charges 0.05%. Gas costs are additional.")],
   [("How DeFi Lending Works","/defi-lending/learn/how-defi-lending-works","DeFi Lending"),("DeFi Risks Guide","/defi-lending/learn/defi-risks-guide","DeFi Lending")],
   '''      <section id="mechanics"><h2>How Flash Loans Work</h2><p>Flash loans exploit blockchain transaction atomicity. Within one transaction you borrow tokens, execute operations, and repay plus fee. If any step fails, everything reverts. The protocol never risks capital because repayment is enforced within the same transaction. This requires a smart contract implementing the flash loan callback function. The technical barrier means flash loans are primarily used by developers, though no-code tools like Furucombo and DeFi Saver are making them more accessible to general users.</p></section>
      <section id="uses"><h2>Use Cases</h2><p>Arbitrage exploits price differences between exchanges. Liquidation uses borrowed funds to liquidate undercollateralized positions and earn bonuses. Collateral swaps change lending collateral without closing positions. Self-liquidation repays loans using own collateral without additional capital. Debt refinancing moves loans between protocols in one transaction. Each use case improves market efficiency and benefits the broader DeFi ecosystem by keeping prices aligned and protocols solvent.</p></section>
      <section id="providers"><h2>Providers</h2><p>Aave dominates with billions in available liquidity at 0.05% fee across multiple chains. Balancer offers zero-fee flash loans from its vault. Uniswap supports flash swaps. dYdX provides flash loans on its platform. MakerDAO allows flash minting of DAI. Each has different available assets, fees, and integration patterns. Choose based on needed assets and target chain.</p></section>
      <section id="risks"><h2>Risks</h2><p>Flash loans have been central to numerous DeFi exploits by amplifying existing vulnerabilities. Attack vectors include oracle manipulation, governance attacks, and economic exploits. Flash loans do not create vulnerabilities but amplify existing ones by giving anyone temporary massive capital access. Failed transactions still consume gas. Complex strategies can fail due to slippage or competing bots. Building reliable strategies requires thorough testing.</p></section>'''
  ),
  ("defi-lending/learn/yield-farming-strategies","YieldFarmingStrategiesGuide","DeFi Yield Farming Strategies","DeFi Lending","defi-lending","11 min",
   "Yield farming involves strategically deploying crypto across DeFi protocols to maximize returns. This guide covers strategies from simple lending to advanced leveraged positions, helping you find the right risk-return balance.",
   [("beginner","Beginner Strategies",2),("intermediate","Intermediate Strategies",2),("advanced","Advanced Strategies",2),("risk","Risk Management",2)],
   [("Is yield farming still profitable?","Yes, but the landscape has matured. Organic yields from genuine borrowing demand are more sustainable than token emissions. Rate optimizers help maintain competitive returns."),("Safest approach?","Lending stablecoins on Aave on Layer 2s. Avoids impermanent loss, proven protocols, consistent 3-8% APY.")],
   [("DeFi Interest Rates","/defi-lending/learn/defi-interest-rates-explained","DeFi Lending"),("Best High-Yield","/defi-lending/best/high-yield","DeFi Lending")],
   '''      <section id="beginner"><h2>Beginner Strategies</h2><p>Start with stablecoin lending on established protocols. Deposit USDC or DAI into Aave on Arbitrum or Base for 3-8% APY with minimal risk and low gas costs. Use the DAI Savings Rate through Spark for governance-set yields. Morpho can optimize rates by matching peer-to-peer, adding 1-3% with minimal extra risk. Focus on understanding mechanics before advancing to complex strategies.</p></section>
      <section id="intermediate"><h2>Intermediate Strategies</h2><p>Liquid staking plus lending stacks two yield sources: stake ETH for stETH (staking yield), then supply stETH to Aave (lending yield). Multi-chain optimization moves capital between chains for best rates. Stablecoin LP on Curve earns trading fees with minimal impermanent loss. These require more management but significantly boost returns while keeping risk manageable.</p></section>
      <section id="advanced"><h2>Advanced Strategies</h2><p>Recursive borrowing amplifies yield by repeatedly depositing and borrowing. Leveraged vaults on Notional offer up to 10x exposure with fixed-rate borrowing. Cross-protocol arbitrage captures rate differences. Delta-neutral strategies capture rate spreads without directional exposure. These offer higher returns but require deep knowledge, active management, and acceptance of significantly higher risks.</p></section>
      <section id="risk"><h2>Risk Management</h2><p>Diversify across protocols to limit smart contract risk. Never invest more than you can afford to lose. Monitor leveraged positions regularly. Understand what generates your yield and its sustainability. Factor in gas costs. Use portfolio tracking tools for clear risk visibility. Set exit criteria before entering each strategy.</p></section>'''
  ),
  ("defi-lending/learn/impermanent-loss-guide","ImpermanentLossComprehensiveGuide","Understanding Impermanent Loss","DeFi Lending","defi-lending","9 min",
   "Impermanent loss occurs when providing liquidity to AMM pools and the token price ratio changes. This guide explains the concept, calculation, when it becomes permanent, and mitigation strategies.",
   [("what","What Is Impermanent Loss",2),("calc","How to Calculate",2),("mitigate","Mitigation Strategies",2),("worth","When LP Is Worth It",2)],
   [("Can IL exceed fees?","Yes, during significant price movements. Choose high-volume pairs and monitor price divergence."),("Does IL affect lending?","Standard lending on Aave does not involve IL. Only AMM liquidity provision. Some strategies combine both.")],
   [("Yield Farming","/defi-lending/learn/yield-farming-strategies","DeFi Lending"),("DeFi Risks","/defi-lending/learn/defi-risks-guide","DeFi Lending")],
   '''      <section id="what"><h2>What Is Impermanent Loss</h2><p>Impermanent loss occurs when you provide liquidity to an AMM pool and the price ratio between tokens changes from deposit time. The AMM rebalances, selling appreciating tokens and buying depreciating ones. Compared to holding, your pool position is worth less. The loss is impermanent because if prices return to original ratio, it disappears. Withdrawn at different ratio, it becomes permanent. A 2x price change causes approximately 5.7% IL. A 5x change causes about 25.5% loss.</p></section>
      <section id="calc"><h2>How to Calculate</h2><p>For 50/50 pools: IL = 2 * sqrt(price_ratio) / (1 + price_ratio) - 1. Online calculators simplify this. Concentrated liquidity in Uniswap V3 amplifies both fees and IL. The key: IL depends on magnitude of price change, not direction. Always calculate whether expected trading fees will exceed potential IL before committing liquidity to any pool.</p></section>
      <section id="mitigate"><h2>Mitigation Strategies</h2><p>Provide liquidity to correlated pairs (USDC/USDT, ETH/stETH) where price divergence is minimal. Choose high-volume pools maximizing fee income. Use protocols designed for stable swaps like Curve. Consider single-sided provision where available. Monitor positions and exit when IL exceeds comfort levels. Some protocols offer IL protection programs.</p></section>
      <section id="worth"><h2>When LP Is Worth It</h2><p>LP is profitable when fee income exceeds IL over your holding period. Most likely with high-volume pairs, correlated assets, stable price ratios, and additional token incentives. Calculate break-even before entering: how much can prices move before IL exceeds fee income? Tools like APY.vision help track profitability in real-time.</p></section>'''
  ),
  ("defi-lending/learn/liquidity-mining-explained","LiquidityMiningExplainedGuide","Liquidity Mining Explained","DeFi Lending","defi-lending","8 min",
   "Liquidity mining distributes protocol governance tokens to users who participate in the platform. This guide explains mechanics, sustainability analysis, and how to evaluate whether mining rewards represent genuine value.",
   [("what","What Is Liquidity Mining",2),("how","How It Works",2),("evaluate","Evaluating Programs",2),("sustain","Sustainability",2)],
   [("Same as yield farming?","Related but different. Mining specifically means earning protocol tokens. Yield farming is broader, any return-maximizing strategy."),("Taxable?","In most jurisdictions yes. Rewards taxed as income at receipt value.")],
   [("Yield Farming","/defi-lending/learn/yield-farming-strategies","DeFi Lending"),("DeFi Governance","/defi-lending/learn/defi-governance-explained","DeFi Lending")],
   '''      <section id="what"><h2>What Is Liquidity Mining</h2><p>Liquidity mining rewards users with governance tokens for providing liquidity or using protocols. Popularized by Compound in 2020 with COMP distribution, it became a primary method for bootstrapping liquidity and distributing governance to active users rather than speculators. The mechanism creates powerful incentives beyond base lending rates.</p></section>
      <section id="how"><h2>How It Works</h2><p>Protocols allocate token supply to mining programs, distributing proportionally to participation. For lending protocols, lenders and borrowers earn tokens based on supplied or borrowed amounts. Distribution rates decrease over time as protocols mature. Users claim tokens periodically and can sell, hold for governance, or restake for additional rewards.</p></section>
      <section id="evaluate"><h2>Evaluating Programs</h2><p>Not all programs are equal. Evaluate token fundamental value (does protocol generate revenue for holders), emission schedule (will rapid distribution inflate supply), reward token liquidity, and sustainability. Calculate real yield comparing reward dollar value to capital and risk. Be cautious of high APY based on potentially declining token prices.</p></section>
      <section id="sustain"><h2>Sustainability</h2><p>Many early programs proved unsustainable as token prices declined from selling pressure. Sustainable programs have moderate emissions, strong protocol revenue, buyback mechanisms, or utility creating natural demand. The industry has matured to recognize sustainable yields come from genuine economic activity, not perpetual token emissions.</p></section>'''
  ),
  ("defi-lending/learn/smart-contract-audit-guide","SmartContractAuditGuideDefi","Smart Contract Audit Guide","DeFi Lending","defi-lending","9 min",
   "Smart contract audits are critical for DeFi security. This guide covers how to evaluate audits, the audit process, top firms, and how to assess protocol security holistically beyond just audit reports.",
   [("why","Why Audits Matter",2),("process","The Process",2),("firms","Top Firms",2),("beyond","Beyond Audits",2)],
   [("Does an audit guarantee safety?","No. Audits reduce risk significantly but cannot guarantee safety. They are one component of comprehensive security."),("How many audits needed?","More is better but quality matters most. At minimum one from a reputable firm. Multiple from different firms provide best coverage.")],
   [("DeFi Risks","/defi-lending/learn/defi-risks-guide","DeFi Lending"),("DeFi Insurance","/defi-lending/learn/defi-insurance-options","DeFi Lending")],
   '''      <section id="why"><h2>Why Audits Matter</h2><p>Smart contracts manage billions in DeFi assets and are immutable once deployed. A single vulnerability can cause complete fund loss. Major exploits have caused billions in cumulative losses, often targeting unaudited protocols. Audit status should be a primary consideration when choosing protocols. Audits are systematic code reviews by security experts looking for vulnerabilities, logic errors, and attack vectors.</p></section>
      <section id="process"><h2>The Process</h2><p>A typical audit involves documentation review, line-by-line code analysis for common vulnerabilities (reentrancy, overflow, access control, oracle manipulation), automated scanning, and a detailed severity-categorized report. The protocol addresses findings, and follow-up review confirms fixes. The process takes weeks to months depending on complexity.</p></section>
      <section id="firms"><h2>Top Firms</h2><p>Leading firms include Trail of Bits (deep technical analysis), OpenZeppelin (auditing plus secure libraries), Certora (formal verification), Sherlock (marketplace with insurance), Spearbit (researcher network), and Consensys Diligence (Ethereum-focused). Check which firms conducted audits as reputation varies significantly across the industry.</p></section>
      <section id="beyond"><h2>Beyond Audits</h2><p>Holistic security includes bug bounties, formal verification, monitoring systems, timelocks, governance mechanisms, insurance coverage, and strong security culture. A protocol with one audit plus large bounty and monitoring may be more secure than one with three audits but no ongoing security measures. Look for all elements when evaluating protocols.</p></section>'''
  ),
  ("defi-lending/learn/defi-insurance-options","DefiInsuranceOptionsGuide","DeFi Insurance Options","DeFi Lending","defi-lending","9 min",
   "DeFi insurance protects against smart contract exploits, protocol failures, and other risks. This guide covers main insurance options, how they work, and cost-benefit analysis for your lending strategy.",
   [("why","Why DeFi Insurance Matters",2),("providers","Insurance Providers",2),("types","Coverage Types",2),("cost","Cost-Benefit Analysis",2)],
   [("How much does it cost?","Premiums typically 2-10% annually of covered amount, varying by protocol risk level."),("Does it cover all losses?","No. Most cover specific risks like smart contract exploits. Not market risk, liquidation, or user error.")],
   [("DeFi Risks","/defi-lending/learn/defi-risks-guide","DeFi Lending"),("Smart Contract Audits","/defi-lending/learn/smart-contract-audit-guide","DeFi Lending")],
   '''      <section id="why"><h2>Why DeFi Insurance Matters</h2><p>DeFi protocols manage billions through smart contracts that despite audits can contain vulnerabilities. When exploits occur, losses can be total and permanent. Insurance provides a safety net by pooling risk and compensating covered losses. For users with significant DeFi capital, insurance provides peace of mind and protects against catastrophic events that could devastate portfolios.</p></section>
      <section id="providers"><h2>Insurance Providers</h2><p>Nexus Mutual is the largest provider offering smart contract cover across major protocols. InsurAce provides multi-chain coverage. Unslashed offers parametric insurance with automatic payouts. Risk Harbor specializes in algorithmic risk management. Aave has a built-in Safety Module where staked AAVE backstops protocol shortfalls. Each has different coverage terms, claims processes, and premiums.</p></section>
      <section id="types"><h2>Coverage Types</h2><p>Smart contract cover protects against code exploits. Protocol cover includes governance attacks and economic exploits. Stablecoin depeg cover protects against peg losses. Custodian cover protects centrally held assets. Each addresses different risk vectors. Comprehensive protection may require multiple policies. Understanding exact coverage and exclusions is essential.</p></section>
      <section id="cost"><h2>Cost-Benefit Analysis</h2><p>Whether insurance is worthwhile depends on position size, risk tolerance, and protocols used. For large positions on newer protocols, 2-5% premiums are justified. For small positions on battle-tested protocols, premiums may exceed expected loss probability. Factor insurance cost into yield calculations for net return assessment. Consider insurance as part of overall risk management alongside diversification and position sizing.</p></section>'''
  ),
  ("defi-lending/learn/defi-governance-explained","DefiGovernanceExplainedGuide","DeFi Governance Explained","DeFi Lending","defi-lending","9 min",
   "Governance is how DeFi protocols make decisions about parameters, upgrades, and treasury. Understanding governance helps you participate in shaping protocols and evaluate their decentralization quality.",
   [("what","What Is DeFi Governance",2),("tokens","Governance Tokens",2),("voting","Voting Process",2),("eval","Evaluating Quality",2)],
   [("Must I participate?","No, but active participation protects your interests. Governance decisions directly affect rates, risk parameters, and security."),("Can governance be attacked?","Yes. Protocols mitigate through timelocks, delegation, and minimum quorum requirements.")],
   [("DeFi Risks","/defi-lending/learn/defi-risks-guide","DeFi Lending"),("Liquidity Mining","/defi-lending/learn/liquidity-mining-explained","DeFi Lending")],
   '''      <section id="what"><h2>What Is DeFi Governance</h2><p>DeFi governance distributes decision-making power to token holders for protocol operation and evolution. Unlike traditional finance boards, DeFi protocols let token holders vote on interest rate parameters, supported assets, protocol fees, risk parameters, smart contract upgrades, and grant programs. Governance quality directly affects protocol security, competitiveness, and sustainability.</p></section>
      <section id="tokens"><h2>Governance Tokens</h2><p>Tokens like AAVE, COMP, and MKR grant voting rights proportional to holdings. Some use vote-escrow models (veTokens) where locking longer grants more power, aligning with long-term thinking. Holders can vote directly or delegate to active representatives. Token distribution affects real decentralization: protocols where few large holders control most votes are centralized in practice.</p></section>
      <section id="voting"><h2>Voting Process</h2><p>Proposals follow structured processes: community forum discussion, formal on-chain or snapshot submission, 3-7 day voting period, and timelock before execution (24-48 hours). The timelock lets users exit if they disagree. Some protocols use multi-tier governance with different thresholds for different change types.</p></section>
      <section id="eval"><h2>Evaluating Quality</h2><p>Consider voter participation rates, token distribution concentration, timelock durations, forum discussion quality, historical decision outcomes, and emergency action multi-sig requirements. Engaged communities with diverse distribution and thoughtful processes indicate better-managed protocols.</p></section>'''
  ),
  ("defi-lending/learn/variable-vs-fixed-rates","VariableVsFixedRatesGuide","Variable vs Fixed Rates in DeFi","DeFi Lending","defi-lending","8 min",
   "DeFi offers both variable and fixed interest rates. Variable rates fluctuate with markets while fixed rates lock in yields or costs. This guide compares both to help you choose the right approach.",
   [("variable","Variable Rates",2),("fixed","Fixed Rates",2),("when","When to Use Each",2),("hybrid","Hybrid Approaches",2)],
   [("Which is better?","Depends on goals. Variable for flexibility and rising rate environments. Fixed for certainty and predictable planning."),("Where to get fixed rates?","Notional Finance leads. Some protocols offer stable rate options. The fixed-rate DeFi market is growing.")],
   [("Interest Rates Explained","/defi-lending/learn/defi-interest-rates-explained","DeFi Lending"),("Notional Review","/defi-lending/reviews/notional","DeFi Lending")],
   '''      <section id="variable"><h2>Variable Rates</h2><p>Variable rates change every block based on pool utilization. When borrowing demand increases, rates rise; when it decreases, rates fall. This creates efficient, market-driven rates but introduces uncertainty. Variable rates on Aave range from 2-15% APY for stablecoins. The advantage: enter and exit anytime without penalties, automatically benefit from rate increases as a lender.</p></section>
      <section id="fixed"><h2>Fixed Rates</h2><p>Fixed rates lock in yield or cost for defined periods. Notional Finance pioneered this with fCash tokens representing future cash flow claims at specific maturities. Fixed rates provide budgeting certainty and protect against rate declines (lenders) or increases (borrowers). Trade-off: less flexibility, early exit may incur slippage, cannot benefit from favorable movements.</p></section>
      <section id="when"><h2>When to Use Each</h2><p>Variable when wanting flexibility, believing rates will increase (as lender), or needing short-term positions. Fixed when needing predictable returns, believing rates will decrease, or locking currently attractive rates. Institutional investors often prefer fixed for predictability. Active DeFi users may prefer variable for flexibility.</p></section>
      <section id="hybrid"><h2>Hybrid Approaches</h2><p>Split lending between variable and fixed for balance. Borrow fixed while lending variable to profit from spreads. Use interest rate swaps where available. As the DeFi rate market matures, more sophisticated hedging tools are emerging for comprehensive rate management.</p></section>'''
  ),
  ("defi-lending/learn/defi-composability-guide","DefiComposabilityGuide","DeFi Composability Guide","DeFi Lending","defi-lending","8 min",
   "Composability is DeFi's superpower, allowing protocols to combine like building blocks. This guide explains how composability works for lending, its benefits, and the risks of interconnected protocols.",
   [("what","What Is Composability",2),("lending","Lending Composability",2),("benefits","Benefits",2),("risks","Risks",2)],
   [("What are money legos?","Popular term for DeFi composability. Protocols stack and combine like LEGO blocks to create complex products from simple building blocks."),("Does composability increase risk?","Yes. Each additional protocol adds smart contract risk. A vulnerability in any component can affect the entire stack.")],
   [("How DeFi Lending Works","/defi-lending/learn/how-defi-lending-works","DeFi Lending"),("DeFi Risks","/defi-lending/learn/defi-risks-guide","DeFi Lending")],
   '''      <section id="what"><h2>What Is Composability</h2><p>DeFi composability means protocols interact permissionlessly, allowing assets from one to be used seamlessly in another. Possible because DeFi is built on open shared blockchains with standardized token interfaces. A token from Aave lending can immediately serve as collateral elsewhere, provide DEX liquidity, or enter a yield optimizer. This interoperability creates an exponentially expanding design space for financial products.</p></section>
      <section id="lending"><h2>Lending Composability</h2><p>Lending protocols are among the most composed-upon DeFi primitives. Liquid staking tokens earn staking yield while serving as lending collateral. Receipt tokens (aTokens, cTokens) work in other protocols while earning interest. Flash loans combine lending with arbitrage and liquidation. Yield aggregators compose across multiple protocols. This makes lending central DeFi infrastructure.</p></section>
      <section id="benefits"><h2>Benefits</h2><p>Capital efficiency through assets serving multiple purposes simultaneously. Innovation through building on existing protocols permissionlessly. Competitive markets where new protocols plug into existing infrastructure. Strategies impossible in traditional finance where siloed institutions cannot freely interact. Users benefit from more options, better rates, and sophisticated products.</p></section>
      <section id="risks"><h2>Risks</h2><p>Interconnected DeFi creates systemic risks. Vulnerabilities cascade through the ecosystem. Oracle failures propagate across protocols. Liquidity crises trigger cascading liquidations. Evaluating composable strategy risk requires understanding every protocol in the stack, not just direct interactions. This composability risk is a unique challenge for DeFi risk management.</p></section>'''
  ),
  ("defi-lending/learn/defi-credit-scoring","DefiCreditScoringGuide","DeFi Credit Scoring","DeFi Lending","defi-lending","8 min",
   "DeFi credit scoring evaluates wallet creditworthiness using on-chain data. This guide covers how scoring works, its potential for undercollateralized lending, and challenges of building on-chain reputation systems.",
   [("overview","What Is DeFi Credit Scoring",2),("how","How It Works",2),("protocols","Scoring Protocols",2),("challenges","Challenges",2)],
   [("Can I get a loan from my credit score?","Some protocols use scoring for institutional borrowers. Personal scores are still early-stage and primarily institutional."),("How is it calculated?","Analyzes transaction history, protocol interactions, repayment records, asset holdings, and governance participation.")],
   [("Undercollateralized Lending","/defi-lending/learn/undercollateralized-lending","DeFi Lending"),("TrueFi Review","/defi-lending/reviews/truefi","DeFi Lending")],
   '''      <section id="overview"><h2>What Is DeFi Credit Scoring</h2><p>DeFi credit scoring evaluates blockchain address creditworthiness using on-chain data and behavior patterns. Unlike traditional scores based on personal identity, DeFi scores are pseudonymous and based on observable blockchain activity. The goal is enabling more capital-efficient lending by allowing strong track records to access better terms or undercollateralized loans. This is one of DeFi's most important unsolved problems.</p></section>
      <section id="how"><h2>How It Works</h2><p>Analyzes wallet age, transaction history, DeFi usage patterns, borrowing and repayment behavior, asset holdings, governance participation, and interaction with known entities. Machine learning processes this data to generate risk scores. Some incorporate off-chain data through verified credentials. The challenge: pseudonymous addresses can be created freely, making persistent reputation difficult.</p></section>
      <section id="protocols"><h2>Scoring Protocols</h2><p>TrueFi pioneered institutional credit assessment with community voting. Spectral Finance uses ML for on-chain credit scores. Arcx builds credit passport NFTs for on-chain reputation. RociFi provides scoring for partially collateralized lending. These are early-stage and primarily serve institutional borrowers but lay groundwork for broader DeFi credit markets.</p></section>
      <section id="challenges"><h2>Challenges</h2><p>Sybil attacks allow gaming through multiple wallets. Lack of identity linkage means defaulters can create new wallets. Privacy concerns from detailed transaction analysis. Limited data history. Cross-chain fragmentation. Solving these will likely require combining on-chain data with some identity verification or social attestation.</p></section>'''
  ),
]

for path, fn, title, cn, cs, rt, intro, toc, faqs, rel, body in defi_learn_data:
    w(path, learn(path, fn, title, cn, cs, rt, intro, toc, faqs, rel, body))

# ============================================
# DEFI-LENDING COMPARE (8 new)
# ============================================

defi_compare = [
  ("defi-lending/compare/aave-vs-spark","AaveVsSparkCompare","Aave vs Spark","defi-lending","DeFi Lending","Detailed Aave vs Spark comparison for DeFi lending.",
   "Aave and Spark share an Aave V3 codebase but serve different ecosystems with distinct advantages.",
   "Aave for multi-chain flexibility and broad assets. Spark for DAI-focused strategies with governance-subsidized rates.",
   [{"n":"Aave","s":"aave","r":4.8,"f":{"TVL":"$15B+","Chains":"10+","Assets":"100+","Special":"eMode, Flash Loans"}},{"n":"Spark","s":"spark","r":4.5,"f":{"TVL":"$5B+","Chains":"1","Assets":"10+","Special":"Below-market DAI rates"}}],
   ["TVL","Chains","Assets","Special"],
   [("Rate Comparison","Spark often offers lower DAI borrowing rates due to Sky governance subsidies. Aave rates are purely market-driven. For DAI strategies, Spark typically provides better borrowing costs."),("Asset Coverage","Aave supports 100+ assets across 10+ chains. Spark focuses on curated Ethereum assets. For multi-chain or broad asset needs, Aave wins clearly.")],
   [("Which has better DAI rates?","Spark typically offers better DAI rates due to governance subsidies."),("Can I use both?","Yes, many use Aave for multi-chain and Spark for DAI-specific operations.")]
  ),
  ("defi-lending/compare/compound-vs-venus","CompoundVsVenusCompare","Compound vs Venus","defi-lending","DeFi Lending","Compare Compound and Venus Protocol for DeFi lending.",
   "Compound and Venus are established lending protocols serving different ecosystems: Ethereum vs BNB Chain.",
   "Compound for Ethereum security and battle-tested contracts. Venus for BNB Chain low fees and BSC-native assets.",
   [{"n":"Compound","s":"compound","r":4.6,"f":{"TVL":"$3B+","Chain":"Ethereum, L2s","Model":"Isolated markets","Token":"COMP"}},{"n":"Venus","s":"venus","r":4.3,"f":{"TVL":"$2B+","Chain":"BNB Chain","Model":"Pooled + Isolated","Token":"XVS"}}],
   ["TVL","Chain","Model","Token"],
   [("Architecture","Compound V3 uses isolated markets for risk isolation. Venus offers both pooled and isolated modes for flexibility."),("Ecosystem","Compound on Ethereum with deepest DeFi liquidity. Venus on BNB Chain with much lower fees.")],
   [("Which has lower fees?","Venus on BNB Chain. But Compound on Base/Arbitrum also offers very low fees with Ethereum security."),("Which is safer?","Compound has a longer security track record on Ethereum.")]
  ),
  ("defi-lending/compare/maple-vs-goldfinch","MapleVsGoldfinchCompare","Maple Finance vs Goldfinch","defi-lending","DeFi Lending","Compare Maple and Goldfinch for institutional DeFi lending.",
   "Both offer undercollateralized lending but target different markets and borrower types.",
   "Maple for crypto-native institutional lending. Goldfinch for emerging market real-world asset exposure.",
   [{"n":"Maple Finance","s":"maple","r":4.1,"f":{"Focus":"Institutional crypto","Borrowers":"Trading firms","Geography":"Global crypto"}},{"n":"Goldfinch","s":"goldfinch","r":4.0,"f":{"Focus":"Emerging markets","Borrowers":"Fintech companies","Geography":"Latin America, Africa"}}],
   ["Focus","Borrowers","Geography"],
   [("Borrower Profile","Maple lends to crypto-native institutions. Goldfinch lends to fintech companies in emerging markets. Fundamentally different risk profiles."),("Yield Sources","Maple from crypto trading operations. Goldfinch from real-world lending in developing economies, providing crypto cycle diversification.")],
   [("Which has higher yields?","Both offer 8-15% on stablecoins depending on pool. Higher yields reflect higher risk."),("Which is safer?","Neither inherently. Diversifying across both provides exposure to different risk factors.")]
  ),
  ("defi-lending/compare/cefi-vs-defi-lending","CefiVsDefiLendingCompare","CeFi vs DeFi Lending","defi-lending","DeFi Lending","Comprehensive CeFi vs DeFi crypto lending comparison.",
   "CeFi and DeFi take fundamentally different approaches to crypto lending with distinct advantages and risks.",
   "DeFi for self-custody, transparency, and permissionless access. CeFi for simplicity and customer support.",
   [{"n":"DeFi Lending","s":"defi","r":4.5,"f":{"Custody":"Self-custody","KYC":"Not required","Transparency":"Full on-chain","Yields":"Market-driven"}},{"n":"CeFi Lending","s":"cefi","r":3.8,"f":{"Custody":"Platform holds funds","KYC":"Required","Transparency":"Limited","Yields":"Platform-set"}}],
   ["Custody","KYC","Transparency","Yields"],
   [("Custody","DeFi maintains self-custody through smart contracts. CeFi platforms hold funds, introducing counterparty risk as shown by Celsius, Voyager collapses in 2022."),("Ease of Use","CeFi offers familiar interfaces and support. DeFi requires wallet management and technical knowledge, but interfaces have improved significantly.")],
   [("Did CeFi failures prove DeFi is better?","2022 CeFi collapses showed counterparty risk. DeFi transparency avoided similar collapses, but has its own risks like smart contract exploits."),("Can I use both?","Yes, many use CeFi for fiat on-ramps and DeFi for self-custody yields.")]
  ),
  ("defi-lending/compare/ethereum-vs-solana-defi","EthVsSolDefiCompare","Ethereum vs Solana DeFi Lending","defi-lending","DeFi Lending","Compare Ethereum and Solana DeFi lending ecosystems.",
   "Ethereum and Solana host the two largest DeFi lending ecosystems with different architectures and tradeoffs.",
   "Ethereum for deeper liquidity and battle-tested protocols. Solana for speed, low cost, and growing ecosystem.",
   [{"n":"Ethereum","s":"ethereum","r":4.7,"f":{"TVL":"$50B+","Speed":"12s blocks","Fees":"Varies","Maturity":"5+ years"}},{"n":"Solana","s":"solana","r":4.3,"f":{"TVL":"$8B+","Speed":"400ms","Fees":"<$0.01","Maturity":"3+ years"}}],
   ["TVL","Speed","Fees","Maturity"],
   [("Maturity","Ethereum has 5+ years of battle-testing. Solana is newer but growing rapidly with strong native protocols."),("User Experience","Solana provides better UX with sub-second transactions and near-zero fees. Ethereum L2s offer comparable speed and cost.")],
   [("Should I choose one?","Many users operate on both for different opportunities."),("Are Solana protocols safe?","Major ones are audited with growing track records, but the ecosystem is younger overall.")]
  ),
  ("defi-lending/compare/lending-vs-staking","LendingVsStakingCompare","DeFi Lending vs Staking","defi-lending","DeFi Lending","Compare lending and staking as DeFi yield strategies.",
   "Lending and staking are the two primary passive yield strategies in DeFi with different risk and return profiles.",
   "Staking for long-term ETH holders wanting network participation. Lending for flexibility and multi-asset yields.",
   [{"n":"Lending","s":"lending","r":4.5,"f":{"Source":"Borrower interest","APY":"3-10%","Assets":"Any supported","Lockup":"None"}},{"n":"Staking","s":"staking","r":4.4,"f":{"Source":"Network rewards","APY":"3-5% ETH","Assets":"PoS tokens","Lockup":"Variable"}}],
   ["Source","APY","Assets","Lockup"],
   [("Yield Sources","Lending from borrower interest (demand-driven, variable). Staking from network rewards (more predictable for established chains)."),("Combining Both","Liquid staking tokens enable both: stake ETH for stETH, then lend stETH on Aave for stacking yield plus lending returns.")],
   [("Can I do both?","Yes, through liquid staking. Stake ETH for stETH then lend it."),("Which is safer?","Both well-proven on established protocols. Risk depends on specific implementations.")]
  ),
  ("defi-lending/compare/fixed-vs-variable-rate","FixedVsVariableRateCompare","Fixed vs Variable Rate Lending","defi-lending","DeFi Lending","Compare fixed and variable rate DeFi lending.",
   "Fixed and variable rates serve different needs. This comparison helps choose the right approach for your strategy.",
   "Variable for flexibility in rising rate environments. Fixed for certainty and institutional planning.",
   [{"n":"Variable","s":"variable","r":4.5,"f":{"Changes":"Every block","Flexibility":"Withdraw anytime","Predictability":"Low","Protocols":"Aave, Compound"}},{"n":"Fixed","s":"fixed","r":4.2,"f":{"Changes":"Locked","Flexibility":"Maturity-based","Predictability":"High","Protocols":"Notional"}}],
   ["Changes","Flexibility","Predictability","Protocols"],
   [("Rate Behavior","Variable changes every block based on utilization. Fixed locked at entry through fCash tokens redeemable at maturity."),("Market Conditions","Rising rates benefit variable lenders. Falling rates favor fixed. Your outlook should inform choice.")],
   [("Can I switch?","Yes, maintain both simultaneously. Split capital for balance."),("Which yields more?","Neither consistently. Compare current rates before committing.")]
  ),
  ("defi-lending/compare/overcollateralized-vs-undercollateralized","OverVsUnderCollCompare","Overcollateralized vs Undercollateralized Lending","defi-lending","DeFi Lending","Compare overcollateralized and undercollateralized DeFi lending.",
   "Collateralization is the most fundamental DeFi lending design choice, determining risk, yields, and accessibility.",
   "Overcollateralized is safer for most users. Undercollateralized offers higher yields for those accepting credit risk.",
   [{"n":"Overcollateralized","s":"over","r":4.6,"f":{"Collateral":"100-150%+","Default Risk":"Minimal","Yields":"3-8%","KYC":"Not required"}},{"n":"Undercollateralized","s":"under","r":3.8,"f":{"Collateral":"0-100%","Default Risk":"Significant","Yields":"8-15%","KYC":"Usually required"}}],
   ["Collateral","Default Risk","Yields","KYC"],
   [("Risk","Overcollateralized has minimal default risk (auto-liquidation). Undercollateralized has genuine default risk as shown by 2022 defaults."),("Yields","The 5-10% premium for undercollateralized reflects genuine risk, not free extra yield.")],
   [("Should beginners use undercollateralized?","No. Start with overcollateralized like Aave where default risk is minimal."),("Will undercollateralized become safe?","As credit scoring and legal frameworks mature it will improve, but inherent credit risk will always exist.")]
  ),
]

for path, fn, title, cs, cn, md, intro, sa, items, fl, analysis, faqs in defi_compare:
    w(path, compare(path, fn, title, cs, cn, md, intro, sa, items, fl, analysis, faqs))

# ============================================
# CRYPTO-LOANS REVIEWS (8 new)
# ============================================

cl_reviews = [
  ("crypto-loans/reviews/celsius-successor","CelsiusSuccessorReviewPage","Celsius Network (Legacy)","celsius-successor",3.0,"Celsius was a major CeFi lending platform that collapsed in 2022. This page covers its history and lessons.",["Historical case study of CeFi risks","Lessons applicable to all crypto lending","Demonstrated importance of self-custody"],["Platform is defunct - no longer operational","Users lost significant funds","Highlighted counterparty risks of centralized platforms"],"Cautionary tale - study before using any CeFi lender","crypto-loans","Crypto Loans","Celsius Network Review","Review of Celsius Network collapse and lessons for crypto lending users.",
   "Celsius Network was once one of the largest centralized crypto lending platforms managing over $20 billion in assets. The platform offered attractive yields and competitive borrowing rates. In June 2022, Celsius halted all withdrawals, filing for Chapter 11 bankruptcy in July 2022. The collapse revealed risk management failures, undisclosed losses, and operational issues. This became a defining event of the 2022 crypto winter and a critical case study in CeFi lending risks.",
   [("collapse","The Celsius Collapse","Celsius collapsed due to excessive risk-taking with deposits, Terra/Luna exposure, DeFi exploit losses, and illiquid investment mismatches. When withdrawals increased, obligations could not be met. A significant balance sheet hole had not been disclosed to users, eroding trust completely."),("lessons","Key Lessons","Not your keys, not your crypto. CeFi platforms promising high yields may take excessive risks. Transparency and proof of reserves should be required. DeFi alternatives with on-chain transparency reduce counterparty risk. Diversify across platforms and prefer self-custodial solutions."),("recovery","Recovery Process","Complex legal proceedings aim to recover and distribute remaining assets to creditors. Recovery rates vary and the process highlights inadequate legal frameworks for crypto-specific bankruptcies.")],
   {"Platform Status":"Defunct","Historical Rates":"Up to 18% on some assets","Recovery":"Partial, via bankruptcy proceedings"},
   ["Platform ceased operations","Centralized custody was core vulnerability","No transparency about investments","No proof of reserves"],
   ["Historical: Crypto-backed loans","Historical: High yield accounts","Historical: CelsiusPay card"],
   [("Can I recover funds?","Bankruptcy process is ongoing. Filed claims may receive partial recovery. Check official case updates."),("Are other CeFi lenders safe?","The collapse showed CeFi counterparty risk. Remaining platforms have improved but fundamental custodial risks persist.")],
   [("Nexo","/crypto-loans/reviews/nexo"),("Ledn","/crypto-loans/reviews/ledn")],
   [("Risks of Crypto Loans","/crypto-loans/learn/risks-of-crypto-loans"),("CeFi vs DeFi","/defi-lending/compare/cefi-vs-defi-lending")]
  ),
  ("crypto-loans/reviews/ledn","LednReviewPage","Ledn","ledn",4.0,"Ledn is a Canadian crypto lending platform offering Bitcoin-backed loans and savings products with proof-of-reserves transparency.",["Proof-of-reserves attestations for transparency","Bitcoin-focused lending expertise","Regulated Canadian entity","Competitive BTC-backed loan rates"],["Limited asset support (primarily BTC and USDC)","Requires KYC verification","Centralized custody model"],"Bitcoin holders wanting transparent CeFi lending","crypto-loans","Crypto Loans","Ledn Review","Ledn review covering Bitcoin-backed loans, savings accounts, and proof-of-reserves transparency.",
   "Ledn is a Canadian-based crypto lending platform that differentiates itself through transparency and Bitcoin-focused lending. Founded in 2018, Ledn offers Bitcoin-backed loans allowing users to borrow against their BTC without selling, and savings products earning yield on BTC and USDC holdings. The platform publishes regular proof-of-reserves attestations, providing visibility into its financial health. Ledn has positioned itself as a trustworthy alternative following the collapse of platforms like Celsius and BlockFi.",
   [("btc-loans","Bitcoin-Backed Loans","Ledn offers loans against Bitcoin collateral with competitive loan-to-value ratios and interest rates. Borrowers can access USD or USDC without triggering a taxable event by selling BTC. Loans are structured with clear terms and transparent fee schedules. The platform supports various loan durations and allows borrowers to manage collateral levels through their dashboard."),("transparency","Proof of Reserves","Ledn publishes regular proof-of-reserves attestations verified by independent accountants. These reports confirm that client assets are fully backed, providing confidence that the platform maintains adequate reserves. This transparency initiative was ahead of industry trends and positioned Ledn favorably when CeFi competitors collapsed."),("savings","Savings Products","Ledn offers yield on BTC and USDC deposits through its savings products. Yields are generated through institutional lending and trading desk partnerships. Rates are competitive within the CeFi landscape, though lower than peak rates from platforms that later proved unsustainable.")],
   {"BTC Loan Interest":"Variable, competitive","Origination Fee":"None or minimal","Early Repayment":"No penalties"},
   ["Proof-of-reserves attestations","Regulated Canadian entity","Institutional-grade custody","Transparent fee structure"],
   ["Bitcoin-backed loans","BTC and USDC savings accounts","Proof-of-reserves reporting","B2X (Bitcoin-backed Bitcoin purchase)"],
   [("How does Ledn custody work?","Ledn uses institutional-grade custodians and publishes proof-of-reserves. While still centralized, the transparency provides more confidence than platforms without attestations."),("What LTV does Ledn offer?","Ledn typically offers 50% LTV on Bitcoin-backed loans, meaning $10,000 in BTC collateral allows borrowing up to $5,000.")],
   [("Nexo","/crypto-loans/reviews/nexo"),("Unchained","/crypto-loans/reviews/unchained")],
   [("How Crypto Loans Work","/crypto-loans/learn/how-crypto-loans-work"),("Risks of Crypto Loans","/crypto-loans/learn/risks-of-crypto-loans")]
  ),
  ("crypto-loans/reviews/unchained","UnchainedReviewPage","Unchained","unchained",4.2,"Unchained offers Bitcoin-native financial services with multi-signature custody, eliminating single points of failure in crypto lending.",["Multi-signature custody eliminates single custodian risk","Bitcoin-only focus with deep expertise","Collaborative custody model","IRA and inheritance planning services"],["Bitcoin only - no altcoin support","Higher minimum requirements","More complex setup than simple CeFi platforms"],"Bitcoin maximalists who want institutional security with self-sovereignty","crypto-loans","Crypto Loans","Unchained Review","Unchained review covering multi-sig Bitcoin custody, lending, and financial services.",
   "Unchained is a Bitcoin-focused financial services company that pioneered collaborative multi-signature custody for Bitcoin holders. Unlike traditional CeFi platforms where you surrender custody, Unchained uses a 2-of-3 multi-sig arrangement where you hold one key, Unchained holds one, and a third-party backup holds one. This eliminates single points of failure and means Unchained cannot unilaterally access your Bitcoin. The company offers Bitcoin-backed loans, IRA services, and inheritance planning, all built on this collaborative custody foundation.",
   [("multisig","Multi-Signature Custody","Unchained uses 2-of-3 multi-signature custody where the client, Unchained, and a backup key holder each hold one key. Any two keys are needed to move funds, meaning no single party can access your Bitcoin alone. This collaborative model provides institutional-grade security while maintaining client sovereignty. If Unchained were to cease operations, clients can still access their Bitcoin using their key plus the backup key."),("loans","Bitcoin-Backed Loans","Unchained offers Bitcoin-backed loans where your collateral remains in the multi-sig vault during the loan term. This means your BTC never leaves your custody arrangement, a unique advantage over CeFi lenders who take full custody of collateral. Loan terms are transparent with clear interest rates and no hidden fees. The multi-sig structure adds an extra layer of security for your collateral."),("services","Additional Services","Beyond lending, Unchained provides Bitcoin IRA services for tax-advantaged retirement savings, inheritance planning with multi-sig key distribution, and trading services. All products are built on the collaborative custody model, providing a comprehensive Bitcoin financial services platform.")],
   {"Loan Interest":"Competitive fixed rates","Setup Fee":"Varies by product","Annual Custody":"Fee for vault maintenance"},
   ["2-of-3 multi-signature custody","No single point of failure","Client retains key sovereignty","Third-party backup key holder"],
   ["Multi-sig Bitcoin custody","Bitcoin-backed loans","IRA services","Inheritance planning","Trading desk"],
   [("What happens if Unchained goes bankrupt?","Because you hold one key and a backup key holder holds another, you can access your Bitcoin without Unchained. This is a fundamental advantage over traditional custodial models."),("Is multi-sig complicated to use?","Unchained has streamlined the process significantly. Initial setup requires some technical steps, but ongoing use is straightforward through their interface.")],
   [("Ledn","/crypto-loans/reviews/ledn"),("Nexo","/crypto-loans/reviews/nexo")],
   [("How Crypto Loans Work","/crypto-loans/learn/how-crypto-loans-work"),("Collateral Requirements","/crypto-loans/learn/collateral-requirements")]
  ),
  ("crypto-loans/reviews/abracadabra","AbracadabraReviewPage","Abracadabra Money","abracadabra",3.7,"Abracadabra Money is a DeFi lending protocol that lets users borrow MIM stablecoin against interest-bearing collateral like yield-bearing tokens.",["Borrow against yield-bearing assets","No selling required - maintain yield exposure","Multi-chain deployment","Innovative cauldron system"],["MIM stablecoin has faced depeg events","Complex risk profile from yield-bearing collateral","Smaller TVL limits liquidity","Controversial governance history"],"DeFi users wanting to leverage yield-bearing positions","crypto-loans","Crypto Loans","Abracadabra Money Review","Abracadabra review covering MIM borrowing, cauldrons, and yield-bearing collateral.",
   "Abracadabra Money is a DeFi lending protocol that allows users to borrow the MIM (Magic Internet Money) stablecoin against interest-bearing collateral. This means you can deposit yield-bearing tokens like yvUSDC (Yearn USDC vault tokens), stETH, or LP tokens and borrow MIM without losing your yield exposure. The protocol uses isolated lending markets called cauldrons, each with specific collateral types and risk parameters. Abracadabra is deployed across multiple chains including Ethereum, Arbitrum, and others.",
   [("cauldrons","Cauldron System","Each cauldron is an isolated lending market with specific collateral types and parameters. Users deposit collateral into a cauldron and borrow MIM against it. Different cauldrons have different LTV ratios, interest rates, and liquidation parameters based on the risk profile of the collateral. This isolation means issues in one cauldron do not directly affect others, providing compartmentalized risk management."),("mim","MIM Stablecoin","MIM is a USD-pegged stablecoin minted when users borrow from cauldrons. MIM has generally maintained its peg but has experienced depeg events during market stress, particularly around events involving controversial team members. The stability of MIM depends on the quality of collateral backing it and the overall health of the Abracadabra protocol."),("strategies","Leveraged Yield Strategies","A key use case is leveraging yield-bearing positions. Deposit yield-bearing tokens, borrow MIM, convert MIM to more yield-bearing tokens, and repeat. This amplifies yield exposure but also amplifies risk. Abracadabra has built-in leverage tools making this process streamlined.")],
   {"Borrow Interest":"Varies by cauldron (0.5-5%)","Opening Fee":"0.5% on most cauldrons","Liquidation Fee":"Varies by collateral"},
   ["Isolated cauldron markets for risk separation","Multi-chain deployment","Smart contract audits","Governance through SPELL token"],
   ["Borrow MIM against yield-bearing collateral","Isolated cauldron lending markets","Built-in leverage tools","Multi-chain availability","SPELL governance token"],
   [("What is MIM?","MIM (Magic Internet Money) is a USD-pegged stablecoin minted when users borrow from Abracadabra cauldrons. It can be used across DeFi like any other stablecoin."),("Is Abracadabra safe?","Abracadabra carries standard DeFi risks plus the specific risk of MIM depeg events. The isolated cauldron system helps contain risks, but users should carefully evaluate collateral types and protocol health.")],
   [("Liquity","/crypto-loans/reviews/liquity"),("MakerDAO Loans","/crypto-loans/reviews/makerdao-loans")],
   [("Stablecoin Borrowing Guide","/crypto-loans/learn/stablecoin-borrowing-guide"),("Risks of Crypto Loans","/crypto-loans/learn/risks-of-crypto-loans")]
  ),
  ("crypto-loans/reviews/liquity","LiquityReviewPage","Liquity","liquity",4.3,"Liquity is an immutable, governance-free DeFi borrowing protocol offering 0% interest LUSD loans against ETH collateral.",["Zero percent interest rate on loans","Immutable smart contracts - no governance risk","110% minimum collateral ratio for capital efficiency","Fully decentralized and censorship resistant"],["ETH-only collateral","LUSD may trade at slight premium or discount","Stability pool required for protocol health","No multi-chain deployment"],"ETH holders wanting the most efficient decentralized borrowing","crypto-loans","Crypto Loans","Liquity Review","Liquity review covering 0% interest LUSD loans, stability pool, and immutable protocol design.",
   "Liquity is a decentralized borrowing protocol that allows ETH holders to draw LUSD stablecoin loans at 0% interest with a minimum collateral ratio of only 110%. The protocol is distinguished by its immutable smart contracts (no governance, no upgrades), making it one of the most decentralized and censorship-resistant lending protocols in DeFi. Instead of charging ongoing interest, Liquity charges a one-time borrowing fee. The protocol uses a stability pool and redemption mechanism to maintain LUSD peg stability. Liquity V2 introduces significant upgrades including multi-collateral support and user-set interest rates.",
   [("zero-interest","Zero Interest Borrowing","Instead of charging variable or fixed interest rates, Liquity charges a one-time borrowing fee (typically 0.5-5% depending on redemption activity). After paying this fee, your loan accrues no further interest, making it ideal for long-term borrowing. The fee adjusts algorithmically based on recent protocol activity. This model is unique in DeFi and provides cost certainty that variable-rate protocols cannot match."),("stability-pool","Stability Pool","The stability pool is Liquity's primary liquidation mechanism. Users deposit LUSD into the pool and earn ETH from liquidated positions and LQTY token rewards. When a position is liquidated, LUSD from the stability pool repays the debt and depositors receive the ETH collateral at a discount. This creates a more efficient liquidation mechanism than external liquidator bots used by other protocols."),("immutable","Immutable Protocol Design","Liquity's smart contracts are immutable with no admin keys, no governance, and no upgrade mechanism. Once deployed, the protocol runs autonomously forever. This eliminates governance attack vectors, admin key compromises, and regulatory pressure points that affect other protocols. The trade-off is that bugs cannot be patched and new features cannot be added to the existing deployment.")],
   {"Borrowing Fee":"0.5-5% one-time","Interest Rate":"0%","Liquidation Penalty":"Collateral to stability pool"},
   ["Immutable smart contracts","No admin keys or governance","Multiple independent audits","Fully decentralized operation","Stability pool liquidation mechanism"],
   ["0% interest LUSD borrowing","110% minimum collateral ratio","Stability pool yield opportunity","LQTY staking rewards","Immutable censorship-resistant design"],
   [("How can Liquity offer 0% interest?","Liquity charges a one-time borrowing fee instead of ongoing interest. The fee is algorithmically determined based on recent protocol activity, providing equivalent revenue through a different model."),("What is the stability pool?","The stability pool is where users deposit LUSD to earn ETH from liquidations and LQTY rewards. It serves as the primary liquidation mechanism, replacing external liquidator bots.")],
   [("Abracadabra","/crypto-loans/reviews/abracadabra"),("MakerDAO Loans","/crypto-loans/reviews/makerdao-loans")],
   [("Stablecoin Borrowing","/crypto-loans/learn/stablecoin-borrowing-guide"),("Self-Repaying Loans","/crypto-loans/learn/self-repaying-loans")]
  ),
  ("crypto-loans/reviews/makerdao-loans","MakerDAOLoansReviewPage","MakerDAO (Sky)","makerdao-loans",4.5,"MakerDAO (now Sky) is the original DeFi lending protocol enabling users to mint DAI stablecoins against crypto collateral through its vault system.",["Largest and most battle-tested DeFi lending protocol","Multiple collateral types including real-world assets","DAI Savings Rate for passive yield","Deep liquidity and ecosystem integration"],["Complex vault management for beginners","Ethereum mainnet gas costs can be high","Governance changes can affect parameters","Rebranding to Sky causing ecosystem confusion"],"DeFi users who want the most established and liquid stablecoin borrowing protocol","crypto-loans","Crypto Loans","MakerDAO Loans Review","MakerDAO review covering DAI minting, vault system, DSR, and the Sky ecosystem transition.",
   "MakerDAO, now rebranding as Sky, is the original DeFi lending protocol and the creator of DAI, one of the most widely used decentralized stablecoins. The protocol allows users to deposit crypto collateral into vaults and mint DAI stablecoins against it. With billions in TVL and years of battle-tested operation, MakerDAO represents the gold standard in DeFi lending security and reliability. The protocol supports diverse collateral types including ETH, WBTC, stablecoins, liquid staking tokens, and real-world assets.",
   [("vaults","Vault System","MakerDAO vaults allow users to lock collateral and generate DAI. Each vault type has specific parameters including stability fee (interest rate), liquidation ratio, and debt ceiling. Users manage their own vaults, adding or removing collateral and generating or repaying DAI as needed. The system has processed billions in lending volume since launch and represents the most battle-tested smart contracts in DeFi lending."),("dsr","DAI Savings Rate","The DSR allows DAI holders to earn yield simply by depositing into the savings contract. The rate is set by governance and funded by stability fees from vault users. DSR has been highly competitive, often exceeding traditional savings rates. sDAI (staked DAI) tokenizes DSR deposits for DeFi composability."),("sky-transition","Sky Ecosystem Transition","MakerDAO is transitioning to the Sky brand with new tokens (USDS replacing DAI, SKY replacing MKR) and organizational restructuring through SubDAOs. The core lending mechanics remain unchanged, but the governance structure and branding are evolving. Spark Protocol serves as the primary lending interface within the Sky ecosystem.")],
   {"Stability Fee":"Varies by vault type (0-8%)","Liquidation Penalty":"13% for ETH vaults","DSR Yield":"Set by governance"},
   ["Most battle-tested DeFi smart contracts","Extensive multi-firm audit history","Emergency shutdown mechanism","Decentralized oracle network","Transparent governance process"],
   ["Multi-collateral vault system","DAI stablecoin minting","DAI Savings Rate (DSR)","sDAI yield-bearing token","Real-world asset collateral","Spark Protocol integration"],
   [("Is DAI safe?","DAI is the most battle-tested decentralized stablecoin with years of operation and billions in collateral backing. While no stablecoin is completely risk-free, DAI has maintained its peg through multiple market crises."),("What is the Sky transition?","MakerDAO is rebranding to Sky with new tokens and governance structure. The core lending protocol continues to function as before, with Spark Protocol serving as the primary user-facing lending interface.")],
   [("Liquity","/crypto-loans/reviews/liquity"),("Spark","/defi-lending/reviews/spark")],
   [("Stablecoin Borrowing","/crypto-loans/learn/stablecoin-borrowing-guide"),("How Crypto Loans Work","/crypto-loans/learn/how-crypto-loans-work")]
  ),
  ("crypto-loans/reviews/benqi-loans","BenqiLoansReviewPage","BENQI Lending","benqi-loans",4.1,"BENQI is the leading lending protocol on Avalanche, offering crypto-backed loans with low fees and fast transactions.",["Leading Avalanche lending protocol by TVL","Very low transaction fees","Fast sub-second finality","AVAX liquid staking integration"],["Limited to Avalanche ecosystem","Smaller liquidity than Ethereum-based protocols","QI token incentives may decrease over time"],"Avalanche users wanting efficient crypto-backed borrowing","crypto-loans","Crypto Loans","BENQI Lending Review","BENQI review covering Avalanche lending, sAVAX liquid staking, and competitive borrowing rates.",
   "BENQI is the dominant lending protocol on the Avalanche network, offering lending and borrowing services with the low fees and fast finality that Avalanche provides. The protocol supports major assets including AVAX, USDC, USDT, WBTC, and various Avalanche ecosystem tokens. BENQI also operates sAVAX, a liquid staking token for AVAX that can be used as collateral across the Avalanche DeFi ecosystem, creating a powerful synergy between staking and lending.",
   [("lending","Lending and Borrowing","BENQI offers standard lending pool mechanics similar to Aave and Compound but optimized for the Avalanche network. Users supply assets to earn interest and can borrow against their deposits. The protocol benefits from Avalanche sub-second finality for fast transaction confirmation and very low gas costs making active position management affordable. BENQI supports efficiency modes for correlated assets and maintains competitive rates driven by Avalanche ecosystem activity."),("savax","sAVAX Liquid Staking","BENQI sAVAX allows users to stake AVAX while maintaining liquidity. sAVAX represents staked AVAX plus accumulated staking rewards and can be used as collateral on BENQI and other Avalanche protocols. This creates a powerful yield stacking opportunity where users earn staking rewards on their AVAX while simultaneously using it as lending collateral to earn additional yield or borrow stablecoins."),("ecosystem","Avalanche Ecosystem Role","As the largest lending protocol on Avalanche, BENQI plays a critical infrastructure role in the ecosystem. The protocol integrates with Avalanche DEXes, yield aggregators, and other DeFi protocols creating a rich composability layer. BENQI governance through QI token allows community participation in protocol direction.")],
   {"Supply Rate":"Variable based on utilization","Borrow Rate":"Variable based on utilization","Gas Costs":"Minimal Avalanche fees"},
   ["Multiple security audits","Avalanche network security","Transparent on-chain operations","QI governance oversight"],
   ["Lending and borrowing on Avalanche","sAVAX liquid staking","QI governance token","Multi-asset support","Efficiency modes for correlated assets"],
   [("Is BENQI safe?","BENQI has been operating on Avalanche since 2021 with multiple audits. While standard DeFi risks apply, the protocol has a solid track record within the Avalanche ecosystem."),("Can I use sAVAX elsewhere?","Yes, sAVAX is composable across Avalanche DeFi. You can use it as collateral on other protocols, provide liquidity on DEXes, or in yield strategies.")],
   [("Venus Loans","/crypto-loans/reviews/venus-loans"),("Nexo","/crypto-loans/reviews/nexo")],
   [("How Crypto Loans Work","/crypto-loans/learn/how-crypto-loans-work"),("Collateral Requirements","/crypto-loans/learn/collateral-requirements")]
  ),
  ("crypto-loans/reviews/venus-loans","VenusLoansReviewPage","Venus Protocol Loans","venus-loans",4.0,"Venus Protocol is the leading lending platform on BNB Chain offering crypto-backed loans with very low fees and broad asset support.",["Leading BNB Chain lending protocol","Very low transaction fees","Broad BSC token support","VAI stablecoin minting"],["Limited to BNB Chain ecosystem","BNB Chain security differs from Ethereum","Historical governance issues have been addressed","Smaller institutional adoption"],"BNB Chain users wanting affordable crypto-backed borrowing","crypto-loans","Crypto Loans","Venus Protocol Loans Review","Venus review covering BNB Chain lending, VAI stablecoin, and low-fee crypto borrowing.",
   "Venus Protocol is the dominant lending platform on BNB Smart Chain, providing lending, borrowing, and stablecoin minting services with the extremely low transaction costs that BSC offers. The protocol supports a wide range of BSC tokens including BNB, BTCB, ETH, and numerous BEP-20 tokens. Venus also offers VAI, its own stablecoin that can be minted against deposited collateral. As the BNB Chain ecosystem has matured, Venus has strengthened its risk management, governance processes, and security framework.",
   [("bnb-lending","BNB Chain Lending","Venus provides standard lending pool mechanics on BNB Chain with support for dozens of assets. Transaction costs are typically under $0.10 making Venus accessible for smaller positions that would be uneconomical on Ethereum mainnet. The protocol offers both isolated and pooled lending modes, giving users flexibility in risk management. Rates are competitive and driven by BSC ecosystem borrowing demand."),("vai","VAI Stablecoin","Venus enables users to mint VAI, a USD-pegged stablecoin, against their deposited collateral. VAI can be used throughout the BSC DeFi ecosystem for trading, yield farming, and liquidity provision. The stability mechanisms have been improved since early challenges with maintaining the peg, including tighter minting parameters and stability fee adjustments."),("risk-mgmt","Risk Management","Venus has significantly improved its risk management following early protocol challenges. The introduction of isolated pools, stricter collateral parameters, and enhanced governance processes have strengthened the platform. Risk parameters are regularly reviewed and adjusted by governance to reflect changing market conditions.")],
   {"Supply Rate":"Variable","Borrow Rate":"Variable","VAI Stability Fee":"Set by governance","Gas":"Minimal BSC fees"},
   ["Multiple security audits","Enhanced governance framework","BNB Chain validator security","Isolated pool risk management"],
   ["Lending and borrowing on BNB Chain","VAI stablecoin minting","Isolated and pooled lending modes","XVS governance token","Broad BSC token support"],
   [("How does Venus compare to Aave?","Venus is BNB Chain focused while Aave is multi-chain with Ethereum roots. Venus offers lower fees but Aave has deeper liquidity and a longer track record. Choose based on your preferred chain."),("Is VAI a reliable stablecoin?","VAI has improved stability mechanisms since early challenges. However, as a protocol-specific stablecoin on BNB Chain, it has less liquidity and track record than DAI or USDC.")],
   [("BENQI Loans","/crypto-loans/reviews/benqi-loans"),("Nexo","/crypto-loans/reviews/nexo")],
   [("How Crypto Loans Work","/crypto-loans/learn/how-crypto-loans-work"),("Stablecoin Borrowing","/crypto-loans/learn/stablecoin-borrowing-guide")]
  ),
]

for args in cl_reviews:
    path = args[0]
    w(path, review(*args))

print(f"\nTotal new pages created: {count}")
EOF