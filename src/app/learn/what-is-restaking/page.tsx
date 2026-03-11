import { Metadata } from "next";
import LearnPageLayout from "@/components/LearnPage";
import { CURRENT_YEAR } from "@/lib/constants";

export const metadata: Metadata = {
  title: `What Is Restaking? EigenLayer, Symbiotic & The Restaking Economy ${CURRENT_YEAR}`,
  description:
    "Understand restaking, the revolutionary protocol enabling ETH and staked assets to secure multiple blockchains. Learn about EigenLayer, Symbiotic, AVS, and how restaking creates new economic opportunities.",
};

export default function RestakingPage() {
  return (
    <LearnPageLayout
      title="What Is Restaking? EigenLayer, Symbiotic & The Restaking Economy"
      categoryName="Learn Crypto"
      categorySlug="learn"
      readTime="16 min"
      intro="Restaking represents one of the most innovative developments in blockchain economics since Ethereum's transition to proof of stake. Restaking enables stakers to reuse their already-staked ETH or other assets to simultaneously secure multiple blockchain networks and services, creating entirely new economic opportunities. Rather than staking capital once, earning a fixed yield, and keeping it locked in a single protocol, restaking allows that same capital to work across multiple systems simultaneously. EigenLayer pioneered this concept on Ethereum, enabling Ethereum validators and liquid stakers to restake their assets to secure Ethereum Virtual Machine (EVM) sidechains, data availability layers, and other services. This innovation has spawned an entire restaking ecosystem, including protocols like Symbiotic, Karak, and numerous others. This comprehensive guide explains how restaking works, explores the Actively Validated Services (AVS) it enables, discusses leading protocols, and examines the transformative potential of the restaking economy."
      toc={[
        { id: "what-is-restaking", title: "Understanding Restaking", level: 2 },
        { id: "restaking-mechanics", title: "How Restaking Works", level: 2 },
        { id: "avs-explained", title: "Actively Validated Services (AVS)", level: 2 },
        { id: "liquid-restaking", title: "Liquid Restaking Tokens", level: 2 },
        { id: "restaking-protocols", title: "Leading Restaking Protocols", level: 2 },
        { id: "restaking-benefits", title: "Benefits of Restaking", level: 2 },
        { id: "restaking-risks", title: "Risks and Considerations", level: 2 },
        { id: "restaking-future", title: "The Future of Restaking", level: 2 },
      ]}
      faqs={[
        {
          question: "Is restaking the same as double-staking?",
          answer:
            "No, these are fundamentally different concepts. Double-staking would mean the same capital is simultaneously validating two separate chains, which would require duplicating the asset and thus increase total capital staked. Restaking means the same capital supports security for multiple systems simultaneously without duplication. When you restake ETH through EigenLayer, you're not duplicating your ETH—you're granting permission for that same ETH to secure multiple services. This is economically superior because it puts more security value on the same capital.",
        },
        {
          question: "What happens to my ETH when I restake?",
          answer:
            "Your ETH remains in your validator or liquid staking contract. Through restaking protocols like EigenLayer, you grant the protocol permission to slash (penalize) your ETH under specific conditions defined by the services you're restaking to. Your ETH doesn't move; instead, you're creating additional slashing conditions beyond those imposed by Ethereum itself. The protocol can then allocate your staking power to various services (AVSs) that pay fees for security. Your ETH continues earning Ethereum staking rewards plus additional rewards from the AVS services, but you accept additional slashing risk in exchange for these additional yields.",
        },
        {
          question: "How are slashing conditions defined in restaking?",
          answer:
            "Slashing in restaking is service-specific. An AVS defines what constitutes misbehavior for its security (e.g., signing two different blocks, failing to attest to the correct state, or censoring transactions). The smart contract implementing restaking encodes these conditions and monitors on-chain to detect violations. If a validator signs conflicting blocks on an AVS, the restaking contract automatically slashes a portion of the validator's staked assets. The key difference from Ethereum staking is that restaking slashing is determined by individual AVSs, introducing new risk vectors that Ethereum validators must evaluate.",
        },
        {
          question: "Can I lose my entire ETH stake through restaking?",
          answer:
            "Theoretically yes, though protocols implement safeguards to prevent total loss. Most restaking protocols limit the maximum slashing amount per violation (e.g., 5-32% of staked amount). However, if a validator acts dishonestly across multiple AVSs, accumulated slashing could eventually approach 100% of the stake. More realistically, the primary risk is modest slashing—losing a few percentage points of stake—rather than total loss. That said, validators must carefully understand the slashing conditions of any AVS before restaking, as some new services might have poorly-understood or badly-calibrated slashing mechanisms.",
        },
        {
          question: "Why would someone restake if it adds slashing risk?",
          answer:
            "The answer is additional yield. Restaking to services that pay well can easily double or triple your annual staking rewards. If Ethereum staking yields 3-5% and an AVS pays 10-20% APY for restaking to it, the economics are compelling even with some slashing risk. However, this only makes sense if: (1) you understand the slashing conditions thoroughly, (2) the AVS is well-audited and trustworthy, and (3) the additional yield significantly exceeds the slashing risk. Many cautious stakers prefer to hold pure Ethereum stake without restaking. Those seeking yield optimize by restaking to multiple well-vetted AVSs.",
        },
        {
          question: "What is the difference between EigenLayer and Symbiotic?",
          answer:
            "Both are restaking protocols, but they have different designs. EigenLayer was first-to-market on Ethereum and pioneered the concept of Actively Validated Services. It focuses on enabling EVM-native security for AVSs. Symbiotic takes a more modular approach, creating infrastructure for broader cryptographic verification and validation. EigenLayer tends toward larger, more established AVSs; Symbiotic emphasizes flexibility and novel validation mechanisms. From a user perspective, EigenLayer offers deeper integrations with Ethereum and more established AVSs, while Symbiotic offers newer innovations with potentially higher yield but less proven track records.",
        },
        {
          question: "How much can I earn from restaking?",
          answer:
            "This varies dramatically based on the AVSs you restake to and market conditions. Early adoption of high-performing AVSs can yield 20-50% APY or higher, but these returns tend to decrease as more capital enters the restaking market. Mature restaking should eventually settle around 8-15% APY, significantly above Ethereum staking's 3-5% baseline. Additionally, some AVSs offer token incentives (tokenomic rewards) on top of base yield. The challenge is identifying which AVSs will remain profitable and trustworthy long-term. Past high yields are not guaranteed to continue.",
        },
        {
          question: "Is liquid restaking safer than solo restaking?",
          answer:
            "Liquid restaking tokens (LRTs) like eETH provide convenience and liquid staking benefits, but they introduce additional counterparty risk. When you hold an LRT, you depend on the issuer to manage slashing properly, distribute rewards correctly, and maintain financial solvency. An LRT issuer could mismanage restaking, incorrectly calculate slashing, or even misappropriate funds. However, established LRT protocols like EtherFi and Renzo undergo significant auditing and security review. The safety tradeoff is: solo restaking maximizes control but requires technical expertise; liquid restaking is more convenient but introduces counterparty risk. Choose based on your risk tolerance and technical comfort.",
        },
      ]}
      relatedArticles={[
        { title: "What Is Ethereum Staking?", href: "/learn/validator-guide", category: "Learn Crypto" },
        { title: "What Is A Validator?", href: "/learn/validator-guide", category: "Learn Crypto" },
        { title: "What Is Liquid Staking?", href: "/learn/what-is-liquid-staking", category: "Learn Crypto" },
        { title: "What Is DeFi?", href: "/learn/what-is-defi", category: "Learn Crypto" },
      ]}
    >
      <h2 id="what-is-restaking">Understanding Restaking</h2>
      <p>
        Restaking is a fundamentally new blockchain economic primitive that emerges from the maturity of proof-of-stake networks. In traditional staking, validators lock up capital to secure a single blockchain. Ethereum validators stake 32 ETH to secure only the Ethereum network. If they want to secure another blockchain, they must acquire and lock up additional capital separately. Restaking breaks this constraint by enabling the same capital to secure multiple systems simultaneously.
      </p>
      <p>
        The concept is elegant: if you've already staked capital to Ethereum, that capital proves your willingness to lose money if you misbehave. The Ethereum network trusts you because you have 32 ETH at stake. Other systems—sidechains, data availability layers, rollups, or entire new blockchains—need similar security guarantees. Rather than requiring users to stake with them separately, these services can accept your Ethereum stake as proof of your trustworthiness. If you misbehave on their system, they can slash your Ethereum stake, creating economic incentives for honesty.
      </p>
      <p>
        This enables a revolutionary economic development: one pool of capital can back security for dozens of systems simultaneously. The same ETH in a validator's stake can help secure Ethereum Layer 1, multiple Layer 2 rollups, data availability layers, and specialized application chains—all at once. The staker earns yield from each system proportional to the security it needs. This dramatically improves capital efficiency for both stakers (more yield on same capital) and service providers (can access security more cheaply than building their own staking network).
      </p>

      <h2 id="restaking-mechanics">How Restaking Works</h2>
      <p>
        Restaking technically operates through smart contracts that enable slashing on multiple services. When you stake 32 ETH as an Ethereum validator, you're already subject to Ethereum's slashing conditions: if you produce conflicting blocks or fail to participate in consensus, you lose a portion of your stake. Ethereum validators can enter into restaking by granting additional services permission to slash their stake under service-specific conditions.
      </p>
      <p>
        A restaking protocol like EigenLayer acts as the intermediary layer. It manages smart contracts that track which validators have opted into which services (called Actively Validated Services or AVSs). The restaking protocol monitors the behavior of restaked validators across all AVSs. If a validator misbehaves on an AVS—for example, signs an invalid state transition or censors transactions—the protocol detects this and automatically slashes the validator's stake.
      </p>
      <p>
        The mechanics work as follows. First, a validator or liquid staker deposits their staked assets into a restaking contract. They then select which AVSs they want to restake to. This doesn't move their assets; instead, it grants those AVSs the right to slash their stake under defined conditions. The validator's stake now backs security for both Ethereum and the selected AVSs, and they earn rewards from both sources. If the validator misbehaves on an AVS, slashing contracts automatically penalize them. If they behave honestly, they accumulate rewards from all sources.
      </p>
      <p>
        The restaking contract also enables dynamic allocation of stake to different AVSs. Rather than permanently committing stake to specific services, validators can adjust which services they're securing over time. This flexibility is crucial because it allows stakers to concentrate capital on services they trust and rebalance as new services emerge or old ones become less attractive.
      </p>
      <p>
        Crucially, the original assets (ETH) never leave the validator's control. What's being shared is the right to slash, not the assets themselves. This is radically different from traditional multi-chain security models where validators duplicate stake across chains. Restaking enables security reuse without asset duplication—a genuine innovation in blockchain economics.
      </p>

      <h2 id="avs-explained">Actively Validated Services (AVS)</h2>
      <p>
        An Actively Validated Service (AVS) is any service that receives security from restakers. AVSs are the end consumers of restaking security. They're willing to pay for that security because they need cryptographic confirmation that their systems are behaving correctly. AVSs can take many forms: sidechains, data availability layers, rollups, oracle networks, or even entirely new blockchains.
      </p>
      <p>
        Data availability layers represent one major category of AVSs. These services provide a decentralized service that commits to storing transaction data and proving its availability. Rollups and other scaling solutions need to know that transaction data will be permanently available on-chain. Data availability layers like EigenDA (built on EigenLayer) use restakers to cryptographically confirm data is available, enabling rollups to safely scale without managing their own availability committees.
      </p>
      <p>
        Sidechains and application-specific chains represent another category. A sidechain might implement novel features (faster finality, different consensus rules, specialized transaction types) but still wants the security of Ethereum's validator set. Rather than forcing users to acquire and stake separate capital, the sidechain can use restaking to borrow Ethereum's security. Restakers earn sidechain fees in exchange for securing it.
      </p>
      <p>
        Oracle networks and cross-chain bridges also function as AVSs. These services provide critical infrastructure (price feeds, cross-chain transfers) that requires distributed validation. Rather than building their own validator network, they can restake to hire Ethereum validators to validate their services. A decentralized price oracle might offer restakers 8% APY to secure its accuracy; restakers are incentivized to act honestly because misbehavior results in slashing.
      </p>
      <p>
        Rollups and scaling solutions are increasingly becoming AVSs. Early rollups built their own sequencer networks or relied on centralized sequencers. As restaking matures, rollups will likely shift to using restakers as distributed sequencers, improving decentralization and security while reducing operational costs. A rollup might pay restakers a share of its MEV and transaction fees to secure sequencer integrity.
      </p>

      <h2 id="liquid-restaking">Liquid Restaking Tokens</h2>
      <p>
        Liquid staking revolutionized Ethereum staking by issuing liquid receipt tokens (stETH on Lido, rETH on Rocket Pool) that represent staked ETH while remaining transferable and tradeable. Liquid restaking extends this innovation by issuing receipt tokens for restaked assets. A protocol like EtherFi issues eETH when you restake with them; you can trade eETH on secondary markets even while your underlying ETH is locked and earning restaking rewards.
      </p>
      <p>
        Liquid restaking tokens (LRTs) provide several advantages. First, they restore liquidity—you can sell your liquid restaking token and access capital without waiting for unstaking periods. Second, they enable composability—LRTs can be used as collateral in DeFi, enabling unique strategies like using liquid restaking assets as collateral to borrow stablecoins. Third, they simplify restaking—most users lack technical expertise to solo restake; LRTs enable any user to gain restaking exposure by simply holding a token.
      </p>
      <p>
        Major protocols enabling liquid restaking include EtherFi, which issues eETH and pioneates EigenLayer-native liquid restaking. Renzo provides renzo (rezETH) as a liquid restaking token enabling exposure to multiple restaking services. Puffer Finance and others issue their own LRTs. Each protocol implements different strategies: some focus on diversifying across multiple AVSs, others concentrate on carefully vetted high-quality services. LRT token holders benefit from this diversification while introducing counterparty risk—they're trusting the protocol to manage slashing and rewards correctly.
      </p>
      <p>
        LRTs have created a new financial primitive. A LRT itself can be used as collateral in lending protocols (MEV Finance offers MEV-powered lending using LRTs), enabling recursive strategies. A user might acquire eETH, use it as collateral to borrow stablecoins, deploy those stablecoins in yield strategies, and earn multiple yield layers simultaneously. This composability is possible precisely because LRTs maintain liquidity while the underlying assets generate yield.
      </p>

      <h2 id="restaking-protocols">Leading Restaking Protocols</h2>
      <p>
        EigenLayer pioneered restaking on Ethereum, launching in 2024 and immediately becoming one of DeFi's largest protocols. It introduced the foundational concept of Actively Validated Services and created the infrastructure enabling validators and liquid stakers to restake. EigenLayer focuses specifically on Ethereum and EVM-compatible systems, enabling services built on EVM scaling solutions or sidechains to access Ethereum validator security. Its ecosystem has grown to hundreds of AVSs, ranging from established DeFi protocols to novel layer 2 solutions.
      </p>
      <p>
        Symbiotic takes a more modular approach to restaking. Rather than being Ethereum-specific, Symbiotic builds a general framework for restaking across any cryptographic system. This enables validators on Bitcoin, Solana, or other chains to restake their capital. Symbiotic emphasizes flexibility in how slashing conditions are defined and how validators earn rewards, enabling more novel security models. This modularity comes with tradeoffs—less integration with specific chains, but more flexibility for innovation.
      </p>
      <p>
        Karak focuses on making restaking accessible and capital-efficient. It implements optimized slashing mechanisms and enables sophisticated strategies like creating pools where different validators specialize in different services. Karak's approach emphasizes that not all validators should restake to all services; instead, they should specialize based on expertise and risk tolerance. The protocol facilitates this specialization while maintaining simplicity for end users.
      </p>
      <p>
        EtherFi and Renzo are primarily liquid restaking token protocols that build on top of EigenLayer, but they've become independently important. EtherFi, in particular, has created a DAO-governed approach to restaking, with eETH holders voting on which AVSs to restake to and how to manage capital allocation. Puffer Finance similarly combines restaking with DeFi yield farming, enabling complex capital reuse strategies.
      </p>

      <h2 id="restaking-benefits">Benefits of Restaking</h2>
      <p>
        Capital efficiency represents the primary benefit. Rather than requiring entirely separate capital pools to secure different services, restaking enables one pool of capital to back multiple systems. This is economically superior for both stakers (who earn higher yields on the same capital) and service providers (who pay less for security than they would maintaining independent validator networks). This capital efficiency cascades through the entire crypto economy, reducing the total capital required to secure all infrastructure.
      </p>
      <p>
        Enabling new blockchain scaling and application solutions becomes possible through restaking. Data availability layers, optimistic rollups, and other scaling solutions become dramatically more feasible when they can access Ethereum validator security through restaking rather than bootstrapping their own validator network from scratch. This accelerates innovation in blockchain scalability.
      </p>
      <p>
        Validator earnings increase substantially. An Ethereum validator earning 3.5% base rewards could earn an additional 5-15% or more from restaking to well-compensated AVSs, effectively doubling or tripling their total yield. This improved economics makes staking more attractive and increases the total amount of capital securing blockchains.
      </p>
      <p>
        Reducing blockchain fragmentation and centralizing security becomes possible through restaking. Rather than each new blockchain requiring its own validator network (which often leads to centralization because few people acquire sufficient capital), new chains can immediately access thousands of restakers. This improves their security while reducing the incentive for new chains to centralize around a few large validators.
      </p>

      <h2 id="restaking-risks">Risks and Considerations</h2>
      <p>
        Slashing risk is the primary concern. By restaking, validators accept additional slashing conditions beyond Ethereum's. If an AVS has poorly-designed slashing rules or acts maliciously, it could cause significant losses. A validator who restakes to multiple services accumulates slashing risk across all of them. While individual AVS slashing is typically limited (5-32% per violation), multiple violations across multiple services could accumulate to meaningful losses. Validators must carefully evaluate each AVS before restaking.
      </p>
      <p>
        Complexity and technical risk increase dramatically when managing multiple AVS restakes. Different services have different slashing conditions, different reward structures, and different operational requirements. Mistakes in managing this complexity could result in lost funds. The cognitive burden of evaluating and monitoring multiple AVSs is substantial, pushing validators toward liquid restaking tokens—which introduce different risks.
      </p>
      <p>
        Correlated slashing could occur if validators restake to multiple services that fail simultaneously or get exploited at the same time. If a smart contract vulnerability affects multiple AVSs or if there's coordinated misbehavior across services, validators restaking to all of them could face slashing from multiple directions simultaneously. This tail risk is understudied and could represent significant losses during crisis scenarios.
      </p>
      <p>
        Counterparty risk in liquid restaking is substantial. LRT protocols could mismanage slashing, distribute rewards incorrectly, or experience hacks. The early-stage nature of LRT protocols means they have limited operational track records. Users must trust these protocols with their capital, a trust that hasn't been tested through a full market cycle including crashes and crises.
      </p>
      <p>
        Regulatory uncertainty could affect restaking economics. If regulators determine that restaking triggers securities law obligations, taxation implications, or other compliance requirements, the economics could change substantially. Additionally, if AVSs are regulated as financial services, they might only be able to accept restaking from accredited investors, reducing their capital pools and affecting yield.
      </p>

      <h2 id="restaking-future">The Future of Restaking</h2>
      <p>
        The trajectory of restaking suggests it will become a foundational component of blockchain infrastructure. As more AVSs launch and mature, validator yields should stabilize around 8-15% APY (above Ethereum base rewards but below current exceptional yields). This would make restaking the new standard for Ethereum stakers, similar to how liquid staking became standard during the post-Merge era.
      </p>
      <p>
        Cross-chain restaking could expand dramatically. Currently, restaking is concentrated on Ethereum, but protocols like Symbiotic are enabling Bitcoin holders and Solana validators to restake. This could create a unified security market where capital from multiple chains backs services across many chains. A Bitcoin holder could restake their BTC to secure an Ethereum-native service; a Solana validator could secure Ethereum-native data availability.
      </p>
      <p>
        Recursive restaking might emerge as a primitive. Rather than just restaking to AVSs, restakers could restake to services that aggregate and diversify restaking exposure. These meta-restaking protocols would manage exposure to dozens of AVSs, automatically rebalancing to optimize returns and minimize slashing risk. This could create a more professional, institutional approach to restaking.
      </p>
      <p>
        Integration with DeFi could deepen substantially. Rather than LRTs being passive receipt tokens, they could become active primitives in DeFi. LRTs could be collateral in lending protocols, inputs to automated market makers, or components of derivative contracts. This would create complex financial structures built on restaking—simultaneously earning restaking rewards, DeFi yields, and potentially MEV while managing accumulated risk.
      </p>
      <p>
        Ultimately, restaking represents a maturation of blockchain economics. Rather than each network requiring separate security investments, restaking enables security to be treated as a commodity—provided by capital-efficient providers to multiple services simultaneously. This efficiency improvement is profound and likely permanent, making restaking a cornerstone of future blockchain architecture.
      </p>
    </LearnPageLayout>
  );
}
