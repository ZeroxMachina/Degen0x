import { NextResponse } from "next/server";

export const runtime = "edge";
export const revalidate = 300; // 5 min cache

interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  source: string;
  category: string;
}

const RSS_FEEDS = [
  { url: "https://cointelegraph.com/rss", source: "CoinTelegraph", category: "General" },
  { url: "https://decrypt.co/feed", source: "Decrypt", category: "General" },
  { url: "https://www.coindesk.com/arc/outboundfeeds/rss/", source: "CoinDesk", category: "General" },
  { url: "https://thedefiant.io/feed", source: "The Defiant", category: "DeFi" },
  { url: "https://blockworks.co/feed", source: "Blockworks", category: "Institutional" },
];

function parseXML(xml: string, source: string, category: string): RSSItem[] {
  const items: RSSItem[] = [];
  const itemRegex = /<item>([\s\S]*?)<\/item>/g;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const itemXml = match[1];

    const titleMatch = itemXml.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>|<title>(.*?)<\/title>/);
    const linkMatch = itemXml.match(/<link>(.*?)<\/link>/);
    const pubDateMatch = itemXml.match(/<pubDate>(.*?)<\/pubDate>/);
    const descMatch = itemXml.match(/<description><!\[CDATA\[(.*?)\]\]><\/description>|<description>(.*?)<\/description>/s);

    const title = titleMatch?.[1] || titleMatch?.[2] || "";
    const link = linkMatch?.[1] || "";
    const pubDate = pubDateMatch?.[1] || new Date().toISOString();
    const rawDesc = descMatch?.[1] || descMatch?.[2] || "";
    // Strip HTML from description
    const description = rawDesc.replace(/<[^>]*>/g, "").slice(0, 200).trim();

    if (title && link) {
      items.push({ title: title.trim(), link: link.trim(), pubDate, description, source, category });
    }
  }

  return items.slice(0, 10); // max 10 per feed
}

export async function GET() {
  const allItems: RSSItem[] = [];
  const errors: string[] = [];

  await Promise.allSettled(
    RSS_FEEDS.map(async ({ url, source, category }) => {
      try {
        const res = await fetch(url, {
          headers: { "User-Agent": "degen0x/1.0 RSS Reader" },
          signal: AbortSignal.timeout(5000),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const xml = await res.text();
        const items = parseXML(xml, source, category);
        allItems.push(...items);
      } catch (e) {
        errors.push(`${source}: ${e}`);
      }
    })
  );

  // Sort by pubDate descending
  allItems.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

  return NextResponse.json(
    {
      items: allItems.slice(0, 50),
      fetchedAt: new Date().toISOString(),
      sources: RSS_FEEDS.length,
      errors: errors.length > 0 ? errors : undefined,
    },
    {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=60",
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
