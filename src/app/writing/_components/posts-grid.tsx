"use client";

import { useMemo, useState } from "react";
import type { SubstackPost } from "@/types/substack";
import { PostCard } from "./post-card";

const INITIAL_COUNT = 6;

export function PostsGrid({ posts }: { posts: SubstackPost[] }) {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    for (const post of posts) {
      for (const cat of post.categories) {
        tags.add(cat);
      }
    }
    return Array.from(tags).sort();
  }, [posts]);

  const filteredPosts = useMemo(
    () =>
      activeTag
        ? posts.filter((p) => p.categories.includes(activeTag))
        : posts,
    [posts, activeTag]
  );

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  function handleTagClick(tag: string | null) {
    setActiveTag(tag);
    setVisibleCount(INITIAL_COUNT);
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Section header */}
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="font-mono text-[10px] font-semibold tracking-[0.22em] text-text-muted">
          [ ALL POSTS ]
        </span>
        <span className="font-mono text-[10px] tracking-[0.06em] text-text-faint">
          {filteredPosts.length} {filteredPosts.length === 1 ? "POST" : "POSTS"}
        </span>
      </div>

      {/* Tag filter pills */}
      {allTags.length > 1 && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleTagClick(null)}
            className={`border px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.06em] transition-colors duration-200 ${
              activeTag === null
                ? "border-accent bg-accent text-white"
                : "border-border text-text-muted hover:border-border-hover hover:text-text"
            }`}
          >
            ALL
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`border px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.06em] transition-colors duration-200 ${
                activeTag === tag
                  ? "border-accent bg-accent text-white"
                  : "border-border text-text-muted hover:border-border-hover hover:text-text"
              }`}
            >
              {tag.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {/* Post grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {visiblePosts.map((post) => (
          <PostCard key={post.slug || post.title} post={post} />
        ))}
      </div>

      {/* Load more */}
      {hasMore && (
        <div className="flex justify-center">
          <button
            onClick={() => setVisibleCount((c) => c + INITIAL_COUNT)}
            className="border border-border bg-surface px-6 py-3 font-mono text-[11px] font-semibold tracking-[0.06em] text-text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
          >
            LOAD MORE +
          </button>
        </div>
      )}
    </div>
  );
}
