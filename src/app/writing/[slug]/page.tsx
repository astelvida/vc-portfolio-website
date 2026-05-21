import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts } from "@/lib/substack";
import { CategoryBadge } from "@/components/category-badge";
import { SectionWrapper } from "@/components/section-wrapper";
import { ProseContent } from "../_components/prose-content";
import { PostCard } from "../_components/post-card";

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((p) => p.slug === slug) ?? null;
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: `${post.title} | Sevda Anefi`,
      description: post.description,
      type: "article",
      ...(post.thumbnail && { images: [{ url: post.thumbnail }] }),
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const allPosts = await getPosts();
  const post = allPosts.find((p) => p.slug === slug) ?? null;
  if (!post) notFound();

  const relatedPosts = allPosts
    .filter((p) => p.slug && p.slug !== slug)
    .slice(0, 2);

  return (
    <div className="flex flex-col gap-12">
      {/* Back link */}
      <SectionWrapper>
        <Link
          href="/writing"
          className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold tracking-[0.06em] text-accent transition-colors hover:text-accent/80"
        >
          &larr; WRITING
        </Link>
      </SectionWrapper>

      {/* Hero image */}
      <SectionWrapper delay={70}>
        {post.thumbnail ? (
          <div className="overflow-hidden rounded-[10px]">
            <img
              src={post.thumbnail}
              alt={post.title}
              loading="eager"
              className="aspect-[21/9] w-full object-cover"
            />
          </div>
        ) : (
          <div className="flex aspect-[21/9] items-center justify-center overflow-hidden rounded-[10px] bg-gradient-to-br from-border-subtle to-border">
            <span className="font-display text-6xl font-bold tracking-[-0.04em] text-text-faint/30">
              SOS
            </span>
          </div>
        )}
      </SectionWrapper>

      {/* Meta + Title */}
      <SectionWrapper delay={140}>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            {post.categories.map((cat) => (
              <CategoryBadge key={cat} category={cat} />
            ))}
            <span className="font-mono text-[10px] tracking-[0.06em] text-text-faint">
              {new Date(post.pubDate).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <h1 className="font-display text-3xl font-extrabold tracking-[-0.04em] text-text md:text-4xl">
            {post.title}
          </h1>
          <p className="max-w-[520px] font-body text-[15px] font-light leading-[1.7] text-text-muted">
            {post.description}
          </p>
        </div>
      </SectionWrapper>

      {/* Article content */}
      <SectionWrapper delay={210}>
        <ProseContent html={post.content} />
      </SectionWrapper>

      {/* Original on Substack */}
      <SectionWrapper delay={280}>
        <div className="flex items-center gap-2 border-t border-border pt-8">
          <a
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] font-semibold tracking-[0.06em] text-accent transition-colors hover:text-accent/80"
          >
            Read on Substack &rarr;
          </a>
        </div>
      </SectionWrapper>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <SectionWrapper delay={350}>
          <div className="flex flex-col gap-6">
            <h2 className="font-display text-xl font-bold tracking-[-0.04em] text-text">
              More writing
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {relatedPosts.map((p) => (
                <PostCard key={p.slug || p.title} post={p} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      )}
    </div>
  );
}
