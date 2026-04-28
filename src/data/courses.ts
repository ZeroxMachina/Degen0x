// degen0x — Structured Courses with XP & Progress Tracking
// Mission: Onboard the next 1B users to crypto through gamified learning

export type CourseLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';
export type CourseTheme = 'fundamentals' | 'defi' | 'nft' | 'trading' | 'security' | 'web3career' | 'layer2' | 'solana';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface CourseLesson {
  id: string;
  title: string;
  description: string;
  xp: number;
  estimatedMinutes: number;
  guideSlug?: string; // links to /learn/[slug]
  quiz?: QuizQuestion[];
  type: 'read' | 'quiz' | 'video';
}

export interface CourseChapter {
  id: string;
  title: string;
  description: string;
  lessons: CourseLesson[];
  totalXP: number;
}

export interface Course {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  emoji: string;
  level: CourseLevel;
  theme: CourseTheme;
  totalXP: number;
  estimatedHours: number;
  chapters: CourseChapter[];
  prerequisites?: string[]; // course slugs
  badgeEmoji: string;
  badgeName: string;
  color: string;
  enrollmentCount: number;
  rating: number;
  featured?: boolean;
}

export const COURSES: Course[] = [
  // ─── COURSE 1: Crypto 101 ──────────────────────────────────────────────────
  {
    slug: 'crypto-101',
    title: 'Crypto 101',
    subtitle: 'Complete Beginner\'s Guide to Cryptocurrency',
    description: 'Start from zero and learn everything you need to know about cryptocurrency, blockchain technology, Bitcoin, Ethereum, and how to safely get started. No prior knowledge required.',
    emoji: '🎓',
    level: 'beginner',
    theme: 'fundamentals',
    totalXP: 500,
    estimatedHours: 3,
    badgeEmoji: '🏅',
    badgeName: 'Crypto Initiate',
    color: '#6366f1',
    enrollmentCount: 48920,
    rating: 4.9,
    featured: true,
    chapters: [
      {
        id: 'c1-ch1',
        title: 'What Is Cryptocurrency?',
        description: 'Understand the basics of digital money and why it matters',
        totalXP: 100,
        lessons: [
          {
            id: 'c1-l1',
            title: 'A Brief History of Money',
            description: 'From barter to gold to digital currency — why crypto exists',
            xp: 20,
            estimatedMinutes: 8,
            type: 'read',
            guideSlug: 'what-is-cryptocurrency',
          },
          {
            id: 'c1-l2',
            title: 'What Is Bitcoin?',
            description: 'The world\'s first cryptocurrency and digital gold',
            xp: 20,
            estimatedMinutes: 10,
            type: 'read',
            guideSlug: 'what-is-bitcoin',
          },
          {
            id: 'c1-l3',
            title: 'How Does Cryptocurrency Work?',
            description: 'Keys, wallets, and transactions explained simply',
            xp: 25,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c1-quiz1',
            title: 'Chapter 1 Quiz',
            description: 'Test your knowledge of crypto basics',
            xp: 35,
            estimatedMinutes: 5,
            type: 'quiz',
            quiz: [
              {
                id: 'q1',
                question: 'What was the first cryptocurrency ever created?',
                options: ['Ethereum', 'Bitcoin', 'Litecoin', 'Ripple'],
                correctIndex: 1,
                explanation: 'Bitcoin was created in 2009 by the pseudonymous Satoshi Nakamoto and is considered the first decentralized cryptocurrency.',
              },
              {
                id: 'q2',
                question: 'What is the maximum supply of Bitcoin?',
                options: ['10 million', '100 million', '21 million', 'Unlimited'],
                correctIndex: 2,
                explanation: 'Bitcoin has a hard-coded maximum supply of 21 million BTC. This scarcity is one of the key features that makes it a store of value.',
              },
              {
                id: 'q3',
                question: 'What do you need to receive cryptocurrency?',
                options: ['A bank account', 'A wallet address', 'A credit card', 'Government ID'],
                correctIndex: 1,
                explanation: 'To receive cryptocurrency, you only need a wallet address — a string of letters and numbers. No bank account or ID is required.',
              },
            ],
          },
        ],
      },
      {
        id: 'c1-ch2',
        title: 'Blockchain Fundamentals',
        description: 'The technology powering crypto — explained simply',
        totalXP: 120,
        lessons: [
          {
            id: 'c1-l4',
            title: 'What Is Blockchain?',
            description: 'Distributed ledgers, nodes, and how data is stored permanently',
            xp: 25,
            estimatedMinutes: 12,
            type: 'read',
            guideSlug: 'what-is-blockchain',
          },
          {
            id: 'c1-l5',
            title: 'Proof of Work vs. Proof of Stake',
            description: 'How blockchains reach consensus and validate transactions',
            xp: 30,
            estimatedMinutes: 10,
            type: 'read',
          },
          {
            id: 'c1-l6',
            title: 'What Are Smart Contracts?',
            description: 'Self-executing code that powers DeFi, NFTs, and more',
            xp: 30,
            estimatedMinutes: 8,
            type: 'read',
          },
          {
            id: 'c1-quiz2',
            title: 'Chapter 2 Quiz',
            description: 'Blockchain concepts test',
            xp: 35,
            estimatedMinutes: 5,
            type: 'quiz',
            quiz: [
              {
                id: 'q4',
                question: 'In a blockchain, each new block contains…',
                options: ['Only new transactions', 'A hash of the previous block', 'A list of all users', 'Random data'],
                correctIndex: 1,
                explanation: 'Each block contains a cryptographic hash of the previous block, which is what "chains" the blocks together and makes the history tamper-proof.',
              },
              {
                id: 'q5',
                question: 'Ethereum moved from Proof of Work to Proof of Stake in…',
                options: ['2020', '2021', '2022', '2023'],
                correctIndex: 2,
                explanation: 'Ethereum completed "The Merge" in September 2022, transitioning from energy-intensive Proof of Work to the more efficient Proof of Stake.',
              },
            ],
          },
        ],
      },
      {
        id: 'c1-ch3',
        title: 'Getting Started Safely',
        description: 'Wallets, exchanges, and staying secure',
        totalXP: 130,
        lessons: [
          {
            id: 'c1-l7',
            title: 'Crypto Wallets Explained',
            description: 'Custodial vs non-custodial, hot vs cold — choosing the right wallet',
            xp: 25,
            estimatedMinutes: 10,
            type: 'read',
          },
          {
            id: 'c1-l8',
            title: 'How to Buy Your First Crypto',
            description: 'CEX vs DEX, KYC, and your first purchase step-by-step',
            xp: 30,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c1-l9',
            title: 'Crypto Security Masterclass',
            description: 'Seed phrases, phishing, scams — keeping your assets safe',
            xp: 35,
            estimatedMinutes: 15,
            type: 'read',
            guideSlug: 'crypto-security-masterclass-2026',
          },
          {
            id: 'c1-quiz3',
            title: 'Final Exam — Crypto 101',
            description: 'Complete the course and earn your badge',
            xp: 40,
            estimatedMinutes: 8,
            type: 'quiz',
            quiz: [
              {
                id: 'q6',
                question: 'What is a seed phrase?',
                options: [
                  'Your exchange password',
                  'A 12-24 word backup that controls your entire wallet',
                  'Your wallet address',
                  'A type of cryptocurrency',
                ],
                correctIndex: 1,
                explanation: 'A seed phrase (recovery phrase) is a human-readable backup of your private key. Anyone with your seed phrase has full control of your funds — never share it.',
              },
              {
                id: 'q7',
                question: 'The safest way to store large amounts of crypto long-term is…',
                options: ['On a centralized exchange', 'In a hot wallet app', 'On a hardware (cold) wallet', 'In a screenshot'],
                correctIndex: 2,
                explanation: 'Hardware wallets (like Ledger or Trezor) store your private keys offline, making them immune to online hacks. Essential for significant holdings.',
              },
            ],
          },
        ],
      },
      {
        id: 'c1-ch4',
        title: 'Bonus: Crypto Glossary',
        description: 'Master the language of crypto',
        totalXP: 150,
        lessons: [
          {
            id: 'c1-l10',
            title: 'A-Z Crypto Glossary',
            description: '100+ terms every crypto user must know: HODL, DYOR, FUD, APY, and more',
            xp: 50,
            estimatedMinutes: 20,
            type: 'read',
            guideSlug: 'crypto-glossary',
          },
          {
            id: 'c1-l11',
            title: 'Glossary Quiz — Are You Degen Enough?',
            description: 'Test your crypto vocabulary',
            xp: 100,
            estimatedMinutes: 10,
            type: 'quiz',
            quiz: [
              {
                id: 'q8',
                question: 'What does "DYOR" stand for?',
                options: ['Do Your Own Research', 'Deposit Your Own Riches', 'Don\'t Yield On Rewards', 'Determine Your Own Risk'],
                correctIndex: 0,
                explanation: 'DYOR (Do Your Own Research) is a critical mantra in crypto — always verify information independently before making investment decisions.',
              },
              {
                id: 'q9',
                question: 'What is a "rug pull" in crypto?',
                options: ['A carpet design NFT', 'When developers abandon a project and steal funds', 'A type of DeFi strategy', 'A market correction'],
                correctIndex: 1,
                explanation: 'A rug pull is when project developers suddenly withdraw all liquidity or funds and disappear, leaving investors with worthless tokens. A common scam in DeFi.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── COURSE 2: DeFi Masterclass ────────────────────────────────────────────
  {
    slug: 'defi-masterclass',
    title: 'DeFi Masterclass',
    subtitle: 'From Zero to DeFi Power User',
    description: 'Master decentralized finance: lending, borrowing, yield farming, liquidity providing, DEXes, and advanced DeFi strategies. Earn real yield with confidence.',
    emoji: '🏛️',
    level: 'intermediate',
    theme: 'defi',
    totalXP: 800,
    estimatedHours: 6,
    prerequisites: ['crypto-101'],
    badgeEmoji: '🏆',
    badgeName: 'DeFi Wizard',
    color: '#06b6d4',
    enrollmentCount: 23140,
    rating: 4.8,
    featured: true,
    chapters: [
      {
        id: 'c2-ch1',
        title: 'DeFi Foundations',
        description: 'Understand the DeFi ecosystem from first principles',
        totalXP: 150,
        lessons: [
          {
            id: 'c2-l1',
            title: 'What Is DeFi?',
            description: 'Decentralized finance vs. traditional finance — why it matters',
            xp: 30,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c2-l2',
            title: 'Automated Market Makers (AMMs)',
            description: 'How Uniswap and Curve maintain liquidity without order books',
            xp: 40,
            estimatedMinutes: 15,
            type: 'read',
          },
          {
            id: 'c2-l3',
            title: 'DeFi Lending & Borrowing',
            description: 'How Aave, Compound, and Morpho work — rates, collateral, liquidations',
            xp: 40,
            estimatedMinutes: 15,
            type: 'read',
            guideSlug: 'defi-safety-guide-2026',
          },
          {
            id: 'c2-quiz1',
            title: 'DeFi Foundations Quiz',
            description: 'Test your DeFi knowledge',
            xp: 40,
            estimatedMinutes: 6,
            type: 'quiz',
            quiz: [
              {
                id: 'dq1',
                question: 'In an AMM, liquidity providers earn fees from…',
                options: ['Interest from borrowers', 'Trading fees from swaps', 'Token inflation', 'Protocol governance'],
                correctIndex: 1,
                explanation: 'AMM liquidity providers earn a percentage of every swap that passes through their pool. The fee is typically 0.05%–1% depending on the pool.',
              },
              {
                id: 'dq2',
                question: 'What is "impermanent loss" in DeFi?',
                options: [
                  'Losing tokens due to a hack',
                  'The loss from providing liquidity when asset prices diverge',
                  'Paying too much gas',
                  'A failed transaction',
                ],
                correctIndex: 1,
                explanation: 'Impermanent loss occurs when the price ratio of your pooled tokens changes from when you deposited. The loss is "impermanent" because it disappears if prices return to the original ratio.',
              },
            ],
          },
        ],
      },
      {
        id: 'c2-ch2',
        title: 'Yield & Staking',
        description: 'Make your crypto work for you',
        totalXP: 200,
        lessons: [
          {
            id: 'c2-l4',
            title: 'Liquid Staking: Lido, Marinade & More',
            description: 'Stake ETH and SOL while keeping liquidity with stETH and mSOL',
            xp: 50,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c2-l5',
            title: 'Yield Farming Strategies',
            description: 'Compounding yields, auto-compounders, and strategy vaults',
            xp: 60,
            estimatedMinutes: 18,
            type: 'read',
          },
          {
            id: 'c2-l6',
            title: 'Understanding APY vs APR',
            description: 'Why compounding frequency matters and how to compare yields',
            xp: 40,
            estimatedMinutes: 8,
            type: 'read',
          },
          {
            id: 'c2-quiz2',
            title: 'Yield Strategies Quiz',
            description: 'Prove your yield knowledge',
            xp: 50,
            estimatedMinutes: 6,
            type: 'quiz',
            quiz: [
              {
                id: 'dq3',
                question: 'What does "APY" stand for?',
                options: ['Annual Percentage Yield', 'Average Protocol Yield', 'Asset Per Year', 'Annualized Protocol Yield'],
                correctIndex: 0,
                explanation: 'APY (Annual Percentage Yield) includes compound interest, unlike APR (Annual Percentage Rate). Higher compounding frequency = higher effective APY.',
              },
            ],
          },
        ],
      },
      {
        id: 'c2-ch3',
        title: 'Advanced DeFi',
        description: 'Flash loans, MEV, and multi-chain DeFi',
        totalXP: 250,
        lessons: [
          {
            id: 'c2-l7',
            title: 'Flash Loans Explained',
            description: 'How to borrow unlimited funds without collateral — in a single transaction',
            xp: 60,
            estimatedMinutes: 15,
            type: 'read',
          },
          {
            id: 'c2-l8',
            title: 'MEV & Sandwich Attacks',
            description: 'What is Maximal Extractable Value and how to protect yourself',
            xp: 70,
            estimatedMinutes: 18,
            type: 'read',
            guideSlug: 'mev-protection-guide',
          },
          {
            id: 'c2-l9',
            title: 'DEX Aggregators',
            description: '1inch, Jupiter, and how aggregators find the best swap routes',
            xp: 60,
            estimatedMinutes: 12,
            type: 'read',
            guideSlug: 'dex-aggregators-guide',
          },
          {
            id: 'c2-quiz3',
            title: 'DeFi Masterclass Final Exam',
            description: 'Complete the course and earn DeFi Wizard badge',
            xp: 60,
            estimatedMinutes: 8,
            type: 'quiz',
            quiz: [
              {
                id: 'dq4',
                question: 'A flash loan must be…',
                options: [
                  'Repaid within 24 hours',
                  'Borrowed and repaid within the same transaction',
                  'Collateralized with 150% ETH',
                  'Approved by a DAO vote',
                ],
                correctIndex: 1,
                explanation: 'Flash loans are unique to DeFi — they let you borrow any amount without collateral, as long as you repay within the same blockchain transaction. If you can\'t repay, the transaction reverts.',
              },
            ],
          },
        ],
      },
      {
        id: 'c2-ch4',
        title: 'Restaking & EigenLayer',
        description: 'The future of Ethereum security',
        totalXP: 200,
        lessons: [
          {
            id: 'c2-l10',
            title: 'What Is Restaking?',
            description: 'EigenLayer, AVSes, and extending Ethereum\'s security to new protocols',
            xp: 70,
            estimatedMinutes: 15,
            type: 'read',
            guideSlug: 'restaking-eigenlayer',
          },
          {
            id: 'c2-l11',
            title: 'Liquid Restaking Tokens (LRTs)',
            description: 'eETH, ezETH, pufETH — the yield-stacking strategies',
            xp: 80,
            estimatedMinutes: 18,
            type: 'read',
            guideSlug: 'restaking-eigenlayer-guide',
          },
          {
            id: 'c2-quiz4',
            title: 'Restaking Quiz',
            description: 'Test your restaking knowledge',
            xp: 50,
            estimatedMinutes: 5,
            type: 'quiz',
            quiz: [
              {
                id: 'dq5',
                question: 'What does EigenLayer allow stakers to do?',
                options: [
                  'Stake on multiple chains simultaneously',
                  'Extend their staked ETH security to other protocols',
                  'Create new blockchains easily',
                  'Earn more from trading fees',
                ],
                correctIndex: 1,
                explanation: 'EigenLayer introduced "restaking" — letting ETH stakers re-use their staked ETH\'s cryptoeconomic security to secure additional protocols called Actively Validated Services (AVSes), earning extra yield.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── COURSE 3: Layer 2s & Scaling ─────────────────────────────────────────
  {
    slug: 'layer2-deep-dive',
    title: 'Layer 2 & Scaling',
    subtitle: 'Understanding Rollups, L2s & Modular Blockchains',
    description: 'Dive deep into Ethereum scaling: Arbitrum, Optimism, Base, zkSync, StarkNet, and the modular blockchain thesis. Learn how L2s achieve security while cutting costs 100x.',
    emoji: '⚡',
    level: 'intermediate',
    theme: 'layer2',
    totalXP: 700,
    estimatedHours: 5,
    prerequisites: ['crypto-101'],
    badgeEmoji: '🚀',
    badgeName: 'L2 Navigator',
    color: '#8b5cf6',
    enrollmentCount: 15670,
    rating: 4.7,
    featured: true,
    chapters: [
      {
        id: 'c3-ch1',
        title: 'The Scaling Problem',
        description: 'Why blockchains need to scale and how they do it',
        totalXP: 175,
        lessons: [
          {
            id: 'c3-l1',
            title: 'The Blockchain Trilemma',
            description: 'Security, decentralization, scalability — you can only pick two (or can you?)',
            xp: 35,
            estimatedMinutes: 10,
            type: 'read',
          },
          {
            id: 'c3-l2',
            title: 'Layer 1 vs Layer 2',
            description: 'How L2s inherit security from L1 while dramatically reducing costs',
            xp: 40,
            estimatedMinutes: 12,
            type: 'read',
            guideSlug: 'layer-2-scaling-guide',
          },
          {
            id: 'c3-l3',
            title: 'Optimistic vs ZK Rollups',
            description: 'The two main rollup architectures and their trade-offs',
            xp: 50,
            estimatedMinutes: 15,
            type: 'read',
          },
          {
            id: 'c3-quiz1',
            title: 'Scaling Fundamentals Quiz',
            description: 'Test your L2 knowledge',
            xp: 50,
            estimatedMinutes: 6,
            type: 'quiz',
            quiz: [
              {
                id: 'l2q1',
                question: 'What is the main advantage of ZK rollups over Optimistic rollups?',
                options: [
                  'Lower gas fees',
                  'Faster withdrawals (no challenge period)',
                  'Better compatibility with Ethereum',
                  'More decentralized sequencers',
                ],
                correctIndex: 1,
                explanation: 'ZK rollups use cryptographic proofs (zero-knowledge proofs) to verify transactions instantly, allowing near-instant withdrawals. Optimistic rollups assume transactions are valid but have a 7-day challenge period for fraud proofs.',
              },
            ],
          },
        ],
      },
      {
        id: 'c3-ch2',
        title: 'Major L2 Ecosystems',
        description: 'A deep dive into Arbitrum, Base, Optimism, and zkSync',
        totalXP: 200,
        lessons: [
          {
            id: 'c3-l4',
            title: 'Arbitrum: The Dominant L2',
            description: 'How Arbitrum Nitro works and its thriving DeFi ecosystem',
            xp: 45,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c3-l5',
            title: 'Base: Coinbase\'s L2',
            description: 'Building on Base — low fees, Coinbase integration, and fast growth',
            xp: 45,
            estimatedMinutes: 10,
            type: 'read',
          },
          {
            id: 'c3-l6',
            title: 'zkSync & StarkNet',
            description: 'ZK rollups in practice — how they scale with math, not optimism',
            xp: 55,
            estimatedMinutes: 15,
            type: 'read',
          },
          {
            id: 'c3-quiz2',
            title: 'L2 Ecosystem Quiz',
            description: 'Test your knowledge of major L2s',
            xp: 55,
            estimatedMinutes: 6,
            type: 'quiz',
            quiz: [
              {
                id: 'l2q2',
                question: 'Which company built and maintains the Base L2?',
                options: ['Ethereum Foundation', 'Coinbase', 'Binance', 'ConsenSys'],
                correctIndex: 1,
                explanation: 'Base is an L2 built and maintained by Coinbase, built on the Optimism (OP Stack) technology. It launched in 2023 and quickly became one of the most active L2s.',
              },
            ],
          },
        ],
      },
      {
        id: 'c3-ch3',
        title: 'Bridging & Cross-chain',
        description: 'Moving assets between chains safely',
        totalXP: 175,
        lessons: [
          {
            id: 'c3-l7',
            title: 'L2 Bridges Explained',
            description: 'Official bridges vs third-party bridges — security trade-offs',
            xp: 50,
            estimatedMinutes: 12,
            type: 'read',
            guideSlug: 'l2-bridges-rollups-guide',
          },
          {
            id: 'c3-l8',
            title: 'Cross-chain Messaging',
            description: 'LayerZero, Wormhole, and the future of interoperability',
            xp: 60,
            estimatedMinutes: 15,
            type: 'read',
          },
          {
            id: 'c3-quiz3',
            title: 'Bridges & Cross-chain Quiz',
            description: 'Final L2 test',
            xp: 65,
            estimatedMinutes: 6,
            type: 'quiz',
            quiz: [
              {
                id: 'l2q3',
                question: 'When is it generally SAFEST to bridge assets?',
                options: [
                  'Using any third-party bridge for speed',
                  'Using the official native bridge of the L2',
                  'Sending to an exchange and withdrawing on the other chain',
                  'Both B and C',
                ],
                correctIndex: 3,
                explanation: 'The safest methods are the official native bridge (maximally secure but slower) or using a centralized exchange (deposit on one chain, withdraw on another). Third-party bridges can be faster but have had significant hacks.',
              },
            ],
          },
        ],
      },
      {
        id: 'c3-ch4',
        title: 'Modular Blockchains',
        description: 'The future architecture of blockchains',
        totalXP: 150,
        lessons: [
          {
            id: 'c3-l9',
            title: 'Modular vs Monolithic Blockchains',
            description: 'Celestia, Ethereum\'s modular roadmap, and the DA layer debate',
            xp: 60,
            estimatedMinutes: 15,
            type: 'read',
            guideSlug: 'modular-blockchains-guide',
          },
          {
            id: 'c3-quiz4',
            title: 'Modular Blockchain Quiz',
            description: 'Complete the L2 course',
            xp: 90,
            estimatedMinutes: 8,
            type: 'quiz',
            quiz: [
              {
                id: 'l2q4',
                question: 'What is the role of a "data availability layer" in modular blockchains?',
                options: [
                  'Execute transactions faster',
                  'Store transaction data so anyone can verify the chain',
                  'Validate smart contracts',
                  'Mint new tokens',
                ],
                correctIndex: 1,
                explanation: 'A data availability (DA) layer ensures that transaction data is published and accessible for verification, without requiring every node to re-execute every transaction. Celestia is the leading purpose-built DA layer.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── COURSE 4: Solana Deep Dive ────────────────────────────────────────────
  {
    slug: 'solana-deep-dive',
    title: 'Solana Deep Dive',
    subtitle: 'The High-Performance Blockchain for the Next Billion',
    description: 'Understand Solana\'s unique architecture, ecosystem, and why it\'s the fastest growing Layer 1. From Phantom wallet setup to advanced Solana DeFi with Jupiter, Kamino, and Drift.',
    emoji: '◎',
    level: 'intermediate',
    theme: 'solana',
    totalXP: 600,
    estimatedHours: 4,
    prerequisites: ['crypto-101'],
    badgeEmoji: '⚡',
    badgeName: 'Solana Degen',
    color: '#14F195',
    enrollmentCount: 31240,
    rating: 4.8,
    featured: true,
    chapters: [
      {
        id: 'c4-ch1',
        title: 'Solana Fundamentals',
        description: 'What makes Solana different from other blockchains',
        totalXP: 200,
        lessons: [
          {
            id: 'c4-l1',
            title: 'Solana Architecture: Proof of History',
            description: 'How Solana achieves 65,000 TPS with Proof of History + Proof of Stake',
            xp: 50,
            estimatedMinutes: 15,
            type: 'read',
          },
          {
            id: 'c4-l2',
            title: 'Solana vs Ethereum',
            description: 'Key differences, trade-offs, and why both matter',
            xp: 50,
            estimatedMinutes: 12,
            type: 'read',
            guideSlug: 'solana-vs-ethereum-2026',
          },
          {
            id: 'c4-l3',
            title: 'Setting Up Phantom Wallet',
            description: 'Install Phantom, understand SOL accounts, and prepare for DeFi',
            xp: 50,
            estimatedMinutes: 10,
            type: 'read',
          },
          {
            id: 'c4-quiz1',
            title: 'Solana Fundamentals Quiz',
            description: 'Test your Solana knowledge',
            xp: 50,
            estimatedMinutes: 6,
            type: 'quiz',
            quiz: [
              {
                id: 'sq1',
                question: 'What is "Proof of History" (PoH)?',
                options: [
                  'Solana\'s consensus mechanism instead of PoS',
                  'A cryptographic clock that timestamps transactions before consensus',
                  'A method for validating NFT provenance',
                  'A way to prove a transaction happened in the past',
                ],
                correctIndex: 1,
                explanation: 'Proof of History is a verifiable delay function that creates a historical record proving events happened at specific moments in time. Combined with PoS, it allows validators to agree on ordering without communicating as much — enabling Solana\'s high throughput.',
              },
            ],
          },
        ],
      },
      {
        id: 'c4-ch2',
        title: 'Solana DeFi',
        description: 'Navigating the Solana DeFi ecosystem',
        totalXP: 250,
        lessons: [
          {
            id: 'c4-l4',
            title: 'Jupiter: Swapping on Solana',
            description: 'Using Jupiter for best-price swaps, DCA, limit orders, and perpetuals',
            xp: 60,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c4-l5',
            title: 'Marinade & Liquid Staking',
            description: 'Stake SOL, earn yield, and use mSOL across DeFi',
            xp: 65,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c4-l6',
            title: 'Kamino Finance & Yield Strategies',
            description: 'CLMM auto-management, leveraged yield, and borrowing on Solana',
            xp: 70,
            estimatedMinutes: 15,
            type: 'read',
          },
          {
            id: 'c4-quiz2',
            title: 'Solana DeFi Quiz',
            description: 'Final Solana course test',
            xp: 55,
            estimatedMinutes: 6,
            type: 'quiz',
            quiz: [
              {
                id: 'sq2',
                question: 'What does Jupiter\'s DCA feature do?',
                options: [
                  'Debt Collateral Allocation',
                  'Dollar-cost averages your purchases over time automatically',
                  'Decentralized Credit Access',
                  'Dynamic Contract Agreement',
                ],
                correctIndex: 1,
                explanation: 'Jupiter\'s DCA (Dollar-Cost Averaging) feature lets you automatically buy a token at regular intervals (daily, weekly) with a set amount, averaging out your purchase price over time.',
              },
            ],
          },
        ],
      },
      {
        id: 'c4-ch3',
        title: 'Solana NFTs & Culture',
        description: 'The vibrant Solana NFT and meme coin scene',
        totalXP: 150,
        lessons: [
          {
            id: 'c4-l7',
            title: 'Solana NFTs: Magic Eden & Tensor',
            description: 'How Solana NFTs work differently from ETH NFTs + top marketplaces',
            xp: 50,
            estimatedMinutes: 10,
            type: 'read',
          },
          {
            id: 'c4-l8',
            title: 'Memecoins on Solana: Risks & Strategies',
            description: 'Pump.fun, Bonk, WIF — understanding the memecoin meta and staying safe',
            xp: 50,
            estimatedMinutes: 12,
            type: 'read',
            guideSlug: 'memecoin-trading-strategy',
          },
          {
            id: 'c4-quiz3',
            title: 'Solana Complete — Final Quiz',
            description: 'Earn the Solana Degen badge',
            xp: 50,
            estimatedMinutes: 5,
            type: 'quiz',
            quiz: [
              {
                id: 'sq3',
                question: 'What is "pump.fun" on Solana?',
                options: [
                  'A fitness tracking dApp',
                  'A platform for launching memecoins with built-in liquidity',
                  'A leveraged trading protocol',
                  'A Solana ecosystem analytics tool',
                ],
                correctIndex: 1,
                explanation: 'Pump.fun is a Solana platform that allows anyone to launch a memecoin in seconds with automatic liquidity via a bonding curve. It democratized token launches but also enabled widespread speculation.',
              },
            ],
          },
        ],
      },
    ],
  },

  // ─── COURSE 5: Crypto Security ─────────────────────────────────────────────
  {
    slug: 'crypto-security',
    title: 'Crypto Security',
    subtitle: 'Protect Your Assets Like a Professional',
    description: 'Master operational security (OpSec) for crypto. Learn to spot phishing attacks, protect your seed phrase, use hardware wallets, and avoid the most common scams that steal billions yearly.',
    emoji: '🛡️',
    level: 'beginner',
    theme: 'security',
    totalXP: 450,
    estimatedHours: 3,
    badgeEmoji: '🔐',
    badgeName: 'Security Sentinel',
    color: '#ef4444',
    enrollmentCount: 19820,
    rating: 4.9,
    chapters: [
      {
        id: 'c5-ch1',
        title: 'Threats & Attack Vectors',
        description: 'Know your enemy — the tactics hackers use',
        totalXP: 150,
        lessons: [
          {
            id: 'c5-l1',
            title: 'The $3B Problem: Common Crypto Hacks',
            description: 'Exchange hacks, bridge exploits, and private key theft — real case studies',
            xp: 40,
            estimatedMinutes: 15,
            type: 'read',
            guideSlug: 'crypto-security-masterclass-2026',
          },
          {
            id: 'c5-l2',
            title: 'Phishing Attacks Explained',
            description: 'Fake websites, social media scams, and Discord hacks — how to spot them',
            xp: 40,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c5-quiz1',
            title: 'Threat Awareness Quiz',
            description: 'Can you spot the scam?',
            xp: 70,
            estimatedMinutes: 8,
            type: 'quiz',
            quiz: [
              {
                id: 'secq1',
                question: 'You receive a DM from "MetaMask Support" saying your wallet is compromised and asking for your seed phrase. What do you do?',
                options: [
                  'Provide it immediately to secure your wallet',
                  'Ignore it — legitimate services NEVER ask for your seed phrase',
                  'Ask them to verify their identity first',
                  'Send only the first 6 words to confirm',
                ],
                correctIndex: 1,
                explanation: 'This is a classic social engineering scam. No legitimate service will EVER ask for your seed phrase. If someone asks for it, it\'s 100% a scam. Your seed phrase controls your entire wallet.',
              },
            ],
          },
        ],
      },
      {
        id: 'c5-ch2',
        title: 'Hardware Wallets & Best Practices',
        description: 'Set up your defense like a professional',
        totalXP: 150,
        lessons: [
          {
            id: 'c5-l3',
            title: 'Hardware Wallets: Ledger vs Trezor',
            description: 'How hardware wallets work, which to choose, and setup best practices',
            xp: 50,
            estimatedMinutes: 15,
            type: 'read',
          },
          {
            id: 'c5-l4',
            title: 'Seed Phrase Storage',
            description: 'Metal plates, split storage, and why you must never store it digitally',
            xp: 50,
            estimatedMinutes: 10,
            type: 'read',
          },
          {
            id: 'c5-quiz2',
            title: 'Security Best Practices Quiz',
            description: 'Complete your security training',
            xp: 50,
            estimatedMinutes: 6,
            type: 'quiz',
            quiz: [
              {
                id: 'secq2',
                question: 'The best way to back up your seed phrase is…',
                options: [
                  'Take a screenshot and store it in Google Photos',
                  'Email it to yourself encrypted',
                  'Write it on paper/metal and store offline in a secure location',
                  'Memorize it',
                ],
                correctIndex: 2,
                explanation: 'Your seed phrase must NEVER be digital — no screenshots, no email, no cloud storage. Write it on paper (better: stamp it on metal), and store it offline in a secure, private location.',
              },
            ],
          },
        ],
      },
      {
        id: 'c5-ch3',
        title: 'Transaction Safety',
        description: 'Stay safe when interacting with dApps',
        totalXP: 150,
        lessons: [
          {
            id: 'c5-l5',
            title: 'Reading Transaction Approvals',
            description: 'What "approve unlimited" really means and how to revoke approvals',
            xp: 55,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c5-l6',
            title: 'Smart Contract Security Red Flags',
            description: 'How to vet a new dApp before connecting your wallet',
            xp: 55,
            estimatedMinutes: 15,
            type: 'read',
          },
          {
            id: 'c5-quiz3',
            title: 'Security Sentinel Final Exam',
            description: 'Earn the Security Sentinel badge',
            xp: 40,
            estimatedMinutes: 8,
            type: 'quiz',
            quiz: [
              {
                id: 'secq3',
                question: 'When a dApp asks you to "approve unlimited" spending of a token, you should…',
                options: [
                  'Always approve — it\'s more convenient',
                  'Approve only the exact amount you need',
                  'Disconnect and never use the dApp',
                  'It doesn\'t matter — unlimited approvals are safe',
                ],
                correctIndex: 1,
                explanation: 'Approving unlimited spending means that contract can take all your tokens at any time. Always approve only what you need for the specific transaction, and revoke approvals after using a dApp.',
              },
            ],
          },
        ],
      },
    ],
  },
  // ─── COURSE 6: Real World Assets & Tokenization ────────────────────────────
  {
    slug: 'rwa-tokenization',
    title: 'Real World Assets & Tokenization',
    subtitle: 'Bringing Traditional Finance On-Chain',
    description: 'Learn how real-world assets like treasuries, real estate, and commodities are being tokenized on blockchain. Understand protocols like Ondo, Centrifuge, and Maple. The bridge between TradFi and DeFi.',
    emoji: '🏦',
    level: 'intermediate',
    theme: 'defi',
    totalXP: 1200,
    estimatedHours: 8,
    badgeEmoji: '🏛️',
    badgeName: 'RWA Specialist',
    color: '#10b981',
    enrollmentCount: 3247,
    rating: 4.7,
    featured: true,
    chapters: [
      {
        id: 'c6-ch1',
        title: 'What Are Real World Assets?',
        description: 'Understanding the concept and why tokenization matters',
        totalXP: 280,
        lessons: [
          {
            id: 'c6-l1',
            title: 'Introduction to Real World Assets',
            description: 'What are RWAs and why are they transforming finance?',
            xp: 30,
            estimatedMinutes: 10,
            type: 'read',
            guideSlug: 'rwa-introduction',
          },
          {
            id: 'c6-l2',
            title: 'Asset Tokenization Basics',
            description: 'How physical and digital assets become blockchain tokens',
            xp: 40,
            estimatedMinutes: 12,
            type: 'read',
            guideSlug: 'asset-tokenization-basics',
          },
          {
            id: 'c6-l3',
            title: 'TradFi vs DeFi: Bridging the Gap',
            description: 'How blockchain brings traditional finance on-chain',
            xp: 35,
            estimatedMinutes: 11,
            type: 'read',
          },
          {
            id: 'c6-l4',
            title: 'RWA Market Landscape',
            description: 'Treasury bills, real estate, commodities on blockchain',
            xp: 45,
            estimatedMinutes: 13,
            type: 'read',
            guideSlug: 'rwa-market-landscape',
          },
          {
            id: 'c6-quiz1',
            title: 'Chapter 1 Quiz — RWA Fundamentals',
            description: 'Test your understanding of real world asset tokenization',
            xp: 55,
            estimatedMinutes: 8,
            type: 'quiz',
            quiz: [
              {
                id: 'rwaq1',
                question: 'What is asset tokenization?',
                options: [
                  'Creating fake cryptocurrency tokens',
                  'Converting real-world assets into blockchain-based digital tokens',
                  'Storing physical assets in smart contracts',
                  'Trading only crypto-native assets',
                ],
                correctIndex: 1,
                explanation: 'Asset tokenization is the process of converting real-world assets (like real estate, commodities, or securities) into digital tokens on a blockchain, making them more liquid and accessible to a global audience.',
              },
              {
                id: 'rwaq2',
                question: 'Which of these is an example of a real world asset?',
                options: [
                  'Bitcoin',
                  'US Treasury Bills',
                  'Ethereum',
                  'NFT digital art',
                ],
                correctIndex: 1,
                explanation: 'Real world assets (RWAs) are physical or traditional financial assets like government bonds, real estate, commodities, and securities. Bitcoin and Ethereum are crypto-native, not RWAs.',
              },
              {
                id: 'rwaq3',
                question: 'What is the main advantage of tokenizing RWAs?',
                options: [
                  'Eliminates the need for regulation',
                  'Increases liquidity and enables 24/7 trading',
                  'Removes transaction costs entirely',
                  'Makes assets more centralized',
                ],
                correctIndex: 1,
                explanation: 'Tokenized RWAs unlock liquidity by enabling 24/7 trading, fractional ownership, and global accessibility on blockchains, while still maintaining regulatory compliance.',
              },
              {
                id: 'rwaq4',
                question: 'Which statement best describes the TradFi-DeFi bridge?',
                options: [
                  'Replacing traditional finance completely',
                  'Bringing traditional financial assets onto blockchain while maintaining compliance',
                  'Creating new assets that don\'t exist in traditional finance',
                  'Eliminating the need for banks',
                ],
                correctIndex: 1,
                explanation: 'The TradFi-DeFi bridge represents the integration of traditional financial assets into DeFi protocols while maintaining regulatory compliance and institutional trust.',
              },
            ],
          },
        ],
      },
      {
        id: 'c6-ch2',
        title: 'RWA Protocols & Platforms',
        description: 'Exploring major RWA infrastructure and protocols',
        totalXP: 300,
        lessons: [
          {
            id: 'c6-l5',
            title: 'Ondo Finance — Tokenized Treasury Bills',
            description: 'How Ondo is bringing US Treasury Bills on-chain',
            xp: 50,
            estimatedMinutes: 13,
            type: 'read',
            guideSlug: 'ondo-finance-guide',
          },
          {
            id: 'c6-l6',
            title: 'Centrifuge Protocol — Real Estate & Commodities',
            description: 'Financing real-world assets through decentralized finance',
            xp: 50,
            estimatedMinutes: 13,
            type: 'read',
            guideSlug: 'centrifuge-protocol-guide',
          },
          {
            id: 'c6-l7',
            title: 'Maple Finance — Institutional Lending',
            description: 'Corporate loans and credit on-chain',
            xp: 45,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c6-l8',
            title: 'MakerDAO RWA Initiative',
            description: 'How MakerDAO integrates real-world assets for DAI stability',
            xp: 50,
            estimatedMinutes: 13,
            type: 'read',
            guideSlug: 'makerdao-rwa-guide',
          },
          {
            id: 'c6-quiz2',
            title: 'Chapter 2 Quiz — RWA Protocols',
            description: 'Understand the major RWA platforms and protocols',
            xp: 55,
            estimatedMinutes: 8,
            type: 'quiz',
            quiz: [
              {
                id: 'rwaq5',
                question: 'What does Ondo Finance primarily tokenize?',
                options: [
                  'Real estate properties',
                  'US Treasury Bills and fixed-income securities',
                  'Commodity futures',
                  'Corporate bonds from startups',
                ],
                correctIndex: 1,
                explanation: 'Ondo Finance specializes in tokenizing institutional-grade fixed-income assets, including US Treasury Bills, bringing yield-bearing securities to DeFi.',
              },
              {
                id: 'rwaq6',
                question: 'Centrifuge Protocol is best known for tokenizing:',
                options: [
                  'Only government bonds',
                  'Real estate, commodities, and invoices',
                  'Only cryptocurrency',
                  'Luxury goods and collectibles',
                ],
                correctIndex: 1,
                explanation: 'Centrifuge enables financing of real-world assets including real estate, commodities, and business invoices by connecting institutions with DeFi liquidity.',
              },
              {
                id: 'rwaq7',
                question: 'What is Maple Finance\'s primary use case?',
                options: [
                  'Decentralized spot trading',
                  'Institutional-grade lending and credit on-chain',
                  'NFT trading',
                  'Staking and yield farming',
                ],
                correctIndex: 1,
                explanation: 'Maple Finance focuses on institutional lending, providing decentralized credit and loan facilities for qualified borrowers and institutional-grade risk management.',
              },
              {
                id: 'rwaq8',
                question: 'How do RWAs support DAI stability in MakerDAO?',
                options: [
                  'They replace ETH collateral entirely',
                  'They serve as additional collateral backing for DAI',
                  'They reduce trading volume',
                  'They eliminate the need for collateral',
                ],
                correctIndex: 1,
                explanation: 'MakerDAO uses RWA collateral to diversify its backing for DAI stablecoins, reducing reliance on crypto collateral and improving stability.',
              },
            ],
          },
        ],
      },
      {
        id: 'c6-ch3',
        title: 'Tokenized Treasuries & Stablecoins',
        description: 'T-bills on-chain, yield-bearing stables, and fixed income',
        totalXP: 310,
        lessons: [
          {
            id: 'c6-l9',
            title: 'Treasury Bills on Blockchain',
            description: 'How US Treasury Bills are being brought on-chain',
            xp: 55,
            estimatedMinutes: 14,
            type: 'read',
            guideSlug: 'treasury-bills-blockchain',
          },
          {
            id: 'c6-l10',
            title: 'Yield-Bearing Stablecoins — USDY & Beyond',
            description: 'Stablecoins that generate passive income',
            xp: 50,
            estimatedMinutes: 13,
            type: 'read',
            guideSlug: 'yield-bearing-stablecoins',
          },
          {
            id: 'c6-l11',
            title: 'Risk & Custody Considerations',
            description: 'Evaluating RWA-backed assets safely',
            xp: 45,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c6-l12',
            title: 'Regulatory Framework for RWAs',
            description: 'Compliance, legal structure, and institutional adoption',
            xp: 50,
            estimatedMinutes: 13,
            type: 'read',
            guideSlug: 'rwa-regulatory-framework',
          },
          {
            id: 'c6-quiz3',
            title: 'Chapter 3 Quiz — Tokenized Treasuries',
            description: 'Master yield-bearing assets on blockchain',
            xp: 60,
            estimatedMinutes: 8,
            type: 'quiz',
            quiz: [
              {
                id: 'rwaq9',
                question: 'What is a key benefit of tokenized Treasury Bills?',
                options: [
                  '24/7 trading without intermediaries',
                  'Zero interest rate',
                  'No government backing',
                  'Elimination of custody requirements',
                ],
                correctIndex: 0,
                explanation: 'Tokenized Treasury Bills enable continuous 24/7 trading on blockchain while retaining the safety and backing of US government securities.',
              },
              {
                id: 'rwaq10',
                question: 'Which yield-bearing stablecoin was mentioned as a major innovation?',
                options: [
                  'USDT',
                  'USDC',
                  'USDY',
                  'USDX',
                ],
                correctIndex: 2,
                explanation: 'USDY is a pioneering yield-bearing stablecoin backed by US Treasuries, allowing holders to earn treasury-backed yields while maintaining stablecoin stability.',
              },
              {
                id: 'rwaq11',
                question: 'What custody model is typically used for tokenized RWAs?',
                options: [
                  'Direct wallet control only',
                  'Regulated custodians holding underlying assets off-chain',
                  'Elimination of all custody',
                  'Community multisig control',
                ],
                correctIndex: 1,
                explanation: 'Most tokenized RWAs use regulated third-party custodians who hold the underlying physical assets while blockchain tracks ownership of tokens.',
              },
              {
                id: 'rwaq12',
                question: 'Why is regulatory compliance important for RWAs?',
                options: [
                  'It limits potential users',
                  'It enables institutional adoption and protects investors',
                  'It prevents all tokenization',
                  'It has no real impact',
                ],
                correctIndex: 1,
                explanation: 'Clear regulatory frameworks and compliance are essential for RWAs to achieve mainstream institutional adoption and maintain legal validity.',
              },
            ],
          },
        ],
      },
      {
        id: 'c6-ch4',
        title: 'Building an RWA Portfolio',
        description: 'Strategies, risk management, and practical implementation',
        totalXP: 310,
        lessons: [
          {
            id: 'c6-l13',
            title: 'RWA Portfolio Strategy & Diversification',
            description: 'Allocating capital across different RWA types',
            xp: 55,
            estimatedMinutes: 14,
            type: 'read',
            guideSlug: 'rwa-portfolio-strategy',
          },
          {
            id: 'c6-l14',
            title: 'Risk Assessment & Due Diligence',
            description: 'Evaluating RWA protocols and assets for safety',
            xp: 50,
            estimatedMinutes: 13,
            type: 'read',
          },
          {
            id: 'c6-l15',
            title: 'Tax Implications & Accounting',
            description: 'Understanding tax treatment of RWA income and trading',
            xp: 45,
            estimatedMinutes: 12,
            type: 'read',
          },
          {
            id: 'c6-l16',
            title: 'The Future of RWAs in DeFi',
            description: 'Trends, growth potential, and what\'s coming next',
            xp: 50,
            estimatedMinutes: 13,
            type: 'read',
            guideSlug: 'rwa-future-trends',
          },
          {
            id: 'c6-quiz4',
            title: 'RWA Specialist Final Exam',
            description: 'Earn the RWA Specialist badge',
            xp: 70,
            estimatedMinutes: 10,
            type: 'quiz',
            quiz: [
              {
                id: 'rwaq13',
                question: 'When building an RWA portfolio, the most important diversification principle is:',
                options: [
                  'Allocate only to yield-bearing assets',
                  'Mix different RWA types, protocols, and risk profiles',
                  'Avoid all real estate investments',
                  'Hold 100% in Treasury Bills',
                ],
                correctIndex: 1,
                explanation: 'Proper RWA portfolio diversification balances different asset types (treasuries, real estate, commodities), protocols, and risk levels to optimize returns and manage risk.',
              },
              {
                id: 'rwaq14',
                question: 'What is the most critical factor in RWA due diligence?',
                options: [
                  'Daily yield rates',
                  'Marketing and brand recognition',
                  'Custody arrangements and underlying asset verification',
                  'Twitter followers',
                ],
                correctIndex: 2,
                explanation: 'Due diligence for RWAs must focus on verifying custody arrangements, asset backing, regulatory compliance, and proof of underlying asset existence.',
              },
              {
                id: 'rwaq15',
                question: 'For tax purposes, how are RWA yields typically treated?',
                options: [
                  'Tax-exempt like bitcoin holdings',
                  'Similar to traditional interest income',
                  'Zero taxable income',
                  'As capital gains only',
                ],
                correctIndex: 1,
                explanation: 'RWA yields like interest from Treasury Bills or corporate loans are typically taxed as ordinary income, similar to traditional finance.',
              },
              {
                id: 'rwaq16',
                question: 'What is the expected long-term trajectory for RWAs in DeFi?',
                options: [
                  'Complete replacement of crypto assets',
                  'Continued growth as institutional adoption increases',
                  'Decline due to regulatory pressure',
                  'No significant change from current state',
                ],
                correctIndex: 1,
                explanation: 'RWAs represent one of the most promising areas for DeFi growth, with institutional interest, regulatory clarity, and billions in potential value creation ahead.',
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getCourse(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}

export function getFeaturedCourses(): Course[] {
  return COURSES.filter((c) => c.featured);
}

export const LEVEL_META: Record<CourseLevel, { label: string; color: string; emoji: string }> = {
  beginner: { label: 'Beginner', color: '#22c55e', emoji: '🟢' },
  intermediate: { label: 'Intermediate', color: '#f59e0b', emoji: '🟡' },
  advanced: { label: 'Advanced', color: '#ef4444', emoji: '🔴' },
  expert: { label: 'Expert', color: '#8b5cf6', emoji: '🟣' },
};

export const THEME_META: Record<CourseTheme, { label: string; emoji: string }> = {
  fundamentals: { label: 'Fundamentals', emoji: '📚' },
  defi: { label: 'DeFi', emoji: '🏛️' },
  nft: { label: 'NFTs', emoji: '🎨' },
  trading: { label: 'Trading', emoji: '📈' },
  security: { label: 'Security', emoji: '🛡️' },
  web3career: { label: 'Web3 Career', emoji: '💼' },
  layer2: { label: 'Layer 2', emoji: '⚡' },
  solana: { label: 'Solana', emoji: '◎' },
};
