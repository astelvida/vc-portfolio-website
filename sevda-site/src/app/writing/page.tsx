import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import type { SubstackPost } from "@/types/substack";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on European AI investing — frameworks, memos, and analysis from Signals Over Stories.",
  openGraph: {
    title: "Writing | Sevda Anefi",
    description:
      "Essays on European AI investing from Signals Over Stories on Substack.",
  },
};

const FALLBACK_POSTS: SubstackPost[] = [
  {
    title: "Score the Thesis, Not the Company",
    description: "Why I built a dual-rubric scoring model.",
    link: "https://signalsoverstories.substack.com/",
    pubDate: "2026-03-31",
    categories: ["Framework"],
    thumbnail: null,
  },
  {
    title: "The Invisible Giant: Europe's Ownership Gap",
    description:
      "Europe's structural disadvantage is an early-stage advantage.",
    link: "https://signalsoverstories.substack.com/",
    pubDate: "2026-02-12",
    categories: ["Memo"],
    thumbnail: null,
  },
  {
    title: "SaaSpocalypse: Who Survives Outcome Pricing",
    description: "Mapping vertical AI on pricing risk.",
    link: "https://signalsoverstories.substack.com/",
    pubDate: "2026-01-28",
    categories: ["Analysis"],
    thumbnail: null,
  },
];

function categoryBadgeClass(category: string): string {
  if (category === "Framework") return "bg-thesis-cai/8 text-thesis-cai";
  if (category === "Memo") return "bg-thesis-inf/8 text-thesis-inf";
  return "bg-thesis-vai/8 text-thesis-vai";
}

async function getPosts(): Promise<SubstackPost[]> {
  try {
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/substack`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return FALLBACK_POSTS;
    const posts: SubstackPost[] = await res.json();
    return posts.length > 0 ? posts : FALLBACK_POSTS;
  } catch {
    return FALLBACK_POSTS;
  }
}

export default async function WritingPage() {
  const posts = await getPosts();

  return (
    <div className="flex flex-col gap-14">
      <SectionWrapper>
        <div className="flex flex-col gap-4">
          <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-text">
            WRITING
          </h1>
          <p className="max-w-[460px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
            Essays on European AI investing — frameworks, memos, and
            analysis from{" "}
            <a
              href="https://signalsoverstories.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors hover:text-accent/80"
            >
              Signals Over Stories
            </a>
            .
          </p>
        </div>
      </SectionWrapper>

      <div className="flex max-w-[700px] flex-col gap-3">
        {posts.map((post, i) => (
          <SectionWrapper key={post.title} delay={i * 70}>
            <div className="group rounded-[10px] border border-border bg-surface transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-border-hover hover:shadow-lg">
              <div className="flex items-center justify-between border-b border-border px-4 py-3">
                {post.categories[0] && (
                  <span
                    className={`rounded px-2 py-0.5 font-mono text-[10px] font-semibold ${categoryBadgeClass(post.categories[0])}`}
                  >
                    {post.categories[0]}
                  </span>
                )}
                <span className="font-mono text-[10px] tracking-[0.06em] text-text-faint">
                  {new Date(post.pubDate).toLocaleDateString("en-GB", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className="flex flex-col gap-3 p-6">
                <h2 className="font-display text-lg font-bold tracking-[-0.04em] text-text">
                  {post.title}
                </h2>
                <p className="font-body text-sm font-light leading-[1.6] text-text-muted">
                  {post.description}
                </p>
                <a
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-fit font-mono text-[11px] font-semibold tracking-[0.06em] text-accent transition-colors hover:text-accent/80"
                >
                  Read on Substack &rarr;
                </a>
              </div>
            </div>
          </SectionWrapper>
        ))}
      </div>
    </div>
  );
}
