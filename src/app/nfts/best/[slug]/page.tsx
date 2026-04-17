// Auto-generated dynamic route for nfts/best
export const revalidate = 3600;
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LearnPageLayout from "@/components/LearnPage";
import { pages } from "@/data/pages/nfts-best";

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
        section="nfts"
      />    </LearnPageLayout>
  );
}
      <nav style={{ marginTop: "2rem", padding: "1rem", borderTop: "1px solid #30363d", fontSize: "14px" }}>
  <h3 style={{ color: "#e5e7eb", fontSize: "16px", marginBottom: "0.75rem" }}>Explore More</h3>
  <a href="/nfts/best/art" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Art</a>
  <a href="/nfts/best/beginners" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Beginners</a>
  <a href="/nfts/best/bitcoin-ordinals" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Bitcoin Ordinals</a>
  <a href="/nfts/best/creators" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Creators</a>
  <a href="/nfts/best/ethereum" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Ethereum</a>
  <a href="/nfts/best/free-mint" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Free Mint</a>
  <a href="/nfts/best/gaming" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Gaming</a>
  <a href="/nfts/best/low-fee" style={{ color: "#fb923c", marginRight: "1rem", display: "inline-block", marginBottom: "0.5rem" }}>Low Fee</a>
</nav>