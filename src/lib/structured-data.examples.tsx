/**
 * Example Usage Guide for Structured Data Utilities
 *
 * This file demonstrates how to use the structured-data.ts functions
 * and StructuredData component throughout the degen0x project.
 *
 * These are non-runnable examples for documentation purposes only.
 */

import {
  generateToolPageSchema,
  generateArticleSchema,
  generateFAQSchema,
  generateBreadcrumbSchema,
  generateProductReviewSchema,
  generateComparisonSchema,
  generateHowToSchema,
  generateFinancialToolSchema,
  generateOrganizationSchema,
  generateWebSiteSchema,
  combineSchemas,
  type ToolSchemaInput,
  type ArticleSchemaInput,
  type FAQItem,
  type BreadcrumbItem,
  type ProductReviewSchemaInput,
  type ComparisonSchemaInput,
  type HowToSchemaInput,
  type FinancialToolSchemaInput,
} from "./structured-data";
import StructuredData from "@/components/StructuredData";

/**
 * EXAMPLE 1: Using generateToolPageSchema for a crypto tool/calculator
 * Perfect for: Bitcoin calculators, tax calculators, portfolio trackers
 */
const toolExample = () => {
  const toolSchema = generateToolPageSchema({
    name: "Bitcoin ROI Calculator",
    description:
      "Calculate potential returns on Bitcoin investments with historical data",
    url: "https://degen0x.com/tools/bitcoin-roi-calculator",
    category: "Financial Calculator",
    image: "https://degen0x.com/images/bitcoin-calculator.png",
    applicationCategory: "FinanceApplication",
    aggregateRating: {
      ratingValue: 4.8,
      ratingCount: 324,
    },
  });

  // In a Next.js page component:
  return <StructuredData data={toolSchema} id="bitcoin-calculator-schema" />;
};

/**
 * EXAMPLE 2: Using generateArticleSchema for blog posts
 * Perfect for: Guides, tutorials, educational articles, news posts
 */
const articleExample = () => {
  const articleSchema = generateArticleSchema({
    title: "Complete Guide to Crypto Tax Reporting 2026",
    description:
      "Everything you need to know about reporting crypto gains and losses for taxes",
    url: "https://degen0x.com/learn/crypto-tax-guide",
    datePublished: "2026-03-01T10:00:00Z",
    dateModified: "2026-03-13T15:30:00Z",
    author: "Sarah Chen",
    image: "https://degen0x.com/images/tax-guide-hero.jpg",
    wordCount: 4500,
  });

  // In a blog page component:
  return <StructuredData data={articleSchema} id="article-schema" />;
};

/**
 * EXAMPLE 3: Using generateFAQSchema for FAQ sections
 * Perfect for: FAQ pages, help centers, product pages
 * Note: Google shows FAQPage snippets in search results
 */
const faqExample = () => {
  const faqs: FAQItem[] = [
    {
      question: "What is a cold wallet?",
      answer:
        "A cold wallet is a cryptocurrency wallet that is not connected to the internet. Examples include hardware wallets like Ledger and Trezor, which store your private keys offline for maximum security.",
    },
    {
      question: "Is a hardware wallet worth the cost?",
      answer:
        "Yes, hardware wallets are worth the investment if you hold significant amounts of cryptocurrency. The $50-150 cost is minimal compared to the security benefits they provide.",
    },
    {
      question: "Can I use multiple wallets?",
      answer:
        "Absolutely! Many crypto users maintain multiple wallets for different purposes: a hardware wallet for long-term storage, a software wallet for frequent transactions, and possibly a mobile wallet for spending.",
    },
  ];

  const faqSchema = generateFAQSchema(faqs);

  // In an FAQ page component:
  return <StructuredData data={faqSchema} id="faq-schema" />;
};

/**
 * EXAMPLE 4: Using generateBreadcrumbSchema for navigation
 * Perfect for: Category pages, product pages, any multi-level navigation
 * Note: Breadcrumb schema helps Google understand your site structure
 */
