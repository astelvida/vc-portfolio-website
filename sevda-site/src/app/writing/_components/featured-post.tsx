import Link from "next/link";
import type { SubstackPost } from "@/types/substack";
import { CategoryBadge } from "@/components/category-badge";

export function FeaturedPost({ post }: { post: SubstackPost }) {
  const hasImage = Boolean(post.thumbnail);
  const href = post.slug ? `/writing/${post.slug}` : post.link;
  const isExternal = !post.slug;

  const Wrapper = isExternal ? "a" : Link;
  const linkProps = isExternal
    ? { href, target: "_blank" as const, rel: "noopener noreferrer" }
    : { href };

  return (
    <Wrapper
      {...linkProps}
      className="group block overflow-hidden rounded-[10px] border border-border bg-surface transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-border-hover hover:shadow-lg"
    >
      {/* Image */}
      <div className="relative aspect-[21/9] overflow-hidden bg-border-subtle">
        {hasImage ? (
          <img
            src={post.thumbnail!}
            alt={post.title}
            loading="eager"
            className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-border-subtle to-border">
            <span className="font-display text-6xl font-bold tracking-[-0.04em] text-text-faint/30">
              SOS
            </span>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Content over image */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-3 p-6 md:p-8">
          <div className="flex items-center gap-3">
            {post.categories[0] && (
              <CategoryBadge
                category={post.categories[0]}
                variant="overlay"
              />
            )}
            <span className="font-mono text-[10px] tracking-[0.06em] text-white/70">
              {new Date(post.pubDate).toLocaleDateString("en-GB", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </span>
          </div>
          <h2 className="font-display text-2xl font-bold tracking-[-0.04em] text-white md:text-3xl">
            {post.title}
          </h2>
          <p className="max-w-[520px] font-body text-sm font-light leading-[1.6] text-white/80">
            {post.description}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
