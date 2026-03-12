import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const SITE_NAME = 'degen0x';
const SITE_URL = 'https://degen0x.com';
const SITE_DESCRIPTION = 'degen0x is the leading crypto comparison and review platform. Compare exchanges, wallets, DeFi protocols, and more. Expert reviews, tools, and guides.';

interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  url: string;
}

/**
 * Extract metadata from article page.tsx file
 */
function extractArticleMetadata(filePath: string, slug: string): ArticleMetadata | null {
  try {
    const content = fs.readFileSync(filePath, 'utf-8');

    // Extract title from metadata object
    const titleMatch = content.match(/title:\s*`([^`]+)`/);
    const title = titleMatch ? titleMatch[1] : slug.replace(/-/g, ' ');

    // Extract description from metadata object
    const descriptionMatch = content.match(/description:\s*"([^"]+)"/);
    const description = descriptionMatch
      ? descriptionMatch[1]
      : `Learn about ${slug.replace(/-/g, ' ')} in the crypto world`;

    // Get file modification time as pubDate
    const stats = fs.statSync(filePath);
    const pubDate = new Date(stats.mtime).toISOString();

    return {
      slug,
      title,
      description,
      pubDate,
      url: `${SITE_URL}/learn/${slug}`,
    };
  } catch (error) {
    console.error(`Error extracting metadata from ${filePath}:`, error);
    return null;
  }
}

/**
 * Get all articles from learn directory
 */
function getAllArticles(): ArticleMetadata[] {
  const learnDir = path.join(process.cwd(), 'src/app/learn');
  const articles: ArticleMetadata[] = [];

  try {
    const entries = fs.readdirSync(learnDir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const pageFilePath = path.join(learnDir, entry.name, 'page.tsx');

        if (fs.existsSync(pageFilePath)) {
          const metadata = extractArticleMetadata(pageFilePath, entry.name);
          if (metadata) {
            articles.push(metadata);
          }
        }
      }
    }

    // Sort by publication date (newest first)
    articles.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

    return articles;
  } catch (error) {
    console.error('Error reading learn directory:', error);
    return [];
  }
}

/**
 * Escape XML special characters
 */
function escapeXml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Generate RSS 2.0 XML feed
 */
function generateRSSFeed(articles: ArticleMetadata[]): string {
  const now = new Date().toUSOString();
  const channel = articles
    .slice(0, 50) // Limit to 50 most recent articles
    .map(
      (article) => `
  <item>
    <title>${escapeXml(article.title)}</title>
    <link>${escapeXml(article.url)}</link>
    <description>${escapeXml(article.description)}</description>
    <pubDate>${new Date(article.pubDate).toUTCString()}</pubDate>
    <guid isPermaLink="true">${escapeXml(article.url)}</guid>
    <category>Cryptocurrency</category>
    <category>Education</category>
  </item>`
    )
    .join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)} - Learn</title>
    <link>${escapeXml(SITE_URL)}/learn</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${escapeXml(SITE_URL)}/feed.xml" rel="self" type="application/rss+xml" />
    ${channel}
  </channel>
</rss>`;
}

/**
 * GET handler for RSS feed
 */
export async function GET() {
  try {
    const articles = getAllArticles();
    const rssFeed = generateRSSFeed(articles);

    return new NextResponse(rssFeed, {
      status: 200,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=7200',
      },
    });
  } catch (error) {
    console.error('Error generating RSS feed:', error);

    const errorFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>${SITE_NAME} - Learn</title>
    <link>${SITE_URL}/learn</link>
    <description>${SITE_DESCRIPTION}</description>
    <language>en-us</language>
  </channel>
</rss>`;

    return new NextResponse(errorFeed, {
      status: 500,
      headers: {
        'Content-Type': 'application/rss+xml; charset=utf-8',
      },
    });
  }
}
