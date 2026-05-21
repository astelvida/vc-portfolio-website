export interface GitHubRepo {
  name: string;
  fullName: string;
  description: string;
  url: string;
  homepage: string | null;
  language: string | null;
  stars: number;
  updatedAt: string;
  image: string;
}

// VC / investing-related repos to surface on the /projects page.
// Public repos only — fetched live from the GitHub API.
const VC_REPOS: string[] = [
  "astelvida/ic-sim",
  "astelvida/eu-vc-signals-mcp",
  "astelvida/llmops-testing-stack-article",
  "astelvida/lp-live-deck",
  "astelvida/ai_scout",
  "astelvida/signal-portraits",
];

// Prod screenshot when the repo has a live deployment, else GitHub's
// auto-generated repo social-preview card. Both are keyless.
function repoImage(fullName: string, homepage: string | null): string {
  if (homepage) {
    return `https://image.thum.io/get/width/1200/crop/900/${homepage}`;
  }
  return `https://opengraph.githubassets.com/1/${fullName}`;
}

interface RawRepo {
  name?: string;
  full_name?: string;
  description?: string | null;
  html_url?: string;
  homepage?: string | null;
  language?: string | null;
  stargazers_count?: number;
  pushed_at?: string;
}

export const FALLBACK_REPOS: GitHubRepo[] = [
  {
    name: "ic-sim",
    fullName: "astelvida/ic-sim",
    description:
      "Investment committee simulator — four AI committee members, one deal, ten turns, a scored transcript at the end.",
    url: "https://github.com/astelvida/ic-sim",
    homepage: null,
    language: "TypeScript",
    stars: 0,
    updatedAt: "",
    image: "https://opengraph.githubassets.com/1/astelvida/ic-sim",
  },
  {
    name: "eu-vc-signals-mcp",
    fullName: "astelvida/eu-vc-signals-mcp",
    description:
      "An MCP server bundling six free public sources behind a single install — built for an EU AI investor.",
    url: "https://github.com/astelvida/eu-vc-signals-mcp",
    homepage: null,
    language: "Python",
    stars: 0,
    updatedAt: "",
    image: "https://opengraph.githubassets.com/1/astelvida/eu-vc-signals-mcp",
  },
];

export async function getRepos(): Promise<GitHubRepo[]> {
  const results = await Promise.allSettled(
    VC_REPOS.map(async (fullName): Promise<GitHubRepo> => {
      const res = await fetch(`https://api.github.com/repos/${fullName}`, {
        headers: {
          Accept: "application/vnd.github+json",
          // GitHub rejects requests without a User-Agent.
          "User-Agent": "sevda-site",
        },
        next: { revalidate: 3600 },
      });
      if (!res.ok) {
        throw new Error(`GitHub ${fullName}: ${res.status}`);
      }
      const raw: RawRepo = await res.json();
      const resolvedName = raw.full_name ?? fullName;
      const homepage =
        raw.homepage && raw.homepage.trim().length > 0
          ? raw.homepage.trim()
          : null;
      return {
        name: raw.name ?? fullName.split("/")[1],
        fullName: resolvedName,
        description: raw.description ?? "",
        url: raw.html_url ?? `https://github.com/${resolvedName}`,
        homepage,
        language: raw.language ?? null,
        stars: raw.stargazers_count ?? 0,
        updatedAt: raw.pushed_at ?? "",
        image: repoImage(resolvedName, homepage),
      };
    })
  );

  const repos = results
    .filter(
      (r): r is PromiseFulfilledResult<GitHubRepo> => r.status === "fulfilled"
    )
    .map((r) => r.value)
    .sort((a, b) => b.stars - a.stars);

  return repos.length > 0 ? repos : FALLBACK_REPOS;
}
