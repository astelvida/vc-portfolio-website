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
        <div className="flex flex-col gap-5">
          <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">
            [ WRITING ]
          </span>
          <h1 className="font-display text-[40px] font-extrabold leading-[1.0] tracking-[-0.045em] text-text sm:text-[54px] md:text-[64px]">
            Signals over <span className="text-accent">stories.</span>
          </h1>
          <p className="max-w-[560px] font-body text-[15px] font-light leading-[1.7] text-text-muted md:text-[16px]">
            Essays, frameworks, and memos on European AI investing — published
            on Signals Over Stories. Filings over feelings, every issue.
          </p>
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
