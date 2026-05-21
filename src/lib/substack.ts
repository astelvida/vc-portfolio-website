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

export const FALLBACK_POSTS: SubstackPost[] = [
  {
    title: "Score the Thesis, Not the Company",
    description: "Why I built a dual-rubric scoring model.",
    link: "https://signalsoverstories.substack.com/",
    pubDate: "2026-03-31",
    categories: ["Framework"],
    thumbnail: null,
    slug: "",
    content: "",
  },
  {
    title: "The Invisible Giant: Europe's Ownership Gap",
    description:
      "Europe's structural disadvantage is an early-stage advantage.",
    link: "https://signalsoverstories.substack.com/",
    pubDate: "2026-02-12",
    categories: ["Memo"],
    thumbnail: null,
    slug: "",
    content: "",
  },
  {
    title: "SaaSpocalypse: Who Survives Outcome Pricing",
    description: "Mapping vertical AI on pricing risk.",
    link: "https://signalsoverstories.substack.com/",
    pubDate: "2026-01-28",
    categories: ["Analysis"],
    thumbnail: null,
    slug: "",
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