const breadcrumbExample = () => {
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", url: "https://degen0x.com" },
    { name: "Wallets", url: "https://degen0x.com/wallets" },
    { name: "Hardware Wallets", url: "https://degen0x.com/wallets/best/hardware" },
    { name: "Ledger Review", url: "https://degen0x.com/wallets/reviews/ledger" },
  ];

  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  // In a product review page component:
  return <StructuredData data={breadcrumbSchema} id="breadcrumb-schema" />;
};

/**
 * EXAMPLE 5: Using generateProductReviewSchema for reviews and ratings
 * Perfect for: Exchange reviews, wallet reviews, protocol reviews
 * Note: Shows rating and review count in search results
 */
const productReviewExample = () => {
  const reviewSchema = generateProductReviewSchema({
    name: "Coinbase Exchange",
    description:
      "Coinbase is a leading cryptocurrency exchange with a user-friendly interface",
    url: "https://degen0x.com/exchanges/reviews/coinbase",
    rating: 4.6,
    reviewCount: 2847,
    price: "0", // Free for basic use
    priceCurrency: "USD",
    image: "https://degen0x.com/images/coinbase-logo.png",
  });

  // In an exchange/wallet review page:
  return <StructuredData data={reviewSchema} id="product-review-schema" />;
};

/**
 * EXAMPLE 6: Using generateComparisonSchema for comparison pages
 * Perfect for: "Top 10" pages, comparison charts, ranked lists
 */
const comparisonExample = () => {
  const comparisonSchema = generateComparisonSchema({
    name: "Best Crypto Exchanges 2026",
    description:
      "A ranked comparison of the best cryptocurrency exchanges for different use cases",
    items: [
      "Coinbase - Best for Beginners",
      "Kraken - Best for Advanced Traders",
      "Binance - Most Trading Pairs",
      "Gemini - Best Security",
      "FTX - Best Mobile App",
      "OKEx - Best for Derivatives",
      "KuCoin - Best for Altcoins",
      "Huobi - Best Global Coverage",
      "Gate.io - Best Fees",
      "Upbit - Best Asian Exchange",
    ],
  });

  // In a comparison page component:
  return <StructuredData data={comparisonSchema} id="comparison-schema" />;
};

/**
 * EXAMPLE 7: Using generateHowToSchema for step-by-step guides
 * Perfect for: Tutorials, how-to guides, setup instructions
 * Note: Google shows these in "Rich Results" when applicable
 */
const howToExample = () => {
  const howToSchema = generateHowToSchema({
    name: "How to Set Up a Hardware Wallet",
    description:
      "Complete step-by-step guide to setting up your first hardware wallet safely",
    steps: [
      {
        name: "Purchase a Hardware Wallet",
        text: "Buy a hardware wallet from an official retailer. Popular options include Ledger Nano X or Trezor Model T.",
        image: "https://degen0x.com/images/step1-hardware.jpg",
      },
      {
        name: "Initialize Your Device",
        text: "Connect the device to your computer and follow the initialization process. Create a strong PIN code.",
        image: "https://degen0x.com/images/step2-init.jpg",
      },
      {
        name: "Secure Your Seed Phrase",
        text: "Write down your 24-word recovery seed phrase on paper. Store it in a safe location offline.",
        image: "https://degen0x.com/images/step3-seed.jpg",
      },
      {
        name: "Transfer Your Crypto",
        text: "Use the wallet software to generate addresses and transfer your cryptocurrency to your new hardware wallet.",
        image: "https://degen0x.com/images/step4-transfer.jpg",
      },
    ],
    totalTime: "PT30M",
    estimatedCost: {
      currency: "USD",
      value: "60-150",
    },
  });

  // In a tutorial/guide page:
  return <StructuredData data={howToSchema} id="howto-schema" />;
};

/**
 * EXAMPLE 8: Using generateFinancialToolSchema
 * Perfect for: Exchange pages, lending platform pages, DeFi protocol pages
 */
