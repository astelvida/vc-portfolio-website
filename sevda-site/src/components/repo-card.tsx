import type { GitHubRepo } from "@/lib/github";

function formatRelative(iso: string): string {
  if (!iso) return "";
  const then = new Date(iso).getTime();
  if (Number.isNaN(then)) return "";
  const days = Math.floor((Date.now() - then) / 86_400_000);
  if (days <= 0) return "updated today";
  if (days === 1) return "updated 1d ago";
  if (days < 30) return `updated ${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `updated ${months}mo ago`;
  return `updated ${Math.floor(days / 365)}y ago`;
}

export function RepoCard({ repo }: { repo: GitHubRepo }) {
  const updated = formatRelative(repo.updatedAt);

  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-border bg-surface transition-all duration-[250ms] hover:-translate-y-0.5 hover:border-border-hover hover:shadow-lg"
    >
      {/* Image — prod screenshot, or GitHub repo preview card */}
      <div className="relative aspect-[16/9] overflow-hidden bg-border-subtle">
        <img
          src={repo.image}
          alt={repo.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
        />
      </div>

      {/* Header bar — language · stars · last updated */}
      <div className="flex items-center justify-between border-b border-border px-4 py-3">
        <span className="font-mono text-[10px] font-semibold tracking-[0.06em] text-text-muted">
          {repo.language ?? "REPO"}
        </span>
        <span className="flex items-center gap-3 font-mono text-[10px] tracking-[0.06em] text-text-faint">
          {repo.stars > 0 && <span>{repo.stars} stars</span>}
          {updated && <span>{updated}</span>}
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="font-display text-base font-bold tracking-[-0.04em] text-text">
          {repo.name}
        </h3>
        <p className="font-body text-sm font-light leading-[1.6] text-text-muted">
          {repo.description || "View the repository on GitHub."}
        </p>
      </div>
    </a>
  );
}
