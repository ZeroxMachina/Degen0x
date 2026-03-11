export interface Product {
  name: string;
  slug: string;
  rating: number;
  description: string;
  pros: string[];
  cons: string[];
  fees?: string;
  bestFor: string;
  affiliateUrl: string;
  logo?: string;
  category: string;
  featured?: boolean;
  trustScore?: number;   // 0–100 editorial trust score
  badge?: string;        // e.g. "Editor's Choice", "Best for Beginners"
}

export interface Review {
  slug: string;
  name: string;
  category: string;
  rating: number;
  lastUpdated: string;
  summary: string;
  pros: string[];
  cons: string[];
  fees: Record<string, string>;
  features: string[];
  security: string[];
  bestFor: string;
  affiliateUrl: string;
  logo?: string;
  sections: ReviewSection[];
}

export interface ReviewSection {
  title: string;
  content: string;
}

export interface ComparisonItem {
  name: string;
  slug: string;
  features: Record<string, string>;
  rating: number;
  affiliateUrl: string;
}

export interface BestOfPage {
  title: string;
  slug: string;
  category: string;
  description: string;
  lastUpdated: string;
  intro: string;
  products: Product[];
  methodology: string;
  faq: FAQ[];
}

export interface LearnPage {
  title: string;
  slug: string;
  category: string;
  description: string;
  lastUpdated: string;
  readTime: string;
  content: string;
  tableOfContents: TOCItem[];
  relatedArticles: RelatedArticle[];
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedArticle {
  title: string;
  href: string;
  category: string;
}

export interface CategoryInfo {
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
  subcategories: SubCategory[];
}

export interface SubCategory {
  name: string;
  slug: string;
  description: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface SiteMetadata {
  title: string;
  description: string;
  url: string;
  siteName: string;
  locale: string;
  type: string;
}
