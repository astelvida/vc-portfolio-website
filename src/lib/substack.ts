import { XMLParser } from "fast-xml-parser";
import type { SubstackPost } from "@/types/substack";

const FEED_URL = "https://signalsoverstories.substack.com/feed";

function extractFirstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src="([^"]+)"/);
  return match ? match[1] : null;
}

function extractSlug(link: string): string {
  try {
    const pathname = new URL(link).pathname;
    return pathname.replace(/^\/p\//, "").replace(/\/$/, "") || "";
  } catch {
    return "";
  }
}

function decodeHtmlEntities(text: string): string {
  return text
    .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-fA-F]+);/g, (_, hex) =>
      String.fromCharCode(parseInt(hex, 16))
    )
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'");
}

function sanitizeHtml(html: string): string {
  return html
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<iframe[^>]*>[\s\S]*?<\/iframe>/gi, "")
    .replace(/\s+on\w+=(?:"[^"]*"|'[^']*'|[^\s>]*)/gi, "")
    .replace(/href\s*=\s*["']?\s*javascript:[^"'\s>]*/gi, 'href="#"');
}

// Shown only when the live feed is unreachable. Every entry mirrors a real
// published post — title, slug and permalink included — so a Substack outage
// degrades to essays that still resolve. Reconciled against the feed 14 Jul 2026.
export const FALLBACK_POSTS: SubstackPost[] = [
  {
    title: "What PitchBook Gets Wrong About European AI",
    description:
      "Seven contrarian signals from the Q1 2026 analyst note — and where the rough diamonds are.",
    link: "https://signalsoverstories.substack.com/p/what-pitchbook-gets-wrong-about-european",
    pubDate: "Wed, 08 Apr 2026 19:15:21 GMT",
    categories: [],
    thumbnail: null,
    slug: "what-pitchbook-gets-wrong-about-european",
    content: "",
  },
  {
    title: "Score the Thesis, Not the Company",
    description:
      "SSI v2.0: Why I Rebuilt the Only Scoring Framework That Actually Works for European Regulated AI",
    link: "https://signalsoverstories.substack.com/p/score-the-thesis-not-the-company",
    pubDate: "Tue, 31 Mar 2026 20:17:12 GMT",
    categories: [],
    thumbnail: null,
    slug: "score-the-thesis-not-the-company",
    content: "",
  },
  {
    title:
      "The NVIDIA Gravity Well: Why AI Startups Orbit It (Even When They Pretend They Don't)",
    description: "Europe doesn't have an “AI talent problem.”",
    link: "https://signalsoverstories.substack.com/p/the-nvidia-gravity-well-why-ai-startups",
    pubDate: "Mon, 02 Feb 2026 13:35:02 GMT",
    categories: [],
    thumbnail: null,
    slug: "the-nvidia-gravity-well-why-ai-startups",
    content: "",
  },
  {
    title: "Signals Over Stories: AI, Capital, and Constraints",
    description: "AI investing without narrative inflation",
    link: "https://signalsoverstories.substack.com/p/signals-over-stories-ai-capital-and",
    pubDate: "Sat, 17 Jan 2026 15:07:11 GMT",
    categories: [],
    thumbnail: null,
    slug: "signals-over-stories-ai-capital-and",
    content: "",
  },
];

interface RawItem {
  title?: string;
  description?: string;
  link?: string;
  pubDate?: string;
  category?: string | string[];
  "content:encoded"?: string;
}

export async function getPosts(): Promise<SubstackPost[]> {
  try {
    const res = await fetch(FEED_URL, { next: { revalidate: 3600 } });
    if (!res.ok) return FALLBACK_POSTS;

    const xml = await res.text();
    const parser = new XMLParser({
      ignoreAttributes: false,
      attributeNamePrefix: "@_",
    });
    const feed = parser.parse(xml);
    const rawItems = feed?.rss?.channel?.item;
    if (!rawItems) return FALLBACK_POSTS;

    const items: RawItem[] = Array.isArray(rawItems)
      ? rawItems
      : [rawItems];

    const posts: SubstackPost[] = items
      .filter((item) => {
        const title = (item.title ?? "").toLowerCase();
        return title !== "coming soon";
      })
      .map((item) => {
        const encoded = item["content:encoded"] ?? "";
        return {
          title: decodeHtmlEntities(item.title ?? ""),
          description: decodeHtmlEntities(item.description ?? ""),
          link: item.link ?? "",
          pubDate: item.pubDate ?? "",
          categories: Array.isArray(item.category)
            ? item.category
            : [item.category].filter((c): c is string => Boolean(c)),
          thumbnail: extractFirstImage(encoded),
          slug: extractSlug(item.link ?? ""),
          content: sanitizeHtml(encoded),
        };
      });

    return posts.length > 0 ? posts : FALLBACK_POSTS;
  } catch {
    return FALLBACK_POSTS;
  }
}

export async function getPostBySlug(
  slug: string
): Promise<SubstackPost | null> {
  const posts = await getPosts();
  return posts.find((p) => p.slug === slug) ?? null;
}
