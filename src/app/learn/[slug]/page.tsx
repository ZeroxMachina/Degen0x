// Auto-generated dynamic route for learn
export const revalidate = 3600;
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LearnPageLayout from "@/components/LearnPage";
import { pages } from "@/data/pages/learn";
import AuthorAttribution from '@/components/AuthorAttribution';

interface Props { params: Promise<{ slug: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  const ogImage = page.metadata.ogImage || `/og-${slug}.svg`;
  return {
    title: page.metadata.title,
    description: page.metadata.description,
    openGraph: {
      title: page.metadata.title,
      description: page.metadata.description,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: page.props.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metadata.title,
      description: page.metadata.description,
      images: [ogImage],
    },
  };
}

export default async function DynamicPage({ params }: Props) {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) notFound();
  return (
    <LearnPageLayout
      title={page.props.title}
      categoryName={page.props.categoryName}
      categorySlug={page.props.categorySlug}
      readTime={page.props.readTime}
      intro={page.props.intro}
      toc={page.toc}
      faqs={page.faqs}
      relatedArticles={page.relatedArticles}
    >
      <div dangerouslySetInnerHTML={{ __html: page.childrenHtml }} />

      <AuthorAttribution
        author="degen0x"
        role="Content"
        publishedDate="2026-04-13"
        updatedDate="2026-04-13"
        section="learn"
      />    </LearnPageLayout>
  );
}
      <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/learn/aave-v4-gho-stablecoin-defi-lending-guide-2026" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave V4 Gho Stablecoin Defi Lending Guide 2026</a>
  <a href="/learn/aave-v4-guide" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Aave V4 Guide</a>
  <a href="/learn/abstract-chain-consumer-crypto-zk-rollup-guide-2026" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Abstract Chain Consumer Crypto Zk Rollup Guide 2026</a>
  <a href="/learn/abstract-chain-guide" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Abstract Chain Guide</a>
  <a href="/learn/account-abstraction" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Account Abstraction</a>
  <a href="/learn/account-abstraction-erc-4337-guide" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Account Abstraction Erc 4337 Guide</a>
  <a href="/learn/advanced-defi-strategies" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Advanced Defi Strategies</a>
  <a href="/learn/advanced-staking-strategies-guide-2026" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Advanced Staking Strategies Guide 2026</a>
</nav>