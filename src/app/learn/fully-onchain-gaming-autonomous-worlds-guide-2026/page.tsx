import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from "@/components/Breadcrumb";
import StructuredData from "@/components/StructuredData";
import BackToTop from "@/components/BackToTop";
import { generateArticleSchema, generateFAQSchema, combineSchemas } from "@/lib/structured-data";
import AuthorAttribution, { getAuthorForSection } from "@/components/AuthorAttribution";


export const metadata: Metadata = {
  title: "Fully Onchain Gaming & Autonomous Worlds Guide 2026 | degen0x",
  description: "Complete guide to fully onchain gaming and autonomous worlds. Learn about MUD, Dojo, World Engine, and the top onchain games reshaping gaming in 2026.",
  keywords: ["onchain gaming", "autonomous worlds", "MUD framework", "Dojo", "World Engine", "blockchain games", "Starknet gaming", "EVM games"],
  openGraph: {
    title: "Fully Onchain Gaming & Autonomous Worlds Guide 2026",
    description: "The complete guide to fully onchain gaming, autonomous worlds, and the frameworks building the future of decentralized gaming.",
    url: "https://degen0x.com/learn/fully-onchain-gaming-autonomous-worlds-guide-2026",
    type: "article",
    publishedTime: "2026-03-25T00:00:00Z",
    modifiedTime: "2026-03-25T00:00:00Z",
    authors: ["degen0x Team"],
    images: [
      {
        url: "https://degen0x.com/og-fully-onchain-gaming-2026.svg",
        width: 1200,
        height: 630,
        alt: "Fully Onchain Gaming & Autonomous Worlds Guide 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fully Onchain Gaming & Autonomous Worlds Guide 2026",
    description: "Master the frameworks, games, and economics of decentralized gaming.",
    images: ["https://degen0x.com/og-fully-onchain-gaming-2026.svg"],
  },
};

const S = {
  bg: "var(--color-bg, #0d1117)",
  surface: "var(--color-surface, #161b22)",
  border: "var(--glass-border, #30363d)",
  text: "var(--color-text, #e6edf3)",
  text2: "var(--color-text-secondary, #8b949e)",
  primary: "#8b5cf6",
  blue: "#58a6ff",
  green: "#3fb950",
  orange: "#f0883e",
  yellow: "#d29922",
};

const articleSchema = generateArticleSchema({
  title: "Fully Onchain Gaming & Autonomous Worlds Guide 2026",
  description: "Complete guide to fully onchain gaming and autonomous worlds. Learn about MUD, Dojo, World Engine, and the top onchain games reshaping gaming in 2026.",
  url: "https://degen0x.com/learn/fully-onchain-gaming-autonomous-worlds-guide-2026",
  datePublished: "2026-03-25T00:00:00Z",
  dateModified: "2026-03-25T00:00:00Z",
  author: "degen0x Team",
  image: "https://degen0x.com/og-fully-onchain-gaming-2026.svg",
  wordCount: 2800,
});

export default function FullyOnchainGamingGuide() {
  const faqs = [
    {
      question: "What makes a game 'fully onchain' vs a regular blockchain game?",
      answer: "A fully onchain game stores both game state AND game logic on the blockchain. Every action—movement, combat, resource gathering, progression—happens in smart contracts enforced by the chain itself. This means the game rules are immutable and can't be changed by developers, and all game data is public and verifiable. Regular blockchain games typically store data offchain (like Unity/Unreal game servers) and only use the chain for asset ownership. Fully onchain games are censorship-resistant and composable, but face scalability challenges."
    },
    {
      question: "Can fully onchain games handle real-time gameplay?",
      answer: "Not yet at scale. Onchain games have 1-10 second block times (minimum latency between actions), making real-time twitch games impossible. However, World Engine's sharded rollup architecture achieves sub-100ms block times and 1000+ TPS, which approaches playable. Most onchain games today are turn-based strategy (like Eternum) or asynchronous (like Dark Forest where you play once per epoch). As infrastructure improves—Starknet, Arbitrum Orbit, World Engine—the playability window will expand."
    },
    {
      question: "What is an autonomous world?",
      answer: "An autonomous world (AW) is a persistent, permissionless, decentralized gaming environment where the world state lives fully onchain. Unlike a single game, an AW is a shared simulation open to any external developer to build on top of. It's like Ethereum for games—the base layer is owned by no one, enforced by cryptography, and anyone can write contracts/games on top. Dojo and MUD are frameworks for building autonomous worlds. The term was introduced by Lattice in 2022 and represents a shift from 'games' to 'worlds.'"
    },
    {
      question: "Which framework should I use to build an onchain game?",
      answer: "It depends on your chain and language preference. For EVM chains (Ethereum, Arbitrum, Optimism), use MUD—it's the most mature ECS-based framework with the strongest developer community. For Starknet, use Dojo, which brings Cairo's proving capabilities and ZK proofs to gaming logic. For maximum scalability and low latency, World Engine on their Gamechain is your best bet, though it's the newest option. If you prioritize ease of use over full decentralization, you can build hybrid games with onchain state anchors and offchain simulation."
    },
    {
      question: "Are onchain games fun or just tech demos?",
      answer: "Both, for now. Early fully onchain games like Dark Forest and Eternum are genuinely engaging strategy games with novel mechanics only possible because the world is decentralized and composable. But they trade real-time action and graphics for deterministic, auditable gameplay. The market is excited because onchain games are exploring new design space—permanent death, true scarcity, player-created economies. As frameworks mature and chains scale, we'll see hybrid games that blend the best of traditional gaming (graphics, latency, mechanics) with onchain ownership and emergent economies."
    },
    {
      question: "How do players earn from fully onchain games?",
      answer: "Through several mechanisms: (1) In-game token rewards—playing earns governance tokens or game tokens tradeable on exchanges. (2) NFT sales—rare in-game assets can be sold to other players onchain, with creator royalties possible. (3) Land/territory control—owning virtual land generates passive yield if other players interact with it. (4) Speculative trading—early access to a game's tokens or NFTs before wider adoption. (5) Play-to-earn—structured reward systems where certain actions earn guaranteed token payouts. The sustainability of earn mechanics depends on new player inflows and external funding—many play-to-earn games have collapsed when growth stalled."
    }
  ];

  const frameworks = [
    {
      name: "MUD",
      chain: "EVM (Ethereum, Arbitrum, etc.)",
      language: "TypeScript/Solidity",
      architecture: "Entity Component System (ECS)",
      performance: "~2-3 TPS, block time limited",
      notableGames: "Primodium, OPCraft, Dark Frontier (initial)",
      pros: ["Mature ecosystem", "Strong TypeScript support", "Largest developer community"],
      cons: ["Limited to EVM scalability", "Not ZK-native"]
    },
    {
      name: "Dojo",
      chain: "Starknet",
      language: "Cairo",
      architecture: "ECS + Provable (ZK)",
      performance: "~100 TPS, Cairo proving",
      notableGames: "Eternum (Realms.World), Paved, Loot Underworld",
      pros: ["ZK proofs enable privacy", "Cairo computation efficiency", "Starknet scaling"],
      cons: ["Smaller developer base", "Cairo learning curve", "Starknet liquidity"]
    },
    {
      name: "World Engine",
      chain: "Gamechain (EVM-compatible)",
      language: "Go (Cardinal runtime)",
      architecture: "Sharded rollup (game-specific)",
      performance: "1000+ TPS, <100ms blocks",
      notableGames: "Dark Frontier (Argus)",
      pros: ["Highest scalability", "Sub-100ms latency", "Purpose-built for games"],
      cons: ["Newest (limited track record)", "Centralized initially", "Small ecosystem"]
    }
  ];

  const games = [
    {
      title: "Dark Forest",
      description: "A ZK-based space exploration game where you discover planets and engage in combat. Pioneer of fully onchain gaming design.",
      chain: "Ethereum (xDai initially)",
      framework: "Custom (ZK-native)",
      playStyle: "Turn-based strategy, async warfare"
    },
    {
      title: "Primodium",
      description: "Factory automation onchain. Build production chains, trade resources, engage in economics-driven gameplay on MUD.",
      chain: "Arbitrum",
      framework: "MUD",
      playStyle: "Base-building, resource management"
    },
    {
      title: "Eternum (Realms.World)",
      description: "A massive strategy game on Starknet using Dojo. Control realms, recruit armies, engage in diplomacy and warfare with thousands of players.",
      chain: "Starknet",
      framework: "Dojo",
      playStyle: "MMO strategy, large-scale battles"
    },
    {
      title: "Dark Frontier",
      description: "A sci-fi exploration game built on World Engine by Argus Labs. Processed 700K+ player transactions in one week during early access.",
      chain: "World Engine",
      framework: "World Engine (Cardinal)",
      playStyle: "Space exploration, base building, PvP"
    },
    {
      title: "EVE Frontier",
      description: "CCP Games' onchain spinoff of EVE Online with $40M funding. Launching late 2026, bringing AAA game quality to onchain worlds.",
      chain: "TBD (likely Arbitrum or custom)",
      framework: "TBD",
      playStyle: "MMO sandbox, spaceship PvP, economy"
    }
  ];

  const faqSchema = generateFAQSchema(faqs);
  const structuredData = combineSchemas(articleSchema, faqSchema);

  return (
    <div style={{ backgroundColor: S.bg, color: S.text, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <StructuredData data={structuredData} />
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px 20px' }}>
        <Breadcrumb items={[
          { label: "Home", href: "/" },
          { label: "Learn", href: "/learn" },
          { label: "Fully Onchain Gaming 2026" },
        ]} />

        {/* Header */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px', flexWrap: 'wrap' }}>
            <span style={{ backgroundColor: S.primary, color: '#fff', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>Gaming</span>
            <span style={{ backgroundColor: S.green, color: '#0d1117', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>Web3</span>
            <span style={{ backgroundColor: S.yellow, color: '#0d1117', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' }}>Intermediate</span>
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, lineHeight: 1.15, marginBottom: '16px', background: 'linear-gradient(135deg, #8b5cf6, #3fb950)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Fully Onchain Gaming & Autonomous Worlds Guide 2026
          </h1>
          <p style={{ color: S.text2, fontSize: '17px', lineHeight: 1.7, marginBottom: '8px' }}>
            The complete guide to fully onchain games and autonomous worlds. Master MUD, Dojo, and World Engine—the frameworks reshaping game development in 2026. From turn-based strategy to real-time action, discover how games are becoming decentralized, composable, and permanently playable.
          </p>
          <div style={{ marginTop: '12px', fontSize: '13px', color: S.text2 }}>Updated March 2026 · 11 min read</div>
        </div>

        <AuthorAttribution
          author="DegenSensei"
          role="Content Lead"
          publishedDate="2026-03-25"
          updatedDate="2026-03-25"
          readingTime={7}
          section="learn"
        />


        {/* Table of Contents */}
        <nav style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '20px', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '14px', fontWeight: 700, marginBottom: '12px', color: S.blue }}>Table of Contents</h2>
          <ol style={{ paddingLeft: '20px', color: S.text2, fontSize: '14px', lineHeight: 2.2 }}>
            <li><a href="#what-are-focg" style={{ color: S.blue, textDecoration: 'none' }}>What Are Fully Onchain Games?</a></li>
            <li><a href="#autonomous-worlds" style={{ color: S.blue, textDecoration: 'none' }}>Autonomous Worlds Explained</a></li>
            <li><a href="#why-it-matters" style={{ color: S.blue, textDecoration: 'none' }}>Why Fully Onchain Gaming Matters</a></li>
            <li><a href="#mud-framework" style={{ color: S.blue, textDecoration: 'none' }}>MUD Framework — EVM Game Engine</a></li>
            <li><a href="#dojo-engine" style={{ color: S.blue, textDecoration: 'none' }}>Dojo Engine — Provable Games on Starknet</a></li>
            <li><a href="#world-engine" style={{ color: S.blue, textDecoration: 'none' }}>World Engine — Gamechain Architecture</a></li>
            <li><a href="#framework-comparison" style={{ color: S.blue, textDecoration: 'none' }}>Framework Comparison</a></li>
            <li><a href="#top-games" style={{ color: S.blue, textDecoration: 'none' }}>Top Fully Onchain Games to Watch</a></li>
            <li><a href="#challenges" style={{ color: S.blue, textDecoration: 'none' }}>Challenges & Limitations</a></li>
            <li><a href="#faq" style={{ color: S.blue, textDecoration: 'none' }}>FAQ</a></li>
          </ol>
        </nav>

        {/* Section 1 */}
        <section id="what-are-focg" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: S.text }}>1. What Are Fully Onchain Games?</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            A fully onchain game (FOCG) is a game where both the <strong>game state and game logic</strong> live entirely on the blockchain. Every action—character movement, resource gathering, combat calculations, inventory changes—is recorded and executed as transactions on-chain. The rules of the game are enforced by smart contracts, making them immutable and auditable. The entire game world is public, transparent, and tamper-proof.
          </p>
        {/* editorial-voice */}
        <div style={{ background: '#1a1625', border: '1px solid #2d2254', borderRadius: 10, padding: '20px 24px', marginTop: 32, marginBottom: 32 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <span style={{ fontSize: 18 }}>💡</span>
            <strong style={{ color: '#a78bfa', fontSize: 15 }}>Why This Matters</strong>
          </div>
          <p style={{ fontSize: 14, color: '#c9d1d9', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            Understanding this concept is a prerequisite for making informed decisions in DeFi. Most losses in crypto come from misunderstanding the fundamentals.
          </p>
        </div>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            This differs fundamentally from traditional blockchain games (like early NFT games), where the game logic runs on centralized servers and only assets are tokenized onchain. In a FOCG, there is no central server dictating game rules. The blockchain itself is the game engine.
          </p>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: S.primary, marginBottom: '10px' }}>🎮 Core Properties of Fully Onchain Games</h3>
            <ul style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
              <li><strong>Decentralized Rules:</strong> Game logic is enforced by smart contracts, not by developers. Rules cannot be changed retroactively.</li>
              <li><strong>True Ownership:</strong> In-game assets are NFTs with real ownership. You can transfer, sell, or use them outside the game.</li>
              <li><strong>Public & Auditable:</strong> All game state is onchain and readable by anyone. No hidden server-side calculations.</li>
              <li><strong>Composable:</strong> External developers can build on top of the game world—creating new layers, quests, or economies without permission.</li>
              <li><strong>Permanent:</strong> Once deployed, the game cannot be shut down by developers. The world persists onchain forever (unless self-destructed).</li>
            </ul>
          </div>

          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            This architecture solves several problems in traditional gaming: censorship resistance (developers can't ban players unfairly), scarcity assurance (in-game items are truly scarce, not infinite), and composability (third-party developers can extend the game). But it also introduces constraints: latency (blockchain block times), throughput (transactions per second), and determinism (game logic must be computable onchain).
          </p>
        </section>

        {/* Section 2 */}
        <section id="autonomous-worlds" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: S.text }}>2. Autonomous Worlds Explained</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            An autonomous world (AW) is a next-level abstraction of fully onchain games. Where a FOCG is a single game, an AW is an entire <strong>persistent, permissionless, decentralized simulation</strong> that anyone can build games, apps, or experiences on top of.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            Think of Ethereum: the base layer is a state machine (accounts, balances, code) that enforces rules (no double-spending, replay protection, gas costs). Anyone can deploy smart contracts on top—creating DeFi protocols, NFT collections, DAOs. An autonomous world applies this philosophy to gaming: the base layer is a shared world simulation (physics, time, entities, relationships), and anyone can build games on top.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The term "autonomous world" was coined by <strong>Lattice in 2022</strong> and has become a guiding vision for the industry. Rather than isolated games, developers are building primitives and worlds that multiple games can plug into. Dojo (on Starknet) and MUD (on EVM) are the primary frameworks for building autonomous worlds today.
          </p>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: S.green, marginBottom: '10px' }}>🌍 AW vs Single Game</h3>
            <div style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.7 }}>
              <p><strong>Single Fully Onchain Game:</strong> A self-contained game world. Example: Eternum is a strategy game where you control realms and armies. The game rules are specific to Eternum.</p>
              <p><strong>Autonomous World:</strong> A shared simulation where multiple games exist. Example: A hypothetical AW might have a base layer with physics, entities, and time. One game layer handles combat, another handles trading, another handles exploration—all reading and writing to the shared state.</p>
            </div>
          </div>

          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            Autonomous worlds are still experimental. Current implementations like Dojo blur the line between AW and single-game engine. But the vision is clear: many-player, many-game universes running onchain, where the base layer is owned by the community, not a company.
          </p>
        </section>

        {/* Section 3 */}
        <section id="why-it-matters" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: S.text }}>3. Why Fully Onchain Gaming Matters</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The shift toward fully onchain gaming represents a fundamental change in how games are built and owned. Here's why it matters:
          </p>

          <div style={{ display: 'grid', gap: '16px', marginBottom: '20px' }}>
            {[
              { title: 'Player Ownership & Control', color: S.green, desc: 'Players truly own their in-game assets as NFTs. No developer can arbitrarily wipe your account, change rules retroactively, or shut down the game. The game belongs to the players and the chain.' },
              { title: 'Composability & Extension', color: S.blue, desc: 'Third-party developers can build on the game world without permission. New gameplay layers, economies, or spin-offs can be created independently. This creates a network effect—more games enhance the base world.' },
              { title: 'Transparency & Trust', color: S.yellow, desc: 'All game logic and state is onchain and auditable. No hidden server-side calculations, no unfair balance changes, no pay-to-win mechanics hiding behind black boxes. Players know the rules.' },
              { title: 'Economic Opportunity', color: S.orange, desc: 'Token incentives align developer and player interests. Players can earn tokens, which creates real economic value. This drives engagement and attracts AAA gaming studios (CCP Games invested $40M in EVE Frontier).' },
            ].map((item, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${item.color}40`, borderRadius: '12px', padding: '20px' }}>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: item.color, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: S.blue, marginBottom: '10px' }}>📊 Market Context</h3>
            <p style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.7 }}>
              The blockchain gaming market is projected to reach <strong>$65 billion by 2027</strong>. While most gaming revenue still comes from traditional games, the interest from AAA studios is exploding. CCP Games (makers of EVE Online) secured $40M in funding for EVE Frontier. Ubisoft and other major publishers are quietly exploring blockchain integration. The infrastructure is improving rapidly—from MUD's ECS model to Dojo's ZK capabilities to World Engine's sharded rollups. We're still in the early innings.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section id="mud-framework" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: S.text }}>4. MUD Framework — EVM Game Engine</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>MUD</strong> (Multi-User Dungeon) is the leading game engine for EVM-based onchain games. Built by <strong>Lattice (0xPARC)</strong>, it abstracts away the complexity of onchain state management, making it possible to build fully decentralized games without deep blockchain expertise.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            MUD uses an <strong>Entity Component System (ECS)</strong> architecture, a paradigm common in game engines like Unity and Godot. Instead of monolithic game objects, the world is composed of independent entities, each with components (data) and systems (logic). This modular approach makes it easy to upgrade game systems, add new features, and keep state organized.
          </p>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: S.primary, marginBottom: '10px' }}>⚙️ MUD Architecture</h3>
            <ul style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
              <li><strong>Onchain Contracts:</strong> Written in Solidity, they define game state (tables) and logic (systems).</li>
              <li><strong>Client Library:</strong> TypeScript SDK that syncs onchain state to the browser. Automatically listens to events and updates local cache.</li>
              <li><strong>Deterministic State:</strong> All state transitions are deterministic—the same input always produces the same output, enabling auditing and replays.</li>
              <li><strong>Upgradeable Systems:</strong> Game logic (systems) can be upgraded without losing state. Tables (data) persist across upgrades.</li>
            </ul>
          </div>

          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            MUD's strength is accessibility. It works on any EVM chain (Ethereum, Arbitrum, Optimism, Polygon). It has the largest developer community, the most tutorials, and the most battle-tested games. <strong>Primodium</strong> (a factory automation game) and <strong>OPCraft</strong> are among the most successful MUD games.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The downside: MUD games are limited by EVM throughput. Ethereum mainnet does ~12 TPS, Arbitrum does ~100 TPS. For real-time or high-volume games, you need to deploy on Layer 2 chains or use off-chain simulation with periodic on-chain commits.
          </p>
        </section>

        {/* Section 5 */}
        <section id="dojo-engine" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: S.text }}>5. Dojo Engine — Provable Games on Starknet</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Dojo</strong> is a game engine inspired by MUD but built specifically for <strong>Starknet</strong>, a ZK-rollup on Ethereum. Where MUD prioritizes accessibility, Dojo prioritizes <strong>provability</strong>—the ability to prove game logic is correct using zero-knowledge cryptography.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            Games built with Dojo are written in <strong>Cairo</strong>, Starknet's native language. Cairo is designed for writing provable programs—code that can generate cryptographic proofs of its execution. This enables novel game mechanics:
          </p>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: S.green, marginBottom: '10px' }}>🔐 Dojo's Provable Advantages</h3>
            <ul style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
              <li><strong>Private Game State:</strong> Use ZK proofs to reveal only what players need to see. Hidden information in strategy games doesn't need to be public.</li>
              <li><strong>Verifiable Computation:</strong> Complex game logic can be proven correct without re-executing on-chain.</li>
              <li><strong>Privacy & Scalability:</strong> Combine privacy with onchain settlement. Players can prove they completed a quest without revealing the path they took.</li>
            </ul>
          </div>

          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Eternum</strong> (also called Realms.World) is the flagship Dojo game—a massive strategy game where thousands of players control realms, raise armies, and wage wars. It demonstrates that Dojo can handle complex, large-scale gameplay on Starknet. Dojo is open-source and actively developed, with growing community support.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The tradeoff: Cairo has a learning curve, and Starknet's liquidity ecosystem is smaller than Ethereum. But for developers betting on Starknet and provable games, Dojo is the best option.
          </p>
        </section>

        {/* Section 6 */}
        <section id="world-engine" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: S.text }}>6. World Engine — Gamechain Architecture</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>World Engine</strong>, built by <strong>Argus Labs</strong>, takes a radically different approach. Instead of deploying games on existing blockchains, it provides a purpose-built Gamechain—a novel sharded rollup architecture designed from the ground up for games.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The key innovation is <strong>horizontal scalability</strong>. Traditional blockchains process transactions sequentially in a single chain. World Engine shards the game world—different regions or entities are processed in parallel shards, then coordinated by a router. This enables throughput scaling to <strong>1000s of TPS</strong> with <strong>sub-100ms block times</strong>, approaching playable latency.
          </p>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '20px', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: S.orange, marginBottom: '10px' }}>🚀 World Engine's Architecture</h3>
            <ul style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.8, paddingLeft: '20px', margin: 0 }}>
              <li><strong>Cardinal Engine:</strong> Written in Go, the game runtime is loop-driven (not event-driven), making it more like traditional game engines.</li>
              <li><strong>Sharded Rollup:</strong> Game world is partitioned into shards. Shard 1 handles players A-M, Shard 2 handles N-Z, etc. Each shard processes transactions in parallel.</li>
              <li><strong>Shard Router:</strong> A precompile that coordinates cross-shard transactions and ensures consistency.</li>
              <li><strong>EVM Compatibility:</strong> Smart contracts can interop with the game—DeFi protocols, token bridges, external logic.</li>
            </ul>
          </div>

          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            <strong>Dark Frontier</strong>, the first major game on World Engine, processed <strong>700K+ player transactions in a single week</strong> during early access. This is proof that the architecture works at scale.
          </p>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            The trade-off: World Engine is the newest framework, so it's unproven long-term. It's initially more centralized (Argus Labs runs the sequencers), though decentralization is on the roadmap. But for developers who need high throughput and low latency, it's the best option today.
          </p>
        </section>

        {/* Section 7 - Framework Comparison */}
        <section id="framework-comparison" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: S.text }}>7. Framework Comparison Table</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
            Here's a side-by-side comparison of the three major onchain game frameworks:
          </p>

          <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px', minWidth: '900px' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #30363d' }}>
                  <th style={{ padding: '12px', textAlign: 'left', color: S.blue, fontWeight: 600 }}>Framework</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: S.blue, fontWeight: 600 }}>Chain</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: S.blue, fontWeight: 600 }}>Language</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: S.blue, fontWeight: 600 }}>Architecture</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: S.blue, fontWeight: 600 }}>Performance</th>
                  <th style={{ padding: '12px', textAlign: 'left', color: S.blue, fontWeight: 600 }}>Notable Games</th>
                </tr>
              </thead>
              <tbody>
                {frameworks.map((f, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #21262d' }}>
                    <td style={{ padding: '12px', color: '#e6edf3', fontWeight: 600 }}>{f.name}</td>
                    <td style={{ padding: '12px', color: '#c9d1d9' }}>{f.chain}</td>
                    <td style={{ padding: '12px', color: '#c9d1d9' }}>{f.language}</td>
                    <td style={{ padding: '12px', color: '#c9d1d9' }}>{f.architecture}</td>
                    <td style={{ padding: '12px', color: S.green, fontWeight: 600 }}>{f.performance}</td>
                    <td style={{ padding: '12px', color: '#c9d1d9' }}>{f.notableGames}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ display: 'grid', gap: '16px' }}>
            {frameworks.map((f, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '16px' }}>
                <h3 style={{ fontSize: '14px', fontWeight: 700, color: S.blue, marginBottom: '10px' }}>{f.name} Summary</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', fontSize: '13px', color: '#c9d1d9' }}>
                  <div>
                    <strong style={{ color: S.green }}>Pros:</strong>
                    <ul style={{ paddingLeft: '16px', margin: '6px 0', listStyle: 'none' }}>
                      {f.pros.map((pro, j) => <li key={j}>✓ {pro}</li>)}
                    </ul>
                  </div>
                  <div>
                    <strong style={{ color: S.orange }}>Cons:</strong>
                    <ul style={{ paddingLeft: '16px', margin: '6px 0', listStyle: 'none' }}>
                      {f.cons.map((con, j) => <li key={j}>✗ {con}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8 */}
        <section id="top-games" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: S.text }}>8. Top Fully Onchain Games to Watch</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '20px' }}>
            Here are the most significant fully onchain games and projects shaping the industry:
          </p>

          <div style={{ display: 'grid', gap: '16px' }}>
            {games.map((game, i) => (
              <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: S.primary, margin: 0 }}>{game.title}</h3>
                  <span style={{ fontSize: '12px', color: S.text2, background: S.bg, padding: '4px 8px', borderRadius: '6px' }}>{game.chain}</span>
                </div>
                <p style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.7, marginBottom: '10px' }}>{game.description}</p>
                <div style={{ fontSize: '13px', color: S.text2, display: 'grid', gap: '4px' }}>
                  <div><strong>Framework:</strong> {game.framework}</div>
                  <div><strong>Play Style:</strong> {game.playStyle}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 9 */}
        <section id="challenges" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '16px', color: S.text }}>9. Challenges & Limitations</h2>
          <p style={{ color: '#c9d1d9', fontSize: '15px', lineHeight: 1.8, marginBottom: '16px' }}>
            Fully onchain gaming is powerful but faces real constraints. Understanding them is crucial for both developers and players.
          </p>

          <div style={{ background: S.surface, border: `1px solid #f8514940`, borderRadius: '12px', padding: '24px', marginBottom: '20px' }}>
            <div style={{ display: 'grid', gap: '20px' }}>
              {[
                { title: 'Latency & Block Time', desc: 'Every action requires a blockchain transaction. Ethereum blocks every ~12 seconds, Arbitrum every ~0.2 seconds, World Engine every ~0.1 seconds. This rules out twitch-based, sub-100ms gameplay. Real-time FPS games are not possible yet.' },
                { title: 'Gas Costs & Throughput', desc: 'Popular onchain games can become expensive to play if gas fees spike. Every transaction costs money. This creates friction for casual players and incentivizes off-chain simulation with periodic settlements.' },
                { title: 'State Explosion', desc: 'As games grow, the amount of onchain data grows. Keeping every player\'s inventory, every NPC state, every map tile onchain can bloat the blockchain. Developers need to be judicious about what data is truly onchain vs cached offchain.' },
                { title: 'Smart Contract Bugs', desc: 'Game logic bugs can be catastrophic. Unlike traditional games where a patch fixes an issue, onchain games cannot easily roll back. Every bug is permanent unless the contract is upgradeable.' },
                { title: 'Scalability Trilemma', desc: 'Games need decentralization, security, and scalability. Today, you can have 2 out of 3. World Engine sacrifices some decentralization (initially) for throughput. Dojo sacrifices simplicity for privacy. It\'s a trade-off.' },
                { title: 'UI/UX Friction', desc: 'Playing a game requires understanding wallets, gas, transaction signing. This is orders of magnitude more friction than pressing "Play" on Steam. Mass adoption requires significant UX improvements.' },
              ].map((item, i) => (
                <div key={i}>
                  <h4 style={{ color: '#f85149', fontSize: '14px', fontWeight: 600, marginBottom: '6px' }}>⚠️ {item.title}</h4>
                  <p style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '20px' }}>
            <h3 style={{ fontSize: '15px', fontWeight: 700, color: S.blue, marginBottom: '10px' }}>🔮 The Future</h3>
            <p style={{ color: '#c9d1d9', fontSize: '14px', lineHeight: 1.7 }}>
              These challenges are not insurmountable. Advances in sequencer technology (like World Engine's sharding), client-side prediction, and rollup scaling are rapidly improving playability. We're likely to see hybrid games emerge—core gameplay onchain, with rich graphics and client-side prediction offchain. As the infrastructure matures and UX improves, onchain games will become as frictionless as traditional games while retaining decentralization benefits.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '26px', fontWeight: 700, marginBottom: '24px', color: S.text }}>Frequently Asked Questions</h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '20px', marginBottom: '12px' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: S.text, marginBottom: '10px' }}>{faq.question}</h3>
              <p style={{ color: S.text2, fontSize: '14px', lineHeight: 1.7 }}>{faq.answer}</p>
            </div>
          ))}
        </section>

        {/* Related Articles */}
        <section style={{ marginBottom: '48px' }}>
          <h2 style={{ fontSize: '22px', fontWeight: 700, marginBottom: '16px', color: S.text }}>Related Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {[
              { title: 'Zero Knowledge Proofs Guide', href: '/learn/zero-knowledge-proofs' },
              { title: 'Modular Blockchains Guide', href: '/learn/modular-blockchains-guide' },
              { title: 'Account Abstraction Explained', href: '/learn/account-abstraction' },
              { title: 'AI Crypto Agents Guide', href: '/learn/ai-crypto-agents-guide' },
              { title: 'Gas Tracker & Tools', href: '/tools/gas-tracker' },
              { title: 'Starknet Comprehensive Guide', href: '/learn/starknet-guide-2026' },
            ].map((article, i) => (
              <Link key={i} href={article.href} style={{ display: 'block', padding: '16px', background: S.surface, border: `1px solid ${S.border}`, borderRadius: '10px', color: S.blue, fontSize: '14px', fontWeight: 600, textDecoration: 'none' }}>
                → {article.title}
              </Link>
            ))}
          </div>
        </section>

        {/* Disclaimer */}
        <div style={{ background: S.surface, border: `1px solid ${S.border}`, borderRadius: '12px', padding: '16px', marginTop: '32px' }}>
          <p style={{ color: S.text2, fontSize: '12px', lineHeight: 1.6 }}>
            ⚠️ This guide is for informational purposes only. It is not financial advice. Onchain games are experimental. Smart contract bugs, market volatility, and regulatory changes pose risks. Always do your own research before playing or investing in onchain games. Many early projects have failed or been exploited.
          </p>
        </div>
      </div>
      <BackToTop />
    </div>
  );
}
