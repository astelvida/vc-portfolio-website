import { SITE } from "@/data/site";
import { getPosts } from "@/lib/substack";

const BASE_URL = SITE.url;

export const revalidate = 3600;

// Escapes ]]> so a post title or description can never break out of its CDATA block.
function cdata(value: string): string {
  return `<![CDATA[${value.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
}

function toRfc822(pubDate: string): string {
  const parsed = new Date(pubDate);
  return Number.isNaN(parsed.getTime())
    ? new Date().toUTCString()
    : parsed.toUTCString();
}

export async function GET() {
  // Live Substack feed. getPosts() carries its own fallback, so an outage
  // degrades to real published essays rather than blanking the feed.
  const posts = await getPosts();

  const items = posts
    .map(
      (post) => `
    <item>
      <title>${cdata(post.title)}</title>
      <description>${cdata(post.description)}</description>
      <link>${BASE_URL}/writing/${post.slug}</link>
      <guid isPermaLink="true">${BASE_URL}/writing/${post.slug}</guid>
      <pubDate>${toRfc822(post.pubDate)}</pubDate>
    </item>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sevda Anefi — Signals Over Stories</title>
    <description>Early-stage European AI investing</description>
    <link>${BASE_URL}</link>
    <atom:link href="${BASE_URL}/feed" rel="self" type="application/rss+xml"/>
    <language>en</language>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  });
}
