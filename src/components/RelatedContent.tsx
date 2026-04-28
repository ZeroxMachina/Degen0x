'use client';

import Link from 'next/link';
import styles from './RelatedContent.module.css';

interface ContentCard {
  title: string;
  description: string;
  slug: string;
  category: string;
  icon?: string;
}

interface RelatedContentProps {
  category: string;
  currentSlug?: string;
}

const CONTENT_DATA: Record<string, ContentCard[]> = {
  learn: [
    {
      title: 'What is Ethereum?',
      description: 'Learn the fundamentals of Ethereum, the world\'s most popular smart contract platform.',
      slug: '/learn/what-is-ethereum',
      category: 'learn',
      icon: '⛓️'
    },
    {
      title: 'How to Buy Ethereum',
      description: 'A complete guide to purchasing ETH, from choosing exchanges to securing your assets.',
      slug: '/learn/how-to-buy-ethereum',
      category: 'learn',
      icon: '💳'
    },
    {
      title: 'What is Web3?',
      description: 'Discover the decentralized web and how it\'s changing digital ownership.',
      slug: '/learn/what-is-web3',
      category: 'learn',
      icon: '🌐'
    },
    {
      title: 'How to Use Uniswap',
      description: 'Master decentralized token swapping with this step-by-step Uniswap tutorial.',
      slug: '/learn/how-to-use-uniswap',
      category: 'learn',
      icon: '🔄'
    }
  ],
  tools: [
    {
      title: 'Crypto Price Calculator',
      description: 'Real-time price tracking and conversion for major cryptocurrencies.',
      slug: '/prices',
      category: 'tools',
      icon: '📊'
    },
    {
      title: 'Token Analyzer',
      description: 'Analyze token metrics, liquidity, and holder distribution.',
      slug: '/token',
      category: 'tools',
      icon: '🔬'
    },
    {
      title: 'Best Crypto Cards',
      description: 'Compare the top crypto debit and credit cards for 2026.',
      slug: '/crypto-cards/best',
      category: 'tools',
      icon: '💳'
    },
    {
      title: 'Exchange Comparison',
      description: 'Compare fees, features, and security across leading crypto exchanges.',
      slug: '/exchange/best',
      category: 'tools',
      icon: '⚖️'
    }
  ],
  compare: [
    {
      title: 'Wallet Comparison',
      description: 'Find the perfect wallet for your crypto needs with our detailed comparison.',
      slug: '/compare/wallets',
      category: 'compare',
      icon: '🏦'
    },
    {
      title: 'Best Wallets for Beginners',
      description: 'Top recommended wallets for newcomers to crypto.',
      slug: '/wallet/best/beginners',
      category: 'compare',
      icon: '🎯'
    },
    {
      title: 'Hardware vs Software Wallets',
      description: 'Understand the pros and cons of different wallet types.',
      slug: '/wallet/hardware-vs-software',
      category: 'compare',
      icon: '⚔️'
    },
    {
      title: 'Best Exchanges for Beginners',
      description: 'User-friendly exchanges perfect for starting your crypto journey.',
      slug: '/exchange/best/beginners',
      category: 'compare',
      icon: '🚀'
    }
  ],
  default: [
    {
      title: 'What is Cryptocurrency?',
      description: 'A beginner\'s guide to understanding cryptocurrency and blockchain technology.',
      slug: '/learn/what-is-cryptocurrency',
      category: 'learn',
      icon: '₿'
    },
    {
      title: 'Best Crypto Exchanges',
      description: 'Compare and review the top cryptocurrency exchanges of 2026.',
      slug: '/exchange/best',
      category: 'tools',
      icon: '💰'
    },
    {
      title: 'Crypto Security Best Practices',
      description: 'Essential tips for keeping your cryptocurrency safe from scams and hacks.',
      slug: '/learn/security-best-practices',
      category: 'learn',
      icon: '🔐'
    },
    {
      title: 'DeFi Explained',
      description: 'Learn how decentralized finance is revolutionizing the financial industry.',
      slug: '/learn/what-is-defi',
      category: 'learn',
      icon: '🏛️'
    }
  ]
};

export default function RelatedContent({ category, currentSlug = '' }: RelatedContentProps) {
  // Get content for this category, fallback to default
  const contentCards = CONTENT_DATA[category] || CONTENT_DATA.default;

  // Filter out current page if provided
  const relatedCards = currentSlug
    ? contentCards.filter(card => card.slug !== currentSlug)
    : contentCards;

  // Take first 3-4 items
  const displayCards = relatedCards.slice(0, 4);

  if (displayCards.length === 0) {
    return null;
  }

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Related Content</h2>
        <p className={styles.subtitle}>Explore more helpful guides and tools</p>
      </div>

      <div className={styles.grid}>
        {displayCards.map((card) => (
          <Link key={card.slug} href={card.slug} className={styles.card}>
            <div className={styles.cardInner}>
              {card.icon && <div className={styles.icon}>{card.icon}</div>}

              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDescription}>{card.description}</p>
              </div>

              <div className={styles.footer}>
                <span className={styles.tag}>{card.category}</span>
                <span className={styles.arrow}>→</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
