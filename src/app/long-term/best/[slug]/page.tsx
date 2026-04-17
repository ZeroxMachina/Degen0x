// Auto-generated dynamic route for long-term/best
export const revalidate = 3600;
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LearnPageLayout from "@/components/LearnPage";
import { pages } from "@/data/pages/long-term-best";

interface Props { params: Promise<{ slug: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = pages[slug];
  if (!page) return {};
  return { title: page.metadata.title, description: page.metadata.description };
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
        section="long-term"
      />    </LearnPageLayout>
  );
}
      <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/long-term/best/advisors" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Advisors</a>
  <a href="/long-term/best/blue-chip-crypto" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Blue Chip Crypto</a>
  <a href="/long-term/best/cold-storage-strategies" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Cold Storage Strategies</a>
  <a href="/long-term/best/crypto-ira" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Crypto Ira</a>
  <a href="/long-term/best/dividend-crypto" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Dividend Crypto</a>
  <a href="/long-term/best/dividend-tokens" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Dividend Tokens</a>
  <a href="/long-term/best/hodl-coins" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Hodl Coins</a>
  <a href="/long-term/best/self-directed" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Self Directed</a>
</nav>