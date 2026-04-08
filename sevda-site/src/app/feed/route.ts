const BASE_URL = "https://sevda.anefi.vc";

const POSTS = [
  {
    title: "Score the Thesis, Not the Company",
    description: "Why I built a dual-rubric scoring model.",
    link: `${BASE_URL}/writing`,
    pubDate: "Mon, 31 Mar 2026 00:00:00 GMT",
  },
  {
    title: "The Invisible Giant: Europe's Ownership Gap",
    description:
      "Europe's structural disadvantage is an early-stage advantage.",
    link: `${BASE_URL}/writing`,
    pubDate: "Thu, 12 Feb 2026 00:00:00 GMT",
  },
  {
    title: "SaaSpocalypse: Who Survives Outcome Pricing",
    description: "Mapping vertical AI on pricing risk.",
    link: `${BASE_URL}/writing`,
    pubDate: "Wed, 28 Jan 2026 00:00:00 GMT",
  },
];

export async function GET() {
  const items = POSTS.map(
    (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <link>${post.link}</link>
      <pubDate>${post.pubDate}</pubDate>
    </item>`
  ).join("");

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
