import { XMLParser } from "fast-xml-parser";
import { NextResponse } from "next/server";

const FEED_URL = "https://signalsoverstories.substack.com/feed";

function extractFirstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : null;
}

export async function GET() {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return NextResponse.json([], { status: 200 });
    const xml = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const feed = parser.parse(xml);
    const rawItems = feed?.rss?.channel?.item;
    if (!rawItems) return NextResponse.json([]);
    const items = Array.isArray(rawItems) ? rawItems : [rawItems];

    interface RawItem {
      title?: string;
      description?: string;
      link?: string;
      pubDate?: string;
      category?: string | string[];
      "content:encoded"?: string;
    }

    const posts = items.map((item: RawItem) => ({
      title: item.title ?? "",
      description: item.description ?? "",
      link: item.link ?? "",
      pubDate: item.pubDate ?? "",
      categories: Array.isArray(item.category)
        ? item.category
        : [item.category].filter(Boolean),
      thumbnail: extractFirstImage(item["content:encoded"] ?? ""),
    }));
    return NextResponse.json(posts);
  } catch {
    return NextResponse.json([]);
  }
}