const financialToolExample = () => {
  const financialToolSchema = generateFinancialToolSchema({
    name: "Aave Lending Protocol",
    description:
      "Aave is a decentralized lending protocol that allows users to lend and borrow cryptocurrencies",
    url: "https://degen0x.com/defi-lending/reviews/aave",
    image: "https://degen0x.com/images/aave-logo.png",
    author: "degen0x Team",
  });

  // In a DeFi protocol page:
  return <StructuredData data={financialToolSchema} id="financial-tool-schema" />;
};

/**
 * EXAMPLE 9: Combining multiple schemas on one page
 * Perfect for: Product pages that need breadcrumbs, product schema, AND FAQ
 */
const multipleSchemaExample = () => {
  const breadcrumbs = generateBreadcrumbSchema([
    { name: "Home", url: "https://degen0x.com" },
    { name: "Exchanges", url: "https://degen0x.com/exchanges" },
    { name: "Kraken Review", url: "https://degen0x.com/exchanges/reviews/kraken" },
  ]);

  const productReview = generateProductReviewSchema({
    name: "Kraken Exchange",
    description: "Leading crypto exchange for advanced traders",
    url: "https://degen0x.com/exchanges/reviews/kraken",
    rating: 4.7,
    reviewCount: 1893,
  });

  const faqs = generateFAQSchema([
    {
      question: "Is Kraken safe?",
      answer: "Yes, Kraken is one of the most secure exchanges with strong security features.",
    },
    {
      question: "What are Kraken fees?",
      answer: "Kraken's trading fees start at 0.16% and decrease based on trading volume.",
    },
  ]);

  // Combine all schemas
  const combinedSchemas = combineSchemas([breadcrumbs, productReview, faqs]);

  // In the exchange review page:
  return <StructuredData data={combinedSchemas} id="kraken-review-schema" />;
};

/**
 * EXAMPLE 10: Organization and Website schemas for homepage
 * Perfect for: Homepage, global navigation, site-wide schema
 * Note: These help search engines understand your website
 */
const homepageExample = () => {
  const orgSchema = generateOrganizationSchema(
    "degen0x is the leading crypto comparison and review platform."
  );

  const websiteSchema = generateWebSiteSchema();

  const homepageSchemas = combineSchemas([orgSchema, websiteSchema]);

  // In the root layout or homepage:
  return <StructuredData data={homepageSchemas} id="homepage-schema" />;
};

/**
 * TYPESCRIPT USAGE PATTERNS
 *
 * Using TypeScript types from the structured-data module ensures
 * type safety and autocomplete in your IDE:
 */

// Type-safe input for tool schema
const typeSafeTool: ToolSchemaInput = {
  name: "Ethereum Gas Calculator",
  description: "Calculate Ethereum transaction costs",
  url: "https://degen0x.com/tools/gas-calculator",
  category: "Utility",
  // image, author, applicationCategory etc. are optional
};

// Type-safe FAQ items
const typeSafeFAQs: FAQItem[] = [
  {
    question: "How does DeFi lending work?",
    answer:
      "Users deposit crypto as collateral to borrow other cryptocurrencies...",
  },
];

// Type-safe breadcrumb items
const typeSafeBreadcrumbs: BreadcrumbItem[] = [
  { name: "Home", url: "https://degen0x.com" },
  { name: "DeFi", url: "https://degen0x.com/defi-lending" },
];

/**
 * BEST PRACTICES
 *
 * 1. Use structured data for all major content types:
 *    - Articles and blog posts (ArticleSchema)
 *    - Tools and calculators (ToolPageSchema)
 *    - Reviews (ProductReviewSchema)
 *    - How-to guides (HowToSchema)
 *    - FAQs (FAQSchema)
 *
 * 2. Always include breadcrumbs for navigation hierarchy
 *
 * 3. Add Organization and WebSite schemas to your homepage
 *
 * 4. Use images where available for richer previews
 *
 * 5. Keep schema data synchronized with page content
 *
 * 6. Test schemas with Google's Rich Results Test:
 *    https://search.google.com/test/rich-results
 *
 * 7. Monitor search console for schema-related errors
 *
 * 8. Use TypeScript interfaces for type safety
 */
