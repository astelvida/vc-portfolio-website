import type { Metadata } from "next";
import { SectionWrapper } from "@/components/section-wrapper";
import { getPosts } from "@/lib/substack";
import { FeaturedPost } from "./_components/featured-post";
import { PostsGrid } from "./_components/posts-grid";

export const revalidate = 3600;

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

export default async function WritingPage() {
  const posts = await getPosts();
  const [featured, ...rest] = posts;

  return (
    <div className="flex flex-col gap-14">
      {/* Header */}
      <SectionWrapper>
        <div className="flex flex-col gap-2">
          <div className="flex items-baseline gap-3">
            <h1 className="font-display text-4xl font-extrabold tracking-[-0.04em] text-text">
              Blog
            </h1>
            <span className="font-mono text-[11px] tracking-[0.06em] text-text-faint">
              / Featured
            </span>
          </div>
        </div>
      </SectionWrapper>

      {/* Featured post */}
      {featured && (
        <SectionWrapper delay={70}>
          <FeaturedPost post={featured} />
        </SectionWrapper>
      )}

      {/* All posts with filtering */}
      {rest.length > 0 && (
        <SectionWrapper delay={140}>
          <PostsGrid posts={rest} />
        </SectionWrapper>
      )}
    </div>
  );
}
