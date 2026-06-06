import Link from "next/link";
import type { SubstackPost } from "@/types/substack";
import { CategoryBadge } from "@/components/category-badge";

export function PostCard({ post }: { post: SubstackPost }) {
  const href = post.slug ? `/writing/${post.slug}` : post.link;
  const isExternal = !post.slug;

  const Wrapper = isExternal ? "a" : Link;
  const linkProps = isExternal
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };

  return (
    <Wrapper
      {...linkProps}
      className="group flex flex-col overflow-hidden border border-border bg-surface transition-colors duration-200 hover:border-border-hover"
    >
      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="relative aspect-[16/9] overflow-hidden border-b border-border bg-border-subtle">
          <img
            src={post.thumbnail}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
        </div>
      )}

      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        {post.categories[0] ? (
          <CategoryBadge category={post.categories[0]} />
        ) : (
          <span />
        )}
        <span className="font-mono text-[10px] tracking-[0.06em] text-text-faint">
          {new Date(post.pubDate).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-display text-base font-extrabold tracking-[-0.03em] text-text transition-colors group-hover:text-accent">
          {post.title}
        </h3>
        <p className="line-clamp-2 font-body text-sm font-light leading-[1.6] text-text-muted">
          {post.description}
        </p>
      </div>
    </Wrapper>
  );
}
